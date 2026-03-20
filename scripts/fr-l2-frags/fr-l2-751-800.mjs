/** Level 2 FR 751–800 — math.fabs, modf, prod, remainder, isqrt, dist, fmod, exp, pow(0,0), tau, inf+1, float gotcha, underscores, literals, int/float, abs, divmod, round, max/min/sorted, sum, pow mod, bool */
export default {
  751: `math.fabs(-3.14) vaut 3.14 : valeur absolue toujours en float (contrairement à abs qui garde le type).

Débutant :
• fabs enlève le signe et renvoie un float.

Intermédiaire :
• abs(-3) → 3 (int) ; math.fabs(-3) → 3.0 (float).

Expert :
• fabs ne gère pas les complexes ; utiliser abs() pour ça.

Concepts clés :
• math.fabs = |x| en float garanti.

Distinctions clés :
• vs abs (préserve int pour int).

Fonctionnement :
• Conversion en float puis valeur absolue.

Exécution étape par étape :
1. -3.14.
2. fabs → 3.14.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• calculs nécessitant un float explicite.

Cas limites :
• fabs(0) → 0.0.

Considérations de performance :
• O(1).

Exemples :
• math.fabs(3.14) → 3.14

Remarques :
• Toujours importer math.`,
  752: `math.modf(3.75) vaut (0.75, 3.0) : partie fractionnaire puis partie entière (tuple de floats).

Débutant :
• modf sépare la virgule : 3.75 → 0.75 et 3.0.

Intermédiaire :
• Ordre : (fractionnel, entier). Le signe de la fraction suit le nombre.

Expert :
• math.modf(-3.75) → (-0.75, -3.0).

Concepts clés :
• modf(x) = (partie décimale, partie entière).

Distinctions clés :
• vs int() ; vs floor/trunc.

Fonctionnement :
• Décomposition en deux floats.

Exécution étape par étape :
1. 3.75.
2. modf → (0.75, 3.0).

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• séparer partie entière et décimale.

Cas limites :
• modf(3.0) → (0.0, 3.0).

Considérations de performance :
• O(1).

Exemples :
• math.modf(1.5) → (0.5, 1.0)

Remarques :
• « Fraction d'abord » — ordre inverse de ce qu'on attend souvent.`,
  753: `math.prod([2, 3, 4]) vaut 24 : produit de tous les éléments (Python 3.8+).

Débutant :
• prod multiplie tout : 2×3×4 = 24.

Intermédiaire :
• Équivalent à sum mais pour la multiplication. prod([]) → 1 (start par défaut).

Expert :
• Avant 3.8 : functools.reduce(operator.mul, itérable).

Concepts clés :
• prod = produit ; start par défaut = 1.

Distinctions clés :
• vs sum (addition).

Fonctionnement :
• Itération et multiplication cumulative.

Exécution étape par étape :
1. [2, 3, 4].
2. 1*2*3*4 → 24.

Ordre des opérations :
• Itération.

Cas d'utilisation courants :
• factorielle, produits de séries.

Cas limites :
• prod([]) → 1.

Considérations de performance :
• O(n).

Exemples :
• math.prod(range(1, 6)) → 120 (5!)

Remarques :
• Python 3.8+.`,
  754: `math.remainder(10, 3) vaut 1.0 : reste IEEE 754 (valeur la plus proche de zéro).

Débutant :
• remainder donne le reste de 10 par 3 → 1.0.

Intermédiaire :
• Toujours float. Peut être négatif (différent de %).

Expert :
• math.remainder(7, 4) → -1.0 (7 = 4×2 - 1, plus proche de zéro que +3).

Concepts clés :
• IEEE 754 remainder : quotient le plus proche de zéro.

Distinctions clés :
• vs % (signe du diviseur en Python).

Fonctionnement :
• Algorithme IEEE 754.

Exécution étape par étape :
1. 10, 3.
2. remainder → 1.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• compatibilité IEEE, calculs scientifiques.

Cas limites :
• remainder(10, 4) → 2.0.

Considérations de performance :
• O(1).

Exemples :
• 10 % 3 → 1 (int) ; remainder → 1.0 (float)

Remarques :
• Différent de % pour les négatifs.`,
  755: `math.isqrt(10) vaut 3 : racine carrée entière (floor de √10). Plus grand n tel que n² ≤ 10.

Débutant :
• isqrt donne la racine carrée en entier : 3²=9 ≤ 10 < 16.

Intermédiaire :
• Renvoie toujours int. Python 3.8+. Pas d'erreur d'arrondi float.

Expert :
• Pour grands entiers, plus fiable que int(math.sqrt(n)).

Concepts clés :
• isqrt(x) = floor(√x) en int exact.

Distinctions clés :
• vs math.sqrt (float) ; vs int(sqrt(...)).

Fonctionnement :
• Algorithme entier, pas de float intermédiaire.

Exécution étape par étape :
1. 10.
2. isqrt → 3.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• tests de primalité, grilles, algorithmes entiers.

Cas limites :
• isqrt(0) → 0 ; isqrt(9) → 3.

Considérations de performance :
• O(log n) pour grands n.

Exemples :
• math.isqrt(16) → 4

Remarques :
• Python 3.8+.`,
  756: `math.isqrt(16) vaut 4 : carré parfait, racine exacte en int.

Débutant :
• 16 = 4², donc isqrt(16) = 4.

Intermédiaire :
• math.sqrt(16) → 4.0 (float) ; isqrt(16) → 4 (int).

Expert :
• Pour tout carré n² : isqrt(n²) = n.

Concepts clés :
• Carré parfait → résultat exact.

Distinctions clés :
• isqrt renvoie int ; sqrt renvoie float.

Fonctionnement :
• Calcul exact, pas d'approximation.

Exécution étape par étape :
1. 16.
2. isqrt → 4.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• vérifier si un nombre est un carré parfait.

Cas limites :
• isqrt(25) → 5.

Considérations de performance :
• O(1) pour petits entiers.

Exemples :
• isqrt(100) → 10

Remarques :
• Préférer isqrt quand on veut un int.`,
  757: `math.dist([0,0], [3,4]) vaut 5.0 : distance euclidienne (théorème de Pythagore).

Débutant :
• √(3² + 4²) = √25 = 5. Triangle 3-4-5.

Intermédiaire :
• Fonctionne en n dimensions. Python 3.8+.

Expert :
• dist(p, q) = √(Σ(p[i]-q[i])²).

Concepts clés :
• Distance euclidienne entre deux points.

Distinctions clés :
• vs math.hypot (2D uniquement) ; dist accepte des séquences.

Fonctionnement :
• Formule Pythagore généralisée.

Exécution étape par étape :
1. [0,0], [3,4].
2. dist → 5.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• géométrie, machine learning, jeux.

Cas limites :
• dist([0,0,0], [1,1,1]) → √3 ≈ 1.732.

Considérations de performance :
• O(n) avec n = dimension.

Exemples :
• math.dist([1,1], [4,5]) → 5.0

Remarques :
• Python 3.8+.`,
  758: `math.fmod(10, 3) vaut 1.0 : modulo style C (reste flottant).

Débutant :
• 10 = 3×3 + 1, donc reste 1.0.

Intermédiaire :
• Toujours float. Pour positifs, même valeur que % mais en float.

Expert :
• Pour négatifs : fmod garde le signe du dividende ; % garde celui du diviseur.

Concepts clés :
• fmod = reste style C (signe du dividende).

Distinctions clés :
• vs % (Python : signe du diviseur).

Fonctionnement :
• Division flottante, reste selon C.

Exécution étape par étape :
1. 10, 3.
2. fmod → 1.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• compatibilité C/Java, calculs flottants.

Cas limites :
• fmod(-10, 3) → -1.0 ; -10 % 3 → 2.

Considérations de performance :
• O(1).

Exemples :
• math.fmod(10.5, 3) → 1.5

Remarques :
• Utiliser fmod pour comportement C.`,
  759: `math.fmod(-10, 3) vaut -1.0 : fmod garde le signe du dividende ; % garde celui du diviseur.

Débutant :
• fmod : signe de -10 → -1.0. % : signe de 3 → 2.

Intermédiaire :
• -10 = 3×(-3) + (-1) (fmod) ; -10 = 3×(-4) + 2 (%).

Expert :
• C, Java, JS : signe du dividende. Python % : signe du diviseur.

Concepts clés :
• Deux conventions de reste valides mathématiquement.

Distinctions clés :
• fmod vs % pour dividende négatif.

Fonctionnement :
• fmod utilise la convention C.

Exécution étape par étape :
1. -10, 3.
2. fmod → -1.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• portage de code C.

Cas limites :
• fmod(10, -3) : signe du dividende 10.

Considérations de performance :
• O(1).

Exemples :
• -10 % 3 → 2 (Python)

Remarques :
• Choisir selon le contexte.`,
  760: `math.exp(0) vaut 1.0 : e^0 = 1 (identité fondamentale).

Débutant :
• Toute base non nulle à la puissance 0 vaut 1.

Intermédiaire :
• math.exp(1) ≈ 2.718 (e). exp(x) plus précis que e**x.

Expert :
• Fonction exponentielle : croissance, décroissance, probas.

Concepts clés :
• e^0 = 1 par définition.

Distinctions clés :
• vs exp(1) = e ; vs 0**0 = 1 (convention).

Fonctionnement :
• Calcul e^x via routine optimisée.

Exécution étape par étape :
1. 0.
2. exp(0) → 1.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• modèles exponentiels, log.

Cas limites :
• exp(-1) ≈ 0.368.

Considérations de performance :
• O(1).

Exemples :
• math.exp(2) ≈ 7.389

Remarques :
• exp = inverse de log.`,
  761: `math.exp(1) vaut environ 2.718 : e^1 = e (nombre d'Euler).

Débutant :
• exp(1) = e ≈ 2,71828...

Intermédiaire :
• math.e donne la même valeur. e est irrationnel.

Expert :
• e = lim (1+1/n)^n. Base du logarithme naturel.

Concepts clés :
• e = constante d'Euler, base de ln.

Distinctions clés :
• vs math.pi ; vs nombre d'or φ ≈ 1.618.

Fonctionnement :
• Valeur prédéfinie ou calcul.

Exécution étape par étape :
1. 1.
2. exp(1) → 2.718...

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• intérêts composés, croissance.

Cas limites :
• exp(1) == math.e → True.

Considérations de performance :
• O(1).

Exemples :
• math.log(math.e) → 1.0

Remarques :
• e et π sont les constantes les plus importantes.`,
  762: `math.pow(0, 0) vaut 1.0 : convention Python/C (0^0 = 1).

Débutant :
• 0^0 est défini comme 1 en Python.

Intermédiaire :
• math.pow renvoie toujours float. 0**0 → 1 (int).

Expert :
• Mathématiquement indéterminé ; en informatique, 1 simplifie les formules.

Concepts clés :
• Convention 0^0 = 1 (IEEE 754, C).

Distinctions clés :
• vs 0**0 (int 1) ; math.pow → float 1.0.

Fonctionnement :
• Cas spécial dans pow.

Exécution étape par étape :
1. 0, 0.
2. pow → 1.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• polynômes, formules combinatoires.

Cas limites :
• pow(0, 1) → 0.0.

Considérations de performance :
• O(1).

Exemples :
• 0**0 → 1 (built-in)

Remarques :
• Cohérent avec la plupart des langages.`,
  763: `0 ** 0 vaut 1 en Python : convention du built-in **.

Débutant :
• L'opérateur ** définit 0**0 = 1.

Intermédiaire :
• Résultat int (pas float comme math.pow).

Expert :
• Simplifie les algorithmes (ex. évaluation de polynômes).

Concepts clés :
• 0**0 = 1 par convention Python.

Distinctions clés :
• 0**0 → 1 (int) ; math.pow(0,0) → 1.0 (float).

Fonctionnement :
• Cas spécial dans l'évaluateur **.

Exécution étape par étape :
1. 0, 0.
2. ** → 1.

Ordre des opérations :
• **.

Cas d'utilisation courants :
• boucles, formules avec puissances.

Cas limites :
• 0**1 → 0 ; 1**0 → 1.

Considérations de performance :
• O(1).

Exemples :
• type(0**0) → int

Remarques :
• Choix de conception délibéré.`,
  764: `math.tau vaut environ 6,283 : τ = 2π (tour complet en radians).

Débutant :
• tau = 2 × pi. Un tour = τ radians = 360°.

Intermédiaire :
• τ = circonférence / rayon. Python 3.6+.

Expert :
• Certains préfèrent τ car quart de tour = τ/4 (plus intuitif que π/2).

Concepts clés :
• τ = 2π = constante du cercle.

Distinctions clés :
• vs math.pi (demi-tour).

Fonctionnement :
• Constante prédéfinie.

Exécution étape par étape :
1. math.tau.
2. → 6.283...

Ordre des opérations :
• Accès.

Cas d'utilisation courants :
• trigonométrie, angles.

Cas limites :
• math.tau / 2 == math.pi → True.

Considérations de performance :
• O(1).

Exemples :
• math.tau ≈ 6.283185307

Remarques :
• Python 3.6+.`,
  765: `math.inf + 1 vaut inf : l'infini plus un nombre fini reste infini.

Débutant :
• inf + n'importe quel nombre = inf.

Intermédiaire :
• inf - inf = nan (indéterminé). inf * 0 = nan.

Expert :
• Utile comme borne initiale pour min (tout nombre est plus petit).

Concepts clés :
• inf + fini = inf (IEEE 754).

Distinctions clés :
• vs inf - inf = nan.

Fonctionnement :
• Règles arithmétiques IEEE 754.

Exécution étape par étape :
1. inf, 1.
2. + → inf.

Ordre des opérations :
• +.

Cas d'utilisation courants :
• algorithmes de min/max.

Cas limites :
• inf * 2 = inf.

Considérations de performance :
• O(1).

Exemples :
• math.inf + 10**100 → inf

Remarques :
• inf n'est pas un nombre mais une valeur spéciale.`,
  766: `0.1 + 0.2 == 0.3 vaut False : piège classique des flottants (représentation binaire).

Débutant :
• 0.1 et 0.2 ne sont pas représentables exactement en binaire ; la somme diffère de 0.3.

Intermédiaire :
• 0.1 + 0.2 → 0.30000000000000004. Utiliser math.isclose().

Expert :
• IEEE 754 : erreurs d'arrondi cumulatives. Tous les langages sont concernés.

Concepts clés :
• Les flottants sont des approximations ; == est dangereux.

Distinctions clés :
• vs Decimal pour arithmétique décimale exacte.

Fonctionnement :
• Stockage binaire, pas décimal.

Exécution étape par étape :
1. 0.1, 0.2 (approximations).
2. + → 0.3000...04.
3. == 0.3 → False.

Ordre des opérations :
• + puis ==.

Cas d'utilisation courants :
• Ne jamais utiliser == pour des float ; utiliser isclose.

Cas limites :
• 2/3 + 1/3 == 1.0 peut être True (par chance).

Considérations de performance :
• isclose légèrement plus coûteux que ==.

Exemples :
• math.isclose(0.1+0.2, 0.3) → True

Remarques :
• Le piège flottant le plus connu.`,
  767: `0.1 + 0.2 vaut 0.30000000000000004 : résultat réel dû à la représentation binaire.

Débutant :
• Pas exactement 0.3 à cause des arrondis.

Intermédiaire :
• En binaire, 0.1 et 0.2 ont des développements infinis ; la somme accumule une micro-erreur.

Expert :
• repr(0.1+0.2) affiche la valeur réelle. Decimal('0.1')+Decimal('0.2') = Decimal('0.3').

Concepts clés :
• Float = approximation ; pas d'exactitude décimale.

Distinctions clés :
• vs Decimal ; vs Fraction.

Fonctionnement :
• Addition IEEE 754 avec arrondis.

Exécution étape par étape :
1. 0.1, 0.2 (binaire).
2. + → 0.3000...04.

Ordre des opérations :
• +.

Cas d'utilisation courants :
• Comprendre pourquoi == échoue.

Cas limites :
• format(0.1+0.2, '.17g') → '0.30000000000000004'.

Considérations de performance :
• Addition native.

Exemples :
• Decimal('0.1')+Decimal('0.2') == Decimal('0.3') → True

Remarques :
• Solution : Decimal ou isclose.`,
  768: `1_000_000 vaut 1000000 : les underscores dans les littéraux numériques sont ignorés (Python 3.6+).

Débutant :
• 1_000_000 = 1000000. Lisibilité uniquement.

Intermédiaire :
• Marchent pour int, float, hex (0xFF_FF), binaire (0b1010_0101).

Expert :
• Interdits en début, fin, ou autour du point décimal.

Concepts clés :
• Séparateurs visuels ; aucun effet à l'exécution.

Distinctions clés :
• vs 1000000 (identique).

Fonctionnement :
• Le lexer ignore les _ lors du parsing.

Exécution étape par étape :
1. Littéral 1_000_000.
2. → 1000000.

Ordre des opérations :
• Parsing.

Cas d'utilisation courants :
• Grands nombres lisibles.

Cas limites :
• 3.14_15_93 → 3.141593.

Considérations de performance :
• Aucun coût à l'exécution.

Exemples :
• 0xFF_FF → 65535

Remarques :
• Python 3.6+.`,
  769: `1_000 + 2_000 vaut 3000 : les underscores sont ignorés, le calcul porte sur les vrais nombres.

Débutant :
• 1000 + 2000 = 3000. Le résultat n'a pas d'underscores.

Intermédiaire :
• str(1_000) → '1000'. Les _ n'apparaissent jamais en sortie.

Expert :
• Uniquement dans le code source.

Concepts clés :
• Parsing : _ supprimés avant évaluation.

Distinctions clés :
• vs chaîne "1_000" (différent).

Fonctionnement :
• 1_000 → 1000, 2_000 → 2000, puis +.

Exécution étape par étape :
1. 1_000, 2_000.
2. + → 3000.

Ordre des opérations :
• Parsing puis +.

Cas d'utilisation courants :
• Calculs avec nombres formatés.

Cas limites :
• 1_000 * 1_000 → 1000000.

Considérations de performance :
• Identique à 1000+2000.

Exemples :
• type(1_000) → int

Remarques :
• Les _ sont purement cosmétiques.`,
  770: `0b1010 vaut 10 : littéral binaire (préfixe 0b).

Débutant :
• 0b suivi de 0 et 1 = nombre en base 2.

Intermédiaire :
• 0b1010 = 1×8 + 0×4 + 1×2 + 0×1 = 10.

Expert :
• bin(10) → '0b1010'. Python 2.6+.

Concepts clés :
• 0b = base 2.

Distinctions clés :
• vs 0o (octal) ; vs 0x (hex).

Fonctionnement :
• Parsing du littéral binaire.

Exécution étape par étape :
1. 0b1010.
2. → 10.

Ordre des opérations :
• Parsing.

Cas d'utilisation courants :
• masques binaires, bits.

Cas limites :
• 0b11111111 → 255.

Considérations de performance :
• O(1).

Exemples :
• bin(42) → '0b101010'

Remarques :
• Seuls 0 et 1 après 0b.`,
  771: `0o12 vaut 10 : littéral octal (préfixe 0o). Base 8.

Débutant :
• 0o12 = 1×8 + 2×1 = 10 en décimal.

Intermédiaire :
• Chiffres 0-7. oct(10) → '0o12'.

Expert :
• Ancien format 012 (Python 2) supprimé en Python 3.

Concepts clés :
• 0o = base 8.

Distinctions clés :
• vs 0b ; vs 0x.

Fonctionnement :
• Parsing octal.

Exécution étape par étape :
1. 0o12.
2. → 10.

Ordre des opérations :
• Parsing.

Cas d'utilisation courants :
• permissions Unix (0o755).

Cas limites :
• 0o10 → 8.

Considérations de performance :
• O(1).

Exemples :
• oct(8) → '0o10'

Remarques :
• 0o ou 0O.`,
  772: `0xFF vaut 255 : littéral hexadécimal (préfixe 0x). Base 16.

Débutant :
• 0xFF = 15×16 + 15 = 255.

Intermédiaire :
• Chiffres 0-9, A-F (ou a-f). hex(255) → '0xff'.

Expert :
• Couleurs, adresses, encodages binaires.

Concepts clés :
• 0x = base 16.

Distinctions clés :
• vs 0b ; vs 0o.

Fonctionnement :
• Parsing hexadécimal.

Exécution étape par étape :
1. 0xFF.
2. → 255.

Ordre des opérations :
• Parsing.

Cas d'utilisation courants :
• couleurs (#FF0000), masques.

Cas limites :
• 0x10 → 16.

Considérations de performance :
• O(1).

Exemples :
• hex(255) → '0xff'

Remarques :
• 0x ou 0X.`,
  773: `int(1e3) vaut 1000 : notation scientifique 1e3 = 10³, int tronque vers zéro.

Débutant :
• 1e3 = 1000.0 (float) ; int(1000.0) = 1000.

Intermédiaire :
• 1e3, 2.5e2 sont des floats. int() enlève la partie décimale.

Expert :
• int(1e20) fonctionne ; les entiers Python n'ont pas de limite pratique.

Concepts clés :
• 1eN = 10^N en float ; int() convertit.

Distinctions clés :
• vs 1000 (int direct) ; vs float(1000).

Fonctionnement :
• 1e3 → 1000.0, int → 1000.

Exécution étape par étape :
1. 1e3 → 1000.0.
2. int(...) → 1000.

Ordre des opérations :
• Littéral puis int().

Cas d'utilisation courants :
• grands nombres lisibles (1e6, 1e9).

Cas limites :
• int(1.9e3) → 1900.

Considérations de performance :
• O(1).

Exemples :
• 2.5e2 → 250.0

Remarques :
• Toujours float avant int().`,
  774: `La notation scientifique (ex. 1e3) produit toujours un float.

Débutant :
• 1e3, 2.5e-1 sont des float, pas des int.

Intermédiaire :
• type(1e3) → float. Même 1e0 = 1.0.

Expert :
• Pour avoir un int : int(1e3).

Concepts clés :
• 1eN = float par conception.

Distinctions clés :
• vs 1000 (int) ; vs 1e3 (float).

Fonctionnement :
• Le lexer produit un float pour toute notation e.

Exécution étape par étape :
1. 1e3.
2. → 1000.0 (float).

Ordre des opérations :
• Parsing.

Cas d'utilisation courants :
• constantes physiques, grands nombres.

Cas limites :
• 1e0 → 1.0 ; 1e-3 → 0.001.

Considérations de performance :
• O(1).

Exemples :
• type(2.5e2) → float

Remarques :
• Pas de notation scientifique pour int.`,
  775: `type(1e3) vaut <class 'float'> : la notation scientifique donne un float.

Débutant :
• 1e3 est un float, pas un int.

Intermédiaire :
• Toute forme xey produit un float.

Expert :
• 1e3 == 1000.0 ; type(1e3) is float.

Concepts clés :
• Notation e → float systématiquement.

Distinctions clés :
• vs type(1000) → int.

Fonctionnement :
• Règle du lexer Python.

Exécution étape par étape :
1. 1e3.
2. type(...) → float.

Ordre des opérations :
• Littéral puis type().

Cas d'utilisation courants :
• Vérifier le type après lecture.

Cas limites :
• type(1e0) → float.

Considérations de performance :
• O(1).

Exemples :
• isinstance(1e3, float) → True

Remarques :
• Cohérent avec la spécification.`,
  776: `Les entiers Python n'ont pas de limite pratique : 10**1000 fonctionne.

Débutant :
• Python gère les très grands entiers (arbitrary precision).

Intermédiaire :
• Mémoire seule limite. 10**1000000 peut prendre du temps.

Expert :
• Les int utilisent des « chiffres » en base 2^30 ; pas de overflow.

Concepts clés :
• Arbitrary precision pour les int.

Distinctions clés :
• vs float (overflow → inf) ; vs C/Java (overflow silencieux).

Fonctionnement :
• Représentation dynamique en mémoire.

Exécution étape par étape :
1. 10**1000.
2. → très grand int.

Ordre des opérations :
• **.

Cas d'utilisation courants :
• crypto, combinatoire, calcul exact.

Cas limites :
• Mémoire et temps pour 10**10**6.

Considérations de performance :
• Opérations sur grands int plus lentes.

Exemples :
• len(str(10**1000)) → 1001

Remarques :
• Avantage majeur de Python.`,
  777: `Un float peut dépasser et devenir inf : 1e308 * 10 → inf.

Débutant :
• Au-delà d'une certaine taille, float → inf (overflow).

Intermédiaire :
• sys.float_info.max ≈ 1.8e308. Au-delà : inf.

Expert :
• Pas d'exception ; inf est une valeur float valide.

Concepts clés :
• Float a une plage limitée ; overflow → inf.

Distinctions clés :
• vs int (pas d'overflow).

Fonctionnement :
• IEEE 754 : overflow → inf.

Exécution étape par étape :
1. 1e308, 10.
2. * → inf.

Ordre des opérations :
• *.

Cas d'utilisation courants :
• calculs scientifiques, détecter overflow.

Cas limites :
• 1e309 → inf.

Considérations de performance :
• O(1).

Exemples :
• math.isfinite(1e400) → False

Remarques :
• Vérifier avec isfinite si besoin.`,
  778: `sys.float_info.max donne le plus grand float fini (~1.8e308).

Débutant :
• float_info.max = plus grande valeur float avant inf.

Intermédiaire :
• Au-delà : overflow → inf. sys.float_info.min pour le plus petit positif.

Expert :
• Attribut du module sys. Valeur dépend de la plateforme (souvent IEEE 754 double).

Concepts clés :
• Borne supérieure des float finis.

Distinctions clés :
• vs inf ; vs int (illimité).

Fonctionnement :
• Constante système.

Exécution étape par étape :
1. import sys.
2. sys.float_info.max → ~1.8e308.

Ordre des opérations :
• Accès attribut.

Cas d'utilisation courants :
• vérifier les bornes avant calculs.

Cas limites :
• sys.float_info.max + 1e292 peut encore être fini.

Considérations de performance :
• O(1).

Exemples :
• sys.float_info.min pour le plus petit positif

Remarques :
• import sys requis.`,
  779: `Certaines fractions décimales répétées en binaire : 1/3, 2/3 ne sont pas exactes en float.

Débutant :
• 1/3 = 0.333... en décimal ; en binaire, développement infini.

Intermédiaire :
• float(1/3) stocke une approximation. fractions.Fraction(1,3) pour l'exact.

Expert :
• Decimal avec précision suffisante pour décimales exactes.

Concepts clés :
• Float = binaire ; beaucoup de décimaux sont approximatifs.

Distinctions clés :
• vs Fraction ; vs Decimal.

Fonctionnement :
• Représentation IEEE 754 limitée.

Exécution étape par étape :
1. 1/3.
2. → 0.333... (approx).

Ordre des opérations :
• /.

Cas d'utilisation courants :
• Comprendre les imprécisions.

Cas limites :
• 2/3 + 1/3 peut valoir 1.0 (par chance d'arrondi).

Considérations de performance :
• O(1).

Exemples :
• from fractions import Fraction ; Fraction(1,3)

Remarques :
• Utiliser Fraction pour les rationnels exacts.`,
  780: `2/3 + 1/3 == 1.0 peut être True : parfois les arrondis se compensent.

Débutant :
• Par chance, la somme peut tomber exactement sur 1.0.

Intermédiaire :
• Dépend de l'ordre des opérations et des arrondis. Pas garanti.

Expert :
• Ne pas compter sur ça ; utiliser isclose ou Decimal pour des tests fiables.

Concepts clés :
• Les flottants sont imprévisibles pour ==.

Distinctions clés :
• vs 0.1+0.2 == 0.3 (généralement False).

Fonctionnement :
• Arrondis IEEE 754 ; compensation possible.

Exécution étape par étape :
1. 2/3, 1/3.
2. + → peut être 1.0.
3. == 1.0 → True ou False.

Ordre des opérations :
• / puis + puis ==.

Cas d'utilisation courants :
• Ne pas supposer ; toujours isclose.

Cas limites :
• Comportement peut varier selon plateforme.

Considérations de performance :
• O(1).

Exemples :
• math.isclose(2/3+1/3, 1.0) → True

Remarques :
• Ne pas fonder de logique sur == pour float.`,
  781: `abs() sur float renvoie un float : abs(-3.14) → 3.14.

Débutant :
• abs enlève le signe. Sur float, le résultat reste float.

Intermédiaire :
• abs(-3) → 3 (int) ; abs(-3.0) → 3.0 (float). abs préserve le type.

Expert :
• Pour forcer float : math.fabs().

Concepts clés :
• abs = valeur absolue ; type préservé.

Distinctions clés :
• vs math.fabs (force float).

Fonctionnement :
• |x| ; type du résultat = type de l'entrée.

Exécution étape par étape :
1. -3.14.
2. abs → 3.14.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• distances, écarts, normes.

Cas limites :
• abs(0) → 0 (même type).

Considérations de performance :
• O(1).

Exemples :
• abs(-0.0) → 0.0

Remarques :
• abs gère aussi les complexes (module).`,
  782: `abs() sur complexe renvoie le module (magnitude) : abs(3+4j) → 5.0.

Débutant :
• |a+bj| = √(a²+b²). abs(3+4j) = 5.

Intermédiaire :
• Toujours float. math.fabs ne gère pas les complexes.

Expert :
• abs(z) = sqrt(z.real² + z.imag²).

Concepts clés :
• Module = distance à l'origine dans le plan complexe.

Distinctions clés :
• vs abs sur int/float ; vs cmath pour autres opérations.

Fonctionnement :
• Formule Pythagore sur parties réelle et imaginaire.

Exécution étape par étape :
1. 3+4j.
2. abs → 5.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• traitement du signal, FFT.

Cas limites :
• abs(0j) → 0.0.

Considérations de performance :
• O(1).

Exemples :
• abs(1+1j) → 1.414... (√2)

Remarques :
• abs = seul moyen pour module d'un complexe.`,
  783: `divmod() avec floats : divmod(7.5, 2.5) → (3.0, 0.0). Renvoie des floats.

Débutant :
• divmod donne (quotient, reste). Avec float, les deux sont float.

Intermédiaire :
• 7.5 = 3*2.5 + 0.0. Même règle floor que pour les int.

Expert :
• divmod(-7.5, 2.5) : quotient floor, reste signe du diviseur.

Concepts clés :
• divmod(x, y) = (x//y, x%y) ; types suivent x et y.

Distinctions clés :
• vs divmod sur int (résultat int).

Fonctionnement :
• Division floor, puis reste.

Exécution étape par étape :
1. 7.5, 2.5.
2. divmod → (3.0, 0.0).

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• pagination, découpage en parts.

Cas limites :
• divmod(7.5, 2.0) → (3.0, 1.5).

Considérations de performance :
• O(1).

Exemples :
• divmod(10.0, 3.0) → (3.0, 1.0)

Remarques :
• a == q*b + r toujours.`,
  784: `round(x, 2) arrondit à 2 décimales : round(3.14159, 2) → 3.14.

Débutant :
• ndigits=2 garde 2 chiffres après la virgule.

Intermédiaire :
• Banker's rounding pour .5. Renvoie float si ndigits fourni.

Expert :
• round(2.675, 2) peut varier (float interne de 2.675).

Concepts clés :
• round(x, n) = arrondi à n décimales.

Distinctions clés :
• vs round(x) (entier) ; vs format pour affichage.

Fonctionnement :
• Banker's rounding (demi au pair).

Exécution étape par étape :
1. 3.14159, 2.
2. round → 3.14.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• affichage, rapports, monnaie (avec prudence).

Cas limites :
• round(3.5, 0) → 4 (pair).

Considérations de performance :
• O(1).

Exemples :
• round(2.718, 2) → 2.72

Remarques :
• Decimal pour la finance.`,
  785: `round(x, 0) renvoie un float : round(3.7, 0) → 4.0.

Débutant :
• ndigits=0 arrondit à l'entier mais le type est float.

Intermédiaire :
• round(3.7) sans ndigits → 4 (int). Avec ndigits, même 0 → float.

Expert :
• type(round(3.7, 0)) → float.

Concepts clés :
• round(x, 0) = arrondi entier en float.

Distinctions clés :
• vs round(3.7) → 4 (int).

Fonctionnement :
• Présence de ndigits force le float.

Exécution étape par étape :
1. 3.7, 0.
2. round → 4.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• chaînes de calcul float.

Cas limites :
• round(3.0, 0) → 3.0.

Considérations de performance :
• O(1).

Exemples :
• round(2.5, 0) → 2.0 (banker)

Remarques :
• Comportement par conception.`,
  786: `round(x) sans ndigits renvoie un int : round(3.7) → 4.

Débutant :
• round sans second argument arrondit à l'entier et renvoie int.

Intermédiaire :
• round(3.2) → 3 ; round(3.5) → 4 (banker). Type int.

Expert :
• round(-3.5) → -4 (vers le pair le plus proche).

Concepts clés :
• round(x) = arrondi à l'entier, type int.

Distinctions clés :
• vs round(x, 0) (float) ; vs int(x) (troncature).

Fonctionnement :
• Banker's rounding, résultat int.

Exécution étape par étape :
1. 3.7.
2. round → 4.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• conversion float → int arrondi.

Cas limites :
• round(0.5) → 0 ; round(1.5) → 2.

Considérations de performance :
• O(1).

Exemples :
• round(2.5) → 2

Remarques :
• Seul round sans ndigits donne int.`,
  787: `max('hello') vaut 'o' : max sur une chaîne renvoie le caractère avec le plus grand code ASCII/Unicode.

Débutant :
• max compare les caractères ; 'o' (111) > 'h' (104) etc.

Intermédiaire :
• min('hello') → 'e'. Ordre par point de code Unicode.

Expert :
• max avec key : max('hello', key=str.lower) pour ignorer la casse.

Concepts clés :
• max(itérable) = élément maximum selon ordre naturel.

Distinctions clés :
• vs min ; vs sorted.

Fonctionnement :
• Comparaison des éléments un par un.

Exécution étape par étape :
1. 'hello'.
2. max → 'o'.

Ordre des opérations :
• Itération et comparaison.

Cas d'utilisation courants :
• tri, bornes, caractères extrêmes.

Cas limites :
• max('a') → 'a'.

Considérations de performance :
• O(n).

Exemples :
• max('abc') → 'c'

Remarques :
• Sur str, ordre par point de code.`,
  788: `min('hello') vaut 'e' : min sur une chaîne renvoie le caractère avec le plus petit code.

Débutant :
• 'e' a le plus petit code parmi h,e,l,l,o.

Intermédiaire :
• min('abc') → 'a'. Ordre Unicode.

Expert :
• min avec key pour critère personnalisé.

Concepts clés :
• min(itérable) = élément minimum.

Distinctions clés :
• vs max ; vs sorted.

Fonctionnement :
• Parcours et comparaison.

Exécution étape par étape :
1. 'hello'.
2. min → 'e'.

Ordre des opérations :
• Itération.

Cas d'utilisation courants :
• bornes, tri.

Cas limites :
• min('a') → 'a'.

Considérations de performance :
• O(n).

Exemples :
• min('xyz') → 'x'

Remarques :
• Même logique que max, inverse.`,
  789: `max(iterable, key=lambda x: -x) renvoie le min : key transforme avant comparaison.

Débutant :
• key=lambda x: -x fait comparer -x ; max de -x = min de x.

Intermédiaire :
• max([3,1,4], key=lambda x: -x) → 1. Équivalent à min([3,1,4]).

Expert :
• key peut être toute fonction ; max([(1,'a'),(2,'b')], key=lambda t: t[0]) → (2,'b').

Concepts clés :
• key = fonction appliquée pour la comparaison.

Distinctions clés :
• vs max sans key ; vs min avec key inverse.

Fonctionnement :
• Comparer key(a) et key(b) ; retourner l'élément original gagnant.

Exécution étape par étape :
1. Itérable, key.
2. max sur (élément, key(élément)) → élément avec max key.

Ordre des opérations :
• Itération, key, comparaison.

Cas d'utilisation courants :
• max/min sur attribut ou critère dérivé.

Cas limites :
• max([], default=0) → 0 (Python 3.4+).

Considérations de performance :
• O(n) avec n appels à key.

Exemples :
• max('hello', key=str.lower) → 'o'

Remarques :
• key est très utile pour objets complexes.`,
  790: `sorted(iterable, key=lambda x: -x) trie en ordre décroissant : key=-x inverse l'ordre.

Débutant :
• key=lambda x: -x fait trier par -x ; ordre croissant de -x = décroissant de x.

Intermédiaire :
• sorted([3,1,4], key=lambda x: -x) → [4,3,1]. Ou sorted(..., reverse=True).

Expert :
• reverse=True évite une key négative ; plus lisible.

Concepts clés :
• key transforme les valeurs avant comparaison.

Distinctions clés :
• vs sorted sans key ; vs list.sort() in-place.

Fonctionnement :
• Trier selon key(x) croissant ; renvoyer liste des x.

Exécution étape par étape :
1. Itérable, key.
2. sorted → liste triée.

Ordre des opérations :
• Itération, key, tri.

Cas d'utilisation courants :
• tri décroissant, tri sur attribut.

Cas limites :
• sorted([], key=...) → [].

Considérations de performance :
• O(n log n).

Exemples :
• sorted([3,1,4], reverse=True) → [4,3,1]

Remarques :
• reverse=True souvent plus clair.`,
  791: `sum(iterable, start=0) : start est la valeur initiale. sum([1,2,3], 10) → 16.

Débutant :
• sum ajoute start aux éléments : 10 + 1 + 2 + 3 = 16.

Intermédiaire :
• sum([], 10) → 10. start par défaut = 0.

Expert :
• sum([[1],[2]], []) → [1,2] (concaténation de listes avec start=[]).

Concepts clés :
• sum = start + elem1 + elem2 + ...

Distinctions clés :
• vs sum sans start (défaut 0).

Fonctionnement :
• Accumulation à partir de start.

Exécution étape par étape :
1. [1,2,3], 10.
2. 10+1+2+3 → 16.

Ordre des opérations :
• Itération et +.

Cas d'utilisation courants :
• sommes avec offset, concaténation.

Cas limites :
• sum([], 0) → 0.

Considérations de performance :
• O(n).

Exemples :
• sum(range(5), 100) → 110

Remarques :
• start doit être compatible avec +.`,
  792: `sum(range(101)) vaut 5050 : somme de 0 à 100. Formule de Gauss : n(n+1)/2.

Débutant :
• 0+1+2+...+100 = 5050.

Intermédiaire :
• Formule : 100*101/2 = 5050. range(101) = 0..100.

Expert :
• sum(range(n)) = n*(n-1)//2. O(1) avec la formule vs O(n) avec sum.

Concepts clés :
• Gauss : 1+2+...+n = n(n+1)/2.

Distinctions clés :
• vs boucle for ; vs formule directe.

Fonctionnement :
• sum itère et additionne.

Exécution étape par étape :
1. range(101) → 0,1,...,100.
2. sum → 5050.

Ordre des opérations :
• Itération, +.

Cas d'utilisation courants :
• sommes arithmétiques, pédagogie.

Cas limites :
• sum(range(1)) → 0.

Considérations de performance :
• O(n). Formule O(1).

Exemples :
• 100*101//2 → 5050

Remarques :
• Classique exercice de programmation.`,
  793: `sum(range(1, 11)) vaut 55 : somme de 1 à 10. 1+2+...+10 = 55.

Débutant :
• range(1, 11) = 1..10. Somme = 55.

Intermédiaire :
• Formule : 10*11/2 = 55. range exclut la borne supérieure.

Expert :
• sum(range(a, b+1)) = (a+b)*(b-a+1)/2 pour a≤b.

Concepts clés :
• range(1, 11) exclut 11.

Distinctions clés :
• vs range(11) (0..10) ; vs range(1, 10) (1..9).

Fonctionnement :
• range puis sum.

Exécution étape par étape :
1. range(1, 11) → 1..10.
2. sum → 55.

Ordre des opérations :
• Création range, itération, sum.

Cas d'utilisation courants :
• sommes sur intervalles.

Cas limites :
• sum(range(1, 1)) → 0.

Considérations de performance :
• O(n).

Exemples :
• sum(range(1, 6)) → 15

Remarques :
• range(a, b) = a..b-1.`,
  794: `pow(x, y, z) = exponentiation modulaire : pow(2, 10, 1000) = (2^10) % 1000.

Débutant :
• pow(2, 10, 1000) calcule 2^10 puis % 1000, sans calculer 2^10 en entier.

Intermédiaire :
• Plus efficace que (2**10) % 1000 pour grands exposants. Utilisé en crypto.

Expert :
• Algorithme d'exponentiation rapide ; évite overflow pour grands nombres.

Concepts clés :
• pow(x, y, z) = (x**y) % z, optimisé.

Distinctions clés :
• vs pow(x, y) (2 args) ; vs x**y % z (peut overflow).

Fonctionnement :
• Exponentiation modulaire (square-and-multiply).

Exécution étape par étape :
1. 2, 10, 1000.
2. pow → 24 (1024 % 1000).

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• cryptographie, calculs modulo.

Cas limites :
• z=0 → TypeError. x, y, z entiers.

Considérations de performance :
• O(log y) multiplications.

Exemples :
• pow(3, 4, 10) → 1

Remarques :
• Forme à 3 arguments : entiers uniquement.`,
  795: `max([], default=0) vaut 0 : default renvoyé si l'itérable est vide (Python 3.4+).

Débutant :
• max sur liste vide sans default lève ValueError ; avec default → 0.

Intermédiaire :
• min([], default=0) → 0. Évite de gérer l'exception.

Expert :
• default peut être n'importe quelle valeur (pas forcément du même type).

Concepts clés :
• default = valeur de repli pour itérable vide.

Distinctions clés :
• vs max([]) sans default → ValueError.

Fonctionnement :
• Si itérable vide, retourner default.

Exécution étape par étape :
1. [], default=0.
2. max → 0.

Ordre des opérations :
• Vérification vide, retour default.

Cas d'utilisation courants :
• éviter ValueError, valeurs par défaut.

Cas limites :
• max([1], default=0) → 1 (default ignoré si non vide).

Considérations de performance :
• O(1) si vide.

Exemples :
• min([], default=999) → 999

Remarques :
• Python 3.4+.`,
  796: `bool(0.0) vaut False : zéro flottant est falsy.

Débutant :
• 0.0, 0, '' sont falsy. Tout le reste est truthy.

Intermédiaire :
• bool(0.0) == False. if 0.0: ne s'exécute pas.

Expert :
• float('0.0') aussi falsy. NaN est truthy (surprenant).

Concepts clés :
• Falsy : 0, 0.0, '', None, [], {}, False.

Distinctions clés :
• vs bool(0.1) = True ; vs bool(-0.0) = False.

Fonctionnement :
• Test de vérité sur la valeur.

Exécution étape par étape :
1. 0.0.
2. bool → False.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• if x: ; while n: ; conditions.

Cas limites :
• bool(0+0j) = False.

Considérations de performance :
• O(1).

Exemples :
• bool(0) → False

Remarques :
• Cohérent avec 0.`,
  797: `bool(-1) vaut True : tout entier non nul est truthy.

Débutant :
• -1, 1, 42 sont truthy. Seul 0 est falsy pour les int.

Intermédiaire :
• bool(-1) == True. Négatif ou positif, non nul = truthy.

Expert :
• bool(n) équivaut à n != 0 pour les nombres.

Concepts clés :
• Truthy = tout sauf les valeurs falsy (0, None, '', etc.).

Distinctions clés :
• vs bool(0) = False.

Fonctionnement :
• Test n != 0 pour les nombres.

Exécution étape par étape :
1. -1.
2. bool → True.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• if n: pour « si n non nul ».

Cas limites :
• bool(1) = bool(-1) = True.

Considérations de performance :
• O(1).

Exemples :
• if -1: print('ok')  # affiche ok

Remarques :
• Pas de « nombre négatif = faux ».`,
  798: `bool(0+0j) vaut False : zéro complexe est falsy.

Débutant :
• 0+0j (ou 0j) est le seul complexe falsy.

Intermédiaire :
• 1+0j, 0+1j sont truthy. Seul 0j est falsy.

Expert :
• bool(z) équivaut à z != 0+0j (parties réelle et imaginaire non nulles).

Concepts clés :
• 0j = falsy ; tout autre complexe = truthy.

Distinctions clés :
• vs bool(0.0) ; vs bool(1+0j) = True.

Fonctionnement :
• Test sur les deux composantes.

Exécution étape par étape :
1. 0+0j.
2. bool → False.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• if z: pour « si z non nul ».

Cas limites :
• bool(0.0+0.0j) → False.

Considérations de performance :
• O(1).

Exemples :
• bool(1+0j) → True

Remarques :
• Cohérent avec les autres types numériques.`,
  799: `int(True) + int(False) vaut 1 : True→1, False→0. 1+0=1.

Débutant :
• bool est sous-classe de int. True=1, False=0.

Intermédiaire :
• int(True)=1, int(False)=0. On peut faire de l'arithmétique.

Expert :
• True + True = 2. isinstance(True, int) = True.

Concepts clés :
• bool hérite de int ; True=1, False=0.

Distinctions clés :
• vs type(True) = bool (pas int, mais sous-classe).

Fonctionnement :
• Conversion explicite en int.

Exécution étape par étape :
1. int(True)=1, int(False)=0.
2. 1+0 → 1.

Ordre des opérations :
• int(), int(), +.

Cas d'utilisation courants :
• compter des True (sum de booléens).

Cas limites :
• int(True) → 1.

Considérations de performance :
• O(1).

Exemples :
• sum([True, False, True]) → 2

Remarques :
• Héritage bool de int.`,
  800: `True + True + True vaut 3 : les booléens sont des int (True=1, False=0).

Débutant :
• True + True = 2. True + True + True = 3.

Intermédiaire :
• Pas de conversion explicite ; l'arithmétique fonctionne directement.

Expert :
• sum([True, False, True]) = 2. Compter les True dans une liste.

Concepts clés :
• bool = sous-classe de int ; arithmétique directe.

Distinctions clés :
• vs 1+1+1 (même résultat) ; type(True+True) = int.

Fonctionnement :
• 1+1+1 = 3.

Exécution étape par étape :
1. True, True, True.
2. + → 3.

Ordre des opérations :
• + gauche à droite.

Cas d'utilisation courants :
• compter les True, conditions numériques.

Cas limites :
• True * 10 → 10.

Considérations de performance :
• O(1).

Exemples :
• [True, False].count(True) → 1

Remarques :
• Astuce : sum(condition(x) for x in it) compte les True.`,
};
