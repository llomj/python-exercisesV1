/** Level 2 FR 801–850 — Decimal, Fractions, Complex, Bitwise (level2_expert_a) */
export default {
  801: `Decimal("0.1") + Decimal("0.2") == Decimal("0.3") vaut True : arithmétique décimale exacte (pas de float).

Débutant :
• Decimal stocke en base 10 ; pas d'erreur d'arrondi comme avec float.

Intermédiaire :
• 0.1 + 0.2 == 0.3 est False en float ; Decimal résout ce problème.

Expert :
• from decimal import Decimal. Utiliser des chaînes pour les littéraux.

Concepts clés :
• Decimal = arithmétique décimale exacte ; float = binaire approximatif.

Distinctions clés :
• vs float ; vs Fraction (rationnels).

Fonctionnement :
• Stockage et calcul en base 10, précision configurable.

Exécution étape par étape :
1. Decimal("0.1"), Decimal("0.2"), Decimal("0.3").
2. + puis == → True.

Ordre des opérations :
• Construction, +, ==.

Cas d'utilisation courants :
• finance, monnaie, calculs exacts.

Cas limites :
• Decimal(0.1) hérite de l'imprécision du float ; utiliser Decimal("0.1").

Considérations de performance :
• Plus lent que float.

Exemples :
• Decimal("0.1") + Decimal("0.2") → Decimal('0.3')

Remarques :
• Toujours passer des chaînes à Decimal pour les valeurs exactes.`,
  802: `Decimal("0.1") + Decimal("0.2") vaut Decimal('0.3') : résultat exact, pas 0.3000...04.

Débutant :
• L'addition Decimal donne 0.3 exactement.

Intermédiaire :
• Le résultat est un objet Decimal, pas un float.

Expert :
• Pas de conversion binaire ; calcul direct en base 10.

Concepts clés :
• Addition exacte en base 10.

Distinctions clés :
• vs 0.1 + 0.2 (float) → 0.3000...04.

Fonctionnement :
• Arithmétique décimale native.

Exécution étape par étape :
1. Decimal("0.1") + Decimal("0.2").
2. → Decimal('0.3').

Ordre des opérations :
• +.

Cas d'utilisation courants :
• Cumuls financiers, totaux exacts.

Cas limites :
• Decimal(0.1) + Decimal(0.2) peut être imprécis (float en entrée).

Considérations de performance :
• O(1) pour petites précisions.

Exemples :
• repr(Decimal("0.1") + Decimal("0.2")) → "Decimal('0.3')"

Remarques :
• Préférer Decimal("x") à Decimal(float).`,
  803: `Decimal(0.1) == Decimal("0.1") vaut False : Decimal(float) hérite de l'imprécision du float.

Débutant :
• Decimal(0.1) convertit le float déjà imprécis ; Decimal("0.1") est exact.

Intermédiaire :
• 0.1 en float ≈ 0.1000...0555... ; Decimal le représente tel quel.

Expert :
• Decimal(0.1) = Decimal('0.1000000000000000055511151231257827021181583404541015625').

Concepts clés :
• float → Decimal préserve l'imprécision ; str → Decimal donne l'exact.

Distinctions clés :
• Decimal(0.1) vs Decimal("0.1") : piège fréquent.

Fonctionnement :
• Le constructeur Decimal(float) convertit la valeur binaire telle quelle.

Exécution étape par étape :
1. 0.1 (float imprécis).
2. Decimal(0.1) → valeur imprécise.
3. == Decimal("0.1") → False.

Ordre des opérations :
• Construction, comparaison.

Cas d'utilisation courants :
• Éviter : toujours utiliser des chaînes pour les décimales.

Cas limites :
• Decimal(str(0.1)) peut aussi être imprécis (str du float).

Considérations de performance :
• O(1).

Exemples :
• Decimal("0.1") == Decimal("0.10") → True

Remarques :
• Règle d'or : Decimal("x") pour les littéraux décimaux.`,
  804: `Decimal("10.55").quantize(Decimal("0.1")) vaut Decimal('10.6') : arrondi ROUND_HALF_EVEN.

Débutant :
• quantize arrondit à une décimale ; 10.55 → 10.6.

Intermédiaire :
• Le chiffre à arrondir est 5 ; le précédent (5) est impair → on arrondit au pair supérieur (6).

Expert :
• ROUND_HALF_EVEN = banker's rounding ; 10.65 → 10.6 (6 pair).

Concepts clés :
• quantize(exp) arrondit à l'exposant exp. ROUND_HALF_EVEN par défaut.

Distinctions clés :
• vs round() float ; vs ROUND_HALF_UP.

Fonctionnement :
• Arrondi selon le contexte Decimal (getcontext()).

Exécution étape par étape :
1. Decimal("10.55"), Decimal("0.1").
2. quantize → 10.6.

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Prix arrondis, facturation.

Cas limites :
• 10.65 → 10.6 ; 10.75 → 10.8.

Considérations de performance :
• O(1).

Exemples :
• Decimal("2.5").quantize(Decimal("1")) → Decimal('2') (2 pair)

Remarques :
• Contrôler le mode via getcontext().rounding.`,
  805: `type(Decimal("3.14")) vaut <class 'decimal.Decimal'> : type propre au module decimal.

Débutant :
• Decimal est un type distinct, pas un float ni un int.

Intermédiaire :
• isinstance(Decimal("3.14"), float) → False.

Expert :
• Module decimal ; précision configurable ; plus lent que float.

Concepts clés :
• decimal.Decimal = type pour arithmétique décimale exacte.

Distinctions clés :
• vs float ; vs int.

Fonctionnement :
• Classe du module decimal.

Exécution étape par étape :
1. Decimal("3.14").
2. type(...) → decimal.Decimal.

Ordre des opérations :
• Construction, type().

Cas d'utilisation courants :
• Vérifier le type avant opérations sensibles.

Cas limites :
• type(Decimal("0")) → Decimal aussi.

Considérations de performance :
• O(1).

Exemples :
• isinstance(x, Decimal) pour tester

Remarques :
• from decimal import Decimal.`,
  806: `Decimal("inf").is_infinite() vaut True : Decimal gère infini et NaN comme float.

Débutant :
• Decimal("inf") crée l'infini positif ; is_infinite() le détecte.

Intermédiaire :
• Decimal("-inf") aussi ; is_infinite() renvoie True pour les deux.

Expert :
• is_nan(), is_finite(), is_zero() pour les autres cas.

Concepts clés :
• Valeurs spéciales : inf, -inf, nan. Méthodes de test.

Distinctions clés :
• vs float (math.isinf) ; même logique IEEE 754.

Fonctionnement :
• Test sur la valeur interne.

Exécution étape par étape :
1. Decimal("inf").
2. is_infinite() → True.

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Validation de résultats Decimal.

Cas limites :
• Decimal("nan").is_infinite() → False.

Considérations de performance :
• O(1).

Exemples :
• Decimal("-inf").is_infinite() → True

Remarques :
• Cohérent avec float.`,
  807: `Decimal("nan").is_nan() vaut True : NaN (Not a Number) en Decimal.

Débutant :
• Decimal("nan") crée un NaN ; is_nan() le détecte.

Intermédiaire :
• Decimal("nan") == Decimal("nan") → False (comme float).

Expert :
• NaN se propage : Decimal("nan") + 1 → NaN.

Concepts clés :
• NaN = résultat indéfini ; is_nan() pour le tester.

Distinctions clés :
• vs == (ne fonctionne pas pour NaN).

Fonctionnement :
• Test sur la représentation interne.

Exécution étape par étape :
1. Decimal("nan").
2. is_nan() → True.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• Détecter des résultats invalides.

Cas limites :
• Decimal("nan") != Decimal("nan") → True.

Considérations de performance :
• O(1).

Exemples :
• Toujours utiliser is_nan() pour tester NaN

Remarques :
• Comportement IEEE 754.`,
  808: `Decimal("3.14").is_finite() vaut True : is_finite = ni inf ni NaN.

Débutant :
• 3.14 est un nombre normal, donc is_finite() → True.

Intermédiaire :
• is_finite(inf) → False ; is_finite(nan) → False.

Expert :
• is_zero(), is_signed() pour d'autres tests.

Concepts clés :
• is_finite = nombre « normal » (ni inf ni nan).

Distinctions clés :
• vs is_infinite ; vs is_nan.

Fonctionnement :
• Classification de la valeur.

Exécution étape par étape :
1. Decimal("3.14").
2. is_finite() → True.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• Validation avant calculs.

Cas limites :
• Decimal("0").is_finite() → True.

Considérations de performance :
• O(1).

Exemples :
• Decimal("inf").is_finite() → False

Remarques :
• Méthodes de classification Decimal.`,
  809: `Decimal("100").sqrt() vaut Decimal('10') : racine carrée exacte pour les carrés parfaits.

Débutant :
• sqrt() est une méthode Decimal ; 100 → 10.

Intermédiaire :
• Résultat Decimal, pas float. Précision du contexte (défaut 28 chiffres).

Expert :
• Decimal("2").sqrt() donne ~28 chiffres ; math.sqrt(2) ~15.

Concepts clés :
• sqrt() = racine carrée avec précision Decimal.

Distinctions clés :
• vs math.sqrt (float) ; vs ** 0.5.

Fonctionnement :
• Algorithme de racine carrée en précision arbitraire.

Exécution étape par étape :
1. Decimal("100").
2. .sqrt() → Decimal('10').

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Calculs financiers ou scientifiques à haute précision.

Cas limites :
• Decimal("0").sqrt() → Decimal('0').

Considérations de performance :
• Plus lent que math.sqrt.

Exemples :
• Decimal("4").sqrt() → Decimal('2')

Remarques :
• Précision via getcontext().prec.`,
  810: `Decimal("2").sqrt() donne ~28 chiffres : précision bien supérieure à float.

Débutant :
• √2 en Decimal a beaucoup plus de chiffres qu'en float.

Intermédiaire :
• Défaut : 28 chiffres significatifs. Configurable.

Expert :
• getcontext().prec = 50 pour 50 chiffres.

Concepts clés :
• Précision arbitraire pour les irrationnels.

Distinctions clés :
• vs math.sqrt(2) (~15 chiffres).

Fonctionnement :
• Calcul avec la précision du contexte.

Exécution étape par étape :
1. Decimal("2").
2. .sqrt() → Decimal avec 28 chiffres.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• Calculs scientifiques haute précision.

Cas limites :
• Coût croissant avec prec.

Considérations de performance :
• O(prec).

Exemples :
• Decimal("2").sqrt()**2 ≈ Decimal("2")

Remarques :
• Contrôle explicite de la précision.`,
  811: `float(Decimal("3.14")) vaut 3.14 : conversion Decimal → float.

Débutant :
• float() convertit un Decimal en float standard.

Intermédiaire :
• Peut perdre en précision (Decimal 28 chiffres, float ~15).

Expert :
• Éviter en finance ; utile pour interfaçage avec libs qui attendent float.

Concepts clés :
• Conversion vers float ; perte de précision possible.

Distinctions clés :
• vs Decimal → int ; vs str(Decimal).

Fonctionnement :
• Conversion binaire IEEE 754.

Exécution étape par étape :
1. Decimal("3.14").
2. float(...) → 3.14.

Ordre des opérations :
• Conversion.

Cas d'utilisation courants :
• Passage à des APIs numériques.

Cas limites :
• float(Decimal("0.1")) → 0.1 (approx).

Considérations de performance :
• O(1).

Exemples :
• type(float(Decimal("3.14"))) → float

Remarques :
• À éviter si on veut garder l'exactitude.`,
  812: `Decimal("2").sqrt() donne ~28 chiffres : précision bien supérieure à float.

Débutant :
• √2 en Decimal a beaucoup plus de chiffres qu'en float.

Intermédiaire :
• Défaut : 28 chiffres significatifs. Configurable via getcontext().prec.

Expert :
• getcontext().prec = 50 pour 50 chiffres.

Concepts clés :
• Précision arbitraire pour les irrationnels.

Distinctions clés :
• vs math.sqrt(2) (~15 chiffres).

Fonctionnement :
• Calcul avec la précision du contexte.

Exécution étape par étape :
1. Decimal("2").
2. .sqrt() → Decimal avec 28 chiffres.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• Calculs scientifiques haute précision.

Cas limites :
• Coût croissant avec prec.

Considérations de performance :
• O(prec).

Exemples :
• Decimal("2").sqrt()**2 ≈ Decimal("2")

Remarques :
• Contrôle explicite de la précision.`,
  813: `float(Decimal("3.14")) vaut 3.14 : conversion Decimal → float.

Débutant :
• float() convertit un Decimal en float standard.

Intermédiaire :
• Peut perdre en précision (Decimal 28 chiffres, float ~15).

Expert :
• Éviter en finance ; utile pour interfaçage avec libs float.

Concepts clés :
• Conversion vers float ; perte de précision possible.

Distinctions clés :
• vs Decimal → int ; vs str(Decimal).

Fonctionnement :
• Conversion binaire IEEE 754.

Exécution étape par étape :
1. Decimal("3.14").
2. float(...) → 3.14.

Ordre des opérations :
• Conversion.

Cas d'utilisation courants :
• Passage à des APIs numériques.

Cas limites :
• float(Decimal("0.1")) → 0.1 (approx).

Considérations de performance :
• O(1).

Exemples :
• type(float(Decimal("3.14"))) → float

Remarques :
• À éviter si on veut garder l'exactitude.`,
  814: `Decimal("3.14") > Decimal("3.13") vaut True : comparaisons exactes en base 10.

Débutant :
• Les comparaisons Decimal sont exactes, pas d'erreur float.

Intermédiaire :
• Decimal("1.0") == Decimal("1.00") → True (même valeur).

Expert :
• Decimal vs int OK ; Decimal vs float déconseillé.

Concepts clés :
• Comparaisons exactes ; support de <, >, <=, >=, ==, !=.

Distinctions clés :
• vs float (imprécisions possibles).

Fonctionnement :
• Comparaison par valeur décimale.

Exécution étape par étape :
1. Decimal("3.14"), Decimal("3.13").
2. > → True.

Ordre des opérations :
• Comparaison.

Cas d'utilisation courants :
• Tri, min, max sur Decimal.

Cas limites :
• Decimal("0") == 0 → True.

Considérations de performance :
• O(n) avec n = nombre de chiffres.

Exemples :
• sorted([Decimal("3.14"), Decimal("3.13")])

Remarques :
• Utilisable dans sort(), min(), max().`,
  815: `Decimal("3.14") + 1 vaut Decimal('4.14') : Decimal + int fonctionne ; Decimal + float lève TypeError.

Débutant :
• On peut additionner un int à un Decimal ; le int est converti.

Intermédiaire :
• Decimal + float → TypeError (pour éviter l'imprécision float).

Expert :
• int → Decimal exact ; float → Decimal apporterait l'imprécision.

Concepts clés :
• Mélange Decimal + int autorisé ; Decimal + float interdit.

Distinctions clés :
• vs Decimal + float (TypeError).

Fonctionnement :
• Conversion implicite int → Decimal pour les opérations.

Exécution étape par étape :
1. Decimal("3.14"), 1.
2. + → Decimal('4.14').

Ordre des opérations :
• Conversion int, puis +.

Cas d'utilisation courants :
• Calculs avec constantes entières.

Cas limites :
• Decimal("3.14") + 1.0 → TypeError.

Considérations de performance :
• O(1).

Exemples :
• Decimal("10") * 2 → Decimal('20')

Remarques :
• Utiliser Decimal(str(1.0)) si besoin.`,
  816: `Fraction(1, 3) crée la fraction 1/3 exacte : numérateur/dénominateur.

Débutant :
• Fraction(1, 3) = un tiers exact ; from fractions import Fraction.

Intermédiaire :
• Stocké (1, 3) ; auto-réduction : Fraction(2, 6) → Fraction(1, 3).

Expert :
• Fraction(string), Fraction(float) ; float peut apporter imprécision.

Concepts clés :
• Fraction = rationnel exact (num, den).

Distinctions clés :
• vs float ; vs Decimal.

Fonctionnement :
• Stockage entier ; calculs exacts.

Exécution étape par étape :
1. Fraction(1, 3).
2. → Fraction(1, 3).

Ordre des opérations :
• Construction.

Cas d'utilisation courants :
• Partages, probas exactes.

Cas limites :
• Fraction(0, 1) → Fraction(0, 1).

Considérations de performance :
• Plus lent que float.

Exemples :
• Fraction(1, 3) + Fraction(1, 6) → Fraction(1, 2)

Remarques :
• from fractions import Fraction.`,
  817: `Fraction(1, 3) + Fraction(1, 6) vaut Fraction(1, 2) : 1/3 + 1/6 = 1/2.

Débutant :
• Les fractions s'additionnent et se simplifient.

Intermédiaire :
• 2/6 + 1/6 = 3/6 → 1/2.

Expert :
• GCD pour réduction ; pas d'arrondi.

Concepts clés :
• Arithmétique exacte ; réduction auto.

Distinctions clés :
• vs float (imprécis).

Fonctionnement :
• Addition puis réduction GCD.

Exécution étape par étape :
1. Fraction(1, 3), Fraction(1, 6).
2. + → Fraction(1, 2).

Ordre des opérations :
• +, réduction.

Cas d'utilisation courants :
• Calculs rationnels exacts.

Cas limites :
• Fraction(1, 3) + Fraction(2, 3) → Fraction(1, 1).

Considérations de performance :
• O(log(min(num, den))).

Exemples :
• float(Fraction(1, 2)) → 0.5

Remarques :
• Toujours lowest terms.`,
  816: `Fraction(2, 4) vaut Fraction(1, 2) : auto-réduction à la création.

Débutant :
• 2/4 est simplifié en 1/2 dès la construction.

Intermédiaire :
• GCD(2, 4) = 2 ; num et den divisés par 2.

Expert :
• Fraction(6, 9) → Fraction(2, 3) ; Fraction(7, 7) → Fraction(1, 1).

Concepts clés :
• Réduction automatique à la création.

Distinctions clés :
• vs garder 2/4 ; toujours lowest terms.

Fonctionnement :
• Calcul GCD, division num et den.

Exécution étape par étape :
1. Fraction(2, 4).
2. gcd(2,4)=2 → Fraction(1, 2).

Ordre des opérations :
• Construction, réduction.

Cas d'utilisation courants :
• Normalisation automatique.

Cas limites :
• Fraction(-2, -4) → Fraction(1, 2).

Considérations de performance :
• O(log(min(a,b))).

Exemples :
• Fraction(10, 20) → Fraction(1, 2)

Remarques :
• Toujours en lowest terms.`,
  817: `float(Fraction(1, 3)) vaut 0.3333333333333333 : conversion Fraction → float, approximation.

Débutant :
• 1/3 ne peut pas être exact en float ; on obtient une approximation.

Intermédiaire :
• ~15 chiffres significatifs ; la Fraction garde l'exactitude.

Expert :
• float(Fraction(1, 7)) → 0.14285714285714285.

Concepts clés :
• Conversion vers float ; perte d'exactitude pour rationnels non représentables.

Distinctions clés :
• vs Fraction (exact) ; vs Decimal.

Fonctionnement :
• Division num/den en float.

Exécution étape par étape :
1. Fraction(1, 3).
2. float(...) → 0.333...

Ordre des opérations :
• Conversion.

Cas d'utilisation courants :
• Affichage, interface avec code float.

Cas limites :
• float(Fraction(1, 2)) → 0.5 (exact en float).

Considérations de performance :
• O(1).

Exemples :
• repr(float(Fraction(1, 3)))

Remarques :
• La Fraction reste exacte ; seule la conversion perd.`,
  818: `Fraction(1, 3) * 3 vaut Fraction(1, 1) : 1/3 * 3 = 1 exact, pas 0.999...

Débutant :
• En Fraction, 1/3 * 3 = 1 exactement.

Intermédiaire :
• (1/3)*3 en float → 0.9999999999999999 ; Fraction évite ça.

Expert :
• Fraction(1, 3) * 3 = Fraction(3, 3) → réduit à Fraction(1, 1).

Concepts clés :
• Arithmétique exacte ; pas d'accumulation d'erreurs.

Distinctions clés :
• vs (1/3)*3 en float.

Fonctionnement :
• Multiplication de fractions, réduction.

Exécution étape par étape :
1. Fraction(1, 3), 3.
2. * → Fraction(1, 1).

Ordre des opérations :
• *, réduction.

Cas d'utilisation courants :
• Calculs qui annulent (ex. 1/3 * 3).

Cas limites :
• Fraction(1, 1) == 1 → True.

Considérations de performance :
• O(1).

Exemples :
• (1/3)*3 en float → 0.999...

Remarques :
• Avantage majeur des Fraction.`,
  819: `Fraction(1, 3) * 3 == 1 vaut True : Fraction(1, 1) égale 1 (comparaison inter-type).

Débutant :
• Fraction(1, 1) est mathématiquement égal à 1.

Intermédiaire :
• Python permet == entre Fraction et int/float.

Expert :
• Fraction(1, 2) == 0.5 → True ; Fraction(1, 3) == 1/3 → False (float imprécis).

Concepts clés :
• Comparaison par valeur mathématique, pas par type.

Distinctions clés :
• vs is (identité) ; == compare la valeur.

Fonctionnement :
• Conversion/réduction pour comparaison.

Exécution étape par étape :
1. Fraction(1, 3) * 3 → Fraction(1, 1).
2. == 1 → True.

Ordre des opérations :
• *, ==.

Cas d'utilisation courants :
• Tests, assertions.

Cas limites :
• Fraction(2, 1) == 2 → True.

Considérations de performance :
• O(1).

Exemples :
• (1/3)*3 == 1 → False (float)

Remarques :
• Fraction préserve l'exactitude.`,
  820: `type(1+2j) vaut <class 'complex'> : littéral complexe avec suffixe j.

Débutant :
• 1+2j crée un nombre complexe ; j = unité imaginaire.

Intermédiaire :
• Pas d'import ; type built-in. Python utilise j (pas i) comme en ingénierie.

Expert :
• complex(1, 2) équivalent ; 2j = 0+2j.

Concepts clés :
• complex = type pour nombres complexes (réel + imaginaire).

Distinctions clés :
• vs float ; vs (1, 2) tuple.

Fonctionnement :
• Littéral avec j ; partie réelle et imaginaire.

Exécution étape par étape :
1. 1+2j.
2. type(...) → complex.

Ordre des opérations :
• Littéral, type().

Cas d'utilisation courants :
• FFT, traitement du signal, maths.

Cas limites :
• type(3j) → complex.

Considérations de performance :
• O(1).

Exemples :
• 1+0j = 1 (valeur) mais type différent

Remarques :
• j doit suivre un littéral numérique.`,
  821: `(1+2j).real vaut 1.0 : attribut .real = partie réelle (toujours float).

Débutant :
• .real donne la partie réelle ; .imag la partie imaginaire.

Intermédiaire :
• Toujours float, même si (1+2j) avec int : (1+2j).real = 1.0.

Expert :
• Lecture seule ; pas d'assignation.

Concepts clés :
• .real et .imag = composantes ; toujours float.

Distinctions clés :
• vs .imag ; vs type (complex).

Fonctionnement :
• Accès attribut.

Exécution étape par étape :
1. (1+2j).
2. .real → 1.0.

Ordre des opérations :
• Accès.

Cas d'utilisation courants :
• Séparer réel et imaginaire.

Cas limites :
• (0+2j).real → 0.0.

Considérations de performance :
• O(1).

Exemples :
• (3-4j).real → 3.0

Remarques :
• .imag pour la partie imaginaire.`,
  822: `(1+2j).imag vaut 2.0 : attribut .imag = partie imaginaire (toujours float).

Débutant :
• .imag donne le coefficient de j.

Intermédiaire :
• (3-4j).imag = -4.0 ; (5+0j).imag = 0.0.

Expert :
• 2j = 0+2j donc (2j).real=0, (2j).imag=2.0.

Concepts clés :
• .imag = coefficient de j ; float.

Distinctions clés :
• vs .real ; vs abs (module).

Fonctionnement :
• Accès attribut.

Exécution étape par étape :
1. (1+2j).
2. .imag → 2.0.

Ordre des opérations :
• Accès.

Cas d'utilisation courants :
• Extraction des composantes.

Cas limites :
• (1+0j).imag → 0.0.

Considérations de performance :
• O(1).

Exemples :
• (3-4j).imag → -4.0

Remarques :
• Pas le j, juste le coefficient.`,
  823: `(1+2j) + (3+4j) vaut (4+6j) : addition composante par composante.

Débutant :
• Réel : 1+3=4 ; imaginaire : 2+4=6.

Intermédiaire :
• (a+bj) + (c+dj) = (a+c) + (b+d)j.

Expert :
• (1+2j) + 3 = (4+2j) ; int/float convertis.

Concepts clés :
• Addition vectorielle sur (réel, imaginaire).

Distinctions clés :
• vs * (multiplication complexe, pas composante par composante).

Fonctionnement :
• Addition des parties réelles et imaginaires.

Exécution étape par étape :
1. (1+2j), (3+4j).
2. + → (4+6j).

Ordre des opérations :
• +.

Cas d'utilisation courants :
• Somme de vecteurs 2D.

Cas limites :
• (1+2j) + 0 = (1+2j).

Considérations de performance :
• O(1).

Exemples :
• (5+3j) - (2+1j) → (3+2j)

Remarques :
• Soustraction aussi composante par composante.`,
  824: `(1+2j) * (3+4j) vaut (-5+10j) : multiplication complexe avec j²=-1.

Débutant :
• FOIL : 1*3 + 1*4j + 2j*3 + 2j*4j = 3+4j+6j+8j² = 3+10j-8 = -5+10j.

Intermédiaire :
• (a+bj)(c+dj) = (ac-bd) + (ad+bc)j.

Expert :
• j² = -1 ; formule algébrique standard.

Concepts clés :
• Multiplication avec j²=-1 ; pas composante par composante.

Distinctions clés :
• vs + (addition) ; vs * sur réels.

Fonctionnement :
• Développement (a+bj)(c+dj), puis j²=-1.

Exécution étape par étape :
1. (1+2j), (3+4j).
2. * → (-5+10j).

Ordre des opérations :
• *.

Cas d'utilisation courants :
• Rotation, phase, FFT.

Cas limites :
• (1+0j) * (3+4j) = (3+4j).

Considérations de performance :
• O(1).

Exemples :
• (1+1j)**2 → 2j

Remarques :
• Formule (ac-bd)+(ad+bc)j.`,
  825: `abs(3+4j) vaut 5.0 : module (magnitude) = √(3²+4²) = 5.

Débutant :
• abs sur complexe = distance à l'origine ; sqrt(9+16)=5.

Intermédiaire :
• abs(a+bj) = sqrt(a²+b²). Toujours float.

Expert :
• abs(5+12j)=13 ; abs(1+1j)=√2.

Concepts clés :
• Module = |z| = √(réel² + imag²).

Distinctions clés :
• vs .real/.imag ; vs abs sur int/float.

Fonctionnement :
• Théorème de Pythagore.

Exécution étape par étape :
1. 3+4j.
2. abs(...) → 5.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• Amplitude, distance.

Cas limites :
• abs(0j) → 0.0.

Considérations de performance :
• O(1).

Exemples :
• abs(1+0j) → 1.0

Remarques :
• Toujours float pour complex.`,
  826: `complex(3, 4) vaut (3+4j) : constructeur complex(real, imag).

Débutant :
• complex(3, 4) crée 3+4j.

Intermédiaire :
• complex(3) → (3+0j) ; complex() → 0j.

Expert :
• complex("3+4j") parse une chaîne ; complex("3 + 4j") → ValueError (espaces).

Concepts clés :
• complex(real, imag) = création explicite.

Distinctions clés :
• vs littéral 3+4j ; même résultat.

Fonctionnement :
• Construction à partir de deux floats.

Exécution étape par étape :
1. 3, 4.
2. complex(3, 4) → (3+4j).

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• Création dynamique, parsing.

Cas limites :
• complex(0, 1) → 1j.

Considérations de performance :
• O(1).

Exemples :
• complex(3, 4) == 3+4j → True

Remarques :
• imag optionnel, défaut 0.`,
  827: `(1+0j) == 1 vaut True : complexe à partie imaginaire nulle égal à int/float.

Débutant :
• 1+0j est mathématiquement égal à 1.

Intermédiaire :
• (1.5+0j) == 1.5 → True. Comparaison inter-type.

Expert :
• (1+0j) is 1 → False (objets différents) ; == compare la valeur.

Concepts clés :
• Égalité par valeur ; 0j = 0.

Distinctions clés :
• vs is ; vs (1+1j) == 1 (False).

Fonctionnement :
• Comparaison mathématique.

Exécution étape par étape :
1. (1+0j), 1.
2. == → True.

Ordre des opérations :
• ==.

Cas d'utilisation courants :
• Tests après calculs complexes.

Cas limites :
• (0+0j) == 0 → True.

Considérations de performance :
• O(1).

Exemples :
• (2+0j) == 2.0 → True

Remarques :
• Cohérent avec la sémantique mathématique.`,
  828: `5 & 3 vaut 1 : ET bit à bit. 101 & 011 = 001 = 1.

Débutant :
• & = ET : bit à 1 seulement si les deux opérandes ont 1 à cette position.

Intermédiaire :
• 5=101, 3=011 ; AND position par position → 001=1.

Expert :
• Masquage : extraire des bits ; flags.

Concepts clés :
• & = AND bit à bit ; 1 & 1 = 1, sinon 0.

Distinctions clés :
• vs and (logique) ; vs | (OR).

Fonctionnement :
• AND sur chaque paire de bits.

Exécution étape par étape :
1. 5 (101), 3 (011).
2. & → 1 (001).

Ordre des opérations :
• &.

Cas d'utilisation courants :
• Masques binaires, flags, permissions.

Cas limites :
• 0 & n = 0 ; n & n = n.

Considérations de performance :
• O(1).

Exemples :
• 0xFF & 0x0F → 0x0F (masque bas nibble)

Remarques :
• Ne pas confondre avec and.`,
  829: `5 | 3 vaut 7 : OU bit à bit. 101 | 011 = 111 = 7.

Débutant :
• | = OU : bit à 1 si l'un ou l'autre a 1.

Intermédiaire :
• 5=101, 3=011 ; OR → 111=7.

Expert :
• Combiner des flags ; setter des bits.

Concepts clés :
• | = OR bit à bit ; 0|0=0, sinon 1.

Distinctions clés :
• vs or (logique) ; vs & (AND).

Fonctionnement :
• OR sur chaque paire de bits.

Exécution étape par étape :
1. 5, 3.
2. | → 7.

Ordre des opérations :
• |.

Cas d'utilisation courants :
• Combinaison de flags.

Cas limites :
• 0 | n = n ; n | n = n.

Considérations de performance :
• O(1).

Exemples :
• 0b1000 | 0b0100 → 0b1100

Remarques :
• | pour bits, or pour booléens.`,
  830: `5 ^ 3 vaut 6 : XOR bit à bit. 101 ^ 011 = 110 = 6.

Débutant :
• ^ = XOR : bit à 1 si les deux bits diffèrent.

Intermédiaire :
• 5=101, 3=011 ; XOR → 110=6.

Expert :
• Toggle bits ; swap sans variable temp ; crypto simple.

Concepts clés :
• ^ = XOR ; 0^0=0, 1^1=0, 0^1=1, 1^0=1.

Distinctions clés :
• vs ** (puissance) ; vs | et &.

Fonctionnement :
• XOR sur chaque paire de bits.

Exécution étape par étape :
1. 5, 3.
2. ^ → 6.

Ordre des opérations :
• ^.

Cas d'utilisation courants :
• Inversion de bits, échange XOR.

Cas limites :
• n ^ n = 0 ; n ^ 0 = n.

Considérations de performance :
• O(1).

Exemples :
• a^=b; b^=a; a^=b pour swap

Remarques :
• XOR = exclusive OR.`,
  831: `~5 vaut -6 : NOT bit à bit ; en complément à 2, ~n = -(n+1).

Débutant :
• ~ inverse tous les bits ; ~5 = -6.

Intermédiaire :
• Formule : ~n = -(n+1). ~0 = -1, ~(-1) = 0.

Expert :
• Complément à 2 ; ~~n = n.

Concepts clés :
• ~ = inversion de tous les bits ; complément à 2.

Distinctions clés :
• vs - (négation) ; ~5 ≠ -5.

Fonctionnement :
• Inversion bit à bit, interprétation complément à 2.

Exécution étape par étape :
1. 5.
2. ~ → -6.

Ordre des opérations :
• ~ (unaire).

Cas d'utilisation courants :
• Masques inversés, index depuis la fin.

Cas limites :
• ~0 → -1.

Considérations de performance :
• O(1).

Exemples :
• ~(-6) → 5

Remarques :
• ~n = -(n+1) toujours.`,
  832: `1 << 3 vaut 8 : décalage à gauche ; 1 * 2³ = 8.

Débutant :
• << décale les bits à gauche ; 1 << 3 = 1000 en binaire = 8.

Intermédiaire :
• a << n = a * 2^n. Zéros insérés à droite.

Expert :
• 1 << n = 2^n ; masques : 1 << n met le bit n à 1.

Concepts clés :
• << = décalage gauche ; multiplication par 2^n.

Distinctions clés :
• vs >> (droite) ; vs * (multiplication).

Fonctionnement :
• Décalage des bits, zéros à droite.

Exécution étape par étape :
1. 1, 3.
2. << → 8.

Ordre des opérations :
• <<.

Cas d'utilisation courants :
• Puissances de 2, flags, masques.

Cas limites :
• 1 << 0 = 1.

Considérations de performance :
• O(1).

Exemples :
• 5 << 1 = 10 (5*2)

Remarques :
• Équivalent à * 2**n.`,
  833: `16 >> 2 vaut 4 : décalage à droite ; 16 // 2² = 4.

Débutant :
• >> décale les bits à droite ; 10000 >> 2 = 100 = 4.

Intermédiaire :
• a >> n = a // 2^n. Bits perdus à droite.

Expert :
• Pour négatifs : décalage arithmétique (signe préservé).

Concepts clés :
• >> = décalage droite ; division entière par 2^n.

Distinctions clés :
• vs << ; vs // (division).

Fonctionnement :
• Décalage des bits, bits perdus à droite.

Exécution étape par étape :
1. 16, 2.
2. >> → 4.

Ordre des opérations :
• >>.

Cas d'utilisation courants :
• Division rapide par 2^n, extraction de bits.

Cas limites :
• 16 >> 4 = 1.

Considérations de performance :
• O(1).

Exemples :
• 100 >> 1 = 50

Remarques :
• Équivalent à // 2**n.`,
  834: `0b1010 & 0b1100 vaut 8 : ET sur littéraux binaires. 1010 & 1100 = 1000 = 8.

Débutant :
• 0b1010=10, 0b1100=12 ; 10 & 12 = 8.

Intermédiaire :
• 0b = préfixe binaire. Le résultat est un int.

Expert :
• Position 3 : 1&1=1 ; positions 2,1,0 : 0. Résultat 1000=8.

Concepts clés :
• Littéraux 0b ; & bit à bit.

Distinctions clés :
• vs 0o (octal) ; vs 0x (hex).

Fonctionnement :
• Parsing binaire, puis &.

Exécution étape par étape :
1. 0b1010, 0b1100.
2. & → 8.

Ordre des opérations :
• Littéraux, &.

Cas d'utilisation courants :
• Masques en binaire lisible.

Cas limites :
• 0b1111 & 0b1111 = 15.

Considérations de performance :
• O(1).

Exemples :
• bin(0b1010 & 0b1100) → '0b1000'

Remarques :
• 0b pour lisibilité des masques.`,
  835: `(3+4j).conjugate() vaut (3-4j) : conjugué change le signe de la partie imaginaire.

Débutant :
• .conjugate() inverse le signe du coefficient de j.

Intermédiaire :
• (a+bj).conjugate() = (a-bj) ; utilisé pour |z|².

Expert :
• z * z.conjugate() = |z|² = réel ; z + z.conjugate() = 2*real.

Concepts clés :
• Conjugué = miroir par l'axe réel.

Distinctions clés :
• vs -z (négation) ; vs .real/.imag.

Fonctionnement :
• Copie avec .imag inversé.

Exécution étape par étape :
1. (3+4j).
2. .conjugate() → (3-4j).

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Module au carré, division complexe.

Cas limites :
• (3+0j).conjugate() = (3+0j).

Considérations de performance :
• O(1).

Exemples :
• (1+1j).conjugate() → (1-1j)

Remarques :
• z.conjugate().conjugate() = z.`,
  836: `5 & 3 vaut 1 : ET bit à bit. 101 & 011 = 001 = 1.

Débutant :
• & = ET : bit à 1 seulement si les deux opérandes ont 1 à cette position.

Intermédiaire :
• 5=101, 3=011 ; AND position par position → 001=1.

Expert :
• Masquage : extraire des bits ; flags.

Concepts clés :
• & = AND bit à bit ; 1 & 1 = 1, sinon 0.

Distinctions clés :
• vs and (logique) ; vs | (OR).

Fonctionnement :
• AND sur chaque paire de bits.

Exécution étape par étape :
1. 5 (101), 3 (011).
2. & → 1 (001).

Ordre des opérations :
• &.

Cas d'utilisation courants :
• Masques binaires, flags, permissions.

Cas limites :
• 0 & n = 0 ; n & n = n.

Considérations de performance :
• O(1).

Exemples :
• 0xFF & 0x0F → 0x0F (masque bas nibble)

Remarques :
• Ne pas confondre avec and.`,
  837: `5 | 3 vaut 7 : OU bit à bit. 101 | 011 = 111 = 7.

Débutant :
• | = OU : bit à 1 si l'un ou l'autre a 1.

Intermédiaire :
• 5=101, 3=011 ; OR → 111=7.

Expert :
• Combiner des flags ; setter des bits.

Concepts clés :
• | = OR bit à bit ; 0|0=0, sinon 1.

Distinctions clés :
• vs or (logique) ; vs & (AND).

Fonctionnement :
• OR sur chaque paire de bits.

Exécution étape par étape :
1. 5, 3.
2. | → 7.

Ordre des opérations :
• |.

Cas d'utilisation courants :
• Combinaison de flags.

Cas limites :
• 0 | n = n ; n | n = n.

Considérations de performance :
• O(1).

Exemples :
• 0b1000 | 0b0100 → 0b1100

Remarques :
• | pour bits, or pour booléens.`,
  838: `5 ^ 3 vaut 6 : XOR bit à bit. 101 ^ 011 = 110 = 6.

Débutant :
• ^ = XOR : bit à 1 si les deux bits diffèrent.

Intermédiaire :
• 5=101, 3=011 ; XOR → 110=6.

Expert :
• Toggle bits ; swap sans variable temp ; crypto simple.

Concepts clés :
• ^ = XOR ; 0^0=0, 1^1=0, 0^1=1, 1^0=1.

Distinctions clés :
• vs ** (puissance) ; vs | et &.

Fonctionnement :
• XOR sur chaque paire de bits.

Exécution étape par étape :
1. 5, 3.
2. ^ → 6.

Ordre des opérations :
• ^.

Cas d'utilisation courants :
• Inversion de bits, échange XOR.

Cas limites :
• n ^ n = 0 ; n ^ 0 = n.

Considérations de performance :
• O(1).

Exemples :
• a^=b; b^=a; a^=b pour swap

Remarques :
• XOR = exclusive OR.`,
  839: `~5 vaut -6 : NOT bit à bit ; en complément à 2, ~n = -(n+1).

Débutant :
• ~ inverse tous les bits ; ~5 = -6.

Intermédiaire :
• Formule : ~n = -(n+1). ~0 = -1, ~(-1) = 0.

Expert :
• Complément à 2 ; ~~n = n.

Concepts clés :
• ~ = inversion de tous les bits ; complément à 2.

Distinctions clés :
• vs - (négation) ; ~5 ≠ -5.

Fonctionnement :
• Inversion bit à bit, interprétation complément à 2.

Exécution étape par étape :
1. 5.
2. ~ → -6.

Ordre des opérations :
• ~ (unaire).

Cas d'utilisation courants :
• Masques inversés, index depuis la fin.

Cas limites :
• ~0 → -1.

Considérations de performance :
• O(1).

Exemples :
• ~(-6) → 5

Remarques :
• ~n = -(n+1) toujours.`,
  840: `1 << 3 vaut 8 : décalage à gauche ; 1 * 2³ = 8.

Débutant :
• << décale les bits à gauche ; 1 << 3 = 1000 en binaire = 8.

Intermédiaire :
• a << n = a * 2^n. Zéros insérés à droite.

Expert :
• 1 << n = 2^n ; masques : 1 << n met le bit n à 1.

Concepts clés :
• << = décalage gauche ; multiplication par 2^n.

Distinctions clés :
• vs >> (droite) ; vs * (multiplication).

Fonctionnement :
• Décalage des bits, zéros à droite.

Exécution étape par étape :
1. 1, 3.
2. << → 8.

Ordre des opérations :
• <<.

Cas d'utilisation courants :
• Puissances de 2, flags, masques.

Cas limites :
• 1 << 0 = 1.

Considérations de performance :
• O(1).

Exemples :
• 5 << 1 = 10 (5*2)

Remarques :
• Équivalent à * 2**n.`,
  841: `16 >> 2 vaut 4 : décalage à droite ; 16 // 2² = 4.

Débutant :
• >> décale les bits à droite ; 10000 >> 2 = 100 = 4.

Intermédiaire :
• a >> n = a // 2^n. Bits perdus à droite.

Expert :
• Pour négatifs : décalage arithmétique (signe préservé).

Concepts clés :
• >> = décalage droite ; division entière par 2^n.

Distinctions clés :
• vs << ; vs // (division).

Fonctionnement :
• Décalage des bits, bits perdus à droite.

Exécution étape par étape :
1. 16, 2.
2. >> → 4.

Ordre des opérations :
• >>.

Cas d'utilisation courants :
• Division rapide par 2^n, extraction de bits.

Cas limites :
• 16 >> 4 = 1.

Considérations de performance :
• O(1).

Exemples :
• 100 >> 1 = 50

Remarques :
• Équivalent à // 2**n.`,
  842: `0b1010 & 0b1100 vaut 8 : ET sur littéraux binaires. 1010 & 1100 = 1000 = 8.

Débutant :
• 0b1010=10, 0b1100=12 ; 10 & 12 = 8.

Intermédiaire :
• 0b = préfixe binaire. Le résultat est un int.

Expert :
• Position 3 : 1&1=1 ; positions 2,1,0 : 0. Résultat 1000=8.

Concepts clés :
• Littéraux 0b ; & bit à bit.

Distinctions clés :
• vs 0o (octal) ; vs 0x (hex).

Fonctionnement :
• Parsing binaire, puis &.

Exécution étape par étape :
1. 0b1010, 0b1100.
2. & → 8.

Ordre des opérations :
• Littéraux, &.

Cas d'utilisation courants :
• Masques en binaire lisible.

Cas limites :
• 0b1111 & 0b1111 = 15.

Considérations de performance :
• O(1).

Exemples :
• bin(0b1010 & 0b1100) → '0b1000'

Remarques :
• 0b pour lisibilité des masques.`,
  843: `0b1010 | 0b1100 vaut 14 : OU bit à bit sur littéraux binaires.

Débutant :
• 0b1010=10, 0b1100=12 ; 10 | 12 = 14.

Intermédiaire :
• OR position par position ; 1110 en binaire = 14.

Expert :
• Combiner des masques ; 0b pour lisibilité.

Concepts clés :
• Littéraux 0b ; | bit à bit.

Distinctions clés :
• vs & (AND) ; vs ^ (XOR).

Fonctionnement :
• Parsing binaire, puis |.

Exécution étape par étape :
1. 0b1010, 0b1100.
2. | → 14.

Ordre des opérations :
• Littéraux, |.

Cas d'utilisation courants :
• Combiner des flags en binaire.

Cas limites :
• 0b1111 | 0b0000 = 15.

Considérations de performance :
• O(1).

Exemples :
• bin(0b1010 | 0b1100) → '0b1110'

Remarques :
• 0b pour lisibilité.`,
  844: `0b1010 ^ 0b1100 vaut 6 : XOR bit à bit sur littéraux binaires.

Débutant :
• XOR : bit à 1 si les deux diffèrent ; 1010 ^ 1100 = 0110 = 6.

Intermédiaire :
• 10 ^ 12 = 6 ; positions où un seul a 1.

Expert :
• Toggle bits ; swap XOR sans variable temp.

Concepts clés :
• ^ = XOR ; 0^0=0, 1^1=0, 0^1=1, 1^0=1.

Distinctions clés :
• vs | (OR) ; vs & (AND).

Fonctionnement :
• XOR sur chaque paire de bits.

Exécution étape par étape :
1. 0b1010, 0b1100.
2. ^ → 6.

Ordre des opérations :
• Littéraux, ^.

Cas d'utilisation courants :
• Inversion de bits, échange XOR.

Cas limites :
• 0b1010 ^ 0b1010 = 0.

Considérations de performance :
• O(1).

Exemples :
• 0b1111 ^ 0b1010 → 5

Remarques :
• XOR = exclusive OR.`,
  845: `bin(10) vaut '0b1010' : représentation binaire en chaîne.

Débutant :
• bin(n) donne la chaîne binaire de n avec préfixe 0b.

Intermédiaire :
• bin(-5) → '-0b101' ; négatifs en complément à 2.

Expert :
• int('0b1010', 2) → 10 pour l'inverse.

Concepts clés :
• bin(int) → str ; préfixe 0b.

Distinctions clés :
• vs hex() ; vs oct() ; vs format(n, 'b').

Fonctionnement :
• Conversion en base 2, formatage.

Exécution étape par étape :
1. 10.
2. bin(10) → '0b1010'.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• Debug, affichage binaire, masques.

Cas limites :
• bin(0) → '0b0'.

Considérations de performance :
• O(log n).

Exemples :
• bin(255) → '0b11111111'

Remarques :
• Préfixe 0b pour littéraux valides.`,
  846: `bin(10 & 12) vaut '0b1000' : bin du résultat d'un ET bit à bit.

Débutant :
• 10 & 12 = 8 ; bin(8) = '0b1000'.

Intermédiaire :
• 1010 & 1100 = 1000 en binaire.

Expert :
• Chaînage : opération bitwise puis conversion.

Concepts clés :
• & puis bin ; ordre d'évaluation.

Distinctions clés :
• vs bin(10) & bin(12) (erreur, str).

Fonctionnement :
• 10 & 12 → 8, bin(8) → '0b1000'.

Exécution étape par étape :
1. 10 & 12 → 8.
2. bin(8) → '0b1000'.

Ordre des opérations :
• &, puis bin.

Cas d'utilisation courants :
• Vérifier les bits après masquage.

Cas limites :
• bin(0 & n) → '0b0'.

Considérations de performance :
• O(1).

Exemples :
• bin(0xFF & 0x0F) → '0b1111'

Remarques :
• & avant bin.`,
  847: `1 << 10 vaut 1024 : 2^10 = 1024.

Débutant :
• Décalage gauche : 1 * 2^10 = 1024.

Intermédiaire :
• 1 << n = 2^n ; puissances de 2.

Expert :
• Masques : 1 << n met le bit n à 1 ; flags ; 1 KiB = 1024.

Concepts clés :
• << = multiplication par 2^n.

Distinctions clés :
• vs 10 << 1 (décale 10) ; vs 2**10.

Fonctionnement :
• Décalage de 10 positions à gauche.

Exécution étape par étape :
1. 1, 10.
2. << → 1024.

Ordre des opérations :
• <<.

Cas d'utilisation courants :
• Puissances de 2, KB (1024), flags.

Cas limites :
• 1 << 0 = 1.

Considérations de performance :
• O(1).

Exemples :
• 1 << 20 = 1048576 (1 MiB)

Remarques :
• Équivalent à 2**10.`,
  848: `x = 5 ; x ^= x ; x vaut 0 : XOR avec soi-même annule.

Débutant :
• x ^= x équivaut à x = x ^ x ; n ^ n = 0.

Intermédiaire :
• 5 ^ 5 = 0 ; tout nombre XOR lui-même = 0.

Expert :
• Technique pour réinitialiser sans variable temp.

Concepts clés :
• ^= opérateur d'affectation ; n ^ n = 0.

Distinctions clés :
• vs x &= x (idempotent) ; vs x |= x (idempotent).

Fonctionnement :
• x ^ x → 0, assignation.

Exécution étape par étape :
1. x = 5.
2. x ^ x → 0.
3. x = 0.

Ordre des opérations :
• ^, ^=.

Cas d'utilisation courants :
• Reset de variable, swap XOR.

Cas limites :
• 0 ^= 0 → 0.

Considérations de performance :
• O(1).

Exemples :
• a ^= a ; b ^= b pour reset

Remarques :
• n ^ n = 0 toujours.`,
  849: `a, b = 3, 7 ; a ^ b ^ b vaut 3 : XOR annule avec double application.

Débutant :
• a ^ b ^ b = (a ^ b) ^ b = a ^ (b ^ b) = a ^ 0 = a.

Intermédiaire :
• XOR est auto-inverse : (a ^ b) ^ b = a.

Expert :
• Base du swap XOR : a, b = a^b, a^b^a.

Concepts clés :
• Associativité de ^ ; n ^ n = 0 ; n ^ 0 = n.

Distinctions clés :
• vs a ^ b (une fois) ; vs a + b - b.

Fonctionnement :
• a ^ b → c, c ^ b → a.

Exécution étape par étape :
1. a ^ b → 4 (3^7).
2. 4 ^ b → 3.

Ordre des opérations :
• ^ gauche à droite.

Cas d'utilisation courants :
• Swap sans variable temp ; chiffrement simple.

Cas limites :
• a ^ b ^ a = b.

Considérations de performance :
• O(1).

Exemples :
• 3 ^ 7 ^ 7 → 3

Remarques :
• (x ^ y) ^ y = x.`,
  850: `bool(0b0000) vaut False : zéro est falsy.

Débutant :
• 0b0000 = 0 ; bool(0) = False.

Intermédiaire :
• Tous les zéros (0, 0.0, 0j, 0b0) sont falsy.

Expert :
• 0b0000 == 0 → True ; même valeur.

Concepts clés :
• Falsy : 0, 0.0, '', [], {}, False, None.

Distinctions clés :
• vs bool(0b0001) = True ; vs bool(1) = True.

Fonctionnement :
• 0b0000 → 0, bool(0) → False.

Exécution étape par étape :
1. 0b0000 → 0.
2. bool(0) → False.

Ordre des opérations :
• Littéral, bool.

Cas d'utilisation courants :
• Test de flag à zéro, conditions.

Cas limites :
• bool(0x0) = False.

Considérations de performance :
• O(1).

Exemples :
• if not flags: ...

Remarques :
• 0b0000 = 0.`,
};
