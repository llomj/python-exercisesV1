/** Level 1 FR 581–600 */
export default {
  581: `"hello"[100:] vaut '' : slice start au-delà de la longueur avec pas positif donne chaîne vide (pas d'erreur).

Débutant :
• slicing clame les bornes.

Intermédiaire :
• cohérent list/str/bytes.

Expert :
• CPython optimise.

Concepts clés :
• slice start > len.

Distinctions clés :
• [100] indexerait → IndexError.

Fonctionnement :
• normalisation bornes.

Exécution étape par étape :
1. len 5, start 100.
2. vide.

Ordre des opérations :
• [] slice.

Cas d'utilisation courants :
• queue optionnelle.

Cas limites :
• pas négatif change règles.

Considérations de performance :
• O(1) création vide.

Exemples :
• "hi"[10:]

Remarques :
• diffère d'autres langages.`,
  582: `"hello"[-100:] vaut "hello" : start très négatif ramené au début.

Débutant :
• équivalent à [:] ici.

Intermédiaire :
• pas IndexError.

Expert :
• normalisation max(0, len+start).

Concepts clés :
• slice start négatif clampé.

Distinctions clés :
• vs index -100 seul.

Fonctionnement :
• calcule début effectif 0.

Exécution étape par étape :
1. start trop petit.
2. prend toute chaîne.

Ordre des opérations :
• slice.

Cas d'utilisation courants :
• suffixes avec offset variable.

Cas limites :
• N/A.

Considérations de performance :
• O(n) copie.

Exemples :
• s[-1000:]

Remarques :
• lisibilité : préférez s si intention “tout”.`,
  583: `"hello"[2:100] vaut "llo" : stop au-delà de la fin est tronqué à len.

Débutant :
• pas d'erreur.

Intermédiaire :
• utile quand stop calculé dynamiquement.

Expert :
• symétrie avec start.

Concepts clés :
• stop clampé.

Distinctions clés :
• [2:5] vs [2:100] ici égal si len=5.

Fonctionnement :
• min(stop,len).

Exécution étape par étape :
1. indices 2..4.
2. "llo".

Ordre des opérations :
• slice.

Cas d'utilisation courants :
• parsers flux.

Cas limites :
• pas négatif.

Considérations de performance :
• O(k).

Exemples :
• "abc"[:999]

Remarques :
• simplifie bornes max.`,
  584: `"" + "" vaut "" : neutre concaténation.

Débutant :
• identité pour + sur str.

Intermédiaire :
• idempotence ajouter vide.

Expert :
• optimisation possible.

Concepts clés :
• concaténation vide.

Distinctions clés :
• "" vs None.

Fonctionnement :
• crée nouvelle str vide ou internée.

Exécution étape par étape :
1. deux "".
2. "".

Ordre des opérations :
• +.

Cas d'utilisation courants :
• accumulateurs initialisés.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• "a" + ""

Remarques :
• join sur [""] ok.`,
  585: `"" * 1000 vaut "" : répéter zéro caractères reste vide.

Débutant :
• 1000 * 0 longueur.

Intermédiaire :
• tout n donne "".

Expert :
• cohérent mathématique.

Concepts clés :
• répétition str vide.

Distinctions clés :
• vs "x"*0.

Fonctionnement :
• longueur n * 0.

Exécution étape par étape :
1. "" * 1000.
2. "".

Ordre des opérations :
• *.

Cas d'utilisation courants :
• edge cases générateurs.

Cas limites :
• N/A.

Considérations de performance :
• rapide.

Exemples :
• "" * (-5)  # ''

Remarques :
• cohérent list [].`,
  586: `"a" * 0 vaut '' : répétition zéro fois.

Débutant :
• comme list.

Intermédiaire :
• négatif souvent ''.

Expert :
• TypeError si n pas int.

Concepts clés :
• * 0.

Distinctions clés :
• vs "a"*1.

Fonctionnement :
• allocation vide.

Exécution étape par étape :
1. "a", 0.
2. "".

Ordre des opérations :
• *.

Cas d'utilisation courants :
• boucles n=0.

Cas limites :
• float interdit.

Considérations de performance :
• O(1).

Exemples :
• "ab"*0

Remarques :
• pratique pour padding dynamique.`,
  587: `"hello"[1:1] vaut '' : slice vide car start==stop.

Débutant :
• stop exclus : rien à prendre.

Intermédiaire :
• position valide entre caractères.

Expert :
• insertion logique slices.

Concepts clés :
• slice vide.

Distinctions clés :
• [1:1] vs [1:2].

Fonctionnement :
• zéro caractères.

Exécution étape par étape :
1. start 1 stop 1.
2. "".

Ordre des opérations :
• slice.

Cas d'utilisation courants :
• découpage fenêtre nulle.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• s[i:i]

Remarques :
• utile insertions conceptuelles.`,
  588: `"hello"[3:1] vaut '' : avec pas positif par défaut, start>end donne vide.

Débutant :
• pas d'erreur, résultat vide.

Intermédiaire :
• utiliser pas négatif pour parcourir en arrière.

Expert :
• cohérent list.

Concepts clés :
• slice start>end step 1.

Distinctions clés :
• vs [3:1:-1] non vide.

Fonctionnement :
• détecte intervalle vide.

Exécution étape par étape :
1. 3>1 pas +1.
2. "".

Ordre des opérations :
• slice.

Cas d'utilisation courants :
• bornes calculées croisées.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• "abc"[2:0]

Remarques :
• vérifiez signe du pas.`,
  589: `" ".isspace() vaut True : espace est whitespace.

Débutant :
• méthode teste tous caractères whitespace.

Intermédiaire :
• un seul espace suffit ici.

Expert :
• couvre tab newline etc. si chaîne mixte doit être entièrement whitespace.

Concepts clés :
• str.isspace.

Distinctions clés :
• isspace vs strip()==''.

Fonctionnement :
• catégorie Unicode.

Exécution étape par étape :
1. " ".
2. True.

Ordre des opérations :
• méthode.

Cas d'utilisation courants :
• valider ligne vide visuelle.

Cas limites :
• "" False.

Considérations de performance :
• O(n).

Exemples :
• "\\t".isspace()

Remarques :
• pas “champ vide métier”.`,
  590: `"\\n\\t".isspace() vaut True : tous caractères sont whitespace.

Débutant :
• mélange ok si chacun whitespace.

Intermédiaire :
• pas besoin d'être uniforme.

Expert :
• caractères Unicode espace fine inclus.

Concepts clés :
• whitespace mixte.

Distinctions clés :
• contient vs uniquement.

Fonctionnement :
• teste chaque char.

Exécution étape par étape :
1. \\n et \\t.
2. True.

Ordre des opérations :
• isspace.

Cas d'utilisation courants :
• lignes blanches.

Cas limites :
• "a\\n" False.

Considérations de performance :
• O(n).

Exemples :
• "  \\n  ".isspace()

Remarques :
• combinez strip pour bords.`,
  591: `"123".isdigit() vaut True : tous caractères sont décimaux.

Débutant :
• uniquement chiffres 0-9 (et équivalents Unicode “decimal”).

Intermédiaire :
• pas de signe ni point.

Expert :
• isdecimal plus strict parfois.

Concepts clés :
• isdigit.

Distinctions clés :
• isdigit vs isnumeric.

Fonctionnement :
• catégorie Unicode par caractère.

Exécution étape par étape :
1. 1,2,3.
2. True.

Ordre des opérations :
• méthode.

Cas d'utilisation courants :
• valider entier texte avant int().

Cas limites :
• "" False.

Considérations de performance :
• O(n).

Exemples :
• "²".isdigit()  # peut varier

Remarques :
• testez locales chiffres arabes etc.`,
  592: `"12.3".isdigit() vaut False : le point n'est pas un chiffre.

Débutant :
• float texte ne passe pas.

Intermédiaire :
• utiliser regex ou try float.

Expert :
• séparateur locale virgule.

Concepts clés :
• rejet point.

Distinctions clés :
• isdigit vs float parsing.

Fonctionnement :
• '.' échoue test.

Exécution étape par étape :
1. rencontre '.'.
2. False.

Ordre des opérations :
• isdigit.

Cas d'utilisation courants :
• filtrer entiers stricts.

Cas limites :
• exposant scientifique.

Considérations de performance :
• O(n).

Exemples :
• "5".isdigit()

Remarques :
• float() séparé.`,
  593: `"-5".isdigit() vaut False : le signe moins n'est pas un digit.

Débutant :
• int("-5") ok mais isdigit non.

Intermédiaire :
• enlever signe puis tester si besoin.

Expert :
• lstrip('-+') risqué sans valider.

Concepts clés :
• signe vs digits.

Distinctions clés :
• parsing vs classification caractères.

Fonctionnement :
• '-' stoppe digit-only.

Exécution étape par étape :
1. premier char -.
2. False.

Ordre des opérations :
• isdigit.

Cas d'utilisation courants :
• UI entiers positifs seulement.

Cas limites :
• espaces avant signe.

Considérations de performance :
• O(1) échec tôt.

Exemples :
• "+3".isdigit()

Remarques :
• strip sign explicitement.`,
  594: `"abc123".isalnum() vaut True : lettres et chiffres seulement, sans espace ni ponctuation.

Débutant :
• alphanumérique.

Intermédiaire :
• underscore _ n'est pas alnum.

Expert :
• Unicode lettres comptent.

Concepts clés :
• isalnum.

Distinctions clés :
• isalnum vs isidentifier.

Fonctionnement :
• chaque char letter or digit.

Exécution étape par étape :
1. a,b,c,1,2,3.
2. True.

Ordre des opérations :
• isalnum.

Cas d'utilisation courants :
• mots de passe simples, tokens.

Cas limites :
• "" False.

Considérations de performance :
• O(n).

Exemples :
• "café2".isalnum()

Remarques :
• pas d'espaces.`,
  595: `"abc 123".isalnum() vaut False : espace interdit.

Débutant :
• espace casse la chaîne.

Intermédiaire :
• retirer espaces puis tester si besoin métier.

Expert :
• attention normalisation.

Concepts clés :
• espace non alnum.

Distinctions clés :
• isalnum stricte.

Fonctionnement :
• espace → False.

Exécution étape par étape :
1. rencontre espace.
2. False.

Ordre des opérations :
• isalnum.

Cas d'utilisation courants :
• rejeter tokens avec blancs.

Cas limites :
• tabulation idem.

Considérations de performance :
• O(n).

Exemples :
• "abc_123".isalnum()  # False

Remarques :
• underscore ≠ alnum.`,
  596: `"hello".isidentifier() vaut True : nom Python lexical valide.

Débutant :
• commence lettre ou underscore, puis lettres chiffres underscores.

Intermédiaire :
• ne vérifie pas mots-clés.

Expert :
• Unicode lettres possibles.

Concepts clés :
• isidentifier.

Distinctions clés :
• isidentifier vs iskeyword.

Fonctionnement :
• grammaire NAME.

Exécution étape par étape :
1. scan hello.
2. True.

Ordre des opérations :
• méthode.

Cas d'utilisation courants :
• valider noms dynamiques.

Cas limites :
• "class" True isidentifier mais keyword.

Considérations de performance :
• O(n).

Exemples :
• "_x".isidentifier()

Remarques :
• combinez keyword.iskeyword.`,
  597: `"2hello".isidentifier() vaut False : ne peut pas commencer par chiffre.

Débutant :
• règle lexicale.

Intermédiaire :
• préfixe underscore si besoin.

Expert :
• normalisation automatique.

Concepts clés :
• premier caractère.

Distinctions clés :
• isdigit début vs reste.

Fonctionnement :
• rejet leading digit.

Exécution étape par étape :
1. '2' début.
2. False.

Ordre des opérations :
• isidentifier.

Cas d'utilisation courants :
• éviter SyntaxError futurs.

Cas limites :
• N/A.

Considérations de performance :
• O(1) échec.

Exemples :
• "h2".isidentifier()

Remarques :
• valide avant exec.`,
  598: `"for".isidentifier() vaut True : lexicalement c'est un nom valide.

Débutant :
• surprise : mot-clé quand même “identifiant lexical”.

Intermédiaire :
• assigner à for interdit syntaxiquement autrement.

Expert :
• soft keywords 3.10+ autre catégorie.

Concepts clés :
• identifier vs keyword.

Distinctions clés :
• isidentifier True mais reserved.

Fonctionnement :
• test pattern only.

Exécution étape par étape :
1. "for".
2. True isidentifier.

Ordre des opérations :
• méthode.

Cas d'utilisation courants :
• avant codegen.

Cas limites :
• mots réservés.

Considérations de performance :
• O(n).

Exemples :
• "lambda".isidentifier()

Remarques :
• toujours tester keyword.`,
  599: `keyword.iskeyword("for") vaut True après import keyword : liste officielle mots réservés.

Débutant :
• bloque assignations noms.

Intermédiaire :
• import requis.

Expert :
• soft keywords gérés séparément.

Concepts clés :
• module keyword.

Distinctions clés :
• iskeyword vs isidentifier.

Fonctionnement :
• ensemble frozen.

Exécution étape par étape :
1. import keyword.
2. iskeyword("for") True.

Ordre des opérations :
• appel fonction.

Cas d'utilisation courants :
• validateurs DSL.

Cas limites :
• version Python liste évolue.

Considérations de performance :
• O(1) lookup set.

Exemples :
• keyword.iskeyword("async")

Remarques :
• mettez import en tête fichier.`,
  600: `type(1+2j) est complex : les littéraux a+bj créent nombres complexes.

Débutant :
• partie imaginaire suffixe j.

Intermédiaire :
• float underlying réel et imaginaire.

Expert :
• cmath module ops.

Concepts clés :
• type complex, littéral j.

Distinctions clés :
• complex vs float int.

Fonctionnement :
• construction complex(re,im).

Exécution étape par étape :
1. addition 1 et 2j ? expression 1+2j littéral en fait.
2. type complex.

Ordre des opérations :
• littéral ou op selon expression ; ici 1+2j est un littéral syntaxique en Python.

Cas d'utilisation courants :
• signal, physique.

Cas limites :
• pas de ordre <.

Considérations de performance :
• O(1).

Exemples :
• complex(2,3)

Remarques :
• j pas i comme ingénieur.`,
};
