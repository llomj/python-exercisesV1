/** Level 8 FR 2651–2675 — level8_expert_b.ts Q51–75 (descriptors → ABC / collections.abc) */
export default {
  2651: `Qu'est-ce qu'un descripteur en Python ?

Débutant :
• C'est un objet qui implémente au moins une des méthodes __get__, __set__ ou __delete__.

Intermédiaire :
• Python l'utilise dans la résolution de obj.attr sur la classe : le descripteur peut intercepter lecture/écriture/suppression.

Expert :
• @property, les fonctions (méthodes liées), staticmethod et classmethod s'appuient tous sur ce protocole.

Concepts clés :
• Protocole descripteur = hook sur l'accès attribut.

Distinctions clés :
• Ce n'est ni un décorateur générique ni un générateur ni une built-in isolée.

Fonctionnement :
• Attribut de classe pointant vers un objet avec __get__ (et éventuellement __set__/__delete__).

Exécution étape par étape :
• Lecture de C().x : Python trouve x dans la classe ; si descripteur, appelle __get__(desc, instance, owner).

Ordre des opérations :
• type(obj).__getattribute__ orchestre data descriptor, puis __dict__ instance, puis non-data, etc.

Cas d'utilisation courants :
• Validation, lazy loading, propriétés, ORM.

Cas limites :
• Descripteur défini sur l'instance : ignoré pour l'accès normal (doit être attribut de classe).

Considérations de performance :
• Chaque accès peut coûter un appel Python supplémentaire.

Exemples :
• class D: __get__ return 42 sur attribut de classe.

Remarques :
• Réponse : objet définissant __get__, __set__ ou __delete__ (1re option).`,

  2652: `Méthodes du protocole descripteur

Débutant :
• Les trois noms à retenir : __get__, __set__, __delete__.

Intermédiaire :
• Un seul suffit pour être descripteur ; les trois sont optionnels mais composent le protocole complet.

Expert :
• __get__(self, obj, owner) ; __set__(self, obj, value) ; __delete__(self, obj).

Concepts clés :
• Contrôle lecture / écriture / suppression d'un attribut nommé.

Distinctions clés :
• Pas __init__/__new__/__del__ ni context manager ni itérateur.

Fonctionnement :
• Appelés par le mécanisme d'attributs de type.

Exécution étape par étape :
• Selon l'opération (get/set/del), la méthode correspondante est invoquée si présente.

Ordre des opérations :
• getattribute avant retour brut depuis __dict__ selon type de descripteur.

Cas d'utilisation courants :
• Implémenter des champs calculés ou contrôlés.

Cas limites :
• Accès depuis la classe : obj peut être None dans __get__.

Considérations de performance :
• N/A pour usages normaux.

Exemples :
• property combine ces hooks via un objet property.

Remarques :
• Réponse : __get__, __set__, __delete__ (1re option).`,

  2653: `Descripteur de données (data descriptor)

Débutant :
• Il définit __set__ ou __delete__ en plus de __get__ (souvent les deux premiers).

Intermédiaire :
• Priorité sur la valeur stockée dans __dict__ de l'instance pour ce nom.

Expert :
• C'est ce qui empêche d'écraser une property en faisant instance.__dict__['x'] = ... dans les cas usuels.

Concepts clés :
• « Data » = présence de __set__ ou __delete__.

Distinctions clés :
• Pas « seulement __get__ » ni __init__/__del__.

Fonctionnement :
• Recherche MRO : descripteurs de données en premier.

Exécution étape par étape :
• Lecture : __get__ du descripteur même si clé présente en __dict__.

Ordre des opérations :
• Data descriptor avant dict instance.

Cas d'utilisation courants :
• Champs validés, propriétés avec setter.

Cas limites :
• property en lecture seule expose quand même un __set__ qui lève AttributeError : reste data descriptor.

Considérations de performance :
• Interception systématique.

Exemples :
• Desc avec __get__ + __set__ qui écrit dans _privé.

Remarques :
• Réponse : __get__ et __set__ (ou __delete__) (1re option).`,

  2654: `Descripteur non-data

Débutant :
• Seulement __get__, pas __set__ ni __delete__.

Intermédiaire :
• L'instance peut masquer le descripteur en plaçant la clé dans son __dict__.

Expert :
• Les fonctions en tant qu'attributs de classe sont des non-data descriptors.

Concepts clés :
• Liaison paresseuse via __get__ sans contrôle d'écriture via le protocole.

Distinctions clés :
• Pas « les deux __get__ et __set__ ».

Fonctionnement :
• Après échec data descriptor, Python consulte __dict__ puis non-data.

Exécution étape par étape :
• c.x lit le dict si 'x' y est, sinon appelle __get__ du descripteur.

Ordre des opérations :
• dict instance avant non-data descriptor.

Cas d'utilisation courants :
• Méthodes, staticmethod, classmethod, cache par attribut instance.

Cas limites :
• Shadowing accidentel si on assigne au même nom sur l'instance.

Considérations de performance :
• Accès dict souvent très rapide une fois l'attribut copié.

Exemples :
• self.meth = lambda ... remplace la méthode pour cette instance seulement.

Remarques :
• Réponse : seulement __get__ (sans __set__) (1re option).`,

  2655: `Priorité des data descriptors

Débutant :
• Ils passent avant le dictionnaire d'attributs de l'instance.

Intermédiaire :
• Même si l'instance a déjà une entrée pour ce nom, le data descriptor gagne à la lecture (et contrôle l'écriture).

Expert :
• Chaîne type(obj).__getattribute__ : MRO pour data descriptors d'abord.

Concepts clés :
• Garantir l'invariant du descripteur.

Distinctions clés :
• Pas avant le __dict__ de la classe en tant que « module globals » ni builtins en premier.

Fonctionnement :
• Tableau de priorité documenté dans le modèle descripteur CPython.

Exécution étape par étape :
• c.__dict__['x']='instance' puis c.x peut encore retourner la valeur du descripteur.

Ordre des opérations :
• Data descriptor > __dict__ instance > non-data > __dict__ classe...

Cas d'utilisation courants :
• @property qui ne peut pas être contournée par assignation directe au dict.

Cas limites :
• Objets sans __dict__ (slots) : mêmes règles conceptuelles sur le mécanisme.

Considérations de performance :
• Coût d'interception à chaque accès.

Exemples :
• Prop avec __set__ no-op pour forcer data.

Remarques :
• Réponse : __dict__ de l'instance (1re option).`,

  2656: `Priorité des non-data descriptors

Débutant :
• Plus basse que le __dict__ de l'instance pour la lecture.

Intermédiaire :
• Si la clé est dans instance.__dict__, on ne consulte pas __get__ du descripteur de classe.

Expert :
• D'où la différence fondamentale avec les data descriptors.

Concepts clés :
• Permet cache ou override par instance.

Distinctions clés :
• Pas « plus haute » ni « égale » ni au-dessus des data descriptors.

Fonctionnement :
• Étape 2 du lookup : dict instance avant non-data en classe.

Exécution étape par étape :
• Premier accès : descripteur ; assignation instance.attr : dict gagne ensuite.

Ordre des opérations :
• Vérification ordre data → dict → non-data.

Cas d'utilisation courants :
• Attacher des données sur self sans changer la méthode de classe.

Cas limites :
• delattr pour enlever l'ombre et retrouver le descripteur.

Considérations de performance :
• Une fois en dict, accès direct.

Exemples :
• Monkey-patch d'une méthode sur une instance.

Remarques :
• Réponse : plus basse que le __dict__ de l'instance (1re option).`,

  2657: `@property : quel type de descripteur ?

Débutant :
• Descripteur de données.

Intermédiaire :
• Même lecture seule, l'objet property fournit des hooks qui comptent comme data (setter interdit ou présent).

Expert :
• Empêche le shadowing accidentel depuis __dict__.

Concepts clés :
• Intégration haut niveau du protocole.

Distinctions clés :
• Pas non-data comme staticmethod.

Fonctionnement :
• property(fget, fset, fdel, doc).

Exécution étape par étape :
• Lecture appelle fget via __get__ du descripteur property.

Ordre des opérations :
• Comme tout data descriptor dans la résolution.

Cas d'utilisation courants :
• Surface attribut avec logique derrière.

Cas limites :
• property sans setter : assignation lève AttributeError via le chemin data.

Considérations de performance :
• Très faible overhead.

Exemples :
• aire = property(lambda self: self.w*self.h).

Remarques :
• Réponse : data descriptor (1re option).`,

  2658: `@staticmethod

Débutant :
• Non-data descriptor : seulement __get__ qui renvoie la fonction brute.

Intermédiaire :
• Aucun self ni cls injecté à l'appel.

Expert :
• Peut être masqué par une entrée dans __dict__ de l'instance (comme toute fonction en classe).

Concepts clés :
• Fonction « rangée » dans la classe sans liaison.

Distinctions clés :
• Pas data descriptor.

Fonctionnement :
• staticmethod.__get__ retourne func original.

Exécution étape par étape :
• C.f et C().f donnent la même callable sans premier argument implicite.

Ordre des opérations :
• Lookup comme fonction en namespace classe.

Cas d'utilisation courants :
• Utilitaires groupés sémantiquement sous la classe.

Cas limites :
• Héritage : toujours la fonction wrappée, pas de late binding spécial.

Considérations de performance :
• Identique à un appel de fonction normale.

Exemples :
• Math.add statique.

Remarques :
• Réponse : non-data descriptor (1re option).`,

  2659: `@classmethod

Débutant :
• Non-data descriptor ; __get__ produit une méthode liée à la classe.

Intermédiaire :
• Le premier argument reçu est cls (sous-classe réelle à l'appel).

Expert :
• Fabriques alternatives : from_config(cls).

Concepts clés :
• Binding sur le type plutôt que l'instance.

Distinctions clés :
• Pas data descriptor ni « métaclasse méthode » au sens strict.

Fonctionnement :
• classmethod.__get__ injecte cls.

Exécution étape par étape :
• Sub.create() passe Sub comme cls.

Ordre des opérations :
• Résolution comme fonction + descripteur non-data.

Cas d'utilisation courants :
• Constructeurs nommés, registres par sous-classe.

Cas limites :
• Peut être shadowé sur une instance si assignation au même nom.

Considérations de performance :
• N/A.

Exemples :
• datetime.fromtimestamp (style API).

Remarques :
• Réponse : non-data descriptor (1re option).`,

  2660: `print(C().x) avec __get__ qui retourne 42

Débutant :
• Affiche 42.

Intermédiaire :
• L'accès à .x déclenche Desc.__get__.

Expert :
• C.x depuis la classe passe obj=None à __get__ mais retourne quand même 42 ici.

Concepts clés :
• Descripteur minimal lecture seule.

Distinctions clés :
• Pas None ni erreur ni l'objet Desc affiché.

Fonctionnement :
• Valeur de retour de __get__ devient résultat de l'expression d'attribut.

Exécution étape par étape :
• Instanciation C() ; lecture x ; __get__ ; print.

Ordre des opérations :
• print reçoit l'int 42.

Cas d'utilisation courants :
• Attribut calculé constant ou mock pédagogique.

Cas limites :
• Si __get__ levait, print ne s'exécuterait pas.

Considérations de performance :
• Un appel Python par lecture.

Exemples :
• Compteur en lecture via descripteur.

Remarques :
• Réponse : 42 (1re option).`,

  2661: `Descripteur __get__ et __set__ : c.x = 5 puis print(c.x)

Débutant :
• __set__ met 5 dans obj._x ; __get__ renvoie _x*2 donc 10.

Intermédiaire :
• La valeur « stockée » n'est pas 10 dans _x.

Expert :
• Pattern transformation à la lecture.

Concepts clés :
• Écriture et lecture asymétriques.

Distinctions clés :
• Pas 5 ni None.

Fonctionnement :
• Affectation appelle __set__ ; lecture appelle __get__.

Exécution étape par étape :
• c.x = 5 → _x=5 ; print lit → 5*2.

Ordre des opérations :
• Assignation complète avant print.

Cas d'utilisation courants :
• Unités, pourcentages, champs dérivés.

Cas limites :
• Premier accès get sans set : AttributeError sur _x si absent.

Considérations de performance :
• Deux hooks par cycle read/write.

Exemples :
• Prix TTC seulement à l'affichage.

Remarques :
• Réponse : 10 (1re option).`,

  2662: `Rôle de __set_name__ sur un descripteur

Débutant :
• Appelé automatiquement quand le descripteur devient attribut de classe, pour connaître owner et name.

Intermédiaire :
• Python ≥ 3.6 ; moment = création de la classe, pas instanciation.

Expert :
• Permet stocker self.name pour messages d'erreur ou clé __dict__ interne.

Concepts clés :
• Introspection du nom d'attribut sans le répéter au constructeur.

Distinctions clés :
• Ne renomme pas la classe ni ne crée seul un nouvel attribut magiquement sans __set__/__get__.

Fonctionnement :
• Hook du processus de construction de classe.

Exécution étape par étape :
• class Body: age = Validator() → Validator.__set_name__(Person, 'age').

Ordre des opérations :
• Après création de l'instance de descripteur, avant utilisation.

Cas d'utilisation courants :
• Validators, dataclass-like fields manuels.

Cas limites :
• Descripteur créé inline deux fois : deux noms différents si deux attributs.

Considérations de performance :
• Une fois par classe.

Exemples :
• TypeError « age must be int » avec nom correct.

Remarques :
• Réponse : appelé quand le descripteur est assigné comme attribut de classe (1re option).`,

  2663: `Pattern TypedField avec __set_name__ et isinstance

Débutant :
• Validation de type à l'assignation : attributs contrôlés.

Intermédiaire :
• Stocke dans obj.__dict__[self.name] pour éviter récursion sur le même nom.

Expert :
• Variante légère avant Pydantic pour petits modèles.

Concepts clés :
• isinstance(val, self.typ) garde-fou runtime.

Distinctions clés :
• Pas singleton, factory, observer.

Fonctionnement :
• __set__ gate ; lecture peut passer par dict simple si pas de __get__ ici.

Exécution étape par étape :
• Assignation mauvais type → TypeError.

Ordre des opérations :
• isinstance avant écriture.

Cas d'utilisation courants :
• Config typée, petits records.

Cas limites :
• Sous-types (bool sous int) : isinstance(True, int) True en Python.

Considérations de performance :
• isinstance rapide pour types built-in.

Exemples :
• port: TypedField(int).

Remarques :
• Réponse : attributs à type vérifié / type-checked attributes (1re option).`,

  2664: `À quoi sert __get__ sur les fonctions ?

Débutant :
• Créer les méthodes liées : lier self (ou cls pour classmethod) à l'appel.

Intermédiaire :
• Fonction en __dict__ de classe + __get__ = descripteur non-data.

Expert :
• bound method = fonction + instance référencée.

Concepts clés :
• Explication du « self implicite ».

Distinctions clés :
• Pas retourner le nom ni supprimer la fonction.

Fonctionnement :
• function.__get__(obj, owner) → method wrapper.

Exécution étape par étape :
• c.f sans () donne bound method ; avec () injecte c comme premier arg.

Ordre des opérations :
• Lookup attribut puis préparation callable.

Cas d'utilisation courants :
• Toute OOP instance.

Cas limites :
• Fonction unbound depuis classe en Py3 : toujours function pour C.f souvent.

Considérations de performance :
• bound method léger.

Exemples :
• C.__dict__['greet'].__get__(c,C) équivalent à accès c.greet.

Remarques :
• Réponse : lier self pour méthode liée (1re option).`,

  2665: `C.__dict__["f"] pour def f(self)

Débutant :
• C'est l'objet fonction Python brut.

Intermédiaire :
• Ce n'est pas une bound method : pas d'instance encore liée.

Expert :
• c.f applique le protocole descripteur ; accès direct __dict__ le contourne.

Concepts clés :
• Méthode = fonction stockée dans le mapping de la classe.

Distinctions clés :
• Pas None ni staticmethod par défaut.

Fonctionnement :
• Même objet que C.f en Python 3 pour fonction normale.

Exécution étape par étape :
• Pas d'appel __get__ implicite sur la lecture __dict__.

Ordre des opérations :
• Indexation dict avant wrapping.

Cas d'utilisation courants :
• Introspection, wrappers, tests.

Cas limites :
• Méthode décorée : type différent (classmethod descriptor, etc.).

Considérations de performance :
• Accès dict O(1).

Exemples :
• type(C.__dict__['f']) is function.

Remarques :
• Réponse : objet fonction (1re option).`,

  2666: `Shape(ABC) avec area abstraite : Shape()

Débutant :
• TypeError : classe abstraite non instanciable.

Intermédiaire :
• Le message cite les méthodes abstraites manquantes.

Expert :
• ABCMeta + __abstractmethods__.

Concepts clés :
• Contrat : sous-classe concrète doit implémenter.

Distinctions clés :
• Pas SyntaxError ni None ni instance créée.

Fonctionnement :
• __call__ de la méta vérifie avant de retourner l'instance.

Exécution étape par étape :
• Tentative construction → échec immédiat.

Ordre des opérations :
• Aucun __init__ utilisateur exécuté si échec.

Cas d'utilisation courants :
• Interfaces, plugins.

Cas limites :
• @abstractmethod sur staticmethod : règles subtiles de composition.

Considérations de performance :
• N/A.

Exemples :
• class Concrete(Shape): def area(self): return 0 → OK.

Remarques :
• Réponse : TypeError (1re option).`,

  2667: `Circle implémente area → print(Circle().area())

Débutant :
• Affiche 3.14.

Intermédiaire :
• Sous-classe concrète : instanciation permise.

Expert :
• L'appel area() utilise la résolution MRO sur Circle.

Concepts clés :
• Satisfaction du contrat ABC.

Distinctions clés :
• Pas TypeError.

Fonctionnement :
• Circle() puis .area() retourne le float du code.

Exécution étape par étape :
• Pas d'abstraction résiduelle.

Ordre des opérations :
• Appel méthode après création instance.

Cas d'utilisation courants :
• Hiérarchie de formes géométriques.

Cas limites :
• float affiché peut varier format REPL ; ici valeur littérale.

Considérations de performance :
• N/A.

Exemples :
• Carré avec return 100.

Remarques :
• Réponse : 3.14 (1re option).`,

  2668: `Que force @abstractmethod sur les sous-classes ?

Débutant :
• Fournir une implémentation concrète de la méthode décorée (ou rester abstrait).

Intermédiaire :
• Sinon instanciation de la sous-classe impossible.

Expert :
• Peut combiner avec super() pour template method.

Concepts clés :
• Obligation d'override pour classes concrètes.

Distinctions clés :
• Pas forcer super().__init__ ni métaclasse explicite obligatoire.

Fonctionnement :
• Flag __isabstractmethod__ sur la fonction.

Exécution étape par étape :
• Calcul __abstractmethods__ à la fin de la création de classe.

Ordre des opérations :
• Agrégation sur toute la MRO.

Cas d'utilisation courants :
• API plug-in uniforme.

Cas limites :
• Classe intermédiaire peut rester ABC partielle.

Considérations de performance :
• N/A.

Exemples :
• Animal.speak abstrait → Dog.speak concret.

Remarques :
• Réponse : implémenter la méthode décorée (1re option).`,

  2669: `Une classe abstraite peut-elle avoir des méthodes concrètes ?

Débutant :
• Oui.

Intermédiaire :
• Seules les méthodes marquées abstraites doivent être surchargées par les sous-classes concrètes.

Expert :
• Pattern template method : méthode concrète appelle des hooks abstraits.

Concepts clés :
• ABC ≠ interface 100 % vide.

Distinctions clés :
• Pas limité aux staticmethod/classmethod seuls.

Fonctionnement :
• Héritage normal pour le code concret partagé.

Exécution étape par étape :
• describe() peut appeler self.area() abstrait dans la base — exécution seulement quand self est concret.

Ordre des opérations :
• Résolution à l'exécution.

Cas d'utilisation courants :
• Code partagé + points d'extension.

Cas limites :
• Appeler méthode abstraite depuis __init__ de la base : risque si sous-classe pas prête.

Considérations de performance :
• N/A.

Exemples :
• Shape.describe retourne f"Area: {self.area()}".

Remarques :
• Réponse : Oui (1re option).`,

  2670: `Shape(ABC) avec describe concret, Circle(Shape): pass — print(Circle().describe())

Débutant :
• Chaîne I'm a shape.

Intermédiaire :
• Aucune méthode abstraite : Shape et Circle instanciables.

Expert :
• Hériter d'ABC sans @abstractmethod ne rend pas la classe magiquement abstraite.

Concepts clés :
• ABC est un outil, l'abstraction vient des méthodes non implémentées.

Distinctions clés :
• Pas TypeError.

Fonctionnement :
• MRO Circle → Shape → object ; describe trouvé sur Shape.

Exécution étape par étape :
• Circle() OK ; .describe() retourne la str littérale.

Ordre des opérations :
• Pas de résolution abstraite bloquante.

Cas d'utilisation courants :
• Marqueur de type + comportement par défaut.

Cas limites :
• Si plus tard on ajoute @abstractmethod sans implémenter : Circle devient abstraite.

Considérations de performance :
• N/A.

Exemples :
• Shape() seul fonctionne aussi ici.

Remarques :
• Réponse : I'm a shape (1re option).`,

  2671: `Propriétés abstraites en Python ?

Débutant :
• Oui en combinant @property et @abstractmethod (ordre : property au-dessus, abstractmethod sur le getter en pratique courante).

Intermédiaire :
• La sous-classe doit fournir une property (ou équivalent) conforme.

Expert :
• Vérifier la doc officielle pour l'ordre exact des décorateurs selon version.

Concepts clés :
• Étendre le contrat au-delà des simples def.

Distinctions clés :
• Pas réservé aux métaclasses ni Python 2 only.

Fonctionnement :
• La property résultante porte le marqueur d'abstraction.

Exécution étape par étape :
• Accès .area sur sous-classe non implémentée → erreur à l'usage ou instanciation bloquée selon cas.

Ordre des opérations :
• Création classe sous-classe calcule abstract set.

Cas d'utilisation courants :
• Interface « attribut calculé obligatoire ».

Cas limites :
• Oublier @property dans la sous-classe : ne satisfait pas le contrat.

Considérations de performance :
• Identique à property normale.

Exemples :
• Circle avec @property def area.

Remarques :
• Réponse : Oui, combiner @property et @abstractmethod (1re option).`,

  2672: `D(C) sans implémenter f abstrait — D()

Débutant :
• TypeError : D reste abstraite.

Intermédiaire :
• L'ensemble __abstractmethods__ hérité contient encore 'f'.

Expert :
• Même avec pass, l'abstraction remonte.

Concepts clés :
• Transmission de l'obligation sur toute la chaîne jusqu'à implémentation.

Distinctions clés :
• Pas instance créée silencieusement.

Fonctionnement :
• Même mécanisme que Shape() sans area.

Exécution étape par étape :
• D.__abstractmethods__ non vide → échec au call.

Ordre des opérations :
• Check avant __init__.

Cas d'utilisation courants :
• Détecter couches intermédiaires incomplètes.

Cas limites :
• Enregistrer une implémentation via attribut protocolaire avancé : hors sujet débutant.

Considérations de performance :
• N/A.

Exemples :
• E(C) avec def f: return 1 → OK.

Remarques :
• Réponse : TypeError (1re option).`,

  2673: `D implémente f → print(D().f())

Débutant :
• Affiche 1.

Intermédiaire :
• D est concrète ; f retourne 1.

Expert :
• Chaîne d'appel normale.

Concepts clés :
• Levée de l'abstraction.

Distinctions clés :
• Pas TypeError.

Fonctionnement :
• D() puis bound method f.

Exécution étape par étape :
• print reçoit int 1.

Ordre des opérations :
• Évaluation intérieur puis print.

Cas d'utilisation courants :
• Fin de pipeline d'interface.

Cas limites :
• N/A.

Considérations de performance :
• N/A.

Exemples :
• Valeur différente si return changé.

Remarques :
• Réponse : 1 (1re option).`,

  2674: `isinstance([], list) et issubclass(list, object)

Débutant :
• True et True.

Intermédiaire :
• Toute classe hérite d'object en Python 3.

Expert :
• isinstance accepte aussi tuple de types en versions récentes (hors scope exact de la question).

Concepts clés :
• Tests runtime sur l'arbre de types.

Distinctions clés :
• Pas False dans ce couple.

Fonctionnement :
• isinstance : relation instance-classe ; issubclass : relation sous-type.

Exécution étape par étape :
• Deux bool indépendants, tous deux vrais.

Ordre des opérations :
• Appels gauche puis droit dans l'énoncé.

Cas d'utilisation courants :
• Validation polymorphe.

Cas limites :
• issubclass sur instance au lieu de classe : TypeError.

Considérations de performance :
• CPython optimise types courants.

Exemples :
• isinstance(True, int) True aussi.

Remarques :
• Réponse : True et True (1re option).`,

  2675: `Que signifie ABC en Python ?

Débutant :
• Abstract Base Class (classe de base abstraite).

Intermédiaire :
• Module abc, helper ABC et décorateur abstractmethod.

Expert :
• collections.abc fournit des ABC pour les protocoles itérables, mapping, etc.

Concepts clés :
• Vocabulaire standard pour interfaces.

Distinctions clés :
• Pas « Advanced Base Code » ni binaire.

Fonctionnement :
• ABCMeta derrière.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Typage duck + contrats.

Cas limites :
• ABC enregistrée virtuellement : autre mécanisme.

Considérations de performance :
• N/A.

Exemples :
• class My(ABC): ...

Remarques :
• Réponse : Abstract Base Class (1re option).`,
};
