/** French detailed blocks Level 1 IDs 461–470 */
export default {
  461: `"age: " + str(25) vaut "age: 25" : str() convertit l'entier en texte avant concaténation.

Débutant :
• + entre str assemble les morceaux.
• str(25) produit les caractères 2 et 5.

Intermédiaire :
• str est la conversion explicite ; format/f-string sont des alternatives.
• L'ordre des morceaux suit l'expression.

Expert :
• __str__ sur int produit la représentation décimale standard.

Concepts clés :
• Concaténation str + str, conversion int → str.

Distinctions clés :
• "age: " + 25 lève TypeError sans conversion.

Fonctionnement :
• Évaluation de str(25) puis concaténation.

Exécution étape par étape :
1. str(25) → "25".
2. "age: " + "25".
3. "age: 25".

Ordre des opérations :
• Appel str puis +.

Cas d'utilisation courants :
• Messages utilisateur simples, logs.

Cas limites :
• Très grands int : chaîne longue mais valide.

Considérations de performance :
• Coût linéaire en taille du texte.

Exemples :
• "x=" + str([])

Remarques :
• Préférez f-strings pour lisibilité.`,
  462: `"age: " + 25 lève TypeError : on ne concatène pas directement str et int.

Débutant :
• + exige deux opérandes compatibles.
• Il faut convertir le nombre ou utiliser une f-string.

Intermédiaire :
• Message typique : can only concatenate str (not "int") to str.

Expert :
• f"age: {25}" ou format évite l'erreur.

Concepts clés :
• Typage fort implicite pour + sur str.

Distinctions clés :
• JavaScript ferait une coercition ; Python refuse.

Fonctionnement :
• str.__add__ rejette int.

Exécution étape par étape :
1. Évaluation des opérandes.
2. Tentative d'addition str+int.
3. TypeError.

Ordre des opérations :
• Pas de conversion automatique.

Cas d'utilisation courants :
• Piège débutant après saisie input non convertie.

Cas limites :
• None + str est aussi interdit sans str(None).

Considérations de performance :
• N/A (échec rapide).

Exemples :
• "v=" + str(1)

Remarques :
• Activez les linters/type checkers pour attraper tôt.`,
  463: `"hi" * -1 vaut '' : répéter une chaîne un nombre de fois négatif donne la chaîne vide en Python 3.

Débutant :
• Pas de répétition “inverse”.
• Résultat vide, pas d'erreur.

Intermédiaire :
• 0 donne aussi ''.
• Positif duplique normalement.

Expert :
• Cohérent avec la sémantique de séquence * n.

Concepts clés :
• Répétition str, cas n ≤ 0.

Distinctions clés :
• Liste * -1 → [] également.

Fonctionnement :
• Algorithme de répétition renvoie vide si n <= 0.

Exécution étape par étape :
1. "hi" et -1.
2. Produit ''.

Ordre des opérations :
• Évaluation des deux opérandes puis *.

Cas d'utilisation courants :
• Boucles où n peut être 0 ou négatif.

Cas limites :
• float comme multiplicateur → TypeError.

Considérations de performance :
• Instantané.

Exemples :
• "x" * 0

Remarques :
• Documentez pourquoi n peut être négatif dans votre code.`,
  464: `len("a\\nb") vaut 3 : la séquence contient 'a', un saut de ligne, puis 'b'.

Débutant :
• \\n est un seul caractère (U+000A).
• len compte les caractères, pas les “lignes visuelles”.

Intermédiaire :
• splitlines() interpréterait différemment les fins de ligne.

Expert :
• \\r\\n sous Windows peut compter comme deux caractères si présents bruts.

Concepts clés :
• Échappements, len sur str.

Distinctions clés :
• len vs nombre de lignes affichées.

Fonctionnement :
• Comptage des codepoints.

Exécution étape par étape :
1. Littéral trois caractères.
2. len → 3.

Ordre des opérations :
• Création de la str puis len.

Cas d'utilisation courants :
• Limites de buffer, validation longueur fichier texte.

Cas limites :
• Normalisation Unicode des sauts de ligne.

Considérations de performance :
• O(1) len CPython.

Exemples :
• len("\\\\")  # 1 (backslash)

Remarques :
• repr() montre les échappements clairement.`,
  465: `"a\\tb".split("\\t") vaut ['a', 'b'] : split coupe sur le séparateur tabulation.

Débutant :
• split sans argument coupe sur whitespace ; ici séparateur explicite.
• Résultat : liste de str.

Intermédiaire :
• Séparateurs adjacents peuvent produire '' selon cas.

Expert :
• split et join sont inverses approximatifs.

Concepts clés :
• str.split, délimiteur, liste.

Distinctions clés :
• split("\\t") vs split().

Fonctionnement :
• Parcours et découpe.

Exécution étape par étape :
1. Chaîne "a\\tb".
2. Coupe sur tab.
3. ['a','b'].

Ordre des opérations :
• Évaluation de la str puis appel split.

Cas d'utilisation courants :
• TSV, exports tableurs.

Cas limites :
• Pas de tab : liste d'un seul élément.

Considérations de performance :
• O(n) sur longueur.

Exemples :
• "a,b".split(",")

Remarques :
• csv module pour CSV réels avec guillemets.`,
  466: `chr(65) vaut 'A' : chr convertit un code point Unicode en caractère str d'un élément.

Débutant :
• 65 est le code ASCII/Unicode de A majuscule.
• Résultat toujours str longueur 1 (pour valeur valide).

Intermédiaire :
• Hors plage valide pour l'implémentation : ValueError.

Expert :
• chr et ord sont inverses pour BMP usuel.

Concepts clés :
• Code point, caractère, chr.

Distinctions clés :
• chr vs bytes : chr travaille en str Unicode.

Fonctionnement :
• Construction du caractère depuis l'entier.

Exécution étape par étape :
1. Entier 65.
2. chr → 'A'.

Ordre des opérations :
• Appel direct.

Cas d'utilisation courants :
• Manipuler ASCII, ROT13 pédagogique, puzzles.

Cas limites :
• Valeurs invalides selon version.

Considérations de performance :
• O(1).

Exemples :
• chr(48)  # '0'

Remarques :
• Pour bytes, utilisez bytes([65]).`,
  467: `chr(ord("a") + 1) vaut 'b' : ord donne le code de 'a', +1 décale, chr reconstruit la lettre suivante.

Débutant :
• ord("a") est 97 en ASCII/Unicode minuscule latine.
• +1 donne 98 → 'b'.

Intermédiaire :
• Ne suppose pas que l'alphabet est continu pour toutes les langues.

Expert :
• Pour rotations sur AZ seulement, modulo et bornes.

Concepts clés :
• ord, chr, arithmétique sur code points.

Distinctions clés :
• Majuscules vs minuscules ont des codes différents.

Fonctionnement :
• ord puis addition puis chr.

Exécution étape par étape :
1. ord('a').
2. +1.
3. chr → 'b'.

Ordre des opérations :
• De l'intérieur vers l'extérieur.

Cas d'utilisation courants :
• César simple, génération de plages.

Cas limites :
• Dépassement hors 'z' : caractère imprévu ou erreur.

Considérations de performance :
• O(1).

Exemples :
• chr(ord('A') + 32)  # 'a' en ASCII

Remarques :
• Préférez .lower() pour casse.`,
  468: `min("hello") vaut 'e' : min sur str compare lexicographiquement les caractères (ord).

Débutant :
• Chaque caractère est comparé ; le plus “petit” gagne.
• 'e' précède 'h','l','o' dans l'ordre Unicode/ASCII de cette chaîne.

Intermédiaire :
• min sur itérable vide lève ValueError ; str non vide OK.

Expert :
• Ordre dépend des points de code, pas de la locale humaine.

Concepts clés :
• min sur séquence de caractères.

Distinctions clés :
• min(str) vs min(liste de str).

Fonctionnement :
• Parcours linéaire avec meilleur courant.

Exécution étape par étape :
1. Itérer sur h,e,l,l,o.
2. Retenir le minimum 'e'.

Ordre des opérations :
• Comparaisons successives.

Cas d'utilisation courants :
• Première lettre alphabétique, jeux.

Cas limites :
• Chaîne vide interdite pour min.

Considérations de performance :
• O(n).

Exemples :
• min("cba")

Remarques :
• Pour tri humain, clé de collation locale.`,
  469: `sorted("python") vaut ['h', 'n', 'o', 'p', 't', 'y'] : sorted renvoie une nouvelle liste triée des caractères.

Débutant :
• Les caractères deviennent des éléments de liste str de longueur 1.
• L'original "python" reste inchangé.

Intermédiaire :
• Ordre lexicographique sur code points.
• sorted accepte key= et reverse=.

Expert :
• TimSort sous-jacent ; stable.

Concepts clés :
• sorted, itération sur str, liste.

Distinctions clés :
• sorted vs .sort() (méthode list in-place).

Fonctionnement :
• Matérialise une liste puis trie.

Exécution étape par étape :
1. Itérer la str.
2. Trier.
3. Nouvelle liste.

Ordre des opérations :
• Évaluation str puis sorted.

Cas d'utilisation courants :
• Anagrammes, signatures triées.

Cas limites :
• Caractères égaux : ordre stable.

Considérations de performance :
• O(n log n).

Exemples :
• sorted("ba", reverse=True)

Remarques :
• join pour recoller en str.`,
  470: `"".join(sorted("python")) vaut "hnopty" : on trie les caractères puis on les recolle sans séparateur.

Débutant :
• sorted donne une liste ; join attend des str.
• Le séparateur vide colle directement.

Intermédiaire :
• Équivalent conceptuel au tri des lettres du mot.

Expert :
• join sur str exige que l'itérable contienne des str.

Concepts clés :
• join, sorted, pipeline texte.

Distinctions clés :
• join vs + répété (join plus efficace pour listes longues).

Fonctionnement :
• sorted crée liste ; join alloue résultat final.

Exécution étape par étape :
1. sorted("python") → liste.
2. "".join(...) → str triée.

Ordre des opérations :
• Intérieur sorted puis join.

Cas d'utilisation courants :
• Signature triée, détection d'anagramme.

Cas limites :
• join sur liste non-str → erreur.

Considérations de performance :
• Meilleur que + en boucle pour nombreux morceaux.

Exemples :
• "-".join(["a","b"])

Remarques :
• sorted renvoie liste : type différent de la str source.`,
};
