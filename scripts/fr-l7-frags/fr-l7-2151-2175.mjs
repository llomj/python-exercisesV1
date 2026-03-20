/** Level 7 FR 2151–2175 — scope, builtins, recursion start */
export default {
  2151: `x = 1 ; def func(): return x ; func()

Débutant :
• x est défini au niveau module (global) ; func lit x car il n’y a pas de x local.

Intermédiaire :
• La recherche de nom remonte des locales vers les englobantes puis le global.

Expert :
• Sans global ni nonlocal, seule la lecture du global est implicite.

Concepts clés :
• Portée, variable globale, lecture.

Distinctions clés :
• Différent d’une affectation locale qui masquerait le nom.

Fonctionnement :
• func() résout x vers la table globale du module.

Exécution étape par étape :
1. x vaut 1 au global.
2. func() retourne la valeur liée au nom x → 1.

Ordre des opérations :
• L’affectation x = 1 s’exécute avant la définition puis l’appel.

Cas d'utilisation courants :
• Constantes de configuration lues par plusieurs fonctions.

Cas limites :
• Si plus tard on assigne x dans func sans global, le comportement change.

Considérations de performance :
• Lookup de nom négligeable.

Exemples :
• Réassigner x = 10 au global change le résultat des appels suivants.

Remarques :
• Réponse : 1 (première option du quiz).`,

  2152: `x = 1 ; def func(): x = 2 ; return x ; func()

Débutant :
• x = 2 dans le corps crée une variable locale x qui masque le global.

Intermédiaire :
• return x utilise la liaison locale fraîche, pas le 1 du module.

Expert :
• Toute assignation à x dans la fonction rend x local pour tout le bloc (règle du compilateur).

Concepts clés :
• Masquage (shadowing), variable locale.

Distinctions clés :
• Le global x reste 1 tant qu’on ne le modifie pas avec global.

Fonctionnement :
• Liaison locale x → 2 pendant l’appel.

Exécution étape par étape :
1. Entrée dans func : exécution de x = 2 puis return 2.

Ordre des opérations :
• Assignation locale avant return.

Cas d'utilisation courants :
• Paramètres ou compteurs internes sans toucher au global.

Cas limites :
• Lire x avant assignation locale si une assignation existe plus bas → erreur (voir autre question).

Considérations de performance :
• Négligeable.

Exemples :
• Après func(), x global vaut encore 1.

Remarques :
• Réponse : 2.`,

  2153: `x = 1 ; def func(): x = 2 ; func() ; puis x au global

Débutant :
• L’affectation dans func ne modifie pas le x du module.

Intermédiaire :
• La locale disparaît à la sortie de l’appel ; seul le global subsiste.

Expert :
• Pour modifier le global depuis func il faudrait global x.

Concepts clés :
• Indépendance local / global.

Distinctions clés :
• Pas d’effet sur le binding global après func().

Fonctionnement :
• x global inchangé par l’assignation locale.

Exécution étape par étape :
1. func() crée x=2 localement puis quitte.
2. Évaluation de x au niveau module → 1.

Ordre des opérations :
• Appel puis lecture du nom au scope courant (module).

Cas d'utilisation courants :
• Éviter les effets de bord sur des variables partagées.

Cas limites :
• Objets mutables globaux modifiés en place restent un cas différent (pas ici).

Considérations de performance :
• Négligeable.

Exemples :
• Comparer avec la variante global x.

Remarques :
• Réponse : 1.`,

  2154: `x = 1 ; def func(): global x ; x = 2 ; func() ; x

Débutant :
• global x annonce que les assignations à x visent le nom du module.

Intermédiaire :
• Après func(), le global vaut 2.

Expert :
• global doit apparaître avant l’usage assignant ; une seule déclaration suffit pour tout le bloc.

Concepts clés :
• Mot-clé global, mutation du binding global.

Distinctions clés :
• Sans global, x = 2 créerait une locale.

Fonctionnement :
• func modifie la cellule globale x.

Exécution étape par étape :
1. func() exécute x = 2 sur le global → x vaut 2 partout dans le module.

Ordre des opérations :
• Déclaration global puis assignation.

Cas d'utilisation courants :
• Compteurs ou caches de module (souvent à éviter au profit d’objets explicites).

Cas limites :
• Tests parallèles et globals : état partagé fragile.

Considérations de performance :
• Négligeable.

Exemples :
• Préférer souvent une classe ou un attribut de module nommé.

Remarques :
• Réponse : 2.`,

  2155: `def outer(): x = 1 ; def inner(): return x ; return inner() ; outer()

Débutant :
• inner voit x défini dans outer : portée englobante (non globale).

Intermédiaire :
• Pas besoin de nonlocal ici car inner ne fait qu’une lecture de x.

Expert :
• C’est une fermeture sur la variable de cellule de outer.

Concepts clés :
• Fonction imbriquée, fermeture, ENCLOSING.

Distinctions clés :
• Différent du simple accès au global du module.

Fonctionnement :
• inner résout x dans la portée de outer.

Exécution étape par étape :
1. outer() définit x=1 et inner.
2. return inner() exécute inner → retourne 1.

Ordre des opérations :
• Création de inner puis appel immédiat.

Cas d'utilisation courants :
• Factoriser de la logique tout en gardant un état capturé.

Cas limites :
• Si inner assigne à x sans nonlocal, x devient local à inner.

Considérations de performance :
• Petite surcharge de fermeture acceptable.

Exemples :
• Fabriques de callbacks.

Remarques :
• Réponse : 1.`,

  2156: `def outer(x): def inner(): return x ; return inner ; f = outer(5) ; f()

Débutant :
• outer(5) renvoie inner qui « se souvient » de x = 5.

Intermédiaire :
• Chaque appel outer(...) produit une nouvelle fonction avec sa propre cellule x.

Expert :
• Les valeurs par défaut ou attributs de fonction sont d’autres façons de figer des paramètres.

Concepts clés :
• Fermeture sur paramètre, fonction comme valeur de retour.

Distinctions clés :
• f et g = outer(10) ont des x capturés différents.

Fonctionnement :
• inner.__closure__ retient la cellule liée à x.

Exécution étape par étape :
1. outer(5) crée inner capturant 5.
2. f() retourne 5.

Ordre des opérations :
• Liaison de f puis appel.

Cas d'utilisation courants :
• Multiplicateurs partiels, décorateurs, API configurables.

Cas limites :
• Boucles qui créent des fermetures dans une même variable d’index : piège classique (hors énoncé).

Considérations de performance :
• Négligeable pour petits nombres d’appels.

Exemples :
• make_multiplier du même niveau.

Remarques :
• Réponse : 5.`,

  2157: `def func(): x = 1 ; return x ; func() puis x au module

Débutant :
• x n’existe pas au niveau module : NameError.

Intermédiaire :
• La locale x meurt en fin d’appel ; le nom x n’est pas défini globalement.

Expert :
• Même si func retourne 1, cela ne crée pas de variable module x.

Concepts clés :
• Durée de vie des locales, NameError.

Distinctions clés :
• Différent de x global lu sans assignation locale.

Fonctionnement :
• Évaluation du nom x hors fonction sans binding.

Exécution étape par étape :
1. func() termine ; ensuite accès à x au module → erreur.

Ordre des opérations :
• Appel puis tentative de lookup global/module.

Cas d'utilisation courants :
• Retourner une valeur et l’assigner si on veut la conserver : r = func().

Cas limites :
• REPL peut afficher le résultat du dernier func() mais pas créer x.

Considérations de performance :
• N/A.

Exemples :
• Utiliser return et assignment explicite.

Remarques :
• Réponse : NameError (première option).`,

  2158: `x = 1 ; def func(y): return x + y ; func(2)

Débutant :
• x vient du global, y vaut 2 en paramètre → 1 + 2 = 3.

Intermédiaire :
• Les paramètres sont des locales initialisées par les arguments.

Expert :
• Si un global x change entre définition et appel, la somme utilise la valeur courante au moment de l’appel.

Concepts clés :
• Mélange paramètre + global en lecture.

Distinctions clés :
• Pas de shadowing ici car pas d’assignation à x dans func.

Fonctionnement :
• Lookup x global, y local.

Exécution étape par étape :
1. y=2, x lu comme 1 au global, addition 1 + 2.

Ordre des opérations :
• Liaison des arguments puis évaluation du return.

Cas d'utilisation courants :
• Base fixe + incrément utilisateur.

Cas limites :
• Types non addables → TypeError.

Considérations de performance :
• Négligeable.

Exemples :
• func(5) donnerait 6 avec x=1.

Remarques :
• Réponse : 3.`,

  2159: `def func(): x = x + 1 ; return x ; func()

Débutant :
• x = x + 1 rend x local, mais la partie droite lit x avant assignation → UnboundLocalError.

Intermédiaire :
• Python a décidé que x est local à cause de l’assignation dans tout le bloc.

Expert :
• Corriger avec global x ou passer x en argument ou initialiser avant usage.

Concepts clés :
• Règle de localisation, variable locale non liée.

Distinctions clés :
• Pas une NameError sur global ici : c’est bien une locale « vide ».

Fonctionnement :
• LOAD_FAST échoue car pas encore STORE_FAST effectif pour la lecture.

Exécution étape par étape :
1. Entrée dans func, tentative d’évaluer x + 1 → erreur.

Ordre des opérations :
• Compilation marque x comme local.

Cas d'utilisation courants :
• Compteur : utiliser global ou nonlocal ou une variable externe immutable différemment.

Cas limites :
• Lire puis assigner sans ambiguïté : utiliser un autre nom temporaire.

Considérations de performance :
• N/A.

Exemples :
• def func(global_x): return global_x + 1

Remarques :
• Réponse : UnboundLocalError (première option).`,

  2160: `def func(): return len([1, 2, 3]) ; func()

Débutant :
• len compte trois éléments dans la liste littérale.

Intermédiaire :
• Les builtins sont disponibles dans la fonction comme partout.

Expert :
• On peut shadow len en définissant un nom local len (mauvaise idée).

Concepts clés :
• Appel de builtin dans une fonction.

Distinctions clés :
• Ce n’est pas la longueur de la chaîne "123".

Fonctionnement :
• Création de la liste puis len sur l’objet liste.

Exécution étape par étape :
1. Évalue len([1,2,3]) → 3, return.

Ordre des opérations :
• Liste puis len.

Cas d'utilisation courants :
• Encapsuler des mesures sur des structures créées localement.

Cas limites :
• listes imbriquées : len ne compte que le premier niveau.

Considérations de performance :
• O(1) pour len sur list en CPython.

Exemples :
• return len(() ) → 0.

Remarques :
• Réponse : 3.`,

  2161: `def fact(n): return 1 if n <= 1 else n * fact(n-1) ; fact(5)

Débutant :
• Récursion : 5 × 4 × 3 × 2 × 1 = 120 ; cas de base n <= 1 → 1.

Intermédiaire :
• Chaque appel attend le résultat de fact(n-1) avant de multiplier.

Expert :
• Profondeur limitée par sys.getrecursionlimit().

Concepts clés :
• Récursion, cas de base, factorielle.

Distinctions clés :
• Différent d’une boucle for accumulant le produit.

Fonctionnement :
• Pile d’appels jusqu’au base case puis déroulement.

Exécution étape par étape :
• fact(5)=5*fact(4)=…=120.

Ordre des opérations :
• Évaluation paresseuse des branches du ternaire.

Cas d'utilisation courants :
• Arbres, parsers, divide and conquer.

Cas limites :
• n négatif ou non entier : ici comportement récursif infini ou incorrect sans garde.

Considérations de performance :
• Récursion profonde coûteuse ; math.prod ou boucle pour gros n.

Exemples :
• fact(0) et fact(1) valent 1 avec cette définition.

Remarques :
• Réponse : 120.`,

  2162: `def fib(n): return n if n < 2 else fib(n-1) + fib(n-2) ; fib(5)

Débutant :
• Avec ce code, fib(5) vaut 5 (suite 0,1,1,2,3,5 au rang 5 si on compte depuis 0).

Intermédiaire :
• Beaucoup de sous-appels redondants : complexité exponentielle naïve.

Expert :
• Ne pas confondre avec F(5)=5 en indice « humain » vs autre convention.

Concepts clés :
• Fibonacci récursif, double appel.

Distinctions clés :
• fib(6) donnerait 8 avec la même définition.

Fonctionnement :
• Expansion en arbre binaire d’appels.

Exécution étape par étape :
• fib(5)=fib(4)+fib(3) … jusqu’aux bases n<2.

Ordre des opérations :
• Addition après retours des sous-appels.

Cas d'utilisation courants :
• Exemple pédagogique ; en prod : itératif ou memo.

Cas limites :
• fib(-1) boucle infinie ou récursion incorrecte sans garde.

Considérations de performance :
• Très mauvais pour grands n sans cache.

Exemples :
• fib(0)→0, fib(1)→1.

Remarques :
• Réponse : 5 (alignée sur la banque).`,

  2163: `def count(n): return 0 if n <= 0 else 1 + count(n-1) ; count(5)

Débutant :
• Compte combien de fois on enlève 1 avant d’atteindre 0 : 5.

Intermédiaire :
• Équivalent à sommer 1 cinq fois avec base 0.

Expert :
• Modèle de preuve par récurrence sur n.

Concepts clés :
• Récursion arithmétique, cas de base n <= 0.

Distinctions clés :
• Pas la factorielle : pas de multiplication en chaîne.

Fonctionnement :
• 1 + count(4) + … jusqu’à count(0)=0.

Exécution étape par étape :
• Déroulement linéaire de profondeur n.

Ordre des opérations :
• Test n <= 0 puis branche.

Cas d'utilisation courants :
• Illustrer la récursion terminale conceptuelle (Python n’optimise pas en TCO).

Cas limites :
• n négatif grand : retourne 0 immédiatement ici.

Considérations de performance :
• Linéaire en profondeur de pile.

Exemples :
• count(0) → 0.

Remarques :
• Réponse : 5.`,

  2164: `def sum_list(lst): return 0 if not lst else lst[0] + sum_list(lst[1:]) ; sum_list([1,2,3])

Débutant :
• Base liste vide → 0 ; sinon tête + somme de la queue → 6.

Intermédiaire :
• lst[1:] copie des sous-listes : coût mémoire/temps important.

Expert :
• En pratique utiliser sum(lst) ou un index itératif.

Concepts clés :
• Récursion sur structure, slicing.

Distinctions clés :
• Différent de len : ici addition des valeurs.

Fonctionnement :
• 1 + sum([2,3]) = 1 + 2 + 3 + 0.

Exécution étape par étape :
• Jusqu’à liste vide.

Ordre des opérations :
• not lst teste la vérité de la liste.

Cas d'utilisation courants :
• Traitement récursif d’arbres ou listes chaînées conceptuelles.

Cas limites :
• Liste très longue : dépassement de récursion.

Considérations de performance :
• O(n²) temps avec slicing naïf.

Exemples :
• sum_list([]) → 0.

Remarques :
• Réponse : 6.`,

  2165: `def power(x, n): return 1 if n == 0 else x * power(x, n-1) ; power(2, 3)

Débutant :
• Exposant entier positif : 2³ = 8 ; base n==0 → 1.

Intermédiaire :
• Version récursive simple de l’exponentiation.

Expert :
• Pour grands n, versions logarithmiques ou pow built-in.

Concepts clés :
• Récursion multiplicative, cas de base exposant 0.

Distinctions clés :
• 2^3 ≠ 2*3.

Fonctionnement :
• 2 * power(2,2) * …

Exécution étape par étape :
• Jusqu’à n==0.

Ordre des opérations :
• Décrement n à chaque niveau.

Cas d'utilisation courants :
• Math récursive pédagogique.

Cas limites :
• n négatif non géré ici.

Considérations de performance :
• Linéaire en n pour cette forme.

Exemples :
• power(x,0) → 1 pour tout x (sauf 0**0 débat hors scope).

Remarques :
• Réponse : 8.`,

  2166: `Fonction récursive sans cas de base

Débutant :
• Les appels ne s’arrêtent pas : la pile grossit jusqu’à la limite → RecursionError.

Intermédiaire :
• Python impose une profondeur maximale pour éviter un débordement de pile natif.

Expert :
• Augmenter la limite est possible mais dangereux (setrecursionlimit).

Concepts clés :
• Récursion infinie, limite de récursion.

Distinctions clés :
• Ce n’est pas une boucle while True qui serait interrompue autrement.

Fonctionnement :
• Chaque cadre consomme de la pile jusqu’à l’exception.

Exécution étape par étape :
• Répétition jusqu’à l’erreur.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Débogage : toujours vérifier base + progression vers la base.

Cas limites :
• Récursion mutuelle sans base identique.

Considérations de performance :
• Échec rapide comparé à une vraie infini CPU.

Exemples :
• def f(): return f()

Remarques :
• Réponse : RecursionError (formulation du QCM).`,

  2167: `def func(): return func() ; func()

Débutant :
• Chaque appel en déclenche un autre sans condition d’arrêt → RecursionError.

Intermédiaire :
• Même idée que la question « pas de cas de base » mais avec le nom explicite func.

Expert :
• Tail recursion non optimisée en Python.

Concepts clés :
• Auto-appel direct.

Distinctions clés :
• return func() vs func() seul statement : ici return force la récursion pour la valeur.

Fonctionnement :
• Pile infinie théorique, limitée par l’interpréteur.

Exécution étape par étape :
• Explosion de profondeur.

Ordre des opérations :
• Appel récursif avant de pouvoir retourner une valeur.

Cas d'utilisation courants :
• Anti-pattern démonstratif.

Cas limites :
• Trampoline ou boucle pour remplacer.

Considérations de performance :
• Échec par limite.

Exemples :
• Ajouter if n<=0: return 0 pour une vraie récursion utile.

Remarques :
• Réponse : RecursionError (première option).`,

  2168: `def reverse(s): return '' if not s else reverse(s[1:]) + s[0] ; reverse('abc')

Débutant :
• On inverse la queue puis on accole la tête : '' puis 'c','cb','cba'.

Intermédiaire :
• s[1:] crée des sous-chaînes ; coût quadratique possible.

Expert :
• s[::-1] ou boucle pour production.

Concepts clés :
• Récursion sur chaîne, concaténation.

Distinctions clés :
• Ordre reverse(s[1:]) + s[0] vs s[0] + reverse(s[1:]) donnerait l’identité.

Fonctionnement :
• Base chaîne vide.

Exécution étape par étape :
• Déplier jusqu’à '' puis reconstruire.

Ordre des opérations :
• not s sur str vide est True.

Cas d'utilisation courants :
• Exercices algorithmiques.

Cas limites :
• Très longues chaînes : profondeur + coûts de copie.

Considérations de performance :
• Préférer slicing inverse itératif en pratique.

Exemples :
• reverse('') → ''.

Remarques :
• Réponse : la chaîne cba (option du quiz avec guillemets).`,

  2169: `def gcd(a, b): return a if b == 0 else gcd(b, a % b) ; gcd(48, 18)

Débutant :
• Algorithme d’Euclide : PGCD(48,18)=6.

Intermédiaire :
• Chaque pas remplace (a,b) par (b, a mod b) jusqu’à b=0.

Expert :
• Complexité logarithmique en la taille des entiers.

Concepts clés :
• Récursion mathématique, modulo.

Distinctions clés :
• Pas le minimum des deux nombres.

Fonctionnement :
• gcd(48,18)→gcd(18,12)→gcd(12,6)→gcd(6,0)→6.

Exécution étape par étape :
• Voir déroulement banque.

Ordre des opérations :
• a % b évalué avant l’appel récursif.

Cas d'utilisation courants :
• Fractions irréductibles, crypto pédagogique.

Cas limites :
• b négatif : Python gère modulo avec signe ; version ici suppose usage positif banque.

Considérations de performance :
• Très efficace.

Exemples :
• gcd(17,13)→1.

Remarques :
• Réponse : 6.`,

  2170: `def length(lst): return 0 if not lst else 1 + length(lst[1:]) ; length([1,2,3])

Débutant :
• Compte récursivement : 1 + 1 + 1 + 0 = 3.

Intermédiaire :
• Même piège de coût que sum_list avec lst[1:].

Expert :
• len built-in en O(1) pour list.

Concepts clés :
• Longueur récursive, liste vide comme base.

Distinctions clés :
• Pas la somme des éléments.

Fonctionnement :
• Réduction jusqu’à [].

Exécution étape par étape :
• Trois niveaux puis base.

Ordre des opérations :
• Vérité de liste vide = False.

Cas d'utilisation courants :
• Pédagogie sur les inductifs.

Cas limites :
• Profondeur pour très longues listes.

Considérations de performance :
• Éviter en production pour grandes listes.

Exemples :
• length([]) → 0.

Remarques :
• Réponse : 3.`,

  2171: `def apply(func, x): return func(x) ; apply(lambda x: x*2, 5)

Débutant :
• apply reçoit une fonction et un argument ; la lambda double → 10.

Intermédiaire :
• func est un paramètre comme un int, mais callable.

Expert :
• Typage : Callable[[int], int] en annotations modernes.

Concepts clés :
• Fonction d’ordre supérieur.

Distinctions clés :
• Ce n’est pas map sur une liste.

Fonctionnement :
• Appelle l’objet fonction passé en premier argument.

Exécution étape par étape :
1. func = lambda..., x=5 → 5*2.

Ordre des opérations :
• Évaluation des arguments avant apply.

Cas d'utilisation courants :
• Hooks, stratégies injectées.

Cas limites :
• func non callable → TypeError.

Considérations de performance :
• Négligeable.

Exemples :
• apply(len, "abc") → 3.

Remarques :
• Réponse : 10.`,

  2172: `def make_multiplier(n): return lambda x: x * n ; f = make_multiplier(3) ; f(4)

Débutant :
• La lambda capture n=3 ; f(4) = 12.

Intermédiaire :
• Fabrique de fonctions spécialisées.

Expert :
• functools.partial est une alternative explicite.

Concepts clés :
• Closure sur n, fabrique.

Distinctions clés :
• make_multiplier(3) ne multiplie pas encore : elle retourne une fonction.

Fonctionnement :
• Cellule n liée à 3 dans la lambda retournée.

Exécution étape par étape :
1. f = lambda avec n=3.
2. f(4) → 12.

Ordre des opérations :
• Création de f puis appel.

Cas d'utilisation courants :
• Multiplicateurs, unités, échelles.

Cas limites :
• Muter n après coup si n était mutable (ici int immuable).

Considérations de performance :
• Négligeable.

Exemples :
• make_multiplier(0)(99) → 0.

Remarques :
• Réponse : 12.`,

  2173: `def compose(f, g): return lambda x: f(g(x)) ; compose(lambda x: x+1, lambda x: x*2)(3)

Débutant :
• g(3)=6 puis f(6)=7 : composition f ∘ g.

Intermédiaire :
• L’ordre des arguments compose(f,g) fixe qui est appliqué en premier (g puis f).

Expert :
• functools.reduce pour composer une liste de fonctions.

Concepts clés :
• Composition, enchaînement.

Distinctions clés :
• compose(g,f) inverserait l’effet.

Fonctionnement :
• Un seul appel externe avec x=3.

Exécution étape par étape :
• g puis f.

Ordre des opérations :
• Évaluation des lambdas passées en arguments d’abord.

Cas d'utilisation courants :
• Pipeline fonctionnel.

Cas limites :
• Types incompatibles entre sortie de g et entrée de f.

Considérations de performance :
• Couche d’appels supplémentaires.

Exemples :
• Inverser l’ordre donne 8 sur 3 (banque anglaise le note).

Remarques :
• Réponse : 7.`,

  2174: `map(lambda x: x*2, [1, 2, 3])

Débutant :
• map renvoie un itérateur paresseux (objet map), pas une liste matérialisée.

Intermédiaire :
• list(...) force le parcours complet.

Expert :
• En Python 3, map/filter sont des itérateurs ; en Python 2 map listait.

Concepts clés :
• Évaluation paresseuse, itérateur.

Distinctions clés :
• Ce n’est pas [2,4,6] tant qu’on ne convertit pas.

Fonctionnement :
• Objet qui appellera la lambda sur chaque élément à la demande.

Exécution étape par étape :
• Création immédiate de l’objet map sans parcourir la liste entière pour stocker.

Ordre des opérations :
• Arguments évalués, puis construction map.

Cas d'utilisation courants :
• Chaîner des transformations sans copie intermédiaire.

Cas limites :
• Itérateur épuisable une fois consommé.

Considérations de performance :
• Évite allocations si court-circuit ou zip.

Exemples :
• next(iter(map(...))) pour le premier seulement.

Remarques :
• Réponse : objet map (première option du quiz).`,

  2175: `list(map(lambda x: x*2, [1, 2, 3]))

Débutant :
• list parcourt l’itérateur map et collecte 2, 4, 6.

Intermédiaire :
• Nouvelle liste, la source [1,2,3] inchangée.

Expert :
• Compréhension [x*2 for x in ...] équivalente idiomatique.

Concepts clés :
• Matérialisation d’itérateur.

Distinctions clés :
• Différent de map seul.

Fonctionnement :
• Consommation complète de l’itérateur.

Exécution étape par étape :
• Itération jusqu’à StopIteration puis liste construite.

Ordre des opérations :
• map créé puis list() l’entoure.

Cas d'utilisation courants :
• Résultats réutilisables en liste.

Cas limites :
• Itérable infini → boucle mémoire si list().

Considérations de performance :
• Coût O(n) temps et espace.

Exemples :
• Liste vide → [].

Remarques :
• Réponse : [2, 4, 6].`,
};
