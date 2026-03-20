/** Level 3 FR 901–950 — Conditionals, Booleans, Logic (CRAB). Aligned with level3.ts. */
export default {
  901: `True and False vaut False : l'opérateur and exige que les deux opérandes soient vrais pour renvoyer True ; dès qu'un opérande est False, le résultat est False.

Débutant :
• and signifie « et » : les deux côtés doivent être vrais.
• True and False → False car le second opérande est faux.

Intermédiaire :
• and court-circuite : si le premier est False, le second n'est pas évalué.
• Ici le premier est True, donc Python évalue False et renvoie False.

Expert :
• and renvoie le dernier opérande évalué ou le premier falsy.
• True and False → évalue les deux, renvoie False.

Concepts clés :
• Conjonction logique, court-circuit, évaluation paresseuse.

Distinctions clés :
• True and False ≠ True or False (or renverrait True).

Fonctionnement :
• Python évalue True (truthy), puis False (falsy) ; and renvoie le dernier évalué.

Exécution étape par étape :
1. Évaluer True → truthy, continuer.
2. Évaluer False → falsy.
3. and renvoie False.

Ordre des opérations :
• and a priorité plus faible que or et not dans les expressions complexes.

Cas d'utilisation courants :
• Conditions composées : if x > 0 and x < 10.

Cas limites :
• and avec expressions à effets de bord : le second peut ne pas s'exécuter.

Considérations de performance :
• Court-circuit évite des calculs inutiles quand le premier est falsy.

Exemples :
• True and True  # True
• 1 and 0  # 0 (and renvoie la valeur, pas forcément bool)

Remarques :
• and/or renvoient une des valeurs évaluées, pas toujours True/False.`,

  902: `True or False vaut True : l'opérateur or renvoie True dès qu'un opérande est truthy ; ici le premier (True) suffit.

Débutant :
• or signifie « ou » : au moins un côté doit être vrai.
• True or False → True car le premier est déjà vrai.

Intermédiaire :
• or court-circuite : si le premier est truthy, le second n'est jamais évalué.
• Python s'arrête à True et renvoie True.

Expert :
• or renvoie le premier opérande truthy ou le dernier si tous sont falsy.
• True or False → True (court-circuit, False jamais évalué).

Concepts clés :
• Disjonction logique, court-circuit, évaluation paresseuse.

Distinctions clés :
• True or False ≠ True and False (and exigerait les deux vrais).

Fonctionnement :
• Python évalue True ; c'est truthy, donc or renvoie True sans toucher à False.

Exécution étape par étape :
1. Évaluer True → truthy.
2. Court-circuit : renvoyer True immédiatement.
3. False n'est jamais évalué.

Ordre des opérations :
• or a priorité plus faible que and ; and plus faible que not.

Cas d'utilisation courants :
• Valeur par défaut : x = user_input or "default".

Cas limites :
• 0 or 1 → 1 (or renvoie la valeur truthy, pas True).

Considérations de performance :
• Court-circuit évite d'évaluer le second opérande si le premier suffit.

Exemples :
• False or True  # True
• "" or "hello"  # "hello"

Remarques :
• Utiliser or pour des valeurs par défaut est idiomatique en Python.`,

  903: `False and False vaut False : avec and, si le premier opérande est False, le résultat est False sans évaluer le second.

Débutant :
• and exige que les deux soient vrais.
• Dès que le premier est False, le résultat est False.

Intermédiaire :
• Court-circuit : False and ... ne nécessite pas d'évaluer le second.
• Python renvoie False immédiatement.

Expert :
• and renvoie le premier falsy ou le dernier opérande évalué.
• False and False → False (court-circuit sur le premier).

Concepts clés :
• Court-circuit sur and : premier falsy arrête l'évaluation.

Distinctions clés :
• False and False vs False or False : and reste False, or aussi (aucun truthy).

Fonctionnement :
• Premier False évalué → falsy → and renvoie False, second jamais évalué.

Exécution étape par étape :
1. Évaluer False → falsy.
2. Court-circuit : renvoyer False.
3. Le second False n'est pas évalué.

Ordre des opérations :
• Une seule évaluation nécessaire grâce au court-circuit.

Cas d'utilisation courants :
• Vérifications en chaîne : if a and b and c (s'arrête au premier faux).

Cas limites :
• False and expensive_call() : expensive_call() n'est jamais exécuté.

Considérations de performance :
• Très efficace : évite des calculs coûteux quand la condition est déjà fausse.

Exemples :
• False and True  # False
• [] and [1,2]  # [] (premier falsy)

Remarques :
• Placer la condition la plus rapide ou la plus probable en premier peut optimiser.`,

  904: `False or False vaut False : or renvoie True seulement si au moins un opérande est truthy ; ici les deux sont False.

Débutant :
• or signifie « ou » : un des deux doit être vrai.
• False or False → aucun n'est vrai, donc False.

Intermédiaire :
• or évalue de gauche à droite ; si le premier est falsy, il évalue le second.
• Les deux sont False → résultat False.

Expert :
• or renvoie le premier truthy ou le dernier opérande si tous sont falsy.
• False or False → évalue les deux, renvoie le dernier (False).

Concepts clés :
• Disjonction : aucun truthy → résultat falsy (le dernier évalué).

Distinctions clés :
• False or False vs False and False : les deux donnent False mais pour des raisons différentes.

Fonctionnement :
• Python évalue False (falsy), puis le second False (falsy) ; or renvoie ce dernier.

Exécution étape par étape :
1. Évaluer False → falsy, continuer.
2. Évaluer False → falsy.
3. or renvoie False (dernier évalué).

Ordre des opérations :
• Pas de court-circuit ici : les deux opérandes sont évalués.

Cas d'utilisation courants :
• Chaîne de fallbacks : x = a or b or c (premier truthy gagne).

Cas limites :
• 0 or 0 or [] → [] (tous falsy, renvoie le dernier).

Considérations de performance :
• Quand le premier est falsy, or doit évaluer le second.

Exemples :
• None or None  # None
• 0 or 0.0  # 0.0

Remarques :
• or ne renvoie pas toujours bool ; il renvoie une des valeurs.`,

  905: `True and True vaut True : and exige que les deux opérandes soient truthy ; ici les deux le sont.

Débutant :
• and signifie « et » : les deux doivent être vrais.
• True and True → True car les deux sont vrais.

Intermédiaire :
• Aucun court-circuit : les deux sont évalués (ou pourraient l'être).
• and renvoie le dernier opérande évalué quand tous sont truthy.

Expert :
• and renvoie le premier falsy ou le dernier opérande.
• True and True → les deux truthy, renvoie True (le dernier).

Concepts clés :
• Conjonction : tous truthy → résultat = dernier opérande.

Distinctions clés :
• True and True vs True or True : les deux donnent True.

Fonctionnement :
• Python évalue True, puis True ; tous truthy → and renvoie le dernier (True).

Exécution étape par étape :
1. Évaluer True → truthy, continuer.
2. Évaluer True → truthy.
3. and renvoie True.

Ordre des opérations :
• Priorité : not > and > or.

Cas d'utilisation courants :
• Conditions multiples : if age >= 18 and has_id.

Cas limites :
• 1 and 2 → 2 (and renvoie la valeur, pas True).

Considérations de performance :
• Les deux opérandes sont évalués ; pas de gain de court-circuit ici.

Exemples :
• True and 1  # 1
• "a" and "b"  # "b"

Remarques :
• En conditions if, toute valeur truthy est acceptée ; le résultat peut ne pas être bool.`,

  906: `True or True vaut True : or renvoie le premier opérande truthy ; ici le premier (True) suffit.

Débutant :
• or signifie « ou » : au moins un doit être vrai.
• True or True → True car le premier est déjà vrai.

Intermédiaire :
• Court-circuit : le second True n'est jamais évalué.
• Python s'arrête au premier truthy.

Expert :
• or renvoie le premier truthy ou le dernier si tous falsy.
• True or True → True (court-circuit immédiat).

Concepts clés :
• Court-circuit sur or : premier truthy suffit.

Distinctions clés :
• True or True vs True and True : les deux donnent True.

Fonctionnement :
• Premier True évalué → truthy → or renvoie True, second jamais évalué.

Exécution étape par étape :
1. Évaluer True → truthy.
2. Court-circuit : renvoyer True.
3. Le second True n'est pas évalué.

Ordre des opérations :
• Une seule évaluation grâce au court-circuit.

Cas d'utilisation courants :
• Fallback rapide : config or default_config.

Cas limites :
• True or expensive_call() : expensive_call() n'est jamais exécuté.

Considérations de performance :
• Très efficace quand le premier opérande est souvent truthy.

Exemples :
• 1 or 2  # 1
• "x" or "y"  # "x"

Remarques :
• Placer l'option la plus probable en premier optimise les or.`,

  907: `not True vaut False : not inverse la valeur booléenne ; True devient False.

Débutant :
• not signifie « non » ou « pas ».
• not True → False.

Intermédiaire :
• not est un opérateur unaire ; il précède son opérande.
• not convertit toute valeur en bool puis inverse.

Expert :
• not x équivaut à not bool(x) pour les valeurs truthy/falsy.
• not True → False (inversion directe).

Concepts clés :
• Négation logique, opérateur unaire.

Distinctions clés :
• not True vs not False : inverse de chaque côté.

Fonctionnement :
• Python évalue True, applique not, renvoie False.

Exécution étape par étape :
1. Évaluer True.
2. Appliquer not → False.
3. Renvoyer False.

Ordre des opérations :
• not a la priorité la plus haute parmi and, or, not.

Cas d'utilisation courants :
• Inverser une condition : if not found.

Cas limites :
• not [] → True (liste vide falsy, not donne True).

Considérations de performance :
• Négligeable ; not est très rapide.

Exemples :
• not 1  # False
• not ""  # True

Remarques :
• not renvoie toujours bool (True ou False).`,

  908: `not False vaut True : not inverse la valeur booléenne ; False devient True.

Débutant :
• not signifie « non » ou « pas ».
• not False → True.

Intermédiaire :
• not est un opérateur unaire de négation.
• not False → True (double négation logique).

Expert :
• not x pour x falsy donne True.
• not False → True (inversion directe).

Concepts clés :
• Négation logique : falsy → True après not.

Distinctions clés :
• not False vs not True : symétrique.

Fonctionnement :
• Python évalue False, applique not, renvoie True.

Exécution étape par étape :
1. Évaluer False.
2. Appliquer not → True.
3. Renvoyer True.

Ordre des opérations :
• not a priorité plus haute que and et or.

Cas d'utilisation courants :
• Vérifier l'absence : if not error.

Cas limites :
• not 0 → True, not None → True.

Considérations de performance :
• Négligeable.

Exemples :
• not []  # True
• not None  # True

Remarques :
• not est le seul opérateur logique qui renvoie toujours un bool.`,

  909: `not (True and False) vaut True : les parenthèses forcent d'abord True and False (= False), puis not inverse en True.

Débutant :
• D'abord calculer True and False → False.
• Puis not False → True.

Intermédiaire :
• Parenthèses changent l'ordre : and avant not.
• not (False) = True.

Expert :
• Équivalent à not False car True and False → False.
• Lois de De Morgan : not (A and B) = (not A) or (not B).

Concepts clés :
• Priorité : parenthèses > not > and > or.

Distinctions clés :
• not (True and False) ≠ not True and False (ce dernier = False and False = False).

Fonctionnement :
• Sous-expression (True and False) → False.
• not False → True.

Exécution étape par étape :
1. Évaluer True and False → False.
2. Appliquer not à False → True.
3. Résultat : True.

Ordre des opérations :
• Parenthèses d'abord, puis not.

Cas d'utilisation courants :
• Exprimer « ni l'un ni l'autre » : not (a and b).

Cas limites :
• not (x and y) équivaut à (not x) or (not y) par De Morgan.

Considérations de performance :
• and court-circuite ; not est immédiat.

Exemples :
• not (False and True)  # True
• not (1 and 0)  # True

Remarques :
• Les parenthèses sont essentielles pour éviter not True and False.`,

  910: `not True or False vaut False : not True s'évalue d'abord (= False), puis False or False = False.

Débutant :
• not True → False.
• False or False → False.

Intermédiaire :
• Priorité : not avant or. Donc (not True) or False.
• not True = False, False or False = False.

Expert :
• Pas de parenthèses : not True or False = (not True) or False.
• Résultat : False or False = False.

Concepts clés :
• Priorité des opérateurs : not > or.

Distinctions clés :
• not True or False ≠ not (True or False) ; ce dernier = not True = False aussi ici, mais la structure diffère.

Fonctionnement :
• not True → False.
• False or False → False (dernier évalué).

Exécution étape par étape :
1. not True → False.
2. False or False : évaluer les deux.
3. Résultat False.

Ordre des opérations :
• not (unaire) avant or (binaire).

Cas d'utilisation courants :
• Erreur fréquente : oublier des parenthèses dans des conditions complexes.

Cas limites :
• not x or y : si x truthy, not x = False, donc or évalue y.

Considérations de performance :
• Les deux opérandes de or sont évalués (pas de court-circuit).

Exemples :
• not False or True  # True (not False = True, court-circuit)
• not 1 or 0  # False

Remarques :
• Toujours parenthéser les expressions logiques complexes pour éviter les surprises.`,

  911: `10 > 5 vaut True : l'opérateur > compare deux nombres ; 10 est strictement supérieur à 5.

Débutant :
• > signifie « strictement supérieur à ».
• 10 > 5 → True car 10 est plus grand que 5.

Intermédiaire :
• Les opérateurs de comparaison renvoient toujours bool.
• 10 > 5 est une comparaison numérique directe.

Expert :
• > appelle __gt__ sur l'objet de gauche (ou __lt__ sur celui de droite).
• Pour int, comparaison arithmétique standard.

Concepts clés :
• Opérateur de comparaison, résultat booléen.

Distinctions clés :
• 10 > 5 vs 10 >= 5 : les deux True ; >= inclut l'égalité.

Fonctionnement :
• Python compare 10 et 5, renvoie True.

Exécution étape par étape :
1. Évaluer 10 et 5.
2. Comparer avec >.
3. Renvoyer True.

Ordre des opérations :
• Comparaisons ont priorité plus faible que l'arithmétique.

Cas d'utilisation courants :
• Conditions : if age > 18.

Cas limites :
• 10.0 > 5 → True (comparaison int/float possible).

Considérations de performance :
• Très rapide pour les types numériques.

Exemples :
• 3 > 2  # True
• 0 > -1  # True

Remarques :
• Les chaînes sont comparées lexicographiquement avec >.`,

  912: `5 < 10 vaut True : l'opérateur < compare deux nombres ; 5 est strictement inférieur à 10.

Débutant :
• < signifie « strictement inférieur à ».
• 5 < 10 → True car 5 est plus petit que 10.

Intermédiaire :
• < renvoie un bool (True ou False).
• Symétrique de > : a < b équivaut à b > a.

Expert :
• < appelle __lt__ sur l'objet de gauche.
• Pour int/float, ordre numérique standard.

Concepts clés :
• Comparaison stricte, ordre numérique.

Distinctions clés :
• 5 < 10 vs 5 <= 10 : les deux True.

Fonctionnement :
• Python compare 5 et 10, renvoie True.

Exécution étape par étape :
1. Évaluer 5 et 10.
2. Comparer avec <.
3. Renvoyer True.

Ordre des opérations :
• Priorité faible, évaluation de gauche à droite pour chaînages.

Cas d'utilisation courants :
• Vérifier une borne : if 0 < x < 100.

Cas limites :
• -5 < 0 → True (négatifs plus petits que zéro).

Considérations de performance :
• Négligeable.

Exemples :
• 1 < 2  # True
• 5 < 5  # False

Remarques :
• Pour les chaînes, < suit l'ordre lexicographique (alphabétique).`,

  913: `10 >= 10 vaut True : >= signifie « supérieur ou égal » ; 10 est égal à 10, donc la condition est vraie.

Débutant :
• >= inclut l'égalité.
• 10 >= 10 → True car 10 est égal à 10.

Intermédiaire :
• >= est la négation logique de < (strictement inférieur).
• a >= b équivaut à not (a < b) pour des types comparables.

Expert :
• >= appelle __ge__ (greater or equal).
• Pour int, 10 >= 10 car 10 n'est pas < 10.

Concepts clés :
• Comparaison « supérieur ou égal », borne inclusive.

Distinctions clés :
• 10 >= 10 (True) vs 10 > 10 (False).

Fonctionnement :
• Python vérifie si 10 n'est pas strictement inférieur à 10 → True.

Exécution étape par étape :
1. Évaluer 10 et 10.
2. Tester >= (égalité suffit).
3. Renvoyer True.

Ordre des opérations :
• Comparaisons chaînables : 5 <= 10 <= 15.

Cas d'utilisation courants :
• Bornes inclusives : if 0 <= index < len(lst).

Cas limites :
• float : 1.0 >= 1 → True.

Considérations de performance :
• Négligeable.

Exemples :
• 5 >= 5  # True
• 4 >= 5  # False

Remarques :
• >= et <= sont utiles pour des intervalles fermés.`,

  914: `5 <= 10 vaut True : <= signifie « inférieur ou égal » ; 5 est inférieur à 10, donc la condition est vraie.

Débutant :
• <= inclut l'égalité.
• 5 <= 10 → True car 5 est plus petit que 10.

Intermédiaire :
• <= est la négation de > (strictement supérieur).
• a <= b équivaut à not (a > b) pour des types comparables.

Expert :
• <= appelle __le__ (less or equal).
• Pour int, comparaison arithmétique.

Concepts clés :
• Comparaison « inférieur ou égal », borne inclusive.

Distinctions clés :
• 5 <= 10 (True) vs 5 < 10 (True aussi ici).

Fonctionnement :
• Python compare 5 et 10, 5 n'est pas > 10 → True.

Exécution étape par étape :
1. Évaluer 5 et 10.
2. Tester <=.
3. Renvoyer True.

Ordre des opérations :
• Priorité des comparaisons.

Cas d'utilisation courants :
• Vérifier qu'une valeur est dans un intervalle : if low <= x <= high.

Cas limites :
• 10 <= 10 → True (égalité incluse).

Considérations de performance :
• Négligeable.

Exemples :
• 3 <= 7  # True
• 8 <= 8  # True

Remarques :
• <= et >= sont symétriques pour les intervalles.`,

  915: `10 == 10 vaut True : == teste l'égalité des valeurs ; 10 et 10 ont la même valeur.

Débutant :
• == signifie « égal à » (comparaison de valeur).
• 10 == 10 → True.

Intermédiaire :
• == appelle __eq__ ; peut être surchargé par les types.
• Différent de = (affectation) et de is (identité).

Expert :
• == compare les valeurs, pas les identités d'objjet.
• Pour int, 10 == 10 car ce sont des littéraux identiques (même objet en CPython pour petits entiers).

Concepts clés :
• Égalité de valeur vs identité (is).

Distinctions clés :
• == vs is : == compare contenu, is compare identité.

Fonctionnement :
• Python compare les valeurs, renvoie True si égales.

Exécution étape par étape :
1. Évaluer 10 et 10.
2. Tester égalité.
3. Renvoyer True.

Ordre des opérations :
• == a priorité plus faible que les opérateurs arithmétiques.

Cas d'utilisation courants :
• Vérifier une valeur : if x == target.

Cas limites :
• 1 == 1.0 → True (comparaison int/float par valeur).

Considérations de performance :
• Très rapide pour les types built-in.

Exemples :
• 42 == 42  # True
• "a" == "a"  # True

Remarques :
• Ne pas confondre == et = (affectation).`,

  916: `10 != 5 vaut True : != teste l'inégalité ; 10 et 5 sont différents, donc True.

Débutant :
• != signifie « différent de » ou « pas égal à ».
• 10 != 5 → True car 10 et 5 ne sont pas égaux.

Intermédiaire :
• != est la négation de ==.
• a != b équivaut à not (a == b).

Expert :
• != appelle __ne__ ; par défaut délégué à not (a == b) si __ne__ absent.
• Pour int, comparaison directe.

Concepts clés :
• Inégalité, négation de l'égalité.

Distinctions clés :
• 10 != 5 (True) vs 10 == 5 (False).

Fonctionnement :
• Python teste si 10 == 5 ; c'est False, donc != renvoie True.

Exécution étape par étape :
1. Évaluer 10 et 5.
2. Tester inégalité (not égal).
3. Renvoyer True.

Ordre des opérations :
• Même priorité que ==.

Cas d'utilisation courants :
• Exclure une valeur : if x != 0.

Cas limites :
• None != 0 → True, "" != 0 → True.

Considérations de performance :
• Négligeable.

Exemples :
• 1 != 2  # True
• "a" != "b"  # True

Remarques :
• != est préféré à <> (obsolète en Python 3).`,

  917: `5 > 10 vaut False : 5 n'est pas strictement supérieur à 10.

Débutant :
• > signifie « strictement supérieur à ».
• 5 > 10 → False car 5 est plus petit que 10.

Intermédiaire :
• Comparaison numérique standard.
• Résultat toujours bool.

Expert :
• 5 > 10 appelle __gt__ sur 5 avec 10 en argument ; renvoie False.

Concepts clés :
• Comparaison stricte, ordre numérique.

Distinctions clés :
• 5 > 10 (False) vs 5 < 10 (True).

Fonctionnement :
• Python compare 5 et 10, 5 n'est pas > 10 → False.

Exécution étape par étape :
1. Évaluer 5 et 10.
2. Tester >.
3. Renvoyer False.

Ordre des opérations :
• Priorité des comparaisons.

Cas d'utilisation courants :
• Vérifier qu'une valeur dépasse une borne : if x > max.

Cas limites :
• 5.0 > 10 → False (float et int comparables).

Considérations de performance :
• Négligeable.

Exemples :
• 0 > 1  # False
• -1 > 0  # False

Remarques :
• Les comparaisons avec des types incompatibles peuvent lever TypeError.`,

  918: `10 < 5 vaut False : 10 n'est pas strictement inférieur à 5.

Débutant :
• < signifie « strictement inférieur à ».
• 10 < 5 → False car 10 est plus grand que 5.

Intermédiaire :
• Comparaison directe.
• 10 < 5 est faux.

Expert :
• __lt__ sur 10 avec 5 → False.

Concepts clés :
• Ordre numérique, comparaison stricte.

Distinctions clés :
• 10 < 5 (False) vs 10 > 5 (True).

Fonctionnement :
• Python compare 10 et 5, 10 n'est pas < 5 → False.

Exécution étape par étape :
1. Évaluer 10 et 5.
2. Tester <.
3. Renvoyer False.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Vérifier une borne inférieure : if x < min_val.

Cas limites :
• 10 < 10 → False (strict, pas égal).

Considérations de performance :
• Négligeable.

Exemples :
• 3 < 2  # False
• 100 < 50  # False

Remarques :
• Pour les chaînes, < suit l'ordre lexicographique.`,

  919: `10 == 5 vaut False : == teste l'égalité ; 10 et 5 ont des valeurs différentes.

Débutant :
• == signifie « égal à ».
• 10 == 5 → False car 10 et 5 ne sont pas égaux.

Intermédiaire :
• Comparaison de valeur.
• Résultat bool.

Expert :
• __eq__ sur 10 avec 5 → False.

Concepts clés :
• Égalité de valeur.

Distinctions clés :
• 10 == 5 (False) vs 10 != 5 (True).

Fonctionnement :
• Python compare les valeurs, renvoie False.

Exécution étape par étape :
1. Évaluer 10 et 5.
2. Tester égalité.
3. Renvoyer False.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Vérifier qu'une valeur n'est pas une cible : if x != target.

Cas limites :
• 10 == 10.0 → True (int et float comparables par valeur).

Considérations de performance :
• Négligeable.

Exemples :
• 1 == 2  # False
• "x" == "y"  # False

Remarques :
• == ne modifie jamais les opérandes.`,

  920: `5 >= 10 vaut False : >= signifie « supérieur ou égal » ; 5 n'est ni supérieur ni égal à 10.

Débutant :
• >= inclut l'égalité.
• 5 >= 10 → False car 5 est plus petit que 10.

Intermédiaire :
• 5 n'est pas >= 10.
• Comparaison numérique.

Expert :
• __ge__ sur 5 avec 10 → False.

Concepts clés :
• Borne supérieure inclusive.

Distinctions clés :
• 5 >= 10 (False) vs 5 <= 10 (True).

Fonctionnement :
• Python vérifie si 5 >= 10 ; non → False.

Exécution étape par étape :
1. Évaluer 5 et 10.
2. Tester >=.
3. Renvoyer False.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Vérifier un seuil minimum : if score >= passing_score.

Cas limites :
• 10 >= 10 → True (égalité incluse).

Considérations de performance :
• Négligeable.

Exemples :
• 3 >= 5  # False
• 0 >= 1  # False

Remarques :
• >= et <= sont utiles pour des intervalles.`,

  921: `5 == 5 vaut True : == teste l'égalité ; les deux 5 ont la même valeur.

Débutant :
• == compare les valeurs.
• 5 == 5 → True.

Intermédiaire :
• Pour les petits entiers, CPython peut réutiliser le même objet (interning).
• Mais == compare la valeur, pas l'identité.

Expert :
• 5 == 5 : même valeur, __eq__ renvoie True.
• is pourrait aussi être True pour les petits int (implémentation).

Concepts clés :
• Égalité de valeur, littéraux identiques.

Distinctions clés :
• 5 == 5 vs 5 is 5 : souvent les deux True pour les petits int, mais == est la bonne comparaison de valeur.

Fonctionnement :
• Python compare les valeurs, renvoie True.

Exécution étape par étape :
1. Évaluer 5 et 5.
2. Tester ==.
3. Renvoyer True.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Vérifier une valeur exacte : if count == 5.

Cas limites :
• 5 == 5.0 → True (int et float).

Considérations de performance :
• Très rapide.

Exemples :
• 0 == 0  # True
• -1 == -1  # True

Remarques :
• Pour les types personnalisés, __eq__ définit l'égalité.`,

  922: `5 is 5 vaut True : is teste l'identité d'objet ; pour les petits entiers, Python réutilise souvent le même objet.

Débutant :
• is signifie « est le même objet que » (identité).
• 5 is 5 → True (même objet en pratique pour les petits int).

Intermédiaire :
• CPython met en cache les entiers de -5 à 256 environ.
• 5 is 5 → True car c'est le même objet en mémoire.

Expert :
• is compare les adresses mémoire (id).
• Comportement d'interning pour petits int : ne pas s'y fier pour la logique, utiliser == pour les valeurs.

Concepts clés :
• Identité vs égalité : is vs ==.

Distinctions clés :
• 5 is 5 peut être True (interning) ; [1,2] is [1,2] est toujours False.

Fonctionnement :
• Python compare id(5) et id(5) ; pour petits int, souvent le même → True.

Exécution étape par étape :
1. Évaluer 5 et 5 (ou références).
2. Comparer identité (id).
3. Renvoyer True si même objet.

Ordre des opérations :
• is a priorité comme ==.

Cas d'utilisation courants :
• Vérifier None : if x is None. Vérifier sentinelle : if x is sentinel.

Cas limites :
• 257 is 257 peut être False (hors cache) ; utiliser == pour les nombres.

Considérations de performance :
• is est légèrement plus rapide que == (pas d'appel à __eq__).

Exemples :
• None is None  # True
• True is True  # True

Remarques :
• Pour None, True, False : toujours utiliser is. Pour les nombres et chaînes : préférer ==.`,

  923: `[1,2] == [1,2] vaut True : == compare le contenu des listes ; les deux ont les mêmes éléments dans le même ordre.

Débutant :
• == pour les listes compare élément par élément.
• [1,2] == [1,2] → True car le contenu est identique.

Intermédiaire :
• Les listes sont des objets différents en mémoire, mais == compare les valeurs.
• Égalité structurelle, pas identité.

Expert :
• __eq__ sur list compare récursivement les éléments.
• [1,2] et [1,2] sont deux objets distincts (id différents), mais égaux en valeur.

Concepts clés :
• Égalité de valeur pour les collections : contenu, pas identité.

Distinctions clés :
• [1,2] == [1,2] (True) vs [1,2] is [1,2] (False).

Fonctionnement :
• Python compare chaque élément : 1 == 1, 2 == 2 → True.

Exécution étape par étape :
1. Comparer longueurs (égales).
2. Comparer 1 == 1 → True.
3. Comparer 2 == 2 → True.
4. Renvoyer True.

Ordre des opérations :
• Comparaison récursive.

Cas d'utilisation courants :
• Vérifier qu'une liste a le contenu attendu : if result == expected.

Cas limites :
• [1,2] == [2,1] → False (ordre compte).

Considérations de performance :
• O(n) pour n éléments.

Exemples :
• [] == []  # True
• [1] == [1.0]  # True (1 == 1.0)

Remarques :
• Pour les listes, == est la comparaison de contenu ; is teste l'identité.`,

  924: `[1,2] is [1,2] vaut False : is teste l'identité ; les deux listes sont des objets distincts en mémoire.

Débutant :
• is signifie « est le même objet que ».
• [1,2] et [1,2] sont deux listes créées séparément → objets différents → False.

Intermédiaire :
• Chaque littéral [1,2] crée une nouvelle liste.
• is compare les adresses mémoire, pas le contenu.

Expert :
• id([1,2]) ≠ id([1,2]) car chaque évaluation crée un nouvel objet.
• Pour les listes, utiliser == pour comparer le contenu, jamais is (sauf sentinelles).

Concepts clés :
• Identité : même objet en mémoire. Les listes ne sont pas internées.

Distinctions clés :
• [1,2] is [1,2] (False) vs [1,2] == [1,2] (True).

Fonctionnement :
• Python crée deux listes distinctes, compare leurs id → False.

Exécution étape par étape :
1. Créer première liste [1,2].
2. Créer seconde liste [1,2].
3. Comparer id → différents → False.

Ordre des opérations :
• Chaque [] crée un nouvel objet.

Cas d'utilisation courants :
• Vérifier si c'est la même liste (alias) : if a is b.

Cas limites :
• a = [1,2]; b = a; a is b → True (même objet).

Considérations de performance :
• is est O(1) ; == sur listes est O(n).

Exemples :
• [] is []  # False
• x = [1]; x is x  # True

Remarques :
• Ne jamais utiliser is pour comparer le contenu de listes, dicts, etc.`,

  925: `"hello" == "hello" vaut True : == compare le contenu des chaînes ; identiques caractère par caractère.

Débutant :
• == pour les chaînes compare le texte.
• "hello" == "hello" → True.

Intermédiaire :
• Les chaînes peuvent être internées (même objet) ou non, mais == compare toujours le contenu.
• Égalité de valeur garantie.

Expert :
• CPython interne souvent les chaînes littérales identiques (même objet possible).
• Mais == est la comparaison correcte ; ne pas dépendre de is pour les chaînes.

Concepts clés :
• Égalité de chaînes : comparaison caractère par caractère.

Distinctions clés :
• "hello" == "hello" (True) ; "hello" is "hello" peut être True (interning) mais pas fiable.

Fonctionnement :
• Python compare les caractères, renvoie True si identiques.

Exécution étape par étape :
1. Comparer longueurs.
2. Comparer chaque caractère.
3. Renvoyer True si tous égaux.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Vérifier une chaîne : if s == "quit".

Cas limites :
• "hello" == "Hello" → False (sensible à la casse).

Considérations de performance :
• O(n) pour n caractères.

Exemples :
• "" == ""  # True
• "a" == "a"  # True

Remarques :
• Pour les chaînes, == est la comparaison standard.`,

  926: `"hello" is "hello" vaut True : pour les chaînes littérales identiques, CPython peut réutiliser le même objet (interning).

Débutant :
• is teste si c'est le même objet.
• "hello" is "hello" → True (souvent le même objet pour les littéraux).

Intermédiaire :
• L'interning des chaînes fait que les littéraux identiques partagent le même objet.
• Comportement d'implémentation : ne pas s'y fier pour la logique.

Expert :
• CPython interne les chaînes littérales dans certaines conditions.
• Pour les chaînes, toujours préférer == ; is peut être True ou False selon le contexte.

Concepts clés :
• Interning des chaînes, identité vs égalité.

Distinctions clés :
• "hello" is "hello" (souvent True) vs "hel"+"lo" is "hello" (peut être False).

Fonctionnement :
• Python peut réutiliser l'objet pour le second "hello" → même id → True.

Exécution étape par étape :
1. Premier "hello" créé ou récupéré.
2. Second "hello" : peut réutiliser le même objet.
3. is → True si même objet.

Ordre des opérations :
• Dépend de l'implémentation.

Cas d'utilisation courants :
• Ne pas utiliser is pour les chaînes ; utiliser ==.

Cas limites :
• s = "hello"; s is "hello" peut varier selon comment s a été construit.

Considérations de performance :
• is est O(1) ; == est O(n) pour les chaînes.

Exemples :
• "x" is "x"  # Souvent True
• "".join(["h","ello"]) is "hello"  # Souvent False

Remarques :
• Règle : utiliser == pour les chaînes ; is réservé à None, True, False, sentinelles.`,

  927: `None == None vaut True : == compare les valeurs ; None est égal à lui-même.

Débutant :
• == teste l'égalité.
• None == None → True (None est unique, toujours égal à lui-même).

Intermédiaire :
• None est un singleton ; il n'y a qu'une seule instance.
• == et is donnent le même résultat pour None.

Expert :
• None est le seul objet de type NoneType.
• None == None et None is None sont tous deux True.

Concepts clés :
• Singleton None, égalité et identité coïncident.

Distinctions clés :
• None == None (True) ; None == 0 (False).

Fonctionnement :
• Python compare None à None, renvoie True.

Exécution étape par étape :
1. Évaluer None et None.
2. Tester ==.
3. Renvoyer True.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Vérifier une valeur optionnelle : if x == None (préférer if x is None).

Cas limites :
• x = None; x == None et x is None → True.

Considérations de performance :
• Négligeable.

Exemples :
• None == None  # True
• None != 0  # True

Remarques :
• Convention : utiliser x is None plutôt que x == None pour vérifier None.`,

  928: `None is None vaut True : is teste l'identité ; None est un singleton, donc c'est toujours le même objet.

Débutant :
• is signifie « est le même objet que ».
• None is None → True car il n'existe qu'un seul None.

Intermédiaire :
• None est un singleton : une seule instance en mémoire.
• Toute référence à None pointe vers le même objet.

Expert :
• id(None) est constant dans tout le programme.
• Pour None, is est la comparaison idiomatique et recommandée.

Concepts clés :
• Singleton, identité, comparaison idiomatique pour None.

Distinctions clés :
• None is None (True) ; utiliser is pour None, pas ==.

Fonctionnement :
• Python compare id(None) à id(None) → même objet → True.

Exécution étape par étape :
1. Référence à None (gauche).
2. Référence à None (droite).
3. Même id → True.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Vérifier l'absence de valeur : if result is None.

Cas limites :
• if not x peut être vrai pour None, 0, "" ; if x is None est spécifique.

Considérations de performance :
• is est plus rapide que == (pas d'appel __eq__).

Exemples :
• x = None; x is None  # True
• def f(): pass; f() is None  # True

Remarques :
• PEP 8 recommande « if x is None » plutôt que « if x == None ».`,

  929: `5 is not 10 vaut True : is not teste la non-identité ; 5 et 10 sont des objets différents.

Débutant :
• is not signifie « n'est pas le même objet que ».
• 5 is not 10 → True car 5 et 10 sont des objets distincts.

Intermédiaire :
• is not est la négation de is.
• a is not b équivaut à not (a is b).

Expert :
• is not appelle __isnot__ ou est implémenté comme not (a is b).
• Pour les nombres, 5 et 10 sont toujours des objets différents.

Concepts clés :
• Non-identité, négation de is.

Distinctions clés :
• 5 is not 10 (True) vs 5 != 10 (True aussi, mais teste la valeur).

Fonctionnement :
• Python compare id(5) et id(10) ; différents → True.

Exécution étape par étape :
1. Évaluer 5 et 10.
2. Comparer identité.
3. Différents → is not renvoie True.

Ordre des opérations :
• is not a priorité comme is.

Cas d'utilisation courants :
• Vérifier qu'une valeur n'est pas None : if x is not None.

Cas limites :
• 5 is not 5 → False (même objet pour petits int).

Considérations de performance :
• O(1), très rapide.

Exemples :
• None is not 0  # True
• [] is not []  # True (listes différentes)

Remarques :
• is not None est idiomatique pour vérifier qu'une valeur existe.`,

  930: `La question porte sur la différence entre == et is : == compare les valeurs, is compare l'identité (même objet en mémoire).

Débutant :
• == : « ont-ils la même valeur ? » (contenu).
• is : « sont-ils le même objet ? » (référence).

Intermédiaire :
• == appelle __eq__ ; peut être surchargé. is compare les id (adresses).
• Pour None, True, False : utiliser is. Pour nombres, chaînes, listes : utiliser ==.

Expert :
• == : égalité de valeur (structurelle pour listes, dicts).
• is : identité d'objet (id(a) == id(b)). Les petits int et certaines chaînes peuvent être internés.

Concepts clés :
• Égalité vs identité ; __eq__ vs comparaison d'id.

Distinctions clés :
• [1,2] == [1,2] (True) mais [1,2] is [1,2] (False).
• 5 == 5.0 (True) mais 5 is 5.0 (False).

Fonctionnement :
• == : comparaison par valeur (méthode ou récursive).
• is : comparaison de pointeurs.

Exécution étape par étape :
• == : évaluer __eq__ ou comparaison élément par élément.
• is : comparer id().

Ordre des opérations :
• Les deux ont priorité plus faible que l'arithmétique.

Cas d'utilisation courants :
• == : contenu, nombres, chaînes, listes. is : None, True, False, sentinelles.

Cas limites :
• Types personnalisés : __eq__ peut renvoyer True pour des objets différents ; is reste basé sur l'id.

Considérations de performance :
• is plus rapide (O(1)) ; == peut être O(n) pour les collections.

Exemples :
• x = [1,2]; y = [1,2]; x == y  # True; x is y  # False
• a = None; a is None  # True; a == None  # True mais moins idiomatique

Remarques :
• Règle pratique : is pour None/bool/sentinelles ; == pour tout le reste.`,

  931: `5 < 10 < 15 vaut True : Python permet les comparaisons chaînées ; équivaut à (5 < 10) and (10 < 15).

Débutant :
• On peut enchaîner les comparaisons : 5 < 10 et 10 < 15.
• Les deux sont vraies → True.

Intermédiaire :
• 5 < 10 < 15 est évalué comme 5 < 10 and 10 < 15.
• Le terme du milieu (10) n'est évalué qu'une fois.

Expert :
• Les comparaisons chaînées sont des comparaisons multiples reliées par and.
• Chaque sous-expression doit être vraie ; pas de court-circuit entre comparaisons (mais and peut court-circuiter).

Concepts clés :
• Chaînage de comparaisons, évaluation unique du terme central.

Distinctions clés :
• 5 < 10 < 15 vs (5 < 10) < 15 (ce dernier serait True < 15 → False, erreur de logique).

Fonctionnement :
• Python évalue 5 < 10 → True, puis 10 < 15 → True ; and → True.

Exécution étape par étape :
1. 5 < 10 → True.
2. 10 < 15 → True.
3. True and True → True.

Ordre des opérations :
• Les comparaisons chaînées ont une priorité spéciale : pas de parenthèses implicites incorrectes.

Cas d'utilisation courants :
• Vérifier un intervalle : if 0 < x < 100.

Cas limites :
• 5 < 10 < 5 → False (10 < 5 est faux).

Considérations de performance :
• Le terme central (10) n'est évalué qu'une fois (important si c'est un appel de fonction).

Exemples :
• 1 < 2 < 3  # True
• 0 <= i < len(lst)  # Vérifier un index valide

Remarques :
• Le chaînage est plus lisible que 0 <= i and i < len(lst).`,

  932: `15 > 10 > 5 vaut True : comparaison chaînée ; équivaut à (15 > 10) and (10 > 5).

Débutant :
• 15 > 10 et 10 > 5 : les deux sont vraies.
• Résultat : True.

Intermédiaire :
• Chaînage : 15 > 10 > 5 = (15 > 10) and (10 > 5).
• Le 10 central n'est évalué qu'une fois.

Expert :
• Même mécanisme que 5 < 10 < 15 ; l'ordre des opérateurs peut être mixte (>, <, >=, <=, ==, !=).

Concepts clés :
• Chaînage, terme central partagé.

Distinctions clés :
• 15 > 10 > 5 (True) vs 15 > 10 > 20 (False).

Fonctionnement :
• 15 > 10 → True, 10 > 5 → True ; and → True.

Exécution étape par étape :
1. 15 > 10 → True.
2. 10 > 5 → True.
3. True and True → True.

Ordre des opérations :
• Comparaisons chaînées.

Cas d'utilisation courants :
• Vérifier un ordre décroissant : if a > b > c.

Cas limites :
• 10 > 5 > 3 → True.

Considérations de performance :
• Terme central évalué une seule fois.

Exemples :
• 100 > 50 > 0  # True
• 3 > 2 > 1  # True

Remarques :
• Le chaînage fonctionne avec tout mélange de <, >, <=, >=, ==, !=.`,

  933: `5 <= 10 <= 15 vaut True : comparaison chaînée avec <= ; 5 <= 10 et 10 <= 15, les deux vraies.

Débutant :
• <= inclut l'égalité.
• 5 <= 10 et 10 <= 15 → True.

Intermédiaire :
• 5 <= 10 <= 15 = (5 <= 10) and (10 <= 15).
• Intervalle fermé [5, 15].

Expert :
• Chaînage avec <= : vérifie que la valeur est dans un intervalle inclusif.

Concepts clés :
• Intervalle fermé, bornes incluses.

Distinctions clés :
• 5 <= 10 <= 15 (True) vs 5 < 10 < 15 (True aussi ici).

Fonctionnement :
• 5 <= 10 → True, 10 <= 15 → True ; and → True.

Exécution étape par étape :
1. 5 <= 10 → True.
2. 10 <= 15 → True.
3. True and True → True.

Ordre des opérations :
• Chaînage.

Cas d'utilisation courants :
• Vérifier qu'un index est dans les bornes : if 0 <= i <= len(lst)-1.

Cas limites :
• 5 <= 5 <= 5 → True (égalités incluses).

Considérations de performance :
• Terme central évalué une fois.

Exemples :
• 0 <= x <= 1  # Intervalle [0, 1]
• 1 <= 2 <= 3  # True

Remarques :
• <= et >= sont utiles pour des intervalles fermés.`,

  934: `15 >= 10 >= 5 vaut True : comparaison chaînée ; 15 >= 10 et 10 >= 5, les deux vraies.

Débutant :
• >= signifie « supérieur ou égal ».
• 15 >= 10 et 10 >= 5 → True.

Intermédiaire :
• 15 >= 10 >= 5 = (15 >= 10) and (10 >= 5).
• Ordre décroissant avec bornes incluses.

Expert :
• Même mécanisme que les autres chaînages.
• 15 >= 10 >= 5 vérifie une séquence décroissante.

Concepts clés :
• Chaînage décroissant, >=.

Distinctions clés :
• 15 >= 10 >= 5 (True) vs 15 >= 10 >= 20 (False).

Fonctionnement :
• 15 >= 10 → True, 10 >= 5 → True ; and → True.

Exécution étape par étape :
1. 15 >= 10 → True.
2. 10 >= 5 → True.
3. True and True → True.

Ordre des opérations :
• Chaînage.

Cas d'utilisation courants :
• Vérifier un ordre décroissant avec égalités : if max >= x >= min.

Cas limites :
• 10 >= 10 >= 10 → True.

Considérations de performance :
• Négligeable.

Exemples :
• 3 >= 2 >= 1  # True
• 5 >= 5 >= 5  # True

Remarques :
• Chaînage symétrique à 5 <= 10 <= 15.`,

  935: `5 == 5 == 5 vaut True : comparaison chaînée avec == ; les trois valeurs sont égales.

Débutant :
• == teste l'égalité.
• 5 == 5 et 5 == 5 → True.

Intermédiaire :
• 5 == 5 == 5 = (5 == 5) and (5 == 5).
• Toutes les paires adjacentes doivent être égales.

Expert :
• Chaînage avec == : vérifie que toutes les valeurs sont égales entre elles.

Concepts clés :
• Égalité transitive dans un chaînage.

Distinctions clés :
• 5 == 5 == 5 (True) vs 5 == 5 == 10 (False).

Fonctionnement :
• 5 == 5 → True, 5 == 5 → True ; and → True.

Exécution étape par étape :
1. 5 == 5 → True.
2. 5 == 5 → True.
3. True and True → True.

Ordre des opérations :
• Chaînage.

Cas d'utilisation courants :
• Vérifier que plusieurs variables sont égales : if a == b == c.

Cas limites :
• 0 == 0 == 0 → True.

Considérations de performance :
• Négligeable.

Exemples :
• 1 == 1 == 1  # True
• x == y == z  # Tous égaux

Remarques :
• a == b == c équivaut à a == b and b == c.`,

  936: `5 != 10 != 15 vaut True : comparaison chaînée avec != ; chaque paire adjacente est différente.

Débutant :
• != signifie « différent de ».
• 5 != 10 et 10 != 15 → True (toutes les paires sont différentes).

Intermédiaire :
• 5 != 10 != 15 = (5 != 10) and (10 != 15).
• Chaînage avec inégalité.

Expert :
• != chaîné ne signifie pas « tous différents entre eux » ; il teste chaque paire adjacente.
• 5 != 10 != 5 serait True (5 != 10 et 10 != 5) même si 5 et 5 sont égaux.

Concepts clés :
• Chaînage avec != : paires adjacentes différentes.

Distinctions clés :
• 5 != 10 != 15 (True) vs 5 != 10 != 5 (True aussi ! 10 != 5 est vrai).

Fonctionnement :
• 5 != 10 → True, 10 != 15 → True ; and → True.

Exécution étape par étape :
1. 5 != 10 → True.
2. 10 != 15 → True.
3. True and True → True.

Ordre des opérations :
• Chaînage.

Cas d'utilisation courants :
• Vérifier des valeurs distinctes adjacentes (rare).

Cas limites :
• 1 != 2 != 1 → True (2 != 1 est vrai ; le chaînage ne vérifie pas 1 != 1).

Considérations de performance :
• Négligeable.

Exemples :
• 1 != 2 != 3  # True
• a != b != c  # Chaque paire adjacente différente

Remarques :
• Pour « tous différents », utiliser len(set([a,b,c])) == 3.`,

  937: `5 < 10 < 5 vaut False : comparaison chaînée ; 5 < 10 est vrai mais 10 < 5 est faux.

Débutant :
• 5 < 10 → True, 10 < 5 → False.
• True and False → False.

Intermédiaire :
• 5 < 10 < 5 = (5 < 10) and (10 < 5).
• La seconde comparaison est fausse.

Expert :
• Le chaînage exige que toutes les sous-comparaisons soient vraies.
• 10 < 5 est impossible → False.

Concepts clés :
• Chaînage : toutes les parties doivent être vraies.

Distinctions clés :
• 5 < 10 < 5 (False) vs 5 < 10 < 15 (True).

Fonctionnement :
• 5 < 10 → True, 10 < 5 → False ; and → False.

Exécution étape par étape :
1. 5 < 10 → True.
2. 10 < 5 → False.
3. True and False → False.

Ordre des opérations :
• Chaînage.

Cas d'utilisation courants :
• Erreur logique : une condition comme 5 < x < 5 est toujours fausse.

Cas limites :
• a < b < a → toujours False (contradiction).

Considérations de performance :
• Court-circuit : si la première était False, la seconde ne serait pas évaluée.

Exemples :
• 1 < 2 < 1  # False
• 0 < 5 < 0  # False

Remarques :
• Un chaînage contradictoire (a < b < a) est toujours False.`,

  938: `10 < 5 < 15 vaut False : la première comparaison 10 < 5 est fausse ; and court-circuite.

Débutant :
• 10 < 5 → False.
• False and ... → False (le second n'est pas évalué).

Intermédiaire :
• 10 < 5 < 15 = (10 < 5) and (5 < 15).
• La première partie est fausse → résultat False.

Expert :
• Court-circuit : 10 < 5 est False, donc and renvoie False sans évaluer 5 < 15.

Concepts clés :
• Court-circuit dans les comparaisons chaînées.

Distinctions clés :
• 10 < 5 < 15 (False) vs 5 < 10 < 15 (True).

Fonctionnement :
• 10 < 5 → False ; and court-circuite → False.

Exécution étape par étape :
1. 10 < 5 → False.
2. Court-circuit : and renvoie False.
3. 5 < 15 n'est pas évalué.

Ordre des opérations :
• Évaluation de gauche à droite, court-circuit sur and.

Cas d'utilisation courants :
• Montrer que l'ordre des termes dans un chaînage compte.

Cas limites :
• 1 < 0 < 2 → False (premier faux).

Considérations de performance :
• Le terme central (5) n'est peut-être pas évalué si le premier court-circuite (dépend de l'implémentation).

Exemples :
• 5 < 10 < 15  # True (ordre correct)
• 10 < 5 < 15  # False

Remarques :
• Le chaînage doit être logique : low < x < high.`,

  939: `5 < 15 < 10 vaut False : 5 < 15 est vrai mais 15 < 10 est faux ; and donne False.

Débutant :
• 5 < 15 → True, 15 < 10 → False.
• True and False → False.

Intermédiaire :
• 5 < 15 < 10 = (5 < 15) and (15 < 10).
• La seconde comparaison (15 < 10) est fausse.

Expert :
• Le terme central (15) est évalué ; les deux comparaisons sont évaluées.
• 15 < 10 est faux → résultat False.

Concepts clés :
• Chaînage : toutes les parties doivent être vraies.

Distinctions clés :
• 5 < 15 < 10 (False) vs 5 < 10 < 15 (True).

Fonctionnement :
• 5 < 15 → True, 15 < 10 → False ; and → False.

Exécution étape par étape :
1. 5 < 15 → True.
2. 15 < 10 → False.
3. True and False → False.

Ordre des opérations :
• Chaînage.

Cas d'utilisation courants :
• Erreur : 5 < 15 < 10 n'a pas de sens (15 n'est pas entre 5 et 10).

Cas limites :
• low < mid < high : mid doit être entre low et high.

Considérations de performance :
• Les deux comparaisons sont évaluées.

Exemples :
• 1 < 5 < 3  # False
• 0 < 10 < 5  # False

Remarques :
• Pour un intervalle valide, il faut low < x < high avec x entre les deux.`,

  940: `5 == 5 == 10 vaut False : 5 == 5 est vrai mais 5 == 10 est faux ; and donne False.

Débutant :
• 5 == 5 → True, 5 == 10 → False.
• True and False → False.

Intermédiaire :
• 5 == 5 == 10 = (5 == 5) and (5 == 10).
• La seconde égalité est fausse.

Expert :
• Chaînage avec == : toutes les paires adjacentes doivent être égales.
• 5 == 10 est faux → résultat False.

Concepts clés :
• Chaînage d'égalité : transitivité requise.

Distinctions clés :
• 5 == 5 == 10 (False) vs 5 == 5 == 5 (True).

Fonctionnement :
• 5 == 5 → True, 5 == 10 → False ; and → False.

Exécution étape par étape :
1. 5 == 5 → True.
2. 5 == 10 → False.
3. True and False → False.

Ordre des opérations :
• Chaînage.

Cas d'utilisation courants :
• Vérifier que plusieurs valeurs sont égales : a == b == c (toutes égales).

Cas limites :
• 1 == 1 == 2 → False.

Considérations de performance :
• Négligeable.

Exemples :
• 1 == 1 == 0  # False
• x == y == z  # Faux si z différent

Remarques :
• a == b == c exige a == b et b == c.`,

  941: `5 in [1,2,3,4,5] vaut True : l'opérateur in teste l'appartenance ; 5 est un élément de la liste.

Débutant :
• in signifie « est dans ».
• 5 in [1,2,3,4,5] → True car 5 est dans la liste.

Intermédiaire :
• in parcourt la liste (ou utilise __contains__ si défini).
• Comparaison par égalité (==) avec chaque élément.

Expert :
• in appelle __contains__ sur le conteneur ; pour list, parcours linéaire.
• 5 in [1,2,3,4,5] : trouve 5 → True.

Concepts clés :
• Appartenance, opérateur in, parcours linéaire pour les listes.

Distinctions clés :
• 5 in [1,2,3,4,5] (True) vs 5 in [1,2,3,4] (False).

Fonctionnement :
• Python parcourt la liste, compare chaque élément à 5 avec == ; trouve 5 → True.

Exécution étape par étape :
1. Parcourir [1,2,3,4,5].
2. Comparer 1 == 5 → False, 2 == 5 → False, ..., 5 == 5 → True.
3. Renvoyer True.

Ordre des opérations :
• in a priorité comme les autres opérateurs de comparaison.

Cas d'utilisation courants :
• Vérifier une valeur dans une liste : if x in allowed_values.

Cas limites :
• 5 in [] → False. in sur un set est O(1) en moyenne, sur une list O(n).

Considérations de performance :
• O(n) pour une liste ; utiliser set pour des tests fréquents.

Exemples :
• 1 in [1,2,3]  # True
• 0 in [1,2,3]  # False

Remarques :
• Pour des tests d'appartenance répétés, convertir en set : s = set(lst).`,

  942: `10 in [1,2,3,4,5] vaut False : 10 n'est pas un élément de la liste.

Débutant :
• in teste si la valeur est dans le conteneur.
• 10 in [1,2,3,4,5] → False car 10 n'est pas dans la liste.

Intermédiaire :
• Python parcourt la liste, ne trouve pas 10.
• Renvoie False après avoir vérifié tous les éléments.

Expert :
• __contains__ sur list : parcours jusqu'à trouver ou fin de liste.
• Aucune correspondance → False.

Concepts clés :
• Appartenance, absence dans le conteneur.

Distinctions clés :
• 10 in [1,2,3,4,5] (False) vs 5 in [1,2,3,4,5] (True).

Fonctionnement :
• Parcours de [1,2,3,4,5] ; aucun élément == 10 → False.

Exécution étape par étape :
1. Parcourir 1, 2, 3, 4, 5.
2. Aucun n'est égal à 10.
3. Renvoyer False.

Ordre des opérations :
• Parcours complet si pas trouvé.

Cas d'utilisation courants :
• Vérifier qu'une valeur n'est pas dans une liste : if x not in forbidden.

Cas limites :
• 10 in [] → False (liste vide).

Considérations de performance :
• O(n) : parcours complet de la liste.

Exemples :
• 99 in [1,2,3]  # False
• "x" in [1,2,3]  # False

Remarques :
• Utiliser set pour des tests d'appartenance fréquents sur de grandes collections.`,

  943: `5 not in [1,2,3] vaut True : not in teste la non-appartenance ; 5 n'est pas dans la liste.

Débutant :
• not in signifie « n'est pas dans ».
• 5 not in [1,2,3] → True car 5 n'est pas dans la liste.

Intermédiaire :
• not in équivaut à not (x in container).
• Python parcourt, ne trouve pas 5 → True.

Expert :
• not in appelle __contains__ puis inverse le résultat.
• 5 not in [1,2,3] → not False → True.

Concepts clés :
• Non-appartenance, négation de in.

Distinctions clés :
• 5 not in [1,2,3] (True) vs 5 in [1,2,3] (False).

Fonctionnement :
• 5 in [1,2,3] → False ; not False → True.

Exécution étape par étape :
1. Tester 5 in [1,2,3] → False.
2. Appliquer not → True.
3. Renvoyer True.

Ordre des opérations :
• not in a priorité comme in.

Cas d'utilisation courants :
• Vérifier qu'une valeur est absente : if x not in seen.

Cas limites :
• 1 not in [] → True (liste vide, rien n'y est).

Considérations de performance :
• O(n) pour une liste ; parcours jusqu'à trouver ou fin.

Exemples :
• 0 not in [1,2,3]  # True
• "a" not in ["b","c"]  # True

Remarques :
• not in est plus lisible que not (x in lst).`,

  944: `1 not in [1,2,3] vaut False : 1 est dans la liste, donc not in renvoie False.

Débutant :
• not in signifie « n'est pas dans ».
• 1 not in [1,2,3] → False car 1 est dans la liste.

Intermédiaire :
• 1 in [1,2,3] → True ; not True → False.
• La négation de l'appartenance.

Expert :
• not in = not (x in container).
• 1 in [1,2,3] → True → not in renvoie False.

Concepts clés :
• Non-appartenance : faux quand l'élément est présent.

Distinctions clés :
• 1 not in [1,2,3] (False) vs 1 in [1,2,3] (True).

Fonctionnement :
• 1 in [1,2,3] → True ; not True → False.

Exécution étape par étape :
1. Tester 1 in [1,2,3] → True (trouve 1).
2. not True → False.
3. Renvoyer False.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Vérifier l'absence avant d'ajouter : if x not in lst: lst.append(x).

Cas limites :
• Élément en double : 1 not in [1,1,1] → False (présent).

Considérations de performance :
• in s'arrête au premier match ; not inverse le résultat.

Exemples :
• 2 not in [1,2,3]  # False
• "a" not in "abc"  # False

Remarques :
• not in est la forme négative idiomatique de in.`,

  945: `'a' in 'abc' vaut True : in fonctionne sur les chaînes ; 'a' est une sous-chaîne de 'abc'.

Débutant :
• in pour les chaînes teste si une sous-chaîne est contenue.
• 'a' in 'abc' → True car 'a' apparaît dans 'abc'.

Intermédiaire :
• Pour les str, in teste la présence d'une sous-chaîne (pas seulement un caractère unique).
• 'a' est le premier caractère de 'abc'.

Expert :
• str.__contains__ recherche la sous-chaîne (algorithme de recherche).
• 'a' in 'abc' : trouve 'a' au début → True.

Concepts clés :
• Appartenance dans les chaînes : sous-chaîne, pas seulement caractère.

Distinctions clés :
• 'a' in 'abc' (True) vs 'a' in 'xyz' (False).

Fonctionnement :
• Python recherche 'a' dans 'abc' ; trouve à l'index 0 → True.

Exécution étape par étape :
1. Rechercher 'a' dans 'abc'.
2. Trouve à la position 0.
3. Renvoyer True.

Ordre des opérations :
• Recherche de sous-chaîne (peut être optimisée).

Cas d'utilisation courants :
• Vérifier un caractère ou motif : if 'e' in email.

Cas limites :
• '' in 'abc' → True (chaîne vide est sous-chaîne de toute chaîne).

Considérations de performance :
• O(n*m) dans le pire cas pour sous-chaîne de longueur m dans chaîne de longueur n.

Exemples :
• 'b' in 'abc'  # True
• 'd' in 'abc'  # False

Remarques :
• Pour un seul caractère, in est simple et lisible.`,

  946: `'x' in 'abc' vaut False : 'x' n'est pas une sous-chaîne de 'abc'.

Débutant :
• in teste si la sous-chaîne est dans la chaîne.
• 'x' in 'abc' → False car 'x' n'apparaît pas.

Intermédiaire :
• Python parcourt 'abc', ne trouve pas 'x'.
• Renvoie False.

Expert :
• __contains__ sur str : recherche complète, pas de correspondance → False.

Concepts clés :
• Absence de sous-chaîne.

Distinctions clés :
• 'x' in 'abc' (False) vs 'x' in 'xyz' (True).

Fonctionnement :
• Recherche de 'x' dans 'abc' ; aucune occurrence → False.

Exécution étape par étape :
1. Rechercher 'x' dans 'a', 'b', 'c'.
2. Aucune correspondance.
3. Renvoyer False.

Ordre des opérations :
• Parcours complet si pas trouvé.

Cas d'utilisation courants :
• Valider qu'un caractère interdit est absent : if ' ' not in username.

Cas limites :
• 'x' in '' → False (chaîne vide ne contient rien).

Considérations de performance :
• O(n) pour une chaîne de longueur n (sous-chaîne de 1 caractère).

Exemples :
• 'z' in 'abc'  # False
• 'ab' in 'xyz'  # False

Remarques :
• in sur les chaînes est très utilisé pour des vérifications simples.`,

  947: `'ab' in 'abc' vaut True : 'ab' est une sous-chaîne contiguë de 'abc'.

Débutant :
• in teste si la sous-chaîne apparaît dans la chaîne.
• 'ab' in 'abc' → True car 'ab' est au début de 'abc'.

Intermédiaire :
• La sous-chaîne doit être contiguë (caractères consécutifs).
• 'ab' apparaît aux indices 0-1 de 'abc'.

Expert :
• str.__contains__ recherche une sous-chaîne de longueur > 1.
• 'ab' in 'abc' : trouve à la position 0 → True.

Concepts clés :
• Sous-chaîne contiguë, pas seulement un caractère.

Distinctions clés :
• 'ab' in 'abc' (True) vs 'ac' in 'abc' (False, 'a' et 'c' ne sont pas contigus).

Fonctionnement :
• Python recherche 'ab' dans 'abc' ; trouve aux indices 0-1 → True.

Exécution étape par étape :
1. Rechercher 'ab' dans 'abc'.
2. Comparer 'ab' avec 'ab' (indices 0-1) → correspondance.
3. Renvoyer True.

Ordre des opérations :
• Recherche de sous-chaîne.

Cas d'utilisation courants :
• Vérifier un préfixe : if 'http' in url.

Cas limites :
• 'abc' in 'abc' → True (toute la chaîne).
• 'ab' in 'aab' → True (à la fin).

Considérations de performance :
• Plus coûteux qu'un seul caractère ; algorithme de recherche de motif.

Exemples :
• 'bc' in 'abc'  # True
• 'cd' in 'abc'  # False

Remarques :
• startswith et endswith sont plus explicites pour préfixe/suffixe.`,

  948: `'ac' in 'abc' vaut False : 'ac' n'est pas une sous-chaîne contiguë de 'abc' ; 'a' et 'c' sont séparés par 'b'.

Débutant :
• in cherche une sous-chaîne contiguë.
• 'ac' n'apparaît pas dans 'abc' car entre 'a' et 'c' il y a 'b'.

Intermédiaire :
• 'abc' contient 'a', 'b', 'c' mais pas la séquence 'ac' côte à côte.
• 'ac' serait 'a' suivi immédiatement de 'c', ce qui n'existe pas dans 'abc'.

Expert :
• La recherche de sous-chaîne exige des caractères consécutifs.
• 'ac' ≠ sous-chaîne de 'abc' → False.

Concepts clés :
• Sous-chaîne = séquence contiguë de caractères.

Distinctions clés :
• 'ac' in 'abc' (False) vs 'ab' in 'abc' (True).

Fonctionnement :
• Recherche de 'ac' dans 'abc' ; pas de correspondance contiguë → False.

Exécution étape par étape :
1. Rechercher 'ac' : positions 0-1 = 'ab' (pas 'ac').
2. Positions 1-2 = 'bc' (pas 'ac').
3. Aucune correspondance → False.

Ordre des opérations :
• Parcours de la chaîne.

Cas d'utilisation courants :
• Comprendre que in ne cherche pas des caractères dispersés.

Cas limites :
• 'aa' in 'aba' → False (les deux 'a' ne sont pas adjacents dans 'aba'... en fait 'aa' n'est pas dans 'aba').

Considérations de performance :
• Recherche de motif de longueur 2.

Exemples :
• 'bd' in 'abcd'  # False
• 'xz' in 'xyz'  # False ('x' et 'z' non contigus)

Remarques :
• 'ac' dans 'abc' : 'a' à l'index 0, 'c' à l'index 2 ; pas contigus → False.`,

  949: `'' in 'abc' vaut True : la chaîne vide est une sous-chaîne de toute chaîne (par convention).

Débutant :
• La chaîne vide '' est considérée comme contenue partout.
• '' in 'abc' → True.

Intermédiaire :
• Par définition, toute chaîne contient la sous-chaîne vide (avant, entre, après chaque caractère).
• Comportement standard en mathématiques et en informatique.

Expert :
• str.__contains__('') renvoie True pour toute chaîne non None.
• La chaîne vide est sous-chaîne de toute chaîne (y compris '' in '' → True).

Concepts clés :
• Chaîne vide, sous-chaîne triviale, cas limite.

Distinctions clés :
• '' in 'abc' (True) vs 'abc' in '' (False).

Fonctionnement :
• Python considère que '' est une sous-chaîne de 'abc' → True.

Exécution étape par étape :
1. Tester '' in 'abc'.
2. Par convention, True.
3. Renvoyer True.

Ordre des opérations :
• Cas spécial, pas de recherche réelle.

Cas d'utilisation courants :
• Éviter des erreurs : if prefix and s.startswith(prefix) pour exclure ''.

Cas limites :
• '' in '' → True. '' in 'x' → True.

Considérations de performance :
• O(1) : pas de recherche nécessaire.

Exemples :
• '' in 'hello'  # True
• '' in ''  # True

Remarques :
• Ce comportement peut surprendre ; attention dans les conditions if sub in s quand sub peut être ''.`,

  950: `'x' not in 'abc' vaut True : not in teste la non-appartenance ; 'x' n'est pas dans 'abc'.

Débutant :
• not in signifie « n'est pas dans ».
• 'x' not in 'abc' → True car 'x' n'apparaît pas dans 'abc'.

Intermédiaire :
• not in = not (x in container).
• 'x' in 'abc' → False ; not False → True.

Expert :
• __contains__ renvoie False ; not inverse → True.
• Même mécanisme que pour les listes, appliqué aux chaînes.

Concepts clés :
• Non-appartenance dans les chaînes.

Distinctions clés :
• 'x' not in 'abc' (True) vs 'a' not in 'abc' (False).

Fonctionnement :
• 'x' in 'abc' → False ; not False → True.

Exécution étape par étape :
1. Tester 'x' in 'abc' → False.
2. Appliquer not → True.
3. Renvoyer True.

Ordre des opérations :
• in puis not.

Cas d'utilisation courants :
• Valider qu'un caractère interdit est absent : if ' ' not in name.

Cas limites :
• '' not in 'abc' → False (chaîne vide est dans toute chaîne).

Considérations de performance :
• O(n) pour la recherche de 'x' dans 'abc'.

Exemples :
• 'z' not in 'abc'  # True
• 'xy' not in 'abc'  # True

Remarques :
• not in est idiomatique pour vérifier l'absence d'un caractère ou motif.`,
};
