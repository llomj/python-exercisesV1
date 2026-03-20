/** Level 8 FR 2476–2500 — level8.ts Q76–100 (dir, vars, identité, hash, slots, __dict__, type, MRO) */
export default {
  2476: `'x' in dir(obj) avec attribut de classe

Débutant :
• dir sur une instance inclut souvent les noms fournis par la classe et les bases.

Intermédiaire :
• x=1 en corps de classe apparaît dans l’espace vu depuis l’instance.

Expert :
• __dir__ personnalisé peut filtrer.

Concepts clés :
• Visibilité attribut de classe via instance.

Distinctions clés :
• Pas False ici.

Fonctionnement :
• Construction de la liste puis test d’appartenance.

Exécution étape par étape :
• Création obj puis membership.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Vérifier présence avant getattr.

Cas limites :
• noms dynamiques non listés si __dir__ restreint.

Considérations de performance :
• dir complet peut être lourd.

Exemples :
• Voir banque.

Remarques :
• Réponse : True (1re option).`,

  2477: `'method' in dir(obj)

Débutant :
• Les méthodes définies sur la classe sont visibles sur l’instance via dir.

Intermédiaire :
• method est une entrée du dictionnaire de classe (fonction descriptée).

Expert :
• Bound method n’apparaît pas comme nom distinct : c’est toujours method.

Concepts clés :
• Méthodes comme attributs de classe.

Distinctions clés :
• Pas False.

Fonctionnement :
• dir agrège attributs instance + classe.

Exécution étape par étape :
• Création puis test.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Inspection rapide.

Cas limites :
• Méthodes C : noms spécifiques.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : True (1re option).`,

  2478: `vars(obj) instance vide

Débutant :
• vars(obj) est équivalent à obj.__dict__ pour instances dict-backed.

Intermédiaire :
• Instance neuve sans attributs : {}.

Expert :
• Avec __slots__ sans __dict__ : vars peut échouer (questions voisines).

Concepts clés :
• Stockage par défaut des attributs d’instance.

Distinctions clés :
• Pas erreur ici.

Fonctionnement :
• Retour du mapping __dict__.

Exécution étape par étape :
• MyClass() sans champs.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Copie shallow, debug.

Cas limites :
• Classes avec slots purs.

Considérations de performance :
• Référence au même dict mutable.

Exemples :
• Voir banque.

Remarques :
• Réponse : {} (1re option).`,

  2479: `vars(obj) après __init__

Débutant :
• Chaque self.attr = … ajoute une entrée dans __dict__.

Intermédiaire :
• vars montre l’état instance seulement, pas les attributs de classe non assignés à self.

Expert :
• property ne crée pas de clé __dict__ pour le nom stocké ailleurs.

Concepts clés :
• __dict__ instance.

Distinctions clés :
• Pas dict vide.

Fonctionnement :
• Clé 'x' valeur 5.

Exécution étape par étape :
• __init__ puis vars.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Sérialisation maison.

Cas limites :
• __slots__ : autre mécanisme.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : {'x': 5} (1re option).`,

  2480: `vars(MyClass)

Débutant :
• Sur une classe, vars renvoie le namespace de définition (mappingproxy ou dict selon vue).

Intermédiaire :
• Contient x, méthodes, et métadonnées internes.

Expert :
• Lecture seule via mappingproxy en Python 3 pour beaucoup de classes.

Concepts clés :
• Namespace de classe.

Distinctions clés :
• Pas {} ni erreur.

Fonctionnement :
• Accès __dict__ de l’objet type.

Exécution étape par étape :
• Après définition class body exécuté.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Métaprogrammation légère.

Cas limites :
• Types built-in : pas toujours de __dict__ exposé pareil.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : dictionnaire avec attributs et méthodes de classe (1re option).`,

  2481: `obj1 is obj2 deux instances

Débutant :
• is compare l’identité : deux constructions → deux objets → False.

Intermédiaire :
• Différent de == sans __eq__ custom (souvent identité aussi).

Expert :
• Petits ints sont internés ; pas les instances custom.

Concepts clés :
• Identité mémoire / id.

Distinctions clés :
• Pas True.

Fonctionnement :
• Deux allocations distinctes.

Exécution étape par étape :
• Deux appels constructeur.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Singleton explicite autrement.

Cas limites :
• Flyweight partagé : design pattern.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : False (1re option).`,

  2482: `obj2 = obj1 puis is

Débutant :
• Alias : même référence → is True.

Intermédiaire :
• Copie superficielle d’objet custom nécessite copy.copy si désirée.

Expert :
• Références fortes vs weakref.

Concepts clés :
• Modèle références Python.

Distinctions clés :
• Pas False.

Fonctionnement :
• Même id pour les deux noms.

Exécution étape par étape :
• Assignation référence.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Passer handle interne.

Cas limites :
• Réassigner l’un sans l’autre casse le partage.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : True (1re option).`,

  2483: `== sans __eq__

Débutant :
• Par défaut pour instances user-defined sans __eq__, == se comporte comme is en CPython 3.

Intermédiaire :
• Donc deux instances distinctes → False.

Expert :
• Toujours implémenter __eq__ pour égalité métier.

Concepts clés :
• Héritage de object.__eq__.

Distinctions clés :
• Pas True ici.

Fonctionnement :
• Comparaison identité sous-jacente.

Exécution étape par étape :
• Deux objets distincts.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Piège débutant sur == vs is.

Cas limites :
• NaN : float a des règles spéciales.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : False (1re option).`,

  2484: `== avec __eq__ toujours True

Débutant :
• __eq__ court-circuite la logique par défaut.

Intermédiaire :
• Peut retourner NotImplemented pour déléguer.

Expert :
• Éviter toujours True en prod sauf cas très spéciaux.

Concepts clés :
• Polymorphisme de comparaison.

Distinctions clés :
• Pas False.

Fonctionnement :
• obj1.__eq__(obj2) → True.

Exécution étape par étape :
• Un appel.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Valeur métier.

Cas limites :
• Comparaison avec type incompatible.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : True (1re option).`,

  2485: `!= avec __eq__ True sans __ne__

Débutant :
• Si __ne__ absent, Python synthétise souvent != comme not (==).

Intermédiaire :
• Donc not True → False.

Expert :
• __ne__ explicite peut casser cette équivalence.

Concepts clés :
• Cohérence opérateurs.

Distinctions clés :
• Pas True.

Fonctionnement :
• == True puis négation logique.

Exécution étape par étape :
• Deux instances mais __eq__ ignore la différence.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Tests unitaires sur opérateurs.

Cas limites :
• NotImplemented dans __eq__ complique la chaîne.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : False (1re option).`,

  2486: `__hash__ return 1

Débutant :
• hash(obj) utilise __hash__ si défini et cohérent.

Intermédiaire :
• Valeur constante ici : toutes instances même hash (collisions fréquentes).

Expert :
• En pratique dériver du tuple de champs immuables.

Concepts clés :
• Contrat hashable.

Distinctions clés :
• Pas 0 imposé.

Fonctionnement :
• Builtin hash appelle __hash__.

Exécution étape par étape :
• return 1.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Clés dict custom (avec eq cohérent).

Cas limites :
• __hash__ None : non hashable.

Considérations de performance :
• Collisions dégradent dict/set.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2487: `__eq__ sans __hash__

Débutant :
• Définir __eq__ sans __hash__ explicite met souvent __hash__ à None → objet non hashable.

Intermédiaire :
• Empêche clés dict si égalité mutable.

Expert :
• Réimplémenter __hash__ compatible avec __eq__ si besoin de hash.

Concepts clés :
• Invariant dict/set.

Distinctions clés :
• Pas une valeur hash retournée.

Fonctionnement :
• hash() lève TypeError: unhashable type.

Exécution étape par étape :
• hash sur instance.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Dataclasses frozen=False etc.

Cas limites :
• Python peut hériter __hash__ de parent : vérifier MRO.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : TypeError (non hashable) (1re option).`,

  2488: `dict avec instance comme clé

Débutant :
• Clé dict doit être hashable ; il faut __hash__ + __eq__ cohérents.

Intermédiaire :
• Ici égalité toujours True et hash constant : dict accepte une clé instance.

Expert :
• Toutes instances « équivalentes » pour == peuvent entrer en collision de clés.

Concepts clés :
• Table de hachage.

Distinctions clés :
• Pas erreur ici.

Fonctionnement :
• Construction littéral avec clé objet.

Exécution étape par étape :
• MyClass() puis insertion.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Patterns avancés (souvent déconseillés si hash trivial).

Cas limites :
• Mutabilité casse invariant si état utilisé dans hash.

Considérations de performance :
• Collisions.

Exemples :
• Voir banque.

Remarques :
• Réponse : dict avec instance:1 (1re option).`,

  2489: `id(MyClass())

Débutant :
• id retourne un entier identifiant l’objet pendant sa vie.

Intermédiaire :
• En CPython souvent adresse mémoire ; pas garanti par la spec.

Expert :
• is compare ids.

Concepts clés :
• Identité runtime.

Distinctions clés :
• Pas None ni 0 garanti comme valeur fixe entre runs.

Fonctionnement :
• Nouvelle instance → nouvel id.

Exécution étape par étape :
• Constructeur puis id.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Debug bas niveau.

Cas limites :
• Objets libérés : ids recyclables.

Considérations de performance :
• O(1).

Exemples :
• Voir banque.

Remarques :
• Réponse : entier id unique (1re option).`,

  2490: `id(obj1) == id(obj2) faux

Débutant :
• Deux objets distincts → ids distincts → comparaison False.

Intermédiaire :
• Équivalent logique à not (obj1 is obj2) pour impl CPython usuel.

Expert :
• Petits ints -5..256 internés : pas applicable aux instances.

Concepts clés :
• Identité.

Distinctions clés :
• Pas True.

Fonctionnement :
• Deux allocations.

Exécution étape par étape :
• id deux fois puis ==.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Vérifier duplication.

Cas limites :
• Même id si bug de C extension : rare.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : False (1re option).`,

  2491: `__slots__ et attribut interdit

Débutant :
• __slots__ liste les seuls noms d’attributs autorisés sur l’instance (sans __dict__ classique).

Intermédiaire :
• z hors liste → AttributeError à l’assignation.

Expert :
• __dict__ peut être ajouté dans slots pour hybride.

Concepts clés :
• Optimisation mémoire + contrat fixe.

Distinctions clés :
• Pas « fonctionne » silencieusement.

Fonctionnement :
• Tentative setattr sur nom non slot.

Exécution étape par étape :
• x ok, z échoue.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Structures nombreuses en mémoire.

Cas limites :
• Sous-classe slots vides hérite : règles combinées.

Considérations de performance :
• Moins de RAM par objet.

Exemples :
• Voir banque.

Remarques :
• Réponse : AttributeError (1re option).`,

  2492: `vars avec __slots__ simple

Débutant :
• Sans __dict__ dans l’instance, vars(obj) échoue car pas de mapping générique.

Intermédiaire :
• Message lié à absence de __dict__.

Expert :
• Utiliser getattr / descriptors ou ajouter __dict__ au tuple slots.

Concepts clés :
• Layout instance compact.

Distinctions clés :
• Pas {}.

Fonctionnement :
• vars → __dict__ manquant.

Exécution étape par étape :
• Assignation slot x puis vars.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Perf-critical records.

Cas limites :
• slots + dict explicite : vars redevient possible.

Considérations de performance :
• Gain mémoire.

Exemples :
• Voir banque.

Remarques :
• Réponse : AttributeError (pas de __dict__) (1re option).`,

  2493: `obj.__dict__ après __init__

Débutant :
• __dict__ stocke les attributs d’instance usuels.

Intermédiaire :
• self.x = 1 crée entrée 'x'.

Expert :
• Voir slots pour exception.

Concepts clés :
• Backing store dynamique.

Distinctions clés :
• Pas {}.

Fonctionnement :
• Mapping mutable lié à l’instance.

Exécution étape par étape :
• __init__ remplit dict.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Monkey patch, introspection.

Cas limites :
• Classes avec __slots__ seuls.

Considérations de performance :
• Coût mémoire par objet.

Exemples :
• Voir banque.

Remarques :
• Réponse : {'x': 1} (1re option).`,

  2494: `MyClass.__dict__

Débutant :
• Namespace de classe contient attributs définis dans le corps et fonctions.

Intermédiaire :
• Souvent mappingproxy en lecture.

Expert :
• Peut inclure __doc__, __module__, descripteurs.

Concepts clés :
• Objet type a aussi un __dict__ (ou équivalent).

Distinctions clés :
• Pas {} vide.

Fonctionnement :
• Après exécution du bloc class.

Exécution étape par étape :
• Lecture __dict__ sur type.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Decorators inspectant la classe.

Cas limites :
• Types built-in sans __dict__ Python.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : dict avec attributs et méthodes de classe (1re option).`,

  2495: `'method' in MyClass.__dict__

Débutant :
• def method dans classe enregistre la fonction sous ce nom dans le dict de classe.

Intermédiaire :
• Deviendra fonctiontion ou méthode descriptée selon accès.

Expert :
• @staticmethod / classmethod wrappent différemment.

Concepts clés :
• Méthodes comme attributs.

Distinctions clés :
• Pas False.

Fonctionnement :
• Clé 'method' présente.

Exécution étape par étape :
• Après définition classe.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Monkey patch de méthode par remplacement dict (rare).

Cas limites :
• Méthodes héritées seulement : pas dans dict direct.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : True (1re option).`,

  2496: `type(obj) instance

Débutant :
• type sur instance renvoie sa classe concrète.

Intermédiaire :
• isinstance plus souple avec héritage.

Expert :
• type(obj) n’est pas toujours type si métaclasse custom.

Concepts clés :
• Objet classe.

Distinctions clés :
• Pas type (métaclasse) ici.

Fonctionnement :
• Pointeur vers classe dans l’instance.

Exécution étape par étape :
• Création puis type.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Dispatch par type.

Cas limites :
• Proxy : type peut surprendre.

Considérations de performance :
• O(1).

Exemples :
• Voir banque.

Remarques :
• Réponse : classe __main__.MyClass (1re option).`,

  2497: `type(MyClass)

Débutant :
• Les classes sont instances de type (méta-classe par défaut).

Intermédiaire :
• D’où isinstance(MyClass, type) True.

Expert :
• Métaclasses custom : autre méta que type.

Concepts clés :
• Objet de premier ordre.

Distinctions clés :
• Pas la classe utilisateur elle-même.

Fonctionnement :
• type.__call__ a construit MyClass.

Exécution étape par étape :
• Lookup type du nom de classe.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Métaprogrammation.

Cas limites :
• class hook avec metaclass=.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : type (1re option).`,

  2498: `issubclass(MyClass, object)

Débutant :
• Toute classe new-style dérive implicitement d’object si pas de bases.

Intermédiaire :
• object racine du modèle.

Expert :
• En Python 3, classes sont new-style par défaut.

Concepts clés :
• Arbre d’héritage.

Distinctions clés :
• Pas False.

Fonctionnement :
• Vérification de la relation de sous-type.

Exécution étape par étape :
• issubclass sur type et object.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Tests génériques.

Cas limites :
• Premier arg doit être classe, pas instance.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : True (1re option).`,

  2499: `isinstance(MyClass, type)

Débutant :
• MyClass est un objet dont le type est type.

Intermédiaire :
• Différencier instance de MyClass vs MyClass elle-même.

Expert :
• isinstance respecte les virtual subclasses (ABC).

Concepts clés :
• Types comme valeurs.

Distinctions clés :
• Pas False.

Fonctionnement :
• Vérification type(MyClass) is type.

Exécution étape par étape :
• isinstance deuxième arg type.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• APIs génériques sur classes.

Cas limites :
• Métaclasses : isinstance peut rester True pour type si instance directe.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : True (1re option).`,

  2500: `MyClass.mro()

Débutant :
• Renvoie la liste linéarisée C3 des classes pour résoudre attributs/méthodes.

Intermédiaire :
• Cas simple : [MyClass, object].

Expert :
• Essentiel en héritage multiple.

Concepts clés :
• MRO.

Distinctions clés :
• Pas liste vide ni erreur.

Fonctionnement :
• Méthode sur type qui calcule l’ordre.

Exécution étape par étape :
• Classe sans bases explicites → object seul parent.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Comprendre super().

Cas limites :
• Graphe de bases invalide : erreur à la définition de classe.

Considérations de performance :
• Calculé à la création de classe.

Exemples :
• Voir banque.

Remarques :
• Réponse : liste d’ordre de résolution (MRO) (1re option).`,
};
