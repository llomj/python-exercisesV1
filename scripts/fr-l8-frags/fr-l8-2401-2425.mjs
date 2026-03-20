/** Level 8 FR 2401–2425 — level8.ts (level8Patterns) Q1–25 */
export default {
  2401: `class MyClass: pass — signification

Débutant :
• Le mot-clé class définit un type (une classe) nommé MyClass ; pass remplit le corps vide.

Intermédiaire :
• L’exécution crée un objet classe dans l’espace de noms courant, pas une instance.

Expert :
• La métaclasse par défaut est type ; la classe hérite implicitement de object.

Concepts clés :
• Classe comme fabrique d’instances ; instruction composée avec bloc indenté.

Distinctions clés :
• Ce n’est ni un appel qui crée un objet instance, ni une définition def.

Fonctionnement :
• Python compile puis exécute le corps de classe pour remplir le dictionnaire de la classe.

Exécution étape par étape :
• Lier le nom MyClass à l’objet classe ; aucune instance n’est créée tant qu’on n’appelle pas MyClass().

Ordre des opérations :
• Le nom de classe est lié une fois le bloc entièrement exécuté.

Cas d'utilisation courants :
• Modèles de données, regroupement de méthodes, POO.

Cas limites :
• Corps vide sans pass (avant 3.x on pouvait utiliser un docstring).

Considérations de performance :
• Coût négligeable à la définition.

Exemples :
• class Vide: pass puis instanciation plus tard.

Remarques :
• Réponse : définit une classe (1re option).`,

  2402: `class MyClass: x = 1

Débutant :
• x est défini dans le corps de classe : c’est un attribut de classe, partagé par toutes les instances.

Intermédiaire :
• Stocké dans le dictionnaire de la classe ; lisible via MyClass.x ou instance si non masqué.

Expert :
• Distinct d’une variable locale de fonction ; distinct de self.x sans assignation préalable.

Concepts clés :
• Attribut de classe vs attribut d’instance.

Distinctions clés :
• Pas « crée un objet » seul, ni une fonction.

Fonctionnement :
• L’affectation dans le corps de classe lie x au mapping de la classe.

Exécution étape par étape :
• Évaluation de 1 au moment de la définition de classe.

Ordre des opérations :
• Ordre séquentiel du corps de classe.

Cas d'utilisation courants :
• Constantes partagées, compteur de classe (à manier avec prudence si mutable).

Cas limites :
• Mutables en attribut de classe : piège de partage (voir questions plus loin).

Considérations de performance :
• Un seul slot en mémoire pour la valeur partagée immuable.

Exemples :
• MyClass.x après plusieurs instances.

Remarques :
• Réponse : classe avec attribut de classe (1re option).`,

  2403: `MyClass = class MyClass: pass

Débutant :
• Syntaxe invalide : on n’écrit pas class avec un signe = comme pour une affectation ordinaire.

Intermédiaire :
• Le parseur attend class Nom: corps ; le = provoque une erreur de syntaxe.

Expert :
• Le nom de classe est déjà la cible de l’instruction class.

Concepts clés :
• Grammaire Python des instructions composées.

Distinctions clés :
• Pas une NameError à l’exécution : échec au parsing.

Fonctionnement :
• Token class ne peut pas suivre = dans ce motif.

Exécution étape par étape :
• Aucun bytecode produit.

Ordre des opérations :
• Analyse syntaxique avant exécution.

Cas d'utilisation courants :
• Piège pédagogique ; rappel de la forme correcte class C: …

Cas limites :
• Alias possible après coup : C = MyClass une fois la classe définie.

Considérations de performance :
• N/A.

Exemples :
• class MyClass: pass puis T = MyClass.

Remarques :
• Réponse : SyntaxError (1re option).`,

  2404: `obj = MyClass() avec class MyClass: pass

Débutant :
• Les parenthèses appellent la classe : construction d’une nouvelle instance.

Intermédiaire :
• __new__ puis __init__ si défini ; ici __init__ par défaut de object.

Expert :
• Chaque appel renvoie un nouvel objet distinct en mémoire.

Concepts clés :
• Callable classe, instanciation.

Distinctions clés :
• Pas « appeler » au sens téléphoner : appel d’objet classe.

Fonctionnement :
• Mécanisme type.__call__ → __new__ → __init__.

Exécution étape par étape :
• Allouer instance, initialiser, retourner l’objet lié à obj.

Ordre des opérations :
• Évaluation de MyClass puis appel.

Cas d'utilisation courants :
• Pattern objet partout en Python.

Cas limites :
• Échec si __init__ exige des arguments non fournis.

Considérations de performance :
• Allocation rapide pour types simples.

Exemples :
• Deux appels → deux id différents.

Remarques :
• Réponse : crée une instance de MyClass (1re option).`,

  2405: `type(MyClass()) avec class MyClass: pass

Débutant :
• type renvoie la classe de l’objet : ici MyClass (affichée avec le module, souvent __main__).

Intermédiaire :
• Ce n’est pas la méta-classe type de la classe elle-même, mais l’objet classe MyClass.

Expert :
• isinstance(obj, MyClass) cohérent avec ce résultat.

Concepts clés :
• introspection type().

Distinctions clés :
• Pas l’affichage littéral de la chaîne "MyClass" seule.

Fonctionnement :
• Objet instance → pointeur vers sa classe.

Exécution étape par étape :
• Création de l’instance puis appel type.

Ordre des opérations :
• MyClass() d’abord.

Cas d'utilisation courants :
• Tests de type, debug.

Cas limites :
• Sous-classes : type direct vs isinstance avec base.

Considérations de performance :
• O(1).

Exemples :
• type(42) est int.

Remarques :
• Réponse : forme class __main__.MyClass (1re option du QCM).`,

  2406: `isinstance(MyClass(), MyClass)

Débutant :
• Oui : l’objet créé est une instance de cette classe.

Intermédiaire :
• isinstance gère aussi les sous-classes ; ici cas exact.

Expert :
• Préféré à comparaison brute type(x) is MyClass pour l’héritage.

Concepts clés :
• Relation instance–classe.

Distinctions clés :
• Pas False sauf si mauvaise classe passée en 2e argument.

Fonctionnement :
• Vérification dans la chaîne de classes de x.

Exécution étape par étape :
• Construction puis test.

Ordre des opérations :
• Appel MyClass() puis isinstance.

Cas d'utilisation courants :
• Validation d’API, dispatch.

Cas limites :
• ABC et virtual subclassing.

Considérations de performance :
• Rapide en CPython.

Exemples :
• isinstance(True, int) True en Python.

Remarques :
• Réponse : True (1re option).`,

  2407: `MyClass.__name__

Débutant :
• Attribut spécial contenant le nom de la classe sous forme de chaîne.

Intermédiaire :
• Différent de __qualname__ pour classes imbriquées.

Expert :
• Utile pour logging, sérialisation, introspection.

Concepts clés :
• Métadonnées sur l’objet classe.

Distinctions clés :
• Pas None ni chaîne vide par défaut.

Fonctionnement :
• Renseigné à la création de la classe.

Exécution étape par étape :
• Accès attribut sans instancier.

Ordre des opérations :
• Lecture simple.

Cas d'utilisation courants :
• Fabriques, messages d’erreur.

Cas limites :
• Renommage dynamique rare.

Considérations de performance :
• N/A.

Exemples :
• MyClass.__name__ == "MyClass".

Remarques :
• Réponse : 'MyClass' (1re option).`,

  2408: `MyClass.__bases__

Débutant :
• Tuple des classes parentes directes ; sans héritage explicite, seul object.

Intermédiaire :
• Toujours un tuple, même une seule base.

Expert :
• Pour héritage multiple, plusieurs entrées dans l’ordre du listing.

Concepts clés :
• MRO commence par les bases.

Distinctions clés :
• Pas tuple vide dans le cas new-style class standard.

Fonctionnement :
• Fixé lors de la construction de la classe.

Exécution étape par étape :
• Lecture __bases__ sur l’objet type.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Frameworks, vérification d’héritage.

Cas limites :
• Classes C sans bases visibles : rare côté pur Python.

Considérations de performance :
• N/A.

Exemples :
• class C(A,B): pass → __bases__ (A, B).

Remarques :
• Réponse : (object,) sous forme QCM (1re option).`,

  2409: `MyClass.__module__

Débutant :
• Nom du module où la classe a été définie ; script principal souvent __main__.

Intermédiaire :
• Dans un fichier importé, ce serait le nom du module pointé.

Expert :
• Utilisé par pickle et outils d’introspection.

Concepts clés :
• Provenance de la définition.

Distinctions clés :
• Pas None pour une classe normalement chargée.

Fonctionnement :
• Assigné lors de class body execution.

Exécution étape par étape :
• Lecture attribut.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Debug, plugins.

Cas limites :
• exec dynamique peut surprendre.

Considérations de performance :
• N/A.

Exemples :
• import mymod ; mymod.C.__module__ == 'mymod'.

Remarques :
• Réponse : '__main__' ou nom de module (1re option).`,

  2410: `callable(MyClass)

Débutant :
• Une classe est un callable : on peut la invoquer pour fabriquer des instances.

Intermédiaire :
• callable vérifie __call__ sur le type de l’objet (ici la métaclasse).

Expert :
• Après instanciation, l’instance n’est callable que si __call__ est défini.

Concepts clés :
• Protocole call sur les classes.

Distinctions clés :
• Pas False pour une classe standard.

Fonctionnement :
• type.__call__ rend la classe callable.

Exécution étape par étape :
• Test booléen sans créer d’instance.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Factories génériques, injection.

Cas limites :
• Classes avec métaclasse qui bloque __call__ : cas avancé.

Considérations de performance :
• N/A.

Exemples :
• callable(len) True, callable(3) False.

Remarques :
• Réponse : True (1re option).`,

  2411: `def __init__(self, x): self.x = x — nature

Débutant :
• Méthode d’initialisation appelée automatiquement après création de l’instance.

Intermédiaire :
• Souvent appelée « constructeur » en langage courant ; techniquement __new__ alloue.

Expert :
• Doit retourner None implicitement ; pas de valeur renvoyée utile.

Concepts clés :
• self lie l’instance ; paramètres utilisateurs après self.

Distinctions clés :
• Pas un destructeur (voir __del__ ailleurs).

Fonctionnement :
• type.__call__ invoque __init__ si présent sur la classe.

Exécution étape par étape :
• self.x = x crée attribut d’instance.

Ordre des opérations :
• __new__ puis __init__.

Cas d'utilisation courants :
• Invariant d’objet, champs requis.

Cas limites :
• Oubli de self → TypeError au call.

Considérations de performance :
• N/A.

Exemples :
• Classe Point avec x,y.

Remarques :
• Réponse : méthode constructeur / initialiseur (1re option).`,

  2412: `MyClass(5) puis obj.x avec __init__(self,x): self.x = x

Débutant :
• __init__ a exécuté self.x = 5 ; lecture obj.x donne 5.

Intermédiaire :
• L’attribut vit sur l’instance (souvent __dict__ par défaut).

Expert :
• __slots__ changerait le stockage mais pas ici.

Concepts clés :
• Liaison nom d’attribut sur instance.

Distinctions clés :
• Pas None ni 0.

Fonctionnement :
• Passage de 5 comme argument positionnel après self.

Exécution étape par étape :
• Appel __init__ avec self frais et x=5.

Ordre des opérations :
• Construction complète avant lecture.

Cas d'utilisation courants :
• Modèle domaine.

Cas limites :
• Propriétés avec setter peuvent intercepter.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 5 (1re option).`,

  2413: `__init__(self): pass seul ; MyClass()

Débutant :
• Toujours valide : aucun argument utilisateur requis ; une instance est créée.

Intermédiaire :
• __init__ sans paramètres autres que self : appel MyClass() sans args.

Expert :
• hérite toujours le comportement object.__init__ minimal.

Concepts clés :
• Signature de constructeur vide.

Distinctions clés :
• Pas d’erreur ni retour None de l’expression d’appel (l’assignation reçoit l’instance).

Fonctionnement :
• __init__ exécuté avec seulement self.

Exécution étape par étape :
• Allocation puis pass dans __init__.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Objet marqueur, configuration différée.

Cas limites :
• Si sous-classe impose des args : cas différent.

Considérations de performance :
• N/A.

Exemples :
• Petite classe A avec __init__(self): pass puis A() valide.

Remarques :
• Réponse : crée une instance (1re option).`,

  2414: `__init__(self, x, y) puis MyClass(1, 2)

Débutant :
• Les deux arguments sont passés à __init__ ; self.x et self.y sont fixés.

Intermédiaire :
• Ordre positionnel : 1 puis 2.

Expert :
• On peut ajouter valeurs par défaut ou *args dans d’autres variantes.

Concepts clés :
• Paramètres multiples du constructeur.

Distinctions clés :
• Pas d’erreur ici.

Fonctionnement :
• Binding des arguments comme une fonction normale.

Exécution étape par étape :
• self.x=1, self.y=2.

Ordre des opérations :
• Gauche à droite pour les args.

Cas d'utilisation courants :
• Points 2D, paires clé-valeur initiales.

Cas limites :
• Trop peu ou trop d’arguments → TypeError.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : instance avec x=1 et y=2 (1re option).`,

  2415: `__init__(self, x=1): self.x = x puis MyClass()

Débutant :
• Sans argument, x prend la valeur par défaut 1.

Intermédiaire :
• Règles des défauts Python identiques aux fonctions.

Expert :
• None comme défaut pour collections : antipattern classique à éviter ailleurs.

Concepts clés :
• Paramètres par défaut dans __init__.

Distinctions clés :
• Pas x=0.

Fonctionnement :
• Appel équivalent à __init__(self, 1).

Exécution étape par étape :
• self.x = 1.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Valeurs initiales optionnelles.

Cas limites :
• Mutables en défaut : piège (hors sujet strict ici).

Considérations de performance :
• N/A.

Exemples :
• MyClass(9) écraserait le défaut.

Remarques :
• Réponse : instance avec x=1 (1re option).`,

  2416: `Même __init__ avec défaut x=1 mais MyClass(5)

Débutant :
• L’argument explicite 5 remplace le défaut.

Intermédiaire :
• Ordre : valeurs passées lient avant application des défauts.

Expert :
• Keyword-only avec * possible dans d’autres signatures.

Concepts clés :
• Surcharge du défaut.

Distinctions clés :
• Pas 1.

Fonctionnement :
• x lié à 5 dans l’appel.

Exécution étape par étape :
• self.x = 5.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• API souples.

Cas limites :
• N/A.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : instance avec x=5 (1re option).`,

  2417: `class vide puis obj.x = 5 ; obj.x

Débutant :
• Python permet d’ajouter des attributs d’instance dynamiquement.

Intermédiaire :
• Pas besoin de déclarer les champs à l’avance (sauf __slots__).

Expert :
• __dict__ de l’instance reçoit la clé 'x'.

Concepts clés :
• Objet extensible.

Distinctions clés :
• Pas d’erreur ; pas 0 par défaut.

Fonctionnement :
• Affectation crée l’attribut sur l’objet.

Exécution étape par étape :
• Création instance puis setattr implicite.

Ordre des opérations :
• Lecture après écriture.

Cas d'utilisation courants :
• Prototypes rapides ; parfois déconseillé en prod stricte.

Cas limites :
• __slots__ interdirait si activé.

Considérations de performance :
• Coût dictionnaire par attribut.

Exemples :
• Voir banque.

Remarques :
• Réponse : 5 (1re option).`,

  2418: `obj1 et obj2 deux MyClass() ; obj1 is obj2

Débutant :
• Deux appels → deux objets ; is compare l’identité : False.

Intermédiaire :
• == pourrait être True si __eq__ personnalisé, mais is reste False ici.

Expert :
• Petit entiers cachent : pas le cas pour instances custom.

Concepts clés :
• Identité vs égalité.

Distinctions clés :
• Pas True.

Fonctionnement :
• id différents.

Exécution étape par étape :
• Deux allocations.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Singletons : autre pattern (ex. override __new__).

Cas limites :
• None is None True.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : False (1re option).`,

  2419: `hasattr(obj, 'x') sur instance vide

Débutant :
• Pas d’attribut x : hasattr renvoie False sans lever d’erreur.

Intermédiaire :
• hasattr attrape AttributeError éventuel de __getattr__.

Expert :
• Pour propriétés coûteuses, hasattr peut quand même déclencher du code selon descripteur.

Concepts clés :
• Test d’existence d’attribut.

Distinctions clés :
• Pas True.

Fonctionnement :
• getattr(obj,'x') interne avec gestion d’erreur.

Exécution étape par étape :
• Recherche échoue sur instance et classe pour x.

Ordre des opérations :
• MRO de l’attribut.

Cas d'utilisation courants :
• Code défensif.

Cas limites :
• Attributs calculés : attention aux effets de bord.

Considérations de performance :
• Léger.

Exemples :
• Après obj.x=5, hasattr devient True.

Remarques :
• Réponse : False (1re option).`,

  2420: `hasattr après __init__ qui définit self.x

Débutant :
• x existe sur l’instance : True.

Intermédiaire :
• Peu importe que x vienne d’__init__ ou d’affectation externe.

Expert :
• Peut être True même si la valeur est None.

Concepts clés :
• Présence vs valeur truthy.

Distinctions clés :
• Pas False.

Fonctionnement :
• Trouve x dans __dict__ ou descripteur data.

Exécution étape par étape :
• __init__ puis hasattr.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Vérifier API minimale d’un objet.

Cas limites :
• Voir descripteurs non-data.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : True (1re option).`,

  2421: `self dans une méthode d’instance

Débutant :
• Convention : premier paramètre qui référence l’instance sur laquelle on appelle la méthode.

Intermédiaire :
• Python passe automatiquement l’instance ; le nom self n’est pas réservé mais standard.

Expert :
• Méthodes via descriptor : liaison au call.

Concepts clés :
• Bound method.

Distinctions clés :
• Pas la classe elle-même (ce serait cls).

Fonctionnement :
• Function.__get__ produit une méthode liée.

Exécution étape par étape :
• obj.m() → m(obj, …).

Ordre des opérations :
• Instance évaluée avant la méthode.

Cas d'utilisation courants :
• Toute méthode d’objet.

Cas limites :
• @staticmethod supprime self implicite.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : référence à l’instance (1re option).`,

  2422: `obj.method() avec return 1

Débutant :
• Appel de méthode : exécute le corps et renvoie 1.

Intermédiaire :
• self est lié à obj automatiquement.

Expert :
• Types.FunctionType vs method selon accès.

Concepts clés :
• Appel de méthode d’instance.

Distinctions clés :
• Pas None.

Fonctionnement :
• pile d’appels Python standard.

Exécution étape par étape :
• Entrée méthode, return 1.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Comportements encapsulés.

Cas limites :
• Méthode abstraite non implémentée : erreur ailleurs.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2423: `MyClass.method(MyClass()) — même return 1

Débutant :
• Appeler la fonction sous-jacente en passant l’instance explicitement comme premier argument.

Intermédiaire :
• Équivalent à obj.method() si obj est cette instance.

Expert :
• Utile pour callbacks, tests, éviter liaison.

Concepts clés :
• Unbound vs bound (en pratique fonction + passage self).

Distinctions clés :
• Pas d’erreur ici.

Fonctionnement :
• MyClass() créé puis passé.

Exécution étape par étape :
• method(instance) avec self=instance.

Ordre des opérations :
• Évaluation intérieure MyClass() d’abord.

Cas d'utilisation courants :
• Passer une méthode comme fonction simple.

Cas limites :
• Oublier self → TypeError.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2424: `method(self, x): return x * 2 ; obj.method(5)

Débutant :
• 5 est lié à x après self ; retour 10.

Intermédiaire :
• self occupe le premier slot ; les args utilisateur suivent.

Expert :
• *args / **kwargs possibles dans d’autres signatures.

Concepts clés :
• Méthode avec paramètres.

Distinctions clés :
• Pas 5 ni erreur.

Fonctionnement :
• Multiplication entière.

Exécution étape par étape :
• Appel avec self=obj, x=5.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Services, transformations.

Cas limites :
• surcharge opérateur non impliquée ici.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 10 (1re option).`,

  2425: `get_x(self): return self.x après __init__(5)

Débutant :
• get_x lit l’attribut fixé par __init__ : 5.

Intermédiaire :
• Deux méthodes partagent le même self via la même instance.

Expert :
• Pourrait être remplacé par property dans du code idiomatique.

Concepts clés :
• Lecture d’état interne.

Distinctions clés :
• Pas 0 ni erreur.

Fonctionnement :
• Résolution d’attribut sur instance.

Exécution étape par étape :
• __init__ puis get_x.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Getters explicites dans API Java-like ; property en Python moderne.

Cas limites :
• Attribut supprimé entre temps.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 5 (1re option).`,
};
