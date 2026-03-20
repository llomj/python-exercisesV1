/** Level 9 FR 2801–2825 — level9_intermediate_a.ts Q1–25 (MRO, C3, diamond, super chaînes) */
export default {
  2801: `print(A.__mro__) avec class A: pass

Débutant :
• Tuple (A, object) : toute classe hérite implicitement de object.

Intermédiaire :
• __mro__ est le même ordre que la résolution d'attributs ; mro() renvoie une liste équivalente.

Expert :
• C3 linéarise même les hiérarchies simples ; ici pas de conflit.

Concepts clés :
• Ordre de recherche des méthodes/attributs sur la classe.

Distinctions clés :
• __mro__ sur la classe, pas sur l'instance ; type(obj).__mro__ pour l'instance.

Fonctionnement :
• Création de A enregistre object comme base implicite.

Exécution étape par étape :
• Accès A.__mro__ retourne le tuple figé à la définition.

Ordre des opérations :
• Après exécution du corps de class.

Cas d'utilisation courants :
• Debug MRO, frameworks introspectifs.

Cas limites :
• Métaclasses et bases dynamiques : MRO recalculé à la création de classe.

Considérations de performance :
• Tuple en cache sur le type.

Exemples :
• len(A.__mro__) vaut 2 ici.

Remarques :
• Réponse : (A, object) — 1re option (forme affichée avec <class '...'> en Python).`,

  2802: `print(B.__mro__) avec B(A)

Débutant :
• Chaîne B → A → object.

Intermédiaire :
• La classe courante est toujours en tête de son propre __mro__.

Expert :
• Même logique que pour toute chaîne d'héritage simple.

Concepts clés :
• Linéarisation des ancêtres pour une seule branche.

Distinctions clés :
• Ne pas inverser A et B : B est la plus dérivée pour B.__mro__.

Fonctionnement :
• Fusion C3 dégénère en concaténation ordonnée ici.

Exécution étape par étape :
• B.__mro__[0] est B.

Ordre des opérations :
• Héritage déclaré dans B(A).

Cas d'utilisation courants :
• Prévoir quel parent.f sera invoqué avant object.

Cas limites :
• Diamond : voir questions suivantes.

Considérations de performance :
• N/A.

Exemples :
• B.mro() liste la même séquence que le tuple.

Remarques :
• Réponse : (B, A, object) — 1re option.`,

  2803: `print(C.__mro__) avec C(B), B(A)

Débutant :
• C, B, A, object en file indienne.

Intermédiaire :
• Chaque classe n'apparaît qu'une fois ; object toujours en queue.

Expert :
• Prépare la lecture des diamants où C3 évite les doublons d'ancêtre commun.

Concepts clés :
• MRO = ordre de la dérivation la plus spécifique → racine.

Distinctions clés :
• Ce n'est pas un parcours largeur d'abord.

Fonctionnement :
• C3 merge les MRO des bases avec la liste des parents.

Exécution étape par étape :
• C puis linéarisation de B puis A.

Ordre des opérations :
• Définitions de A, B, C puis inspection.

Cas d'utilisation courants :
• Hiérarchies profondes de modèles ou d'exceptions.

Cas limites :
• Ordre des bases multiple change tout (Q4–5).

Considérations de performance :
• N/A.

Exemples :
• Vérifier C.__mro__.index(A) > index(B).

Remarques :
• Réponse : (C, B, A, object) — 1re option.`,

  2804: `print(C.__mro__) avec C(A, B), A et B sans lien

Débutant :
• C, A, B, object : l'ordre des bases dans la définition compte.

Intermédiaire :
• Précédence locale : premier parent listé visité avant le second.

Expert :
• C3 préserve l'ordre local des bases quand c'est cohérent.

Concepts clés :
• Héritage multiple non lié = priorité gauche-droite dans la liste.

Distinctions clés :
• Diffère de C(B, A) (question suivante).

Fonctionnement :
• A et B sont tous deux sous object ; fusion simple.

Exécution étape par étape :
• Résolution C.x cherchera A avant B si les deux définissent x.

Ordre des opérations :
• class C(A, B) fixe la priorité.

Cas d'utilisation courants :
• Mixins + classe principale (voir aussi Q40).

Cas limites :
• Si A et B partagent un ancêtre non trivial, C3 peut réordonner au-delà de la liste naive.

Considérations de performance :
• N/A.

Exemples :
• Comparer avec C(B, A) pour C.x.

Remarques :
• Réponse : (C, A, B, object) — 1re option.`,

  2805: `print(C.__mro__) avec C(B, A)

Débutant :
• B avant A dans le tuple après C.

Intermédiaire :
• Inverser (A, B) en (B, A) inverse la priorité de recherche.

Expert :
• Décision de design : quel mixin ou parent domine en cas de conflit de noms.

Concepts clés :
• Même mécanisme C3, autre ordre local.

Distinctions clés :
• Symétrie avec 2804 en échangeant A et B.

Fonctionnement :
• C.__mro__ commence par C puis B.

Exécution étape par étape :
• Attribut homonyme : version de B gagne sur A.

Ordre des opérations :
• Définition class C(B, A).

Cas d'utilisation courants :
• Contrôler quel default méthode est hérité.

Cas limites :
• Branches qui se rejoignent : C3 peut imposer des contraintes supplémentaires.

Considérations de performance :
• N/A.

Exemples :
• Deux classes avec x différent : C.x suit B.

Remarques :
• Réponse : (C, B, A, object) — 1re option.`,

  2806: `Algorithme du MRO en Python

Débutant :
• C3 linearization : réponse attendue du quiz.

Intermédiaire :
• Préserve ordre local et monotonie ; sinon TypeError à la définition.

Expert :
• Ni DFS naïf ni simple tri topologique générique : règles C3 spécifiques.

Concepts clés :
• Nom officiel dans la doc data model.

Distinctions clés :
• Pas « parcours en largeur » générique pour le MRO.

Fonctionnement :
• Implémenté dans l'algorithme de construction de type.

Exécution étape par étape :
• Échec → exception à class body, pas à l'usage.

Cas d'utilisation courants :
• Comprendre erreurs MRO en héritage multiple.

Cas limites :
• Hiérarchies impossibles : message explicite CPython.

Considérations de performance :
• MRO calculé une fois par classe.

Exemples :
• Diamond D(B,C) avec B(A), C(A).

Remarques :
• Réponse : C3 linearization — 1re option.`,

  2807: `Diamond D(B,C), B(A), C(A) — print(D.__mro__)

Débutant :
• D, B, C, A, object : A une seule fois après B et C.

Intermédiaire :
• Ordre des bases de D : B avant C → B avant C dans le MRO avant A.

Expert :
• Cœur pédagogique du « diamant » : ancêtre commun unique en queue.

Concepts clés :
• Fusion des deux branches sous une racine partagée.

Distinctions clés :
• Pas (D, B, A, C, object) : A ne peut pas précéder C.

Fonctionnement :
• C3 merge MRO(B), MRO(C), [B, C].

Exécution étape par étape :
• D().method suit ce chemin pour la résolution.

Ordre des opérations :
• Définition des quatre classes.

Cas d'utilisation courants :
• super() coopératif dans __init__ (Q16).

Cas limites :
• Inverser B et C dans D(B,C) change l'ordre B/C mais garde A final.

Considérations de performance :
• N/A.

Exemples :
• Tracer D.__mro__ sur papier.

Remarques :
• Réponse : (D, B, C, A, object) — 1re option.`,

  2808: `D().f() avec diamond, B sans f, C définit f, A définit f

Débutant :
• Chaîne "C" : on trouve f dans C avant A.

Intermédiaire :
• B listé avant C mais ne masque pas C si B n'a pas f.

Expert :
• Illustre que « première base » ne signifie pas « ignore l'autre branche » pour une méthode absente.

Concepts clés :
• Recherche le long du MRO complet.

Distinctions clés :
• Contraste avec Q12 où B et C ont tous deux f : alors B gagne.

Fonctionnement :
• D → B (pas f) → C (f) → stop.

Exécution étape par étape :
• Liaison au moment de l'appel sur l'instance D.

Ordre des opérations :
• Création instance puis f().

Cas d'utilisation courants :
• Mixins optionnels qui n'écrasent que si définis.

Cas limites :
•staticmethod/classmethod : même MRO, autre binding.

Considérations de performance :
• N/A.

Exemples :
• Comparer avec Q12 pour ancrage mental.

Remarques :
• Réponse : C (chaîne) — 1re option.`,

  2809: `Le calcul du MRO peut-il échouer ?

Débutant :
• Oui : TypeError si ordre incohérent (C3 impossible).

Intermédiaire :
• À la création de la classe, pas au premier accès attribut.

Expert :
• Message du type « Cannot create a consistent method resolution order ».

Concepts clés :
• Graphe de bases contradictoire.

Distinctions clés :
• Pas ValueError/RuntimeError comme réponse canon du quiz.

Fonctionnement :
• Échec du merge C3.

Exécution étape par étape :
• class statement lève avant d'assigner la classe.

Ordre des opérations :
• Analyse des __bases__.

Cas d'utilisation courants :
• Refactoring multiple inheritance raté.

Cas limites :
• Exemple classique C(A,B) avec B(A) (Q10).

Considérations de performance :
• N/A.

Exemples :
• Corriger en C(B,A) quand B sous-classe A.

Remarques :
• Réponse : Oui, TypeError — 1re option.`,

  2810: `class C(A, B) avec B(A) — définition de C

Débutant :
• TypeError MRO incohérent : la classe C n'est pas créée.

Intermédiaire :
• Liste de bases [A, B] exige A avant B alors que B force déjà B avant A.

Expert :
• Montre pourquoi super() et l'ordre des bases ne sont pas décoratifs.

Concepts clés :
• Contraintes cumulées incompatibles.

Distinctions clés :
• Pas « C créée avec un MRO bizarre » : échec net.

Fonctionnement :
• C3 détecte la contradiction à la compilation de la classe.

Exécution étape par étape :
• Exception avant assignation du nom C.

Ordre des opérations :
• Troisième class exécutée.

Cas d'utilisation courants :
• Anti-pattern copié-collé de bases.

Cas limites :
• C(B, A) fonctionne (Q11 fix).

Considérations de performance :
• N/A.

Exemples :
• Relire l'explication « A avant B vs MRO de B ».

Remarques :
• Réponse : TypeError MRO incohérent — 1re option.`,

  2811: `Pourquoi C(A, B) échoue si B(A) ?

Débutant :
• Les bases demandent A avant B alors que B impose B avant A dans sa linéarisation.

Intermédiaire :
• Deux sources de vérité sur l'ordre relatif A/B.

Expert :
• C3 exige monotonie + préservation locale : ici impossible.

Concepts clés :
• Lecture des contraintes comme un système d'équations.

Distinctions clés :
• Ce n'est pas une interdiction d'avoir deux parents.

Fonctionnement :
• Merge échoue faute de tête valide.

Exécution étape par étape :
• N/A classe créée.

Cas d'utilisation courants :
• Pédagogie obligatoire avant héritage multiple réel.

Cas limites :
• Renommer ou réordonner bases résout souvent le problème.

Considérations de performance :
• N/A.

Exemples :
• C(B, A) pour débloquer.

Remarques :
• Réponse : contradiction A avant B vs MRO de B — 1re option.`,

  2812: `D().f() diamond avec B et C surchargeant toutes deux f

Débutant :
• "B" : B précède C dans le MRO de D.

Intermédiaire :
• Dès qu'une classe définit f, la recherche s'arrête.

Expert :
• Compare à Q8 : même diamond, autre présence de méthodes.

Concepts clés :
• Shadowing par position MRO, pas par « profondeur » seule.

Distinctions clés :
• C.f jamais appelé via lookup normal sur D.

Fonctionnement :
• D → B → f trouvée.

Exécution étape par étape :
• Binding à B.f.

Ordre des opérations :
• D(B,C) fixe B avant C.

Cas d'utilisation courants :
• Choix explicite de branche prioritaire.

Cas limites :
• Appel explicite C.f(instance) contourne le MRO.

Considérations de performance :
• N/A.

Exemples :
• Afficher D.__mro__ à côté du résultat.

Remarques :
• Réponse : B — 1re option.`,

  2813: `super() suit quoi pour résoudre les méthodes ?

Débutant :
• Le MRO du type réel de l'instance (classe qui commence la recherche).

Intermédiaire :
• Pas « le parent direct textuel » : crucial en diamant.

Expert :
• Proxy super : suivant = entrée après la classe courante dans ce MRO.

Concepts clés :
• Coopération multi-héritage.

Distinctions clés :
• Diffère de Parent.method(self) figé.

Fonctionnement :
• __class__ + instance passés implicitement (Python 3).

Exécution étape par étape :
• Chaque super().m() avance d'un cran dans la chaîne.

Ordre des opérations :
• Appel de méthode sur self.

Cas d'utilisation courants :
• Chaînes __init__ et hooks template method.

Cas limites :
• staticmethod sans self/cls : super() sans forme explicite échoue (Q31).

Considérations de performance :
• Léger proxy.

Exemples :
• Q14 ACB mémorisable.

Remarques :
• Réponse : le MRO de la classe appelante / instance — 1re option.`,

  2814: `print(D().f()) coopératif diamond — chaîne ACB

Débutant :
• Résultat ACB : super dans B appelle C, pas A directement.

Intermédiaire :
• Ordre d'exécution : B.f → C.f → A.f puis remontée des concaténations.

Expert :
• Preuve que super n'est pas « syntaxe parent direct ».

Concepts clés :
• File MRO D,B,C,A pour type(self).

Distinctions clés :
• Pas ABC ni CAB pour ce code exact.

Fonctionnement :
• Chaque f ajoute son suffixe après le retour de super().

Exécution étape par étape :
• A retourne "A" ; C retourne "A"+"C" ; B retourne "AC"+"B".

Ordre des opérations :
• Appel D().f().

Cas d'utilisation courants :
• Logging empilé, construction de pipelines.

Cas limites :
• Oublier un super casse la chaîne ou duplique A.

Considérations de performance :
• N/A.

Exemples :
• Réécrire avec print pour voir l'ordre d'entrée.

Remarques :
• Réponse : ACB — 1re option.`,

  2815: `B().a après super().__init__ dans B

Débutant :
• "A" : A.__init__ a posé self.a avant self.b.

Intermédiaire :
• Un seul self partagé ; ordre d'appel super contrôle l'initialisation.

Expert :
• Pattern de base avant d'aborder le diamant complet (Q16).

Concepts clés :
• Chaînage constructeurs.

Distinctions clés :
• Sans super, a pourrait manquer si B remplace totalement __init__.

Fonctionnement :
• B.__init__ appelle A.__init__ puis complète.

Exécution étape par étape :
• Attribut a présent sur l'instance.

Ordre des opérations :
• B() déclenche B.__init__.

Cas d'utilisation courants :
• Modèles ORM, widgets.

Cas limites :
• Signatures incompatibles entre __init__ : besoin *args/**kwargs coopératifs.

Considérations de performance :
• N/A.

Exemples :
• print(B().b) aussi "B".

Remarques :
• Réponse : A — 1re option.`,

  2816: `Diamond : super().__init__ partout garantit quoi ?

Débutant :
• Chaque __init__ de la chaîne MRO s'exécute une seule fois.

Intermédiaire :
• Évite double appel à l'ancêtre commun si on appelait A.__init__ à la main deux fois.

Expert :
• Nécessite que tout le graphe coopère (super jusqu'à object).

Concepts clés :
• Initialisation coopérative.

Distinctions clés :
• Pas « seulement le premier parent » ni double ancêtre.

Fonctionnement :
• super saute à la prochaine classe du MRO unifié de l'instance.

Exécution étape par étape :
• Séquence D,B,C,A,object vue en prints (exemple du cours).

Ordre des opérations :
• Construction depuis la feuille.

Cas d'utilisation courants :
• Tkinter-like, plugins multiples.

Cas limites :
• Un maillon qui n'appelle pas super brise la coopération.

Considérations de performance :
• N/A.

Exemples :
• D() avec prints dans chaque __init__.

Remarques :
• Réponse : chaque __init__ exactement une fois — 1re option.`,

  2817: `print(D.x) avec x sur B et A, C hérite de A sans x propre

Débutant :
• 2 : B définit x avant qu'on n'atteigne A dans le MRO.

Intermédiaire :
• D → B trouve x ; on ne lit pas A.x=1.

Expert :
• Montre interaction entre branches du diamond.

Concepts clés :
• Attribut de classe résolu comme méthode via MRO.

Distinctions clés :
• C.x pourrait différer si C redéfinissait x.

Fonctionnement :
• Tuple (D,B,C,A,object) pour la recherche.

Exécution étape par étape :
• Stop à B.x.

Ordre des opérations :
• Accès D.x sur la classe.

Cas d'utilisation courants :
• Defaults hiérarchiques.

Cas limites :
• Instance.__dict__ masque attribut de classe homonyme.

Considérations de performance :
• N/A.

Exemples :
• Comparer D.x vs C.x du même schéma.

Remarques :
• Réponse : 2 — 1re option.`,

  2818: `print(D.x) avec B sans x, C.x=3, A.x=1

Débutant :
• 3 : après B vide on tombe sur C avant A.

Intermédiaire :
• MRO n'est pas « toujours profondeur stricte sans regarder frères ».

Expert :
• B.x hérité de A ne court-circuite pas C qui est avant A.

Concepts clés :
• Frère C entre B et A dans la linéarisation.

Distinctions clés :
• Diffère d'un arbre où B serait seule feuille.

Fonctionnement :
• D,B sans x ; C a x.

Exécution étape par étape :
• Retour 3.

Ordre des opérations :
• D(B,C).

Cas d'utilisation courants :
• Réglages par défaut sur mixin après branche vide.

Cas limites :
• Si C n'avait pas x, alors 1 via A.

Considérations de performance :
• N/A.

Exemples :
• Dessiner le losange A en haut, B et C milieu, D bas.

Remarques :
• Réponse : 3 — 1re option.`,

  2819: `list.__mro__

Débutant :
• (list, object) : pas de parent Python intermédiaire visible.

Intermédiaire :
• Types built-in suivent les mêmes règles MRO.

Expert :
• Implémentation C sous le capot, mais MRO exposé cohérent.

Concepts clés :
• Vérification rapide isinstance/ sous-classe.

Distinctions clés :
• Pas (list, tuple, object).

Fonctionnement :
• list sous-classe directe de object en modèle utilisateur.

Exécution étape par étape :
• len 2.

Ordre des opérations :
• Import builtins implicite.

Cas d'utilisation courants :
• Sous-classer list (Q50).

Cas limites :
• Autres implémentations Python : même principe, détails internes.

Considérations de performance :
• N/A.

Exemples :
• dict.__mro__ analogue.

Remarques :
• Réponse : (list, object) — 1re option.`,

  2820: `bool.__mro__

Débutant :
• (bool, int, object) : bool est une sous-classe de int.

Intermédiaire :
• True/False sont des int en arithmétique (1/0) mais type distinct.

Expert :
• issubclass(bool, int) True ; piège pédagogique volontaire.

Concepts clés :
• Hiérarchie des types scalaires.

Distinctions clés :
• Pas (bool, object) seul.

Fonctionnement :
• int entre bool et object.

Exécution étape par étape :
• isinstance(True, int) True.

Ordre des opérations :
• Accès attribut sur bool.

Cas d'utilisation courants :
• Éviter bool dans annotations numériques sans cast.

Cas limites :
• Égalité 1 == True mais pas identité.

Considérations de performance :
• N/A.

Exemples :
• True + True == 2.

Remarques :
• Réponse : (bool, int, object) — 1re option.`,

  2821: `Que renvoie super() ?

Débutant :
• Un proxy qui délègue au prochain maillon du MRO.

Intermédiaire :
• Ni la classe parente ni une nouvelle instance.

Expert :
• super(type, obj) ou zéro-arg forme liée à frame méthode.

Concepts clés :
• Objet auxiliaire pour lookup coopératif.

Distinctions clés :
• Pas une copie de self.

Fonctionnement :
• __getattribute__ du proxy redirige.

Exécution étape par étape :
• super().m() résout m sur le suivant.

Ordre des opérations :
• Dans corps de méthode instance.

Cas d'utilisation courants :
• Extension de comportements parent.

Cas limites :
• Deux-arg forme pour sauter un niveau explicitement.

Considérations de performance :
• Très léger.

Exemples :
• repr(super()) dans méthode.

Remarques :
• Réponse : proxy vers la classe suivante dans le MRO — 1re option.`,

  2822: `super(ClassName, self) vs super() en Python 3

Débutant :
• Même rôle : super() est le sucre pour la forme explicite avec la classe courante et self.

Intermédiaire :
• Le compilateur injecte __class__ et self pour le zéro-arg.

Expert :
• Forme explicite utile pour tests ou contournements rares.

Concepts clés :
• Équivalence sémantique standard.

Distinctions clés :
• Pas « appelle le grand-parent » par défaut.

Fonctionnement :
• Premier argument = point de départ après lequel chercher.

Exécution étape par étape :
• Même chaîne d'appels si paramètres cohérents.

Ordre des opérations :
• Appel méthode.

Cas d'utilisation courants :
• Migration Python 2 → 3.

Cas limites :
• Mauvais ClassName → saut incorrect dans MRO.

Considérations de performance :
• Identique.

Exemples :
• super(B, self).f() dans B.

Remarques :
• Réponse : équivalent / même chose — 1re option.`,

  2823: `B().f() avec B.f return super().f()+1, A.f return 1

Débutant :
• 2 : super().f() vaut 1 puis +1.

Intermédiaire :
• Chaîne simple A → B sans multiple ici.

Expert :
• Base pour empiler plusieurs +1 (Q24).

Concepts clés :
• Délégation puis transformation.

Distinctions clés :
• Pas d'erreur si A définit bien f.

Fonctionnement :
• MRO (B,A,object).

Exécution étape par étape :
• A.f → 1 ; B.f → 2.

Ordre des opérations :
• B().

Cas d'utilisation courants :
• Compteurs, enveloppes.

Cas limites :
• Si A manque f : AttributeError sur super.

Considérations de performance :
• N/A.

Exemples :
• Généraliser à C (Q24).

Remarques :
• Réponse : 2 — 1re option.`,

  2824: `C().f() avec chaîne C,B,A chacun +1 via super

Débutant :
• 3 : 1 +1 +1 le long de la chaîne.

Intermédiaire :
• C appelle B qui appelle A puis remonte en additionnant.

Expert :
• MRO linéaire (C,B,A,object).

Concepts clés :
• super empilé en profondeur.

Distinctions clés :
• Pas 2 si on oublie un niveau.

Fonctionnement :
• A retourne 1 ; B retourne 2 ; C retourne 3.

Exécution étape par étape :
• Récursion implicite via super.

Ordre des opérations :
• C().

Cas d'utilisation courants :
• Cumuls, validation en cascade.

Cas limites :
• break de chaîne si une classe ne super pas.

Considérations de performance :
• Profondeur = hauteur hiérarchie.

Exemples :
• Logger niveaux.

Remarques :
• Réponse : 3 — 1re option.`,

  2825: `super() uniquement dans __init__ ?

Débutant :
• Non : toute méthode d'instance (ou classmethod) peut l'utiliser.

Intermédiaire :
• __init__ est l'exemple le plus cité, pas une restriction.

Expert :
• @staticmethod sans self/cls : super() zéro-arg ne convient pas.

Concepts clés :
• Besoin d'un contexte pour résoudre le MRO.

Distinctions clés :
• Pas réservé aux dunder spéciaux.

Fonctionnement :
• Compiler fournit cellule __class__ pour super() sans args.

Exécution étape par étape :
• greet, create, etc. peuvent super().

Ordre des opérations :
• Selon appel.

Cas d'utilisation courants :
• __repr__, hooks métier, classmethod alternate constructors.

Cas limites :
• Q31 staticmethod.

Considérations de performance :
• N/A.

Exemples :
• Voir Q26 classmethod.

Remarques :
• Réponse : Oui dans n'importe quelle méthode d'instance ou classmethod — 1re option.`,
};
