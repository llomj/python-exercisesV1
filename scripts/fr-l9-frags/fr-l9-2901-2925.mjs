/** Level 9 FR 2901–2925 — level9_expert_a.ts Q1–25 (ABC avancé, register, collections.abc) */
export default {
  2901: `Shape(ABC) avec area abstraite — instanciation Shape()

Débutant :
• TypeError : une classe avec des méthodes @abstractmethod non implémentées ne peut pas être instanciée.

Intermédiaire :
• ABCMeta enregistre les noms dans __abstractmethods__ ; l'appel Shape() est bloqué.

Expert :
• Une sous-classe concrète qui implémente area() peut être créée.

Concepts clés :
• Contrat explicite vs classes ordinaires.

Distinctions clés :
• Pas None ni objet Shape ni 0.

Fonctionnement :
• Au moment de Shape(), la métaclasse vérifie l'ensemble abstrait.

Exécution étape par étape :
• Échec avant __init__ instance.

Ordre des opérations :
• Définition classe puis tentative ().

Cas d'utilisation courants :
• Frameworks plugin (interface obligatoire).

Cas limites :
• Méthode abstraite avec corps : toujours abstract jusqu'à override.

Considérations de performance :
• N/A.

Exemples :
• class Circle(Shape): def area(self): return 3.14.

Remarques :
• Réponse : TypeError — 1re option.`,

  2902: `Circle(Shape) implémente area — print(Circle().area())

Débutant :
• 3.14 : toutes les abstractions sont satisfaites ; l'appel normal fonctionne.

Intermédiaire :
• Circle hérite du contrat ABC et fournit une implémentation concrète.

Expert :
• super() possible si area parent avait un corps partiel.

Concepts clés :
• Passage de classe abstraite à concrète.

Distinctions clés :
• Pas TypeError.

Fonctionnement :
• __abstractmethods__ vide sur Circle.

Exécution étape par étape :
• Circle() OK puis area() retourne le flottant.

Ordre des opérations :
• Définitions puis print.

Cas d'utilisation courants :
• Hiérarchies géométriques, parsers.

Cas limites :
• Oublier une seconde méthode abstraite : reste abstrait.

Considérations de performance :
• N/A.

Exemples :
• Ajouter perimeter abstrait sur Shape.

Remarques :
• Réponse : 3.14 — 1re option.`,

  2903: `Une classe ABC peut-elle avoir des méthodes concrètes ?

Débutant :
• Oui : seules les méthodes marquées @abstractmethod doivent être surchargées.

Intermédiaire :
• Pattern Template Method : squelette concret + crochets abstraits.

Expert :
• __init__ dans une ABC reste une méthode normale sauf si marquée abstraite.

Concepts clés :
• Mix abstrait / concret sur une même classe.

Distinctions clés :
• Pas « uniquement staticmethod ».

Fonctionnement :
• Héritage MRO résout describe() sur la classe mère.

Exécution étape par étape :
• Sous-classe instanciable si tous les abstract couverts.

Ordre des opérations :
• Définition ABC puis sous-classe.

Cas d'utilisation courants :
• Code partagé (validate commune) + hooks abstraits.

Cas limites :
• Ordre des décorateurs property/abstract (voir ID 2910).

Considérations de performance :
• N/A.

Exemples :
• describe() hérité par Circle.

Remarques :
• Réponse : Oui — 1re option.`,

  2904: `Circle().describe() — Shape a area abstraite et describe concrète

Débutant :
• "I am a shape" : describe est défini sur Shape ; Circle hérite sans override.

Intermédiaire :
• MRO Circle → Shape → object.

Expert :
• Circle ne peut exister que parce que area est implémentée.

Concepts clés :
• Méthode concrète dans ABC utilisable telle quelle.

Distinctions clés :
• Pas TypeError.

Fonctionnement :
• Recherche describe sur Circle échoue ; remonte à Shape.

Exécution étape par étape :
• Chaîne retournée littérale.

Ordre des opérations :
• Instanciation puis appel describe.

Cas d'utilisation courants :
• Pipeline fixe avec étapes variables.

Cas limites :
• Si Circle redéfinit describe : masquage.

Considérations de performance :
• N/A.

Exemples :
• Ajouter label abstrait et describe concret.

Remarques :
• Réponse : "I am a shape" — 1re option.`,

  2905: `Une classe ABC peut-elle définir __init__ ?

Débutant :
• Oui ; les sous-classes appellent super().__init__(...) pour la partie parente.

Intermédiaire :
• L'ABC reste non instanciable si des @abstractmethod subsistent.

Expert :
• __init__ n'est pas implicitement abstrait.

Concepts clés :
• Initialisation partagée + contrat méthodes.

Distinctions clés :
• Pas d'interdiction d'__init__ sur ABC.

Fonctionnement :
• __init__ s'exécute comme sur toute classe après instanciation réussie.

Exécution étape par étape :
• Dog() appelle Animal.__init__ via super.

Ordre des opérations :
• Chaîne coopérative classique.

Cas d'utilisation courants :
• Attributs communs name/id avant speak abstrait.

Cas limites :
• MI : super() doit rester coopératif.

Considérations de performance :
• N/A.

Exemples :
• Animal/Dog de la banque.

Remarques :
• Réponse : Oui, sous-classes avec super() — 1re option.`,

  2906: `B(A) n'implémente que f — g reste abstrait — B()

Débutant :
• TypeError : il faut implémenter chaque @abstractmethod hérité.

Intermédiaire :
• B.__abstractmethods__ contient encore g.

Expert :
• Message d'erreur cite la méthode manquante.

Concepts clés :
• Conjonction des obligations sur toute la hiérarchie.

Distinctions clés :
• Pas d'objet B ni 1.

Fonctionnement :
• Même une seule méthode manquante bloque.

Exécution étape par étape :
• Échec à l'instanciation.

Ordre des opérations :
• Définition A, B puis B().

Cas d'utilisation courants :
• Interfaces à plusieurs opérations (read/write).

Cas limites :
• register() ne rend pas concrète une classe sans impl (autre mécanisme).

Considérations de performance :
• N/A.

Exemples :
• Implémenter g pour débloquer.

Remarques :
• Réponse : TypeError — 1re option.`,

  2907: `B implémente f et g — print(B().f())

Débutant :
• 1 : B est concrète ; f retourne 1 comme dans la sous-classe.

Intermédiaire :
• g() existe aussi (retour 2 si appelé).

Expert :
• Ordre des définitions dans la classe n'affecte pas l'instanciation ici.

Concepts clés :
• __abstractmethods__ vide.

Distinctions clés :
• Pas TypeError.

Fonctionnement :
• B() puis dispatch sur B.f.

Exécution étape par étape :
• print affiche 1.

Ordre des opérations :
• Définitions puis print(B().f()).

Cas d'utilisation courants :
• Services avec plusieurs hooks obligatoires.

Cas limites :
• Méthodes abstraites property : noms dans le frozenset.

Considérations de performance :
• N/A.

Exemples :
• Vérifier B().g()==2.

Remarques :
• Réponse : 1 — 1re option.`,

  2908: `@abstractmethod peut-il avoir un corps ?

Débutant :
• Oui ; la sous-classe doit quand même override, mais peut appeler super().f().

Intermédiaire :
• Le décorateur marque la méthode comme abstraite malgré le corps.

Expert :
• Pattern « défaut extensible ».

Concepts clés :
• Corps = implémentation de base optionnelle via super.

Distinctions clés :
• Pas « corps toujours ignoré ».

Fonctionnement :
• La métaclasse enregistre le nom tant que non overriden concrètement.

Exécution étape par étape :
• B.f appelle A.f via super après résolution MRO.

Ordre des opérations :
• Override obligatoire pour instancier.

Cas d'utilisation courants :
• Validation partielle + extension.

Cas limites :
• Oublier super() : perte du comportement de base.

Considérations de performance :
• N/A.

Exemples :
• return super().f() + " extended".

Remarques :
• Réponse : Oui, appel possible via super() — 1re option.`,

  2909: `B.f utilise super().f() + " extended"

Débutant :
• "base extended" : super().f() exécute le corps de A.f.

Intermédiaire :
• B est concrète car f est surchargée.

Expert :
• super() suit le MRO (ici A puis object).

Concepts clés :
• Chaînage d'implémentation abstraite avec défaut.

Distinctions clés :
• Pas TypeError ni "base" seul.

Fonctionnement :
• Concaténation de str après appel parent.

Exécution étape par étape :
• B().f() → B.f → super → A.f → concat.

Ordre des opérations :
• Appel méthode puis +.

Cas d'utilisation courants :
• Hooks before/after dans sous-classes.

Cas limites :
• diamond : super doit être coopératif partout.

Considérations de performance :
• N/A.

Exemples :
• Logger dans A.f puis enrichir dans B.f.

Remarques :
• Réponse : "base extended" — 1re option.`,

  2910: `property + abstractmethod sur x — A()

Débutant :
• TypeError : la propriété abstraite compte comme méthode abstraite.

Intermédiaire :
• Ordre des décorateurs : @property au-dessus de @abstractmethod (extérieur).

Expert :
• Sous-classe fournit @property concrète sur x.

Concepts clés :
• Descripteur data + contrat ABC.

Distinctions clés :
• Pas d'objet A ni None.

Fonctionnement :
• Le nom 'x' entre dans __abstractmethods__.

Exécution étape par étape :
• Instanciation refusée.

Ordre des opérations :
• Définition classe puis A().

Cas d'utilisation courants :
• Interface lecture contrôlée obligatoire.

Cas limites :
• Inverser décorateurs casse souvent la sémantique.

Considérations de performance :
• N/A.

Exemples :
• class B(A): @property def x(self): return 42.

Remarques :
• Réponse : TypeError — 1re option.`,

  2911: `Combinaison pour classmethod abstraite

Débutant :
• @classmethod puis @abstractmethod (classmethod le plus extérieur).

Intermédiaire :
• Même principe que staticmethod : le décorateur le plus proche de def est abstractmethod.

Expert :
• La sous-classe redéclare @classmethod sur create.

Concepts clés :
• Application décorateurs de bas en haut sur la fonction.

Distinctions clés :
• Pas l'inverse abstract puis classmethod.

Fonctionnement :
• create reçoit cls une fois concrétisé.

Exécution étape par étape :
• B.create() retourne instance B.

Ordre des opérations :
• Définition méthode avec pile de décorateurs.

Cas d'utilisation courants :
• Alternate constructors imposés.

Cas limites :
• Oublier @classmethod en enfant : liaison incorrecte.

Considérations de performance :
• N/A.

Exemples :
• Voir banque A/B create.

Remarques :
• Réponse : @classmethod puis @abstractmethod — 1re option.`,

  2912: `Combinaison pour staticmethod abstraite

Débutant :
• @staticmethod puis @abstractmethod.

Intermédiaire :
• Pas de self ni cls dans la signature finale.

Expert :
• Sous-classe redéfinit avec @staticmethod.

Concepts clés :
• validate(data) pur fonction sur la classe.

Distinctions clés :
• Pas @abstractmethod puis @staticmethod.

Fonctionnement :
• ABC impose présence de validate sur sous-classe concrète.

Exécution étape par étape :
• B.validate([1,2]) après impl.

Ordre des opérations :
• Définition puis appel statique.

Cas d'utilisation courants :
• Règles métier partagées sans état.

Cas limites :
• staticmethod abstraite rare ; souvent classmethod préféré.

Considérations de performance :
• N/A.

Exemples :
• len(data) > 0.

Remarques :
• Réponse : @staticmethod puis @abstractmethod — 1re option.`,

  2913: `Une ABC peut-elle hériter d'une autre ABC ?

Débutant :
• Oui : les méthodes abstraites s'accumulent le long de la chaîne.

Intermédiaire :
• B peut rester abstraite tout en héritant de A abstraite.

Expert :
• Seule la feuille concrète doit tout implémenter.

Concepts clés :
• Couches d'interface progressive.

Distinctions clés :
• Pas interdit sans ABCMeta spécial.

Fonctionnement :
• Union des noms abstraits selon règles de sous-classe.

Exécution étape par étape :
• C(B) avec f et g implémentés instanciable.

Ordre des opérations :
• Définitions A, B, C.

Cas d'utilisation courants :
• Spécialisation par niveaux (Stream → BufferedStream).

Cas limites :
• Conflits de signatures entre niveaux : erreurs à la conception.

Considérations de performance :
• N/A.

Exemples :
• C().f() → 1 de la banque.

Remarques :
• Réponse : Oui — 1re option.`,

  2914: `Chaîne A,B,C — print(C().f())

Débutant :
• 1 : C fournit f et g ; instanciation OK.

Intermédiaire :
• f vient de l'obligation A, g de B.

Expert :
• Si C manquait g : TypeError comme ID 2906.

Concepts clés :
• Accumulation d'abstractions sur plusieurs niveaux.

Distinctions clés :
• Pas 2 pour f() ici.

Fonctionnement :
• C.f appelée.

Exécution étape par étape :
• print 1.

Ordre des opérations :
• C() puis .f().

Cas d'utilisation courants :
• Pipelines multi-étapes obligatoires.

Cas limites :
• Oublier une méthode intermédiaire abstraite ajoutée.

Considérations de performance :
• N/A.

Exemples :
• C().g() → 2.

Remarques :
• Réponse : 1 — 1re option.`,

  2915: `class Shape(metaclass=ABCMeta)

Débutant :
• Équivalent moderne à class Shape(ABC) pour activer la mécanique abstraite.

Intermédiaire :
• ABC est une classe confort dont la métaclasse est ABCMeta.

Expert :
• Hériter de ABC reste l'idiome recommandé.

Concepts clés :
• Métaclasse = usine de classes avec contrôle __call__.

Distinctions clés :
• Pas « classe ordinaire sans contrôle ».

Fonctionnement :
• ABCMeta collecte abstractmethods à la création de classe.

Exécution étape par étape :
• type(Shape) est ABCMeta.

Ordre des opérations :
• Déclaration metaclass=.

Cas d'utilisation courants :
• Code legacy ou mixins métaclasse custom.

Cas limites :
• Conflit si plusieurs métaclasses : union complexe.

Considérations de performance :
• N/A.

Exemples :
• type(A) après class A(ABC).

Remarques :
• Réponse : équivalent à class Shape(ABC) — 1re option.`,

  2916: `Quelle est la métaclasse de ABC ?

Débutant :
• ABCMeta.

Intermédiaire :
• C'est elle qui remplit __abstractmethods__ et bloque l'instanciation.

Expert :
• type(ABC) et ABC.__class__ pointent vers ABCMeta.

Concepts clés :
• Couche meta sous-jacente à abc.

Distinctions clés :
• Pas type ni object comme réponse attendue ici.

Fonctionnement :
• __new__ / __call__ de la métaclasse appliquent les règles.

Exécution étape par étape :
• Création de sous-classe déclenche scan décorateurs.

Ordre des opérations :
• import abc puis introspection.

Cas d'utilisation courants :
• Comprendre erreurs TypeError abstraites.

Cas limites :
• Sous-classes de ABC : métaclasse héritée.

Considérations de performance :
• N/A.

Exemples :
• from abc import ABCMeta.

Remarques :
• Réponse : ABCMeta — 1re option.`,

  2917: `class A(ABC): pass puis A()

Débutant :
• Crée une instance A : aucune méthode abstraite déclarée.

Intermédiaire :
• __abstractmethods__ vide.

Expert :
• Utile comme marqueur ou future extension.

Concepts clés :
• ABC seul ne rend pas la classe abstraite.

Distinctions clés :
• Pas TypeError.

Fonctionnement :
• Même règles qu'une classe concrète normale.

Exécution étape par étape :
• __call__ de la métaclasse autorise.

Ordre des opérations :
• pass corps vide puis ().

Cas d'utilisation courants :
• Base taggée pour isinstance sans méthodes encore.

Cas limites :
• Ajouter @abstractmethod plus tard : redevient abstraite.

Considérations de performance :
• N/A.

Exemples :
• isinstance(a, A) True.

Remarques :
• Réponse : crée une instance A — 1re option.`,

  2918: `print(A.__abstractmethods__) avec f abstraite

Débutant :
• frozenset({'f'}) : ensemble immuable des noms encore abstraits.

Intermédiaire :
• Après implémentation dans B, frozenset() vide.

Expert :
• frozenset empêche la mutation accidentelle.

Concepts clés :
• État déclaratif inspectable.

Distinctions clés :
• Pas set mutable ni tuple seul.

Fonctionnement :
• ABCMeta maintient à jour à chaque sous-classe.

Exécution étape par étape :
• print affiche repr du frozenset.

Ordre des opérations :
• Définition A puis print.

Cas d'utilisation courants :
• Debug contrats dynamiques.

Cas limites :
• Noms property comptent comme 'x'.

Considérations de performance :
• N/A.

Exemples :
• Voir B.__abstractmethods__ après override.

Remarques :
• Réponse : frozenset({'f'}) — 1re option.`,

  2919: `À quoi sert ABC.register ?

Débutant :
• Enregistre une sous-classe virtuelle : isinstance/issubclass sans héritage réel.

Intermédiaire :
• Ne copie aucune méthode vers list.

Expert :
• Registre interne + __subclasshook__ possible sur ABC custom.

Concepts clés :
• Nominal « marqué » vs structurel pur.

Distinctions clés :
• Pas héritage de méthodes ni TypeError automatique.

Fonctionnement :
• Après register(list), list vu comme sous-classe de MyABC pour tests.

Exécution étape par étape :
• Appel register lors de l'import ou setup.

Cas d'utilisation courants :
• Typer builtins (list) comme ton interface.

Cas limites :
• Ne garantit pas les méthodes : responsabilité développeur.

Considérations de performance :
• N/A.

Exemples :
• isinstance([], MyABC) True après register.

Remarques :
• Réponse : sous-classe virtuelle — 1re option.`,

  2920: `MyABC.register(int) puis isinstance(42, MyABC)

Débutant :
• True : le registre virtuel inclut int.

Intermédiaire :
• 42 est instance de int ; int est sous-classe enregistrée de MyABC.

Expert :
• Pas de lien MRO pour les méthodes MyABC.

Concepts clés :
• isinstance étendu au-delà du graphe d'héritage.

Distinctions clés :
• Pas False.

Fonctionnement :
• Chemin spécial __subclasscheck__ / cache ABC.

Exécution étape par étape :
• Test positif.

Ordre des opérations :
• register puis isinstance.

Cas d'utilisation courants :
• Adapter types C natifs à ton ABC.

Cas limites :
• Classes non enregistrées : False.

Considérations de performance :
• N/A.

Exemples :
• issubclass(int, MyABC) True.

Remarques :
• Réponse : True — 1re option.`,

  2921: `Que les sous-classes virtuelles NE font pas

Débutant :
• Elles n'héritent pas des méthodes de l'ABC.

Intermédiaire :
• greet sur MyABC n'apparaît pas sur int.

Expert :
• MRO inchangé ; pas d'injection d'attributs.

Concepts clés :
• Tests nominaux décorrélés de la table de méthodes.

Distinctions clés :
• isinstance peut être True malgré absence de méthodes ABC.

Fonctionnement :
• (42).greet lève AttributeError.

Exécution étape par étape :
• Appel méthode échoue.

Ordre des opérations :
• register puis tentative d'appel.

Cas d'utilisation courants :
• Marquage protocolaire léger (à risque si mal utilisé).

Cas limites :
• Préférer Protocol/runtime_checkable ou ABC réel si besoin méthodes.

Considérations de performance :
• N/A.

Exemples :
• Voir banque int + greet.

Remarques :
• Réponse : pas d'héritage de méthodes — 1re option.`,

  2922: `isinstance([], Sized)

Débutant :
• True : list définit __len__.

Intermédiaire :
• Sized utilise __subclasshook__ structurel.

Expert :
• str aussi Sized ; int ne l'est pas.

Concepts clés :
• ABC « interface » pour conteneurs avec longueur.

Distinctions clés :
• Pas False.

Fonctionnement :
• Vérification présence __len__ cohérente.

Exécution étape par étape :
• isinstance True sur [].

Ordre des opérations :
• import collections.abc puis print.

Cas d'utilisation courants :
• APIs génériques len(obj).

Cas limites :
• Objets proxy menteurs : rare.

Considérations de performance :
• isinstance optimisé pour certains ABC.

Exemples :
• isinstance("hi", Sized).

Remarques :
• Réponse : True — 1re option.`,

  2923: `isinstance("hello", Iterable)

Débutant :
• True : str a __iter__.

Intermédiaire :
• Iterable ≠ Iterator (il manque __next__ seul côté itérateur).

Expert :
• 42 n'est pas Iterable.

Concepts clés :
• Itération for x in s.

Distinctions clés :
• Pas False.

Fonctionnement :
• Hook vérifie __iter__ sur la classe.

Exécution étape par étape :
• print True.

Ordre des opérations :
• Création str littéral puis test.

Cas d'utilisation courants :
• Fonctions acceptant tout itérable.

Cas limites :
• Ancien __getitem__ sans __iter__ : séquence legacy.

Considérations de performance :
• N/A.

Exemples :
• isinstance([1,2], Iterable).

Remarques :
• Réponse : True — 1re option.`,

  2924: `isinstance([], Hashable)

Débutant :
• False : list a __hash__ = None (mutable).

Intermédiaire :
• Hashable exige __hash__ défini et non None.

Expert :
• tuple immuable souvent Hashable si éléments hashables.

Concepts clés :
• Clés dict / éléments set nécessitent hachage stable.

Distinctions clés :
• Pas True.

Fonctionnement :
• __subclasshook__ rejette list.

Exécution étape par étape :
• print False.

Ordre des opérations :
• import puis isinstance.

Cas d'utilisation courants :
• Valider avant insertion dans set.

Cas limites :
• Sous-classe list avec __hash__ custom : cas avancé dangereux.

Considérations de performance :
• N/A.

Exemples :
• isinstance({}, Hashable) False.

Remarques :
• Réponse : False — 1re option.`,

  2925: `isinstance((1, 2), Hashable)

Débutant :
• True : tuple fournit __hash__ (si contenu hashable à l'usage).

Intermédiaire :
• hash((1,2)) OK ; ([],) peut échouer au hash même si isinstance True.

Expert :
• Distinction isinstance Hashable vs hash() runtime sur contenu.

Concepts clés :
• Immuabilité surface du tuple.

Distinctions clés :
• Pas False.

Fonctionnement :
• tuple.__hash__ non None.

Exécution étape par étape :
• print True.

Ordre des opérations :
• Création tuple puis test.

Cas d'utilisation courants :
• Clés composites dict.

Cas limites :
• Tuple avec liste imbriquée : TypeError au hash.

Considérations de performance :
• N/A.

Exemples :
• isinstance("a", Hashable) True.

Remarques :
• Réponse : True — 1re option.`,
};
