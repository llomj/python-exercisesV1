/** Level 2 FR 691–700 — unaires, //, %, round demi-entiers */
export default {
  691: `-5 est l'entier négatif cinq : le moins unaire change le signe du littéral 5.

Débutant :
• - s'applique à un seul nombre ici.

Intermédiaire :
• Fonctionne aussi sur float : -3.14.

Expert :
• __neg__ sur types numériques personnalisés.

Concepts clés :
• Opposé arithmétique.

Distinctions clés :
• vs soustraction binaire 0-5 (même résultat ici).

Fonctionnement :
• Crée la valeur opposée.

Exécution étape par étape :
1. Littéral 5.
2. Unaire - → -5.

Ordre des opérations :
• Unaires avant * / sur expressions mixtes.

Cas d'utilisation courants :
• soldes, températures, déplacements.

Cas limites :
• -0 est 0.

Considérations de performance :
• trivial.

Exemples :
• x = 3; -x → -3

Remarques :
• Deux moins consécutifs : voir 693.`,
  692: `+5 vaut 5 : le plus unaire est une no-op numérique (souvent omis en style Python).

Débutant :
• Pas de changement de signe.

Intermédiaire :
• Utile par symétrie avec - ou pour clarifier une expression.

Expert :
• Peut appeler __pos__ sur types exotiques.

Concepts clés :
• Identité numérique unaire.

Distinctions clés :
• vs -5.

Fonctionnement :
• Retourne la même valeur avec type préservé (int reste int).

Exécution étape par étape :
1. 5.
2. + unaire → 5.

Ordre des opérations :
• comme les autres unaires.

Cas d'utilisation courants :
• rare ; notation explicite.

Cas limites :
• + sur bool True → 1 (int) en arithmétique.

Considérations de performance :
• négligeable.

Exemples :
• +(-2) → -2

Remarques :
• On écrit presque toujours 5 sans +.`,
  693: `--5 vaut 5 : le lexer regroupe comme -(-5), double négation.

Débutant :
• Deux signes moins devant 5.

Intermédiaire :
• Pas une soustraction binaire (il manque un terme gauche).

Expert :
• ---5 interprété comme -(-(-5)) → -5.

Concepts clés :
• Composition de deux opposés.

Distinctions clés :
• vs -5 seul.

Fonctionnement :
• Applique - deux fois successivement.

Exécution étape par étape :
1. -5 (premier unaire sur 5).
2. -( -5 ) → 5.

Ordre des opérations :
• unaires associés au littéral le plus proche.

Cas d'utilisation courants :
• simplifier expressions algébriques.

Cas limites :
• lisibilité : préférer parenthèses.

Considérations de performance :
• trivial.

Exemples :
• --(-3) → -3

Remarques :
• -(-5) explicite est plus clair que --5 pour débutants.`,
  694: `-(-5) vaut 5 : parenthèses forcent l'ordre visuel, même résultat que --5.

Débutant :
• L'intérieur est -5, l'extérieur prend l'opposé → 5.

Intermédiaire :
• Montre la structure d'arbre clairement.

Expert :
• Même analyse que double négation en maths.

Concepts clés :
• Opposé d'un négatif.

Distinctions clés :
• vs -(0-5) (binaire).

Fonctionnement :
• Évalue (-5) puis unaire externe.

Exécution étape par étape :
1. Sous-expression -5.
2. Opposé → 5.

Ordre des opérations :
• parenthèses puis unaire.

Cas d'utilisation courants :
• annuler un signe stocké négatif.

Cas limites :
• -(-0.0) peut être 0.0 avec signe IEEE subtil.

Considérations de performance :
• trivial.

Exemples :
• -(-10) → 10

Remarques :
• Pédagogique pour lier notation parenthésée et unaire.`,
  695: `0 // 5 vaut 0 : division entière du zéro par un non-zéro.

Débutant :
• // est la division plancher (floor) qui tombe vers moins l'infini.

Intermédiaire :
• 0 divisé par 5 donne quotient 0, reste 0.

Expert :
• Contrairement à 5 // 0 qui lève ZeroDivisionError.

Concepts clés :
• Floor division avec numérateur nul.

Distinctions clés :
• vs 5 // 0 erreur.

Fonctionnement :
• floor(0/5) en nombres réels → 0.

Exécution étape par étape :
1. 0 et 5.
2. // → 0.

Ordre des opérations :
• une opération.

Cas d'utilisation courants :
• compteurs initialisés à zéro.

Cas limites :
• 0 // -5 → 0 aussi (quotient 0).

Considérations de performance :
• O(1).

Exemples :
• 0 // 1 → 0

Remarques :
• float // int donne float floor en Python 3.`,
  696: `5 // 1 vaut 5 : tout entier divisé par 1 reste entier avec quotient lui-même.

Débutant :
• // avec diviseur 1 est stable pour les positifs.

Intermédiaire :
• Pour négatifs, // arrondit vers le bas : -3 // 1 → -3.

Expert :
• Lien avec % : a == (a//b)*b + a%b.

Concepts clés :
• Identité quotient par 1.

Distinctions clés :
• vs 5 / 1 → 5.0 float.

Fonctionnement :
• floor(5/1)=5.

Exécution étape par étape :
1. 5, 1.
2. // → 5.

Ordre des opérations :
• simple.

Cas d'utilisation courants :
• normalisation avant autres ops.

Cas limites :
• grands int exacts.

Considérations de performance :
• rapide.

Exemples :
• 42 // 1 → 42

Remarques :
• Utiliser / pour vraie division flottante.`,
  697: `0 % 5 vaut 0 : le reste de la division euclidienne "vue Python" quand le dividende est 0.

Débutant :
• 0 = 0*5 + 0.

Intermédiaire :
• 0 % n pour n≠0 est toujours 0.

Expert :
• 5 % 0 lève une erreur (diviseur nul interdit).

Concepts clés :
• Modulo avec dividende nul.

Distinctions clés :
• vs 5 % 0.

Fonctionnement :
• reste nul.

Exécution étape par étape :
1. 0, 5.
2. % → 0.

Ordre des opérations :
• une opération.

Cas d'utilisation courants :
• reset de compteur modulo.

Cas limites :
• signes : -0 % 5 → 0.

Considérations de performance :
• O(1).

Exemples :
• 0 % 100 → 0

Remarques :
• Le signe du reste suit le diviseur en Python 3.`,
  698: `5 % 1 vaut 0 : tout entier est multiple de 1, reste 0.

Débutant :
• "modulo 1" teste souvent la partie fractionnaire ailleurs (ici entier pur).

Intermédiaire :
• Cohérent avec 5 // 1 == 5 et formule division.

Expert :
• float 5.5 % 1 → 0.5 (partie décimale).

Concepts clés :
• Reste nul pour diviseur 1.

Distinctions clés :
• vs 1 % 5 → 1.

Fonctionnement :
• 5 = 5*1 + 0.

Exécution étape par étape :
1. 5, 1.
2. % → 0.

Ordre des opérations :
• direct.

Cas d'utilisation courants :
• vérifier entier avec x % 1 == 0 sur float.

Cas limites :
• négatifs : -5 % 1 → 0 en Python 3.

Considérations de performance :
• minimal.

Exemples :
• 9 % 1 → 0

Remarques :
• Ne pas confondre avec division.`,
  699: `round(2.5) vaut 2 : arrondi demi au pair (banker's rounding, IEEE tie-to-even).

Débutant :
• 2.5 est exactement entre 2 et 3 ; Python choisit le pair 2.

Intermédiaire :
• Diffère de l'école "toujours vers le haut à .5".

Expert :
• round(x, ndigits) change le comportement sur les flottants (représentation binaire).

Concepts clés :
• Tie-to-even sur .5 exact.

Distinctions clés :
• vs round(3.5) → 4 (autre demi).

Fonctionnement :
• builtins round sur float.

Exécution étape par étape :
1. Évalue 2.5.
2. Arrondi sans ndigits → int 2.

Ordre des opérations :
• appel round().

Cas d'utilisation courants :
• stats pour réduire biais systématique.

Cas limites :
• 2.5 float binaire peut ne pas être exactement demi (rare surprise).

Considérations de performance :
• C natif.

Exemples :
• round(4.5) → 4

Remarques :
• Decimal pour contrôle décimal exact.`,
  700: `round(3.5) vaut 4 : autre cas .5, le pair le plus proche est 4 (pas 3).

Débutant :
• 3 et 4 encadrent 3.5 ; le pair gagnant est 4.

Intermédiaire :
• Même règle que 699 mais pivot différent.

Expert :
• Comparer avec round(2.5)→2 pour voir la parité.

Concepts clés :
• Arrondi demi au pair pour 3.5.

Distinctions clés :
• vs round(3.4) → 3.

Fonctionnement :
• tie-to-even vers 4.

Exécution étape par étape :
1. Flottant 3.5.
2. round → 4.

Ordre des opérations :
• appel fonction.

Cas d'utilisation courants :
• même que 699, autre valeur pédagogique.

Cas limites :
• représentation float du 3.5 est exacte en binaire (cas 1/2).

Considérations de performance :
• identique round(2.5).

Exemples :
• round(5.5) → 6

Remarques :
• Toujours documenter la règle métier si finance stricte.`,
};
