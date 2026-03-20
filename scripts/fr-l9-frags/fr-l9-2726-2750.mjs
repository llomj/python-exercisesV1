/** Level 9 FR 2726–2750 — level9.ts Q26–50 (super edges, MRO, polymorphism) */
export default {
  2726: `staticmethod enfant qui appelle super().method()

Débutant :
• AttributeError : super() a besoin du contexte classe/instance fourni par une méthode normale ou classmethod, pas par un staticmethod.

Intermédiaire :
• Contournement : appeler Parent.method() explicitement ou passer par classmethod.

Expert :
• En restant static, utiliser super(cls, <sentinelle>) n'est pas le pattern idiomatique ici.

Concepts clés :
• Limitation du proxy super sans self/cls implicite.

Distinctions clés :
• Pas retour 1 silencieux.

Fonctionnement :
• super() tente de récupérer le frame courant ; échoue dans staticmethod nu.

Exécution étape par étape :
• Child.method() exécute super().method() → erreur.

Ordre des opérations :
• Évaluation super avant appel méthode.

Cas d'utilisation courants :
• Rappel : préférer classmethod pour hooks hérités typés au niveau classe.

Cas limites :
• Versions / CPython messages peuvent varier légèrement.

Considérations de performance :
• N/A.

Exemples :
• @classmethod def f(cls): return super().f().

Remarques :
• Réponse : AttributeError (1re option).`,

  2727: `super().method() + ' child' avec parent 'parent'

Débutant :
• 'parent child' : concaténation après appel parent.

Intermédiaire :
• Même idée pour listes avec + si types compatibles.

Expert :
• i18n : préférer f-strings ou format pour extensions.

Concepts clés :
• Extension non destructive du résultat parent.

Distinctions clés :
• Pas seulement 'parent'.

Fonctionnement :
• Évalue super().method() puis +.

Exécution étape par étape :
• Chaîne parent + suffixe enfant.

Ordre des opérations :
• Appel avant +.

Cas d'utilisation courants :
• Préfixes logs, titres UI.

Cas limites :
• Si parent retourne None : TypeError sur +.

Considérations de performance :
• N/A.

Exemples :
• return super().repr() + ' [extended]'.

Remarques :
• Réponse : 'parent child' (1re option).`,

  2728: `super(Child, Child()).method() hors définition de méthode

Débutant :
• Retourne 1 : forme explicite fonctionne en dehors du corps de méthode si types corrects.

Intermédiaire :
• Utile en introspection ou tests.

Expert :
• Attention à ne pas confondre classe et metaclass.

Concepts clés :
• super n'est pas réservé au mot-clé self à l'intérieur d'une def.

Distinctions clés :
• Pas Error.

Fonctionnement :
• Construit proxy puis appelle method lié à l'instance.

Exécution étape par étape :
• Child() puis super(Child, that).method().

Ordre des opérations :
• Child() évalué une fois passé au super.

Cas d'utilisation courants :
• Wrappers externes, sérialisation.

Cas limites :
• Mauvaise classe en premier argument : mauvais saut MRO.

Considérations de performance :
• N/A.

Exemples :
• Appeler la prochaine __init__ depuis une factory.

Remarques :
• Réponse : 1 (1re option).`,

  2729: `Parent.x=1, Child.x=2, method return super().x

Débutant :
• 1 : super lit x dans le parent malgré Child.x=2 pour Child.x direct.

Intermédiaire :
• Illustre différence entre accès direct attribut classe et chemin super.

Expert :
• Pour données d'instance, règles descriptors s'appliquent aussi.

Concepts clés :
• Dé-shadowing ciblé.

Distinctions clés :
• Pas 2.

Fonctionnement :
• Proxy super résout le nom dans la portion MRO après la classe courante.

Exécution étape par étape :
• Child().method → super().x → Parent.x.

Ordre des opérations :
• Dans méthode instance.

Cas d'utilisation courants :
• Défaut parent + surcharge affichage.

Cas limites :
• Si plusieurs ancêtres définissent x : premier trouvé après Child selon MRO.

Considérations de performance :
• N/A.

Exemples :
• Tarif de base vs tarif promo enfant.

Remarques :
• Réponse : 1 (1re option).`,

  2730: `Chaîne Parent → Middle → Child, chaque method retourne 1,2,? — Child().method()

Débutant :
• 2 : super() depuis Child appelle la méthode suivante dans le MRO, donc Middle, pas Parent direct.

Intermédiaire :
• Cœur de la coopération MRO en profondeur.

Expert :
• En diamant, super saute selon C3, pas « toujours le parent textuel ».

Concepts clés :
• super = « prochain dans MRO », pas « superclasse syntaxique unique ».

Distinctions clés :
• Pas 1.

Fonctionnement :
• MRO Child, Middle, Parent, object.

Exécution étape par étape :
• Child.method → super → Middle.method.

Ordre des opérations :
• Un seul niveau de saut par super ici.

Cas d'utilisation courants :
• Mixins empilés.

Cas limites :
• Oublier super au milieu casse la chaîne.

Considérations de performance :
• N/A.

Exemples :
• Trois niveaux de validateurs.

Remarques :
• Réponse : 2 (1re option).`,

  2731: `C(A,B), A.x=1, B.x=2 — C.x sans redéfinition enfant

Débutant :
• 1 : premier parent dans le tuple de bases gagne pour attribut égal sur plusieurs parents.

Intermédiaire :
• MRO C3 ordonne au-delà de la simple gauche, mais ici lecture C.x suit MRO après C vide.

Expert :
• Toujours inspecter C.__mro__ en cas de doute.

Concepts clés :
• Ordre des bases compte.

Distinctions clés :
• Pas 2 si A est à gauche de B.

Fonctionnement :
• Cherche x le long du MRO : A avant B.

Exécution étape par étape :
• C.__dict__ sans x → A.x.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Mixins : mettre la branche « dominante » à gauche.

Cas limites :
• Diamond complexe : seul mro() est la vérité.

Considérations de performance :
• N/A.

Exemples :
• class C(B,A) inverserait le résultat.

Remarques :
• Réponse : 1 (1re option).`,

  2732: `class C(B,A) avec mêmes x

Débutant :
• 2 : B est maintenant prioritaire sur A pour C.x.

Intermédiaire :
• Même mécanisme que 2731 avec ordre inversé.

Expert :
• Documenter l'ordre des bases dans les docstrings d'équipe.

Concepts clés :
• API explicite > convention implicite.

Distinctions clés :
• Pas 1.

Fonctionnement :
• MRO met B avant A.

Exécution étape par étape :
• Trouve B.x d'abord.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Réordonner pour résoudre conflit de mixin.

Cas limites :
• Si conflit de méthodes ET attributs : analyser mro() complet.

Considérations de performance :
• N/A.

Exemples :
• Comparer C(A,B).x vs C(B,A).x.

Remarques :
• Réponse : 2 (1re option).`,

  2733: `C(A,B), deux method() — C().method()

Débutant :
• 'A' : MRO trouve la première implémentation dans les parents selon l'ordre.

Intermédiaire :
• Si C définissait method, elle masquerait tout avant résolution super.

Expert :
• Collaboration : enchaîner super().method() pour composer.

Concepts clés :
• Résolution de méthode = premier trouvé sur MRO.

Distinctions clés :
• Pas 'B' si A d'abord.

Fonctionnement :
• C.__mro__ parcouru.

Exécution étape par étape :
• Instance C ; cherche method ; A gagne.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Choix de stratégie par ordre de mixin.

Cas limites :
• Méthodes avec signatures différentes : erreurs à l'appel.

Considérations de performance :
• N/A.

Exemples :
• Voir mro() pour visualiser.

Remarques :
• Réponse : 'A' (1re option).`,

  2734: `C(A,B) définit method return super().method()

Débutant :
• 'A' : super depuis C appelle le suivant dans MRO après C, souvent A en premier parent.

Intermédiaire :
• Ce n'est pas « toujours le parent syntaxique unique » mais le suivant linéarisé.

Expert :
• En diamant, super peut sauter différemment ; ici configuration classique.

Concepts clés :
• super coopératif en héritage multiple.

Distinctions clés :
• Pas 'B' en premier bond.

Fonctionnement :
• MRO [C,A,B,object] typique.

Exécution étape par étape :
• C.method → super → A.method.

Ordre des opérations :
• super évalué dans C.method.

Cas d'utilisation courants :
• Composer deux mixins ligne à ligne.

Cas limites :
• Oublier d'appeler super dans une branche : chaîne cassée.

Considérations de performance :
• N/A.

Exemples :
• Réécrire pour appeler aussi B via super dans A (autre design).

Remarques :
• Réponse : 'A' (1re option).`,

  2735: `C(A,B) — C.__bases__

Débutant :
• Tuple (A, B) dans l'ordre du class statement.

Intermédiaire :
• __bases__ parents directs seulement.

Expert :
• Diffère de __mro__ qui inclut C et object.

Concepts clés :
• Introspection rapide des déclarations.

Distinctions clés :
• Pas singleton vide.

Fonctionnement :
• Figé à la création de classe.

Exécution étape par étape :
• Après définition de C.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Tests d'ordre de mixin.

Cas limites :
• Bases en tuple dynamique : rare.

Considérations de performance :
• N/A.

Exemples :
• len(__bases__) == 2.

Remarques :
• Réponse : tuple (A, B) (1re option).`,

  2736: `D(B,C), B(A), C(A) — D.mro()

Débutant :
• [D, B, C, A, object] : linéarisation C3 respectant enfants avant convergence sur A.

Intermédiaire :
• Évite l'ordre depth-first naïf qui dupliquerait mal A.

Expert :
• Impossible de créer certaines hiérarchies si C3 échoue (TypeError à la définition).

Concepts clés :
• MRO prévisible et monotonique.

Distinctions clés :
• Pas [D,A,B,C,...] ici.

Fonctionnement :
• Algorithme C3 sur les listes de préséances.

Exécution étape par étape :
• Calcul à class D(B,C).

Ordre des opérations :
• Avant instances.

Cas d'utilisation courants :
• Déboguer super() en diamant.

Cas limites :
• Hiérarchies contradictoires rejetées.

Considérations de performance :
• Calcul rare (import time).

Exemples :
• Afficher cls.__mro__ en REPL.

Remarques :
• Réponse : D, B, C, A, object (1re option).`,

  2737: `D(B,C), B et C surchargent method, D: pass — D().method()

Débutant :
• 'B' : premier dans MRO après D qui définit method gagne, ici B avant C.

Intermédiaire :
• Même si C a aussi method, il est plus loin.

Expert :
• Pour composer B puis C, il faudrait une méthode sur D qui enchaîne super.

Concepts clés :
• Conflit résolu par ordre, pas par « meilleure » sémantique.

Distinctions clés :
• Pas 'C' ni 'A' ici.

Fonctionnement :
• Scan MRO pour premier __dict__ avec 'method'.

Exécution étape par étape :
• D instance ; résout method → B.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Choisir l'ordre B,C pour priorité.

Cas limites :
• Si B pass et C définit : saute à C (question voisine).

Considérations de performance :
• N/A.

Exemples :
• Réordonner bases si besoin.

Remarques :
• Réponse : 'B' (1re option).`,

  2738: `B(A) sans method, C(A) avec method — D(B,C).method()

Débutant :
• 'C' : B ne fournit pas method, le MRO continue jusqu'à C.

Intermédiaire :
• Montre que « gauche » ne bloque pas si absent.

Expert :
• Si ni B ni C : retombée sur A.

Concepts clés :
• Recherche exhaustive le long du MRO.

Distinctions clés :
• Pas 'B'.

Fonctionnement :
• D → B skip → C trouvé.

Exécution étape par étape :
• Appelle C.method lié à D().

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Mixins optionnels + noyau commun A.

Cas limites :
• method dans B qui appelle super sans implémentation parent : erreurs possibles.

Considérations de performance :
• N/A.

Exemples :
• Ajouter method dans B pour changer l'issue.

Remarques :
• Réponse : 'C' (1re option).`,

  2739: `C(A,B) redéfinit x=3 alors que A et B ont x

Débutant :
• 3 : l'attribut propre à C court-circuite la recherche dans les parents.

Intermédiaire :
• Les valeurs 1 et 2 restent sur A et B mais invisibles via C.x.

Expert :
• Accès direct A.x toujours possible.

Concepts clés :
• Ombre totale sur le point d'accès C.x.

Distinctions clés :
• Ni 1 ni 2.

Fonctionnement :
• C.__dict__['x'] trouvé immédiatement.

Exécution étape par étape :
• Lecture C.x.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Surcharge finale de configuration.

Cas limites :
• Mutable partagé si on réutilise le même objet liste : piège classique.

Considérations de performance :
• N/A.

Exemples :
• Voir aussi instance shadowing.

Remarques :
• Réponse : 3 (1re option).`,

  2740: `C(A,B) method return super().method()

Débutant :
• 'A' : super depuis C prend le maillon suivant du MRO, ici A avant B pour la configuration standard.

Intermédiaire :
• B.method ignoré dans ce premier super depuis C.

Expert :
• Pour enchaîner B, A devrait appeler super à son tour.

Concepts clés :
• Chaîne coopérative explicitement programmée.

Distinctions clés :
• Pas 'B' en un seul super depuis C.

Fonctionnement :
• MRO [C,A,B,object] hypothèse du quiz.

Exécution étape par étape :
• C.method → super → A.method.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Mixins multiples ordonnés.

Cas limites :
• Si A ne définit pas method : poursuite MRO.

Considérations de performance :
• N/A.

Exemples :
• Réécrire A.method pour appeler super vers B.

Remarques :
• Réponse : 'A' (1re option).`,

  2741: `Qu'est-ce que le polymorphisme ?

Débutant :
• Même interface (même nom de méthode ou usage attendu), comportements différents selon le type réel.

Intermédiaire :
• En Python : surcharge + duck typing.

Expert :
• Lié au dispatch dynamique et aux protocols.

Concepts clés :
• Client code stable, implémentations variées.

Distinctions clés :
• Pas « même comportement, interface différente » comme définition principale ici.

Fonctionnement :
• Attribut lookup sur le type de l'objet à l'exécution.

Exécution étape par étape :
• animal.speak() dispatch vers Dog ou Cat.

Ordre des opérations :
• Après résolution de l'objet receveur.

Cas d'utilisation courants :
• Rendu graphique, parsers, stratégies.

Cas limites :
• Pas de vérification statique par défaut.

Considérations de performance :
• Coût lookup méthode négligeable en pratique.

Exemples :
• Iterable traité uniformément.

Remarques :
• Réponse : même interface, comportements différents (1re option).`,

  2742: `Dog et Cat surchargent speak — [Dog().speak(), Cat().speak()]

Débutant :
• ['bark','meow'].

Intermédiaire :
• Chaque classe fournit sa version de speak.

Expert :
• Fonctionne aussi avec protocols typing côté statique.

Concepts clés :
• Polymorphisme ad hoc typage dynamique.

Distinctions clés :
• Pas deux fois 'sound'.

Fonctionnement :
• Deux instances distinctes, deux dispatches.

Exécution étape par étape :
• Évalue chaque appel pour la liste.

Ordre des opérations :
• Gauche puis droite dans la liste affichée.

Cas d'utilisation courants :
• Menus d'animaux, plugins.

Cas limites :
• speak qui lève : liste incomplète.

Considérations de performance :
• N/A.

Exemples :
• Liste de Shape.area().

Remarques :
• Réponse : ['bark','meow'] (1re option).`,

  2743: `Circle et Square area — [Circle().area(), Square().area()]

Débutant :
• [3.14, 1] avec les valeurs du quiz.

Intermédiaire :
• Interface commune area sur hiérarchie Shape.

Expert :
• Vrais modèles géométriques calculeraient depuis rayon/côté.

Concepts clés :
• Polymorphisme sur données numériques.

Distinctions clés :
• Pas [0,0].

Fonctionnement :
• Chaque sous-classe fournit corps area.

Exécution étape par étape :
• Deux constructions puis deux appels.

Ordre des opérations :
• Literal list éléments gauche-droite.

Cas d'utilisation courants :
• Boucle sur formes pour surface totale.

Cas limites :
• Floating rounding hors sujet ici.

Considérations de performance :
• N/A.

Exemples :
• Remplacer par vraies formules.

Remarques :
• Réponse : [3.14, 1] (1re option).`,

  2744: `def process(obj): return obj.method() avec A et B

Débutant :
• [1, 2] : duck typing, pas besoin d'héritage commun déclaré.

Intermédiaire :
• hasattr ou protocols améliorent robustesse.

Expert :
• EAFP : try/except autour si contrat flou.

Concepts clés :
• Polymorphisme structurel implicite.

Distinctions clés :
• Pas [1,1].

Fonctionnement :
• process ne inspecte pas le nom de classe.

Exécution étape par étape :
• Deux appels successifs.

Ordre des opérations :
• Liste lit process(A()) puis process(B()).

Cas d'utilisation courants :
• APIs génériques json-like.

Cas limites :
• Objet sans method : AttributeError.

Considérations de performance :
• N/A.

Exemples :
• write() sur fichiers ou buffers.

Remarques :
• Réponse : [1, 2] (1re option).`,

  2745: `obj = Parent(); obj = Child(); obj.method()

Débutant :
• 'child' : le dispatch utilise l'objet actuellement référencé.

Intermédiaire :
• Les noms sont des étiquettes, pas des types fixes.

Expert :
• id(obj) change après réassignation.

Concepts clés :
• Typage dynamique des références.

Distinctions clés :
• Pas 'parent'.

Fonctionnement :
• Seconde assignation remplace la référence.

Exécution étape par étape :
• Garde Child instance ; appelle Child.method.

Ordre des opérations :
• Assignations séquentielles.

Cas d'utilisation courants :
• Registres polymorphes, états.

Cas limites :
• Si Child ne surcharge pas : retomberait sur parent.

Considérations de performance :
• N/A.

Exemples :
• Liste hétérogène Base.

Remarques :
• Réponse : 'child' (1re option).`,

  2746: `A() + B() avec __add__ sur les deux

Débutant :
• 'A' : __add__ du operande gauche est appelé en premier.

Intermédiaire :
• Si NotImplemented, Python peut essayer __radd__ inverse.

Expert :
• Conception symétrique : parfois retourner NotImplemented pour laisser l'autre côté.

Concepts clés :
• Surcharge d'opérateur = polymorphisme.

Distinctions clés :
• B() + A() donnerait 'B'.

Fonctionnement :
• binaire + dispatch spécial.

Exécution étape par étape :
• A().__add__(B()).

Ordre des opérations :
• Gauche puis droite pour arguments.

Cas d'utilisation courants :
• Vecteurs, matrices custom.

Cas limites :
• Types incompatibles : TypeError après échecs NotImplemented.

Considérations de performance :
• N/A.

Exemples :
• int + int builtin analogue.

Remarques :
• Réponse : 'A' (1re option).`,

  2747: `make_sound(animal) return animal.speak(); Dog surchargé

Débutant :
• 'bark' : dispatch sur Dog malgré annotation implicite Animal.

Intermédiaire :
• Animal.speak pass ne s'exécute pas ici car override.

Expert :
• ABC pourrait forcer override.

Concepts clés :
• Fonction accepte tout objet avec speak.

Distinctions clés :
• Pas None si Dog retourne str.

Fonctionnement :
• Attribut speak trouvé sur Dog.

Exécution étape par étape :
• make_sound(Dog()).

Ordre des opérations :
• Appel fonction puis méthode.

Cas d'utilisation courants :
• Visiteurs légers.

Cas limites :
• speak qui ne retourne rien : None.

Considérations de performance :
• N/A.

Exemples :
• Renderer.render(obj).

Remarques :
• Réponse : 'bark' (1re option).`,

  2748: `[A().method(), B().method(), C().method()] avec overrides 1,2,3

Débutant :
• [1,2,3] : chaque niveau fournit sa valeur.

Intermédiaire :
• Montre chaîne indépendante par type réel.

Expert :
• super pourrait relier les valeurs différemment si besoin.

Concepts clés :
• Polymorphisme vertical sur la hiérarchie.

Distinctions clés :
• Pas [1,1,1].

Fonctionnement :
• Trois constructions, trois dispatches.

Exécution étape par étape :
• Liste lit trois appels.

Ordre des opérations :
• Ordre gauche-droite.

Cas d'utilisation courants :
• Tests de régression MRO.

Cas limites :
• N/A.

Considérations de performance :
• N/A.

Exemples :
• Pipeline de handlers numériques.

Remarques :
• Réponse : [1, 2, 3] (1re option).`,

  2749: `Child sans override — [Parent().method(), Child().method()]

Débutant :
• ['parent','parent'] : même implémentation partagée via héritage.

Intermédiaire :
• Toujours polymorphe au sens « même appel .method() » sur types différents.

Expert :
• isinstance différents, comportement identique.

Concepts clés :
• Héritage comme mécanisme de partage.

Distinctions clés :
• Pas ['parent','child'].

Fonctionnement :
• Child instance utilise Parent.method via MRO.

Exécution étape par étape :
• Deux lookups aboutissent à même fonction.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Sous-classes marqueurs sans logique nouvelle.

Cas limites :
• Si method devient abstract plus tard : cas ABC.

Considérations de performance :
• N/A.

Exemples :
• Exceptions typées sans nouveau __str__.

Remarques :
• Réponse : ['parent', 'parent'] (1re option).`,

  2750: `[str(A()), str(B())] avec __str__ sur A et B

Débutant :
• ['A','B'] : built-in str() délègue à __str__.

Intermédiaire :
• Fallback repr si __str__ absent.

Expert :
• Données-aware __str__ vs __repr__ distinctions PEP.

Concepts clés :
• Polymorphisme avec fonctions natives.

Distinctions clés :
• Pas ['A','A'].

Fonctionnement :
• tp_str / slot str en CPython.

Exécution étape par étape :
• str appelle type(obj).__str__(obj).

Ordre des opérations :
• Liste construite après deux str.

Cas d'utilisation courants :
• Logs, UI.

Cas limites :
• __str__ qui lève : exception globale.

Considérations de performance :
• N/A.

Exemples :
• len sur __len__ similaire.

Remarques :
• Réponse : ['A', 'B'] (1re option).`,
};
