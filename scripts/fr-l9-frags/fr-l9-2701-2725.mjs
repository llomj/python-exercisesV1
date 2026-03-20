/** Level 9 FR 2701–2725 — level9.ts Q1–25 (inheritance, overriding, super intro) */
export default {
  2701: `Qu'est-ce que l'héritage en Python ?

Débutant :
• La classe fille récupère attributs et méthodes de la classe mère via la liste de bases.

Intermédiaire :
• Relation « est-un » : Dog(Animal) signifie qu'un Dog se comporte comme un Animal pour le typage et le MRO.

Expert :
• La résolution des attributs suit le MRO ; super() s'appuie dessus.

Concepts clés :
• Réutilisation et spécialisation sans dupliquer toute la base.

Distinctions clés :
• Ce n'est pas la mère qui hérite de l'enfant ni des classes forcément indépendantes.

Fonctionnement :
• class Enfant(Parent): enregistre Parent dans Enfant.__bases__.

Exécution étape par étape :
• Accès Enfant.x ou instance.methode() : recherche dans Enfant puis ancêtres.

Ordre des opérations :
• Définition des classes d'abord ; héritage figé à la création de la classe fille.

Cas d'utilisation courants :
• Frameworks GUI, modèles métier, hiérarchies d'exceptions.

Cas limites :
• Héritage multiple : ordre des bases et C3 linearization.

Considérations de performance :
• Coût d'accès attribut léger ; MRO calculé une fois.

Exemples :
• Child().method() délègue à Parent si non surchargé.

Remarques :
• Réponse : la classe enfant obtient les fonctionnalités du parent (1re option).`,

  2702: `Parent.x = 1, class Child(Parent): pass — Child.x ?

Débutant :
• 1 : attribut de classe du parent visible sur la classe fille.

Intermédiaire :
• Lecture sur Child résout x dans la chaîne de classes (MRO), pas seulement dans Child.__dict__.

Expert :
• id(Parent.x) peut être partagé tant que la fille ne redéfinit pas x.

Concepts clés :
• Attributs de classe hérités comme clés dans le namespace résolu.

Distinctions clés :
• Pas d'erreur ni None pour ce schéma minimal.

Fonctionnement :
• type.__getattribute__ pour Child.x.

Exécution étape par étape :
• Child.__dict__ sans x → Parent trouvé.

Ordre des opérations :
• Résolution de nom de classe avant toute instance.

Cas d'utilisation courants :
• Constantes de classe partagées, compteurs par hiérarchie.

Cas limites :
• Si Child définit x, il masque Parent pour Child.x.

Considérations de performance :
• Lookup en O(1) typique sur dict de classe.

Exemples :
• Parent.x et Child.x identiques tant pas d'ombre.

Remarques :
• Réponse : 1 (1re option).`,

  2703: `Child(Parent): pass — Child().method() si Parent définit method → 1

Débutant :
• Retourne 1 : la méthode du parent s'applique à l'instance de Child avec self = cette instance.

Intermédiaire :
• Liaison : Python trouve la fonction dans Parent et passe l'instance Child comme premier argument.

Expert :
• self n'est pas typé : tout objet instance de la sous-classe convient.

Concepts clés :
• Héritage de code d'instance via la même résolution MRO.

Distinctions clés :
• Pas d'erreur si la signature correspond.

Fonctionnement :
• Descripteur fonction sur la classe Parent.

Exécution étape par étape :
• Cherche method dans Child puis Parent ; appelle.

Ordre des opérations :
• Création instance puis appel de méthode.

Cas d'utilisation courants :
• Hooks par défaut surchargés plus tard dans les sous-classes.

Cas limites :
• Méthode abstraite ou manquante plus bas : erreur à l'appel.

Considérations de performance :
• Appel normal de méthode.

Exemples :
• Animal.speak générique, Dog surcharge plus tard.

Remarques :
• Réponse : 1 (1re option).`,

  2704: `issubclass(Child, Parent)

Débutant :
• True si Child hérite directement ou indirectement de Parent (ici direct).

Intermédiaire :
• issubclass(Child, Child) est aussi True.

Expert :
• Ne pas confondre avec isinstance(obj, cls).

Concepts clés :
• Relation entre objets classe.

Distinctions clés :
• Pas False ni erreur pour ce couple.

Fonctionnement :
• Vérifie la chaîne de sous-types.

Exécution étape par étape :
• Child dans les sous-classes enregistrées de Parent.

Ordre des opérations :
• Évaluation des deux arguments puis test.

Cas d'utilisation courants :
• Validation d'API, factories.

Cas limites :
• Premier argument doit être une classe (pas une instance).

Considérations de performance :
• Rapide pour hiérarchies peu profondes.

Exemples :
• issubclass(bool, int) True.

Remarques :
• Réponse : True (1re option).`,

  2705: `isinstance(Child(), Parent)

Débutant :
• True : une instance de sous-classe est considérée comme instance des ancêtres.

Intermédiaire :
• Plus utile que type(obj) is Parent pour accepter les sous-types.

Expert :
• Tuple de classes en 2e argument possible.

Concepts clés :
• Polymorphisme runtime.

Distinctions clés :
• Pas False ici.

Fonctionnement :
• Parcourt MRO du type de l'objet.

Exécution étape par étape :
• Child() → type Child ; Parent dans les bases.

Ordre des opérations :
• isinstance après construction.

Cas d'utilisation courants :
• Traiter uniformément Base et dérivées.

Cas limites :
• Ancêtres abstraits : isinstance peut être True alors que la classe ABC interdit instanciation directe ailleurs.

Considérations de performance :
• Optimisé en CPython.

Exemples :
• isinstance([], object) True.

Remarques :
• Réponse : True (1re option).`,

  2706: `Child.__bases__

Débutant :
• Tuple contenant Parent (un seul élément ici).

Intermédiaire :
• Lecture directe du tuple figé à la définition de la classe.

Expert :
• En héritage multiple : ordre des bases conservé.

Concepts clés :
• Introspection des parents directs.

Distinctions clés :
• Pas tuple vide ni erreur.

Fonctionnement :
• Attribut sur l'objet classe.

Exécution étape par étape :
• Après exécution du corps class Child(Parent).

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Outils de doc, tests, métaprogrammation légère.

Cas limites :
• Ne liste pas les grands-parents.

Considérations de performance :
• N/A.

Exemples :
• len(Child.__bases__) == 1.

Remarques :
• Réponse : tuple avec Parent (1re option, forme typique __main__.Parent).`,

  2707: `obj = Child(), Parent.x = 1 classe — obj.x ?

Débutant :
• 1 : les instances voient les attributs de classe hérités via la résolution sur le type.

Intermédiaire :
• Pas besoin de copier x sur chaque instance.

Expert :
• Si instance.__dict__ reçoit 'x', elle peut masquer la classe selon la règle data-descriptor / dict.

Concepts clés :
• Attribut de classe partagé logiquement.

Distinctions clés :
• Pas Error.

Fonctionnement :
• Cherche x dans instance.__dict__, puis Child, puis Parent.

Exécution étape par étape :
• Trouve x sur Parent.

Ordre des opérations :
• Accès attribut après __init__ implicite object.

Cas d'utilisation courants :
• Compteur partagé, configuration par défaut.

Cas limites :
• Mutation d'un mutable de classe : visible partout.

Considérations de performance :
• Un hop de plus sur la MRO.

Exemples :
• id(obj.x) cohérent avec int 1.

Remarques :
• Réponse : 1 (1re option).`,

  2708: `Parent.__init__ pose self.x = 1, Child: pass — Child().x ?

Débutant :
• 1 : Child hérite __init__ de Parent, exécuté à la construction.

Intermédiaire :
• object.__init__ seul ne suffit pas ici car Parent définit __init__.

Expert :
• Si Child redéfinit __init__ sans super, cas différent (voir questions suivantes).

Concepts clés :
• Constructeur hérité comme toute méthode.

Distinctions clés :
• Pas besoin de réécrire pass pour appeler le parent.

Fonctionnement :
• Child() résout __init__ via MRO → Parent.__init__.

Exécution étape par étape :
• Alloue instance ; appelle __init__ ; self.x = 1.

Ordre des opérations :
• __new__ puis __init__.

Cas d'utilisation courants :
• Initialisation commune factorisée.

Cas limites :
• __init__ parent avec arguments : Child doit les transmettre.

Considérations de performance :
• N/A.

Exemples :
• super().__init__() explicite en sous-classe enrichie.

Remarques :
• Réponse : 1 (1re option).`,

  2709: `Parent.__subclasses__()

Débutant :
• Liste (liste en direct) des sous-classes directes enregistrées, ici [Child].

Intermédiaire :
• Ne remonte pas les petits-enfants ni classes non encore définies.

Expert :
• Utile pour registres simples ; pas un substitut robuste à un plugin loader.

Concepts clés :
• Registre maintenu par le runtime.

Distinctions clés :
• Pas liste vide si Child a été créée.

Fonctionnement :
• Mise à jour quand la sous-classe est construite.

Exécution étape par étape :
• Après définition de Child.

Ordre des opérations :
• Appel au moment de l'introspection.

Cas d'utilisation courants :
• Découverte de stratégies, tests.

Cas limites :
• Classes supprimées du module : comportement subtil selon références.

Considérations de performance :
• Liste courte en général.

Exemples :
• assert Child in Parent.__subclasses__().

Remarques :
• Réponse : liste contenant Child (1re option).`,

  2710: `Parent.x = 1, Child(Parent): x = 2 — Child.x ?

Débutant :
• 2 : la définition sur Child masque la valeur du parent pour la résolution sur Child.

Intermédiaire :
• Parent.x reste 1 si on lit via Parent.

Expert :
• Ombre sur la classe fille n'efface pas l'attribut parent.

Concepts clés :
• Shadowing d'attribut de classe.

Distinctions clés :
• Pas 1 via Child.x.

Fonctionnement :
• Child.__dict__ contient x en premier dans la recherche pour Child.

Exécution étape par étape :
• Child.x → trouvé localement.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Surcharge de constantes, flags de feature.

Cas limites :
• Instances créées avant redéfinition : rare en pratique pour classes.

Considérations de performance :
• N/A.

Exemples :
• super() pour lire la valeur parent si besoin.

Remarques :
• Réponse : 2 (1re option).`,

  2711: `Qu'est-ce que la redéfinition (override) de méthode ?

Débutant :
• La classe enfant définit une méthode du même nom que le parent pour remplacer le comportement à l'appel sur une instance enfant.

Intermédiaire :
• Le parent peut rester accessible via super().

Expert :
• Collaboratif vs remplacement total : patterns template method.

Concepts clés :
• Même nom, dispatch dynamique sur le type réel.

Distinctions clés :
• Pas le parent qui redéfinit l'enfant.

Fonctionnement :
• MRO : première implémentation trouvée gagne pour ce type.

Exécution étape par étape :
• Child().m() → cherche m dans Child d'abord.

Ordre des opérations :
• Lier puis appeler.

Cas d'utilisation courants :
• Polymorphisme OO classique.

Cas limites :
• super() mal chaîné en diamant : ordre MRO crucial.

Considérations de performance :
• Identique à un appel normal une fois résolu.

Exemples :
• area() spécialisée par forme.

Remarques :
• Réponse : l'enfant redéfinit la méthode du parent (1re option).`,

  2712: `Parent.method → 1, Child.method → 2 — Child().method() ?

Débutant :
• 2 : version enfant prioritaire sur l'instance Child.

Intermédiaire :
• Parent().method() resterait 1.

Expert :
• Lié au type runtime, pas au type déclaré d'une variable.

Concepts clés :
• Override concret.

Distinctions clés :
• Pas 1 pour Child().

Fonctionnement :
• Résolution sur type( instance ).__mro__.

Exécution étape par étape :
• Trouve method dans Child.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Comportements spécialisés.

Cas limites :
• Méthode dans __slots__ ou descriptors : cas rares.

Considérations de performance :
• N/A.

Exemples :
• isinstance garantit interface, pas implémentation unique.

Remarques :
• Réponse : 2 (1re option).`,

  2713: `Child.method return super().method(), parent return 1

Débutant :
• Résultat 1 : super() appelle l'implémentation du parent dans cette méthode enfant.

Intermédiaire :
• En Python 3, super() sans argument infère classe et instance depuis le cadre.

Expert :
• Enchaînement MRO pour héritage multiple.

Concepts clés :
• Réutiliser puis étendre.

Distinctions clés :
• Pas 2 ici.

Fonctionnement :
• super() retourne un proxy ; .method() résout vers Parent.

Exécution étape par étape :
• Entre dans Child.method → super().method → Parent.method.

Ordre des opérations :
• Appel super évalué avant return.

Cas d'utilisation courants :
• Valider puis appeler logique parent.

Cas limites :
• Oublier super dans __init__ : attributs parent absents.

Considérations de performance :
• Léger coût proxy.

Exemples :
• Chaîne de validateurs.

Remarques :
• Réponse : 1 (1re option).`,

  2714: `return super().method() + 1, parent return 1

Débutant :
• 2 : extension du résultat parent.

Intermédiaire :
• Pattern « wrap » numérique ou concaténation selon types.

Expert :
• Peut combiner listes, chaînes, etc. si + défini.

Concepts clés :
• Composition du comportement.

Distinctions clés :
• Pas 1 seul.

Fonctionnement :
• Évalue d'abord super().method() puis addition.

Ordre des opérations :
• Appel fonction avant +.

Cas d'utilisation courants :
• Logging, métriques, décorateurs via sous-classe.

Cas limites :
• Si parent lève : pas d'addition.

Considérations de performance :
• N/A.

Exemples :
• return super().save() and extra_cleanup() (bool différent).

Remarques :
• Réponse : 2 (1re option).`,

  2715: `Child redéfinit __init__ sans super — Child().x après Parent.__init__ mettait x

Débutant :
• AttributeError : le __init__ parent n'a pas couru, donc self.x jamais créé (dans ce scénario).

Intermédiaire :
• object.__init__ ne remplit pas les champs du parent personnalisé.

Expert :
• Toujours chaîner super().__init__(...) quand le parent initialise l'état.

Concepts clés :
• Override de constructeur ≠ appel automatique implicite au parent personnalisé.

Distinctions clés :
• Pas 1 silencieux.

Fonctionnement :
• Seul Child.__init__ s'exécute ; il ne pose que y.

Exécution étape par étape :
• Accès x → absent sur __dict__.

Ordre des opérations :
• __init__ puis accès attribut.

Cas d'utilisation courants :
• Bug fréquent en hiérarchies profondes.

Cas limites :
• Descriptors ou __getattr__ pourraient masquer l'erreur dans d'autres designs.

Considérations de performance :
• N/A.

Exemples :
• Corriger avec super().__init__().

Remarques :
• Réponse : AttributeError (1re option).`,

  2716: `Child.__init__ appelle super().__init__ puis y — obj.x ?

Débutant :
• 1 : chaîne correcte vers Parent.__init__.

Intermédiaire :
• Ordre : souvent super d'abord, puis attributs spécifiques enfant.

Expert :
• MRO multi-bases : un seul super().__init__ bien placé peut suffire si la chaîne coopère.

Concepts clés :
• Initialisation coopérative.

Distinctions clés :
• Pas erreur.

Fonctionnement :
• Parent pose x ; enfant pose y.

Exécution étape par étape :
• Child() → Child.__init__ → super → Parent.__init__.

Ordre des opérations :
• super() avant self.y = 2 ici.

Cas d'utilisation courants :
• Modèles avec champs obligatoires parent + optionnels enfant.

Cas limites :
• Signatures incompatibles entre parents multiples : concevoir avec soin.

Considérations de performance :
• N/A.

Exemples :
• dataclass + sous-classe field().

Remarques :
• Réponse : 1 (1re option).`,

  2717: `Child sans method, Parent.method return 'parent' — Child().method() ?

Débutant :
• 'parent' : héritage pur de la méthode.

Intermédiaire :
• self est une instance Child pendant l'exécution du corps Parent.method.

Expert :
• Peut surprendre si le code parent teste type(self) strict.

Concepts clés :
• Code partagé sans override.

Distinctions clés :
• Pas 'child'.

Fonctionnement :
• MRO : Parent après Child vide pour ce nom.

Exécution étape par étape :
• Liaison Parent.method(instance Child).

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Comportement par défaut + rares surcharges.

Cas limites :
• Méthode abstraite avec corps via ABC : autres règles.

Considérations de performance :
• N/A.

Exemples :
• Template method avec hook abstrait ailleurs.

Remarques :
• Réponse : 'parent' (1re option).`,

  2718: `Parent().method() alors que Child surcharge avec super

Débutant :
• 1 : l'instance est Parent, donc Parent.method direct, sans passer par Child.

Intermédiaire :
• La surcharge enfant n'affecte pas le dispatch sur Parent().

Expert :
• isinstance vs type : ici type déjà Parent.

Concepts clés :
• Polymorphisme basé sur l'objet réel.

Distinctions clés :
• Pas lecture de la méthode enfant.

Fonctionnement :
• MRO de Parent s'arrête avant Child.

Exécution étape par étape :
• Parent().method → trouve dans Parent.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Tests unitaires de la base seule.

Cas limites :
• N/A.

Considérations de performance :
• N/A.

Exemples :
• API qui accepte Base ou Sub.

Remarques :
• Réponse : 1 (1re option).`,

  2719: `classmethod override Parent return 1, Child return 2 — Child.method() ?

Débutant :
• 2 : même règle de nom que pour les méthodes d'instance.

Intermédiaire :
• cls sera Child lors de l'appel sur Child.

Expert :
• Fabriques : cls() dans une classmethod parent respecte la sous-classe.

Concepts clés :
• Polymorphisme sur le type lié.

Distinctions clés :
• Pas 1 via Child.method().

Fonctionnement :
• @classmethod descripteur non-data ; résolution sur Child.

Exécution étape par étape :
• Child.method → méthode de Child.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• from_config, parsers.

Cas limites :
• classmethod + staticmethod mélangés : lisibilité.

Considérations de performance :
• N/A.

Exemples :
• Parent.method() encore 1.

Remarques :
• Réponse : 2 (1re option).`,

  2720: `staticmethod override 1 vs 2 — Child.method() ?

Débutant :
• 2 : la version enfant remplace celle du parent pour l'attribut method sur Child.

Intermédiaire :
• Pas de self/cls : résolution purement sur le dict de classe.

Expert :
• super() inutilisable sans contexte (question suivante enchaîne).

Concepts clés :
• Les staticmethod suivent aussi l'ombre de nom.

Distinctions clés :
• Pas 1.

Fonctionnement :
• Même mécanisme d'override par nom.

Exécution étape par étape :
• Child.method() résout la fonction enfant.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Utilitaires de classe évolutifs.

Cas limites :
• Héritage : pas de late binding implicite du self.

Considérations de performance :
• N/A.

Exemples :
• Préférer classmethod si besoin de cls.

Remarques :
• Réponse : 2 (1re option).`,

  2721: `super() sans argument dans instance method — résultat classique

Débutant :
• Child().method() retourne 1 via parent comme vu plus haut.

Intermédiaire :
• Équivalent pratique à super(Child, self).method() en Py3 dans méthode normale.

Expert :
• Nécessite cadre de méthode ; échoue hors méthode.

Concepts clés :
• Sucre syntaxique sécurisé pour chaîne MRO.

Distinctions clés :
• Pas Error ici.

Fonctionnement :
• Compiler injecte implicite classcell pour super zero-arg.

Exécution étape par étape :
• Proxy pointe vers le lien suivant dans MRO après Child.

Ordre des opérations :
• super() puis .method().

Cas d'utilisation courants :
• 90 % des appels parent en sous-classe.

Cas limites :
• Fonctions imbriquées sans closure correct : éviter.

Considérations de performance :
• N/A.

Exemples :
• Voir doc super().

Remarques :
• Réponse : 1 (1re option).`,

  2722: `super(Child, self).method() explicite

Débutant :
• Même effet que super() nu ici : retour 1.

Intermédiaire :
• Style explicite utile en refactor ou hors corps classique.

Expert :
• En Py2 interop ; encore valide en Py3.

Concepts clés :
• Contrôle classe départ et instance.

Distinctions clés :
• Pas Error.

Fonctionnement :
• Premier arg : point de départ MRO ; second : instance pour liaison.

Exécution étape par étape :
• Résout Parent.method lié.

Ordre des opérations :
• Évaluation Child, self, puis super, puis method.

Cas d'utilisation courants :
• Proxies, mixins dynamiques.

Cas limites :
• Mauvais premier argument : mauvais parent choisi.

Considérations de performance :
• N/A.

Exemples :
• super(SubClass, self) dans mixin.

Remarques :
• Réponse : 1 (1re option).`,

  2723: `super().x pour attribut de classe Parent.x=1 même si Child.x=2

Débutant :
• Retourne 1 via super : accès au namespace « suivant » dans MRO pour ce nom, ici Parent.

Intermédiaire :
• Contourne l'ombre Child.x pour lire la valeur parent.

Expert :
• Utile pour constantes étendues ou logging.

Concepts clés :
• super n'est pas limité aux méthodes.

Distinctions clés :
• Pas 2.

Fonctionnement :
• __getattribute__ spécifique au proxy super.

Exécution étape par étape :
• method lit super().x → cherche x après Child dans MRO.

Ordre des opérations :
• Dans corps de méthode instance.

Cas d'utilisation courants :
• Valeur par défaut parent + surcharge affichage enfant.

Cas limites :
• Si aucun ancêtre n'a x : AttributeError.

Considérations de performance :
• N/A.

Exemples :
• Comparer avec Child.x direct = 2.

Remarques :
• Réponse : 1 (1re option).`,

  2724: `super().__init__(x) avec Parent(x), Child(x,y) — obj.x après Child(1,2)

Débutant :
• 1 : x transmis au parent.

Intermédiaire :
• y = 2 sur l'instance en plus.

Expert :
• Pattern standard args kwargs vers le haut.

Concepts clés :
• Pass-through des paramètres constructeur.

Distinctions clés :
• Pas 2 pour x.

Fonctionnement :
• Child.__init__ appelle super().__init__(x).

Exécution étape par étape :
• Parent.__init__ exécute self.x = x.

Ordre des opérations :
• super d'abord souvent pour invariant parent.

Cas d'utilisation courants :
• Formulaires, widgets hiérarchiques.

Cas limites :
• Ordre des kwargs en multi-héritage.

Considérations de performance :
• N/A.

Exemples :
• super().__init__(**kwargs) générique.

Remarques :
• Réponse : 1 (1re option).`,

  2725: `classmethod avec super().method() sur Child

Débutant :
• Child.method() retourne 1 : super en classmethod suit MRO avec cls=Child.

Intermédiaire :
• Premier argument effectif est la classe liée (Child), pas une instance.

Expert :
• Cohérent avec coopération entre classmethods.

Concepts clés :
• super() sans self fonctionne car cls fourni par le descripteur.

Distinctions clés :
• Pas Error ici (contrairement au staticmethod pur avec super nu).

Fonctionnement :
• MRO : après Child vient Parent ; appelle Parent.method(cls).

Exécution étape par étape :
• Child.method() → Child subclass classmethod exécute return super().method().

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Registres de sous-classes enrichissant le parent.

Cas limites :
• staticmethod + super : voir question 2726.

Considérations de performance :
• N/A.

Exemples :
• pipeline de construction cls.

Remarques :
• Réponse : 1 (1re option).`,
};
