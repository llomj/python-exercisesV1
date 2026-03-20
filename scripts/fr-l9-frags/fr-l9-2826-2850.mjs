/** Level 9 FR 2826–2850 — level9_intermediate_a.ts Q26–50 (super, kwargs, mixins, composition) */
export default {
  2826: `print(B.f()) avec @classmethod et super().f()+"B"

Débutant :
• "AB" : A.f en classmethod renvoie "A", puis concat "B".

Intermédiaire :
• super() en classmethod utilise cls et __class__ correctement en Python 3.

Expert :
• MRO sur le type réel (B) pour résoudre le prochain classmethod.

Concepts clés :
• Héritage de méthodes de classe coopératif.

Distinctions clés :
• Pas le même binding que self sur instance.

Fonctionnement :
• B.f() → corps B → super → A.f(cls).

Exécution étape par étape :
• Chaîne courte A puis B.

Ordre des opérations :
• Appel B.f() sur la classe.

Cas d'utilisation courants :
• Fabriques named alternatives.

Cas limites :
• classmethod + super si mauvaise base explicite : bugs subtils.

Considérations de performance :
• N/A.

Exemples :
• A.f() seul donne "A".

Remarques :
• Réponse : AB — 1re option.`,

  2827: `super(A, A()) pointe vers quel type pour la suite du MRO ?

Débutant :
• object : après A il ne reste que object dans (A, object).

Intermédiaire :
• Forme deux arguments : commencer la recherche après A.

Expert :
• Utile pour appeler explicitement object.__init__ ou hooks rares.

Concepts clés :
• Découpage du MRO à un point donné.

Distinctions clés :
• Pas « A encore » ni type.

Fonctionnement :
• super(A, instance) fige la fenêtre MRO.

Exécution étape par étape :
• Proxy voit object comme prochain.

Ordre des opérations :
• Après création A().

Cas d'utilisation courants :
• Introspection pédagogique.

Cas limites :
• super(A, A()) sur hiérarchie plus profonde irait au suivant après A (pas toujours object).

Considérations de performance :
• N/A.

Exemples :
• Généraliser avec super(B, D()) en diamond.

Remarques :
• Réponse : object — 1re option (pour la classe A seule du snippet).`,

  2828: `B(1,2) puis print((b.x, b.y)) avec super().__init__(x)

Débutant :
• (1, 2) : parent pose x, enfant pose y.

Intermédiaire :
• Passage d'arguments sélectifs au parent via super.

Expert :
• Pattern base pour kwargs coopératifs (Q33–34).

Concepts clés :
• Un seul self pour toute la chaîne.

Distinctions clés :
• Pas d'erreur de signature si ordre des params aligné.

Fonctionnement :
• B.__init__ appelle A.__init__(self, x).

Exécution étape par étape :
• x=1 puis y=2.

Ordre des opérations :
• Constructeur B.

Cas d'utilisation courants :
• Modèles avec champs parent + champs enfant.

Cas limites :
• Oublier super : x absent.

Considérations de performance :
• N/A.

Exemples :
• Étendre avec z=3.

Remarques :
• Réponse : (1, 2) — 1re option.`,

  2829: `Ordre des prints dans B.__init__ : print B puis super

Débutant :
• B puis A : effet local avant délégation.

Intermédiaire :
• Si super était avant print, l'ordre s'inverserait.

Expert :
• En diamant, l'ordre global dépend aussi du MRO entre B et C.

Concepts clés :
• Contrôle fin du flux d'initialisation.

Distinctions clés :
• Pas « A puis B » ici.

Fonctionnement :
• Corps B s'exécute jusqu'au super.

Exécution étape par étape :
• print B ; entrée A.__init__ ; print A.

Ordre des opérations :
• B().

Cas d'utilisation courants :
• Log phase enfant avant parent.

Cas limites :
• super() en premier si parent doit valider avant log enfant.

Considérations de performance :
• N/A.

Exemples :
• Réécrire avec super en tête pour comparer.

Remarques :
• Réponse : B puis A — 1re option.`,

  2830: `B().greet() avec super().greet() + " World"

Débutant :
• "Hello World" : A fournit "Hello".

Intermédiaire :
• Extension de méthode ordinaire hors __init__.

Expert :
• Même mécanisme super que pour les dunder.

Concepts clés :
• Réutilisation + suffixe.

Distinctions clés :
• Pas d'erreur si greet existe sur parent.

Fonctionnement :
• MRO (B,A,object).

Exécution étape par étape :
• super().greet → A.

Ordre des opérations :
• Appel sur instance.

Cas d'utilisation courants :
• API qui enrichit un template parent.

Cas limites :
• greet abstrait côté parent : autre pattern ABC.

Considérations de performance :
• N/A.

Exemples :
• Variante avec préfixe au lieu de suffixe.

Remarques :
• Réponse : Hello World — 1re option.`,

  2831: `super() dans @staticmethod ?

Débutant :
• Non sans contexte : pas de self ni cls pour ancrer le MRO.

Intermédiaire :
• super() zéro-arg exige cellule __class__ + premier arg implicite — absent ici.

Expert :
• Contournement possible super(Classe, instance) hors staticmethod, ou passer en classmethod.

Concepts clés :
• super n'est pas magique sans binding.

Distinctions clés :
• Pas « oui normalement ».

Fonctionnement :
• staticmethod ne reçoit pas l'instance.

Exécution étape par étape :
• Erreur runtime si tentative naive.

Ordre des opérations :
• Définition peut parser, échoue à l'appel selon code.

Cas d'utilisation courants :
• Préférer @classmethod pour hooks de classe.

Cas limites :
• Python évolué : message d'erreur explicite super(): no arguments.

Considérations de performance :
• N/A.

Exemples :
• Voir banque exemple RuntimeError.

Remarques :
• Réponse : besoin instance ou contexte classe — 1re option.`,

  2832: `Pourquoi préférer super().__init__() à Parent.__init__(self) ?

Débutant :
• super suit le MRO ; appeler Parent en dur casse la coopération et fige le parent.

Intermédiaire :
• En diamant, appels directs peuvent double-invocation de l'ancêtre commun.

Expert :
• Refactoring : ajout d'un mixin entre les deux sans réécrire tous les Parent.__init__.

Concepts clés :
• Ouvert à l'extension, fermé aux doublons accidentels.

Distinctions clés :
• Parent.__init__(self) « fonctionne » parfois mais est fragile.

Fonctionnement :
• super délègue au suivant calculé, pas au nom lexical.

Exécution étape par étape :
• Chaîne unique sur l'instance.

Ordre des opérations :
• Construction multi-niveaux.

Cas d'utilisation courants :
• Toute hiérarchie >2 avec MI possible.

Cas limites :
• Bibliothèques tierces non coopératives : adaptation manuelle.

Considérations de performance :
• Négligeable vs I/O.

Exemples :
• Comparer prints en diamant coopératif vs appels A.__init__ doublés.

Remarques :
• Réponse : super suit le MRO, pas de parent codé en dur — 1re option.`,

  2833: `Pattern multi-init coopératif avec **kwargs

Débutant :
• Chaque couche pop ses clés et passe le reste à super().__init__(**kw).

Intermédiaire :
• object.__init__ reçoit souvent {} à la fin.

Expert :
• Évite signatures incompatibles en héritage multiple.

Concepts clés :
• File d'arguments résiduels.

Distinctions clés :
• Pas « tout appeler avec les mêmes kwargs bruts » sans pop.

Fonctionnement :
• kw diminue à chaque niveau.

Exécution étape par étape :
• C(a=1,b=2) remplit self.a et self.b via A puis B selon MRO.

Ordre des opérations :
• Selon MRO des __init__.

Cas d'utilisation courants :
• Django-like Model mixins, dataclass custom.

Cas limites :
• kwargs inconnu : décider raise vs **kwargs silencieux.

Considérations de performance :
• pop sur dict petit : OK.

Exemples :
• Voir code banque C(A,B).

Remarques :
• Réponse : pop propres args puis super(**kw) — 1re option.`,

  2834: `Chaque __init__ coopératif doit

Débutant :
• Transmettre les **kwargs restants à super().__init__.

Intermédiaire :
• Sinon la chaîne s'arrête et des classes ne voient jamais leurs paramètres.

Expert :
• object.__init__ n'accepte pas de kwargs extra : ils doivent être consommés avant.

Concepts clés :
• Pass-the-baton.

Distinctions clés :
• Pas « tout arrêter après soi » ni appeler tous les parents à la main.

Fonctionnement :
• Collaboration ordonnée par MRO.

Exécution étape par étape :
• kw se vide progressivement.

Ordre des opérations :
• Construction.

Cas d'utilisation courants :
• Plugins multiples sur une même base.

Cas limites :
• kwargs orphelins : TypeError sur object si mal géré.

Considérations de performance :
• N/A.

Exemples :
• Ajouter print(kw) à chaque niveau en debug.

Remarques :
• Réponse : passer le reliquat **kwargs via super — 1re option.`,

  2835: `print(D().f()) listes avec super diamond D(B,C), tous ajoutent par super

Débutant :
• ['C','B','D'] : remontée A=[] puis C, B, D ajoutent dans cet ordre de retour.

Intermédiaire :
• Même MRO que Q14 mais avec listes : empilement des concaténations.

Expert :
• Visualiser la pile d'appels : D→B→C→A puis remonte.

Concepts clés :
• Ordre des + reflète l'ordre de résolution super, pas l'ordre alphabétique des noms.

Distinctions clés :
• Pas ['B','C','D'].

Fonctionnement :
• A retourne [] ; C + ["C"] ; B + ["B"] ; D + ["D"].

Exécution étape par étape :
• Évaluation de fond en comble.

Ordre des opérations :
• D().f().

Cas d'utilisation courants :
• Agrégation de contributions (middlewares).

Cas limites :
• Mutation partagée si on modifiait une liste commune : ici listes neuves.

Considérations de performance :
• Concat répétée O(n²) sur grandes listes — pas le sujet du quiz.

Exemples :
• Remplacer + par append sur copie pour perf réelle.

Remarques :
• Réponse : ['C','B','D'] — 1re option.`,

  2836: `Duck(Flyable, Swimmable) — print((d.fly(), d.swim()))

Débutant :
• ('flying', 'swimming') : deux capacités orthogonales sans conflit de noms.

Intermédiaire :
• MRO inclut les deux parents ; chaque méthode trouvée à sa place.

Expert :
• isinstance sur chaque ABC possible si typage nominal.

Concepts clés :
• Combinaison par héritage multiple simple.

Distinctions clés :
• Pas d'erreur ni inversion des chaînes ici.

Fonctionnement :
• d.fly résout dans Flyable ; d.swim dans Swimmable.

Exécution étape par étape :
• Tuple de deux appels.

Ordre des opérations :
• Instanciation puis print.

Cas d'utilisation courants :
• Traits / capacités séparées.

Cas limites :
• Si les deux parents définissent le même nom : MRO tranche.

Considérations de performance :
• N/A.

Exemples :
• Ajouter une troisième interface Quackable.

Remarques :
• Réponse : ('flying', 'swimming') — 1re option.`,

  2837: `Qu'est-ce qu'un mixin ?

Débutant :
• Classe fournissant des méthodes réutilisables, rarement instanciée seule.

Intermédiaire :
• Composée dans une autre hiérarchie par héritage multiple.

Expert :
• Convention de nom *Mixin pour la lisibilité.

Concepts clés :
• Réutilisation horizontale.

Distinctions clés :
• Pas obligation ABC ni static-only.

Fonctionnement :
• Attributs hérités comme toute base.

Exécution étape par étape :
• self du mixin est l'instance du composé.

Ordre des opérations :
• class Enfant(Mixin, Base) typique.

Cas d'utilisation courants :
• Logging, sérialisation, validation.

Cas limites :
• MRO : ordre des mixins critique (Q40).

Considérations de performance :
• N/A.

Exemples :
• LogMixin + SerializeMixin.

Remarques :
• Réponse : mixin = comportements à mixer, pas entité seule — 1re option.`,

  2838: `App(LogMixin).log("hello")

Débutant :
• LOG: hello : méthode héritée du mixin.

Intermédiaire :
• f-string dans le mixin formate le message.

Expert :
• Pourrait être remplacé par logging module en prod.

Concepts clés :
• Héritage simple une base.

Distinctions clés :
• Pas erreur si App ne redéfinit pas log.

Fonctionnement :
• App.__mro__ inclut LogMixin.

Exécution étape par étape :
• bound method LogMixin.log(self, msg).

Ordre des opérations :
• Création App() puis appel.

Cas d'utilisation courants :
• Cross-cutting concerns.

Cas limites :
• Si App.log override sans super : mixin masqué.

Considérations de performance :
• N/A.

Exemples :
• Ajouter niveau DEBUG dans f-string.

Remarques :
• Réponse : LOG: hello — 1re option.`,

  2839: `User("Alice").to_json() avec JSONMixin

Débutant :
• Chaîne JSON {"name": "Alice"} avec guillemets doubles.

Intermédiaire :
• json.dumps sur __dict__ ; diffère du repr Python simple quote.

Expert :
• Données non sérialisables (datetime) lèveraient TypeError — hors scope.

Concepts clés :
• Sérialisation standard JSON.

Distinctions clés :
• Pas la repr dict Python avec quotes simples.

Fonctionnement :
• dumps produit str JSON.

Exécution étape par étape :
• __dict__ puis dumps.

Ordre des opérations :
• Après __init__ User.

Cas d'utilisation courants :
• API REST, fichiers config.

Cas limites :
• __slots__ sans __dict__ : mixin à adapter.

Considérations de performance :
• dumps sur gros dict : coûteux.

Exemples :
• indent=2 pour lisibilité.

Remarques :
• Réponse : {"name": "Alice"} en texte JSON — 1re option.`,

  2840: `Position des mixins dans la liste de bases

Débutant :
• À gauche (avant la classe parente « principale ») pour priorité MRO.

Intermédiaire :
• En cas de conflit de noms, le mixin à gauche l'emporte sur Base.

Expert :
• super() dans mixin peut alors appeler Base via chaîne coopérative.

Concepts clés :
• class Enfant(LogMixin, Model) idiomatique.

Distinctions clés :
• L'ordre n'est jamais « anodin » en MI.

Fonctionnement :
• MRO parcourt mixins avant Model si listés ainsi.

Exécution étape par étape :
• save() exemple banque : log puis DB via super.

Ordre des opérations :
• Définition de classe.

Cas d'utilisation courants :
• Django class Meta multiples patterns.

Cas limites :
• Trop de mixins : MRO difficile ; préférer composition parfois.

Considérations de performance :
• N/A.

Exemples :
• Inverser l'ordre et voir save() changer.

Remarques :
• Réponse : mixins à gauche — 1re option.`,

  2841: `TimestampMixin.stamp — que ajoute-t-il ?

Débutant :
• Une méthode qui retourne datetime.now() à l'appel.

Intermédiaire :
• Pas d'attribut créé automatiquement à l'__init__ dans ce snippet.

Expert :
• Import local datetime à chaque appel — acceptable pour démo, pas optimal prod.

Concepts clés :
• Horodatage à la demande.

Distinctions clés :
• Pas __init__ qui enregistre created_at ici.

Fonctionnement :
• Méthode instance sur héritier.

Exécution étape par étape :
• Chaque stamp() potentiellement différent.

Ordre des opérations :
• Appel explicite stamp().

Cas d'utilisation courants :
• Events, audit trail léger.

Cas limites :
• Fuseaux horaires : datetime.now(timezone.utc).

Considérations de performance :
• import répété : micro-coût.

Exemples :
• Remplacer par time.time() pour perf brute.

Remarques :
• Réponse : méthode retournant date/heure courante — 1re option.`,

  2842: `Même nom de méthode sur deux parents ?

Débutant :
• Oui : le MRO choisit la première définition rencontrée.

Intermédiaire :
• Pas d'erreur automatique de conflit comme certains langages.

Expert :
• Appel explicite AutreParent.meth(instance) pour version ombre.

Concepts clés :
• Résolution nominaliste par ordre.

Distinctions clés :
• Pas NameError ni TypeError par défaut.

Fonctionnement :
• Première classe dans MRO avec attribut callable.

Exécution étape par étape :
• Binding standard.

Ordre des opérations :
• C(A,B) avec greet sur A et B : A gagne.

Cas d'utilisation courants :
• Définir politique par ordre des bases.

Cas limites :
• Oublier une branche : bug silencieux.

Considérations de performance :
• N/A.

Exemples :
• Voir banque C(A,B) greet.

Remarques :
• Réponse : Oui, le MRO tranche — 1re option.`,

  2843: `print(C.x) avec C(A,B), A.x=1, B.x=2

Débutant :
• 1 : A listé avant B dans C(A,B).

Intermédiaire :
• MRO (C,A,B,object) : premier x trouvé gagne.

Expert :
• Couplé à Q44 pour l'inversion B,A → 2.

Concepts clés :
• Attributs de classe homonymes.

Distinctions clés :
• Pas 2 ici.

Fonctionnement :
• C n'a pas x ; A a x.

Exécution étape par étape :
• Stop à A.

Ordre des opérations :
• Accès sur classe C.

Cas d'utilisation courants :
• Constantes de config sur branches parallèles.

Cas limites :
• Instance.x peut masquer.

Considérations de performance :
• N/A.

Exemples :
• Comparer C(B,A).

Remarques :
• Réponse : 1 — 1re option.`,

  2844: `print(C.x) avec C(B,A)

Débutant :
• 2 : B avant A, donc B.x prioritaire.

Intermédiaire :
• Symétrique de 2843.

Expert :
• Démonstration que l'ordre des bases est un choix API.

Concepts clés :
• Même mécanisme, autres valeurs.

Distinctions clés :
• Pas 1.

Fonctionnement :
• MRO (C,B,A,object).

Exécution étape par étape :
• B.x trouvé.

Ordre des opérations :
• Définition C(B,A).

Cas d'utilisation courants :
• Override sélectif.

Cas limites :
• Diamond pourrait réordonner au-delà des deux feuilles.

Considérations de performance :
• N/A.

Exemples :
• Juxtaposer avec 2843.

Remarques :
• Réponse : 2 — 1re option.`,

  2845: `Composition vs héritage (has-a / is-a)

Débutant :
• Composition = has-a ; héritage = is-a.

Intermédiaire :
• Voiture a un moteur vs Voiture est un Véhicule.

Expert :
• Loi de Demeter : composition réduit couplage structurel.

Concepts clés :
• Vocabulaire standard OOP.

Distinctions clés :
• Pas is-a / has-a inversé.

Fonctionnement :
• Deux axes de relation différents.

Exécution étape par étape :
• N/A code.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Modélisation domaine.

Cas limites :
• « is-a » abusif mène à hiérarchies profondes inutiles.

Considérations de performance :
• Délégation = un saut d'appel de plus.

Exemples :
• Engine dans Car vs Car(Vehicle).

Remarques :
• Réponse : has-a / is-a — 1re option.`,

  2846: `Quand préférer la composition ?

Débutant :
• Quand on veut flexibilité et couplage lâche, échanger des implémentations.

Intermédiaire :
• Pas quand la relation est un vrai is-a polymorphique strict.

Expert :
• Testabilité : injection de mocks sur attributs.

Concepts clés :
• Favor object composition over class inheritance (GoF).

Distinctions clés :
• Pas « quand besoin polymorphisme nominal » seul.

Fonctionnement :
• Références runtime remplaçables.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Stratégies, loggers, stockage interchangeable.

Cas limites :
• Trop de délégation : façade nécessaire.

Considérations de performance :
• Indirection légère.

Exemples :
• App(logger=...) du banque.

Remarques :
• Réponse : flexibilité / faible couplage — 1re option.`,

  2847: `Car avec self.engine = Engine() — quel pattern ?

Débutant :
• Composition : Car a un Engine, délègue start.

Intermédiaire :
• Pas d'héritage Car(Engine) absurde ici.

Expert :
• Permet moteur thermique/électrique injectable.

Concepts clés :
• Délégation explicite.

Distinctions clés :
• Pas Singleton ni Decorator dans l'énoncé.

Fonctionnement :
• car.start() → engine.start().

Exécution étape par étape :
• Deux objets dans le graphe.

Ordre des opérations :
• __init__ Car.

Cas d'utilisation courants :
• Injection de dépendances manuelle.

Cas limites :
• Cycle de vie engine : qui dispose ?

Considérations de performance :
• N/A.

Exemples :
• Passer engine au constructeur.

Remarques :
• Réponse : Composition — 1re option.`,

  2848: `Car(Vehicle): pass — quel pattern ?

Débutant :
• Héritage : Car est un Vehicle.

Intermédiaire :
• isinstance(car, Vehicle) True.

Expert :
• MRO (Car, Vehicle, object).

Concepts clés :
• Spécialisation vide = héritage pur.

Distinctions clés :
• Pas composition.

Fonctionnement :
• Délégation implicite via MRO.

Exécution étape par étape :
• start hérité.

Ordre des opérations :
• Instanciation Car.

Cas d'utilisation courants :
• Placeholder pour futures méthodes.

Cas limites :
• Classes vides multiples : préférer parfois Protocol.

Considérations de performance :
• N/A.

Exemples :
• Ajouter override start dans Car.

Remarques :
• Réponse : Héritage — 1re option.`,

  2849: `len(D.__mro__) avec D(A,B,C) sans autres liens

Débutant :
• 5 : D, A, B, C, object.

Intermédiaire :
• Trois parents indépendants + tête + racine.

Expert :
• Diamond ajouterait fusion mais pas ici.

Concepts clés :
• Compter les entrées du tuple.

Distinctions clés :
• Pas 4 (oublier object) ni 6.

Fonctionnement :
• C3 linéaire simple.

Exécution étape par étape :
• print(len(...)) → 5.

Ordre des opérations :
• Après définition D.

Cas d'utilisation courants :
• Vérifier profondeur MRO avant MI complexe.

Cas limites :
• Si bases partagent sous-arbre, len peut baisser (un seul object).

Considérations de performance :
• N/A.

Exemples :
• Afficher D.__mro__ en entier.

Remarques :
• Réponse : 5 — 1re option.`,

  2850: `class MyList(list) et isinstance(ml, list)

Débutant :
• True : sous-classe officielle du builtin list.

Intermédiaire :
• Hérite append, slicing, etc.

Expert :
• Attention à __init__ / __new__ si vous changez invariants.

Concepts clés :
• builtins sous-classables.

Distinctions clés :
• Pas False ni TypeError pour ce code.

Fonctionnement :
• MyList.__mro__ inclut list.

Exécution étape par étape :
• ml est instance de list pour isinstance.

Ordre des opérations :
• Après MyList([1,2,3]).

Cas d'utilisation courants :
• list avec méthodes métier (first, sum_safe).

Cas limites :
• Sous-classer dict avec clés spéciales : suivre doc.

Considérations de performance :
• Code C pour bulk ops reste sous-jacent.

Exemples :
• sorted(ml) fonctionne.

Remarques :
• Réponse : True — 1re option.`,
};
