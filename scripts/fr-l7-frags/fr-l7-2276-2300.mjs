/** Level 7 FR 2276–2300 — level7_intermediate_b.ts Q26–50 */
export default {
  2276: `Que signifie la règle LEGB en Python ? (QCM)

Débutant :
• L = Local, E = Enclosing (englobant), G = Global (module), B = Built-in — c’est l’ordre de recherche des noms.

Intermédiaire :
• Les trois autres formulations proposées ne correspondent pas à la terminologie officielle de la doc Python.

Expert :
• La résolution est lexicale : le texte du code définit la chaîne de portées, pas le site d’appel.

Concepts clés :
• Résolution de noms, portées imbriquées, module builtins.

Distinctions clés :
• « Enclosing » n’est pas « Element » ni « Lexical » dans l’acronyme standard LEGB.

Fonctionnement :
• À chaque lecture d’un nom, Python parcourt L puis E puis G puis B.

Exécution étape par étape :
• Si le nom est trouvé dans une étape, la recherche s’arrête.

Ordre des opérations :
• Assignation locale peut masquer sans toucher aux niveaux externes.

Cas d'utilisation courants :
• Déboguer NameError, comprendre global / nonlocal.

Cas limites :
• Boucles et fermetures : liaison tardive des valeurs, autre piège classique.

Considérations de performance :
• Coût négligeable ; clarté du code prime.

Exemples :
• Voir 2277–2278 pour liaison tardive et portée lexicale.

Remarques :
• Réponse : Local, Enclosing, Global, Built-in (1re option).`,

  2277: `x = 10 ; def f(): return x ; x = 20 — f()

Débutant :
• f ne capture pas la valeur de x à la définition : au moment de l’appel, x global vaut 20.

Intermédiaire :
• C’est la liaison tardive (late binding) sur les variables libres non locales.

Expert :
• Pour figer une valeur à la création, utiliser une valeur par défaut d’argument ou une variable locale intermédiaire.

Concepts clés :
• Lecture de global, réaffectation de x avant l’appel.

Distinctions clés :
• Diffère d’une constante « capturée » par défaut d’argument.

Fonctionnement :
• LOAD_GLOBAL ou équivalent au moment de l’appel.

Exécution étape par étape :
• x passe à 20 puis f() s’exécute.

Ordre des opérations :
• Les deux assignations module s’enchaînent avant l’appel typique.

Cas d'utilisation courants :
• Factories et callbacks qui doivent voir l’état actuel.

Cas limites :
• Si x est supprimé avant l’appel : NameError.

Considérations de performance :
• N/A.

Exemples :
• Lambdas dans une boucle : piège classique de la même règle.

Remarques :
• Réponse : 20.`,

  2278: `x = 10 ; def f(): return x ; def g(): x = 99 ; return f() — g()

Débutant :
• f est défini au niveau module : sa chaîne LEGB pour x est locale → globale, pas la locale de g.

Intermédiaire :
• Le x = 99 de g n’existe que dans le cadre de g ; f ne « voit » pas ce binding.

Expert :
• Portée lexicale : le corps de f est lié au module, pas au point d’appel dynamique.

Concepts clés :
• Portée statique, global vs local d’une autre fonction.

Distinctions clés :
• Ce n’est pas la règle « qui appelle » mais « où la fonction est définie ».

Fonctionnement :
• f cherche x : pas en local → global 10.

Exécution étape par étape :
• Entrée dans g, assignation locale x, appel f(), retour 10.

Ordre des opérations :
• L’appel f() ne pousse pas le cadre de g dans la résolution de x pour f.

Cas d'utilisation courants :
• Helpers module-level vs fonctions internes avec état.

Cas limites :
• Si f était imbriqué dans g et utilisait x sans l’assigner, autre résultat.

Considérations de performance :
• N/A.

Exemples :
• Déplacer def f dans g changerait la résolution.

Remarques :
• Réponse : 10.`,

  2279: `Peut-on supprimer une variable globale depuis une fonction ?

Débutant :
• Oui : déclarer global x puis del x retire x du namespace du module.

Intermédiaire :
• Sans global, del ciblerait une locale inexistante → erreur.

Expert :
• Pratique rare ; préférer refactor ou None.

Concepts clés :
• global, del, namespace module.

Distinctions clés :
• Pas « del seul » ni impossibilité totale.

Fonctionnement :
• DELETE_GLOBAL après déclaration.

Exécution étape par étape :
• Après remove(), toute lecture de x hors redéfinition → NameError.

Ordre des opérations :
• global avant del dans le même bloc.

Cas d'utilisation courants :
• Scripts de réinitialisation ponctuels (peu recommandé en lib).

Cas limites :
• Autres références peuvent subsister (objets vivants).

Considérations de performance :
• N/A.

Exemples :
• Voir banque anglaise pour squelette remove().

Remarques :
• Réponse : Oui, avec global puis del (1re option).`,

  2280: `len.__module__

Débutant :
• Les fonctions built-in comme len viennent du module builtins → __module__ vaut la chaîne "builtins".

Intermédiaire :
• C’est le « B » de LEGB : noms prédéfinis résolus via builtins si absents ailleurs.

Expert :
• import builtins permet d’inspecter ou (mal) monkey-patcher.

Concepts clés :
• Attribut __module__ sur callables.

Distinctions clés :
• Pas "__main__" pour len en usage normal.

Fonctionnement :
• C API ou wrapper expose le module d’origine.

Exécution étape par étape :
• Accès attribut sans appel.

Ordre des opérations :
• len est déjà lié au moment de l’expression.

Cas d'utilisation courants :
• Introspection, tests, outils.

Cas limites :
• Fonctions définies en __main__ auront "__main__".

Considérations de performance :
• N/A.

Exemples :
• print.__module__, int.__module__ → "builtins".

Remarques :
• Réponse : "builtins" (1re option).`,

  2281: `f avec x=1, g return x, return g.__closure__[0].cell_contents — f()

Débutant :
• g ferme sur x ; la cellule 0 contient 1.

Intermédiaire :
• __closure__ est un tuple de cellules ; .cell_contents lit la valeur capturée.

Expert :
• co_freevars nomme les variables libres ; __closure__ aligné sur cet ordre.

Concepts clés :
• Fermeture, cellule, variable libre.

Distinctions clés :
• Ce n’est pas l’objet fonction g retourné, mais un entier.

Fonctionnement :
• Création des cellules à la définition de g dans l’appel de f.

Exécution étape par étape :
• f() exécute return sur cell_contents → 1.

Ordre des opérations :
• Un seul freevar ici → index 0.

Cas d'utilisation courants :
• Déboguer closures, cours avancés.

Cas limites :
• g sans free vars → __closure__ None → erreur si indexation.

Considérations de performance :
• Inspection coûteuse, réservée au debug.

Exemples :
• Plusieurs freevars : plusieurs cellules.

Remarques :
• Réponse : 1.`,

  2282: `g.__closure__ is not None avec g qui return x depuis f

Débutant :
• g capture x → __closure__ est un tuple non vide → is not None est True.

Intermédiaire :
• Si g n’utilisait aucune variable de f, __closure__ serait None.

Expert :
• Tester __closure__ est un proxy grossier : détails dans inspect.

Concepts clés :
• Tuple de cellules vs None.

Distinctions clés :
• Pas False sauf absence de capture.

Fonctionnement :
• Le compilateur marque g comme ayant des free variables.

Exécution étape par étape :
• f() retourne le booléen évalué.

Ordre des opérations :
• Création de g puis lecture d’attribut.

Cas d'utilisation courants :
• Vérifier rapidement si une nested fonction est une closure.

Cas limites :
• __closure__ peut exister avec cell « vide » dans cas avancés CPython.

Considérations de performance :
• N/A.

Exemples :
• Voir 2283 pour contre-exemple.

Remarques :
• Réponse : True (1re option).`,

  2283: `def g(): return 42 dans f — return g.__closure__ — f()

Débutant :
• g n’utilise aucune variable de f → pas de fermeture → __closure__ vaut None.

Intermédiaire :
• Ce n’est pas un tuple vide () : l’attribut est explicitement None.

Expert :
• inspect.getclosurevars lève sur certaines fonctions sans closure.

Concepts clés :
• Free variables absentes.

Distinctions clés :
• Diffère de 2282 où x était lu.

Fonctionnement :
• Pas d’entrées dans co_freevars.

Exécution étape par étape :
• f() retourne None.

Ordre des opérations :
• def g exécuté dans f ; pas de capture.

Cas d'utilisation courants :
• Fabriquer des fonctions sans état partagé.

Cas limites :
• builtins ou globaux lus sans nonlocal/global comptent comme free vars dans certains cas.

Considérations de performance :
• N/A.

Exemples :
• Ajouter return x dans g changerait le résultat.

Remarques :
• Réponse : None (1re option).`,

  2284: `x global "global", f avec x "local", g return x — f()

Débutant :
• Pour g, E (f) fournit x = "local" avant G → la chaîne "local".

Intermédiaire :
• LEGB : L vide dans g, E trouve x dans f.

Expert :
• global module jamais consulté pour ce x tant que l’englobant définit le nom.

Concepts clés :
• Portée englobante prioritaire sur globale pour ce nom.

Distinctions clés :
• Pas "global" ni None.

Fonctionnement :
• Résolution lexicale sur la pile statique des blocs.

Exécution étape par étape :
• f() appelle g() qui retourne la str locale à f.

Ordre des opérations :
• Assignation dans f avant return g().

Cas d'utilisation courants :
• Encapsuler état dans une fonction externe.

Cas limites :
• Si f n’assignait pas x, g irait au global homonyme.

Considérations de performance :
• N/A.

Exemples :
• Voir 2278 pour contraste module-level.

Remarques :
• Réponse : "local" (1re option).`,

  2285: `len(g.__code__.co_freevars) avec g qui return x+y capturant x,y dans f

Débutant :
• co_freevars est ('x','y') → longueur 2.

Intermédiaire :
• Aligné sur __closure__ : deux cellules pour deux noms.

Expert :
• co_varnames liste les locales/paramètres ; ne pas confondre.

Concepts clés :
• Free variables, introspection bytecode.

Distinctions clés :
• Pas 1 ni 0.

Fonctionnement :
• Le compilateur enregistre les noms externes référencés.

Exécution étape par étape :
• f() évalue len(...) et retourne 2.

Ordre des opérations :
• g créé mais pas appelé ici.

Cas d'utilisation courants :
• Outils statiques, debug.

Cas limites :
• Ordre des noms doit correspondre aux indices de __closure__.

Considérations de performance :
• Rare en prod.

Exemples :
• Un seul free var → len 1.

Remarques :
• Réponse : 2.`,

  2286: `def f(x): return x — f.__name__

Débutant :
• __name__ sur une fonction def est le nom symbolique donné à la définition : "f".

Intermédiaire :
• Utile pour logs, functools.wraps, sérialisation.

Expert :
• Les fonctions peuvent être renommées par assignation mais __name__ reste sauf mise à jour manuelle.

Concepts clés :
• Attribut __name__.

Distinctions clés :
• Pas "function" ni le nom du paramètre.

Fonctionnement :
• Rempli à la création de l’objet fonction.

Exécution étape par étape :
• Accès attribut sans appeler f.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Traces d’erreur lisibles.

Cas limites :
• lambda → "<lambda>" (voir 2293).

Considérations de performance :
• N/A.

Exemples :
• Voir 2293 pour contraste lambda.

Remarques :
• Réponse : "f" (1re option).`,

  2287: `Docstring """My function""" — f.__doc__

Débutant :
• La première chaîne littérale du corps devient la docstring → "My function".

Intermédiaire :
• help(f) et pydoc utilisent ce champ.

Expert :
• PEP 257 conventions pour multi-lignes.

Concepts clés :
• __doc__ sur callable.

Distinctions clés :
• Pas None ici.

Fonctionnement :
• Le compilateur attache la constante au code object puis à la fonction.

Exécution étape par étape :
• Lecture attribut.

Ordre des opérations :
• Après def complet.

Cas d'utilisation courants :
• Documentation automatique.

Cas limites :
• f.__doc__ = None possible après coup.

Considérations de performance :
• N/A.

Exemples :
• Docstring après code exécutable : n’est plus docstring.

Remarques :
• Réponse : "My function" (1re option).`,

  2288: `def f(x: int, y: str) -> bool — f.__annotations__

Débutant :
• Dictionnaire avec clés x, y et "return" pointant vers les objets int, str, bool.

Intermédiaire :
• Annotations ne sont pas vérifiées à l’exécution par défaut.

Expert :
• typing.get_type_hints résout les forward refs.

Concepts clés :
• PEP 526/484 métadonnées.

Distinctions clés :
• Pas des chaînes "int" dans la première option du QCM.

Fonctionnement :
• Rempli à la définition, évalue les expressions d’annotation.

Exécution étape par étape :
• Accès attribut.

Ordre des opérations :
• from __future__ import annotations retarderait en str sous 3.7+ selon config — ici banque classique.

Cas d'utilisation courants :
• mypy, IDE, FastAPI.

Cas limites :
• Annotation forward-ref sans quotes ancien style.

Considérations de performance :
• Coût définition seulement.

Exemples :
• Voir typing module.

Remarques :
• Réponse : {"x": int, "y": str, "return": bool} (1re option).`,

  2289: `f.custom_attr = 42 après def f — f.custom_attr

Débutant :
• Les fonctions ont __dict__ (sauf cas __slots__ rares) → attribut utilisateur 42.

Intermédiaire :
• Idem décorateurs qui attachent métadonnées.

Expert :
• Peut servir de cache simple (attention thread-safety).

Concepts clés :
• Objets fonction mutables.

Distinctions clés :
• Pas d’erreur.

Fonctionnement :
• SETATTR sur l’objet fonction.

Exécution étape par étape :
• Lecture après assignation.

Ordre des opérations :
• Assignation puis accès.

Cas d'utilisation courants :
• Compteurs, version, registry.

Cas limites :
• Types built-in C sans __dict__ ne permettent pas ça — ici f est def Python.

Considérations de performance :
• N/A.

Exemples :
• functools.lru_cache utilise dict interne.

Remarques :
• Réponse : 42.`,

  2290: `dispatch(op) retourne dict de lambdas — dispatch("+")(3, 2)

Débutant :
• Clé "+" → lambda addition → 3+2 = 5.

Intermédiaire :
• Table de dispatch remplace if/elif.

Expert :
• KeyError si op absent sans .get.

Concepts clés :
• Dict de callables, double appel.

Distinctions clés :
• Pas 1 ni la chaîne "+".

Fonctionnement :
• Premier appel renvoie fonction, second l’exécute.

Exécution étape par étape :
• Lookup puis call avec (3,2).

Ordre des opérations :
• Crochets puis parenthèses externes.

Cas d'utilisation courants :
• Parseurs, calculatrices.

Cas limites :
• Lambdas partagent pas de doc/ nom utile.

Considérations de performance :
• Lookup O(1) moyen.

Exemples :
• Étendre avec "*", "/".

Remarques :
• Réponse : 5.`,

  2291: `Décorateur @once — effet sur la fonction

Débutant :
• Le drapeau called[0] ne laisse passer f(*a) qu’une fois ; les appels suivants retombent dans wrapper sans return explicite → None.

Intermédiaire :
• Liste mutable évite nonlocal pour le booléen.

Expert :
• Variante : lever après première exécution si politique stricte.

Concepts clés :
• Closure + état mutable, décorateur.

Distinctions clés :
• Pas « deux fois », pas cache complet des valeurs, pas erreur systématique.

Fonctionnement :
• wrapper remplace la fonction exposée.

Exécution étape par étape :
• Premier appel exécute f ; suivants court-circuitent.

Ordre des opérations :
• @ appliqué à la définition.

Cas d'utilisation courants :
• Init unique, flags globaux encapsulés.

Cas limites :
• Threads : besoin de verrous pour atomicité.

Considérations de performance :
• Évite travail répété.

Exemples :
• Voir texte anglais greet.

Remarques :
• Réponse : ne s’exécute vraiment qu’au premier appel (1re option).`,

  2292: `Que fait memoize du QCM ?

Débutant :
• dict cache mémorise n → f(n) ; hits suivants lisent cache[n].

Intermédiaire :
• Équivalent conceptuel à functools.lru_cache simplifié.

Expert :
• Attention aux arguments non hashables si on généralise.

Concepts clés :
• Mémoïsation, pureté approximative des f.

Distinctions clés :
• Pas limitation à un seul appel ni typage.

Fonctionnement :
• wrapper intercepte chaque appel.

Exécution étape par étape :
• if n not in cache: calcul puis stockage.

Ordre des opérations :
• Par appel.

Cas d'utilisation courants :
• Fibonacci, DP top-down.

Cas limites :
• Croissance mémoire du cache.

Considérations de performance :
• Gain énorme sur arbres récursifs naïfs.

Exemples :
• fib avec memoize vs sans.

Remarques :
• Réponse : met en cache les résultats (1re option).`,

  2293: `(lambda x: x * 2).__name__

Débutant :
• Les lambdas ont le nom spécial "<lambda>" pour les traces.

Intermédiaire :
• Assigner à une variable ne change pas __name__.

Expert :
• def double pour un nom stable.

Concepts clés :
• Anonymat syntaxique vs objet nommé.

Distinctions clés :
• Pas "lambda" sans chevrons selon options.

Fonctionnement :
• Compilateur fixe __name__ à la création.

Exécution étape par étape :
• Accès attribut.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Callbacks courts.

Cas limites :
• Profiler confus avec plusieurs lambdas.

Considérations de performance :
• N/A.

Exemples :
• Voir 2286 pour def nommé.

Remarques :
• Réponse : "<lambda>" (1re option).`,

  2294: `def f(): yield 1 — type(f())

Débutant :
• Un appel à une generator function renvoie un objet generator, pas la valeur yield.

Intermédiaire :
• type(f) reste function ; type(f()) est generator.

Expert :
• inspect.isgenerator, isgeneratorfunction.

Concepts clés :
• yield transforme la sémantique d’appel.

Distinctions clés :
• Pas function ni int.

Fonctionnement :
• Opcode pour construire générateur au call.

Exécution étape par étape :
• f() sans itération : aucun yield encore exécuté.

Ordre des opérations :
• Call puis type().

Cas d'utilisation courants :
• Pipelines paresseux.

Cas limites :
• Générateur async autre type.

Considérations de performance :
• Pas de liste matérialisée.

Exemples :
• next(f()) → 1.

Remarques :
• Réponse : <class 'generator'> (1re option).`,

  2295: `Même f generator — type(f) sans appel

Débutant :
• f est toujours une fonction Python, même si elle contient yield.

Intermédiaire :
• inspect.isgeneratorfunction(f) True.

Expert :
• Le code object co_flags contient CO_GENERATOR.

Concepts clés :
• Objet fonction vs objet générateur produit.

Distinctions clés :
• Pas generator ni method ici.

Fonctionnement :
• type renvoie la métaclasse function.

Exécution étape par étape :
• Pas d’appel.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Routage générique sur callables.

Cas limites :
• Méthodes liées : types différents.

Considérations de performance :
• N/A.

Exemples :
• Voir 2294 pour contraste f().

Remarques :
• Réponse : <class 'function'> (1re option).`,

  2296: `def f(*, x, y): return x + y — f(x=1, y=2)

Débutant :
• * nu force mots-clés pour x,y ; 1+2 = 3.

Intermédiaire :
• f(1,2) serait TypeError.

Expert :
• PEP 570 combinaisons avec / et *args nommés.

Concepts clés :
• Paramètres keyword-only.

Distinctions clés :
• Pas d’erreur avec les bons noms.

Fonctionnement :
• Binding par nom.

Exécution étape par étape :
• return évalue la somme.

Ordre des opérations :
• Appel valide.

Cas d'utilisation courants :
• APIs lisibles : timeout=, host=.

Cas limites :
• Oublier un keyword-only → TypeError.

Considérations de performance :
• N/A.

Exemples :
• Voir 2297.

Remarques :
• Réponse : 3.`,

  2297: `Même signature — f(1, 2)

Débutant :
• Aucun paramètre positionnel n’accepte 1 et 2 ; TypeError.

Intermédiaire :
• Message du style « 0 positional arguments but 2 were given ».

Expert :
• Ajouter des params avant * ou utiliser *args pour accepter positionnels.

Concepts clés :
• Rejet des positionnels pour keyword-only.

Distinctions clés :
• Pas 3.

Fonctionnement :
• Phase de liaison des arguments échoue.

Exécution étape par étape :
• Exception avant entrée dans le corps.

Ordre des opérations :
• Construction de la frame abandonnée.

Cas d'utilisation courants :
• Forcer clarté à l’appel.

Cas limites :
• Messages varient légèrement selon versions.

Considérations de performance :
• N/A.

Exemples :
• Corrigé : f(x=1,y=2).

Remarques :
• Réponse : TypeError (1re option).`,

  2298: `def f(a, b, /, c, *, d): return a+b+c+d — f(1, 2, 3, d=4)

Débutant :
• a,b position-only remplis ; c positionnel OK ; d mot-clé obligatoire → 1+2+3+4 = 10.

Intermédiaire :
• / et * segmentent les modes de passage.

Expert :
• Impossible de passer a,b par nom (voir 2300).

Concepts clés :
• PEP 570 positional-only et keyword-only combinés.

Distinctions clés :
• Pas d’erreur ici.

Fonctionnement :
• Liaison : 1→a, 2→b, 3→c, d=4.

Exécution étape par étape :
• Somme des quatre entiers.

Ordre des opérations :
• Appel valide typique.

Cas d'utilisation courants :
• Fonctions type C API.

Cas limites :
• Ordre strict des segments dans la signature.

Considérations de performance :
• N/A.

Exemples :
• Voir 2299 variante c=3.

Remarques :
• Réponse : 10.`,

  2299: `Même f — f(1, 2, c=3, d=4)

Débutant :
• c entre / et * peut être mot-clé ; même somme 10.

Intermédiaire :
• Équivalent sémantique à tout positionnel sauf d.

Expert :
• Flexibilité utile pour lisibilité sur c seul.

Concepts clés :
• Paramètre « normal » hybride.

Distinctions clés :
• Toujours pas d’erreur.

Fonctionnement :
• a=1,b=2,c=3,d=4.

Exécution étape par étape :
• return 10.

Ordre des opérations :
• Valide.

Cas d'utilisation courants :
• APIs avec premiers args positionnels forcés puis options nommées.

Cas limites :
• Trop de combinaisons peuvent confondre l’utilisateur.

Considérations de performance :
• N/A.

Exemples :
• Voir 2298.

Remarques :
• Réponse : 10.`,

  2300: `f(a, b, /, c, *, d) — f(a=1, b=2, c=3, d=4)

Débutant :
• a et b sont avant / : interdits comme mots-clés → TypeError.

Intermédiaire :
• Message mentionne positional-only arguments passed as keyword.

Expert :
• Renommer params position-only sans casser appels keyword sur a,b.

Concepts clés :
• / fixe le mode positionnel exclusif.

Distinctions clés :
• c et d en keyword OK, mais pas a,b ici.

Fonctionnement :
• Échec à la préparation de l’appel.

Exécution étape par étape :
• Exception immédiate.

Ordre des opérations :
• Aucune entrée dans f.

Cas d'utilisation courants :
• builtins, signatures stables.

Cas limites :
• mélange partiel encore invalide pour a,b.

Considérations de performance :
• N/A.

Exemples :
• Corrigé : f(1,2,c=3,d=4).

Remarques :
• Réponse : TypeError (1re option).`,
};
