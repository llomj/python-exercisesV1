/** Level 2 FR 641–650 */
export default {
  641: `float("3.14") vaut 3.14 (float) : parse une chaîne décimale en nombre flottant binaire.

Débutant :
• La str doit représenter un nombre valide.

Intermédiaire :
• underscore dans la chaîne autorisé (versions récentes).

Expert :
• erreurs de représentation binaire possibles pour certaines décimales.

Concepts clés :
• Conversion str → float.

Distinctions clés :
• float("3.14") vs int("3.14") erreur.

Fonctionnement :
• analyse lexicale puis construction float.

Exécution étape par étape :
1. Lit "3.14".
2. Objet float proche.

Ordre des opérations :
• appel float().

Cas d'utilisation courants :
• input utilisateur, CSV.

Cas limites :
• "nan", "inf" parsables.

Considérations de performance :
• O(len).

Exemples :
• float("-2.5")

Remarques :
• Decimal pour décimal exact.`,
  642: `int("42") vaut 42 : entier depuis représentation décimale en texte.

Débutant :
• pas de partie fractionnaire dans la chaîne pour int simple.

Intermédiaire :
• base optionnelle int(s, base).

Expert :
• int(" 42 ") avec espaces OK.

Concepts clés :
• Parsing entier.

Distinctions clés :
• int("42.0") ValueError.

Fonctionnement :
• conversion digit par digit.

Exécution étape par étape :
1. "42".
2. 42.

Ordre des opérations :
• int().

Cas d'utilisation courants :
• formulaires.

Cas limites :
• overflow théorique rare en Python int.

Considérations de performance :
• O(len).

Exemples :
• int("0")

Remarques :
• valider avant int().`,
  643: `str(42) vaut "42" : représentation décimale par défaut de l'entier.

Débutant :
• type résultat str.

Intermédiaire :
• str sur float donne notation complète souvent "3.0".

Expert :
• __str__ sur int.

Concepts clés :
• int → str.

Distinctions clés :
• str vs repr parfois identiques pour int.

Fonctionnement :
• formatage décimal.

Exécution étape par étape :
1. 42.
2. "42".

Ordre des opérations :
• str().

Cas d'utilisation courants :
• concaténation, logs.

Cas limites :
• très grands int : str longue.

Considérations de performance :
• O(digits).

Exemples :
• str(-7)

Remarques :
• f"{42}" équivalent pratique.`,
  644: `int(3.7) vaut 3 : troncature vers zéro depuis float.

Débutant :
• pas un arrondi au plus proche.

Intermédiaire :
• math.floor diffère pour négatifs.

Expert :
• perte d'information.

Concepts clés :
• float → int tronqué.

Distinctions clés :
• int(3.7) vs round(3.7).

Fonctionnement :
• __int__ float.

Exécution étape par étape :
1. 3.7.
2. 3.

Ordre des opérations :
• int().

Cas d'utilisation courants :
• index depuis float.

Cas limites :
• nan ValueError.

Considérations de performance :
• O(1).

Exemples :
• int(9.99)

Remarques :
• math.trunc synonyme conceptuel.`,
  645: `int(-3.7) vaut -3 : troncature vers zéro, donc vers le haut sur l'axe négatif.

Débutant :
• pas -4 (ce serait floor).

Intermédiaire :
• symétrique de positif.

Expert :
• floor(-3.7) = -4.

Concepts clés :
• Troncature signée.

Distinctions clés :
• int vs floor négatif.

Fonctionnement :
• couper partie fractionnelle vers 0.

Exécution étape par étape :
1. -3.7.
2. -3.

Ordre des opérations :
• int().

Cas d'utilisation courants :
• conversions discrètes signées.

Cas limites :
• très grands float.

Considérations de performance :
• O(1).

Exemples :
• int(-0.9)  # 0

Remarques :
• documentez règle vs floor.`,
  646: `float(5) vaut 5.0 : promotion entier → float exact pour petits entiers.

Débutant :
• point décimal implicite.

Intermédiaire :
• grand int peut perdre précision si trop grand pour mantisse.

Expert :
• float a précision finie.

Concepts clés :
• int → float.

Distinctions clés :
• 5 vs 5.0 type différent.

Fonctionnement :
• conversion exacte si représentable.

Exécution étape par étape :
1. int 5.
2. 5.0.

Ordre des opérations :
• float().

Cas d'utilisation courants :
• mélange arithmétique float.

Cas limites :
• int géant.

Considérations de performance :
• O(1) petits.

Exemples :
• float(True)  # 1.0

Remarques :
• attention perte au-delà de 2**53.`,
  647: `str(1.0 + 2) vaut "3.0" : d'abord addition promeut vers float 3.0, puis str affiche la forme float.

Débutant :
• 1.0 + 2 = 3.0.

Intermédiaire :
• str inclut souvent .0.

Expert :
• format géné ou f-string contrôle l'affichage.

Concepts clés :
• Promotion float, str format.

Distinctions clés :
• str(3) "3" vs str(3.0) "3.0".

Fonctionnement :
• add puis __str__ float.

Exécution étape par étape :
1. 1.0+2 → 3.0.
2. str → "3.0".

Ordre des opérations :
• + puis str.

Cas d'utilisation courants :
• logs mixtes int/float.

Cas limites :
• repr peut différer.

Considérations de performance :
• trivial.

Exemples :
• str(2+2.0)

Remarques :
• strip .0 si besoin métier (avec prudence).`,
  648: `type(3.14 + 1) est float : littéraux et promotion mènent à float.

Débutant :
• 3.14 + 1 = 4.14.

Intermédiaire :
• int + float → float.

Expert :
• type du résultat reflète la « catégorie » dominante float.

Concepts clés :
• type(), arithmétique mixte.

Distinctions clés :
• type(1+2) int vs ici float.

Fonctionnement :
• résultat binaire float.

Exécution étape par étape :
1. Addition.
2. type → float.

Ordre des opérations :
• + puis type.

Cas d'utilisation courants :
• vérifier pipeline numérique.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• type(2 * 3.0)

Remarques :
• isinstance(x,(int,float)) pour accepter les deux.`,
  649: `type(1 + 2) est int : deux int donnent int pour + (sauf overflow théorique ; Python int illimité).

Débutant :
• somme d'entiers reste entière.

Intermédiaire :
• / ferait float même si divisible.

Expert :
• True est int sous-classe : 1+True possible.

Concepts clés :
• int stable pour + * - // % ** entiers.

Distinctions clés :
• type(1+2) vs type(1.+2).

Fonctionnement :
• int __add__.

Exécution étape par étape :
1. 1+2=3.
2. type int.

Ordre des opérations :
• + puis type.

Cas d'utilisation courants :
• compteurs.

Cas limites :
• N/A en Python 3 int.

Considérations de performance :
• O(1).

Exemples :
• type(5//2)

Remarques :
• // garde int.`,
  650: `type(1.0 * 2) est float : un opérande float promeut le produit en float.

Débutant :
• 1.0 * 2 = 2.0.

Intermédiaire :
• type résultat float même si valeur entière .0.

Expert :
• math.isclose pour tester valeur sans piéger sur type.

Concepts clés :
• Promotion float dans *.

Distinctions clés :
• type(1*2) int.

Fonctionnement :
• float __mul__ ou coercition.

Exécution étape par étape :
1. 1.0*2 → 2.0.
2. type float.

Ordre des opérations :
• * puis type.

Cas d'utilisation courants :
• physique, stats.

Cas limites :
• inf * 0 nan.

Considérations de performance :
• float un peu plus lourd.

Exemples :
• type(2/1)

Remarques :
• 2.0 est float, pas int.`,
};
