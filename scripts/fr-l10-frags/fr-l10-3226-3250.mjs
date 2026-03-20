/** Level 10 FR — 3226–3250 (expert_a Q28–49 + expert_b Q50–52). */
export default {
  3226: `@unittest.skip("raison") sur un test ?

Débutant :
• Le test est ignoré : non exécuté, compté comme « skipped » avec la raison.

Intermédiaire :
• skipIf / skipUnless pour condition dynamique.

Expert :
• Ne masque pas les échecs : il saute délibérément.

Concepts clés :
• Décoration au moment de la découverte.

Distinctions clés :
• skip vs expectedFailure vs xfail pytest.

Fonctionnement :
• Le runner remplace le test par un stub skip.

Exécution étape par étape :
• Pas d’entrée dans le corps du test.

Ordre des opérations :
• Avant exécution logique du test.

Cas d'utilisation courants :
• Fonctionnalité non prête, OS spécifique.

Cas limites :
• Trop de skips masquent la couverture réelle.

Considérations de performance :
• Gain temps CI.

Exemples :
• skipIf(sys.platform=="win32", ...).

Remarques :
• Réponse : saute le test décoré — 1re option.`,
  3227: `@unittest.expectedFailure ?

Débutant :
• Échec attendu du test → rapport « expected failure » (pas un fail rouge classique).

Intermédiaire :
• Si le test passe → « unexpected success » (souvent signalé).

Expert :
• Le test s’exécute toujours (contrairement à skip).

Concepts clés :
• Documentation de bug connu.

Distinctions clés :
• expectedFailure vs xfail strict.

Fonctionnement :
• Encapsule résultat AssertionError comme attendu.

Exécution étape par étape :
• Run test ; inverse la sémantique succès/échec pour le compteur.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• TDD sur bug non corrigé.

Cas limites :
• Oublier d’enlever le décorateur après fix.

Considérations de performance :
• N/A.

Exemples :
• Régression connue sur edge case.

Remarques :
• Réponse : marque un test censé échouer — 1re option.`,
  3228: `assert 1 == 1 lève une erreur ?

Débutant :
• Non : la condition est vraie, assert ne fait rien.

Intermédiaire :
• Avec python -O, assert peut être retiré du bytecode.

Expert :
• assert condition, msg : msg évalué seulement si échec.

Concepts clés :
• Garde-fou développement.

Distinctions clés :
• assert vs if raise.

Fonctionnement :
• if not expr: raise AssertionError.

Exécution étape par étape :
• 1==1 True → pas de raise.

Ordre des opérations :
• Évalue d’abord l’expression.

Cas d'utilisation courants :
• Invariants internes.

Cas limites :
• Ne pas valider entrées utilisateur avec assert.

Considérations de performance :
• -O supprime le coût.

Exemples :
• assert len(data) > 0.

Remarques :
• Réponse : Non — 1re option.`,
  3229: `assert 1 == 2 — quelle erreur ?

Débutant :
• AssertionError.

Intermédiaire :
• Pas ValueError ni TypeError.

Expert :
• Sous-classe de BaseException via Exception.

Concepts clés :
• Signal d’échec assert.

Distinctions clés :
• AssertionError vs autres exceptions.

Fonctionnement :
• Condition fausse → raise AssertionError().

Exécution étape par étape :
• Évalue False → lève.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Tests rapides, invariants.

Cas limites :
• Message par défaut peu parlant sans virgule.

Considérations de performance :
• N/A.

Exemples :
• assert x >= 0, "négatif".

Remarques :
• Réponse : AssertionError — 1re option.`,
  3230: `assert 1 == 2, "numbers not equal" — où apparaît le message ?

Débutant :
• Dans l’AssertionError comme argument du message.

Intermédiaire :
• La partie après la virgule n’est évaluée que si l’assert échoue.

Expert :
• f-string possible pour contexte dynamique.

Concepts clés :
• Deuxième forme assert.

Distinctions clés :
• msg assert vs message unittest.

Fonctionnement :
• raise AssertionError("numbers not equal").

Exécution étape par étape :
• Échec → instancie erreur avec str.

Ordre des opérations :
• Court-circuit : pas d’évaluation msg si succès.

Cas d'utilisation courants :
• Debug lisible.

Cas limites :
• Effet de bord dans msg si échec rare.

Considérations de performance :
• N/A.

Exemples :
• assert n % 2 == 0, f"{n} impair".

Remarques :
• Réponse : dans l’AssertionError — 1re option.`,
  3231: `Peut-on désactiver assert à l’exécution ?

Débutant :
• Oui : python -O (optimisation) supprime les assert du bytecode.

Intermédiaire :
• __debug__ devient False.

Expert :
• -OO peut aussi retirer docstrings selon build.

Concepts clés :
• assert n’est pas une validation sécurité prod.

Distinctions clés :
• -O vs variable env PYTHONOPTIMIZE.

Fonctionnement :
• Compilateur omet les branches assert si optimize.

Exécution étape par étape :
• Même code source, bytecode différent.

Ordre des opérations :
• Choix au lancement interpréteur.

Cas d'utilisation courants :
• Micro-perf ; masquer checks dev en prod (mauvaise idée pour invariants critiques — préférer if).

Cas limites :
• Tests dépendant d’assert en -O : faux verts.

Considérations de performance :
• Saut de branches.

Exemples :
• python -O script.py.

Remarques :
• Réponse : Oui, avec python -O — 1re option.`,
  3232: `__debug__ vaut True quand ?

Débutant :
• En exécution normale ; False si lancement avec l’option -O (mode optimisé).

Intermédiaire :
• Constante figée : pas d’affectation runtime.

Expert :
• Équivalent conceptuel du garde-fou des assert.

Concepts clés :
• Drapeau compilation / interpréteur.

Distinctions clés :
• __debug__ vs variable DEBUG maison.

Fonctionnement :
• Fixé au démarrage.

Exécution étape par étape :
• Lecture seule.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• if __debug__: log verbeux.

Cas limites :
• Confondre avec logging.DEBUG.

Considérations de performance :
• Code sous if __debug__ peut être éliminé statiquement.

Exemples :
• if __debug__: assert cheap_check().

Remarques :
• Réponse : mode normal (True) ; False avec -O — 1re option.`,
  3233: `doctest en Python ?

Débutant :
• Cadre qui extrait et exécute des exemples style REPL dans les docstrings pour vérifier la sortie.

Intermédiaire :
• testmod, testfile, DocTestSuite.

Expert :
• Option flags pour ellipsis, NORMALIZE_WHITESPACE.

Concepts clés :
• Doc vivante.

Distinctions clés :
• doctest vs unittest/pytest.

Fonctionnement :
• Parse >>> puis compare sortie texte.

Exécution étape par étape :
1. Scanner docstring.
2. Exécuter blocs.
3. Comparer.

Ordre des opérations :
• Ordre des exemples dans la doc.

Cas d'utilisation courants :
• Petites fonctions pures.

Cas limites :
• Ordre dict avant 3.7, flottants, bruit fragile.

Considérations de performance :
• Plus lent que tests unitaires purs.

Exemples :
• if __name__ == "__main__": doctest.testmod().

Remarques :
• Réponse : tests extraits des docstrings (sessions interactives) — 1re option.`,
  3234: `try: x=1/0 except ZeroDivisionError: x=0 ; print(x) ?

Débutant :
• 1/0 lève, except assigne 0, affiche 0.

Intermédiaire :
• x du try jamais défini si erreur avant assignation.

Expert :
• else pourrait s’exécuter si pas d’erreur.

Concepts clés :
• Récupération contrôlée.

Distinctions clés :
• except spécifique vs except Exception.

Fonctionnement :
• Dispatch sur type d’exception.

Exécution étape par étape :
1. Division lève.
2. Handler met x=0.
3. print.

Ordre des opérations :
• Flux linéaire après except.

Cas d'utilisation courants :
• Valeur par défaut sur erreur.

Cas limites :
• Masquer bugs si except trop large.

Considérations de performance :
• Coût exception si chemin chaud.

Exemples :
• parse avec fallback.

Remarques :
• Réponse : 0 — 1re option.`,
  3235: `int("abc") dans try ; except ValueError as e: x=str(e) ; type(x) ?

Débutant :
• str : le message d’erreur est une chaîne.

Intermédiaire :
• e reste ValueError, x est copie textuelle.

Expert :
• args tuple sur l’exception pour détails structurés.

Concepts clés :
• Conversion exception → log string.

Distinctions clés :
• type(e) vs type(str(e)).

Fonctionnement :
• __str__ de l’exception.

Exécution étape par étape :
• str(e) appelle la représentation utilisateur.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Réponses API erreur.

Cas limites :
• Encodage unicode dans message.

Considérations de performance :
• N/A.

Exemples :
• logger.error(str(e)).

Remarques :
• Réponse : classe str — 1re option.`,
  3236: `try: x=1 except: pass else: x=3 ; print(x) ?

Débutant :
• try réussit sans exception → else s’exécute → x vaut 3.

Intermédiaire :
• except ne s’exécute pas.

Expert :
• else après except : seulement si pas d’exception dans try.

Concepts clés :
• Branche succès try.

Distinctions clés :
• else try vs else for/while.

Fonctionnement :
• Contrôle flux standard Python.

Exécution étape par étape :
1. x=1 ok.
2. else x=3.
3. print 3.

Ordre des opérations :
• try puis else si succès.

Cas d'utilisation courants :
• Code « happy path » séparé du catch.

Cas limites :
• else pas de return dans try si on veut éviter double exécution — attention design.

Considérations de performance :
• N/A.

Exemples :
• commit après try sans erreur.

Remarques :
• Réponse : 3 — 1re option.`,
  3237: `Quand le finally s’exécute-t-il ?

Débutant :
• Toujours : succès, exception catchée ou non, même autour d’un return dans try/except (finally avant propagation du return).

Intermédiaire :
• Utile pour fermer ressources.

Expert :
• Si finally lève, elle masque l’exception précédente en cours.

Concepts clés :
• Garantie de nettoyage.

Distinctions clés :
• finally vs atexit.

Fonctionnement :
• Opcode SETUP_FINALLY en CPython.

Exécution étape par étape :
• Bloc toujours planifié.

Ordre des opérations :
• Après try/except/else, avant sortie fonction.

Cas d'utilisation courants :
• with préféré mais finally pour bas niveau.

Cas limites :
• kill -9 : pas de finally.

Considérations de performance :
• N/A.

Exemples :
• lock.release() en finally.

Remarques :
• Réponse : toujours (avec ou sans exception) — 1re option.`,
  3238: `except, else et finally peuvent-ils coexister ?

Débutant :
• Oui : syntaxe complète try / except / else / finally autorisée.

Intermédiaire :
• else exige au moins un except (pas try/else seul).

Expert :
• Ordre d’exécution documenté dans la référence langage.

Concepts clés :
• Structure complète de gestion d’erreurs.

Distinctions clés :
• else try vs elif.

Fonctionnement :
• Grammaire Python.

Exécution étape par étape :
• finally dernier bloc garanti.

Ordre des opérations :
• try → except si besoin → else si pas d’exc → finally.

Cas d'utilisation courants :
• transactions : try work, except rollback, else commit, finally close.

Cas limites :
• Complexité lecture — parfois scinder fonctions.

Considérations de performance :
• N/A.

Exemples :
• try open parse except else log success finally close.

Remarques :
• Réponse : Oui, les trois peuvent coexister — 1re option.`,
  3239: `raise ValueError("msg") from TypeError("cause") — nom du mécanisme ?

Débutant :
• Chaînage d’exceptions (exception chaining).

Intermédiaire :
• __cause__ et __context__ dans traceback.

Expert :
• raise from None pour couper la chaîne contextuelle.

Concepts clés :
• Préserver la cause racine.

Distinctions clés :
• chaining vs wrapping simple sans from.

Fonctionnement :
• Attache l’exception cause à la nouvelle.

Exécution étape par étape :
1. Construit nouvelle erreur.
2. Lie l’ancienne comme cause directe.

Ordre des opérations :
• Affichage « The above exception was the direct cause ».

Cas d'utilisation courants :
• Couches API.

Cas limites :
• Fuites d’infos sensibles dans chaîne.

Considérations de performance :
• N/A.

Exemples :
• raise HTTPError from e.

Remarques :
• Réponse : exception chaining / chaînage — 1re option.`,
  3240: `e.__traceback__ après except ValueError as e ?

Débutant :
• Objet traceback décrivant la pile au point de la levée.

Intermédiaire :
• Pas une chaîne : utiliser traceback.format_tb.

Expert :
• tb_next pour chaîner frames.

Concepts clés :
• Introspection post-mortem.

Distinctions clés :
• traceback vs str(e).

Fonctionnement :
• Attribut assigné à la construction de l’exception active.

Exécution étape par étape :
• Référence pile liée.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• loggers custom.

Cas limites :
• None si exception créée sans levée réelle (rare).

Considérations de performance :
• Objets légers mais chaînes longues si formatées.

Exemples :
• traceback.print_exception(type(e), e, e.__traceback__).

Remarques :
• Réponse : objet traceback — 1re option.`,
  3241: `traceback.format_exc() dans un except — s contient ?

Débutant :
• Une chaîne avec le traceback formaté comme l’affichage stderr classique.

Intermédiaire :
• S’appuie sur l’exception courante active.

Expert :
• Hors except actif : texte vide ou sentinel selon version (éviter).

Concepts clés :
• Sérialisation erreur pour logs distants.

Distinctions clés :
• format_exc vs print_exc.

Fonctionnement :
• join des lignes format_tb + exception.

Exécution étape par étape :
• Lit exc_info.

Ordre des opérations :
• Appeler avant de sortir du handler si exc_info effacée.

Cas d'utilisation courants :
• Sentry-like, fichiers log.

Cas limites :
• Threading : exc_info par thread.

Considérations de performance :
• Chaîne potentiellement grande.

Exemples :
• logger.error(traceback.format_exc()).

Remarques :
• Réponse : chaîne traceback formatée — 1re option.`,
  3242: `sys.exc_info() dans except ?

Débutant :
• Tuple (type, valeur, traceback) de l’exception en cours de traitement.

Intermédiaire :
• (None,None,None) hors contexte d’exception active.

Expert :
• Utilisé en interne par traceback module.

Concepts clés :
• API bas niveau.

Distinctions clés :
• exc_info vs last_type ancien style.

Fonctionnement :
• Pointeur thread-local sur tête d’exception.

Exécution étape par étape :
• Capture instantanée.

Ordre des opérations :
• Valide seulement pendant handling.

Cas d'utilisation courants :
• frameworks middleware.

Cas limites :
• Réutiliser après sortie du except : valeurs peuvent être cleared.

Considérations de performance :
• Très léger.

Exemples :
• typ, val, tb = sys.exc_info().

Remarques :
• Réponse : tuple (type, valeur, traceback) — 1re option.`,
  3243: `AppError("fail", 404) ; e.code ?

Débutant :
• 404 : attribut personnalisé stocké sur l’instance.

Intermédiaire :
• super().__init__(msg) pour le message standard.

Expert :
• Peut surcharger __str__ pour combiner code+msg.

Concepts clés :
• Exceptions riches.

Distinctions clés :
• Données vs args seuls.

Fonctionnement :
• __init__ assigne self.code.

Exécution étape par étape :
• Construction instance Exception sous-classe.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• HTTP 404/500, codes métier.

Cas limites :
• Sérialisation cross processus.

Considérations de performance :
• N/A.

Exemples :
• raise AppError("nf", 404).

Remarques :
• Réponse : 404 — 1re option.`,
  3244: `except: sans type explicite (« bare except ») — qu’est-ce qui est attrapé ?

Débutant :
• Tout BaseException : y compris SystemExit, KeyboardInterrupt, GeneratorExit — d’où le déconseillé.

Intermédiaire :
• Peut empêcher Ctrl+C ou sys.exit de fonctionner.

Expert :
• Équivalent sauf syntaxe à except BaseException:.

Concepts clés :
• Piège à éviter.

Distinctions clés :
• bare vs except Exception.

Fonctionnement :
• Filtre le plus large.

Exécution étape par étape :
• Match avant propagation.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Quasi jamais en prod ; top-level log ultime seulement.

Cas limites :
• Tests qui masquent sorties.

Considérations de performance :
• N/A.

Exemples :
• sauf boucle REPL custom.

Remarques :
• Réponse : toutes les exceptions y compris SystemExit et KeyboardInterrupt — 1re option.`,
  3245: `except Exception: vs bare except ?

Débutant :
• Exception attrape toutes les sous-classes d’Exception mais pas SystemExit, KeyboardInterrupt, GeneratorExit (héritant direct de BaseException).

Intermédiaire :
• Laisse le programme réagir à Ctrl+C et sys.exit.

Expert :
• Hiérarchie PEP 3151.

Concepts clés :
• Bon « catch-all » applicatif.

Distinctions clés :
• trois exceptions système hors filet.

Fonctionnement :
• isinstance check.

Exécution étape par étape :
• Si type hors arbre Exception → propagate.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• routeurs web, workers.

Cas limites :
• KeyboardInterrupt dans thread secondaire.

Considérations de performance :
• N/A.

Exemples :
• except Exception as e: logger.exception(e).

Remarques :
• Réponse : toutes sauf SystemExit, KeyboardInterrupt, GeneratorExit — 1re option.`,
  3246: `EAFP signifie ?

Débutant :
• Easier to Ask Forgiveness than Permission : essayer puis except si échec.

Intermédiaire :
• Style idiomatique Python vs garde LBYL.

Expert :
• Souvent plus rapide si succès fréquent (pas de test préalable).

Concepts clés :
• try/except comme flux normal.

Distinctions clés :
• EAFP vs LBYL.

Fonctionnement :
• Levée contrôlée.

Exécution étape par étape :
• Action puis handler.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• dict[key] vs get, fichiers.

Cas limites :
• Exceptions coûteuses en chemin ultra chaud rare.

Considérations de performance :
• dépend cas.

Exemples :
• try: v=d[k] except KeyError.

Remarques :
• Réponse : Easier to Ask Forgiveness than Permission — 1re option.`,
  3247: `LBYL signifie ?

Débutant :
• Look Before You Leap : vérifier les préconditions avant l’action.

Intermédiaire :
• Courant en C/Java ; Python tolère mais EAFP souvent préféré.

Expert :
• Problème TOCTOU si check puis acte non atomique.

Concepts clés :
• if avant open.

Distinctions clés :
• LBYL vs EAFP.

Fonctionnement :
• Branches conditionnelles.

Exécution étape par étape :
• Test puis action.

Ordre des opérations :
• Deux étapes séparées.

Cas d'utilisation courants :
• validations UI simples.

Cas limites :
• fichier supprimé entre exists et open.

Considérations de performance :
• double lookup.

Exemples :
• if k in d: ...

Remarques :
• Réponse : Look Before You Leap — 1re option.`,
  3248: `PEP 8 : indentation recommandée ?

Débutant :
• 4 espaces par niveau ; pas de tabulations mélangées.

Intermédiaire :
• Python 3 refuse mélange tabs/spaces dans un fichier.

Expert :
• Lignes de continuation alignées sur délimiteur ou hanging indent.

Concepts clés :
• Lisibilité universelle.

Distinctions clés :
• 4 vs 2 espaces d’autres langages.

Fonctionnement :
• Convention outil black/ruff alignés.

Exécution étape par étape :
• N/A.

Cas d'utilisation courants :
• tout fichier .py.

Cas limites :
• Éditeurs mal configurés.

Considérations de performance :
• N/A.

Exemples :
• def f():\\n    pass.

Remarques :
• Réponse : 4 espaces — 1re option.`,
  3249: `PEP 8 : longueur de ligne recommandée pour le code ?

Débutant :
• 79 caractères pour le code ; 72 pour commentaires/docstrings (souplesse d’équipe jusqu’à ~99 parfois).

Intermédiaire :
• Parenthèses pour couper sans antislash.

Expert :
• Outils comme black peuvent choisir 88 par défaut — la question cible la PEP classique.

Concepts clés :
• diffs côte à côte, terminal 80 cols.

Distinctions clés :
• code vs commentaire.

Fonctionnement :
• Guide style, pas syntaxe.

Exécution étape par étape :
• N/A.

Cas d'utilisation courants :
• revue de code.

Cas limites :
• URLs longues : noqa ou break.

Considérations de performance :
• N/A.

Exemples :
• parenthèses multi-lignes.

Remarques :
• Réponse : 79 — 1re option.`,
  3250: `PEP 8 : nommage des fonctions ?

Débutant :
• snake_case : minuscules et underscores entre mots.

Intermédiaire :
• camelCase pour noms non pythoniques interop ; PascalCase pour classes.

Expert :
• _leading underscore pour « interne ».

Concepts clés :
• Cohérence écosystème.

Distinctions clés :
• snake_case vs camelCase.

Fonctionnement :
• Convention seulement.

Exécution étape par étape :
• N/A.

Cas d'utilisation courants :
• def load_user_data():.

Cas limites :
• noms très courts i,j ok en local.

Considérations de performance :
• N/A.

Exemples :
• calculate_total_price.

Remarques :
• Réponse : snake_case — 1re option.`,
};
