/** Level 9 FR 2776–2800 — level9.ts Q76–100 (ABC fin, isinstance/issubclass, super, héritage) */
export default {
  2776: `Child.__abstractmethods__ après implémentation de method

Débutant :
• frozenset() vide : plus aucune méthode abstraite sur Child.

Intermédiaire :
• Python retire les noms au fur et à mesure des implémentations concrètes.

Expert :
• Si une nouvelle abstractmethod apparaît dans une sous-classe, le set se repeuple.

Concepts clés :
• État concret vs abstrait exposé sur la classe.

Distinctions clés :
• Contraste avec Parent encore abstrait si non touché.

Fonctionnement :
• Algorithme ABCMeta met à jour __abstractmethods__ à chaque classe créée.

Exécution étape par étape :
• Child définit method → set vide → Child() OK.

Ordre des opérations :
• Définir Parent ; Child ; inspecter Child.

Cas d'utilisation courants :
• Vérifier qu'une couche intermédiaire a tout implémenté.

Cas limites :
• Méthode abstraite avec @classmethod compte aussi (2777).

Considérations de performance :
• N/A.

Exemples :
• bool(Child.__abstractmethods__) est False.

Remarques :
• Réponse : frozenset() / frozenset vide (1re option).`,

  2777: `MyClass avec @abstractmethod @classmethod method — MyClass() ?

Débutant :
• TypeError : une méthode de classe peut être abstraite aussi.

Intermédiaire :
• L'ordre des décorateurs : @abstractmethod au-dessus de @classmethod selon usage du module abc.

Expert :
• Sous-classe devra fournir @classmethod def method concrète.

Concepts clés :
• ABC couvre instance, classmethod et staticmethod.

Distinctions clés :
• Diffère d'une classmethod pure non abstract instanciable.

Fonctionnement :
• __abstractmethods__ contient 'method' jusqu'à implémentation.

Exécution étape par étape :
• MyClass() échoue.

Ordre des opérations :
• Définition ; instanciation.

Cas d'utilisation courants :
• Fabriques ou parsers par sous-classe au niveau classe.

Cas limites :
• Oublier @classmethod dans l'enfant crée une méthode instance (erreur de contrat).

Considérations de performance :
• N/A.

Exemples :
• Implémenter method(cls) dans Concrete.

Remarques :
• Réponse : TypeError (1re option).`,

  2778: `MyClass avec @abstractmethod @staticmethod method — MyClass() ?

Débutant :
• TypeError : static abstraite bloque aussi l'instanciation.

Intermédiaire :
• Utile pour utilitaires devant être fournis par chaque sous-classe.

Expert :
• Souvent préférer fonction module ou protocol typing à static abstrait.

Concepts clés :
• abstractmethod s'applique au callable décoré, pas seulement self.

Distinctions clés :
• 2777 cls vs 2778 pas d'arguments implicites.

Fonctionnement :
• Garde-fou identique : classe non concrète.

Exécution étape par étape :
• MyClass() lève.

Ordre des opérations :
• Définition ; ().

Cas d'utilisation courants :
• Jeux de tests imposant constantes ou helpers par sous-classe.

Cas limites :
• staticmethod abstrait moins idiomatique en Python moderne.

Considérations de performance :
• N/A.

Exemples :
• Concrete définit def method(): return 1.

Remarques :
• Réponse : TypeError (1re option).`,

  2779: `issubclass(Child, Parent) avec Child abstrait

Débutant :
• True : la relation de sous-type ne dépend pas de la concrétude.

Intermédiaire :
• Seule l'instanciation est bloquée ; l'arbre de types reste correct.

Expert :
• combine avec typing pour protocols séparément.

Concepts clés :
• Subtyping (classes) vs instanciation (objets).

Distinctions clés :
• isinstance nécessite un objet ; ici on compare classes.

Fonctionnement :
• issubclass parcourt __bases__ / MRO.

Exécution étape par étape :
• Retour True même si Child() interdit.

Ordre des opérations :
• Définir hiérarchie ; appeler issubclass.

Cas d'utilisation courants :
• Enregistrement de plugins par classe avant instanciation différée.

Cas limites :
• Child enregistré virtuellement via ABC.register : autre mécanisme.

Considérations de performance :
• O(hauteur MRO) négligeable.

Exemples :
• assert issubclass(Child, Parent).

Remarques :
• Réponse : True (1re option).`,

  2780: `isinstance(MyClass(), MyClass) avec MyClass ABC abstract

Débutant :
• TypeError (impossible d'instancier) : MyClass() échoue avant isinstance.

Intermédiaire :
• isinstance n'est jamais atteint avec une instance valide ici.

Expert :
• Tester avec Concrete(MyClass) puis isinstance(Concrete(), MyClass) → True.

Concepts clés :
• Ordre d'évaluation des arguments.

Distinctions clés :
• Diffère de issubclass sur classes sans créer d'objet.

Fonctionnement :
• Constructeur abstrait lève.

Exécution étape par étape :
• Évaluation MyClass() dans l'appel isinstance.

Ordre des opérations :
• Appel isinstance ; premier argument échoue d'abord.

Cas d'utilisation courants :
• Éviter les tests isinstance sur ABC non implémentées.

Cas limites :
• None ou objets proxy : hors sujet.

Considérations de performance :
• N/A.

Exemples :
• Pattern test avec sous-classe concrète anonyme.

Remarques :
• Réponse : TypeError (ne peut pas instancier) (1re option).`,

  2781: `isinstance(Child(), Parent)

Débutant :
• True : l'enfant « est-un » parent pour isinstance.

Intermédiaire :
• isinstance consulte la MRO de type(obj).

Expert :
• Préférer souvent duck typing ; isinstance utile pour fichiers, exceptions.

Concepts clés :
• Polymorphisme nominal en Python.

Distinctions clés :
• type(Child()) is Parent est False alors que isinstance True.

Fonctionnement :
• Vérifie si Parent apparaît dans la chaîne.

Exécution étape par étape :
• Child instance → oui sous-type de Parent.

Ordre des opérations :
• Child() puis isinstance.

Cas d'utilisation courants :
• Traiter liste mixte avec branche selon base.

Cas limites :
• Classes dupliquées par reload : surprises rares.

Considérations de performance :
• isinstance optimisé pour types built-in.

Exemples :
• File-like handlers.

Remarques :
• Réponse : True (1re option).`,

  2782: `isinstance(Child(), Child)

Débutant :
• True : tout objet est instance de sa propre classe.

Intermédiaire :
• Toujours vrai pour une instance directe non proxy.

Expert :
• Avec sous-classe de types dynamiques, vérifier __class__.

Concepts clés :
• Cas de base du test isinstance.

Distinctions clés :
• Peut être True pour plusieurs classes (parent + enfant).

Fonctionnement :
• Premier check : type exact puis ancêtres.

Exécution étape par étape :
• Match immédiat sur Child.

Ordre des opérations :
• Instanciation ; test.

Cas d'utilisation courants :
• Dispatch fin sur type le plus dérivé.

Cas limites :
• object : isinstance(x, object) toujours True pour instances classiques.

Considérations de performance :
• N/A.

Exemples :
• isinstance(3, int) True.

Remarques :
• Réponse : True (1re option).`,

  2783: `isinstance(Child(), (Parent, str))

Débutant :
• True : le tuple signifie « l'un ou l'autre ».

Intermédiaire :
• Court-circuit interne dès premier match.

Expert :
• Équivalent à or chaîné de isinstance plus lisible.

Concepts clés :
• Deuxième argument tuple de types.

Distinctions clés :
• Un seul type dans le tuple reste valide.

Fonctionnement :
• Teste Parent : succès.

Exécution étape par étape :
• Retour True sans tester str.

Ordre des opérations :
• Création instance ; isinstance.

Cas d'utilisation courants :
• Normaliser str | BytesPath.

Cas limites :
• Tuple vide ? non supporté logiquement.

Considérations de performance :
• Léger sur petite liste de types.

Exemples :
• isinstance(x, (list, tuple)).

Remarques :
• Réponse : True (1re option).`,

  2784: `isinstance(Parent(), Child)

Débutant :
• False : la relation ne remonte pas des parents vers enfants.

Intermédiaire :
• Seuls les ancêtres du type réel comptent.

Expert :
• Modélisation LSP : pas tout Parent est Child.

Concepts clés :
• Direction de la hiérarchie.

Distinctions clés :
• Inverse de 2781.

Fonctionnement :
• Child absent du MRO de Parent.

Exécution étape par étape :
• Retour False.

Ordre des opérations :
• Parent() ; isinstance vers Child.

Cas d'utilisation courants :
• Éviter les faux positifs sur API étroite.

Cas limites :
• ABC.register peut élargir : hors hiérarchie classique.

Considérations de performance :
• N/A.

Exemples :
• isinstance(object(), int) False.

Remarques :
• Réponse : False (1re option).`,

  2785: `issubclass(Child, Parent)

Débutant :
• True : Child dérive explicitement de Parent.

Intermédiaire :
• issubclass(Child, Child) est True aussi (réflexivité).

Expert :
• Utile dans les métaclasses et plugins.

Concepts clés :
• Test sur objets type, pas instances.

Distinctions clés :
• Ne pas confondre avec isinstance.

Fonctionnement :
• Parcourt __subclasscheck__ possible (hooks).

Exécution étape par étape :
• Succès direct.

Ordre des opérations :
• Après définition des classes.

Cas d'utilisation courants :
• Registres de handlers par base.

Cas limites :
• Types non classes (None) lèvent TypeError.

Considérations de performance :
• N/A.

Exemples :
• issubclass(bool, int) True en Python.

Remarques :
• Réponse : True (1re option).`,

  2786: `issubclass(Parent, Child)

Débutant :
• False : l'arête d'héritage va Child → Parent.

Intermédiaire :
• Pas de relation inverse automatique.

Expert :
• Graphe de classes orienté.

Concepts clés :
• Anti-symétrie sauf égalité de classes.

Distinctions clés :
• Inverse de 2785.

Fonctionnement :
• Parent n'est pas sous-classe de Child.

Exécution étape par étape :
• False.

Ordre des opérations :
• Classes définies ; test.

Cas d'utilisation courants :
• Validation d'ordre dans frameworks.

Cas limites :
• Diamond MRO : toujours sous-type de tous ancêtres, pas l'inverse.

Considérations de performance :
• N/A.

Exemples :
• Analogie ensembles inclusion.

Remarques :
• Réponse : False (1re option).`,

  2787: `issubclass(Child, (Parent, str))

Débutant :
• True : tuple de bases possibles pour le second argument.

Intermédiaire :
• Child sous-classe Parent donc match.

Expert :
• Généralise à unions de types statiques (typing.Union) conceptuellement.

Concepts clés :
• OR sur classes cibles.

Distinctions clés :
• Diffère de isinstance qui prend instance en premier.

Fonctionnement :
• Premier membre du tuple suffit.

Exécution étape par étape :
• True.

Ordre des opérations :
• Définition ; issubclass.

Cas d'utilisation courants :
• Vérifier enregistrement dans plusieurs bases mixins.

Cas limites :
• str final : Child typiquement ne sous-classe pas str ici.

Considérations de performance :
• N/A.

Exemples :
• Plugin héritant d'une ABC ou d'un mixin alternatif.

Remarques :
• Réponse : True (1re option).`,

  2788: `Chaîne A → B → C — issubclass(C, A)

Débutant :
• True : transitivité de la relation sous-classe.

Intermédiaire :
• Pas besoin d'être enfant direct.

Expert :
• MRO linéaire garantit la cohérence C3.

Concepts clés :
• Héritage multi-niveaux.

Distinctions clés :
• issubclass(C, B) aussi True.

Fonctionnement :
• Remonte la chaîne des bases.

Exécution étape par étape :
• Trouve A comme ancêtre de C.

Ordre des opérations :
• Déclarer trois classes ; test.

Cas d'utilisation courants :
• Frameworks UI profonds.

Cas limites :
• Héritage multiple : toujours vrai si A dans MRO(C).

Considérations de performance :
• N/A.

Exemples :
• Modèle Animal → Mammal → Dog.

Remarques :
• Réponse : True (1re option).`,

  2789: `Même chaîne — isinstance(C(), A)

Débutant :
• True : l'instance suit tout le MRO de C.

Intermédiaire :
• Parallèle exact de 2788 côté objets.

Expert :
• isinstance plus idiomatique que type(x) == pour APIs ouvertes.

Concepts clés :
• « Est instance de » inclut ancêtres.

Distinctions clés :
• type(C()) is A est False si C intermédiaire existe.

Fonctionnement :
• Même algorithme de recherche.

Exécution étape par étape :
• C() puis isinstance vers A : True.

Ordre des opérations :
• Instanciation ; test.

Cas d'utilisation courants :
• Traiter Dog comme Animal.

Cas limites :
• __class__ monkey-patch change les règles.

Considérations de performance :
• N/A.

Exemples :
• File-like sur io.BytesIO vs bytes.

Remarques :
• Réponse : True (1re option).`,

  2790: `class C(A, B) — issubclass(C, A) and issubclass(C, B)

Débutant :
• True : héritage multiple rend C sous-type des deux.

Intermédiaire :
• Les deux tests doivent réussir pour que and soit True.

Expert :
• Résolution MRO fixe l'ordre de recherche d'attributs (C3).

Concepts clés :
• Multi-bases dans une seule déclaration.

Distinctions clés :
• Diffère de hiérarchies linéaires seules.

Fonctionnement :
• C enregistre tuple (A, B) dans __bases__.

Exécution étape par étape :
• Chaque issubclass True → and True.

Ordre des opérations :
• Définir A, B, C ; expression booléenne.

Cas d'utilisation courants :
• Mixins + ABC concrète.

Cas limites :
• Diamond problème résolu par C3 linearization.

Considérations de performance :
• N/A.

Exemples :
• Tk mixin styles.

Remarques :
• Réponse : True (1re option).`,

  2791: `[obj.x, obj.y] avec super().__init__ puis self.y = 2

Débutant :
• [1, 2] : le parent pose x, l'enfant pose y.

Intermédiaire :
• Sans super().__init__, x manquerait souvent (sauf si object).

Expert :
• En héritage multiple, super suit le MRO linéaire.

Concepts clés :
• Chaînage d'initialiseurs.

Distinctions clés :
• Child().__init__ seul sans super laisserait x absent.

Fonctionnement :
• super().__init__() résout vers MyClass.__init__.

Exécution étape par étape :
• x=1 puis y=2 sur self unique.

Ordre des opérations :
• Child() déclenche Child.__init__.

Cas d'utilisation courants :
• Widgets dérivés initialisant la base GUI.

Cas limites :
• Signatures différentes : passer kwargs patterns.

Considérations de performance :
• N/A.

Exemples :
• Modèle données parent + métadonnées enfant.

Remarques :
• Réponse : [1, 2] (1re option).`,

  2792: `super().__init__(x) avec MyClass(x) et Child(x,y)

Débutant :
• Child(1,2).x vaut 1 : l'argument x est relayé au parent.

Intermédiaire :
• self partagé : le parent écrit self.x avant y côté enfant.

Expert :
• En Python 3, super() sans args dans méthode utilise __class__ et self automatiquement.

Concepts clés :
• Pass-through des paramètres constructeur.

Distinctions clés :
• Diffère de super() sans arguments vers parent sans params.

Fonctionnement :
• Child.__init__ appelle MyClass.__init__(self, x).

Exécution étape par étape :
• x=1, y=2 sur l'instance.

Ordre des opérations :
• Appel Child(1,2).

Cas d'utilisation courants :
• Modèles Person → Employee avec champs supplémentaires.

Cas limites :
• Oublier *args/**kwargs casse extensions.

Considérations de performance :
• N/A.

Exemples :
• super().__init__(name) puis self.id = id.

Remarques :
• Réponse : 1 (1re option).`,

  2793: `GrandChild.x — MyClass.x = 1, Child.x = 2, class GrandChild(Child)

Débutant :
• 2 : résolution sur la première classe du MRO qui définit x.

Intermédiaire :
• GrandChild lit l'attribut de classe via Child avant MyClass.

Expert :
• Si GrandChild redéfinissait x=3, ce serait 3.

Concepts clés :
• Shadowing d'attributs de classe.

Distinctions clés :
• Pas d'instance.__dict__ requis pour attribut de classe.

Fonctionnement :
• MRO : GrandChild, Child, MyClass, object.

Exécution étape par étape :
• Trouve x dans Child.

Ordre des opérations :
• Accès GrandChild.x (classe).

Cas d'utilisation courants :
• Defaults hiérarchiques sur compteurs ou constantes.

Cas limites :
• Instance avec même nom masque classe sur l'objet.

Considérations de performance :
• N/A.

Exemples :
• Thème UI surchargé par sous-thème.

Remarques :
• Réponse : 2 (1re option).`,

  2794: `Child.method avec return super().method() + 1

Débutant :
• 2 : extension au lieu de remplacement pur.

Intermédiaire :
• super() choisit la méthode suivante dans le MRO après Child.

Expert :
• Collaborative inheritance avec héritage multiple.

Concepts clés :
• Réutilisation du comportement parent.

Distinctions clés :
• Sans super, retour 1 seulement si on dupliquait mal.

Fonctionnement :
• super().method() → 1 ; +1 → 2.

Exécution étape par étape :
• Appel sur instance Child().

Ordre des opérations :
• Résolution méthode ; corps.

Cas d'utilisation courants :
• Logging autour d'une méthode parent.

Cas limites :
• super() mal utilisé en static context lève.

Considérations de performance :
• N/A.

Exemples :
• Template Method avec crochet.

Remarques :
• Réponse : 2 (1re option).`,

  2795: `__str__ sur Child et Parent — str(Child())

Débutant :
• 'Child' : la méthode spéciale la plus dérivée gagne.

Intermédiaire :
• Même règle que méthodes normales pour résolution sur l'instance.

Expert :
• repr vs str : ici str() appelle __str__.

Concepts clés :
• Polymorphisme sur dunder methods.

Distinctions clés :
• str() n'appelle pas __str__ du parent si enfant définit la sienne.

Fonctionnement :
• type(obj).__str__(obj) via slot.

Exécution étape par étape :
• Retour chaîne Child.

Ordre des opérations :
• Instanciation ; str().

Cas d'utilisation courants :
• Messages d'erreur personnalisés.

Cas limites :
• Si __str__ manque, fallback sur __repr__ puis défaut.

Considérations de performance :
• N/A.

Exemples :
• print(model) debug.

Remarques :
• Réponse : 'Child' (1re option).`,

  2796: `Child.method return self.__x alors que parent a créé __x

Débutant :
• AttributeError : même piège mangling que 2755 sur Parent/Child.

Intermédiaire :
• __x dans Child viserait _Child__x inexistant.

Expert :
• Solution : API parent protégée ou accès coordonné.

Concepts clés :
• Mangling par classe lexicale de la méthode.

Distinctions clés :
• 2797 avec _x fonctionne.

Fonctionnement :
• Échec attribut.

Exécution étape par étape :
• method() lève.

Ordre des opérations :
• Child() ; method().

Cas d'utilisation courants :
• Rappel pédagogique après chapitre encapsulation.

Cas limites :
• Nom exact exception peut varier légèrement selon version.

Considérations de performance :
• N/A.

Exemples :
• Préférer self._Parent__x rarement ou self._x convention.

Remarques :
• Réponse : AttributeError (1re option).`,

  2797: `Child.method return self._x avec parent self._x = 1

Débutant :
• 1 : underscore simple partagé sans mangling.

Intermédiaire :
• Convention protected respectée entre parent et enfant.

Expert :
• Documenter que sous-classes peuvent casser invariants si elles écrivent _x.

Concepts clés :
• Même nom d'attribut physique sur l'instance.

Distinctions clés :
• Contraste fort avec 2796.

Fonctionnement :
• Héritage d'attribut d'instance.

Exécution étape par étape :
• Retour 1.

Ordre des opérations :
• Parent.__init__ puis method enfant.

Cas d'utilisation courants :
• Champs internes partagés hiérarchie.

Cas limites :
• Si enfant réassigne _x sans appeler parent init.

Considérations de performance :
• N/A.

Exemples :
• Template avec _state dict.

Remarques :
• Réponse : 1 (1re option).`,

  2798: `@classmethod def method(cls): return cls — Child.method()

Débutant :
• La classe Child est retournée, pas MyClass.

Intermédiaire :
• cls est lié au type réellement utilisé pour l'appel.

Expert :
• Pattern alternate constructor : from_config(cls).

Concepts clés :
• Late binding du receveur classe.

Distinctions clés :
• MyClass.method() donnerait MyClass.

Fonctionnement :
• Descripteur classmethod injecte Child comme premier arg.

Exécution étape par étape :
• return cls → Child.

Ordre des opérations :
• Appel sur Child.

Cas d'utilisation courants :
• Fabriques polymorphes.

Cas limites :
• Appel sur instance : cls reste la vraie classe.

Considérations de performance :
• N/A.

Exemples :
• datetime.fromtimestamp style.

Remarques :
• Réponse : classe Child / repr Child (1re option).`,

  2799: `@staticmethod hérité — Child.method()

Débutant :
• 1 : staticmethod ne reçoit ni self ni cls ; même code que parent.

Intermédiaire :
• Pas de polymorphisme automatique : le même function object sert.

Expert :
• Si besoin de spécialiser, redéfinir dans l'enfant ou utiliser classmethod.

Concepts clés :
• Héritage de descripteur statique.

Distinctions clés :
• 2798 cls change ; ici pas de cls.

Fonctionnement :
• Appel via Child.method() résout le descriptor hérité.

Exécution étape par étape :
• return 1.

Ordre des opérations :
• Référence Child ; appel.

Cas d'utilisation courants :
• Utilitaires sans état liés au concept classe.

Cas limites :
• staticmethod peu extensible pour hooks sous-classes.

Considérations de performance :
• N/A.

Exemples :
• parse_int helper dans hiérarchie.

Remarques :
• Réponse : 1 (1re option).`,

  2800: `@property x hérité — Child().x

Débutant :
• 1 : le descripteur property est un attribut de classe hérité comme les autres.

Intermédiaire :
• Child() instance a accès au même getter que MyClass.

Expert :
• Surcharge dans Child possible en redéfinissant property.

Concepts clés :
• Descripteur dans __dict__ de la classe parent visible MRO.

Distinctions clés :
• Comportement identique à appel sur MyClass() sauf override.

Fonctionnement :
• property.__get__(instance, Child).

Exécution étape par étape :
• Getter parent exécuté avec self = instance Child.

Ordre des opérations :
• Instanciation Child ; lecture x.

Cas d'utilisation courants :
• Réutiliser champs calculés dans sous-classes sans recopier.

Cas limites :
• property + slots + override : attention ordre définition.

Considérations de performance :
• N/A.

Exemples :
• Surface publique stable sur hiérarchie ORM.

Remarques :
• Réponse : 1 (1re option).`,
};
