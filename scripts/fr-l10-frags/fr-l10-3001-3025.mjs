/** French detailed explanations Level 10 — bank IDs 3001–3025 (level10Patterns Q1–Q25). */
export default {
  3001: `Qu'est-ce que try/except ?

Débutant :
• Bloc try : code qui peut échouer.
• Bloc except : que faire si une exception survient.

Intermédiaire :
• L'exécution quitte try au premier raise et cherche un except compatible.

Expert :
• Plusieurs except ordonnés ; else (succès) ; finally (toujours) ; héritage des types.

Concepts clés :
• Mécanisme natif de gestion d'erreurs sans quitter brutalement le programme.

Distinctions clés :
• try/except vs if sur codes d'erreur ; vs laisser remonter jusqu'au traceback utilisateur.

Fonctionnement :
• Python associe l'exception levée au premier gestionnaire dont le type correspond (ou une classe mère).

Exécution étape par étape :
1. Entrée dans try.
2. Si raise : abandon du reste du try, recherche d'un except.
3. Si except pris : exécution du corps du except.
4. Poursuite après tout le compose try/except/else/finally.

Ordre des opérations :
• Le matching des except suit l'ordre d'écriture ; le premier qui convient gagne.

Cas d'utilisation courants :
• Fichiers, réseau, parsing, conversions : erreurs attendues à traiter localement.

Cas limites :
• except trop large qui masque des bugs ; oublier de relancer après un log partiel.

Considérations de performance :
• Coût surtout lié au travail du try ; éviter try/except pour le flux normal (préférer if).

Exemples :
• try: 10 / int(s) except (ValueError, ZeroDivisionError): ...

Remarques :
• Réponse : gestion des exceptions — 1re option.`,
  3002: `Que signifie try: 1/0 ; except: pass ?

Débutant :
• except sans type attrape toute exception.

Intermédiaire :
• Même KeyboardInterrupt ou SystemExit peuvent être avalés selon le contexte.

Expert :
• PEP 8 déconseille le except nu : on perd la visibilité sur les erreurs réelles.

Concepts clés :
• Filtre d'exception maximal mais dangereux pour le débogage.

Distinctions clés :
• except: vs except Exception: vs except ZeroDivisionError:.

Fonctionnement :
• Toute BaseException compatible avec le mécanisme de matching tombe dans ce bloc.

Exécution étape par étape :
1. ZeroDivisionError dans try.
2. except nu correspond.
3. pass ne fait rien : silence total.

Ordre des opérations :
• Comme pour tout except : évaluation après abandon du try.

Cas d'utilisation courants :
• Scripts jetables ; rarement acceptable en production.

Cas limites :
• Ctrl+C peut être ignoré involontairement.

Considérations de performance :
• Négligeable ; le problème est la maintenabilité.

Exemples :
• Préférer except Exception: avec commentaire # noqa ou types explicites.

Remarques :
• Réponse : attrape toutes les exceptions — 1re option.`,
  3003: `Que signifie try: 1/0 ; except ZeroDivisionError: pass ?

Débutant :
• Seul ZeroDivisionError est intercepté ici.

Intermédiaire :
• ValueError ou TypeError continueraient à remonter.

Expert :
• Bon style : cibler les erreurs prévues plutôt qu'un filet global.

Concepts clés :
• Filtrage par type d'exception.

Distinctions clés :
• Un except typé vs tuple de types vs Exception.

Fonctionnement :
• Python compare la classe de l'instance levée à celle demandée (sous-classes incluses).

Exécution étape par étape :
1. Division par zéro → ZeroDivisionError.
2. except ZeroDivisionError exécuté.
3. Autres erreurs non listées : propagation.

Ordre des opérations :
• Évaluation du try jusqu'au raise puis branchement.

Cas d'utilisation courants :
• Garde-fous arithmétiques, conversions numériques.

Cas limites :
• Plusieurs causes d'échec : prévoir plusieurs except ou un tuple.

Considérations de performance :
• Identique à tout try/except ciblé.

Exemples :
• except ZeroDivisionError: return float('inf').

Remarques :
• Réponse : attrape seulement ZeroDivisionError — 1re option.`,
  3004: `Que vaut try: 1/0 ; except ZeroDivisionError as e: type(e) ?

Débutant :
• e est l'objet exception ; type(e) donne sa classe.

Intermédiaire :
• Ici : classe ZeroDivisionError, pas la chaîne du message.

Expert :
• as e lie l'instance ; e.__class__ équivalent à type(e) pour les instances classiques.

Concepts clés :
• Inspection dynamique du type réel levé.

Distinctions clés :
• type(e) vs type(type(e)) ; str(e) pour le message humain.

Fonctionnement :
• L'instance est créée au moment du raise ; as e référence cette instance dans le bloc.

Exécution étape par étape :
1. Création de ZeroDivisionError.
2. Liaison e → instance.
3. type(e) → objet classe ZeroDivisionError.

Ordre des opérations :
• type() est un appel après assignation de e.

Cas d'utilisation courants :
• Logs structurés, routage d'erreurs par classe.

Cas limites :
• e hors scope après le bloc except.

Considérations de performance :
• Négligeable.

Exemples :
• print(type(e).__name__) pour journaliser un nom court.

Remarques :
• Réponse : classe ZeroDivisionError — 1re option.`,
  3005: `Que signifie try: 1/0 ; except (ZeroDivisionError, ValueError): pass ?

Débutant :
• Un tuple dans except : plusieurs types acceptés par le même bloc.

Intermédiaire :
• ZeroDivisionError ici correspond ; ValueError serait traité pareil s'il survenait.

Expert :
• Alternative à deux except consécutifs quand la réaction est identique.

Concepts clés :
• Union de types dans un seul gestionnaire.

Distinctions clés :
• Tuple dans un except vs plusieurs clauses except séparées.

Fonctionnement :
• Le moteur teste l'appartenance de la classe de l'exception à l'ensemble donné.

Exécution étape par étape :
1. Exception levée.
2. Comparaison avec chaque type du tuple.
3. Premier match conceptuel : ce bloc (un seul bloc).

Ordre des opérations :
• Un seul bloc ; pas d'ordre entre types du tuple comme entre clauses séparées.

Cas d'utilisation courants :
• Entrée utilisateur : ValueError et erreur de division selon le même message utilisateur.

Cas limites :
• Si les réponses doivent différer, séparer les except.

Considérations de performance :
• Négligeable.

Exemples :
• except (OSError, IOError): ... sous Python 3 (IOError alias d'OSError).

Remarques :
• Réponse : attrape plusieurs types d'exceptions — 1re option.`,
  3006: `Que signifie try: 1/0 ; except ZeroDivisionError: pass ; except ValueError: pass ?

Débutant :
• Deux clauses except après un même try.

Intermédiaire :
• Python essaie dans l'ordre : ici la première suffit pour 1/0.

Expert :
• Mettre les types les plus spécifiques avant les plus généraux (ex. ValueError avant Exception).

Concepts clés :
• Chaînage de gestionnaires mutuellement exclusifs pour un même essai.

Distinctions clés :
• Plusieurs except vs un tuple : granularité des messages ou logiques différentes.

Fonctionnement :
• Au plus un except exécuté par lèveée ; ordre source = ordre de test.

Exécution étape par étape :
1. ZeroDivisionError.
2. Premier except correspond → exécuté.
3. Second except ignoré pour cette lèveée.

Ordre des opérations :
• Scan linéaire des except après interruption du try.

Cas d'utilisation courants :
• Messages d'erreur distincts par cause.

Cas limites :
• except Exception en premier masque les suivants.

Considérations de performance :
• Négligeable.

Exemples :
• except ZeroDivisionError: ... elif logique impossible ici — utiliser deux except.

Remarques :
• Réponse : plusieurs clauses except — 1re option.`,
  3007: `Que vaut try: pass ; except: pass ; else: x = 1 ; x ?

Débutant :
• else du try s'exécute seulement si aucune exception dans try.

Intermédiaire :
• Ici try vide ne lève rien → else tourne → x = 1.

Expert :
• else s'exécute après try réussi et avant finally ; utile pour séparer « succès » de « erreur ».

Concepts clés :
• Chemin de succès explicite après try.

Distinctions clés :
• else du try vs else du for/while.

Fonctionnement :
• Si try termine normalement, branchement else ; sinon saut aux except.

Exécution étape par étape :
1. try: pass OK.
2. except ignoré.
3. else: assignation x = 1.
4. x lu → 1.

Ordre des opérations :
• else après try complet, avant tout finally éventuel.

Cas d'utilisation courants :
• Commit transaction seulement si étapes préparatoires OK.

Cas limites :
• Si le try se termine par return ou break, le else du try n'est pas exécuté (il ne couvre que la fin normale sans exception).

Considérations de performance :
• Négligeable.

Exemples :
• try: data = fetch() except: ... else: cache.save(data).

Remarques :
• Réponse : 1 — 1re option.`,
  3008: `Que vaut try: 1/0 ; except: pass ; else: x = 1 ; x ?

Débutant :
• Exception dans try → else ignoré.

Intermédiaire :
• x n'est jamais défini ; lecture de x → NameError.

Expert :
• Le except: pass masque l'erreur mais ne crée pas x.

Concepts clés :
• Dépendance du chemin d'exécution sur la présence d'exception.

Distinctions clés :
• Contraste direct avec la question où try: pass mène à else.

Fonctionnement :
• Branche except prise ; else non exécuté ; portée de x reste vide.

Exécution étape par étape :
1. ZeroDivisionError.
2. except: pass.
3. else sauté.
4. x inexistant → NameError.

Ordre des opérations :
• Évaluation de x en fin de suite : échec de résolution de nom.

Cas d'utilisation courants :
• Piège classique en quiz : initialiser x avant try ou dans finally.

Cas limites :
• En REPL partiel, un x ancien pourrait exister — pas le cas d'une suite propre.

Considérations de performance :
• N/A.

Exemples :
• Utiliser finally: pour garantir une assignation par défaut.

Remarques :
• Réponse : NameError — 1re option.`,
  3009: `Que vaut try: pass ; except: pass ; finally: x = 1 ; x ?

Débutant :
• finally s'exécute toujours après try/except.

Intermédiaire :
• Même sans exception, finally assigne x.

Expert :
• finally avant propagation si exception non gérée ; ici tout est géré ou absent.

Concepts clés :
• Garantie de nettoyage.

Distinctions clés :
• finally vs else : finally toujours, else seulement sans exception.

Fonctionnement :
• Python exécute le bloc finally en sortant de la structure try.

Exécution étape par étape :
1. try OK.
2. except non utilisé.
3. finally: x = 1.
4. x → 1.

Ordre des opérations :
• finally après try et except éventuels, avant la ligne suivante hors structure.

Cas d'utilisation courants :
• fermeture de fichier, release de verrou.

Cas limites :
• Si finally lève à son tour, elle remplace l'exception précédente (chaining).

Considérations de performance :
• Négligeable.

Exemples :
• try: return 3 finally: log() — le finally tourne avant le return effectif.

Remarques :
• Réponse : 1 — 1re option.`,
  3010: `Que vaut try: 1/0 ; except: pass ; finally: x = 1 ; x ?

Débutant :
• Exception attrapée, puis finally quand même.

Intermédiaire :
• x = 1 s'exécute après le except.

Expert :
• L'ordre est : try échoue → except → finally → suite.

Concepts clés :
• finally indépendant du fait qu'une exception ait eu lieu.

Distinctions clés :
• Sans finally, x ne serait pas défini ici non plus si except ne l'assignait pas — ici finally le fait.

Fonctionnement :
• Le moteur planifie toujours l'entrée dans finally lors de l'entrée dans try.

Exécution étape par étape :
1. Division par zéro.
2. except: pass.
3. finally: x = 1.
4. x vaut 1.

Ordre des opérations :
• finally après gestion de l'exception.

Cas d'utilisation courants :
• Rollback + libération : deux phases dans except et finally.

Cas limites :
• return dans except : finally s'exécute quand même avant de vraiment retourner.

Considérations de performance :
• Négligeable.

Exemples :
• Mesurer durée : finally: timer.stop().

Remarques :
• Réponse : 1 — 1re option.`,
  3011: `Que fait raise ValueError('error') ?

Débutant :
• Lève une ValueError avec message 'error'.

Intermédiaire :
• Interrompt le flux normal jusqu'à un except ValueError ou parent.

Expert :
• raise sans argument dans except relance l'exception active ; ici c'est une levée explicite.

Concepts clés :
• Signal d'erreur intentionnel pour l'appelant.

Distinctions clés :
• raise TypeError vs return {'error': True}.

Fonctionnement :
• Construction de l'instance ValueError('error') puis unwinding de la pile.

Exécution étape par étape :
1. Évaluation des arguments du constructeur.
2. Instanciation.
3. Propagation jusqu'au gestionnaire.

Ordre des opérations :
• raise est une instruction, pas une expression qui retourne.

Cas d'utilisation courants :
• Validation : prix négatif, format incorrect.

Cas limites :
• Dans __init__, raise empêche la construction complète.

Considérations de performance :
• Coût de traceback si non capturé ; éviter dans boucle serrée pour le contrôle de flux.

Exemples :
• if n < 0: raise ValueError('n doit être positif').

Remarques :
• Réponse : lève ValueError — 1re option.`,
  3012: `Que fait raise ValueError ?

Débutant :
• Lève ValueError() sans argument de message personnalisé.

Intermédiaire :
• str() sur l'exception peut être vide ou générique selon le type.

Expert :
• Équivalent à raise ValueError() ; utile pour signaler « erreur de valeur » minimale.

Concepts clés :
• Forme courte de levée.

Distinctions clés :
• Avec ou sans parenthèses ; message absent vs message explicite.

Fonctionnement :
• Instanciation sans args du type builtin.

Exécution étape par étape :
1. ValueError() créée.
2. Propagation.

Ordre des opérations :
• Comme tout raise.

Cas d'utilisation courants :
• Placeholder dans du code à affiner.

Cas limites :
• Moins informatif pour les logs.

Considérations de performance :
• Négligeable.

Exemples :
• raise RuntimeError depuis une branche « impossible ».

Remarques :
• Réponse : lève ValueError sans message détaillé — 1re option.`,
  3013: `Que fait try: raise ValueError ; except ValueError as e: raise ?

Débutant :
• raise seul relance l'exception capturée.

Intermédiaire :
• La traceback peut être préservée (contexte Python 3).

Expert :
• Permet de logger puis relancer sans changer le type.

Concepts clés :
• Relance transparente pour ne pas avaler l'erreur.

Distinctions clés :
• raise vs raise e (perte possible de traceback avec raise e ancien style).

Fonctionnement :
• Mot-clé raise sans expression dans except : réutilise l'exception courante.

Exécution étape par étape :
1. ValueError levée.
2. Capturée.
3. raise nu → propagation au-delà.

Ordre des opérations :
• Après travail dans except (log, métrique).

Cas d'utilisation courants :
• Couche bas niveau qui journalise ; couche haute qui décide.

Cas limites :
• Hors bloc except, raise seul est SyntaxError.

Considérations de performance :
• Négligeable.

Exemples :
• except OSError: logger.exception('disk'); raise.

Remarques :
• Réponse : relance l'exception — 1re option.`,
  3014: `Que fait class MyError(Exception): pass ; raise MyError() ?

Débutant :
• Définit une exception personnalisée et la lève.

Intermédiaire :
• MyError est une sous-classe d'Exception ; peut être attrapée par except MyError ou except Exception.

Expert :
• On peut enrichir avec __init__ pour champs métier (code, champ, etc.).

Concepts clés :
• Typage d'erreurs du domaine.

Distinctions clés :
• Exception custom vs codes entiers ou dict d'erreur.

Fonctionnement :
• La classe hérite du mécanisme de BaseException/Exception.

Exécution étape par étape :
1. Corps de classe exécuté à l'import/définition.
2. raise instancie MyError.

Ordre des opérations :
• Comme toute levée utilisateur.

Cas d'utilisation courants :
• APIs : PaymentDeclined, InvalidSKU.

Cas limites :
• Hériter de Exception plutôt que BaseException sauf besoin rare.

Considérations de performance :
• Négligeable.

Exemples :
• class ConfigError(Exception): ...

Remarques :
• Réponse : lève une exception personnalisée — 1re option.`,
  3015: `Que vaut class MyError(Exception): pass ; isinstance(MyError(), Exception) ?

Débutant :
• True : toute sous-classe d'Exception est une Exception au sens isinstance.

Intermédiaire :
• isinstance teste la hiérarchie, pas seulement le type exact.

Expert :
• Liskov : un MyError peut passer où une Exception est attendue (avec prudence).

Concepts clés :
• Polymorphisme sur les erreurs.

Distinctions clés :
• isinstance vs type(x) is Exception.

Fonctionnement :
• Parcours du MRO de la classe de l'objet.

Exécution étape par étape :
1. MyError() créée.
2. isinstance → True.

Ordre des opérations :
• Appel builtin après création d'instance.

Cas d'utilisation courants :
• Tests unitaires sur hiérarchie d'exceptions.

Cas limites :
• isinstance(x, tuple) pour plusieurs types possibles.

Considérations de performance :
• Très faible.

Exemples :
• assert isinstance(e, MyError).

Remarques :
• Réponse : True — 1re option.`,
  3016: `Que vaut try: raise ValueError('msg') ; except ValueError as e: str(e) ?

Débutant :
• str(e) donne souvent le message passé au constructeur.

Intermédiaire :
• Ici 'msg' en sortie utilisateur lisible.

Expert :
• __str__ peut être surchargé dans une sous-classe custom.

Concepts clés :
• Conversion utilisateur de l'erreur.

Distinctions clés :
• str(e) vs repr(e) vs e.args.

Fonctionnement :
• Appel de BaseException.__str__ ou override.

Exécution étape par étape :
1. e liée à ValueError('msg').
2. str(e) → 'msg'.

Ordre des opérations :
• str() après capture.

Cas d'utilisation courants :
• Messages API 400 avec texte explicatif.

Cas limites :
• Exceptions sans args : chaîne vide possible.

Considérations de performance :
• Négligeable.

Exemples :
• f'Échec : {e}'.

Remarques :
• Réponse : chaîne msg — 1re option.`,
  3017: `Que vaut try: raise ValueError('msg') ; except ValueError as e: repr(e) ?

Débutant :
• repr(e) est une représentation « débogage » avec type et arguments.

Intermédiaire :
• Souvent sous forme ValueError('msg') en texte.

Expert :
• objectif : parfois recréable par eval (pas garanti).

Concepts clés :
• Fidélité pour logs techniques.

Distinctions clés :
• repr vs str pour affichage utilisateur final.

Fonctionnement :
• Appel __repr__ de l'exception.

Exécution étape par étape :
1. Capture de e.
2. repr(e) construit la chaîne détaillée.

Ordre des opérations :
• Comme tout appel de fonction unaire.

Cas d'utilisation courants :
• logging.exception avec détail maximal.

Cas limites :
• Caractères non ASCII : échappement selon version.

Considérations de performance :
• Négligeable.

Exemples :
• assert "ValueError" in repr(e).

Remarques :
• Réponse : représentation type ValueError('msg') — 1re option.`,
  3018: `Que vaut try: 1/0 ; except Exception as e: type(e).__name__ ?

Débutant :
• __name__ du type donne le nom court de la classe : 'ZeroDivisionError'.

Intermédiaire :
• Pas 'Exception' sauf si l'instance est vraiment de ce type.

Expert :
• Utile pour dispatch générique sans importer tous les types.

Concepts clés :
• Introspection légère du nom de classe.

Distinctions clés :
• __name__ sur la classe vs sur le module.

Fonctionnement :
• type(e) retourne la classe ; attribut __name__ string.

Exécution étape par étape :
1. Capture as e (ZeroDivisionError).
2. type(e) → classe.
3. __name__ → 'ZeroDivisionError'.

Ordre des opérations :
• Attribut lu après type().

Cas d'utilisation courants :
• Métriques : compter occurrences par nom d'erreur.

Cas limites :
• Classes dynamiques : __name__ peut être surprenant.

Considérations de performance :
• Négligeable.

Exemples :
• if type(e).__name__ == 'KeyboardInterrupt': ...

Remarques :
• Réponse : 'ZeroDivisionError' — 1re option.`,
  3019: `Que signifie try: raise ValueError ; except Exception: pass ?

Débutant :
• Exception attrape ValueError car héritage.

Intermédiaire :
• Toute sous-classe de Exception sauf celles hors arbre... ici ValueError ⊆ Exception.

Expert :
• Même principe pour toute la descendance d'Exception ; hors de ce sous-arbre (ex. KeyboardInterrupt), il faut un except plus large ou laisser remonter.

Concepts clés :
• Filet large pour erreurs « normales ».

Distinctions clés :
• except Exception vs except BaseException.

Fonctionnement :
• Matching par sous-type.

Exécution étape par étape :
1. ValueError levée.
2. except Exception correspond.
3. pass.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Boucle serveur : log et continuer.

Cas limites :
• Trop large : masque trop de bugs ; préférer types fins en bibliothèque.

Considérations de performance :
• Négligeable.

Exemples :
• except Exception as e: sentry.capture(e).

Remarques :
• Réponse : attrape ValueError (sous-classe) — 1re option.`,
  3020: `Que signifie try: raise ValueError ; except (ValueError, TypeError): pass ?

Débutant :
• ValueError est dans le tuple → bloc exécuté.

Intermédiaire :
• TypeError serait géré pareil ; KeyError non.

Expert :
• Ordre des types dans le tuple n'importe pas pour le matching.

Concepts clés :
• Handler partagé pour familles d'erreurs proches.

Distinctions clés :
• vs deux except avec corps différents.

Fonctionnement :
• Test d'appartenance de la classe levée aux types listés.

Exécution étape par étape :
1. ValueError.
2. Match tuple.
3. pass.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Parsing : ValueError et TypeError pour entrée invalide.

Cas limites :
• Éviter tuple géant illisible.

Considérations de performance :
• Négligeable.

Exemples :
• except (json.JSONDecodeError, ValueError): ...

Remarques :
• Réponse : attrape ValueError — 1re option.`,
  3021: `Que signifie with open('file') as f ?

Débutant :
• Ouvre un fichier et lie f au gestionnaire de contexte.

Intermédiaire :
• À la sortie du bloc, fermeture automatique (souvent via __exit__).

Expert :
• Équivalent conceptuel à try/finally avec close ; même en cas d'exception.

Concepts clés :
• Protocole context manager (__enter__ / __exit__).

Distinctions clés :
• with vs open manuel ouvert oublié.

Fonctionnement :
• __enter__ retourne l'objet fichier ; __exit__ ferme.

Exécution étape par étape :
1. open(...) construit le CM.
2. __enter__ → f.
3. Corps du with.
4. __exit__ au départ.

Ordre des opérations :
• __exit__ même si return dans le corps.

Cas d'utilisation courants :
• Lecture/écriture fichiers, locks threading.

Cas limites :
• open peut lever avant d'entrer dans with ; pas de f définie.

Considérations de performance :
• I/O domine.

Exemples :
• with open(path, encoding='utf-8') as f: data = f.read().

Remarques :
• Réponse : gestionnaire de contexte — 1re option.`,
  3022: `Classe MyContext avec __enter__ / __exit__ et with MyContext() as ctx: pass ?

Débutant :
• Python appelle __enter__ à l'entrée et __exit__ à la sortie.

Intermédiaire :
• Ici __exit__ vide : pas de nettoyage spécial mais protocole respecté.

Expert :
• __exit__ reçoit (exc_type, exc, tb) si exception ; retour True pour supprimer la propagation.

Concepts clés :
• Implémentation manuelle du protocole.

Distinctions clés :
• Classe CM vs @contextmanager.

Fonctionnement :
• Descripteur d'exécution géré par WITH_SETUP opcodes.

Exécution étape par étape :
1. Instanciation MyContext().
2. __enter__ → self assigné à ctx.
3. pass.
4. __exit__.

Ordre des opérations :
• __exit__ après corps, avant ligne suivante.

Cas d'utilisation courants :
• Connexions BD, transactions.

Cas limites :
• Oublier return self dans __enter__ si on veut l'instance.

Considérations de performance :
• Négligeable hors ressource.

Exemples :
• Mesurer temps : __enter__ start ; __exit__ stop.

Remarques :
• Réponse : utilise un gestionnaire de contexte — 1re option.`,
  3023: `__enter__ retourne 1 ; with MyContext() as x: x ?

Débutant :
• La valeur après as est le retour de __enter__, ici 1.

Intermédiaire :
• x n'est pas obligatoirement self du gestionnaire.

Expert :
• Pattern factory : __enter__ peut retourner un wrapper ou un handle.

Concepts clés :
• Séparation entre objet CM et ressource exposée.

Distinctions clés :
• return self vs return autre chose.

Fonctionnement :
• Assignation du résultat de __enter__ au nom après as.

Exécution étape par étape :
1. __enter__ → 1.
2. x = 1 dans le bloc.
3. x ? → 1.

Ordre des opérations :
• Lecture de x dans le bloc.

Cas d'utilisation courants :
• contextlib.redirect_stdout.

Cas limites :
• Si __enter__ lève, on n'entre pas dans le bloc.

Considérations de performance :
• Négligeable.

Exemples :
• return acquire_lock().

Remarques :
• Réponse : 1 — 1re option.`,
  3024: `__exit__ retourne True après 1/0 dans le with ?

Débutant :
• True dans __exit__ : l'exception du bloc peut être « étouffée ».

Intermédiaire :
• Ici ZeroDivisionError ne remonte pas au code appelant.

Expert :
• À utiliser avec parcimonie : cache les vrais bugs.

Concepts clés :
• Signal booléen de suppression d'exception.

Distinctions clés :
• return False ou None : propagation normale.

Fonctionnement :
• L'interpréteur consulte la valeur de retour de __exit__.

Exécution étape par étape :
1. 1/0 dans with.
2. __exit__ appelé avec infos d'exception.
3. return True → pas de propagation.

Ordre des opérations :
• __exit__ avant de poursuivre après with.

Cas d'utilisation courants :
• Zones « sandbox » de tests.

Cas limites :
• BaseException : comportement subtil selon version ; rester sur cas documentés.

Considérations de performance :
• Négligeable.

Exemples :
• contextlib.suppress utilise une logique comparable.

Remarques :
• Réponse : supprime l'exception (ne la propage pas) — 1re option.`,
  3025: `with MyContext() as ctx: ctx quand __enter__ retourne self ?

Débutant :
• ctx est l'instance MyContext.

Intermédiaire :
• On peut appeler méthodes d'état sur ctx pendant le bloc.

Expert :
• Utile pour API fluent : ctx.begin(); ... implicite dans méthodes.

Concepts clés :
• Identité du gestionnaire accessible au corps.

Distinctions clés :
• ctx vs ressource externe retournée autrement.

Fonctionnement :
• __enter__ a retourné self → liaison ctx → self.

Exécution étape par étape :
1. obj = MyContext().
2. ctx = obj.__enter__() → self.
3. ctx désigne la même instance MyContext dans le bloc.

Ordre des opérations :
• Évaluation de ctx dans le bloc.

Cas d'utilisation courants :
• Transaction avec .commit() / rollback implicite dans __exit__.

Cas limites :
• Réassigner la variable ctx dans le bloc ne change pas l'objet dont __exit__ sera appelé (le gestionnaire d'origine).

Considérations de performance :
• Négligeable.

Exemples :
• with Database() as db: db.query(...).

Remarques :
• Réponse : instance MyContext — 1re option.`,
};
