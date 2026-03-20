/** Level 9 FR 2926–2950 — level9_expert_a.ts Q26–50 (Protocol, duck typing, collections.abc) */
export default {
  2926: `À quoi sert typing.Protocol ?

Débutant :
• Décrire une interface structurelle pour les vérificateurs de types (mypy, pyright) — canard typé.

Intermédiaire :
• PEP 544 ; pas besoin d'hériter pour « correspondre » au protocole.

Expert :
• Runtime : peu d'effet seul ; @runtime_checkable pour isinstance limité.

Concepts clés :
• Sous-typage structurel explicite.

Distinctions clés :
• Pas création automatique de classe ABC runtime stricte.

Fonctionnement :
• Analyse statique compare signatures requises.

Exécution étape par étape :
• render(Circle()) accepté si draw compatible.

Ordre des opérations :
• Définition Protocol puis classes concrètes.

Cas d'utilisation courants :
• APIs pluggables sans coupler l'héritage.

Cas limites :
• isinstance sans runtime_checkable : souvent interdit ou inutile.

Considérations de performance :
• Zéro coût à l'exécution pour la plupart des usages typage seul.

Exemples :
• Drawable avec Circle sans hériter Drawable.

Remarques :
• Réponse : interfaces structurelles (duck typing typé) — 1re option.`,

  2927: `Quel sous-typage Protocol utilise-t-il ?

Débutant :
• Structurel : « a les bonnes méthodes / attributs ».

Intermédiaire :
• Opposé au nominal ABC (déclaration d'héritage).

Expert :
• Les checkers raisonnent sur les membres, pas sur le MRO seul.

Concepts clés :
• Compatibilité par forme.

Distinctions clés :
• Pas nominal par défaut.

Fonctionnement :
• Sprite avec draw() accepté comme Drawable annoté.

Exécution étape par étape :
• Vérification à la compilation / analyse.

Ordre des opérations :
• Déclaration Protocol puis implémentation séparée.

Cas d'utilisation courants :
• Tests doubles, adaptateurs tiers.

Cas limites :
• Covariance/contrevariance : règles avancées.

Considérations de performance :
• N/A (statique).

Exemples :
• Comparer avec class C(Shape):.

Remarques :
• Réponse : sous-typage structurel — 1re option.`,

  2928: `Quel sous-typage ABC utilise-t-il ?

Débutant :
• Nominal : il faut hériter (ou register) pour être reconnu.

Intermédiaire :
• isinstance/issubclass basés sur hiérarchie ou registre.

Expert :
• Même avec les bonnes méthodes, sans héritage : pas sous-type ABC.

Concepts clés :
• Relation explicite is-a déclarée.

Distinctions clés :
• Pas structurel par défaut.

Fonctionnement :
• MRO et __instancecheck__ ABC.

Exécution étape par étape :
• Circle doit class Circle(Shape).

Ordre des opérations :
• Définition classe enfant explicite.

Cas d'utilisation courants :
• Contrats lourds avec défauts partagés.

Cas limites :
• register() raccourci nominal sans méthodes.

Considérations de performance :
• N/A.

Exemples :
• Protocol vs Shape côte à côte.

Remarques :
• Réponse : sous-typage nominal — 1re option.`,

  2929: `Sprite avec draw — considéré Drawable (Protocol) ?

Débutant :
• Oui structurellement : draw(self)->str présent.

Intermédiaire :
• Pas besoin class Sprite(Drawable).

Expert :
• mypy/pyright valident l'appel render(Sprite()).

Concepts clés :
• Correspondance par signature attendue.

Distinctions clés :
• Pas TypeError à l'exécution pour ce snippet seul.

Fonctionnement :
• Analyseur relie Sprite aux exigences Drawable.

Exécution étape par étape :
• render appelle shape.draw().

Ordre des opérations :
• Définitions puis appel typé.

Cas d'utilisation courants :
• DI légère.

Cas limites :
• Signatures incompatibles : erreur statique.

Considérations de performance :
• N/A.

Exemples :
• render(Sprite()) → 'sprite'.

Remarques :
• Réponse : oui, structurellement — 1re option.`,

  2930: `print(Sprite().draw())

Débutant :
• "sprite" : appel méthode instance normale.

Intermédiaire :
• Indépendant de Protocol ; le protocole documente l'usage type.

Expert :
• Si Drawable existe, Sprite matche pour les outils.

Concepts clés :
• Duck typing runtime inchangé.

Distinctions clés :
• Pas TypeError.

Fonctionnement :
• Bound method draw.

Exécution étape par étape :
• Retour chaîne littérale.

Ordre des opérations :
• Sprite() puis .draw().

Cas d'utilisation courants :
• Rendu polymorphe sans base commune runtime.

Cas limites :
• Erreurs seulement si draw absent.

Considérations de performance :
• N/A.

Exemples :
• Variantes draw retournant autres types cassent le typage.

Remarques :
• Réponse : "sprite" — 1re option.`,

  2931: `Protocol n'exige PAS quoi pour compatibilité structurelle ?

Débutant :
• Héritage explicite du Protocol.

Intermédiaire :
• Noms et types de méthodes doivent quand même matcher pour les checkers.

Expert :
• Implémentations runtime obligatoires ; le Protocol ne les injecte pas.

Concepts clés :
• Structure sans déclaration class X(P).

Distinctions clés :
• Pas « pas besoin de méthodes ».

Fonctionnement :
• Vérificateur compare l'API réelle au protocole.

Exécution étape par étape :
• Appel réussi si méthodes présentes.

Ordre des opérations :
• Définition Protocol puis classe indépendante.

Cas d'utilisation courants :
• Intégration bibliothèques externes.

Cas limites :
• Hériter du Protocol pour défauts (Q39).

Considérations de performance :
• N/A.

Exemples :
• Sprite sans Drawable dans les bases.

Remarques :
• Réponse : héritage explicite — 1re option.`,

  2932: `@runtime_checkable HasLen — isinstance([1,2], HasLen)

Débutant :
• True : list a __len__.

Intermédiaire :
• Le décorateur active __instancecheck__ sur le Protocol.

Expert :
• Vérifie présence attributs, pas signatures fines.

Concepts clés :
• isinstance runtime pour protocoles simples.

Distinctions clés :
• Pas False.

Fonctionnement :
• [1,2] → type list → __len__ existe.

Exécution étape par étape :
• isinstance retourne True.

Ordre des opérations :
• Définition classe décorée puis test.

Cas d'utilisation courants :
• Guards défensifs rapides.

Cas limites :
• 42 sans __len__ → False.

Considérations de performance :
• isinstance Protocol plus coûteux que types built-in.

Exemples :
• isinstance("hello", HasLen) True.

Remarques :
• Réponse : True — 1re option.`,

  2933: `Que permet @runtime_checkable sur un Protocol ?

Débutant :
• Utiliser isinstance (et issubclass dans certains cas) à l'exécution.

Intermédiaire :
• Sans lui, Protocol souvent réservé à l'analyse statique.

Expert :
• Vérification superficielle (membres), pas mypy au runtime.

Concepts clés :
• Pont statique / dynamique.

Distinctions clés :
• Pas « rendre abstract » ni dispatch magique.

Fonctionnement :
• Métaclasse Protocol ajoute hooks.

Exécution étape par étape :
• isinstance([], Sizeable) selon banque.

Ordre des opérations :
• Appliquer décorateur avant isinstance.

Cas d'utilisation courants :
• Plugins chargés dynamiquement.

Cas limites :
• Faux positifs si méthode existe mais incompatible.

Considérations de performance :
• Éviter dans boucles chaudes si possible.

Exemples :
• Voir typing.runtime_checkable doc.

Remarques :
• Réponse : isinstance à l'exécution — 1re option.`,

  2934: `isinstance sur Protocol sans @runtime_checkable

Débutant :
• TypeError : le protocole non runtime n'est pas un candidat isinstance par défaut.

Intermédiaire :
• Message peut mentionner support issubclass/instancecheck manquant.

Expert :
• Solution : ajouter @runtime_checkable ou tester hasattr manuellement.

Concepts clés :
• Séparation vérification statique / runtime.

Distinctions clés :
• Pas True/False silencieux.

Fonctionnement :
• __instancecheck__ du Protocol durcit le cas.

Exécution étape par étape :
• Exception avant logique métier.

Ordre des opérations :
• isinstance("hello", MyProto).

Cas d'utilisation courants :
• Rappel : typer avec mypy, pas isinstance aveugle.

Cas limites :
• Versions Python : messages peuvent varier.

Considérations de performance :
• N/A.

Exemples :
• Ajouter décorateur puis retester.

Remarques :
• Réponse : TypeError — 1re option.`,

  2935: `Protocol Comparable avec __lt__

Débutant :
• Toute classe avec __lt__(self, other) compatible est Comparable pour le typage.

Intermédiaire :
• int, float, str ont __lt__.

Expert :
• minimum(a: Comparable, b: Comparable) accepte Temperature custom.

Concepts clés :
• Opérateur < formalisé.

Distinctions clés :
• Pas « seulement int ».

Fonctionnement :
• Analyseur vérifie présence __lt__.

Exécution étape par étape :
• a < b appelle __lt__.

Ordre des opérations :
• Définition Protocol puis classes utilisatrices.

Cas d'utilisation courants :
• Tri générique, min/max typés.

Cas limites :
• __lt__ sans __gt__ : ordre partiel.

Considérations de performance :
• N/A.

Exemples :
• Temperature de la banque.

Remarques :
• Réponse : toute classe avec __lt__ — 1re option.`,

  2936: `Signification du « duck typing »

Débutant :
• Si ça se comporte comme le canard (méthodes attendues), on l'utilise comme tel.

Intermédiaire :
• Pas de déclaration de type obligatoire à l'exécution Python.

Expert :
• AttributeError si méthode manquante.

Concepts clés :
• Polymorphisme par comportement.

Distinctions clés :
• Pas héritage forcé de Duck.

Fonctionnement :
• make_quack appelle .quack() sur tout objet pourvu.

Exécution étape par étape :
• Liaison dynamique à l'appel.

Ordre des opérations :
• Passage d'instance à fonction.

Cas d'utilisation courants :
• Écriture de APIs souples.

Cas limites :
• Moins de garde-fous sans tests/types.

Considérations de performance :
• Coût normal d'appel attribut.

Exemples :
• Duck et Person de la banque.

Remarques :
• Réponse : adéquation par méthodes, pas par type déclaré — 1re option.`,

  2937: `Protocol formalise quel concept ?

Débutant :
• Le duck typing pour les vérificateurs statiques.

Intermédiaire :
• Sans Protocol, def f(obj): obj.run() n'est pas vérifiable structurellement.

Expert :
• N'impose pas de surcharge runtime.

Concepts clés :
• Documentation machine-lisible de l'API attendue.

Distinctions clés :
• Pas hiérarchie de classes runtime Protocol obligatoire.

Fonctionnement :
• obj: Runnable dans les annotations.

Exécution étape par étape :
• mypy vérifie .run() sur les appels.

Ordre des opérations :
• Annoter puis implémenter classes.

Cas d'utilisation courants :
• Grandes bases mixtes dynamisme + sûreté.

Cas limites :
• Protocols récursifs : complexité typage.

Considérations de performance :
• N/A.

Exemples :
• Runnable / process de la banque.

Remarques :
• Réponse : duck typing pour analyse statique — 1re option.`,

  2938: `Protocol Closable avec close(self)->None

Débutant :
• Fichiers, sockets, connexions, ressources custom avec close() matchent.

Intermédiaire :
• Pas besoin d'hériter Closable.

Expert :
• open() retourne des objets avec close.

Concepts clés :
• cleanup(resource: Closable) typé.

Distinctions clés :
• Pas « seulement io.IOBase » ni « rien sans héritage ».

Fonctionnement :
• Vérificateur exige méthode close.

Exécution étape par étape :
• resource.close() dans cleanup.

Ordre des opérations :
• Définir Protocol puis fonctions utilitaires.

Cas d'utilisation courants :
• try/finally ou context managers génériques.

Cas limites :
• close silencieux vs exceptions : contrat métier.

Considérations de performance :
• N/A.

Exemples :
• MyResource de la banque.

Remarques :
• Réponse : tout objet avec close() — 1re option.`,

  2939: `Un Protocol peut-il avoir des implémentations par défaut ?

Débutant :
• Oui dans le corps des méthodes du Protocol, mais seules les sous-classes explicites héritent ce code.

Intermédiaire :
• Match structurel seul ne récupère pas les défauts du Protocol.

Expert :
• Diffère des mixins ABC où héritage nominal apporte le code.

Concepts clés :
• Defaults = via arbre d'héritage Protocol, pas via shape seule.

Distinctions clés :
• Pas application automatique à toute classe compatible.

Fonctionnement :
• class Polite(Greetable): pass reçoit greet défaut.

Exécution étape par étape :
• MRO inclut le Protocol comme base.

Ordre des opérations :
• Hériter explicitement pour defaults.

Cas d'utilisation courants :
• Extension progressive avec base typée.

Cas limites :
• Protocols runtime_checkable + defaults : réfléchir MRO.

Considérations de performance :
• N/A.

Exemples :
• Greetable / Polite banque.

Remarques :
• Réponse : oui, mais héritage explicite requis pour les utiliser — 1re option.`,

  2940: `Protocol vérifie ___ ; ABC vérifie ___

Débutant :
• structure ; héritage (nominal).

Intermédiaire :
• register() rapproche ABC du marquage sans structure complète.

Expert :
• mypy Protocol vs isinstance ABC runtime.

Concepts clés :
• Deux philosophies de sous-type.

Distinctions clés :
• Pas l'inverse.

Fonctionnement :
• Tableau mental : canard typé vs arbre de classes.

Exécution étape par étape :
• Choix selon besoin runtime/statique.

Ordre des opérations :
• Concevoir API puis choisir outil.

Cas d'utilisation courants :
• Protocol pour libs pures typage ; ABC pour cadres impératifs.

Cas limites :
• Hybrides (ABC + Protocol) en gros projets.

Considérations de performance :
• N/A.

Exemples :
• Drawable Sprite vs Circle(Shape).

Remarques :
• Réponse : structure ; héritage — 1re option.`,

  2941: `Iterator ABC — méthodes requises

Débutant :
• __iter__ et __next__.

Intermédiaire :
• __iter__ retourne souvent self sur un itérateur.

Expert :
• Iterable seulement __iter__ ; Iterator = les deux.

Concepts clés :
• Protocole d'itération complet.

Distinctions clés :
• Pas seulement __next__.

Fonctionnement :
• for boucle appelle __iter__ puis __next__ jusqu'à StopIteration.

Exécution étape par étape :
• Counter banque : list(Counter(3)).

Ordre des opérations :
• raise StopIteration en fin.

Cas d'utilisation courants :
• Parseurs streaming, générateurs manuels.

Cas limites :
• Itérateurs consommables une fois.

Considérations de performance :
• __next__ en C pour builtins.

Exemples :
• iter([]) a __next__.

Remarques :
• Réponse : __iter__ et __next__ — 1re option.`,

  2942: `Sequence avec __getitem__ et __len__ — mixins fournis

Débutant :
• __contains__, __iter__, __reversed__, index, count entre autres.

Intermédiaire :
• Implémentations par défaut s'appuient sur indexation + longueur.

Expert :
• Gain : pas réécrire in, boucle, count.

Concepts clés :
• ABC mixin pattern.

Distinctions clés :
• Pas « rien de plus » ni append/pop (MutableSequence).

Fonctionnement :
• MySeq([1,2,3,2]) → in et count gratuits.

Exécution étape par étape :
• Appels délèguent à __getitem__/__len__.

Ordre des opérations :
• Sous-classer Sequence.

Cas d'utilisation courants :
• Vues lecture seule sur buffer.

Cas limites :
• Complexité O(n) pour in naïf sur séquence linéaire.

Considérations de performance :
• set/dict préférés pour membership fréquent.

Exemples :
• 2 in s et s.count(2).

Remarques :
• Réponse : mixins __contains__, __iter__, __reversed__, index, count — 1re option.`,

  2943: `MutableSequence ajoute par rapport à Sequence

Débutant :
• __setitem__, __delitem__, insert + mixins append, clear, reverse, extend, pop, etc.

Intermédiaire :
• append implémenté via insert à la fin.

Expert :
• __iadd__, remove aussi dans la famille.

Concepts clés :
• Mutation avec primitifs minimaux.

Distinctions clés :
• Pas « seulement append/pop » ni rien.

Fonctionnement :
• MyList banque utilise mixins après 4 méthodes de base.

Exécution étape par étape :
• m.append / extend après insert défini.

Ordre des opérations :
• Respecter contrat abstract restant.

Cas d'utilisation courants :
• Types liste custom (validation à l'insertion).

Cas limites :
• insert mal implémenté casse append.

Considérations de performance :
• extend naïf O(n²) possible.

Exemples :
• Voir collections.abc doc.

Remarques :
• Réponse : __setitem__, __delitem__, insert + append, clear, reverse, extend, pop… — 1re option.`,

  2944: `isinstance({"a":1}, Mapping)

Débutant :
• True : dict a __getitem__, __len__, __iter__.

Intermédiaire :
• Mapping lecture seule conceptuelle ; dict mutable mais satisfait.

Expert :
• Mixins keys/items/values/get/eq… sur l'ABC.

Concepts clés :
• Typage des « dict-like ».

Distinctions clés :
• Pas False.

Fonctionnement :
• Enregistrement virtuel + C layout dict.

Exécution étape par étape :
• print True.

Ordre des opérations :
• Littéral dict puis isinstance.

Cas d'utilisation courants :
• Fonctions acceptant read-only mapping.

Cas limites :
• Objets custom : implémenter méthodes requises.

Considérations de performance :
• isinstance ABC optimisé.

Exemples :
• isinstance([], Mapping) False.

Remarques :
• Réponse : True — 1re option.`,

  2945: `isinstance({"a":1}, MutableMapping)

Débutant :
• True : dict supporte __setitem__ et __delitem__.

Intermédiaire :
• Mixins pop, update, setdefault, clear…

Expert :
• types.MappingProxyType : Mapping pas Mutable.

Concepts clés :
• Distinction lecture / écriture dans les ABC.

Distinctions clés :
• Pas False.

Fonctionnement :
• Vérification capacités de mutation.

Exécution étape par étape :
• print True.

Ordre des opérations :
• import MutableMapping puis test.

Cas d'utilisation courants :
• APIs config modifiables.

Cas limites :
• Proxy read-only : Mapping seulement.

Considérations de performance :
• N/A.

Exemples :
• isinstance({}, MutableMapping).

Remarques :
• Réponse : True — 1re option.`,

  2946: `isinstance(frozenset(), Set)

Débutant :
• True : frozenset a __contains__, __iter__, __len__.

Intermédiaire :
• set aussi isinstance Set.

Expert :
• Set ABC = ensemble immuable en intention d'API ; set concret aussi sous-type.

Concepts clés :
• Opérations ensemblistes en lecture.

Distinctions clés :
• Pas False.

Fonctionnement :
• ABC collections.abc.Set.

Exécution étape par étape :
• print True.

Ordre des opérations :
• frozenset() vide puis isinstance.

Cas d'utilisation courants :
• Fonctions unions/intersections typées.

Cas limites :
• Confusion Set typing builtins vs collections.abc.Set.

Considérations de performance :
• N/A.

Exemples :
• isinstance(set(), Set) True.

Remarques :
• Réponse : True — 1re option.`,

  2947: `isinstance(frozenset(), MutableSet)

Débutant :
• False : frozenset n'a pas add ni discard.

Intermédiaire :
• set() est MutableSet.

Expert :
• Immuabilité exclut les opérations de mutation de l'ABC.

Concepts clés :
• MutableSet = Set + add/discard.

Distinctions clés :
• Pas True.

Fonctionnement :
• isinstance vérifie méthodes de mutation.

Exécution étape par étape :
• print False.

Ordre des opérations :
• import MutableSet puis frozenset().

Cas d'utilisation courants :
• Choisir bon ABC pour APIs set/dataset.

Cas limites :
• frozenset méthodes « similaires » mais pas add.

Considérations de performance :
• N/A.

Exemples :
• isinstance(set(), MutableSet) True.

Remarques :
• Réponse : False — 1re option.`,

  2948: `isinstance(lambda: None, Callable)

Débutant :
• True : fonctions ont __call__.

Intermédiaire :
• print, méthodes, classes avec __call__, lambdas.

Expert :
• 42 n'est pas Callable.

Concepts clés :
• ABC Callable ~ objets invoquables.

Distinctions clés :
• Pas False.

Fonctionnement :
• isinstance détecte __call__ sur le type.

Exécution étape par étape :
• print True.

Ordre des opérations :
• lambda créée puis test.

Cas d'utilisation courants :
• Callbacks typés.

Cas limites :
• Typage générique Callable[[int], str] au-delà.

Considérations de performance :
• N/A.

Exemples :
• isinstance(Adder(), Callable) avec __call__.

Remarques :
• Réponse : True — 1re option.`,

  2949: `Plusieurs Protocols à la fois pour une classe ?

Débutant :
• Oui : implémenter l'union des méthodes requises.

Intermédiaire :
• Pas d'héritage multiple de Protocol nécessaire.

Expert :
• Widget drawable + resizable banque.

Concepts clés :
• Composition structurelle multi-contrats.

Distinctions clés :
• Pas une seule interface à la fois.

Fonctionnement :
• Type checker vérifie chaque annotation séparément.

Exécution étape par étape :
• Passage de Widget là où Drawable ou Resizable attendu.

Ordre des opérations :
• Définir plusieurs Protocol puis classe unique.

Cas d'utilisation courants :
• Composants UI riches.

Cas limites :
• Méthodes aux signatures incompatibles : impossible.

Considérations de performance :
• N/A.

Exemples :
• draw + resize sur Widget.

Remarques :
• Réponse : oui, toutes les méthodes requises — 1re option.`,

  2950: `Protocol Printable avec __str__ -> str — combien d'objets ?

Débutant :
• Tous : object définit un __str__ par défaut ; chaque instance a une représentation.

Intermédiaire :
• Sous-classes peuvent override __str__ mais conservent la méthode.

Expert :
• Le protocole est donc trivialement large ; utile pédagogiquement.

Concepts clés :
• Racine unique object du modèle.

Distinctions clés :
• Pas seulement str ni seulement customs.

Fonctionnement :
• isinstance runtime dépend de @runtime_checkable ; question = capacité structurelle.

Exécution étape par étape :
• str(42), str([]), str(None) tous valides.

Ordre des opérations :
• Naissance objet puis str().

Cas d'utilisation courants :
• Logging, concaténation, f-strings.

Cas limites :
• __str__ levant exception : rare et mauvaise pratique.

Considérations de performance :
• str peut allouer.

Exemples :
• class Empty: pass puis str(Empty()).

Remarques :
• Réponse : tous les objets (héritage object.__str__) — 1re option.`,
};
