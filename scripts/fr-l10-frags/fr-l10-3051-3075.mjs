/** Level 10 FR detailed — bank 3051–3075 (level10Patterns Q51–75). */
export default {
  3051: `Décorateur def decorator(func): return func puis @decorator sur def func(): pass ; type(func) ?

Débutant :
• Le @ remplace le nom func par le résultat de decorator(ancienne_func).
• Ici decorator renvoie la même fonction : type reste une fonction classique.

Intermédiaire :
• C'est un décorateur « no-op », utile pour cadrer des décorateurs conditionnels ou des tests.

Expert :
• À l'exécution, func pointe vers l'objet fonction retourné ; sans wraps, __name__ reste souvent correct si on retourne func tel quel.

Concepts clés :
• Syntaxe @ comme sucre pour func = decorator(func).

Distinctions clés :
• Objet décorateur vs classe avec __call__ ; vs wrapper qui remplace la fonction.

Fonctionnement :
• Après définition du def sous @, Python appelle decorator avec la fonction créée.

Exécution étape par étape :
1. Création de l'objet fonction func.
2. Appel decorator(func) → retour func.
3. Liaison du nom func vers cette valeur.

Ordre des opérations :
• Le corps du def est compilé avant l'appel du décorateur.

Cas d'utilisation courants :
• Placeholder, mesure de performance désactivable, enregistrement dans un registre.

Cas limites :
• Si decorator retourne autre chose qu'un callable, les appels futurs cassent.

Considérations de performance :
• Une couche de fonction supplémentaire si le décorateur retourne un wrapper.

Exemples :
• @register
  def handler(): ...

Remarques :
• Réponse : type fonction (class function) — 1re option.`,
  3052: `Décorateur qui définit wrapper() appelant func() ; @decorator sur func qui return 1 ; func() ?

Débutant :
• Le nom func est rebondi sur wrapper ; l'appel func() exécute wrapper puis l'originale.

Intermédiaire :
• wrapper() return func() → ici 1.

Expert :
• Sans functools.wraps, __name__ et __doc__ pointent souvent vers wrapper.

Concepts clés :
• Enveloppe autour du callable d'origine.

Distinctions clés :
• Wrapper sans *args vs wrapper générique question suivante.

Fonctionnement :
• closure : wrapper retient func de l'environnement du décorateur.

Exécution étape par étape :
1. func désigne wrapper.
2. func() → wrapper().
3. wrapper appelle l'ancienne fonction → 1.

Ordre des opérations :
• Évaluation des arguments au moment de l'appel extérieur.

Cas d'utilisation courants :
• Journalisation, chronométrage, contrôle d'accès.

Cas limites :
• Récursion si wrapper appelle le mauvais nom de fonction.

Considérations de performance :
• Coût d'un niveau d'appel supplémentaire par invocation.

Exemples :
• print avant/après return func(*args, **kwargs).

Remarques :
• Réponse : 1 — 1re option.`,
  3053: `Wrapper avec *args, **kwargs relayés ; décorateur sur add(x,y) return x+y ; add(1, 2) ?

Débutant :
• Le wrapper accepte n'importe quelle signature et transmet à la fonction d'origine.

Intermédiaire :
• add(1, 2) → wrapper(1, 2) → add originale → 3.

Expert :
• Modèle standard pour décorateurs réutilisables (presque toutes signatures).

Concepts clés :
• Dépaquetage transparent des arguments.

Distinctions clés :
• *args tuple et **kwargs dict vs signature fixe.

Fonctionnement :
• L'appel func(*args, **kwargs) reconstruit l'appel utilisateur.

Exécution étape par étape :
1. Construction du tuple (1, 2) pour positions.
2. add interne invoquée avec x=1, y=2.
3. Somme 3 retournée à travers wrapper.

Ordre des opérations :
• Évaluation des arguments avant entrée dans wrapper.

Cas d'utilisation courants :
• retry, cache, validation d'arguments.

Cas limites :
• inspect.signature sur la fonction décorée peut ne plus refléter la réalité sans wraps.

Considérations de performance :
• Léger surcoût de tuple/dict sur appels très fréquents.

Exemples :
• def w(*a, **kw): print(a, kw); return f(*a, **kw).

Remarques :
• Réponse : 3 — 1re option.`,
  3054: `from functools import wraps ; décorateur avec @wraps(func) sur wrapper ; func.__name__ après décoration ?

Débutant :
• wraps copie nom, doc et attributs utiles de la fonction d'origine vers le wrapper.

Intermédiaire :
• Sans wraps, __name__ serait souvent 'wrapper'.

Expert :
• Met à jour __wrapped__ pour introspection (Python 3).

Concepts clés :
• Préservation de l'identité documentaire du callable.

Distinctions clés :
• wraps vs copie manuelle des attributs.

Fonctionnement :
• Le décorateur wraps est lui-même appliqué au wrapper après sa définition.

Exécution étape par étape :
1. Création de wrapper.
2. @wraps(func) ajuste les métadonnées du wrapper.
3. Lecture __name__ → 'func'.

Ordre des opérations :
• wraps s'exécute au moment de la définition du décorateur, pas à chaque appel.

Cas d'utilisation courants :
• Frameworks, logs lisibles, pydoc.

Cas limites :
• Plusieurs couches de décorateurs : chaîner wraps correctement.

Considérations de performance :
• Négligeable.

Exemples :
• help(mon_decorateur) montrant le bon nom.

Remarques :
• Réponse : chaîne 'func' — 1re option.`,
  3055: `def decorator(arg): return lambda func: func puis @decorator(1) sur une fonction ?

Débutant :
• @decorator(1) appelle d'abord decorator(1) qui renvoie le vrai décorateur.

Intermédiaire :
• Ici le lambda renvoie func inchangée : motif d'usine à paramètres.

Expert :
• Généralisation : usine retournant une fonction décorateur qui crée wrapper.

Concepts clés :
• Deux niveaux d'appel : configuration puis cible.

Distinctions clés :
• @dec vs @dec() quand dec est déjà un décorateur.

Fonctionnement :
• Évaluation de decorator(1) avant application au def.

Exécution étape par étape :
1. decorator(1) → callable lambda.
2. Ce callable reçoit la fonction définie.
3. Retour func inchangée.

Ordre des opérations :
• Parenthèses du haut de la pile syntaxique en premier.

Cas d'utilisation courants :
• @retry(3), @route('/api').

Cas limites :
• Oublier de retourner un callable depuis decorator(arg).

Considérations de performance :
• Coût d'une fermeture supplémentaire par configuration.

Exemples :
• def repeat(n): ... return actual_decorator.

Remarques :
• Réponse : décorateur paramétrable (usine) — 1re option.`,
  3056: `Classe Decorator avec __init__(self, func) et __call__ qui renvoie self.func() ; @Decorator sur func return 1 ; func() ?

Débutant :
• @Decorator remplace func par une instance dont __call__ fait office d'appel.

Intermédiaire :
• func() devient instance() → __call__ → self.func() → 1.

Expert :
• Permet de stocker un état (compteur, cache) sur self.

Concepts clés :
• Callable instance via __call__.

Distinctions clés :
• Décorateur fonction vs classe ; similitude avec functools.partial stateful.

Fonctionnement :
• Decorator(func) construit l'objet lié à la fonction d'origine.

Exécution étape par étape :
1. Instanciation avec la fonction cible.
2. Appel () déclenche __call__.
3. Délégation à la fonction stockée.

Ordre des opérations :
• self.func résolu avant l'appel.

Cas d'utilisation courants :
• Compteur d'appels, rate limiting par instance.

Cas limites :
• Méthodes : attention au binding self si mal décoré.

Considérations de performance :
• Un dict d'instance de plus qu'une simple fonction.

Exemples :
• class CountCalls: ... __call__ incrémente puis appelle func.

Remarques :
• Réponse : 1 — 1re option.`,
  3057: `@staticmethod sur def func(): return 1 ?

Débutant :
• Transforme la fonction définie dans le corps de classe en méthode statique.

Intermédiaire :
• Pas de self implicite injecté à l'appel.

Expert :
• Le descripteur staticmethod renvoie la fonction nue à l'accès via la classe ou une instance.

Concepts clés :
• Regroupement logique dans la classe sans dépendre d'une instance.

Distinctions clés :
• staticmethod vs classmethod vs méthode d'instance.

Fonctionnement :
• Lookup sur la classe produit un objet fonction sans lier self.

Exécution étape par étape :
1. Résolution de l'attribut sur Classe.func ou inst.func.
2. Appel direct sans passer l'instance.

Ordre des opérations :
• Même ordre qu'un appel de fonction ordinaire après résolution.

Cas d'utilisation courants :
• Utilitaires mathématiques, parseurs liés au domaine de la classe.

Cas limites :
• Ne peut pas accéder facilement aux attributs d'instance sans les passer.

Considérations de performance :
• Très proche d'une fonction module.

Exemples :
• MathUtils.norm(x, y).

Remarques :
• Réponse : décorateur de méthode statique — 1re option.`,
  3058: `@classmethod sur def method(cls): return cls ?

Débutant :
• Premier paramètre implicite est la classe, pas l'instance.

Intermédiaire :
• return cls renvoie l'objet classe (constructeur alternatif possible).

Expert :
• Le descripteur lie la fonction à la classe appelante, y compris sous-classes.

Concepts clés :
• Fabriques et logique au niveau classe.

Distinctions clés :
• classmethod vs staticmethod ; cls vs self.

Fonctionnement :
• type.__get__ injecte la classe réelle lors de l'accès.

Exécution étape par étape :
1. Classe.sousmethode() ou inst.sousmethode().
2. Python passe la classe en premier argument.
3. Corps exécuté avec cls lié.

Ordre des opérations :
• Résolution MRO si héritage.

Cas d'utilisation courants :
• from_dict, alternative constructors.

Cas limites :
• Confondre cls et type(self) dans des héritages profonds.

Considérations de performance :
• Négligeable.

Exemples :
• Person.from_birth_year(...).

Remarques :
• Réponse : décorateur de méthode de classe — 1re option.`,
  3059: `@property sur def x(self): return 1 ?

Débutant :
• Expose une méthode comme accès attribut : obj.x sans parenthèses.

Intermédiaire :
• Sous le capot : descripteur non-data avec getter.

Expert :
• On peut ajouter @x.setter pour l'affectation contrôlée.

Concepts clés :
• API stable lecture d'attribut calculé.

Distinctions clés :
• property vs méthode get_x() ; vs attribut public mutable.

Fonctionnement :
• __get__ du property appelle la fonction getter.

Exécution étape par étape :
1. Accès obj.x.
2. property.__get__ invoqué.
3. return 1 depuis la méthode décorée.

Ordre des opérations :
• Pas d'appel utilisateur explicite de fonction.

Cas d'utilisation courants :
• Champs dérivés, validation à l'écriture.

Cas limites :
• property sans setter → AttributeError en assignation.

Considérations de performance :
• Coût d'un appel Python par accès.

Exemples :
• aire d'un cercle depuis rayon.

Remarques :
• Réponse : décorateur property — 1re option.`,
  3060: `@decorator1 puis @decorator2 au-dessus du même def ; ordre d'application ?

Débutant :
• Le décorateur le plus proche du def s'applique en premier.

Intermédiaire :
• Équivalent à func = decorator1(decorator2(func)).

Expert :
• L'ordre d'exécution à l'appel suit l'onion : d'abord decorator1 (externe), puis interne.

Concepts clés :
• Composition de comportements transverses.

Distinctions clés :
• Bas vers haut à la définition vs ordre visuel lecture.

Fonctionnement :
• Chaînage de callables successifs.

Exécution étape par étape :
1. Création fonction nue.
2. Appliquer decorator2 → fonction intermédiaire.
3. Appliquer decorator1 → fonction finale.

Ordre des opérations :
• Chaque décorateur reçoit le résultat du précédent.

Cas d'utilisation courants :
• auth + log + validation.

Cas limites :
• Mauvais ordre si un décorateur doit voir la fonction « brute ».

Considérations de performance :
• N niveaux = N appels enveloppants.

Exemples :
• @app.route
  @login_required
  def view(): ...

Remarques :
• Réponse : plusieurs décorateurs empilés — 1re option.`,
  3061: `Singleton via __new__ : deux appels Singleton() donnent la même identité ?

Débutant :
• __new__ contrôle la création ; ici on recycle _instance de classe.

Intermédiaire :
• obj1 is obj2 → True.

Expert :
• Sous-classes : souvent un _instances par sous-classe ou pattern dédié.

Concepts clés :
• Point d'accès unique partagé.

Distinctions clés :
• Singleton vs Borg (état partagé) vs module-level object.

Fonctionnement :
• Premier appel alloue via super().__new__ ; suivants retournent le cache.

Exécution étape par étape :
1. Premier Singleton() : _instance None → création.
2. Second : branche existante → même objet.

Ordre des opérations :
• __new__ avant __init__ (attention aux doubles init si non gardé).

Cas d'utilisation courants :
• Connexions coûteuses, configuration globale contrôlée.

Cas limites :
• Multithread : verrous nécessaires pour création sûre.

Considérations de performance :
• Une seule instance en mémoire.

Exemples :
• logger central, driver matériel.

Remarques :
• Réponse : True — 1re option.`,
  3062: `Factory.create(type) avec @staticmethod return type() ; Factory.create(list) ?

Débutant :
• On instancie dynamiquement la classe passée en argument.

Intermédiaire :
• list() sans arguments → liste vide [].

Expert :
• Peut router sur sous-classes ou enregistrement de builders.

Concepts clés :
• Découplage client / classe concrète.

Distinctions clés :
• Factory simple vs Abstract Factory.

Fonctionnement :
• type est un objet classe ; () appelle son constructeur.

Exécution étape par étape :
1. Résolution Factory.create.
2. Appel list().
3. Retour [].

Ordre des opérations :
• Évaluation de list avant l'appel.

Cas d'utilisation courants :
• Sérialisation, plugins par nom de classe.

Cas limites :
• type non callable ou abstract → TypeError.

Considérations de performance :
• Identique à un constructeur direct.

Exemples :
• Factory.create(dict) → {}.

Remarques :
• Réponse : liste vide [] — 1re option.`,
  3063: `Classe Observer avec attach et notify qui appelle update sur chaque observateur ?

Débutant :
• Le sujet tient une liste d'observateurs et les prévient.

Intermédiaire :
• La liste en compréhension exécute o.update() pour chaque entrée.

Expert :
• Variantes : file d'événements, dispatch asynchrone, faiblesses circulaires.

Concepts clés :
• Couplage faible publication / abonnement.

Distinctions clés :
• Observer vs signaux Qt vs asyncio.Queue.

Fonctionnement :
• notify parcourt _observers dans l'ordre d'enregistrement.

Exécution étape par étape :
1. attach enregistre des callbacks.
2. notify itère.
3. Effets de bord dans update.

Ordre des opérations :
• Ordre d'insertion détermine l'ordre de notification.

Cas d'utilisation courants :
• Modèle MVC, flux de données réactifs.

Cas limites :
• Observer qui modifie la liste pendant notify.

Considérations de performance :
• O(n) observateurs par notification.

Exemples :
• UI qui se rafraîchit quand le modèle change.

Remarques :
• Réponse : motif Observer — 1re option.`,
  3064: `Strategy de base avec StrategyA et StrategyB implémentant execute différemment ?

Débutant :
• Même interface execute, comportements interchangeables.

Intermédiaire :
• Le client choisit la classe concrète à l'exécution.

Expert :
• Complète Open/Closed : nouvelles stratégies sans modifier le code client.

Concepts clés :
• Polymorphisme pour algorithmes.

Distinctions clés :
• Strategy vs simple if/elif sur un code.

Fonctionnement :
• Appel dynamique sur l'instance de stratégie choisie.

Exécution étape par étape :
1. Liaison d'une variable stratégie à StrategyA ou B.
2. stratégie.execute() résolu par MRO.

Ordre des opérations :
• Pas de magie : simple appel de méthode.

Cas d'utilisation courants :
• Tri, compression, règles métier branchées.

Cas limites :
• Trop de stratégies : registre ou dict peut aider.

Considérations de performance :
• Indirection négligeable face au coût de l'algorithme.

Exemples :
• Moteur de prix avec stratégies promo.

Remarques :
• Réponse : motif Strategy — 1re option.`,
  3065: `Adapter avec __init__(obj) et method qui délègue à obj.other_method ?

Débutant :
• Traduit l'API attendue vers l'API réelle de l'objet enveloppé.

Intermédiaire :
• Le client appelle method() sans connaître other_method.

Expert :
• Adaptateur d'objet vs adaptateur de classe (héritage multiple).

Concepts clés :
• Compatibilité d'interfaces hétérogènes.

Distinctions clés :
• Adapter vs Facade (simplifie un sous-système entier).

Fonctionnement :
• Délégation par composition self.obj.

Exécution étape par étape :
1. Adapter construit avec l'instance legacy.
2. method() forward.

Ordre des opérations :
• Résolution sur self.obj.

Cas d'utilisation courants :
• Wrappers API tierces, tests avec doubles.

Cas limites :
• Fuites si l'adaptateur expose trop la cible.

Considérations de performance :
• Un saut d'appel supplémentaire.

Exemples :
• XMLAdapter.wrap(legacy_parser).

Remarques :
• Réponse : motif Adapter — 1re option.`,
  3066: `Builder avec parts, add qui append et return self, build qui join ?

Débutant :
• Construction incrémentale puis assemblage final.

Intermédiaire :
• return self permet le chaînage b.add('a').add('b').

Expert :
• Variantes avec validation obligatoire avant build.

Concepts clés :
• Séparer la représentation interne du produit exposé.

Distinctions clés :
• Builder vs constructeur géant avec 12 paramètres.

Fonctionnement :
• État accumulé dans self.parts.

Exécution étape par étape :
1. add plusieurs fois.
2. build concatène et retourne chaîne (exemple).

Ordre des opérations :
• join lit la liste dans l'ordre courant.

Cas d'utilisation courants :
• Requêtes SQL, documents, UI pas à pas.

Cas limites :
• Oublier reset() si on réutilise le même builder.

Considérations de performance :
• join sur str est efficace.

Exemples :
• StringBuilder fluent.

Remarques :
• Réponse : motif Builder — 1re option.`,
  3067: `Prototype clone return type(self)() ?

Débutant :
• Crée une nouvelle instance de la même classe sans nommer explicitement la classe dans le clone.

Intermédiaire :
• Ici constructeur par défaut : champs par défaut, pas copie profonde des attributs existants.

Expert :
• Vrai clonage copie souvent self.__dict__ ou utilise copy.copy.

Concepts clés :
• Duplication à partir d'un exemplaire.

Distinctions clés :
• Prototype vs Factory qui choisit le type.

Fonctionnement :
• type(self) résout la classe dynamiquement (sous-classes incluses).

Exécution étape par étape :
1. Appel clone sur instance a.
2. type(self)() fabrique b neuf.

Ordre des opérations :
• __init__ de b s'exécute selon sa définition.

Cas d'utilisation courants :
• Graphes d'objets, éditeurs avec duplication.

Cas limites :
• États mutables partagés si shallow copy implicite.

Considérations de performance :
• Souvent meilleur que sérialiser/désérialiser.

Exemples :
• Document.clone() pour variante.

Remarques :
• Réponse : motif Prototype — 1re option.`,
  3068: `Facade agrège subsystem1 et subsystem2 ; operation combine leurs method() ?

Débutant :
• Une porte d'entrée unique cache plusieurs collaborations.

Intermédiaire :
• return s1.method() + s2.method() illustre l'orchestration.

Expert :
• Réduit le couplage client ↔ nombre de types internes.

Concepts clés :
• Simplification surface API.

Distinctions clés :
• Facade vs Adapter ciblant une seule incompabilité.

Fonctionnement :
• __init__ tient les références ; operation orchestre.

Exécution étape par étape :
1. Création façade avec sous-systèmes.
2. operation appelle deux méthodes internes.
3. Agrégation du résultat.

Ordre des opérations :
• Ordre des appels internes peut importer (effets de bord).

Cas d'utilisation courants :
• SDK haut niveau au-dessus HTTP + parse + cache.

Cas limites :
• Facade « dieu » trop large.

Considérations de performance :
• Coût = somme des sous-appels.

Exemples :
• DatabaseFacade.get_user.

Remarques :
• Réponse : motif Facade — 1re option.`,
  3069: `Command avec execute ; Invoker set_command puis execute appelle command.execute ?

Débutant :
• Encapsule une action comme objet appelable plus tard.

Intermédiaire :
• Découple qui déclenche de ce qui est exécuté.

Expert :
• Base pour undo, file d'attente, macro.

Concepts clés :
• Requête = objet first-class.

Distinctions clés :
• Command vs simple fonction passée (historique/undo).

Fonctionnement :
• Invoker retient une référence command et délègue.

Exécution étape par étape :
1. set_command enregistre cmd.
2. execute() invoque cmd.execute().

Ordre des opérations :
• command peut être remplacée à chaud.

Cas d'utilisation courants :
• GUI boutons, tâches planifiées.

Cas limites :
• command None → AttributeError si non initialisée.

Considérations de performance :
• Indirection minime.

Exemples :
• RemoteControl et LightOnCommand.

Remarques :
• Réponse : motif Command — 1re option.`,
  3070: `Composite Component / Composite avec children et operation sur chaque enfant ?

Débutant :
• Arbre : nœuds composites et feuilles partagent une interface operation.

Intermédiaire :
• La liste en compréhension propage operation récursivement si enfants composites.

Expert :
• Uniformité client : traiter un seul nœud ou tout un sous-arbre pareil.

Concepts clés :
• Récursion structurelle.

Distinctions clés :
• Composite vs simple conteneur de listes sans polymorphisme.

Fonctionnement :
• add stocke enfants ; operation itère.

Exécution étape par étape :
1. operation sur composite.
2. Pour chaque enfant, operation (récursif éventuel).

Ordre des opérations :
• Parcours en profondeur selon l'ordre de children.

Cas d'utilisation courants :
• UI widgets, systèmes de fichiers logiques.

Cas limites :
• Cycles dans le graphe → boucle infinie.

Considérations de performance :
• Parcours O(taille arbre).

Exemples :
• Répertoire contenant fichiers et sous-répertoires.

Remarques :
• Réponse : motif Composite — 1re option.`,
  3071: `class Meta(type): pass ; class MyClass(metaclass=Meta): pass ; type(MyClass) ?

Débutant :
• La métaclasse est la « classe des classes » ; ici MyClass est instance de Meta.

Intermédiaire :
• type(MyClass) retourne Meta, pas type par défaut.

Expert :
• Les instances de MyClass ont toujours type(...) == MyClass.

Concepts clés :
• Hook sur la création de classes.

Distinctions clés :
• Métaclasse vs class decorator exécuté après construction.

Fonctionnement :
• L'appel à type pour construire MyClass passe par Meta.__new__/__init__.

Exécution étape par étape :
1. Corps Meta défini.
2. Définition MyClass déclenche Meta.
3. type(MyClass) pointe vers Meta.

Ordre des opérations :
• MRO des métaclasses si héritage multiple de classes.

Cas d'utilisation courants :
• ORM, validation de schéma, singleton de classe.

Cas limites :
• Métaclasses incompatibles en diamant.

Considérations de performance :
• Coût à l'import une fois.

Exemples :
• enum.EnumMeta.

Remarques :
• Réponse : classe Meta (métaclasse personnalisée) — 1re option.`,
  3072: `Meta.__new__(cls, name, bases, dct) qui délègue à super().__new__ ; effet sur MyClass(metaclass=Meta) ?

Débutant :
• __new__ de la métaclasse fabrique l'objet classe MyClass.

Intermédiaire :
• Permet d'inspecter ou modifier dct avant création.

Expert :
• Chaîne type.__new__ doit retourner un type (sous-classe de type en pratique).

Concepts clés :
• Point d'entrée bas niveau création classe.

Distinctions clés :
• __new__ métaclasse vs __init__ métaclasse.

Fonctionnement :
• Python passe name, bases, namespace à Meta.__new__.

Exécution étape par étape :
1. Préparation du dict de classe.
2. Meta.__new__ produit l'objet classe.
3. Meta.__init__ peut suivre.

Ordre des opérations :
• __new__ avant __init__ comme pour instances.

Cas d'utilisation courants :
• Injection automatique de méthodes, enforcement de conventions.

Cas limites :
• Oublier return super().__new__ → NoneType erreurs.

Considérations de performance :
• Surveillance : éviter travail lourd par classe.

Exemples :
• print du nom à chaque déclaration de classe.

Remarques :
• Réponse : métaclasse personnalisée contrôlant la création — 1re option.`,
  3073: `Meta.__init__(cls, name, bases, dct) pose cls.custom_attr = 1 ; MyClass.custom_attr ?

Débutant :
• __init__ métaclasse reçoit la classe déjà créée comme cls.

Intermédiaire :
• On attache des attributs sur l'objet classe MyClass.

Expert :
• Distinct de __init__ d'instance des objets MyClass().

Concepts clés :
• Post-traitement de la définition de classe.

Distinctions clés :
• Attribut de classe ajouté par métaclasse vs ligne directe dans le corps.

Fonctionnement :
• Après __new__, __init__ métaclasse ajuste cls.

Exécution étape par étape :
1. MyClass créée.
2. Meta.__init__ exécuté avec cls=MyClass.
3. Lecture MyClass.custom_attr → 1.

Ordre des opérations :
• Attributs classe résolus avant recherche sur instances.

Cas d'utilisation courants :
• Registres automatiques, métadonnées ORM.

Cas limites :
• Écraser des noms réservés par inadvertance.

Considérations de performance :
• Négligeable.

Exemples :
• cls._registry.append(cls).

Remarques :
• Réponse : 1 — 1re option.`,
  3074: `Meta.__call__ délègue à super().__call__ ; type(MyClass()) après instanciation ?

Débutant :
• __call__ de la métaclasse entoure la construction d'instance MyClass().

Intermédiaire :
• Ici délégation standard : l'instance est bien de classe MyClass.

Expert :
• On peut injecter singleton, validation args, ou pooling avant type.__call__.

Concepts clés :
• Niveau métaclasse pour factory d'instances.

Distinctions clés :
• __call__ métaclasse vs __new__/__init__ de MyClass.

Fonctionnement :
• MyClass() → Meta.__call__(MyClass, ...).

Exécution étape par étape :
1. Appel constructeur utilisateur.
2. Meta.__call__ peut logger puis super.
3. Instance créée ; type(instance) est MyClass.

Ordre des opérations :
• MRO type → Meta → ...

Cas d'utilisation courants :
• Comptage d'instances, instrumentation.

Cas limites :
• super().__call__ mal utilisé casse la création.

Considérations de performance :
• Hook sur chaque instanciation.

Exemples :
• print à chaque MyClass().

Remarques :
• Réponse : classe MyClass pour l'instance — 1re option.`,
  3075: `SingletonMeta.__call__ met en cache par cls ; MyClass() is MyClass() ?

Débutant :
• Une entrée par classe dans _instances ; réutilise la première instance.

Intermédiaire :
• Deux appels successifs renvoient le même objet → is True.

Expert :
• Thread-safety non garanti sans verrou.

Concepts clés :
• Singleton au niveau instanciation centralisé.

Distinctions clés :
• vs Singleton __new__ sur la classe elle-même.

Fonctionnement :
• __call__ intercepte avant création répétée.

Exécution étape par étape :
1. Premier appel : super().__call__ crée et stocke.
2. Second : retour cache.

Ordre des opérations :
• Clé du dict = cls (objet classe).

Cas d'utilisation courants :
• Service partagé, pool unique.

Cas limites :
• Arguments différents au second appel ignorés si cache bête.

Considérations de performance :
• Évite allocations répétées.

Exemples :
• Configuration globale lazy.

Remarques :
• Réponse : True — 1re option.`,
};
