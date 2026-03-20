/** Level 3 FR 1051–1100 — precedence, parens, not, chained comparisons, any/all, dict.get, lambda, bool/int. Aligned with level3_intermediate_b.ts. */
export default {
  1051: `True or False and False vaut True : and lie plus fort que or ; False and False → False, puis True or False → True.

Débutant :
• and s'évalue avant or.
• False and False → False.
• True or False → True.

Intermédiaire :
• Priorité : not > and > or.
• Groupement implicite : True or (False and False).
• Le premier True suffit pour que or renvoie True.

Expert :
• Équivalent à True or (False and False).
• Sans connaître la priorité, on pourrait évaluer (True or False) and False = False (faux).

Concepts clés :
• Priorité des opérateurs, and lie plus fort que or.

Distinctions clés :
• True or False and False (True) vs (True or False) and False (False).

Fonctionnement :
• Python groupe d'abord False and False → False, puis True or False → True.

Exécution étape par étape :
1. Identifier les opérateurs : or, and.
2. and lie plus fort → groupement : True or (False and False).
3. Intérieur : False and False → False.
4. Extérieur : True or False → True.

Ordre des opérations :
• and avant or ; évaluation de gauche à droite pour les opérateurs de même priorité.

Cas d'utilisation courants :
• Conditions composées : if a or b and c — attention à la priorité.

Cas limites :
• True or True and False → True (court-circuit sur True).

Considérations de performance :
• Court-circuit : or s'arrête dès le premier truthy.

Exemples :
• True or True and False  # True
• False or False and True  # False

Remarques :
• Utiliser des parenthèses pour clarifier l'intention.`,

  1052: `(True or False) and False vaut False : les parenthèses forcent or en premier ; True or False → True, puis True and False → False.

Débutant :
• Les parenthèses changent l'ordre.
• True or False → True.
• True and False → False.

Intermédiaire :
• Sans parenthèses : True or False and False → True.
• Avec parenthèses : (True or False) and False → False.
• Les parenthèses ont la priorité maximale.

Expert :
• Piège classique de priorité : les parenthèses rendent l'intention explicite.
• Contraste : True or False and False → True (and lie d'abord).

Concepts clés :
• Parenthèses, priorité, and/or.

Distinctions clés :
• (True or False) and False (False) vs True or False and False (True).

Fonctionnement :
• Parenthèses : True or False → True.
• Puis : True and False → False.

Exécution étape par étape :
1. Parenthèses : True or False → True.
2. Puis : True and False → False.
3. Résultat : False.

Ordre des opérations :
• Parenthèses d'abord, puis and, puis or.

Cas d'utilisation courants :
• Forcer l'ordre d'évaluation dans des conditions complexes.

Cas limites :
• (False or True) and False → False.

Considérations de performance :
• Négligeable.

Exemples :
• (True or True) and False  # False
• (False or False) and True  # False

Remarques :
• Toujours parenthéser pour éviter les ambiguïtés.`,

  1053: `not True or True vaut True : not lie plus fort que or ; (not True) or True = False or True = True.

Débutant :
• not True → False.
• False or True → True.

Intermédiaire :
• Priorité : not > and > or.
• not True évalué en premier.
• Pas la même chose que not (True or True) qui donnerait False.

Expert :
• Groupement : (not True) or True.
• Erreur courante : lire not (True or True) → False ; la priorité impose (not True) or True → True.

Concepts clés :
• Priorité de not, court-circuit de or.

Distinctions clés :
• not True or True (True) vs not (True or True) (False).

Fonctionnement :
• not True → False ; False or True → True.

Exécution étape par étape :
1. not lie le plus fort → (not True) or True.
2. not True → False.
3. False or True → True.
4. Résultat : True.

Ordre des opérations :
• not unaire d'abord, puis or.

Cas d'utilisation courants :
• Conditions avec négation : if not found or fallback.

Cas limites :
• not False or False → True (not False = True, court-circuit).

Considérations de performance :
• Court-circuit : or s'arrête au premier truthy.

Exemples :
• not 0 or 1  # True
• not [] or [1]  # [1]

Remarques :
• not a la priorité la plus haute parmi les opérateurs logiques.`,

  1054: `not (True or True) vaut False : les parenthèses forcent or en premier ; True or True → True, puis not True → False.

Débutant :
• Parenthèses : True or True → True.
• not True → False.

Intermédiaire :
• not (True or True) : les parenthèses forcent or d'abord.
• Sans parenthèses, not ne s'appliquerait qu'au premier True.
• Compare : not True or True → (not True) or True → True.

Expert :
• Les parenthèses changent ce à quoi not s'applique.
• Essentiel pour la clarté dans les expressions booléennes composées.

Concepts clés :
• Parenthèses, portée de not, or.

Distinctions clés :
• not (True or True) (False) vs not True or True (True).

Fonctionnement :
• Intérieur des parenthèses : True or True → True.
• Appliquer not : not True → False.

Exécution étape par étape :
1. Intérieur : True or True → True.
2. Appliquer not : not True → False.
3. Résultat : False.

Ordre des opérations :
• Parenthèses d'abord, puis not.

Cas d'utilisation courants :
• Nier une disjonction : if not (a or b).

Cas limites :
• not (False or False) → True.

Considérations de performance :
• Négligeable.

Exemples :
• not (1 < 2 or 3 > 4)  # False
• not ("" or [])  # True

Remarques :
• De Morgan : not (a or b) ≡ (not a) and (not b).`,

  1055: `True and not False vaut True : not s'évalue en premier ; not False = True, puis True and True = True.

Débutant :
• not False → True.
• True and True → True.

Intermédiaire :
• Priorité : not > and > or.
• not False évalué avant and.
• Pattern courant : « A et le contraire de B ».

Expert :
• not False → True ; True and True → True.
• Exprime « A et B n'est pas le cas » ou « A et l'inverse de B ».

Concepts clés :
• Priorité de not, and.

Distinctions clés :
• True and not False (True) vs True and False (False).

Fonctionnement :
• not False → True ; True and True → True.

Exécution étape par étape :
1. not False → True.
2. True and True → True.
3. Résultat : True.

Ordre des opérations :
• not unaire d'abord, puis and.

Cas d'utilisation courants :
• Conditions : if valid and not expired.

Cas limites :
• False and not True → False (court-circuit sur False).

Considérations de performance :
• Court-circuit : and s'arrête au premier falsy.

Exemples :
• 1 and not 0  # True
• "" and not False  # "" (court-circuit)

Remarques :
• not est le seul opérateur logique qui renvoie toujours un bool.`,

  1056: `False or not False and True vaut True : not > and > or ; not False → True, True and True → True, False or True → True.

Débutant :
• not False → True.
• True and True → True.
• False or True → True.

Intermédiaire :
• Les trois opérateurs : not, and, or.
• Priorité : not > and > or.
• Entièrement parenthésé : False or ((not False) and True).

Expert :
• not False → True ; True and True → True ; False or True → True.
• Exemple typique de l'importance de la priorité pour éviter les bugs.

Concepts clés :
• Priorité complète not > and > or, court-circuit.

Distinctions clés :
• False or not False and True (True) vs (False or not False) and True (True ici aussi).

Fonctionnement :
• not False → True ; True and True → True ; False or True → True.

Exécution étape par étape :
1. not False → True.
2. True and True → True.
3. False or True → True.
4. Résultat : True.

Ordre des opérations :
• not, puis and, puis or.

Cas d'utilisation courants :
• Conditions logiques complexes avec garde et fallback.

Cas limites :
• False or not True and False → False.

Considérations de performance :
• Court-circuit possible sur or.

Exemples :
• 0 or not 0 and 1  # True
• [] or not [] and [1]  # [1]

Remarques :
• Parenthéser pour la lisibilité.`,

  1057: `1 < 2 and 3 < 4 vaut True : les deux comparaisons sont True ; True and True = True.

Débutant :
• 1 < 2 → True.
• 3 < 4 → True.
• True and True → True.

Intermédiaire :
• Les comparaisons ont priorité plus haute que and/or.
• Chaque comparaison s'évalue d'abord.
• Pattern courant : if age >= 18 and has_license.

Expert :
• 1 < 2 → True, 3 < 4 → True ; True and True → True.
• Les comparaisons lient toujours plus fort que and/or/not.

Concepts clés :
• Priorité des comparaisons, and.

Distinctions clés :
• 1 < 2 and 3 < 4 (True) vs 1 < 2 and 3 > 4 (False).

Fonctionnement :
• 1 < 2 → True ; 3 < 4 → True ; True and True → True.

Exécution étape par étape :
1. 1 < 2 → True.
2. 3 < 4 → True.
3. True and True → True.

Ordre des opérations :
• Comparaisons d'abord, puis and.

Cas d'utilisation courants :
• Vérifier plusieurs conditions : if 0 <= x < 100.

Cas limites :
• 1 < 2 and 4 < 3 → False.

Considérations de performance :
• Court-circuit : and s'arrête au premier False.

Exemples :
• 5 < 10 and 10 < 20  # True
• 1 == 1 and 2 == 2  # True

Remarques :
• Les comparaisons chaînées (1 < 2 < 3) sont plus pythoniques.`,

  1058: `1 < 2 or 3 > 4 vaut True : 1 < 2 est True, or court-circuite et renvoie True sans évaluer 3 > 4.

Débutant :
• 1 < 2 → True.
• or renvoie True dès que la gauche est True.
• 3 > 4 n'est jamais évalué.

Intermédiaire :
• or court-circuite : si l'opérande gauche est truthy, renvoie immédiatement.
• 3 > 4 n'est jamais exécuté.
• Court-circuit améliore les perfs et permet des patterns sûrs.

Expert :
• 1 < 2 → True ; or voit True à gauche → court-circuit, renvoie True.
• Utile pour les fallbacks : result = expensive_call() or default_value.

Concepts clés :
• Court-circuit de or, priorité des comparaisons.

Distinctions clés :
• 1 < 2 or 3 > 4 (True, court-circuit) vs 3 > 4 or 1 < 2 (True aussi, mais 3>4 évalué).

Fonctionnement :
• 1 < 2 → True ; True or ??? → True (côté droit ignoré).

Exécution étape par étape :
1. 1 < 2 → True.
2. True or ??? → True (court-circuit).
3. Résultat : True.

Ordre des opérations :
• Comparaisons d'abord, puis or (court-circuit si gauche truthy).

Cas d'utilisation courants :
• Fallback : value = d.get("k") or default.

Cas limites :
• 3 > 4 or 1 < 2 → True (côté droit évalué).

Considérations de performance :
• Court-circuit évite d'évaluer le côté droit si inutile.

Exemples :
• 0 or 5  # 5
• "" or "hello"  # "hello"

Remarques :
• or renvoie la valeur, pas forcément un bool.`,

  1059: `not 1 < 2 vaut False : les comparaisons lient plus fort que not ; not (1 < 2) = not True = False.

Débutant :
• 1 < 2 → True.
• not True → False.

Intermédiaire :
• Priorité : comparaisons > not > and > or.
• Python lit not (1 < 2), pas (not 1) < 2.
• Si not liait plus fort : (not 1) < 2 → False < 2 → True (faux !).

Expert :
• 1 < 2 → True (comparaison d'abord) ; not True → False.
• not x < y signifie not (x < y), pas (not x) < y.

Concepts clés :
• Priorité comparaisons vs not.

Distinctions clés :
• not 1 < 2 (False) vs (not 1) < 2 (True, car False < 2).

Fonctionnement :
• 1 < 2 → True ; not True → False.

Exécution étape par étape :
1. 1 < 2 → True (comparaison d'abord).
2. not True → False.
3. Résultat : False.

Ordre des opérations :
• Comparaisons avant not.

Cas d'utilisation courants :
• Inverser une condition : if not x < limit.

Cas limites :
• not 5 > 10 → True.

Considérations de performance :
• Négligeable.

Exemples :
• not 0 == 0  # False
• not "a" < "b"  # False

Remarques :
• not x < y équivaut à x >= y (pour les ordres totaux).`,

  1060: `1 < 2 < 3 < 4 vaut True : Python chaîne les comparaisons ; 1<2 et 2<3 et 3<4, toutes True.

Débutant :
• 1 < 2 → True, 2 < 3 → True, 3 < 4 → True.
• Toutes True → True.

Intermédiaire :
• 1 < 2 < 3 < 4 équivaut à (1 < 2) and (2 < 3) and (3 < 4).
• Les valeurs intermédiaires ne sont évaluées qu'une fois (contrairement à un and explicite).
• Pythonic : 0 <= x < 100 plus lisible que x >= 0 and x < 100.

Expert :
• Chaque paire reliée par and ; toutes True → True.
• Les comparaisons chaînées sont une fonctionnalité pythonique majeure.

Concepts clés :
• Comparaisons chaînées, équivalence avec and.

Distinctions clés :
• 1 < 2 < 3 < 4 (True) vs 1 < 2 < 3 > 4 (False).

Fonctionnement :
• 1 < 2 → True ; 2 < 3 → True ; 3 < 4 → True ; True and True and True → True.

Exécution étape par étape :
1. 1 < 2 → True.
2. 2 < 3 → True.
3. 3 < 4 → True.
4. Toutes True → True.

Ordre des opérations :
• Chaînage de gauche à droite, chaque paire avec and implicite.

Cas d'utilisation courants :
• Vérifier un intervalle : if 0 <= x <= 10.

Cas limites :
• 1 < 2 < 1 → False (2 < 1 faux).

Considérations de performance :
• Les sous-expressions peuvent être évaluées une seule fois.

Exemples :
• 0 < 1 < 2  # True
• 5 <= 5 <= 10  # True

Remarques :
• On peut mélanger <, >, <=, >=, ==, != dans une chaîne.`,

  1061: `1 < 2 > 0 vaut True : chaîné ; 1 < 2 et 2 > 0, les deux True.

Débutant :
• 1 < 2 → True.
• 2 > 0 → True.
• True and True → True.

Intermédiaire :
• 1 < 2 > 0 signifie (1 < 2) and (2 > 0).
• On peut chaîner <, >, <=, >=, ==, !=, is, in.
• Tous s'expandent en and par paires.

Expert :
• Chaînage mixte < et > ; même règle : and entre chaque paire.
• 1 < 2 → True ; 2 > 0 → True ; True and True → True.

Concepts clés :
• Comparaisons chaînées mixtes, and implicite.

Distinctions clés :
• 1 < 2 > 0 (True) vs 1 < 2 > 3 (False).

Fonctionnement :
• 1 < 2 → True ; 2 > 0 → True ; True and True → True.

Exécution étape par étape :
1. 1 < 2 → True.
2. 2 > 0 → True (2 plus grand que 0).
3. Résultat : True.

Ordre des opérations :
• Chaînage de gauche à droite.

Cas d'utilisation courants :
• Vérifier qu'une valeur est dans un intervalle : low < x < high.

Cas limites :
• 1 < 2 > -1 → True.

Considérations de performance :
• Négligeable.

Exemples :
• 0 < 1 > -1  # True
• 5 > 3 > 1  # True

Remarques :
• Les nombres négatifs fonctionnent normalement dans les chaînes.`,

  1062: `1 < 2 > 3 vaut False : chaîné ; 1 < 2 est True, mais 2 > 3 est False ; True and False = False.

Débutant :
• 1 < 2 → True.
• 2 > 3 → False (2 n'est pas plus grand que 3).
• True and False → False.

Intermédiaire :
• Dans les comparaisons chaînées, TOUTES les paires doivent être True.
• Même si la première est True, la chaîne échoue si une autre est False.
• Court-circuit : si la première était False, la seconde ne serait pas évaluée.

Expert :
• 1 < 2 > 3 signifie (1 < 2) and (2 > 3).
• 1 < 2 → True ; 2 > 3 → False ; True and False → False.

Concepts clés :
• Chaînage, toutes les paires doivent être True.

Distinctions clés :
• 1 < 2 > 3 (False) vs 1 < 2 > 0 (True).

Fonctionnement :
• 1 < 2 → True ; 2 > 3 → False ; True and False → False.

Exécution étape par étape :
1. 1 < 2 → True.
2. 2 > 3 → False.
3. True and False → False.

Ordre des opérations :
• Chaînage, court-circuit sur le premier False.

Cas d'utilisation courants :
• Validation d'intervalles cohérents.

Cas limites :
• 3 < 2 > 1 → False (3 < 2 faux, court-circuit).

Considérations de performance :
• Court-circuit sur and.

Exemples :
• 5 < 4 > 3  # False
• 1 < 2 > 2  # False

Remarques :
• La chaîne échoue dès qu'une paire est False.`,

  1063: `"a" < "b" < "c" vaut True : comparaison lexicographique ; 'a' < 'b' et 'b' < 'c', les deux True.

Débutant :
• "a" < "b" → True.
• "b" < "c" → True.
• True and True → True.

Intermédiaire :
• "a" < "b" < "c" signifie ("a" < "b") and ("b" < "c").
• Les chaînes sont comparées par points de code Unicode.
• ord("a")=97, ord("b")=98, ord("c")=99.

Expert :
• "a" < "b" → True (97 < 98) ; "b" < "c" → True (98 < 99).
• Comparaison sensible à la casse : "A" < "a" est True (majuscules ont des codes plus bas).

Concepts clés :
• Comparaison lexicographique, ord(), chaînage sur str.

Distinctions clés :
• "a" < "b" < "c" (True) vs "a" < "z" < "b" (False).

Fonctionnement :
• "a" < "b" → True ; "b" < "c" → True ; True and True → True.

Exécution étape par étape :
1. "a" < "b" → True (97 < 98).
2. "b" < "c" → True (98 < 99).
3. True and True → True.

Ordre des opérations :
• Chaînage standard.

Cas d'utilisation courants :
• Vérifier l'ordre alphabétique : if "a" <= s <= "z".

Cas limites :
• "A" < "a" → True (casse compte).

Considérations de performance :
• O(1) par comparaison de caractères.

Exemples :
• "apple" < "banana"  # True
• "a" < "aa"  # True

Remarques :
• La comparaison de chaînes utilise l'ordre Unicode.`,

  1064: `0 < 1 > -1 vaut True : chaîné ; 0 < 1 et 1 > -1, les deux True.

Débutant :
• 0 < 1 → True.
• 1 > -1 → True (1 plus grand que -1).
• True and True → True.

Intermédiaire :
• Chaîne mixte < et > avec un nombre négatif.
• 0 < 1 > -1 signifie (0 < 1) and (1 > -1).
• Les négatifs fonctionnent normalement.

Expert :
• 0 < 1 → True ; 1 > -1 → True.
• Le chaînage s'étend aux négatifs comme aux positifs.

Concepts clés :
• Chaînage, nombres négatifs.

Distinctions clés :
• 0 < 1 > -1 (True) vs 0 < 1 > 2 (False).

Fonctionnement :
• 0 < 1 → True ; 1 > -1 → True ; True and True → True.

Exécution étape par étape :
1. 0 < 1 → True.
2. 1 > -1 → True.
3. Résultat : True.

Ordre des opérations :
• Chaînage standard.

Cas d'utilisation courants :
• Vérifier qu'une valeur est dans une plage incluant les négatifs.

Cas limites :
• -5 < 0 > -10 → False (-5 < 0 True, 0 > -10 True → True en fait).

Considérations de performance :
• Négligeable.

Exemples :
• -1 < 0 < 1  # True
• 0 < 1 > -2  # True

Remarques :
• Les négatifs sont comparés correctement.`,

  1065: `1 == 1 < 2 vaut True : Python chaîne == avec < ; 1 == 1 et 1 < 2, les deux True.

Débutant :
• 1 == 1 → True.
• 1 < 2 → True.
• True and True → True.

Intermédiaire :
• 1 == 1 < 2 signifie (1 == 1) and (1 < 2).
• Python chaîne == avec < comme tout autre opérateur de comparaison.
• Important : ce n'est PAS (1 == 1) < 2 qui serait True < 2 (True car 1 < 2).

Expert :
• 1 == 1 → True ; 1 < 2 → True.
• L'interprétation chaînée donne le même résultat ici mais pour des raisons différentes de (1 == 1) < 2.

Concepts clés :
• Chaînage avec ==, priorité des comparaisons.

Distinctions clés :
• 1 == 1 < 2 (True, chaîné) vs (1 == 1) < 2 (True aussi car True==1, 1<2).

Fonctionnement :
• 1 == 1 → True ; 1 < 2 → True ; True and True → True.

Exécution étape par étape :
1. 1 == 1 → True.
2. 1 < 2 → True.
3. Résultat : True.

Ordre des opérations :
• Chaînage avec ==.

Cas d'utilisation courants :
• Vérifier égalité et ordre : x == 5 < 10.

Cas limites :
• 1 == 2 < 3 → False (1 == 2 faux).

Considérations de performance :
• Négligeable.

Exemples :
• 0 == 0 < 1  # True
• 5 == 5 <= 10  # True

Remarques :
• Le chaînage avec == peut surprendre ; bien lire la doc.`,

  1066: `x = 5 ; 1 <= x <= 10 vaut True : vérification d'intervalle chaînée ; 1 <= 5 et 5 <= 10, les deux True.

Débutant :
• 1 <= 5 → True.
• 5 <= 10 → True.
• True and True → True.

Intermédiaire :
• 1 <= x <= 10 signifie (1 <= x) and (x <= 10).
• Avec x = 5 : 1 <= 5 et 5 <= 10.
• Plus lisible que x >= 1 and x <= 10.

Expert :
• Une des fonctionnalités les plus pythoniques : vérifier un intervalle en une expression.
• Équivalent à « x est-il entre 1 et 10 inclus ? ».

Concepts clés :
• Vérification d'intervalle, comparaisons chaînées.

Distinctions clés :
• 1 <= 5 <= 10 (True) vs 1 <= 15 <= 10 (False).

Fonctionnement :
• 1 <= 5 → True ; 5 <= 10 → True ; True and True → True.

Exécution étape par étape :
1. 1 <= 5 → True.
2. 5 <= 10 → True.
3. Résultat : True.

Ordre des opérations :
• Chaînage standard.

Cas d'utilisation courants :
• Validation : if 0 <= index < len(lst).

Cas limites :
• 1 <= 1 <= 10 → True (bornes incluses).

Considérations de performance :
• Court-circuit si la première comparaison est False.

Exemples :
• 0 <= 5 <= 10  # True
• 1 <= 1 <= 1  # True

Remarques :
• 1 <= x <= 10 est idiomatique en Python.`,

  1067: `x = 15 ; 1 <= x <= 10 vaut False : 15 hors de [1, 10] ; 1 <= 15 True, mais 15 <= 10 False.

Débutant :
• 1 <= 15 → True.
• 15 <= 10 → False (15 n'est pas au plus 10).
• True and False → False.

Intermédiaire :
• Quand la valeur sort de l'intervalle, au moins une comparaison échoue.
• La chaîne court-circuite sur False : si la première était False, la seconde ne serait pas évaluée.

Expert :
• 1 <= 15 → True ; 15 <= 10 → False ; True and False → False.
• Court-circuit : si 1 <= x était False, x <= 10 ne serait pas évalué.

Concepts clés :
• Intervalle, court-circuit sur and.

Distinctions clés :
• 1 <= 15 <= 10 (False) vs 1 <= 5 <= 10 (True).

Fonctionnement :
• 1 <= 15 → True ; 15 <= 10 → False ; True and False → False.

Exécution étape par étape :
1. 1 <= 15 → True (15 au moins 1).
2. 15 <= 10 → False (15 pas au plus 10).
3. Résultat : False.

Ordre des opérations :
• Chaînage, court-circuit sur premier False.

Cas d'utilisation courants :
• Validation de plage : if not (low <= x <= high).

Cas limites :
• 1 <= 0 <= 10 → False (0 < 1).

Considérations de performance :
• Court-circuit évite la seconde comparaison si la première échoue.

Exemples :
• 1 <= 20 <= 10  # False
• 0 <= -1 <= 5  # False

Remarques :
• Une seule comparaison False suffit à faire échouer la chaîne.`,

  1068: `x = "hello" ; x and len(x) > 3 vaut True : x truthy, donc len("hello") > 3 → 5 > 3 → True.

Débutant :
• "hello" est truthy (chaîne non vide).
• len("hello") = 5, 5 > 3 → True.
• and renvoie la dernière valeur évaluée : True.

Intermédiaire :
• Pattern « x and opération_sur_x » : garde idiomatique.
• N'exécuter l'opération que si x est truthy.
• Évite les erreurs quand x pourrait être None ou vide.

Expert :
• x → "hello" (truthy) ; and évalue le côté droit.
• len("hello") = 5 ; 5 > 3 → True.
• and renvoie True (dernière valeur évaluée).

Concepts clés :
• Garde avec and, truthiness, court-circuit.

Distinctions clés :
• x and len(x) > 3 avec x="hello" (True) vs x="" ("").

Fonctionnement :
• x → "hello" (truthy) ; len("hello") → 5 ; 5 > 3 → True.

Exécution étape par étape :
1. x → "hello" (truthy, continuer à droite).
2. len("hello") → 5.
3. 5 > 3 → True.
4. Résultat : True.

Ordre des opérations :
• and : gauche d'abord ; si truthy, évaluer droite.

Cas d'utilisation courants :
• if s and len(s) > 0 (redondant mais sûr).

Cas limites :
• x and len(x) > 10 avec x="hi" → False.

Considérations de performance :
• Court-circuit si x falsy.

Exemples :
• "abc" and len("abc") > 2  # True
• [1] and len([1]) > 0  # True

Remarques :
• Pattern défensif contre None et chaînes vides.`,

  1069: `x = "" ; x and len(x) > 3 vaut "" : x falsy, and court-circuite et renvoie "" sans évaluer len(x).

Débutant :
• "" est falsy.
• and renvoie "" immédiatement.
• len(x) > 3 n'est jamais évalué.

Intermédiaire :
• Quand l'opérande gauche de and est falsy, Python court-circuite et le renvoie tel quel.
• La valeur de retour est "" (l'objet falsy), pas False.
• and/or renvoient des valeurs, pas toujours des bool.

Expert :
• x → "" (falsy) ; court-circuit : renvoyer "".
• len(x) > 3 n'est jamais exécuté.
• and renvoie l'objet réel, pas un bool.

Concepts clés :
• Court-circuit de and, renvoi de valeur (pas bool).

Distinctions clés :
• "" and len("")>3 ("") vs "hello" and len("hello")>3 (True).

Fonctionnement :
• x → "" (falsy) ; renvoyer "" ; len(x)>3 ignoré.

Exécution étape par étape :
1. x → "" (falsy, court-circuit).
2. Renvoyer "".
3. len(x) > 3 ignoré.

Ordre des opérations :
• and : si gauche falsy, renvoyer gauche sans évaluer droite.

Cas d'utilisation courants :
• Garde : x and x.method() évite AttributeError si x vide.

Cas limites :
• [] and len([])  # [] (court-circuit).

Considérations de performance :
• Court-circuit évite len() sur chaîne vide.

Exemples :
• 0 and 1/0  # 0 (pas d'erreur)
• None and x.foo  # None

Remarques :
• and/or sont des opérateurs « à valeur », pas purement logiques.`,

  1070: `x = None ; x and x.strip() vaut None : x falsy, and court-circuite et renvoie None ; x.strip() jamais appelé.

Débutant :
• None est falsy.
• and renvoie None immédiatement.
• x.strip() n'est jamais appelé → pas d'AttributeError.

Intermédiaire :
• Pattern « garde » : utiliser and pour éviter AttributeError sur None.
• Sans garde : None.strip() → AttributeError.
• Similaire à x?.method() dans d'autres langages (optional chaining).

Expert :
• x → None (falsy) ; and court-circuite : renvoyer None.
• x.strip() jamais exécuté — pas d'erreur.
• Python 3.10+ n'a pas ?., ce pattern and reste standard.

Concepts clés :
• Garde avec and, court-circuit, éviter AttributeError.

Distinctions clés :
• x and x.strip() avec x=None (None) vs x=" hi " (" hi ").

Fonctionnement :
• x → None (falsy) ; renvoyer None ; x.strip() ignoré.

Exécution étape par étape :
1. x → None (falsy, court-circuit).
2. Renvoyer None.
3. x.strip() ignoré — pas d'erreur.

Ordre des opérations :
• and : court-circuit sur falsy.

Cas d'utilisation courants :
• s and s.strip() pour éviter erreur sur None.

Cas limites :
• "" and "".strip()  # "" ("" falsy).

Considérations de performance :
• Court-circuit évite l'appel de méthode.

Exemples :
• None and None.upper  # None
• [] and [].append(1)  # []

Remarques :
• Pattern défensif très courant.`,

  1071: `d = {"a": 1} ; d.get("b") or "missing" vaut "missing" : d.get("b") renvoie None (falsy), donc or renvoie "missing".

Débutant :
• d.get("b") → None (clé "b" absente).
• None est falsy.
• None or "missing" → "missing".

Intermédiaire :
• Pattern value_or_none or default : fallback courant.
• None or "missing" → "missing" (or renvoie la droite quand la gauche est falsy).
• Attention : déclenche aussi pour 0, False, "", [] — toute valeur falsy (voir question 1073).

Expert :
• d.get("b") → None ; None or "missing" → "missing".
• Fonctionne bien quand None/vide doit déclencher le fallback.

Concepts clés :
• dict.get(), or comme fallback, truthiness.

Distinctions clés :
• d.get("b") or "missing" ("missing") vs d.get("a") or "missing" (1).

Fonctionnement :
• d.get("b") → None ; None or "missing" → "missing".

Exécution étape par étape :
1. d.get("b") → None.
2. None or "missing" → "missing".
3. Résultat : "missing".

Ordre des opérations :
• get d'abord, puis or.

Cas d'utilisation courants :
• Valeur par défaut : name = config.get("name") or "Anonymous".

Cas limites :
• d.get("b") or 0 → 0 (0 falsy, or renvoie 0 — bizarre).

Considérations de performance :
• Court-circuit : or ne calcule pas la droite si gauche truthy.

Exemples :
• {}.get("x") or "default"  # "default"
• {"a":0}.get("a") or "missing"  # "missing" (piège !)

Remarques :
• Pour les valeurs potentiellement falsy (0, ""), utiliser .get(k, default).`,

  1072: `d = {"a": 1} ; d.get("a") or "missing" vaut 1 : d.get("a") renvoie 1 (truthy), or court-circuite et renvoie 1.

Débutant :
• d.get("a") → 1 (clé existe).
• 1 est truthy.
• 1 or "missing" → 1 (court-circuit).

Intermédiaire :
• Quand dict.get() trouve la clé, il renvoie la valeur.
• Si la valeur est truthy, or court-circuite.
• Le pattern or fallback fonctionne bien quand les valeurs attendues sont toujours truthy.

Expert :
• d.get("a") → 1 ; 1 or "missing" → 1 (truthy, court-circuit).
• "missing" n'est jamais évalué.

Concepts clés :
• dict.get(), court-circuit de or.

Distinctions clés :
• d.get("a") or "missing" (1) vs d.get("b") or "missing" ("missing").

Fonctionnement :
• d.get("a") → 1 ; 1 or "missing" → 1 (court-circuit).

Exécution étape par étape :
1. d.get("a") → 1.
2. 1 or "missing" → 1 (truthy, court-circuit).
3. Résultat : 1.

Ordre des opérations :
• get, puis or (court-circuit si gauche truthy).

Cas d'utilisation courants :
• Fallback pour clés absentes quand les valeurs sont strings, nombres positifs, etc.

Cas limites :
• d.get("a") avec valeur 0 → or renvoie "missing" (bug potentiel).

Considérations de performance :
• Court-circuit évite d'évaluer "missing".

Exemples :
• {"x": 42}.get("x") or 0  # 42
• {"name": "Alice"}.get("name") or "Unknown"  # "Alice"

Remarques :
• Ne pas utiliser or si la valeur stockée peut être 0, False ou "".`,

  1073: `d = {"a": 0} ; d.get("a") or "missing" vaut "missing" : d.get("a") renvoie 0, qui est falsy ! or renvoie "missing" — bug classique.

Débutant :
• d.get("a") → 0 (clé existe, valeur 0).
• 0 est falsy en Python.
• 0 or "missing" → "missing".

Intermédiaire :
• Bug classique : utiliser or pour des défauts quand la valeur peut être 0, False ou "".
• La clé EXISTE mais on obtient "missing" — bug silencieux.
• Solution : d.get("a", "missing") qui n'utilise le défaut que si la clé est ABSENTE.

Expert :
• d.get("a") → 0 ; 0 falsy → or évalue la droite.
• 0 or "missing" → "missing".
• Résultat incorrect si on voulait 0.

Concepts clés :
• Piège 0-is-falsy, or vs .get(key, default).

Distinctions clés :
• d.get("a") or "missing" ("missing", bug) vs d.get("a", "missing") (0, correct).

Fonctionnement :
• d.get("a") → 0 ; 0 falsy ; 0 or "missing" → "missing".

Exécution étape par étape :
1. d.get("a") → 0.
2. 0 falsy → or évalue la droite.
3. 0 or "missing" → "missing".
4. Résultat : "missing" (FAUX si on voulait 0).

Ordre des opérations :
• get, puis or.

Cas d'utilisation courants :
• À éviter pour les compteurs, flags, valeurs numériques pouvant être 0.

Cas limites :
• d.get("a") avec "" ou False → même piège.

Considérations de performance :
• Négligeable.

Exemples :
• {"count": 0}.get("count") or 1  # 1 (bug !)
• {"flag": False}.get("flag") or True  # True (bug !)

Remarques :
• Utiliser .get(clé, défaut) pour les défauts corrects.`,

  1074: `d = {"a": 0} ; d.get("a", "missing") vaut 0 : .get avec défaut ne l'utilise que si la clé est absente ; "a" existe, donc 0.

Débutant :
• d.get("a", "missing") : clé "a" existe avec valeur 0.
• Comme la clé existe, on renvoie 0.
• "missing" est ignoré.

Intermédiaire :
• dict.get(key, default) renvoie default UNIQUEMENT quand la clé est absente.
• La truthiness n'a pas d'importance.
• C'est la BONNE façon de gérer les défauts.

Expert :
• Vérifier si "a" dans d → Oui.
• Renvoyer d["a"] → 0.
• "missing" ignoré car la clé a été trouvée.
• Comparer : d.get("a") or "missing" → "missing" (BUG) ; d.get("a", "missing") → 0 (CORRECT).

Concepts clés :
• .get(key, default), défaut uniquement si clé absente.

Distinctions clés :
• d.get("a", "missing") (0) vs d.get("a") or "missing" ("missing").

Fonctionnement :
• "a" dans d → Oui ; renvoyer d["a"] → 0.

Exécution étape par étape :
1. Vérifier si "a" dans d → Oui.
2. Renvoyer d["a"] → 0.
3. "missing" ignoré.

Ordre des opérations :
• Lookup de clé, puis renvoi valeur ou default.

Cas d'utilisation courants :
• Valeur par défaut correcte : count = d.get("count", 0).

Cas limites :
• d.get("b", "missing") → "missing" (clé absente).

Considérations de performance :
• O(1) pour le lookup.

Exemples :
• {"x": 0}.get("x", 10)  # 0
• {}.get("y", "n/a")  # "n/a"

Remarques :
• Règle : utiliser .get(clé, défaut), pas .get(clé) or défaut.`,

  1075: `any(c.isdigit() for c in "abc123") vaut True : au moins un caractère ('1','2' ou '3') est un chiffre ; any court-circuite.

Débutant :
• Parcourt chaque caractère de "abc123".
• '1'.isdigit() → True.
• any renvoie True dès le premier True.

Intermédiaire :
• any() renvoie True si au moins un élément de l'itérable est truthy.
• Avec une expression génératrice, vérifie chaque caractère.
• c.isdigit() : 'a'→False, 'b'→False, 'c'→False, '1'→True (arrêt).
• any() court-circuite sur le premier True.

Expert :
• 'a'.isdigit()→False, 'b'→False, 'c'→False, '1'→True (court-circuit).
• '2' et '3' ne sont jamais vérifiés.
• any() est efficace : s'arrête dès le premier truthy, comme or.

Concepts clés :
• any(), expression génératrice, isdigit(), court-circuit.

Distinctions clés :
• any(c.isdigit() for c in "abc123") (True) vs all(c.isdigit() for c in "abc123") (False).

Fonctionnement :
• Parcours ; '1'.isdigit() → True ; court-circuit → True.

Exécution étape par étape :
1. 'a'.isdigit() → False (continuer).
2. 'b'.isdigit() → False (continuer).
3. 'c'.isdigit() → False (continuer).
4. '1'.isdigit() → True (court-circuit, renvoyer True).
5. '2' et '3' non vérifiés.

Ordre des opérations :
• Parcours de gauche à droite, arrêt au premier truthy.

Cas d'utilisation courants :
• Vérifier si une chaîne contient un chiffre : any(c.isdigit() for c in s).

Cas limites :
• any(c.isdigit() for c in "abc") → False.

Considérations de performance :
• Court-circuit évite de parcourir tout l'itérable.

Exemples :
• any(c.isupper() for c in "hello")  # False
• any(c in "aeiou" for c in "xyz")  # False

Remarques :
• any([]) → False.`,

  1076: `all(c.isalpha() for c in "abcdef") vaut True : chaque caractère de "abcdef" est alphabétique.

Débutant :
• Parcourt "abcdef".
• 'a'.isalpha()→True, 'b'→True, ... 'f'→True.
• Tous True → all() renvoie True.

Intermédiaire :
• all() renvoie True si chaque élément est truthy.
• Si un élément est falsy, renvoie False.
• all() court-circuite sur le premier False.

Expert :
• 'a'.isalpha()→True, ... 'f'.isalpha()→True.
• Itérable épuisé sans falsy → True.
• all() doit tout vérifier pour renvoyer True (pas de court-circuit possible ici).

Concepts clés :
• all(), quantification universelle, isalpha().

Distinctions clés :
• all(c.isalpha() for c in "abcdef") (True) vs all(c.isalpha() for c in "abc123") (False).

Fonctionnement :
• Parcours complet ; tous truthy → True.

Exécution étape par étape :
1. 'a'.isalpha() → True (continuer).
2. 'b'.isalpha() → True (continuer).
3. ... tous True.
4. 'f'.isalpha() → True (fin d'itérable).
5. Résultat : True.

Ordre des opérations :
• Tous les éléments sont évalués.

Cas d'utilisation courants :
• Validation : all(c.isalnum() for c in username).

Cas limites :
• all([]) → True (vérité vide).

Considérations de performance :
• O(n) pour renvoyer True.

Exemples :
• all(x > 0 for x in [1,2,3])  # True
• all(len(w) > 0 for w in ["a","b"])  # True

Remarques :
• all([]) renvoie True par convention.`,

  1077: `all(c.isalpha() for c in "abc123") vaut False : all exige que tous soient truthy ; '1'.isalpha()→False, court-circuit.

Débutant :
• Parcourt "abc123".
• 'a','b','c' → True.
• '1'.isalpha() → False → all renvoie False.

Intermédiaire :
• all() exige que chaque élément soit truthy.
• Dès qu'un falsy apparaît, court-circuite et renvoie False.
• '2' et '3' ne sont jamais vérifiés.

Expert :
• 'a'.isalpha()→True, 'b'→True, 'c'→True.
• '1'.isalpha()→False → all() court-circuite, renvoie False.
• any() = au moins un True ; all() = tous True.

Concepts clés :
• all(), court-circuit sur falsy, isalpha().

Distinctions clés :
• all(c.isalpha() for c in "abc123") (False) vs any(c.isalpha() for c in "abc123") (True).

Fonctionnement :
• 'a','b','c' → True ; '1' → False ; court-circuit → False.

Exécution étape par étape :
1. 'a'.isalpha() → True (continuer).
2. 'b'.isalpha() → True (continuer).
3. 'c'.isalpha() → True (continuer).
4. '1'.isalpha() → False (court-circuit, renvoyer False).
5. '2' et '3' non vérifiés.

Ordre des opérations :
• Parcours de gauche à droite, arrêt au premier falsy.

Cas d'utilisation courants :
• Validation stricte : all(cond(x) for x in items).

Cas limites :
• all([True, 0, True]) → False.

Considérations de performance :
• Court-circuit évite de parcourir le reste.

Exemples :
• all(x % 2 == 0 for x in [2,4,5])  # False
• all(s for s in ["a","","c"])  # False

Remarques :
• Un seul falsy suffit à faire échouer all().`,

  1078: `sum(1 for x in [1,2,3,4,5] if x > 3) vaut 2 : le générateur produit 1 pour chaque x > 3 (x=4 et x=5), sum = 2.

Débutant :
• Filtre : x > 3 pour x dans [1,2,3,4,5].
• Seuls 4 et 5 passent.
• Pour chacun, yield 1 ; sum(1, 1) = 2.

Intermédiaire :
• sum() avec une expression génératrice conditionnelle : façon pythonique de compter les éléments qui satisfont une condition.
• x=1,2,3 : skip (x>3 False).
• x=4,5 : yield 1 chacun.
• sum(1, 1) = 2.

Expert :
• Générateur : (1 for x in [1,2,3,4,5] if x > 3).
• Alternative : len([x for x in ... if x > 3]) — mais le générateur utilise moins de mémoire.

Concepts clés :
• sum(), générateur conditionnel, comptage.

Distinctions clés :
• sum(1 for x in lst if x>3) vs len([x for x in lst if x>3]) (même résultat, moins de mémoire pour sum).

Fonctionnement :
• Filtre : seuls x=4 et x=5 satisfont x > 3.
• Pour chacun, yield 1.
• sum([1, 1]) → 2.

Exécution étape par étape :
1. Filtre : x=4 et x=5 satisfont x > 3.
2. Pour chacun, yield 1.
3. sum([1, 1]) → 2.

Ordre des opérations :
• Itération, filtre, yield, sum.

Cas d'utilisation courants :
• Compter les éléments qui matchent : sum(1 for x in data if pred(x)).

Cas limites :
• sum(1 for x in [] if x>0) → 0.

Considérations de performance :
• Générateur évite de créer une liste intermédiaire.

Exemples :
• sum(1 for c in "hello" if c in "aeiou")  # 2
• sum(1 for n in range(10) if n % 2 == 0)  # 5

Remarques :
• Plus efficace que len([...]) pour de grandes données.`,

  1079: `[x for x in [1,2,3,4,5] if x > 3] vaut [4, 5] : filtre les éléments > 3 ; seuls 4 et 5 passent.

Débutant :
• [x for x in iterable if condition].
• x=1,2,3 : 1>3, 2>3, 3>3 False → skip.
• x=4,5 : 4>3, 5>3 True → inclure.
• Résultat : [4, 5].

Intermédiaire :
• Compréhension de liste avec clause if : filtre les éléments de l'itérable source.
• x > 3 est strict : 3 n'est PAS inclus.
• Pour x >= 3, résultat serait [3, 4, 5].

Expert :
• x=1: 1>3 False, skip ; x=2: skip ; x=3: 3>3 False, skip.
• x=4: 4>3 True, inclure ; x=5: 5>3 True, inclure.
• Résultat : [4, 5].

Concepts clés :
• Compréhension de liste, filtre if, condition stricte.

Distinctions clés :
• [x for x in lst if x>3] ([4,5]) vs [x for x in lst if x>=3] ([3,4,5]).

Fonctionnement :
• Itérer [1,2,3,4,5] ; appliquer x > 3 ; garder où True ; [4, 5].

Exécution étape par étape :
1. Itérer [1, 2, 3, 4, 5].
2. Appliquer condition x > 3.
3. Garder les éléments où condition True.
4. Résultat : [4, 5].

Ordre des opérations :
• Itération, évaluation condition, construction liste.

Cas d'utilisation courants :
• Filtrer : evens = [x for x in nums if x % 2 == 0].

Cas limites :
• [x for x in [] if x>0] → [].

Considérations de performance :
• O(n), crée une nouvelle liste.

Exemples :
• [c for c in "hello" if c in "aeiou"]  # ['e','o']
• [n for n in range(10) if n % 2 == 0]  # [0,2,4,6,8]

Remarques :
• x > 3 exclut 3 ; utiliser >= pour inclure.`,

  1080: `any(word.startswith("py") for word in ["python","java","php"]) vaut True : "python".startswith("py") est True, any court-circuite.

Débutant :
• Vérifie chaque mot : commence par "py" ?
• "python".startswith("py") → True.
• any renvoie True immédiatement.

Intermédiaire :
• any() combiné à startswith() : pattern puissant pour vérifier si une chaîne d'une collection matche un préfixe.
• "java" et "php" ne sont jamais vérifiés.
• Court-circuit dès le premier True.

Expert :
• "python".startswith("py") → True.
• any() court-circuite → True.
• "java" et "php" ignorés.

Concepts clés :
• any(), startswith(), court-circuit.

Distinctions clés :
• any(w.startswith("py") for w in ["python","java","php"]) (True) vs all(...) (False).

Fonctionnement :
• "python".startswith("py") → True ; any() court-circuite → True.

Exécution étape par étape :
1. "python".startswith("py") → True.
2. any() court-circuite → True.
3. Résultat : True.

Ordre des opérations :
• Parcours, arrêt au premier truthy.

Cas d'utilisation courants :
• Vérifier si un fichier matche : any(f.endswith(".py") for f in files).
• Vérifier préfixes d'URL : any(url.startswith("https") for url in urls).

Cas limites :
• any(w.startswith("py") for w in ["java","php"]) → False.

Considérations de performance :
• Court-circuit évite de vérifier le reste.

Exemples :
• any(s.startswith("a") for s in ["apple","banana"])  # True
• any(x > 10 for x in [1,2,3])  # False

Remarques :
• Pattern courant pour validation de préfixes.`,

  1081: `all(len(w) > 2 for w in ["hi","hello","hey"]) vaut False : len("hi") = 2, qui n'est pas > 2 ; all renvoie False.

Débutant :
• "hi" : len=2, 2>2 → False (court-circuit).
• "hello" et "hey" ne sont jamais vérifiés.
• Résultat : False.

Intermédiaire :
• all() exige que chaque élément satisfasse la condition.
• "hi" a longueur 2, qui échoue len(w) > 2.
• > est strict : len("hi") > 2 est False car 2 n'est pas plus grand que 2. Utiliser >= 2 pour « au moins 2 ».

Expert :
• len("hi") → 2 ; 2 > 2 → False (pas strictement plus grand).
• all() court-circuite → False.
• "hello" et "hey" ignorés.

Concepts clés :
• all(), len(), comparaison stricte >.

Distinctions clés :
• all(len(w)>2 for w in ["hi","hello","hey"]) (False) vs all(len(w)>=2 ...) (True).

Fonctionnement :
• len("hi") → 2 ; 2 > 2 → False ; all() court-circuite → False.

Exécution étape par étape :
1. len("hi") → 2.
2. 2 > 2 → False (pas strictement plus grand).
3. all() court-circuite → False.

Ordre des opérations :
• Parcours, arrêt au premier falsy.

Cas d'utilisation courants :
• Validation : all(len(p) >= 8 for p in passwords).

Cas limites :
• all(len(w) > 0 for w in ["a","b"]) → True.

Considérations de performance :
• Court-circuit sur "hi".

Exemples :
• all(x > 0 for x in [1,2,0,4])  # False
• all(len(s) >= 1 for s in ["a","b"])  # True

Remarques :
• > 2 exclut 2 ; >= 2 inclut 2.`,

  1082: `max([1,2,3,4,5], key=lambda x: x % 3) vaut 2 : x%3 donne 1,2,0,1,2 ; reste max 2 (première occurrence), donc 2.

Débutant :
• key=lambda x: x % 3 calcule le reste par 3.
• 1%3=1, 2%3=2, 3%3=0, 4%3=1, 5%3=2.
• Reste max = 2 ; premier élément avec clé 2 : 2.

Intermédiaire :
• max() avec key trouve l'élément dont la valeur de clé est la plus grande.
• En cas d'égalité, le premier élément gagne (comportement stable).
• Clés : [1, 2, 0, 1, 2] ; max clé = 2 ; premier avec clé 2 : élément 2 (index 1).

Expert :
• Calcul des clés : [1, 2, 0, 1, 2].
• Valeur max des clés : 2.
• Premier élément avec clé 2 : 2.
• max() renvoie l'élément original, pas la clé.

Concepts clés :
• max(iterable, key=...), lambda, reste modulo.

Distinctions clés :
• max(..., key=lambda x: x%3) (2) vs max(..., key=lambda x: -x) (1).

Fonctionnement :
• Clés : [1,2,0,1,2] ; max clé = 2 ; élément avec clé 2 : 2.

Exécution étape par étape :
1. Calculer clés : [1, 2, 0, 1, 2].
2. Valeur max des clés : 2.
3. Premier élément avec clé 2 : 2 (index 1).
4. Résultat : 2.

Ordre des opérations :
• key appliquée à chaque élément, puis comparaison.

Cas d'utilisation courants :
• max(lst, key=len) pour le plus long élément.
• max(people, key=lambda p: p.age).

Cas limites :
• max([], key=...) → ValueError.

Considérations de performance :
• O(n), une passe.

Exemples :
• max([-1,-2,-3], key=abs)  # -3
• max(["a","bb","c"], key=len)  # "bb"

Remarques :
• En cas d'égalité de clés, le premier élément est renvoyé.`,

  1083: `min([1,2,3,4,5], key=lambda x: -x) vaut 5 : clés négatives -1,-2,-3,-4,-5 ; min choisit -5, correspond à l'élément 5.

Débutant :
• key=lambda x: -x négative chaque valeur.
• Clés : -1, -2, -3, -4, -5.
• min des clés : -5 (correspond à 5).
• Renvoie l'élément original (5), pas la clé (-5).

Intermédiaire :
• Utiliser une clé de négation avec min() trouve en pratique le maximum.
• Astuce utile quand on n'a que min() ou pour tri inverse : sorted(lst, key=lambda x: -x).

Expert :
• Clés : [-1, -2, -3, -4, -5].
• Clé min : -5.
• Élément avec clé -5 : 5.
• Résultat : 5.

Concepts clés :
• min(iterable, key=...), négation pour inverser l'ordre.

Distinctions clés :
• min(lst, key=lambda x: -x) (max) vs max(lst, key=lambda x: -x) (min).

Fonctionnement :
• Clés : [-1,-2,-3,-4,-5] ; min clé = -5 ; élément 5.

Exécution étape par étape :
1. Calculer clés : [-1, -2, -3, -4, -5].
2. Clé min : -5.
3. Élément avec clé -5 : 5.
4. Résultat : 5.

Ordre des opérations :
• key, puis min, puis renvoi de l'élément.

Cas d'utilisation courants :
• Trouver le max avec min : min(lst, key=lambda x: -x).
• Tri décroissant : sorted(lst, key=lambda x: -x).

Cas limites :
• min([1], key=lambda x: -x)  # 1.

Considérations de performance :
• O(n).

Exemples :
• min([3,1,4], key=lambda x: -x)  # 4
• sorted([1,2,3], key=lambda x: -x)  # [3,2,1]

Remarques :
• min avec key négative = max de l'original.`,

  1084: `sorted([True, False, True, False]) vaut [False, False, True, True] : False=0, True=1 ; tri croissant met False avant True.

Débutant :
• False == 0, True == 1.
• sorted() trie par défaut en croissant.
• 0, 0, 1, 1 → [False, False, True, True].
• Les valeurs triées restent des bool, pas des int.

Intermédiaire :
• En Python, bool est une sous-classe de int.
• sorted() les traite comme des entiers pour le tri.
• Résultat : liste de bool, pas d'int.

Expert :
• Convertir en clés de tri : [1, 0, 1, 0].
• Tri croissant : [0, 0, 1, 1].
• Retour : [False, False, True, True].
• Les bool peuvent être utilisés en arithmétique, tri, etc.

Concepts clés :
• bool sous-classe de int, sorted(), False=0 True=1.

Distinctions clés :
• sorted([True,False]) ([False,True]) vs sorted([True,False], reverse=True) ([True,False]).

Fonctionnement :
• Clés : [1,0,1,0] ; tri : [0,0,1,1] ; [False, False, True, True].

Exécution étape par étape :
1. Convertir en clés : [1, 0, 1, 0].
2. Tri croissant : [0, 0, 1, 1].
3. Retour : [False, False, True, True].
4. Résultat : [False, False, True, True].

Ordre des opérations :
• Tri par comparaison (0 < 1).

Cas d'utilisation courants :
• Grouper False puis True : sorted(booleans).

Cas limites :
• sorted([True])  # [True]
• sorted([])  # []

Considérations de performance :
• O(n log n).

Exemples :
• sorted([False, True, False])  # [False, False, True]
• [False, True].sort()  # None (in-place)

Remarques :
• bool hérite de int, donc compatible avec le tri.`,

  1085: `[False, True] < [True, False] vaut True : les listes se comparent élément par élément ; premier : False (0) < True (1) → True.

Débutant :
• Comparer premiers éléments : False vs True.
• False < True → True (car 0 < 1).
• La comparaison s'arrête à la première différence.
• Les seconds éléments ne sont jamais comparés.

Intermédiaire :
• Python compare les listes lexicographiquement — élément par élément, gauche à droite.
• S'arrête à la première différence.
• Règles : comparer élément par élément ; si tous égaux, la liste plus courte est « plus petite ».
• [1, 2] < [1, 3] → True (différence à l'index 1).
• [1, 2] < [1, 2, 3] → True (préfixe, plus courte est moins).

Expert :
• Index 0 : False < True → True (0 < 1).
• Première différence trouvée → renvoyer True.
• Index 1 non comparé.

Concepts clés :
• Comparaison lexicographique de listes, False < True.

Distinctions clés :
• [False, True] < [True, False] (True) vs [True, False] < [False, True] (False).

Fonctionnement :
• Comparer index 0 : False < True → True ; arrêt.

Exécution étape par étape :
1. Comparer index 0 : False < True → True (0 < 1).
2. Première différence trouvée → renvoyer True.
3. Index 1 non comparé.

Ordre des opérations :
• Comparaison élément par élément, gauche à droite.

Cas d'utilisation courants :
• Trier des listes de tuples ou listes.
• Comparer des séquences.

Cas limites :
• [] < [1] → True (liste vide plus petite).
• [1, 2] < [1, 2] → False (égales).

Considérations de performance :
• O(min(len(a), len(b))).

Exemples :
• [1, 2] < [1, 3]  # True
• [1] < [1, 0]  # True

Remarques :
• La comparaison s'arrête au premier élément différent.`,

  1086: `(lambda x: "even" if x % 2 == 0 else "odd")(4) vaut "even" : 4 % 2 == 0 est True, donc le lambda renvoie "even".

Débutant :
• Lambda : lambda x: "even" if x % 2 == 0 else "odd".
• Appelé avec x = 4.
• 4 % 2 = 0, 0 == 0 → True.
• Renvoie "even".

Intermédiaire :
• Les lambdas peuvent contenir des expressions conditionnelles (ternaires) : valeur_si_vrai if condition else valeur_si_faux.
• 4 % 2 == 0 → True.
• Condition True → renvoyer "even".
• Le ternaire dans un lambda est la seule façon de faire de la logique conditionnelle (lambda ne supporte pas if/elif/else).

Expert :
• Appel lambda avec x = 4.
• Évaluer condition : 4 % 2 == 0 → True.
• Condition True → renvoyer "even".

Concepts clés :
• lambda, expression ternaire, modulo.

Distinctions clés :
• (lambda x: "even" if x%2==0 else "odd")(4) ("even") vs (7) ("odd").

Fonctionnement :
• x=4 ; 4%2==0 → True ; "even".

Exécution étape par étape :
1. Appeler lambda avec x = 4.
2. Évaluer condition : 4 % 2 == 0 → True.
3. Condition True → renvoyer "even".

Ordre des opérations :
• Appel, condition, branche True/False.

Cas d'utilisation courants :
• Fonction inline : f = lambda x: "even" if x%2==0 else "odd".
• key dans sorted : sorted(nums, key=lambda x: (x%2, x)).

Cas limites :
• (lambda x: "even" if x%2==0 else "odd")(0)  # "even"

Considérations de performance :
• Négligeable.

Exemples :
• (lambda n: n*2 if n>0 else 0)(5)  # 10
• (lambda s: s.upper() if s else "")(None)  # AttributeError (s falsy mais pas None)

Remarques :
• Le ternaire est la seule forme de condition dans un lambda.`,

  1087: `(lambda x: "even" if x % 2 == 0 else "odd")(7) vaut "odd" : 7 % 2 == 1, pas 0, donc condition False et le lambda renvoie "odd".

Débutant :
• Lambda : lambda x: "even" if x % 2 == 0 else "odd".
• Appelé avec x = 7.
• 7 % 2 = 1, 1 == 0 → False.
• Renvoie "odd".

Intermédiaire :
• Même lambda qu'avant, mais avec un nombre impair.
• 7 % 2 == 0 → False.
• Condition False → renvoyer "odd".
• L'expression ternaire a toujours exactement deux issues. Pour plus de branches, ternaires imbriqués ou fonction avec if/elif/else.

Expert :
• Appel lambda avec x = 7.
• 7 % 2 == 0 → False.
• Condition False → renvoyer "odd".

Concepts clés :
• lambda, ternaire, cas impair.

Distinctions clés :
• (lambda ...)(7) ("odd") vs (lambda ...)(4) ("even").

Fonctionnement :
• x=7 ; 7%2==0 → False ; "odd".

Exécution étape par étape :
1. Appeler lambda avec x = 7.
2. Évaluer condition : 7 % 2 == 0 → False.
3. Condition False → renvoyer "odd".

Ordre des opérations :
• Appel, condition, branche else.

Cas d'utilisation courants :
• Mapper pair/impair : list(map(lambda x: "even" if x%2==0 else "odd", nums)).

Cas limites :
• (lambda x: "even" if x%2==0 else "odd")(-1)  # "odd"

Considérations de performance :
• Négligeable.

Exemples :
• (lambda n: "big" if n>100 else "small")(50)  # "small"
• (lambda c: "vowel" if c in "aeiou" else "consonant")("x")  # "consonant"

Remarques :
• Ternaire : une condition, deux branches.`,

  1088: `x = 5 ; "a" if x > 10 else "b" if x > 3 else "c" vaut "b" : x>10 False, donc "b" if x>3 else "c" ; x>3 True → "b".

Débutant :
• x = 5.
• x > 10 → False → branche else.
• Else : "b" if x > 3 else "c".
• x > 3 → True → "b".

Intermédiaire :
• Ternaires imbriqués : chaînage de droite à gauche : a if C1 else b if C2 else c.
• Parsé comme : "a" if x > 10 else ("b" if x > 3 else "c").
• x > 10 → False → branche else.
• Branche else : "b" if x > 3 else "c" ; x > 3 → True → "b".

Expert :
• x > 10 → False → aller à else.
• Else : "b" if x > 3 else "c".
• x > 3 → True → résultat "b".
• Les ternaires imbriqués sont difficiles à lire ; pour 3+ branches, préférer if/elif/else.

Concepts clés :
• Ternaire imbriqué, association à droite.

Distinctions clés :
• x=5 → "b" vs x=1 → "c" vs x=15 → "a".

Fonctionnement :
• x>10 False ; else : x>3 True ; "b".

Exécution étape par étape :
1. Vérifier x > 10 : 5 > 10 → False.
2. Aller à else : "b" if x > 3 else "c".
3. Vérifier x > 3 : 5 > 3 → True.
4. Renvoyer "b".

Ordre des opérations :
• Conditions de gauche à droite, branchement.

Cas d'utilisation courants :
• Catégorisation simple : tier = "A" if s>=90 else "B" if s>=80 else "C".

Cas limites :
• x=3 → "c" (3 > 3 False).
• x=10 → "b" (10 > 3 True).

Considérations de performance :
• Court-circuit sur les conditions.

Exemples :
• 1 if x>10 else 2 if x>5 else 3  # avec x=7 → 2
• "high" if n>100 else "mid" if n>50 else "low"

Remarques :
• Préférer if/elif/else pour plus de lisibilité.`,

  1089: `x = 1 ; "a" if x > 10 else "b" if x > 3 else "c" vaut "c" : x>10 False, x>3 False, donc résultat "c".

Débutant :
• x = 1.
• x > 10 → False.
• x > 3 → False aussi.
• Résultat : "c".

Intermédiaire :
• Quand toutes les conditions d'un ternaire imbriqué sont False, la valeur du dernier else est renvoyée.
• "a" if x > 10 else ("b" if x > 3 else "c").
• x > 10 → False ; x > 3 → False → "c".
• Équivalent à : if x > 10: "a" / elif x > 3: "b" / else: "c".

Expert :
• x > 10 → False → ternaire interne.
• x > 3 → False → renvoyer "c".

Concepts clés :
• Ternaire imbriqué, branche par défaut.

Distinctions clés :
• x=1 → "c" vs x=5 → "b" vs x=15 → "a".

Fonctionnement :
• x>10 False ; x>3 False ; "c".

Exécution étape par étape :
1. Vérifier x > 10 : 1 > 10 → False.
2. Aller à else : "b" if x > 3 else "c".
3. Vérifier x > 3 : 1 > 3 → False.
4. Renvoyer "c".

Ordre des opérations :
• Toutes les conditions évaluées (ou court-circuit).

Cas d'utilisation courants :
• Valeur par défaut dans une chaîne de conditions.

Cas limites :
• x=3 → "c" (3 > 3 False).
• x=0 → "c".

Considérations de performance :
• Négligeable.

Exemples :
• "a" if 0>10 else "b" if 0>3 else "c"  # "c"
• tier(0) → "F" dans un système de notes

Remarques :
• Le dernier else est la valeur par défaut.`,

  1090: `[i for i in range(10) if i % 2 == 0 and i % 3 == 0] vaut [0, 6] : nombres 0-9 divisibles par 2 ET 3 (donc par 6).

Débutant :
• range(10) → 0, 1, ..., 9.
• Condition : i % 2 == 0 ET i % 3 == 0.
• Les deux doivent être True (opérateur and).
• 0 : 0%2=0 ✓, 0%3=0 ✓ → inclure.
• 6 : 6%2=0 ✓, 6%3=0 ✓ → inclure.
• Les autres échouent au moins une condition.

Intermédiaire :
• Cette compréhension filtre les nombres divisibles par 2 et 3 (i.e. par 6).
• 0 : les deux ✓ ; 1 : 1%2≠0 ✗ ; 2 : 2%3≠0 ✗ ; 3 : 3%2≠0 ✗ ; 4 : 4%3≠0 ✗ ; 5 : les deux ✗ ; 6 : les deux ✓ ; 7-9 : au moins un ✗.
• Résultat : [0, 6].

Expert :
• Divisible par 2 et 3 ⇔ divisible par 6 (PPCM).
• 0 et 6 sont les seuls dans range(10).

Concepts clés :
• Compréhension, condition composée and, modulo, PPCM.

Distinctions clés :
• i%2==0 and i%3==0 ([0,6]) vs i%2==0 or i%3==0 ([0,2,3,4,6,8]).

Fonctionnement :
• 0 : les deux ✓ ; 6 : les deux ✓ ; reste : ✗.

Exécution étape par étape :
• 0 : 0%2=0 ✓, 0%3=0 ✓ → 0.
• 1-5 : au moins un ✗.
• 6 : 6%2=0 ✓, 6%3=0 ✓ → 6.
• 7-9 : au moins un ✗.
• Résultat : [0, 6].

Ordre des opérations :
• Itération, évaluation condition composée, construction liste.

Cas d'utilisation courants :
• Multiples de 6 : [i for i in range(n) if i % 6 == 0].

Cas limites :
• range(0) → [].
• range(1) → [0].

Considérations de performance :
• O(n).

Exemples :
• [i for i in range(20) if i%2==0 and i%5==0]  # [0,10]
• [i for i in range(100) if i%3==0 and i%7==0]  # [0,21,42,63,84]

Remarques :
• 0 est divisible par tout entier non nul.`,

  1091: `len([x for x in range(100) if x % 7 == 0]) vaut 15 : multiples de 7 de 0 à 99 : 0,7,14,...,98 — 15 au total.

Débutant :
• range(100) → 0, 1, ..., 99.
• x % 7 == 0 sélectionne les multiples de 7.
• Multiples : 0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98.
• Compte : 15.

Intermédiaire :
• 0×7=0, 1×7=7, ..., 14×7=98.
• 15×7=105 > 99, donc stop.
• 15 multiples au total (0 inclus).
• Erreur courante : oublier 0. Zéro est divisible par tout entier non nul (0 % 7 == 0 est True).

Expert :
• range(100) = [0..99].
• Multiples de 7 : 0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98.
• len = 15.

Concepts clés :
• Compréhension, modulo, len, multiples.

Distinctions clés :
• len([x for x in range(100) if x%7==0]) (15) vs len([x for x in range(1,100) if x%7==0]) (14).

Fonctionnement :
• Filtrer x % 7 == 0 ; compter les éléments.

Exécution étape par étape :
• 0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98.
• len → 15.

Ordre des opérations :
• Compréhension, puis len.

Cas d'utilisation courants :
• Compter les multiples : len([x for x in range(n) if x % k == 0]).

Cas limites :
• range(7) → [0] → len 1.
• range(0) → [] → len 0.

Considérations de performance :
• O(n), crée une liste intermédiaire.

Exemples :
• len([x for x in range(50) if x%5==0])  # 10
• len([x for x in range(100) if x%10==0])  # 10

Remarques :
• 0 compte comme multiple de 7.`,

  1092: `next(x for x in [1, 2, 3, 4, 5] if x > 3) vaut 4 : next() renvoie le premier élément du générateur où x > 3, soit 4.

Débutant :
• Générateur : (x for x in [1,2,3,4,5] if x > 3).
• Yield : 4, 5 (paresseux, seulement à la demande).
• next() prend la première valeur : 4.
• 1, 2, 3 sont ignorés (x > 3 False).
• 5 n'est jamais atteint (next() n'en prend qu'un).

Intermédiaire :
• next() récupère le prochain (premier) élément d'un itérateur ou générateur.
• Combiné à un générateur filtré, trouve le premier match.
• x=1,2,3 : x>3 False, skip ; x=4 : 4>3 True → yield 4.
• next() reçoit 4, s'arrête.
• next(gen, default) évite StopIteration si rien ne matche.

Expert :
• Générateur démarre ; x=1,2,3 : skip ; x=4 : yield 4.
• next() reçoit 4, s'arrête.
• Résultat : 4.

Concepts clés :
• next(), générateur, filtre, premier match.

Distinctions clés :
• next(x for x in lst if x>3) (4) vs [x for x in lst if x>3][0] (4, mais crée toute la liste).

Fonctionnement :
• Parcours ; premier x>3 : 4 ; next() → 4.

Exécution étape par étape :
1. Générateur commence.
2. x=1 : 1>3 False, skip.
3. x=2 : 2>3 False, skip.
4. x=3 : 3>3 False, skip.
5. x=4 : 4>3 True → yield 4.
6. next() reçoit 4, s'arrête.
7. Résultat : 4.

Ordre des opérations :
• Itération paresseuse, arrêt au premier yield.

Cas d'utilisation courants :
• Premier élément qui matche : next(x for x in items if pred(x)).
• Avec défaut : next((x for x in items if pred(x)), None).

Cas limites :
• next(x for x in [1,2,3] if x>10) → StopIteration.
• next((x for x in [] if x>0), 0) → 0.

Considérations de performance :
• Court-circuit : s'arrête au premier match.

Exemples :
• next(c for c in "hello" if c in "aeiou")  # 'e'
• next((n for n in range(100) if n*n > 50), -1)  # 8

Remarques :
• Utiliser next(gen, default) pour éviter StopIteration.`,

  1093: `bool(float("nan")) vaut True : NaN (Not a Number) est truthy — seul 0.0 est falsy pour les float.

Débutant :
• float("nan") → nan.
• bool(nan) → True (NaN est truthy !).
• Seuls float(0.0) et float(-0.0) sont falsy pour les float.

Intermédiaire :
• float("nan") crée une valeur NaN.
• Malgré « pas un nombre », elle est truthy.
• nan == nan → False (seule valeur non égale à elle-même).
• nan != nan → True.
• math.isnan(nan) → True (bonne façon de tester NaN).

Expert :
• float("nan") crée NaN.
• bool() vérifie : est-ce zéro ? Non → True.
• NaN est truthy même si nan == nan est False.

Concepts clés :
• float("nan"), truthiness, NaN.

Distinctions clés :
• bool(float("nan")) (True) vs bool(0.0) (False).

Fonctionnement :
• float("nan") crée NaN ; bool() → True (non-zéro).

Exécution étape par étape :
1. float("nan") crée une valeur NaN.
2. bool() vérifie : est-ce zéro ? Non → True.
3. Résultat : True.

Ordre des opérations :
• Conversion, puis bool.

Cas d'utilisation courants :
• Tester NaN : math.isnan(x), pas if x (car NaN truthy).

Cas limites :
• float("inf") → truthy aussi.
• float("-0.0") → falsy.

Considérations de performance :
• Négligeable.

Exemples :
• bool(float("inf"))  # True
• float("nan") == float("nan")  # False

Remarques :
• Utiliser math.isnan() pour détecter NaN.`,

  1094: `bool(float("inf")) vaut True : l'infini est truthy — c'est une valeur float non nulle.

Débutant :
• float("inf") → inf (infini positif).
• float("-inf") → -inf (infini négatif).
• Les deux sont truthy (non-nuls).
• Seul 0.0 est falsy pour les float.
• inf > tout nombre fini → True.
• inf == inf → True (contrairement à NaN).

Intermédiaire :
• float("inf") crée l'infini positif.
• Comme tout float non nul, truthy.
• inf se comporte normalement en comparaisons (inf > 1000000 → True) mais donne des résultats spéciaux en arithmétique (inf + 1 → inf, inf - inf → nan).

Expert :
• float("inf") → inf.
• bool(inf) → True (non-nul).
• Résultat : True.

Concepts clés :
• float("inf"), truthiness, infini.

Distinctions clés :
• bool(float("inf")) (True) vs bool(float("nan")) (True aussi).

Fonctionnement :
• float("inf") → inf ; bool(inf) → True.

Exécution étape par étape :
1. float("inf") → inf.
2. bool(inf) → True (non-nul).
3. Résultat : True.

Ordre des opérations :
• Conversion, puis bool.

Cas d'utilisation courants :
• Vérifier infini : math.isinf(x).
• Borne supérieure : max_val = float("inf").

Cas limites :
• inf + 1 → inf.
• inf - inf → nan.

Considérations de performance :
• Négligeable.

Exemples :
• float("inf") > 1e100  # True
• 1 / float("inf")  # 0.0

Remarques :
• inf == inf, contrairement à nan.`,

  1095: `True == 1 vaut True : bool est une sous-classe de int ; True a la valeur entière 1, donc True == 1.

Débutant :
• isinstance(True, int) → True.
• True == 1 → True.
• True == 1.0 → True (comparaison int-float).
• hash(True) == hash(1) → True.
• Considérés comme la même valeur dans beaucoup de contextes.

Intermédiaire :
• En Python, bool est une sous-classe de int.
• True est littéralement égal à 1, False à 0.
• Implications : {True: "a", 1: "b"} → {True: "b"} (même clé !).
• [True, False].count(1) → 1 (True == 1).
• sum([True, True, False]) → 2 (1+1+0).

Expert :
• True == 1 utilise la comparaison int.
• int(True) = 1.
• 1 == 1 → True.

Concepts clés :
• bool sous-classe de int, True == 1.

Distinctions clés :
• True == 1 (True) vs True is 1 (False, identité différente).

Fonctionnement :
• True == 1 ; int(True)=1 ; 1==1 → True.

Exécution étape par étape :
1. True == 1 utilise comparaison int.
2. int(True) = 1.
3. 1 == 1 → True.

Ordre des opérations :
• Comparaison par valeur.

Cas d'utilisation courants :
• sum([cond(x) for x in items]) compte les True.
• Clés de dict : True et 1 partagent la même entrée.

Cas limites :
• {True: "a", 1: "b"} → une seule clé.

Considérations de performance :
• Négligeable.

Exemples :
• True + 1  # 2
• [True, False].count(1)  # 1

Remarques :
• Utiliser is pour distinguer True de 1 si besoin.`,

  1096: `False == 0 vaut True : bool est une sous-classe de int ; False a la valeur entière 0, donc False == 0.

Débutant :
• isinstance(False, int) → True.
• False == 0 → True.
• False == 0.0 → True.
• hash(False) == hash(0) → True.
• int(False) → 0.

Intermédiaire :
• Comme True == 1, False == 0 car bool hérite de int.
• if x == 0: matchera quand x est False.
• if x is False: vérifie l'identité, pas l'égalité (plus strict).
• Utiliser is quand on veut vraiment False vs 0.

Expert :
• False == 0 utilise comparaison int.
• int(False) = 0.
• 0 == 0 → True.

Concepts clés :
• bool sous-classe de int, False == 0.

Distinctions clés :
• False == 0 (True) vs False is 0 (False).

Fonctionnement :
• False == 0 ; int(False)=0 ; 0==0 → True.

Exécution étape par étape :
1. False == 0 utilise comparaison int.
2. int(False) = 0.
3. 0 == 0 → True.

Ordre des opérations :
• Comparaison par valeur.

Cas d'utilisation courants :
• sum([not x for x in items]) compte les False.
• if not count: (si count vaut 0).

Cas limites :
• 0 == False → True.
• 0 is False → False.

Considérations de performance :
• Négligeable.

Exemples :
• False + 0  # 0
• [True, False].count(0)  # 1

Remarques :
• is False vs == 0 : identité vs égalité.`,

  1097: `True + 1 vaut 2 : True vaut 1 en contexte entier ; 1 + 1 = 2.

Débutant :
• True + 1 → 1 + 1 → 2.
• Le résultat est un int, pas un bool.
• type(True + 1) → <class 'int'>.
• Python utilise automatiquement la valeur entière de True (1).

Intermédiaire :
• Comme bool est une sous-classe de int, les bool peuvent être utilisés en arithmétique.
• Usages : sum([True, True, False, True]) → 3 (compte les True).
• total = passed + 1 (si passed est un bool, ça marche).
• [True, False, True].count(True) marche car True == 1.

Expert :
• True traité comme int : 1.
• 1 + 1 = 2.
• Résultat : 2 (type int).

Concepts clés :
• bool en arithmétique, True = 1.

Distinctions clés :
• True + 1 (2) vs False + 1 (1).

Fonctionnement :
• True → 1 ; 1 + 1 = 2.

Exécution étape par étape :
1. True traité comme int : 1.
2. 1 + 1 = 2.
3. Résultat : 2 (type int).

Ordre des opérations :
• Conversion implicite, puis addition.

Cas d'utilisation courants :
• Compter les True : sum(cond(x) for x in items).
• total = count + (1 if extra else 0).

Cas limites :
• True * 10 → 10.
• True ** 2 → 1.

Considérations de performance :
• Négligeable.

Exemples :
• sum([True, False, True])  # 2
• (True + True) * 5  # 10

Remarques :
• L'arithmétique sur les bool renvoie int.`,

  1098: `False + 0 vaut 0 : False vaut 0 en contexte entier ; 0 + 0 = 0.

Débutant :
• False + 0 → 0 + 0 → 0.
• Le résultat est un int, pas un bool.
• type(False + 0) → <class 'int'>.
• False * 100 → 0.
• False ** 0 → 1 (tout nombre à la puissance 0 vaut 1).

Intermédiaire :
• False se comporte comme 0 en arithmétique, comme True comme 1.
• Le résultat est l'int 0, pas le bool False, même si 0 == False est True.
• L'arithmétique sur les bool renvoie int.

Expert :
• False traité comme int : 0.
• 0 + 0 = 0.
• Résultat : 0 (type int).

Concepts clés :
• bool en arithmétique, False = 0.

Distinctions clés :
• False + 0 (0) vs True + 0 (1).

Fonctionnement :
• False → 0 ; 0 + 0 = 0.

Exécution étape par étape :
1. False traité comme int : 0.
2. 0 + 0 = 0.
3. Résultat : 0 (type int).

Ordre des opérations :
• Conversion implicite, puis addition.

Cas d'utilisation courants :
• sum([False, False]) → 0.
• count = sum(1 for x in items if not x).

Cas limites :
• False * 999 → 0.
• 0 + False → 0.

Considérations de performance :
• Négligeable.

Exemples :
• False + False  # 0
• (False + True) * 2  # 2

Remarques :
• 0 == False mais type(False+0) est int.`,

  1099: `{True: "a", 1: "b", 1.0: "c"} vaut {True: "c"} : True == 1 == 1.0, donc même clé ; première clé conservée, dernière valeur gagne.

Débutant :
• True == 1 == 1.0 → tous égaux.
• hash(True) == hash(1) == hash(1.0) → même hash.
• Le dict garde la PREMIÈRE clé mais met à jour avec la DERNIÈRE valeur.
• {True: "a"} → {True: "b"} → {True: "c"}.

Intermédiaire :
• Quand les clés sont égales (==) et ont le même hash, Python les traite comme la même clé de dict.
• Insérer True:"a" → {True: "a"}.
• Insérer 1:"b" → clé 1 == True, même slot, mise à jour → {True: "b"}.
• Insérer 1.0:"c" → clé 1.0 == True, même slot, mise à jour → {True: "c"}.
• La première clé insérée est conservée (True, pas 1 ou 1.0), mais chaque clé égale suivante écrase la valeur.

Expert :
• Étape par étape : True:"a" → {True:"a"} ; 1:"b" → {True:"b"} ; 1.0:"c" → {True:"c"}.
• Résultat : {True: "c"}.

Concepts clés :
• Clés égales et même hash, première clé conservée, dernière valeur gagne.

Distinctions clés :
• {True:"a", 1:"b"} ({True:"b"}) vs {1:"a", True:"b"} ({1:"b"}).

Fonctionnement :
• Insertions successives ; clés égales → même slot ; valeur mise à jour.

Exécution étape par étape :
1. Insérer True: "a" → {True: "a"}.
2. Insérer 1: "b" → clé 1 == True, mise à jour → {True: "b"}.
3. Insérer 1.0: "c" → clé 1.0 == True, mise à jour → {True: "c"}.
4. Résultat : {True: "c"}.

Ordre des opérations :
• Insertion de gauche à droite, mise à jour si clé existe.

Cas d'utilisation courants :
• Éviter True et 1 comme clés distinctes.

Cas limites :
• {0: "a", False: "b"} → {0: "b"}.

Considérations de performance :
• O(1) par insertion.

Exemples :
• {1: "x", 1.0: "y"}  # {1: "y"}
• {0: "a", False: "b"}  # {0: "b"}

Remarques :
• True, 1, 1.0 sont la même clé dans un dict.`,

  1100: `[False, 0, 0.0].count(0) vaut 3 : False == 0 == 0.0, donc count(0) matche les trois éléments.

Débutant :
• False == 0 → True.
• 0 == 0.0 → True.
• False == 0.0 → True.
• Les trois sont « égaux » à 0 par ==.
• count(0) trouve 3 correspondances.

Intermédiaire :
• list.count() utilise l'égalité (==) pour comparer.
• Comme False, 0 et 0.0 sont tous égaux, count(0) les compte tous.
• Conséquence directe du fait que bool hérite de int.
• [False, 0, 0.0].count(False) → aussi 3.
• [False, 0, 0.0].count(0.0) → aussi 3.
• Ils se comptent tous mutuellement car tous égaux.

Expert :
• Vérifier False == 0 → True (match 1).
• Vérifier 0 == 0 → True (match 2).
• Vérifier 0.0 == 0 → True (match 3).
• Résultat : 3.

Concepts clés :
• list.count(), ==, bool sous-classe de int, False==0==0.0.

Distinctions clés :
• [False,0,0.0].count(0) (3) vs [False,0,0.0].count(1) (0).

Fonctionnement :
• count parcourt et compte les éléments == 0.
• False, 0, 0.0 sont tous == 0.

Exécution étape par étape :
1. False == 0 → True (match 1).
2. 0 == 0 → True (match 2).
3. 0.0 == 0 → True (match 3).
4. Résultat : 3.

Ordre des opérations :
• Parcours linéaire, comparaison == pour chaque élément.

Cas d'utilisation courants :
• count(True) sur une liste de bool compte les True (car True==1).
• Attention : count(0) matche False et 0.0.

Cas limites :
• [0, 0.0].count(False) → 2.
• [1, True].count(1) → 2.

Considérations de performance :
• O(n).

Exemples :
• [True, 1, 1.0].count(1)  # 3
• [0, False].count(0)  # 2

Remarques :
• count utilise ==, pas is.`,
};
