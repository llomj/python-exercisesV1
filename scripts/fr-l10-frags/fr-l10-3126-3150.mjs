/** Level 10 FR — 3126–3150 (intermediate_a Q26–49 + intermediate_b Q50 chain). */
export default {
  3126: `from datetime import timedelta
print(timedelta(days=5).days) — résultat ?

Débutant :
• .days renvoie la composante « jours entiers » de la durée : ici 5.

Intermédiaire :
• Ce n'est pas total_seconds() : 432000 serait les secondes de 5 jours.

Expert :
• timedelta normalise tout en (days, seconds, microseconds).

Concepts clés :
• Durée additive, pas un instant.

Distinctions clés :
• .days vs .seconds (reste après jours) vs total_seconds().

Fonctionnement :
• Construction puis lecture du champ days.

Exécution étape par étape :
1. timedelta(days=5) crée une durée de 5 jours.
2. .days lit 5.

Ordre des opérations :
• Pas d'impression du timedelta brut ici.

Cas d'utilisation courants :
• Délais SLA, échéances relatives.

Cas limites :
• Combinaisons heures/jours : .days peut être négatif si durée négative.

Considérations de performance :
• Objets légers.

Exemples :
• timedelta(weeks=1).days vaut 7.

Remarques :
• Réponse : 5 — 1re option.`,
  3127: `date(2024, 1, 15) + timedelta(days=10) — résultat affiché ?

Débutant :
• On avance de 10 jours : 15 + 10 = 25 janvier 2024.

Intermédiaire :
• Le + sur date et timedelta produit une nouvelle date immuable.

Expert :
• Mois bissextile et fins de mois gérés par le calendrier du module.

Concepts clés :
• Arithmétique de dates sans fuseau explicite.

Distinctions clés :
• date + timedelta vs datetime + timedelta vs date - date.

Fonctionnement :
• Addition normalisée du calendrier grégorien.

Exécution étape par étape :
1. date fixe le point de départ.
2. timedelta ajoute 10 jours.
3. print affiche 2024-01-25.

Ordre des opérations :
• + avant print.

Cas d'utilisation courants :
• Factures « +10 j », rappels.

Cas limites :
• Très grandes durées : limites du type date.

Considérations de performance :
• O(1) en pratique.

Exemples :
• Reculer avec timedelta(days=-10).

Remarques :
• Réponse : 2024-01-25 — 1re option.`,
  3128: `(date(2024, 1, 15) - date(2024, 1, 10)).days — résultat ?

Débutant :
• Différence de 5 jours ; .days donne 5.

Intermédiaire :
• date - date → timedelta, pas un entier direct.

Expert :
• Inverser l'ordre donne timedelta avec .days négatif.

Concepts clés :
• Mesure d'écart entre deux dates.

Distinctions clés :
• .days du timedelta vs nombre de jours calendaires « visuels » (souvent identique ici).

Fonctionnement :
• Soustraction puis extraction du champ days.

Exécution étape par étape :
1. Soustraction produit timedelta(days=5) normalisé.
2. .days vaut 5.

Ordre des opérations :
• Parenthèses puis attribut.

Cas d'utilisation courants :
• Âge en jours, pénalités de retard.

Cas limites :
• Heures non modélisées sur date seule.

Considérations de performance :
• Négligeable.

Exemples :
• Comparer deux deadlines.

Remarques :
• Réponse : 5 — 1re option.`,
  3129: `datetime(2024, 1, 15).strftime("%Y-%m-%d") — résultat ?

Débutant :
• Format ISO-like année-mois-jour avec tirets : chaîne 2024-01-15.

Intermédiaire :
• %Y année 4 chiffres, %m et %d zero-padded.

Expert :
• strftime locale dépendante pour certains codes, pas pour ces trois-là.

Concepts clés :
• Sérialisation lisible et triable.

Distinctions clés :
• strftime vs isoformat() sur datetime sans heure affichée ici.

Fonctionnement :
• Substitution des codes dans la chaîne de format.

Exécution étape par étape :
1. datetime minimal (minuit implicite si date seule non : ici constructeur 3 args → minuit).
2. strftime produit la chaîne.

Ordre des opérations :
• Appel méthode après construction.

Cas d'utilisation courants :
• Clés de partition, noms de fichiers.

Cas limites :
• Années < 1900 autrefois problématiques ; aujourd'hui largement OK.

Considérations de performance :
• Coût faible.

Exemples :
• %d/%m/%Y pour affichage européen.

Remarques :
• Réponse : "2024-01-15" — 1re option.`,
  3130: `strftime("%d/%m/%Y") sur le 15 janvier 2024 — résultat ?

Débutant :
• Jour / mois / année avec slashes : 15/01/2024.

Intermédiaire :
• Ne pas confondre avec le format US mois/jour.

Expert :
• Les séparateurs / sont littéraux dans le format.

Concepts clés :
• Ordre des composantes entièrement contrôlé par le format.

Distinctions clés :
• %d vs %m vs %Y.

Fonctionnement :
• Même moteur strftime que la question précédente.

Exécution étape par étape :
1. %d → 15, %m → 01, %Y → 2024.
2. Joint par /.

Ordre des opérations :
• Gauche à droite dans la chaîne de format.

Cas d'utilisation courants :
• Affichage utilisateur Europe, rapports.

Cas limites :
• Zéros de tête sur mois et jour.

Considérations de performance :
• Négligeable.

Exemples :
• Inverser en %m/%d/%Y pour style US.

Remarques :
• Réponse : "15/01/2024" — 1re option.`,
  3131: `strptime("2024-01-15", "%Y-%m-%d").day — résultat ?

Débutant :
• Le jour du mois parsé est 15.

Intermédiaire :
• strptime renvoie datetime à minuit par défaut pour cette chaîne.

Expert :
• ValueError si la chaîne ne correspond pas au format.

Concepts clés :
• Parse inverse de strftime pour une forme fixe.

Distinctions clés :
• .day vs .month vs .year sur l'objet retourné.

Fonctionnement :
• Analyse lexicale selon les codes de format.

Exécution étape par étape :
1. Parse en datetime(2024,1,15,0,0,0).
2. .day → 15.

Ordre des opérations :
• strptime d'abord, puis attribut.

Cas d'utilisation courants :
• API REST dates ISO en chaîne.

Cas limites :
• Fuseaux : datetime naïf ici.

Considérations de performance :
• Parse plus coûteux qu'un accès attribut ; acceptable.

Exemples :
• Extraire année pour index annuel.

Remarques :
• Réponse : 15 — 1re option.`,
  3132: `date(2024, 1, 15).weekday() — résultat ?

Débutant :
• Convention weekday : lundi = 0 ; le 15 janvier 2024 est un lundi → 0.

Intermédiaire :
• Ne pas confondre avec isoweekday (lundi = 1).

Expert :
• Les options peuvent rappeler « 0 (lundi) » pour ancrer la convention.

Concepts clés :
• Index cyclique sur 7 jours.

Distinctions clés :
• weekday vs isoweekday vs strftime %w.

Fonctionnement :
• Calcul calendrier depuis date ordinaire.

Exécution étape par étape :
1. Normalisation interne du jour de semaine.
2. Retour 0 pour lundi.

Ordre des opérations :
• Méthode sur date immuable.

Cas d'utilisation courants :
• Planning « ouvert le lundi ».

Cas limites :
• Pas de fuseau : date seule.

Considérations de performance :
• O(1).

Exemples :
• Comparer weekday() à 4 pour vendredi.

Remarques :
• Réponse : 0 (lundi) — 1re option.`,
  3133: `date(2024, 1, 15).isoformat() — résultat ?

Débutant :
• Chaîne ISO 8601 date seule : 2024-01-15.

Intermédiaire :
• Équivalent à str(d) pour un objet date.

Expert :
• datetime.isoformat ajouterait T et l'heure.

Concepts clés :
• Interop JSON schémas, logs.

Distinctions clés :
• isoformat vs strftime personnalisé.

Fonctionnement :
• Format fixe YYYY-MM-DD.

Exécution étape par étape :
1. Lecture y,m,d.
2. Assemblage avec tirets et zéros.

Ordre des opérations :
• stable.

Cas d'utilisation courants :
• Colonnes DATE en CSV export.

Cas limites :
• Années très grandes : même limites que date.

Considérations de performance :
• Très rapide.

Exemples :
• Comparer deux isoformat() lexicographiquement pour dates même mois.

Remarques :
• Réponse : "2024-01-15" — 1re option.`,
  3134: `timedelta(hours=25).days — résultat ?

Débutant :
• 25 heures = 1 jour + 1 heure ; .days vaut 1.

Intermédiaire :
• L'heure restante vit dans .seconds (3600), pas dans .days.

Expert :
• Normalisation toujours en jours entiers + reste secondes.

Concepts clés :
• Décomposition normalisée, pas arrondi flou.

Distinctions clés :
• .days vs total_seconds() = 90000.

Fonctionnement :
• Division entière implicite par 86400 s pour la partie days.

Exécution étape par étape :
1. Convertir 25 h en secondes totales.
2. Extraire jours entiers → 1.

Ordre des opérations :
• Attribut après construction.

Cas d'utilisation courants :
• Facturation au jour prorata.

Cas limites :
• Microsecondes ajoutées peuvent encore normaliser.

Considérations de performance :
• Négligeable.

Exemples :
• Vérifier .seconds après un excès d'heures.

Remarques :
• Réponse : 1 — 1re option.`,
  3135: `timedelta(hours=25).seconds — résultat ?

Débutant :
• Après retrait d'un jour entier, il reste 1 h = 3600 secondes dans .seconds.

Intermédiaire :
• .seconds n'est pas la durée totale en secondes.

Expert :
• Plage de .seconds toujours [0, 86400).

Concepts clés :
• Piège classique timedelta.

Distinctions clés :
• .seconds vs .total_seconds().

Fonctionnement :
• Stockage interne (days, seconds, microseconds).

Exécution étape par étape :
1. 25 h normalisées.
2. .seconds lit le reliquat 3600.

Ordre des opérations :
• Lire .days et .seconds ensemble pour reconstruire mentalement.

Cas d'utilisation courants :
• Debug de durées composées.

Cas limites :
• Durées négatives : signes à surveiller.

Considérations de performance :
• Négligeable.

Exemples :
• timedelta(days=2, hours=3).seconds vaut 10800.

Remarques :
• Réponse : 3600 — 1re option.`,
  3136: `re.match(r"\\d+", "123abc").group() — résultat ?

Débutant :
• match ancre au début ; \\d+ consomme les chiffres initiaux : "123".

Intermédiaire :
• S'arrête avant "a" car plus un chiffre.

Expert :
• group(0) implicite dans group() sans argument.

Concepts clés :
• Ancrage implicite au début pour match.

Distinctions clés :
• match vs search sur cette chaîne.

Fonctionnement :
• Moteur re compile et applique le motif.

Exécution étape par étape :
1. Évalue match au début.
2. Greedy + sur chiffres.
3. group renvoie la sous-chaîne capturée entière.

Ordre des opérations :
• Lecture gauche-droite au début seulement.

Cas d'utilisation courants :
• Préfixes numériques (IDs, codes).

Cas limites :
• Chaîne sans chiffre au début → None et .group() lève.

Considérations de performance :
• Linéaire en longueur du préfixe chiffres.

Exemples :
• Tester "abc123" → match None.

Remarques :
• Réponse : "123" — 1re option.`,
  3137: `re.search(r"\\d+", "abc123def").group() — résultat ?

Débutant :
• search trouve la première occurrence de chiffres : "123".

Intermédiaire :
• Peu importe le début de chaîne tant que le motif apparaît.

Expert :
• span() donnerait (3,6).

Concepts clés :
• Scan global du texte.

Distinctions clés :
• search vs match sur la même entrée.

Fonctionnement :
• Parcours avec retour à la première réussite.

Exécution étape par étape :
1. Ignore "abc".
2. Trouve "123".
3. group() retourne "123".

Ordre des opérations :
• Première correspondance gagne.

Cas d'utilisation courants :
• Extraire un numéro dans un log bruité.

Cas limites :
• Plusieurs groupes : group() reste le match entier si pas de parenthèses.

Considérations de performance :
• Coût dépend de la position du hit.

Exemples :
• finditer pour toutes les occurrences.

Remarques :
• Réponse : "123" — 1re option.`,
  3138: `Différence entre re.match() et re.search() ?

Débutant :
• match teste seulement le début de chaîne ; search parcourt toute la chaîne pour la première occurrence.

Intermédiaire :
• Les deux renvoient un Match ou None.

Expert :
• match avec ^ explicite redondant mais documente l'intention.

Concepts clés :
• Ancrage sémantique.

Distinctions clés :
• match vs fullmatch vs search.

Fonctionnement :
• Algorithmes de NFA similaires, point de départ différent.

Exécution étape par étape :
1. match : tentative à l'index 0.
2. search : tentatives à chaque position (optimisations internes).

Ordre des opérations :
• Choisir l'API selon le contrat du format d'entrée.

Cas d'utilisation courants :
• Ligne de protocole fixe → match ; fouille → search.

Cas limites :
• Chaîne vide : souvent aucune correspondance.

Considérations de performance :
• search peut coûter plus sur très longues chaînes.

Exemples :
• Valider préfixe UUID vs trouver UUID dans une phrase.

Remarques :
• Réponse : match début seulement ; search n'importe où — 1re option.`,
  3139: `re.findall(r"\\d+", "a1b2c3") — résultat ?

Débutant :
• Liste de toutes les plages de chiffres non chevauchantes : "1", "2", "3".

Intermédiaire :
• Retourne des str, pas des objets Match.

Expert :
• Avec groupes capturants, findall change de forme de retour.

Concepts clés :
• Extraction multiple.

Distinctions clés :
• findall vs finditer vs subn.

Fonctionnement :
• Balayage répété après chaque fin de match.

Exécution étape par étape :
1. Trouve "1".
2. Puis "2".
3. Puis "3".
4. Liste ["1","2","3"].

Ordre des opérations :
• Ordre d'apparition.

Cas d'utilisation courants :
• Parser des nombres épars.

Cas limites :
• Motifs qui se chevauchent : findall ne chevauche pas.

Considérations de performance :
• Peut allouer une grande liste.

Exemples :
• Extraire années d'un texte.

Remarques :
• Réponse : ["1", "2", "3"] — 1re option.`,
  3140: `re.sub(r"\\d", "X", "a1b2c3") — résultat ?

Débutant :
• Chaque chiffre isolé est remplacé par X : aXbXcX.

Intermédiaire :
• \\d une seule position ; trois remplacements.

Expert :
• count limite le nombre de remplacements si besoin.

Concepts clés :
• Transformation globale par défaut.

Distinctions clés :
• sub vs subn (compte).

Fonctionnement :
• Scan et construction d'une nouvelle chaîne.

Exécution étape par étape :
1. Remplace 1.
2. Remplace 2.
3. Remplace 3.

Ordre des opérations :
• De gauche à droite.

Cas d'utilisation courants :
• Masquage partiel, anonymisation légère.

Cas limites :
• Fonction de remplacement : ordre d'appel par match.

Considérations de performance :
• Nouvelle chaîne immuable à chaque étape interne optimisée en C.

Exemples :
• sub(r"\\d+", "N", "a12b") → "aNb".

Remarques :
• Réponse : "aXbXcX" — 1re option.`,
  3141: `re.split(r"\\s+", "hello  world  python") — résultat ?

Débutant :
• Coupe sur un ou plusieurs blancs ; pas de champs vides entre espaces multiples : ["hello","world","python"].

Intermédiaire :
• str.split sans argument gère aussi les espaces multiples mais regex généralise les séparateurs.

Expert :
• maxsplit et flags optionnels.

Concepts clés :
• Tokenisation robuste.

Distinctions clés :
• split regex vs str.split fixe.

Fonctionnement :
• Trouve zones de blancs comme délimiteur.

Exécution étape par étape :
1. Ignore le bloc d'espaces entre hello et world.
2. Idem avant python.
3. Liste trois tokens.

Ordre des opérations :
• Si la chaîne commence par des blancs, premier élément peut être '' selon motif — ici non sur cet exemple.

Cas d'utilisation courants :
• Colonnes irrégulières dans fichiers texte.

Cas limites :
• Séparateurs multiples types : élargir la classe \\s.

Considérations de performance :
• Regex coûteux vs split simple ; ici justifié.

Exemples :
• split sur [,;] pour liste hétérogène.

Remarques :
• Réponse : ["hello", "world", "python"] — 1re option.`,
  3142: `bool(re.match(r"^\\d+$", "12345")) — résultat ?

Débutant :
• Toute la chaîne est des chiffres : le motif ancré réussit → True.

Intermédiaire :
• ^ et $ forcent couverture totale (avec match au début, redondant partiel mais clair).

Expert :
• Pour chaîne vide, + exige au moins un chiffre → False.

Concepts clés :
• Validation de format « entier décimal en texte ».

Distinctions clés :
• ^\\d+$ vs \\d+ sans ancrage.

Fonctionnement :
• Un seul match couvrant toute la chaîne.

Exécution étape par étape :
1. match renvoie un objet Match truthy.
2. bool(...) → True.

Ordre des opérations :
• bool après match.

Cas d'utilisation courants :
• Champs numériques avant int().

Cas limites :
• Espaces latéraux : échec ; strip d'abord.

Considérations de performance :
• Très rapide pour petites chaînes.

Exemples :
• Autoriser signe : motif différent.

Remarques :
• Réponse : True — 1re option.`,
  3143: `bool(re.match(r"^\\d+$", "123a5")) — résultat ?

Débutant :
• La lettre casse la continuité de chiffres : pas de match complet → None → False.

Intermédiaire :
• Ne pas utiliser search si on veut « toute la chaîne est des chiffres ».

Expert :
• fullmatch explicite sur d'autres motifs multi-segments.

Concepts clés :
• Échec de validation stricte.

Distinctions clés :
• Motif trop strict vs trop laxiste.

Fonctionnement :
• Le moteur échoue à satisfaire $ après les chiffres initiaux.

Exécution étape par étape :
1. Lit 123 puis bloque sur a.
2. match None.
3. bool(None) False.

Ordre des opérations :
• Court-circuit interne du moteur.

Cas d'utilisation courants :
• Rejeter identifiants alphanumériques quand on veut pur digit.

Cas limites :
• Unicode digits autres que 0-9 : \\d inclut certains caractères unicode selon flags ASCII.

Considérations de performance :
• Négligeable.

Exemples :
• Tester " 123 " sans strip → False.

Remarques :
• Réponse : False — 1re option.`,
  3144: `re.findall(r"[aeiou]", "hello world") — résultat ?

Débutant :
• Voyelles minuscules dans l'ordre : e, o dans hello puis o dans world → ["e","o","o"].

Intermédiaire :
• L'espace n'est pas une voyelle ; pas de Y ici.

Expert :
• Classe de caractères = un seul caractère par match.

Concepts clés :
• Filtrage par ensemble fini.

Distinctions clés :
• [aeiou] vs motif lookahead complexe.

Fonctionnement :
• Balayage caractère par caractère éligible.

Exécution étape par étape :
1. h ignoré, e pris.
2. ll ignorés, o pris.
3. espace ignoré, w ignoré, o pris, rld ignorés.

Ordre des opérations :
• Ordre de lecture gauche-droite.

Cas d'utilisation courants :
• Comptage vocalique, jeux pédagogiques.

Cas limites :
• Accents : hors de la classe simple.

Considérations de performance :
• Linéaire en longueur.

Exemples :
• Ajouter A-Z dans une seconde classe pour titre.

Remarques :
• Réponse : ["e", "o", "o"] — 1re option.`,
  3145: `re.findall(r"\\b\\w+\\b", "hello world") — résultat ?

Débutant :
• Deux mots entiers séparés par espace : ["hello","world"].

Intermédiaire :
• \\b est une assertion de largeur nulle ; \\w+ consomme lettres/chiffres/_.

Expert :
• Ponctuation colle aux limites de mots différemment selon contexte.

Concepts clés :
• Tokenisation « mot » regex.

Distinctions clés :
• \\w vs Unicode lettres avec re.UNICODE par défaut Py3.

Fonctionnement :
• Trouve transitions mot/non-mot.

Exécution étape par étape :
1. Mot hello.
2. Espace saute.
3. Mot world.

Ordre des opérations :
• findall concatène les captures pleines correspondances.

Cas d'utilisation courants :
• NLP léger, indexation.

Cas limites :
• Mots avec apostrophe : coupes inattendues selon motif.

Considérations de performance :
• OK pour phrases courtes.

Exemples :
• "hello, world!" donne encore hello et world.

Remarques :
• Réponse : ["hello", "world"] — 1re option.`,
  3146: `re.match(r"(\\w+)@(\\w+)", "user@host").groups() — résultat ?

Débutant :
• Deux groupes capturants : user et host → tuple ("user", "host").

Intermédiaire :
• group(0) serait la chaîne entière user@host.

Expert :
• Nommer les groupes avec (?P<name>...) pour lisibilité.

Concepts clés :
• Décomposition structurée d'un match.

Distinctions clés :
• groups() vs groupdict() avec noms.

Fonctionnement :
• Sous-matches stockés dans l'objet Match.

Exécution étape par étape :
1. Match global réussit.
2. Extraction groupe 1 et 2.
3. Tuple ordonné.

Ordre des opérations :
• Ordre des parenthèses dans le motif.

Cas d'utilisation courants :
• Parser emails simplistes, tokens key@value.

Cas limites :
• Emails réels : RFC bien plus riche.

Considérations de performance :
• Négligeable.

Exemples :
• Ajouter TLD en troisième groupe.

Remarques :
• Réponse : ("user", "host") — 1re option.`,
  3147: `.group(1) sur le match (\\w+)@(\\w+) sur "user@host" — résultat ?

Débutant :
• Premier groupe avant @ : "user".

Intermédiaire :
• group(2) serait "host".

Expert :
• IndexError si numéro hors plage.

Concepts clés :
• Accès positionnel aux captures.

Distinctions clés :
• group(1) vs lastgroup.

Fonctionnement :
• Référence à la sous-correspondance mémorisée.

Exécution étape par étape :
1. Vérifier match non None.
2. Retourner la sous-chaîne du premier groupe.

Ordre des opérations :
• Après match réussi seulement.

Cas d'utilisation courants :
• Extraire utilisateur pour authentification.

Cas limites :
• Groupe optionnel absent : peut être None selon motif.

Considérations de performance :
• O(1) accès.

Exemples :
• Chaînes avec plusieurs @ : motif à affiner.

Remarques :
• Réponse : "user" — 1re option.`,
  3148: `re.sub(r"(\\w+)", lambda m: m.group().upper(), "hello world") — résultat ?

Débutant :
• Chaque mot matché est passé à la lambda ; upper() sur "hello" et "world" → "HELLO WORLD".

Intermédiaire :
• L'espace n'est pas \\w donc préservé.

Expert :
• La fonction reçoit l'objet Match ; possibilité de logique conditionnelle.

Concepts clés :
• Remplacement calculé par occurrence.

Distinctions clés :
• lambda vs fonction nommée pour debug.

Fonctionnement :
• sub appelle le callable par match.

Exécution étape par étape :
1. Match "hello" → remplacé par HELLO.
2. Espace inchangé.
3. Match "world" → WORLD.

Ordre des opérations :
• De gauche à droite, non chevauchant par défaut.

Cas d'utilisation courants :
• Title case custom, substitutions dépendant du contenu.

Cas limites :
• Erreur dans le callable : exception propage.

Considérations de performance :
• Callable Python par match plus lent que remplacement str fixe.

Exemples :
• Capitaliser seulement mots > 3 lettres.

Remarques :
• Réponse : "HELLO WORLD" — 1re option.`,
  3149: `À quoi sert le préfixe r"..." (chaîne brute) pour les regex en Python ?

Débutant :
• Empêcher Python d'interpréter les antislash comme échappements avant le moteur re ; ils arrivent tels quels au motif.

Intermédiaire :
• Sinon il faudrait souvent doubler les antislash à la main.

Expert :
• EXCEPTION : une quote finale avant fin de chaîne brute peut encore nécessiter des contorsions.

Concepts clés :
• Séparation des couches lexicales Python vs regex.

Distinctions clés :
• r"\\n" (deux caractères) vs "\\n" (saut de ligne).

Fonctionnement :
• Le lexer Python garde le backslash littéral.

Exécution étape par étape :
1. Construction de la chaîne motif.
2. Compilation regex côté re.

Ordre des opérations :
• Toujours préférer r pour motifs avec \\d, \\w, \\b.

Cas d'utilisation courants :
• Tous les motifs non triviaux.

Cas limites :
• f-string + raw : combinaisons à maîtriser.

Considérations de performance :
• Aucun gain perf ; lisibilité et exactitude.

Exemples :
• r"\\\\" pour matcher un antislash dans le texte cible.

Remarques :
• Réponse : empêche Python d'interpréter les antislash — 1re option.`,
  3150: `from itertools import chain
list(chain([1,2],[3,4],[5])) — résultat ?

Débutant :
• Enchaîne les éléments des trois itérables dans l'ordre : [1,2,3,4,5].

Intermédiaire :
• Pas de liste imbriquée : un seul niveau « aplati » par concaténation séquentielle.

Expert :
• Lazy jusqu'à consommation ; list() matérialise.

Concepts clés :
• Itérateur sans copie des sources entières à l'avance au-delà du protocole iter.

Distinctions clés :
• chain vs chain.from_iterable vs extend de listes.

Fonctionnement :
• Délègue à chaque __iter__ successif.

Exécution étape par étape :
1. Consomme 1,2.
2. Puis 3,4.
3. Puis 5.
4. list agrège.

Ordre des opérations :
• Ordre des arguments = ordre de sortie.

Cas d'utilisation courants :
• Fusionner résultats de plusieurs requêtes paresseuses.

Cas limites :
• itérables infinis en premier : suivants jamais atteints si on ne coupe pas.

Considérations de performance :
• Évite parfois une grande concaténation de listes intermédiaires.

Exemples :
• chain("AB","CD") → caractères A,B,C,D.

Remarques :
• Réponse : [1, 2, 3, 4, 5] — 1re option.`,
};
