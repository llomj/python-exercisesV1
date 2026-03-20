/** Level 8 FR 2676–2700 — level8_expert_b.ts Q76–100 (collections.abc → type hints / __class_getitem__) */
export default {
  2676: `isinstance([1, 2, 3], Iterable)

Débutant :
• True : une liste a __iter__.

Intermédiaire :
• collections.abc.Iterable teste le protocole itérable (via __subclasshook__).

Expert :
• Enregistrement explicite possible pour types tiers.

Concepts clés :
• Duck typing officiel pour les itérables.

Distinctions clés :
• Pas Error ni None.

Fonctionnement :
• isinstance avec ABC peut être structurel.

Exécution étape par étape :
• Vérification que list satisfait Iterable.

Ordre des opérations :
• Appel isinstance après import.

Cas d'utilisation courants :
• assert iterable avant boucle for.

Cas limites :
• Objet avec __getitem__ seul : historique complexe ; list standard OK.

Considérations de performance :
• isinstance sur built-in rapide.

Exemples :
• isinstance(42, Iterable) → False.

Remarques :
• Réponse : True (1re option).`,

  2677: `isinstance(iter([1, 2, 3]), Iterator)

Débutant :
• True : l'itérateur liste a __next__ et __iter__.

Intermédiaire :
• Iterator ⊆ Iterable mais la réciproque est fausse pour la liste brute.

Expert :
• Générateurs sont aussi Iterator.

Concepts clés :
• État de consommation dans l'itérateur.

Distinctions clés :
• Pas False : iter([...]) est bien un iterator.

Fonctionnement :
• __subclasshook__ vérifie les méthodes attendues.

Exécution étape par étape :
• iter crée list_iterator ; isinstance confirme.

Ordre des opérations :
• iter d'abord, puis isinstance.

Cas d'utilisation courants :
• Vérifier qu'on peut next() sans re-parcourir tout le conteneur.

Cas limites :
• Itérateur épuisé : reste Iterator mais next lève StopIteration.

Considérations de performance :
• N/A.

Exemples :
• isinstance([1,2,3], Iterator) False.

Remarques :
• Réponse : True (1re option).`,

  2678: `isinstance(print, Callable)

Débutant :
• True : les fonctions built-in sont callables.

Intermédiaire :
• Équivalent conceptuel à callable(print).

Expert :
• Callable vérifie __call__ sur l'objet.

Concepts clés :
• Uniformiser fonctions, méthodes, types callables.

Distinctions clés :
• Pas False.

Fonctionnement :
• ABC Callable + hooks.

Exécution étape par étape :
• print a __call__ côté implémentation builtin.

Ordre des opérations :
• isinstance évalue le second argument Callable.

Cas d'utilisation courants :
• Callbacks, APIs haut niveau.

Cas limites :
• 42 non Callable.

Considérations de performance :
• N/A.

Exemples :
• isinstance(lambda:0, Callable) True.

Remarques :
• Réponse : True (1re option).`,

  2679: `isinstance({}, Mapping)

Débutant :
• True : dict implémente le mapping en lecture.

Intermédiaire :
• MutableMapping est plus large (mutation) ; dict est mutable mais isinstance Mapping reste vrai.

Expert :
• MappingProxyType aussi Mapping.

Concepts clés :
• Interface clés-valeurs typée.

Distinctions clés :
• Pas False.

Fonctionnement :
• Enregistrement dict comme virtual subclass.

Exécution étape par étape :
• {} est dict ; isinstance avec ABC.

Ordre des opérations :
• Création dict puis test.

Cas d'utilisation courants :
• Accepter read-only mapping dans une API.

Cas limites :
• defaultdict reste mapping mutable.

Considérations de performance :
• N/A.

Exemples :
• str n'est pas Mapping.

Remarques :
• Réponse : True (1re option).`,

  2680: `ABC.register() : à quoi ça sert ?

Débutant :
• Enregistrer une classe comme sous-classe virtuelle sans héritage réel.

Intermédiaire :
• isinstance / issubclass reflètent l'enregistrement ; aucune méthode n'est héritée automatiquement.

Expert :
• Contrat déclaratif pour code tiers.

Concepts clés :
• Sous-typage virtuel.

Distinctions clés :
• Pas enregistrement de module PyPI ni singleton automatique.

Fonctionnement :
• Table interne sur l'ABC.

Exécution étape par étape :
• MyABC.register(ThirdParty) puis isinstance(ThirdParty(), MyABC) True.

Ordre des opérations :
• register à l'import ou setup.

Cas d'utilisation courants :
• collections.abc et dict builtin.

Cas limites :
• Ne valide pas que ThirdParty respecte vraiment le protocole : responsabilité développeur.

Considérations de performance :
• Lookup isinstance légèrement enrichi.

Exemples :
• intégrer une classe externe dans votre hiérarchie de types.

Remarques :
• Réponse : considérer une classe comme sous-classe sans hériter (1re option).`,

  2681: `Qu'est-ce qu'une métaclasse ?

Débutant :
• Une classe dont les instances sont d'autres classes.

Intermédiaire :
• type est la métaclasse par défaut.

Expert :
• __new__/__init__ de la métaclasse s'exécutent à la définition de la classe fille.

Concepts clés :
• « Classe d'une classe ».

Distinctions clés :
• Pas classe non instanciable par nature ni simple décorateur (quoiqu'on puisse combiner).

Fonctionnement :
• type(name, bases, ns) ou sous-classe de type.

Exécution étape par étape :
• class C: pass déclenche appel métaclasse.

Ordre des opérations :
• Corps de classe exécuté puis construction de l'objet classe.

Cas d'utilisation courants :
• ORM, DSL, validation de schéma à l'import.

Cas limites :
• Complexité : préférer __init_subclass__ ou décorateurs si possible.

Considérations de performance :
• Coût une fois à l'import.

Exemples :
• isinstance(MyClass, type) True usuellement.

Remarques :
• Réponse : classe dont les instances sont des classes (1re option).`,

  2682: `type est la métaclasse par défaut pour :

Débutant :
• Toutes les classes (built-in et utilisateur), sauf si metaclass= autre chose.

Intermédiaire :
• type(type) est type : bootstrap.

Expert :
• Même object est instance de type.

Concepts clés :
• Racine unifiée du modèle objet.

Distinctions clés :
• Pas seulement builtins ni seulement user-defined.

Fonctionnement :
• Appel type lors du statement class.

Exécution étape par étape :
• Si aucune métaclasse explicite : type construit la classe.

Ordre des opérations :
• Calcul métaclasse = plus dérivée des métaclasses des bases.

Cas d'utilisation courants :
• Comprendre introspection isinstance(cls, type).

Cas limites :
• Conflit de métaclasses entre bases : erreur à la définition.

Considérations de performance :
• N/A.

Exemples :
• type(int) is type.

Remarques :
• Réponse : toutes les classes (1re option).`,

  2683: `type("MyClass", (object,), {})

Débutant :
• Crée dynamiquement une nouvelle classe nommée MyClass.

Intermédiaire :
• Équivalent à class MyClass: pass (sans attributs).

Expert :
• Le dict peut contenir méthodes et attributs de classe.

Concepts clés :
• Fabrique de classes à l'exécution.

Distinctions clés :
• Pas une simple chaîne ni TypeError ici.

Fonctionnement :
• Signature type(name, bases, namespace).

Exécution étape par étape :
• Retourne l'objet classe.

Ordre des opérations :
• Évaluation des trois arguments puis appel.

Cas d'utilisation courants :
• ORM, sérialisation de schémas, codegen.

Cas limites :
• Clés du namespace doivent être identifiants valides pour méthodes.

Considérations de performance :
• Rarement hot path.

Exemples :
• Ajouter "x": 42 dans le dict.

Remarques :
• Réponse : nouvelle classe créée dynamiquement (1re option).`,

  2684: `class Meta(type): pass / class C(metaclass=Meta): pass — type(C)

Débutant :
• Affiche la classe Meta (repr <class '__main__.Meta'> selon contexte).

Intermédiaire :
• C est instance de Meta ; Meta sous-classe de type donc isinstance(C, type) reste vrai.

Expert :
• __new__ de Meta reçoit mcs, name, bases, namespace.

Concepts clés :
• Remplacement de la fabrique par défaut.

Distinctions clés :
• Pas type générique ni C lui-même.

Fonctionnement :
• metaclass= dans la ligne de class.

Exécution étape par étape :
• Définition de C appelle Meta.__new__.

Ordre des opérations :
• Résolution métaclasse avant corps C.

Cas d'utilisation courants :
• Registres automatiques de sous-classes.

Cas limites :
• Hériter C sans redire metaclass : par défaut Meta peut se propager selon règles.

Considérations de performance :
• N/A.

Exemples :
• isinstance(C, Meta) True.

Remarques :
• Réponse : <class 'Meta'> (1re option).`,

  2685: `Quand Meta.__new__ s'exécute-t-il ?

Débutant :
• Au moment où la classe C est définie (exécution du bloc class), pas à C().

Intermédiaire :
• C() utilise le __call__ de type/Meta pour instances, autre étape.

Expert :
• Permet print/log/validation avant que la classe existe.

Concepts clés :
• Construction de classe vs construction d'instance.

Distinctions clés :
• Pas à l'appel du constructeur d'instance par défaut.

Fonctionnement :
• Pipeline définition : métaclasse.__new__ puis __init__ de métaclasse.

Exécution étape par étape :
• import du module ou exécution du class body déclenche __new__.

Ordre des opérations :
• Avant toute instanciation utilisateur.

Cas d'utilisation courants :
• Enregistrement, transformation du namespace.

Cas limites :
• __new__ doit retourner un objet type valide.

Considérations de performance :
• Une fois par classe.

Exemples :
• print dans __new__ apparaît une seule fois à l'import.

Remarques :
• Réponse : quand la classe C est définie (1re option).`,

  2686: `Alternative simple aux métaclasses pour beaucoup de cas

Débutant :
• __init_subclass__ sur la classe parente.

Intermédiaire :
• Appelé pour chaque sous-classe définie ; reçoit cls et kwargs du class statement.

Expert :
• PEP 487 ; moins de code que Meta(type).

Concepts clés :
• Hook standard post-Python 3.6.

Distinctions clés :
• Pas __init__ d'instance ni __new__ d'instance comme substitut direct.

Fonctionnement :
• Méthode spéciale héritée et invoquée par le mécanisme de construction de classe.

Exécution étape par étape :
• class Child(Parent): déclenche Parent.__init_subclass__(Child, ...).

Ordre des opérations :
• Après préparation de la sous-classe.

Cas d'utilisation courants :
• Registres de plugins, validation de sous-classes.

Cas limites :
• Besoins très avancés (transformation namespace avant création) : métaclasse encore.

Considérations de performance :
• Simple et lisible.

Exemples :
• liste registry.append(cls).

Remarques :
• Réponse : __init_subclass__ (1re option).`,

  2687: `f.__annotations__ pour def f(x: int) -> str

Débutant :
• Dictionnaire avec clés x et return, valeurs les objets int et str (pas des chaînes "int").

Intermédiaire :
• Stockage metadata ; pas d'effet sur l'exécution par défaut.

Expert :
• Les forward refs peuvent être des chaînes avec from __future__ annotations.

Concepts clés :
• introspection des annotations de fonction.

Distinctions clés :
• Pas {} vide ni chaînes seules pour ce snippet simple.

Fonctionnement :
• Remplissage au moment de la définition de f.

Exécution étape par étape :
• Lecture attribut __annotations__ sur la fonction.

Ordre des opérations :
• Après compilation du def.

Cas d'utilisation courants :
• FastAPI, pydantic, mypy.

Cas limites :
• Annotation absente → clé absente.

Considérations de performance :
• Dict petit.

Exemples :
• f.__annotations__['return'] is str.

Remarques :
• Réponse : {x: int, return: str} au sens objets type (1re option du QCM).`,

  2688: `class C: x: int y: str — C.__annotations__

Débutant :
• Dict x→int, y→str ; pas de valeurs d'attribut C.x créées par seules les annotations.

Intermédiaire :
• hasattr(C,'x') peut être False sans valeur par défaut.

Expert :
• dataclasses lit ce dict pour générer __init__.

Concepts clés :
• Annotations de classe ≠ assignation.

Distinctions clés :
• Pas {x:0, y:""}.

Fonctionnement :
• __prepare__ + exécution corps classe stocke annotations.

Exécution étape par étape :
• Après class, consulter C.__annotations__.

Ordre des opérations :
• Annotations collectées avant instanciation.

Cas d'utilisation courants :
• Modèles typés, slots+annotations patterns.

Cas limites :
• x: int = 5 crée aussi attribut de classe 5.

Considérations de performance :
• N/A.

Exemples :
• typing.get_type_hints(C) pour résolution forward.

Remarques :
• Réponse : {x: int, y: str} (1re option).`,

  2689: `Les annotations sont-elles appliquées à l'exécution par Python ?

Débutant :
• Non : simple métadonnée ; pas de TypeError automatique sur mauvais type.

Intermédiaire :
• mypy/pyright font l'analyse statique ; bibliothèques peuvent ajouter runtime.

Expert :
• Philosophie du typage graduel.

Concepts clés :
• Pas d'effet obligatoire sur bytecode CPython standard.

Distinctions clés :
• Pas « oui TypeError systématique ».

Fonctionnement :
• Stockage __annotations__ ; appels inchangés.

Exécution étape par étape :
• add("a","b") peut concaténer malgré hints int.

Ordre des opérations :
• Vérification externe si outil lancé.

Cas d'utilisation courants :
• Doc vivante + IDE.

Cas limites :
• __debug__ et assert peuvent combiner types mais ce n'est pas le hint seul.

Considérations de performance :
• Zéro coût check runtime natif.

Exemples :
• def f(x:int): ... ; f("hi") OK.

Remarques :
• Réponse : non, métadonnées seulement (1re option).`,

  2690: `Optional[int] équivaut à

Débutant :
• int | None (ou Union[int, None] en ancien style).

Intermédiaire :
• Signal habituel pour paramètre optionnel ou résultat « trouvé ou pas ».

Expert :
• PEP 604 simplifie l'écriture moderne.

Concepts clés :
• None explicité dans l'union.

Distinctions clés :
• Pas int seul ni None seul comme équivalence.

Fonctionnement :
• Alias typing vers Union.

Exécution étape par étape :
• N/A runtime strict.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• find_user -> Optional[str].

Cas limites :
• Confondre Optional avec valeur par défaut None : deux concepts liés.

Considérations de performance :
• N/A.

Exemples :
• def f(a: int | None) -> None: ...

Remarques :
• Réponse : int | None (1re option).`,

  2691: `List[int] en annotation

Débutant :
• Une liste dont les éléments sont attendus comme int par le vérificateur statique.

Intermédiaire :
• À l'exécution List[int] est un alias générique, pas une contrainte.

Expert :
• Depuis 3.9 préférer list[int] natif.

Concepts clés :
• Paramètre de type sur conteneur.

Distinctions clés :
• Pas un seul int ni tuple.

Fonctionnement :
• GenericAlias via typing ou builtin.

Exécution étape par étape :
• sum_all([1,2,3]) typé List[int] → OK outil.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• API retournant listes homogènes.

Cas limites :
• list[Any] perd la précision.

Considérations de performance :
• N/A runtime.

Exemples :
• def f(xs: list[int]) -> int: return sum(xs).

Remarques :
• Réponse : liste d'entiers (1re option).`,

  2692: `Depuis Python 3.9, remplacer typing.List[int]

Débutant :
• list[int] avec le builtin subscripté.

Intermédiaire :
• PEP 585 : génériques intégrés.

Expert :
• Idem dict[str,int], tuple[int,...], set[str].

Concepts clés :
• Moins d'imports depuis typing.

Distinctions clés :
• Pas List(int) ni [int] seul.

Fonctionnement :
• __class_getitem__ sur list.

Exécution étape par étape :
• list[int] crée GenericAlias.

Ordre des opérations :
• Annotation évaluée à la définition selon futures.

Cas d'utilisation courants :
• Code moderne lisible.

Cas limites :
• Python <3.9 : besoin typing.List.

Considérations de performance :
• N/A.

Exemples :
• items: list[str] = [].

Remarques :
• Réponse : list[int] (1re option).`,

  2693: `Dict[str, int]

Débutant :
• Dictionnaire à clés str et valeurs int (pour le typage).

Intermédiaire :
• Ordre des paramètres : clé puis valeur.

Expert :
• dict[str, int] en 3.9+.

Concepts clés :
• Structure tabulaire typée.

Distinctions clés :
• Pas clés int / valeurs str inversées.

Fonctionnement :
• Deux paramètres au générique.

Exécution étape par étape :
• Vérificateur flag d[key]=valeur incohérente.

Ordre des opérations :
• N/A runtime.

Cas d'utilisation courants :
• comptage de mots str→int.

Cas limites :
• dict hétérogène réel vs hint strict.

Considérations de performance :
• N/A.

Exemples :
• JSON-like typé.

Remarques :
• Réponse : clés str, valeurs int (1re option).`,

  2694: `Tuple[int, str]

Débutant :
• Tuple de longueur exactement 2 : premier int, second str.

Intermédiaire :
• Diffère de list homogène : positions typées distinctement.

Expert :
• Tuple[int, ...] pour longueur variable homogène.

Concepts clés :
• Produit de types ordonnés.

Distinctions clés :
• Pas « n'importe quelle longueur » ni list.

Fonctionnement :
• Arity fixe dans le hint.

Exécution étape par étape :
• (1, "a") match ; (1, 2) rejet statique.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Retours multiples nommés via unpacking.

Cas limites :
• tuple vide Tuple[()].

Considérations de performance :
• N/A.

Exemples :
• def f() -> tuple[str, int]: return "a", 1.

Remarques :
• Réponse : tuple exactement (int, str) (1re option).`,

  2695: `Union[int, str]

Débutant :
• Valeur pouvant être soit int soit str.

Intermédiaire :
• Le vérificateur exige branches pour les deux cas souvent.

Expert :
• int | str depuis 3.10.

Concepts clés :
• Somme disjointe logique des types.

Distinctions clés :
• Pas tuple des deux ni conversion implicite.

Fonctionnement :
• Union[..., ...] objet spécial typing.

Exécution étape par étape :
• isinstance runtime possible mais hint seul ne force pas.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• parse(str|int).

Cas limites :
• Union longue : alias nommé lisible.

Considérations de performance :
• N/A.

Exemples :
• JSON scalar unions.

Remarques :
• Réponse : soit int soit str (1re option).`,

  2696: `Depuis 3.10, écrire Union[int, str]

Débutant :
• int | str.

Intermédiaire :
• PEP 604 ; marche aussi dans isinstance.

Expert :
• X | None remplace Optional[X].

Concepts clés :
• Opérateur | sur types.

Distinctions clés :
• Pas & ni + ni virgule.

Fonctionnement :
• types.UnionType.

Exécution étape par étape :
• Évaluation à l'annotation.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Signatures compactes.

Cas limites :
• Versions anciennes : garder Union.

Considérations de performance :
• N/A.

Exemples :
• isinstance(x, int | str).

Remarques :
• Réponse : int | str (1re option).`,

  2697: `Any dans typing

Débutant :
• N'importe quel type est acceptable pour le vérificateur (opt-out).

Intermédiaire :
• Propagation : tout attribut d'un Any est Any souvent.

Expert :
• Contraster avec object qui reste plus sûr statiquement.

Concepts clés :
• Échappatoire au système de types.

Distinctions clés :
• Pas « aucun type » ni seulement builtins.

Fonctionnement :
• Marqueur spécial dans typing.

Exécution étape par étape :
• N/A runtime.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• JSON brut, migration progressive.

Cas limites :
• Masque les vraies erreurs.

Considérations de performance :
• N/A.

Exemples :
• def f(x: Any) -> Any: return x.

Remarques :
• Réponse : tout type accepté (1re option).`,

  2698: `Protocol dans typing

Débutant :
• Sous-typage structurel : « canard » vérifié statiquement sans héritage forcé.

Intermédiaire :
• @runtime_checkable pour isinstance parfois.

Expert :
• PEP 544 ; diffère d'ABC nominatif.

Concepts clés :
• Interface implicite.

Distinctions clés :
• Pas gestionnaire réseau Protocol HTTP.

Fonctionnement :
• Outil pour type checkers principalement.

Exécution étape par étape :
• render(shape: Drawable) accepte Circle si draw existe.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Décorréler bibliothèques.

Cas limites :
• Attributs privés ou noms différents : pas de match.

Considérations de performance :
• N/A runtime sauf checks explicites.

Exemples :
• Iterable-like custom.

Remarques :
• Réponse : sous-typage structurel (duck typing typé) (1re option).`,

  2699: `class C: def __class_getitem__(cls, item): return f"C[{item}]" — print(C[int])

Débutant :
• La f-string interpole item ; str(int) donne la représentation <class 'int'>.

Intermédiaire :
• Donc affichage C[<class 'int'>] selon 1re option du quiz.

Expert :
• En vrai code, on retourne plutôt un GenericAlias, pas une str.

Concepts clés :
• Hook d'indicage sur la classe.

Distinctions clés :
• Pas erreur ni C[int] littéral brut si __str__ de la str renvoie le contenu.

Fonctionnement :
• C[int] appelle __class_getitem__.

Exécution étape par étape :
• int passé comme objet ; formatage.

Ordre des opérations :
• print après appel.

Cas d'utilisation courants :
• Génériques user-defined.

Cas limites :
• Signature @classmethod implicite pour __class_getitem__ en versions récentes : détails CPython.

Considérations de performance :
• N/A.

Exemples :
• list[int] builtin alias.

Remarques :
• Réponse : C[<class 'int'>] (1re option).`,

  2700: `Que permet __class_getitem__ sur une classe ?

Débutant :
• La syntaxe d'indicage MyClass[...] comme pour list[int].

Intermédiaire :
• Base des génériques builtins PEP 585.

Expert :
• Complète parfois les besoins sans métaclasse lourde (PEP 560).

Concepts clés :
• Paramétrage par crochets.

Distinctions clés :
• Pas activer comparaisons magiques ni itération seule.

Fonctionnement :
• Descriptor protocol spécial sur type.

Exécution étape par étape :
• Évaluation Class[params] → appel.

Ordre des opérations :
• Après résolution de Class.

Cas d'utilisation courants :
• MesStack[int], Tensor[float], etc.

Cas limites :
• Conflit avec ancien __getitem__ uniquement sur instances.

Considérations de performance :
• Création d'alias mise en cache en pratique builtins.

Exemples :
• dict[str, int].

Remarques :
• Réponse : syntaxe MyClass[int] par crochets (1re option).`,
};
