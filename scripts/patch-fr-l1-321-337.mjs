/**
 * Replaces DETAILED_EXPLANATIONS_FR block for Level 1 IDs 321-337
 * (aligned with QUESTIONS_BANK level===1).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, "../src/data/detailedExplanationsTranslations.ts");

const START = "  321: `Le mot-clé continue saute le reste";
const END = "  338: `Tout ce qui suit le symbole # sur une ligne est ignoré";

const replacement = String.raw`  321: \`len("hello") compte le nombre de caractères Unicode de la chaîne : ici 5 (h, e, l, l, o).

Débutant :
• len est une fonction intégrée qui mesure la longueur d'une séquence ou d'une collection.
• Pour une chaîne, chaque caractère compte pour 1 dans la plupart des cas usuels.

Intermédiaire :
• len ne compte pas les octets bruts : pour les str, c'est le nombre de points de code (souvent = caractères visibles pour du texte simple).
• Les chaînes vides : len("") vaut 0.

Expert :
• Pour connaître la taille encodée (UTF-8), utilisez len(s.encode('utf-8')).

Concepts clés :
• Fonction len, itérable de type str, longueur logique.

Distinctions clés :
• len(str) vs len(bytes) : sémantique différente (caractères vs octets).

Fonctionnement :
• Python parcourt la représentation interne de la chaîne et renvoie sa longueur.

Exécution étape par étape :
1. Évaluer le littéral "hello".
2. Appeler len sur cet objet str.
3. Compter les éléments (5).
4. Renvoyer l'entier 5.

Ordre des opérations :
• L'argument est entièrement évalué avant l'appel à len.

Cas d'utilisation courants :
• Valider une saisie (longueur min/max), boucler avec range(len(s)) si besoin d'index.

Cas limites :
• Caractères composés (émojis avec modificateurs) peuvent surprendre : un glyphe peut correspondre à plusieurs points de code.

Considérations de performance :
• len sur str est en temps constant en CPython (longueur stockée).

Exemples :
• len("hello")  # 5
• len("é")      # souvent 1 en Python 3

Remarques :
• Préférez itérer directement sur la chaîne plutôt que range(len(s)) quand l'index n'est pas nécessaire.\`,
  322: \`"Hello" + "World" en Python concatène deux chaînes : le résultat est "HelloWorld" (sans espace automatique).

Débutant :
• L'opérateur + entre deux str assemble le texte bout à bout.

Intermédiaire :
• + n'est pas commutatif pour des types mélangés : "a" + 1 lève TypeError ; il faut str(1).

Expert :
• La concaténation crée une nouvelle chaîne (les str sont immuables).

Concepts clés :
• Surcharge de + pour str, immuabilité, allocation d'un nouvel objet.

Distinctions clés :
• Concaténation vs interpolation f"{a}{b}" ou "".join(...).

Fonctionnement :
• Python construit une nouvelle séquence de caractères contenant la première puis la seconde partie.

Exécution étape par étape :
1. Évaluer "Hello".
2. Évaluer "World".
3. Appliquer + : produire "HelloWorld".

Ordre des opérations :
• Les opérandes sont évalués de gauche à droite.

Cas d'utilisation courants :
• Construire un message, un chemin simple (attention aux séparateurs), un identifiant textuel.

Cas limites :
• Beaucoup de + dans une boucle peut être coûteux ; join sur une liste de morceaux est souvent préférable.

Considérations de performance :
• Coût proportionnel à la taille totale des chaînes impliquées pour une seule opération.

Exemples :
• "Hello" + "World"
• "Hi" + " " + "there"

Remarques :
• Ajoutez explicitement " " si vous voulez un espace entre deux mots.\`,
  323: \`"Hi" * 3 répète la chaîne trois fois : "HiHiHi".

Débutant :
• * entre une str et un int duplique le motif autant de fois.

Intermédiaire :
• L'ordre importe peu : 3 * "Hi" donne le même résultat.

Expert :
• n doit être un entier ; n négatif donne '' ; * avec float lève TypeError.

Concepts clés :
• Répétition de séquence, opérateur * sur str.

Distinctions clés :
• Répéter une liste [0]*3 vs str : même idée de répétition, types différents.

Fonctionnement :
• Python alloue une nouvelle chaîne dont la longueur est len(s) * n.

Exécution étape par étape :
1. Évaluer "Hi".
2. Évaluer 3.
3. Construire la chaîne répétée.

Ordre des opérations :
• Les deux opérandes sont évalués avant la répétition.

Cas d'utilisation courants :
• Bordures textuelles, remplissage, prototypes rapides ("-" * 20).

Cas limites :
• Répétition énorme peut saturer la mémoire.

Considérations de performance :
• Peut pré-allouer la taille finale ; reste O(longueur résultat).

Exemples :
• "Hi" * 3
• "ab" * 0  # ''

Remarques :
• Pour des motifs complexes, join + générateur peut être plus clair.\`,
  324: \`"Python"[0] est l'indexation : le premier caractère est 'P' (indices à partir de 0).

Débutant :
• Les crochets [] accèdent à une position dans la chaîne.

Intermédiaire :
• Index positif : 0 = premier, 1 = deuxième, etc.

Expert :
• En dessous de -len(s) ou au-dessus de len(s)-1 : IndexError.

Concepts clés :
• Séquence indexable, base zéro, immuabilité (lecture seule).

Distinctions clés :
• s[0] premier caractère vs s[1] second.

Fonctionnement :
• Python calcule l'offset et renvoie le caractère sous forme de str d'une lettre.

Exécution étape par étape :
1. Évaluer "Python".
2. Évaluer l'index 0.
3. Renvoyer 'P'.

Ordre des opérations :
• La chaîne est évaluée avant l'index.

Cas d'utilisation courants :
• Inspecter premier caractère, tests de préfixe, parsing rudimentaire.

Cas limites :
• Chaîne vide : [0] est invalide.

Considérations de performance :
• Accès O(1) en CPython pour les str.

Exemples :
• "Python"[0]
• "Python"[3]  # 'h'

Remarques :
• Pour le dernier caractère, s[-1] est idiomatique.\`,
  325: \`"Python"[-1] utilise un index négatif : le dernier caractère, ici 'n'.

Débutant :
• -1 signifie « en partant de la fin ».

Intermédiaire :
• -2 = avant-dernier, etc.

Expert :
• -len(s) pointe vers le premier caractère ; -len(s)-1 est hors plage.

Concepts clés :
• Indexation négative, convention -1 = fin.

Distinctions clés :
• s[len(s)-1] équivalent à s[-1] si s non vide.

Fonctionnement :
• Python convertit l'index négatif en position positive len(s)+k.

Exécution étape par étape :
1. len("Python") vaut 6.
2. Index -1 → position 5.
3. Renvoyer 'n'.

Ordre des opérations :
• Calcul de longueur implicite pour la normalisation d'index.

Cas d'utilisation courants :
• Dernier caractère d'un mot, extension de fichier simple, vérifier suffixe.

Cas limites :
• Chaîne vide : [-1] lève IndexError.

Considérations de performance :
• O(1) pour l'accès.

Exemples :
• "Python"[-1]
• "hi"[-2]  # 'h'

Remarques :
• Combiner avec découpage [:-1] pour « tout sauf le dernier ».\`,
  326: \`"Python"[1:4] est une tranche (slice) : caractères aux index 1, 2, 3 → "yth".

Débutant :
• slice start:stop exclut la position stop.

Intermédiaire :
• Indices peuvent être omis ou négatifs ; pas d'IndexError sur bornes hors limites (souvent tronqué).

Expert :
• Troisième paramètre pas : s[i:j:k] ; ici pas utilisé.

Concepts clés :
• Slicing demi-ouvert [start, stop), copie superficielle de sous-chaîne.

Distinctions clés :
• s[1:4] quatre caractères max mais stop exclus donc 3 caractères.

Fonctionnement :
• Python construit une nouvelle str copiant la plage demandée.

Exécution étape par étape :
1. start=1 → 'y'
2. index 2 → 't'
3. index 3 → 'h'
4. stop=4 exclus → "yth"

Ordre des opérations :
• bornes normalisées puis copie.

Cas d'utilisation courants :
• Sous-chaînes, parsing fixe, tests sur morceaux.

Cas limites :
• start >= stop renvoie ''.

Considérations de performance :
• Proportionnel à la taille de la tranche.

Exemples :
• "Python"[1:4]
• "Python"[0:2]  # 'Py'

Remarques :
• Pour copier toute la chaîne : s[:] ou s[::1].\`,
  327: \`"Python"[:3] omet le début : équivalent à [0:3], donc "Pyt".

Débutant :
• Laisser vide avant : signifie « depuis le début ».

Intermédiaire :
• De même s[3:] va jusqu'à la fin.

Expert :
• [:] shallow copy de la chaîne entière.

Concepts clés :
• Slice implicite start=0, slicing idiomatique.

Distinctions clés :
• [:3] vs [0:3] : identique pour les str.

Fonctionnement :
• Normalisation : start devient 0, stop devient 3.

Exécution étape par étape :
1. Prendre indices 0,1,2.
2. Former "Pyt".

Ordre des opérations :
• Évaluation de la chaîne puis application du slice.

Cas d'utilisation courants :
• Préfixes, en-têtes CSV, comparer début de mot.

Cas limites :
• Si la chaîne est plus courte que stop, la tranche s'arrête proprement.

Considérations de performance :
• O(longueur de la tranche).

Exemples :
• "Python"[:3]
• "Hi"[:10]  # 'Hi'

Remarques :
• Combiner [:n] et [n:] pour partitionner une chaîne en deux morceaux.\`,
  328: \`"Python"[3:] omet la fin : de l'index 3 jusqu'au bout → "hon".

Débutant :
• Le premier indice est inclus ; la fin manquante signifie len(s).

Intermédiaire :
• Utile pour enlever un préfixe fixe quand on connaît la longueur du préfixe.

Expert :
• Avec index négatif : s[-2:] derniers deux caractères.

Concepts clés :
• Slice avec stop implicite = fin de séquence.

Distinctions clés :
• s[3:] suffixe après le 4e caractère (index 3).

Fonctionnement :
• start=3, stop=len(s).

Exécution étape par étape :
1. Indices 3,4,5 sur "Python" (longueur 6).
2. "hon".

Ordre des opérations :
• Calcul de la longueur pour borner stop.

Cas d'utilisation courants :
• Suffixes, retirer préfixe, queue de fichier.

Cas limites :
• start au-delà de la longueur : ''.

Considérations de performance :
• O(taille du suffixe).

Exemples :
• "Python"[3:]
• "abc"[2:]  # 'c'

Remarques :
• Pour retirer une extension connue, vérifiez d'abord endswith.\`,
  329: \`"Python"[::2] utilise un pas de 2 : un caractère sur deux → "Pto".

Débutant :
• Le troisième nombre dans [début:fin:pas] indique le saut.

Intermédiaire :
• Par défaut le pas est 1 ; 2 prend indices 0,2,4,...

Expert :
• Pas négatif parcourt en sens inverse (voir [::-1]).

Concepts clés :
• Slice à trois composantes, stride, échantillonnage.

Distinctions clés :
• [::2] garde positions paires en partant de 0 pour cette chaîne.

Fonctionnement :
• Itération sur indices i = start, start+step, ... tant que dans les bornes.

Exécution étape par étape :
1. Indices 0 'P', 2 't', 4 'o' sur "Python".
2. Résultat "Pto".

Ordre des opérations :
• Normalisation des bornes puis application du pas.

Cas d'utilisation courants :
• Sous-échantillonner, motifs alternés, jeux et puzzles.

Cas limites :
• Pas 0 lève ValueError.

Considérations de performance :
• O(n) sur la longueur avec facteur lié au pas.

Exemples :
• "Python"[::2]
• "abcdef"[1::2]  # 'bdf'

Remarques :
• Pour des analyses binaires, bytes et pas sont aussi utiles.\`,
  330: \`"Python"[::-1] inverse la chaîne : "nohtyP".

Débutant :
• Pas -1 parcourt de la fin vers le début.

Intermédiaire :
• start et stop omis avec pas négatif parcourent toute la chaîne inversée.

Expert :
• Idiomatique et lisible pour petites chaînes ; pour très gros textes, considérez bytearray ou buffers si besoin.

Concepts clés :
• Slice avec step négatif, renversement.

Distinctions clés :
• reversed(iterable) donne un itérateur ; [::-1] donne une nouvelle str immédiate.

Fonctionnement :
• Python parcourt les index de len(s)-1 à 0.

Exécution étape par étape :
1. Chaîne source "Python".
2. Parcours inverse car pas -1.
3. Construction de "nohtyP".

Ordre des opérations :
• Évaluation de s puis création de la copie inversée.

Cas d'utilisation courants :
• Palindromes, transformations ludiques, certains algorithmes naïfs.

Cas limites :
• Mémoire double de la taille de la chaîne pour le résultat.

Considérations de performance :
• O(n) temps et O(n) espace.

Exemples :
• "Python"[::-1]
• "aba"[::-1] == "aba"

Remarques :
• Pour tester palindrome : s == s[::-1] (naïf mais clair).\`,
  331: \`Le symbole # commence un commentaire sur une ligne : tout ce qui suit sur cette ligne est ignoré par l'exécuteur Python.

Débutant :
• # ne produit aucune valeur ; c'est une annotation pour les humains.

Intermédiaire :
• Un commentaire ne peut pas « continuer » sur la ligne suivante sans un nouveau #.

Expert :
• # à l'intérieur d'une chaîne littérale fait partie des données, pas un commentaire.

Concepts clés :
• Commentaire fin de ligne, lexing, tokenization.

Distinctions clés :
• # réel commentaire vs caractère # dans une str.

Fonctionnement :
• Après # hors chaîne, le reste de la ligne est jeté par le parseur.

Exécution étape par étape :
1. Lecture de code: x = 1  # note
2. Seule x = 1 est exécutée.

Ordre des opérations :
• Le commentaire est retiré avant l'arbre syntaxique exécutable.

Cas d'utilisation courants :
• Expliquer le pourquoi, désactiver temporairement une partie (préférer le contrôle de version pour du gros bloc).

Cas limites :
• Pas de commentaire multi-ligne avec # seul ; utiliser plusieurs lignes # ou une chaîne non assignée (discutable).

Considérations de performance :
• Aucun coût runtime.

Exemples :
• # ceci est ignoré
• print("# visible")  # affiche # visible

Remarques :
• Les docstrings """...""" ne sont pas des commentaires : elles créent des objets str.\`,
  332: \`Pour une chaîne multi-lignes, la forme correcte et idiomatique est d'utiliser des triples quotes '''...''' ou """...""" qui peuvent s'étendre sur plusieurs lignes physiques.

Débutant :
• Trois quotes ouvrantes et trois quotes fermantes encadrent tout le bloc de texte.

Intermédiaire :
• On peut aussi concaténer des chaînes entre parenthèses avec des retours ligne implicites.

Expert :
• Une docstring de module/fonction est une chaîne triple-quoted en tête de bloc ; ce n'est pas un « commentaire » au sens lexer.

Concepts clés :
• Littéraux multi-lignes, newlines préservés dans la str.

Distinctions clés :
• Triple quotes vs \\n explicites dans une chaîne courte.

Fonctionnement :
• Le parseur absorbe les retours ligne jusqu'au terminateur triple égal.

Exécution étape par étape :
1. Ouvrir """.
2. Lire lignes suivantes.
3. Fermer avec """ → une seule valeur str.

Ordre des opérations :
• Construction du littéral lors de l'évaluation de l'expression.

Cas d'utilisation courants :
• Gabarits ASCII, JSON embarqué, texte d'aide, mails.

Cas limites :
• Si le texte contient le même triple quote, alterner ' et " ou échapper.

Considérations de performance :
• Identique à toute construction de str de même taille.

Exemples :
• s = """ligne1
ligne2"""

Remarques :
• textwrap.dedent nettoie souvent l'indentation des blocs multi-lignes.\`,
  333: \`Les commentaires servent à documenter l'intention humaine : ils rendent le code plus lisible et facilite la maintenance sans changer le comportement du programme.

Débutant :
• Ils expliquent « pourquoi » plus que « quoi » quand le code est déjà clair.

Intermédiaire :
• Ils ne sont pas exécutés : aucun effet sur les variables.

Expert :
• Outils comme doctest peuvent extraire des exemples de docstrings ; les # simples restent purement ignorés.

Concepts clés :
• Documentation inline, clarté, collaboration.

Distinctions clés :
• Commentaire vs docstring vs type hints (qui influencent outils).

Fonctionnement :
• Phase d'analyse : texte après # supprimé ; docstrings stockées sur __doc__.

Exécution étape par étape :
1. Développeur écrit # raison du choix.
2. Interpréteur ignore.
3. Lecture future par humains.

Ordre des opérations :
• Aucune interaction avec l'ordre d'évaluation des expressions voisines.

Cas d'utilisation courants :
• TODO contrôlés, avertissements métier, références tickets.

Cas limites :
• Commentaires obsolètes mentent : maintenez-les comme le code.

Considérations de performance :
• Fichiers sources plus gros ; zéro impact une fois chargé.

Exemples :
• # FIXME: gérer None
• x = a + b  # invariant du domaine

Remarques :
• Préférez des noms explicites aux longs commentaires redondants.\`,
  334: \`Oui : on peut placer un commentaire après du code sur la même ligne grâce à # ; seul le code avant # est exécuté.

Débutant :
• x = 1  # commentaire est valide.

Intermédiaire :
• Tout ce qui suit # sur cette ligne est du commentaire, pas une deuxième instruction.

Expert :
• Impossible de « couper » une expression au milieu puis commenter la fin sans terminer l'expression correctement avant #.

Concepts clés :
• Fin de ligne, séparation code / annotation.

Distinctions clés :
• Deux instructions sur une ligne séparées par ; sont rares ; # termine toujours la partie exécutable de la ligne.

Fonctionnement :
• Lexer lit l'expression, puis rencontre # et ignore la fin.

Exécution étape par étape :
1. Évaluer l'instruction complète avant #.
2. Ignorer le texte explicatif.

Ordre des opérations :
• L'expression avant # suit les règles normales (+, appels, etc.).

Cas d'utilisation courants :
• Annoter une constante magique, expliquer un seuil.

Cas limites :
• Les parenthèses non fermées avant # provoquent SyntaxError.

Considérations de performance :
• Nulle.

Exemples :
• rate = 0.05  # TVA réduite
• return x  # early exit

Remarques :
• Les linters peuvent limiter la longueur de ligne incluant commentaires.\`,
  335: \`'''triple quotes''' (ou """...""") créent une chaîne de caractères str, souvent utilisée pour du texte sur plusieurs lignes ou des docstrings.

Débutant :
• Le résultat est un objet str comme avec '...'.

Intermédiaire :
• Les retours ligne dans le littéral font partie de la chaîne.

Expert :
• Si placée en tête de module/classe/fonction immédiatement après la définition, c'est une docstring assignée à __doc__.

Concepts clés :
• Littéral str, triple quoting, multi-ligne.

Distinctions clés :
• Chaîne non assignée en script peut être évaluée puis jetée (effet de bord rare) ; docstring a une place sémantique.

Fonctionnement :
• Parseur agrège le contenu entre les délimiteurs triples.

Exécution étape par étape :
1. Rencontrer '''.
2. Capturer le texte jusqu'au ''' fermant.
3. Produire l'objet str.

Ordre des opérations :
• Comme tout littéral, évaluation à l'exécution de la portée.

Cas d'utilisation courants :
• SQL multiligne, JSON/XML embarqué, documentation.

Cas limites :
• Échapper ou alterner quotes si le texte contient '''.

Considérations de performance :
• Identique à toute str de même taille.

Exemples :
• s = '''a
b'''

Remarques :
• Utilisez textwrap.dedent pour retirer indentation commune.\`,
  336: \`# est avant tout un marqueur de commentaire lorsqu'il apparaît dans le code hors chaîne ; ce n'est pas un délimiteur de chaîne comme ' ou ".

Débutant :
• Dans du code normal, # commence un commentaire.

Intermédiaire :
• Dans "a#b", le # est un caractère ordinaire du texte.

Expert :
• En f-strings, certaines parties sont des expressions ; # reste commentaire seulement dans la partie « code » hors littéraux internes.

Concepts clés :
• Contexte lexical, délimiteurs de str, rôle dual du caractère #.

Distinctions clés :
• Token COMMENT vs caractère U+0023 dans une str.

Fonctionnement :
• Le lexer distingue mode code et mode chaîne.

Exécution étape par étape :
1. Hors chaîne : # → fin du code utile sur la ligne.
2. Dans chaîne : # copié dans la valeur.

Ordre des opérations :
• Analyse ligne par ligne / littéral par littéral.

Cas d'utilisation courants :
• Afficher des hashtags, chemins, couleurs #RRGGBB dans des chaînes.

Cas limites :
• Chaînes brutes r"..." : # reste dans la chaîne.

Considérations de performance :
• N/A.

Exemples :
• "#tag"   # une chaîne
• x = 1  # commentaire

Remarques :
• colorier syntaxiquement aide à voir quand # est littéral.\`,
  337: \`Les triples quotes peuvent servir de « commentaire de bloc » informel en plaçant une chaîne multi-lignes sans l'assigner à une variable, mais ce n'est pas un vrai commentaire : Python crée quand même un objet str temporaire (souvent immédiatement jeté).

Débutant :
• Mieux vaut # sur plusieurs lignes pour du vrai commentaire.

Intermédiaire :
• En début de fonction, une str seule est une docstring, pas un simple commentaire ignoré.

Expert :
• Les outils d'analyse statique et la REPL affichent parfois ces chaînes ; préférez # ou docstrings intentionnelles.

Concepts clés :
• Chaîne non utilisée vs commentaire lexer, docstring implicite.

Distinctions clés :
• Commentaire # supprimé tôt vs littéral str évalué.

Fonctionnement :
• Une expression str seule dans un bloc devient docstring si première instruction ; sinon peut être une valeur abandonnée.

Exécution étape par étape :
1. Si première ligne d'une fonction : docstring stockée.
2. Sinon : str créée puis écartée par GC.

Ordre des opérations :
• Suit les règles de bloc pour docstrings.

Cas d'utilisation courants :
• Vraie docstring avec """Explication.""" en tête de def.

Cas limites :
• Ne pas utiliser des chaînes orphelines pour masquer du code mort : confus.

Considérations de performance :
• Légère allocation si chaîne orpheline ; négligeable sauf boucle chaude.

Exemples :
• def f():
    """Renvoie zéro."""
    return 0

Remarques :
• Pour désactiver du code, utilisez # ou if False: avec avertissement linter.\`,
`;

let s = fs.readFileSync(target, "utf8");
const i = s.indexOf(START);
const j = s.indexOf(END);
if (i === -1 || j === -1) {
  console.error("Markers not found", { i, j });
  process.exit(1);
}
if (j <= i) {
  console.error("Bad marker order");
  process.exit(1);
}
const out = s.slice(0, i) + replacement + s.slice(j);
fs.writeFileSync(target, out);
console.log("Patched", target, "bytes", replacement.length);
