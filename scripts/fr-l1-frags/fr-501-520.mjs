/** Level 1 FR 501–520 */
export default {
  501: `type(b"hello") est la classe bytes : les littéraux b"..." produisent des séquences d'octets immuables.

Débutant :
• bytes représente des données binaires, pas du texte Unicode décodé.
• Le préfixe b indique un littéral bytes.

Intermédiaire :
• Chaque élément est un int 0–255.
• Diffère de str qui est texte Unicode.

Expert :
• bytes est immutable comme str ; bytearray est la variante mutable.

Concepts clés :
• type(), bytes, littéral b.

Distinctions clés :
• bytes vs str vs bytearray.

Fonctionnement :
• Construction d'un objet bytes depuis la notation littérale.

Exécution étape par étape :
1. Parser b"hello".
2. Stocker octets ASCII.
3. type → bytes.

Ordre des opérations :
• Littéral évalué à la demande.

Cas d'utilisation courants :
• Fichiers binaires, sockets, crypto.

Cas limites :
• Octet >255 impossible dans littéral simple.

Considérations de performance :
• Contigus en mémoire en CPython.

Exemples :
• type(b"")

Remarques :
• Décodez explicitement vers str pour affichage texte.`,
  502: `type(bytearray(b"hello")) est bytearray : copie mutable d'une séquence d'octets.

Débutant :
• bytearray se comporte comme une liste d'octets.
• On peut modifier des indices.

Intermédiaire :
• bytearray(b"...") copie souvent les données.

Expert :
• Méthodes similaires à bytes pour recherche, mais __setitem__ existe.

Concepts clés :
• bytearray, mutabilité.

Distinctions clés :
• bytes immutable ; bytearray mutable.

Fonctionnement :
• Alloue buffer modifiable.

Exécution étape par étape :
1. Partir de b"hello".
2. Construire bytearray.
3. type → bytearray.

Ordre des opérations :
• Appel constructeur.

Cas d'utilisation courants :
• Buffer I/O, construction incrémentale.

Cas limites :
• Valeur hors 0–255 → ValueError.

Considérations de performance :
• Réallocation possible comme list.

Exemples :
• bytearray(5)

Remarques :
• .decode() pour obtenir str.`,
  503: `b"hello"[0] vaut 104 : l'indexation d'un bytes renvoie un int (code octet), pas un bytes d'un élément.

Débutant :
• 104 est le code ASCII de 'h'.
• Même règle d'index négatif qu'une séquence.

Intermédiaire :
• Contrairement à str[0] qui est str une lettre, bytes[0] est int.

Expert :
• Pour obtenir un sous-bytes d'un octet : b"h"[0:1].

Concepts clés :
• Indexation bytes → int.

Distinctions clés :
• str[i] str vs bytes[i] int.

Fonctionnement :
• Accès direct au buffer.

Exécution étape par étape :
1. bytes b"hello".
2. Index 0.
3. 104.

Ordre des opérations :
• Évaluation bytes puis [].

Cas d'utilisation courants :
• Parser binaire octet par octet.

Cas limites :
• Index hors plage → IndexError.

Considérations de performance :
• O(1).

Exemples :
• b"A"[0]  # 65

Remarques :
• chr(b[0]) si ASCII attendu.`,
  504: `b"hello"[1] vaut 101 : deuxième octet, code ASCII de 'e'.

Débutant :
• Indices commencent à 0.

Intermédiaire :
• Cohérent pour toute la séquence bytes.

Expert :
• Données non texte : pas de “lettre”, juste octet.

Concepts clés :
• Octets individuels comme int.

Distinctions clés :
• Lecture seule sur bytes.

Fonctionnement :
• Même mécanisme que [0].

Exécution étape par étape :
1. b"hello".
2. Index 1 → 101.

Ordre des opérations :
• [] sur bytes.

Cas d'utilisation courants :
• Inspection paquets réseau.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• b"\\xff"[0]  # 255

Remarques :
• Toujours vérifier encodage avant interprétation texte.`,
  505: `list(b"Hi") vaut [72, 105] : itération matérialise chaque octet comme entier.

Débutant :
• H → 72, i → 105 en ASCII.

Intermédiaire :
• list() consomme tout l'itérable bytes.

Expert :
• Pour grandes données, évitez list() si un itérateur suffit.

Concepts clés :
• bytes itérable d'int.

Distinctions clés :
• list(bytes) vs list(str) caractères.

Fonctionnement :
• __iter__ produit ints.

Exécution étape par étape :
1. Itérer b"Hi".
2. Liste deux ints.

Ordre des opérations :
• list construit depuis itérable.

Cas d'utilisation courants :
• Édition ponctuelle avant reconstruction bytes.

Cas limites :
• Mémoire double pour gros buffers.

Considérations de performance :
• O(n).

Exemples :
• list(b"")  # []

Remarques :
• bytes(liste) reconstruit si valeurs valides.`,
  506: `len(b"abc") vaut 3 : nombre d'octets, pas de caractères Unicode.

Débutant :
• Chaque lettre ASCII = 1 octet.

Intermédiaire :
• Texte UTF-8 multioctet : len(bytes) ≥ len(str).

Expert :
• len O(1) sur bytes CPython.

Concepts clés :
• Taille buffer octets.

Distinctions clés :
• len(str) vs len(bytes) même texte encodé.

Fonctionnement :
• Compte octets contigus.

Exécution étape par étape :
1. b"abc".
2. len → 3.

Ordre des opérations :
• Direct.

Cas d'utilisation courants :
• En-têtes taille fixe.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• len(b"\\xff\\x00")

Remarques :
• Ne confondez pas avec nombre de glyphes.`,
  507: `b"hello" + b" world" concatène deux bytes immuables en un nouveau bytes.

Débutant :
• + exige deux bytes (ou compatible) ; pas bytes+str.

Intermédiaire :
• Nouvelle allocation ; opérandes inchangés.

Expert :
• b"".join(iterable) pour plusieurs morceaux efficacement.

Concepts clés :
• Concaténation bytes.

Distinctions clés :
• Pas de coercition str automatique.

Fonctionnement :
• Copie mémoire des deux parties.

Exécution étape par étape :
1. b"hello".
2. b" world".
3. b"hello world".

Ordre des opérations :
• Évaluation gauche/droite puis +.

Cas d'utilisation courants :
• Trames binaires, chunks.

Cas limites :
• Très grandes concaténations : join/bytearray.

Considérations de performance :
• O(n) résultat.

Exemples :
• b"a" + b"b"

Remarques :
• Vérifiez encodage homogène.`,
  508: `b"ab" * 3 vaut b"ababab" : répétition identique aux str/list.

Débutant :
• Duplique la séquence d'octets.

Intermédiaire :
• n négatif ou zéro → b''.

Expert :
• Même sémantique que str * n.

Concepts clés :
• Répétition bytes.

Distinctions clés :
• bytes * n produit bytes.

Fonctionnement :
• Allocation taille n * len.

Exécution étape par étape :
1. b"ab".
2. *3.
3. b"ababab".

Ordre des opérations :
• * après évaluation opérandes.

Cas d'utilisation courants :
• Padding, motifs réseau.

Cas limites :
• Mémoire si n énorme.

Considérations de performance :
• O(taille résultat).

Exemples :
• b"x" * 0

Remarques :
• bytearray peut être préféré pour construction.`,
  509: `b"hello"[1:3] vaut b"el" : slicing bytes renvoie bytes (copie vue).

Débutant :
• stop exclus comme str.
• Indices en octets.

Intermédiaire :
• Pas de décodage implicite.

Expert :
• memoryview pour zéro-copy.

Concepts clés :
• Slice bytes.

Distinctions clés :
• slice vs index simple int.

Fonctionnement :
• Copie sous-plage.

Exécution étape par étape :
1. Indices 1,2.
2. b"el".

Ordre des opérations :
• Évaluation base puis slice.

Cas d'utilisation courants :
• Découper payloads.

Cas limites :
• Bornes clampées sans erreur.

Considérations de performance :
• O(k) k longueur slice.

Exemples :
• b"abc"[:2]

Remarques :
• Alignement protocole souvent fixe.`,
  510: `bytes([72, 101, 108, 108, 111]) vaut b"hello" : constructeur depuis itérable d'entiers 0–255.

Débutant :
• Chaque int devient un octet.

Intermédiaire :
• itérable vide → b''.

Expert :
• bytes.fromhex alternative pour hex strings.

Concepts clés :
• Construction bytes depuis ints.

Distinctions clés :
• liste d'int vs str "hello".

Fonctionnement :
• Vérifie bornes puis copie.

Exécution étape par étape :
1. Itérer codes.
2. Valider 0–255.
3. Produit b"hello".

Ordre des opérations :
• Appel bytes().

Cas d'utilisation courants :
• Reconstituer depuis tableau de codes.

Cas limites :
• int hors plage → ValueError.

Considérations de performance :
• O(n).

Exemples :
• bytes([255])

Remarques :
• bytearray(liste) mutable équivalent.`,
  511: `Après ba = bytearray(b"abc") puis ba[0] = 65, ba vaut bytearray(b"Abc") : mutation in-place du premier octet.

Débutant :
• 65 est 'A' ASCII.
• bytearray autorise l'affectation par indice.

Intermédiaire :
• bytes seul interdirait l'assignation.

Expert :
• Peut lever TypeError si slice assigné mal formé.

Concepts clés :
• Mutation bytearray, code ASCII.

Distinctions clés :
• bytearray vs bytes immuable.

Fonctionnement :
• __setitem__ modifie buffer.

Exécution étape par étape :
1. Copie mutable de b"abc".
2. Remplace octet 0 par 65.
3. Affiche bytearray(b"Abc").

Ordre des opérations :
• Création puis assignation index.

Cas d'utilisation courants :
• Parser éditant buffer.

Cas limites :
• Valeur >255 ou <0 interdite.

Considérations de performance :
• O(1) pour un octet.

Exemples :
• ba.append(10)

Remarques :
• Décoder après modifications si texte visé.`,
  512: `b"hello".decode("utf-8") vaut "hello" : interprète les octets selon l'encodage pour produire str.

Débutant :
• decode est l'inverse logique d'encode pour texte.

Intermédiaire :
• utf-8 est l'encodage par défaut sur beaucoup de plateformes pour .decode() sans argument souvent utf-8 en 3.x (locale peut influencer défaut).

Expert :
• errors= pour remplacer/ignorer octets invalides.

Concepts clés :
• bytes → str, codec.

Distinctions clés :
• decode vs str(bytes) (repr binaire).

Fonctionnement :
• Codec UTF-8 interprète séquence.

Exécution étape par étape :
1. Octets ASCII compatibles UTF-8.
2. Chaîne Unicode identique visuelle.

Ordre des opérations :
• Méthode sur bytes.

Cas d'utilisation courants :
• Lire fichier texte ouvert en binaire.

Cas limites :
• Octets invalides UTF-8 → UnicodeDecodeError.

Considérations de performance :
• O(n).

Exemples :
• b"\\xc3\\xa9".decode()  # "é"

Remarques :
• Spécifiez l'encodage explicitement en prod.`,
  513: `"hello".encode("utf-8") vaut b"hello" : str → bytes en UTF-8 (ici ASCII pur).

Débutant :
• encode choisit comment sérialiser le texte.

Intermédiaire :
• UTF-8 variable : caractères non ASCII → plusieurs octets.

Expert :
• normalize Unicode avant encodage sensible.

Concepts clés :
• str → bytes.

Distinctions clés :
• encode vs bytes(str) interdit.

Fonctionnement :
• Codec transforme points de code.

Exécution étape par étape :
1. str "hello".
2. UTF-8 bytes identiques ASCII.

Ordre des opérations :
• Appel .encode.

Cas d'utilisation courants :
• Écrire sockets, fichiers binaires.

Cas limites :
• Caractère non représentable dans codec → erreur.

Considérations de performance :
• O(n).

Exemples :
• "é".encode("utf-8")

Remarques :
• errors= pour politiques souples.`,
  514: `b"hello".upper() vaut b"HELLO" : méthodes de casse existent sur bytes (ASCII letters seulement).

Débutant :
• Même idée que str.upper mais sur octets.

Intermédiaire :
• Non-ASCII bytes peuvent rester inchangés selon règles.

Expert :
• lower, title, swapcase analogues.

Concepts clés :
• bytes.upper, ASCII case.

Distinctions clés :
• Pas d'équivalent Unicode complet comme str casefold.

Fonctionnement :
• Parcours octets 0x61-0x7a etc.

Exécution étape par étape :
1. b"hello".
2. Transforme h→H etc.
3. b"HELLO".

Ordre des opérations :
• Méthode bytes.

Cas d'utilisation courants :
• Protocoles ASCII case-insensitive.

Cas limites :
• Octets non lettres ASCII inchangés.

Considérations de performance :
• O(n).

Exemples :
• b"a1".upper()

Remarques :
• Pour Unicode texte, decode puis str.upper.`,
  515: `b"hello".split(b"l") vaut [b"he", b"", b"o"] : split sur bytes avec séparateur bytes, segments vides possibles.

Débutant :
• Deux 'l' consécutifs créent élément vide entre.

Intermédiaire :
• bytes.split() sans argument coupe sur whitespace ASCII, comme str.split().

Expert :
• Pour d'autres séparateurs, passez un motif bytes explicite.

Concepts clés :
• split bytes.

Distinctions clés :
• Séparateur doit être bytes.

Fonctionnement :
• Recherche occurrences du motif.

Exécution étape par étape :
1. Motif b"l".
2. Découpe "he", "", "o".

Ordre des opérations :
• Appel split.

Cas d'utilisation courants :
• Parser champs binaires simples.

Cas limites :
• maxsplit optionnel.

Considérations de performance :
• O(n).

Exemples :
• b"a,b".split(b",")

Remarques :
• re sur bytes pour motifs complexes.`,
  516: `104 in b"hello" vaut True : l'opérateur in sur bytes teste la présence d'un octet (int 0–255).

Débutant :
• 104 est 'h'.

Intermédiaire :
• Avec un int, in teste un octet précis ; avec un objet bytes, in teste une sous-séquence contiguë (par ex. le motif de trois octets pour "ell" dans "hello").

Expert :
• Même opérateur, deux interprétations selon le type de l'opérande gauche du in.

Concepts clés :
• appartenance octet.

Distinctions clés :
• int in bytes vs bytes substring in bytes.

Fonctionnement :
• Scan linéaire.

Exécution étape par étape :
1. Parcours octets.
2. Trouve 104 au début.
3. True.

Ordre des opérations :
• in.

Cas d'utilisation courants :
• Tester marqueur binaire.

Cas limites :
• int hors 0–255 TypeError.

Considérations de performance :
• O(n).

Exemples :
• 0 in b"\\x00"

Remarques :
• Clairifier int vs sous-bytes dans la doc interne.`,
  517: `b"hello".hex() vaut "68656c6c6f" : chaîne hexadécimale deux caractères par octet, sans préfixe.

Débutant :
• 68 est 'h', 65 'e', etc.

Intermédiaire :
• hex inverse partiel via bytes.fromhex.

Expert :
• Séparateur optionnel en Python 3.8+ via bytes.hex(sep).

Concepts clés :
• représentation hex dump.

Distinctions clés :
• hex str vs binaire.

Fonctionnement :
• Formatage chaque octet en deux nibbles.

Exécution étape par étape :
1. Cinq octets.
2. Chaîne longueur 10 hex digits.

Ordre des opérations :
• méthode hex.

Cas d'utilisation courants :
• Logs, comparaisons visuelles.

Cas limites :
• bytes vide → "".

Considérations de performance :
• O(n).

Exemples :
• bytes.fromhex("68656c6c6f")

Remarques :
• Validez entrée fromhex (espaces).`,
  518: `bytes.fromhex("68656c6c6f") vaut b"hello" : parse une chaîne hex (souvent sans 0x).

Débutant :
• Chaque paire = un octet.

Intermédiaire :
• Espaces entre paires souvent tolérés.

Expert :
• Lever ValueError si longueur impaire ou caractères invalides.

Concepts clés :
• fromhex construction.

Distinctions clés :
• inverse de .hex().

Fonctionnement :
• Lit nibbles, combine en octets.

Exécution étape par étape :
1. Chaîne hex.
2. Produit 5 octets.

Ordre des opérations :
• méthode statique.

Cas d'utilisation courants :
• Entrer clés hex.

Cas limites :
• casse généralement ignorée.

Considérations de performance :
• O(len).

Exemples :
• bytes.fromhex("ff")

Remarques :
• Validez source.`,
  519: `b"hello" == "hello" vaut False : bytes et str sont des types distincts ; == ne convertit pas.

Débutant :
• Même texte logique mais types différents.

Intermédiaire :
• Comparez après decode ou encode.

Expert :
• Évitez == mixte ; intention claire.

Concepts clés :
• typage fort, comparaison.

Distinctions clés :
• == ne “promote” pas bytes→str.

Fonctionnement :
• bytes.__eq__ retourne NotImplemented ou False face à str.

Exécution étape par étape :
1. Types différents.
2. False.

Ordre des opérations :
• ==.

Cas d'utilisation courants :
• Piège débutant lecture fichier.

Cas limites :
• N/A.

Considérations de performance :
• O(1) échec rapide.

Exemples :
• b"a" == b"a"

Remarques :
• Tests unitaires : harmonisez types.`,
  520: `b"abc".decode() + "def" vaut "abcdef" : decode() produit str puis + concatène deux str.

Débutant :
• Plus entre str uniquement ici.

Intermédiaire :
• decode() sans argument utilise défaut plateforme souvent utf-8 en Python 3.

Expert :
• Spécifiez encoding explicite en code robuste.

Concepts clés :
• conversion puis concaténation.

Distinctions clés :
• pas bytes+str direct.

Fonctionnement :
• decode puis str.__add__.

Exécution étape par étape :
1. b"abc" → "abc".
2. +"def".
3. "abcdef".

Ordre des opérations :
• decode d'abord.

Cas d'utilisation courants :
• Assembler texte après lecture binaire.

Cas limites :
• decode peut échouer.

Considérations de performance :
• O(n).

Exemples :
• b"".decode() + ""

Remarques :
• f-string ou join pour plusieurs morceaux.`,
};
