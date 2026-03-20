/** Level 9 FR 2876–2900 — level9_intermediate_b.ts Q76–100 */
export default {
  2876: `B.lst = [] casse le partage — A.lst = [] puis append sur B

Débutant :
• [] : B possède sa propre liste ; append sur B ne touche pas A.lst.

Intermédiaire :
• id(A.lst) != id(B.lst) après assignation sur B.

Expert :
• Sans B.lst = [], B hérite de la référence A (voir ID 2875).

Concepts clés :
• Réassignation d'attribut sur la sous-classe.

Distinctions clés :
• Opposé au piège liste partagée en classe parent.

Fonctionnement :
• B.__dict__['lst'] pointe vers une nouvelle liste vide.

Exécution étape par étape :
• append mute la liste de B ; A.lst inchangé.

Ordre des opérations :
• Définitions puis B.lst=[] puis append(1).

Cas d'utilisation courants :
• Données par défaut isolées par sous-classe.

Cas limites :
• Oublier d'assigner : retour au partage.

Considérations de performance :
• N/A.

Exemples :
• Vérifier len(A.lst)==0.

Remarques :
• Réponse : [] — 1re option.`,

  2877: `Animal.speak lève NotImplementedError — Dog parle Woof

Débutant :
• "Woof" : la méthode résolue est celle de Dog.

Intermédiaire :
• Animal()().speak lèverait ; Dog() est valide.

Expert :
• Avec ABC, Animal() serait interdit à la création.

Concepts clés :
• Méthode « à implémenter » documentée par exception.

Distinctions clés :
• Pas d'erreur sur Dog().speak().

Fonctionnement :
• MRO Dog → speak défini.

Exécution étape par étape :
• Appel sur instance concrète.

Ordre des opérations :
• Dog() puis speak().

Cas d'utilisation courants :
• Template method avec défaut explicite.

Cas limites :
• Oublier override : crash à l'usage.

Considérations de performance :
• N/A.

Exemples :
• Chat avec Meow.

Remarques :
• Réponse : "Woof" — 1re option.`,

  2878: `Animal().speak() sans sous-classe

Débutant :
• NotImplementedError : comportement par défaut de la base.

Intermédiaire :
• Instanciation réussit ; l'échec est à l'appel speak.

Expert :
• ABC + abstractmethod change la règle (instanciation bloquée).

Concepts clés :
• Erreur volontaire vs oubli silencieux.

Distinctions clés :
• Pas chaîne "default".

Fonctionnement :
• raise dans le corps de speak.

Exécution étape par étape :
• Animal() puis speak() propage.

Ordre des opérations :
• __init__ vide puis appel méthode.

Cas d'utilisation courants :
• Forcer les sous-classes à définir le comportement.

Cas limites :
• Si speak absent : AttributeError différent.

Considérations de performance :
• N/A.

Exemples :
• Voir module abc.

Remarques :
• Réponse : NotImplementedError — 1re option.`,

  2879: `ABC @abstractmethod vs NotImplementedError seul

Débutant :
• ABC empêche d'instancier la classe abstraite ; NIE n'empêche pas Animal().

Intermédiaire :
• NIE frappe à l'appel de la méthode manquante.

Expert :
• register() des ABC pour types structurels.

Concepts clés :
• Garantie plus tôt dans le cycle de vie.

Distinctions clés :
• Pas « NIE plus rapide » comme idée centrale.

Fonctionnement :
• Méta-infrastructure ABC marque méthodes abstraites.

Exécution étape par étape :
• Tentative Animal() avec méthode abstraite → TypeError.

Ordre des opérations :
• Définition classe puis instanciation.

Cas d'utilisation courants :
• Plugins avec contrat obligatoire.

Cas limites :
• property abstraite : décorateurs combinés.

Considérations de performance :
• N/A.

Exemples :
• class C(ABC): @abstractmethod def m: ...

Remarques :
• Réponse : ABC bloque l'instanciation — 1re option.`,

  2880: `User.serialize — str du __dict__

Débutant :
• Représentation str du dictionnaire d'attributs (style Python).

Intermédiaire :
• Pas du JSON sans json.dumps.

Expert :
• __slots__ sans __dict__ : adapter serialize.

Concepts clés :
• Introspection instance simple.

Distinctions clés :
• Pas liste d'attributs seule ni erreur ici.

Fonctionnement :
• vars(self) équivalent à self.__dict__.

Exécution étape par étape :
• str() sur le mapping.

Ordre des opérations :
• Construction User puis serialize.

Cas d'utilisation courants :
• Debug rapide, logs.

Cas limites :
• Attributs non sérialisables dans __dict__ : échec str rare.

Considérations de performance :
• Copie en chaîne.

Exemples :
• json.dumps(vars(u)) pour API.

Remarques :
• Réponse : str du __dict__ — 1re option.`,

  2881: `B hérite A — f retourne lambda: "A"

Débutant :
• "A" : la lambda ferme sur le nom global A (la classe) au moment de la définition de f.

Intermédiaire :
• Pas de liaison tardive sur self ou B ici.

Expert :
• Corriger avec lambda: type(self).__name__ ou default arg.

Concepts clés :
• Closure sur nom LEGB, pas sur classe dynamique implicite.

Distinctions clés :
• Pas "B".

Fonctionnement :
• Corps de f exécuté à la définition de la classe B ; global A résolu.

Exécution étape par étape :
• B().f() appelle la lambda sans argument.

Ordre des opérations :
• Définition classes puis appel.

Cas d'utilisation courants :
• Piège boucles qui créent lambdas.

Cas limites :
• Réassignation de A avant appel : visible.

Considérations de performance :
• N/A.

Exemples :
• f = lambda: "A" identique en esprit.

Remarques :
• Réponse : "A" — 1re option.`,

  2882: `D(B) et A séparé — f dans B, lambda "B"

Débutant :
• "B" : f défini dans B ; la lambda capture le global B.

Intermédiaire :
• D hérite f sans le redéfinir ; même fonction que sur B.

Expert :
• Le MRO ne change pas la closure déjà formée.

Concepts clés :
• Héritage de méthode = même objet fonction.

Distinctions clés :
• Ni "D" ni "A".

Fonctionnement :
• D().f est la fonction définie dans le corps de B.

Exécution étape par étape :
• Appel f() → lambda lit B.

Ordre des opérations :
• Hiérarchie D(B), A indépendant puis D().f().

Cas d'utilisation courants :
• Comprendre binding des noms en classes imbriquées.

Cas limites :
• Redéfinir f dans D pour changer le message.

Considérations de performance :
• N/A.

Exemples :
• B().f() même résultat.

Remarques :
• Réponse : "B" — 1re option.`,

  2883: `@classmethod who — B.who()

Débutant :
• "B" : cls injecté vaut B pour l'appel sur la classe B.

Intermédiaire :
• Pas besoin d'instance.

Expert :
• super() dans classmethod suit MRO des classes.

Concepts clés :
• Premier paramètre implicite = classe réceptrice.

Distinctions clés :
• Pas "A".

Fonctionnement :
• Binding classmethod passe cls=B.

Exécution étape par étape :
• return cls.__name__.

Ordre des opérations :
• Appel B.who().

Cas d'utilisation courants :
• Constructeurs alternatifs.

Cas limites :
• who() sur instance : cls = type réel de l'instance.

Considérations de performance :
• N/A.

Exemples :
• datetime.fromtimestamp.

Remarques :
• Réponse : "B" — 1re option.`,

  2884: `classmethod create — type(B.create()).__name__

Débutant :
• "B" : create retourne cls() donc une instance de B.

Intermédiaire :
• Si C(B) sans override, C.create() instancie C.

Expert :
• Pattern factory lié à la hiérarchie.

Concepts clés :
• cls() dispatch vers le constructeur concret.

Distinctions clés :
• Pas "object".

Fonctionnement :
• B.create → __new__/__init__ de B.

Exécution étape par étape :
• Objet créé puis type(...).__name__.

Ordre des opérations :
• Appel de classe puis introspection.

Cas d'utilisation courants :
• Parsing vers instance typée.

Cas limites :
• __init__ privé : idiomes _ ouclassmethod interne.

Considérations de performance :
• N/A.

Exemples :
• NamedTuple._make style.

Remarques :
• Réponse : "B" — 1re option.`,

  2885: `isinstance(B.create(), B)

Débutant :
• True : cohérent avec la fabrique classmethod.

Intermédiaire :
• isinstance plus large que type(x) is B si sous-classes.

Expert :
• unittest.mock peut altérer isinstance (rare).

Concepts clés :
• Vérification après factory.

Distinctions clés :
• Pas False.

Fonctionnement :
• Objet issu de cls().

Exécution étape par étape :
• Test positif.

Ordre des opérations :
• create puis isinstance.

Cas d'utilisation courants :
• Tests unitaires.

Cas limites :
• Metaclass instances : cas avancés.

Considérations de performance :
• N/A.

Exemples :
• isinstance(3, int) True.

Remarques :
• Réponse : True — 1re option.`,

  2886: `B(A) sans super dans __init__ — hasattr(b,"x")

Débutant :
• False : A.__init__ n'a pas été invoqué ; x jamais posé pour le flux B.

Intermédiaire :
• Pas d'appel implicite automatique du parent.

Expert :
• super().__init__(1) rétablit x.

Concepts clés :
• Chaîne __init__ explicite en Python.

Distinctions clés :
• Pas True.

Fonctionnement :
• b.__dict__ sans x ; classe B sans x propre.

Exécution étape par étape :
• B() court ; hasattr faux.

Ordre des opérations :
• Instanciation puis hasattr.

Cas d'utilisation courants :
• Héritage multiple coopératif.

Cas limites :
• __slots__ parent : autres erreurs si non initialisé.

Considérations de performance :
• N/A.

Exemples :
• Toujours super() dans __init__ multi-bases.

Remarques :
• Réponse : False — 1re option.`,

  2887: `B avec super().__init__(1,2) — (b.x, b.y)

Débutant :
• (1, 2) : A.__init__ reçoit via super et pose les attributs.

Intermédiaire :
• MRO B, A, object.

Expert :
• En diamant, super seul chemin correct.

Concepts clés :
• Initialisation coopérative.

Distinctions clés :
• Pas d'erreur.

Fonctionnement :
• B.__init__ appelle A.__init__ avec arguments.

Exécution étape par étape :
• self.x et self.y assignés dans A.

Ordre des opérations :
• B(1,2) construction complète.

Cas d'utilisation courants :
• Widgets empilés, modèles ORM.

Cas limites :
• Oublier **kwargs : casse les extensions.

Considérations de performance :
• N/A.

Exemples :
• Voir super() cookbook.

Remarques :
• Réponse : (1, 2) — 1re option.`,

  2888: `A.__repr__ return "A()" — repr(B())

Débutant :
• "A()" : chaîne codée en dur dans la méthode héritée.

Intermédiaire :
• Pas de polymorphisme sur le nom réel de la classe.

Expert :
• Anti-pattern pour hiérarchies profondes.

Concepts clés :
• repr statique vs dynamique.

Distinctions clés :
• Pas "B()".

Fonctionnement :
• MRO trouve A.__repr__ inchangée.

Exécution étape par étape :
• Retour littéral fixe.

Ordre des opérations :
• B() puis repr.

Cas d'utilisation courants :
• Leçon de débogage.

Cas limites :
• Si __repr__ non héritée : autre comportement.

Considérations de performance :
• N/A.

Exemples :
• f"{type(self).__name__}()" correct.

Remarques :
• Réponse : "A()" — 1re option.`,

  2889: `__repr__ avec type(self).__name__ — repr(B())

Débutant :
• "B()" : nom dynamique de l'instance réelle.

Intermédiaire :
• Pattern idiomatique recommandé.

Expert :
• Inclure champs clés dans un repr riche.

Concepts clés :
• Polymorphisme sur self.

Distinctions clés :
• Pas "A()".

Fonctionnement :
• self est une B ; type(self).__name__ vaut B.

Exécution étape par étape :
• f-string ou format équivalent.

Ordre des opérations :
• Héritage depuis A.__repr__ utilisé par instance B.

Cas d'utilisation courants :
• Collections, logs.

Cas limites :
• Proxy modifiant __class__ : attention.

Considérations de performance :
• N/A.

Exemples :
• dataclasses génèrent repr.

Remarques :
• Réponse : "B()" — 1re option.`,

  2890: `A.__eq__ isinstance(other, A) — A() == B()

Débutant :
• True : B est sous-classe de A ; isinstance(B(), A) vrai.

Intermédiaire :
• Égalité basée famille, pas contenu.

Expert :
• Symétrie avec B()==A() si B n'override pas (voir 2891).

Concepts clés :
• isinstance accepte les sous-types.

Distinctions clés :
• Pas False.

Fonctionnement :
• self A, other B instance ; test de type large.

Exécution étape par étape :
• __eq__ retourne True.

Ordre des opérations :
• Création puis ==.

Cas d'utilisation courants :
• Égalité naïve (souvent à affiner).

Cas limites :
• Si B redéfinit __eq__ : ordre peut changer sensibilité.

Considérations de performance :
• N/A.

Exemples :
• Préférer comparaison de champs métier.

Remarques :
• Réponse : True — 1re option.`,

  2891: `Même A.__eq__ — B() == A()

Débutant :
• True : Python appelle B.__eq__ héritée de A avec self=B(), other=A().

Intermédiaire :
• isinstance(A(), A) vrai pour other.

Expert :
• Réflexion __eq__ si NotImplemented : ici pas besoin.

Concepts clés :
• Héritage de __eq__ et sens des arguments.

Distinctions clés :
• Pas False.

Fonctionnement :
• type(B()).__eq__ est A.__eq__.

Exécution étape par étape :
• isinstance(other, A) sur A instance → True.

Ordre des opérations :
• B() == A() évalue via méthode de B.

Cas d'utilisation courants :
• Vérifier symétrie des définitions __eq__.

Cas limites :
• Sous-types avec __eq__ différent : casser symétrie.

Considérations de performance :
• N/A.

Exemples :
• Toujours inclure isinstance(type(self), type(other)) si besoin strict.

Remarques :
• Réponse : True — 1re option.`,

  2892: `__init_subclass__ greeting — B(A, greeting="hi")

Débutant :
• "hi" : mot-clé classe transmis au hook parent.

Intermédiaire :
• Défaut "hello" si omis.

Expert :
• super().__init_subclass__(**kwargs) pour chaîner.

Concepts clés :
• Paramètres sur la ligne class enfant.

Distinctions clés :
• Pas "hello" pour B.

Fonctionnement :
• A.__init_subclass__(cls=B, greeting="hi").

Exécution étape par étape :
• cls.greeting = "hi".

Ordre des opérations :
• Définition B puis lecture B.greeting.

Cas d'utilisation courants :
• Registres configurables.

Cas limites :
• kwargs invalides : TypeError.

Considérations de performance :
• N/A.

Exemples :
• Plugin avec prefix=.

Remarques :
• Réponse : "hi" — 1re option.`,

  2893: `Monkey-patch A.method après a = A()

Débutant :
• 2 : résolution à l'appel via la classe ; toutes instances voient le nouveau.

Intermédiaire :
• a.method() cherche sur A au moment de l'appel.

Expert :
• bound method recréée à chaque accès.

Concepts clés :
• Monkey-patching dynamique.

Distinctions clés :
• Pas 1.

Fonctionnement :
• Remplacement de l'attribut de classe method.

Exécution étape par étape :
• Patch puis appel voit lambda.

Ordre des opérations :
• Création instance puis assignation A.method.

Cas d'utilisation courants :
• Tests, hotfix (avec prudence).

Cas limites :
• Instance shadow (voir 2894) change la règle.

Considérations de performance :
• N/A.

Exemples :
• mock.patch sur classe.

Remarques :
• Réponse : 2 — 1re option.`,

  2894: `a.method = lambda: 2 — ombre sur l'instance

Débutant :
• 2 : l'attribut d'instance masque la méthode de classe.

Intermédiaire :
• lambda sans self : fonction simple, pas bound method.

Expert :
• Autres instances non affectées.

Concepts clés :
• Ordre de recherche instance avant classe.

Distinctions clés :
• Pas 1.

Fonctionnement :
• a.__dict__['method'] prioritaire.

Exécution étape par étape :
• Appel direct de la lambda.

Ordre des opérations :
• A() puis assignation a.method.

Cas d'utilisation courants :
• Remplacer comportement ponctuel (rare en prod).

Cas limites :
• Oublier self : différence avec méthode normale.

Considérations de performance :
• N/A.

Exemples :
• b.method() encore 1.

Remarques :
• Réponse : 2 — 1re option.`,

  2895: `a.__class__.x = 2 — valeur A.x

Débutant :
• 2 : a.__class__ est A ; modifier x modifie l'attribut de classe.

Intermédiaire :
• Équivalent à A.x = 2.

Expert :
• Toutes instances sans x propre voient 2.

Concepts clés :
• Alias vers l'objet classe.

Distinctions clés :
• Pas 1 sur A après assign.

Fonctionnement :
• Même objet classe via __class__.

Exécution étape par étape :
• A.x mis à jour globalement pour la classe.

Ordre des opérations :
• A.x=1 puis instance puis patch via __class__.

Cas d'utilisation courants :
• Métadonnée de classe runtime.

Cas limites :
• a.x = 2 créerait attribut d'instance distinct.

Considérations de performance :
• N/A.

Exemples :
• Vérifier b.x pour autre instance.

Remarques :
• Réponse : 2 — 1re option.`,

  2896: `A in B.__mro__ avec B(A)

Débutant :
• True : le MRO liste B, A, object.

Intermédiaire :
• in teste appartenance au tuple.

Expert :
• Lié à issubclass(B, A).

Concepts clés :
• Chaîne de résolution complète.

Distinctions clés :
• Pas False.

Fonctionnement :
• B.__mro__ contient A.

Exécution étape par étape :
• Membership positive.

Ordre des opérations :
• Définition classes puis test.

Cas d'utilisation courants :
• Introspection frameworks.

Cas limites :
• Classes dynamiques : MRO recalculé.

Considérations de performance :
• N/A.

Exemples :
• B in B.__mro__ True.

Remarques :
• Réponse : True — 1re option.`,

  2897: `object in B.__mro__

Débutant :
• True : toute classe nouvelle hérite implicitement d'object en fin de MRO.

Intermédiaire :
• object fournit défauts __repr__, __eq__, etc.

Expert :
• Built-ins aussi terminent par object.

Concepts clés :
• Racine unique du modèle objet.

Distinctions clés :
• Pas False.

Fonctionnement :
• Dernière entrée du tuple MRO.

Exécution étape par étape :
• Test in sur tuple.

Ordre des opérations :
• Après définition B(A).

Cas d'utilisation courants :
• Pédagogie modèle objet Python.

Cas limites :
• Pas d'héritage explicite requis en Python 3.

Considérations de performance :
• N/A.

Exemples :
• int.__mro__ se termine par object.

Remarques :
• Réponse : True — 1re option.`,

  2898: `Printable.__str__ appelle to_string — str(Report())

Débutant :
• "Report" : self est Report ; MRO trouve Report.to_string.

Intermédiaire :
• Pattern Template Method.

Expert :
• __str__ hérité, to_string spécialisé.

Concepts clés :
• Squelette parent, étapes enfant.

Distinctions clés :
• Pas "Printable".

Fonctionnement :
• Appel dynamique sur self.

Exécution étape par étape :
• str → __str__ → to_string → chaîne.

Ordre des opérations :
• Report() puis str().

Cas d'utilisation courants :
• Rendus polymorphes.

Cas limites :
• Oublier to_string dans sous-classe : AttributeError.

Considérations de performance :
• N/A.

Exemples :
• Invoice variant.

Remarques :
• Réponse : "Report" — 1re option.`,

  2899: `class C(A,B) — len(C.__bases__)

Débutant :
• 2 : un tuple de deux parents directs.

Intermédiaire :
• Ordre A,B reflété dans __bases__.

Expert :
• MRO C3 linéarise A,B pour la résolution.

Concepts clés :
• Héritage multiple explicite.

Distinctions clés :
• Pas 1 ni 3 ici.

Fonctionnement :
• __bases__ == (A, B).

Exécution étape par étape :
• len compte deux entrées.

Ordre des opérations :
• Définition C puis len.

Cas d'utilisation courants :
• Mixins multiples.

Cas limites :
• MRO impossible : TypeError à la définition.

Considérations de performance :
• N/A.

Exemples :
• Comparer len(D.__bases__) pour D(A).

Remarques :
• Réponse : 2 — 1re option.`,

  2900: `len(type.__mro__)

Débutant :
• 2 : (type, object).

Intermédiaire :
• type est instance de type ; hérite d'object.

Expert :
• Boucle bootstrappée type/object fondamentale.

Concepts clés :
• Métaclasse et racine objet.

Distinctions clés :
• Pas 1 ni 3.

Fonctionnement :
• type.__mro__ longueur 2.

Exécution étape par étape :
• len sur tuple.

Ordre des opérations :
• Accès attribut built-in type.

Cas d'utilisation courants :
• Cours sur le cœur du langage.

Cas limites :
• Implémentations doivent garder cette structure.

Considérations de performance :
• N/A.

Exemples :
• type.__bases__ == (object,).

Remarques :
• Réponse : 2 — 1re option.`,
};
