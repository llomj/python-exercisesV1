/** Level 8 FR 2451–2475 — level8.ts Q51–75 (dunders début, property, getattr/setattr, dir) */
export default {
  2451: `__str__ et str(obj)

Débutant :
• str(obj) appelle la méthode spéciale __str__ pour produire une chaîne lisible.

Intermédiaire :
• print(obj) utilise aussi __str__ en priorité.

Expert :
• Si __str__ absente, repli possible sur __repr__ pour affichage.

Concepts clés :
• Méthodes spéciales (dunder), protocole de formatage utilisateur.

Distinctions clés :
• Pas le nom de classe brut seul comme résultat ici.

Fonctionnement :
• Appel C vers la méthode Python __str__ sur le type de l’instance.

Exécution étape par étape :
• Création instance puis str qui dispatche.

Ordre des opérations :
• Évaluation de str(obj) après obj.

Cas d'utilisation courants :
• Messages utilisateur, logs.

Cas limites :
• __str__ doit retourner str ; sinon TypeError.

Considérations de performance :
• Coût négligeable sauf __str__ lourd.

Exemples :
• Voir banque : return 'str'.

Remarques :
• Réponse : la chaîne 'str' (1re option).`,

  2452: `__repr__ et repr(obj)

Débutant :
• repr vise une représentation officielle, souvent non ambiguë, pour debug.

Intermédiaire :
• Si __str__ manque, affichage peut retomber sur __repr__.

Expert :
• Idéalement eval(repr(obj)) recrée l’objet — objectif PEP, pas toujours tenu.

Concepts clés :
• Contrat repr vs str.

Distinctions clés :
• Pas la même branche que str quand les deux existent.

Fonctionnement :
• Builtin repr appelle __repr__.

Exécution étape par étape :
• Instance puis appel __repr__.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• REPL, tracebacks.

Cas limites :
• __repr__ doit renvoyer str.

Considérations de performance :
• N/A.

Exemples :
• Voir banque return 'repr'.

Remarques :
• Réponse : 'repr' (1re option).`,

  2453: `print(obj) avec __str__ et __repr__ définis

Débutant :
• print préfère __str__ pour la sortie utilisateur.

Intermédiaire :
• repr(obj) utiliserait encore __repr__.

Expert :
• Flux interne : PyObject_Str etc. côté CPython.

Concepts clés :
• Priorité d’affichage.

Distinctions clés :
• Pas la valeur de __repr__ pour print ici.

Fonctionnement :
• Résolution __str__ d’abord.

Exécution étape par étape :
• print appelle la couche str-like sur l’objet.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• CLI, notebooks.

Cas limites :
• __str__ qui lève : exception propage.

Considérations de performance :
• N/A.

Exemples :
• Voir banque : affiche str (texte sans guillemets à l’écran).

Remarques :
• Réponse : str (1re option du QCM, effet print).`,

  2454: `__len__ et len(obj)

Débutant :
• len délègue à __len__ qui renvoie un int ≥ 0.

Intermédiaire :
• Utile pour collections personnalisées.

Expert :
• __len__ peut influencer le test de vérité bool (via __bool__ ou longueur 0).

Concepts clés :
• Protocole séquence/conteneur.

Distinctions clés :
• Pas None ni erreur sur cet exemple.

Fonctionnement :
• Builtin len → slot __len__.

Exécution étape par étape :
• return 5 exécuté.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Files, piles custom.

Cas limites :
• __len__ négatif : ValueError.

Considérations de performance :
• O(1) si implémenté ainsi.

Exemples :
• Voir banque.

Remarques :
• Réponse : 5 (1re option).`,

  2455: `__eq__ et ==

Débutant :
• a == b appelle a.__eq__(b) ; ici toujours True.

Intermédiaire :
• Sans __eq__, comparaison par défaut sur types : souvent identité pour instances custom.

Expert :
• __eq__ devrait être cohérent avec __hash__ si hashable.

Concepts clés :
• Surcharge d’opérateur.

Distinctions clés :
• Pas False ici.

Fonctionnement :
• Méthode spéciale binaire.

Exécution étape par étape :
• obj1.__eq__(obj2).

Ordre des opérations :
• Gauche pilote sauf NotImplemented.

Cas d'utilisation courants :
• Égalité par valeur.

Cas limites :
• NotImplemented pour laisser l’autre côté réagir.

Considérations de performance :
• Dépend du corps.

Exemples :
• Voir banque.

Remarques :
• Réponse : True (1re option).`,

  2456: `__lt__ et <

Débutant :
• obj1 < obj2 appelle obj1.__lt__(obj2).

Intermédiaire :
• Tri sorted utilise rich comparisons.

Expert :
• functools.total_ordering peut combler les autres opérateurs.

Concepts clés :
• Ordre partiel / total selon implémentation.

Distinctions clés :
• Pas False sur ce snippet.

Fonctionnement :
• Slot __lt__.

Exécution étape par étape :
• return True exécuté.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Clés de tri personnalisées.

Cas limites :
• Comparaison à types incompatibles : souvent NotImplemented ou False selon version.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : True (1re option).`,

  2457: `__add__ et +

Débutant :
• a + b peut appeler a.__add__(b).

Intermédiaire :
• Peut retourner NotImplemented pour laisser b.__radd__ tenter.

Expert :
• Types numériques mixtes : protocole réfléchi.

Concepts clés :
• Addition sémantique custom.

Distinctions clés :
• Pas Error ici.

Fonctionnement :
• __add__ renvoie 10 dans la banque.

Exécution étape par étape :
• Appel avec other = second instance.

Ordre des opérations :
• Évaluation des deux opérandes puis __add__.

Cas d'utilisation courants :
• Vecteurs, matrices légères.

Cas limites :
• __add__ absent : TypeError.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 10 (1re option).`,

  2458: `__getitem__ et crochets

Débutant :
• obj[k] appelle __getitem__(self, k).

Intermédiaire :
• k peut être slice ou autre clé selon design.

Expert :
• Enchaîne avec __setitem__ / __delitem__ pour mapping mutable.

Concepts clés :
• Protocole d’indexation.

Distinctions clés :
• Pas 5 seul comme résultat.

Fonctionnement :
• key * 2 avec key=5 → 10.

Exécution étape par étape :
• Un seul appel __getitem__.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Wrappers liste/dict.

Cas limites :
• KeyError si vous le levez vous-même.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 10 (1re option).`,

  2459: `__setitem__ et affectation []

Débutant :
• obj[k] = v appelle __setitem__(self, k, v).

Intermédiaire :
• Ici self.data devient un dict avec la paire clé-valeur.

Expert :
• Peut valider ou copier plutôt que stocker brut.

Concepts clés :
• Mutation via opérateur.

Distinctions clés :
• Pas dict vide.

Fonctionnement :
• Après assignation, obj.data reflète {5:10}.

Exécution étape par étape :
• __setitem__ puis lecture .data.

Ordre des opérations :
• Affectation avant accès attribut data.

Cas d'utilisation courants :
• Tableaux associatifs custom.

Cas limites :
• Oublier initialiser self.data avant : erreur.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : {5: 10} (1re option).`,

  2460: `__call__ et instance()

Débutant :
• Si __call__ existe, l’instance est callable : obj() comme une fonction.

Intermédiaire :
• type.__call__ pour classes ; instance.__call__ est distinct.

Expert :
• Utile pour functors, stratégies.

Concepts clés :
• Callable protocol.

Distinctions clés :
• Pas le nom de classe en chaîne.

Fonctionnement :
• Parenthèses après instance déclenchent __call__.

Exécution étape par étape :
• MyClass() puis __call__ sur l’instance.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Stateful callbacks.

Cas limites :
• Récursion si __call__ rappelle obj() sans garde.

Considérations de performance :
• N/A.

Exemples :
• Voir banque return 'called'.

Remarques :
• Réponse : 'called' (1re option).`,

  2461: `@property lecture obj.x

Débutant :
• Le décorateur property transforme la méthode en descripteur : accès attribut sans ().

Intermédiaire :
• En interne : fonction + descripteur property.

Expert :
• Peut combiner avec __slots__ avec précaution.

Concepts clés :
• Getter calculé.

Distinctions clés :
• Pas besoin d’appeler x().

Fonctionnement :
• __get__ du property invoque la fonction getter.

Exécution étape par étape :
• return 1.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Champs dérivés, encapsulation douce.

Cas limites :
• Property sans doc : OK.

Considérations de performance :
• Un appel Python par lecture.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2462: `Property sans setter : obj.x = 2

Débutant :
• Sans setter, le descripteur property refuse l’écriture : AttributeError.

Intermédiaire :
• Message typique « can’t set attribute » ou équivalent.

Expert :
• fset=None sur l’objet property.

Concepts clés :
• Attribut calculé lecture seule.

Distinctions clés :
• Pas 2 stocké.

Fonctionnement :
• Tentative setattr via property → échec.

Exécution étape par étape :
• Assignation lève avant lecture suivante.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• API immuables exposées comme attributs.

Cas limites :
• Sous-classe redéfinissant __setattr__ : autre comportement possible.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : AttributeError (1re option).`,

  2463: `@property + @x.setter

Débutant :
• Le setter enregistré sur le même nom alimente souvent un backing _x.

Intermédiaire :
• Lecture passe par getter, écriture par setter.

Expert :
• Ordre de définition : property puis setter sur le même symbole.

Concepts clés :
• fget / fset du descripteur.

Distinctions clés :
• Pas lecture seule ici.

Fonctionnement :
• obj.x = 5 appelle fset puis obj.x lit fget.

Exécution étape par étape :
• Stockage puis retrieval 5.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Validation à l’écriture.

Cas limites :
• Getter avant init de _x : attention AttributeError si mal ordonné.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 5 (1re option).`,

  2464: `Setter qui transforme la valeur

Débutant :
• Le setter peut multiplier ou normaliser avant stockage.

Intermédiaire :
• Ici value * 2 donne 10 après assignation 5.

Expert :
• Éviter effets de bord cachés trop surprenants en API publique.

Concepts clés :
• Invariant interne vs valeur affichée.

Distinctions clés :
• Pas 5 après lecture.

Fonctionnement :
• self._x = 10 puis getter retourne 10.

Exécution étape par étape :
• Assignation puis lecture.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Unités, échelles.

Cas limites :
• Setter qui lève : assignation échoue.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 10 (1re option).`,

  2465: `@x.deleter et del obj.x

Débutant :
• del sur un property peut router vers une méthode deleter qui nettoie le stockage.

Intermédiaire :
• Ici del self._x enlève l’attribut privé.

Expert :
• Peut aussi logger ou invalider un cache.

Concepts clés :
• fdel du descripteur.

Distinctions clés :
• hasattr('_x') devient False après deleter.

Fonctionnement :
• del déclenche fdel puis hasattr teste présence.

Exécution étape par étape :
• _x=1, del via property, plus de _x.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Ressources liées à un champ logique.

Cas limites :
• Double del : erreur si _x déjà absent.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : False (1re option).`,

  2466: `Property sur _x initialisé dans __init__

Débutant :
• __init__ pose self._x ; le getter property expose x proprement.

Intermédiaire :
• Convention underscore : « interne » mais pas privé Java.

Expert :
• __slots__ + property : patterns avancés.

Concepts clés :
• Encapsulation légère.

Distinctions clés :
• Pas 0.

Fonctionnement :
• Getter lit _x existant.

Exécution étape par étape :
• __init__ puis accès x.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Modèle avec invariants.

Cas limites :
• Oublier __init__ : AttributeError au premier get.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2467: `MyClass.x sans instance — property

Débutant :
• Sur la classe, on obtient le descripteur property lui-même, pas le résultat du getter.

Intermédiaire :
• Il faut une instance pour déclencher __get__ avec self.

Expert :
• Utile pour introspection ou héritage de property.

Concepts clés :
• Descripteur non encore lié.

Distinctions clés :
• Pas la valeur 1 ni erreur.

Fonctionnement :
• Accès attribut sur type : pas d’instance passée au getter utilisateur.

Exécution étape par étape :
• Lookup renvoie objet property.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Tests, métaclasses rares.

Cas limites :
• property en lecture sur classe sans get spécial : retourne le descripteur.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : objet property (1re option).`,

  2468: `property() avec lambda getter

Débutant :
• property(fget) accepte une fonction ; lambda self: 1 fonctionne.

Intermédiaire :
• Équivalent conceptuel à @property sur méthode.

Expert :
• Peut passer fset, fdel en arguments positionnels nommés.

Concepts clés :
• Construction impérative du descripteur.

Distinctions clés :
• Pas Error.

Fonctionnement :
• Au get, lambda appelée avec l’instance.

Exécution étape par étape :
• obj.x → lambda → 1.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Petits getters inline.

Cas limites :
• lambda sans self si mal formé : TypeError.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2469: `Property avec défaut si _x absent

Débutant :
• Le getter peut tester hasattr et retourner 0 sinon.

Intermédiaire :
• Évite AttributeError sur _x manquant.

Expert :
• Alternative : initialiser _x dans __init__ systématiquement.

Concepts clés :
• Valeur par défaut calculée.

Distinctions clés :
• Pas 1 sans assignation préalable.

Fonctionnement :
• hasattr faux → branche else 0.

Exécution étape par étape :
• Nouvelle instance sans _x.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Champs optionnels lazy.

Cas limites :
• _x existe mais vaut None : hasattr True.

Considérations de performance :
• hasattr a un coût léger.

Exemples :
• Voir banque.

Remarques :
• Réponse : 0 (1re option).`,

  2470: `Setter vide (pass) puis lecture

Débutant :
• Assignation appelle le setter mais ne change pas l’état ; le getter garde sa valeur.

Intermédiaire :
• Utile pour illustrer que setter sans effet ne met pas à jour un backing field.

Expert :
• Peut servir à valider puis ignorer (anti-pattern si trompeur).

Concepts clés :
• Séparation getter/setter.

Distinctions clés :
• Pas 5 après lecture malgré assignation 5.

Fonctionnement :
• fset no-op ; fget retourne toujours 1.

Exécution étape par étape :
• x=5 puis get.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Démonstration pédagogique.

Cas limites :
• Si setter levait : assignation échouerait.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2471: `getattr(obj, 'x')

Débutant :
• getattr(obj, nom) équivalent à accès dynamique obj.nom.

Intermédiaire :
• Utile quand nom est une variable.

Expert :
• Troisième argument default évite AttributeError.

Concepts clés :
• introspection dynamique.

Distinctions clés :
• Pas 0 ici car x existe.

Fonctionnement :
• Résolution MRO / descripteurs comme accès normal.

Exécution étape par étape :
• obj.x = 1 puis getattr.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Plugins, sérialisation.

Cas limites :
• Attribut manquant sans default : erreur.

Considérations de performance :
• Comparable à accès direct.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2472: `getattr avec défaut

Débutant :
• Si l’attribut manque, getattr renvoie le default sans lever.

Intermédiaire :
• Évite try/except AttributeError.

Expert :
• getattr peut quand même appeler descripteur qui lève.

Concepts clés :
• Accès défensif.

Distinctions clés :
• Pas Error sur simple absence ici.

Fonctionnement :
• Pas de 'x' sur instance → 0.

Exécution étape par étape :
• getattr trois arguments.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Config optionnelle.

Cas limites :
• default lui-même coûteux si évalué ? Non : passé déjà.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 0 (1re option).`,

  2473: `setattr(obj, 'x', 1)

Débutant :
• Crée ou remplace l’attribut nommé par chaîne.

Intermédiaire :
• Équivalent à obj.x = 1 pour un nom statique.

Expert :
• Honore __setattr__ sur la classe si surchargé.

Concepts clés :
• Assignation dynamique.

Distinctions clés :
• Pas None.

Fonctionnement :
• Après setattr, lecture directe donne 1.

Exécution étape par étape :
• setattr puis accès.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• ORM, copie d’objets.

Cas limites :
• Nom invalide ou lecture seule property : peut échouer.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2474: `delattr puis hasattr

Débutant :
• delattr supprime l’attribut comme del obj.x.

Intermédiaire :
• hasattr retourne False si plus de binding.

Expert :
• __delattr__ surclasse le comportement.

Concepts clés :
• Cycle de vie d’attribut.

Distinctions clés :
• Pas True après suppression.

Fonctionnement :
• delattr enlève entrée du __dict__ instance.

Exécution étape par étape :
• x=1, delattr, test.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Nettoyage dynamique.

Cas limites :
• Supprimer attribut inexistant : AttributeError.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : False (1re option).`,

  2475: `dir(obj)

Débutant :
• dir liste les noms accessibles (approximation introspection).

Intermédiaire :
• Inclut attributs hérités, méthodes spéciales.

Expert :
• Peut être surchargé via __dir__.

Concepts clés :
• Découverte de surface d’API.

Distinctions clés :
• Pas une erreur ni tuple vide garanti.

Fonctionnement :
• Agrégation de clés pertinentes pour l’objet.

Exécution étape par étape :
• Nouvelle liste retournée.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• aide interactive, debug.

Cas limites :
• Ordre et contenu exacts peuvent varier légèrement.

Considérations de performance :
• Peut être coûteux sur gros objets.

Exemples :
• Voir banque.

Remarques :
• Réponse : liste de noms d’attributs (1re option).`,
};
