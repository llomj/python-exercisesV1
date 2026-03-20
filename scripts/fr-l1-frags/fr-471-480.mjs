/** French detailed blocks Level 1 IDs 471–480 */
export default {
  471: `list("abc") vaut ['a', 'b', 'c'] : list() matérialise chaque caractère comme élément distinct.

Débutant :
• Une str est itérable caractère par caractère.
• Le résultat est une liste de str de longueur 1.

Intermédiaire :
• list ne “divise” pas par mots : seulement par caractères Unicode.
• str originale inchangée.

Expert :
• Pour tokenizer, utilisez split ou regex.

Concepts clés :
• Constructeur list depuis itérable str.

Distinctions clés :
• list(str) vs [str] (liste d'un seul élément).

Fonctionnement :
• Itération __iter__ sur str.

Exécution étape par étape :
1. Itérer "a","b","c".
2. Construire liste.

Ordre des opérations :
• Évaluation de l'argument puis list().

Cas d'utilisation courants :
• Muter caractères via liste puis join.

Cas limites :
• str vide → [].

Considérations de performance :
• O(n) mémoire et temps.

Exemples :
• list("")

Remarques :
• bytearray pour octets mutables.`,
  472: `"abc" * 2 + "d" vaut "abcabcd" : * avant + par précédence, donc d'abord duplication puis concaténation finale.

Débutant :
• "abc"*2 → "abcabc".
• Puis +"d" → "abcabcd".

Intermédiaire :
• Parenthèses changeraient l'ordre si besoin.

Expert :
• Même niveau * et niveau suivant + : * lie plus fort.

Concepts clés :
• Précédence * sur +, concaténation.

Distinctions clés :
• "abc" + "abc" + "d" même résultat ici.

Fonctionnement :
• Évaluation * puis +.

Exécution étape par étape :
1. "abc"*2.
2. Ajouter "d".

Ordre des opérations :
• * puis +.

Cas d'utilisation courants :
• Construire motifs répétés avec suffixe.

Cas limites :
• Mélange types sans conversion → erreur.

Considérations de performance :
• Proportionnel taille résultat.

Exemples :
• 2 * "x" + "y"

Remarques :
• Parenthèses explicites clarifient l'intention.`,
  473: `"abc" < "abcd" vaut True : comparaison lexicographique : préfixe commun puis la chaîne plus courte est inférieure si l'autre continue.

Débutant :
• On compare caractère par caractère a==a, b==b, c==c.
• "abc" s'arrête ; "abcd" a encore un caractère ⇒ la première est plus petite.

Intermédiaire :
• Même règle que pour list/tuple.

Expert :
• Ordre basé sur code points, pas collation humaine.

Concepts clés :
• Ordre lexicographique des str.

Distinctions clés :
• < vs == : ici strictement inférieur.

Fonctionnement :
• __lt__ sur str.

Exécution étape par étape :
1. Comparer position par position.
2. Fin de la plus courte avec préfixe égal ⇒ plus petite.

Ordre des opérations :
• Évaluation des deux str puis comparaison.

Cas d'utilisation courants :
• Tri, bornes de chaînes, recherche binaire sur texte.

Cas limites :
• Chaînes vides : "" < "a".

Considérations de performance :
• O(L) jusqu'à différence.

Exemples :
• "apple" < "banana"

Remarques :
• Normalisez casse si besoin de comparaison insensible.`,
  474: `"   ".strip() vaut '' : strip retire espaces (et whitespace par défaut) en début et fin ; ici tout est bord.

Débutant :
• Rien ne reste après retrait des trois espaces.
• strip ne touche pas “au milieu” (il n'y en a pas).

Intermédiaire :
• strip() sans argument utilise une classe de caractères whitespace Unicode.

Expert :
• strip(chars) retire un ensemble custom.

Concepts clés :
• Nettoyage de bord, chaîne vide résultat.

Distinctions clés :
• strip vs replace(' ', '').

Fonctionnement :
• Balayage depuis gauche et droite.

Exécution étape par étape :
1. Chaîne trois espaces.
2. Retrait → ''.

Ordre des opérations :
• Appel strip sur la littérale.

Cas d'utilisation courants :
• Inputs utilisateur “vides”.

Cas limites :
• Espaces internes préservés.

Considérations de performance :
• O(n) sur longueur.

Exemples :
• "\\n  x  \\n".strip()

Remarques :
• combinez lower() pour normalisation.`,
  475: `"hello".translate(str.maketrans("", "", "aeiou")) vaut "hll" : maketrans avec troisième argument liste des caractères à supprimer ; translate applique la table.

Débutant :
• Toutes les voyelles a,e,i,o,u sont retirées.
• Consonnes restent en place.

Intermédiaire :
• maketrans("", "", delchars) construit une table de suppression.

Expert :
• translate est rapide pour jeux de caractères.

Concepts clés :
• str.translate, maketrans, suppression.

Distinctions clés :
• translate vs replace enchaîné.

Fonctionnement :
• Table mappe chaque caractère ; None supprime.

Exécution étape par étape :
1. maketrans supprime voyelles.
2. translate filtre "hello".

Ordre des opérations :
• maketrans puis translate.

Cas d'utilisation courants :
• Nettoyer ponctuation, normaliser identifiants.

Cas limites :
• Caractères non listés inchangés.

Considérations de performance :
• Efficace pour gros texte vs multiples replace.

Exemples :
• str.maketrans("a","A") pour remplacement simple

Remarques :
• regex pour motifs multi-caractères.`,
  476: `int("0b1010", 2) vaut 10 : avec base 2, la chaîne peut inclure le préfixe 0b ; les chiffres valides sont interprétés en binaire.

Débutant :
• Deuxième argument = base.
• "0b1010" en base 2 : positions puissances de 2.

Intermédiaire :
• Avec base 0, Python peut auto-détecter 0b/0x/0o dans la chaîne (autre usage que base fixe).

Expert :
• Caractères invalides → ValueError.

Concepts clés :
• int(str, base), binaire.

Distinctions clés :
• int("1010",2) vs int("0b1010",0).

Fonctionnement :
• Parsing positionnel.

Exécution étape par étape :
1. Lire chiffres 0/1.
2. Accumuler valeur.
3. 10.

Ordre des opérations :
• Appel int avec base.

Cas d'utilisation courants :
• Config bits, protocoles bas niveau.

Cas limites :
• Base hors 2-36 ou combinaison invalide.

Considérations de performance :
• O(longueur).

Exemples :
• int("ff",16)

Remarques :
• bin() pour l'inverse textuel avec préfixe.`,
  477: `int("0xff", 16) vaut 255 : hexadécimal, préfixe 0x autorisé dans la chaîne avec base 16.

Débutant :
• ff en hex = 15*16+15 = 255.

Intermédiaire :
• Lettres a-f insensibles à la casse.

Expert :
• Underscores dans la chaîne peuvent séparer groupes (versions récentes).

Concepts clés :
• Parsing hexadécimal.

Distinctions clés :
• int(...,16) vs int("255") décimal.

Fonctionnement :
• Lecture chiffres hex.

Exécution étape par étape :
1. Chaîne "0xff".
2. Conversion → 255.

Ordre des opérations :
• int avec base 16.

Cas d'utilisation courants :
• Couleurs, adresses.

Cas limites :
• Caractère hors 0-9a-f → erreur.

Considérations de performance :
• O(len).

Exemples :
• int("10",16)  # 16

Remarques :
• hex() pour revenir en str avec 0x.`,
  478: `int("0o17", 8) vaut 15 : octal, 17 en base 8 = 1*8+7.

Débutant :
• Préfixe 0o marque l'octal dans la chaîne.
• Valeur décimale 15.

Intermédiaire :
• Chiffres 0-7 seulement.

Expert :
• oct() produit la forme avec préfixe 0o.

Concepts clés :
• Base 8, conversion.

Distinctions clés :
• Confusion avec décimal 17.

Fonctionnement :
• Parse chiffres octaux.

Exécution étape par étape :
1. "0o17".
2. → 15.

Ordre des opérations :
• int(...,8).

Cas d'utilisation courants :
• Permissions unix symboliques.

Cas limites :
• '8' ou '9' invalides en octal strict.

Considérations de performance :
• O(len).

Exemples :
• int("7",8)

Remarques :
• Préfixe 0 seul (vieux style) évité en Python 3.`,
  479: `bin(10) vaut "0b1010" : représentation binaire avec préfixe 0b.

Débutant :
• Résultat est str.
• Préfixe distingue du décimal.

Intermédiaire :
• Entiers négatifs : forme signée avec moins.

Expert :
• Pas de padding par défaut ; formatez vous-même si besoin.

Concepts clés :
• bin(), littéral binaire textuel.

Distinctions clés :
• bin vs format(n,'b') sans 0b.

Fonctionnement :
• Algorithme division / bits.

Exécution étape par étape :
1. Entier 10.
2. Chaîne "0b1010".

Ordre des opérations :
• Appel bin.

Cas d'utilisation courants :
• Debug bits, enseignement.

Cas limites :
• Très grands int : chaîne longue.

Considérations de performance :
• O(log n) chiffres.

Exemples :
• bin(0)

Remarques :
• int(s,2) pour parser si sans 0b attention.`,
  480: `hex(255) vaut "0xff" : hexadécimal minuscule avec préfixe 0x.

Débutant :
• str retournée.
• ff = 255.

Intermédiaire :
• hex n'ajoute pas de padding fixe.

Expert :
• Pour majuscules, formatez ou traitez la str.

Concepts clés :
• hex(), préfixe 0x.

Distinctions clés :
• hex vs f"{n:x}" sans préfixe.

Fonctionnement :
• Conversion répétée mod 16.

Exécution étape par étape :
1. 255.
2. "0xff".

Ordre des opérations :
• Appel hex.

Cas d'utilisation courants :
• Dump mémoire pédagogique, couleurs.

Cas limites :
• n négatif : forme avec signe.

Considérations de performance :
• Rapide.

Exemples :
• hex(16)

Remarques :
• int(s,16) parse souvent avec 0x.`,
};
