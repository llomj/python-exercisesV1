/** Level 10 FR detailed — bank 3076–3100 (level10Patterns Q76–100). */
export default {
  3076: `__slots__ = ['x'] ; obj.x = 1 puis obj.y = 2 ?

Débutant :
• Seuls les noms listés dans __slots__ peuvent être des attributs d'instance (hors exceptions de classe).

Intermédiaire :
• obj.y = 2 lève AttributeError.

Expert :
• __dict__ souvent absent ; attributs de classe restent possibles selon définition.

Concepts clés :
• Mémoire compacte et schéma d'attributs figé.

Distinctions clés :
• __slots__ vs dict dynamique standard.

Fonctionnement :
• Descripteurs internes réservent de la place pour chaque slot.

Exécution étape par étape :
1. x accepté.
2. y hors liste → erreur à l'affectation.

Ordre des opérations :
• Même règle lecture/écriture.

Cas d'utilisation courants :
• Structures nombreuses en mémoire (points, paquets réseau).

Cas limites :
• Héritage sans déclarer __slots__ correctement → dict réapparaît.

Considérations de performance :
• Gain mémoire notable sur grosses flottes d'objets.

Exemples :
• class Vec2: __slots__ = ('x','y').

Remarques :
• Réponse : AttributeError — 1re option.`,
  3077: `__slots__ = ['x'] ; '__dict__' in dir(obj) ?

Débutant :
• Instance typique sans __dict__ explicite : pas de dictionnaire d'attributs arbitraires.

Intermédiaire :
• La présence exacte dans dir dépend des versions mais l'intention pédagogique : False pour « pas de __dict__ instance ».

Expert :
• Classe avec __slots__ et dict = 'x' dans __slots__ peut réintroduire __dict__.

Concepts clés :
• Économie en supprimant le mapping par défaut.

Distinctions clés :
• dir inclut méthodes héritées ; le test cible la présence de __dict__.

Fonctionnement :
• CPython n'alloue pas __dict__ si slots purs.

Exécution étape par étape :
1. Instanciation MyClass.
2. Inspection dir.
3. '__dict__' absent de l'instance.

Ordre des opérations :
• dir() construit une liste triée de noms visibles.

Cas d'utilisation courants :
• Vérifier qu'on a bien un objet léger.

Cas limites :
• Extension de types C : comportement différent.

Considérations de performance :
• Moins de mémoire, accès par slot souvent rapide.

Exemples :
• Comparer avec classe vide class A: pass.

Remarques :
• Réponse : False — 1re option.`,
  3078: `__getattribute__ qui délègue toujours à super() ; accès obj.x sans attribut x ?

Débutant :
• __getattribute__ court-circuite toute lecture d'attribut.

Intermédiaire :
• super().__getattribute__('x') ne trouve pas → AttributeError.

Expert :
• __getattr__ n'est pas appelé si __getattribute__ lève sans le capturer.

Concepts clés :
• Hook universel lecture (dangereux en récursion si mal codé).

Distinctions clés :
• __getattribute__ vs __getattr__ en dernier recours.

Fonctionnement :
• Chaque obj.attr passe par __getattribute__.

Exécution étape par étape :
1. Demande de x.
2. __getattribute__ appelle la résolution normale.
3. Échec → exception.

Ordre des opérations :
• Pas de fallback __getattr__ si AttributeError propage.

Cas d'utilisation courants :
• Traçage, proxy strict, validation lecture.

Cas limites :
• self.attr dans __getattribute__ sans super → récursion infinie.

Considérations de performance :
• Coût sur chaque accès.

Exemples :
• logger.debug sur chaque attribut.

Remarques :
• Réponse : AttributeError — 1re option.`,
  3079: `__getattr__ retournant f'Missing: {name}' ; obj.x ?

Débutant :
• __getattr__ n'est invoqué que si l'attribut manque après le mécanisme normal.

Intermédiaire :
• Retour chaîne 'Missing: x'.

Expert :
• Pour attributs existants, __getattr__ n'intervient pas.

Concepts clés :
• Valeur par défaut dynamique « lazy ».

Distinctions clés :
• vs __getattribute__ qui voit tout.

Fonctionnement :
• Lookup échoue → Python tente __getattr__ si défini.

Exécution étape par étape :
1. Pas de x dans instance/classe visibles.
2. __getattr__('x') exécuté.
3. Retour formaté.

Ordre des opérations :
• Descripteurs data et propriétés avant __getattr__.

Cas d'utilisation courants :
• Accès optionnel, records souples, API rétrocompatibles.

Cas limites :
• Typos silencieuses si on retourne toujours une valeur.

Considérations de performance :
• Seulement sur misses.

Exemples :
• module lazy avec __getattr__ module-level (3.7+).

Remarques :
• Réponse : chaîne 'Missing: x' — 1re option.`,
  3080: `__setattr__ qui stocke value*2 via super ; obj.x = 5 ; obj.x ?

Débutant :
• Chaque assignation passe par __setattr__.

Intermédiaire :
• 5 * 2 = 10 stocké.

Expert :
• Initialisation dans __init__ : attention à utiliser super pour éviter boucles.

Concepts clés :
• Point unique pour validation/transformation écriture.

Distinctions clés :
• vs property.setter ciblé sur un nom.

Fonctionnement :
• super().__setattr__(name, value*2) finalise sur le bon backing store.

Exécution étape par étape :
1. __setattr__('x', 5).
2. Calcul 10.
3. Stockage.
4. Lecture → 10.

Ordre des opérations :
• __setattr__ avant création implicite d'attributs hors slots valides.

Cas d'utilisation courants :
• Unités (stockage en mm alors que API en cm).

Cas limites :
• Slots : noms invalides toujours en erreur.

Considérations de performance :
• Hook sur chaque set.

Exemples :
• clamp min/max dans __setattr__.

Remarques :
• Réponse : 10 — 1re option.`,
  3081: `Qu'est-ce que PEP 8 ?

Débutant :
• Guide de style officiel pour écrire du Python lisible.

Intermédiaire :
• snake_case fonctions, PascalCase classes, 4 espaces, longueur de ligne, imports.

Expert :
• Outils type ruff/flake8/pep8-naming automatisent les contrôles.

Concepts clés :
• Cohérence d'équipe et revue de code.

Distinctions clés :
• PEP 8 normatif style vs PEP 484 types.

Fonctionnement :
• Document vivant sur python.org ; pas exécuté par l'interpréteur.

Exécution étape par étape :
1. Lire la spec.
2. Appliquer dans l'éditeur.
3. CI vérifie.

Ordre des opérations :
• isort puis black/ruff souvent en pipeline.

Cas d'utilisation courants :
• Bibliothèques open source, grandes bases.

Cas limites :
• Exceptions locales documentées (E203 avant ':').

Considérations de performance :
• Style n'impacte pas la vitesse d'exécution.

Exemples :
• def calculate_total(): ...

Remarques :
• Réponse : guide de style Python — 1re option.`,
  3082: `def func(x: int) -> int: return x * 2 : nature des annotations ?

Débutant :
• x: int et -> int documentent les types attendus.

Intermédiaire :
• Stockées dans __annotations__ ; pas de vérification runtime par défaut.

Expert :
• mypy/pyright utilisent ces métadonnées statiquement.

Concepts clés :
• PEP 484 annotations de types.

Distinctions clés :
• Annotation vs cast runtime isinstance.

Fonctionnement :
• Le bytecode ignore les types pour la sémantique de calcul.

Exécution étape par étape :
1. Définition enregistre annotations.
2. Appel func(5) multiplie sans contrôle int automatique.

Ordre des opérations :
• Évaluation des annotations différée possible (from __future__).

Cas d'utilisation courants :
• API stables, IDEs, générateurs de doc.

Cas limites :
• Forward refs nécessitent parfois quotes.

Considérations de performance :
• Zéro coût à l'exécution hors outils.

Exemples :
• def greet(name: str) -> str: ...

Remarques :
• Réponse : annotations de types — 1re option.`,
  3083: `from typing import List, Dict ; func(x: List[int]) -> Dict[str, int] ?

Débutant :
• List[int] précise conteneur d'entiers ; Dict[str, int] clés str valeurs int.

Intermédiaire :
• En 3.9+ on peut écrire list[int] et dict[str, int] builtin.

Expert :
• Covariance/contravariance avancées avec TypeVar.

Concepts clés :
• Généricité pour collections.

Distinctions clés :
• List vs Sequence en typage (mutabilité).

Fonctionnement :
• Les génériques sont des alias de types pour les checkers.

Exécution étape par étape :
1. Import typing.
2. Signature annotée disponible pour introspection.

Ordre des opérations :
• return {} satisfait le dict vide typé côté concept.

Cas d'utilisation courants :
• Services retournant mapping JSON-like.

Cas limites :
• Hétérogénéité réelle vs annotation trop stricte.

Considérations de performance :
• Aucun à l'exécution.

Exemples :
• def group_by_id(rows: List[Row]) -> Dict[str, List[Row]]: ...

Remarques :
• Réponse : indices génériques (typing) — 1re option.`,
  3084: `def func(x: int = 1) -> int: return x ?

Débutant :
• Valeur par défaut combinée à l'annotation sur le même paramètre.

Intermédiaire :
• Ordre syntaxe : nom, annotation, = défaut.

Expert :
• dataclasses et attrs utilisent le même motif.

Concepts clés :
• Documentation du type même avec défaut.

Distinctions clés :
• x: int = 1 vs x = 1 sans hint.

Fonctionnement :
• func() lie x à 1 ; func(7) remplace.

Exécution étape par étape :
1. Appel sans args.
2. x prend 1.
3. return 1.

Ordre des opérations :
• Defaults évalués à la définition pour objets mutables (piège classique ailleurs).

Cas d'utilisation courants :
• Paramètres optionnels typés.

Cas limites :
• Ne pas mettre défaut mutable sans garde.

Considérations de performance :
• Négligeable.

Exemples :
• timeout: float = 30.0.

Remarques :
• Réponse : annotations avec paramètre par défaut — 1re option.`,
  3085: `def func(x: 'MyClass') -> None avec MyClass défini plus bas ?

Débutant :
• Guillemets : référence avant pour éviter NameError à la définition.

Intermédiaire :
• from __future__ import annotations peut rendre toutes les hints paresseuses (strings implicites).

Expert :
• get_type_hints résout les forward refs dans le bon globals.

Concepts clés :
• Graphes de types mutuellement récursifs.

Distinctions clés :
• Forward ref vs import tardif sous TYPE_CHECKING.

Fonctionnement :
• L'annotation est stockée comme chaîne jusqu'à résolution.

Exécution étape par étape :
1. def enregistré sans évaluer MyClass.
2. Plus tard le checker résout.

Ordre des opérations :
• Création de classe MyClass après def toujours OK.

Cas d'utilisation courants :
• Arbres, listes chaînées typées.

Cas limites :
• Chaîne invalide → erreur au resolve.

Considérations de performance :
• Négligeable.

Exemples :
• class Node: value: int; next: 'Node'.

Remarques :
• Réponse : référence avant (chaîne) — 1re option.`,
  3086: `Optional[int] pour paramètre et return x or 0 ?

Débutant :
• Optional[int] ≡ int | None (conceptuellement).

Intermédiaire :
• x or 0 convertit None et 0 falsy en 0 (attention aux autres falsy).

Expert :
• En 3.10+ int | None préféré par beaucoup de guides.

Concepts clés :
• Modéliser valeurs manquantes.

Distinctions clés :
• Optional vs Union[int, None] explicite.

Fonctionnement :
• Aucune contrainte runtime ; mypy vérifie les branches.

Exécution étape par étape :
1. Si x None → or renvoie 0.
2. Si x 5 → 5.

Ordre des opérations :
• Court-circuit or.

Cas d'utilisation courants :
• Paramètres API optionnels.

Cas limites :
• x=0 retourne 0 aussi : parfois besoin de « is None ».

Considérations de performance :
• Négligeable.

Exemples :
• def first(xs: list) -> Optional[int]: ...

Remarques :
• Réponse : indice Optional — 1re option.`,
  3087: `Union[int, str] pour un paramètre ?

Débutant :
• Accepte soit int soit str selon la documentation statique.

Intermédiaire :
• Le corps return 1 ici ne teste pas le type réel.

Expert :
• 3.10+ int | str plus lisible.

Concepts clés :
• Union de types pour surcharge logique.

Distinctions clés :
• Union vs Protocol structurel.

Fonctionnement :
• Checker exige isinstance ou narrowing dans branches.

Exécution étape par étape :
• Runtime : aucune branche forcée par l'union seule.

Ordre des opérations :
• isinstance checks ordonnés du plus précis au plus large.

Cas d'utilisation courants :
• parse acceptant fichier ou chemin str.

Cas limites :
• Trop large → union inutile.

Considérations de performance :
• Négligeable.

Exemples :
• JSON number vs string.

Remarques :
• Réponse : indice Union — 1re option.`,
  3088: `Callable[[int], int] pour paramètre fonction f puis return f(1) ?

Débutant :
• Première liste = types arguments positionnels ; dernier = retour.

Intermédiaire :
• [[int], int] lit « prend int, retourne int ».

Expert :
• ..., Ellipsis pour signatures variadiques partielles selon version/outil.

Concepts clés :
• Typer l'ordre supérieur.

Distinctions clés :
• Callable vs Protocol avec __call__.

Fonctionnement :
• Vérification statique que f(1) est légal.

Exécution étape par étape :
1. f attend int.
2. On passe 1.
3. Retour int utilisé.

Ordre des opérations :
• f(1) évalue f puis appelle.

Cas d'utilisation courants :
• map, tri avec key, injection de dépendance.

Cas limites :
• Fonctions kwargs-only mal décrites par [int] seul.

Considérations de performance :
• Négligeable.

Exemples :
• def apply_twice(f: Callable[[int], int], x: int) -> int: ...

Remarques :
• Réponse : indice Callable — 1re option.`,
  3089: `@dataclass class Point: x: int; y: int ; Point(1, 2) ?

Débutant :
• Génère __init__, __repr__, __eq__ par défaut entre autres.

Intermédiaire :
• Appel positionnel ou nommé selon génération.

Expert :
• frozen=True, slots=True, field(default_factory=...) pour cas avancés.

Concepts clés :
• Réduction de boilerplate pour records.

Distinctions clés :
• dataclass vs NamedTuple vs attrs tiers.

Fonctionnement :
• Le décorateur réécrit la classe à l'import.

Exécution étape par étape :
1. Décorateur inspecte annotations de champs.
2. Ajoute méthodes.
3. Point(1,2) utilise __init__ synthétisé.

Ordre des opérations :
• Champs sans défaut avant champs avec défaut.

Cas d'utilisation courants :
• DTO, messages, configs.

Cas limites :
• Champs mutables partagés si default list sans factory.

Considérations de performance :
• __slots__ optionnel pour alléger.

Exemples :
• @dataclass
  class User: id: int; name: str.

Remarques :
• Réponse : instance de dataclass — 1re option.`,
  3090: `from enum import Enum ; class Color(Enum): RED = 1 ; Color.RED ?

Débutant :
• Membre enum avec nom RED et valeur 1.

Intermédiaire :
• Affichage Color.RED avec repr dédié.

Expert :
• IntEnum, auto(), contraintes d'unicité des valeurs.

Concepts clés :
• Constantes nommées groupées.

Distinctions clés :
• Enum vs simple namespace de constantes.

Fonctionnement :
• EnumMeta construit les membres singletons.

Exécution étape par étape :
1. Corps de classe exécuté sous métaclasse.
2. Color.RED référence membre.

Ordre des opérations :
• Comparaison identité et égalité spécifiques.

Cas d'utilisation courants :
• États machine, codes erreur lisibles.

Cas limites :
• Alias si deux noms même valeur selon Enum functional API.

Considérations de performance :
• Léger coût lookup vs int brut.

Exemples :
• class State(Enum): IDLE=0; RUN=1.

Remarques :
• Réponse : membre Enum (ex. Color.RED: 1) — 1re option.`,
  3091: `import sys ; sys.argv ?

Débutant :
• Liste des arguments de ligne de commande ; argv[0] est le script ou '-c'.

Intermédiaire :
• Éléments toujours des str.

Expert :
• argparse/build sur argv[1:].

Concepts clés :
• Pont entre shell et programme.

Distinctions clés :
• argv vs environ ; vs click.argv.

Fonctionnement :
• Rempli au démarrage par l'interpréteur.

Exécution étape par étape :
1. Lancement python script.py a b.
2. argv ≈ ['script.py','a','b'].

Ordre des opérations :
• Splitting déjà fait par la plateforme.

Cas d'utilisation courants :
• CLI, flags, fichiers d'entrée.

Cas limites :
• REPL : argv peut être minimal.

Considérations de performance :
• Liste courte ; négligeable.

Exemples :
• if len(sys.argv) < 2: usage().

Remarques :
• Réponse : arguments de ligne de commande — 1re option.`,
  3092: `import os ; os.environ ?

Débutant :
• Vue mappante des variables d'environnement du processus.

Intermédiaire :
• get évite KeyError ; modifs locales au processus.

Expert :
• Sur certaines plateformes, mise à jour peut affecter putenv sous-jacent.

Concepts clés :
• Configuration 12-factor.

Distinctions clés :
• os.environ vs os.getenv.

Fonctionnement :
• Héritage du parent au fork/spawn.

Exécution étape par étape :
1. import os.
2. Accès clé 'PATH' etc.

Ordre des opérations :
• Lecture str → str.

Cas d'utilisation courants :
• secrets, URL base, feature flags.

Cas limites :
• Binaires vs texte sur Windows ancien.

Considérations de performance :
• Lecture occasionnelle OK.

Exemples :
• DEBUG = os.environ.get('DEBUG') == '1'.

Remarques :
• Réponse : variables d'environnement (mapping) — 1re option.`,
  3093: `import json ; json.dumps({'a': 1}) ?

Débutant :
• Sérialise un objet Python en chaîne JSON.

Intermédiaire :
• Guillemets doubles JSON, pas apostrophes Python.

Expert :
• default= pour types non natifs ; ensure_ascii=False pour Unicode.

Concepts clés :
• Échange interop langages.

Distinctions clés :
• dumps vs dump vers fichier.

Fonctionnement :
• Parcours récursif du dict.

Exécution étape par étape :
1. {'a':1} visité.
2. Produit '{"a": 1}' (espaces optionnels selon séparateurs).

Ordre des opérations :
• Clés triées si sort_keys=True.

Cas d'utilisation courants :
• API REST, fichiers config.

Cas limites :
• Clés non str dict → TypeError.

Considérations de performance :
• Grandes structures : orjson plus rapide hors stdlib.

Exemples :
• json.dumps([1,2,3]).

Remarques :
• Réponse : chaîne JSON '{"a": 1}' — 1re option.`,
  3094: `import json ; json.loads('{"a": 1}') ?

Débutant :
• Parse une chaîne JSON vers objets Python.

Intermédiaire :
• Objet racine dict ici avec clé str 'a'.

Expert :
• object_hook pour types custom.

Concepts clés :
• Symétrique de dumps.

Distinctions clés :
• loads vs load depuis fichier texte.

Fonctionnement :
• Lex + parse JSON strict (types limités).

Exécution étape par étape :
1. Scanner la chaîne.
2. Construit dict Python.

Ordre des opérations :
• Erreur JSONDecodeError si mal formé.

Cas d'utilisation courants :
• Réponses HTTP body.

Cas limites :
• Nombres JSON → int/float Python selon valeur.

Considérations de performance :
• I/O + parse dominent.

Exemples :
• payload = json.loads(request_body).

Remarques :
• Réponse : dict Python {'a': 1} — 1re option.`,
  3095: `import pickle ; pickle.dumps([1, 2, 3]) ?

Débutant :
• Flux binaire représentant l'objet pour recréation ultérieure.

Intermédiaire :
• Spécifique Python ; non sûr sur données non fiables.

Expert :
• Protocole configurable ; picklers pour extensions C.

Concepts clés :
• Persistance fidèle à l'écosystème Python.

Distinctions clés :
• pickle vs json (sécurité, interop).

Fonctionnement :
• Sérialise opcode stream.

Exécution étape par étape :
1. Objet [1,2,3] visité.
2. Retour bytes.

Ordre des opérations :
• Versions incompatibles entre Python majeurs possibles.

Cas d'utilisation courants :
• Celery, cache disque, IPC même machine.

Cas limites :
• JAMAIS loads sur bytes non approuvés (RCE).

Considérations de performance :
• Plus lent et plus gros que JSON pour cas simples.

Exemples :
• redis.set(key, pickle.dumps(obj)).

Remarques :
• Réponse : objet bytes — 1re option.`,
  3096: `pickle.loads après dumps de [1,2,3] ?

Débutant :
• Reconstruit l'objet d'origine depuis les bytes.

Intermédiaire :
• Égalité structurelle [1,2,3].

Expert :
• Identité d'objets non garantie sauf protocole gère refs.

Concepts clés :
• Aller-retour sérialisation.

Distinctions clés :
• loads vs load fichier binaire.

Fonctionnement :
• Interprète le flux pickle.

Exécution étape par étape :
1. dumps produit b.
2. loads(b) → liste égale.

Ordre des opérations :
• Même version pickle recommandée.

Cas d'utilisation courants :
• Sessions, checkpoints.

Cas limites :
• Classes custom nécessitent importabilité du chemin module.

Considérations de performance :
• Coût CPU sur gros graphes.

Exemples :
• roundtrip test.

Remarques :
• Réponse : [1, 2, 3] — 1re option.`,
  3097: `namedtuple('Point', ['x','y']) ; Point(1, 2) ?

Débutant :
• Sous-classe tuple avec champs nommés.

Intermédiaire :
• Repr affiche Point(x=1, y=2).

Expert :
• Remplacé souvent par typing.NamedTuple ou dataclass.

Concepts clés :
• Lisibilité + immutabilité tuple.

Distinctions clés :
• namedtuple vs simple tuple.

Fonctionnement :
• Fabrique de classe à l'exécution.

Exécution étape par étape :
1. Point = namedtuple(...).
2. Point(1,2) valide positions.

Ordre des opérations :
• Accès p.x et p[0] coexistent.

Cas d'utilisation courants :
• Lignes CSV, coordonnées.

Cas limites :
• Renommer champs : _rename=True.

Considérations de performance :
• Plus léger que dataclass mutable.

Exemples :
• Card = namedtuple('Card', 'rank suit').

Remarques :
• Réponse : instance Point(x=1, y=2) — 1re option.`,
  3098: `defaultdict(list) ; d['key'] sans insertion préalable ?

Débutant :
• Appelle list() pour créer valeur par défaut à la première lecture.

Intermédiaire :
• Stocke la liste vide puis la retourne.

Expert :
• factory doit être callable sans args ; int pour compteurs.

Concepts clés :
• Éviter if key not in d.

Distinctions clés :
• defaultdict vs dict.setdefault.

Fonctionnement :
• __missing__ surchargé.

Exécution étape par étape :
1. Accès clé absente.
2. factory() → [].
3. Assignation implicite.

Ordre des opérations :
• Références ultérieures réutilisent même objet liste.

Cas d'utilisation courants :
• Adjacency list, grouping.

Cas limites :
• factory coûteuse si appelée souvent par erreur.

Considérations de performance :
• Comparable à setdefault manuel.

Exemples :
• dd = defaultdict(list); dd['k'].append(1).

Remarques :
• Réponse : liste vide [] — 1re option.`,
  3099: `Counter([1, 1, 2, 2, 2]) ?

Débutant :
• Compte occurrences ; affichage type Counter({...}).

Intermédiaire :
• 1→2 fois, 2→3 fois ; ordre d'affichage peut mettre les plus fréquents en tête.

Expert :
• most_common(), opérations arithmétiques entre Counter.

Concepts clés :
• multiset pratique.

Distinctions clés :
• Counter vs dict manuel.

Fonctionnement :
• Itère la séquence et incrémente.

Exécution étape par étape :
1. Parcourt la liste.
2. Met à jour compteurs.
3. Repr formaté.

Ordre des opérations :
• counter[k] absent → 0 sans erreur.

Cas d'utilisation courants :
• fréquences texte, votes.

Cas limites :
• Éléments non hashables interdits.

Considérations de performance :
• O(n) sur iterable.

Exemples :
• Counter(words).most_common(5).

Remarques :
• Réponse : Counter({2: 3, 1: 2}) — 1re option.`,
  3100: `@lru_cache(maxsize=128) sur fib récursif ; fib(10) ?

Débutant :
• Cache les résultats fib(k) pour éviter explosions exponentielles.

Intermédiaire :
• fib(10) vaut 55 (suite de Fibonacci classique F(0)=0,F(1)=1).

Expert :
• cache_info(), clear_cache() ; maxsize=None cache illimité.

Concepts clés :
• Mémoïsation transparente.

Distinctions clés :
• lru_cache vs dict manuel ; vs cache sur itératif bottom-up.

Fonctionnement :
• Clé = args hashables ; ici n entier.

Exécution étape par étape :
1. Appels imbriqués remplissent le cache.
2. fib(10) calculé une fois puis réutilisable.

Ordre des opérations :
• LRU éviction si maxsize dépassé (pas le cas pour petit n).

Cas d'utilisation courants :
• DP top-down, parsers, grilles.

Cas limites :
• Arguments non hashables interdits.

Considérations de performance :
• Passe de exponentiel à linéaire en n pour ce fib naïf.

Exemples :
• @lru_cache
  def edit_distance(...): ...

Remarques :
• Réponse : 55 — 1re option.`,
};
