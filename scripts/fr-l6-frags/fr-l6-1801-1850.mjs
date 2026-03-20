/** Level 6 FR 1801–1850 — dictionnaires (level6.ts Q1–50). Aligné sur QUESTIONS_BANK 1801–1850. */
export default {
  1801: `Littéral de dictionnaire

Débutant :
• {'a': 1, 'b': 2} est un dict à deux entrées : la clé 'a' vaut 1, 'b' vaut 2.
• Les accolades avec des paires clé:valeur construisent un dictionnaire.

Intermédiaire :
• Les clés doivent être hachables (souvent str, int, tuple immuable) ; les valeurs peuvent être de tout type.
• En CPython 3.7+, l’ordre d’insertion est conservé (comportement du langage à partir de 3.7).

Expert :
• Chaque paire est stockée dans une table de hachage : accès moyen O(1) pour lecture par clé.

Concepts clés :
• Mapping clé → valeur, type dict, littéral {clé: valeur, ...}.

Distinctions clés :
• Dict vs liste (accès par indice) vs ensemble (pas de valeurs associées) vs tuple (fixe, ordonné).

Fonctionnement :
• Python construit un objet dict et y enregistre les paires dans l’ordre du littéral.

Exécution étape par étape :
1. Création du conteneur dict.
2. Insertion de 'a': 1 puis 'b': 2.
3. L’expression a pour valeur ce dict.

Ordre des opérations :
• Pas d’appel : évaluation directe du littéral.

Cas d'utilisation courants :
• Configurations, index par identifiant, caches simples clé → valeur.

Cas limites :
• Clés dupliquées dans un même littéral : la dernière occurrence l’emporte.

Considérations de performance :
• Petits dicts : coût négligeable ; éviter de recréer des très gros dicts en boucle serrée.

Exemples :
• type({'a': 1}) → <class 'dict'>
• {'x': 10}['x'] → 10

Remarques :
• La bonne réponse est « un dictionnaire », pas une liste ni un tuple.`,

  1802: `Dictionnaire vide {}

Débutant :
• {} en Python est un dictionnaire vide (zéro paire), pas un ensemble.
• len({}) vaut 0 ; bool({}) est faux.

Intermédiaire :
• Pour un ensemble vide on utilise set() car {} est réservé au dict vide.

Expert :
• {} et dict() produisent tous deux un dict vide ; même type, objets distincts si créés séparément.

Concepts clés :
• Littéral vide, dict de longueur 0, vérité booléenne.

Distinctions clés :
• {} vs set() vs frozenset() ; ne pas confondre avec tuple vide ().

Fonctionnement :
• Le parseur voit des accolades sans paire clé:valeur et instancie un dict vide.

Exécution étape par étape :
1. Construction du dict sans entrées.
2. Valeur : {}.

Ordre des opérations :
• Littéral évalué en une fois.

Cas d'utilisation courants :
• Point de départ avant d’ajouter des clés dynamiquement.

Cas limites :
• Accès d['clé'] sur {} lève KeyError.

Considérations de performance :
• Réutiliser et mettre à jour un dict peut éviter d’allouer souvent de nouveaux {}.

Exemples :
• d = {}; d['k'] = 1 → {'k': 1}

Remarques :
• Réponse attendue : dictionnaire vide.`,

  1803: `dict() sans argument

Débutant :
• dict() crée un nouveau dictionnaire vide, comme {}.

Intermédiaire :
• C’est le constructeur du type dict ; d’autres formes acceptent itérables de paires ou arguments nommés.

Expert :
• dict() et {} sont équivalents fonctionnellement pour « vide » ; choix surtout stylistique.

Concepts clés :
• Constructeur dict(), dict vide, équivalence avec {}.

Distinctions clés :
• dict() vs {} (littéral) ; les deux donnent un dict vide.

Fonctionnement :
• Appel de type sans argument → nouvel objet dict sans paires.

Exécution étape par étape :
1. Allocation d’un dict.
2. Retour de l’objet vide.

Ordre des opérations :
• Appel de fonction : évaluation des arguments (ici aucun) puis construction.

Cas d'utilisation courants :
• Code qui généralise « construire un dict » avec la même syntaxe que les autres signatures.

Cas limites :
• dict(None) lève une erreur ; seul l’appel sans argument donne {}.

Considérations de performance :
• Identique à {} pour un dict vide.

Exemples :
• dict() == {} → True (même contenu, objets différents : id différent en général)

Remarques :
• La réponse affichée est souvent représentée comme {}.`,

  1804: `dict() depuis une liste de tuples

Débutant :
• dict([('a', 1), ('b', 2)]) produit {'a': 1, 'b': 2}.
• Chaque élément de la liste doit être une paire (clé, valeur).

Intermédiaire :
• Tout itérable de paires (deux éléments) convient : tuples 2-uples, listes de deux éléments, etc.

Expert :
• Si une clé apparaît deux fois, la dernière valeur gagne (comme en fusion de dict).

Concepts clés :
• Constructeur depuis itérable de paires, conversion vers dict.

Distinctions clés :
• Une liste seule n’est pas un dict ; il faut des paires (clé, valeur).

Fonctionnement :
• dict parcourt l’itérable et insère chaque (k, v) dans le nouveau dict.

Exécution étape par étape :
1. Création du dict cible.
2. Pour ('a',1) puis ('b',2) : insertion des paires.
3. Retour du dict rempli.

Ordre des opérations :
• D’abord l’argument itérable est évalué/construit, puis le constructeur consomme ses éléments.

Cas d'utilisation courants :
• Convertir le résultat de DB ou CSV (colonnes clé/valeur) en dict.

Cas limites :
• Élément d’une seule valeur ou de plus de deux : TypeError.

Considérations de performance :
• O(n) sur le nombre de paires.

Exemples :
• dict([('x', 0)]) → {'x': 0}

Remarques :
• Aligné sur la question : même contenu que le littéral {'a':1,'b':2}.`,

  1805: `dict() avec arguments nommés

Débutant :
• dict(a=1, b=2) crée {'a': 1, 'b': 2} ; les noms deviennent des clés str.

Intermédiaire :
• Les identifiants doivent être des noms de variables Python valides (pas d’espace, pas de tiret).

Expert :
• Les clés sont toujours des str ici ; utile pour prototypes rapides, moins pour clés non identifiants.

Concepts clés :
• Mot-clés → clés str, constructeur dict, sucre syntaxique.

Distinctions clés :
• dict(a=1) vs {a: 1} si a est une variable : le second utilise la valeur de a comme clé.

Fonctionnement :
• Le constructeur mappe chaque nom de paramètre à sa valeur dans le dict.

Exécution étape par étape :
1. Interprétation des kwargs comme paires ('a',1), ('b',2).
2. Construction du dict.
3. Retour {'a':1,'b':2}.

Ordre des opérations :
• Évaluation des valeurs des arguments nommés avant l’appel.

Cas d'utilisation courants :
• Construire vite un petit dict dont les clés sont des identifiants simples.

Cas limites :
• Clés comme 'class' possibles en kwargs mais attention aux mots réservés en syntaxe alternative.

Considérations de performance :
• Comparable à un petit littéral.

Exemples :
• dict(x=10) → {'x': 10}

Remarques :
• Réponse : équivalent au dict littéral avec les mêmes paires.`,

  1806: `Accès par clé existante ['a']

Débutant :
• {'a': 1, 'b': 2}['a'] vaut 1 : on lit la valeur associée à la clé 'a'.

Intermédiaire :
• Les crochets exigent une clé présente sinon KeyError (contrairement à .get()).

Expert :
• __getitem__ du dict : recherche par hachage de la clé.

Concepts clés :
• Indexation par clé, lecture O(1) en moyenne.

Distinctions clés :
• d['a'] vs d.get('a') pour clé absente : exception vs None/défaut.

Fonctionnement :
• Python hache 'a', trouve l’emplacement, retourne la valeur 1.

Exécution étape par étape :
1. Évaluation du dict puis de la clé 'a'.
2. Recherche de la clé.
3. Retour de la valeur 1.

Ordre des opérations :
• D’abord l’objet dict, puis l’opération [].

Cas d'utilisation courants :
• Lecture directe quand la clé est garantie (souvent après un test in).

Cas limites :
• Clé manquante → KeyError.

Considérations de performance :
• Très rapide pour dicts standards en CPython.

Exemples :
• {'x': 42}['x'] → 42

Remarques :
• Réponse attendue : 1.`,

  1807: `Accès par une autre clé ['b']

Débutant :
• {'a': 1, 'b': 2}['b'] vaut 2.

Intermédiaire :
• Chaque clé est indépendante ; l’ordre d’insertion n’change pas le résultat d’un accès par clé fixe.

Expert :
• Deux accès successifs sur la même clé relisent la même entrée (sauf si le dict a été muté entre-temps).

Concepts clés :
• Sélection de valeur par clé str 'b'.

Distinctions clés :
• Ne pas confondre avec l’accès par position (liste).

Fonctionnement :
• Recherche de 'b' → valeur 2.

Exécution étape par étape :
1. Dict évalué.
2. Clé 'b' résolue.
3. Retour 2.

Ordre des opérations :
• Sous-expression dict puis [].

Cas d'utilisation courants :
• Champs nommés : prix = row['prix'].

Cas limites :
• Typo de clé → KeyError.

Considérations de performance :
• Identique à tout accès [] réussi.

Exemples :
• {'b': 0}['b'] → 0

Remarques :
• Réponse : 2.`,

  1808: `Clé absolente avec []

Débutant :
• {'a': 1, 'b': 2}['c'] lève KeyError : la clé 'c’ n’existe pas.

Intermédiaire :
• Pour éviter l’exception : 'c' in d, d.get('c'), ou try/except KeyError.

Expert :
• Le message d’erreur inclut la clé manquante (utile au débogage).

Concepts clés :
• KeyError, accès strict, contrat de [] sur dict.

Distinctions clés :
• [] vs .get('c') qui retourne None sans lever d’erreur.

Fonctionnement :
• Recherche de 'c' échoue → mécanisme d’exception.

Exécution étape par étape :
1. Évaluation du dict.
2. Tentative de récupération de 'c'.
3. Échec → KeyError.

Ordre des opérations :
• L’accès [] est atomique ; pas de valeur partielle.

Cas d'utilisation courants :
• Code où une clé absente est une erreur de programme → [] est adapté.

Cas limites :
• Clé None ou non hachable interdite comme clé (hors cas de cette question).

Considérations de performance :
• L’échec est détecté après la recherche (coût proche d’un succès).

Exemples :
• d = {}; d['x']  # KeyError

Remarques :
• Réponse : KeyError.`,

  1809: `len() sur un dict

Débutant :
• len({'a': 1, 'b': 2}) vaut 2 : on compte le nombre de paires clé-valeur.

Intermédiaire :
• Ce n’est ni le nombre de clés + valeurs séparément comptées, ni la « taille en mémoire ».

Expert :
• len appelle la longueur du mapping (cardinal de l’ensemble des clés).

Concepts clés :
• Cardinalité du dict, comptage des entrées.

Distinctions clés :
• len(d) vs len(list(d.keys())) — équivalent en nombre.

Fonctionnement :
• Parcourt ou lit le compteur interne selon l’implémentation CPython.

Exécution étape par étape :
1. dict évalué.
2. len interroge la taille.
3. Retour 2.

Ordre des opérations :
• Appel de fonction len après évaluation de l’argument.

Cas d'utilisation courants :
• Vérifier si un cache contient déjà des entrées.

Cas limites :
• len({}) == 0.

Considérations de performance :
• O(1) en CPython pour la plupart des dicts.

Exemples :
• len({'k': None}) → 1

Remarques :
• Réponse : 2.`,

  1810: `len({})

Débutant :
• len({}) est 0 : dictionnaire sans aucune paire.

Intermédiaire :
• Un dict vide reste un objet valide ; on peut y assigner tout de suite.

Expert :
• Deux dicts vides ont contenu égal mais peuvent être des objets distincts.

Concepts clés :
• Dict vide, longueur nulle.

Distinctions clés :
• len({}) vs len(()) vs len([]) — tous 0 mais types différents.

Fonctionnement :
• len sur dict vide retourne 0 immédiatement.

Exécution étape par étape :
1. {} construit.
2. len → 0.

Ordre des opérations :
• Littéral puis appel len.

Cas d'utilisation courants :
• Initialisation avant accumulation.

Cas limites :
• Après clear(), len repasse à 0 sur le même objet.

Considérations de performance :
• Négligeable.

Exemples :
• bool({}) → False

Remarques :
• Réponse : 0.`,

  1811: `.get('a') clé présente

Débutant :
• {'a': 1, 'b': 2}.get('a') retourne 1.

Intermédiaire :
• .get ne modifie pas le dict ; c’est une lecture optionnelle avec défaut implicite None si absent.

Expert :
• Utile pour éviter KeyError quand la clé peut manquer.

Concepts clés :
• Lecture sûre, valeur par défaut None, méthode get.

Distinctions clés :
• d.get('a') vs d['a'] si clé absente : 1 vs exception (pour absent).

Fonctionnement :
• Recherche de 'a' ; trouvée → retourne 1.

Exécution étape par étape :
1. Objet dict.
2. Appel .get('a').
3. Retour 1.

Ordre des opérations :
• Évaluation du récepteur puis des arguments de get.

Cas d'utilisation courants :
• Lecture de préférences optionnelles : theme = cfg.get('theme').

Cas limites :
• get('a', None) équivalent à get('a') pour absent.

Considérations de performance :
• Comparable à [] pour clé présente.

Exemples :
• {}.get('x') → None

Remarques :
• Réponse : 1.`,

  1812: `.get('c') clé absente

Débutant :
• .get('c') sur {'a':1,'b':2} retourne None car 'c’ n’existe pas et aucun défaut n’est fourni.

Intermédiaire :
• None est la valeur de retour, pas une exception.

Expert :
• Distinction importante avec [] qui lèverait KeyError.

Concepts clés :
• Défaut implicite None, absence de clé.

Distinctions clés :
• get vs [] pour clé manquante.

Fonctionnement :
• Recherche échoue → retour None sans lever.

Exécution étape par étape :
1. dict évalué.
2. get('c') : pas de 'c'.
3. Retour None.

Ordre des opérations :
• Méthode puis arguments.

Cas d'utilisation courants :
• Chaînage optionnel de lookups.

Cas limites :
• Si la valeur stockée est réellement None, get ne permet pas de distinguer « absent » de « None » sans tester la clé avec l’opérateur in.

Considérations de performance :
• Une seule recherche.

Exemples :
• d.get('missing', 0) → 0

Remarques :
• Réponse : None.`,

  1813: `.get('c', 0)

Débutant :
• Avec défaut 0, si la clé manque, .get retourne 0.

Intermédiaire :
• Le dict n’est pas modifié ; seule la valeur de retour change.

Expert :
• Le second argument est évalué à chaque appel (attention si c’est une expression coûteuse — préférer autre pattern si besoin).

Concepts clés :
• Valeur par défaut explicite, pas d’insertion de clé.

Distinctions clés :
• get(k, dflt) vs setdefault qui peut insérer.

Fonctionnement :
• 'c' absente → retour 0.

Exécution étape par étape :
1. dict puis get('c', 0).
2. Absence de 'c'.
3. Retour 0.

Ordre des opérations :
• Les arguments sont évalués avant l’appel (0 est trivial).

Cas d'utilisation courants :
• Compteurs : counts.get(word, 0) + 1.

Cas limites :
• Si 'c' existait avec valeur None, get retournerait None, pas 0.

Considérations de performance :
• Identique à get à un argument si présent.

Exemples :
• {'c': 5}.get('c', 0) → 5

Remarques :
• Réponse : 0.`,

  1814: `.get('a', 0) clé présente

Débutant :
• La clé 'a' existe, donc .get retourne sa valeur 1 ; le défaut 0 est ignoré.

Intermédiaire :
• Le défaut n’est utilisé que si la clé est absente.

Expert :
• Pattern fréquent pour normaliser des entrées partielles tout en gardant une valeur par défaut seulement si la clé manque.

Concepts clés :
• Présence de clé prime sur le défaut.

Distinctions clés :
• Diffère de l’opérateur or qui traiterait 0 ou None comme « faux » selon contexte.

Fonctionnement :
• 'a' trouvée → 1.

Exécution étape par étape :
1. Recherche 'a'.
2. Valeur 1 retournée.

Ordre des opérations :
• Court-circuit logique interne : pas d’usage du défaut.

Cas d'utilisation courants :
• Fusion « lire ou 0 » sans écraser une valeur 0 légitime stockée (ici la clé est présente).

Cas limites :
• Si la valeur était 0, get retournerait quand même 0 (correct).

Considérations de performance :
• Une recherche réussie.

Exemples :
• {'a': 0}.get('a', 99) → 0

Remarques :
• Réponse : 1.`,

  1815: `setdefault clé déjà présente

Débutant :
• {'a': 1}.setdefault('a', 2) retourne 1 : la clé existe, rien n’est écrit.

Intermédiaire :
• setdefault insère default seulement si la clé manque ; ici 'a' est là.

Expert :
• Retourne toujours la valeur associée à la clé après l’opération (existante ou nouvellement insérée).

Concepts clés :
• Insertion conditionnelle, valeur existante préservée.

Distinctions clés :
• setdefault vs get : setdefault peut muter le dict si clé absente.

Fonctionnement :
• 'a' présente → retour 1, dict inchangé {'a':1}.

Exécution étape par étape :
1. Vérification de 'a'.
2. Trouvée → retour 1 sans assigner 2.

Ordre des opérations :
• Méthode sur l’objet dict mutable.

Cas d'utilisation courants :
• Initialiser des listes dans un dict de groupes : d.setdefault(k, []).append(x).

Cas limites :
• Attention : la valeur par défaut est le même objet si réutilisé (éviter [] mutable partagé en boucle naive).

Considérations de performance :
• Une recherche ; pas d’insertion ici.

Exemples :
• {'a':1}.setdefault('a', 999) → 1

Remarques :
• Réponse : 1.`,

  1816: `setdefault crée une entrée

Débutant :
• {'a': 1}.setdefault('b', 2) retourne 2 et le dict devient {'a':1,'b':2}.

Intermédiaire :
• C’est à la fois lecture et écriture potentielle.

Expert :
• Atomique relativement à un accès test puis assign séparé en mono-thread (évite course simple dans du code synchrone basique).

Concepts clés :
• Insertion de 'b':2 si absent, retour de la valeur.

Distinctions clés :
• setdefault('b',2) vs get('b',2) : le second ne crée pas 'b'.

Fonctionnement :
• 'b' absent → enregistre 2, retourne 2.

Exécution étape par étape :
1. Clé 'b' absente.
2. Insertion (b,2).
3. Retour 2.

Ordre des opérations :
• Mutation du dict pendant l’appel.

Cas d'utilisation courants :
• Premier accès qui doit créer une valeur par défaut.

Cas limites :
• Si default est mutable et partagé, effets de bord entre clés — utiliser factory ou copie.

Considérations de performance :
• Une insertion supplémentaire vs simple get.

Exemples :
• d = {}; d.setdefault('x', 0) → 0 et d == {'x':0}

Remarques :
• Réponse affichée : 2 (valeur retournée par l’expression).`,

  1817: `Différence get vs setdefault

Débutant :
• get ne modifie jamais le dict ; setdefault ajoute la clé avec la valeur par défaut si elle manque.

Intermédiaire :
• Tous deux acceptent un défaut pour lecture, mais seul setdefault écrit.

Expert :
• Choix : get pour pure lecture ; setdefault pour « obtenir ou initialiser » en une opération.

Concepts clés :
• Pureté de lecture vs mutation, API dict.

Distinctions clés :
• Performance identique en ordre de grandeur ; sémantique différente.

Fonctionnement :
• get : lookup ; setdefault : lookup puis insertion conditionnelle.

Exécution étape par étape :
1. Identifier si la question porte sur effet de bord.
2. Si effet de bord sur absence → setdefault ; sinon get.

Ordre des opérations :
• N/A (conceptuel).

Cas d'utilisation courants :
• get pour JSON optionnel ; setdefault pour caches multi-valeurs.

Cas limites :
• Valeurs mutables par défaut : risque majeur avec setdefault et listes.

Considérations de performance :
• Insérer coûte plus qu’un simple miss de get, mais souvent négligeable.

Exemples :
• d={'a':1}; d.get('b',2); d → toujours {'a':1}

Remarques :
• La réponse attendue du QCM résume cette différence (get = pas de mutation ; setdefault = peut insérer).`,

  1818: `pop('a') retire et renvoie

Débutant :
• {'a':1,'b':2}.pop('a') retourne 1 ; le dict devient {'b':2}.

Intermédiaire :
• pop enlève la paire ; ce n’est pas seulement une lecture.

Expert :
• Deux signatures : pop(k) strict, pop(k, default) tolérant.

Concepts clés :
• Suppression par clé, valeur retournée, mutation in-place.

Distinctions clés :
• pop vs del d[k] : del ne retourne pas la valeur (expression None en statement del).

Fonctionnement :
• Trouve 'a', retire, renvoie 1.

Exécution étape par étape :
1. Localiser 'a'.
2. Détacher la paire.
3. Retourner 1.

Ordre des opérations :
• L’expression a pour valeur 1, effet de bord sur le dict.

Cas d'utilisation courants :
• File d’attente dict : traiter et retirer une entrée.

Cas limites :
• pop sur clé absente sans défaut → KeyError.

Considérations de performance :
• O(1) amortized typiquement.

Exemples :
• d.pop('x') après coup sur dict sans 'x' → erreur

Remarques :
• Réponse : 1 (valeur de l’expression).`,

  1819: `pop sans défaut, clé absente

Débutant :
• .pop('c') lève KeyError sur {'a':1,'b':2}.

Intermédiaire :
• Même famille d’erreur que d['c'].

Expert :
• pop doit retirer une paire ; sans paire, impossible d’honorer le contrat → exception.

Concepts clés :
• KeyError avec pop, symétrie avec [].

Distinctions clés :
• pop(k, default) évite l’erreur.

Fonctionnement :
• Recherche 'c' échoue avant toute suppression.

Exécution étape par étape :
1. Tentative pop.
2. Échec → KeyError.

Ordre des opérations :
• Pas de valeur retournée si exception.

Cas d'utilisation courants :
• Code strict où clé manquante = bug.

Cas limites :
• Message d’erreur mentionne la clé.

Considérations de performance :
• N/A.

Exemples :
• d.pop('missing', None) pour éviter l’erreur (hors question).

Remarques :
• Réponse : KeyError.`,

  1820: `pop avec défaut

Débutant :
• .pop('c', 0) retourne 0 si 'c’ absent, sans modifier les paires existantes.

Intermédiaire :
• Le dict reste {'a':1,'b':2} après l’appel.

Expert :
• Utile pour consommer optionnellement une entrée : si présente, retire et retourne la vraie valeur ; sinon défaut.

Concepts clés :
• pop tolérant, pas de suppression si absent + défaut fourni.

Distinctions clés :
• vs pop('c') qui lève.

Fonctionnement :
• Absence de 'c' → retour 0, aucune clé retirée.

Exécution étape par étape :
1. Lookup 'c'.
2. Échec → retour second argument.

Ordre des opérations :
• Évaluation de 0 avant l’appel.

Cas d'utilisation courants :
• Dépilement sécurisé de clés optionnelles.

Cas limites :
• Si 'c' existait, pop retournerait sa valeur et la retirerait (pas 0 sauf si valeur était 0).

Considérations de performance :
• Une recherche.

Exemples :
• {'c':5}.pop('c',0) → 5 et retire

Remarques :
• Réponse : 0.`,

  1821: `.keys()

Débutant :
• .keys() renvoie une vue dynamique des clés du dict.

Intermédiaire :
• La vue reflète les mutations ultérieures du dict (tant que le dict existe).

Expert :
• Itération et appartenance sur la vue restent cohérentes avec le dict sous-jacent.

Concepts clés :
• dict_keys, vue, pas une liste copiée.

Distinctions clés :
• list(d.keys()) matérialise une liste figée à l’instant t.

Fonctionnement :
• Création d’un objet vue lié au dict.

Exécution étape par étape :
1. dict évalué.
2. .keys() retourne la vue.

Ordre des opérations :
• Méthode sur instance.

Cas d'utilisation courants :
• Itérer for k in d: (équivaut à itérer les clés).

Cas limites :
• Modifier le dict pendant itération : comportement défini mais pièges (taille changeante).

Considérations de performance :
• Éviter list() si une simple itération suffit.

Exemples :
• set({'a':1}.keys()) → {'a'}

Remarques :
• La réponse du QCM est le type « vue des clés », souvent décrit comme dict_keys / objet keys.`,

  1822: `list(.keys())

Débutant :
• list({'a':1,'b':2}.keys()) produit ['a','b'] en général (ordre d’insertion).

Intermédiaire :
• Nouvelle liste : copie des références aux clés au moment de l’appel.

Expert :
• Les clés restent les objets originaux (ex. str partagés).

Concepts clés :
• Matérialisation, ordre d’insertion préservé en 3.7+.

Distinctions clés :
• Liste vs vue : la liste ne se met pas à jour si le dict change après coup.

Fonctionnement :
• Itération sur la vue, construction de la liste.

Exécution étape par étape :
1. Vue des clés.
2. list() consomme l’itérable.
3. ['a','b'].

Ordre des opérations :
• D’abord .keys(), puis list().

Cas d'utilisation courants :
• Trier les clés : sorted(d.keys()).

Cas limites :
• dict vide → [].

Considérations de performance :
• O(n) temps et mémoire pour la liste.

Exemples :
• list({}.keys()) → []

Remarques :
• Réponse : liste des clés, typiquement ['a','b'].`,

  1823: `.values()

Débutant :
• .values() est une vue sur les valeurs, dans l’ordre aligné sur les clés (insertion).

Intermédiaire :
• Les valeurs peuvent être dupliquées ; la vue peut grandir si le dict grandit.

Expert :
• x in d ne teste pas les valeurs — seulement les clés ; pour les valeurs il faut x in d.values() ou une boucle.

Concepts clés :
• dict_values, vue dynamique.

Distinctions clés :
• values vs keys vs items.

Fonctionnement :
• Création vue liée au dict.

Exécution étape par étape :
1. dict évalué.
2. .values() retourné.

Ordre des opérations :
• Méthode.

Cas d'utilisation courants :
• if target in d.values(): pour tester présence d’une valeur.

Cas limites :
• Valeurs égales mais objets distincts : == peut différer de is.

Considérations de performance :
• Tester appartenance dans values est O(n).

Exemples :
• sum({'a':1,'b':2}.values()) → 3

Remarques :
• Réponse : vue des valeurs (type values).`,

  1824: `list(.values())

Débutant :
• Liste matérialisée des valeurs, ex. [1,2] pour {'a':1,'b':2}.

Intermédiaire :
• L’ordre suit celui des paires dans le dict.

Expert :
• Copie superficielle : les objets valeur sont les mêmes références.

Concepts clés :
• Conversion vue → liste, ordre d’insertion.

Distinctions clés :
• Deux appels list(d.values()) après mutation peuvent différer.

Fonctionnement :
• Itération sur les valeurs, append dans la liste.

Exécution étape par étape :
1. Vue values.
2. list construit [1,2].

Ordre des opérations :
• values puis list.

Cas d'utilisation courants :
• Passer les valeurs à une API attendant une liste.

Cas limites :
• Dict avec valeurs non ordonnées conceptuellement : l’ordre est celui du dict, pas tri mathématique.

Considérations de performance :
• O(n).

Exemples :
• list({'x':10}.values()) → [10]

Remarques :
• Réponse : [1, 2] (ordre insertion paires a puis b).`,

  1825: `.items()

Débutant :
• .items() fournit des paires (clé, valeur) une à une via itération.

Intermédiaire :
• Chaque élément se comporte comme un tuple de longueur 2.

Expert :
• Vue dynamique : modification du dict visible lors d’itérations ultérieures.

Concepts clés :
• dict_items, paires clé-valeur.

Distinctions clés :
• items vs zip(d.keys(), d.values()) — proche mais items est la API idiomatique.

Fonctionnement :
• Vue sur entrées du dict.

Exécution étape par étape :
1. dict.
2. .items().

Ordre des opérations :
• Méthode.

Cas d'utilisation courants :
• for k, v in d.items(): pour parcourir clés et valeurs.

Cas limites :
• Itération + mutation du même dict : suivre les règles du langage (certaines modifications autorisées, d’autres non).

Considérations de performance :
• Itérer items évite deux recherches par clé.

Exemples :
• len(list({'a':1}.items())) → 1

Remarques :
• Réponse : vue items (objet items).`,

  1826: `list(.items())

Débutant :
• Liste de tuples (clé, valeur), ex. [('a',1),('b',2)].

Intermédiaire :
• Utile pour sérialiser ou trier par clé/valeur hors du dict.

Expert :
• Les tuples contiennent références ; modifier un objet mutable valeur affecte le dict.

Concepts clés :
• Matérialisation des paires, ordre d’insertion.

Distinctions clés :
• Liste figée vs vue live.

Fonctionnement :
• Itération items → liste.

Exécution étape par étape :
1. items().
2. list(...) collecte.

Ordre des opérations :
• Comme pour keys/values.

Cas d'utilisation courants :
• sorted(d.items(), key=lambda kv: kv[1]) pour tri par valeur.

Cas limites :
• Gros dicts : coût mémoire de la liste complète.

Considérations de performance :
• O(n) mémoire.

Exemples :
• dict([('a',1)]).items() en liste → [('a',1)]

Remarques :
• Réponse : liste des paires dans l’ordre du dict.`,

  1827: `'a' in dict

Débutant :
• 'a' in {'a':1,'b':2} est True : in teste l’appartenance des clés.

Intermédiaire :
• Ce n’est pas une recherche dans les valeurs.

Expert :
• Complexité moyenne O(1) comme un accès.

Concepts clés :
• Membership sur clés, opérateur in.

Distinctions clés :
• 1 in d est False ici (1 n’est pas une clé).

Fonctionnement :
• Hachage de 'a', recherche dans la table des clés.

Exécution étape par étape :
1. Évaluation du dict.
2. Test in avec 'a'.
3. True.

Ordre des opérations :
• Operandes gauche puis droit selon grammaire in.

Cas d'utilisation courants :
• if 'debug' in os.environ:

Cas limites :
• Clé hachable requise ; valeur de test doit être hachable pour dict.

Considérations de performance :
• Préférer in à try/KeyError pour branche fréquente parfois discutable selon style.

Exemples :
• 'x' in {'x':0} → True

Remarques :
• Réponse : True.`,

  1828: `1 in dict — clés seulement

Débutant :
• 1 in {'a':1,'b':2} est False : les clés sont 'a' et 'b', pas l’entier 1.

Intermédiaire :
• La valeur 1 est ignorée par in sur le dict direct.

Expert :
• Piège classique pour débutants venant des listes.

Concepts clés :
• Sémantique de in sur dict = clés uniquement.

Distinctions clés :
• 1 in d.values() serait True ici.

Fonctionnement :
• Recherche de la clé 1 → absent.

Exécution étape par étape :
1. dict évalué.
2. Test clé 1.
3. False.

Ordre des opérations :
• in après dict.

Cas d'utilisation courants :
• Toujours préciser .values() ou .items() si on cherche une valeur.

Cas limites :
• dict avec clé entière 1 : alors 1 in d serait True.

Considérations de performance :
• O(1) moyen.

Exemples :
• 2 in {'a':2} → False

Remarques :
• Réponse : False.`,

  1829: `1 in .values()

Débutant :
• 1 est une valeur du dict, donc 1 in d.values() est True.

Intermédiaire :
• Linear scan ou structure interne selon implémentation — souvent O(n) pour values.

Expert :
• Pour grandes structures, indexer par valeur inverse si besoin fréquent.

Concepts clés :
• Membership sur valeurs, pas sur clés.

Distinctions clés :
• Complément de la question 1828.

Fonctionnement :
• Parcourt les valeurs jusqu’à trouver 1.

Exécution étape par étape :
1. Vue values.
2. Test appartenance 1.
3. True.

Ordre des opérations :
• d puis .values() puis in.

Cas d'utilisation courants :
• Vérifier si un utilisateur est dans un mapping inversé mal modélisé (mieux : structure adaptée).

Cas limites :
• Égalité par == ; 1 vs 1.0 selon types.

Considérations de performance :
• O(n) sur le nombre de valeurs.

Exemples :
• 99 in {0:99}.values() → True

Remarques :
• Réponse : True.`,

  1830: `Tuple dans .items()

Débutant :
• ('a',1) in {'a':1,'b':2}.items() est True : items se comporte comme ensemble de paires.

Intermédiaire :
• L’ordre dans le tuple doit correspondre (clé, valeur).

Expert :
• Chaque élément de la vue items est un tuple-like de longueur 2.

Concepts clés :
• Membership sur paires clé-valeur.

Distinctions clés :
• ('a',1) in d serait False (in d teste seulement clés).

Fonctionnement :
• Itération ou recherche équivalente sur les paires exposées.

Exécution étape par étape :
1. items() sur le dict.
2. Test ('a',1) in vue.
3. True.

Ordre des opérations :
• Création vue puis membership.

Cas d'utilisation courants :
• Vérifier présence exacte d’une association.

Cas limites :
• Objet valeur non égal au tuple testé → False.

Considérations de performance :
• Souvent O(n).

Exemples :
• ('b',2) in même dict → True

Remarques :
• Réponse : True.`,

  1831: `Assignation nouvelle clé

Débutant :
• d = {'a':1}; d['b']=2; d vaut {'a':1,'b':2}.

Intermédiaire :
• Mutation in-place du même objet référencé par d.

Expert :
• Si une autre variable pointait vers le même dict, elle voit aussi 'b'.

Concepts clés :
• Insertion par [] avec assignation.

Distinctions clés :
• vs création d’un nouveau dict par union ou littéral.

Fonctionnement :
• __setitem__ sur 'b' avec valeur 2.

Exécution étape par étape :
1. Créer d.
2. Assigner clé 'b'.
3. d affiché avec deux clés.

Ordre des opérations :
• Statements exécutés de gauche à droite, séquentiellement.

Cas d'utilisation courants :
• Construire un dict au fil de l’eau.

Cas limites :
• Clé déjà présente : écrasement (voir 1832).

Considérations de performance :
• Insertion amortized O(1).

Exemples :
• d['b']=2 après d={'a':1}

Remarques :
• Réponse : dict à deux clés a et b.`,

  1832: `Écrasement de clé

Débutant :
• d['a']=2 remplace l’ancienne valeur 1.

Intermédiaire :
• Toujours le même objet dict, une seule clé 'a'.

Expert :
• L’ancienne valeur 1 peut être garbage-collectée si plus référencée.

Concepts clés :
• Mise à jour par assignation [].

Distinctions clés :
• vs setdefault qui ne remplace pas si présent avec autre logique.

Fonctionnement :
• Même emplacement de clé, nouvelle valeur 2.

Exécution étape par étape :
1. d = {'a':1}.
2. d['a']=2.
3. d == {'a':2}.

Ordre des opérations :
• Assignation après création.

Cas d'utilisation courants :
• Compteurs : counts[k] = counts.get(k,0)+1 (variantes).

Cas limites :
• Si la valeur était mutable partagée, attention aux alias.

Considérations de performance :
• Remplacement O(1) moyen.

Exemples :
• {'a':1}; d['a']=2 → {'a':2}

Remarques :
• Réponse : {'a': 2} (selon formulation du QCM).`,

  1833: `update() valeur de retour

Débutant :
• {'a':1}.update({'b':2}) retourne None : update mute sur place.

Intermédiaire :
• Comme list.sort() vs sorted() : pas de nouvel objet dict retourné.

Expert :
• Chaîner .update(...) dans une expression renvoie None, piège fréquent.

Concepts clés :
• API in-place, retour None.

Distinctions clés :
• {**a,**b} ou | en 3.9+ produit un nouveau dict (selon syntaxe).

Fonctionnement :
• Méthode update termine avec return implicite None.

Exécution étape par étape :
1. Dict receveur {'a':1}.
2. Fusion {'b':2}.
3. Expression a pour valeur None.

Ordre des opérations :
• Effet de bord puis résultat None.

Cas d'utilisation courants :
• Fusionner sans rebinder : d.update(autre).

Cas limites :
• Ne pas faire return d.update(...) en espérant le dict.

Considérations de performance :
• Souvent O(taille de l’autre mapping).

Exemples :
• x = {}.update({'a':1}); x → None

Remarques :
• Réponse : None.`,

  1834: `Séquence avec update sur variable

Débutant :
• Après d.update({'b':2}), d contient les deux clés.

Intermédiaire :
• La dernière expression du snippet est souvent la valeur de d affichée au REPL selon formulation.

Expert :
• update accepte aussi itérables de paires et kwargs supplémentaires.

Concepts clés :
• Mutation observée via variable d.

Distinctions clés :
• Résultat None de update vs contenu de d.

Fonctionnement :
• Fusion in-place.

Exécution étape par étape :
1. d = {'a':1}.
2. d.update({'b':2}) → None.
3. d → {'a':1,'b':2}.

Ordre des opérations :
• Statements séquentiels.

Cas d'utilisation courants :
• Agrégation de plusieurs sources dans un dict.

Cas limites :
• Clés en conflit : valeur du second mapping gagne (pour même clé).

Considérations de performance :
• Linéaire en nombre de nouvelles paires.

Exemples :
• id(d) stable avant/après update

Remarques :
• Réponse attendue : {'a': 1, 'b': 2}.`,

  1835: `update écrase une clé

Débutant :
• d.update({'a':2}) remplace 1 par 2 pour la clé 'a'.

Intermédiaire :
• Une seule clé 'a' subsiste avec valeur 2.

Expert :
• update peut recevoir plusieurs sources ; ordre de fusion détermine le gagnant.

Concepts clés :
• Écrasement de valeur existante via update.

Distinctions clés :
• vs setdefault qui ne remplace pas une clé présente.

Fonctionnement :
• Pour clé 'a' existante, nouvelle valeur 2.

Exécution étape par étape :
1. d={'a':1}.
2. update({'a':2}).
3. d={'a':2}.

Ordre des opérations :
• update applique chaque paire.

Cas d'utilisation courants :
• Patch de configuration partielle.

Cas limites :
• Fusion de dicts imbriqués : update superficiel, pas récursif.

Considérations de performance :
• O(1) par clé mise à jour en moyenne.

Exemples :
• d={'a':1,'b':3}; d.update({'a':2}) → {'a':2,'b':3}

Remarques :
• Réponse : {'a': 2}.`,

  1836: `popitem() sur deux paires

Débutant :
• popitem() enlève une paire (clé, valeur) du dict et la retourne sous forme de tuple.

Intermédiaire :
• Depuis Python 3.7, l’ordre d’insertion est garanti : popitem() retire en général la dernière paire insérée (comportement LIFO sur cet ordre).

Expert :
• Avant 3.7, l’ordre n’était pas garanti pour les dicts ; le QCM couvre le cas usuel 3.7+ avec {'a':1,'b':2}.

Concepts clés :
• popitem, mutation in-place, tuple (clé, valeur), ordre d’insertion.

Distinctions clés :
• popitem() sans argument vs pop('a') qui cible une clé précise.

Fonctionnement :
• Pour {'a': 1, 'b': 2}, 'a' est inséré avant 'b' ; la dernière insérée est 'b', donc popitem() retourne souvent ('b', 2) et laisse {'a': 1}.

Exécution étape par étape :
1. Dict évalué avec deux entrées.
2. popitem() choisit la dernière paire selon l’ordre d’insertion (3.7+).
3. Retour d’un tuple et retrait de cette paire dans le dict.

Ordre des opérations :
• Appel de méthode sur l’objet dict ; effet de bord immédiat.

Cas d'utilisation courants :
• Parcourir et vider un dict comme une pile de paires (patterns spécifiques ; souvent deque préférable pour une vraie pile).

Cas limites :
• Dict vide : KeyError.

Considérations de performance :
• En pratique O(1) amorti sur CPython pour la suppression d’une paire.

Exemples :
• d = {'a': 1, 'b': 2}; d.popitem() → souvent ('b', 2); d → {'a': 1}

Remarques :
• La bonne réponse du quiz correspond à « ('b', 2) ou ('a', 1) » selon les options : en 3.7+ c’est typiquement ('b', 2) pour ce littéral.`,

  1837: `popitem() une seule entrée

Débutant :
• Sur {'a':1}, popitem() retourne ('a',1) et laisse {}.

Intermédiaire :
• Après coup, dict vide ; un second popitem lève KeyError.

Expert :
• Utile pour dépiler des piles implémentées par dict ordonné (pattern rare ; deque souvent préférable).

Concepts clés :
• Dernière (seule) paire consommée.

Distinctions clés :
• popitem() sans argument seulement.

Fonctionnement :
• Retire l’unique paire.

Exécution étape par étape :
1. Un élément.
2. popitem → ('a',1).
3. dict {}.

Ordre des opérations :
• Mutation immédiate.

Cas d'utilisation courants :
• Vider un dict par étapes.

Cas limites :
• Dict vide → KeyError.

Considérations de performance :
• O(1).

Exemples :
• {'a':1}.popitem() → ('a',1)

Remarques :
• Réponse : ('a', 1) ou équivalent selon options.`,

  1838: `popitem() sur dict vide

Débutant :
• {}.popitem() lève KeyError : rien à retirer.

Intermédiaire :
• Même famille que pop sur clé absente.

Expert :
• Tester if d: avant popitem ou try/except.

Concepts clés :
• Erreur sur conteneur vide.

Distinctions clés :
• popitem ne prend pas de défaut (pas de popitem(default)).

Fonctionnement :
• Échec immédiat.

Exécution étape par étape :
1. Dict vide.
2. popitem → KeyError.

Ordre des opérations :
• Exception.

Cas d'utilisation courants :
• Boucles while d: k,v = d.popitem().

Cas limites :
• N/A.

Considérations de performance :
• N/A.

Exemples :
• while d: d.popitem()

Remarques :
• Réponse : KeyError.`,

  1839: `clear() retour

Débutant :
• .clear() retourne None après avoir vidé le dict.

Intermédiaire :
• L’objet dict existe toujours, seulement sans paires.

Expert :
• Partage d’alias : tous les référents voient {}.

Concepts clés :
• Mutation in-place, retour None.

Distinctions clés :
• clear vs réassigner d = {} (identité d’objet différente si autre alias).

Fonctionnement :
• Supprime toutes les entrées, return None.

Exécution étape par étape :
1. clear appelé.
2. Dict vide.
3. None retourné.

Ordre des opérations :
• Expression vaut None.

Cas d'utilisation courants :
• Réinitialiser un cache réutilisé.

Cas limites :
• clear sur {} reste valide.

Considérations de performance :
• O(n) nombre d’entrées.

Exemples :
• d.clear(); print(d) → {}

Remarques :
• Réponse : None.`,

  1840: `clear() via variable

Débutant :
• d.clear() puis d est {}.

Intermédiaire :
• Même objet qu’avant clear (id stable en général).

Expert :
• Si b = a et a.clear(), b voit aussi vide.

Concepts clés :
• Vidage in-place.

Distinctions clés :
• vs d = {} qui peut casser le lien avec d’autres alias selon réassignation.

Fonctionnement :
• Retire toutes les paires de l’instance.

Exécution étape par étape :
1. d={'a':1}.
2. clear.
3. d == {}.

Ordre des opérations :
• Statement clear puis inspection de d.

Cas d'utilisation courants :
• Réutiliser le même dict nommé dans une boucle.

Cas limites :
• Références externes aux anciennes valeurs peuvent subsister.

Considérations de performance :
• Libère les références aux valeurs ; GC peut suivre.

Exemples :
• a={}; b=a; a.clear(); b == {}

Remarques :
• Réponse : {}.`,

  1841: `copy() superficiel

Débutant :
• .copy() donne un nouveau dict avec les mêmes paires au premier niveau.

Intermédiaire :
• Les valeurs ne sont pas clonées profondément.

Expert :
• dict.copy, copy.copy(dict), et {**d} sont des shallow copies (nuances mineures).

Concepts clés :
• Copie superficielle, nouvel objet externe.

Distinctions clés :
• deepcopy pour indépendance complète des contenus imbriqués.

Fonctionnement :
• Duplication des clés et références aux valeurs.

Exécution étape par étape :
1. Nouveau dict alloué.
2. Paires copiées.
3. Retour nouvel objet égal en contenu à l’original pour dict plat.

Ordre des opérations :
• Méthode copy.

Cas d'utilisation courants :
• Modifier une copie sans toucher l’original pour clés/valeurs immuables.

Cas limites :
• Valeurs mutables partagées (voir 1849).

Considérations de performance :
• O(n) sur nombre de paires.

Exemples :
• a={'x':1}; b=a.copy(); b['x']=2; a['x'] → 1

Remarques :
• Réponse : un dict égal {'a':1,'b':2} mais distinct de l’original.`,

  1842: `dict(autre_dict)

Débutant :
• dict({'a':1,'b':2}) construit un nouveau dict avec les mêmes paires (shallow).

Intermédiaire :
• Équivalent à .copy() pour un dict simple passé en entrée.

Expert :
• Le constructeur peut aussi accepter kwargs et itérables selon surcharge.

Concepts clés :
• Copie via constructeur, shallow.

Distinctions clés :
• dict(d) vs d : nouvel id en général.

Fonctionnement :
• Itère les paires de l’argument mapping.

Exécution étape par étape :
1. Argument dict évalué.
2. Nouveau dict rempli.
3. Retour.

Ordre des opérations :
• Appel constructeur.

Cas d'utilisation courants :
• Normaliser un mapping-like en dict pur.

Cas limites :
• Objets non mapping : erreur ou comportement différent selon type.

Considérations de performance :
• O(n).

Exemples :
• dict({'a':1}) == {'a':1}

Remarques :
• Réponse : {'a': 1, 'b': 2} (nouveau dict).`,

  1843: `Fusion par dépaquetage **

Débutant :
• {**{'a':1}, **{'b':2}} fusionne en un seul dict avec clés a et b.

Intermédiaire :
• Crée un nouveau dict ; les originaux ne sont pas modifiés.

Expert :
• Ordre : clés du second dict peuvent écraser celles du premier si collision.

Concepts clés :
• PEP 448, littéral avec unpacking.

Distinctions clés :
• vs | en 3.9+.

Fonctionnement :
• Construction littérale avec fusion de mappings.

Exécution étape par étape :
1. Premier mapping dépaqueté.
2. Second dépaqueté.
3. Résultat {'a':1,'b':2}.

Ordre des opérations :
• De gauche à droite pour résolution des collisions.

Cas d'utilisation courants :
• Fusion immuable de defaults et overrides.

Cas limites :
• Clés non str si acceptées par le littéral (clés expression).

Considérations de performance :
• Nouvelle allocation.

Exemples :
• {**{}, **{'k':0}} → {'k':0}

Remarques :
• Réponse : dict fusionné sans collision ici.`,

  1844: `** collision de clés

Débutant :
• {**{'a':1}, **{'a':2}} : la clé 'a' vaut 2 (le second mapping gagne).

Intermédiaire :
• Règle : droite écrase gauche pour même clé.

Expert :
• Même logique pour plusieurs ** successifs.

Concepts clés :
• Précédence de fusion, écrasement.

Distinctions clés :
• vs update qui mute.

Fonctionnement :
• Insère a:1 puis a:2 remplace.

Exécution étape par étape :
1. a:1.
2. a:2 écrase.
3. {'a':2}.

Ordre des opérations :
• Ordre des dépaquetages dans le littéral.

Cas d'utilisation courants :
• Defaults puis overrides.

Cas limites :
• Chaînes longues de ** : dernier gagne pour chaque clé.

Considérations de performance :
• Linéaire.

Exemples :
• {**{'x':0},**{'x':1},**{'x':2}} → {'x':2}

Remarques :
• Réponse : {'a': 2}.`,

  1845: `Opérateur | sur dicts

Débutant :
• {'a':1} | {'b':2} produit un nouveau dict {'a':1,'b':2} (Python 3.9+).

Intermédiaire :
• Ni operand n’est muté.

Expert :
• __or__ sur dict ; retourne nouveau dict.

Concepts clés :
• Union de mappings, nouvel objet.

Distinctions clés :
• | vs |= (in-place).

Fonctionnement :
• Fusion à droite pour collisions futures ; ici pas de collision.

Exécution étape par étape :
1. Gauche et droite évalués.
2. Union créée.
3. Nouveau dict.

Ordre des opérations :
• Opérateur binaire.

Cas d'utilisation courants :
• Composer options sans muter les defaults.

Cas limites :
• Version <3.9 : syntaxe absente.

Considérations de performance :
• O(taille totale).

Exemples :
• a|{} → copy shallow-like nouvelle instance

Remarques :
• Réponse : dict union {'a':1,'b':2}.`,

  1846: `| avec clé dupliquée

Débutant :
• {'a':1} | {'a':2} donne {'a':2} : le côté droit l’emporte.

Intermédiaire :
• Symétrique aux règles de ** pour collision.

Expert :
• dict.__or__ documenté pour cette sémantique.

Concepts clés :
• Priorité du mapping de droite.

Distinctions clés :
• Inverse n’est pas commutatif pour valeurs différentes.

Fonctionnement :
• Fusion avec écrasement par droite.

Exécution étape par étape :
1. Commencer par gauche.
2. Fusionner droite : remplace 'a'.
3. {'a':2}.

Ordre des opérations :
• Évaluation opérandes puis |.

Cas d'utilisation courants :
• Overrides explicites lisibles.

Cas limites :
• Types non dict à droite : autres règles (hors portée).

Considérations de performance :
• O(n).

Exemples :
• {'a':1}|{'a':1} → {'a':1}

Remarques :
• Réponse : {'a': 2}.`,

  1847: `|= mise à jour in-place

Débutant :
• Avec d = {'a': 1} puis d |= {'b': 2} (Python 3.9+), le dict d contient ensuite {'a': 1, 'b': 2}.

Intermédiaire :
• L’opérateur |= fusionne le mapping de droite dans celui de gauche et modifie d sur place ; ce n’est pas une nouvelle variable.

Expert :
• dict.__ior__ implémente |= ; la valeur de retour de l’opérateur en soi importe peu ici : la question porte sur l’état de d après l’instruction.

Concepts clés :
• Fusion in-place, syntaxe |=, Python 3.9+.

Distinctions clés :
• d |= autre (mutation) vs d = d | autre (nouveau dict réassigné à d).

Fonctionnement :
• Les paires de {'b': 2} sont intégrées dans le dict référencé par d.

Exécution étape par étape :
1. d pointe vers {'a': 1}.
2. d |= {'b': 2} exécute la fusion sur ce même objet.
3. d référence toujours le même objet, maintenant {'a': 1, 'b': 2}.

Ordre des opérations :
• Instruction d’affectation augmentée après la création initiale de d.

Cas d'utilisation courants :
• Mettre à jour des options ou defaults accumulés sans recréer un dict à chaque étape.

Cas limites :
• Versions antérieures à 3.9 : SyntaxError sur |= entre dicts.

Considérations de performance :
• Souvent moins de copies intermédiaires qu’une chaîne répétée de d = d | patch.

Exemples :
• d = {'x': 0}; d |= {'x': 1} → d == {'x': 1}

Remarques :
• Réponse attendue : {'a': 1, 'b': 2}.`,

  1848: `| vs |=

Débutant :
• | crée un nouveau dict ; |= modifie le dict de gauche.

Intermédiaire :
• Après |, les opérandes originaux inchangés ; après |=, le gauche change.

Expert :
• Choix lié à immuabilité locale vs performance mémoire.

Concepts clés :
• Pur fonctionnel vs mutation.

Distinctions clés :
• Pareil que + vs += sur listes (esprit).

Fonctionnement :
• __or__ vs __ior__.

Exécution étape par étape :
1. Identifier si nouvel objet requis.
2. Si oui → | ; si mise à jour locale → |=.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• | pour defaults immuables ; |= dans boucles d’agrégation.

Cas limites :
• Références partagées : |= affecte tous les alias.

Considérations de performance :
• | alloue ; |= évite parfois une grosse copie temporaire.

Exemples :
• a={'x':1}; b=a; c=a|{'y':2}; b → {'x':1}

Remarques :
• La réponse du QCM résume cette différence sémantique.`,

  1849: `Copie superficielle et liste imbriquée

Débutant :
• a = {'a':[1]}; b = a.copy(); b['a'].append(2) : la liste interne est partagée, donc a devient {'a':[1,2]}.

Intermédiaire :
• copy() n’a pas dupliqué la liste, seulement la référence dans le nouveau dict.

Expert :
• Idem pour dict(), slicing [:] sur listes de dicts, etc. au premier niveau.

Concepts clés :
• Partage de sous-objet mutable, shallow copy.

Distinctions clés :
• deepcopy pour listes/dicts imbriqués indépendants.

Fonctionnement :
• b['a'] pointe vers la même liste que a['a'].

Exécution étape par étape :
1. Liste [1] créée une fois.
2. Deux dicts référencent cette liste via valeur 'a'.
3. append mute la liste commune.

Ordre des opérations :
• append après copy.

Cas d'utilisation courants :
• Arbres ou graphes : exiger deepcopy ou structures immuables.

Cas limites :
• Si avait fait b['a'] = b['a'] + [2] selon forme, comportement différent (réassignation de clé).

Considérations de performance :
• deepcopy plus coûteux mais sûr.

Exemples :
• a = {'a': [1]}; b = a.copy(); b['a'].append(2); a → {'a': [1, 2]}

Remarques :
• Réponse : {'a': [1, 2]}.`,

  1850: `copy.deepcopy

Débutant :
• copy.deepcopy({'a':[1]}) produit un dict dont la liste interne est une copie indépendante.

Intermédiaire :
• Il faut import copy ; la fonction traverse récursivement.

Expert :
• Gère les cycles avec mémo interne ; plus lent que shallow.

Concepts clés :
• Clonage profond, indépendance des niveaux imbriqués.

Distinctions clés :
• deepcopy vs copy() / slice.

Fonctionnement :
• Duplique dict puis duplique récursivement la liste [1].

Exécution étape par étape :
1. import copy (dans le snippet de la question).
2. deepcopy construit nouvelle liste et nouveau dict.
3. Résultat affiché égal en structure à l’entrée pour cet exemple simple.

Ordre des opérations :
• import puis appel.

Cas d'utilisation courants :
• Dupliquer structures de configuration imbriquées avant mutation.

Cas limites :
• Objets non copiables (verrous, etc.) ; fonctions ; signaux.

Considérations de performance :
• Coût potentiellement exponentiel sur graphes profonds — mémo pour cycles.

Exemples :
• Après deepcopy, append sur copie n’affecte pas l’original.

Remarques :
• Réponse du QCM : dict équivalent {'a': [1]} avec indépendance profonde (formulation « deep copy »).`,
};
