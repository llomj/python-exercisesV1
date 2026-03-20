/** Level 7 FR 2126–2150 — level7.ts Q26–50 (**kwargs, lambdas, return patterns) */
export default {
  2126: `def func(**kwargs): return kwargs

Débutant :
• **kwargs capture les arguments nommés supplémentaires dans un dictionnaire.

Intermédiaire :
• Les clés sont des str des noms de paramètres passés.

Expert :
• Un seul **kwargs par fonction ; combinaison avec *args possible dans un ordre précis.

Concepts clés :
• Keyword packing, dict.

Distinctions clés :
• Ce n’est pas *args.

Fonctionnement :
• Construction du dict à l’appel.

Exécution étape par étape :
• Définition décrit capture kwargs.

Ordre des opérations :
• Après positionnels et *args selon signature.

Cas d'utilisation courants :
• Passer options dynamiques, décorateurs.

Cas limites :
• Clés dupliquées impossibles en appel Python.

Considérations de performance :
• Dict alloué par appel.

Exemples :
• def cfg(**k): return k

Remarques :
• Réponse : définit une fonction à kwargs variables (option du quiz).`,

  2127: `func(a=1, b=2)

Débutant :
• kwargs devient {"a": 1, "b": 2} (ordre d’insertion conservé en 3.7+).

Intermédiaire :
• Les valeurs sont celles passées à l’appel.

Expert :
• Peut être passé à une autre fonction avec ** unpacking.

Concepts clés :
• Dict littéral runtime.

Distinctions clés :
• Pas un tuple.

Fonctionnement :
• Liaison nom→valeur puis dict.

Exécution étape par étape :
1. Dict avec deux entrées.

Ordre des opérations :
• Évaluation des expressions 1 et 2 avant stockage.

Cas d'utilisation courants :
• Configuration nommée.

Cas limites :
• Noms invalides en Python interdits même en kwargs.

Considérations de performance :
• Négligeable pour petit dict.

Exemples :
• Voir banque.

Remarques :
• Réponse : {"a": 1, "b": 2} (formulation du QCM).`,

  2128: `func() sans kwargs

Débutant :
• Aucun nommé → dict vide {}.

Intermédiaire :
• {} est un dict mutable neuf à chaque appel (nouvel objet).

Expert :
• Attention à ne pas réutiliser le même dict par défaut (autre piège) ; ici pas de défaut.

Concepts clés :
• **kwargs vide.

Distinctions clés :
• Pas None.

Fonctionnement :
• Création dict vide.

Exécution étape par étape :
1. {}.

Ordre des opérations :
• Appel sans keyword extras.

Cas d'utilisation courants :
• Optionnels tous absents.

Cas limites :
• Comparer à frozenset() ou tuple() autres types.

Considérations de performance :
• Dict vide optimisé en CPython.

Exemples :
• len(kwargs)==0

Remarques :
• Réponse : {} (dict vide).`,

  2129: `def func(x, *args, **kwargs): return x, args, kwargs

Débutant :
• Combine un fixe, le reste positionnel en tuple, et le reste nommé en dict.

Intermédiaire :
• Ordre signature : paramètres normaux, *args, puis **kwargs éventuellement après keyword-only si / * utilisés (hors énoncé simple).

Expert :
• Pattern wrapper générique.

Concepts clés :
• Signature complète variadique.

Distinctions clés :
• Trois sortes d’arguments distinctes.

Fonctionnement :
• Répartition à l’appel.

Exécution étape par étape :
• Définition valide.

Ordre des opérations :
• Remplissage x, puis args, puis kwargs.

Cas d'utilisation courants :
• décorateur def deco(f): def w(*a,**k): ...

Cas limites :
• Duplication nom entre x et kwargs interdite.

Considérations de performance :
• Coût tuple+dict.

Exemples :
• Voir question suivante.

Remarques :
• Réponse : définit fonction x + *args + **kwargs (option du quiz).`,

  2130: `func(1, 2, 3, a=4)

Débutant :
• x=1, args=(2,3), kwargs={"a":4}.

Intermédiaire :
• Les kwargs ne contiennent que a, pas x.

Expert :
• b=5 en plus irait dans kwargs aussi.

Concepts clés :
• Répartition complète.

Distinctions clés :
• Tuple et dict séparés.

Fonctionnement :
• Premier slot x, puis packing, puis dict pour a.

Exécution étape par étape :
1. (1, (2, 3), {"a": 4}).

Ordre des opérations :
• Positionnels d’abord puis kwargs.

Cas d'utilisation courants :
• Forwarding complet.

Cas limites :
• Nom dupliqué TypeError.

Considérations de performance :
• Négligeable.

Exemples :
• Voir banque level7.

Remarques :
• Réponse : (1, (2, 3), {"a": 4}).`,

  2131: `lambda x: x * 2

Débutant :
• Fonction anonyme en une expression ; pas d’instruction return explicite.

Intermédiaire :
• Corps limité à une expression ; pas de docstring multi-lignes idiomatique.

Expert :
• Closure sur variables englobantes possible.

Concepts clés :
• lambda, expression.

Distinctions clés :
• Ce n’est pas def avec nom obligatoire.

Fonctionnement :
• Création d’objet fonction inline.

Exécution étape par étape :
• Évaluation produit une fonction.

Ordre des opérations :
• lambda lors de l’exécution de la ligne qui la contient.

Cas d'utilisation courants :
• key=, map/filter/sorted courts.

Cas limites :
• Pas de statements (if sauf expression conditionnelle).

Considérations de performance :
• Même coût d’appel qu’une def petite.

Exemples :
• sorted(items, key=lambda t: t[1])

Remarques :
• Réponse : crée une fonction anonyme (option du quiz).`,

  2132: `(lambda x: x * 2)(5)

Débutant :
• Appel immédiat de la lambda avec 5 → 10.

Intermédiaire :
• Parenthèses autour de lambda nécessaires pour appeler.

Expert :
• IIFE style rare en Python mais valide.

Concepts clés :
• Appel direct.

Distinctions clés :
• Sans parenthèses externes, syntaxe ambiguë.

Fonctionnement :
• Création fonction puis __call__(5).

Exécution étape par étape :
1. 10.

Ordre des opérations :
• Évaluation lambda puis argument 5.

Cas d'utilisation courants :
• Micro-calculs dans expressions.

Cas limites :
• Lisibilité : souvent extraire en def nommée.

Considérations de performance :
• Négligeable.

Exemples :
• Voir banque.

Remarques :
• Réponse : 10.`,

  2133: `lambda: 42

Débutant :
• Lambda sans paramètres ; corps 42.

Intermédiaire :
• Syntaxe : lambda: expr (pas de parenthèses vides de paramètres).

Expert :
• Équivalent à def f(): return 42 mais anonyme.

Concepts clés :
• Zéro paramètre.

Distinctions clés :
• lambda () invalide.

Fonctionnement :
• Objet callable sans arguments requis.

Exécution étape par étape :
• Création de la fonction.

Ordre des opérations :
• Pas d’arguments à lier.

Cas d'utilisation courants :
• Factories, valeurs paresseuses.

Cas limites :
• Ne pas oublier les deux-points.

Considérations de performance :
• Négligeable.

Exemples :
• default=lambda: []

Remarques :
• Réponse : crée une fonction sans paramètres (option du quiz).`,

  2134: `(lambda: 42)()

Débutant :
• Appel de la lambda sans args → 42.

Intermédiaire :
• Même idée que 2132 sans paramètre.

Expert :
• Peut capturer des nonlocals si corps plus riche.

Concepts clés :
• Appel zéro-arg.

Distinctions clés :
• lambda: 42() serait parse faux ; parenthèses autour de lambda.

Fonctionnement :
• __call__ sans args.

Exécution étape par étape :
1. 42.

Ordre des opérations :
• Création puis appel.

Cas d'utilisation courants :
• Démonstrations pédagogiques.

Cas limites :
• Style peu idiomatique pour production.

Considérations de performance :
• Négligeable.

Exemples :
• Voir banque.

Remarques :
• Réponse : 42.`,

  2135: `lambda x, y: x + y

Débutant :
• Deux paramètres positionnels dans la lambda.

Intermédiaire :
• Peut être passée là où on attend (a,b) -> valeur.

Expert :
• + polymorphique selon types ; en Python 3 une lambda peut aussi avoir des valeurs par défaut (hors énoncé simple).

Concepts clés :
• Lambda multi-paramètres.

Distinctions clés :
• Corps limité à une seule expression (pas de bloc d’instructions).

Fonctionnement :
• Signature miniature.

Exécution étape par étape :
• Objet fonction créé à l’évaluation de l’expression lambda.

Ordre des opérations :
• Pas de défauts dans l’énoncé de cette question.

Cas d'utilisation courants :
• reduce, operator.add parfois préféré.

Cas limites :
• Corps une seule expression.

Considérations de performance :
• Négligeable.

Exemples :
• Voir 2136.

Remarques :
• Réponse : crée une fonction deux paramètres (option du quiz).`,

  2136: `(lambda x, y: x + y)(3, 4)

Débutant :
• 3+4=7.

Intermédiaire :
• Arguments positionnels à l’appel.

Expert :
• Évaluation de 3 et 4 avant l’appel.

Concepts clés :
• Appel multi-args.

Distinctions clés :
• (3)(4) serait autre chose.

Fonctionnement :
• Liaison x=3,y=4.

Exécution étape par étape :
1. 7.

Ordre des opérations :
• Args puis +.

Cas d'utilisation courants :
• Démonstrations.

Cas limites :
• Types non addables.

Considérations de performance :
• Négligeable.

Exemples :
• Voir banque.

Remarques :
• Réponse : 7.`,

  2137: `f = lambda x: x ** 2; f(5)

Débutant :
• Assignation donne un nom f à la lambda ; f(5) → 25.

Intermédiaire :
• Point-virgule sépare deux statements sur une ligne REPL/style compact.

Expert :
• f.__name__ souvent lambda en CPython.

Concepts clés :
• Nommer une lambda après coup.

Distinctions clés :
• Préférer def f(x): return x**2 pour debug.

Fonctionnement :
• Binding f puis appel.

Exécution étape par étape :
1. 25.

Ordre des opérations :
• Affectation puis appel.

Cas d'utilisation courants :
• Callbacks stockés.

Cas limites :
• Stack traces moins lisibles.

Considérations de performance :
• Négligeable.

Exemples :
• Voir banque.

Remarques :
• Réponse : 25.`,

  2138: `lambda x: x if x > 0 else 0

Débutant :
• Expression conditionnelle (ternaire) dans le corps de la lambda.

Intermédiaire :
• Pas de if statement, seulement expression.

Expert :
• Équivalent à max(x,0) pour nombres mais généralise.

Concepts clés :
• Conditional expression, clamp partiel.

Distinctions clés :
• if/else bas niveau statement interdit dans lambda.

Fonctionnement :
• Évalue condition puis branche.

Exécution étape par étape :
• Création fonction clamp positive.

Ordre des opérations :
• x > 0 d’abord.

Cas d'utilisation courants :
• ReLU-like, bornes simples.

Cas limites :
• Types non comparables.

Considérations de performance :
• Négligeable.

Exemples :
• Voir 2139.

Remarques :
• Réponse : crée une fonction avec expression conditionnelle (option du quiz).`,

  2139: `(lambda x: x if x > 0 else 0)(-5)

Débutant :
• -5 > 0 faux → branche else → 0.

Intermédiaire :
• Court-circuit : seule la branche choisie est évaluée.

Expert :
• Attention aux effets de bord dans les branches.

Concepts clés :
• Test sur négatif.

Distinctions clés :
• Pas abs(-5).

Fonctionnement :
• Appel avec -5.

Exécution étape par étape :
1. 0.

Ordre des opérations :
• Argument puis ternaire.

Cas d'utilisation courants :
• Sanitize entrées.

Cas limites :
• NaN comparisons spéciales.

Considérations de performance :
• Négligeable.

Exemples :
• Voir banque.

Remarques :
• Réponse : 0.`,

  2140: `def vs lambda

Débutant :
• def permet bloc multi-instructions, docstring, annotations riches ; lambda = expression unique anonyme.

Intermédiaire :
• def crée un nom de fonction lisible ; lambda souvent inline.

Expert :
• pickle, introspection, decorators : def plus simple.

Concepts clés :
• Deux syntaxes de fonctions.

Distinctions clés :
• Pas de statements dans lambda.

Fonctionnement :
• Même type de base « function ».

Exécution étape par étape :
• Choix de style selon complexité.

Ordre des opérations :
• N/A conceptuel.

Cas d'utilisation courants :
• lambda pour glue courte ; def pour logique.

Cas limites :
• Sur-complexifier lambda nuit à la lecture.

Considérations de performance :
• Comparable pour corps simple.

Exemples :
• def add(a,b): return a+b vs lambda a,b: a+b

Remarques :
• Réponse : différence principale = corps statement vs expression (option du quiz).`,

  2141: `def func(): return 1

Débutant :
• Fonction nommée qui renvoie littéral 1.

Intermédiaire :
• Chaque appel recalcule (ici constant).

Expert :
• Peut être décorée, attachée à une classe, etc.

Concepts clés :
• return constante.

Distinctions clés :
• Pas de paramètres.

Fonctionnement :
• Corps minimal.

Exécution étape par étape :
• Définition seule.

Ordre des opérations :
• def puis appels futurs.

Cas d'utilisation courants :
• Placeholder retournant code statut.

Cas limites :
• return sans expression → None.

Considérations de performance :
• Négligeable.

Exemples :
• def ok(): return 1

Remarques :
• Réponse : définit une fonction qui renvoie 1 (option du quiz).`,

  2142: `func() après def return 1

Débutant :
• Appel → 1.

Intermédiaire :
• Type int.

Expert :
• truthy en booléen.

Concepts clés :
• Valeur de retour observée.

Distinctions clés :
• Pas print(1).

Fonctionnement :
• Frame, return 1.

Exécution étape par étape :
1. 1.

Ordre des opérations :
• Appel puis return.

Cas d'utilisation courants :
• Tests unitaires sur return.

Cas limites :
• Récursion infinie si mal écrit ailleurs.

Considérations de performance :
• Négligeable.

Exemples :
• Voir banque.

Remarques :
• Réponse : 1.`,

  2143: `def func(): return 1, 2, 3

Débutant :
• Trois éléments avec virgules → tuple (1, 2, 3).

Intermédiaire :
• Un seul objet retourné.

Expert :
• Peut déballer en trois variables.

Concepts clés :
• Tuple triple.

Distinctions clés :
• Pas liste.

Fonctionnement :
• Création tuple puis return.

Exécution étape par étape :
• Définition.

Ordre des opérations :
• return une expression.

Cas d'utilisation courants :
• Statut, min, max, médiane rapide.

Cas limites :
• Un élément tuple besoin virgule finale.

Considérations de performance :
• Petit tuple immuable.

Exemples :
• return a,b,c

Remarques :
• Réponse : définit une fonction qui renvoie un tuple de trois entiers (option du quiz).`,

  2144: `func() avec return 1,2,3

Débutant :
• Résultat (1, 2, 3).

Intermédiaire :
• len 3.

Expert :
• Indexation [0] etc.

Concepts clés :
• Observation du tuple.

Distinctions clés :
• Pas trois valeurs séparées sans déballage.

Fonctionnement :
• Un retour.

Exécution étape par étape :
1. (1, 2, 3).

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• API multi-sorties.

Cas limites :
• Immuabilité du tuple.

Considérations de performance :
• Négligeable.

Exemples :
• Voir banque.

Remarques :
• Réponse : (1, 2, 3).`,

  2145: `a, b = func() avec return 1, 2

Débutant :
• Attention au texte exact du QCM : ici déballage de deux valeurs depuis un tuple de deux éléments si func retourne 1,2.

Intermédiaire :
• Iterable unpacking : a=1, b=2.

Expert :
• Erreur si longueur ne correspond pas.

Concepts clés :
• Unpacking, tuple de retour.

Distinctions clés :
• Pas la même question que triple 1,2,3 sauf si énoncé identique — suivre la banque : pour 2145 c’est return 1, 2 dans level7.

Fonctionnement :
• func() produit (1,2) puis assignation.

Exécution étape par étape :
1. a et b liés.

Ordre des opérations :
• Appel puis unpacking.

Cas d'utilisation courants :
• divmod → q,r = divmod(10,3)

Cas limites :
• Trop de valeurs ValueError.

Considérations de performance :
• Négligeable.

Exemples :
• Voir banque level7 pour l’énoncé exact.

Remarques :
• Réponse : a=1 et b=2 (option du quiz).`,

  2146: `def func(): return

Débutant :
• return nu → None.

Intermédiaire :
• Même famille que 2103.

Expert :
• Tests assert func() is None.

Concepts clés :
• Absence de valeur utile.

Distinctions clés :
• Pas 0.

Fonctionnement :
• Sortie immédiate.

Exécution étape par étape :
• Définition.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Guard clauses.

Cas limites :
• Code mort après return.

Considérations de performance :
• Négligeable.

Exemples :
• Voir banque.

Remarques :
• Réponse : définit une fonction dont l’appel donne None (option du quiz).`,

  2147: `func() après return nu

Débutant :
• None.

Intermédiaire :
• Affichage REPL montre rien de visible sauf repr None.

Expert :
• bool(None) faux.

Concepts clés :
• Résultat d’appel.

Distinctions clés :
• Pas exception.

Fonctionnement :
• Return None.

Exécution étape par étape :
1. None.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• Side-effect only functions parfois return None explicite.

Cas limites :
• is vs == avec None.

Considérations de performance :
• Négligeable.

Exemples :
• Voir banque.

Remarques :
• Réponse : None.`,

  2148: `def func(): pass

Débutant :
• Corps vide exécutable → fin normale → None implicite.

Intermédiaire :
• Comme 2102 revisité dans contexte return.

Expert :
• Utile pour ABC ou stubs.

Concepts clés :
• pass + None implicite.

Distinctions clés :
• Pas return 0.

Fonctionnement :
• Aucune instruction retournant valeur.

Exécution étape par étape :
• Définition.

Ordre des opérations :
• def.

Cas d'utilisation courants :
• Interface à implémenter plus tard.

Cas limites :
• pass dans classe différent niveau.

Considérations de performance :
• Négligeable.

Exemples :
• Voir banque.

Remarques :
• Réponse : définit une fonction qui renvoie None implicitement (option du quiz).`,

  2149: `func() après def pass

Débutant :
• None.

Intermédiaire :
• Même effet que return sans valeur à la fin.

Expert :
• type(None) is NoneType.

Concepts clés :
• Résultat observable None.

Distinctions clés :
• Pas undefined (Python n’a pas).

Fonctionnement :
• Fin de fonction.

Exécution étape par étape :
1. None.

Ordre des opérations :
• Appel.

Cas d'utilisation courants :
• Vérifier callable sans valeur.

Cas limites :
• Confondre avec fonction qui print seulement.

Considérations de performance :
• Négligeable.

Exemples :
• Voir banque.

Remarques :
• Réponse : None.`,

  2150: `def func(): return [1, 2, 3]

Débutant :
• return renvoie une liste littérale trois éléments.

Intermédiaire :
• Nouvelle liste à chaque appel (pas de défaut ici).

Expert :
• Même liste si optimisations constant folding rares ; en pratique nouvelle à chaque appel pour literal dans corps.

Concepts clés :
• Retour collection mutable.

Distinctions clés :
• Pas tuple.

Fonctionnement :
• Création liste puis return.

Exécution étape par étape :
• Définition.

Ordre des opérations :
• À chaque appel : construction liste.

Cas d'utilisation courants :
• Retourner plusieurs résultats ordonnés mutables.

Cas limites :
• Appelant peut muter la liste reçue.

Considérations de performance :
• Allocation liste.

Exemples :
• return [i for i in range(3)]

Remarques :
• Réponse : définit une fonction qui renvoie la liste [1, 2, 3] (option du quiz).`,
};
