/** Level 9 FR 2751–2775 — level9.ts Q51–75 (mangling, _, properties start, ABC start) */
export default {
  2751: `obj.__x après self.__x = 1 dans MyClass

Débutant :
• AttributeError : depuis l'extérieur, __x n'est pas le vrai nom d'attribut.

Intermédiaire :
• Le préfixe double underscore sur un attribut d'instance déclenche le name mangling : stockage sous _MyClass__x.

Expert :
• Ce n'est pas du vrai private C++ ; c'est une protection contre les collisions de noms entre sous-classes.

Concepts clés :
• Mangling lié au nom de la classe définissant l'assignation.

Distinctions clés :
• _x (un seul underscore) ne mangle pas ; __x__ des deux côtés suit d'autres règles (méthodes spéciales).

Fonctionnement :
• L'accès obj.__x cherche un attribut non manglé et échoue.

Exécution étape par étape :
• __init__ écrit _MyClass__x ; lecture obj.__x ne le retrouve pas.

Ordre des opérations :
• Création instance puis accès attribut.

Cas d'utilisation courants :
• Attributs « internes » à une classe dans une hiérarchie.

Cas limites :
• Accès volontaire via getattr(obj, '_MyClass__x', ...) si besoin de debug (à éviter en prod).

Considérations de performance :
• Coût négligeable ; surtout une question de sémantique.

Exemples :
• obj._MyClass__x vaut 1 alors que obj.__x lève.

Remarques :
• Réponse : AttributeError (1re option).`,

  2752: `obj._MyClass__x après self.__x = 1

Débutant :
• 1 : on utilise exactement le nom manglé produit par Python.

Intermédiaire :
• Le mangling est déterministe : _ + nom de classe + __ + suffixe.

Expert :
• Contourner le mangling brise l'encapsulation intentionnelle ; à réserver aux tests ou interop rare.

Concepts clés :
• Le mangling est une transformation de nom, pas une suppression de l'attribut.

Distinctions clés :
• Diffère d'un attribut public self.x sans transformation.

Fonctionnement :
• Le même objet expose _MyClass__x dans __dict__ (souvent).

Exécution étape par étape :
• Lecture directe du slot manglé renvoie la valeur stockée.

Ordre des opérations :
• Instanciation puis accès au nom complet.

Cas d'utilisation courants :
• Comprendre les tracebacks et la désérialisation d'objets.

Cas limites :
• Renommer la classe ne renomme pas rétroactivement les attributs déjà créés sur d'anciennes instances.

Considérations de performance :
• Identique à tout accès attribut.

Exemples :
• print(obj._MyClass__x) affiche 1.

Remarques :
• Réponse : 1 (1re option).`,

  2753: `MyClass.__x avec __x = 1 au niveau classe

Débutant :
• 1 : attribut de classe nommé __x reste accessible tel quel sur la classe.

Intermédiaire :
• Le mangling automatique cible surtout self.__nom dans les méthodes, pas les simples variables de classe __x (hors règles spéciales).

Expert :
• Éviter de surcharger la signification de __ : préférer des noms explicites pour les constantes de classe.

Concepts clés :
• Attribut de classe vs attribut d'instance.

Distinctions clés :
• self.__x (instance) vs MyClass.__x (namespace de classe) ne suivent pas la même story pédagogique ici.

Fonctionnement :
• MyClass.__x résout dans le dictionnaire de la classe.

Exécution étape par étape :
• Accès direct sur la classe retourne 1.

Ordre des opérations :
• Après exécution du corps de class.

Cas d'utilisation courants :
• Données partagées par défaut (avec prudence si mutable).

Cas limites :
• Mélanger __x classe et self.__x crée de la confusion pour les débutants.

Considérations de performance :
• Lecture O(1) sur le dict de classe.

Exemples :
• MyClass.__x vaut 1 sans passer par le mangling instance de la question 2751.

Remarques :
• Réponse : 1 (1re option).`,

  2754: `obj._x avec self._x = 1

Débutant :
• 1 : un seul underscore est une convention « protégé », pas une règle d'accès.

Intermédiaire :
• Aucun renommage : _x reste _x dans __dict__.

Expert :
• PEP 8 : signal aux développeurs, pas barrière technique.

Concepts clés :
• Convention d'API vs enforcement runtime.

Distinctions clés :
• Contrairement à __x seul côté instance, pas de _Classe__x ici.

Fonctionnement :
• Lecture attribut normale sur l'instance.

Exécution étape par étape :
• obj._x lit la valeur 1.

Ordre des opérations :
• __init__ puis accès extérieur.

Cas d'utilisation courants :
• Champs internes documentés mais utilisables par sous-classes.

Cas limites :
• from module import * n'importe pas les noms commençant par _ (autre nuance du underscore).

Considérations de performance :
• N/A.

Exemples :
• Sous-classe peut lire self._x sans magie.

Remarques :
• Réponse : 1 (1re option).`,

  2755: `Child().method() qui fait return self.__x alors que Parent a self.__x = 1

Débutant :
• AttributeError : dans Child, __x aurait été _Child__x, pas l'attribut _Parent__x du parent.

Intermédiaire :
• Le mangling est par classe lexicale où l'identifiant __x apparaît.

Expert :
• Exposer un getter Parent ou un nom protégé _x évite ce piège.

Concepts clés :
• Deux classes → deux espaces de noms manglés distincts.

Distinctions clés :
• Hériter ne « mappe » pas automatiquement __x enfant vers __x parent.

Fonctionnement :
• Recherche d'attribut pour _Child__x échoue sur l'instance.

Exécution étape par étape :
• Parent.__init__ a créé _Parent__x ; la méthode enfant ne le touche pas avec __x.

Ordre des opérations :
• Construction puis appel method.

Cas d'utilisation courants :
• API parent avec get_balance() plutôt que balance interne __.

Cas limites :
• Accès explicite self._Parent__x (fragile) si vraiment nécessaire.

Considérations de performance :
• N/A.

Exemples :
• Même idée que 2796 mais ici focus Parent/Child explicite.

Remarques :
• Réponse : AttributeError (1re option).`,

  2756: `Child().method() avec return self._Parent__x

Débutant :
• 1 : on lit volontairement le vrai nom manglé du parent.

Intermédiaire :
• Ça prouve que le mangling n'est pas une barrière de sécurité.

Expert :
• Pattern rare ; mieux vaut API publique ou protected _ sur le parent.

Concepts clés :
• Nom explicite _Parent__x aligné sur la règle de mangling.

Distinctions clés :
• Diffère de self.__x dans l'enfant (2755).

Fonctionnement :
• Attribut présent sur l'instance après Parent.__init__.

Exécution étape par étape :
• method retourne la valeur 1 stockée sous _Parent__x.

Ordre des opérations :
• Instanciation Child → chaîne d'init parent.

Cas d'utilisation courants :
• Pédagogie sur le mangling et la maintenance.

Cas limites :
• Si la classe parent est renommée, le code utilisant _Parent__x casse.

Considérations de performance :
• N/A.

Exemples :
• Accès réussi au backing field manglé.

Remarques :
• Réponse : 1 (1re option).`,

  2757: `obj.__x__ avec self.__x__ = 1

Débutant :
• 1 : les noms avec __ des deux côtés ne suivent pas la règle de mangling « __suffixe ».

Intermédiaire :
• Réservés aux méthodes spéciales ; ici c'est un attribut utilisateur peu idiomatique mais valide.

Expert :
• Ne pas abuser : choisir un nom normal pour éviter la confusion avec le protocole data model.

Concepts clés :
• Exception à la règle __foo sur instances.

Distinctions clés :
• __x une seule paire de underscores mangle ; __x__ non (pour cette question).

Fonctionnement :
• Accès direct __x__ sur l'instance.

Exécution étape par étape :
• Retourne 1.

Ordre des opérations :
• __init__ puis lecture.

Cas d'utilisation courants :
• Quiz pédagogique plutôt que style de code réel.

Cas limites :
• Nommer __init__ autrement casserait la classe ; pas le cas ici.

Considérations de performance :
• N/A.

Exemples :
• obj.__x__ lisible sans _MyClass__ préfixe.

Remarques :
• Réponse : 1 (1re option).`,

  2758: `obj.get_x() avec self._x = 1

Débutant :
• 1 : méthode getter classique qui lit _x.

Intermédiaire :
• Alternative à @property pour contrôler l'accès.

Expert :
• Permet d'ajouter plus tard logs, cache, validation sans changer la signature get_x().

Concepts clés :
• Interface méthode explicite vs attribut calculé.

Distinctions clés :
• get_x() vs accès direct _x (toujours possible).

Fonctionnement :
• Appel de méthode lié à l'instance.

Exécution étape par étape :
• get_x retourne self._x.

Ordre des opérations :
• MyClass() puis get_x().

Cas d'utilisation courants :
• Code legacy Java-esque ou APIs stables.

Cas limites :
• Oublier les parenthèses si on écrit obj.get_x sans call.

Considérations de performance :
• Un saut de fonction de plus qu'une propriété.

Exemples :
• Valeur 1 retournée.

Remarques :
• Réponse : 1 (1re option).`,

  2759: `obj.get_x() avec self.__x = 1 dans la classe

Débutant :
• 1 : à l'intérieur de MyClass, __x se résout vers _MyClass__x automatiquement.

Intermédiaire :
• Le compilateur transforme les références __x dans les méthodes de MyClass.

Expert :
• Cohérent avec l'échec d'accès externe obj.__x (2751).

Concepts clés :
• Portée lexicale + mangling pour les méthodes de la même classe.

Distinctions clés :
• Méthode enfant sur __x (2755) n'a pas ce mapping vers le parent.

Fonctionnement :
• get_x lit le slot manglé via la forme __x dans MyClass.

Exécution étape par étape :
• return self.__x → valeur 1.

Ordre des opérations :
• Instanciation ; pas d'accès externe à __x.

Cas d'utilisation courants :
• Encapsulation avec getter public.

Cas limites :
• Sous-classe redéfinissant get_x doit resuper() ou utiliser API stable.

Considérations de performance :
• N/A.

Exemples :
• get_x() fonctionne alors que obj.__x échouerait.

Remarques :
• Réponse : 1 (1re option).`,

  2760: `set_x(2) puis get_x ou _MyClass__x

Débutant :
• 2 : le setter interne réécrit le champ manglé.

Intermédiaire :
• hasattr get_x gère le cas où seul _MyClass__x compte après mutation.

Expert :
• Montre que setter + getter maintiennent l'invariant sans exposer __x.

Concepts clés :
• Méthodes de classe voient les mêmes noms manglés que __init__.

Distinctions clés :
• Si get_x manquait, _MyClass__x afficherait encore 2.

Fonctionnement :
• set_x(2) assigne via self.__x = val dans MyClass.

Exécution étape par étape :
• Passage à 2 ; lecture suivante renvoie 2.

Ordre des opérations :
• set puis expression conditionnelle de lecture.

Cas d'utilisation courants :
• Mutateur validant avant stockage.

Cas limites :
• Oublier d'implémenter set_x laisserait la valeur initiale 1.

Considérations de performance :
• N/A.

Exemples :
• État cohérent 2 après set.

Remarques :
• Réponse : 2 (1re option).`,

  2761: `@property def x retourne self._x — obj.x ?

Débutant :
• 1 : lecture d'attribut déclenche le getter du descripteur property.

Intermédiaire :
• property transforme une méthode en accès style attribut.

Expert :
• Permet migration progressive de attribut public → attribut privé + getter sans casser les appelants.

Concepts clés :
• Descripteur property sur la classe ; accès sur l'instance.

Distinctions clés :
• obj.x sans () vs méthode get_x().

Fonctionnement :
• __get__ du property appelle la fonction x(self).

Exécution étape par étape :
• obj.x → return self._x → 1.

Ordre des opérations :
• __init__ pose _x ; accès utilise le getter.

Cas d'utilisation courants :
• Modèles ORM, dataclasses avec validation à la lecture.

Cas limites :
• Sans setter, assignation obj.x = ... échouera (voir 2767).

Considérations de performance :
• Très léger ; un appel Python de plus.

Exemples :
• Interface fluide obj.x.

Remarques :
• Réponse : 1 (1re option).`,

  2762: `@x.setter avec self._x = val * 2 puis obj.x = 5

Débutant :
• 10 : le setter multiplie avant stockage.

Intermédiaire :
• L'assignation obj.x = 5 n'écrit pas 5 brut si la logique métier transforme.

Expert :
• Pattern utile pour unités (pieds → pouces) ou normalisation.

Concepts clés :
• Couple getter/setter sur le même nom logique.

Distinctions clés :
• Diffère d'une simple affectation self._x = 5 sans property.

Fonctionnement :
• __set__ du property invoque le setter avec val=5.

Exécution étape par étape :
• _x devient 10 ; lecture obj.x renvoie 10.

Ordre des opérations :
• Affectation puis interrogation.

Cas d'utilisation courants :
• Validation et transformation centralisées.

Cas limites :
• Double application si on multiplie déjà ailleurs.

Considérations de performance :
• N/A.

Exemples :
• 5 * 2 = 10 visible via getter.

Remarques :
• Réponse : 10 (1re option).`,

  2763: `property sur __x manglé — obj.x ?

Débutant :
• 1 : le getter voit __x depuis l'intérieur de MyClass.

Intermédiaire :
• L'utilisateur lit x public alors que le stockage reste manglé.

Expert :
• Meilleure façade que d'exposer _MyClass__x.

Concepts clés :
• Composition de property + mangling.

Distinctions clés :
• obj.x OK ; obj.__x toujours interdit depuis l'extérieur.

Fonctionnement :
• getter x utilise self.__x résolu en _MyClass__x.

Exécution étape par étape :
• Retour 1.

Ordre des opérations :
• Création instance ; lecture property.

Cas d'utilisation courants :
• Champs privés « Pythoniques » avec API propre.

Cas limites :
• Sous-classe redéfinissant x sans super peut casser l'invariant.

Considérations de performance :
• N/A.

Exemples :
• Pattern façade courant.

Remarques :
• Réponse : 1 (1re option).`,

  2764: `setter avec corps pass après obj.x = 5

Débutant :
• 1 : le setter ne modifie rien ; le getter continue de retourner 1.

Intermédiaire :
• L'affectation appelle quand même le setter (effet no-op).

Expert :
• Peut servir à ignorer silencieusement les écritures (souvent mauvais style ; préférer AttributeError ou log).

Concepts clés :
• Écriture via property sans stockage ne change pas _backing field inexistant ici.

Distinctions clés :
• Diffère d'un setter qui ferait self._hidden = val.

Fonctionnement :
• __set__ terminé ; état getter inchangé (return 1 constant dans l'exemple).

Exécution étape par étape :
• obj.x = 5 puis obj.x lit toujours 1.

Ordre des opérations :
• Assignation puis lecture.

Cas d'utilisation courants :
• Illustrer pièges pédagogiques.

Cas limites :
• Confusion utilisateur si l'écriture semble réussir.

Considérations de performance :
• N/A.

Exemples :
• Simule property « read-mostly » mal documentée.

Remarques :
• Réponse : 1 (1re option).`,

  2765: `x = property(get_x, set_x) puis obj.x = 5

Débutant :
• 5 : forme fonctionnelle équivalente aux décorateurs.

Intermédiaire :
• property(getter, setter) attache les deux callables au même nom.

Expert :
• Utile quand les fonctions existent déjà sans décorateur.

Concepts clés :
• Descripteur créé à l'exécution du corps de classe.

Distinctions clés :
• Même sémantique que @property + @x.setter.

Fonctionnement :
• set_x(5) assigne _x ; get_x lit _x.

Exécution étape par étape :
• Après assignation, obj.x vaut 5.

Ordre des opérations :
• Instanciation ; écriture ; lecture.

Cas d'utilisation courants :
• Portage de code Python 2 style ou génération dynamique.

Cas limites :
• Noms get_x/set_x doivent être définis avant l'affectation à x.

Considérations de performance :
• N/A.

Exemples :
• Style alternatif documenté dans la doc property.

Remarques :
• Réponse : 5 (1re option).`,

  2766: `del obj.x avec @x.deleter supprimant self._x — hasattr(obj, '_x') ?

Débutant :
• False : l'attribut privé conventionnel a été effacé.

Intermédiaire :
• del sur le nom public route vers le deleter du property.

Expert :
• Bon endroit pour fermer fichiers ou invalider cache.

Concepts clés :
• del déclenche __delete__ du descripteur si défini.

Distinctions clés :
• del self._x direct sans property serait autre chose.

Fonctionnement :
• deleter exécute del self._x.

Exécution étape par étape :
• hasattr voit plus _x sur l'instance.

Ordre des opérations :
• Création ; suppression ; test.

Cas d'utilisation courants :
• Nettoyage contrôlé d'attributs calculés.

Cas limites :
• Relire obj.x après del lève si pas de valeur par défaut.

Considérations de performance :
• N/A.

Exemples :
• Pattern lifecycle court sur ressource.

Remarques :
• Réponse : False (1re option).`,

  2767: `property sans setter — obj.x = 2 ?

Débutant :
• AttributeError : pas de __set__ fourni pour ce nom.

Intermédiaire :
• Message du type can't set attribute sur property read-only.

Expert :
• Pour rendre writable, ajouter @x.setter ou utiliser setattr sur _x en interne seulement.

Concepts clés :
• Lecture seule par défaut si un seul bloc @property.

Distinctions clés :
• Diffère d'un simple attribut self.x assignable.

Fonctionnement :
• Tentative d'assignation échoue au niveau du descripteur.

Exécution étape par étape :
• Exception avant modification de _x.

Ordre des opérations :
• Lecture OK ; écriture bloquée.

Cas d'utilisation courants :
• Exposer surface immuable pour données dérivées.

Cas limites :
• On peut toujours contourner avec obj._x = ... (convention).

Considérations de performance :
• N/A.

Exemples :
• Empêche typos silencieuses sur API publique.

Remarques :
• Réponse : AttributeError (1re option).`,

  2768: `getter return self._x if self._x > 0 else 0 après _x = -1 direct

Débutant :
• 0 : la lecture passe par le getter même si _x a été forcé.

Intermédiaire :
• Montre que l'écriture directe _x contourne le setter mais pas le getter à la lecture.

Expert :
• Pour des invariants forts, éviter l'exposition de _x ou utiliser __slots__ + API stricte.

Concepts clés :
• Getter comme point de contrôle à la lecture.

Distinctions clés :
• Si on avait mis obj.x = -1 avec setter validant, l'histoire diffère.

Fonctionnement :
• Condition sur _x au moment de l'accès obj.x.

Exécution étape par étape :
• -1 > 0 faux → 0.

Ordre des opérations :
• Mutation directe ; accès property.

Cas d'utilisation courants :
• Normalisation (clamp) à l'affichage.

Cas limites :
• État interne -1 mais surface 0 : documenter.

Considérations de performance :
• N/A.

Exemples :
• Garde-fou minimal sur valeurs négatives.

Remarques :
• Réponse : 0 (1re option).`,

  2769: `setter if val < 0: raise ValueError — obj.x = -1

Débutant :
• ValueError : la validation dans le setter lève avant stockage.

Intermédiaire :
• Pattern défensif pour domaines non négatifs (prix, taille).

Expert :
• Compléter par __repr__ clair et tests unitaires sur les bornes.

Concepts clés :
• Setter comme garde-fou à l'écriture.

Distinctions clés :
• Diffère du getter qui transforme (2768).

Fonctionnement :
• __set__ exécute if et lève.

Exécution étape par étape :
• Pas d'assignation de _x si exception.

Ordre des opérations :
• Tentative d'assignation.

Cas d'utilisation courants :
• Dataclasses field avec validation custom.

Cas limites :
• val exactement 0 : ici accepté si seul < 0 testé.

Considérations de performance :
• N/A.

Exemples :
• Entrée utilisateur rejetée tôt.

Remarques :
• Réponse : ValueError (1re option).`,

  2770: `@classmethod puis @property sur def x(cls)

Débutant :
• TypeError : combinaison refusée (ordre des descripteurs incompatible).

Intermédiaire :
• property attend un callable instance ; classmethod change la nature du callable.

Expert :
• Pour « property de classe », patterns avancés (metaclass, custom descriptor) hors scope débutant.

Concepts clés :
• Empilement de décorateurs n'est pas toujours commutatif ni légal.

Distinctions clés :
• @property sur méthode normale OK ; pas ainsi avec @classmethod classique.

Fonctionnement :
• Échec à la définition de la classe (ou à l'accès selon version — ici quiz attend TypeError).

Exécution étape par étape :
• Python signale l'incompatibilité.

Ordre des opérations :
• Décorateurs appliqués au moment du class body.

Cas d'utilisation courants :
• Utiliser @classmethod simple sans property pour accès classe.

Cas limites :
• Python 3.12+ a évolué certains cas ; suivre la version cible du quiz (comportement standard ABC du bank).

Considérations de performance :
• N/A.

Exemples :
• Préférer MyClass.get_x() @classmethod.

Remarques :
• Réponse : TypeError (1re option).`,

  2771: `MyClass(ABC) avec @abstractmethod — MyClass() ?

Débutant :
• TypeError : on ne peut pas instancier une classe encore abstraite.

Intermédiaire :
• ABCMeta enregistre les méthodes abstraites dans __abstractmethods__.

Expert :
• Permet définir des interfaces sans implémentation partielle livrée par erreur.

Concepts clés :
• Instanciation bloquée tant qu'une méthode abstraite subsiste.

Distinctions clés :
• issubclass peut être True même si instanciation interdite (autre question).

Fonctionnement :
• __call__ de la métaclasse vérifie avant de créer l'objet.

Exécution étape par étape :
• MyClass() lève avec message sur method abstraite.

Ordre des opérations :
• Définition classe puis tentative ().

Cas d'utilisation courants :
• Plugins, stratégies, parsers à sous-classer.

Cas limites :
• abstractproperty historique ; aujourd'hui property + abstractmethod.

Considérations de performance :
• N/A.

Exemples :
• Créer Concrete(MyClass) avec def method.

Remarques :
• Réponse : TypeError (1re option).`,

  2772: `Child(Parent ABC) sans implémenter method — Child() ?

Débutant :
• TypeError : l'abstraction se transmet par héritage.

Intermédiaire :
• Child reste abstrait tant que method est abstrait dans la hiérarchie.

Expert :
• Peut être voulu pour une couche intermédiaire Template Method.

Concepts clés :
• __abstractmethods__ fusionné le long du MRO.

Distinctions clés :
• issubclass(Child, Parent) True malgré tout (voir 2779).

Fonctionnement :
• Même garde-fou que 2771 sur Child().

Exécution étape par étape :
• Échec instanciation.

Ordre des opérations :
• Définir classes ; appeler Child().

Cas d'utilisation courants :
• Forcer implémentation dans feuilles concrètes.

Cas limites :
• Enregistrer une classe virtuelle via ABC.register hors sujet ici.

Considérations de performance :
• N/A.

Exemples :
• Deux niveaux d'ABC avant concrete.

Remarques :
• Réponse : TypeError (1re option).`,

  2773: `Child implémente method → Child().method() ?

Débutant :
• 1 : la classe devient concrète ; l'appel utilise l'implémentation enfant.

Intermédiaire :
• __abstractmethods__ vide pour Child.

Expert :
• super().method() possible si extension du parent concret partiel.

Concepts clés :
• Satisfaction du contrat abstrait.

Distinctions clés :
• Diffère de Child qui repasse @abstractmethod (2774).

Fonctionnement :
• Résolution MRO trouve Child.method.

Exécution étape par étape :
• Retourne 1.

Ordre des opérations :
• Instanciation puis appel.

Cas d'utilisation courants :
• API FileReader avec read() abstrait.

Cas limites :
• Oublier super dans __init__ hiérarchique (autre quiz).

Considérations de performance :
• N/A.

Exemples :
• Pattern strategy concrète.

Remarques :
• Réponse : 1 (1re option).`,

  2774: `Child redéfinit method avec @abstractmethod encore

Débutant :
• TypeError : la méthode reste abstraite dans Child.

Intermédiaire :
• Le décorateur réapplique le statut abstrait même si un corps pass existe.

Expert :
• Sert à repousser l'implémentation à une sous-classe plus basse.

Concepts clés :
• Abstraction multi-niveaux.

Distinctions clés :
• 2773 concret vs 2774 toujours abstrait.

Fonctionnement :
• Child() bloqué.

Exécution étape par étape :
• Tentative instanciation échoue.

Ordre des opérations :
• Définition Child ; ().

Cas d'utilisation courants :
• Hiérarchies profondes d'adaptateurs.

Cas limites :
• Mélangé avec métaclasses custom peut surprendre.

Considérations de performance :
• N/A.

Exemples :
• GrandChild devra enlever abstract.

Remarques :
• Réponse : TypeError (1re option).`,

  2775: `MyClass.__abstractmethods__ avec une méthode abstract

Débutant :
• frozenset({'method'}) : ensemble immuable des noms encore abstraits.

Intermédiaire :
• frozenset empêche mutation accidentelle par l'utilisateur.

Expert :
• Introspection pour frameworks générant du code.

Concepts clés :
• Nom exact de la méthode dans le set.

Distinctions clés :
• Après implémentation enfant, frozenset() vide (2776).

Fonctionnement :
• ABCMeta calcule à la fin du corps de classe.

Exécution étape par étape :
• Inspection attribut classe.

Ordre des opérations :
• Après définition MyClass.

Cas d'utilisation courants :
• Tests vérifiant qu'une classe est bien abstraite.

Cas limites :
• Plusieurs abstractmethods → plusieurs noms dans le set.

Considérations de performance :
• N/A.

Exemples :
• print(MyClass.__abstractmethods__).

Remarques :
• Réponse : frozenset({'method'}) (1re option).`,
};
