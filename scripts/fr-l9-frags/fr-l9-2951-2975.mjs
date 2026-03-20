/** Level 9 FR 2951–2975 — level9_expert_b.ts Q51–75 */
export default {
  2951: `"x" dans B.__dict__ — B(A), x sur A seulement

Débutant :
• False : x vit dans A.__dict__ ; B hérite par MRO sans copier la clé.

Intermédiaire :
• "x" in B.__dict__ teste uniquement l'espace de noms propre de B.

Expert :
• B.x fonctionne quand même par recherche sur les classes du MRO.

Concepts clés :
• Propriété de classe vs emplacement réel.

Distinctions clés :
• Diffère de B.x = 2 qui crée une entrée sur B.

Fonctionnement :
• pass dans B ne crée aucun attribut.

Exécution étape par étape :
• Test in sur mapping de classe B.

Ordre des opérations :
• Définition A puis B puis expression.

Cas d'utilisation courants :
• Introspection (qu'est-ce que cette classe définit elle-même ?).

Cas limites :
• Descripteur sur métaclasse : autre histoire.

Considérations de performance :
• N/A.

Exemples :
• "x" in A.__dict__ True.

Remarques :
• Réponse : False — 1re option.`,

  2952: `B redéfinit x = 2 — "x" dans B.__dict__

Débutant :
• True : l'assignation sur B stocke x dans B.__dict__.

Intermédiaire :
• Masque A.x pour les lectures via B tout en laissant A.x sur A.

Expert :
• id(B.__dict__['x']) est la valeur 2 pour entier.

Concepts clés :
• Ombre (shadowing) au niveau classe.

Distinctions clés :
• Opposé de 2951 sans override.

Fonctionnement :
• Corps de classe exécute x = 2 dans le namespace B.

Exécution étape par étape :
• Clé "x" présente dans B.__dict__.

Ordre des opérations :
• Définition A puis B avec x=2.

Cas d'utilisation courants :
• Defaults par sous-classe.

Cas limites :
• Ordre de résolution si descripteur data sur classe.

Considérations de performance :
• N/A.

Exemples :
• A.__dict__["x"] reste 1.

Remarques :
• Réponse : True — 1re option.`,

  2953: `Méthode f héritée — "f" dans B.__dict__

Débutant :
• False : f est dans A.__dict__ ; B n'a pas de binding propre.

Intermédiaire :
• B().f() résout via MRO jusqu'à A.

Expert :
• Seul un def f dans B mettrait "f" dans B.__dict__.

Concepts clés :
• Fonctions sont des attributs de classe comme les autres.

Distinctions clés :
• Pas d'erreur sur l'appel malgré False.

Fonctionnement :
• pass laisse B.__dict__ vide.

Exécution étape par étape :
• Test clé "f" sur dict de la classe.

Ordre des opérations :
• Définitions puis "f" in B.__dict__.

Cas d'utilisation courants :
• Audits de surcharge réelle.

Cas limites :
• Méthode sur métaclasse : rare.

Considérations de performance :
• N/A.

Exemples :
• "f" in A.__dict__ True.

Remarques :
• Réponse : False — 1re option.`,

  2954: `self.x dans __init__ de A — B() et b.__dict__

Débutant :
• True : self.x = 1 écrit sur l'instance, pas sur la classe.

Intermédiaire :
• B hérite __init__ ; même code s'exécute avec self = b.

Expert :
• Attribut d'instance indépendant de __slots__ ici.

Concepts clés :
• Instance dict vs class dict.

Distinctions clés :
• Pas "x" dans B.__dict__ (classe).

Fonctionnement :
• B() appelle A.__init__ hérité.

Exécution étape par étape :
• b.__dict__ == {"x": 1}.

Ordre des opérations :
• Instanciation puis test in.

Cas d'utilisation courants :
• Où vit l'état mutable.

Cas limites :
• __slots__ sans __dict__ : pas de dict libre.

Considérations de performance :
• dict par instance coûte mémoire.

Exemples :
• hasattr(b, "x") True.

Remarques :
• Réponse : True — 1re option.`,

  2955: `A.__subclasses__() avec B(A)

Débutant :
• Liste contenant la classe B (repr [<class 'B'>]).

Intermédiaire :
• Uniquement sous-classes directes ; pas les petits-enfants.

Expert :
• Faibles références : classes déchargées disparaissent.

Concepts clés :
• Registre runtime des enfants immédiats.

Distinctions clés :
• Pas [] ni [A,B].

Fonctionnement :
• Enregistrement à la fin du corps class B.

Exécution étape par étape :
• Appel méthode sur A.

Ordre des opérations :
• Après définition B.

Cas d'utilisation courants :
• Plugins, discovery.

Cas limites :
• Import order : classe pas encore définie absente.

Considérations de performance :
• Coût modéré si beaucoup d'enfants.

Exemples :
• Avec C(A) la liste a deux entrées.

Remarques :
• Réponse : [<class 'B'>] — 1re option.`,

  2956: `len(A.__subclasses__()) avec B et C directs

Débutant :
• 2 : B et C tous deux enfants directs de A.

Intermédiaire :
• D(B) ne compte pas dans len pour A.

Expert :
• set des noms possible pour vérifier.

Concepts clés :
• Comptage local dans le graphe d'héritage.

Distinctions clés :
• Pas 1 ni 3 pour ce schéma.

Fonctionnement :
• Deux enregistrements séparés sur A.

Exécution étape par étape :
• len sur liste retournée.

Ordre des opérations :
• Définir A,B,C puis len.

Cas d'utilisation courants :
• Métriques de variantes.

Cas limites :
• Même classe redéfinie : rare en pratique.

Considérations de performance :
• N/A.

Exemples :
• B.__subclasses__() pour D seul.

Remarques :
• Réponse : 2 — 1re option.`,

  2957: `__slots__ parent ("x") et enfant ("y") — (b.x, b.y)

Débutant :
• (1, 2) : B combine slots hérités et nouveaux.

Intermédiaire :
• Ne pas redéclarer "x" dans __slots__ de B ; seulement les nouveaux noms.

Expert :
• Mémoire compacte ; pas d'attributs arbitraires sans __dict__.

Concepts clés :
• Chaînage de slots sur hiérarchie.

Distinctions clés :
• Pas Error si usage correct.

Fonctionnement :
• Descripteurs internes pour chaque slot.

Exécution étape par étape :
• Assignations valident puis lecture tuple.

Ordre des opérations :
• Création B puis x,y.

Cas d'utilisation courants :
• Objets légers nombreux.

Cas limites :
• Oublier slot parent dans scénarios avancés : TypeError.

Considérations de performance :
• Moins de RAM qu'instance dict.

Exemples :
• b.z = 3 échouerait sans __dict__.

Remarques :
• Réponse : (1, 2) — 1re option.`,

  2958: `A avec slots, B sans __slots__ — b.x et b.z

Débutant :
• (1, 3) : B réintroduit __dict__ ; z part dans le dict, x reste slot hérité.

Intermédiaire :
• Pattern mixte slot + dict.

Expert :
• hasattr(b, "__dict__") True.

Concepts clés :
• Enfant sans __slots__ n'est pas entièrement « compact ».

Distinctions clés :
• Pas Error pour ce snippet.

Fonctionnement :
• Slot x depuis A ; z stocké dans mapping instance.

Exécution étape par étape :
• Deux chemins de stockage coexistent.

Ordre des opérations :
• B() puis assignations.

Cas d'utilisation courants :
• Extension progressive de types slottés.

Cas limites :
• Ordre __slots__ = () explicite sur enfant : autre comportement.

Considérations de performance :
• Dict réintroduit surcoût partiel.

Exemples :
• Vérifier "z" in b.__dict__.

Remarques :
• Réponse : (1, 3) — 1re option.`,

  2959: `_x dans A.__init__ — B().get_x()

Débutant :
• 1 : un seul underscore = convention, pas enforcement.

Intermédiaire :
• Sous-classe lit self._x normal.

Expert :
• from m import * masque souvent les _ du module.

Concepts clés :
• « Privé » social, pas légal.

Distinctions clés :
• Pas Error.

Fonctionnement :
• Même attribut instance accessible.

Exécution étape par étape :
• get_x retourne valeur stockée.

Ordre des opérations :
• Construction puis appel.

Cas d'utilisation courants :
• API interne documentée.

Cas limites :
• Accès depuis dehors toujours possible.

Considérations de performance :
• N/A.

Exemples :
• Contraster avec __x manglé.

Remarques :
• Réponse : 1 — 1re option.`,

  2960: `__x dans A, get_x dans B utilise self.__x

Débutant :
• AttributeError : mangling utilise le nom de la classe courante du code.

Intermédiaire :
• A stocke _A__x ; B.get_x cherche _B__x.

Expert :
• Accès parent explicite : self._A__x.

Concepts clés :
• Anti-collision sous-classes, pas secret cryptographique.

Distinctions clés :
• Pas 1.

Fonctionnement :
• Compilation réécrit les identifiants __nom.

Exécution étape par étape :
• Lecture attribut manquant sur b.

Ordre des opérations :
• B() puis get_x().

Cas d'utilisation courants :
• Éviter écrasement accidentel en hiérarchie.

Cas limites :
• Nommage __ avec deux underscores finaux : dunder, pas mangling.

Considérations de performance :
• N/A.

Exemples :
• Voir ID 2961.

Remarques :
• Réponse : AttributeError — 1re option.`,

  2961: `return self._A__x dans B.get_x

Débutant :
• 1 : nom manglé explicite correspond au stockage de A.__init__.

Intermédiaire :
• Contourne la règle de mangling local à B.

Expert :
• Fragile si renommage de classe A.

Concepts clés :
• Transparence du vrai nom interne.

Distinctions clés :
• Pas AttributeError ici.

Fonctionnement :
• Lecture attribut existant sur instance.

Exécution étape par étape :
• Retour entier 1.

Ordre des opérations :
• Même hiérarchie que 2960 avec accès corrigé.

Cas d'utilisation courants :
• Tests, hacks contrôlés.

Cas limites :
• Préférer API protégée ou property.

Considérations de performance :
• N/A.

Exemples :
• getattr(self, "_A__x") équivalent.

Remarques :
• Réponse : 1 — 1re option.`,

  2962: `Forme du name mangling __attr

Débutant :
• _ClassName__attr avec ClassName = classe définissant l'identifiant.

Intermédiaire :
• S'applique aux noms avec au moins deux _ de tête et au plus un _ de queue.

Expert :
• Compilation, pas runtime magic ad hoc.

Concepts clés :
• Préfixe classe pour dédoublonner.

Distinctions clés :
• Pas __ClassName_attr ni autres formes.

Fonctionnement :
• Bytecode réécrit les accès.

Exécution étape par étape :
• Stockage sous clé manglée dans __dict__ ou slots.

Ordre des opérations :
• Assignation self.__bar dans corps de classe.

Cas d'utilisation courants :
• Attributs « privés » légers.

Cas limites :
• Sous-classes avec même __nom : noms manglés différents.

Considérations de performance :
• N/A.

Exemples :
• _MyClass__secret.

Remarques :
• Réponse : _ClassName__attr — 1re option.`,

  2963: `Signification de _attr seul underscore

Débutant :
• Interne par convention ; toujours accessible.

Intermédiaire :
• PEP 8 ; linters peuvent avertir.

Expert :
• import * omet _ du module.

Concepts clés :
• Signal aux développeurs.

Distinctions clés :
• Pas vrai private ni mangling.

Fonctionnement :
• Aucune transformation de nom.

Exécution étape par étape :
• Lecture attribut directe.

Ordre des opérations :
• Création instance avec _secret.

Cas d'utilisation courants :
• Détails d'implémentation.

Cas limites :
• API publique ne doit pas casser _ clients externes.

Considérations de performance :
• N/A.

Exemples :
• c._secret fonctionne.

Remarques :
• Réponse : privé par convention — 1re option.`,

  2964: `Préfixe __attr (deux underscores) sans dunder

Débutant :
• Déclenche le name mangling.

Intermédiaire :
• Pas confidentialité absolue.

Expert :
• Subclasses voient un nom différent pour « le même » identifiant source.

Concepts clés :
• Prévention collisions.

Distinctions clés :
• Pas syntax error ni suppression d'attribut auto.

Fonctionnement :
• Rewrite vers _Cls__attr.

Exécution étape par étape :
• Accès direct __ depuis dehors échoue souvent.

Ordre des opérations :
• Définition classe puis instanciation.

Cas d'utilisation courants :
• Champs internes sensibles aux collisions.

Cas limites :
• __init__ est dunder : exempt.

Considérations de performance :
• N/A.

Exemples :
• p._Parent__val.

Remarques :
• Réponse : name mangling — 1re option.`,

  2965: `__init__ sujet au mangling ?

Débutant :
• Non : les dunders deux côtés sont réservés ; pas manglés.

Intermédiaire :
• Seuls __spam sans __spam__ à la fin manglent (règle PEP).

Expert :
• Permet protocole spécial cohérent.

Concepts clés :
• Méthodes magiques stables.

Distinctions clés :
• __bar seul dans classe : manglé ; __repr__ : non.

Fonctionnement :
• Parseur distingue motifs.

Exécution étape par étape :
• Appels spéciaux utilisent noms connus.

Ordre des opérations :
• Définition Foo avec __init__ et __bar.

Cas d'utilisation courants :
• Implémenter protocoles Python.

Cas limites :
• Très rares conflits si noms bizarres.

Considérations de performance :
• N/A.

Exemples :
• type(obj).__init__.

Remarques :
• Réponse : non, jamais manglés — 1re option.`,

  2966: `Compteur class_id dans __init__ — (a1.id, a2.id)

Débutant :
• (1, 2) : attribut de classe partagé incrémenté à chaque instance.

Intermédiaire :
• A.class_id += 1 avant self.id = A.class_id.

Expert :
• Threads : besoin locks si compteur global critique.

Concepts clés :
• État partagé vs état instance.

Distinctions clés :
• Pas (0,1) ni (1,1).

Fonctionnement :
• Premier objet voit 1, second 2.

Exécution étape par étape :
• Deux appels __init__ séquentiels.

Ordre des opérations :
• a1 puis a2.

Cas d'utilisation courants :
• IDs séquentiels simples.

Cas limites :
• Sous-classe partage souvent le même class_id si non redéfini.

Considérations de performance :
• Incrément entier rapide.

Exemples :
• a3.id == 3.

Remarques :
• Réponse : (1, 2) — 1re option.`,

  2967: `__init_subclass__ pose cls.parent_name — B(A)

Débutant :
• "A" : hook reçoit la sous-classe B comme cls.

Intermédiaire :
• super().__init_subclass__ pour chaîner.

Expert :
• Exécuté à la définition de classe, pas à l'instanciation.

Concepts clés :
• Meta-légère sans métaclasse custom.

Distinctions clés :
• Pas "B" ni erreur.

Fonctionnement :
• cls.parent_name = "A" sur B.

Exécution étape par étape :
• Fin du corps class B déclenche hook.

Ordre des opérations :
• class B(A): pass puis lecture B.parent_name.

Cas d'utilisation courants :
• Registres, métadonnées.

Cas limites :
• kwargs classe invalides : TypeError.

Considérations de performance :
• Une fois par sous-classe.

Exemples :
• Plugin.register dans hook.

Remarques :
• Réponse : "A" — 1re option.`,

  2968: `Positive(int) __new__ — Positive(5) + 3

Débutant :
• 8 : sous-type int ; + délégué au comportement int, résultat int (affiche 8).

Intermédiaire :
• __new__ valide puis super().__new__(cls, val).

Expert :
• type(Positive(5)+3) souvent int pur selon opérandes.

Concepts clés :
• Immuables : construction en __new__.

Distinctions clés :
• Pas Error pour 5+3.

Fonctionnement :
• 5 + 3 arithmétique standard.

Exécution étape par étape :
• Création Positive(5) OK puis addition.

Ordre des opérations :
• Appel constructeur puis +.

Cas d'utilisation courants :
• Types domaine contraints.

Cas limites :
• Surcharger __add__ pour garder Positive.

Considérations de performance :
• N/A.

Exemples :
• Positive(0)*2 → 0.

Remarques :
• Réponse : 8 — 1re option.`,

  2969: `Positive(-1)

Débutant :
• ValueError : garde dans __new__ avant création.

Intermédiaire :
• Aucun objet Positive n'existe après échec.

Expert :
• Message personnalisable.

Concepts clés :
• Validation à la naissance.

Distinctions clés :
• Pas -1 ni None silencieux.

Fonctionnement :
• if val < 0: raise.

Exécution étape par étape :
• Exception propage.

Ordre des opérations :
• Appel Positive(-1).

Cas d'utilisation courants :
• Invariants forts sur valeurs.

Cas limites :
• None ou non-numérique : autres erreurs.

Considérations de performance :
• N/A.

Exemples :
• try/except ValueError.

Remarques :
• Réponse : ValueError — 1re option.`,

  2970: `Percentage(float) __repr__ f"{self:.1%}" — repr(Percentage(0.75))

Débutant :
• "75.0%" : spécificateur % multiplie par 100 et ajoute le signe.

Intermédiaire :
• .1 = une décimale.

Expert :
• self est le float 0.75.

Concepts clés :
• Représentation domaine lisible.

Distinctions clés :
• Pas "0.75" brut ni erreur.

Fonctionnement :
• __repr__ sur sous-classe float.

Exécution étape par étape :
• Format applique locale/arrondi d'affichage.

Ordre des opérations :
• Percentage(0.75) puis repr.

Cas d'utilisation courants :
• Stats, UI texte.

Cas limites :
• NaN/inf : représentations spéciales.

Considérations de performance :
• N/A.

Exemples :
• Percentage(0.5) → "50.0%".

Remarques :
• Réponse : "75.0%" — 1re option.`,

  2971: `Template Method — que définit la classe de base ?

Débutant :
• Squelette d'algorithme avec étapes surchargeables.

Intermédiaire :
• Héritage + override ciblé.

Expert :
• Diffère Strategy (composition).

Concepts clés :
• Ordre fixe, détails variables.

Distinctions clés :
• Pas singleton ni liste d'attributs obligatoires seule.

Fonctionnement :
• Méthode template appelle hooks.

Exécution étape par étape :
• dispatch dynamique sur self.

Ordre des opérations :
• generate() typique.

Cas d'utilisation courants :
• Rapports, pipelines.

Cas limites :
• Trop de hooks = hiérarchie lourde.

Considérations de performance :
• N/A.

Exemples :
• Report.generate banque.

Remarques :
• Réponse : squelette d'algorithme — 1re option.`,

  2972: `Quelle méthode est le template method ?

Débutant :
• generate() orchestre header/body/footer.

Intermédiaire :
• Les autres sont les étapes.

Expert :
• Souvent non overridée elle-même.

Concepts clés :
• Séparation orchestration / travail.

Distinctions clés :
• Pas header seul.

Fonctionnement :
• Chaîne de concaténation dans generate.

Exécution étape par étape :
• Appels résolus sur sous-classe pour body.

Ordre des opérations :
• Lecture classe Report.

Cas d'utilisation courants :
• Frameworks avec hooks.

Cas limites :
• Oublier override : comportement par défaut.

Considérations de performance :
• N/A.

Exemples :
• Voir banque generate.

Remarques :
• Réponse : generate() — 1re option.`,

  2973: `Strategy pattern — technique principale

Débutant :
• Composition : le contexte a une stratégie injectée.

Intermédiaire :
• Évite hiérarchies profondes d'algorithmes.

Expert :
• Swappable à l'exécution.

Concepts clés :
• has-a behavior.

Distinctions clés :
• Pas deep inheritance comme outil principal.

Fonctionnement :
• self.strategy(data).

Exécution étape par étape :
• Délégation simple.

Ordre des opérations :
• __init__(strategy) puis sort.

Cas d'utilisation courants :
• Tri, paiements, validation.

Cas limites :
• Stratégie None : erreur à l'appel.

Considérations de performance :
• Indirection négligeable souvent.

Exemples :
• Sorter(sorted).

Remarques :
• Réponse : composition — 1re option.`,

  2974: `Sorter(sorted).sort([3,1,2])

Débutant :
• [1, 2, 3] : stratégie = built-in sorted.

Intermédiaire :
• Même pattern avec lambda reverse pour [3,2,1].

Expert :
• strategy callable quelconque compatible.

Concepts clés :
• Délégation runtime.

Distinctions clés :
• Pas liste inchangée.

Fonctionnement :
• self.strategy(data) renvoie nouvelle liste triée.

Exécution étape par étape :
• sorted crée liste ordonnée.

Ordre des opérations :
• Instanciation puis sort.

Cas d'utilisation courants :
• Tests avec faux tri.

Cas limites :
• Stratégie qui mute data : surprise.

Considérations de performance :
• sorted O(n log n).

Exemples :
• stratégie custom stable.

Remarques :
• Réponse : [1, 2, 3] — 1re option.`,

  2975: `Factory Method pattern fournit quoi ?

Débutant :
• Une méthode qui crée et retourne des objets (souvent cls(...)).

Intermédiaire :
• Sous-classes changent le type instancié via cls.

Expert :
• Souvent @classmethod create.

Concepts clés :
• Découplage construction / usage.

Distinctions clés :
• Pas cache thread lock par défaut.

Fonctionnement :
• return cls(sound) typique.

Exécution étape par étape :
• Dog.create délègue à constructeur Dog.

Ordre des opérations :
• Appel de classe puis __init__.

Cas d'utilisation courants :
• Parseurs, connexions.

Cas limites :
• __init__ signature incompatible : erreur.

Considérations de performance :
• N/A.

Exemples :
• Animal.create banque.

Remarques :
• Réponse : méthode de création d'objets — 1re option.`,
};
