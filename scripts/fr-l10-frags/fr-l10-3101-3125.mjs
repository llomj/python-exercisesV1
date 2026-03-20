/** Level 10 FR — 3101–3125 (intermediate_a Q1–25). */
export default {
  3101: `open("file.txt", "r") : effet ?

Débutant :
• Ouvre le fichier en lecture texte ; le fichier doit exister sinon FileNotFoundError.

Intermédiaire :
• "r" est le mode par défaut si on omet le second argument.

Expert :
• Texte : décodage selon encoding ; newline universel sauf newline=''.

Concepts clés :
• Flux lecture seule, pointeur au début.

Distinctions clés :
• r vs w vs a vs x ; rb pour bytes.

Fonctionnement :
• os.open sous-jacent puis wrapper io.

Exécution étape par étape :
1. Résolution du chemin.
2. Vérification existence.
3. Retour file object.

Ordre des opérations :
• open avant read.

Cas d'utilisation courants :
• Config, logs, données texte.

Cas limites :
• Fichier verrouillé, permissions, chemins relatifs au cwd.

Considérations de performance :
• read() entier charge tout en RAM.

Exemples :
• with open(path, encoding='utf-8') as f: data = f.read().

Remarques :
• Réponse : ouverture en lecture — 1re option.`,
  3102: `open("file.txt", "w") ?

Débutant :
• Écriture : crée le fichier ou tronque à zéro s'il existait.

Intermédiaire :
• Contenu précédent perdu immédiatement à l'ouverture.

Expert :
• wb pour bytes ; newline et buffering configurables.

Concepts clés :
• Destruction silencieuse du contenu existant.

Distinctions clés :
• w vs a (ajout) vs x (création exclusive).

Fonctionnement :
• Truncate à l'ouverture côté implémentation.

Exécution étape par étape :
1. Création ou vidage.
2. Pointeur au début.

Ordre des opérations :
• Pas de lecture fiable sans rouvrir en r.

Cas d'utilisation courants :
• Régénération export, sauvegarde écrasante.

Cas limites :
• Erreur si dossier parent absent.

Considérations de performance :
• Très gros fichiers : préférer écriture streamée.

Exemples :
• open('out.csv','w',newline='').

Remarques :
• Réponse : écriture avec troncature ou création — 1re option.`,
  3103: `open("file.txt", "a") ?

Débutant :
• Ajoute à la fin ; ne vide pas le fichier existant.

Intermédiaire :
• Pointeur positionné en fin de fichier à l'ouverture.

Expert :
• En mode texte, écriture décodée comme pour w.

Concepts clés :
• Préservation de l'historique.

Distinctions clés :
• a vs w vs r+ avec seek fin.

Fonctionnement :
• seek EOF implicite à chaque open a.

Exécution étape par étape :
1. Ouvre ou crée.
2. Prêt à écrire après le dernier octet.

Ordre des opérations :
• Lecture possible seulement si mode a+.

Cas d'utilisation courants :
• Logs append-only.

Cas limites :
• Multiprocessus : entrelacement sans verrou OS.

Considérations de performance :
• Coût positionnement fin négligeable.

Exemples :
• logging.FileHandler.

Remarques :
• Réponse : ajout en fin de fichier — 1re option.`,
  3104: `open("file.txt", "x") ?

Débutant :
• Création exclusive : erreur si le fichier existe déjà.

Intermédiaire :
• FileExistsError si collision.

Expert :
• Utile pour fichiers temporaires atomiques avec os.open O_EXCL.

Concepts clés :
• Éviter l'écrasement accidentel.

Distinctions clés :
• x vs w.

Fonctionnement :
• Appel système avec flag création exclusive.

Exécution étape par étape :
1. Test existence.
2. Création ou exception.

Ordre des opérations :
• Atomicité meilleure sur FS locaux que sur certains réseaux.

Cas d'utilisation courants :
• Job output unique, idempotence.

Cas limites :
• Race TOCTOU rare sur NFS mal configuré.

Considérations de performance :
• Identique à w après création.

Exemples :
• try: open('id.txt','x') ...

Remarques :
• Réponse : crée ou échoue si existe — 1re option.`,
  3105: `open("file.txt", "rb") ?

Débutant :
• Lecture binaire : read retourne des bytes, pas des str.

Intermédiaire :
• Pas de décodage Unicode ni translation newline.

Expert :
• Essentiel pour formats binaires, hachage, crypto.

Concepts clés :
• str vs bytes selon le mode.

Distinctions clés :
• rb vs r ; wb vs w.

Fonctionnement :
• Couche buffered raw I/O.

Exécution étape par étape :
1. Ouvre en binaire.
2. read() → bytes.

Ordre des opérations :
• Concaténation bytes avec +.

Cas d'utilisation courants :
• Images, PDF, pickles (attention sécurité).

Cas limites :
• Mélanger write str sur fichier binaire → TypeError.

Considérations de performance :
• Souvent plus prévisible pour gros volumes.

Exemples :
• hashlib.filedigest.

Remarques :
• Réponse : lecture binaire (bytes) — 1re option.`,
  3106: `f.read() sur fichier texte ?

Débutant :
• Lit tout le reste du fichier en une seule chaîne str.

Intermédiaire :
• Second read() → '' si curseur en fin.

Expert :
• read(n) limite la taille ; utile chunks.

Concepts clés :
• Chargement mémoire monolithique.

Distinctions clés :
• read vs readline vs readlines vs itération.

Fonctionnement :
• Boucle interne jusqu'à EOF.

Exécution étape par étape :
1. Depuis tell() courant.
2. Concatène jusqu'à fin.

Ordre des opérations :
• Inclut les caractères fin de ligne.

Cas d'utilisation courants :
• Petits fichiers JSON/XML en mémoire.

Cas limites :
• Fichier énorme → OOM.

Considérations de performance :
• Préférer itération ligne par ligne pour gros fichiers.

Exemples :
• content = f.read(); json.loads(content).

Remarques :
• Réponse : tout le contenu en une chaîne — 1re option.`,
  3107: `f.readline() ?

Débutant :
• Une ligne par appel, souvent avec le caractère fin de ligne inclus.

Intermédiaire :
• EOF → chaîne vide ''.

Expert :
• universal newlines normalisent \\r\\n en \\n en texte.

Concepts clés :
• Lecture incrémentale.

Distinctions clés :
• readline vs next(iter(f)).

Fonctionnement :
• Cherche séparateur ligne dans le buffer.

Exécution étape par étape :
1. Lire jusqu'au \\n ou fin.
2. Avancer le curseur.

Ordre des opérations :
• Ligne vide fichier → souvent '\\n' seul.

Cas d'utilisation courants :
• Parsing ligne à ligne contrôlé.

Cas limites :
• Très longues lignes sans \\n → grosse chaîne.

Considérations de performance :
• Meilleur que read() pour streams.

Exemples :
• while (line := f.readline()): ...

Remarques :
• Réponse : une ligne avec saut de ligne si présent — 1re option.`,
  3108: `f.readlines() ?

Débutant :
• Liste de str, une entrée par ligne (souvent avec \\n).

Intermédiaire :
• Équivalent pratique à list(f) depuis la position courante.

Expert :
• hint size obsolète / peu utilisé pour buffer interne.

Concepts clés :
• Matérialisation de toutes les lignes restantes.

Distinctions clés :
• readlines vs itération lazy.

Fonctionnement :
• Itère jusqu'à EOF en accumulant.

Exécution étape par étape :
1. Tant que pas EOF, append ligne.

Ordre des opérations :
• Mémoire O(nombre de lignes).

Cas d'utilisation courants :
• Traitement par index de ligne.

Cas limites :
• Gros fichiers → même problème que read().

Considérations de performance :
• Itérer for line in f évite la liste intermédiaire.

Exemples :
• lines = f.readlines(); strip batch.

Remarques :
• Réponse : liste de toutes les lignes — 1re option.`,
  3109: `f.write("text") : valeur de retour ?

Débutant :
• Entier = nombre de caractères (texte) ou octets (binaire) écrits.

Intermédiaire :
• Pas de \\n automatique après la chaîne.

Expert :
• Peut être < len en encodage rare si write buffer spécial — cas usuel str complet.

Concepts clés :
• Confirmation de quantité écrite.

Distinctions clés :
• write vs print(file=f).

Fonctionnement :
• Encode puis envoie au buffer.

Exécution étape par étape :
1. Encoder.
2. Écrire buffer.
3. Retourner compte.

Ordre des opérations :
• flush pas forcé avant return.

Cas d'utilisation courants :
• Vérifier écriture complète, logs de volume.

Cas limites :
• write('') → 0.

Considérations de performance :
• writelines en boucle vs join + single write.

Exemples :
• n = f.write('hello'); assert n == 5.

Remarques :
• Réponse : nombre de caractères écrits — 1re option.`,
  3110: `f.writelines(["a\\n", "b\\n"]) ajoute-t-il des sauts de ligne ?

Débutant :
• Non : chaque chaîne est écrite telle quelle, concaténée.

Intermédiaire :
• Le nom « lines » est trompeur : pas de séparateur magique.

Expert :
• Pour CRLF sous Windows, inclure \\r\\n si besoin explicite.

Concepts clés :
• Contrôle total du format.

Distinctions clés :
• writelines vs print(..., file=f).

Fonctionnement :
• Itère et write successif.

Exécution étape par étape :
1. Pour chaque élément, write sans ajout auto.

Ordre des opérations :
• Ordre de la liste conservé.

Cas d'utilisation courants :
• Rejouer lignes déjà terminées par \\n.

Cas limites :
• Oublier \\n → fichier sur une seule ligne visuelle.

Considérations de performance :
• Peut être rapide sans join intermédiaire.

Exemples :
• f.writelines(lines) où lines déjà terminées par \\n.

Remarques :
• Réponse : non, il faut inclure les \\n soi-même — 1re option.`,
  3111: `with open('f.txt') as f vs f = open(...) ?

Débutant :
• with garantit fermeture via __exit__ même si exception.

Intermédiaire :
• Équivalent try/finally avec close.

Expert :
• Gère aussi la chaîne d'exceptions si __exit__ supprime la levée.

Concepts clés :
• Gestionnaire de contexte pour ressources.

Distinctions clés :
• with vs pathlib Path.open identique en esprit.

Fonctionnement :
• __enter__ retourne f ; __exit__ appelle close.

Exécution étape par étape :
1. Entrée bloc.
2. Corps.
3. Sortie normale ou except : close quand même.

Ordre des opérations :
• finally sémantique du CM.

Cas d'utilisation courants :
• Tout fichier ouvert.

Cas limites :
• Processus tué brutalement : OS recycle handle.

Considérations de performance :
• Coût négligeable.

Exemples :
• with open(path) as f: return f.read().

Remarques :
• Réponse : fermeture assurée même en cas d'erreur — 1re option.`,
  3112: `f.seek(0) ?

Débutant :
• Replace le curseur au début (offset 0).

Intermédiaire :
• seek(0, 2) irait en fin ; 1 = relatif position courante.

Expert :
• En texte, seek arbitraire autorisé seulement sur positions issues de tell() valides.

Concepts clés :
• Navigation aléatoire dans fichier.

Distinctions clés :
• seek vs rewind lecture seule.

Fonctionnement :
• Appel OS lseek ou équivalent.

Exécution étape par étape :
1. Valider mode fichier.
2. Déplacer offset.

Ordre des opérations :
• Après seek, read relit depuis le début.

Cas d'utilisation courants :
• Relire fichier après écriture en r+.

Cas limites :
• seek invalide texte → undefined behavior / error.

Considérations de performance :
• seek disque vs SSD négligeable.

Exemples :
• f.seek(0); second_pass = f.read().

Remarques :
• Réponse : curseur au début du fichier — 1re option.`,
  3113: `f.tell() ?

Débutant :
• Entier : position courante en octets (binaire) ou unité opaque fiable en texte.

Intermédiaire :
• Paires tell/seek pour reprendre plus tard.

Expert :
• En texte, seul tell() comme argument seek est portable.

Concepts clés :
• Introspection offset.

Distinctions clés :
• tell vs len(data) après read.

Fonctionnement :
• Interroge le buffer + offset sous-jacent.

Exécution étape par étape :
1. Après lectures/écritures, nombre reflète progression.

Ordre des opérations :
• Mis à jour après chaque opération.

Cas d'utilisation courants :
• Reprise parsing, barres de progression.

Cas limites :
• Fichier fermé → ValueError.

Considérations de performance :
• O(1).

Exemples :
• pos = f.tell().

Remarques :
• Réponse : position actuelle du curseur — 1re option.`,
  3114: `f.closed ?

Débutant :
• True si close() déjà appelé (ou sortie du with).

Intermédiaire :
• Propriété booléenne sur file object.

Expert :
• Détecter réutilisation après fermeture.

Concepts clés :
• État du descripteur côté Python.

Distinctions clés :
• closed vs fileno() valide.

Fonctionnement :
• Flag interne mis à True dans close.

Exécution étape par étape :
1. Après close, toute opération I/O lève.

Ordre des opérations :
• Vérifier avant réouverture.

Cas d'utilisation courants :
• Wrappers, tests.

Cas limites :
• Garbage collector peut fermer si plus de ref — rare.

Considérations de performance :
• Négligeable.

Exemples :
• assert not f.closed.

Remarques :
• Réponse : indique si le fichier est fermé — 1re option.`,
  3115: `Pourquoi encoding="utf-8" dans open() ?

Débutant :
• Force le décodage/encodage UTF-8 explicite au lieu du défaut plateforme.

Intermédiaire :
• Évite mojibake sur Windows avec locale CP1252.

Expert :
• Python 3.15+ tend vers UTF-8 par défaut mais explicite reste recommandé portable.

Concepts clés :
• Texte = bytes + encoding.

Distinctions clés :
• errors='replace' vs strict.

Fonctionnement :
• Codec utf-8 sur read/write.

Exécution étape par étape :
1. Bytes disque → str via utf-8.

Ordre des opérations :
• BOM utf-8 géré par codec.

Cas d'utilisation courants :
• CSV, JSON, sources multilingues.

Cas limites :
• Fichier latin1 lu en utf-8 → UnicodeDecodeError.

Considérations de performance :
• UTF-8 très optimisé en CPython.

Exemples :
• open(f, encoding='utf-8', errors='surrogateescape').

Remarques :
• Réponse : contrôler l'encodage texte (UTF-8 explicite) — 1re option.`,
  3116: `Mode par défaut de open() sans second argument ?

Débutant :
• "r" lecture texte.

Intermédiaire :
• open(path) ≡ open(path, 'r').

Expert :
• Pas binaire tant que 'b' absent.

Concepts clés :
• Moindre surprise lecture.

Distinctions clés :
• Défaut r vs anciennes APIs autres langages.

Fonctionnement :
• Signature open(file, mode='r', ...).

Exécution étape par étape :
1. Même cheminement que mode r explicite.

Ordre des opérations :
• Échec si fichier absent.

Cas d'utilisation courants :
• Quick read configs.

Cas limites :
• Oublier 'w' et penser créer fichier → erreur.

Considérations de performance :
• N/A.

Exemples :
• open('.env').

Remarques :
• Réponse : lecture "r" — 1re option.`,
  3117: `Itération for line in fichier ?

Débutant :
• Oui : file object est itérable ligne par ligne sans tout charger.

Intermédiaire :
• Équivalent répété readline avec optimisations.

Expert :
• Taille buffer interne ; pas de strip automatique.

Concepts clés :
• Streaming mémoire efficace.

Distinctions clés :
• for line vs readlines().

Fonctionnement :
• __iter__ sur TextIOWrapper.

Exécution étape par étape :
1. Chaque next lit jusqu'à prochain \\n.

Ordre des opérations :
• line garde souvent \\n final.

Cas d'utilisation courants :
• grep Python, gros logs.

Cas limites :
• Modification fichier pendant lecture → comportement OS.

Considérations de performance :
• Optimal pour gros fichiers.

Exemples :
• for line in f: process(line.rstrip()).

Remarques :
• Réponse : oui, itération ligne par ligne — 1re option.`,
  3118: `f.truncate() sans taille ?

Débutant :
• Coupe le fichier à la position courante du curseur : tout après est supprimé.

Intermédiaire :
• truncate(0) avec curseur 0 vide le fichier.

Expert :
• Nécessite mode writable ; comportement taille > fichier dépend plateforme.

Concepts clés :
• Redimensionnement fichier sur disque.

Distinctions clés :
• truncate vs open w qui vide d'entrée.

Fonctionnement :
• ftruncate syscall.

Exécution étape par étape :
1. Mesurer position.
2. Tronquer à cette longueur.

Ordre des opérations :
• seek puis truncate pattern courant.

Cas d'utilisation courants :
• Annuler fin de fichier log.

Cas limites :
• Lecture seule → unsupported.

Considérations de performance :
• Opération disque.

Exemples :
• f.seek(0); f.truncate().

Remarques :
• Réponse : tronque à la position courante — 1re option.`,
  3119: `date.today() — type de result ?

Débutant :
• Objet datetime.date du jour local.

Intermédiaire :
• Pas d'heure ni fuseau : date seule.

Expert :
• today() vs datetime.now().date().

Concepts clés :
• Horloge locale système.

Distinctions clés :
• date vs datetime vs timestamp.

Fonctionnement :
• Appel système date puis construction date(y,m,d).

Exécution étape par étape :
1. now local.
2. Tronquer à jour.

Ordre des opérations :
• Attributs .year .month .day.

Cas d'utilisation courants :
• Factures, échéances « aujourd'hui ».

Cas limites :
• Minuit autour : tests flaky sans freezegun.

Considérations de performance :
• O(1).

Exemples :
• if file_date < date.today(): ...

Remarques :
• Réponse : objet date du jour — 1re option.`,
  3120: `datetime.now() ?

Débutant :
• datetime naïf local (sans tz sauf si tz passée).

Intermédiaire :
• Contient date + heure + microseconde.

Expert :
• now(timezone.utc) pour UTC conscient.

Concepts clés :
• Horodatage wall-clock local par défaut.

Distinctions clés :
• now vs utcnow déprécié en faveur de now(UTC).

Fonctionnement :
• gettimeofday ou équivalent.

Exécution étape par étape :
1. Capturer instantané.
2. Construire datetime.

Ordre des opérations :
• Comparaisons naïves dangereuses entre fuseaux.

Cas d'utilisation courants :
• Logs, timestamps fichiers.

Cas limites :
• DST transitions ambiguës sans zone.

Considérations de performance :
• Très rapide.

Exemples :
• datetime.now().isoformat().

Remarques :
• Réponse : date et heure actuelles (datetime) — 1re option.`,
  3121: `date(2024, 1, 15).year ?

Débutant :
• 2024.

Intermédiaire :
• Attribut entier du composant année.

Expert :
• date immutable ; pas de setter.

Concepts clés :
• Décomposition calendrier.

Distinctions clés :
• .year vs strftime %Y.

Fonctionnement :
• Champs stockés en C int.

Exécution étape par étape :
1. Construction validée (mois/jour).
2. Lecture attribut.

Ordre des opérations :
• ValueError si date invalide à la construction.

Cas d'utilisation courants :
• Filtres année comptable.

Cas limites :
• Années avant 1 ? date min selon plateforme.

Considérations de performance :
• Négligeable.

Exemples :
• d.year == 2024.

Remarques :
• Réponse : 2024 — 1re option.`,
  3122: `date(2024, 1, 15).month ?

Débutant :
• 1 (janvier).

Intermédiaire :
• Mois 1–12.

Expert :
• Combiner avec calendar.month_name.

Concepts clés :
• Composante mois.

Distinctions clés :
• month vs strftime %m zero-padded string.

Fonctionnement :
• Stockage entier.

Exécution étape par étape :
• Accès direct.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Bucket mensuel.

Cas limites :
• N/A pour date valide.

Considérations de performance :
• Négligeable.

Exemples :
• if d.month == 12: ...

Remarques :
• Réponse : 1 — 1re option.`,
  3123: `date(2024, 1, 15).day ?

Débutant :
• 15.

Intermédiaire :
• Jour du mois 1–31.

Expert :
• weekday() autre info.

Concepts clés :
• Composante jour.

Distinctions clés :
• .day vs timedelta.days durée.

Fonctionnement :
• Champ entier.

Exécution étape par étape :
• Lecture simple.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Échéance le 15.

Cas limites :
• 31 février interdit à la construction.

Considérations de performance :
• Négligeable.

Exemples :
• assert d.day >= 1.

Remarques :
• Réponse : 15 — 1re option.`,
  3124: `datetime(2024, 1, 15, 10, 30).hour ?

Débutant :
• 10.

Intermédiaire :
• Heure 0–23.

Expert :
• time() extrait time seul.

Concepts clés :
• Horloge dans datetime.

Distinctions clés :
• hour vs strftime %H.

Fonctionnement :
• Champ entier.

Exécution étape par étape :
• Direct.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Fenêtres horaires.

Cas limites :
• 24h interdit — utiliser 0 lendemain.

Considérations de performance :
• Négligeable.

Exemples :
• if dt.hour < 12: matin.

Remarques :
• Réponse : 10 — 1re option.`,
  3125: `datetime(2024, 1, 15, 10, 30).minute ?

Débutant :
• 30.

Intermédiaire :
• Minutes 0–59.

Expert :
• second microsecond aussi disponibles.

Concepts clés :
• Granularité temps civil.

Distinctions clés :
• minute vs timedelta.total_seconds().

Fonctionnement :
• Champ entier.

Exécution étape par étape :
• Direct.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Arrondis 5 minutes.

Cas limites :
• leap second pas modélisé en datetime std.

Considérations de performance :
• Négligeable.

Exemples :
• cron-like checks.

Remarques :
• Réponse : 30 — 1re option.`,
};
