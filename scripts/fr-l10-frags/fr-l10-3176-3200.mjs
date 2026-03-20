/** Level 10 FR — 3176–3200 (intermediate_b Q76–98 + expert_a Q1–2). */
export default {
  3176: `Path("a/b/c").name ?

Débutant :
• Dernière composante du chemin logique : "c".

Intermédiaire :
• Pas de vérification d’existence sur disque.

Expert :
• Sous Windows, normalise les séparateurs dans l’objet Path.

Concepts clés :
• Final path component.

Distinctions clés :
• name vs stem vs suffix.

Fonctionnement :
• Parse pure du chemin.

Exécution étape par étape :
1. Découpe sur séparateurs.
2. Prend la fin.

Ordre des opérations :
• Propriété calculée à la volée.

Cas d'utilisation courants :
• Journalisation fichier seul.

Cas limites :
• Racine seule → name vide ''.

Considérations de performance :
• O(n) longueur chemin.

Exemples :
• Path("x.tar.gz").name → "x.tar.gz".

Remarques :
• Réponse : "c" — 1re option.`,
  3177: `Path("a/b/c.txt").suffix ?

Débutant :
• Extension finale avec point : ".txt".

Intermédiaire :
• .tar.gz → seulement ".gz" pour suffix.

Expert :
• suffixes liste toutes.

Concepts clés :
• Dernier point du nom final.

Distinctions clés :
• suffix vs splitext.

Fonctionnement :
• Règles pathlib pour fichiers cachés.

Exécution étape par étape :
1. Nom c.txt → .txt.

Ordre des opérations :
• Lecture metadata logique.

Cas d'utilisation courants :
• Filtrer par type MIME approximatif.

Cas limites :
• Pas de point → "".

Considérations de performance :
• Léger.

Exemples :
• .suffix sur dossier "foo.bar" si fichier nommé ainsi.

Remarques :
• Réponse : ".txt" — 1re option.`,
  3178: `Path("a/b/c.txt").stem ?

Débutant :
• Nom sans suffixe final : "c".

Intermédiaire :
• file.tar.gz → stem "file.tar".

Expert :
• stem + suffix ≈ name.

Concepts clés :
• Base pour renommage.

Distinctions clés :
• stem vs name.

Fonctionnement :
• Retire dernier suffix via règles pathlib.

Exécution étape par étape :
1. c.txt → c.

Ordre des opérations :
• Immuable : nouveau concept logique.

Cas d'utilisation courants :
• Out.pdf depuis rapport.docx base.

Cas limites :
• Multiples points : un seul suffixe retiré.

Considérations de performance :
• Léger.

Exemples :
• batch rename.

Remarques :
• Réponse : "c" — 1re option.`,
  3179: `Path("a/b") / "c.txt" ?

Débutant :
• Nouveau Path joint : a/b/c.txt.

Intermédiaire :
• Surcharge de / pour lisibilité.

Expert :
• Si droite absolue, remplace (POSIX).

Concepts clés :
• Composition portable.

Distinctions clés :
• vs os.path.join chaînes.

Fonctionnement :
• joinpath interne.

Exécution étape par étape :
1. Combine segments.

Ordre des opérations :
• Chaînage gauche-droite.

Cas d'utilisation courants :
• Bases config + fichier.

Cas limites :
• Mélange types Path/str.

Considérations de performance :
• Alloue nouveau Path.

Exemples :
• base / "data" / name.

Remarques :
• Réponse : Path("a/b/c.txt") — 1re option.`,
  3180: `Path("a/b/c").parent ?

Débutant :
• Chemin parent logique : Path("a/b").

Intermédiaire :
• .parents pour ancêtres multiples.

Expert :
• . parent de . est encore . selon OS.

Concepts clés :
• Navigation hiérarchique.

Distinctions clés :
• parent vs dirname str.

Fonctionnement :
• Retire dernière composante.

Exécution étape par étape :
1. a/b/c → a/b.

Ordre des opérations :
• Retourne Path.

Cas d'utilisation courants :
• Créer sibling file.

Cas limites :
• Racines diverses.

Considérations de performance :
• Léger.

Exemples :
• out_dir = path.parent / "build".

Remarques :
• Réponse : Path("a/b") — 1re option.`,
  3181: `Path("a/b/c").parts ?

Débutant :
• Tuple des segments : ("a","b","c") en relatif POSIX-like.

Intermédiaire :
• Chemin absolu commence par '/' ou drive.

Expert :
• Normalisation peut fusionner . et ..

Concepts clés :
• Décomposition structurelle.

Distinctions clés :
• parts vs split('/') manuel.

Fonctionnement :
• Dépend du flavour Windows/POSIX.

Exécution étape par étape :
1. Découpe normalisée.

Ordre des opérations :
• Tuple immuable.

Cas d'utilisation courants :
• Vérifier premier dossier.

Cas limites :
• UNC Windows : forme spéciale.

Considérations de performance :
• O(n).

Exemples :
• if parts[0] == "home": ...

Remarques :
• Réponse : ("a", "b", "c") — 1re option.`,
  3182: `Path("file.tar.gz").suffixes ?

Débutant :
• Liste [".tar", ".gz"] : toutes les extensions successives.

Intermédiaire :
• .suffix ne donne que ".gz".

Expert :
• Utile archives doubles.

Concepts clés :
• Multi-extensions.

Distinctions clés :
• suffixes vs stem.

Fonctionnement :
• Scan des segments après points du nom.

Exécution étape par étape :
1. file . tar . gz.

Ordre des opérations :
• Ordre gauche-droite des suffixes.

Cas d'utilisation courants :
• Détecter .tar.gz réel.

Cas limites :
• Nom bizarre ".hidden" : règles spéciales.

Considérations de performance :
• Léger.

Exemples :
• filtrer archives.

Remarques :
• Réponse : [".tar", ".gz"] — 1re option.`,
  3183: `os.path.join("a", "b", "c") sur Unix ?

Débutant :
• "a/b/c" avec séparateur plateforme.

Intermédiaire :
• Composante absolue réinitialise le préfixe.

Expert :
• Évite concaténation naïve + sep.

Concepts clés :
• Portable string path.

Distinctions clés :
• join vs Path /.

Fonctionnement :
• Règles spécifiques OS dans os.path.

Exécution étape par étape :
1. Combine avec / sur macOS/Linux.

Ordre des opérations :
• Gauche à droite avec reset si abs.

Cas d'utilisation courants :
• Code legacy os.*.

Cas limites :
• mélange slashes déjà présents.

Considérations de performance :
• Très rapide.

Exemples :
• join(home, ".config", app).

Remarques :
• Réponse : "a/b/c" — 1re option.`,
  3184: `os.path.splitext("file.txt") ?

Débutant :
• ("file", ".txt") tuple racine + ext avec point.

Intermédiaire :
• Dernier point seulement : archive.tar.gz → ("archive.tar", ".gz").

Expert :
• Pas de Path object.

Concepts clés :
• Découpage nom/ext.

Distinctions clés :
• splitext vs pathlib suffix.

Fonctionnement :
• Parse chaîne pure.

Exécution étape par étape :
1. Trouve dernier . dans le basename.

Ordre des opérations :
• Basename implicite sur la partie finale.

Cas d'utilisation courants :
• Changer extension string.

Cas limites :
• Pas d’extension → ("whole", "").

Considérations de performance :
• O(n).

Exemples :
• root, ext = splitext(p).

Remarques :
• Réponse : ("file", ".txt") — 1re option.`,
  3185: `os.path.basename("/a/b/c.txt") ?

Débutant :
• "c.txt" : après dernier séparateur.

Intermédiaire :
• Trailing slash peut donner "".

Expert :
• Miroir de Path.name en str.

Concepts clés :
• Extraction finale.

Distinctions clés :
• basename vs dirname.

Fonctionnement :
• Scan fin de chaîne.

Exécution étape par étape :
1. Split logique sur sep.

Ordre des opérations :
• Pure string.

Cas d'utilisation courants :
• Logs courts.

Cas limites :
• Windows vs POSIX sep.

Considérations de performance :
• O(n).

Exemples :
• basename(url path partie).

Remarques :
• Réponse : "c.txt" — 1re option.`,
  3186: `os.path.dirname("/a/b/c.txt") ?

Débutant :
• "/a/b" : tout sauf le nom de fichier.

Intermédiaire :
• dirname + basename reconstituent souvent le chemin (+ sep).

Expert :
• Cas racines et trailing slash.

Concepts clés :
• Partie répertoire.

Distinctions clés :
• dirname vs parent Path.

Fonctionnement :
• Coupure au dernier sep.

Exécution étape par étape :
1. Retire c.txt.

Ordre des opérations :
• str pure.

Cas d'utilisation courants :
• mkdir parent.

Cas limites :
• Relatif "file" → "".

Considérations de performance :
• O(n).

Exemples :
• copier dans même dossier.

Remarques :
• Réponse : "/a/b" — 1re option.`,
  3187: `os.sep sur Unix/macOS ?

Débutant :
• Chaîne un seul caractère slash "/".

Intermédiaire :
• Windows utilise backslash (échappé en Python "\\").

Expert :
• os.altsep, os.pathsep pour PATH env.

Concepts clés :
• Constante plateforme.

Distinctions clés :
• sep vs slash littéral codé en dur.

Fonctionnement :
• Fixé à l’import os.

Exécution étape par étape :
• Lecture attribut module.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Debug cross-plateforme.

Cas limites :
• Préférer join pour portable.

Considérations de performance :
• N/A.

Exemples :
• "a" + os.sep + "b" (moins bien que join).

Remarques :
• Réponse : "/" — 1re option.`,
  3188: `Path("a.txt").with_suffix(".md") ?

Débutant :
• Remplace l’extension : Path("a.md").

Intermédiaire :
• Nouveau Path immuable.

Expert :
• .tar.gz : remplace seulement dernier suffixe logique pathlib.

Concepts clés :
• Mutation nom logique.

Distinctions clés :
• with_suffix vs renommer disque.

Fonctionnement :
• Calcule nouveau chemin sans I/O.

Exécution étape par étape :
1. Retire .txt ajoute .md.

Ordre des opérations :
• Chaîne pure jusqu’à rename().

Cas d'utilisation courants :
• Pipeline export markdown.

Cas limites :
• Suffixe doit inclure le point.

Considérations de performance :
• Léger.

Exemples :
• png → jpg conversion path.

Remarques :
• Réponse : Path("a.md") — 1re option.`,
  3189: `string.ascii_lowercase ?

Débutant :
• Les 26 lettres minuscules ASCII concaténées.

Intermédiaire :
• Constante module string.

Expert :
• Pas de lettres accentuées Unicode.

Concepts clés :
• Alphabet anglais machine.

Distinctions clés :
• vs str.islower() test.

Fonctionnement :
• Pré-construit au chargement module.

Exécution étape par étape :
• Accès O(1).

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Validation charset, César pédagogique.

Cas limites :
• i18n : insuffisant seul.

Considérations de performance :
• Réutiliser la constante.

Exemples :
• c in string.ascii_lowercase.

Remarques :
• Réponse : "abcdefghijklmnopqrstuvwxyz" — 1re option.`,
  3190: `string.ascii_uppercase ?

Débutant :
• 26 majuscules A–Z.

Intermédiaire :
• Symétrique de ascii_lowercase.

Expert :
• ascii_letters = lower + upper.

Concepts clés :
• Jeu de caractères fixe.

Distinctions clés :
• Majuscule ASCII vs Unicode title.

Fonctionnement :
• Constante.

Exécution étape par étape :
• Immédiat.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Normalisation simple.

Cas limites :
• Pas ß ni accents.

Considérations de performance :
• N/A.

Exemples :
• ROT13 jeux.

Remarques :
• Réponse : "ABCDEFGHIJKLMNOPQRSTUVWXYZ" — 1re option.`,
  3191: `string.digits ?

Débutant :
• "0123456789" les dix chiffres.

Intermédiaire :
• hexdigits étend avec a-f A-F.

Expert :
• Pas les chiffres Unicode pleins.

Concepts clés :
• Base décimale ASCII.

Distinctions clés :
• digits vs isdecimal() unicode.

Fonctionnement :
• Constante.

Exécution étape par étape :
• len 10.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Sanitize input numérique simple.

Cas limites :
• Signe moins non inclus.

Considérations de performance :
• N/A.

Exemples :
• all(c in digits for c in s).

Remarques :
• Réponse : "0123456789" — 1re option.`,
  3192: `string.punctuation contient-il '!' et '@' ?

Débutant :
• Oui : la constante regroupe la ponctuation ASCII imprimable hors lettres/chiffres.

Intermédiaire :
• L’espace est dans whitespace, pas punctuation.

Expert :
• Ensemble fixe documenté (environ 32 caractères).

Concepts clés :
• Classification caractères.

Distinctions clés :
• punctuation vs printable.

Fonctionnement :
• Chaîne pré-définie.

Exécution étape par étape :
• Test membership.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Strip ponctuation NLP basique.

Cas limites :
• Locale non prise en compte.

Considérations de performance :
• petit set logique.

Exemples :
• mot de passe doit inclure ponctuation.

Remarques :
• Réponse : oui, ponctuation ASCII complète incluant ! et @ — 1re option.`,
  3193: `len(string.ascii_letters) ?

Débutant :
• 26 minuscules + 26 majuscules = 52.

Intermédiaire :
• ascii_letters concatène lower et upper.

Expert :
• Pas chiffres ni underscore (voir string module autres).

Concepts clés :
• Taille alphabet dual case ASCII.

Distinctions clés :
• 52 vs 62 alnum si +digits.

Fonctionnement :
• len sur str constante.

Exécution étape par étape :
1. 26+26.

Ordre des opérations :
• O(1) connu.

Cas d'utilisation courants :
• Boucles rotation 52.

Cas limites :
• N/A.

Considérations de performance :
• N/A.

Exemples :
• random.choice(ascii_letters).

Remarques :
• Réponse : 52 — 1re option.`,
  3194: `string.hexdigits ?

Débutant :
• 0-9 plus a-f et A-F pour hexadécimal.

Intermédiaire :
• 22 caractères distincts.

Expert :
• Valider couleur #RRGGBB.

Concepts clés :
• Base 16 symboles.

Distinctions clés :
• hexdigits vs digits.

Fonctionnement :
• Constante.

Exécution étape par étape :
• Immédiat.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Parser MAC, hash.

Cas limites :
• Préfixe 0x non inclus dans la chaîne testée.

Considérations de performance :
• N/A.

Exemples :
• int(s, 16) après validation.

Remarques :
• Réponse : "0123456789abcdefABCDEF" — 1re option.`,
  3195: `Que contient string.whitespace ?

Débutant :
• Espace, tabulation, nouvelle ligne, retour chariot, tab vertical, saut de page — les blancs ASCII usuels.

Intermédiaire :
• Pas tous les séparateurs Unicode.

Expert :
• split par défaut sur whitespace élargi str.split().

Concepts clés :
• Catégorie blanc.

Distinctions clés :
• whitespace vs punctuation.

Fonctionnement :
• Constante six caractères typiques.

Exécution étape par étape :
• Documentée dans help(string).

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Tokenisation custom.

Cas limites :
• NBSP unicode pas dedans.

Considérations de performance :
• N/A.

Exemples :
• caractère in string.whitespace.

Remarques :
• Réponse : espace, tab, newline, etc. — 1re option.`,
  3196: `textwrap.wrap("hello world foo bar", width=10) ?

Débutant :
• Découpe en lignes d’au plus ~10 caractères en respectant les mots quand possible.

Intermédiaire :
• Retourne liste de lignes sans newlines finaux.

Expert :
• Paramètres break_long_words, etc.

Concepts clés :
• Formatage présentation texte.

Distinctions clés :
• wrap vs fill (join avec \\n).

Fonctionnement :
• Algorithme de césure mots.

Exécution étape par étape :
1. hello (5), world foo dépasse → break ; etc.

Ordre des opérations :
• Un passage.

Cas d'utilisation courants :
• CLI 80 colonnes.

Cas limites :
• Mot plus long que width.

Considérations de performance :
• O(n).

Exemples :
• print("\\n".join(wrap(...))).

Remarques :
• Réponse : enveloppe le texte en lignes ≤ largeur (wrap) — 1re option.`,
  3197: `textwrap.dedent("  hello\\n  world") ?

Débutant :
• Retire l’indentation commune minimale des lignes : "hello\\nworld".

Intermédiaire :
• Lignes vides ignorées pour le calcul du préfixe.

Expert :
• Préserve indentation relative interne au bloc.

Concepts clés :
• Nettoyage de docstrings indentées.

Distinctions clés :
• dedent vs strip() global.

Fonctionnement :
• Mesure marge gauche partagée.

Exécution étape par étape :
1. Deux espaces communs enlevés.

Ordre des opérations :
• Analyse toutes lignes.

Cas d'utilisation courants :
• SQL, YAML dans triple quotes.

Cas limites :
• Tabs vs spaces mixtes.

Considérations de performance :
• Linéaire.

Exemples :
• dedent('''\\n    code\\n''').

Remarques :
• Réponse : "hello\\nworld" — 1re option.`,
  3198: `Template("Hello $name").substitute(name="World") ?

Débutant :
• Remplace $name par World → "Hello World".

Intermédiaire :
• safe_substitute laisse les variables manquantes.

Expert :
• Double dollar pour dollar littéral ; forme avec accolades pour borner le nom de variable.

Concepts clés :
• Substitution contrôlée.

Distinctions clés :
• Template vs f-string puissance.

Fonctionnement :
• Parse $ patterns.

Exécution étape par étape :
1. Map name → World.

Ordre des opérations :
• substitute lève KeyError si clé absente.

Cas d'utilisation courants :
• Modèles utilisateur moins dangereux que eval.

Cas limites :
• Identifiants invalides.

Considérations de performance :
• Regex interne modeste.

Exemples :
• courrier merge.

Remarques :
• Réponse : "Hello World" — 1re option.`,
  3199: `Combien de niveaux standard dans logging ?

Débutant :
• Cinq : DEBUG, INFO, WARNING, ERROR, CRITICAL.

Intermédiaire :
• NOTSET existe aussi mais compté séparément dans la doc niveaux « standard » usuels = 5.

Expert :
• Valeurs numériques 10..50 par pas de 10.

Concepts clés :
• Filtrage par gravité.

Distinctions clés :
• niveau logger vs handler.

Fonctionnement :
• Comparaisons numériques internes.

Exécution étape par étape :
• getLogger sans config : root WARNING.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Ops prod vs dev verbosité.

Cas limites :
• Niveaux custom > 50.

Considérations de performance :
• Coût faible si niveau filtré tôt.

Exemples :
• basicConfig(level=DEBUG).

Remarques :
• Réponse : 5 — 1re option.`,
  3200: `Niveau logging par défaut (sans configuration) ?

Débutant :
• WARNING : seuls WARNING, ERROR, CRITICAL s’affichent sur le handler par défaut root.

Intermédiaire :
• Explique pourquoi info() semble « ne rien faire ».

Expert :
• Chaque logger/handler a son propre level effectif.

Concepts clés :
• Seuil minimal.

Distinctions clés :
• root logger vs named loggers.

Fonctionnement :
• lastLogRecord compare levelno.

Exécution étape par étape :
1. Appel info → en dessous du seuil → filtré.

Ordre des opérations :
• Vérification avant formatage coûteux parfois évitable.

Cas d'utilisation courants :
• Bruit réduit en prod.

Cas limites :
• bibliothèques qui reconfigurent logging.

Considérations de performance :
• DEBUG off évite strings lourdes si lazy.

Exemples :
• logging.basicConfig(level=logging.INFO).

Remarques :
• Réponse : WARNING — 1re option.`,
};
