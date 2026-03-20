/** Level 9 FR 2976–3000 — level9_expert_b.ts Q76–100 */
export default {
  2976: `Dog.create("woof").sound — classmethod Animal.create

Débutant :
• "woof" : cls est Dog dans Dog.create ; cls(sound) instancie Dog.

Intermédiaire :
• __init__ de Dog pose self.sound.

Expert :
• Cat.create utiliserait Cat si défini pareil.

Concepts clés :
• Liaison tardive du type concret.

Distinctions clés :
• Pas Error ni "bark".

Fonctionnement :
• Chaîne create → __new__/__init__.

Exécution étape par étape :
• Retour instance puis attribut sound.

Ordre des opérations :
• Définitions classes puis appel.

Cas d'utilisation courants :
• Named constructors.

Cas limites :
• create oublié en sous-classe : héritage Animal.create.

Considérations de performance :
• N/A.

Exemples :
• type(Dog.create("x")) is Dog.

Remarques :
• Réponse : "woof" — 1re option.`,

  2977: `Observer pattern — l'objet maintient quoi ?

Débutant :
• Liste d'observateurs / handlers notifiés lors des changements.

Intermédiaire :
• Un-à-plusieurs découplé.

Expert :
• subscribe / notify typiques.

Concepts clés :
• Événements internes.

Distinctions clés :
• Pas singleton global ni squelette fixe seul.

Fonctionnement :
• Itération sur handlers au fire.

Exécution étape par étape :
• fire(data) appelle chaque callable.

Ordre des opérations :
• subscribe puis fire.

Cas d'utilisation courants :
• GUI, pub/sub léger.

Cas limites :
• Handler qui lève : interrompre ou isoler try.

Considérations de performance :
• O(n) handlers.

Exemples :
• Event banque.

Remarques :
• Réponse : liste de dépendants notifiés — 1re option.`,

  2978: `Event subscribe + fire("hello") — results

Débutant :
• ["hello"] : un handler append une fois.

Intermédiaire :
• Deux handlers pourraient doubler les effets.

Expert :
• Ordre = ordre d'abonnement.

Concepts clés :
• Callbacks en liste.

Distinctions clés :
• Pas [] ni erreur.

Fonctionnement :
• lambda d append.

Exécution étape par étape :
• fire itère une fois.

Ordre des opérations :
• Event() puis subscribe puis fire.

Cas d'utilisation courants :
• Bus d'événements minimal.

Cas limites :
• fire avant subscribe : liste vide.

Considérations de performance :
• N/A petit n.

Exemples :
• Deux lambdas → deux entrées.

Remarques :
• Réponse : ["hello"] — 1re option.`,

  2979: `Principe de substitution de Liskov (LSP)

Débutant :
• Les sous-classes doivent être utilisables partout où la base l'est sans casser le programme.

Intermédiaire :
• Contrat et invariants respectés.

Expert :
• Carré/Rectangle classique.

Concepts clés :
• Remplaçabilité sémantique.

Distinctions clés :
• Pas SRP ni DIP ici.

Fonctionnement :
• isinstance + comportement attendu.

Exécution étape par étape :
• Fonctions polymorphes supposent garanties parent.

Ordre des opérations :
• Passage sous-type où type annoté parent.

Cas d'utilisation courants :
• API publiques orientées héritage.

Cas limites :
• Préconditions renforcies en enfant : violation.

Considérations de performance :
• N/A.

Exemples :
• test_rect(r) banque.

Remarques :
• Réponse : substituabilité des sous-classes — 1re option.`,

  2980: `Square(Rectangle) — violation LSP potentielle ?

Débutant :
• Oui si w et h peuvent être fixés indépendamment alors que le carré impose égalité.

Intermédiaire :
• Invariant w==h vs rectangle général.

Expert :
• setters séparés cassent l'attente client.

Concepts clés :
• Modèle is-a trompeur.

Distinctions clés :
• Pas « toujours OK ».

Fonctionnement :
• Assertions sur aire peuvent échouer.

Exécution étape par étape :
• Mutation état incohérent.

Ordre des opérations :
• Utiliser Rectangle attendu avec Square réel.

Cas d'utilisation courants :
• Leçon SOLID.

Cas limites :
• API carré qui interdit split w/h : mieux.

Considérations de performance :
• N/A.

Exemples :
• r.w=4 r.h=5 sur Square.

Remarques :
• Réponse : oui si w et h indépendants — 1re option.`,

  2981: `Open/Closed Principle

Débutant :
• Ouvert à l'extension, fermé à la modification du code existant.

Intermédiaire :
• Nouvelles sous-classes / plugins plutôt que patch central.

Expert :
• OCP avec ABC + nouvelles implémentations.

Concepts clés :
• Éviter casser clients en ajoutant features.

Distinctions clés :
• Pas l'inverse ouvert/fermé.

Fonctionnement :
• Shape.area avec Circle/Square nouveaux.

Exécution étape par étape :
• Ajout fichier sans éditer ancien.

Ordre des opérations :
• Concevoir points d'extension.

Cas d'utilisation courants :
• Frameworks extensibles.

Cas limites :
• Trop d'abstraction prématurée.

Considérations de performance :
• N/A.

Exemples :
• Nouvelle forme sans toucher calculateur générique.

Remarques :
• Réponse : ouvert extension / fermé modification — 1re option.`,

  2982: `Single Responsibility Principle — raisons de changer

Débutant :
• Une seule raison principale de changer par classe.

Intermédiaire :
• « Raison » liée à un acteur ou responsabilité métier.

Expert :
• Split ReportCalculator / Formatter / Saver.

Concepts clés :
• Cohésion forte.

Distinctions clés :
• Pas « autant que nécessaire » sans limite.

Fonctionnement :
• Changement format n'oblige pas toucher calcul.

Exécution étape par étape :
• Identifier sources de changement.

Ordre des opérations :
• Refactor si multiples axes mélangés.

Cas d'utilisation courants :
• Services maintenables.

Cas limites :
• Microlasses excessives.

Considérations de performance :
• N/A.

Exemples :
• Report monolithique vs découpé.

Remarques :
• Réponse : une — 1re option.`,

  2983: `Interface Segregation Principle

Débutant :
• Préférer plusieurs petites interfaces plutôt qu'une énorme.

Intermédiaire :
• Robot n'implémente pas eat/sleep.

Expert :
• ABC séparés Workable / Eatable.

Concepts clés :
• Pas forcer méthodes inutiles.

Distinctions clés :
• Pas une seule grosse interface obligatoire.

Fonctionnement :
• Clients dépendent du minimum.

Exécution étape par étape :
• isinstance/typing sur rôle précis.

Ordre des opérations :
• Découper contrats.

Cas d'utilisation courants :
• Plugins, microservices.

Cas limites :
• Explosion d'interfaces : équilibre.

Considérations de performance :
• N/A.

Exemples :
• Human vs Robot banque.

Remarques :
• Réponse : beaucoup de petites interfaces ciblées — 1re option.`,

  2984: `Dependency Inversion Principle

Débutant :
• Dépendre d'abstractions, pas d'implémentations concrètes directes.

Intermédiaire :
• Haut niveau ne doit pas importer MySQL en dur si Postgres possible.

Expert :
• Injection Database ABC.

Concepts clés :
• Flexibilité et tests.

Distinctions clés :
• Pas dépendre uniquement des classes feuilles.

Fonctionnement :
• App.__init__(db: Database).

Exécution étape par étape :
• save dispatch sur interface.

Ordre des opérations :
• Câblage DI au bord de l'app.

Cas d'utilisation courants :
• mocks, swap backends.

Cas limites :
• Abstraction fuyante (leaky).

Considérations de performance :
• Indirection minime.

Exemples :
• App/Database banque.

Remarques :
• Réponse : abstractions — 1re option.`,

  2985: `class Plugin(ABC) avec execute abstrait — quel principe ?

Débutant :
• Inversion des dépendances : le code haut niveau parle Plugin, pas LogPlugin seul.

Intermédiaire :
• Extension par nouvelles sous-classes.

Expert :
• Couplage réduit.

Concepts clés :
• Port/adapter mental.

Distinctions clés :
• Pas DRY/YAGNI ici.

Fonctionnement :
• run_plugin(p: Plugin).

Exécution étape par étape :
• polymorphisme sur execute.

Ordre des opérations :
• Définir interface puis impls.

Cas d'utilisation courants :
• Systèmes plugins.

Cas limites :
• Trop d'ABC pour 2 lignes : overkill.

Considérations de performance :
• N/A.

Exemples :
• LogPlugin / AuthPlugin.

Remarques :
• Réponse : inversion des dépendances — 1re option.`,

  2986: `Singleton __new__ — s1 is s2

Débutant :
• True : même instance réutilisée.

Intermédiaire :
• _instance sur la classe.

Expert :
• Sous-classes : souvent un dict par cls si besoin.

Concepts clés :
• Identité unique.

Distinctions clés :
• Pas False.

Fonctionnement :
• if not cls._instance: créer.

Exécution étape par étape :
• Deuxième appel retourne premier objet.

Ordre des opérations :
• s1 = Singleton() puis s2.

Cas d'utilisation courants :
• Config globale (avec prudence).

Cas limites :
• Tests : reset difficile.

Considérations de performance :
• Un seul objet.

Exemples :
• id(s1)==id(s2).

Remarques :
• Réponse : True — 1re option.`,

  2987: `Meta.__call__ sur Foo(metaclass=Meta) — Foo()

Débutant :
• Affiche Creating Foo puis retourne une instance Foo normalement.

Intermédiaire :
• super().__call__ délègue à type.__call__.

Expert :
• Point d'accroche création + __init__.

Concepts clés :
• Classe est callable via métaclasse.

Distinctions clés :
• Pas silence ni None seul.

Fonctionnement :
• print puis construction standard.

Exécution étape par étape :
• Meta.__call__(Foo, *a, **kw).

Ordre des opérations :
• Foo() déclenche méta.

Cas d'utilisation courants :
• Registres, compteurs, logs.

Cas limites :
• Oublier return super : None cassé.

Considérations de performance :
• print coûte I/O.

Exemples :
• Compteur d'instances.

Remarques :
• Réponse : message + instance — 1re option.`,

  2988: `Quand préférer la composition à l'héritage ?

Débutant :
• Combiner des comportements de sources sans relation is-a claire.

Intermédiaire :
• Voiture a un moteur plutôt qu'hériter de moteur.

Expert :
• Réduit hiérarchies fragiles profondes.

Concepts clés :
• has-a flexible.

Distinctions clés :
• Pas quand is-a naturel et stable.

Fonctionnement :
• Délégation self.engine.start().

Exécution étape par étape :
• Swap composant runtime.

Ordre des opérations :
• Concevoir API puis choisir composition.

Cas d'utilisation courants :
• Policies interchangeables sans MRO.

Cas limites :
• Boilerplate délégation.

Considérations de performance :
• Une indirection.

Exemples :
• Car/Engine/GPS banque.

Remarques :
• Réponse : comportements de sources non liées — 1re option.`,

  2989: `À quoi servent les mixins ?

Débutant :
• Ajouter des méthodes réutilisables sans hiérarchie profonde dédiée.

Intermédiaire :
• Héritage multiple ciblé de petites briques.

Expert :
• Souvent non instanciés seuls.

Concepts clés :
• orthogonalité.

Distinctions clés :
• Pas remplacer toutes les bases.

Fonctionnement :
• class User(JsonMixin, LogMixin).

Exécution étape par étape :
• MRO fusionne méthodes.

Ordre des opérations :
• Lister mixins avant base concrète selon besoin.

Cas d'utilisation courants :
• Django CBV, sérialisation.

Cas limites :
• Diamant : ordonner MRO avec soin.

Considérations de performance :
• N/A.

Exemples :
• to_json + log banque.

Remarques :
• Réponse : méthodes réutilisables sans grosse hiérarchie — 1re option.`,

  2990: `Résolution du diamant en Python

Débutant :
• Linéarisation C3 pour l'ordre de résolution des méthodes (MRO).

Intermédiaire :
• Chaque classe une fois ; respect ordre déclaration parents.

Expert :
• super() suit le MRO, pas le parent syntaxique seul.

Concepts clés :
• Cohérence appels coopératifs.

Distinctions clés :
• Pas choix aléatoire ni erreur systématique.

Fonctionnement :
• D(B,C) → D,B,C,A,object exemple banque.

Exécution étape par étape :
• D().method trouve B.method d'abord.

Ordre des opérations :
• Calcul MRO à la définition classe.

Cas d'utilisation courants :
• MI propre avec super chaîné.

Cas limites :
• C3 peut échouer : TypeError hiérarchie illégale.

Considérations de performance :
• MRO calculé une fois.

Exemples :
• print(D.__mro__).

Remarques :
• Réponse : C3 / MRO — 1re option.`,

  2991: `Hiérarchie exceptions — parent de ValueError etc.

Débutant :
• Exception (sous BaseException).

Intermédiaire :
• SystemExit et KeyboardInterrupt sautent Exception.

Expert :
• except Exception attrape la plupart des erreurs « normales ».

Concepts clés :
• Deux niveaux racine utile.

Distinctions clés :
• Pas BaseException comme parent direct de ValueError dans les choix banque (Exception listé).

Fonctionnement :
• issubclass(ValueError, Exception) True.

Exécution étape par étape :
• raise ValueError attrapé par except Exception.

Ordre des opérations :
• Concevoir except précis vs large.

Cas d'utilisation courants :
• Handlers graduels.

Cas limites :
• Attraper trop large masque bugs.

Considérations de performance :
• N/A.

Exemples :
• KeyError, TypeError même branche.

Remarques :
• Réponse : ValueError, TypeError, KeyError, etc. sous Exception — 1re option.`,

  2992: `class CustomError(Exception): pass puis raise

Débutant :
• Oui : lève CustomError ; __init__ hérité gère le message.

Intermédiaire :
• except CustomError fonctionne.

Expert :
• Peut enrichir __init__ plus tard.

Concepts clés :
• Exceptions utilisateur triviales.

Distinctions clés :
• Pas besoin __init__ custom obligatoire.

Fonctionnement :
• mécanisme Exception standard.

Exécution étape par étape :
• propagation try/except.

Ordre des opérations :
• raise avec str.

Cas d'utilisation courants :
• Erreurs domaine.

Cas limites :
• Hériter BaseException direct : rare sauf besoin spécial.

Considérations de performance :
• Coût exception si flux contrôle abusif.

Exemples :
• e.args.

Remarques :
• Réponse : oui, lève CustomError — 1re option.`,

  2993: `CustomError(msg, code) avec super().__init__(msg) — e.code

Débutant :
• 404 : attribut instance supplémentaire.

Intermédiaire :
• str(e) reste msg via args.

Expert :
• __reduce__ si pickle besoin champs extra.

Concepts clés :
• Enrichir l'exception.

Distinctions clés :
• Pas "fail" dans code.

Fonctionnement :
• self.code = code après super.

Exécution étape par étape :
• Construction puis accès .code.

Ordre des opérations :
• CustomError("fail", 404).

Cas d'utilisation courants :
• HTTP status, codes DB.

Cas limites :
• Oublier super : args cassés.

Considérations de performance :
• N/A.

Exemples :
• e.args[0] message.

Remarques :
• Réponse : 404 — 1re option.`,

  2994: `issubclass(DBError, AppError)

Débutant :
• True : DBError hérite directement de AppError.

Intermédiaire :
• except AppError attrape DBError.

Expert :
• Transitive vers Exception.

Concepts clés :
• Hiérarchie erreurs applicatives.

Distinctions clés :
• Pas False.

Fonctionnement :
• Graphe de classes.

Exécution étape par étape :
• Vérification MRO.

Ordre des opérations :
• Définitions trois classes.

Cas d'utilisation courants :
• Couches API.

Cas limites :
• Cycles impossibles.

Considérations de performance :
• N/A.

Exemples :
• raise DBError dans except AppError.

Remarques :
• Réponse : True — 1re option.`,

  2995: `except AppError avec raise DBError — result

Débutant :
• "caught" : DBError est sous-classe d'AppError.

Intermédiaire :
• Matching par famille.

Expert :
• Ordre des except du plus spécifique au large.

Concepts clés :
• Polymorphisme exceptions.

Distinctions clés :
• Pas « non attrapé ».

Fonctionnement :
• isinstance(raised, AppError).

Exécution étape par étape :
• Branche except exécutée.

Ordre des opérations :
• try puis raise DBError().

Cas d'utilisation courants :
• Handler unique app errors.

Cas limites :
• Masquer trop : logger puis re-raise parfois mieux.

Considérations de performance :
• N/A.

Exemples :
• AuthError idem.

Remarques :
• Réponse : "caught" — 1re option.`,

  2996: `except (TypeError, ValueError) avec raise ValueError

Débutant :
• "caught" : ValueError dans le tuple.

Intermédiaire :
• KeyError ne serait pas attrapé.

Expert :
• as e optionnel pour inspecter.

Concepts clés :
• Union de types dans except.

Distinctions clés :
• Pas erreur non match.

Fonctionnement :
• test membership tuple classes.

Exécution étape par étape :
• assign result.

Ordre des opérations :
• try body puis clause.

Cas d'utilisation courants :
• Entrées utilisateur multiples échecs.

Cas limites :
• Tuple vide : syntaxe interdite.

Considérations de performance :
• N/A.

Exemples :
• except (OSError, IOError) historique.

Remarques :
• Réponse : "caught" — 1re option.`,

  2997: `issubclass(ValueError, Exception)

Débutant :
• True : chaîne ValueError → Exception → BaseException.

Intermédiaire :
• Donc except Exception l'attrape.

Expert :
• isinstance(ve, Exception) aussi True pour instance ve.

Concepts clés :
• Vérification hiérarchie.

Distinctions clés :
• Pas False.

Fonctionnement :
• MRO de ValueError contient Exception.

Exécution étape par étape :
• bool retourné.

Ordre des opérations :
• Appel builtin issubclass.

Cas d'utilisation courants :
• Méta-tests frameworks.

Cas limites :
• Premier arg doit être classe, pas instance.

Considérations de performance :
• N/A.

Exemples :
• issubclass(TypeError, Exception).

Remarques :
• Réponse : True — 1re option.`,

  2998: `issubclass(KeyboardInterrupt, Exception)

Débutant :
• False : hérite directement de BaseException.

Intermédiaire :
• Donc except Exception ne prend pas Ctrl+C.

Expert :
• Boucle infinie avec except Exception : interruption utilisateur reste possible.

Concepts clés :
• Séparation erreurs vs événements système.

Distinctions clés :
• Pas True.

Fonctionnement :
• MRO sans Exception.

Exécution étape par étape :
• issubclass retourne faux.

Ordre des opérations :
• Import implicit builtins.

Cas d'utilisation courants :
• Handlers robustes.

Cas limites :
• except BaseException : tout prendre (dangereux).

Considérations de performance :
• N/A.

Exemples :
• Comparer SystemExit.

Remarques :
• Réponse : False — 1re option.`,

  2999: `issubclass(SystemExit, Exception)

Débutant :
• False : sys.exit lève sous BaseException direct.

Intermédiaire :
• Permet quitter même dans except Exception large.

Expert :
• Code 0 sortie propre.

Concepts clés :
• Flux de contrôle vs bug.

Distinctions clés :
• Pas True.

Fonctionnement :
• MRO SystemExit, BaseException, object.

Exécution étape par étape :
• issubclass faux.

Ordre des opérations :
• Vérification après import sys conceptuel.

Cas d'utilisation courants :
• CLI exit.

Cas limites :
• Capturer SystemExit volontairement : rare.

Considérations de performance :
• N/A.

Exemples :
• try: sys.exit(0) except Exception: ne bloque pas.

Remarques :
• Réponse : False — 1re option.`,

  3000: `Pourquoi KeyboardInterrupt et SystemExit hors de Exception ?

Débutant :
• Pour qu'un except Exception générique n'avale pas l'arrêt utilisateur ni la sortie du programme.

Intermédiaire :
• Ce sont des événements de contrôle, pas des bugs typiques.

Expert :
• BaseException reste le vrai parent commun si besoin absolu.

Concepts clés :
• Sécurité d'exécution interactive.

Distinctions clés :
• Pas raison performance Python 2 seul.

Fonctionnement :
• Filtrage dans mécanisme matching except.

Exécution étape par étape :
• Interpréteur propage jusqu'à fin si non attrapé au bon niveau.

Ordre des opérations :
• Écrire except précis pour erreurs métier.

Cas d'utilisation courants :
• Serveurs, REPL, scripts longs.

Cas limites :
• except BaseException : cleanup critique seulement.

Considérations de performance :
• N/A.

Exemples :
• while True: pass sous except Exception.

Remarques :
• Réponse : éviter que except Exception les bloque — 1re option.`,
};
