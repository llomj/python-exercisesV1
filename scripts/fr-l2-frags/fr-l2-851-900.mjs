/** Level 2 FR 851–900 — level2_expert_b: float imprecision, inf/nan, epsilon, negative zero, copysign, arbitrary int, float overflow, int base, bin/hex/oct, bit_length, from_bytes/to_bytes, format, isinstance, bool, sum booleans */
export default {
  851: `0.1 + 0.1 + 0.1 - 0.3 donne ~5.55e-17 : imprécision float IEEE 754.

Débutant :
• 0.1 n'est pas exact en binaire ; accumulation d'erreurs d'arrondi.

Intermédiaire :
• 0.1+0.1+0.1 ≈ 0.30000000000000004 ; moins 0.3 → petit résidu.

Expert :
• Utiliser math.isclose() ou Decimal pour comparaisons exactes.

Concepts clés :
• Float binaire = approximation ; 0.1 = fraction répétitive en base 2.

Distinctions clés :
• vs Decimal ; vs math.isclose().

Fonctionnement :
• Arithmétique IEEE 754 ; arrondi à chaque opération.

Exécution étape par étape :
1. 0.1+0.1+0.1 → ~0.3000...04.
2. -0.3 → ~5.55e-17.

Ordre des opérations :
• +, +, -, de gauche à droite.

Cas d'utilisation courants :
• Comparaisons float : math.isclose().

Cas limites :
• 0.1*3 - 0.3 aussi non nul.

Considérations de performance :
• O(1).

Exemples :
• math.isclose(0.1+0.1+0.1, 0.3) → True

Remarques :
• Piège classique IEEE 754.`,
  852: `float("inf") - float("inf") vaut nan : ∞ - ∞ indéfini (IEEE 754).

Débutant :
• inf - inf n'a pas de sens mathématique ; résultat nan.

Intermédiaire :
• inf + inf → inf ; inf - inf → nan (formes indéterminées).

Expert :
• math.isnan() pour détecter ; nan se propage dans les calculs.

Concepts clés :
• Forme indéterminée ; IEEE 754 définit nan.

Distinctions clés :
• vs inf + inf = inf ; vs inf / inf = nan.

Fonctionnement :
• Soustraction de deux inf → nan.

Exécution étape par étape :
1. float("inf"), float("inf").
2. - → nan.

Ordre des opérations :
• -.

Cas d'utilisation courants :
• Gestion des bornes, calculs limites.

Cas limites :
• inf + (-inf) → nan.

Considérations de performance :
• O(1).

Exemples :
• math.isnan(float("inf")-float("inf")) → True

Remarques :
• ∞ - ∞ indéfini.`,
  853: `float("inf") * 0 vaut nan : 0 × ∞ indéfini (IEEE 754).

Débutant :
• inf * 0 n'a pas de sens ; résultat nan.

Intermédiaire :
• inf * 5 → inf ; inf * -1 → -inf ; inf * 0 → nan.

Expert :
• Forme indéterminée ; la limite dépend du chemin.

Concepts clés :
• 0 × ∞ indéfini ; IEEE 754 → nan.

Distinctions clés :
• vs inf * n (n≠0) ; vs 0 * inf.

Fonctionnement :
• Multiplication inf * 0 → nan.

Exécution étape par étape :
1. float("inf"), 0.
2. * → nan.

Ordre des opérations :
• *.

Cas d'utilisation courants :
• Calculs numériques avec inf.

Cas limites :
• 0.0 * inf → nan.

Considérations de performance :
• O(1).

Exemples :
• float("inf") * 0.0 → nan

Remarques :
• Forme indéterminée.`,
  854: `float("inf") / float("inf") vaut nan : ∞/∞ indéfini (IEEE 754).

Débutant :
• inf / inf n'a pas de sens ; résultat nan.

Intermédiaire :
• 1/inf → 0.0 ; inf/1 → inf ; inf/inf → nan.

Expert :
• inf/0 → ZeroDivisionError en Python (pas inf).

Concepts clés :
• ∞/∞ indéfini ; IEEE 754 → nan.

Distinctions clés :
• vs inf / n ; vs 1 / inf = 0.

Fonctionnement :
• Division inf / inf → nan.

Exécution étape par étape :
1. float("inf"), float("inf").
2. / → nan.

Ordre des opérations :
• /.

Cas d'utilisation courants :
• Calculs limites, ratios.

Cas limites :
• -inf / inf → nan.

Considérations de performance :
• O(1).

Exemples :
• 1.0 / float("inf") → 0.0

Remarques :
• ∞/∞ ≠ 1.`,
  855: `float("inf") + float("inf") vaut inf : ∞ + ∞ = ∞.

Débutant :
• inf + inf reste inf ; même direction.

Intermédiaire :
• -inf + -inf → -inf ; inf + (-inf) → nan.

Expert :
• inf + n (fini) → inf ; ajouter à inf ne change rien.

Concepts clés :
• inf + inf = inf ; contrairement à inf - inf = nan.

Distinctions clés :
• vs inf - inf = nan ; vs inf + (-inf) = nan.

Fonctionnement :
• Addition de deux inf → inf.

Exécution étape par étape :
1. float("inf"), float("inf").
2. + → inf.

Ordre des opérations :
• +.

Cas d'utilisation courants :
• Cumuls, bornes supérieures.

Cas limites :
• inf + (-inf) → nan.

Considérations de performance :
• O(1).

Exemples :
• float("inf") + 1e100 → inf

Remarques :
• inf + inf ≠ nan.`,
  856: `1.0 / 3.0 * 3.0 == 1.0 vaut True : arrondi chanceux IEEE 754.

Débutant :
• 1/3 * 3 peut redonner 1.0 par arrondi ; pas garanti en général.

Intermédiaire :
• 0.333... * 3.0 s'arrondit à 1.0 ; 0.1*3 != 0.3 (malchanceux).

Expert :
• Ne pas se fier à l'égalité float ; math.isclose() pour comparaisons.

Concepts clés :
• Arrondi au plus proche ; parfois exact par coïncidence.

Distinctions clés :
• vs 0.1*3 == 0.3 (False) ; vs Fraction(1,3)*3 == 1 (toujours).

Fonctionnement :
• / puis * ; arrondi à chaque étape.

Exécution étape par étape :
1. 1.0/3.0 → 0.333...
2. * 3.0 → 1.0 ; == 1.0 → True.

Ordre des opérations :
• /, *, ==.

Cas d'utilisation courants :
• Ne pas compter sur l'égalité float.

Cas limites :
• 0.1*3 == 0.3 → False.

Considérations de performance :
• O(1).

Exemples :
• (1/3)*3 == 1 → False en float malchanceux

Remarques :
• Arrondi chanceux, pas fiable.`,
  857: `0.1 * 3 == 0.3 vaut False : imprécision float classique.

Débutant :
• 0.1*3 donne 0.3000...04, pas exactement 0.3.

Intermédiaire :
• 0.1 en binaire = fraction répétitive ; erreur accumulée.

Expert :
• math.isclose(0.1*3, 0.3) → True pour comparaison approchée.

Concepts clés :
• 0.1*3 ≈ 0.30000000000000004 ; 0.3 ≈ 0.2999...

Distinctions clés :
• vs 1.0/3.0*3.0 == 1.0 (True, chanceux) ; vs Decimal.

Fonctionnement :
• * puis == ; comparaison exacte échoue.

Exécution étape par étape :
1. 0.1*3 → 0.3000...04.
2. == 0.3 → False.

Ordre des opérations :
• *, ==.

Cas d'utilisation courants :
• Comparaisons : math.isclose().

Cas limites :
• 0.1 + 0.2 == 0.3 → False.

Considérations de performance :
• O(1).

Exemples :
• math.isclose(0.1*3, 0.3) → True

Remarques :
• Piège le plus connu.`,
  858: `sys.float_info.epsilon : plus petit float tel que 1.0 + epsilon != 1.0.

Débutant :
• Epsilon ≈ 2.22e-16 ; limite de précision près de 1.0.

Intermédiaire :
• 1.0 + epsilon/2 == 1.0 (perdu) ; 1.0 + epsilon != 1.0.

Expert :
• Pas le plus petit float positif ; utile pour tolérances.

Concepts clés :
• Machine epsilon ; précision relative.

Distinctions clés :
• vs sys.float_info.min ; vs tolérance pour isclose.

Fonctionnement :
• Constante du système ; ~2.22e-16.

Exécution étape par étape :
1. sys.float_info.epsilon.
2. → ~2.22e-16.

Ordre des opérations :
• Accès attribut.

Cas d'utilisation courants :
• Tolérance pour comparaisons float.

Cas limites :
• 1.0 + (epsilon/2) == 1.0 → True.

Considérations de performance :
• O(1).

Exemples :
• math.isclose(a, b, rel_tol=1e-9)

Remarques :
• Epsilon machine.`,
  859: `float("inf") == float("inf") vaut True : inf égal à lui-même (contrairement à nan).

Débutant :
• inf == inf → True ; nan == nan → False.

Intermédiaire :
• inf se compare normalement ; nan jamais égal à rien.

Expert :
• inf is inf → True (singleton) ; utiliser math.isnan() pour nan.

Concepts clés :
• inf = inf ; nan != nan.

Distinctions clés :
• vs float("nan") == float("nan") = False ; vs -inf == -inf = True.

Fonctionnement :
• Comparaison par valeur ; inf défini comme égal à soi.

Exécution étape par étape :
1. float("inf"), float("inf").
2. == → True.

Ordre des opérations :
• ==.

Cas d'utilisation courants :
• Tests sur inf ; tri avec inf.

Cas limites :
• inf == -inf → False.

Considérations de performance :
• O(1).

Exemples :
• float("nan") == float("nan") → False

Remarques :
• inf prévisible ; nan non.`,
  860: `float("-0.0") == 0.0 vaut True : zéro négatif égal à zéro positif (IEEE 754).

Débutant :
• -0.0 et 0.0 ont des bits différents mais sont égaux.

Intermédiaire :
• str(-0.0) → '-0.0' ; 1/-0.0 → -inf vs 1/0.0 → inf.

Expert :
• math.copysign(1, -0.0) → -1.0 pour détecter -0.0.

Concepts clés :
• IEEE 754 : +0 et -0 égaux ; représentation différente.

Distinctions clés :
• vs copysign pour distinguer ; vs division 1/±0.

Fonctionnement :
• Comparaison par valeur ; -0.0 == 0.0.

Exécution étape par étape :
1. float("-0.0"), 0.0.
2. == → True.

Ordre des opérations :
• ==.

Cas d'utilisation courants :
• Calculs avec signe ; détection -0.

Cas limites :
• 1/-0.0 → -inf ; 1/0.0 → inf.

Considérations de performance :
• O(1).

Exemples :
• math.copysign(1, -0.0) → -1.0

Remarques :
• -0.0 == 0.0 mais repr différent.`,
  861: `math.copysign(1, -0.0) vaut -1.0 : copie le signe de -0.0 sur 1.

Débutant :
• copysign(x, y) donne x avec le signe de y ; détecte -0.0.

Intermédiaire :
• copysign(1, 0.0) → 1.0 ; copysign(1, -0.0) → -1.0.

Expert :
• Seul moyen de distinguer -0.0 et 0.0 (== True).

Concepts clés :
• copysign = valeur + signe ; détection -0.0.

Distinctions clés :
• vs -0.0 == 0.0 ; vs abs (perd le signe).

Fonctionnement :
• Prend magnitude de 1, signe de -0.0 → -1.0.

Exécution étape par étape :
1. 1, -0.0.
2. copysign → -1.0.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• Détecter -0.0 ; calculs avec signe.

Cas limites :
• copysign(1, 0.0) → 1.0.

Considérations de performance :
• O(1).

Exemples :
• math.copysign(1, float("-0")) → -1.0

Remarques :
• Détection -0.0.`,
  862: `10 ** 100 (googol) : Python calcule exactement ; int à précision arbitraire.

Débutant :
• Python int n'a pas de limite de taille ; 10**100 = 101 chiffres exacts.

Intermédiaire :
• Pas de overflow pour int ; contrairement à C/Java.

Expert :
• float peut overflow (inf) ; int jamais.

Concepts clés :
• int = précision arbitraire ; mémoire seule limite.

Distinctions clés :
• vs float (overflow) ; vs C int (32/64 bits).

Fonctionnement :
• Calcul exact ; tous les chiffres conservés.

Exécution étape par étape :
1. 10, 100.
2. ** → googol (101 chiffres).

Ordre des opérations :
• **.

Cas d'utilisation courants :
• Cryptographie, grands nombres.

Cas limites :
• 2**1000, 10**1000 possibles.

Considérations de performance :
• O(n²) pour multiplication de n chiffres.

Exemples :
• 10**100 → 1000... (101 chiffres)

Remarques :
• Pas de overflow int.`,
  863: `type(10 ** 100) vaut <class 'int'> : même les très grands restent int.

Débutant :
• Python 3 : un seul type int ; pas de long.

Intermédiaire :
• type(2**1000) → int ; pas de limite.

Expert :
• Python 2 avait int et long ; Python 3 unifié.

Concepts clés :
• int = type unique ; taille illimitée.

Distinctions clés :
• vs float (overflow) ; vs Python 2 long.

Fonctionnement :
• 10**100 → int ; type() → int.

Exécution étape par étape :
1. 10**100.
2. type(...) → int.

Ordre des opérations :
• **, type.

Cas d'utilisation courants :
• Vérifier type avant conversion float.

Cas limites :
• float(10**309) → inf (overflow).

Considérations de performance :
• O(1) pour type().

Exemples :
• type(2**1000) → int

Remarques :
• Toujours int.`,
  864: `float(10 ** 308) vaut 1e+308 : conversion valide (dans la plage float).

Débutant :
• 10**308 < sys.float_info.max (~1.8e308) ; conversion OK.

Intermédiaire :
• float(10**309) → inf ; dépasse le max.

Expert :
• Perte de précision possible pour int > 2**53.

Concepts clés :
• float max ≈ 1.8e308 ; 10**308 dans la plage.

Distinctions clés :
• vs float(10**309) = inf ; vs OverflowError (int jamais).

Fonctionnement :
• Conversion int → float ; dans plage → 1e+308.

Exécution étape par étape :
1. 10**308.
2. float(...) → 1e+308.

Ordre des opérations :
• **, float.

Cas d'utilisation courants :
• Conversion grands int vers float.

Cas limites :
• 10**309 → inf.

Considérations de performance :
• O(1).

Exemples :
• sys.float_info.max ≈ 1.8e308

Remarques :
• Valide, fini.`,
  865: `float(10 ** 309) vaut inf : overflow int→float.

Débutant :
• 10**309 dépasse sys.float_info.max ; conversion → inf.

Intermédiaire :
• Pas d'OverflowError ; Python retourne inf.

Expert :
• Seul float overflow ; int jamais.

Concepts clés :
• int trop grand pour float → inf.

Distinctions clés :
• vs float(10**308) valide ; vs OverflowError (int).

Fonctionnement :
• Conversion ; hors plage → inf.

Exécution étape par étape :
1. 10**309.
2. float(...) → inf.

Ordre des opérations :
• **, float.

Cas d'utilisation courants :
• Gérer grands nombres.

Cas limites :
• float(10**400) → inf.

Considérations de performance :
• O(1).

Exemples :
• float(2**1000) → inf

Remarques :
• Overflow silencieux.`,
  866: `-(-2147483648) vaut 2147483648 : pas d'overflow int en Python.

Débutant :
• En C, -(-2147483648) overflow ; Python gère.

Intermédiaire :
• 2147483648 = 2**31 ; dépasse int 32 bits signé.

Expert :
• Python int illimité ; pas de wrap-around.

Concepts clés :
• Pas d'overflow int ; précision arbitraire.

Distinctions clés :
• vs C/Java (overflow) ; vs float (inf).

Fonctionnement :
• Négation de -2147483648 → 2147483648.

Exécution étape par étape :
1. -2147483648.
2. -(...) → 2147483648.

Ordre des opérations :
• Négation unaire.

Cas d'utilisation courants :
• Portage code C.

Cas limites :
• -(-2**63) en Python OK.

Considérations de performance :
• O(1).

Exemples :
• -(-2**100) → 2**100

Remarques :
• Pas de limite int.`,
  867: `2 ** 1000 : pas d'overflow ; Python calcule exactement.

Débutant :
• 2**1000 = nombre énorme ; int illimité.

Intermédiaire :
• Pas d'OverflowError ; résultat exact.

Expert :
• ~302 chiffres ; float(2**1000) → inf.

Concepts clés :
• int sans overflow ; précision arbitraire.

Distinctions clés :
• vs C/Java ; vs float overflow.

Fonctionnement :
• Calcul exact ; tous les bits.

Exécution étape par étape :
1. 2, 1000.
2. ** → int énorme.

Ordre des opérations :
• **.

Cas d'utilisation courants :
• Puissances de 2 ; masques.

Cas limites :
• 2**10000 possible.

Considérations de performance :
• O(n²) pour n bits.

Exemples :
• len(str(2**1000)) → 302

Remarques :
• Pas d'overflow.`,
  868: `len(str(2 ** 1000)) vaut 302 : 2**1000 a 302 chiffres décimaux.

Débutant :
• 2**1000 en décimal = 302 chiffres.

Intermédiaire :
• str(2**1000) convertit en chaîne ; len compte les chiffres.

Expert :
• Formule : floor(1000*log10(2))+1 ≈ 302.

Concepts clés :
• 2**1000 ≈ 1.07e301 ; 302 chiffres.

Distinctions clés :
• vs bin(2**1000) ; vs hex(2**1000).

Fonctionnement :
• 2**1000 → int ; str → chaîne ; len → 302.

Exécution étape par étape :
1. 2**1000.
2. str(...) → '10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376'.
3. len(...) → 302.

Ordre des opérations :
• **, str, len.

Cas d'utilisation courants :
• Compter les chiffres ; debug.

Cas limites :
• len(str(10**100)) → 101.

Considérations de performance :
• O(n) pour str de n chiffres.

Exemples :
• len(str(2**64)) → 20

Remarques :
• 302 chiffres.`,
  869: `int("ff", 16) vaut 255 : conversion hexadécimale en int.

Débutant :
• int("ff", 16) parse "ff" en base 16 ; ff₁₆ = 255.

Intermédiaire :
• Base 16 : 0-9, a-f ; "ff" = 15*16+15 = 255.

Expert :
• int(s, 2), int(s, 8), int(s, 36) ; base 2-36.

Concepts clés :
• int(string, base) ; base optionnelle.

Distinctions clés :
• vs int("ff") (ValueError) ; vs int("255") (décimal).

Fonctionnement :
• Parse "ff" en base 16 ; f=15 ; 15*16+15=255.

Exécution étape par étape :
1. "ff", 16.
2. int(...) → 255.

Ordre des opérations :
• Appel int.

Cas d'utilisation courants :
• Parse hex, couleur, etc.

Cas limites :
• int("FF", 16) → 255 (majuscules OK).

Considérations de performance :
• O(n) avec n = longueur chaîne.

Exemples :
• int("dead", 16) → 57005

Remarques :
• Base 2-36.`,
  870: `int("1010", 2) vaut 10 : conversion binaire en int.

Débutant :
• int("1010", 2) parse "1010" en base 2 ; 1010₂ = 10.

Intermédiaire :
• Base 2 : 0-1 ; 1*8+0*4+1*2+0 = 10.

Expert :
• Équivalent à 0b1010 ; int("1010", 2) = 10.

Concepts clés :
• int(string, base) ; base 2 pour binaire.

Distinctions clés :
• vs int("1010") (décimal=1010) ; vs 0b1010.

Fonctionnement :
• Parse "1010" en base 2 → 10.

Exécution étape par étape :
1. "1010", 2.
2. int(...) → 10.

Ordre des opérations :
• Appel int.

Cas d'utilisation courants :
• Parse binaire ; masques.

Cas limites :
• int("0", 2) → 0.

Considérations de performance :
• O(n).

Exemples :
• int("11111111", 2) → 255

Remarques :
• Base 2.`,
  871: `int("777", 8) vaut 511 : conversion octale en int.

Débutant :
• int("777", 8) parse "777" en base 8 ; 777₈ = 511.

Intermédiaire :
• Base 8 : chiffres 0-7 ; 7×64 + 7×8 + 7 = 511.

Expert :
• Équivalent à 0o777 ; int("777", 8) = 511.

Concepts clés :
• int(string, base) ; base 8 pour octal.

Distinctions clés :
• vs int("777") (décimal=777) ; vs 0o777.

Fonctionnement :
• Parse "777" en base 8 ; 7×8² + 7×8¹ + 7×8⁰ = 511.

Exécution étape par étape :
1. "777", 8.
2. int(...) → 511.

Ordre des opérations :
• Appel int.

Cas d'utilisation courants :
• Parse octal ; permissions Unix (chmod).

Cas limites :
• int("0", 8) → 0 ; int("377", 8) → 255.

Considérations de performance :
• O(n).

Exemples :
• int("1000", 8) → 512

Remarques :
• Base 8.`,
  872: `int("0", 36) vaut 0 : base 36, chiffre "0".

Débutant :
• int("0", 36) parse "0" en base 36 ; 0 en toute base = 0.

Intermédiaire :
• Base 36 : 0-9 et a-z ; "0" = 0.

Expert :
• Base 36 utilise 0-9 et a-z (10+26) ; "0" = 0.

Concepts clés :
• int(string, base) ; base 2-36 ; "0" = 0 partout.

Distinctions clés :
• vs int("0") (décimal, même résultat) ; vs int("z", 36) = 35.

Fonctionnement :
• Parse "0" en base 36 → 0.

Exécution étape par étape :
1. "0", 36.
2. int(...) → 0.

Ordre des opérations :
• Appel int.

Cas d'utilisation courants :
• Parse base 36 ; encodage alphanumérique court.

Cas limites :
• int("", 36) → ValueError.

Considérations de performance :
• O(n).

Exemples :
• int("1", 36) → 1

Remarques :
• 0 invariant par base.`,
  873: `int("z", 36) vaut 35 : base 36, "z" = 35.

Débutant :
• int("z", 36) parse "z" en base 36 ; z = dernier chiffre = 35.

Intermédiaire :
• Base 36 : 0-9 (0-9), a-z (10-35) ; "z" = 35.

Expert :
• "z" est le chiffre de valeur 35 ; "10" en base 36 = 36.

Concepts clés :
• Base 36 : 36 symboles ; a=10, z=35.

Distinctions clés :
• vs int("Z", 36) = 35 (majuscules OK) ; vs int("10", 36) = 36.

Fonctionnement :
• Parse "z" ; valeur 35.

Exécution étape par étape :
1. "z", 36.
2. int(...) → 35.

Ordre des opérations :
• Appel int.

Cas d'utilisation courants :
• Encodage base36 ; URLs courtes.

Cas limites :
• int("zz", 36) → 1295.

Considérations de performance :
• O(n).

Exemples :
• int("a", 36) → 10

Remarques :
• z = 35 en base 36.`,
  874: `bin(255) vaut '0b11111111' : représentation binaire avec préfixe.

Débutant :
• bin(255) convertit 255 en chaîne binaire ; préfixe 0b.

Intermédiaire :
• 255 = 2⁸-1 ; 8 bits à 1 ; '0b' + '11111111'.

Expert :
• bin(n) = '0b' + représentation binaire sans signe ; n ≥ 0.

Concepts clés :
• bin(int) → str ; préfixe 0b ; chiffres 0 et 1.

Distinctions clés :
• vs format(255, 'b') (sans 0b) ; vs hex, oct.

Fonctionnement :
• Conversion int → str binaire ; ajout préfixe 0b.

Exécution étape par étape :
1. 255.
2. bin(255) → '0b11111111'.

Ordre des opérations :
• Appel bin.

Cas d'utilisation courants :
• Debug bits ; affichage binaire ; masques.

Cas limites :
• bin(0) → '0b0'.

Considérations de performance :
• O(log n).

Exemples :
• bin(10) → '0b1010'

Remarques :
• Préfixe 0b pour littéraux.`,
  875: `hex(255) vaut '0xff' : représentation hexadécimale avec préfixe.

Débutant :
• hex(255) convertit 255 en chaîne hex ; préfixe 0x, minuscules.

Intermédiaire :
• 255 = ff₁₆ ; 15×16 + 15 = 255.

Expert :
• hex(n) = '0x' + hex minuscules ; n ≥ 0.

Concepts clés :
• hex(int) → str ; préfixe 0x ; chiffres 0-9, a-f.

Distinctions clés :
• vs format(255, 'x') (sans 0x) ; vs format(255, 'X') majuscules.

Fonctionnement :
• Conversion int → str hex ; ajout préfixe 0x.

Exécution étape par étape :
1. 255.
2. hex(255) → '0xff'.

Ordre des opérations :
• Appel hex.

Cas d'utilisation courants :
• Couleurs ; adresses ; debug.

Cas limites :
• hex(0) → '0x0'.

Considérations de performance :
• O(log n).

Exemples :
• hex(16) → '0x10'

Remarques :
• Minuscules par défaut.`,
  876: `oct(255) vaut '0o377' : représentation octale avec préfixe.

Débutant :
• oct(255) convertit 255 en chaîne octale ; préfixe 0o.

Intermédiaire :
• 255 = 377₈ ; 3×64 + 7×8 + 7 = 255.

Expert :
• oct(n) = '0o' + octal ; Python 3 utilise 0o (pas 0 seul).

Concepts clés :
• oct(int) → str ; préfixe 0o ; chiffres 0-7.

Distinctions clés :
• vs format(255, 'o') (sans 0o) ; vs bin, hex.

Fonctionnement :
• Conversion int → str octal ; ajout préfixe 0o.

Exécution étape par étape :
1. 255.
2. oct(255) → '0o377'.

Ordre des opérations :
• Appel oct.

Cas d'utilisation courants :
• Permissions Unix ; affichage octal.

Cas limites :
• oct(0) → '0o0'.

Considérations de performance :
• O(log n).

Exemples :
• oct(8) → '0o10'

Remarques :
• 0o en Python 3.`,
  877: `(100).bit_length() vaut 7 : 100 nécessite 7 bits.

Débutant :
• bit_length() donne le nombre de bits pour représenter l'entier (sans signe).

Intermédiaire :
• 100 = 64+32+4 ; 7 bits (64 = 2⁶). 2⁶ ≤ 100 < 2⁷.

Expert :
• n.bit_length() = nombre de bits ; 0 → 0 ; n>0 → floor(log2(n))+1.

Concepts clés :
• bit_length() : taille en bits ; 0 spécial.

Distinctions clés :
• vs (0).bit_length() = 0 ; vs (255).bit_length() = 8.

Fonctionnement :
• 100 en binaire : 1100100 ; 7 bits.

Exécution étape par étape :
1. 100.
2. .bit_length() → 7.

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Allocation mémoire ; masques ; log2.

Cas limites :
• (1).bit_length() = 1.

Considérations de performance :
• O(1).

Exemples :
• (127).bit_length() → 7

Remarques :
• 0 → 0 par convention.`,
  878: `(0).bit_length() vaut 0 : zéro a 0 bit (cas spécial).

Débutant :
• 0 n'a pas de bits ; bit_length() retourne 0.

Intermédiaire :
• Seul entier avec bit_length 0 ; convention Python.

Expert :
• (0).bit_length() = 0 ; (1).bit_length() = 1 ; cas limite.

Concepts clés :
• 0 représenté sans bit ; convention.

Distinctions clés :
• vs (1).bit_length() = 1 ; vs tout n>0 a bit_length ≥ 1.

Fonctionnement :
• 0 → 0 bits → 0.

Exécution étape par étape :
1. 0.
2. .bit_length() → 0.

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Gérer le cas 0 dans calculs de bits.

Cas limites :
• Seul cas bit_length = 0.

Considérations de performance :
• O(1).

Exemples :
• (0).bit_length() == 0 → True

Remarques :
• Cas spécial documenté.`,
  879: `(1).bit_length() vaut 1 : 1 tient sur 1 bit.

Débutant :
• 1 en binaire = 1 ; un seul bit nécessaire.

Intermédiaire :
• 2⁰ = 1 ; floor(log2(1))+1 = 1.

Expert :
• Plus petit entier positif ; bit_length = 1.

Concepts clés :
• 1 = 2⁰ ; un bit suffit.

Distinctions clés :
• vs (0).bit_length() = 0 ; vs (2).bit_length() = 2.

Fonctionnement :
• 1 → 1 bit → 1.

Exécution étape par étape :
1. 1.
2. .bit_length() → 1.

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Borne inférieure pour calculs bits.

Cas limites :
• (1).bit_length() = (2).bit_length() - 1.

Considérations de performance :
• O(1).

Exemples :
• (2).bit_length() → 2

Remarques :
• Minimum pour n > 0.`,
  880: `(255).bit_length() vaut 8 : 255 = 8 bits pleins.

Débutant :
• 255 = 2⁸-1 ; 8 bits à 1 ; bit_length = 8.

Intermédiaire :
• 255 en binaire : 11111111 ; 8 bits.

Expert :
• Plus grand entier sur 8 bits non signé ; 0-255 = 1 octet.

Concepts clés :
• 255 = 2⁸-1 ; 8 bits ; 1 octet.

Distinctions clés :
• vs (256).bit_length() = 9 ; vs (254).bit_length() = 8.

Fonctionnement :
• 255 → 8 bits → 8.

Exécution étape par étape :
1. 255.
2. .bit_length() → 8.

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Taille octet ; masques 8 bits.

Cas limites :
• (256).bit_length() = 9.

Considérations de performance :
• O(1).

Exemples :
• (128).bit_length() → 8

Remarques :
• 255 = max 8 bits.`,
  881: `int.from_bytes(b'\\x00\\x0a', 'big') vaut 10 : bytes big-endian vers int.

Débutant :
• from_bytes convertit des bytes en int ; 'big' = octet de poids fort en premier.

Intermédiaire :
• b'\\x00\\x0a' = 0×256 + 10 = 10 ; big-endian.

Expert :
• int.from_bytes(bytes, byteorder, signed=False) ; 'big' ou 'little'.

Concepts clés :
• Conversion bytes → int ; ordre des octets (big/little).

Distinctions clés :
• vs 'little' (\\x0a\\x00 = 2560) ; vs to_bytes (inverse).

Fonctionnement :
• \\x00 = 0, \\x0a = 10 ; big : 0×256 + 10 = 10.

Exécution étape par étape :
1. b'\\x00\\x0a', 'big'.
2. from_bytes → 10.

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Parse binaire ; protocoles réseau ; fichiers.

Cas limites :
• from_bytes(b'', 'big') → 0.

Considérations de performance :
• O(n) octets.

Exemples :
• int.from_bytes(b'\\x01\\x00', 'big') → 256

Remarques :
• big = MSB first.`,
  882: `(10).to_bytes(2, 'big') vaut b'\\x00\\x0a' : int vers bytes big-endian.

Débutant :
• to_bytes convertit int en bytes ; 2 octets, ordre big.

Intermédiaire :
• 10 = 0×256 + 10 ; 2 octets : \\x00, \\x0a.

Expert :
• n.to_bytes(length, byteorder, signed=False) ; length doit suffire.

Concepts clés :
• Conversion int → bytes ; padding à gauche si nécessaire.

Distinctions clés :
• vs to_bytes(1, 'big') (10 tient sur 1 octet) ; vs from_bytes (inverse).

Fonctionnement :
• 10 en 2 octets big : 0, 10 → b'\\x00\\x0a'.

Exécution étape par étape :
1. 10, 2, 'big'.
2. to_bytes → b'\\x00\\x0a'.

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Sérialisation ; protocoles ; hash truncation.

Cas limites :
• (10).to_bytes(1, 'big') → b'\\x0a'.

Considérations de performance :
• O(length).

Exemples :
• (256).to_bytes(2, 'big') → b'\\x01\\x00'

Remarques :
• length trop petit → OverflowError.`,
  883: `int.from_bytes(b'\\xff', 'big') vaut 255 : un octet 0xff = 255.

Débutant :
• b'\\xff' = un octet de valeur 255 ; from_bytes('big') → 255.

Intermédiaire :
• \\xff = 255 ; non signé par défaut.

Expert :
• signed=False (défaut) ; 0-255. signed=True interprète comme complément à 2.

Concepts clés :
• Un octet ; 0xff = 255 non signé.

Distinctions clés :
• vs from_bytes(b'\\xff', 'big', signed=True) = -1 ; interprétation signée.

Fonctionnement :
• b'\\xff' → 255 (non signé).

Exécution étape par étape :
1. b'\\xff', 'big'.
2. from_bytes → 255.

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Lecture octets ; valeurs 0-255.

Cas limites :
• b'\\x00' → 0.

Considérations de performance :
• O(1) pour 1 octet.

Exemples :
• int.from_bytes(b'\\x80', 'big') → 128

Remarques :
• Défaut non signé.`,
  884: `int.from_bytes(b'\\xff', 'big', signed=True) vaut -1 : interprétation signée.

Débutant :
• signed=True : 0xff = -1 en complément à 2 sur 8 bits.

Intermédiaire :
• Un octet 0xff : non signé 255, signé -1.

Expert :
• Complément à 2 : bit de signe ; 0xff = -1 sur 8 bits signés.

Concepts clés :
• signed=True : complément à 2 ; 0xff → -1.

Distinctions clés :
• vs signed=False (255) ; même bytes, interprétation différente.

Fonctionnement :
• b'\\xff' avec signed=True → -1.

Exécution étape par étape :
1. b'\\xff', 'big', signed=True.
2. from_bytes → -1.

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Données signées ; protocoles binaires.

Cas limites :
• b'\\x7f' signed → 127 ; b'\\x80' signed → -128.

Considérations de performance :
• O(1).

Exemples :
• int.from_bytes(b'\\x80', 'big', signed=True) → -128

Remarques :
• Complément à 2.`,
  885: `(256).to_bytes(2, 'big') vaut b'\\x01\\x00' : 256 = 1×256 + 0.

Débutant :
• 256 en 2 octets big : 1, 0 ; b'\\x01\\x00'.

Intermédiaire :
• 256 = 1×256 + 0 ; premier octet 1, second 0.

Expert :
• to_bytes(2, 'big') ; 256 nécessite 2 octets minimum.

Concepts clés :
• 256 dépasse 1 octet ; 2 octets : 0x0100.

Distinctions clés :
• vs (255).to_bytes(2, 'big') = b'\\x00\\xff' ; padding à gauche.

Fonctionnement :
• 256 → 0x0100 → b'\\x01\\x00'.

Exécution étape par étape :
1. 256, 2, 'big'.
2. to_bytes → b'\\x01\\x00'.

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Entiers multi-octets ; ordre réseau.

Cas limites :
• (256).to_bytes(1, 'big') → OverflowError.

Considérations de performance :
• O(length).

Exemples :
• (65535).to_bytes(2, 'big') → b'\\xff\\xff'

Remarques :
• 256 = 2⁸.`,
  886: `format(42, 'b') vaut '101010' : binaire sans préfixe.

Débutant :
• format(42, 'b') convertit 42 en chaîne binaire ; pas de 0b.

Intermédiaire :
• 42 = 32+8+2 ; 101010 en binaire.

Expert :
• format(obj, spec) ; 'b' = binaire, 'o' = octal, 'x' = hex.

Concepts clés :
• format(n, 'b') = str binaire sans préfixe ; vs bin(n).

Distinctions clés :
• vs bin(42) = '0b101010' ; vs format(42, 'o').

Fonctionnement :
• 42 → '101010'.

Exécution étape par étape :
1. 42, 'b'.
2. format(...) → '101010'.

Ordre des opérations :
• Appel format.

Cas d'utilisation courants :
• Affichage binaire ; padding avec format.

Cas limites :
• format(0, 'b') → '0'.

Considérations de performance :
• O(log n).

Exemples :
• format(10, 'b') → '1010'

Remarques :
• Sans préfixe 0b.`,
  887: `format(42, 'o') vaut '52' : octal sans préfixe.

Débutant :
• format(42, 'o') convertit 42 en chaîne octale ; pas de 0o.

Intermédiaire :
• 42 = 5×8 + 2 ; 52 en base 8.

Expert :
• format(n, 'o') = str octal sans préfixe ; vs oct(n).

Concepts clés :
• format(n, 'o') ; chiffres 0-7.

Distinctions clés :
• vs oct(42) = '0o52' ; vs format(42, 'b').

Fonctionnement :
• 42 → '52' (octal).

Exécution étape par étape :
1. 42, 'o'.
2. format(...) → '52'.

Ordre des opérations :
• Appel format.

Cas d'utilisation courants :
• Affichage octal ; permissions.

Cas limites :
• format(0, 'o') → '0'.

Considérations de performance :
• O(log n).

Exemples :
• format(8, 'o') → '10'

Remarques :
• Sans préfixe 0o.`,
  888: `format(42, 'x') vaut '2a' : hex minuscules sans préfixe.

Débutant :
• format(42, 'x') convertit 42 en chaîne hex ; minuscules, pas de 0x.

Intermédiaire :
• 42 = 2×16 + 10 ; 2a en hex (a=10).

Expert :
• format(n, 'x') = hex minuscules ; 'X' = majuscules.

Concepts clés :
• format(n, 'x') ; chiffres 0-9, a-f.

Distinctions clés :
• vs format(42, 'X') = '2A' ; vs hex(42) = '0x2a'.

Fonctionnement :
• 42 → '2a' (hex minuscules).

Exécution étape par étape :
1. 42, 'x'.
2. format(...) → '2a'.

Ordre des opérations :
• Appel format.

Cas d'utilisation courants :
• Affichage hex ; URLs ; hash.

Cas limites :
• format(0, 'x') → '0'.

Considérations de performance :
• O(log n).

Exemples :
• format(255, 'x') → 'ff'

Remarques :
• Minuscules.`,
  889: `format(42, 'X') vaut '2A' : hex majuscules sans préfixe.

Débutant :
• format(42, 'X') convertit 42 en chaîne hex ; majuscules.

Intermédiaire :
• 42 = 2×16 + 10 ; 2A en hex (A=10 majuscule).

Expert :
• 'X' vs 'x' : majuscules pour a-f ; utile pour normes (RFC, etc.).

Concepts clés :
• format(n, 'X') ; chiffres 0-9, A-F.

Distinctions clés :
• vs format(42, 'x') = '2a' ; minuscules vs majuscules.

Fonctionnement :
• 42 → '2A' (hex majuscules).

Exécution étape par étape :
1. 42, 'X'.
2. format(...) → '2A'.

Ordre des opérations :
• Appel format.

Cas d'utilisation courants :
• Hash affichés ; UUID ; normes.

Cas limites :
• format(255, 'X') → 'FF'.

Considérations de performance :
• O(log n).

Exemples :
• format(10, 'X') → 'A'

Remarques :
• Majuscules.`,
  890: `format(3.14, '.5f') vaut '3.14000' : float avec 5 décimales.

Débutant :
• format(3.14, '.5f') affiche 5 chiffres après la virgule ; padding à droite avec des zéros.

Intermédiaire :
• .5f = 5 décimales fixes ; 3.14 → 3.14000.

Expert :
• format_spec .5f : précision 5 ; f = notation fixe (pas scientifique).

Concepts clés :
• format(float, '.Nf') ; N décimales ; zéros ajoutés si besoin.

Distinctions clés :
• vs format(3.14, '.2f') = '3.14' ; vs format(3.14, 'e') scientifique.

Fonctionnement :
• 3.14 → '3.14000' (5 décimales).

Exécution étape par étape :
1. 3.14, '.5f'.
2. format(...) → '3.14000'.

Ordre des opérations :
• Appel format.

Cas d'utilisation courants :
• Affichage prix ; rapports ; alignement.

Cas limites :
• format(3.1, '.5f') → '3.10000'.

Considérations de performance :
• O(1).

Exemples :
• format(1.5, '.3f') → '1.500'

Remarques :
• f = fixed point.`,
  891: `format(1234567, ',') vaut '1,234,567' : séparateur de milliers.

Débutant :
• format(1234567, ',') insère des virgules comme séparateurs de milliers.

Intermédiaire :
• , = séparateur de milliers (locale) ; 1,234,567.

Expert :
• format(n, ',') ; format(n, '_') pour underscores (PEP 515).

Concepts clés :
• Spécificateur , : séparateur de milliers.

Distinctions clés :
• vs format(1234567, 'd') sans séparateur ; vs _ (underscore).

Fonctionnement :
• 1234567 → '1,234,567'.

Exécution étape par étape :
1. 1234567, ','.
2. format(...) → '1,234,567'.

Ordre des opérations :
• Appel format.

Cas d'utilisation courants :
• Affichage monétaire ; rapports ; lisibilité.

Cas limites :
• format(0, ',') → '0'.

Considérations de performance :
• O(log n).

Exemples :
• format(1000000, ',') → '1,000,000'

Remarques :
• Virgule = milliers.`,
  892: `format(0.5, '%') vaut '50.0%' : pourcentage (×100 + %).

Débutant :
• format(0.5, '%') multiplie par 100 et ajoute le symbole %.

Intermédiaire :
• 0.5 × 100 = 50 ; affichage 50.0% (une décimale par défaut).

Expert :
• % = pourcentage ; multiplie par 100, ajoute %.

Concepts clés :
• format(x, '%') = str(x*100) + '%'.

Distinctions clés :
• vs format(0.5, 'f') ; vs format(0.5, '.0%') = '50%'.

Fonctionnement :
• 0.5 → 50.0% (×100, %).

Exécution étape par étape :
1. 0.5, '%'.
2. format(...) → '50.0%'.

Ordre des opérations :
• Appel format.

Cas d'utilisation courants :
• Taux ; rapports ; statistiques.

Cas limites :
• format(1.0, '%') → '100.0%'.

Considérations de performance :
• O(1).

Exemples :
• format(0.25, '%') → '25.0%'

Remarques :
• ×100 implicite.`,
  893: `f"{42:08b}" vaut '00101010' : f-string binaire, 8 caractères, padding zéros.

Débutant :
• f"{42:08b}" : 42 en binaire, 8 caractères, padding à gauche avec des zéros.

Intermédiaire :
• 42 = 101010 ; 08b = 8 caractères, binaire ; 00101010.

Expert :
• {:08b} : largeur 8, alignement à droite, padding 0, base binaire.

Concepts clés :
• f-string format spec ; 0 = padding ; 8 = largeur ; b = binaire.

Distinctions clés :
• vs f"{42:b}" = '101010' (sans padding) ; vs format(42, '08b').

Fonctionnement :
• 42 → '101010' ; pad à 8 → '00101010'.

Exécution étape par étape :
1. 42, spec 08b.
2. format → '00101010'.

Ordre des opérations :
• f-string, format.

Cas d'utilisation courants :
• Affichage bits alignés ; masques ; debug.

Cas limites :
• f"{255:08b}" → '11111111'.

Considérations de performance :
• O(1).

Exemples :
• f"{10:04b}" → '1010'

Remarques :
• 0 = zero-padding.`,
  894: `f"{255:04x}" vaut '00ff' : f-string hex, 4 caractères, padding zéros.

Débutant :
• f"{255:04x}" : 255 en hex, 4 caractères, padding à gauche avec des zéros.

Intermédiaire :
• 255 = ff ; 04x = 4 caractères, hex minuscules ; 00ff.

Expert :
• {:04x} : largeur 4, padding 0, hex minuscules.

Concepts clés :
• f-string format spec ; 0 = padding ; 4 = largeur ; x = hex.

Distinctions clés :
• vs f"{255:x}" = 'ff' ; vs f"{255:04X}" = '00FF' majuscules.

Fonctionnement :
• 255 → 'ff' ; pad à 4 → '00ff'.

Exécution étape par étape :
1. 255, spec 04x.
2. format → '00ff'.

Ordre des opérations :
• f-string, format.

Cas d'utilisation courants :
• Couleurs ; adresses ; hash courts.

Cas limites :
• f"{15:04x}" → '000f'.

Considérations de performance :
• O(1).

Exemples :
• f"{10:04x}" → '000a'

Remarques :
• x = hex minuscules.`,
  895: `f"{3.14:+.2f}" vaut '+3.14' : f-string avec signe forcé.

Débutant :
• f"{3.14:+.2f}" : affiche le signe + pour les positifs ; 2 décimales.

Intermédiaire :
• + = signe forcé (toujours afficher + ou -) ; .2f = 2 décimales.

Expert :
• + dans format spec : signe pour positifs ; - = signe seulement si négatif.

Concepts clés :
• + : signe forcé ; .2f : 2 décimales fixes.

Distinctions clés :
• vs f"{3.14:.2f}" = '3.14' (sans +) ; vs f"{-3.14:+.2f}" = '-3.14'.

Fonctionnement :
• 3.14 → '+3.14' (signe +, 2 décimales).

Exécution étape par étape :
1. 3.14, spec +.2f.
2. format → '+3.14'.

Ordre des opérations :
• f-string, format.

Cas d'utilisation courants :
• Tableaux ; alignement signes ; rapports.

Cas limites :
• f"{0:+.2f}" → '+0.00'.

Considérations de performance :
• O(1).

Exemples :
• f"{-1.5:+.2f}" → '-1.50'

Remarques :
• + force toujours le signe.`,
  896: `isinstance(3.14, (int, float)) vaut True : 3.14 est float, tuple de types.

Débutant :
• isinstance(x, (A, B)) vérifie si x est instance de A ou B ; 3.14 est float.

Intermédiaire :
• Deuxième argument peut être un tuple ; 3.14 est float → True.

Expert :
• isinstance(obj, (A, B)) = isinstance(obj, A) or isinstance(obj, B).

Concepts clés :
• isinstance(obj, type) ; type peut être tuple pour plusieurs types.

Distinctions clés :
• vs isinstance(3.14, int) = False ; vs type(3.14) == float.

Fonctionnement :
• 3.14 → float ; float in (int, float) → True.

Exécution étape par étape :
1. 3.14, (int, float).
2. isinstance → True.

Ordre des opérations :
• Appel isinstance.

Cas d'utilisation courants :
• Validation polymorphique ; accepter int ou float.

Cas limites :
• isinstance(3, (int, float)) → True.

Considérations de performance :
• O(1).

Exemples :
• isinstance(x, (str, bytes)) pour texte

Remarques :
• Tuple = union de types.`,
  897: `isinstance(True, int) vaut True : bool est sous-classe de int.

Débutant :
• True est un bool ; bool hérite de int ; isinstance(True, int) → True.

Intermédiaire :
• bool est sous-classe de int ; True et False sont des int numériques.

Expert :
• type(True) = bool ; isinstance(True, int) = True (héritage).

Concepts clés :
• bool sous-classe de int ; True = 1, False = 0.

Distinctions clés :
• vs type(True) == int (False) ; isinstance inclut sous-classes.

Fonctionnement :
• True → bool ; bool < int → isinstance True.

Exécution étape par étape :
1. True, int.
2. isinstance → True.

Ordre des opérations :
• Appel isinstance.

Cas d'utilisation courants :
• Accepter int ou bool ; validation numérique.

Cas limites :
• isinstance(False, int) = True.

Considérations de performance :
• O(1).

Exemples :
• isinstance(x, (int, float)) pour nombres

Remarques :
• Héritage bool de int.`,
  898: `True + True vaut 2 : booléens en arithmétique, True = 1.

Débutant :
• True vaut 1 ; True + True = 1 + 1 = 2.

Intermédiaire :
• bool hérite de int ; True et False participent aux opérations numériques.

Expert :
• int(True) = 1, int(False) = 0 ; True + True = 2.

Concepts clés :
• bool = int pour l'arithmétique ; True = 1, False = 0.

Distinctions clés :
• vs type(True + True) = int ; vs True is 1 (False).

Fonctionnement :
• True → 1, True → 1 ; 1 + 1 = 2.

Exécution étape par étape :
1. True, True.
2. + → 2.

Ordre des opérations :
• +.

Cas d'utilisation courants :
• Compter les True : sum(x for x in it if cond).

Cas limites :
• True + False = 1.

Considérations de performance :
• O(1).

Exemples :
• sum([True, False, True]) → 2

Remarques :
• Héritage bool de int.`,
  899: `False * 100 vaut 0 : False = 0, 0 × 100 = 0.

Débutant :
• False vaut 0 ; False * 100 = 0 * 100 = 0.

Intermédiaire :
• bool en arithmétique : False = 0 ; multiplication par 0.

Expert :
• int(False) = 0 ; False * n = 0 pour tout n.

Concepts clés :
• False = 0 ; multiplication conditionnelle (0 si False).

Distinctions clés :
• vs True * 100 = 100 ; vs (x > 0) * 100 (astuce).

Fonctionnement :
• False → 0 ; 0 * 100 = 0.

Exécution étape par étape :
1. False, 100.
2. * → 0.

Ordre des opérations :
• *.

Cas d'utilisation courants :
• (cond) * value : 0 si False, value si True.

Cas limites :
• False * 0 = 0.

Considérations de performance :
• O(1).

Exemples :
• (x > 0) * 100  # 100 si True, 0 si False

Remarques :
• Astuce multiplication conditionnelle.`,
  900: `sum([True, True, False, True]) vaut 3 : somme des booléens = nombre de True.

Débutant :
• True=1, False=0 ; 1+1+0+1 = 3.

Intermédiaire :
• sum additionne ; booléens convertis en int (1, 0).

Expert :
• Pattern : sum(cond(x) for x in it) = compter les True.

Concepts clés :
• sum de bool = count des True ; bool = 1 ou 0.

Distinctions clés :
• vs sum(1 for x in it if cond) ; plus direct avec bool.

Fonctionnement :
• True+True+False+True → 1+1+0+1 = 3.

Exécution étape par étape :
1. True → 1, True → 1, False → 0, True → 1.
2. sum → 3.

Ordre des opérations :
• sum, itération, +.

Cas d'utilisation courants :
• Compter les éléments qui satisfont une condition.

Cas limites :
• sum([False, False]) = 0.

Considérations de performance :
• O(n).

Exemples :
• sum(x > 0 for x in lst)  # compte les positifs

Remarques :
• Astuce : sum de bool = count.`,
};
