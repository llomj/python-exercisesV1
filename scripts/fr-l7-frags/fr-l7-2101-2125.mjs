/** Level 7 FR 2101–2125 — level7.ts Q1–25 (functions, defaults, *args/**kwargs) */
export default {
  2101: `def func(x): return x * 2

Débutant :
• def crée une fonction nommée func ; elle n’est pas exécutée tant qu’on ne l’appelle pas.

Intermédiaire :
• Le corps return x * 2 s’évalue à chaque appel avec la valeur passée pour x.

Expert :
• L’objet fonction est créé à la définition ; les valeurs par défaut des paramètres sont évaluées à la définition (sujet voisin pour listes).

Concepts clés :
• def, paramètre, return, objet fonction.

Distinctions clés :
• Définir n’est pas appeler ; func(5) serait l’appel.

Fonctionnement :
• Liaison du nom func au code et aux métadonnées de la fonction.

Exécution étape par étape :
1. À l’import ou exécution du bloc : construction de l’objet fonction.

Ordre des opérations :
• Lecture de la signature puis compilation du corps.

Cas d'utilisation courants :
• Factoriser un calcul réutilisable.

Cas limites :
• Oublier return → None implicite.

Considérations de performance :
• Appels très fréquents : profiler si besoin.

Exemples :
• func(3) donnerait 6.

Remarques :
• Réponse : définit une fonction (première option du quiz).`,

  2102: `def func(): pass

Débutant :
• pass remplit le corps vide de façon syntaxiquement valide ; func() renverra None.

Intermédiaire :
• Utile pour squelettes, classes ou branches temporaires.

Expert :
• ... (ellipsis) peut parfois remplacer pass selon style, mais pass est le classique.

Concepts clés :
• pass, fonction vide, None implicite.

Distinctions clés :
• Ce n’est pas un appel de fonction.

Fonctionnement :
• Corps minimal exécuté en un pas.

Exécution étape par étape :
1. Définition puis appel éventuel → None.

Ordre des opérations :
• def puis exécution du corps à l’appel.

Cas d'utilisation courants :
• Stubs, TDD, surcharge future.

Cas limites :
• pass seul dans un module ne définit rien sans def.

Considérations de performance :
• Négligeable.

Exemples :
• def todo(): pass

Remarques :
• Réponse : définit une fonction vide (option du quiz).`,

  2103: `def func(): return

Débutant :
• return seul équivaut à return None : la fonction renvoie explicitement None.

Intermédiaire :
• Clarifie l’intention « rien à retourner » par rapport à l’absence de return.

Expert :
• Même effet final que fin de fonction sans return (dans les cas normaux).

Concepts clés :
• return nu, None.

Distinctions clés :
• Différent de return 0 ou return [].

Fonctionnement :
• Sortie immédiate de l’appel avec valeur None.

Exécution étape par étape :
1. func() → None.

Ordre des opérations :
• Évaluation du return sans expression.

Cas d'utilisation courants :
• Sortie anticipée dans un garde-fou.

Cas limites :
• Code après return non atteint.

Considérations de performance :
• Négligeable.

Exemples :
• if not ok: return

Remarques :
• Réponse : définit une fonction qui renvoie None (formulation du QCM).`,

  2104: `def func(): return 1, 2

Débutant :
• La virgule construit un tuple : le return renvoie (1, 2), un seul objet.

Intermédiaire :
• Déballage possible : a, b = func().

Expert :
• return 1, 2 est équivalent à return (1, 2).

Concepts clés :
• Tuple implicite, valeurs multiples.

Distinctions clés :
• Ce n’est pas trois instructions return séparées.

Fonctionnement :
• Une expression tuple évaluée puis renvoyée.

Exécution étape par étape :
1. func() vaut (1, 2).

Ordre des opérations :
• Création du tuple puis return.

Cas d'utilisation courants :
• Statut + message, coordonnées.

Cas limites :
• Une seule valeur avec virgule finale : (1,) nuance.

Considérations de performance :
• Tuple léger.

Exemples :
• return ok, data

Remarques :
• Réponse : définit une fonction qui renvoie un tuple (1, 2).`,

  2105: `Fonction sans return

Débutant :
• À la fin du corps, Python renvoie implicitement None.

Intermédiaire :
• Les fonctions « pour effet de bord » (print, logs) utilisent souvent ce comportement.

Expert :
• return explicite peut court-circuiter avant la fin.

Concepts clés :
• Valeur de retour par défaut None.

Distinctions clés :
• Ne pas confondre avec return 0.

Fonctionnement :
• Fin normale → chargement de None comme résultat d’appel.

Exécution étape par étape :
1. Appel terminé → None.

Ordre des opérations :
• Exécution séquentielle du corps.

Cas d'utilisation courants :
• Procédures, callbacks qui ignorent la valeur.

Cas limites :
• Si une branche return une valeur et l’autre non, types de retour mixtes.

Considérations de performance :
• Négligeable.

Exemples :
• def log(msg): print(msg)

Remarques :
• Réponse : renvoie None (première option).`,

  2106: `def func(x, y): return x + y

Débutant :
• Deux paramètres positionnels nommés x et y ; la fonction renvoie leur somme.

Intermédiaire :
• Appel func(1, 2) lie x à 1 et y à 2 par position.

Expert :
• + délègue à __add__ des objets passés.

Concepts clés :
• Paramètres multiples, return expression.

Distinctions clés :
• Pas encore de valeurs par défaut ici.

Fonctionnement :
• Liaison des arguments puis évaluation de x + y.

Exécution étape par étape :
1. Définition seule ne calcule rien jusqu’à l’appel.

Ordre des opérations :
• def compile le corps ; + au moment de l’appel.

Cas d'utilisation courants :
• Petites utilitaires arithmétiques ou concaténation selon types.

Cas limites :
• Types non supportés par + → TypeError à l’appel.

Considérations de performance :
• Négligeable pour int.

Exemples :
• func("a","b") → "ab"

Remarques :
• Réponse : définit une fonction à deux paramètres (option du quiz).`,

  2107: `func(1, 2) avec return x + y

Débutant :
• Arguments positionnels : x=1, y=2 → 1 + 2 = 3.

Intermédiaire :
• L’ordre des arguments compte sans noms.

Expert :
• Mélange positionnel / nommé viendra après (autres questions).

Concepts clés :
• Appel, liaison positionnelle.

Distinctions clés :
• func(2,1) donnerait 3 aussi mais x et y inversés.

Fonctionnement :
• Frame d’appel, assignation locale x,y.

Exécution étape par étape :
1. Résultat 3.

Ordre des opérations :
• Évaluation des arguments gauche-droite puis entrée en fonction.

Cas d'utilisation courants :
• API simples à deux entrées.

Cas limites :
• Trop peu ou trop d’arguments → TypeError.

Considérations de performance :
• Négligeable.

Exemples :
• add(10, 20)

Remarques :
• Réponse : 3.`,

  2108: `func(x=1, y=2)

Débutant :
• Arguments nommés : x vaut 1, y vaut 2 ; somme 3.

Intermédiaire :
• L’ordre des kwargs peut changer : func(y=2, x=1) identique.

Expert :
• Après le premier argument positionnel nommé, il faut continuer en kwargs si on mélange (règles de grammaire).

Concepts clés :
• Keyword arguments.

Distinctions clés :
• Pas la même chose que un dict passé en position.

Fonctionnement :
• Correspondance nom → paramètre.

Exécution étape par étape :
1. 3.

Ordre des opérations :
• Liaison par nom indépendante de l’ordre d’écriture.

Cas d'utilisation courants :
• Lisibilité, paramètres optionnels nombreux.

Cas limites :
• Nom inconnu → TypeError.

Considérations de performance :
• Négligeable.

Exemples :
• help(verbose=True)

Remarques :
• Réponse : 3.`,

  2109: `func(1, y=2)

Débutant :
• 1 en position pour x, y nommé à 2 → encore 3.

Intermédiaire :
• Tous les positionnels doivent précéder les kwargs dans l’appel.

Expert :
• Erreur si on écrit func(y=2, 1).

Concepts clés :
• Mélange positionnel + mot-clé.

Distinctions clés :
• y=2 ne « saute » pas x.

Fonctionnement :
• Premier slot x, second paramètre rempli par nom.

Exécution étape par étape :
1. 3.

Ordre des opérations :
• Arguments positionnels d’abord, puis keyword.

Cas d'utilisation courants :
• Premier argument obligatoire évident, second explicite.

Cas limites :
• Dupliquer x en position et en nom → TypeError.

Considérations de performance :
• Négligeable.

Exemples :
• open(path, mode="r")

Remarques :
• Réponse : 3.`,

  2110: `func() avec x=1 par défaut

Débutant :
• Sans argument, x prend la valeur par défaut 1.

Intermédiaire :
• La valeur par défaut est stockée dans __defaults__ de la fonction.

Expert :
• Objets mutables en défaut partagés entre appels (piège classique, autre question).

Concepts clés :
• Paramètre par défaut, appel sans args.

Distinctions clés :
• func(5) écrase le défaut.

Fonctionnement :
• Remplissage des paramètres manquants avec défauts.

Exécution étape par étape :
1. Retour 1.

Ordre des opérations :
• Création de la fonction une fois ; défauts évalués à la définition.

Cas d'utilisation courants :
• Options, timeouts, flags.

Cas limites :
• None comme défaut pour dire « non fourni ».

Considérations de performance :
• Négligeable.

Exemples :
• def f(debug=False)

Remarques :
• Réponse : 1.`,

  2111: `def func(x=1): return x

Débutant :
• La signature annonce un paramètre optionnel x avec défaut 1.

Intermédiaire :
• Définition valide ; comportement d’appel déjà vu sur func() et func(2).

Expert :
• inspect.signature pour introspection.

Concepts clés :
• Syntaxe des défauts dans la définition.

Distinctions clés :
• Ce n’est pas une valeur globale x hors fonction.

Fonctionnement :
• Tuple des défauts attaché à l’objet fonction.

Exécution étape par étape :
• Prépare les appels futurs.

Ordre des opérations :
• Paramètre avec = dans l’en-tête.

Cas d'utilisation courants :
• API évolutives rétrocompatibles.

Cas limites :
• Ordre requis avant défauts (param non défaut d’abord).

Considérations de performance :
• Négligeable.

Exemples :
• round(x, ndigits=0)

Remarques :
• Réponse : définit une fonction avec paramètre par défaut (option du quiz).`,

  2112: `func(2) écrase le défaut

Débutant :
• x vaut 2, pas 1.

Intermédiaire :
• L’argument explicite a priorité sur __defaults__.

Expert :
• Keyword peut aussi écraser : func(x=9).

Concepts clés :
• Surcharge du défaut.

Distinctions clés :
• Ne modifie pas le défaut stocké pour les autres appels.

Fonctionnement :
• Liaison locale x=2 pour cet appel.

Exécution étape par étape :
1. Retour 2.

Ordre des opérations :
• Binding des arguments puis corps.

Cas d'utilisation courants :
• Valeurs utilisateur qui remplacent les réglages par défaut.

Cas limites :
• Types inattendus si pas de validation.

Considérations de performance :
• Négligeable.

Exemples :
• max(iterable, default=0) conceptuel.

Remarques :
• Réponse : 2.`,

  2113: `def func(x, y=2): return x + y

Débutant :
• x obligatoire, y optionnel à 2.

Intermédiaire :
• Syntaxe Python : paramètres sans défaut avant ceux avec défaut.

Expert :
• Évite l’ambiguïté à l’appel.

Concepts clés :
• Paramètre requis + défaut.

Distinctions clés :
• Pas deux défauts ici mais y seul.

Fonctionnement :
• func(1) possible ; func() non sans x.

Exécution étape par étape :
• Définition valide.

Ordre des opérations :
• Analyse statique de la signature.

Cas d'utilisation courants :
• Donnée principale + option.

Cas limites :
• Oublier x → TypeError.

Considérations de performance :
• Négligeable.

Exemples :
• open(file, mode="r")

Remarques :
• Réponse : définit fonction avec requis et défaut (option du quiz).`,

  2114: `func(1) avec y=2 par défaut

Débutant :
• x reçoit 1, y reste 2 → somme 3.

Intermédiaire :
• Un seul argument positionnel suffit.

Expert :
• func(1, 5) donnerait 6.

Concepts clés :
• Défaut pour second paramètre seulement.

Distinctions clés :
• Ne pas croire que y « disparaît ».

Fonctionnement :
• Remplissage : x=1, y défaut.

Exécution étape par étape :
1. 3.

Ordre des opérations :
• Appel puis return.

Cas d'utilisation courants :
• Fonctions de ligne de commande avec options.

Cas limites :
• Keyword-only parameters (/) et (*) hors énoncé.

Considérations de performance :
• Négligeable.

Exemples :
• range(stop) vs range(start, stop)

Remarques :
• Réponse : 3.`,

  2115: `def func(x=1, y): ...

Débutant :
• SyntaxError : un paramètre sans défaut ne peut pas suivre un paramètre avec défaut.

Intermédiaire :
• Message du parseur : non-default argument follows default argument.

Expert :
• Réécrire def func(y, x=1).

Concepts clés :
• Grammaire de la signature.

Distinctions clés :
• Erreur à la compilation du fichier, pas à l’exécution d’une ligne isolée REPL même catégorie.

Fonctionnement :
• Échec du parseur.

Exécution étape par étape :
1. SyntaxError.

Ordre des opérations :
• Avant exécution du corps.

Cas d'utilisation courants :
• Éviter ambiguïté sur appels partiels.

Cas limites :
• Python 3 ne permet pas de contourner sans * / restructure.

Considérations de performance :
• N/A.

Exemples :
• def f(a, b=1, c) interdit.

Remarques :
• Réponse : SyntaxError (première option).`,

  2116: `def func(x=[]): append et return

Débutant :
• La liste par défaut est créée une seule fois à la définition ; tous les appels partagent la même liste → piège classique.

Intermédiaire :
• Chaque append persiste pour les appels suivants si on ne passe pas d’argument.

Expert :
• Raison : objets mutables évalués une fois au moment de def.

Concepts clés :
• Argument par défaut mutable partagé.

Distinctions clés :
• Différent de une nouvelle liste à chaque appel.

Fonctionnement :
• Même objet liste réutilisé comme valeur par défaut de x.

Exécution étape par étape :
• Premier appel [1], second [1,1], etc.

Ordre des opérations :
• Création du défaut au define-time.

Cas d'utilisation courants :
• Anti-pattern à reconnaître en relecture.

Cas limites :
• Passer explicitement une nouvelle [] à chaque appel évite le partage.

Considérations de performance :
• Partage accidentel = état global caché.

Exemples :
• Utiliser None puis if x is None: x = []

Remarques :
• Réponse : définit une fonction à défaut mutable problématique (option du quiz).`,

  2117: `def func(x=None): x = x or []; append

Débutant :
• None est immuable comme défaut ; à chaque appel sans liste, x or [] crée une nouvelle liste locale.

Intermédiaire :
• Attention : x or [] traite aussi [] comme falsy et remplace ; souvent on préfère if x is None.

Expert :
• Idiomatique pour débutants : if x is None: x = [].

Concepts clés :
• Défaut sûr, nouvelle liste par appel.

Distinctions clés :
• Contraste direct avec 2116.

Fonctionnement :
• Réaffectation de x vers une nouvelle liste quand besoin.

Exécution étape par étape :
• Chaque func() isolé avec sa propre liste si None.

Ordre des opérations :
• Évaluation des défauts puis corps.

Cas d'utilisation courants :
• Agrégation optionnelle par appel.

Cas limites :
• Passer 0 ou False pourrait surprendre avec or.

Considérations de performance :
• Coût d’allocation liste par appel.

Exemples :
• Pattern is None explicite.

Remarques :
• Réponse : motif sûr pour défaut mutable (option du quiz).`,

  2118: `Deux appels func() avec x=[] par défaut

Débutant :
• Premier appel retourne [1] ; second part de la même liste déjà modifiée → [1, 1].

Intermédiaire :
• Démonstration concrète du partage.

Expert :
• id(x) identique entre appels si défaut utilisé.

Concepts clés :
• État persistant entre appels.

Distinctions clés :
• Si vous passiez [] explicitement à chaque fois, listes différentes.

Fonctionnement :
• append sur l’unique liste défaut.

Exécution étape par étape :
1. [1] puis [1, 1].

Ordre des opérations :
• Deux appels successifs.

Cas d'utilisation courants :
• Tests unitaires sur piège des défauts.

Cas limites :
• Réinitialiser en passant une copie ou None.

Considérations de performance :
• Croissance de la liste partagée.

Exemples :
• Voir 2117 pour correction.

Remarques :
• Réponse : [1] puis [1, 1] (option du quiz).`,

  2119: `def func(x=1, y=2, z=3): return x, y, z

Débutant :
• Trois défauts ; tous peuvent être omis ou surchargés par position.

Intermédiaire :
• func() → (1,2,3).

Expert :
• Les défauts sont un tuple dans __defaults__ (les n derniers paramètres avec défaut).

Concepts clés :
• Multiples valeurs par défaut.

Distinctions clés :
• Un seul tuple retourné, pas trois return.

Fonctionnement :
• Liaison progressive des arguments.

Exécution étape par étape :
• Souplesse d’appel 0 à 3 arguments positionnels.

Ordre des opérations :
• Gauche à droite pour positionnels.

Cas d'utilisation courants :
• Configurations à plusieurs réglages.

Cas limites :
• Combiner avec *args demande ordre strict.

Considérations de performance :
• Négligeable.

Exemples :
• func(10) → (10,2,3)

Remarques :
• Réponse : définit une fonction avec plusieurs défauts (option du quiz).`,

  2120: `func(10) avec trois défauts

Débutant :
• 10 va sur x ; y et z gardent 2 et 3.

Intermédiaire :
• Tuple retourné (10, 2, 3).

Expert :
• func(10, 20) surchargerait y aussi.

Concepts clés :
• Remplissage positionnel partiel.

Distinctions clés :
• Pas besoin de kwargs ici.

Fonctionnement :
• Premier slot consommé, autres défauts.

Exécution étape par étape :
1. (10, 2, 3).

Ordre des opérations :
• Binding puis return tuple.

Cas d'utilisation courants :
• Surcharge du premier paramètre le plus important.

Cas limites :
• Trop d’arguments positionnels → erreur.

Considérations de performance :
• Négligeable.

Exemples :
• Voir banque level7.

Remarques :
• Réponse : (10, 2, 3).`,

  2121: `def func(*args): return args

Débutant :
• *args regroupe les arguments positionnels supplémentaires dans un tuple (nom conventionnel args).

Intermédiaire :
• Peut être vide ().

Expert :
• Peut combiner avec paramètres nommés avant *args selon règles.

Concepts clés :
• Packing positionnel, tuple.

Distinctions clés :
• Ce n’est pas une liste modifiable par l’appelant via args seul.

Fonctionnement :
• Construction du tuple à chaque appel.

Exécution étape par étape :
• Définition décrit variadique.

Ordre des opérations :
• À l’appel : collecte des positionnels.

Cas d'utilisation courants :
• Wrappers, print format, min/max sur nombre variable.

Cas limites :
• **kwargs autre syntaxe.

Considérations de performance :
• Tuple alloué par appel.

Exemples :
• def trace(*a): print(a)

Remarques :
• Réponse : définit une fonction à arguments positionnels variables (option du quiz).`,

  2122: `func(1, 2, 3) et *args

Débutant :
• args devient le tuple (1, 2, 3).

Intermédiaire :
• Type tuple, pas liste.

Expert :
• Un seul *args par fonction ; nom interne libre mais args idiomatique.

Concepts clés :
• Collecte multi-valeurs.

Distinctions clés :
• func() donne ().

Fonctionnement :
• Empaquetage des trois valeurs.

Exécution étape par étape :
1. Retour (1, 2, 3).

Ordre des opérations :
• Évaluation des arguments puis packing.

Cas d'utilisation courants :
• forward *args vers une autre fonction.

Cas limites :
• Keyword seuls ne vont pas dans args.

Considérations de performance :
• O(n) arguments.

Exemples :
• max(*values) unpacking inverse à l’appel.

Remarques :
• Réponse : (1, 2, 3).`,

  2123: `func() sans args avec *args

Débutant :
• Aucun positionnel → tuple vide ().

Intermédiaire :
• Utile pour tester len(args)==0.

Expert :
• () est falsy mais valide.

Concepts clés :
• *args vide.

Distinctions clés :
• Pas None.

Fonctionnement :
• Tuple vide créé.

Exécution étape par étape :
1. ().

Ordre des opérations :
• Appel sans arguments positionnels.

Cas d'utilisation courants :
• APIs variadiques optionnelles.

Cas limites :
• Confondre avec None retour explicite.

Considérations de performance :
• Tuple vide singleton en CPython.

Exemples :
• def f(*a): return len(a)

Remarques :
• Réponse : () (tuple vide).`,

  2124: `def func(x, *args): return x, args

Débutant :
• Premier argument fixe x, le reste en tuple args.

Intermédiaire :
• Pattern « tête + reste ».

Expert :
• Après *args on ne peut plus avoir paramètres positionnels ordinaires ; keyword-only avec * possible.

Concepts clés :
• Paramètre fixe + variadique.

Distinctions clés :
• x n’est pas dans args.

Fonctionnement :
• Consommation du premier argument hors *args.

Exécution étape par étape :
• Définition valide.

Ordre des opérations :
• Signature : requis puis étoile.

Cas d'utilisation courants :
• Commandes CLI cmd, subargs.

Cas limites :
• func() sans x → TypeError.

Considérations de performance :
• Négligeable.

Exemples :
• divmod-like custom.

Remarques :
• Réponse : définit fonction avec x puis *args (option du quiz).`,

  2125: `func(1, 2, 3) avec x et *args

Débutant :
• x=1, args=(2, 3).

Intermédiaire :
• Retour (1, (2, 3)) tuple imbriqué.

Expert :
• Un élément seul en reste : (1, (2,)).

Concepts clés :
• Répartition premier / reste.

Distinctions clés :
• Pas (1, 2, 3) comme trois valeurs séparées du return sans virgule supplémentaire.

Fonctionnement :
• Liaison 1 puis packing 2,3.

Exécution étape par étape :
1. (1, (2, 3)).

Ordre des opérations :
• Positionnels gauche-droite.

Cas d'utilisation courants :
• Wrappers type decorator.

Cas limites :
• Keyword pour x possible : func(x=1, 2) invalide syntaxe d’appel.

Considérations de performance :
• Négligeable.

Exemples :
• Voir texte anglais de la banque.

Remarques :
• Réponse : (1, (2, 3)).`,
};
