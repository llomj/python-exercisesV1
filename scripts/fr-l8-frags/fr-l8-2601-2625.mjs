/** Level 8 FR 2601–2625 — level8_expert_a.ts Q1–25 (dataclasses) */
export default {
  2601: `Point(1,2) et print(p.x) avec @dataclass

Débutant :
• @dataclass génère un __init__ à partir des annotations ; p.x vaut 1.

Intermédiaire :
• Les champs x et y deviennent attributs d’instance comme dans une classe classique.

Expert :
• field(), init=False ou slots=True modifient ce que le décorateur produit.

Concepts clés :
• @dataclass réduit le code répétitif pour des « sacs de données » typés.

Distinctions clés :
• Ce n’est pas un tuple nommé immuable par défaut.

Fonctionnement :
• Le décorateur inspecte le corps de classe et injecte __init__/__repr__/__eq__ (par défaut).

Exécution étape par étape :
• Point(1,2) ; assignation des champs ; lecture de p.x → 1.

Ordre des opérations :
• Construction complète avant accès à l’attribut.

Cas d'utilisation courants :
• DTO, messages d’API, petits modèles internes.

Cas limites :
• Ordre des champs avec défauts doit respecter les règles des paramètres Python.

Considérations de performance :
• Légère surcharge vs tuple pur ; souvent négligeable.

Exemples :
• p.y → 2 dans le même snippet.

Remarques :
• Réponse : 1 (1re option).`,

  2602: `Méthodes générées par @dataclass par défaut

Débutant :
• __init__, __repr__ et __eq__ sont générés par défaut.

Intermédiaire :
• __hash__ n’est pas activé par défaut si __eq__ existe (instance non hashable).

Expert :
• __str__ n’est pas généré : str() retombe sur __repr__ en général.

Concepts clés :
• Trois méthodes couvrent construction, affichage debug et égalité structurelle.

Distinctions clés :
• Pas __hash__ ni __str__ auto dans l’offre par défaut.

Fonctionnement :
• dataclasses.compare / flags init/repr/eq contrôlent la génération.

Exécution étape par étape :
• Définition de classe → transformation par le décorateur.

Ordre des opérations :
• À l’import / exécution du bloc class.

Cas d'utilisation courants :
• Éviter le collage manuel de __init__/__repr__/__eq__.

Cas limites :
• Définir manuellement une méthode empêche sa régénération (selon cas).

Considérations de performance :
• __eq__ compare les champs : coût O(nombre de champs).

Exemples :
• frozen=True ajoute hash et immutabilité.

Remarques :
• Réponse : __init__, __repr__, __eq__ (1re option).`,

  2603: `repr(P(1,2)) pour @dataclass

Débutant :
• __repr__ auto affiche P(x=1, y=2).

Intermédiaire :
• Format stable et lisible pour logs.

Expert :
• repr=False ou __repr__ custom remplace ce comportement.

Concepts clés :
• Repr orientée reconstruction / inspection.

Distinctions clés :
• Pas la forme <P object at 0x…> par défaut ici.

Fonctionnement :
• Concaténation des noms de champs et valeurs.

Exécution étape par étape :
• P(1,2) ; appel repr ; chaîne structurée.

Ordre des opérations :
• Ordre des champs = ordre de déclaration.

Cas d'utilisation courants :
• Debug, collections qui affichent leurs éléments.

Cas limites :
• Champs non repr avec repr=False au niveau field.

Considérations de performance :
• N/A.

Exemples :
• print([P(1,2)]) utilise les repr des éléments.

Remarques :
• Réponse : P(x=1, y=2) (1re option).`,

  2604: `Égalité P(1,2) == P(1,2)

Débutant :
• __eq__ auto compare les champs ; tuple (1,2) égal → True.

Intermédiaire :
• Sans dataclass, == serait souvent identité seule → False entre deux objets.

Expert :
• eq=False désactive la génération d’__eq__.

Concepts clés :
• Égalité par valeur sur tous les champs pris en compte.

Distinctions clés :
• Ce n’est pas is.

Fonctionnement :
• Comparaison champ à champ dans l’ordre.

Exécution étape par étape :
• Deux instances distinctes mais équivalentes.

Ordre des opérations :
• == déclenche P.__eq__.

Cas d'utilisation courants :
• Tests unitaires, déduplication logique.

Cas limites :
• Champs mutables partagés : égalité de référence sur ces objets.

Considérations de performance :
• Comparable à comparer plusieurs attributs.

Exemples :
• P(1,2)==P(1,3) → False.

Remarques :
• Réponse : True (1re option).`,

  2605: `P(1,2) == P(1,3)

Débutant :
• y diffère ; __eq__ retourne False.

Intermédiaire :
• Tous les champs doivent coïncider.

Expert :
• Avec order=True, on trie/compare autrement mais == reste basé sur les champs.

Concepts clés :
• Une seule différence suffit à False.

Distinctions clés :
• x égal ne suffit pas si y diffère.

Fonctionnement :
• Comparaison de tuples de champs.

Exécution étape par étape :
• (1,2) vs (1,3).

Ordre des opérations :
• Évaluation des deux instances puis ==.

Cas d'utilisation courants :
• Détecter changements de configuration.

Cas limites :
• NaN dans un champ casse l’intuition d’égalité.

Considérations de performance :
• N/A.

Exemples :
• Inégalité stricte malgré même x.

Remarques :
• Réponse : False (1re option).`,

  2606: `P() avec x: int = 0 et y: int = 0

Débutant :
• Tous les arguments ont des défauts ; P() utilise 0 et 0.

Intermédiaire :
• Équivalent à P(x=0, y=0).

Expert :
• P(5) positionnel lie x en premier si signature positionnelle standard.

Concepts clés :
• Défauts de champs = paramètres optionnels du __init__ généré.

Distinctions clés :
• Pas erreur ici.

Fonctionnement :
• __init__(self, x=0, y=0) généré.

Exécution étape par étape :
• Instanciation sans args ; repr montre les zéros.

Ordre des opérations :
• Appel constructeur puis repr implicite si print de l’objet.

Cas d'utilisation courants :
• Valeurs « zéro » ou sentinelles par défaut.

Cas limites :
• Mélange champ avec/sans défaut : ordre obligatoire.

Considérations de performance :
• N/A.

Exemples :
• P(5) → P(x=5,y=0).

Remarques :
• Réponse : P(x=0, y=0) (1re option).`,

  2607: `P(1) avec y: int = 0

Débutant :
• x requis, y par défaut → P(x=1, y=0).

Intermédiaire :
• y doit suivre x dans la liste des champs si x sans défaut.

Expert :
• kwargs P(y=1, x=2) possible si signature le permet.

Concepts clés :
• Même règle que les défauts de fonctions Python.

Distinctions clés :
• Pas P(x=1) seul dans les options correctes de l’énoncé.

Fonctionnement :
• Génération de signature cohérente.

Exécution étape par étape :
• Un argument positionnel pour x.

Ordre des opérations :
• P(1) évalué d’abord.

Cas d'utilisation courants :
• Paramètres obligatoires + options.

Cas limites :
• Oublier un champ requis → TypeError.

Considérations de performance :
• N/A.

Exemples :
• P(1,5) remplace le défaut de y.

Remarques :
• Réponse : P(x=1, y=0) (1re option).`,

  2608: `Champ sans défaut après champ avec défaut

Débutant :
• TypeError à la définition de la classe : même règle que def f(a=0, b).

Intermédiaire :
• Le __init__ généré serait invalide.

Expert :
• Réordonner les champs ou utiliser dataclasses.KW_ONLY (versions récentes) pour cas avancés.

Concepts clés :
• Cohérence avec la grammaire des paramètres Python.

Distinctions clés :
• Pas SyntaxError ici : souvent TypeError au décorateur.

Fonctionnement :
• @dataclass valide la liste des Field.

Exécution étape par étape :
• Échec avant toute instanciation.

Ordre des opérations :
• Corps de classe exécuté ; dataclass transforme.

Cas d'utilisation courants :
• Éviter ambiguïté sur arguments positionnels.

Cas limites :
• Héritage multi-niveaux : règles cumulées sur tous les champs.

Considérations de performance :
• N/A.

Exemples :
• Mettre y avant x=0.

Remarques :
• Réponse : TypeError — champ sans défaut après défaut (1re option).`,

  2609: `field(default_factory=list) et C().items

Débutant :
• Chaque instance reçoit une nouvelle liste vide ; print montre [].

Intermédiaire :
• list sans parenthèses est la fabrique appelée à chaque __init__.

Expert :
• lambda ou dict/set factory pour défauts mutables personnalisés.

Concepts clés :
• Évite le piège de la liste partagée.

Distinctions clés :
• Pas None ni type list brut comme valeur affichée.

Fonctionnement :
• default_factory invoquée pendant l’initialisation.

Exécution étape par étape :
• C() ; factory → [] ; attribut items.

Ordre des opérations :
• __init__ généré appelle la factory au bon moment.

Cas d'utilisation courants :
• Agrégation par instance, buffers, enfants.

Cas limites :
• Factory qui modifie état global → effets de bord.

Considérations de performance :
• Coût d’allocation par instance.

Exemples :
• Deux C() ont des listes différentes.

Remarques :
• Réponse : [] (1re option).`,

  2610: `Pourquoi interdire items: list = [] ?

Débutant :
• Une même liste serait partagée par toutes les instances.

Intermédiaire :
• Même problème que def f(x=[]):.

Expert :
• @dataclass lève ValueError si défaut mutable direct.

Concepts clés :
• Séparation des états mutables par objet.

Distinctions clés :
• Ce n’est pas une interdiction d’annoter list.

Fonctionnement :
• Détection des mutables dans les défauts.

Exécution étape par étape :
• Classe refusée ou erreur à la définition selon version / cas.

Cas d'utilisation courants :
• list, dict, set comme état par instance.

Cas limites :
• Tuple immuable comme défaut est OK.

Considérations de performance :
• Factory légère préférable à copies profondes inutiles.

Exemples :
• field(default_factory=dict).

Remarques :
• Réponse : défaut mutable partagé (1re option).`,

  2611: `frozen=True et p.x = 3

Débutant :
• Affectation après construction → FrozenInstanceError (sous-classe d’AttributeError).

Intermédiaire :
• __init__ utilise object.__setattr__ pour la phase initiale.

Expert :
• frozen permet aussi __hash__ cohérent avec immutabilité.

Concepts clés :
• Objet valeur figé après création.

Distinctions clés :
• Pas TypeError standard pour cette affectation simple.

Fonctionnement :
• __setattr__ surchargé pour bloquer.

Exécution étape par étape :
• P(1,2) OK ; assignation x refuse.

Ordre des opérations :
• Mutation tentée après init complète.

Cas d'utilisation courants :
• Clés de dict, configs immuables.

Cas limites :
• Objets mutables dans un champ frozen : contenu encore mutable.

Considérations de performance :
• N/A.

Exemples :
• delattr aussi bloqué.

Remarques :
• Réponse : FrozenInstanceError (1re option).`,

  2612: `Rôle de frozen=True

Débutant :
• Rend l’instance immuable après __init__.

Intermédiaire :
• Active la génération de __hash__ (souvent) pour hashabilité.

Expert :
• Pas « geler la classe » ni empêcher l’import.

Concepts clés :
• Pattern valeur / record immuable.

Distinctions clés :
• Ce ne sont pas des champs privés automatiques.

Fonctionnement :
• Hooks setattr/delattr + hash.

Exécution étape par étape :
• Construction puis blocage mutations.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Sets, dict keys, thread-safety basique.

Cas limites :
• copy.replace (3.10+) pour « mutation » fonctionnelle.

Considérations de performance :
• N/A.

Exemples :
• frozen dataclass en clé de cache.

Remarques :
• Réponse : immutabilité des instances (1re option).`,

  2613: `Frozen dataclass comme clé de dict

Débutant :
• Oui : __hash__ généré + immutabilité → clé valide.

Intermédiaire :
• Sans frozen, __hash__ souvent None si __eq__ généré.

Expert :
• Égalité et hash doivent rester cohérents (pas de champs mutables hashés naïvement).

Concepts clés :
• Hash stable si l’objet ne change pas.

Distinctions clés :
• Pas « jamais hashable » pour tout dataclass.

Fonctionnement :
• hash((champs...)) typique.

Exécution étape par étape :
• Création P(1,2) ; utilisation comme clé.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Maps par coordonnées, index fonctionnels.

Cas limites :
• Champ non hashable dans frozen → problème à la construction du hash.

Considérations de performance :
• Lookup dict O(1) amorti.

Exemples :
• d[P(1,2)] lecture.

Remarques :
• Réponse : oui, hashable (1re option).`,

  2614: `P(1) < P(2) avec order=True

Débutant :
• Comparaison lexicographique des tuples de champs ; (1,) < (2,) → True.

Intermédiaire :
• Nécessite eq=True (défaut) avec order.

Expert :
• functools.total_ordering non requis ici : les quatre rich compares sont ajoutées.

Concepts clés :
• order=True ajoute < <= > >=.

Distinctions clés :
• Pas TypeError si types cohérents.

Fonctionnement :
• Tuple de champs comparé comme en tri Python.

Exécution étape par étape :
• Deux instances ; __lt__.

Ordre des opérations :
• Champs dans l’ordre de définition.

Cas d'utilisation courants :
• Tri de listes de records, files de priorité simples.

Cas limites :
• Types non comparables entre eux → TypeError.

Considérations de performance :
• Comparaison O(champs).

Exemples :
• P(2) < P(1) False.

Remarques :
• Réponse : True (1re option).`,

  2615: `order=True : quelles méthodes ?

Débutant :
• __lt__, __le__, __gt__, __ge__.

Intermédiaire :
• Pas __cmp__ (Python 3 n’utilise pas ça).

Expert :
• Conflit si vous définissez vous-même une de ces méthodes sans désactiver order.

Concepts clés :
• Rich comparison protocol.

Distinctions clés :
• __eq__ déjà présent par défaut séparément.

Fonctionnement :
• Génération symétrique des quatre.

Exécution étape par étape :
• Utilisation par sorted, bisect, comparaisons infix.

Cas d'utilisation courants :
• Classement, bornes.

Cas limites :
• Champs optionnels None : comparaison peut échouer selon types.

Considérations de performance :
• N/A.

Exemples :
• min(liste_de_P).

Remarques :
• Réponse : les quatre comparaisons ordinales (1re option).`,

  2616: `asdict(P(1,2))

Débutant :
• Dict nom → valeur : {'x': 1, 'y': 2}.

Intermédiaire :
• Récursif sur dataclasses imbriquées.

Expert :
• Copies profondes configurables via dict_factory.

Concepts clés :
• Pont vers JSON, CSV, kwargs.

Distinctions clés :
• Pas un tuple ni la repr string.

Fonctionnement :
• Introspection des Field.

Exécution étape par étape :
• Lecture des attributs exposés.

Ordre des opérations :
• P(1,2) construit puis asdict.

Cas d'utilisation courants :
• Sérialisation, logging structuré.

Cas limites :
• Objets non sérialisables restent tels quels.

Considérations de performance :
• Copie récursive peut coûter cher.

Exemples :
• json.dumps(asdict(p)) avec types compatibles.

Remarques :
• Réponse : {'x': 1, 'y': 2} (1re option).`,

  2617: `astuple(P(1,2))

Débutant :
• Tuple des valeurs dans l’ordre des champs : (1, 2).

Intermédiaire :
• Pas les noms de champs dans le tuple.

Expert :
• Déballage x, y = astuple(p).

Concepts clés :
• Vue « séquence » du record.

Distinctions clés :
• Diffère d’asdict.

Fonctionnement :
• Valeurs extraites comme pour un tuple logique.

Exécution étape par étape :
• P(1,2) ; astuple.

Ordre des opérations :
• Ordre = définition des champs.

Cas d'utilisation courants :
• Passage à des APIs tuple, SQL placeholders.

Cas limites :
• Champs réordonnés en sous-classe : suivre MRO des champs.

Considérations de performance :
• Souvent un peu plus léger que dict.

Exemples :
• astuple pour zip.

Remarques :
• Réponse : (1, 2) (1re option).`,

  2618: `len(fields(P)) pour deux champs

Débutant :
• fields(P) retourne un tuple de Field ; len vaut 2.

Intermédiaire :
• Utile pour introspection (nom, type, défauts).

Expert :
• fields(instance) aussi accepté.

Concepts clés :
• Métadonnées de dataclass.

Distinctions clés :
• Pas le nombre de méthodes.

Fonctionnement :
• Liste compilée par le décorateur.

Exécution étape par étape :
• fields(P) puis len.

Ordre des opérations :
• P est la classe typée dataclass.

Cas d'utilisation courants :
• Génération de formulaires, validation générique.

Cas limites :
• Champs ClassVar exclus du mécanisme field instance.

Considérations de performance :
• N/A.

Exemples :
• boucle for f in fields(P).

Remarques :
• Réponse : 2 (1re option).`,

  2619: `Rect(3,4).area()

Débutant :
• Méthode normale sur dataclass ; 3*4 = 12.

Intermédiaire :
• self.w et self.h viennent du __init__ généré.

Expert :
• @classmethod / @staticmethod aussi autorisés.

Concepts clés :
• Dataclass ≠ interdiction de comportement.

Distinctions clés :
• Pas erreur ni tuple affiché.

Fonctionnement :
• Descripteur de fonction sur la classe.

Exécution étape par étape :
• Instanciation ; appel area.

Ordre des opérations :
• Accès attribut puis ().

Cas d'utilisation courants :
• Modèles avec petites opérations métier.

Cas limites :
• Méthode qui mute un frozen → FrozenInstanceError.

Considérations de performance :
• N/A.

Exemples :
• perimeter() maison.

Remarques :
• Réponse : 12 (1re option).`,

  2620: `Méthodes custom sur dataclass ?

Débutant :
• Oui : classe Python normale + génération de boilerplate.

Intermédiaire :
• property, classmethod, staticmethod supportés.

Expert :
• On peut surcharger __repr__ généré en définissant la sienne (avec repr=False si besoin).

Concepts clés :
• @dataclass n’enlève pas la flexibilité POO.

Distinctions clés :
• Pas « données seules » obligatoire.

Fonctionnement :
• Même modèle d’attributs que classes classiques.

Exécution étape par étape :
• Définition au corps de classe.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• from_config(), validate(), conversions.

Cas limites :
• Ordre entre méthodes générées et héritage : attention MRO.

Considérations de performance :
• N/A.

Exemples :
• Voir Rect.area de la banque.

Remarques :
• Réponse : oui, comme classes normales (1re option).`,

  2621: `__post_init__ et total = x+y

Débutant :
• Après __init__ auto, __post_init__ calcule total ; 3+4 = 7.

Intermédiaire :
• total n’est pas un field déclaré : pas dans __eq__ par défaut.

Expert :
• field(init=False) pour champs dérivés inclus dans dataclass complète.

Concepts clés :
• Hook post-traitement / validation.

Distinctions clés :
• Pas exécuté avant les assignations de champs.

Fonctionnement :
• __init__ généré appelle __post_init__ si présent.

Exécution étape par étape :
• Champs posés ; puis total.

Ordre des opérations :
• P(3,4) complet puis lecture .total.

Cas d'utilisation courants :
• Invariants, normalisation, caches dérivés.

Cas limites :
• Lever dans __post_init__ : construction échoue.

Considérations de performance :
• Un hook de plus par instance.

Exemples :
• validation température.

Remarques :
• Réponse : 7 (1re option).`,

  2622: `But de __post_init__

Débutant :
• Logique après le __init__ généré, champs déjà prêts.

Intermédiaire :
• Ne remplace pas __init__ généré.

Expert :
• super() avec héritage : chaîner __post_init__ parent.

Concepts clés :
• Point d’extension sans écrire __init__ à la main.

Distinctions clés :
• Pas réservé au typage statique seul.

Fonctionnement :
• Dernière étape du constructeur synthétique.

Exécution étape par étape :
• Assign fields ; post_init().

Ordre des opérations :
• Toujours après init fields.

Cas d'utilisation courants :
• Champs calculés, checks.

Cas limites :
• Oubli d’appeler super().__post_init__ en hiérarchie.

Considérations de performance :
• N/A.

Exemples :
• coercition de types.

Remarques :
• Réponse : après __init__ pour logique perso (1re option).`,

  2623: `isinstance(P(1,2), P)

Débutant :
• Instance normale de la classe P → True.

Intermédiaire :
• @dataclass ne change pas la relation de sous-typage par rapport à object.

Expert :
• Protocols / ABCs restent utilisables.

Concepts clés :
• isinstance teste le type réel.

Distinctions clés :
• Pas False.

Fonctionnement :
• Même mécanisme que classes sans décorateur.

Exécution étape par étape :
• Création puis test.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Dispatch polymorphique.

Cas limites :
• Sous-classes : isinstance enfant vers parent True.

Considérations de performance :
• Rapide.

Exemples :
• type(p) is P souvent vrai pour instance directe.

Remarques :
• Réponse : True (1re option).`,

  2624: `@dataclass(repr=False)

Débutant :
• Pas de __repr__ généré ; repli sur object.__repr__ par défaut si non défini.

Intermédiaire :
• __init__ et __eq__ inchangés par ce flag seul.

Expert :
• Permet de fournir __repr__ manuel sans conflit.

Concepts clés :
• Désactive une des trois bêtes à cornes.

Distinctions clés :
• N’empêche ni print sur d’autres bases ni la création.

Fonctionnement :
• Paramètre du décorateur.

Exécution étape par étape :
• Classe transformée sans __repr__ auto.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Repr volumineuse ou secrets à masquer.

Cas limites :
• print utilise str qui peut encore montrer peu d’infos.

Considérations de performance :
• N/A.

Exemples :
• repr personnalisé court.

Remarques :
• Réponse : désactive __repr__ auto (1re option).`,

  2625: `Héritage dataclass Child(Base) avec y

Débutant :
• Champs fusionnés : x puis y ; Child(1,2) → repr Child(x=1, y=2).

Intermédiaire :
• Ordre des paramètres : base puis sous-classe.

Expert :
• Règles de défauts combinées : piège si parent a défauts et enfant ajoute sans défaut.

Concepts clés :
• Composition linéaire des fields.

Distinctions clés :
• Pas seulement Base(x=1).

Fonctionnement :
• Traitement récursif des bases dataclass.

Exécution étape par étape :
• Child(1,2) ; init unifié.

Ordre des opérations :
• Arguments positionnels suivent l’ordre des champs fusionnés.

Cas d'utilisation courants :
• Étendre un record de base.

Cas limites :
• Plusieurs héritages : ordre MRO des champs.

Considérations de performance :
• N/A.

Exemples :
• voir docs dataclass inheritance.

Remarques :
• Réponse : Child(x=1, y=2) (1re option).`,
};
