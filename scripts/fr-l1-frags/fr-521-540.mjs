/** Level 1 FR 521–540 */
export default {
  521: `"café".encode("utf-8") produit une séquence d'octets : c, a, f en ASCII puis deux octets pour é (UTF-8 typique).

Débutant :
• encode renvoie bytes, pas str.

Intermédiaire :
• UTF-8 est variable : caractères ASCII = 1 octet.

Expert :
• Normaliser (NFC) avant encodage si égalité importante.

Concepts clés :
• Texte Unicode → octets UTF-8.

Distinctions clés :
• len(str) vs len(bytes) pour même mot accentué.

Fonctionnement :
• Codec UTF-8 mappe points de code → octets.

Exécution étape par étape :
1. str "café".
2. encode utf-8.
3. bytes longueur > len(str) si accents.

Ordre des opérations :
• Appel méthode encode.

Cas d'utilisation courants :
• Stockage fichier, API JSON bytes.

Cas limites :
• Caractères non encodables selon codec.

Considérations de performance :
• O(n).

Exemples :
• "é".encode()

Remarques :
• Spécifiez toujours utf-8 en interop.`,
  522: `len("café") vaut 4 : len sur str compte les points de code Unicode (c, a, f, é), pas les octets UTF-8.

Débutant :
• Quatre caractères utilisateur visibles ici.

Intermédiaire :
• Émojis peuvent être plusieurs points de code (combinaisons).

Expert :
• grapheme vs codepoint : len ne compte pas les glyphes humains.

Concepts clés :
• len str = nombre de codepoints.

Distinctions clés :
• comparer avec len(.encode()).

Fonctionnement :
• Compte éléments internes str.

Exécution étape par étape :
1. Points de code 4.
2. len 4.

Ordre des opérations :
• O(1) CPython.

Cas d'utilisation courants :
• Limites de saisie UI.

Cas limites :
• Normalisation peut changer nombre de codepoints.

Considérations de performance :
• O(1) stocké.

Exemples :
• len("😀")  # souvent 1 ou 2 selon séquence

Remarques :
• unicodedata pour analyses fines.`,
  523: `len("café".encode("utf-8")) vaut 5 : trois lettres ASCII (1 octet chacune) + é en UTF-8 (souvent 2 octets) → 3+2=5.

Débutant :
• len sur bytes compte octets.

Intermédiaire :
• Même texte : deux longueurs différentes selon type.

Expert :
• UTF-8 maximal 4 octets par point de code.

Concepts clés :
• taille mémoire octets vs longueur texte.

Distinctions clés :
• str len vs bytes len.

Fonctionnement :
• encode puis compte octets.

Exécution étape par étape :
1. Encoder café.
2. len → 5.

Ordre des opérations :
• encode puis len.

Cas d'utilisation courants :
• buffers réseau, quotas taille.

Cas limites :
• autres encodages : longueurs différentes.

Considérations de performance :
• O(n) encode.

Exemples :
• len("a".encode("utf-16le"))

Remarques :
• Ne supposez pas 1 char = 1 octet.`,
  524: `"hello".encode("ascii") vaut b"hello" : tout est dans la plage ASCII 0–127.

Débutant :
• ASCII est sous-ensemble de UTF-8 identique pour ces caractères.

Intermédiaire :
• encode ascii refuse >127.

Expert :
• utile pour protocoles 7-bit.

Concepts clés :
• codec ascii strict.

Distinctions clés :
• ascii vs utf-8 pour non ASCII.

Fonctionnement :
• Vérifie chaque codepoint ≤127.

Exécution étape par étape :
1. "hello" pur ASCII.
2. bytes identiques.

Ordre des opérations :
• encode.

Cas d'utilisation courants :
• SMTP ancien, contraintes héritées.

Cas limites :
• accent → UnicodeEncodeError.

Considérations de performance :
• rapide.

Exemples :
• "ASCII".encode("ascii")

Remarques :
• utf-8 préféré aujourd'hui par défaut.`,
  525: `"café".encode("ascii") lève UnicodeEncodeError : é dépasse la plage ASCII.

Débutant :
• ascii n'accepte pas les accents.

Intermédiaire :
• Utilisez utf-8 ou errors="replace"/"ignore" si contrainte ASCII souple.

Expert :
• normaliser vers ASCII translittéré est autre problème.

Concepts clés :
• erreur d'encodage stricte.

Distinctions clés :
• échec explicite vs remplacement.

Fonctionnement :
• codec lève quand caractère hors plage.

Exécution étape par étape :
1. Parcourt "café".
2. Rencontre é.
3. UnicodeEncodeError.

Ordre des opérations :
• encode strict.

Cas d'utilisation courants :
• détecter données non ASCII trop tôt.

Cas limites :
• errors= change comportement.

Considérations de performance :
• échec avant fin.

Exemples :
• "€".encode("ascii","ignore")

Remarques :
• validez jeux de caractères en amont.`,
  526: `b"hello".decode("ascii") vaut "hello" : octets ASCII → str identique.

Débutant :
• symétrique d'encode pour ASCII pur.

Intermédiaire :
• octet >127 avec ascii strict → UnicodeDecodeError.

Expert :
• utf-8 est sur-ensemble ; ascii subset.

Concepts clés :
• decode ascii.

Distinctions clés :
• ascii decode vs utf-8 decode sur mêmes octets ASCII identiques.

Fonctionnement :
• interprète chaque octet comme codepoint identique.

Exécution étape par étape :
1. b"hello".
2. str cinq lettres.

Ordre des opérations :
• decode.

Cas d'utilisation courants :
• payloads garantis 7-bit.

Cas limites :
• données binaires bruitées.

Considérations de performance :
• O(n).

Exemples :
• b"\\x00".decode("ascii")

Remarques :
• vérifiez que le contenu est vraiment texte.`,
  527: `len("😀".encode("utf-8")) vaut 4 : l'émoji a un seul codepoint souvent mais UTF-8 utilise 4 octets (F0 9F 98 80 typiquement).

Débutant :
• len(bytes) ≠ len(str) pour émojis.

Intermédiaire :
• utile pour quotas réseau.

Expert :
• UTF-16 aurait autre taille.

Concepts clés :
• emoji, utf-8 multioctet.

Distinctions clés :
• glyphe vs octets.

Fonctionnement :
• encode utf-8 standard.

Exécution étape par étape :
1. str un glyphe.
2. encode.
3. 4 octets.

Ordre des opérations :
• encode puis len.

Cas d'utilisation courants :
• Twitter-like limits bytes.

Cas limites :
• modificateurs ZWJ changent grapheme.

Considérations de performance :
• O(1) len après encode.

Exemples :
• len("a".encode())

Remarques :
• testez avec vrais emojis cibles.`,
  528: `len("😀") vaut souvent 1 : un point de code (U+1F600) dans la str standard.

Débutant :
• len compte codepoints, pas octets.

Intermédiaire :
• séquences avec modificateurs peuvent donner len>1 pour un “visuel”.

Expert :
• voir grapheme clusters Unicode.

Concepts clés :
• len str et émojis.

Distinctions clés :
• 528 vs 527 même glyphe.

Fonctionnement :
• stocke codepoint(s).

Exécution étape par étape :
1. U+1F600.
2. len 1.

Ordre des opérations :
• direct.

Cas d'utilisation courants :
• validation longueur “caractères”.

Cas limites :
• ZWJ sequences.

Considérations de performance :
• O(1).

Exemples :
• len("family_emoji_ZWJ")

Remarques :
• libraries tierces pour graphemes.`,
  529: `ord("A") vaut 65 : code point Unicode de A latin majuscule (identique ASCII).

Débutant :
• ord inverse de chr pour BMP.

Intermédiaire :
• str doit être longueur 1.

Expert :
• surrogate pairs en narrow build historique rare aujourd'hui.

Concepts clés :
• ord, codepoint.

Distinctions clés :
• ord sur str un caractère vs byte int.

Fonctionnement :
• lit unique codepoint.

Exécution étape par étape :
1. "A".
2. 65.

Ordre des opérations :
• ord.

Cas d'utilisation courants :
• calculs ASCII.

Cas limites :
• len≠1 TypeError.

Considérations de performance :
• O(1).

Exemples :
• ord("é")

Remarques :
• chr pour inverse.`,
  530: `ord("a") vaut 97 : minuscule latine.

Débutant :
• différent de A majuscule.

Intermédiaire :
• écart 32 entre majuscule et minuscule ASCII.

Expert :
• .lower() préférable que maths manuelles.

Concepts clés :
• table ASCII/Unicode basique.

Distinctions clés :
• 97 vs 65.

Fonctionnement :
• même mécanisme ord.

Exécution étape par étape :
1. "a".
2. 97.

Ordre des opérations :
• ord.

Cas d'utilisation courants :
• puzzles, César.

Cas limites :
• lettres hors latin : autres codes.

Considérations de performance :
• O(1).

Exemples :
• ord("0")

Remarques :
• pas supposer continuité alphabets.`,
  531: `ord("0") vaut 48 : chiffre zéro ASCII, pas la valeur entière 0.

Débutant :
• distingue caractère '0' et nombre 0.

Intermédiaire :
• int("0") est 0, ord("0") est 48.

Expert :
• fullwidth digits ont autres codepoints.

Concepts clés :
• chiffre ASCII vs int.

Distinctions clés :
• ord vs int().

Fonctionnement :
• codepoint du glyphe.

Exécution étape par étape :
1. "0".
2. 48.

Ordre des opérations :
• ord.

Cas d'utilisation courants :
• parsing manuel.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• ord("9")  # 57

Remarques :
• utilisez int() pour valeur numérique.`,
  532: `chr(65) vaut 'A' : même idée que pour chr(65) déjà vue ailleurs, ici focus sur table ASCII majuscules.

Débutant :
• 65–90 pour A–Z.

Intermédiaire :
• chr hors plage valide → erreur ou comportement défini selon version.

Expert :
• voir PEP sur narrow/wide builds si legacy.

Concepts clés :
• chr, alphabet ASCII majuscule.

Distinctions clés :
• chr vs bytes([65]).

Fonctionnement :
• construit str un caractère.

Exécution étape par étape :
1. 65.
2. "A".

Ordre des opérations :
• chr.

Cas d'utilisation courants :
• générer séries A–Z.

Cas limites :
• plage unicode.

Considérations de performance :
• O(1).

Exemples :
• chr(90)  # 'Z'

Remarques :
• string.ascii_uppercase pour constantes.`,
  533: `chr(97) vaut 'a' : minuscule latine, code 97.

Débutant :
• suite logique après majuscules.

Intermédiaire :
• 97–122 pour a–z.

Expert :
• locale n'affecte pas chr (codepoint abstrait).

Concepts clés :
• minuscules ASCII.

Distinctions clés :
• 97 vs 65 pour même lettre.

Fonctionnement :
• chr standard.

Exécution étape par étape :
1. 97.
2. "a".

Ordre des opérations :
• chr.

Cas d'utilisation courants :
• boucles alphabet.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• chr(122)

Remarques :
• string.ascii_lowercase.`,
  534: `chr(48) vaut '0' : caractère chiffre zéro, pas chaîne vide.

Débutant :
• 48–57 pour '0'–'9'.

Intermédiaire :
• utile pour construire texte depuis codes.

Expert :
• pour valeur numérique, int('0').

Concepts clés :
• digits ASCII.

Distinctions clés :
• chr(48) vs "".

Fonctionnement :
• chr.

Exécution étape par étape :
1. 48.
2. "0".

Ordre des opérations :
• chr.

Cas d'utilisation courants :
• formats maison.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• chr(57)

Remarques :
• str.isdigit() pour validation.`,
  535: `chr(ord("A") + 32) vaut 'a' : passage majuscule → minuscule ASCII par offset +32.

Débutant :
• astuce historique ASCII pour A–Z.

Intermédiaire :
• ne marche pas pour toutes écritures.

Expert :
• .lower() gère Unicode correctement.

Concepts clés :
• relation ASCII casse.

Distinctions clés :
• arithmétique codepoint vs méthode str.

Fonctionnement :
• ord puis addition puis chr.

Exécution étape par étape :
1. ord('A')=65.
2. +32 → 97.
3. chr → 'a'.

Ordre des opérations :
• intérieur puis chr.

Cas d'utilisation courants :
• exercices pédagogiques.

Cas limites :
• hors A–Z : résultats absurdes.

Considérations de performance :
• O(1).

Exemples :
• chr(ord('Z')+32)

Remarques :
• en production : .lower().`,
  536: `type(None) est NoneType : None est singleton de cette classe.

Débutant :
• None représente l'absence de valeur voulue.

Intermédiaire :
• une seule instance None partagée.

Expert :
• sous-classes de NoneType interdites.

Concepts clés :
• None, NoneType.

Distinctions clés :
• None vs 0 vs False.

Fonctionnement :
• builtin singleton.

Exécution étape par étape :
1. Objet None.
2. type → NoneType.

Ordre des opérations :
• type().

Cas d'utilisation courants :
• défaut optionnel, fin de liste chaînée.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• type(None)()

Remarques :
• is None idiomatique.`,
  537: `None == None vaut True : égalité par valeur pour le singleton None.

Débutant :
• deux références None comparées.

Intermédiaire :
• cohérent avec unique instance.

Expert :
• __eq__ de NoneType.

Concepts clés :
• égalité singleton.

Distinctions clés :
• == None vs is None (préféré).

Fonctionnement :
• comparaison identité/valeur converge.

Exécution étape par étape :
1. None == None.
2. True.

Ordre des opérations :
• ==.

Cas d'utilisation courants :
• tests triviaux.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• (None,) == (None,)

Remarques :
• style : if x is None.`,
  538: `None is None vaut True : même objet singleton.

Débutant :
• is teste identité.

Intermédiaire :
• PEP 8 recommande is None.

Expert :
• pas de sous-classes None à confondre.

Concepts clés :
• is avec None.

Distinctions clés :
• is None vs == None.

Fonctionnement :
• compare ids.

Exécution étape par étape :
1. None is None.
2. True.

Ordre des opérations :
• is.

Cas d'utilisation courants :
• garde clauses défaut.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• x = None; x is None

Remarques :
• évite surcharges __eq__ custom.`,
  539: `bool(None) vaut False : None est falsy.

Débutant :
• dans if None: ne s'exécute pas.

Intermédiaire :
• parmi les singletons falsy avec False, 0, "", [], etc.

Expert :
• test explicite is None vs if not x.

Concepts clés :
• vérité de None.

Distinctions clés :
• None faux mais pas égal à False.

Fonctionnement :
• bool hook sur NoneType.

Exécution étape par étape :
1. None.
2. False.

Ordre des opérations :
• bool().

Cas d'utilisation courants :
• patterns optionnels.

Cas limites :
• if not x attrape None et 0 et "".

Considérations de performance :
• O(1).

Exemples :
• bool([])

Remarques :
• soyez explicite si 0 valide.`,
  540: `None == 0 vaut False : None n'est pas le nombre zéro.

Débutant :
• types et notions différentes.

Intermédiaire :
• évitez confusions SQL NULL vs 0.

Expert :
• __eq__ de int ne considère pas None égal.

Concepts clés :
• None vs int 0.

Distinctions clés :
• trois-valued logic hors Python standard.

Fonctionnement :
• comparaison déléguée → False.

Exécution étape par étape :
1. None == 0.
2. False.

Ordre des opérations :
• ==.

Cas d'utilisation courants :
• API où absent ≠ zéro.

Cas limites :
• numpy.nan autre histoire.

Considérations de performance :
• O(1).

Exemples :
• None == False  # False

Remarques :
• documentez sémantique “manquant”.`,
};
