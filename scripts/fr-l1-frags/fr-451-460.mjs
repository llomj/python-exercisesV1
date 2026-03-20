/** French detailed blocks Level 1 IDs 451–460 — aligned with QUESTIONS_BANK */
export default {
  451: `Après s = "a" puis s += "b", s vaut "ab" : sur str, += concatène comme s = s + "b" et rebind le nom.

Débutant :
• += assemble le texte de deux chaînes.
• Les str ne mutent pas : une nouvelle str est créée.

Intermédiaire :
• s += "b" équivaut à s = s + "b".
• L'ancienne str "a" peut être récupérée par le GC si plus référencée.

Expert :
• En boucle, de nombreux += peuvent devenir quadratiques ; préférez list + join.

Concepts clés :
• Concaténation, immuabilité, rebinding.

Distinctions clés :
• += sur list mute en place ; += sur str alloue une nouvelle str.

Fonctionnement :
• Évaluation de s + "b" puis assignation du résultat à s.

Exécution étape par étape :
1. s référence "a".
2. Calcul de "a" + "b" → "ab".
3. s pointe vers "ab".

Ordre des opérations :
• Addition puis assignation.

Cas d'utilisation courants :
• Construire des URL, SQL (avec paramètres sûrs), logs.

Cas limites :
• "age: " + 25 lève TypeError (autre question).

Considérations de performance :
• Coût lié à la taille des chaînes répété ; join amortit.

Exemples :
• s = ""; s += "x"

Remarques :
• io.StringIO ou list de morceaux pour gros volumes.`,
  452: `Après s = "ab" puis s *= 3, s vaut "ababab" : *= répète la chaîne comme s = s * 3.

Débutant :
• * entre str et int duplique le motif.
• 3 copies de "ab" se suivent.

Intermédiaire :
• n négatif ou zéro donne souvent ''.
• n doit être int.

Expert :
• Pour une str “plate”, pas de problème de références partagées comme avec des listes imbriquées.

Concepts clés :
• Répétition de séquence, opérateur *=.

Distinctions clés :
• s *= n vs s = s * n : effet de liaison identique pour str.

Fonctionnement :
• Création d'une str de longueur n * len(s) (sauf cas vides).

Exécution étape par étape :
1. s = "ab".
2. s * 3 → "ababab".
3. s lie le résultat.

Ordre des opérations :
• Évaluation de s puis de l'entier puis multiplication.

Cas d'utilisation courants :
• Motifs, séparateurs, bordures texte.

Cas limites :
• n très grand → mémoire.

Considérations de performance :
• O(taille du résultat).

Exemples :
• "a" * 0  # ''

Remarques :
• Pas de mutation in-place de la str d'origine.`,
  453: `"hello".__contains__("ell") vaut True : c'est la méthode appelée derrière in pour tester une sous-chaîne.

Débutant :
• in vérifie si le motif apparaît tel quel, contigu.
• "ell" est bien dans "hello".

Intermédiaire :
• Complexité typiquement linéaire en la longueur de la chaîne (recherche).
• __contains__ est le hook du protocole conteneur.

Expert :
• Pour recherche avancée, regex ou algorithmes spécialisés.

Concepts clés :
• Opérateur in, sous-chaîne, méthode spéciale.

Distinctions clés :
• in vs str.find() >= 0 : style et retour différents.

Fonctionnement :
• Parcours ou algorithme interne pour détecter le motif.

Exécution étape par étape :
1. Chaîne "hello", motif "ell".
2. Détection du segment.
3. True.

Ordre des opérations :
• Évaluation des opérandes puis test.

Cas d'utilisation courants :
• Validation, parsing simple, filtres.

Cas limites :
• Motif vide : True en Python.

Considérations de performance :
• Peut devenir coûteux sur très longues chaînes répétées.

Exemples :
• "x" in "xyz"

Remarques :
• Normalisez casse/Unicode si besoin avant test.`,
  454: `"hello" == "hello" vaut True : == compare le contenu (valeur) des deux str.

Débutant :
• Même séquence de caractères ⇒ égalité.
• Casse et espaces doivent correspondre exactement.

Intermédiaire :
• == appelle str.__eq__.
• is testerait l'identité d'objet, souvent distinct pour grandes chaînes.

Expert :
• Normalisation Unicode (NFC/NFD) peut être nécessaire pour texte international.

Concepts clés :
• Égalité de valeur pour str.

Distinctions clés :
• == vs is pour comparer du texte.

Fonctionnement :
• Comparaison caractère à caractère jusqu'à différence ou fin.

Exécution étape par étape :
1. Évaluer les deux opérandes.
2. Comparer.
3. True.

Ordre des opérations :
• Opérandes puis ==.

Cas d'utilisation courants :
• Comparer saisies, tokens, réponses.

Cas limites :
• Accents différents mais “même lettre” peuvent donner False.

Considérations de performance :
• O(L) jusqu'à première différence.

Exemples :
• "a" == "A"  # False

Remarques :
• Utilisez casefold() pour comparaisons insensibles à la casse robustes.`,
  455: `Avec a = "hi" et b = "hi", a is b est souvent True en CPython (internage de petites str), mais seule == est la garantie sémantique pour le texte.

Débutant :
• is vérifie si deux noms pointent vers le même objet.
• Pour le contenu textuel, préférez ==.

Intermédiaire :
• L'internage dépend de l'implémentation et du contexte de création.
• Ne basez pas une règle métier sur is entre str arbitraires.

Expert :
• PyPy/Jython peuvent différer ; tests portables utilisent ==.

Concepts clés :
• Identité d'objet, internage CPython.

Distinctions clés :
• is vs == sur littéraux courts vs construits dynamiquement.

Fonctionnement :
• Comparaison des adresses id(a) et id(b).

Exécution étape par étape :
1. Créer a et b.
2. Comparer identités.
3. Résultat dépend de l'implémentation.

Ordre des opérations :
• Évaluation des noms puis is.

Cas d'utilisation courants :
• Singletons (None, petits int), micro-optimisations rares.

Cas limites :
• "a"*1000 construit deux fois : is souvent False.

Considérations de performance :
• O(1).

Exemples :
• a = "hello"; b = "hello"; a is b  # souvent True en CPython

Remarques :
• En revue de code, signaler is entre str comme suspect.`,
  456: `len("") vaut 0 : la chaîne vide n'a aucun caractère.

Débutant :
• len compte les éléments de la séquence str.
• "" est le neutre pour la concaténation.

Intermédiaire :
• bool("") est False (falsy).
• Utile pour tests "texte présent".

Expert :
• len en O(1) sur str en CPython.

Concepts clés :
• Longueur zéro, chaîne vide.

Distinctions clés :
• len("") vs espaces : "  " a len 2.

Fonctionnement :
• Lecture de la longueur stockée ou comptage selon implémentation.

Exécution étape par étape :
1. Objet str vide.
2. len retourne 0.

Ordre des opérations :
• Appel direct.

Cas d'utilisation courants :
• Validation formulaire, garde-fous avant indexation.

Cas limites :
• N/A.

Considérations de performance :
• O(1) CPython.

Exemples :
• len("abc")  # 3

Remarques :
• Distinguer vide et whitespace-only.`,
  457: `len("  ") vaut 2 : chaque espace est un caractère compté.

Débutant :
• Les espaces visibles ou non sont des caractères comme les autres.
• strip() les enlèverait aux bords.

Intermédiaire :
• \\t, \\n comptent aussi pour 1 chacun dans len.

Expert :
• Caractères Unicode “large” : len compte les points de code, pas la largeur d'affichage.

Concepts clés :
• Whitespace compte dans len.

Distinctions clés :
• Texte “vide visuellement” vs chaîne vide.

Fonctionnement :
• Comptage des codepoints de la str.

Exécution étape par étape :
1. Chaîne deux espaces.
2. len → 2.

Ordre des opérations :
• Immédiat.

Cas d'utilisation courants :
• Détecter saisie uniquement espaces.

Cas limites :
• Caractères de largeur zéro (combining) comptent comme points de code.

Considérations de performance :
• O(1) CPython.

Exemples :
• len("\\n\\t")  # 2

Remarques :
• combinez strip() et len pour “champ vide”.`,
  458: `"python"[-3:] vaut "hon" : slice sans fin avec index négatif prend les trois derniers caractères.

Débutant :
• -3 commence trois positions avant la fin.
• : signifie jusqu'à la fin de la chaîne.

Intermédiaire :
• Équivalent à [len-3:len] pour cette chaîne de longueur 6.

Expert :
• Si la chaîne a moins de 3 caractères, le résultat est la chaîne entière (pas d'erreur).

Concepts clés :
• Slicing, index négatif, suffixe.

Distinctions clés :
• [-3:] vs [-3] (un caractère).

Fonctionnement :
• Normalisation des indices puis copie de la sous-chaîne.

Exécution étape par étape :
1. Indices -3 → position 3 pour "python".
2. Copie jusqu'à la fin.
3. "hon".

Ordre des opérations :
• Évaluation de la str puis du slice.

Cas d'utilisation courants :
• Extensions, suffixes, derniers tokens.

Cas limites :
• Chaîne vide : résultat vide.

Considérations de performance :
• O(k) k = taille du slice.

Exemples :
• "hi"[-5:]  # "hi"

Remarques :
• endswith est plus expressif pour suffixes littéraux.`,
  459: `"abcde"[4:1:-1] vaut "edc" : slice avec pas -1 parcourt de l'indice 4 vers 2 (stop 1 exclus).

Débutant :
• start=4 ('e'), stop=1 exclu, pas -1 → e, d, c.
• L'ordre est inversé sur cette plage.

Intermédiaire :
• stop est toujours exclus ; avec pas négatif, la direction change.

Expert :
• Si start/stop ne permettent aucun caractère, ''.

Concepts clés :
• Slice à trois composantes, pas négatif.

Distinctions clés :
• [4:1] vide vs [4:1:-1] non vide.

Fonctionnement :
• Génération d'indices décroissants.

Exécution étape par étape :
1. Indices valides 4,3,2.
2. Caractères e,d,c.
3. "edc".

Ordre des opérations :
• Normalisation puis itération.

Cas d'utilisation courants :
• Inverser un segment, palindromes partiels.

Cas limites :
• Pas 0 interdit.

Considérations de performance :
• O(longueur du segment).

Exemples :
• "abc"[::-1]

Remarques :
• Tracez sur papier pour éviter off-by-one.`,
  460: `bool("") est False tandis que bool(" ") est True : toute chaîne non vide est "truthy", même si elle ne contient que des espaces.

Débutant :
• Seule la chaîne vide est falsy parmi les str.
• Un espace est un caractère réel.

Intermédiaire :
• if s: dépend de cette règle.
• Pour ignorer whitespace, testez not s.strip().

Expert :
• Autres types ont leurs propres règles de vérité.

Concepts clés :
• Vérité des str, chaîne vide vs whitespace.

Distinctions clés :
• bool("  ") vs bool("").

Fonctionnement :
• bool appelle __bool__ sur str : non vide → True.

Exécution étape par étape :
1. "" → False.
2. " " → True.

Ordre des opérations :
• Conversion explicite ou contexte booléen.

Cas d'utilisation courants :
• Validation : refuser "" mais accepter " " si métier l'exige.

Cas limites :
• Caractères de contrôle invisibles comptent comme truthy.

Considérations de performance :
• O(1) pour str.

Exemples :
• if name: ...

Remarques :
• Documentez si les champs “vides” excluent les espaces.`,
};
