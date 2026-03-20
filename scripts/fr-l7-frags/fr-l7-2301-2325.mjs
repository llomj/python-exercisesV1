/** Level 7 FR 2301–2325 — level7_expert_a.ts Q1–25 (décorateurs) */
export default {
  2301: `Qu’est-ce qu’un décorateur en Python ?

Débutant :
• Un callable (souvent une fonction) qui reçoit une autre fonction ou une classe et renvoie un objet remplaçant le nom décoré — en pratique un wrapper qui peut appeler l’original.

Intermédiaire :
• Ce n’est ni une boucle, ni une simple variable de nom : c’est du sucre syntaxique plus tard traduit en réaffectation.

Expert :
• Les décorateurs built-in (property, staticmethod, etc.) s’appuient sur le protocole descripteur sous le capot.

Concepts clés :
• Fonction d’ordre supérieur, pattern proxy / wrapper.

Distinctions clés :
• Diffère d’une sous-classe qui hérite pour étendre.

Fonctionnement :
• À la définition : nom = décorateur(nom_original).

Exécution étape par étape :
• Création de l’objet fonction, passage au décorateur, substitution du binding.

Ordre des opérations :
• L’appel utilisateur cible ensuite le wrapper retourné.

Cas d'utilisation courants :
• Journalisation, contrôle d’accès, validation, mesure du temps.

Cas limites :
• Un décorateur mal écrit qui n’appelle jamais l’original casse le contrat attendu.

Considérations de performance :
• Chaque couche ajoute un saut de fonction ; acceptable sauf hot path extrême.

Exemples :
• Voir Q2–Q3 pour double_result et sucre @.

Remarques :
• Réponse : une fonction qui prend une fonction et renvoie une version modifiée (1re option).`,

  2302: `@my_decorator au-dessus de def func — équivalent

Débutant :
• Après def, Python exécute func = my_decorator(func) : le nom pointe vers la valeur de retour du décorateur.

Intermédiaire :
• PEP 318 ; purement syntaxique, même sémantique qu’une assignation explicite.

Expert :
• Plusieurs @ se composent comme des appels imbriqués (voir Q50).

Concepts clés :
• Moment de la décoration (définition / import du module).

Distinctions clés :
• Pas my_decorator = func(...).

Fonctionnement :
• Le compilateur émet un appel au décorateur juste après création de la fonction.

Exécution étape par étape :
• Objet fonction créé, puis réassignation du nom.

Ordre des opérations :
• De bas en haut pour empiler plusieurs décorateurs.

Cas d'utilisation courants :
• Lisibilité : l’intention au-dessus de la signature.

Cas limites :
• Effets de bord lourds dans le décorateur au import.

Considérations de performance :
• Coût une fois à la définition pour la partie « décoration ».

Exemples :
• Comparer version avec et sans @.

Remarques :
• Réponse : func = my_decorator(func) (1re option).`,

  2303: `double_result sur add — add(3, 4)

Débutant :
• add devient wrapper ; f(3,4) vaut 7 puis return 7*2 → 14.

Intermédiaire :
• *a propage les arguments positionnels vers la fonction d’origine.

Expert :
• Pour les types non numériques, doubler peut échouer ou surprendre (surcharge *).

Concepts clés :
• Transformation du résultat, pas des arguments ici.

Distinctions clés :
• Pas 7 ni 10.

Fonctionnement :
• Un seul niveau wrapper dans cet exemple.

Exécution étape par étape :
• Appel wrapper → add originale → multiplication.

Ordre des opérations :
• Évaluation des args avant f(*a).

Cas d'utilisation courants :
• Multiplicateur, normalisation de sortie.

Cas limites :
• return None → doublement peut TypeError selon contexte.

Considérations de performance :
• Un appel indirect de plus.

Exemples :
• add(1,1) → 4.

Remarques :
• Réponse : 14.`,

  2304: `uppercase sur greet renvoyant "hello"

Débutant :
• wrapper appelle f() puis .upper() sur la chaîne → "HELLO".

Intermédiaire :
• greet sans parenthèses supplémentaires : le wrapper encapsule l’appel sans arguments.

Expert :
• Si f() ne renvoyait pas str, .upper() lèverait une erreur.

Concepts clés :
• Post-traitement de la valeur de retour.

Distinctions clés :
• Pas "hello" ni title case.

Fonctionnement :
• Chaînage str.upper après l’appel interne.

Exécution étape par étape :
• greet() → "hello" → .upper().

Ordre des opérations :
• f() d’abord, puis méthode sur le résultat.

Cas d'utilisation courants :
• Normalisation de texte, formatage API.

Cas limites :
• Unicode et locales : .upper() suit les règles Unicode.

Considérations de performance :
• Négligeable.

Exemples :
• Chaîne vide → "".

Remarques :
• Réponse : "HELLO" (1re option).`,

  2305: `Décorateur log avec print avant f(*a)

Débutant :
• print avec f.__name__ s’exécute avant return f(*a) : le nom apparaît avant le corps de la fonction décorée.

Intermédiaire :
• __name__ sur le wrapper sans @wraps serait "wrapper" — ici le print utilise f.__name__ donc le nom de l’original.

Expert :
• En prod, préférer logging et éviter I/O synchrone dans hot paths.

Concepts clés :
• Préfixe « avant appel », traçage.

Distinctions clés :
• Pas après seul, pas blocage total.

Fonctionnement :
• Ordre séquentiel dans le wrapper.

Exécution étape par étape :
• print puis évaluation de f(*a).

Ordre des opérations :
• Arguments évalués avant l’entrée dans f si print après — ici print d’abord sans args.

Cas d'utilisation courants :
• Debug, audit.

Cas limites :
• f lève : le print a déjà eu lieu.

Considérations de performance :
• print coûteux en boucle.

Exemples :
• Voir banque add(3,4).

Remarques :
• Réponse : affiche le nom avant chaque appel (1re option).`,

  2306: `@decorator préserve-t-il le comportement ?

Débutant :
• Un décorateur typique appelle quand même la fonction d’origine et ne fait qu’ajouter avant/après ; le cœur est préservé.

Intermédiaire :
• Open/closed : extension sans modifier le source de la cible.

Expert :
• Exceptions : décorateurs qui remplacent entièrement ou court-circuitent.

Concepts clés :
• Wrapper comme mandataire.

Distinctions clés :
• Pas « remplace et supprime » par défaut.

Fonctionnement :
• return f(...) ou variante après hooks.

Exécution étape par étape :
• Contrôle entrant/sortant autour de l’appel.

Ordre des opérations :
• Hooks puis cœur sauf si validation échoue.

Cas d'utilisation courants :
• Cache, retry, auth.

Cas limites :
• Modifier les args change le comportement observé.

Considérations de performance :
• Dépend du coût des hooks.

Exemples :
• timer qui retourne encore 42.

Remarques :
• Réponse : oui, avec comportement ajouté autour (1re option).`,

  2307: `Sans @wraps — f.__name__ après @dec avec wrapper w

Débutant :
• Le nom f pointe vers w ; __name__ reflète la fonction réelle → "w".

Intermédiaire :
• __doc__, __qualname__ etc. peuvent aussi être trompeurs sans update_wrapper.

Expert :
• inspect.signature peut refléter le wrapper.

Concepts clés :
• Métadonnées perdues.

Distinctions clés :
• Pas "f".

Fonctionnement :
• Attributs sur l’objet fonction effectivement lié.

Exécution étape par étape :
• Lecture __name__ sur le wrapper.

Ordre des opérations :
• Après décoration.

Cas d'utilisation courants :
• Rappel d’utiliser functools.wraps.

Cas limites :
• Décoration multiple : nom externe selon couche.

Considérations de performance :
• N/A.

Exemples :
• Voir Q8 pour correction.

Remarques :
• Réponse : "w" (1re option).`,

  2308: `Avec @wraps(f) sur w — f.__name__

Débutant :
• wraps copie __name__, __doc__, etc. depuis l’original vers w → "f".

Intermédiaire :
• __wrapped__ pointe vers la fonction d’origine.

Expert :
• update_wrapper sous-jacent, flags WRAPPER_ASSIGNMENTS.

Concepts clés :
• Introspection et traces lisibles.

Distinctions clés :
• Pas "w".

Fonctionnement :
• Assignation d’attributs sur le wrapper.

Exécution étape par étape :
• Après return w, le nom f référence w enrichi.

Ordre des opérations :
• @wraps appliqué pendant la définition de w.

Cas d'utilisation courants :
• Décorateurs de libs, Sphinx, mypy.

Cas limites :
• Attributs dynamiques non copiés par défaut.

Considérations de performance :
• Négligeable.

Exemples :
• help(f) retrouve la doc utile.

Remarques :
• Réponse : "f" (1re option).`,

  2309: `Rôle de @functools.wraps

Débutant :
• Préserve __name__, __doc__, __module__, __qualname__, __dict__, et définit __wrapped__.

Intermédiaire :
• N’accélère pas l’exécution ni n’empêche la modification du corps.

Expert :
• inspect.unwrap pour dérouler les couches.

Concepts clés :
• Métadonnées pour outils et humains.

Distinctions clés :
• Pas « appel automatique » de f.

Fonctionnement :
• update_wrapper(wrapper, f).

Exécution étape par étape :
• Lors de la construction du décorateur.

Ordre des opérations :
• Avant return du wrapper au parent.

Cas d'utilisation courants :
• Tout décorateur public.

Cas limites :
• Wrappers génériques très minces : parfois besoin d’attributs custom.

Considérations de performance :
• Une fois à la création.

Exemples :
• Voir Q7–Q8.

Remarques :
• Réponse : préserve __name__, __doc__ et autres attributs (1re option).`,

  2310: `Plusieurs décorateurs sur une même fonction

Débutant :
• Oui ; composition : f = dec1(dec2(f)) quand @dec1 est au-dessus de @dec2 au-dessus de def.

Intermédiaire :
• L’ordre vertical compte : le plus proche du def s’applique en premier.

Expert :
• Analogie avec composition mathématique dec1 ∘ dec2.

Concepts clés :
• Chaînage de wrappers.

Distinctions clés :
• Pas « un seul décorateur » ni ordre indifférent.

Fonctionnement :
• Appels successifs de callables décorateurs.

Exécution étape par étape :
• Création f, puis dec2(f), puis dec1(résultat).

Ordre des opérations :
• Bas puis haut dans le fichier.

Cas d'utilisation courants :
• auth + log + route.

Cas limites :
• Ordre inverse change le comportement observable.

Considérations de performance :
• N couches = N sauts.

Exemples :
• Voir Q50.

Remarques :
• Réponse : oui, func = dec1(dec2(func)) (1re option).`,

  2311: `@dec1 puis @dec2 puis def f — qui s’applique en premier ?

Débutant :
• dec2 est collé à def : il enveloppe f en premier ; dec1 enveloppe le résultat.

Intermédiaire :
• Équivalent f = dec1(dec2(f)).

Expert :
• Tests d’intégration doivent figer l’ordre des décorateurs.

Concepts clés :
• « Innermost » = plus proche du def.

Distinctions clés :
• Pas dec1 d’abord.

Fonctionnement :
• Deux assignations successives simulées.

Exécution étape par étape :
• temp = dec2(f_orig) ; f = dec1(temp).

Ordre des opérations :
• Même règle pour classes.

Cas d'utilisation courants :
• Flask/FastAPI, pytest markers.

Cas limites :
• Décoration conditionnelle : ordre dynamique rare.

Considérations de performance :
• N/A.

Exemples :
• bold(italic(greet)).

Remarques :
• Réponse : dec2 d’abord (1re option).`,

  2312: `Usine repeat(n) — @repeat(3) sur greet → greet()

Débutant :
• repeat(3) renvoie un décorateur ; wrapper exécute f trois fois et collecte les résultats dans une liste de "hi".

Intermédiaire :
• Trois niveaux : usine, décorateur, wrapper.

Expert :
• Généralisable à async avec précaution.

Concepts clés :
• Décorateur paramétré.

Distinctions clés :
• Pas concaténation "hihihi" d’un seul str.

Fonctionnement :
• [f(*a) for _ in range(n)].

Exécution étape par étape :
• Trois appels identiques si pas d’effet de bord.

Ordre des opérations :
• n capturé en closure.

Cas d'utilisation courants :
• Retry léger, échantillonnage pédagogique.

Cas limites :
• Effets de bord : trois exécutions réelles.

Considérations de performance :
• Coût linéaire en n.

Exemples :
• n=5 liste de cinq "x".

Remarques :
• Réponse : ["hi","hi","hi"] (1re option).`,

  2313: `Décorateur avec arguments — combien de niveaux de imbrication ?

Débutant :
• Trois : usine (paramètres du décorateur), fonction décorateur (reçoit f), wrapper (remplace f).

Intermédiaire :
• Sans arguments, deux niveaux suffisent.

Expert :
• Closures successives lient n, f, puis args d’appel.

Concepts clés :
• Fabrique de décorateurs.

Distinctions clés :
• Pas 2 seuls pour la forme paramétrée classique.

Fonctionnement :
• repeat(n) → decorator → wrapper.

Exécution étape par étape :
• repeat(3) appelé avant decorator(greet).

Ordre des opérations :
• Évaluation de repeat(3) à la décoration.

Cas d'utilisation courants :
• rate_limit(max_calls), retry(times).

Cas limites :
• Usines avec état partagé par erreur.

Considérations de performance :
• Négligeable à la création.

Exemples :
• Voir Q12.

Remarques :
• Réponse : 3 (usine, décorateur, wrapper) (1re option).`,

  2314: `timer avec time.time() avant f(*a)

Débutant :
• Pattern chronométrage / profilage : mesure autour de l’appel (ici start enregistré, résultat renvoyé tel quel).

Intermédiaire :
• Version complète imprimerait elapsed ; le squelette illustre l’idée.

Expert :
• time.perf_counter() pour micro-benchmarks.

Concepts clés :
• Hook avant/après pour observabilité.

Distinctions clés :
• Pas cache ni auth.

Fonctionnement :
• start puis f puis éventuellement calcul durée.

Exécution étape par étape :
• Entrée wrapper → horodatage → appel.

Ordre des opérations :
• f terminé avant return result.

Cas d'utilisation courants :
• Optimisation, APM.

Cas limites :
• Threads, GC : bruit de mesure.

Considérations de performance :
• time.time() lui-même peu coûteux.

Exemples :
• sleep(1) ~1s.

Remarques :
• Réponse : décorateur de timing / profilage (1re option).`,

  2315: `Un décorateur peut-il être une classe ?

Débutant :
• Oui : toute chose callable convient ; __init__ reçoit souvent f, __call__ sert de wrapper.

Intermédiaire :
• Pas besoin d’hériter d’une classe Decorator magique.

Expert :
• functools.wraps peut décorer méthodes __call__.

Concepts clés :
• Callable instances.

Distinctions clés :
• Pas réservé aux fonctions seules.

Fonctionnement :
• @C → f = C(f) puis appels f(...) → __call__.

Exécution étape par étape :
• Construction instance à la décoration.

Ordre des opérations :
• self.func stocké.

Cas d'utilisation courants :
• État entre appels (compteurs).

Cas limites :
• Méthodes vs fonctions : liaison self.

Considérations de performance :
• Légère surcharge vs fonction pure.

Exemples :
• CountCalls.

Remarques :
• Réponse : oui, classe avec __call__ (1re option).`,

  2316: `class Dec __init__ stocke f, __call__ délègue — f(5)

Débutant :
• f devient instance Dec ; f(5) appelle __call__ qui renvoie self.f(5) → 5.

Intermédiaire :
• type(f) est Dec, pas function.

Expert :
• Attribut .f expose l’original.

Concepts clés :
• Décoration par instance callable.

Distinctions clés :
• Pas erreur.

Fonctionnement :
• Descripteur __call__ sur instance.

Exécution étape par étape :
• 5 passé à __call__ puis à self.f.

Ordre des opérations :
• Délégation simple.

Cas d'utilisation courants :
• Middleware objet.

Cas limites :
• pickle, pickling d’instances décorées.

Considérations de performance :
• Un indirection.

Exemples :
• Étendre __call__ pour logs.

Remarques :
• Réponse : 5 (1re option).`,

  2317: `validate_positive sur sqrt — sqrt(4)

Débutant :
• 4 ≥ 0 : pas de raise ; sqrt retourne 4**0.5 = 2.0.

Intermédiaire :
• float même pour carré parfait en **0.5.

Expert :
• math.sqrt lève ValueError sur négatif sans ce wrapper aussi.

Concepts clés :
• Garde préalable (guard clause).

Distinctions clés :
• Pas ValueError ici.

Fonctionnement :
• if x < 0: raise avant f(x).

Exécution étape par étape :
• w(4) → check → f(4).

Ordre des opérations :
• Validation puis corps.

Cas d'utilisation courants :
• API, parsing.

Cas limites :
• x non numérique : autre exception.

Considérations de performance :
• Test O(1).

Exemples :
• sqrt(0) → 0.0.

Remarques :
• Réponse : 2.0 (1re option).`,

  2318: `Même validate_positive — sqrt(-1)

Débutant :
• -1 < 0 : le wrapper lève ValueError avant d’appeler sqrt.

Intermédiaire :
• Pas de complexe ici (contrairement à cmath).

Expert :
• Message peut différer ; type ValueError explicite du décorateur.

Concepts clés :
• Court-circuit sur entrée invalide.

Distinctions clés :
• Pas retour None.

Fonctionnement :
• raise dans branche if.

Exécution étape par étape :
• Entrée w(-1) → condition vraie → exception.

Ordre des opérations :
• Aucun appel à f.

Cas d'utilisation courants :
• Invariants métier.

Cas limites :
• Comparer avec assert vs validation.

Considérations de performance :
• N/A.

Exemples :
• sqrt(4) ok, -1 non.

Remarques :
• Réponse : ValueError (1re option).`,

  2319: `Décorateurs sur les classes ?

Débutant :
• Oui : MyClass = decorator(MyClass) ; le callable reçoit l’objet classe.

Intermédiaire :
• @dataclass, total_ordering en exemples stdlib.

Expert :
• Métaclasses sont un autre mécanisme plus bas niveau.

Concepts clés :
• Décoration de définition de classe.

Distinctions clés :
• Pas limité à @dataclass seul.

Fonctionnement :
• Après construction de la classe par le corps.

Exécution étape par étape :
• Classe créée puis passée au décorateur.

Ordre des opérations :
• Peut ajouter méthodes sur le dict de la classe.

Cas d'utilisation courants :
• Enregistrement, ORM, API.

Cas limites :
• Remplacer par une sous-classe ou fonction : cas rares.

Considérations de performance :
• Import-time work.

Exemples :
• add_repr du Q43.

Remarques :
• Réponse : oui, aussi les classes (1re option).`,

  2320: `@staticmethod et @classmethod sont des exemples de

Débutant :
• Décorateurs intégrés (built-in) fournis par le langage, implémentés via descripteurs.

Intermédiaire :
• Ils transforment la fonction en descripteur staticmethod/classmethod sur le dictionnaire de classe.

Expert :
• property, abstractmethod aussi dans la même famille « core ».

Concepts clés :
• Liaison self/cls contrôlée.

Distinctions clés :
• Pas « méthodes de classe uniquement » comme définition.

Fonctionnement :
• Descriptor.__get__ renvoie une fonction liée ou non.

Exécution étape par étape :
• Lors de l’accès attribut sur classe ou instance.

Ordre des opérations :
• Après création de la fonction brute.

Cas d'utilisation courants :
• Fabriques cls, utilitaires sans self.

Cas limites :
• Héritage : cls réel avec classmethod.

Considérations de performance :
• Très optimisé en C.

Exemples :
• Voir Q26–Q28.

Remarques :
• Réponse : décorateurs built-in (1re option).`,

  2321: `count_calls — que suit-on ?

Débutant :
• f.calls s’incrémente à chaque passage par le wrapper : nombre d’appels.

Intermédiaire :
• Attribut sur l’objet fonction original, accessible via closure.

Expert :
• Pour exposer hello.calls sur le nom décoré, dupliquer/miroiter l’attribut sur le wrapper.

Concepts clés :
• Compteur mutable partagé avec l’original.

Distinctions clés :
• Pas durée ni liste des retours.

Fonctionnement :
• += 1 avant return f(*a,**kw).

Exécution étape par étape :
• Chaque appel utilisateur incrémente.

Ordre des opérations :
• Incrément puis délégation.

Cas d'utilisation courants :
• Quotas, tests.

Cas limites :
• Concurrence : besoin de verrous si threads.

Considérations de performance :
• Incrément négligeable.

Exemples :
• Trois appels → 3.

Remarques :
• Réponse : nombre d’appels (1re option).`,

  2322: `singleton(cls) avec dict instances — pattern

Débutant :
• Une seule instance par classe clé : pattern Singleton.

Intermédiaire :
• get_instance remplace la classe dans l’usage montré ; premier appel construit, suivants réutilisent.

Expert :
• Tests et DI préfèrent souvent explicite plutôt que singleton global.

Concepts clés :
• Cache {cls: instance}.

Distinctions clés :
• Pas Factory générique ni Observer.

Fonctionnement :
• if cls not in instances: créer.

Exécution étape par étape :
• Appels répétés renvoient même id logique.

Ordre des opérations :
• Thread-safety non garanti ici.

Cas d'utilisation courants :
• Config, pool unique.

Cas limites :
• Arguments différents au 2e constructeur ignorés souvent.

Considérations de performance :
• Lookup dict O(1).

Exemples :
• db1 is db2 True.

Remarques :
• Réponse : Singleton (1re option).`,

  2323: `cache avec memo dict sur tuple d’args — pattern

Débutant :
• Mémoïsation : résultats stockés par clé d’arguments, hits suivants sans recalcul.

Intermédiaire :
• functools.lru_cache pour version prod (taille, thread-safety partielle selon version).

Expert :
• Clés doivent être hashables ; kwargs non gérés dans ce snippet simplifié.

Concepts clés :
• Table f(args)→result.

Distinctions clés :
• Pas retry.

Fonctionnement :
• if a not in memo: calcul.

Exécution étape par étape :
• Premier fib(n) coûteux puis instantané.

Ordre des opérations :
• Fermeture sur memo.

Cas d'utilisation courants :
• Fibonacci, DP, parsers.

Cas limites :
• Mémoire non bornée.

Considérations de performance :
• Gain énorme sur arbres récursifs.

Exemples :
• Voir banque fib(100).

Remarques :
• Réponse : mémoïsation / cache (1re option).`,

  2324: `@property fait quoi ?

Débutant :
• Transforme une méthode en accès attribut lecture (getter) ; pas de () à l’usage.

Intermédiaire :
• Peut compléter avec setter/deleter pour écriture contrôlée.

Expert :
• Implémentation via descripteur property en C.

Concepts clés :
• Calcul à la lecture, encapsulation.

Distinctions clés :
• Pas « rend privé » magiquement.

Fonctionnement :
• __get__ appelle la fonction utilisateur.

Exécution étape par étape :
• Chaque accès réévalue sauf cache externe.

Ordre des opérations :
• instance.x déclenche le getter.

Cas d'utilisation courants :
• area, computed fields.

Cas limites :
• Oublier setter → AttributeError en assignation.

Considérations de performance :
• Recalcul si corps lourd.

Exemples :
• Voir Q25.

Remarques :
• Réponse : méthode accessible comme attribut en lecture (1re option).`,

  2325: `class C avec @property def x return 42 — C().x

Débutant :
• Accès attribut déclenche le getter → 42 sans parenthèses.

Intermédiaire :
• C().x() serait invalide car 42 n’est pas callable.

Expert :
• Sur la classe, C.x est objet property.

Concepts clés :
• Descripteur sur le type.

Distinctions clés :
• Pas bound method visible à l’utilisateur.

Fonctionnement :
• data descriptor protocol.

Exécution étape par étape :
• Instance créée, __get__ invoqué.

Ordre des opérations :
• Pas d’appel explicite de méthode par l’utilisateur.

Cas d'utilisation courants :
• API fluides.

Cas limites :
• Héritage et override de property.

Considérations de performance :
• Un saut de fonction par accès.

Exemples :
• Voir banque.

Remarques :
• Réponse : 42 (1re option).`,
};
