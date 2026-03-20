/** Level 8 FR 2576–2600 — level8_intermediate_b.ts Q76–100 */
export default {
  2576: `C.count après trois C()

Débutant :
• C.count += 1 dans __init__ trois fois → 3.

Intermédiaire :
• Il faut modifier C.count, pas self.count += 1 qui créerait une variable d’instance.

Expert :
• self.count += 1 lit C.count puis écrit self.count shadowing.

Concepts clés :
• Compteur partagé au niveau classe.

Distinctions clés :
• Diffère du registre instances (liste) : ici entier.

Fonctionnement :
• Attribut de classe lu/écrit via nom qualifié C.count.

Exécution étape par étape :
• 0→1→2→3.

Ordre des opérations :
• Chaque construction incrémente.

Cas d'utilisation courants :
• IDs séquentiels, métriques globales.

Cas limites :
• Concurrence threads : pas atomique sans lock.

Considérations de performance :
• Entier small int rapide.

Exemples :
• Quatrième C() → 4.

Remarques :
• Réponse : 3 (1re option).`,

  2577: `Proxy sur liste et p.append(4)

Débutant :
• append n’existe pas sur Proxy ; __getattr__ délègue getattr(self._obj,'append') ; la liste interne mute.

Intermédiaire :
• _obj est stocké dans __dict__ donc pas délégué par __getattr__ pour sa lecture.

Expert :
• __getattribute__ manquant : comportement standard pour _obj.

Concepts clés :
• Pattern Proxy via fallback __getattr__.

Distinctions clés :
• p._obj est la liste réelle modifiée.

Fonctionnement :
• Méthode liée récupérée sur la liste ; appel avec 4.

Exécution étape par étape :
• Proxy([1,2,3]) ; getattr append ; call ; liste [1,2,3,4].

Ordre des opérations :
• Évaluation de p puis append puis argument.

Cas d'utilisation courants :
• RPC, lazy loading, ACL.

Cas limites :
• Attributs existant sur Proxy ne sont pas délégués.

Considérations de performance :
• Un getattr supplémentaire par accès délégué.

Exemples :
• len(p) nécessiterait aussi délégation ou définition locale.

Remarques :
• Réponse : [1, 2, 3, 4] (1re option).`,

  2578: `Une classe peut-elle avoir une autre classe comme attribut ?

Débutant :
• Oui : les classes sont des objets de première classe.

Intermédiaire :
• Ce n’est pas de l’héritage.

Expert :
• On peut les mettre dans des dicts de fabriques, des registres.

Concepts clés :
• Référence à un objet type.

Distinctions clés :
• Pas besoin de __slots__ ni d’héritage.

Fonctionnement :
• Assignation d’attribut de classe ou d’instance vers type.

Exécution étape par étape :
• class Outer: helper = Inner.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Strategies, plugins, factories.

Cas limites :
• Import circulaire si classes mutuellement référencées.

Considérations de performance :
• Coût d’une référence.

Exemples :
• Outer.helper() instancie Inner.

Remarques :
• Réponse : Oui (1re option).`,

  2579: `B.inner_class() avec inner_class = A

Débutant :
• B.inner_class est A ; l’appel construit une instance de A.

Intermédiaire :
• type du résultat est A, pas B.

Expert :
• isinstance(x,B) False pour cette instance.

Concepts clés :
• Attribut de classe pointant vers un autre type.

Distinctions clés :
• Pas d’erreur ni None.

Fonctionnement :
• Callable de classe standard.

Exécution étape par étape :
• Résolution attribut ; __call__ du type.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Nested factory exposée, variantes configurables.

Cas limites :
• Si inner_class n’est pas callable → TypeError.

Considérations de performance :
• N/A.

Exemples :
• B.inner_class is A → True.

Remarques :
• Réponse : oui, crée une instance de A (1re option).`,

  2580: `C(x=1,y=2) avec __dict__.update(kw)

Débutant :
• Les clés deviennent attributs d’instance ; c.x vaut 1.

Intermédiaire :
• Passe par le mapping __dict__ standard.

Expert :
• Avec __slots__ sans __dict__, ce snippet casserait.

Concepts clés :
• **kw agrégé puis fusionné dans __dict__.

Distinctions clés :
• Pas le dict entier comme valeur de c.x.

Fonctionnement :
• update mutuelle du dict d’instance.

Exécution étape par étape :
• __init__ ; update ; accès x.

Ordre des opérations :
• Construction puis attribut.

Cas d'utilisation courants :
• Objets configuration, ORM simples.

Cas limites :
• Clés non identifiants valides rares (mots réservés).

Considérations de performance :
• update O(n) des kwargs.

Exemples :
• c.y → 2.

Remarques :
• Réponse : 1 (1re option).`,

  2581: `Quand __del__ est appelé ?

Débutant :
• Lors du ramasse-miettes quand l’objet est détruit (finaliseur).

Intermédiaire :
• del x ne garantit pas l’appel immédiat si références résiduelles.

Expert :
• Ce n’est pas un destructeur C++ déterministe.

Concepts clés :
• __del__ pour nettoyage best-effort.

Distinctions clés :
• Pas au démarrage ni pendant __init__ seul.

Fonctionnement :
• Référencement à zéro puis phase GC.

Exécution étape par étape :
• Dernier ref drop → possible __del__.

Ordre des opérations :
• Non lié à l’ordre texte du del dans tous les cas.

Cas d'utilisation courants :
• Fermeture paresseuse (préférer with quand critique).

Cas limites :
• Cycles, arrêt interpréteur.

Considérations de performance :
• Finaliseurs peuvent retarder GC.

Exemples :
• deux refs : del une → pas __del__.

Remarques :
• Réponse : lors du GC (1re option).`,

  2582: `__del__ est-il garanti ?

Débutant :
• Non : dépend du GC, cycles, shutdown.

Intermédiaire :
• Préférer context managers et close() explicites.

Expert :
• Exceptions dans __del__ sont loguées puis ignorées (CPython).

Concepts clés :
• Sémantique non déterministe.

Distinctions clés :
• Pas « toujours » ni réservé à CPython seul pour la nuance pédagogique ici.

Fonctionnement :
• finalize + cyclic gc.

Exécution étape par étape :
• Peut ne jamais arriver.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Ressources : éviter d’y compter.

Cas limites :
• weakref finalizers parfois plus prévisibles pour du wiring.

Considérations de performance :
• Coût des objets avec __del__ dans le cyclic GC.

Exemples :
• Programme exit sans collecte complète.

Remarques :
• Réponse : non, dépend du GC (1re option).`,

  2583: `d.x is c.x après copy.copy

Débutant :
• Copie superficielle : le C externe est neuf mais la liste interne est partagée.

Intermédiaire :
• d is c est False.

Expert :
• copy.deepcopy dupliquerait la liste aussi.

Concepts clés :
• Partage des sous-objets mutables.

Distinctions clés :
• True ici pour is sur x, pas pour les conteneurs C.

Fonctionnement :
• Réassignation des références de champs.

Exécution étape par étape :
• copy du top-level ; même id pour listes.

Ordre des opérations :
• Construction c puis shallow copy.

Cas d'utilisation courants :
• Dupliquer enveloppe, partager buffer.

Cas limites :
• Mutateur sur un côté affecte l’autre.

Considérations de performance :
• Deepcopy plus coûteux mais sûr pour graphes.

Exemples :
• d.x.append(2) modifie c.x.

Remarques :
• Réponse : True (1re option).`,

  2584: `d.x is c.x après copy.deepcopy

Débutant :
• Deepcopy duplique récursivement ; deux listes distinctes.

Intermédiaire :
• d.x == c.x peut rester True si contenu égal.

Expert :
• Mémo dict interne gère cycles.

Concepts clés :
• Indépendance des sous-structures.

Distinctions clés :
• is False malgré égalité de valeur initiale.

Fonctionnement :
• Parcours récursif du graphe d’objets.

Exécution étape par étape :
• Nouvelle liste pour d.x.

Ordre des opérations :
• deepcopy après création de c.

Cas d'utilisation courants :
• Cloner configurations imbriquées.

Cas limites :
• Objets non copiables (verrou, socket) → erreur.

Considérations de performance :
• O(nombre de nœuds).

Exemples :
• append sur d.x n’affecte pas c.x.

Remarques :
• Réponse : False (1re option).`,

  2585: `Définir __copy__

Débutant :
• copy.copy appelle __copy__ s’il existe pour personnaliser la copie.

Intermédiaire :
• deepcopy utilise __deepcopy__ (autre hook).

Expert :
• Permet copie « mi-profonde » ciblée.

Concepts clés :
• Extension du module copy.

Distinctions clés :
• N’immortalise pas l’objet ni n’active deepcopy automatiquement.

Fonctionnement :
• dispatch dans copy.copy.

Exécution étape par étape :
• copy(c) → c.__copy__().

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Dupliquer avec état partagé contrôlé.

Cas limites :
• Oublier de copier un champ critique.

Considérations de performance :
• Souvent meilleur que deepcopy global.

Exemples :
• return C(self.x[:]) dans l’énoncé.

Remarques :
• Réponse : personnalise copy.copy (1re option).`,

  2586: `repr(C(5)) avec __repr__ f"C({self.x})"

Débutant :
• repr appelle __repr__ → chaîne 'C(5)'.

Intermédiaire :
• str peut retomber sur __repr__ si __str__ absent.

Expert :
• PEP : viser une repr evaluable quand raisonnable.

Concepts clés :
• Repr officielle pour debug.

Distinctions clés :
• Pas 5 nu ni erreur.

Fonctionnement :
• builtin repr → méthode spéciale.

Exécution étape par étape :
• C(5) ; self.x=5 ; f-string.

Ordre des opérations :
• Construction avant repr.

Cas d'utilisation courants :
• Logs, conteneurs affichent repr des éléments.

Cas limites :
• __repr__ doit retourner str.

Considérations de performance :
• f-string coût minime.

Exemples :
• print([C(5)]).

Remarques :
• Réponse : "C(5)" (1re option).`,

  2587: `C(1) == C(1) avec __eq__ sur x

Débutant :
• isinstance(other,C) et 1==1 → True.

Intermédiaire :
• Sans __eq__, == serait identité → False pour deux objets.

Expert :
• __eq__ sans __hash__ cohérent rend l’objet non hashable par défaut.

Concepts clés :
• Égalité par valeur métier.

Distinctions clés :
• Pas False ici.

Fonctionnement :
• Rich comparison sur gauche.

Exécution étape par étape :
• deux instances ; __eq__ True.

Ordre des opérations :
• == dispatch.

Cas d'utilisation courants :
• Tests, sets si hash défini correctement.

Cas limites :
• other non-C : return False dans ce code (pas NotImplemented).

Considérations de performance :
• Coût de isinstance + comparaison.

Exemples :
• C(1)==C(2) False.

Remarques :
• Réponse : True (1re option).`,

  2588: `C(1) == 1 avec __eq__ défensif

Débutant :
• isinstance(1, C) est faux ; and court-circuite → False.

Intermédiaire :
• Retourner NotImplemented permettrait à int.__eq__ d’essayer.

Expert :
• Éviter TypeError en laissant Python combiner les réponses.

Concepts clés :
• Garde de type dans __eq__.

Distinctions clés :
• Pas True ni erreur.

Fonctionnement :
• Court-circuit booléen Python.

Exécution étape par étape :
• Appel __eq__ avec int ; premier test échoue.

Ordre des opérations :
• C(1) puis comparaison à 1.

Cas d'utilisation courants :
• Éviter sensibilité aux types hétérogènes.

Cas limites :
• numpy scalaires : isinstance peut surprendre.

Considérations de performance :
• isinstance rapide.

Exemples :
• Pattern NotImplemented recommandé en prod.

Remarques :
• Réponse : False (1re option).`,

  2589: `len({C(1), C(1)}) avec __hash__ seul

Débutant :
• Même hash mais == par défaut est identité ; deux objets distincts restent.

Intermédiaire :
• set teste d’abord hash puis égalité.

Expert :
• Violer hash-consistency avec __eq__ custom serait bug grave.

Concepts clés :
• Hash collision puis test d’égalité.

Distinctions clés :
• Taille 2, pas 1.

Fonctionnement :
• insertion deuxième élément : égalité False → gardé.

Exécution étape par étape :
• deux C(1) ; hash égaux ; a is b faux ; len 2.

Ordre des opérations :
• Construction set littéral.

Cas d'utilisation courants :
• Comprendre déduplication set/dict.

Cas limites :
• __eq__ défini sans __hash__ : unhashable.

Considérations de performance :
• set O(1) amortized par op.

Exemples :
• hash(a)==hash(b) mais a!=b.

Remarques :
• Réponse : 2 (1re option).`,

  2590: `len({C(1), C(1)}) avec __eq__ et __hash__

Débutant :
• Égalité valeur + même hash → doublon fusionné → len 1.

Intermédiaire :
• Invariant : a==b ⇒ hash(a)==hash(b).

Expert :
• En Python 3, si __eq__ personnalisé sans __hash__, __hash__ devient None.

Concepts clés :
• Déduplication correcte dans set.

Distinctions clés :
• Diffère du cas sans __eq__ personnalisé.

Fonctionnement :
• Deuxième insert voit collision puis __eq__ True.

Exécution étape par étape :
• un seul élément logique.

Ordre des opérations :
• Literal set évalue éléments.

Cas d'utilisation courants :
• Clés value-based, caches.

Cas limites :
• hash mutable interdit.

Considérations de performance :
• Même complexité asymptotique.

Exemples :
• {C(1),C(2),C(1)} len 2.

Remarques :
• Réponse : 1 (1re option).`,

  2591: `c is c2 pour deux C(5)

Débutant :
• Deux constructions → deux id → is False.

Intermédiaire :
• == dépendrait de __eq__ ; is non.

Expert :
• Petits int internés ne s’appliquent pas aux instances custom.

Concepts clés :
• Identité mémoire.

Distinctions clés :
• Pas True.

Fonctionnement :
• Comparateur is sur pointeurs.

Exécution étape par étape :
• c=C(5) ; c2=C(5) ; is.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Comparer à None, sentinelles.

Cas limites :
• Singleton force True.

Considérations de performance :
• is très rapide.

Exemples :
• id différents.

Remarques :
• Réponse : False (1re option).`,

  2592: `c2 = c puis c is c2

Débutant :
• Alias → même objet → True.

Intermédiaire :
• Mutation via un nom voit l’autre.

Expert :
• copy.copy peut briser le partage partiel.

Concepts clés :
• Assignation par référence.

Distinctions clés :
• Pas False.

Fonctionnement :
• St même adresse.

Exécution étape par étape :
• une seule instance C(5).

Ordre des opérations :
• c créé puis c2 lie.

Cas d'utilisation courants :
• Passer références sans copier.

Cas limites :
• Réassigner c2 ne modifie pas c.

Considérations de performance :
• Zéro copie.

Exemples :
• c.x=10 ; c2.x 10.

Remarques :
• Réponse : True (1re option).`,

  2593: `c1.class_var is c2.class_var

Débutant :
• Même str 'shared' du corps de classe → même objet (et internement optimisé).

Intermédiaire :
• Lecture via instance résout vers attribut de classe.

Expert :
• Si une instance faisait self.class_var = 'x', ombre possible.

Concepts clés :
• Variable de classe partagée.

Distinctions clés :
• Pas False.

Fonctionnement :
• MRO pour résoudre nom.

Exécution étape par étape :
• deux instances ; même underlying str.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Constantes par classe, compteurs.

Cas limites :
• Types mutables en variable de classe → piège.

Considérations de performance :
• Une seule chaîne en mémoire.

Exemples :
• c1.class_var is C.class_var True.

Remarques :
• Réponse : True (1re option).`,

  2594: `c1.data is c2.data avec self.data=[] par instance

Débutant :
• Deux listes distinctes créées en __init__ → is False.

Intermédiaire :
• == serait True pour deux [] vides.

Expert :
• Pattern correct vs list en variable de classe.

Concepts clés :
• Indépendance des mutables par instance.

Distinctions clés :
• Pas True.

Fonctionnement :
• Nouvelle liste à chaque __init__.

Exécution étape par étape :
• C() ; C() ; comparer data.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Collections par objet.

Cas limites :
• shallow copy partage encore si on copie l’instance sans deepcopy list.

Considérations de performance :
• Plus de listes allouées.

Exemples :
• c1.data.append(1) ; c2.data vide.

Remarques :
• Réponse : False (1re option).`,

  2595: `sys.getsizeof et __sizeof__

Débutant :
• Oui : getsizeof invoque __sizeof__ de l’objet puis ajoute overhead GC.

Intermédiaire :
• Retour 0 custom ne signifie pas mémoire réelle nulle.

Expert :
• Mesure indicative, pas sizeof C exact.

Concepts clés :
• Hook pour instrumentation.

Distinctions clés :
• Pas réservé aux builtins.

Fonctionnement :
• C API / wrapper Python.

Exécution étape par étape :
• __sizeof__ → 0 ; + en-tête GC.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Profiling mémoire approximatif.

Cas limites :
• Objets partageant buffer : lecture trompeuse.

Considérations de performance :
• getsizeof lui-même léger.

Exemples :
• Normal() sans override ~ dizaines d’octets.

Remarques :
• Réponse : Oui (1re option).`,

  2596: `__init_subclass__ lors de class D(C)

Débutant :
• À la définition de D, C.__init_subclass__(D) imprime Subclass D.

Intermédiaire :
• cls dans le hook est la sous-classe fraîche.

Expert :
• super().__init_subclass__ pour chaîner correctement en hiérarchies.

Concepts clés :
• Hook de création de sous-classe.

Distinctions clés :
• Pas Subclass C ni silence.

Fonctionnement :
• Mécanisme type.__init_subclass__.

Exécution étape par étape :
• Corps de D exécuté ; hook parent.

Ordre des opérations :
• Import / définition classe, pas instanciation.

Cas d'utilisation courants :
• Registres, validation de plugins.

Cas limites :
• kwargs de class statement passés au hook.

Considérations de performance :
• Une fois par sous-classe.

Exemples :
• Plusieurs sous-classes → plusieurs prints.

Remarques :
• Réponse : "Subclass D" (1re option).`,

  2597: `À quoi sert __init_subclass__ ?

Débutant :
• Callback quand une classe est sous-classée.

Intermédiaire :
• Alternative plus simple que métaclasse pour beaucoup de cas.

Expert :
• Peut recevoir des kwargs depuis la ligne class Enfant(Parent, kw=...).

Concepts clés :
• Point d’extension déclaratif.

Distinctions clés :
• Pas pour initialiser self dans __init__.

Fonctionnement :
• Appelé par le mécanisme de construction de type.

Exécution étape par étape :
• Définition sous-classe → hook parent.

Ordre des opérations :
• Avant usage de la sous-classe.

Cas d'utilisation courants :
• Enregistrement automatique, contrats.

Cas limites :
• Oublier super peut casser MRO de hooks.

Considérations de performance :
• Coût négligeable hors log lourd dans hook.

Exemples :
• Validator required_attr dans la banque.

Remarques :
• Réponse : hook lors du sous-classement (1re option).`,

  2598: `c.dynamic_attr = "hello"

Débutant :
• Attribut ajouté à l’instance → lecture 'hello'.

Intermédiaire :
• Stocké dans __dict__ par défaut.

Expert :
• __slots__ restreindrait cette liberté.

Concepts clés :
• Objets extensibles à la volée.

Distinctions clés :
• Pas AttributeError.

Fonctionnement :
• SET_ATTR sur instance dict.

Exécution étape par étape :
• C() ; assignation ; accès.

Ordre des opérations :
• Assign avant lecture.

Cas d'utilisation courants :
• Monkey patching, configs ad hoc.

Cas limites :
• __slots__ : AttributeError si non prévu.

Considérations de performance :
• Dict grandit.

Exemples :
• plusieurs attributs dynamiques.

Remarques :
• Réponse : "hello" (1re option).`,

  2599: `type("MyClass", (), {"x": 1}).x

Débutant :
• Usine à classes : x est attribut de classe → 1.

Intermédiaire :
• Équivalent à class MyClass: x = 1.

Expert :
• Bases tuple vide → hérite object.

Concepts clés :
• type(name, bases, namespace).

Distinctions clés :
• Pas le nom 'MyClass' comme résultat de .x.

Fonctionnement :
• Construction dynamique du type.

Exécution étape par étape :
• type(...) retourne classe ; .x lit 1.

Ordre des opérations :
• Appel type puis accès attribut.

Cas d'utilisation courants :
• ORM, DSL, métaprogrammation légère.

Cas limites :
• namespace invalide → erreurs à la création.

Considérations de performance :
• Coût de création de type non négligeable ; rare en boucle chaude.

Exemples :
• MyClass().x aussi 1.

Remarques :
• Réponse : 1 (1re option).`,

  2600: `type(..., {"greet": lambda self: "hi"})().greet()

Débutant :
• Classe dynamique ; instance ; méthode liée appelée → 'hi'.

Intermédiaire :
• lambda devient fonction dans le dict de classe ; descriptor transforme en method.

Expert :
• self reçoit l’instance comme premier arg.

Concepts clés :
• Méthodes via dict de namespace.

Distinctions clés :
• Pas erreur ni 'MyClass' comme retour de greet.

Fonctionnement :
• type → __call__ → __new__/__init__ → bound method.

Exécution étape par étape :
• créer type ; () instance ; .greet() appel.

Ordre des opérations :
• De l’intérieur des parenthèses vers l’extérieur.

Cas d'utilisation courants :
• Génération de glue code, tests dynamiques.

Cas limites :
• lambda sans self casserait l’appel instance.

Considérations de performance :
• Identique à méthode définie statiquement une fois type créé.

Exemples :
• Ajouter set_x lambda dans la banque.

Remarques :
• Réponse : "hi" (1re option).`,
};
