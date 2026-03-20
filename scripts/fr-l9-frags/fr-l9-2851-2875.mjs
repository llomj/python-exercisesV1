/** Level 9 FR 2851–2875 — level9_intermediate_b.ts Q51–75 (built-in subclasses, __missing__, __new__, isinstance) */
export default {
  2851: `MyList(list) avec first() — ml.first()

Débutant :
• 1 : self est la liste ; self[0] lit le premier élément.

Intermédiaire :
• Toutes les méthodes list (append, len, slicing) restent disponibles.

Expert :
• Pour que MyList + [...] reste MyList, surcharger __add__ etc.

Concepts clés :
• Extension de types built-in sans les réimplémenter.

Distinctions clés :
• Pas une liste enveloppée dans un attribut séparé.

Fonctionnement :
• MyList([1,2,3]) construit comme list puis ajoute la méthode.

Exécution étape par étape :
• Appel first() → retour index 0.

Ordre des opérations :
• Création puis first().

Cas d'utilisation courants :
• Collections métier (Queue, Stack) typées.

Cas limites :
• Liste vide : IndexError sur first() naïf.

Considérations de performance :
• Opérations C sous-jacentes inchangées.

Exemples :
• ml.append(4) fonctionne toujours.

Remarques :
• Réponse : 1 — 1re option.`,

  2852: `MyList(list): pass puis append et len

Débutant :
• 4 : append hérité allonge la sous-classe comme une list.

Intermédiaire :
• pass ne retire aucun comportement du parent.

Expert :
• type(ml) reste MyList ; type(ml+[4]) serait list (autre question).

Concepts clés :
• Sous-classe vide = alias enrichi du parent.

Distinctions clés :
• Diffère d'une liste stockée dans un attribut.

Fonctionnement :
• Même structure mémoire qu'une list CPython.

Exécution étape par étape :
• [1,2,3] puis append(4).

Ordre des opérations :
• append avant len.

Cas d'utilisation courants :
• Tag de type isinstance(x, MyList).

Cas limites :
• Pickle / copy : comportement standard sous-classe.

Considérations de performance :
• N/A.

Exemples :
• len(MyList()) puis extends.

Remarques :
• Réponse : 4 — 1re option.`,

  2853: `MyDict(dict) keys_sorted() sur b=2,a=1

Débutant :
• ['a','b'] : sorted sur les clés du dict.

Intermédiaire :
• self.keys() comme sur tout dict ; ordre d'insertion n'empêche pas le tri alphabétique ici.

Expert :
• Pour ordre d'insertion brut : list(self.keys()) sans sorted.

Concepts clés :
• self est le mapping.

Distinctions clés :
• Retour liste, pas set.

Fonctionnement :
• sorted itère sur les clés et renvoie liste triée.

Exécution étape par étape :
• Clés b,a → tri → a,b.

Ordre des opérations :
• Construction MyDict(b=2,a=1) puis appel.

Cas d'utilisation courants :
• Affichage stable de paramètres.

Cas limites :
• Locales / clés non comparables : TypeError possible.

Considérations de performance :
• O(n log n) pour le tri.

Exemples :
• Variante values_sorted dérivée.

Remarques :
• Réponse : ['a','b'] — 1re option.`,

  2854: `MyStr(str) shout() — upper + !

Débutant :
• "HELLO!" : str immuable ; upper() crée une nouvelle chaîne.

Intermédiaire :
• self est la valeur str ; méthodes str disponibles.

Expert :
• Pas de mutation in-place sur str.

Concepts clés :
• Sous-classe str pour API domaine.

Distinctions clés :
• Pas "hello!" ni "HELLO" seul.

Fonctionnement :
• Concaténation de str après upper.

Exécution étape par étape :
• hello → HELLO → HELLO!.

Ordre des opérations :
• Appel shout sur instance.

Cas d'utilisation courants :
• Normalisation affichage.

Cas limites :
• Chaîne vide : "!" seulement.

Considérations de performance :
• N/A.

Exemples :
• whisper avec lower.

Remarques :
• Réponse : "HELLO!" — 1re option.`,

  2855: `MyInt(int) is_even() sur 4

Débutant :
• True : 4 % 2 == 0.

Intermédiaire :
• self se comporte comme un int dans les opérateurs.

Expert :
• bool est sous-classe de int ; ici le résultat est bool attendu.

Concepts clés :
• Extension numérique légère.

Distinctions clés :
• Pas 0 ni Error.

Fonctionnement :
• Modulo puis comparaison à 0.

Exécution étape par étape :
• MyInt(4) puis is_even.

Ordre des opérations :
• Création puis appel.

Cas d'utilisation courants :
• Wrappers avec invariants.

Cas limites :
• Très grands int : modulo reste défini.

Considérations de performance :
• N/A.

Exemples :
• MyInt(3) False.

Remarques :
• Réponse : True — 1re option.`,

  2856: `MyInt(3).is_even()

Débutant :
• False : reste 1 après % 2.

Intermédiaire :
• Même méthode is_even() que pour MyInt(4) (ID 2855), ici valeur impaire.

Expert :
• Les négatifs : -3 % 2 en Python vaut 1 → impair.

Concepts clés :
• Parité via modulo.

Distinctions clés :
• Pas True.

Fonctionnement :
• 3 % 2 → 1 ; 1 == 0 faux.

Exécution étape par étape :
• Évaluation booléenne.

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Validation schémas.

Cas limites :
• booléens True/False sont des int 1/0 en arithmétique.

Considérations de performance :
• N/A.

Exemples :
• Tester 0 (pair).

Remarques :
• Réponse : False — 1re option.`,

  2857: `DefaultDict __missing__ puis d['x'] += 1

Débutant :
• 1 : __missing__ pose 0 puis += ajoute 1.

Intermédiaire :
• += lit puis écrit ; première lecture déclenche __missing__.

Expert :
• Proche de collections.defaultdict(int) en idée.

Concepts clés :
• Hook __getitem__ / __missing__ pour clés absentes.

Distinctions clés :
• Pas 0 final ni erreur sur cette séquence.

Fonctionnement :
• __missing__ insère clé et retourne défaut.

Exécution étape par étape :
• get 0 ; add 1 ; stocke 1.

Ordre des opérations :
• Un seul += sur clé nouvelle.

Cas d'utilisation courants :
• Compteurs, graphes adjacence.

Cas limites :
• __missing__ qui ne stocke pas la clé : boucle ou KeyError selon cas.

Considérations de performance :
• Coût dict normal.

Exemples :
• d['a'] seul retourne 0.

Remarques :
• Réponse : 1 — 1re option.`,

  2858: `UpperStr(str) __new__ avec s.upper()

Débutant :
• "HELLO" : la valeur est normalisée à la création.

Intermédiaire :
• __new__ de str reçoit la chaîne finale ; __init__ str est no-op.

Expert :
• Pattern standard pour int/str/tuple/frozenset.

Concepts clés :
• Immuabilité : mutation impossible après __new__.

Distinctions clés :
• Pas "hello" ni erreur.

Fonctionnement :
• super().__new__(cls, texte_upper).

Exécution étape par étape :
• hello → HELLO avant retour instance.

Ordre des opérations :
• Appel constructeur UpperStr.

Cas d'utilisation courants :
• Identifiants canoniques (email upper).

Cas limites :
• Sous-classes multiples : bien passer cls.

Considérations de performance :
• N/A.

Exemples :
• isinstance(UpperStr('a'), str) True.

Remarques :
• Réponse : "HELLO" — 1re option.`,

  2859: `Pourquoi __new__ pour str/int immuables ?

Débutant :
• La valeur est figée dans __new__ ; __init__ arrive trop tard.

Intermédiaire :
• __init__ sur str ne change pas la séquence de caractères stockée.

Expert :
• list/dict : contenu mutable donc __init__ suffit souvent.

Concepts clés :
• Protocole création en deux phases.

Distinctions clés :
• Pas « __init__ n'existe pas » ni vitesse comme raison principale.

Fonctionnement :
• allocate + initialiser valeur pour immuable.

Exécution étape par étape :
• __new__ retourne instance complète.

Ordre des opérations :
• __new__ puis __init__ (no-op str).

Cas d'utilisation courants :
• Sous-types validés (PositiveInt).

Cas limites :
• Méta-classes : autre couche.

Considérations de performance :
• N/A.

Exemples :
• UpperStr vs mauvais __init__ inutile.

Remarques :
• Réponse : valeur fixée dans __new__ — 1re option.`,

  2860: `MySet(set) __contains__ délègue — 1 in MySet({1,2,3})

Débutant :
• True : super().__contains__ fait le test d'appartenance normal.

Intermédiaire :
• Point d'accroche pour journaliser ou normaliser (ex. casefold).

Expert :
• in déclenche __contains__ sur le type.

Concepts clés :
• Surcharge contrôlée avec délégation.

Distinctions clés :
• Pas False ni Error.

Fonctionnement :
• Lookup méthode sur MySet puis super.

Exécution étape par étape :
• 1 présent dans le set.

Ordre des opérations :
• Création set puis in.

Cas d'utilisation courants :
• Sets insensibles à la casse custom.

Cas limites :
• __contains__ incohérent avec __iter__ : bugs logiques.

Considérations de performance :
• Hachage O(1) amorti.

Exemples :
• LoggedSet du cours.

Remarques :
• Réponse : True — 1re option.`,

  2861: `isinstance(MyList([]), list)

Débutant :
• True : sous-classe ≡ relation est-un pour isinstance.

Intermédiaire :
• Parcourt MRO du type de l'objet.

Expert :
• type(x) is list serait False pour MyList.

Concepts clés :
• Polymorphisme nominal.

Distinctions clés :
• Pas False.

Fonctionnement :
• list apparaît dans le MRO de MyList.

Exécution étape par étape :
• Vérification positive.

Ordre des opérations :
• Après définition classes.

Cas d'utilisation courants :
• APIs acceptant list ou sous-types.

Cas limites :
• ABC.register peut élargir hors sous-classe syntaxique.

Considérations de performance :
• isinstance optimisé types built-in.

Exemples :
• isinstance(True, int) True.

Remarques :
• Réponse : True — 1re option.`,

  2862: `isinstance([], MyList)

Débutant :
• False : [] est list pure, pas instance de MyList.

Intermédiaire :
• isinstance ne descend pas vers les enfants depuis le parent.

Expert :
• Animal vs Chien analogie.

Concepts clés :
• Direction hiérarchique.

Distinctions clés :
• Inverse de 2861.

Fonctionnement :
• type([]) is list, pas sous-classe de MyList.

Exécution étape par étape :
• Rejet.

Ordre des opérations :
• Literal [] puis test.

Cas d'utilisation courants :
• Valider liste concrète typée.

Cas limites :
• None : isinstance(None, MyList) False.

Considérations de performance :
• N/A.

Exemples :
• isinstance(MyList(), MyList) True.

Remarques :
• Réponse : False — 1re option.`,

  2863: `AutoList append sans doublon — deux append(1)

Débutant :
• 1 : second append ignoré si déjà présent.

Intermédiaire :
• not in utilise __contains__ de list O(n).

Expert :
• Pour perf : set auxiliaire ou OrderedDict selon besoin.

Concepts clés :
• Override append avec garde.

Distinctions clés :
• Pas 2.

Fonctionnement :
• if item not in self puis super().append.

Exécution étape par étape :
• Premier 1 ajouté ; second skip.

Ordre des opérations :
• Séquence append.

Cas d'utilisation courants :
• Historique ordonné sans répétition.

Cas limites :
• Égalité vs identité : dépend __eq__ éléments.

Considérations de performance :
• Coût linéaire par append naïf.

Exemples :
• append("a") deux fois.

Remarques :
• Réponse : 1 — 1re option.`,

  2864: `type(MyList()).__name__

Débutant :
• "MyList" : type retourne la classe exacte.

Intermédiaire :
• Diffère de isinstance(..., list).

Expert :
• __class__.__name__ cohérent ici.

Concepts clés :
• Identité de classe runtime.

Distinctions clés :
• Pas "list".

Fonctionnement :
• Objet créé par MyList().

Exécution étape par étape :
• Attribut __name__ sur le type.

Ordre des opérations :
• MyList() puis type.

Cas d'utilisation courants :
• Dispatch sur nom court.

Cas limites :
• Proxy ou instances dynamiques : noms exotiques.

Considérations de performance :
• N/A.

Exemples :
• type([]).__name__ list.

Remarques :
• Réponse : "MyList" — 1re option.`,

  2865: `type(MyList([1]) + [2]).__name__

Débutant :
• "list" : __add__ de list renvoie une list neuve, pas MyList.

Intermédiaire :
• Piège classique sous-classe builtins.

Expert :
• Surcharger __add__ pour retourner cls(...) si besoin.

Concepts clés :
• Opérateurs hérités typent le résultat comme base C.

Distinctions clés :
• Pas "MyList".

Fonctionnement :
• list.__add__ produit list.

Exécution étape par étape :
• Concat puis type du résultat.

Ordre des opérations :
• + puis type.

Cas d'utilisation courants :
• numpy-like wrapping : réimplémenter ops.

Cas limites :
• * et slice idem.

Considérations de performance :
• N/A.

Exemples :
• type(ml*2) list.

Remarques :
• Réponse : "list" — 1re option.`,

  2866: `C.__bases__[0].__name__ avec C(B), B(A)

Débutant :
• "B" : __bases__ liste seulement parents directs.

Intermédiaire :
• MRO complet dans __mro__, pas dans __bases__.

Expert :
• MI : plusieurs entrées dans __bases__.

Concepts clés :
• Parenthé direct vs ancêtres.

Distinctions clés :
• Pas "A".

Fonctionnement :
• C.__bases__ == (B,).

Exécution étape par étape :
• Index 0 → B.

Ordre des opérations :
• Après définition hiérarchie.

Cas d'utilisation courants :
• Introspection frameworks.

Cas limites :
• Pas de bases : rare pour user class.

Considérations de performance :
• N/A.

Exemples :
• Comparer C.__mro__[2] pour A.

Remarques :
• Réponse : "B" — 1re option.`,

  2867: `issubclass(C, A) chaîne C(B), B(A)

Débutant :
• True : transitivité des sous-classes.

Intermédiaire :
• A dans MRO de C.

Expert :
• issubclass(C,C) True aussi.

Concepts clés :
• Graphe d'héritage linéaire ici.

Distinctions clés :
• Pas False.

Fonctionnement :
• Vérification sur MRO ou équivalent interne.

Exécution étape par étape :
• Succès.

Ordre des opérations :
• Trois classes définies.

Cas d'utilisation courants :
• Plugins dérivés d'une base.

Cas limites :
• Tuple de bases dans issubclass : 2e arg tuple.

Considérations de performance :
• N/A.

Exemples :
• issubclass(C,B) True.

Remarques :
• Réponse : True — 1re option.`,

  2868: `Que renvoie A.__subclasses__() ?

Débutant :
• Liste des classes qui héritent directement de A (pas instances).

Intermédiaire :
• Pas ancêtres, pas MRO, pas tous descendants profonds.

Expert :
• Faibles refs : classes supprimées disparaissent de la liste.

Concepts clés :
• Registre runtime des enfants directs.

Distinctions clés :
• Première option du Q.

Fonctionnement :
• Rempli à la définition des sous-classes.

Exécution étape par étape :
• Appel renvoie liste courante.

Ordre des opérations :
• Après class body enfants.

Cas d'utilisation courants :
• Découverte plugins.

Cas limites :
• Import ordre : sous-classe pas encore définie → absente.

Considérations de performance :
• Scan rare ; coût modéré.

Exemples :
• Voir banque B,C puis A.__subclasses__.

Remarques :
• Réponse : liste des sous-classes directes — 1re option.`,

  2869: `set des __name__ des sous-classes directes de A — B et C

Débutant :
• {B,C} en noms : {"B","C"}.

Intermédiaire :
• A exclu ; petits-enfants exclus.

Expert :
• Utile pour registre par nom.

Concepts clés :
• Compréhension + __subclasses__.

Distinctions clés :
• Pas ensemble avec A.

Fonctionnement :
• Itération sur classes objets.

Exécution étape par étape :
• Deux noms collectés.

Ordre des opérations :
• Définition B,C puis expression.

Cas d'utilisation courants :
• Menu drivers.

Cas limites :
• Renommage dynamique rare.

Considérations de performance :
• N/A.

Exemples :
• dict comprehension registry.

Remarques :
• Réponse : {"B","C"} — 1re option.`,

  2870: `__init_subclass__ append cls.__name__ — Base.registry

Débutant :
• ["A","B"] : chaque sous-classe définie déclenche le hook.

Intermédiaire :
• Base lui-même ne passe pas par __init_subclass__ pour se créer.

Expert :
• super().__init_subclass__(**kwargs) pour chaîne métaclasses.

Concepts clés :
• Hook définition de classe enfant.

Distinctions clés :
• Pas ["Base",...].

Fonctionnement :
• Au moment de class A(Base): exécuté.

Exécution étape par étape :
• A puis B ajoutés en ordre de définition.

Ordre des opérations :
• Déclarations successives.

Cas d'utilisation courants :
• Registres automatiques.

Cas limites :
• kwargs classe mal passés : TypeError.

Considérations de performance :
• N/A.

Exemples :
• Plugin.plugins dict.

Remarques :
• Réponse : ["A","B"] — 1re option.`,

  2871: `Quand __init_subclass__ est-il appelé ?

Débutant :
• À la définition d'une sous-classe (exécution du class statement).

Intermédiaire :
• Pas à l'instanciation ; pas au GC.

Expert :
• Ordre avant fin du corps de la classe enfant.

Concepts clés :
• Méta-niveau vs __init__ instance.

Distinctions clés :
• Pas création instance.

Fonctionnement :
• Interpréteur appelle parent.__init_subclass__(cls=enfant).

Exécution étape par étape :
• print possible dès import module.

Ordre des opérations :
• Parser puis builder classe.

Cas d'utilisation courants :
• Remplacer métaclasse légère.

Cas limites :
• Plusieurs héritages : chaque parent peut avoir hook.

Considérations de performance :
• Une fois par classe.

Exemples :
• Voir timeline banque.

Remarques :
• Réponse : lors de la définition de sous-classe — 1re option.`,

  2872: `Base.method return type(self).__name__ — Child().method()

Débutant :
• "Child" : self est l'instance enfant à l'exécution.

Intermédiaire :
• Pas besoin de redéfinir method dans Child.

Expert :
• Évite chaînes codées en dur dans __repr__.

Concepts clés :
• Polymorphisme via type dynamique.

Distinctions clés :
• Pas "Base".

Fonctionnement :
• type(self) résolu à l'appel.

Exécution étape par étape :
• Liaison sur self réel.

Ordre des opérations :
• Child() puis method().

Cas d'utilisation courants :
• __repr__ générique.

Cas limites :
• super() dans __init__ multiple : self correct quand même.

Considérations de performance :
• N/A.

Exemples :
• A().method → "A".

Remarques :
• Réponse : "Child" — 1re option.`,

  2873: `self.__class__.__name__ sur Child — même résultat

Débutant :
• "Child" : équivalent type(self) pour classes normales Py3.

Intermédiaire :
• Style légèrement plus ancien mais idiomatique encore.

Expert :
• Cas edge métaclasse rares : suivre doc.

Concepts clés :
• Double accès à la classe runtime.

Distinctions clés :
• Même réponse que 2872.

Fonctionnement :
• __class__ sur instance pointe vers type concret.

Exécution étape par étape :
• Résolution Child.

Ordre des opérations :
• Même idée que l'ID 2872, variante d'écriture.

Cas d'utilisation courants :
• Logs incluant nom classe.

Cas limites :
• Proxy __class__ override : avancé.

Considérations de performance :
• N/A.

Exemples :
• Comparer avec type(self) is self.__class__.

Remarques :
• Réponse : "Child" — 1re option.`,

  2874: `B.x = 2 après A.x = 1 — valeur A.x

Débutant :
• 1 : assignation sur B crée attribut propre sur B, pas mutation de A.

Intermédiaire :
• Lecture B.x masque A.x mais A.x inchangé.

Expert :
• Si B avait seulement hérité sans assigner, B.x lirait 1 depuis A.

Concepts clés :
• Espaces de noms de classe séparés.

Distinctions clés :
• Pas 2 sur A.

Fonctionnement :
• B.__dict__ reçoit clé x.

Exécution étape par étape :
• A.__dict__['x'] reste 1.

Ordre des opérations :
• Définitions puis B.x=2.

Cas d'utilisation courants :
• Defaults par sous-classe.

Cas limites :
• Descripteur data sur classe : autre histoire.

Considérations de performance :
• N/A.

Exemples :
• "x" in B.__dict__ True après assign.

Remarques :
• Réponse : 1 — 1re option.`,

  2875: `A.lst = [] partagé — B.lst.append(1) puis A.lst

Débutant :
• [1] : B.lst résout vers la même liste que A.lst sans redéfinition.

Intermédiaire :
• Mutation in-place partagée ; pas copie.

Expert :
• B.lst = [] casserait le partage (question suivante).

Concepts clés :
• Piège mutable en attribut de classe.

Distinctions clés :
• Pas [] sur A après append via B.

Fonctionnement :
• id(A.lst) == id(B.lst).

Exécution étape par étape :
• append mute l'objet liste unique.

Ordre des opérations :
• append puis lecture A.lst.

Cas d'utilisation courants :
• Préférer default_factory style defaultdict ou __init__ instance.

Cas limites :
• Threads : mutations concurrentes liste.

Considérations de performance :
• Référence unique.

Exemples :
• Corriger avec lst = [] dans B.

Remarques :
• Réponse : [1] — 1re option.`,
};
