/** Level 10 FR — 3201–3225 (expert_a Q3–27). */
export default {
  3201: `print(logging.DEBUG) — valeur numérique ?

Débutant :
• DEBUG vaut 10 : le niveau standard le plus bas.

Intermédiaire :
• Comparaison numérique : seuls les messages avec niveau >= seuil passent.

Expert :
• NOTSET existe en dessous mais hors des cinq niveaux « usuels » documentés.

Concepts clés :
• Échelle de gravité discrète.

Distinctions clés :
• DEBUG vs INFO (20).

Fonctionnement :
• Constante entière du module logging.

Exécution étape par étape :
1. Accès à l’attribut DEBUG du module.
2. Affichage 10.

Ordre des opérations :
• Lecture simple.

Cas d'utilisation courants :
• basicConfig(level=DEBUG) pour tout voir.

Cas limites :
• Niveaux personnalisés entre 10 et 20 possibles.

Considérations de performance :
• Filtrage précoce si niveau logger > DEBUG.

Exemples :
• logging.getLevelName(10).

Remarques :
• Réponse : 10 — 1re option.`,
  3202: `print(logging.INFO) — valeur ?

Débutant :
• INFO = 20.

Intermédiaire :
• Par défaut root WARNING=30, donc INFO masqué sans config.

Expert :
• Chaîne hiérarchique 10,20,30,40,50.

Concepts clés :
• Messages de flux normal.

Distinctions clés :
• INFO vs WARNING.

Fonctionnement :
• Même mécanisme que les autres constantes.

Exécution étape par étape :
• Retourne 20.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Journaux d’activité applicative.

Cas limites :
• Handlers avec niveau propre peuvent encore bloquer.

Considérations de performance :
• Coût formatage si handler accepte.

Exemples :
• logging.info après basicConfig(level=INFO).

Remarques :
• Réponse : 20 — 1re option.`,
  3203: `print(logging.WARNING) — valeur ?

Débutant :
• WARNING = 30, niveau par défaut du root logger.

Intermédiaire :
• Au-dessus : ERROR 40, CRITICAL 50.

Expert :
• warn() alias de warning().

Concepts clés :
• Seuil par défaut « bruit modéré ».

Distinctions clés :
• WARNING vs ERROR (gravité).

Fonctionnement :
• Entier 30.

Exécution étape par étape :
• Immédiat.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Dépréciations, quotas.

Cas limites :
• Bibliothèques tierces peuvent reconfigurer.

Considérations de performance :
• N/A.

Exemples :
• logging.warning visible sans basicConfig.

Remarques :
• Réponse : 30 — 1re option.`,
  3204: `print(logging.ERROR) — valeur ?

Débutant :
• ERROR = 40.

Intermédiaire :
• Toujours visible avec défaut WARNING 30.

Expert :
• logging.exception() émet au niveau ERROR avec traceback.

Concepts clés :
• Échec d’une opération.

Distinctions clés :
• ERROR vs CRITICAL (50).

Fonctionnement :
• Constante 40.

Exécution étape par étape :
• Lecture attribut.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Erreurs métier récupérables.

Cas limites :
• Multiples handlers : duplication des lignes.

Considérations de performance :
• N/A.

Exemples :
• logger.error dans except après rollback.

Remarques :
• Réponse : 40 — 1re option.`,
  3205: `print(logging.CRITICAL) — valeur ?

Débutant :
• CRITICAL = 50, plus haut des cinq standards.

Intermédiaire :
• Indique souvent arrêt ou état irrécupérable.

Expert :
• Handlers peuvent avoir filtres additionnels.

Concepts clés :
• Fin d’échelle standard.

Distinctions clés :
• CRITICAL vs ERROR.

Fonctionnement :
• Entier 50.

Exécution étape par étape :
• Immédiat.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Perte connexion critique, corruption détectée.

Cas limites :
• « CRITICAL » n’arrête pas le processus seul.

Considérations de performance :
• N/A.

Exemples :
• alertes pager.

Remarques :
• Réponse : 50 — 1re option.`,
  3206: `logging.basicConfig(level=logging.DEBUG) — effet ?

Débutant :
• Configure le logger racine pour accepter DEBUG et au-dessus (tous les standards).

Intermédiaire :
• Ajoute souvent StreamHandler console si aucun handler racine.

Expert :
• Appels suivants sans effet si handlers déjà présents.

Concepts clés :
• Point d’entrée rapide dev.

Distinctions clés :
• basicConfig vs dictConfig / fileConfig.

Fonctionnement :
• setLevel sur root + handler par défaut.

Exécution étape par étape :
1. Vérifie handlers existants.
2. Applique niveau et handler si vide.

Ordre des opérations :
• Avant premiers log.

Cas d'utilisation courants :
• Scripts courts, REPL.

Cas limites :
• Multiprocessus : chaque processus sa config.

Considérations de performance :
• DEBUG verbeux en prod à éviter.

Exemples :
• filename= pour fichier.

Remarques :
• Réponse : affiche DEBUG et tous les niveaux supérieurs — 1re option.`,
  3207: `Rôle d’un Handler dans logging ?

Débutant :
• Envoie les enregistrements de log vers une destination (console, fichier, socket, etc.).

Intermédiaire :
• Le Formatter formate la chaîne ; le Handler émet.

Expert :
• Niveau par handler indépendant du logger.

Concepts clés :
• Séparation émission / format / filtre.

Distinctions clés :
• Handler vs Logger vs Filter.

Fonctionnement :
• emit() après formatage.

Exécution étape par étape :
1. Logger crée LogRecord.
2. Handlers éligibles formatent et écrivent.

Ordre des opérations :
• Tous les handlers du logger reçoivent l’événement (sauf si filtré).

Cas d'utilisation courants :
• Console + fichier simultanés.

Cas limites :
• Handler fermé → erreur à l’écriture.

Considérations de performance :
• I/O fichier coûteux ; buffering OS.

Exemples :
• RotatingFileHandler.

Remarques :
• Réponse : envoie les enregistrements vers une destination — 1re option.`,
  3208: `Rôle d’un Formatter ?

Débutant :
• Définit la mise en page du message final (timestamp, niveau, nom logger, message).

Intermédiaire :
• S’attache au Handler, pas directement au Logger.

Expert :
• %(message)s vs %(msg)s (ancien style).

Concepts clés :
• Chaîne avec placeholders LogRecord.

Distinctions clés :
• Formatter vs Handler.

Fonctionnement :
• format(record) produit str.

Exécution étape par étape :
1. Handler reçoit record.
2. Formatter interpole les champs.

Ordre des opérations :
• Après filtrage niveau.

Cas d'utilisation courants :
• JSON ligne, syslog, audit.

Cas limites :
• Champ absent → KeyError sur format custom.

Considérations de performance :
• Formatage seulement si record accepté.

Exemples :
• ISO-8601 avec datefmt.

Remarques :
• Réponse : précise la disposition / format des lignes de log — 1re option.`,
  3209: `Pourquoi logging.getLogger(__name__) ?

Débutant :
• Crée un logger nommé comme le module, utile pour hiérarchie paquet.sousmodule.

Intermédiaire :
• Propagation vers ancêtres (paquet parent).

Expert :
• getLogger est une fabrique singleton par nom.

Concepts clés :
• Traçabilité de la source.

Distinctions clés :
• __name__ vs chaîne fixe "app".

Fonctionnement :
• Points dans l’arbre des loggers.

Exécution étape par étape :
1. Résout le nom qualifié.
2. Retourne logger enfant.

Ordre des opérations :
• Configuration parent affecte enfants si propagate True.

Cas d'utilisation courants :
• Bibliothèques réutilisables.

Cas limites :
• __main__ comme nom racine court.

Considérations de performance :
• getLogger peu coûteux (cache).

Exemples :
• logger = logging.getLogger(__name__).

Remarques :
• Réponse : logger hiérarchique par module — 1re option.`,
  3210: `Plusieurs handlers sur un même logger ?

Débutant :
• Oui : par ex. console + fichier.

Intermédiaire :
• Chaque handler peut avoir niveau et formatter différents.

Expert :
• clearHandlers() rarement nécessaire pour éviter doublons en reruns tests.

Concepts clés :
• Multiplexage de sortie.

Distinctions clés :
• Un logger, N destinations.

Fonctionnement :
• Boucle sur handlers pour chaque record.

Exécution étape par étape :
1. Record accepté par logger.
2. Chaque handler filtre puis émet.

Ordre des opérations :
• Ordre d’ajout sauf tri explicite.

Cas d'utilisation courants :
• DEBUG fichier, WARNING+ console.

Cas limites :
• Double basicConfig + addHandler → logs dupliqués.

Considérations de performance :
• N handlers = N écritures.

Exemples :
• SMTPHandler pour CRITICAL seul.

Remarques :
• Réponse : Oui — 1re option.`,
  3211: `logging.exception("msg") vs logging.error() ?

Débutant :
• exception ajoute la pile d’appels de l’erreur courante (niveau ERROR).

Intermédiaire :
• À utiliser dans un bloc except actif (exc_info implicite).

Expert :
• Équivalent pratique à error(..., exc_info=True).

Concepts clés :
• Diagnostic complet.

Distinctions clés :
• error sans traceback vs exception.

Fonctionnement :
• Capture sys.exc_info() au moment de l’appel.

Exécution étape par étape :
1. Formate message ERROR.
2. Append traceback.

Ordre des opérations :
• Hors except actif : pas de traceback utile.

Cas d'utilisation courants :
• Journaliser erreurs catchées.

Cas limites :
• Trop verbeux si boucle serrée.

Considérations de performance :
• Formatage traceback coûteux.

Exemples :
• except Exception: logging.exception("fail").

Remarques :
• Réponse : inclut la traceback — 1re option.`,
  3212: `Différence clé print() vs logging ?

Débutant :
• Logging offre niveaux, handlers, formatage, configuration externe ; print écrit sur stdout sans pipeline.

Intermédiaire :
• Les libs devraient logger et laisser l’app configurer.

Expert :
• LoggerAdapter / structlog pour champs structurés.

Concepts clés :
• Routage et filtrage.

Distinctions clés :
• stdout unique vs multi-sinks.

Fonctionnement :
• LogRecord vs str directe.

Exécution étape par étape :
• Pipeline complet logging.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Prod : logging ; debug rapide : print temporaire.

Cas limites :
• Encodage console vs fichier UTF-8.

Considérations de performance :
• Lazy formatting avec % ou extra possible.

Exemples :
• if __debug__: print vs logger.debug.

Remarques :
• Réponse : niveaux, handlers, formatage, config sans changer le code — 1re option.`,
  3213: `logging.FileHandler("app.log") crée quoi ?

Débutant :
• Un handler qui écrit les enregistrements dans le fichier indiqué (append par défaut).

Intermédiaire :
• Il faut addHandler sur un logger pour l’activer.

Expert :
• mode='w' pour écraser à chaque lancement.

Concepts clés :
• Persistance disque.

Distinctions clés :
• FileHandler vs StreamHandler.

Fonctionnement :
• Ouvre fichier et écrit lignes formatées.

Exécution étape par étape :
1. Open fichier.
2. À chaque emit, write + flush selon config.

Ordre des opérations :
• Après formatage.

Cas d'utilisation courants :
• Audit, post-mortem.

Cas limites :
• Permissions, disque plein.

Considérations de performance :
• flush trop fréquent ralentit.

Exemples :
• TimedRotatingFileHandler.

Remarques :
• Réponse : handler vers fichier — 1re option.`,
  3214: `self.assertEqual(1+1, 2) vérifie quoi ?

Débutant :
• Égalité de valeurs avec ==, pas l’identité.

Intermédiaire :
• Message d’échec montre attendu vs obtenu.

Expert :
• Types numériques mixtes parfois égaux (1.0 == 1).

Concepts clés :
• Assertion unittest la plus courante.

Distinctions clés :
• assertEqual vs assertIs.

Fonctionnement :
• Appelle == puis lève AssertionError si faux.

Exécution étape par étape :
1. Évalue les deux expressions.
2. Compare.

Ordre des opérations :
• Évaluation args avant appel.

Cas d'utilisation courants :
• Retours de fonctions, structures.

Cas limites :
• listes mutées après coup : tester copies.

Considérations de performance :
• N/A.

Exemples :
• assertEqual(len(a), 3).

Remarques :
• Réponse : deux valeurs égales (==) — 1re option.`,
  3215: `self.assertTrue(expr) ?

Débutant :
• Vérifie que bool(expr) est vrai (toute valeur truthy passe).

Intermédiaire :
• Moins informatif qu’assertEqual si échec.

Expert :
• Peut être remplacé par assertIs(expr, True) si littéral True requis.

Concepts clés :
• Vérité Python, pas seulement True.

Distinctions clés :
• assertTrue vs assertIs(True).

Fonctionnement :
• if not expr: fail.

Exécution étape par étape :
• Conversion bool implicite.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Prédicats booléens.

Cas limites :
• assertTrue(1) passe — piège si on voulait ==1.

Considérations de performance :
• N/A.

Exemples :
• assertTrue(result.ok).

Remarques :
• Réponse : expr évaluée vraie (truthy) — 1re option.`,
  3216: `self.assertFalse(expr) ?

Débutant :
• Vérifie que bool(expr) est faux (0, None, "", [], False, etc.).

Intermédiaire :
• Symétrique de assertTrue.

Expert :
• assertFalse(0) et assertFalse(None) passent.

Concepts clés :
• Tests négatifs.

Distinctions clés :
• assertFalse vs assertIsNone.

Fonctionnement :
• if expr: fail.

Exécution étape par étape :
• bool implicite.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Fonction doit échouer silencieusement avec valeur falsy.

Cas limites :
• Confondre None et False.

Considérations de performance :
• N/A.

Exemples :
• assertFalse(errors).

Remarques :
• Réponse : expr fausse (falsy) — 1re option.`,
  3217: `self.assertIs(a, b) ?

Débutant :
• Vérifie l’identité : a is b (même objet en mémoire).

Intermédiaire :
• Deux listes [1,2,3] égales mais distinctes échouent.

Expert :
• None est singleton : assertIs(x, None) ou assertIsNone.

Concepts clés :
• id(a)==id(b).

Distinctions clés :
• assertIs vs assertEqual.

Fonctionnement :
• Opérateur is.

Exécution étape par étape :
• Comparaison pointeurs.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Cache singleton, même instance retournée.

Cas limites :
• petits ints internés — rester prudent avec is sur entiers.

Considérations de performance :
• O(1).

Exemples :
• assertIs(settings.DEFAULT, obj).

Remarques :
• Réponse : même objet (identité) — 1re option.`,
  3218: `self.assertIsNone(x) ?

Débutant :
• Vérifie x is None (identité au singleton None).

Intermédiaire :
• Rejette 0, False, [] qui ne sont pas None.

Expert :
• Préféré à assertEqual(x, None).

Concepts clés :
• Test explicite absence valeur.

Distinctions clés :
• None vs falsy.

Fonctionnement :
• is None.

Exécution étape par étape :
• Immédiat.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• API optionnelle.

Cas limites :
• Mock None-like rare.

Considérations de performance :
• N/A.

Exemples :
• assertIsNone(cache.get_miss()).

Remarques :
• Réponse : x est None — 1re option.`,
  3219: `self.assertIn(a, b) ?

Débutant :
• Vérifie a in b (appartenance).

Intermédiaire :
• Sur dict, teste les clés, pas les valeurs.

Expert :
• sous-chaîne pour str.

Concepts clés :
• Opérateur in.

Distinctions clés :
• assertIn vs assertEqual sur conteneur entier.

Fonctionnement :
• délègue à __contains__.

Exécution étape par étape :
• Membership O(n) ou O(1) selon type.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Clé présente, sous-texte.

Cas limites :
• defaultdict : clé manquante crée entrée — pas avec assertIn direct sur defaultdict sans précaution.

Considérations de performance :
• grands sets préférables aux listes.

Exemples :
• assertIn("id", payload).

Remarques :
• Réponse : a est dans b (in) — 1re option.`,
  3220: `self.assertRaises(ValueError) sert à ?

Débutant :
• Vérifier qu’une ValueError est bien levée (callable ou bloc with).

Intermédiaire :
• Échoue si aucune exception ou mauvais type.

Expert :
• assertRaisesRegex pour message.

Concepts clés :
• Tests d’erreurs attendues.

Distinctions clés :
• assertRaises vs pytest.raises.

Fonctionnement :
• Exécute et capture type attendu.

Exécution étape par étape :
1. Entre contexte ou appelle fonction.
2. Si type match → succès.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Validation entrées.

Cas limites :
• Exception sous-classe : match si même type demandé (pas sous-type sauf configuration).

Considérations de performance :
• N/A.

Exemples :
• with self.assertRaises(TypeError): next(iter([])).

Remarques :
• Réponse : qu’une ValueError est levée — 1re option.`,
  3221: `with self.assertRaises(ValueError): int("abc") — le test passe ?

Débutant :
• Oui : int("abc") lève ValueError comme attendu.

Intermédiaire :
• Si int réussissait, assertRaises échouerait (pas d’exception).

Expert :
• Vérifier aussi le message avec assertRaisesRegex.

Concepts clés :
• Contrat d’erreur stable.

Distinctions clés :
• ValueError vs TypeError.

Fonctionnement :
• Context manager swallows l’exception attendue.

Exécution étape par étape :
1. int("abc") lève.
2. Types correspondent.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Parser strict.

Cas limites :
• Localisation du message peut varier.

Considérations de performance :
• N/A.

Exemples :
• JSONDecodeError tests.

Remarques :
• Réponse : Oui — 1re option.`,
  3222: `self.assertAlmostEqual(0.1 + 0.2, 0.3) passe ?

Débutant :
• Oui : tolérance décimale par défaut (places) gère l’imprécision IEEE 754.

Intermédiaire :
• assertEqual échouerait sur == strict.

Expert :
• Paramètres delta ou places selon besoin.

Concepts clés :
• Tests flottants robustes.

Distinctions clés :
• AlmostEqual vs math.isclose.

Fonctionnement :
• Arrondi puis comparaison.

Exécution étape par étape :
• Diff absolue contrôlée.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Scientifique, finance arrondie.

Cas limites :
• Très grands flottants : utiliser delta relatif.

Considérations de performance :
• N/A.

Exemples :
• cos(pi/2) proche de 0.

Remarques :
• Réponse : Oui — 1re option.`,
  3223: `setUp(self) dans TestCase ?

Débutant :
• Exécuté avant chaque méthode de test pour préparer l’état.

Intermédiaire :
• Fraîcheur des fixtures entre tests.

Expert :
• Complément tearDown après chaque test.

Concepts clés :
• Cycle setUp → test → tearDown.

Distinctions clés :
• setUp vs setUpClass.

Fonctionnement :
• unittest runner appelle automatiquement.

Exécution étape par étape :
• N fois pour N tests.

Ordre des opérations :
• setUp avant chaque test_*.

Cas d'utilisation courants :
• Objets temporaires, fichiers.

Cas limites :
• setUp qui échoue : test marqué error.

Considérations de performance :
• Coût répété : factoriser setUpClass si lourd.

Exemples :
• self.client = Client().

Remarques :
• Réponse : avant chaque test — 1re option.`,
  3224: `tearDown(self) ?

Débutant :
• Après chaque test, même en cas d’échec du test, pour nettoyer.

Intermédiaire :
• Fermeture fichiers, suppression tmp.

Expert :
• addCleanup comme alternative moderne parfois plus claire.

Concepts clés :
• Libération ressources.

Distinctions clés :
• tearDown vs tearDownClass.

Fonctionnement :
• Runner garantit l’appel.

Exécution étape par étape :
• Après test, avant test suivant.

Ordre des opérations :
• tearDown même si exception dans test (sauf crash dur).

Cas d'utilisation courants :
• Bases de données rollback.

Cas limites :
• tearDown qui lève masque parfois l’erreur du test — à surveiller.

Considérations de performance :
• I/O cleanup.

Exemples :
• os.unlink(self.path).

Remarques :
• Réponse : après chaque test — 1re option.`,
  3225: `setUpClass(cls) ?

Débutant :
• Méthode de classe exécutée une seule fois avant tous les tests de la classe.

Intermédiaire :
• @classmethod requis ; reçoit cls.

Expert :
• tearDownClass pour teardown global.

Concepts clés :
• Ressources chères partagées.

Distinctions clés :
• setUpClass vs setUp.

Fonctionnement :
• unittest appelle avant le premier test.

Exécution étape par étape :
1. setUpClass une fois.
2. Tests multiples réutilisent l’état (attention isolation).

Ordre des opérations :
• Avant première test method.

Cas d'utilisation courants :
• Connexion DB lourde, serveur de test.

Cas limites :
• État partagé peut coupler les tests si mal géré.

Considérations de performance :
• Gain si setup coûteux.

Exemples :
• cls.engine = create_engine(...).

Remarques :
• Réponse : une fois avant tous les tests de la classe — 1re option.`,
};
