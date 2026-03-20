/** Level 6 FR 2026–2050 — level6_expert_a.ts Q26–50 (defaultdict, OrderedDict) */
export default {
  2026: `defaultdict(int) et clé manquante

Débutant :
• La fabrique int est appelée : int() vaut 0, stocké sous "x".

Intermédiaire :
• Après accès, d contient la clé "x" avec valeur 0.

Expert :
• Pattern standard pour compteurs sans setdefault.

Concepts clés :
• default_factory, int callable, __missing__.

Distinctions clés :
• dict nu lèverait KeyError sur la même lecture.

Fonctionnement :
• Accès déclenche création puis retour de la valeur par défaut.

Exécution étape par étape :
1. Retour 0 et effet de bord d["x"]=0.

Ordre des opérations :
• defaultdict(int) puis sous-script.

Cas d'utilisation courants :
• Histogrammes, fréquences, graphes avec degré 0.

Cas limites :
• Ne pas utiliser int si vous vouliez None par défaut.

Considérations de performance :
• Coût d’un appel int() par nouvelle clé.

Exemples :
• d[k] += 1 dans une boucle.

Remarques :
• Réponse : 0.`,

  2027: `defaultdict(list)

Débutant :
• list() produit une liste vide associée à "a" au premier accès.

Intermédiaire :
• La même liste est réutilisée aux accès suivants sur "a".

Expert :
• Remplace le motif setdefault(k,[]).append.

Concepts clés :
• Fabrique list, mutabilité de la valeur par défaut.

Distinctions clés :
• Une nouvelle liste par nouvelle clé, pas une liste partagée globale entre clés.

Fonctionnement :
• __missing__ appelle list() et mémorise le résultat.

Exécution étape par étape :
1. d["a"] vaut [].

Ordre des opérations :
• Création du defaultdict puis premier accès.

Cas d'utilisation courants :
• Regroupements clé → liste d’éléments.

Cas limites :
• Accès concurrent lecture/écriture classique dict.

Considérations de performance :
• Une allocation liste par nouvelle clé.

Exemples :
• Index inversé mot → positions.

Remarques :
• Réponse : [].`,

  2028: `defaultdict(set) avec add

Débutant :
• Première utilisation de d["a"] crée un set vide, puis add(1) et add(2).

Intermédiaire :
• L’ordre d’itération du set n’est pas garanti mais le contenu est {1,2}.

Expert :
• Chaînage d["a"].add sans KeyError.

Concepts clés :
• Fabrique set, méthode add in-place.

Distinctions clés :
• list.append vs set.add.

Fonctionnement :
• Création du set puis mutations.

Exécution étape par étape :
1. d["a"] affiche {1, 2}.

Ordre des opérations :
• defaultdict(set), deux add, lecture.

Cas d'utilisation courants :
• Adjacence sans doublons par nœud.

Cas limites :
• Éléments non hashables interdits dans le set.

Considérations de performance :
• Hash des éléments ajoutés.

Exemples :
• Graphe non orienté avec set de voisins.

Remarques :
• Réponse : {1, 2}.`,

  2029: `Boucle sur "hello" avec defaultdict(int)

Débutant :
• Chaque caractère incrémente son compteur ; l est vu deux fois → 2.

Intermédiaire :
• Équivalent logique à Counter("hello") pour les lettres présentes.

Expert :
• Plus verbeux mais contrôle total sur la logique dans la boucle.

Concepts clés :
• += sur valeur par défaut 0.

Distinctions clés :
• Counter gère déjà ce cas en une ligne.

Fonctionnement :
• h,e,l,l,o incrémentent chacun leur slot.

Exécution étape par étape :
1. d["l"] == 2.

Ordre des opérations :
• defaultdict, for, +=, lecture.

Cas d'utilisation courants :
• Comptage avec filtre ou normalisation dans la boucle.

Cas limites :
• Oublier defaultdict → KeyError sur +=.

Considérations de performance :
• Un tour de boucle par caractère.

Exemples :
• Compter après lower() ou strip().

Remarques :
• Réponse : 2.`,

  2030: `defaultdict(list) et append

Débutant :
• Une seule liste pour "a" ; deux append sur le même objet → [1,2].

Intermédiaire :
• Pas deux listes séparées pour la même clé sans nouvel accès structurant.

Expert :
• Pattern « groupement » très courant.

Concepts clés :
• Référence partagée à la liste par clé.

Distinctions clés :
• Si vous aviez besoin de copies indépendantes, il faudrait autre logique.

Fonctionnement :
• Premier d["a"] crée [], append mutent cette liste.

Exécution étape par étape :
1. [1, 2].

Ordre des opérations :
• defaultdict(list), deux append chaînés, lecture.

Cas d'utilisation courants :
• Inverted index, regroupement d’événements par id.

Cas limites :
• Clé jamais touchée → pas de liste créée.

Considérations de performance :
• Append amortized O(1).

Exemples :
• d[userid].append(timestamp).

Remarques :
• Réponse : [1, 2].`,

  2031: `lambda comme default_factory

Débutant :
• Clé absente appelle lambda → chaîne "N/A" stockée et retournée.

Intermédiaire :
• Toute callable sans argument peut servir de fabrique.

Expert :
• Attention aux fabriques avec effets de bord involontaires.

Concepts clés :
• lambda, valeur défaut personnalisée.

Distinctions clés :
• Pas limité à int, list, set.

Fonctionnement :
• __missing__ invoque la lambda.

Exécution étape par étape :
1. "N/A".

Ordre des opérations :
• defaultdict(lambda...) puis ["missing"].

Cas d'utilisation courants :
• Valeur sentinelle lisible pour clés optionnelles.

Cas limites :
• lambda: [] créerait une nouvelle liste par clé (souvent voulu).

Considérations de performance :
• Coût d’un appel Python par nouvelle clé.

Exemples :
• defaultdict(lambda: -1) pour grille infinie logique.

Remarques :
• Réponse : "N/A".`,

  2032: `Accès successifs créent les clés

Débutant :
• d["a"] et d["b"] forcent chacun la fabrique → deux entrées.

Intermédiaire :
• len compte donc 2 même si on n’a « rien assigné » explicitement avec =.

Expert :
• Piège : simple lecture crée la clé.

Concepts clés :
• Effet de bord de __getitem__ sur defaultdict.

Distinctions clés :
• Tester avec in ou get pour éviter la création.

Fonctionnement :
• Deux déclenchements de int().

Exécution étape par étape :
1. len(d) == 2.

Ordre des opérations :
• Création, deux accès, len.

Cas d'utilisation courants :
• Savoir si une clé a été « touchée » pour de vrai.

Cas limites :
• Parcourir toutes les clés inclut les zéros créés par erreur.

Considérations de performance :
• Deux insertions en plus des lectures.

Exemples :
• Déboguer des defaultdict trop remplis.

Remarques :
• Réponse : 2.`,

  2033: `Opérateur in sur defaultdict vide

Débutant :
• "x" in d utilise __contains__, ne fabrique pas de valeur.

Intermédiaire :
• d reste vide après le test.

Expert :
• Toujours préférer in avant d’itérer si vous voulez éviter les clés fantômes.

Concepts clés :
• Membership vs accès par crochets.

Distinctions clés :
• d["x"] aurait créé 0.

Fonctionnement :
• Vérification pure de présence de clé.

Exécution étape par étape :
1. False.

Ordre des opérations :
• defaultdict puis in.

Cas d'utilisation courants :
• Branches conditionnelles sans pollution du mapping.

Cas limites :
• defaultdict sans factory (None) se comporte autrement pour défaut.

Considérations de performance :
• Hash lookup O(1) amortized.

Exemples :
• if k in d: ... else: première assignation contrôlée.

Remarques :
• Réponse : False.`,

  2034: `get sur defaultdict(int)

Débutant :
• dict.get sans second argument renvoie None si la clé est absente, sans appeler la fabrique.

Intermédiaire :
• d["x"] donnerait 0 ; d.get("x") donne None — piège classique.

Expert :
• Utiliser get(..., 0) si vous voulez zéro sans créer la clé : attention, second argument explicite.

Concepts clés :
• get contourne __missing__.

Distinctions clés :
• Création de clé seulement avec crochets ou méthodes équivalentes.

Fonctionnement :
• Recherche directe sans fabrique.

Exécution étape par étape :
1. None.

Ordre des opérations :
• defaultdict puis .get("x").

Cas d'utilisation courants :
• Lecture optionnelle sans effet de bord.

Cas limites :
• get avec défaut explicite change le résultat.

Considérations de performance :
• Rapide, pas d’allocation fabrique.

Exemples :
• d.get(k, 0) pour lecture sans insertion.

Remarques :
• Réponse : None.`,

  2035: `Crochets vs get

Débutant :
• d["x"] crée "x":0 ; get("y") ne crée pas y.

Intermédiaire :
• Une seule clé dans d au final.

Expert :
• Règle : crochets créent, get et in non.

Concepts clés :
• Comparaison des chemins d’accès.

Distinctions clés :
• len serait 2 si on avait aussi fait d["y"].

Fonctionnement :
• Une insertion pour x, aucune pour y.

Exécution étape par étape :
1. len(d) == 1.

Ordre des opérations :
• ["x"], get("y"), len.

Cas d'utilisation courants :
• API où certaines clés sont « lazy » et d’autres non.

Cas limites :
• Mélanger styles dans le même code → confusion.

Considérations de performance :
• Moins de clés = moins de mémoire.

Exemples :
• Parser avec tokens optionnels.

Remarques :
• Réponse : 1.`,

  2036: `isinstance(defaultdict(int), dict)

Débutant :
• defaultdict hérite de dict → True.

Intermédiaire :
• Toutes les méthodes dict de base sont disponibles.

Expert :
• isinstance accepte les sous-classes ; type(dd) is dict serait False.

Concepts clés :
• Sous-typage, introspection.

Distinctions clés :
• UserDict pourrait ne pas être un dict direct.

Fonctionnement :
• Parcours MRO.

Exécution étape par étape :
1. True.

Ordre des opérations :
• isinstance après import.

Cas d'utilisation courants :
• Valider paramètre mapping dans une fonction.

Cas limites :
• Protocols typing Mapping vs runtime.

Considérations de performance :
• Négligeable.

Exemples :
• isinstance(x, (dict, defaultdict)).

Remarques :
• Réponse : True.`,

  2037: `defaultdict(int, a=1, b=2) et clé nouvelle

Débutant :
• c absent : fabrique int → 0, puis +=5 → 5.

Intermédiaire :
• a et b restent 1 et 2 ; seul c est créé par l’opération.

Expert :
• Les valeurs initiales ne passent pas par la fabrique.

Concepts clés :
• Arguments nommés initiaux + fabrique pour le reste.

Distinctions clés :
• += lit puis écrit la nouvelle valeur 5.

Fonctionnement :
• 0 + 5 sur la clé c.

Exécution étape par étape :
1. d["c"] == 5.

Ordre des opérations :
• Constructeur, += sur clé manquante, lecture.

Cas d'utilisation courants :
• Config partielle avec compteurs dynamiques.

Cas limites :
• Réassigner default_factory plus tard change les prochains manquants.

Considérations de performance :
• Une insertion pour c.

Exemples :
• Compteurs par défaut 0 avec quelques compteurs pré-chargés.

Remarques :
• Réponse : 5.`,

  2038: `Attribut default_factory

Débutant :
• Pour defaultdict(int), l’attribut pointe vers le type int lui-même.

Intermédiaire :
• Repr affiche classique classe int.

Expert :
• On peut appeler d.default_factory() pour voir la valeur brute fabriquée.

Concepts clés :
• Attribut public, callable stocké.

Distinctions clés :
• Ce n’est pas encore la valeur 0, c’est le constructeur.

Fonctionnement :
• Lecture d’attribut après construction.

Exécution étape par étape :
1. Affichage du type int.

Ordre des opérations :
• defaultdict(int) puis .default_factory.

Cas d'utilisation courants :
• Sérialisation, introspection, tests.

Cas limites :
• default_factory None désactive la création automatique (KeyError revient).

Considérations de performance :
• Lecture simple.

Exemples :
• Vérifier qu’une fabrique est bien list.

Remarques :
• Réponse : <class 'int'> (forme du QCM).`,

  2039: `Changer default_factory à l’exécution

Débutant :
• On part de defaultdict(int) vide, on remplace default_factory par list, puis d["a"] : clé absente → list() → [].

Intermédiaire :
• Aucune clé n’existait avant ; seul le premier accès "a" déclenche la nouvelle fabrique.

Expert :
• Les entrées créées avec l’ancienne fabrique gardent leur type si vous en aviez avant le changement (hors énoncé).

Concepts clés :
• Réassignation de default_factory, effet sur les prochains accès manquants.

Distinctions clés :
• Si default_factory restait int, d["a"] aurait été 0.

Fonctionnement :
• list() sans argument produit une liste vide stockée sous "a".

Exécution étape par étape :
1. Retour [].

Ordre des opérations :
• defaultdict(int), assignation default_factory=list, d["a"].

Cas d'utilisation courants :
• Bascule dynamique entre comptage et accumulation par clé.

Cas limites :
• default_factory=None désactive la création automatique (KeyError).

Considérations de performance :
• Un appel list() par nouvelle clé après changement.

Exemples :
• Réassigner à set pour passer à des ensembles par clé.

Remarques :
• Réponse : [].`,

  2040: `dict(defaultdict(int) vide)

Débutant :
• Aucune paire à copier → dict vide classique.

Intermédiaire :
• Le defaultdict perd son default_factory dans le dict résultat.

Expert :
• Lecture de clé manquante sur le dict final → KeyError.

Concepts clés :
• Copie superficielle des items, pas du comportement.

Distinctions clés :
• Le defaultdict source reste inchangé avec sa fabrique.

Fonctionnement :
• dict() itère sur items() vides.

Exécution étape par étape :
1. {}.

Ordre des opérations :
• defaultdict puis dict().

Cas d'utilisation courants :
• Passer à une API stricte dict.

Cas limites :
• Si le defaultdict avait des clés, elles seraient copiées.

Considérations de performance :
• Instantané pour vide.

Exemples :
• json.dumps(dict(dd)).

Remarques :
• Réponse : {}.`,

  2041: `Dict ordonnés en Python 3.7+

Débutant :
• Oui : l’ordre d’insertion est garanti par le langage depuis 3.7.

Intermédiaire :
• En 3.6 CPython c’était déjà vrai mais détail d’implémentation ; 3.7+ spec.

Expert :
• OrderedDict reste utile pour égalité sensible à l’ordre et move_to_end.

Concepts clés :
• Insertion order, sémantique du langage.

Distinctions clés :
• Pas réservé aux clés str.

Fonctionnement :
• Structure interne conserve la séquence d’ajout.

Exécution étape par étape :
1. Réponse conceptuelle Oui.

Ordre des opérations :
• Question de culture Python, pas d’expression à évaluer.

Cas d'utilisation courants :
• Prédictibilité des tests et sérialisation JSON récente.

Cas limites :
• Réinsérer une clé supprimée la place en fin.

Considérations de performance :
• Légère surcharge vs anciennes versions sans ordre.

Exemples :
• list(d) reflète l’ordre d’insertion.

Remarques :
• Réponse : Yes (première option du quiz anglais) — équivalent : Oui.`,

  2042: `OrderedDict(a=1,b=2) et list(od)

Débutant :
• list sur un mapping renvoie les clés dans l’ordre d’insertion : a puis b.

Intermédiaire :
• Même résultat qu’un dict moderne pour cet exemple simple.

Expert :
• Pour valeurs, utiliser list(od.values()).

Concepts clés :
• Itération clés, OrderedDict.

Distinctions clés :
• Ne pas confondre avec liste de paires items.

Fonctionnement :
• Parcours de l’ordre interne a→b.

Exécution étape par étape :
1. ['a', 'b'].

Ordre des opérations :
• OrderedDict kwargs, list().

Cas d'utilisation courants :
• Préserver l’ordre logique des champs.

Cas limites :
• kwargs Python 3.6+ gardent l’ordre d’écriture dans l’appel.

Considérations de performance :
• Linéaire en nombre de clés.

Exemples :
• Pipeline ETL avec colonnes ordonnées.

Remarques :
• Réponse : ['a', 'b'].`,

  2043: `move_to_end("a") par défaut

Débutant :
• a était premier ; on le pousse à la fin → ordre b, a.

Intermédiaire :
• last=True par défaut.

Expert :
• Méthode absente des dict standards.

Concepts clés :
• Réordonnancement O(1) amortized.

Distinctions clés :
• Ne change pas les valeurs, seulement la position de la clé.

Fonctionnement :
• Déplacer le nœud a après b.

Exécution étape par étape :
1. ['b', 'a'].

Ordre des opérations :
• Construction, move_to_end, list.

Cas d'utilisation courants :
• LRU, files avec priorités manipulées.

Cas limites :
• KeyError si clé absente.

Considérations de performance :
• Efficace comparé à reconstruire un dict.

Exemples :
• Remonter un élément récemment utilisé en fin.

Remarques :
• Réponse : ['b', 'a'].`,

  2044: `move_to_end("b", last=False)

Débutant :
• b va au début → b, a.

Intermédiaire :
• Symétrique de la variante last=True.

Expert :
• Utile pour têtes de file FIFO explicites.

Concepts clés :
• Paramètre last, extrémité gauche.

Distinctions clés :
• Même résultat visuel que Q43 pour cet enchaînement de clés (b,a).

Fonctionnement :
• Insérer b avant a.

Exécution étape par étape :
1. ['b', 'a'].

Ordre des opérations :
• OrderedDict, move_to_end avec False, list.

Cas d'utilisation courants :
• Remettre un élément « frais » en tête.

Cas limites :
• Clé manquante → exception.

Considérations de performance :
• Opération locale sur liste chaînée interne.

Exemples :
• File d’attente avec recycle en tête.

Remarques :
• Réponse : ['b', 'a'].`,

  2045: `Égalité OrderedDict et ordre

Débutant :
• Mêmes paires mais ordre d’insertion a,b vs b,a → OrderedDict dit non.

Intermédiaire :
• Deux dict normaux équivalents seraient True.

Expert :
• Tests unitaires sur APIs ordonnées.

Concepts clés :
• Égalité sensible à l’ordre pour OrderedDict.

Distinctions clés :
• == entre OrderedDict et dict utilise règles mixtes (voir doc) ; ici deux OrderedDict.

Fonctionnement :
• Comparaison paire à paire avec position.

Exécution étape par étape :
1. False.

Ordre des opérations :
• Construction de deux OrderedDict puis ==.

Cas d'utilisation courants :
• Vérifier canon exact de paramètres.

Cas limites :
• Comparaison OrderedDict avec dict ordinaire : règles spécifiques.

Considérations de performance :
• Linéaire en taille.

Exemples :
• Signature ordonnée pour cache.

Remarques :
• Réponse : False.`,

  2046: `Égalité dict sans ordre

Débutant :
• Les paires a:1 et b:2 sont les mêmes ; l’ordre d’écriture du littéral n’importe pas.

Intermédiaire :
• Depuis 3.7 l’ordre est conservé mais n’entre pas dans ==.

Expert :
• Tests d’égalité de mapping « logique ».

Concepts clés :
• == sur dict, multiset fini de paires.

Distinctions clés :
• Contrast avec Q45.

Fonctionnement :
• Vérification bijective des clés et valeurs.

Exécution étape par étape :
1. True.

Ordre des opérations :
• Deux littéraux puis ==.

Cas d'utilisation courants :
• Comparer JSON décodé ou kwargs reconstruits.

Cas limites :
• Valeurs non égales → False.

Considérations de performance :
• Linéaire.

Exemples :
• Fusion de configs sans ordre imposé.

Remarques :
• Réponse : True.`,

  2047: `OrderedDict.popitem(last=True)

Débutant :
• Dernier inséré est b → retire (b,2).

Intermédiaire :
• Comportement LIFO sur la séquence ordonnée.

Expert :
• od ne contient plus que a après coup.

Concepts clés :
• popitem avec last, tuple retourné.

Distinctions clés :
• dict.popitem() n’a pas le paramètre last mais retire en fin depuis 3.7.

Fonctionnement :
• Suppression du dernier nœud.

Exécution étape par étape :
1. ('b', 2).

Ordre des opérations :
• popitem(last=True) défaut explicite ou implicite.

Cas d'utilisation courants :
• Pile sur structure ordonnée.

Cas limites :
• OrderedDict vide → KeyError.

Considérations de performance :
• O(1) amortized.

Exemples :
• Undo stack de clés.

Remarques :
• Réponse : ('b', 2).`,

  2048: `OrderedDict.popitem(last=False)

Débutant :
• Premier inséré est a → retire (a,1).

Intermédiaire :
• FIFO au sens de la structure ordonnée.

Expert :
• Impossible avec seul dict.popitem() standard (toujours fin).

Concepts clés :
• popitem last=False, extrémité début.

Distinctions clés :
• Contraste direct avec Q47.

Fonctionnement :
• Suppression tête de chaîne.

Exécution étape par étape :
1. ('a', 1).

Ordre des opérations :
• popitem(False).

Cas d'utilisation courants :
• Files d’attente ordonnées.

Cas limites :
• Un seul élément → le retire et vide.

Considérations de performance :
• O(1) amortized.

Exemples :
• Traitement batch ordonné.

Remarques :
• Réponse : ('a', 1).`,

  2049: `dict.popitem() standard

Débutant :
• Ordre d’insertion a,b,c → le dernier est c → ('c',3).

Intermédiaire :
• LIFO cohérent avec 3.7+.

Expert :
• Pas d’argument last=False pour revenir en tête.

Concepts clés :
• popitem sur dict built-in.

Distinctions clés :
• vs OrderedDict.popitem(last=False).

Fonctionnement :
• Retrait dernier slot logique.

Exécution étape par étape :
1. ('c', 3).

Ordre des opérations :
• Littéral dict, popitem.

Cas d'utilisation courants :
• Dépilement rapide d’un dernier réglage.

Cas limites :
• dict vide → KeyError.

Considérations de performance :
• O(1) amortized.

Exemples :
• Tant que d: k,v = d.popitem().

Remarques :
• Réponse : ('c', 3).`,

  2050: `Mise à jour de valeur OrderedDict

Débutant :
• Changer od["a"] à 10 ne déplace pas la clé a : ordre des clés reste a,b.

Intermédiaire :
• Seule l’ajout d’une nouvelle clé va en queue.

Expert :
• move_to_end si on veut repousser a après modification.

Concepts clés :
• Mise à jour in-place, stabilité de position.

Distinctions clés :
• del puis réinsertion recollerait a la fin.

Fonctionnement :
• Remplacement de la valeur associée au slot a.

Exécution étape par étape :
1. ['a', 'b'].

Ordre des opérations :
• OrderedDict, assignation, list.

Cas d'utilisation courants :
• Caches avec métadonnées mises à jour sans perdre la place.

Cas limites :
• Si réinsertion explicite, l’ordre change.

Considérations de performance :
• Mise à jour O(1) amortized.

Exemples :
• Compteurs LRU avec timestamp dans la valeur.

Remarques :
• Réponse : ['a', 'b'].`,
};
