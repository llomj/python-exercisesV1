/** Level 7 FR 2376–2400 — level7_expert_b.ts Q26–50 (lru_cache fin, singledispatch, operator, map, introspection) */
export default {
  2376: `lru_cache — arguments non hashables

Débutant :
• Les clés du cache sont dérivées des arguments ; ils doivent être hashables (immuables typiques).

Intermédiaire :
• list, dict, set ne peuvent pas servir de clé ; tuple ou immuables OK.

Expert :
• Exception TypeError: unhashable type si violation.

Concepts clés :
• Hashabilité = __hash__ défini et stable avec __eq__.

Distinctions clés :
• Pas « doivent être des entiers ».

Fonctionnement :
• Construction d’une clé composite hashable.

Exécution étape par étape :
• Tentative de hachage avant stockage.

Ordre des opérations :
• Vérification à chaque appel.

Cas d'utilisation courants :
• Passer tuple au lieu de list pour données composites.

Cas limites :
• Objets mutables avec hash custom dangereux.

Considérations de performance :
• Hash rapide sur types built-in.

Exemples :
• f([1]) échoue ; f((1,)) OK.

Remarques :
• Réponse : arguments doivent être hashables (1re option).`,

  2377: `@lru_cache(maxsize=None)

Débutant :
• None signifie cache sans limite de taille (tant que la mémoire tient).

Intermédiaire :
• Diffère de maxsize=128 par défaut du décorateur sans argument.

Expert :
• Risque fuite mémoire si l’espace des clés est infini.

Concepts clés :
• LRU dégénère en cache complet.

Distinctions clés :
• Pas « désactive le cache ».

Fonctionnement :
• Aucune éviction LRU.

Exécution étape par étape :
• Chaque nouvelle clé reste.

Ordre des opérations :
• Toujours croissant currsize jusqu’à saturation mémoire.

Cas d'utilisation courants :
• Fonctions à domaine fini connu.

Cas limites :
• Domaine infini : explosion.

Considérations de performance :
• Mémoire vs hits.

Exemples :
• Voir banque fib(20) avec None.

Remarques :
• Réponse : cache illimité (1re option).`,

  2378: `functools.cache vs lru_cache(maxsize=None)

Débutant :
• cache est l’équivalent pratique de lru_cache sans limite, API plus courte.

Intermédiaire :
• Introduit en 3.9 ; avant, lru_cache(None).

Expert :
• Même famille d’implémentation côté CPython.

Concepts clés :
• Syntactic sugar.

Distinctions clés :
• Pas « cache est plus rapide algorithmiquement » comme différence majeure.

Fonctionnement :
• Décorateur simple sans paramètre maxsize.

Exécution étape par étape :
• Identique à lru_cache(None) pour usage courant.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Petites fonctions pures.

Cas limites :
• Même exigence hashable.

Considérations de performance :
• Pareil asymptotiquement.

Exemples :
• Voir banque question comparative.

Remarques :
• Réponse : équivalent à lru_cache(maxsize=None) (1re option).`,

  2379: `f(1,2) puis f(2,1) avec lru_cache

Débutant :
• Deux tuples d’arguments différents → deux entrées de cache distinctes.

Intermédiaire :
• L’ordre des args fait partie de la clé.

Expert :
• Même valeurs dans kwargs différents ordres peuvent différer si mélange *.

Concepts clés :
• Clé = empreinte complète des arguments.

Distinctions clés :
• Pas « même entrée ».

Fonctionnement :
• Deux misses si première fois chacun.

Exécution étape par étape :
• Deux stockages.

Ordre des opérations :
• Égalité structurelle des args.

Cas d'utilisation courants :
• Fonctions non commutatives.

Cas limites :
• Objets égaux mais pas identiques : __eq__ peut surprendre si hash incohérent.

Considérations de performance :
• Deux slots.

Exemples :
• add commutatif mais clés distinctes quand positions changent.

Remarques :
• Réponse : entrées séparées (1re option).`,

  2380: `lru_cache sur méthode d’instance

Débutant :
• Oui techniquement, mais self entre dans la clé : une entrée par instance.

Intermédiaire :
• Risque de retenir self via le cache et prolonger la vie de l’objet (fuite apparente).

Expert :
• Préférer cache sur fonction statique ou weakref selon besoin.

Concepts clés :
• Cache au niveau de la fonction, arguments incluent self.

Distinctions clés :
• Pas « interdit ».

Fonctionnement :
• Hash de self (par défaut id-based).

Exécution étape par étape :
• Instances différentes → caches logiquement séparés.

Ordre des opérations :
• GC peut être retardé.

Cas d'utilisation courants :
• Méthodes lourdes sur petit nombre d’instances longues vies.

Cas limites :
• Nombreuses instances courtes : cache inutilement gros.

Considérations de performance :
• Mémoire.

Exemples :
• Voir banque QCM.

Remarques :
• Réponse : oui mais self dans la clé + effet GC (1re option).`,

  2381: `@singledispatch sur g

Débutant :
• Dispatch générique sur le type du premier argument positionnel.

Intermédiaire :
• Les suivants ne participent pas au choix de variante par défaut.

Expert :
• Extensible via register sur types ou annotations.

Concepts clés :
• Polymorphisme ad hoc.

Distinctions clés :
• Pas « tous les args » ni « valeur de retour ».

Fonctionnement :
• Table de types → fonctions enregistrées.

Exécution étape par étape :
• Résolution MRO pour classes.

Ordre des opérations :
• Fallback vers impl de base.

Cas d'utilisation courants :
• Sérialisation, pretty-print.

Cas limites :
• Premier arg non typé comme prévu.

Considérations de performance :
• Lookup O(1) typique.

Exemples :
• Voir g(42) vs g("hello").

Remarques :
• Réponse : dispatch sur type du premier argument (1re option).`,

  2382: `g(42) avec singledispatch — seul int enregistré

Débutant :
• 42 est un int → l’implémentation enregistrée avec @f.register(int) retourne "int".

Intermédiaire :
• isinstance(42, int) est vrai ; la fonction de base marquée @singledispatch sert de repli pour les types non enregistrés.

Expert :
• bool est une sous-classe de int : sans branche bool dédiée, True/False suivent souvent la branche int.

Concepts clés :
• Routage par type au moment de l’appel.

Distinctions clés :
• Pas le repli "other" ici, car int est bien enregistré.

Fonctionnement :
• singledispatch résout le type du premier argument positionnel.

Exécution étape par étape :
• type(42) est int → dispatch vers la fonction enregistrée pour int.

Ordre des opérations :
• Les implémentations enregistrées sont consultées avant la fonction par défaut.

Cas d'utilisation courants :
• Surcharge ad hoc par type (sérialisation, rendu).

Cas limites :
• Premier argument seul pilote le choix ; les autres ne participent pas au dispatch par défaut.

Considérations de performance :
• Résolution typiquement en temps constant.

Exemples :
• Avec seulement int enregistré, une str utilisera la base → "other" (voir question suivante).

Remarques :
• Réponse : "int" (1re option).`,

  2383: `g("hello") — même décorateur, int enregistré, str non enregistré

Débutant :
• type("hello") est str ; aucune implémentation enregistrée pour str → Python utilise la fonction par défaut décorée par @singledispatch, qui retourne "other".

Intermédiaire :
• Seul @f.register(int) a été ajouté ; la base f(x): return "other" reste le repli.

Expert :
• Pour gérer str, il faudrait @f.register(str) ou une autre stratégie (singledispatchmethod sur les méthodes, etc.).

Concepts clés :
• Repli (fallback) vers l’implémentation de base.

Distinctions clés :
• Ce n’est pas "int" ; ce n’est pas une erreur tant que la base gère le cas.

Fonctionnement :
• Recherche d’un enregistrement pour str → échec → appel de la fonction d’origine.

Exécution étape par étape :
• Dispatch échoue pour str → exécution du corps return "other".

Ordre des opérations :
• Enregistrements spécifiques d’abord, puis défaut.

Cas d'utilisation courants :
• Commencer par un cas générique puis enregistrer des types au fil du temps.

Cas limites :
• Sous-types : la résolution utilise l’MRO des classes pour le dispatch orienté objet.

Considérations de performance :
• N/A.

Exemples :
• Ajouter @f.register(str) ferait retourner une chaîne dédiée pour "hello".

Remarques :
• Réponse : "other" (1re option).`,

  2384: `@total_ordering — minimum requis

Débutant :
• Il faut __eq__ et au moins une des comparaisons riches (__lt__, __le__, __gt__, __ge__).

Intermédiaire :
• Le décorateur synthétise les autres méthodes manquantes.

Expert :
• Cohérence logique à la charge du développeur (éviter contradictions).

Concepts clés :
• Réduction de boilerplate.

Distinctions clés :
• Pas seulement __lt__ sans __eq__.

Fonctionnement :
• Génération de méthodes dérivées.

Exécution étape par étape :
• Appels croisés entre opérateurs.

Ordre des opérations :
• Égalité testée via __eq__.

Cas d'utilisation courants :
• Classes ordonnables simples.

Cas limites :
• NaN-like patterns.

Considérations de performance :
• Chaînage peut multiplier les appels.

Exemples :
• Voir banque QCM.

Remarques :
• Réponse : __eq__ et une comparaison riche (1re option).`,

  2385: `operator.add(3, 4)

Débutant :
• Fonction équivalente à 3+4 = 7.

Intermédiaire :
• Utile avec reduce, map, higher-order.

Expert :
• add sur types custom si __add__ défini.

Concepts clés :
• Opérateur comme callable.

Distinctions clés :
• Pas mul.

Fonctionnement :
• Dispatch vers __add__.

Exécution étape par étape :
• Un appel.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• reduce(operator.add, ...).

Cas limites :
• Types incompatibles TypeError.

Considérations de performance :
• Niveau C pour int.

Exemples :
• Voir banque.

Remarques :
• Réponse : 7.`,

  2386: `operator.mul(3, 4)

Débutant :
• 3*4 = 12.

Intermédiaire :
• Symétrique à add pour reduce produit.

Expert :
• Peut surcharger sur numpy scalaires via __array_ufunc__ indirect.

Concepts clés :
• Multiplication binaire.

Distinctions clés :
• Pas 7.

Fonctionnement :
• __mul__.

Exécution étape par étape :
• Un appel.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Voir 2352.

Cas limites :
• str * int dupliqué (autre sens).

Considérations de performance :
• N/A.

Exemples :
• mul(2,5)=10.

Remarques :
• Réponse : 12.`,

  2387: `itemgetter(1)([10, 20, 30])

Débutant :
• Index 1 → 20.

Intermédiaire :
• itemgetter retourne une fonction callable réutilisable.

Expert :
• Plus rapide que lambda x: x[1] dans certains micro-benchmarks.

Concepts clés :
• Extraction par index.

Distinctions clés :
• Pas 10 ni 30.

Fonctionnement :
• __getitem__ sous-jacent.

Exécution étape par étape :
• Un lookup.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• key=itemgetter(1) dans sorted.

Cas limites :
• Index hors bornes IndexError.

Considérations de performance :
• Optimisé.

Exemples :
• Voir banque.

Remarques :
• Réponse : 20.`,

  2388: `itemgetter(0, 2)([10, 20, 30])

Débutant :
• Plusieurs indices → tuple (10, 30).

Intermédiaire :
• Ordre des indices conservé dans le tuple résultat.

Expert :
• Combine avec map pour découper colonnes.

Concepts clés :
• Projection multi-colonnes.

Distinctions clés :
• Pas liste [10,30] comme type de retour (tuple).

Fonctionnement :
• Boucle interne sur indices.

Exécution étape par étape :
• Deux accès.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• CSV tuples.

Cas limites :
• Index dupliqués autorisés : (10,10) si (0,0).

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : (10, 30) (1re option).`,

  2389: `attrgetter("x", "y")(obj)

Débutant :
• Construit une fonction qui lit obj.x et obj.y et renvoie un tuple des valeurs.

Intermédiaire :
• Support chemins "a.b" pour attributs imbriqués.

Expert :
• getattr en chaîne optimisé.

Concepts clés :
• Accès attribut par nom.

Distinctions clés :
• Pas appel de méthode seul.

Fonctionnement :
• getattr successifs.

Exécution étape par étape :
• Un tuple à la fin.

Ordre des opérations :
• Évaluation paresseuse au call, pas à la création.

Cas d'utilisation courants :
• sorted(..., key=attrgetter("name")).

Cas limites :
• Attribut manquant AttributeError au call.

Considérations de performance :
• Souvent plus rapide que lambda.

Exemples :
• Voir banque QCM.

Remarques :
• Réponse : récupère les attributs nommés (1re option).`,

  2390: `methodcaller("upper")("hello")

Débutant :
• Équivaut à "hello".upper() → "HELLO".

Intermédiaire :
• Peut inclure args supplémentaires pour des méthodes avec paramètres.

Expert :
• Utile avec map sur collections de str.

Concepts clés :
• Méthode comme callable différé.

Distinctions clés :
• Pas la liste de caractères.

Fonctionnement :
• getattr(obj, "upper")().

Exécution étape par étape :
• Lookup puis call.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• map(methodcaller("strip"), lines).

Cas limites :
• Méthode absente → erreur au call.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : "HELLO" (1re option).`,

  2391: `list(map(pow, [2,3,4], [3,2,1]))

Débutant :
• pow(2,3)=8, pow(3,2)=9, pow(4,1)=4 → [8,9,4].

Intermédiaire :
• map s’arrête au plus court itérable (zip strict implicite).

Expert :
• En 3.10+, zip(strict=True) séparé ; map reste non-strict.

Concepts clés :
• Itération parallèle.

Distinctions clés :
• Pas [9,8,4] ordre inversé.

Fonctionnement :
• Un pow par triple.

Exécution étape par étape :
• Trois itérations.

Ordre des opérations :
• Évaluation lazy jusqu’à list().

Cas d'utilisation courants :
• Vectorisation légère.

Cas limites :
• Longueurs différentes tronquent.

Considérations de performance :
• Lazy sauf list().

Exemples :
• Voir banque.

Remarques :
• Réponse : [8, 9, 4] (1re option).`,

  2392: `m = map(pow, [1,2], [3,4]) — type de m

Débutant :
• map retourne un itérateur map en Python 3, pas une liste.

Intermédiaire :
• Consommation unique sans copie intermédiaire.

Expert :
• __repr__ affiche map object.

Concepts clés :
• Lazy evaluation.

Distinctions clés :
• Pas list ni tuple.

Fonctionnement :
• Objet map.

Exécution étape par étape :
• Aucun pow tant que non itéré.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Pipelines mémoire bornée.

Cas limites :
• Itérateur épuisé.

Considérations de performance :
• O(1) création.

Exemples :
• list(m) matérialise.

Remarques :
• Réponse : objet map / itérateur (1re option).`,

  2393: `list(itertools.starmap(pow, [(2,3),(3,2),(4,1)]))

Débutant :
• Dépaquette chaque tuple en arguments de pow → mêmes résultats [8,9,4].

Intermédiaire :
• Diffère de map(pow, ...) quand les paires sont déjà groupées.

Expert :
• starmap est lazy aussi jusqu’à list().

Concepts clés :
• Étoile implicite.

Distinctions clés :
• Pas [6,6,4] erreur fréquente.

Fonctionnement :
• pow(*pair) pour chaque pair.

Exécution étape par étape :
• Trois appels.

Ordre des opérations :
• Ordre de la liste d’entrées.

Cas d'utilisation courants :
• Données row-oriented.

Cas limites :
• Tuple trop long → TypeError.

Considérations de performance :
• Comparable à map zip.

Exemples :
• Voir banque.

Remarques :
• Réponse : [8, 9, 4] (1re option).`,

  2394: `def f(): return 1
g = f; f = None; type(g)

Débutant :
• g référence encore la fonction ; f=None ne change pas le type de g → function.

Intermédiaire :
• La cellule f est réassignée, pas l’objet fonction sous-jacent.

Expert :
• GC peut collecter la fonction si plus aucune référence — ici g la garde.

Concepts clés :
• Objets de première classe.

Distinctions clés :
• Pas NoneType pour g.

Fonctionnement :
• g pointe vers le même code object.

Exécution étape par étape :
• type() introspection.

Ordre des opérations :
• Assignations séquentielles.

Cas d'utilisation courants :
• Alias, callbacks.

Cas limites :
• locals() vs globals() selon portée.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : function (1re option).`,

  2395: `def f(x): return x*2
g = f; del f; g(5)

Débutant :
• g toujours valide → 5*2 = 10.

Intermédiaire :
• del f supprime le nom du scope courant, pas la fonction si référencée ailleurs.

Expert :
• En interactif, nuances de __main__.

Concepts clés :
• Durée de vie par références.

Distinctions clés :
• Pas NameError pour g(5).

Fonctionnement :
• Namespace mapping.

Exécution étape par étape :
• Lookup g réussi.

Ordre des opérations :
• del avant appel.

Cas d'utilisation courants :
• Plugins reload.

Cas limites :
• del g ensuite → erreur.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 10.`,

  2396: `locals() dans une fonction

Débutant :
• Dictionnaire des variables locales du frame courant (vue souvent couplée à l’impl).

Intermédiaire :
• En fonction, modifications du dict peuvent ne pas affecter les noms locaux réels selon contexte (optimisations).

Expert :
• Pour lecture/debug principalement.

Concepts clés :
• Frame, namespace.

Distinctions clés :
• Pas globals() du module entier.

Fonctionnement :
• CPython construit un mapping.

Exécution étape par étape :
• Snapshot logique.

Ordre des opérations :
• Appel au point d’exécution.

Cas d'utilisation courants :
• Debug, format **locals().

Cas limites :
• Class body vs function body diffèrent.

Considérations de performance :
• Coût non nul.

Exemples :
• Voir banque.

Remarques :
• Réponse : dictionnaire des variables locales (1re option).`,

  2397: `globals() au niveau module

Débutant :
• Dict du module courant : noms globaux définis.

Intermédiaire :
• Même objet retourné tant qu’on est dans ce module.

Expert :
• Écriture dedans crée vraies globales dynamiques (à manier avec prudence).

Concepts clés :
• Table de symboles module.

Distinctions clés :
• Pas locals() de fonction interne par défaut.

Fonctionnement :
• Référence au dict __dict__ du module.

Exécution étape par étape :
• Lecture/écriture possible.

Ordre des opérations :
• Nom lookup global.

Cas d'utilisation courants :
• Registres dynamiques, tests.

Cas limites :
• Shadowing import.

Considérations de performance :
• Dict lookup.

Exemples :
• Voir banque.

Remarques :
• Réponse : dictionnaire des variables globales du module (1re option).`,

  2398: `def f(x): return x
f.__code__.co_varnames

Débutant :
• Tuple des noms locaux : au minimum ("x",) pour ce corps simple.

Intermédiaire :
• Peut inclure d’autres noms si internes (boucles, except).

Expert :
• Ordre peut inclure args puis locals.

Concepts clés :
• Code object introspection.

Distinctions clés :
• Pas ("return",).

Fonctionnement :
• Champ C du code object.

Exécution étape par étape :
• Lecture attribut.

Ordre des opérations :
• Immuable tuple.

Cas d'utilisation courants :
• Frameworks, debuggers.

Cas limites :
• Fonctions avec *args voir 2400.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : ("x",) (1re option).`,

  2399: `def f(x, y, z=3): return x+y+z
f.__code__.co_argcount

Débutant :
• Nombre de paramètres positionnels (sans *var ni kw-only après *) : ici x,y,z tous positionnels ou par défaut → 3.

Intermédiaire :
• co_kwonlyargcount sépare les args keyword-only en 3.x.

Expert :
• positional-or-keyword comptés jusqu’au premier *.

Concepts clés :
• Signature bytecode.

Distinctions clés :
• Pas 2.

Fonctionnement :
• Comptage dans le code object.

Exécution étape par étape :
• Inspect attribut.

Ordre des opérations :
• Compile time figé.

Cas d'utilisation courants :
• Libs d’inspection.

Cas limites :
• Voir *args change varnames pas argcount pareil.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 3.`,

  2400: `def f(*args): return len(args)
f.__code__.co_varnames

Débutant :
• Le nom du tuple variadique apparaît : ("args",) typiquement.

Intermédiaire :
• co_argcount peut être 0 pour *args seul.

Expert :
• Ordre : args formels puis locals.

Concepts clés :
• Empaquetage des positionnels restants.

Distinctions clés :
• Pas ("*args",) littéral avec astérisque dans le tuple.

Fonctionnement :
• Symbole interne args.

Exécution étape par étape :
• Tuple lié à args.

Ordre des opérations :
• Premier paramètre est le tuple.

Cas d'utilisation courants :
• Wrappers génériques.

Cas limites :
• **kwargs ajoute un nom supplémentaire.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : ("args",) (1re option).`,
};
