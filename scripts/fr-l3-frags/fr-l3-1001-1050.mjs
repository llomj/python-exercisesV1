/** Level 3 FR 1001–1050 — any, all, nested conditionals, guard clauses, bool, or/and short-circuit. Aligned with level3_intermediate_a.ts. */
export default {
  1001: `any([True, False, False]) vaut True : any() renvoie True dès qu'un élément est truthy ; le premier (True) suffit.

Débutant :
• any signifie « au moins un » : un seul élément vrai suffit.
• True est truthy → any() renvoie True immédiatement.

Intermédiaire :
• any() court-circuite : dès le premier truthy, il renvoie True.
• Les éléments False, False ne sont pas nécessaires à vérifier.

Expert :
• any() parcourt l'itérable et renvoie True au premier truthy.
• Équivalent logique à : True or False or False → True.

Concepts clés :
• any(), court-circuit, truthiness, quantification existentielle.

Distinctions clés :
• any([True, False, False]) (True) vs all([True, False, False]) (False).

Fonctionnement :
• Python évalue True → truthy → renvoie True sans continuer.

Exécution étape par étape :
1. Évaluer premier élément True → truthy.
2. Court-circuit : renvoyer True.
3. Les autres éléments ne sont pas évalués.

Ordre des opérations :
• Évaluation de gauche à droite, arrêt au premier truthy.

Cas d'utilisation courants :
• Vérifier si au moins une condition est remplie : any(x > 0 for x in lst).

Cas limites :
• any([]) → False (itérable vide, aucun truthy).

Considérations de performance :
• Court-circuit évite de parcourir tout l'itérable si un truthy apparaît tôt.

Exemples :
• any([False, True])  # True
• any([1, 0, 0])  # True

Remarques :
• any() renvoie False uniquement si tous les éléments sont falsy.`,

  1002: `any([False, False, False]) vaut False : aucun élément n'est truthy ; any() doit parcourir tout l'itérable.

Débutant :
• any cherche « au moins un vrai ».
• Tous sont False → aucun truthy → False.

Intermédiaire :
• any() ne peut pas court-circuiter ici : il doit tout vérifier.
• Exhaustion de l'itérable sans trouver de truthy → False.

Expert :
• any() renvoie False seulement après avoir épuisé l'itérable.
• Équivalent : False or False or False → False.

Concepts clés :
• any(), exhaustion, quantification existentielle (aucun satisfait).

Distinctions clés :
• any([False, False, False]) (False) vs all([False, False, False]) (False aussi).

Fonctionnement :
• Parcours complet ; aucun truthy trouvé → False.

Exécution étape par étape :
1. False → falsy, continuer.
2. False → falsy, continuer.
3. False → falsy, itérable épuisé.
4. Renvoyer False.

Ordre des opérations :
• Tous les éléments sont évalués (pas de court-circuit).

Cas d'utilisation courants :
• Vérifier qu'aucune erreur n'est présente : not any(errors).

Cas limites :
• any([0, 0, 0]) → False (0 est falsy).

Considérations de performance :
• O(n) : parcours complet nécessaire.

Exemples :
• any([0, None, ""])  # False
• any([])  # False

Remarques :
• any([]) renvoie aussi False (convention : aucun élément → aucun truthy).`,

  1003: `all([True, True, True]) vaut True : tous les éléments sont truthy ; all() parcourt tout et renvoie True.

Débutant :
• all signifie « tous » : chaque élément doit être vrai.
• Les trois sont True → all() renvoie True.

Intermédiaire :
• all() doit vérifier chaque élément pour renvoyer True.
• Aucun court-circuit possible quand le résultat est True.

Expert :
• all() renvoie True seulement après avoir confirmé que tous sont truthy.
• Équivalent : True and True and True → True.

Concepts clés :
• all(), quantification universelle, exhaustion pour True.

Distinctions clés :
• all([True, True, True]) (True) vs any([True, True, True]) (True aussi).

Fonctionnement :
• Parcours complet ; tous truthy → True.

Exécution étape par étape :
1. True → truthy, continuer.
2. True → truthy, continuer.
3. True → truthy, itérable épuisé.
4. Renvoyer True.

Ordre des opérations :
• Tous les éléments sont évalués.

Cas d'utilisation courants :
• Validation : all(x > 0 for x in numbers).

Cas limites :
• all([]) → True (vérité vide : aucun contre-exemple).

Considérations de performance :
• O(n) pour renvoyer True.

Exemples :
• all([1, 2, 3])  # True
• all(["a", "b"])  # True

Remarques :
• all([]) renvoie True (convention logique : « tous les éléments satisfont » quand il n'y en a aucun).`,

  1004: `all([True, False, True]) vaut False : le second élément est False ; all() court-circuite et renvoie False.

Débutant :
• all exige que tous soient vrais.
• Dès qu'un False apparaît → résultat False.

Intermédiaire :
• all() court-circuite au premier falsy.
• Le troisième True n'est jamais évalué.

Expert :
• all() renvoie False dès le premier falsy.
• Équivalent : True and False and True → False (court-circuit sur False).

Concepts clés :
• all(), court-circuit sur falsy, quantification universelle.

Distinctions clés :
• all([True, False, True]) (False) vs any([True, False, True]) (True).

Fonctionnement :
• True → continuer ; False → renvoyer False immédiatement.

Exécution étape par étape :
1. True → truthy, continuer.
2. False → falsy.
3. Court-circuit : renvoyer False.
4. Le troisième élément n'est pas évalué.

Ordre des opérations :
• Évaluation de gauche à droite, arrêt au premier falsy.

Cas d'utilisation courants :
• Validation stricte : all(cond for x in items) s'arrête au premier échec.

Cas limites :
• all([True, 0, True]) → False (0 est falsy).

Considérations de performance :
• Court-circuit évite de parcourir le reste si un falsy apparaît tôt.

Exemples :
• all([1, 0, 3])  # False
• all([True, "", True])  # False

Remarques :
• Un seul falsy suffit à faire échouer all().`,

  1005: `any([]) vaut False : l'itérable vide ne contient aucun élément truthy ; any() renvoie False par convention.

Débutant :
• any cherche « au moins un vrai ».
• Liste vide → aucun élément → aucun truthy → False.

Intermédiaire :
• Convention logique : « existe-t-il un élément truthy ? » avec zéro élément → non.
• any([]) et all([]) ont des comportements différents (all([]) → True).

Expert :
• any() sur itérable vide : pas d'élément à vérifier → False.
• Vérité vide pour any : aucun contre-exemple n'existe car il n'y a pas d'éléments.

Concepts clés :
• any() sur itérable vide, convention logique, quantification existentielle.

Distinctions clés :
• any([]) (False) vs all([]) (True, vérité vide).

Fonctionnement :
• Parcours de [] → aucun élément → renvoyer False.

Exécution étape par étape :
1. Itérer sur [].
2. Aucun élément.
3. Renvoyer False.

Ordre des opérations :
• Aucune évaluation d'élément.

Cas d'utilisation courants :
• any(results) sur une liste de résultats vide → False (aucun succès).

Cas limites :
• any(()) → False ; any("") → False (itérables vides).

Considérations de performance :
• O(1) : pas de parcours.

Exemples :
• any([])  # False
• any({})  # False

Remarques :
• Contraste avec all([]) → True (vérité vide : « tous satisfont » quand il n'y a personne).`,

  1006: `all([]) vaut True : vérité vide ; avec zéro élément, « tous les éléments satisfont » est trivialement vrai.

Débutant :
• all exige que tous soient vrais.
• Liste vide → aucun contre-exemple → True.

Intermédiaire :
• Convention logique : « tous les x satisfont P(x) » avec aucun x → vrai.
• Surprend souvent les débutants.

Expert :
• Vérité vide (vacuous truth) : une affirmation sur un ensemble vide est vraie par convention.
• all() cherche une raison de renvoyer False ; aucun élément = aucune raison.

Concepts clés :
• Vérité vide, all() sur itérable vide, quantification universelle.

Distinctions clés :
• all([]) (True) vs any([]) (False).

Fonctionnement :
• Parcours de [] → aucun falsy trouvé → True.

Exécution étape par étape :
1. Itérer sur [].
2. Aucun élément falsy.
3. Renvoyer True.

Ordre des opérations :
• Aucune évaluation d'élément.

Cas d'utilisation courants :
• all(pred(x) for x in items) avec items vide → True (validation vide réussie).

Cas limites :
• all(()) → True ; all("") → True.

Considérations de performance :
• O(1).

Exemples :
• all([])  # True
• all(x > 0 for x in [])  # True

Remarques :
• Mnémotechnique : all() cherche un falsy ; pas d'élément = pas de falsy → True.`,

  1007: `any([0, 0, 0]) vaut False : 0 est falsy ; aucun élément n'est truthy.

Débutant :
• 0 est considéré comme « faux » en Python.
• Tous sont 0 → tous falsy → any() renvoie False.

Intermédiaire :
• any() utilise la truthiness, pas seulement True/False.
• 0, 0.0, None, "", [] sont falsy.

Expert :
• bool(0) → False ; any() traite 0 comme False.
• Parcours complet sans truthy → False.

Concepts clés :
• Truthiness, 0 falsy, any() avec valeurs numériques.

Distinctions clés :
• any([0, 0, 0]) (False) vs any([0, 1, 0]) (True).

Fonctionnement :
• Chaque 0 est falsy ; aucun truthy → False.

Exécution étape par étape :
1. 0 → falsy, continuer.
2. 0 → falsy, continuer.
3. 0 → falsy, épuisé → False.

Ordre des opérations :
• Tous évalués (pas de court-circuit).

Cas d'utilisation courants :
• any(x for x in counts) pour vérifier qu'au moins un compteur est non nul.

Cas limites :
• any([0.0, 0j]) → False (0.0 et 0j sont falsy).

Considérations de performance :
• O(n).

Exemples :
• any([None, 0, ""])  # False
• any([0])  # False

Remarques :
• Les entiers non nuls (1, -1, 42) sont truthy.`,

  1008: `any([0, 1, 0]) vaut True : 1 est truthy ; any() court-circuite au premier truthy.

Débutant :
• 1 est « vrai » (entier non nul).
• any() trouve 1 et renvoie True immédiatement.

Intermédiaire :
• any() court-circuite : 0 falsy, 1 truthy → True.
• Le dernier 0 n'est jamais évalué.

Expert :
• Tout entier non nul est truthy.
• any() renvoie True dès le premier truthy (1).

Concepts clés :
• Truthiness des entiers, court-circuit, any().

Distinctions clés :
• any([0, 1, 0]) (True) vs all([0, 1, 0]) (False, à cause du premier 0).

Fonctionnement :
• 0 → falsy ; 1 → truthy → renvoyer True.

Exécution étape par étape :
1. 0 → falsy, continuer.
2. 1 → truthy.
3. Court-circuit : renvoyer True.
4. Le troisième 0 non évalué.

Ordre des opérations :
• Arrêt au premier truthy.

Cas d'utilisation courants :
• Vérifier qu'au moins un nombre est non nul : any(nums).

Cas limites :
• any([0, -1, 0]) → True (-1 est truthy).

Considérations de performance :
• Court-circuit évite de parcourir le reste.

Exemples :
• any([0, 5, 0])  # True
• any([0, 0, 42])  # True

Remarques :
• 1, -1, 42, etc. sont tous truthy.`,

  1009: `all([1, 2, 3]) vaut True : tous les entiers non nuls sont truthy ; all() confirme et renvoie True.

Débutant :
• 1, 2, 3 sont tous « vrais » (non nuls).
• all() vérifie chaque élément → tous truthy → True.

Intermédiaire :
• all() utilise la truthiness.
• Aucun falsy → parcours complet → True.

Expert :
• bool(1), bool(2), bool(3) → tous True.
• all() épuise l'itérable sans trouver de falsy → True.

Concepts clés :
• Truthiness des entiers, all(), quantification universelle.

Distinctions clés :
• all([1, 2, 3]) (True) vs all([1, 0, 3]) (False).

Fonctionnement :
• Chaque élément truthy → tous vérifiés → True.

Exécution étape par étape :
1. 1 → truthy, continuer.
2. 2 → truthy, continuer.
3. 3 → truthy, épuisé → True.

Ordre des opérations :
• Tous évalués.

Cas d'utilisation courants :
• Vérifier qu'une liste ne contient que des valeurs non nulles : all(vals).

Cas limites :
• all([1, 2, 0]) → False (0 au milieu).

Considérations de performance :
• O(n).

Exemples :
• all([-1, 5, 100])  # True
• all([1])  # True

Remarques :
• Pour les entiers, seul 0 est falsy.`,

  1010: `all([1, 0, 3]) vaut False : 0 est falsy ; all() court-circuite au second élément.

Débutant :
• 0 est « faux ».
• Dès qu'un 0 apparaît → all() renvoie False.

Intermédiaire :
• all() court-circuite au premier falsy.
• 3 n'est jamais évalué.

Expert :
• 1 truthy → continuer ; 0 falsy → renvoyer False.
• Le reste de l'itérable n'est pas parcouru.

Concepts clés :
• all(), court-circuit, 0 falsy.

Distinctions clés :
• all([1, 0, 3]) (False) vs any([1, 0, 3]) (True).

Fonctionnement :
• 1 → truthy ; 0 → falsy → False.

Exécution étape par étape :
1. 1 → truthy, continuer.
2. 0 → falsy.
3. Court-circuit : renvoyer False.
4. 3 non évalué.

Ordre des opérations :
• Arrêt au premier falsy.

Cas d'utilisation courants :
• Validation : all(x != 0 for x in divisors).

Cas limites :
• all([0, 1, 2]) → False (0 en premier).

Considérations de performance :
• Court-circuit efficace.

Exemples :
• all([1, 2, 0])  # False
• all([True, 0, True])  # False

Remarques :
• Un seul 0 suffit à faire échouer all().`,

  1011: `any(x > 3 for x in [1, 2, 5]) vaut True : 5 > 3 est True ; any() avec le générateur renvoie True.

Débutant :
• On teste si au moins un x est > 3.
• 5 > 3 → True → any() renvoie True.

Intermédiaire :
• any() accepte un générateur ; évaluation paresseuse.
• 1>3 → False, 2>3 → False, 5>3 → True → court-circuit.

Expert :
• Le générateur produit False, False, True ; any() s'arrête au True.
• Plus efficace en mémoire qu'une liste : [x > 3 for x in [1,2,5]].

Concepts clés :
• any() avec générateur, court-circuit, expressions génératrices.

Distinctions clés :
• any(x>3 for x in [1,2,5]) (True) vs all(x>3 for x in [1,2,5]) (False).

Fonctionnement :
• Générateur : 1>3→False, 2>3→False, 5>3→True.
• any() reçoit True → renvoie True.

Exécution étape par étape :
1. x=1 : 1>3 → False, continuer.
2. x=2 : 2>3 → False, continuer.
3. x=5 : 5>3 → True.
4. any() renvoie True (court-circuit).

Ordre des opérations :
• Le générateur est consommé jusqu'au premier True.

Cas d'utilisation courants :
• any(pred(x) for x in iterable) — au moins un satisfait la condition.

Cas limites :
• any(x>3 for x in [1,2,3]) → False.

Considérations de performance :
• Court-circuit + paresse : pas de liste intermédiaire.

Exemples :
• any(x>0 for x in [-1,0,1])  # True
• any(c.isupper() for c in "hello")  # False

Remarques :
• Pattern idiomatique pour tester une condition sur un itérable.`,

  1012: `all(x > 0 for x in [1, 2, 3]) vaut True : tous les éléments sont > 0 ; all() confirme.

Débutant :
• On vérifie que chaque x est > 0.
• 1, 2, 3 sont tous > 0 → True.

Intermédiaire :
• all() avec générateur : chaque condition doit être True.
• 1>0, 2>0, 3>0 → tous True → True.

Expert :
• Le générateur produit True, True, True.
• all() épuise le générateur sans falsy → True.

Concepts clés :
• all() avec générateur, validation, quantification universelle.

Distinctions clés :
• all(x>0 for x in [1,2,3]) (True) vs all(x>0 for x in [1,-2,3]) (False).

Fonctionnement :
• Chaque comparaison True → tous vérifiés → True.

Exécution étape par étape :
1. x=1 : 1>0 → True, continuer.
2. x=2 : 2>0 → True, continuer.
3. x=3 : 3>0 → True, épuisé.
4. all() renvoie True.

Ordre des opérations :
• Tout le générateur est consommé.

Cas d'utilisation courants :
• Validation : all(x > 0 for x in numbers).

Cas limites :
• all(x>0 for x in []) → True (vérité vide).

Considérations de performance :
• O(n) ; pas de court-circuit possible pour True.

Exemples :
• all(isinstance(x, int) for x in [1,2,3])  # True
• all(len(s)>0 for s in ["a","b"])  # True

Remarques :
• Pattern courant pour valider une collection entière.`,

  1013: `all(x > 0 for x in [1, -2, 3]) vaut False : -2 > 0 est False ; all() court-circuite.

Débutant :
• -2 n'est pas > 0.
• Dès qu'une condition échoue → all() renvoie False.

Intermédiaire :
• all() court-circuite au premier False du générateur.
• 3 n'est jamais testé.

Expert :
• Générateur : 1>0→True, -2>0→False.
• all() reçoit False → renvoie False immédiatement.

Concepts clés :
• all() avec générateur, court-circuit, validation.

Distinctions clés :
• all(x>0 for x in [1,-2,3]) (False) vs any(x>0 for x in [1,-2,3]) (True).

Fonctionnement :
• 1>0 → True ; -2>0 → False → all() renvoie False.

Exécution étape par étape :
1. x=1 : 1>0 → True, continuer.
2. x=-2 : -2>0 → False.
3. all() renvoie False (court-circuit).
4. x=3 non évalué.

Ordre des opérations :
• Arrêt au premier False.

Cas d'utilisation courants :
• Vérifier que tous les nombres sont positifs : all(x>0 for x in vals).

Cas limites :
• all(x>0 for x in [-1,2,3]) → False (-1 en premier).

Considérations de performance :
• Court-circuit évite de tester le reste.

Exemples :
• all(x>=0 for x in [0,-1,1])  # False
• all(c.isdigit() for c in "12a")  # False

Remarques :
• Un seul échec suffit à faire échouer all().`,

  1014: `any(c.isupper() for c in "Hello") vaut True : 'H' est majuscule ; any() court-circuite.

Débutant :
• On teste si au moins une lettre est majuscule.
• 'H' est majuscule → True.

Intermédiaire :
• Itération sur une chaîne : chaque caractère.
• 'H'.isupper() → True → any() renvoie True.

Expert :
• Le générateur produit False pour 'e','l','l','o' (non évalués) car 'H' suffit.
• Court-circuit : 'e','l','l','o' ne sont jamais testés.

Concepts clés :
• any() sur chaîne, isupper(), court-circuit.

Distinctions clés :
• any(c.isupper() for c in "Hello") (True) vs all(c.isupper() for c in "Hello") (False).

Fonctionnement :
• 'H'.isupper() → True → renvoyer True.

Exécution étape par étape :
1. c='H' : 'H'.isupper() → True.
2. any() renvoie True (court-circuit).
3. 'e','l','l','o' non évalués.

Ordre des opérations :
• Premier caractère suffit.

Cas d'utilisation courants :
• Validation de mot de passe : au moins une majuscule.

Cas limites :
• any(c.isupper() for c in "hello") → False.

Considérations de performance :
• Efficace pour les longues chaînes : arrêt dès la première majuscule.

Exemples :
• any(c.isdigit() for c in "abc1")  # True
• any(c.isupper() for c in "HELLO")  # True

Remarques :
• Pattern courant pour valider le format d'une chaîne.`,

  1015: `all(c.islower() for c in "hello") vaut True : tous les caractères sont minuscules.

Débutant :
• On vérifie que chaque lettre est minuscule.
• 'h','e','l','l','o' sont tous minuscules → True.

Intermédiaire :
• all() doit vérifier chaque caractère.
• Aucun court-circuit (tous True).

Expert :
• Le générateur produit True pour chaque caractère.
• all() épuise la chaîne → True.

Concepts clés :
• all() sur chaîne, islower(), validation.

Distinctions clés :
• all(c.islower() for c in "hello") (True) vs all(c.islower() for c in "Hello") (False).

Fonctionnement :
• Chaque islower() → True → tous vérifiés → True.

Exécution étape par étape :
1. 'h'.islower() → True, continuer.
2. 'e'.islower() → True, continuer.
3. … jusqu'à 'o'.
4. all() renvoie True.

Ordre des opérations :
• Parcours complet.

Cas d'utilisation courants :
• Vérifier qu'une chaîne est en minuscules : all(c.islower() for c in s).

Cas limites :
• all(c.islower() for c in "") → True (vérité vide).

Considérations de performance :
• O(n) pour n caractères.

Exemples :
• all(c.isalpha() for c in "hello")  # True
• all(c.islower() for c in "abc")  # True

Remarques :
• Pour "hello", les espaces et chiffres donneraient False avec islower() (les chiffres renvoient False).`,

  1016: `all(c.islower() for c in "Hello") vaut False : 'H' n'est pas minuscule ; all() court-circuite.

Débutant :
• 'H' est majuscule, pas minuscule.
• Dès le premier caractère → all() renvoie False.

Intermédiaire :
• 'H'.islower() → False.
• 'e','l','l','o' ne sont jamais testés.

Expert :
• Premier caractère falsy pour la condition → all() renvoie False.
• Court-circuit immédiat.

Concepts clés :
• all() sur chaîne, islower(), court-circuit.

Distinctions clés :
• all(c.islower() for c in "Hello") (False) vs any(c.islower() for c in "Hello") (True).

Fonctionnement :
• 'H'.islower() → False → renvoyer False.

Exécution étape par étape :
1. c='H' : 'H'.islower() → False.
2. all() renvoie False (court-circuit).
3. Reste non évalué.

Ordre des opérations :
• Arrêt au premier False.

Cas d'utilisation courants :
• Vérifier qu'une chaîne est entièrement en minuscules.

Cas limites :
• all(c.islower() for c in "HeLLo") → False ('H' en premier).

Considérations de performance :
• Court-circuit : un seul caractère testé.

Exemples :
• all(c.islower() for c in "ABC")  # False
• all(c.isdigit() for c in "12a")  # False

Remarques :
• 'H'.islower() est False ; 'h'.islower() est True.`,

  1017: `any(isinstance(x, str) for x in [1, "a", 3]) vaut True : "a" est une chaîne ; any() court-circuite.

Débutant :
• On teste si au moins un élément est une chaîne.
• "a" est une chaîne → True.

Intermédiaire :
• isinstance(x, str) vérifie le type.
• 1→False, "a"→True → any() renvoie True.

Expert :
• Générateur : isinstance(1,str)→False, isinstance("a",str)→True.
• 3 n'est jamais vérifié (court-circuit).

Concepts clés :
• any() avec isinstance(), validation de type, collections mixtes.

Distinctions clés :
• any(isinstance(x,str) for x in [1,"a",3]) (True) vs all(isinstance(x,str) for x in [1,"a",3]) (False).

Fonctionnement :
• isinstance("a", str) → True → renvoyer True.

Exécution étape par étape :
1. x=1 : isinstance(1, str) → False, continuer.
2. x="a" : isinstance("a", str) → True.
3. any() renvoie True (court-circuit).

Ordre des opérations :
• Arrêt au premier True.

Cas d'utilisation courants :
• Détecter des chaînes dans une liste mixte : any(isinstance(x, str) for x in data).

Cas limites :
• any(isinstance(x, str) for x in [1, 2, 3]) → False.

Considérations de performance :
• Court-circuit utile pour listes longues.

Exemples :
• any(isinstance(x, int) for x in [1.0, "x", 3])  # True si 3 trouvé
• any(type(x)==list for x in [1,[2],3])  # True

Remarques :
• isinstance() accepte les sous-classes ; type() est plus strict.`,

  1018: `all(isinstance(x, int) for x in [1, 2, 3]) vaut True : tous les éléments sont des entiers.

Débutant :
• On vérifie que chaque élément est un int.
• 1, 2, 3 sont tous des int → True.

Intermédiaire :
• all() avec isinstance() : validation de type homogène.
• Chaque élément est int → True.

Expert :
• Le générateur produit True pour chaque élément.
• all() épuise la liste → True.

Concepts clés :
• all() avec isinstance(), validation de type, homogénéité.

Distinctions clés :
• all(isinstance(x,int) for x in [1,2,3]) (True) vs all(isinstance(x,int) for x in [1,"a",3]) (False).

Fonctionnement :
• Chaque isinstance(..., int) → True → tous vérifiés → True.

Exécution étape par étape :
1. isinstance(1, int) → True, continuer.
2. isinstance(2, int) → True, continuer.
3. isinstance(3, int) → True, épuisé.
4. all() renvoie True.

Ordre des opérations :
• Parcours complet.

Cas d'utilisation courants :
• Valider qu'une liste ne contient que des int : all(isinstance(x, int) for x in items).

Cas limites :
• all(isinstance(x, int) for x in []) → True (vérité vide).

Considérations de performance :
• O(n).

Exemples :
• all(isinstance(x, str) for x in ["a","b"])  # True
• all(isinstance(x, (int, float)) for x in [1, 2.0, 3])  # True

Remarques :
• isinstance(x, (int, float)) permet plusieurs types.`,

  1019: `any([None, 0, "", [], False]) vaut False : tous ces éléments sont falsy ; aucun truthy.

Débutant :
• None, 0, "", [], False sont tous « faux » en Python.
• any() ne trouve aucun truthy → False.

Intermédiaire :
• Valeurs falsy classiques : None, 0, chaîne vide, liste vide, False.
• any() parcourt tout sans trouver de truthy.

Expert :
• Représentation des principales valeurs falsy de Python.
• any() épuise l'itérable → False.

Concepts clés :
• Valeurs falsy, any(), convention Python.

Distinctions clés :
• any([None,0,"",[],False]) (False) vs all([None,0,"",[],False]) (False, à cause du premier).

Fonctionnement :
• Chaque élément falsy → aucun truthy → False.

Exécution étape par étape :
1. None → falsy, continuer.
2. 0 → falsy, continuer.
3. "" → falsy, continuer.
4. [] → falsy, continuer.
5. False → falsy, épuisé → False.

Ordre des opérations :
• Parcours complet (aucun court-circuit possible).

Cas d'utilisation courants :
• Comprendre les valeurs falsy pour les conditions.

Cas limites :
• any([0, 0.0, 0j]) → False (tous falsy).

Considérations de performance :
• O(n).

Exemples :
• bool(None), bool(0), bool(""), bool([]), bool(False)  # tous False
• any([[], {}, set(), ()])  # False

Remarques :
• Les valeurs falsy : None, False, 0, 0.0, 0j, "", [], {}, set(), ().`,

  1020: `all([1, "hello", [1], True]) vaut True : tous ces éléments sont truthy ; all() confirme.

Débutant :
• 1, "hello", [1], True sont tous « vrais ».
• all() vérifie chaque élément → tous truthy → True.

Intermédiaire :
• Entier non nul, chaîne non vide, liste non vide, True.
• Types mixtes ; la truthiness est universelle.

Expert :
• Chaque type a sa règle : int (≠0), str (len>0), list (len>0), bool (True).
• all() épuise sans falsy → True.

Concepts clés :
• Truthiness multi-type, all(), valeurs truthy.

Distinctions clés :
• all([1,"hello",[1],True]) (True) vs all([1,"",[1],True]) (False).

Fonctionnement :
• Chaque élément truthy → tous vérifiés → True.

Exécution étape par étape :
1. 1 → truthy, continuer.
2. "hello" → truthy, continuer.
3. [1] → truthy, continuer.
4. True → truthy, épuisé → True.

Ordre des opérations :
• Parcours complet.

Cas d'utilisation courants :
• Vérifier qu'une liste de valeurs optionnelles est complète : all([a, b, c]).

Cas limites :
• all([1, "hello", [0], True]) → True ([0] est truthy car non vide).

Considérations de performance :
• O(n).

Exemples :
• all([-1, "x", [None], True])  # True
• all([1, 2, 3])  # True

Remarques :
• Pour les conteneurs, c'est la longueur qui compte, pas le contenu.`,

  1021: `x = 15 : « big » si x > 10 sinon (« mid » si x > 5 sinon « small ») → "big" : 15 > 10 est True.

Débutant :
• x vaut 15.
• 15 > 10 → vrai → on renvoie "big".

Intermédiaire :
• Ternaire imbriqué : condition externe d'abord.
• x > 10 → True → "big" ; le ternaire interne n'est pas évalué.

Expert :
• Équivalent à : if x > 10: "big" elif x > 5: "mid" else: "small".
• Court-circuit : la branche else (ternaire interne) n'est jamais exécutée.

Concepts clés :
• Ternaire imbriqué, court-circuit, ordre d'évaluation.

Distinctions clés :
• x=15 → "big" ; x=7 → "mid" ; x=3 → "small".

Fonctionnement :
• x > 10 → 15 > 10 → True → renvoyer "big".

Exécution étape par étape :
1. Évaluer x > 10 → 15 > 10 → True.
2. Renvoyer la branche if : "big".
3. La branche else (ternaire interne) non évaluée.

Ordre des opérations :
• Condition externe d'abord ; si True, pas d'évaluation du else.

Cas d'utilisation courants :
• Catégorisation en plages : taille = "big" if x>10 else ("mid" if x>5 else "small").

Cas limites :
• x=10 → "mid" (10 > 10 False, 10 > 5 True).
• x=5 → "small" (les deux False).

Considérations de performance :
• Court-circuit évite d'évaluer le ternaire interne.

Exemples :
• 12 : "big" ; 7 : "mid" ; 2 : "small"

Remarques :
• Limiter l'imbrication pour la lisibilité ; préférer if/elif/else si trop complexe.`,

  1022: `x = 7 : « big » si x > 10 sinon (« mid » si x > 5 sinon « small ») → "mid" : 7 > 10 False, 7 > 5 True.

Débutant :
• x vaut 7.
• 7 > 10 est faux → on évalue le else (ternaire interne).
• 7 > 5 est vrai → "mid".

Intermédiaire :
• Condition externe False → évaluation du ternaire interne.
• Condition interne x > 5 → True → "mid".

Expert :
• Le else du ternaire externe contient un autre ternaire.
• x > 10 → False ; donc évaluer "mid" if x > 5 else "small" ; x > 5 → True → "mid".

Concepts clés :
• Ternaire imbriqué, évaluation conditionnelle, branche else.

Distinctions clés :
• x=7 → "mid" (entre 5 et 10) ; x=15 → "big" ; x=3 → "small".

Fonctionnement :
• x > 10 → False ; évaluer ternaire interne.
• x > 5 → True → "mid".

Exécution étape par étape :
1. x > 10 → 7 > 10 → False.
2. Évaluer else : "mid" if x > 5 else "small".
3. x > 5 → 7 > 5 → True.
4. Renvoyer "mid".

Ordre des opérations :
• Condition externe d'abord ; si False, évaluation du ternaire interne.

Cas d'utilisation courants :
• Catégorisation en trois plages.

Cas limites :
• x=5 → "small" (5 > 5 False).
• x=10 → "mid" (10 > 10 False, 10 > 5 True).

Considérations de performance :
• Les deux conditions sont évaluées.

Exemples :
• 6, 8, 9 → "mid"
• 4 → "small"

Remarques :
• Équivalent à elif x > 5: "mid" dans une chaîne if/elif/else.`,

  1023: `x = 3 : « big » si x > 10 sinon (« mid » si x > 5 sinon « small ») → "small" : les deux conditions sont False.

Débutant :
• x vaut 3.
• 3 > 10 faux, 3 > 5 faux → on prend le else final : "small".

Intermédiaire :
• Les deux conditions échouent.
• Chute jusqu'au else le plus interne.

Expert :
• x > 10 → False ; ternaire interne : x > 5 → False → "small".
• Équivalent à else: "small" dans if/elif/else.

Concepts clés :
• Ternaire imbriqué, chute dans les else, valeur par défaut.

Distinctions clés :
• x=3 → "small" ; x=7 → "mid" ; x=15 → "big".

Fonctionnement :
• x > 10 → False ; x > 5 → False → "small".

Exécution étape par étape :
1. x > 10 → 3 > 10 → False.
2. Évaluer ternaire interne : "mid" if x > 5 else "small".
3. x > 5 → 3 > 5 → False.
4. Renvoyer "small".

Ordre des opérations :
• Les deux conditions évaluées de gauche à droite.

Cas d'utilisation courants :
• Trois catégories : grand, moyen, petit.

Cas limites :
• x=0, x=-5 → "small".
• x=5 → "small" (5 > 5 False).

Considérations de performance :
• Les deux comparaisons sont faites.

Exemples :
• 1, 2, 4, 5 → "small"
• 6, 7, 8, 9 → "mid"

Remarques :
• Le else final est la valeur par défaut quand aucune condition ne réussit.`,

  1024: `Une clause de garde renvoie tôt pour éviter l'imbrication profonde : elle traite les cas limites au début et garde la logique principale à plat.

Débutant :
• Une clause de garde = retour anticipé si une condition n'est pas remplie.
• On évite les if imbriqués.

Intermédiaire :
• Vérifier les cas invalides en premier, return immédiat.
• La logique « heureux » reste au niveau d'indentation principal.

Expert :
• Sans garde : if a: if b: if c: ... (imbrication).
• Avec garde : if not a: return ; if not b: return ; ... (plat).
• Réduit la complexité cognitive et améliore la lisibilité.

Concepts clés :
• Clause de garde, retour anticipé, réduction d'imbrication.

Distinctions clés :
• Garde (return tôt) vs try/except (gestion d'exceptions) vs boucle (répétition).

Fonctionnement :
• Au début de la fonction : if condition_invalide: return valeur_par_défaut.
• Si valide, on continue avec la logique principale.

Exécution étape par étape :
1. Vérifier première condition invalide → si oui, return.
2. Vérifier suivante → si oui, return.
3. Logique principale sans imbrication.

Ordre des opérations :
• Les gardes sont évaluées dans l'ordre ; la première qui matche fait return.

Cas d'utilisation courants :
• Validation d'entrée : if data is None: return None.
• Vérification de préconditions avant traitement.

Cas limites :
• Plusieurs gardes successives ; ordre important.

Considérations de performance :
• Retour anticipé évite des calculs inutiles.

Exemples :
• if not data: return [] ; if len(data)==0: return []
• def process(x): if x is None: return ; ...

Remarques :
• Pattern recommandé pour garder le code lisible ; préférer aux if/else imbriqués.`,

  1025: `x = 5 ; y = 10 : « both » si x > 0 and y > 0 else « not both » → "both" : les deux sont > 0.

Débutant :
• x=5 et y=10 sont tous deux > 0.
• La condition and est vraie → "both".

Intermédiaire :
• x > 0 → True, y > 0 → True.
• True and True → True → "both".

Expert :
• Ternaire avec condition composée (and).
• Les deux comparaisons sont évaluées (pas de court-circuit, les deux True).

Concepts clés :
• Ternaire, and, condition composée.

Distinctions clés :
• x=5,y=10 → "both" ; x=-1,y=10 → "not both".

Fonctionnement :
• x > 0 and y > 0 → True and True → True → "both".

Exécution étape par étape :
1. x > 0 → 5 > 0 → True.
2. y > 0 → 10 > 0 → True.
3. True and True → True.
4. Renvoyer "both".

Ordre des opérations :
• and : les deux côtés évalués si le premier est True.

Cas d'utilisation courants :
• Vérifier que deux valeurs sont dans une plage valide.

Cas limites :
• x=0,y=10 → "not both" (0 > 0 False).
• x=5,y=0 → "not both".

Considérations de performance :
• Les deux comparaisons sont faites.

Exemples :
• x=1,y=1 → "both"
• x=-1,y=-1 → "not both"

Remarques :
• and exige que les deux conditions soient True.`,

  1026: `x = -1 ; y = 10 : « both » si x > 0 and y > 0 else « not both » → "not both" : x > 0 est False ; and court-circuite.

Débutant :
• x=-1 n'est pas > 0.
• Dès que x > 0 est faux → and est faux → "not both".

Intermédiaire :
• x > 0 → -1 > 0 → False.
• and court-circuite : y > 0 n'est pas évalué.
• False → "not both".

Expert :
• Court-circuit : False and (n'importe quoi) → False.
• y > 0 n'est jamais évalué.

Concepts clés :
• and, court-circuit, ternaire.

Distinctions clés :
• x=-1,y=10 → "not both" ; x=5,y=10 → "both".

Fonctionnement :
• x > 0 → False → and renvoie False sans évaluer y > 0.

Exécution étape par étape :
1. x > 0 → -1 > 0 → False.
2. Court-circuit : and renvoie False.
3. y > 0 non évalué.
4. Renvoyer "not both".

Ordre des opérations :
• and court-circuite si le premier opérande est falsy.

Cas d'utilisation courants :
• Vérifications en chaîne : if a and b and c (s'arrête au premier faux).

Cas limites :
• x=0,y=10 → "not both".
• x=-1,y=-1 → "not both".

Considérations de performance :
• Court-circuit évite d'évaluer y > 0.

Exemples :
• x=0,y=5 → "not both"
• x=-5,y=10 → "not both"

Remarques :
• Placer la condition la plus susceptible d'être fausse en premier peut optimiser.`,

  1027: `x = 0 : « pos » si x > 0 else (« neg » si x < 0 else « zero ») → "zero" : 0 n'est ni > 0 ni < 0.

Débutant :
• x vaut 0.
• 0 > 0 faux, 0 < 0 faux → else final : "zero".

Intermédiaire :
• Ternaire imbriqué à trois branches : pos, neg, zero.
• x=0 échoue aux deux conditions → "zero".

Expert :
• Équivalent à : if x > 0: "pos" elif x < 0: "neg" else: "zero".
• Cas limite : x=0 est le seul à tomber dans le else final.

Concepts clés :
• Ternaire à trois voies, signe d'un nombre, cas zéro.

Distinctions clés :
• x=0 → "zero" ; x=5 → "pos" ; x=-3 → "neg".

Fonctionnement :
• x > 0 → False ; x < 0 → False → "zero".

Exécution étape par étape :
1. x > 0 → 0 > 0 → False.
2. Évaluer else : "neg" if x < 0 else "zero".
3. x < 0 → 0 < 0 → False.
4. Renvoyer "zero".

Ordre des opérations :
• Les deux conditions sont évaluées.

Cas d'utilisation courants :
• Déterminer le signe : pos/neg/zero.

Cas limites :
• x=0 est le seul cas "zero".

Considérations de performance :
• Négligeable.

Exemples :
• 1, 42 → "pos"
• -1, -99 → "neg"

Remarques :
• Pattern classique pour le signe d'un nombre.`,

  1028: `x = None : x si x is not None else « default » → "default" : x est None, donc la condition est False.

Débutant :
• x vaut None.
• x is not None est faux → on prend "default".

Intermédiaire :
• Pattern de valeur par défaut (null-coalescing).
• is not None vérifie l'identité avec None.

Expert :
• Préférer x is not None à x != None (PEP 8).
• Quand x est None, le else est évalué → "default".

Concepts clés :
• Valeur par défaut, is not None, ternaire.

Distinctions clés :
• x=None → "default" ; x=42 → 42.

Fonctionnement :
• x is not None → False → "default".

Exécution étape par étape :
1. Évaluer x is not None → None is not None → False.
2. Renvoyer la branche else : "default".

Ordre des opérations :
• Condition d'abord ; si False, else.

Cas d'utilisation courants :
• Paramètre optionnel : arg if arg is not None else default.
• Configuration avec fallback.

Cas limites :
• x=0 ou x="" : x is not None est True → on renvoie x (contrairement à or).

Considérations de performance :
• Négligeable.

Exemples :
• None → "default"
• 0 → 0 (préserve les falsy voulus)

Remarques :
• Ce pattern préserve 0 et "" ; "x or default" les remplacerait.`,

  1029: `x = 42 : x si x is not None else « default » → 42 : x n'est pas None, donc on renvoie x.

Débutant :
• x vaut 42.
• x is not None est vrai → on renvoie x (42).

Intermédiaire :
• La condition est True → branche if évaluée.
• x est retourné tel quel.

Expert :
• 42 is not None → True.
• Le else n'est jamais évalué.

Concepts clés :
• Valeur par défaut, is not None, préservation des valeurs.

Distinctions clés :
• x=42 → 42 ; x=None → "default".

Fonctionnement :
• x is not None → True → renvoyer x (42).

Exécution étape par étape :
1. x is not None → 42 is not None → True.
2. Renvoyer la branche if : x → 42.

Ordre des opérations :
• Condition True → pas d'évaluation du else.

Cas d'utilisation courants :
• Utiliser une valeur si présente, sinon défaut.

Cas limites :
• x=0 → 0 (préserve 0, contrairement à or).
• x="" → "" (préserve chaîne vide).

Considérations de performance :
• Court-circuit : else non évalué.

Exemples :
• 42, -1, "hello" → valeur conservée
• None → "default"

Remarques :
• Idéal pour distinguer None (absent) des valeurs falsy légitimes (0, "").`,

  1030: `[x for x in range(10) if x % 2 == 0 if x % 3 == 0] vaut [0, 6] : les deux if sont combinés par AND.

Débutant :
• On garde les x pairs ET divisibles par 3.
• 0 et 6 sont les seuls dans range(10) qui satisfont les deux.

Intermédiaire :
• Plusieurs if dans une compréhension = AND implicite.
• Équivalent à : if x % 2 == 0 and x % 3 == 0.

Expert :
• [expr for x in iter if c1 if c2] ≡ [expr for x in iter if c1 and c2].
• x doit être divisible par 2 et par 3 → divisible par 6.
• 0, 6 dans range(10).

Concepts clés :
• Compréhension avec plusieurs if, AND implicite, filtrage.

Distinctions clés :
• if c1 if c2 (AND) vs if c1 or c2 (OR, syntaxe différente).

Fonctionnement :
• Pour chaque x : x%2==0 and x%3==0.
• 0 : True and True → inclus ; 6 : idem ; reste exclu.

Exécution étape par étape :
1. x=0 : 0%2==0 ✓, 0%3==0 ✓ → 0 inclus.
2. x=1,2,3,4,5 : au moins une condition fausse → exclus.
3. x=6 : 6%2==0 ✓, 6%3==0 ✓ → 6 inclus.
4. x=7,8,9 : exclus.
5. Résultat : [0, 6].

Ordre des opérations :
• Les deux conditions sont évaluées pour chaque x ; les deux doivent être True.

Cas d'utilisation courants :
• Filtrer sur plusieurs critères : [x for x in data if cond1 if cond2].

Cas limites :
• [x for x in range(0) if ... if ...] → [].

Considérations de performance :
• O(n) sur l'itérable.

Exemples :
• [x for x in range(20) if x%2==0 if x%5==0]  # [0, 10]
• Équivalent : [x for x in range(10) if x%2==0 and x%3==0]

Remarques :
• Préférer if c1 and c2 pour la clarté.`,

  1031: `bool([False]) vaut True : une liste avec un élément est truthy, même si l'élément est False.

Débutant :
• [False] contient un élément.
• Pour les listes, c'est la longueur qui compte : non vide → True.

Intermédiaire :
• bool() sur un conteneur vérifie si il est non vide.
• Le contenu (False) n'affecte pas la truthiness de la liste.

Expert :
• list.__bool__ : len(self) != 0.
• [False] a len 1 → truthy.
• Piège courant : bool([False]) ≠ bool(False).

Concepts clés :
• Truthiness des conteneurs, longueur vs contenu.

Distinctions clés :
• bool([False]) (True) vs bool(False) (False) vs bool([]) (False).

Fonctionnement :
• bool([False]) → len([False]) != 0 → 1 != 0 → True.

Exécution étape par étape :
1. [False] est une liste.
2. __bool__ → len != 0.
3. len = 1 → True.

Ordre des opérations :
• bool() appelle __bool__ sur la liste.

Cas d'utilisation courants :
• if items: (liste non vide) vs if not items: (liste vide).

Cas limites :
• bool([0]), bool([None]), bool([[]]) → tous True (liste non vide).

Considérations de performance :
• O(1) pour list.__bool__.

Exemples :
• bool([0])  # True
• bool([])   # False

Remarques :
• Pour les conteneurs : vérité = non vide, pas vérité du contenu.`,

  1032: `bool("False") vaut True : "False" est une chaîne non vide, donc truthy.

Débutant :
• "False" est du texte (5 caractères).
• Une chaîne non vide est « vraie » ; seul "" est falsy.

Intermédiaire :
• bool() sur une chaîne : len != 0.
• Le contenu ("False") n'est pas interprété comme le booléen False.

Expert :
• "False" est une chaîne, pas le booléen False.
• str.__bool__ : len(self) != 0.
• Piège : bool("False") ≠ bool(False).

Concepts clés :
• Truthiness des chaînes, contenu vs longueur.

Distinctions clés :
• bool("False") (True) vs bool(False) (False) vs bool("") (False).

Fonctionnement :
• bool("False") → len("False") != 0 → 5 != 0 → True.

Exécution étape par étape :
1. "False" est une chaîne.
2. __bool__ → len != 0.
3. len = 5 → True.

Ordre des opérations :
• bool() appelle __bool__ sur la chaîne.

Cas d'utilisation courants :
• if s: pour chaîne non vide.

Cas limites :
• bool("0"), bool("None"), bool(" ") → tous True (chaînes non vides).

Considérations de performance :
• O(1).

Exemples :
• bool("0")   # True
• bool("")    # False

Remarques :
• Pour convertir "False" en booléen False, il faut une logique explicite (ex. s.lower() == "false").`,

  1033: `bool(" ") vaut True : une chaîne avec un espace est non vide, donc truthy.

Débutant :
• " " contient un caractère (espace).
• Chaîne non vide → True.

Intermédiaire :
• Un espace est un caractère comme un autre.
• len(" ") == 1 → truthy.

Expert :
• " " n'est pas "" ; elle a un caractère.
• str.__bool__ : len != 0 ; len(" ") = 1 → True.

Concepts clés :
• Truthiness des chaînes, espace comme caractère.

Distinctions clés :
• bool(" ") (True) vs bool("") (False) vs " ".strip()=="" (True si que des espaces).

Fonctionnement :
• bool(" ") → len(" ") != 0 → 1 != 0 → True.

Exécution étape par étape :
1. " " est une chaîne.
2. len(" ") = 1.
3. 1 != 0 → True.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• if user_input: peut être True pour " " (entrée avec seulement des espaces).

Cas limites :
• "  " (plusieurs espaces) → True.
• "" → False.

Considérations de performance :
• O(1).

Exemples :
• bool("\t")  # True
• bool("")    # False

Remarques :
• Pour ignorer les espaces : if s.strip():`,

  1034: `bool(0.0) vaut False : 0.0 est falsy, comme l'entier 0.

Débutant :
• 0.0 est le zéro en float.
• En Python, 0 et 0.0 sont « faux ».

Intermédiaire :
• float.__bool__ : False pour 0.0, True pour tout autre float.
• 0.0 est falsy comme 0.

Expert :
• bool(0.0) → False.
• Même convention que pour int : seul zéro est falsy.

Concepts clés :
• Truthiness des float, 0.0 falsy.

Distinctions clés :
• bool(0.0) (False) vs bool(0.1) (True) vs bool(0) (False).

Fonctionnement :
• float.__bool__ : renvoie False pour 0.0.

Exécution étape par étape :
1. 0.0 est un float.
2. __bool__ → False.
3. Résultat : False.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• if value: pour exclure 0 et 0.0.

Cas limites :
• 0.0, -0.0 → False.
• 1e-10 → True (très petit mais non nul).

Considérations de performance :
• Négligeable.

Exemples :
• bool(0.0)   # False
• bool(1.0)   # True

Remarques :
• Pour les nombres, seul zéro (0, 0.0, 0j) est falsy.`,

  1035: `bool(0j) vaut False : le complexe 0+0j est falsy.

Débutant :
• 0j est le zéro complexe (0+0j).
• Comme 0 et 0.0, il est « faux ».

Intermédiaire :
• complex.__bool__ : False pour 0j, True pour tout autre complexe.
• 0j = 0+0j, partie réelle et imaginaire nulles.

Expert :
• bool(0j) → False.
• 1+0j, 0+1j, 1+1j sont truthy.

Concepts clés :
• Truthiness des complexes, 0j falsy.

Distinctions clés :
• bool(0j) (False) vs bool(1j) (True) vs bool(0) (False).

Fonctionnement :
• complex.__bool__ : False pour 0j.

Exécution étape par étape :
1. 0j est un complexe.
2. __bool__ → False.
3. Résultat : False.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• if z: pour exclure le zéro complexe.

Cas limites :
• 0+0j, 0j → False.
• 1e-10j → True.

Considérations de performance :
• Négligeable.

Exemples :
• bool(0j)    # False
• bool(1+0j)  # True

Remarques :
• Les trois zéros numériques (0, 0.0, 0j) sont falsy.`,

  1036: `None or "default" vaut "default" : None est falsy ; or renvoie le premier truthy ou le dernier.

Débutant :
• None est « faux ».
• or cherche un truthy ; None falsy → on prend "default".

Intermédiaire :
• None or "default" : None falsy → évaluer le second.
• "default" est truthy → or renvoie "default".

Expert :
• or renvoie le premier truthy ou le dernier si tous falsy.
• None falsy → "default" évalué → truthy → renvoyer "default".

Concepts clés :
• or, court-circuit, valeur par défaut.

Distinctions clés :
• None or "default" ("default") vs "value" or "default" ("value").

Fonctionnement :
• None → falsy → évaluer "default" → truthy → "default".

Exécution étape par étape :
1. Évaluer None → falsy.
2. Évaluer "default" → truthy.
3. or renvoie "default".

Ordre des opérations :
• or : si premier falsy, évaluer le second.

Cas d'utilisation courants :
• Valeur par défaut : x = user_input or "default".

Cas limites :
• None or None → None (dernier si tous falsy).

Considérations de performance :
• Court-circuit si le premier est truthy.

Exemples :
• 0 or 10  # 10
• [] or [1,2]  # [1,2]

Remarques :
• Attention : 0 or "default" → "default" (0 est falsy).`,

  1037: `"value" or "default" vaut "value" : "value" est truthy ; or court-circuite.

Débutant :
• "value" est une chaîne non vide → « vraie ».
• or renvoie le premier truthy → "value".

Intermédiaire :
• "value" truthy → or renvoie "value" immédiatement.
• "default" n'est jamais évalué.

Expert :
• or court-circuite au premier truthy.
• "value" a len > 0 → truthy → renvoyer "value".

Concepts clés :
• or, court-circuit, premier truthy.

Distinctions clés :
• "value" or "default" ("value") vs "" or "default" ("default").

Fonctionnement :
• "value" → truthy → renvoyer "value".

Exécution étape par étape :
1. Évaluer "value" → truthy.
2. Court-circuit : renvoyer "value".
3. "default" non évalué.

Ordre des opérations :
• or court-circuite si le premier est truthy.

Cas d'utilisation courants :
• x or default : utiliser x si présent, sinon default.

Cas limites :
• "value" or "" → "value" (premier truthy gagne).

Considérations de performance :
• Court-circuit évite d'évaluer "default".

Exemples :
• 1 or 0  # 1
• [1] or []  # [1]

Remarques :
• Pattern idiomatique pour valeur par défaut.`,

  1038: `"" or "fallback" vaut "fallback" : "" est falsy ; or prend le second.

Débutant :
• La chaîne vide "" est « fausse ».
• or cherche un truthy ; "" falsy → "fallback".

Intermédiaire :
• "" falsy → or évalue "fallback".
• "fallback" truthy → or renvoie "fallback".

Expert :
• str.__bool__ : len != 0 ; "" a len 0 → falsy.
• or renvoie le premier truthy ou le dernier.

Concepts clés :
• or, chaîne vide falsy, fallback.

Distinctions clés :
• "" or "fallback" ("fallback") vs "x" or "fallback" ("x").

Fonctionnement :
• "" → falsy → "fallback" → truthy → "fallback".

Exécution étape par étape :
1. "" → falsy.
2. "fallback" → truthy.
3. or renvoie "fallback".

Ordre des opérations :
• Premier falsy → évaluer le second.

Cas d'utilisation courants :
• Chaîne par défaut : name = user_input or "Anonymous".

Cas limites :
• "" or "" → "" (dernier si tous falsy).

Considérations de performance :
• Une seule évaluation du second si le premier est falsy.

Exemples :
• [] or [1]  # [1]
• 0 or 42  # 42

Remarques :
• "" or "fallback" est courant pour les entrées utilisateur vides.`,

  1039: `0 or None or "" or "found" vaut "found" : or évalue de gauche à droite ; les trois premiers sont falsy, le dernier truthy.

Débutant :
• 0, None, "" sont tous « faux ».
• "found" est truthy → or renvoie "found".

Intermédiaire :
• 0 or None → 0 falsy, None falsy → None (dernier évalué).
• None or "" → "" falsy.
• "" or "found" → "" falsy, "found" truthy → "found".

Expert :
• or en chaîne : évaluation de gauche à droite.
• Renvoie le premier truthy ou le dernier si tous falsy.
• 0, None, "" falsy ; "found" truthy → "found".

Concepts clés :
• or en chaîne, court-circuit, premier truthy.

Distinctions clés :
• 0 or None or "" or "found" ("found") vs 0 or None or "" ("").

Fonctionnement :
• 0 falsy → None falsy → "" falsy → "found" truthy → "found".

Exécution étape par étape :
1. 0 → falsy, continuer.
2. None → falsy, continuer.
3. "" → falsy, continuer.
4. "found" → truthy.
5. Renvoyer "found".

Ordre des opérations :
• Évaluation de gauche à droite jusqu'au premier truthy.

Cas d'utilisation courants :
• Chaîne de fallbacks : x = a or b or c or default.

Cas limites :
• 0 or 0 or "" or None → None (tous falsy, dernier).

Considérations de performance :
• Arrêt au premier truthy.

Exemples :
• None or 0 or 1  # 1
• [] or {} or "x"  # "x"

Remarques :
• Pattern pour première valeur « présente » dans une liste d'options.`,

  1040: `1 and 2 and 3 vaut 3 : tous sont truthy ; and renvoie le dernier évalué.

Débutant :
• 1, 2, 3 sont tous « vrais » (non nuls).
• and exige que tous soient truthy → renvoie le dernier (3).

Intermédiaire :
• and : tous truthy → dernier opérande évalué.
• 1 and 2 and 3 → 3.

Expert :
• and renvoie le premier falsy ou le dernier si tous truthy.
• Ici tous truthy → 3 (dernier).

Concepts clés :
• and, dernier opérande, truthiness.

Distinctions clés :
• 1 and 2 and 3 (3) vs 1 and 0 and 3 (0).

Fonctionnement :
• 1 truthy → 2 truthy → 3 truthy → renvoyer 3.

Exécution étape par étape :
1. 1 → truthy, continuer.
2. 2 → truthy, continuer.
3. 3 → truthy.
4. and renvoie 3 (dernier évalué).

Ordre des opérations :
• Tous évalués quand tous truthy.

Cas d'utilisation courants :
• Chaîne de vérifications : a and b and c (dernier si tous ok).

Cas limites :
• 1 and 2 and 0 → 0 (court-circuit au 0).

Considérations de performance :
• Pas de court-circuit ici (tous truthy).

Exemples :
• "a" and "b" and "c"  # "c"
• 1 and True  # True

Remarques :
• and/or renvoient une valeur, pas toujours un booléen.`,

  1041: `1 and 0 and 3 vaut 0 : 0 est falsy ; and court-circuite et renvoie 0.

Débutant :
• 0 est « faux ».
• and s'arrête au premier falsy → 0.

Intermédiaire :
• 1 truthy → 0 falsy → and renvoie 0.
• 3 n'est jamais évalué.

Expert :
• and court-circuite au premier falsy.
• 1 and 0 and 3 → 0 (arrêt au 0).

Concepts clés :
• and, court-circuit, 0 falsy.

Distinctions clés :
• 1 and 0 and 3 (0) vs 1 and 2 and 3 (3).

Fonctionnement :
• 1 → truthy ; 0 → falsy → renvoyer 0.

Exécution étape par étape :
1. 1 → truthy, continuer.
2. 0 → falsy.
3. Court-circuit : renvoyer 0.
4. 3 non évalué.

Ordre des opérations :
• Arrêt au premier falsy.

Cas d'utilisation courants :
• Vérifications en chaîne : if a and b and c (s'arrête au premier faux).

Cas limites :
• 1 and 0 and expensive_call() — expensive_call non exécuté.

Considérations de performance :
• Court-circuit évite d'évaluer 3 et le reste.

Exemples :
• True and False and True  # False
• 1 and [] and 3  # []

Remarques :
• and renvoie la valeur falsy (0), pas forcément False.`,

  1042: `"" or [] or {} or "yes" vaut "yes" : les trois premiers sont falsy ; or renvoie le premier truthy ("yes").

Débutant :
• "", [], {} sont tous « faux » (vides).
• "yes" est truthy → or renvoie "yes".

Intermédiaire :
• or en chaîne : "" falsy, [] falsy, {} falsy, "yes" truthy.
• "yes" est le premier (et seul) truthy.

Expert :
• Conteneurs vides : falsy.
• or parcourt jusqu'au premier truthy.
• "" or [] or {} or "yes" → "yes".

Concepts clés :
• or en chaîne, conteneurs vides falsy, premier truthy.

Distinctions clés :
• "" or [] or {} or "yes" ("yes") vs "" or [] or {} ({}).

Fonctionnement :
• "" falsy → [] falsy → {} falsy → "yes" truthy → "yes".

Exécution étape par étape :
1. "" → falsy, continuer.
2. [] → falsy, continuer.
3. {} → falsy, continuer.
4. "yes" → truthy.
5. Renvoyer "yes".

Ordre des opérations :
• De gauche à droite jusqu'au premier truthy.

Cas d'utilisation courants :
• Premier conteneur non vide : x = a or b or c or default.

Cas limites :
• [] or {} or "" → "" (dernier si tous falsy).

Considérations de performance :
• Arrêt au premier truthy.

Exemples :
• [] or [1]  # [1]
• {} or {"k":1}  # {"k":1}

Remarques :
• [], {}, "" sont tous falsy.`,

  1043: `[] and "hello" vaut [] : [] est falsy ; and court-circuite et renvoie [].

Débutant :
• La liste vide [] est « fausse ».
• and s'arrête au premier falsy → [].

Intermédiaire :
• [] falsy → and renvoie [] sans évaluer "hello".
• and renvoie la valeur falsy, pas False.

Expert :
• list.__bool__ : len != 0 ; [] a len 0 → falsy.
• and court-circuite au premier falsy.

Concepts clés :
• and, liste vide falsy, court-circuit.

Distinctions clés :
• [] and "hello" ([]) vs [1] and "hello" ("hello").

Fonctionnement :
• [] → falsy → renvoyer [].

Exécution étape par étape :
1. [] → falsy.
2. Court-circuit : renvoyer [].
3. "hello" non évalué.

Ordre des opérations :
• and court-circuite si le premier est falsy.

Cas d'utilisation courants :
• prefix and s.startswith(prefix) : si prefix vide, pas d'appel à startswith.

Cas limites :
• [] and expensive_call() — l'appel n'est pas exécuté.

Considérations de performance :
• Court-circuit évite d'évaluer "hello".

Exemples :
• {} and "x"  # {}
• "" and [1]  # ""

Remarques :
• and renvoie le premier falsy (la valeur), pas False.`,

  1044: `[1] and "hello" vaut "hello" : [1] et "hello" sont truthy ; and renvoie le dernier.

Débutant :
• [1] et "hello" sont tous deux « vrais » (non vides).
• and renvoie le dernier évalué → "hello".

Intermédiaire :
• [1] truthy → "hello" truthy → and renvoie "hello".
• and : tous truthy → dernier opérande.

Expert :
• and renvoie le premier falsy ou le dernier si tous truthy.
• [1] et "hello" truthy → "hello".

Concepts clés :
• and, dernier opérande, truthiness.

Distinctions clés :
• [1] and "hello" ("hello") vs [] and "hello" ([]).

Fonctionnement :
• [1] → truthy ; "hello" → truthy → "hello".

Exécution étape par étape :
1. [1] → truthy, continuer.
2. "hello" → truthy.
3. and renvoie "hello".

Ordre des opérations :
• Les deux sont évalués.

Cas d'utilisation courants :
• Chaîne de vérifications : a and b (dernier si tous ok).

Cas limites :
• [1] and [2] and [3] → [3].

Considérations de performance :
• Pas de court-circuit (tous truthy).

Exemples :
• "a" and "b"  # "b"
• 1 and [1,2]  # [1,2]

Remarques :
• and/or renvoient des valeurs, pas toujours True/False.`,

  1045: `not 0 vaut True : 0 est falsy ; not inverse en True.

Débutant :
• 0 est « faux ».
• not inverse : not False → True.

Intermédiaire :
• bool(0) → False ; not False → True.
• not convertit en bool puis inverse.

Expert :
• not est un opérateur unaire ; il renvoie toujours un bool.
• not 0 → not False → True.

Concepts clés :
• not, négation, 0 falsy.

Distinctions clés :
• not 0 (True) vs not 1 (False).

Fonctionnement :
• 0 → falsy → not → True.

Exécution étape par étape :
1. Évaluer 0 → falsy (bool(0)=False).
2. not False → True.
3. Renvoyer True.

Ordre des opérations :
• not a priorité unaire haute.

Cas d'utilisation courants :
• Inverser une condition : if not count: (si count vaut 0).

Cas limites :
• not 0, not 0.0, not 0j → tous True.

Considérations de performance :
• Négligeable.

Exemples :
• not None  # True
• not []  # True

Remarques :
• not est le seul opérateur logique qui renvoie toujours bool (True ou False).`,

  1046: `not "" vaut True : la chaîne vide est falsy ; not inverse en True.

Débutant :
• "" est « fausse ».
• not "" → not False → True.

Intermédiaire :
• bool("") → False.
• not False → True.

Expert :
• str.__bool__ : len != 0 ; "" a len 0 → falsy.
• not "" → True.

Concepts clés :
• not, chaîne vide falsy, négation.

Distinctions clés :
• not "" (True) vs not "x" (False).

Fonctionnement :
• "" → falsy → not → True.

Exécution étape par étape :
1. "" → falsy.
2. not False → True.
3. Renvoyer True.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• if not s: pour chaîne vide.

Cas limites :
• not " " → False (" " est truthy).

Considérations de performance :
• Négligeable.

Exemples :
• not []  # True
• not {}  # True

Remarques :
• not "" équivaut à bool("") == False.`,

  1047: `not "hello" vaut False : "hello" est truthy ; not inverse en False.

Débutant :
• "hello" est une chaîne non vide → « vraie ».
• not inverse : not True → False.

Intermédiaire :
• bool("hello") → True.
• not True → False.

Expert :
• "hello" a len > 0 → truthy.
• not truthy → False.

Concepts clés :
• not, chaîne truthy, négation.

Distinctions clés :
• not "hello" (False) vs not "" (True).

Fonctionnement :
• "hello" → truthy → not → False.

Exécution étape par étape :
1. "hello" → truthy (bool("hello")=True).
2. not True → False.
3. Renvoyer False.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Inverser une condition : if not valid_string:.

Cas limites :
• not " ", not "0", not "False" → tous False (chaînes non vides).

Considérations de performance :
• Négligeable.

Exemples :
• not [1]  # False
• not 1  # False

Remarques :
• not renvoie toujours True ou False.`,

  1048: `not [] vaut True : la liste vide est falsy ; not inverse en True.

Débutant :
• [] est « fausse ».
• not [] → not False → True.

Intermédiaire :
• bool([]) → False.
• not False → True.

Expert :
• list.__bool__ : len != 0 ; [] a len 0 → falsy.
• not [] → True.

Concepts clés :
• not, liste vide falsy, négation.

Distinctions clés :
• not [] (True) vs not [1] (False).

Fonctionnement :
• [] → falsy → not → True.

Exécution étape par étape :
1. [] → falsy.
2. not False → True.
3. Renvoyer True.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• if not items: pour liste vide.

Cas limites :
• not [], not {}, not () → tous True.

Considérations de performance :
• Négligeable.

Exemples :
• not ""  # True
• not 0  # True

Remarques :
• « if not lst » est idiomatique pour « liste vide ».`,

  1049: `not not True vaut True : double négation ; not True → False, not False → True.

Débutant :
• not True → False.
• not False → True.
• Double négation ramène à la valeur booléenne.

Intermédiaire :
• not not x convertit x en bool de façon explicite.
• not not True = bool(True) = True.

Expert :
• not not x est un idiome pour forcer un bool : True si x truthy, False si x falsy.
• not not True → not False → True.

Concepts clés :
• Double négation, conversion en bool, not.

Distinctions clés :
• not not True (True) vs not not [] (False).

Fonctionnement :
• not True → False ; not False → True.

Exécution étape par étape :
1. not True → False.
2. not False → True.
3. Renvoyer True.

Ordre des opérations :
• not s'associe à droite : not (not True).

Cas d'utilisation courants :
• Forcer un bool : bool(x) ou not not x.

Cas limites :
• not not 1 → True ; not not 0 → False.

Considérations de performance :
• Négligeable.

Exemples :
• not not 42  # True
• not not "x"  # True

Remarques :
• not not x équivaut à bool(x) pour la valeur finale.`,

  1050: `not not [] vaut False : [] est falsy ; not not [] → not True → False.

Débutant :
• [] est « fausse ».
• not [] → True ; not True → False.

Intermédiaire :
• not not [] : not [] → True, not True → False.
• Double négation d'un falsy → False.

Expert :
• not not x force la conversion en bool.
• [] falsy → not [] = True → not True = False.

Concepts clés :
• Double négation, conversion en bool, liste vide falsy.

Distinctions clés :
• not not [] (False) vs not not True (True).

Fonctionnement :
• not [] → True ; not True → False.

Exécution étape par étape :
1. [] → falsy.
2. not [] → not False → True.
3. not True → False.
4. Renvoyer False.

Ordre des opérations :
• not (not []).

Cas d'utilisation courants :
• Convertir en bool : result = not not value.

Cas limites :
• not not 0 → False ; not not "" → False.

Considérations de performance :
• Négligeable.

Exemples :
• not not {}  # False
• not not None  # False

Remarques :
• not not x équivaut à bool(x).`,
};
