/** Level 8 FR 2626–2650 — level8_expert_a.ts Q26–50 (Enum, namedtuple / NamedTuple) */
export default {
  2626: `print(Color.RED)

Débutant :
• __str__ du membre affiche NomClasse.NomMembre, pas l’entier brut.

Intermédiaire :
• .value donne 1 ; repr montre souvent <Color.RED: 1>.

Expert :
• EnumMeta garantit singleton par membre.

Concepts clés :
• Constantes nommées fortes.

Distinctions clés :
• Pas l’entier 1 seul via print direct du membre.

Fonctionnement :
• Classe Enum spéciale avec métaclasse.

Exécution étape par étape :
• Résolution Color.RED ; conversion str pour print.

Ordre des opérations :
• print prend la str du membre.

Cas d'utilisation courants :
• États, codes, options UI.

Cas limites :
• Aliases partagent la même valeur mais affichage peut surprendre.

Considérations de performance :
• Comparaison d’identité rapide entre membres.

Exemples :
• repr(Color.RED) pour debug.

Remarques :
• Réponse : Color.RED (1re option).`,

  2627: `Color.RED.value

Débutant :
• Accès à la charge utile : 1.

Intermédiaire :
• Le membre n’est pas un int Enum classique.

Expert :
• Avec mixins (IntEnum), comparaisons avec int changent.

Concepts clés :
• Séparation nom / valeur.

Distinctions clés :
• Pas Color.RED en chaîne ni 'RED' ici.

Fonctionnement :
• Attribut value stocké sur le membre.

Exécution étape par étape :
• Color.RED puis .value.

Ordre des opérations :
• Accès attribut après résolution membre.

Cas d'utilisation courants :
• Persistance numérique, APIs.

Cas limites :
• Valeurs dupliquées → alias.

Considérations de performance :
• N/A.

Exemples :
• int brut pour calculs.

Remarques :
• Réponse : 1 (1re option).`,

  2628: `Color.RED.name

Débutant :
• Chaîne du nom du membre : 'RED'.

Intermédiaire :
• Diffère de .value (1).

Expert :
• Utile pour logs, sérialisation « sémantique ».

Concepts clés :
• Identifiant stable côté code.

Distinctions clés :
• Pas 'Color.RED' ni 1.

Fonctionnement :
• Propriété name sur Enum.

Exécution étape par étape :
• Résolution membre ; lecture name.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• JSON avec noms, switches.

Cas limites :
• Renommer membre casse données persistées.

Considérations de performance :
• N/A.

Exemples :
• f'{Color.RED.name}'.

Remarques :
• Réponse : RED / "RED" (1re option).`,

  2629: `Color(1) lookup par valeur

Débutant :
• Appeler la classe avec la valeur renvoie le membre RED existant.

Intermédiaire :
• ValueError si aucun membre ne porte cette valeur.

Expert :
• Alias : plusieurs noms une valeur → membre canonique selon règles Enum.

Concepts clés :
• Fabrique de recherche inverse.

Distinctions clés :
• Pas l’entier seul ni la chaîne 'RED'.

Fonctionnement :
• Scan des membres ou table interne.

Exécution étape par étape :
• Color(1) → Color.RED.

Ordre des opérations :
• Construction logique sans nouveau membre.

Cas d'utilisation courants :
• Désérialisation depuis DB.

Cas limites :
• Valeurs non uniques : comportement alias.

Considérations de performance :
• Lookup O(n) pire cas simple Enum.

Exemples :
• Color(5) erreur.

Remarques :
• Réponse : Color.RED (1re option).`,

  2630: `Color["RED"]

Débutant :
• Accès par nom comme clé → membre RED.

Intermédiaire :
• Équivalent à getattr(Color, 'RED').

Expert :
• KeyError si casse ou nom invalide.

Concepts clés :
• Deux API : valeur vs nom.

Distinctions clés :
• Diffère de Color(1).

Fonctionnement :
• __getitem__ sur la classe Enum.

Exécution étape par étape :
• Chaîne 'RED' ; retour singleton.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Lecture depuis fichier config texte.

Cas limites :
• noms réservés _ etc.

Considérations de performance :
• N/A.

Exemples :
• Color['GREEN'].

Remarques :
• Réponse : Color.RED (1re option).`,

  2631: `list(Color)

Débutant :
• Itération donne les membres dans l’ordre de définition.

Intermédiaire :
• Ce ne sont pas les valeurs brutes ni seulement les noms.

Expert :
• _order_ ou mixins peuvent influencer cas avancés.

Concepts clés :
• Enum itérable.

Distinctions clés :
• Liste de membres, pas [1,2,3] ici.

Fonctionnement :
• __iter__ sur le type Enum.

Exécution étape par étape :
• Collecte RED, GREEN, BLUE.

Ordre des opérations :
• Ordre déclaratif.

Cas d'utilisation courants :
• Menus déroulants, validation exhaustive.

Cas limites :
• Membres privés _ignore_ selon flags.

Considérations de performance :
• Petit n en pratique.

Exemples :
• [m.value for m in Color].

Remarques :
• Réponse : liste des membres Color.RED, … (1re option).`,

  2632: `len(Color)

Débutant :
• Nombre de membres non alias : 3 ici.

Intermédiaire :
• Alias ne compte pas comme membre distinct pour len.

Expert :
• Enum unique avec contraintes spéciales peut varier.

Concepts clés :
• Cardinal de l’ensemble des constantes.

Distinctions clés :
• Pas erreur.

Fonctionnement :
• Implémentation __len__ sur EnumType.

Exécution étape par étape :
• Trois noms distincts.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Tests, boucles bornées.

Cas limites :
• _ignore_.

Considérations de performance :
• N/A.

Exemples :
• Enum avec ENABLED alias de ACTIVE → len réduit.

Remarques :
• Réponse : 3 (1re option).`,

  2633: `Color.RED == Color.RED

Débutant :
• Même membre → True.

Intermédiaire :
• Enum.__eq__ compare identité / type membre.

Expert :
• Deux enums différents même valeur → False en général.

Concepts clés :
• Constantes fortes typées.

Distinctions clés :
• Pas False.

Fonctionnement :
• Singleton par membre.

Exécution étape par étape :
• Références au même objet.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• if state == State.DONE.

Cas limites :
• Comparaison cross-enum.

Considérations de performance :
• Rapide.

Exemples :
• RED == GREEN False.

Remarques :
• Réponse : True (1re option).`,

  2634: `Color.RED is Color.RED

Débutant :
• Singleton garanti → True.

Intermédiaire :
• Color(1) is Color.RED aussi True.

Expert :
• Metaclass crée une fois chaque membre.

Concepts clés :
• Identité stable.

Distinctions clés :
• Pas False.

Fonctionnement :
• Registre interne des membres.

Exécution étape par étape :
• Même id.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• if x is Status.OK (style identité).

Cas limites :
• Pickle / dynamic enum edge cases rares.

Considérations de performance :
• is plus léger que ==.

Exemples :
• id fixes entre imports même module.

Remarques :
• Réponse : True (1re option).`,

  2635: `Color.RED == 1 avec Enum normal

Débutant :
• False : membre n’est pas égal à l’int brut.

Intermédiaire :
• .value == 1 serait True.

Expert :
• Évite collisions accidentelles avec entiers magiques.

Concepts clés :
• Type sémantique distinct.

Distinctions clés :
• Pas True.

Fonctionnement :
• __eq__ refuse comparaison utile avec int.

Exécution étape par étape :
• Comparaison membre vs 1.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• APIs strictes.

Cas limites :
• IntEnum change la donne.

Considérations de performance :
• N/A.

Exemples :
• if color == 1: souvent erreur de design.

Remarques :
• Réponse : False (1re option).`,

  2636: `IntEnum Color.RED == 1

Débutant :
• IntEnum hérite de int ; comparaison avec 1 → True.

Intermédiaire :
• Arithmétique mixte possible (attention aux effets).

Expert :
• Perte de « sécurité de type » par rapport à Enum pur.

Concepts clés :
• Compatibilité avec legacy int.

Distinctions clés :
• Diffère de Enum simple.

Fonctionnement :
• MRO inclut int.

Exécution étape par étape :
• Sous-classe int.__eq__ joue.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Codes C, protobuf, vieux modules.

Cas limites :
• accepted où int attendu peut masquer bugs.

Considérations de performance :
• N/A.

Exemples :
• Color.RED + 1.

Remarques :
• Réponse : True (1re option).`,

  2637: `Color.RED.value = 2

Débutant :
• Immuabilité des membres → AttributeError (assignation interdite).

Intermédiaire :
• Pas de mutation post-création des attributs fondamentaux.

Expert :
• Nouveau membre dynamique aussi restreint.

Concepts clés :
• Ensemble figé à la définition.

Distinctions clés :
• Pas silencieux ni nouvelle instance auto.

Fonctionnement :
• __setattr__ bloque sur Enum.

Exécution étape par étape :
• Tentative d’écriture sur .value.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Garantir invariants protocolaires.

Cas limites :
• aenum tiers pour cas dynamiques.

Considérations de performance :
• N/A.

Exemples :
• créer nouvelle classe Enum si besoin d’étendre.

Remarques :
• Réponse : AttributeError (1re option).`,

  2638: `auto() RED puis GREEN — value de GREEN

Débutant :
• auto() numérote par défaut à partir de 1 ; deuxième → 2.

Intermédiaire :
• _generate_next_value_ personnalisable.

Expert :
• Mélange auto et valeurs explicites ajuste la suite.

Concepts clés :
• Évite compter manuellement.

Distinctions clés :
• Pas 1 pour GREEN ici.

Fonctionnement :
• Compteur interne par enum.

Exécution étape par étape :
• RED=1 ; GREEN=2.

Ordre des opérations :
• Ordre des lignes de classe.

Cas d'utilisation courants :
• Enums où seule l’unicité compte.

Cas limites :
• Dépendre des entiers auto en API persistante : fragile.

Considérations de performance :
• N/A.

Exemples :
• troisième auto → 3.

Remarques :
• Réponse : 2 (1re option).`,

  2639: `Dir.N.value avec chaîne "north"

Débutant :
• La valeur peut être str ; .value → 'north'.

Intermédiaire :
• Dir('north') retrouve le membre.

Expert :
• Enum fonctionnel avec types hétérogènes possibles.

Concepts clés :
• Pas limité aux int.

Distinctions clés :
• Pas le nom 'N' ni erreur.

Fonctionnement :
• Stockage de la chaîne comme valeur.

Exécution étape par étape :
• Accès .value.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Sérialisation lisible.

Cas limites :
• Hash de membre si valeur non hashable rare.

Considérations de performance :
• N/A.

Exemples :
• JSON direct.

Remarques :
• Réponse : north (1re option).`,

  2640: `Méthodes sur Enum ?

Débutant :
• Oui : la classe Enum reste une classe Python.

Intermédiaire :
• Méthodes d’instance reçoivent self = membre.

Expert :
• @unique, @property, mixins possibles.

Concepts clés :
• Comportement + constantes.

Distinctions clés :
• Pas réservé à static seul ni à IntEnum.

Fonctionnement :
• Même mécanisme que méthodes de classe usuelles.

Exécution étape par étape :
• Définition au corps ; dispatch sur membre.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• describe(), next_state(), parsing.

Cas limites :
• Ne pas masquer les noms réservés Enum.

Considérations de performance :
• N/A.

Exemples :
• méthode qui utilise self.value.

Remarques :
• Réponse : Oui (1re option).`,

  2641: `namedtuple Point et p.x

Débutant :
• Sous-classe de tuple avec accès attribut ; p.x → 1.

Intermédiaire :
• Équivalent p[0].

Expert :
• Renommer _fields / rename=False options récentes.

Concepts clés :
• Légèreté + lisibilité.

Distinctions clés :
• Pas erreur ni chaîne 'x'.

Fonctionnement :
• Descripteurs générés par namedtuple().

Exécution étape par étape :
• Point(1,2) ; lecture x.

Ordre des opérations :
• Construction puis accès.

Cas d'utilisation courants :
• Retours multiples nommés.

Cas limites :
• Noms invalides ou mots clés interdits.

Considérations de performance :
• Très compact vs dict.

Exemples :
• unpacking x,y = p.

Remarques :
• Réponse : 1 (1re option).`,

  2642: `p[0] sur namedtuple

Débutant :
• Toujours un tuple ; index 0 → 1.

Intermédiaire :
• Cohérence avec APIs tuple-only.

Expert :
• _asdict pas impliqué.

Concepts clés :
• Double accès nom / index.

Distinctions clés :
• Pas le nom 'x'.

Fonctionnement :
• héritage tuple.__getitem__.

Exécution étape par étape :
• Point(1,2) ; [0].

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Interop avec code legacy indices.

Cas limites :
• Index hors bornes IndexError.

Considérations de performance :
• Index souvent très rapide.

Exemples :
• p[-1] pour dernier champ.

Remarques :
• Réponse : 1 (1re option).`,

  2643: `p._replace(x=10)

Débutant :
• Nouveau Point(x=10, y=2) ; immuable donc copie.

Intermédiaire :
• p inchangé.

Expert :
• Remplace plusieurs champs en un appel.

Concepts clés :
• Mise à jour fonctionnelle.

Distinctions clés :
• Pas Point(x=1,y=2) affiché pour le résultat de _replace ici.

Fonctionnement :
• Construction d’une nouvelle instance tuple.

Exécution étape par étape :
• Copie y depuis p ; x écrasé.

Ordre des opérations :
• Appel méthode sur instance.

Cas d'utilisation courants :
• État immutable pipelines.

Cas limites :
• Nom de champ incorrect → TypeError.

Considérations de performance :
• Copie O(n champs).

Exemples :
• q = p._replace(x=10).

Remarques :
• Réponse : Point(x=10, y=2) (1re option).`,

  2644: `Que retourne _replace ?

Débutant :
• Nouvelle namedtuple ; l’originale intacte.

Intermédiaire :
• Pas None ; pas mutation in-place.

Expert :
• Pattern « update » par réaffectation de variable.

Concepts clés :
• Immuabilité du tuple.

Distinctions clés :
• Pas dict des changements.

Fonctionnement :
• clone sélectif.

Exécution étape par étape :
• Création nouvelle avec kwargs.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Simulation de setters.

Cas limites :
• Oublier de réassigner la variable.

Considérations de performance :
• Moins cher que deepcopy complète.

Exemples :
• p = p._replace(...).

Remarques :
• Réponse : nouvelle instance (1re option).`,

  2645: `dict(p._asdict())

Débutant :
• _asdict mappe noms→valeurs ; dict() normalise ; {'x':1,'y':2}.

Intermédiaire :
• Python 3.7+ dict insertion ordonnée.

Expert :
• _asdict copie shallow des valeurs.

Concepts clés :
• Passage vers monde mapping.

Distinctions clés :
• Pas le tuple seul.

Fonctionnement :
• Méthode générée sur la classe namedtuple.

Exécution étape par étape :
• p puis _asdict puis dict().

Ordre des opérations :
• Appels imbriqués de gauche à droite.

Cas d'utilisation courants :
• JSON, **kwargs.

Cas limites :
• Valeurs non JSON-serializable.

Considérations de performance :
• Allocation dict.

Exemples :
• json.dumps.

Remarques :
• Réponse : {'x': 1, 'y': 2} (1re option).`,

  2646: `Point._fields

Débutant :
• Tuple des noms ('x', 'y').

Intermédiaire :
• Attribut de classe.

Expert :
• Pas les types (typing.NamedTuple les ajoute autrement).

Concepts clés :
• Introspection légère.

Distinctions clés :
• Pas liste ni set affiché ici.

Fonctionnement :
• Stocké à la création de la factory.

Exécution étape par étape :
• Accès classe.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Génération CSV headers.

Cas limites :
• Renommage field avec rename=True produit _0 etc.

Considérations de performance :
• N/A.

Exemples :
• zip(Point._fields, p).

Remarques :
• Réponse : ('x', 'y') (1re option).`,

  2647: `namedtuple defaults=[0] sur y

Débutant :
• Le défaut s’applique au champ le plus à droite : y=0 ; Point(1) → (1,0).

Intermédiaire :
• Point() manque x → TypeError.

Expert :
• defaults=(a,b) pour plusieurs champs de droite.

Concepts clés :
• Analogie paramètres fonction.

Distinctions clés :
• Pas inversion x/y défaut.

Fonctionnement :
• Signature __new__ ajustée.

Exécution étape par étape :
• Un argument pour x.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Origine y=0 fréquente.

Cas limites :
• Trop de defaults vs champs.

Considérations de performance :
• N/A.

Exemples :
• Point(1,2) override.

Remarques :
• Réponse : Point(x=1, y=0) (1re option).`,

  2648: `typing.NamedTuple class Point

Débutant :
• Même accès p.x ; valeur 1.

Intermédiaire :
• Syntaxe moderne avec annotations.

Expert :
• Méthodes et defaults possibles dans la définition de classe.

Concepts clés :
• namedtuple déclaratif.

Distinctions clés :
• Pas erreur.

Fonctionnement :
• Construction via méta typing.NamedTuple.

Exécution étape par étape :
• Point(1,2).x.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Code typé propre.

Cas limites :
• Annotations non forcées à l’exécution.

Considérations de performance :
• Proche de collections.namedtuple.

Exemples :
• hériter pour ajouter méthodes.

Remarques :
• Réponse : 1 (1re option).`,

  2649: `Différence clé namedtuple vs dataclass

Débutant :
• namedtuple est immuable et sous-classe de tuple.

Intermédiaire :
• dataclass mutable par défaut ; pas d’indexation p[0] native sauf si tuple autre.

Expert :
• frozen dataclass rapproche mais reste pas tuple.

Concepts clés :
• Choix immutabilité / tuple API.

Distinctions clés :
• Les propositions « dataclass immuable par défaut » ou « namedtuple sans méthodes » sont fausses.

Fonctionnement :
• Deux outils complémentaires.

Exécution étape par étape :
• N/A.

Cas d'utilisation courants :
• petit record immuable → namedtuple ; objet riche mutable → dataclass.

Cas limites :
• defaults mutables : dataclass gère mieux avec default_factory.

Considérations de performance :
• namedtuple souvent plus compact.

Exemples :
• isinstance(nt, tuple) True.

Remarques :
• Réponse : namedtuple immuable et sous-type tuple (1re option).`,

  2650: `isinstance(Point(1,2), tuple)

Débutant :
• namedtuple hérite de tuple → True.

Intermédiaire :
• isinstance(p, Point) aussi True.

Expert :
• MRO : Point, tuple, object.

Concepts clés :
• Identité structurelle tuple + noms.

Distinctions clés :
• Pas False.

Fonctionnement :
• Vérification isinstance sur la chaîne de bases.

Exécution étape par étape :
• Création puis test tuple.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Fonctions génériques sur séquences.

Cas limites :
• dataclass n’est pas tuple : False pour elle.

Considérations de performance :
• N/A.

Exemples :
• len(p), p+p concat interdit field mismatch? actually tuple concat works if same type? Namedtuple + namedtuple same class works.

Remarques :
• Réponse : True (1re option).`,
};
