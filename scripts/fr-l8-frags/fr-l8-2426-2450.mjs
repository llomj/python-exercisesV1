/** Level 8 FR 2426–2450 — level8.ts (level8Patterns) Q26–50 */
export default {
  2426: `method(self): return self puis obj.method() is obj

Débutant :
• self est l’instance ; la méthode la renvoie ; is vérifie identité : True.

Intermédiaire :
• Chaînage style fluent possible en retournant self.

Expert :
• Pas de copie : même pointeur mémoire.

Concepts clés :
• Identité d’objet.

Distinctions clés :
• Pas False.

Fonctionnement :
• Return self sans transformation.

Exécution étape par étape :
• Appel lie self à obj, return obj.

Ordre des opérations :
• is compare ids.

Cas d'utilisation courants :
• API fluide, builder.

Cas limites :
• sous-classe retournant mauvais type si mal conçu.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : True (1re option).`,

  2427: `method(self, other): return self.x + other.x

Débutant :
• self pointe obj1 (x=1), other reçoit obj2 (x=2) : somme 3.

Intermédiaire :
• Pattern binaire explicite au lieu d’opérateur + surchargé.

Expert :
• Peut généraliser à tout attribut nommé partagé.

Concepts clés :
• Deux instances en interaction.

Distinctions clés :
• Pas 1 ni 2 seuls comme résultat final.

Fonctionnement :
• Passage positionnel obj2 en second paramètre utilisateur.

Exécution étape par étape :
• Lecture self.x et other.x puis addition.

Ordre des opérations :
• Préparation obj1, obj2 avant l’appel.

Cas d'utilisation courants :
• Vecteurs, agrégation entre objets.

Cas limites :
• AttributeError si x manque sur une instance.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 3 (1re option).`,

  2428: `MyClass.method sans parenthèses finales sur la méthode

Débutant :
• Accès via la classe : on obtient la fonction sous-jacente (repr fonction).

Intermédiaire :
• Pas encore d’argument self injecté : ce n’est pas une bound method.

Expert :
• En Python 3, méthode = fonction descripteur ; vue classe = function.

Concepts clés :
• Descripteur de fonction.

Distinctions clés :
• Pas la chaîne 'instance' ni None.

Fonctionnement :
• __get__(None, cls) renvoie fonction nue.

Exécution étape par étape :
• Pas d’appel, seulement lookup.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Introspection, tests unitaires.

Cas limites :
• property se comporte différemment.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : objet fonction MyClass.method (1re option).`,

  2429: `obj.method sans appeler — valeur

Débutant :
• Via l’instance : méthode liée (bound) montrant la classe et la fonction.

Intermédiaire :
• Appeler () déclenche l’exécution ; sans () c’est l’objet méthode.

Expert :
• __self__ et __func__ accessibles en interne.

Concepts clés :
• Bound method.

Distinctions clés :
• Pas la même chose que MyClass.method nu.

Fonctionnement :
• Descriptor lie self.

Exécution étape par étape :
• Création lazy de la bound method à la lecture.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Callbacks : passer obj.m sans parenthèses.

Cas limites :
• weakref.proxy subtilités.

Considérations de performance :
• Léger objet intermédiaire.

Exemples :
• Voir banque.

Remarques :
• Réponse : bound method (1re option).`,

  2430: `method(self, x=1): return x ; obj.method()

Débutant :
• Sans argument après self, x prend 1.

Intermédiaire :
• Même règle que pour les fonctions libres.

Expert :
• Keyword obj.method(x=7) possible.

Concepts clés :
• Défauts sur méthodes.

Distinctions clés :
• Pas 0 ni erreur.

Fonctionnement :
• Binding des défauts après self.

Exécution étape par étape :
• return 1.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Paramètres optionnels de commande.

Cas limites :
• Piège mutable défaut hors sujet.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2431: `class MyClass: x = 1 puis MyClass.x

Débutant :
• Lecture directe de l’attribut de classe : 1.

Intermédiaire :
• Pas besoin d’instance.

Expert :
• Peut servir de constante logique de classe.

Concepts clés :
• Namespace de classe.

Distinctions clés :
• Pas d’erreur.

Fonctionnement :
• Lookup dans __dict__ de la classe.

Exécution étape par étape :
• Accès attribut.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Configuration partagée.

Cas limites :
• Réassignation MyClass.x change pour tous non masqués.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2432: `x=1 classe ; obj = MyClass() ; obj.x

Débutant :
• Pas d’attribut d’instance : la résolution remonte à la classe → 1.

Intermédiaire :
• Ordre : instance puis classe le long du MRO.

Expert :
• data descriptors sur classe passent avant __dict__ instance (hors cas ici).

Concepts clés :
• Héritage d’attribut de classe par l’instance.

Distinctions clés :
• Pas None.

Fonctionnement :
• getattr hiérarchique.

Exécution étape par étape :
• Cherche dans obj.__dict__ vide → trouve sur classe.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Valeurs par défaut communes.

Cas limites :
• Masquage ultérieur par assignation instance.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2433: `obj.x = 2 puis MyClass.x

Débutant :
• L’affectation sur l’instance ne modifie pas l’attribut de classe : MyClass.x reste 1.

Intermédiaire :
• Création d’une entrée dans __dict__ de l’instance pour x.

Expert :
• Deux emplacements distincts : classe vs instance.

Concepts clés :
• Indépendance classe/instance pour l’affectation.

Distinctions clés :
• Pas 2 pour MyClass.x.

Fonctionnement :
• setattr sur instance n’écrit pas la classe.

Exécution étape par étape :
• obj.x shadow ; lecture classe inchangée.

Ordre des opérations :
• Séquence : création obj, assignation instance, lecture classe.

Cas d'utilisation courants :
• Surcharge par instance.

Cas limites :
• del obj.x révèle de nouveau la classe (question voisine).

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2434: `obj.x = 2 puis lecture obj.x

Débutant :
• L’attribut d’instance masque la classe : on lit 2.

Intermédiaire :
• Précédence de __dict__ instance avant classe pour ce nom.

Expert :
• Même si la classe change plus tard, tant que shadow existe, instance gagne.

Concepts clés :
• Shadowing.

Distinctions clés :
• Pas 1 sur obj.x.

Fonctionnement :
• Trouve x dans instance d’abord.

Exécution étape par étape :
• getattr court-circuite sur instance.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Personnalisation par objet.

Cas limites :
• slots : pas de __dict__ classique.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 2 (1re option).`,

  2435: `obj1.x = 2 ; obj2.x sans attribut propre

Débutant :
• obj2 n’a pas d’instance x : il voit toujours l’attribut de classe 1.

Intermédiaire :
• obj1 est isolé avec son propre x=2.

Expert :
• Piège différent des listes partagées (question suivante).

Concepts clés :
• Attributs d’instance indépendants.

Distinctions clés :
• Pas 2 pour obj2.x.

Fonctionnement :
• getattr sur obj2 tombe sur classe.

Exécution étape par étape :
• Vérifier __dict__ de obj2 vide pour x.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Objets avec état divergent.

Cas limites :
• N/A.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2436: `x = [] attribut de classe ; append sur obj1

Débutant :
• Une seule liste partagée : obj2 voit [1].

Intermédiaire :
• obj1.x et obj2.x pointent vers le même objet liste.

Expert :
• Bonne pratique : initialiser les mutables dans __init__.

Concepts clés :
• Mutabilité + partage.

Distinctions clés :
• Pas liste vide sur obj2.

Fonctionnement :
• append mute l’objet liste commun.

Exécution étape par étape :
• getattr renvoie la même référence.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Piège classique en exercice.

Cas limites :
• Si instance rebondit x vers nouvelle liste : cas différent.

Considérations de performance :
• Un seul objet liste.

Exemples :
• Voir banque.

Remarques :
• Réponse : [1] (1re option).`,

  2437: `MyClass.x = 2 puis obj = MyClass() ; obj.x

Débutant :
• Pas d’ombre sur l’instance : lecture de l’attribut de classe mis à 2.

Intermédiaire :
• Ordre du code : changement de classe avant création de obj.

Expert :
• Instances existantes verraient aussi 2 tant qu’elles ne masquent pas.

Concepts clés :
• Mutation d’attribut de classe.

Distinctions clés :
• Pas 1.

Fonctionnement :
• getattr trouve x=2 sur la classe.

Exécution étape par étape :
• Assignation classe puis instanciation puis lecture.

Ordre des opérations :
• Séquentiel comme écrit.

Cas d'utilisation courants :
• Compteurs globaux à la classe, feature flags.

Cas limites :
• Concurrence : besoin de synchronisation hors GIL si multi-thread réel.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 2 (1re option).`,

  2438: `obj.x = 2 puis del obj.x puis obj.x

Débutant :
• del supprime l’attribut d’instance ; la valeur de classe 1 réapparaît.

Intermédiaire :
• Équivalent à lever l’ombre.

Expert :
• delattr sur propriété data peut être interdit.

Concepts clés :
• Délégation au niveau classe après suppression locale.

Distinctions clés :
• Pas 2 ni erreur ici.

Fonctionnement :
• Retrait clé du __dict__ instance.

Exécution étape par étape :
• setattr shadow, del, getattr remonte.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Revenir au défaut de classe.

Cas limites :
• Si pas d’attribut classe x : AttributeError après del.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2439: `obj créé puis MyClass.x = 2 ; obj.x

Débutant :
• Instance sans x propre : voit la mise à jour de l’attribut de classe → 2.

Intermédiaire :
• Pas de copie par valeur au moment de __init__ pour x ici.

Expert :
• Si l’instance avait shadow 1, il faudrait del pour revoir la classe.

Concepts clés :
• Vue dynamique sur attribut de classe.

Distinctions clés :
• Pas 1.

Fonctionnement :
• Lecture résolue au moment de l’accès.

Exécution étape par étape :
• setattr classe puis getattr instance.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Paramètres globaux à toutes les instances non masquées.

Cas limites :
• Race threads.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 2 (1re option).`,

  2440: `obj.x = 2 puis MyClass.x = 3 ; obj.x

Débutant :
• L’instance garde son propre x=2 ; le changement de classe ne remplace pas l’attribut d’instance.

Intermédiaire :
• MyClass.x vaut 3 mais obj.x reste 2.

Expert :
• Illustration nette de l’indépendance après shadowing.

Concepts clés :
• Préséance instance une fois créée.

Distinctions clés :
• Pas 3 sur obj.x.

Fonctionnement :
• getattr s’arrête sur __dict__ instance.

Exécution étape par étape :
• Ordre : shadow, mutation classe, lecture instance.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Overrides locaux.

Cas limites :
• del pour réaligner.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 2 (1re option).`,

  2441: `@classmethod ; method(cls): return cls ; MyClass.method()

Débutant :
• cls reçoit la classe ; return cls donne l’objet classe MyClass.

Intermédiaire :
• Premier argument injecté est la classe, pas une instance.

Expert :
• Sous-classe : cls devient la sous-classe réelle (bon pour fabriques).

Concepts clés :
• Méthode de classe.

Distinctions clés :
• Pas la chaîne "MyClass" seule ni None.

Fonctionnement :
• Descriptor classmethod.

Exécution étape par étape :
• type.__get__ injecte MyClass.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• constructeurs alternatifs.

Cas limites :
• Oublier @classmethod → TypeError sur cls.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : objet classe __main__.MyClass (1re option).`,

  2442: `classmethod appelée via obj.method()

Débutant :
• Même résultat : Python passe toujours la classe en premier, pas l’instance.

Intermédiaire :
• L’instance sert juste de point d’accès ; cls reste MyClass.

Expert :
• Diffère fondamentalement de def m(self).

Concepts clés :
• Appel depuis instance d’une classmethod.

Distinctions clés :
• Pas l’instance obj comme valeur de retour.

Fonctionnement :
• Même chemin que MyClass.method().

Exécution étape par étape :
• Résolution type(obj) pour cls.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• API symétrique classe/instance.

Cas limites :
• Héritage : cls est le type réel de obj.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : objet classe (1re option).`,

  2443: `@staticmethod def method(): return 1

Débutant :
• Pas de self ni cls ; appel comme fonction ordinaire sur le namespace classe.

Intermédiaire :
• Le décorateur enlève l’injection automatique.

Expert :
• Utile pour regrouper utilitaires liés logiquement à la classe.

Concepts clés :
• Méthode statique.

Distinctions clés :
• Pas d’erreur faute de self.

Fonctionnement :
• staticmethod descriptor.

Exécution étape par étape :
• Appel direct return 1.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Helpers sans état.

Cas limites :
• Ne peut pas accéder à self sans le passer explicitement.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2444: `staticmethod appelée via obj.method()

Débutant :
• Identique à MyClass.method() : 1.

Intermédiaire :
• L’instance n’est pas passée au corps.

Expert :
• CPython ignore self pour staticmethod même si vous l’ajoutez par erreur dans la signature sans décorateur.

Concepts clés :
• Double syntaxe d’appel.

Distinctions clés :
• Pas None.

Fonctionnement :
• Pas de binding.

Exécution étape par étape :
• Lookup puis call simple.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• ergonomie d’API.

Cas limites :
• N/A.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2445: `Différence classmethod vs staticmethod

Débutant :
• classmethod reçoit automatiquement la classe (cls) ; staticmethod ne reçoit rien d’automatique.

Intermédiaire :
• Choix : besoin du type pour fabriquer ou lire des attributs de classe vs utilitaire pur.

Expert :
• Héritage : cls dynamique vs références statiques au nom de classe.

Concepts clés :
• Injection du premier argument.

Distinctions clés :
• Pas « pas de différence » ni dépréciation.

Fonctionnement :
• Descripteurs distincts.

Exécution étape par étape :
• Préparer cls ou non avant le corps utilisateur.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• from_config(cls) vs add(a,b).

Cas limites :
• staticmethod + sous-classe : pas d’accès implicite.

Considérations de performance :
• Différence négligeable.

Exemples :
• Voir banque.

Remarques :
• Réponse : classmethod reçoit cls, staticmethod rien (1re option).`,

  2446: `@classmethod get_x(cls): return cls.x avec x=1 classe

Débutant :
• cls.x lit l’attribut de classe : 1.

Intermédiaire :
• Pattern idiomatique pour toucher l’état partagé.

Expert :
• Évite de coder en dur MyClass.x dans la méthode.

Concepts clés :
• Accès attribut de classe via cls.

Distinctions clés :
• Pas 0.

Fonctionnement :
• cls lié à MyClass à l’appel.

Exécution étape par étape :
• MyClass.get_x() → cls=MyClass.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Métadonnées, registres.

Cas limites :
• Si sous-classe redéfinit x.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1 (1re option).`,

  2447: `@classmethod create(cls): return cls()

Débutant :
• Usine : cls() construit une nouvelle instance de la classe courante.

Intermédiaire :
• Équivalent conceptuel à MyClass() mais polymorphe en héritage.

Expert :
• Peut encapsuler validation avant __init__.

Concepts clés :
• Factory method.

Distinctions clés :
• Pas erreur ; pas renvoyer la classe seule sans appel.

Fonctionnement :
• cls est callable.

Exécution étape par étape :
• Appel de classe interne.

Ordre des opérations :
• create avant usage de obj.

Cas d'utilisation courants :
• from_dict, parseurs.

Cas limites :
• __init__ privé forcé : patterns avancés.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : crée une instance (1re option).`,

  2448: `@staticmethod add(x,y) puis MyClass.add(1,2)

Débutant :
• Addition simple : 3.

Intermédiaire :
• Paramètres libres comme une fonction.

Expert :
• Pourrait être une fonction module ; staticmethod groupe par cohésion.

Concepts clés :
• Pas d’état implicite.

Distinctions clés :
• Pas Error.

Fonctionnement :
• x=1 y=2.

Exécution étape par étape :
• return 1+2.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Maths utilitaires dans la classe.

Cas limites :
• N/A.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 3 (1re option).`,

  2449: `Méthode instance return 1 et class_method return 2

Débutant :
• L’appel explicite est MyClass.class_method() → 2.

Intermédiaire :
• Les deux types coexistent dans une même classe.

Expert :
• Pas de conflit de noms ici car noms différents.

Concepts clés :
• Coexistence des types de méthodes.

Distinctions clés :
• Pas 1 pour cet appel précis.

Fonctionnement :
• Résolution du nom class_method sur la classe.

Exécution étape par étape :
• classmethod path.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• API mixte utilitaire/instance.

Cas limites :
• Shadowing de noms : erreurs humaines.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 2 (1re option).`,

  2450: `staticmethod return 'static' appelée via instance

Débutant :
• Pas d’usage de self : retourne 'static'.

Intermédiaire :
• Identique à l’appel sur la classe.

Expert :
• Si une méthode instance du même nom existait, la résolution sur l’instance prendrait l’instance method — ici un seul method défini.

Concepts clés :
• Indépendance à l’objet appelant.

Distinctions clés :
• Pas 'instance'.

Fonctionnement :
• staticmethod.__get__ renvoie fonction nue.

Exécution étape par étape :
• Call direct.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Helpers affichés côté OO.

Cas limites :
• N/A.

Considérations de performance :
• N/A.

Exemples :
• Voir banque.

Remarques :
• Réponse : 'static' (1re option).`,
};
