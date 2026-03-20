/** Level 8 FR 2551–2575 — level8_intermediate_b.ts Q51–75 (__getattr__/__getattribute__/__setattr__/__delattr__, __dict__, __slots__, composition, __new__, proxy, __del__, copies) */
export default {
  2551: `C().xyz avec __getattr__ renvoyant f"no {name}"

Débutant :
• xyz n’existe pas sur l’instance ni sur la classe ; Python appelle __getattr__('xyz').

Intermédiaire :
• Si l’attribut existait dans __dict__ ou la classe, __getattr__ ne serait pas invoqué.

Expert :
• __getattr__ peut lever AttributeError pour refuser un nom au lieu de fabriquer une valeur.

Concepts clés :
• __getattr__(self, name) est le repli après échec de la recherche normale.

Distinctions clés :
• Pas __getattribute__ ici : celui-ci intercepterait tout accès.

Fonctionnement :
• Recherche instance → classe → bases ; échec → hook utilisateur.

Exécution étape par étape :
• C() ; accès .xyz ; chaîne 'no xyz' retournée.

Ordre des opérations :
• Création puis résolution d’attribut.

Cas d'utilisation courants :
• Valeurs par défaut paresseuses, proxies, API dynamiques.

Cas limites :
• name est toujours une str ; fautes de typo silencieuses possibles.

Considérations de performance :
• Coût d’un appel Python supplémentaire par attribut manquant.

Exemples :
• c.hello → 'no hello'.

Remarques :
• Réponse : la chaîne "no xyz" (1re option).`,

  2552: `Quand __getattr__ est-il appelé ?

Débutant :
• Seulement quand la recherche d’attribut normale échoue.

Intermédiaire :
• Un self.x présent dans __dict__ est trouvé avant tout __getattr__.

Expert :
• Si __getattribute__ lève AttributeError, le protocole peut encore tenter __getattr__.

Concepts clés :
• Ordre : __getattribute__ (défaut CPython) puis éventuellement __getattr__.

Distinctions clés :
• Ce n’est ni « à chaque accès » ni réservé à __init__.

Fonctionnement :
• Le moteur d’attributs de typeobject.c / logique équivalente en Python pur.

Exécution étape par étape :
• Lookup standard ; si rien trouvé et hook défini → __getattr__.

Ordre des opérations :
• Pas d’appel à __getattr__ si le nom est résolu plus tôt.

Cas d'utilisation courants :
• Attributs calculés à la demande, délégation.

Cas limites :
• Boucles infinies si __getattr__ touche d’autres attributs absents sans garde.

Considérations de performance :
• Éviter __getattr__ sur des noms très fréquents en hot path.

Exemples :
• c.x défini → pas de fallback ; c.y absent → fallback.

Remarques :
• Réponse : quand la recherche normale échoue (1re option).`,

  2553: `__getattribute__ qui retourne toujours 42

Débutant :
• Chaque c.nom passe par __getattribute__ ; la méthode ignore name et renvoie 42.

Intermédiaire :
• Pour lire le vrai __dict__, il faudrait object.__getattribute__(self, name).

Expert :
• self.x dans __getattribute__ sans déléguer à object provoque récursion infinie.

Concepts clés :
• __getattribute__ s’exécute à chaque accès par pointage.

Distinctions clés :
• Diffère de __getattr__ (repli seulement).

Fonctionnement :
• Point d’entrée prioritaire du protocole d’accès aux attributs.

Exécution étape par étape :
• C().anything → __getattribute__(self, 'anything') → 42.

Ordre des opérations :
• Évaluation de l’instance puis de l’attribut.

Cas d'utilisation courants :
• Traçage, validation globale (rare en production brute).

Cas limites :
• Casser l’accès à __dict__ ou aux descripteurs si mal implémenté.

Considérations de performance :
• Surcharge sur chaque lecture ; très coûteux si lourd.

Exemples :
• c.x, c.y → tous 42 dans cet exercice.

Remarques :
• Réponse : 42 (1re option).`,

  2554: `__getattribute__ est invoqué :

Débutant :
• À chaque accès d’attribut sur l’instance.

Intermédiaire :
• __getattr__ ne sert qu’en secours après échec (souvent AttributeError du lookup par défaut).

Expert :
• Les descripteurs dans la classe sont atteints via le mécanisme déclenché depuis __getattribute__.

Concepts clés :
• Premier maillon : toujours __getattribute__ pour les instances usuelles.

Distinctions clés :
• Pas seulement attributs « privés » ni seulement méthodes.

Fonctionnement :
• object.__getattribute__ fait dict → type → data descriptors.

Exécution étape par étape :
• Dot → tp_getattro / équivalent Python.

Ordre des opérations :
• Lecture : instance puis mécanisme de résolution.

Cas d'utilisation courants :
• Logging fin, wrappers stricts.

Cas limites :
• Types implémentés en C peuvent avoir des chemins spéciaux pour membres slots.

Considérations de performance :
• Coût minimal par défaut ; surcharge si override Python.

Exemples :
• class C: def __getattribute__(self,n): print(n); return object.__getattribute__(self,n).

Remarques :
• Réponse : à chaque accès d’attribut (1re option).`,

  2555: `__setattr__ qui double la valeur assignée

Débutant :
• c.x = 5 appelle __setattr__('x', 5) qui stocke 10 via object.__setattr__.

Intermédiaire :
• self.x = val dans __setattr__ sans object.__setattr__ → récursion.

Expert :
• __init__ utilise aussi __setattr__ si surchargé : tout passage par le hook.

Concepts clés :
• __setattr__(self, name, value) intercepte toutes les affectations.

Distinctions clés :
• Pas la même chose que __setitem__ sur un mapping custom.

Fonctionnement :
• Affectation instance → type.__setattr__ ou override.

Exécution étape par étape :
• C() ; assignation x ; stockage interne x=10 ; lecture → 10.

Ordre des opérations :
• RHS évalué puis hook.

Cas d'utilisation courants :
• Validation, conversion d’unités, journaux de mutation.

Cas limites :
• Ordre d’init si plusieurs attributs interdépendants.

Considérations de performance :
• Un hook par assignation.

Exemples :
• c.y = 3 → 6 stocké.

Remarques :
• Réponse : 10 (1re option).`,

  2556: `del C().x et __delattr__

Débutant :
• del sur un attribut appelle __delattr__(self, 'x').

Intermédiaire :
• Ce n’est ni __setattr__ ni __getattr__ ni __init__.

Expert :
• Pour supprimer réellement, il faudrait object.__delattr__(self, name) dans le corps.

Concepts clés :
• __delattr__ est le pendant « suppression » de __setattr__.

Distinctions clés :
• del sur un nom de variable locale n’appelle pas __delattr__ d’instance.

Fonctionnement :
• Opcode DELETE_ATTR ou équivalent → méthode spéciale.

Exécution étape par étape :
• Construction C() ; del .x ; hook exécuté (ici print).

Ordre des opérations :
• Évaluation de la cible du del puis appel.

Cas d'utilisation courants :
• Attributs protégés, journalisation des suppressions.

Cas limites :
• Instance sans attribut : peut quand même entrer dans __delattr__ selon cas.

Considérations de performance :
• Négligeable hors I/O dans le hook.

Exemples :
• raise dans __delattr__ pour interdire.

Remarques :
• Réponse : __delattr__ (1re option).`,

  2557: `Stockage custom _data avec __setattr__ et __getattr__

Débutant :
• x n’est pas dans __dict__ de surface : __setattr__ met 42 dans _data['x'] ; lecture via __getattr__ lit _data.

Intermédiaire :
• Le cas name == '_data' utilise object.__setattr__ pour éviter récursion sur le conteneur.

Expert :
• __getattribute__ non surchargé : _data est trouvé normalement après création.

Concepts clés :
• Table d’hachage interne comme backing store d’attributs.

Distinctions clés :
• Diffère d’un simple objet avec self.x en __dict__ direct.

Fonctionnement :
• Assignation → branche else → _data[name]=val ; lecture → get.

Exécution étape par étape :
• __init__ pose _data ; c.x=42 ; c.x lit 42.

Ordre des opérations :
• __init__ déclenche déjà __setattr__ pour _data.

Cas d'utilisation courants :
• Enregistrements, schémas souples, ORM légers.

Cas limites :
• Oublier le cas _data → récursion ou corruption.

Considérations de performance :
• Dict lookup O(1) amorti.

Exemples :
• clé absente → 'missing' dans cet autre code de la banque.

Remarques :
• Réponse : 42 (1re option).`,

  2558: `c.__dict__ pour instance vide

Débutant :
• Sans attributs d’instance, __dict__ est {}.

Intermédiaire :
• Les attributs de classe ne vivent pas dans l’instance __dict__.

Expert :
• Avec __slots__ sans __dict__ dans slots, __dict__ peut être absent.

Concepts clés :
• __dict__ mappe noms d’attributs d’instance vers valeurs.

Distinctions clés :
• Pas None : un dict vide.

Fonctionnement :
• Allocation d’instance standard avec mapping mutable.

Exécution étape par étape :
• C() ; accès __dict__ ; {}.

Ordre des opérations :
• Après __new__ / avant assignations.

Cas d'utilisation courants :
• Introspection, sérialisation maison, debug.

Cas limites :
• Classes avec __slots__ seuls : pas de __dict__.

Considérations de performance :
• Petit overhead mémoire par instance dict-based.

Exemples :
• Après c.x=1, __dict__ contient 'x'.

Remarques :
• Réponse : {} (1re option).`,

  2559: `len(c.__dict__) après self.x et self.y

Débutant :
• Deux assignations dans __init__ → deux entrées dans __dict__.

Intermédiaire :
• Les méthodes ne comptent pas dans l’instance __dict__.

Expert :
• __slots__ changerait complètement le modèle de stockage.

Concepts clés :
• len sur le dict d’instance = nombre d’attributs d’instance actuels.

Distinctions clés :
• Pas len de la classe ni nombre de méthodes.

Fonctionnement :
• Chaque self.nom = … ajoute une clé.

Exécution étape par étape :
• C() exécute __init__ ; deux clés ; len 2.

Ordre des opérations :
• __init__ complet avant lecture de len.

Cas d'utilisation courants :
• Tests, inspection de DTO.

Cas limites :
• Attributs via __slots__ : pas de __dict__ à mesurer ainsi.

Considérations de performance :
• len(dict) O(1) en CPython.

Exemples :
• Ajouter c.z → len 3.

Remarques :
• Réponse : 2 (1re option).`,

  2560: `__slots__ = ['x','y'] et c.z = 2

Débutant :
• z n’est pas déclaré dans __slots__ → AttributeError à l’assignation.

Intermédiaire :
• x et y seraient acceptés ; z est interdit.

Expert :
• Ajouter '__dict__' dans __slots__ réintroduit un dict optionnel.

Concepts clés :
• Liste blanche des noms d’attributs d’instance.

Distinctions clés :
• Pas TypeError ici : AttributeError classique.

Fonctionnement :
• Descripteurs de slot sur la classe ; assignation contrôlée.

Exécution étape par étape :
• c.x=1 OK ; c.z=2 → erreur.

Ordre des opérations :
• Assignations séquentielles.

Cas d'utilisation courants :
• Structures nombreuses, économie mémoire.

Cas limites :
• Héritage multiple de classes slottées : règles de fusion des slots.

Considérations de performance :
• Accès attribut souvent plus rapide, empreinte réduite.

Exemples :
• Message 'C' object has no attribute 'z'.

Remarques :
• Réponse : AttributeError (1re option).`,

  2561: `hasattr(c, "__dict__") avec __slots__ = ['x']

Débutant :
• Pas de __dict__ par défaut → hasattr False.

Intermédiaire :
• On peut forcer '__dict__' dans le tuple __slots__ pour le rétablir.

Expert :
• hasattr interroge getattr sans exception ; ici pas d’attribut dict.

Concepts clés :
• __slots__ supprime le mapping dict par instance.

Distinctions clés :
• hasattr(..., '__class__') serait True ; ce n’est pas la question.

Fonctionnement :
• Structure interne compacte pour les membres slottés.

Exécution étape par étape :
• C() ; test __dict__ ; absent.

Ordre des opérations :
• Après création instance.

Cas d'utilisation courants :
• Millions d’objets légers.

Cas limites :
• Extension avec dict dans slots : hasattr True.

Considérations de performance :
• Gain net quand pas besoin de dict arbitraire.

Exemples :
• Comparer Normal() vs Slotted().

Remarques :
• Réponse : False (1re option).`,

  2562: `(c.x, c.y) avec slots déclarés

Débutant :
• x et y sont autorisés ; valeurs 1 et 2.

Intermédiaire :
• Lecture via descripteurs de données sur la classe.

Expert :
• Pas de __dict__ n’empêche pas les attributs listés.

Concepts clés :
• Slots déclarés = attributs normaux du point de vue lecture/écriture.

Distinctions clés :
• Pas (None, None) ni erreur si seulement x,y assignés.

Fonctionnement :
• Stockage dans mémoire fixe allouée pour l’instance.

Exécution étape par étape :
• c.x=1 ; c.y=2 ; tuple (1,2).

Ordre des opérations :
• Assignations puis agrégation tuple.

Cas d'utilisation courants :
• Points, enregistrements immuables logiques.

Cas limites :
• Oublier d’assigner un slot avant lecture → AttributeError.

Considérations de performance :
• Favorable en boucle serrée.

Exemples :
• print(c.x, c.y).

Remarques :
• Réponse : (1, 2) (1re option).`,

  2563: `Pourquoi utiliser __slots__ ?

Débutant :
• Réduire la mémoire et accélérer un peu l’accès aux attributs.

Intermédiaire :
• On renonce aux attributs dynamiques arbitraires sans __dict__ dédié.

Expert :
• Héritage + slots demande discipline (ordre, absence de dict dupliqué).

Concepts clés :
• Remplacer le dict d’instance par des emplacements fixes.

Distinctions clés :
• Ce n’est pas pour rendre les champs privés ni pour « activer l’héritage » à lui seul.

Fonctionnement :
• Descripteurs membroid sur type.

Exécution étape par étape :
• Définition classe → compilation des noms autorisés.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Graphes, flux de paquets, jeux.

Cas limites :
• Pickle et outils introspectifs peuvent nécessiter adjustments.

Considérations de performance :
• Gain mesurable sur grosses populations d’objets.

Exemples :
• Mesurer sys.getsizeof sur types slottés vs normaux.

Remarques :
• Réponse : économie mémoire et accès plus rapide (1re option).`,

  2564: `c.__class__ après C()

Débutant :
• Renvoie l’objet classe C lui-même (repr <class '__main__.C'> typiquement).

Intermédiaire :
• type(c) is c.__class__ en général.

Expert :
• sous-classer type (méta) change ce que __class__ peut refléter sur des cas avancés.

Concepts clés :
• Lien instance → type créateur.

Distinctions clés :
• Pas la chaîne 'C' seule ni le builtin type générique abstrait.

Fonctionnement :
• Champ lu depuis l’objet via le modèle d’objet Python.

Exécution étape par étape :
• C() ; attribut __class__ ; objet type.

Ordre des opérations :
• Après __new__.

Cas d'utilisation courants :
• Fabriques : obj.__class__() pour dupliquer le type.

Cas limites :
• Proxy et wrappers peuvent masquer __class__.

Considérations de performance :
• Lecture O(1).

Exemples :
• c.__class__() nouvelle instance.

Remarques :
• Réponse : l’objet classe C (repr du type, 1re option).`,

  2565: `c.__class__.__name__

Débutant :
• Nom simple de la classe : 'C'.

Intermédiaire :
• Diffère du qualifié __main__.C dans repr du type.

Expert :
• __name__ sur fonction/classe/module suit la même idée de nom court.

Concepts clés :
• Chaîne utile pour logs et dispatch.

Distinctions clés :
• Pas 'c' (instance) ni '__main__.C'.

Fonctionnement :
• Attribut du type lu après __class__.

Exécution étape par étape :
• c.__class__ → C ; C.__name__ → 'C'.

Ordre des opérations :
• Gauche à droite sur la chaîne d’attributs.

Cas d'utilisation courants :
• Messages d’erreur, sérialisation légère.

Cas limites :
• Renommage de classe en runtime rare mais possible via assignation.

Considérations de performance :
• Deux lookups.

Exemples :
• type(obj).__name__ idem.

Remarques :
• Réponse : "C" (1re option).`,

  2566: `Car().engine.start()

Débutant :
• Composition : Car possède un Engine ; start sur ce moteur renvoie 'vroom'.

Intermédiaire :
• Engine est créé dans __init__ de Car (possession forte).

Expert :
• Préférer composition à l’héritage quand la relation est « a-un ».

Concepts clés :
• Délégation vers un sous-objet.

Distinctions clés :
• Pas héritage Car(Véhicule) ici.

Fonctionnement :
• Résolution engine puis bound method start.

Exécution étape par étape :
• Car() ; .engine → Engine ; .start() → 'vroom'.

Ordre des opérations :
• Création Car avant appels chaînés.

Cas d'utilisation courants :
• Assemblage de services, UI + modèle.

Cas limites :
• engine None si __init__ oublié → AttributeError.

Considérations de performance :
• Un niveau d’indirection de plus.

Exemples :
• Remplacer Engine par Mock en test.

Remarques :
• Réponse : "vroom" (1re option).`,

  2567: `Définition de la composition en POO

Débutant :
• Construire des objets complexes en les combinant (has-a).

Intermédiaire :
• Contraste avec l’héritage is-a.

Expert :
• Patterns Strategy, State reposent souvent sur composition.

Concepts clés :
• Références à d’autres objets comme champs.

Distinctions clés :
• Pas fusion de classes ni variables globales comme définition.

Fonctionnement :
• Liaison à l’exécution vers des composants.

Exécution étape par étape :
• Instanciation conteneur ; assignation composants.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Modularité, tests unitaires par composant.

Cas limites :
• Cycles de références si graphes mal gérés.

Considérations de performance :
• Indirection ; souvent acceptable vs rigidité de l’héritage.

Exemples :
• Computer avec CPU interne.

Remarques :
• Réponse : combiner des objets plus simples (1re option).`,

  2568: `Agrégation en POO

Débutant :
• Has-a mais le composant peut exister sans le conteneur.

Intermédiaire :
• Passer engine au constructeur au lieu de le créer dedans.

Expert :
• Modélisation UML : losange vide vs plein (agrégation vs composition).

Concepts clés :
• Cycle de vie indépendant du sous-objet.

Distinctions clés :
• Pas simple copie d’attributs ni création de sous-classe obligatoire.

Fonctionnement :
• Référence partagée possible entre plusieurs conteneurs.

Exécution étape par étape :
• Création engine externe ; Car(engine) ; del car ; engine vit encore.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Étudiants ↔ université, playlists ↔ morceaux.

Cas limites :
• Références dangling si conteneur nettoie mal.

Considérations de performance :
• Même coût qu’une référence.

Exemples :
• Voir banque Car(engine) injecté.

Remarques :
• Réponse : comme composition mais objets indépendants (1re option).`,

  2569: `Logger avec logs = [] en corps de classe

Débutant :
• Une seule liste partagée par toutes les instances.

Intermédiaire :
• self.logs résout vers l’attribut de classe mutable.

Expert :
• Pour liste par instance : initialiser dans __init__.

Concepts clés :
• Attribut de classe mutable = piège classique.

Distinctions clés :
• Ce n’est pas « rien ne va pas » si l’intention est un log global (rare).

Fonctionnement :
• Même id(list) pour tous les self.logs tant qu’aucune ombre instance.

Exécution étape par étape :
• l1.log append ; l2 voit la même liste.

Ordre des opérations :
• Résolution LEGB-like sur attributs.

Cas d'utilisation courants :
• Registre global volontaire (avec prudence).

Cas limites :
• self.logs = [] sur instance casse le partage pour cette instance seulement.

Considérations de performance :
• Une liste, pas N listes.

Exemples :
• print(l2.logs) après l1.log.

Remarques :
• Réponse : logs partagé entre instances (1re option).`,

  2570: `Logger correct : self.logs dans __init__

Débutant :
• l2.logs reste [] après l1.log('a').

Intermédiaire :
• l1.logs is l2.logs est False.

Expert :
• copy vs view : deux listes distinctes.

Concepts clés :
• Mutable créé par instance dans __init__.

Distinctions clés :
• Pas ['a'] sur l2.

Fonctionnement :
• Chaque __init__ exécute self.logs = [] nouvelle.

Exécution étape par étape :
• Deux Logger ; append sur liste de l1 seulement.

Ordre des opérations :
• Ordre des constructions indépendant.

Cas d'utilisation courants :
• Collecteurs par session utilisateur.

Cas limites :
• shallow copy d’instance pourrait encore partager listes internes si mal fait.

Considérations de performance :
• N listes au lieu d’une : trade-off mémoire.

Exemples :
• l2.log('b') n’affecte pas l1.

Remarques :
• Réponse : [] (1re option).`,

  2571: `Singleton() is Singleton()

Débutant :
• __new__ renvoie toujours cls._instance après la première création.

Intermédiaire :
• __init__ peut tourner plusieurs fois selon implémentation ; l’identité reste la même ici.

Expert :
• Variantes avec verrous pour threads ; pas dans l’énoncé.

Concepts clés :
• Contrôle de création au niveau __new__.

Distinctions clés :
• Pas False : même objet.

Fonctionnement :
• object.__new__(cls) une fois ; puis cache en variable de classe.

Exécution étape par étape :
• Premier appel crée ; second réutilise ; is True.

Ordre des opérations :
• __new__ avant __init__ à chaque appel syntaxique.

Cas d'utilisation courants :
• Config globale, pool unique.

Cas limites :
• Sous-classes veulent instances séparées : adapter _instance par sous-classe.

Considérations de performance :
• Évite allocations répétées.

Exemples :
• id(a)==id(b).

Remarques :
• Réponse : True (1re option).`,

  2572: `Rôle de __new__

Débutant :
• Crée et retourne l’instance avant __init__.

Intermédiaire :
• Reçoit cls ; doit retourner un objet (souvent object.__new__(cls)).

Expert :
• Si __new__ ne renvoie pas une instance de cls, __init__ peut être ignoré.

Concepts clés :
• Phase d’allocation / construction.

Distinctions clés :
• Pas l’initialisation des champs métier (rôle de __init__).

Fonctionnement :
• Appel statique implicite sur le type.

Exécution étape par étape :
• MyClass() → __new__ → instance nue → __init__ optionnel.

Ordre des opérations :
• Toujours __new__ d’abord.

Cas d'utilisation courants :
• Singleton, sous-types immuables, mise en cache d’instances.

Cas limites :
• __new__ sur metaclass : autre niveau.

Considérations de performance :
• Peut recycler des objets (flyweight).

Exemples :
• int.__new__ contrôle la création de petits int (internes).

Remarques :
• Réponse : crée et retourne une nouvelle instance (1re option).`,

  2573: `Différence __new__ vs __init__

Débutant :
• __new__ fabrique l’objet ; __init__ le peuple.

Intermédiaire :
• Signatures : cls vs self.

Expert :
• __new__ peut retourner instance d’une sous-classe ou existante.

Concepts clés :
• Deux phases du constructeur Python.

Distinctions clés :
• Pas identiques ni inversion des rôles.

Fonctionnement :
• Protocole type.__call__.

Exécution étape par étape :
• allocate → initialize.

Ordre des opérations :
• new puis init si instance compatible.

Cas d'utilisation courants :
• Contrôle fin de cycle de vie.

Cas limites :
• __init__ ne retourne rien ; __new__ si.

Considérations de performance :
• N/A.

Exemples :
• Voir prints ordonnés dans la banque.

Remarques :
• Réponse : __new__ crée, __init__ initialise (1re option).`,

  2574: `Prints lors de C() avec __new__ et __init__

Débutant :
• 'new' puis 'init'.

Intermédiaire :
• __new__ doit retourner une instance pour que __init__ s’exécute.

Expert :
• Si __new__ retourne autre type, __init__ de la classe peut être sauté.

Concepts clés :
• Ordre fixé par l’interprète.

Distinctions clés :
• Pas l’inverse ni un seul des deux dans ce code.

Fonctionnement :
• tp_call sur type.

Exécution étape par étape :
• __new__ print ; object.__new__ ; __init__ print.

Ordre des opérations :
• Parenthèses C() déclenchent la séquence complète.

Cas d'utilisation courants :
• Instrumentation de construction.

Cas limites :
• __new__ qui lève : __init__ jamais appelé.

Considérations de performance :
• N/A.

Exemples :
• super().__new__ dans hiérarchies.

Remarques :
• Réponse : "new" puis "init" (1re option).`,

  2575: `len(C.instances) après deux C()

Débutant :
• __init__ append self à la liste de classe ; deux appels → 2 entrées.

Intermédiaire :
• C.instances partagée volontairement (contrairement au bug de logs).

Expert :
• Faiblesses : instances jamais retirées → fuite logique de registre.

Concepts clés :
• Variable de classe comme registre.

Distinctions clés :
• Pas 0 ni 1 ici.

Fonctionnement :
• Liste mutable sur la classe ; références fortes aux instances.

Exécution étape par étape :
• C() ; append1 ; C() ; append2 ; len 2.

Ordre des opérations :
• Chaque construction appelle __init__.

Cas d'utilisation courants :
• Registre de plugins, debug « tous les objets ».

Cas limites :
• weakref si cycles avec la classe.

Considérations de performance :
• Liste qui grandit sans borne.

Exemples :
• C.instances[0] is première instance.

Remarques :
• Réponse : 2 (1re option).`,
};
