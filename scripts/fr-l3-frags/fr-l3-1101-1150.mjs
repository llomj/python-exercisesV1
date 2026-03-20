/** Level 3 FR 1101–1150 — match/case (3.10), walrus operator (3.8). Aligned with level3_expert_a.ts. */
export default {
  1101: `La correspondance de modèles structurels (match/case) a été introduite en Python 3.10 (PEP 634).

Débutant :
• match/case est disponible à partir de Python 3.10.
• Ce n'est pas un switch/case comme en C ou Java.
• Les mots-clés match et case sont des « mots-clés doux ».

Intermédiaire :
• PEP 634 définit la syntaxe, PEP 635 la motivation, PEP 636 le tutoriel.
• La correspondance structurelle inspecte la forme et le contenu des données.
• Python 3.10 est sorti en octobre 2021.

Expert :
• match/case permet de décomposer des structures complexes en une seule expression.
• Les mots-clés ne sont réservés qu'à l'intérieur des blocs match.

Concepts clés :
• Correspondance de modèles structurels, PEP 634/635/636, mots-clés doux.

Distinctions clés :
• match/case (3.10) vs if/elif/else ; correspondance structurelle vs simple égalité.

Fonctionnement :
• Python évalue l'expression sujet une fois, puis teste chaque case de haut en bas.

Exécution étape par étape :
1. Évaluer l'expression sujet.
2. Tester chaque case dans l'ordre.
3. Exécuter le bloc du premier case qui matche.
4. Sortir du match (pas de fall-through).

Ordre des opérations :
• Sujet d'abord, puis cases de haut en bas jusqu'au premier match.

Cas d'utilisation courants :
• Dispatch sur commandes, parsing de structures, validation de types.

Cas limites :
• Aucun case ne matche → exécution continue sans erreur.

Considérations de performance :
• Opérations optimisées en CPython ; éviter les patterns trop lourds en boucle.

Exemples :
• match cmd: case "quit": ... case "hello": ...
• match data: case [x, y]: ...

Remarques :
• Référence : PEP 634, 635, 636.`,

  1102: `match 42: case 42: result = "found" → result vaut "found" : le littéral 42 matche case 42 exactement.

Débutant :
• 42 matche case 42.
• Le bloc du case s'exécute.
• result = "found".

Intermédiaire :
• match évalue le sujet (42) une seule fois.
• Les patterns littéraux utilisent l'égalité (==).
• Une fois un case matché, les suivants ne sont pas testés.

Expert :
• C'est la forme la plus simple de correspondance — littéral contre littéral.
• Les patterns littéraux fonctionnent avec int, float, str, bytes, True, False, None.

Concepts clés :
• Pattern littéral, égalité, ordre des cases.

Distinctions clés :
• case 42 (match) vs case 43 (pas de match).

Fonctionnement :
• Sujet 42 ; case 42 → 42 == 42 → True → bloc exécuté.

Exécution étape par étape :
1. Évaluer 42 (sujet).
2. Tester case 42 : 42 == 42 → True.
3. Exécuter result = "found".
4. Fin du match.

Ordre des opérations :
• Sujet, puis comparaison == pour le pattern littéral.

Cas d'utilisation courants :
• Dispatch sur valeurs connues, codes de retour.

Cas limites :
• match 42.0 : case 42 ne matche pas (types différents pour float vs int selon contexte).

Considérations de performance :
• Comparaison O(1).

Exemples :
• match 0: case 0: r = "zero"
• match "ok": case "ok": r = True

Remarques :
• Les littéraux doivent être des valeurs hashables.`,

  1103: `match "hello": case "hello": result = "match" → result vaut "match" : la chaîne matche exactement.

Débutant :
• "hello" matche case "hello".
• result = "match".

Intermédiaire :
• La correspondance de chaînes est sensible à la casse : "hello" ≠ "Hello".
• Pas de correspondance partielle avec les littéraux.
• Après le match, le contrôle sort du bloc match.

Expert :
• Les patterns str utilisent == ; la chaîne doit être identique.
• Les chaînes vides "" matchent case "".

Concepts clés :
• Pattern littéral str, correspondance exacte, sensibilité à la casse.

Distinctions clés :
• "hello" matche "hello" ; "Hello" ne matche pas "hello".

Fonctionnement :
• Sujet "hello" ; case "hello" → "hello" == "hello" → True → bloc exécuté.

Exécution étape par étape :
1. Sujet "hello".
2. case "hello" : égalité → True.
3. result = "match".
4. Fin.

Ordre des opérations :
• Comparaison == sur les chaînes.

Cas d'utilisation courants :
• Parsing de commandes, validation de mots-clés.

Cas limites :
• "" matche case "".
• "hello " (avec espace) ne matche pas "hello".

Considérations de performance :
• Comparaison O(n) pour les str de longueur n.

Exemples :
• match s: case "quit": exit()
• match cmd: case "": default_action()

Remarques :
• Pas de regex ni de glob dans les patterns littéraux.`,

  1104: `match 5: case 1: r="one" case 5: r="five" case _: r="other" → r vaut "five" : case 5 matche en premier.

Débutant :
• case 1 ne matche pas 5.
• case 5 matche 5 → r = "five".
• case _ n'est jamais atteint.

Intermédiaire :
• Les cases sont testés de haut en bas.
• Le premier case qui matche exécute son bloc.
• Pas de fall-through comme en C/Java.

Expert :
• case 5 est le deuxième case ; il matche avant case _.
• Un seul case s'exécute par match.

Concepts clés :
• Ordre des cases, premier match gagne, pas de fall-through.

Distinctions clés :
• match 5 avec case 5 avant case _ (r="five") vs case _ avant case 5 (r="other").

Fonctionnement :
• case 1 : 5 != 1 → skip. case 5 : 5 == 5 → r = "five". Fin.

Exécution étape par étape :
1. case 1 : 5 == 1 → False, skip.
2. case 5 : 5 == 5 → True.
3. r = "five".
4. Fin du match.

Ordre des opérations :
• Test séquentiel des cases de haut en bas.

Cas d'utilisation courants :
• Tables de dispatch, mapping valeur → action.

Cas limites :
• match 1 : case 1 matche, r = "one".

Considérations de performance :
• Arrêt au premier match (court-circuit).

Exemples :
• match n: case 0: ... case 1: ... case _: ...
• match status: case "ok": ... case "err": ...

Remarques :
• Placer les patterns les plus spécifiques avant les plus généraux.`,

  1105: `case _: signifie joker/par défaut — matche n'importe quelle valeur, comme un catch-all.

Débutant :
• case _ matche tout.
• C'est le case par défaut.
• On ne peut pas utiliser _ pour accéder à la valeur matchée.

Intermédiaire :
• _ est le pattern joker ; il ne lie pas la valeur à un nom.
• Il matche tout ce qui n'a pas matché les cases précédents.
• Il devrait typiquement être le dernier case (sinon les suivants sont inaccessibles).
• _ n'est spécial que dans match/case ; ailleurs c'est une variable normale.

Expert :
• Contrairement à case x: (capture), case _: ne capture pas.
• Tout case après case _: est mort (unreachable).

Concepts clés :
• Pattern joker, pas de liaison, case par défaut.

Distinctions clés :
• case _: (joker, pas de capture) vs case x: (capture dans x).

Fonctionnement :
• Si aucun case précédent n'a matché, case _: matche toujours et exécute son bloc.

Exécution étape par étape :
1. Tester les cases dans l'ordre.
2. Si aucun ne matche jusqu'à case _:, celui-ci matche.
3. Exécuter le bloc de case _:.

Ordre des opérations :
• case _: est testé en dernier (si placé en dernier).

Cas d'utilisation courants :
• Gestion des valeurs inattendues, fallback.

Cas limites :
• case _: en premier → matche tout, les autres cases jamais atteints.

Considérations de performance :
• Aucun coût supplémentaire.

Exemples :
• match x: case 1: ... case 2: ... case _: default()
• match cmd: case "quit": ... case _: unknown()

Remarques :
• En dehors de match/case, _ est une variable (convention « unused »).`,

  1106: `match 99: case 1: r="one" case _: r="other" → r vaut "other" : 99 ne matche pas case 1, case _ attrape tout.

Débutant :
• 99 != 1, donc case 1 est ignoré.
• case _ matche tout → r = "other".

Intermédiaire :
• Sans case _:, si rien ne matche, rien ne se passe (pas d'erreur).
• case _: agit comme gestionnaire par défaut.

Expert :
• 99 ne matche pas le pattern littéral 1.
• Le joker _ matche toute valeur restante.

Concepts clés :
• Joker comme fallback, pas d'exception si aucun match.

Distinctions clés :
• match 99 avec case _ (r="other") vs match 99 sans case _ (r inchangé).

Fonctionnement :
• case 1 : 99 == 1 → False. case _: matche → r = "other".

Exécution étape par étape :
1. case 1 : 99 != 1 → skip.
2. case _: matche 99.
3. r = "other".
4. Fin.

Ordre des opérations :
• Test séquentiel ; _ matche en dernier.

Cas d'utilisation courants :
• Valeurs par défaut, gestion d'erreurs douce.

Cas limites :
• match 1 : case 1 matche, case _ non atteint.

Considérations de performance :
• Négligeable.

Exemples :
• match code: case 200: ... case _: error()
• match x: case None: ... case _: process(x)

Remarques :
• Bonne pratique : inclure case _: pour les valeurs inattendues.`,

  1107: `match (1, 2): case (1, 2): r = "tuple match" → r vaut "tuple match" : les tuples peuvent être matchés structurellement.

Débutant :
• (1, 2) matche le pattern (1, 2).
• r = "tuple match".

Intermédiaire :
• Les patterns de séquence matchent tuples et listes.
• [1, 2] matcherait aussi (1, 2) (même longueur, mêmes éléments).
• Vérification : longueur puis chaque élément.

Expert :
• Le pattern (1, 2) matche toute séquence de longueur 2 avec éléments 1 et 2.
• Les tuples imbriqués fonctionnent : (1, (2, 3)).

Concepts clés :
• Pattern de séquence, correspondance structurelle, longueur + éléments.

Distinctions clés :
• (1, 2) matche (1, 2) ; (1, 3) ne matche pas (1, 2).

Fonctionnement :
• Sujet (1, 2) ; pattern (1, 2) : longueur 2, 1==1, 2==2 → match.

Exécution étape par étape :
1. Vérifier longueur : len((1,2)) == 2, pattern a 2 éléments → OK.
2. Élément 0 : 1 == 1 → OK.
3. Élément 1 : 2 == 2 → OK.
4. r = "tuple match".

Ordre des opérations :
• Longueur d'abord, puis éléments de gauche à droite.

Cas d'utilisation courants :
• Déstructuration de paires, coordonnées, résultats multiples.

Cas limites :
• (1, 2) matche [1, 2] (séquence).
• (1,) ne matche pas (1, 2) (longueur différente).

Considérations de performance :
• O(n) pour n éléments.

Exemples :
• match pt: case (0, 0): origin()
• match (a, b): case (x, y): swap(x, y)

Remarques :
• Les patterns [] et () sont interchangeables pour les séquences.`,

  1108: `match [1, 2, 3]: case [1, 2, 3]: r = "list match" → r vaut "list match" : les listes peuvent être matchées structurellement.

Débutant :
• [1, 2, 3] matche le pattern [1, 2, 3].
• r = "list match".

Intermédiaire :
• Les patterns de séquence [] ou () matchent listes et tuples.
• Le pattern [1, 2, 3] matche (1, 2, 3), [1, 2, 3], ou toute séquence compatible.
• Vérification : longueur correcte, puis chaque élément par position.

Expert :
• Sequence patterns : longueur puis comparaison élément par élément.
• Le type (list vs tuple) n'est pas imposé pour le match.

Concepts clés :
• Pattern de séquence, [] et () interchangeables, correspondance par position.

Distinctions clés :
• [1, 2, 3] matche [1, 2, 3] ; [1, 2] ne matche pas (longueur).

Fonctionnement :
• Sujet [1, 2, 3] ; pattern [1, 2, 3] : len 3, 1==1, 2==2, 3==3 → match.

Exécution étape par étape :
1. Longueur : 3 == 3.
2. Éléments : 1==1, 2==2, 3==3.
3. r = "list match".
4. Fin.

Ordre des opérations :
• Longueur, puis éléments de gauche à droite.

Cas d'utilisation courants :
• Parsing de listes, validation de structure.

Cas limites :
• [1, 2, 3] matche (1, 2, 3).
• [] matche [].

Considérations de performance :
• O(n).

Exemples :
• match data: case [x, y, z]: ...
• match lst: case []: empty()

Remarques :
• Les patterns de séquence ne matchent que les types séquence (list, tuple, etc.).`,

  1109: `Oui — les patterns de classe comme case int(): matchent tout objet de ce type.

Débutant :
• case int(): matche tout entier.
• case str(): matche toute chaîne.
• case float(): matche tout float.

Intermédiaire :
• Pour capturer : case int() as x: (pas case int(x) pour les types built-in).
• Les classes personnalisées peuvent définir __match_args__ pour les patterns positionnels.
• Sous le capot : isinstance().

Expert :
• case int(x) n'est pas valide pour les built-ins (pas de __match_args__).
• Pour capturer la valeur matchée : case int() as x:.
• bool est sous-classe de int : True/False matchent case int().

Concepts clés :
• Pattern de classe, isinstance, as pour capturer.

Distinctions clés :
• case int(): (match type) vs case 42: (match valeur).

Fonctionnement :
• isinstance(sujet, int) → True → case int(): matche.

Exécution étape par étape :
1. Tester isinstance(sujet, int).
2. Si True, le case matche.
3. Exécuter le bloc.

Ordre des opérations :
• Vérification de type avant tout.

Cas d'utilisation courants :
• Dispatch par type, validation, parsing polymorphique.

Cas limites :
• True matche case int() (bool < int).
• 42.0 ne matche pas case int().

Considérations de performance :
• isinstance() O(1) pour les types built-in.

Exemples :
• match x: case int(): ... case str(): ...
• match v: case int() as n: use(n)

Remarques :
• Pour les classes custom, __match_args__ permet case MaClasse(a, b):.`,

  1110: `match 42: case int(): r="int" case str(): r="str" → r vaut "int" : 42 est un int, case int(): matche.

Débutant :
• 42 est un int.
• case int(): matche.
• r = "int".

Intermédiaire :
• case int() matche toute valeur de type int.
• case str() n'est jamais atteint car le premier case a déjà matché.
• True et False matchent aussi case int() (bool < int).

Expert :
• Ordre des cases : int() avant str() ; 42 matche int().
• Pas de fall-through.

Concepts clés :
• Pattern de classe, ordre des cases, isinstance.

Distinctions clés :
• match 42 → r="int" ; match "hi" → r="str".

Fonctionnement :
• isinstance(42, int) → True → case int(): matche → r = "int".

Exécution étape par étape :
1. case int(): isinstance(42, int) → True.
2. r = "int".
3. Fin (case str() non testé).

Ordre des opérations :
• Test des cases de haut en bas.

Cas d'utilisation courants :
• Dispatch par type, validation d'entrée.

Cas limites :
• match True : case int(): matche (bool sous-classe de int).

Considérations de performance :
• isinstance() rapide.

Exemples :
• match x: case int(): ... case str(): ... case _: ...
• match v: case float(): ... case int(): ...

Remarques :
• Placer les types les plus spécifiques avant les plus généraux si nécessaire.`,

  1111: `match "hi": case int(): r="int" case str(): r="str" → r vaut "str" : "hi" est une str, case str(): matche.

Débutant :
• "hi" n'est pas un int.
• "hi" est une str → case str(): matche.
• r = "str".

Intermédiaire :
• case int() ne matche pas — ignoré.
• case str() matche — r = "str".
• Les patterns de classe font un isinstance() en interne.

Expert :
• Ordre : int() testé en premier, pas de match ; str() testé, match.

Concepts clés :
• Pattern de classe, isinstance, ordre de test.

Distinctions clés :
• match "hi" → r="str" ; match 42 → r="int".

Fonctionnement :
• isinstance("hi", int) → False. isinstance("hi", str) → True → r = "str".

Exécution étape par étape :
1. case int(): isinstance("hi", int) → False, skip.
2. case str(): isinstance("hi", str) → True.
3. r = "str".
4. Fin.

Ordre des opérations :
• Test séquentiel des patterns de classe.

Cas d'utilisation courants :
• Validation de type, parsing polymorphique.

Cas limites :
• "" matche case str().
• "hi" ne matche pas case int().

Considérations de performance :
• isinstance() O(1).

Exemples :
• match val: case str(): ... case int(): ...
• match x: case float(): ... case _: other()

Remarques :
• Les types built-in n'ont pas __match_args__, donc pas de capture positionnelle.`,

  1112: `match/case utilise la correspondance de modèles structurels, pas seulement ==.

Débutant :
• Ce n'est pas qu'un simple ==.
• On peut décomposer des structures complexes.
• Les patterns littéraux utilisent ==, mais le système va bien au-delà.

Intermédiaire :
• Patterns littéraux (case 42:) → égalité.
• Patterns de séquence : case [x, y, z]: déstructure.
• Patterns de mapping : case {"key": val}: déstructure les dicts.
• Patterns de classe : case Point(x=0): vérifie attributs.
• Gardes : case x if x > 0:.
• OR patterns : case 0 | 1:.

Expert :
• « Correspondance structurelle » = matcher la STRUCTURE des données.
• Décomposition de structures imbriquées en un seul pattern.
• Plus puissant que switch/case classique.

Concepts clés :
• Correspondance structurelle, décomposition, patterns composés.

Distinctions clés :
• match/case (structurel) vs if x == 42: (simple égalité).

Fonctionnement :
• Selon le type de pattern : égalité, décomposition, isinstance, etc.

Exécution étape par étape :
1. Identifier le type de pattern.
2. Appliquer la logique de match (==, déstructuration, isinstance).
3. Si match + garde (si présente) True → exécuter.

Ordre des opérations :
• Sujet évalué une fois ; patterns testés dans l'ordre.

Cas d'utilisation courants :
• Parsing JSON, dispatch sur structures, validation.

Cas limites :
• Littéraux : ==. Séquences : longueur + éléments. Mappings : clés + valeurs.

Considérations de performance :
• Varie selon la complexité du pattern.

Exemples :
• case [a, *rest]: déstructure. case {"code": c}: capture.
• case x if x > 0: garde.

Remarques :
• PEP 634 définit la sémantique complète.`,

  1113: `match {"a": 1}: case {"a": 1}: r = "match" → r vaut "match" : les patterns de mapping matchent les dictionnaires.

Débutant :
• {"a": 1} matche le pattern {"a": 1}.
• r = "match".

Intermédiaire :
• case {"a": 1}: matche tout dict ayant la clé "a" avec la valeur 1.
• Les clés supplémentaires dans le sujet sont ignorées (correspondance partielle).
• Les clés doivent être des littéraux ou noms qualifiés (pas des variables).

Expert :
• Mapping patterns : présence des clés spécifiées + valeurs qui matchent.
• Valeurs peuvent être patterns (littéraux, captures, patterns imbriqués).
• match {"a": 1, "b": 2}: case {"a": 1}: matche aussi (clé "b" ignorée).

Concepts clés :
• Pattern de mapping, correspondance partielle, clés littérales.

Distinctions clés :
• {"a": 1} matche {"a": 1} ; {"a": 2} ne matche pas {"a": 1}.

Fonctionnement :
• Vérifier "a" in sujet et sujet["a"] == 1 → match.

Exécution étape par étape :
1. Vérifier clé "a" présente.
2. Vérifier sujet["a"] == 1.
3. r = "match".
4. Fin.

Ordre des opérations :
• Vérification des clés, puis des valeurs.

Cas d'utilisation courants :
• Parsing de réponses API, validation de config.

Cas limites :
• {} ne matche pas {"a": 1} (clé manquante).
• {"a": 1, "b": 2} matche {"a": 1}.

Considérations de performance :
• O(k) pour k clés dans le pattern.

Exemples :
• match resp: case {"status": 200}: ...
• match d: case {"error": msg}: ...

Remarques :
• Les clés du pattern doivent être des littéraux (pas de variables).`,

  1114: `Oui — les patterns de mapping matchent partiellement. Les clés supplémentaires du sujet sont ignorées.

Débutant :
• case {"a": x}: matche tout dict contenant la clé "a".
• x capture la valeur de "a".
• Les autres clés sont ignorées.

Intermédiaire :
• {"a": 1, "b": 2, "c": 3} matche case {"a": x}: avec x = 1.
• Pour capturer le reste : case {"a": x, **rest}:.
• Différent des séquences qui exigent une longueur exacte (sauf avec *).

Expert :
• Correspondance partielle par défaut pour les mappings.
• **rest capture les clés/valeurs restantes.
• Les séquences exigent une longueur fixe sauf avec *.

Concepts clés :
• Correspondance partielle, **rest, clés optionnelles.

Distinctions clés :
• Mapping (partiel) vs séquence (longueur par défaut).

Fonctionnement :
• Vérifier présence des clés du pattern ; valeurs matchent ; reste ignoré ou capturé.

Exécution étape par étape :
1. Pour chaque clé du pattern, vérifier présence et valeur.
2. Si tout matche, le case réussit.
3. Clés supplémentaires : ignorées ou **rest.

Ordre des opérations :
• Clés du pattern testées ; valeurs comparées.

Cas d'utilisation courants :
• API JSON avec champs optionnels, config partielle.

Cas limites :
• {"a": 1} matche {"a": 1} ; {"a": 1, "x": 99} matche aussi.

Considérations de performance :
• O(nombre de clés du pattern).

Exemples :
• match d: case {"type": t, **rest}: ...
• match cfg: case {"host": h}: use(h)

Remarques :
• **rest doit être la dernière partie du pattern.`,

  1115: `match {"a": 1, "b": 2}: case {"a": x}: r = x → r vaut 1 : le pattern capture la valeur de "a" dans x.

Débutant :
• Le dict a "a": 1 et "b": 2.
• case {"a": x}: capture 1 dans x.
• r = x = 1.

Intermédiaire :
• case {"a": x}: matche tout dict avec clé "a" et capture sa valeur dans x.
• La clé "b" est ignorée.
• Pour capturer "b" aussi : case {"a": x, "b": y}:.

Expert :
• Variable dans la valeur du pattern = capture.
• x est lié à sujet["a"] = 1.
• r = x assigne 1 à r.

Concepts clés :
• Capture dans les patterns de mapping, variable comme valeur.

Distinctions clés :
• {"a": x} capture ; {"a": 1} compare littéralement.

Fonctionnement :
• "a" in sujet → oui. x = sujet["a"] = 1. r = 1.

Exécution étape par étape :
1. Vérifier "a" présente.
2. Capturer x = sujet["a"] = 1.
3. r = x = 1.
4. Fin.

Ordre des opérations :
• Vérification des clés, capture des valeurs.

Cas d'utilisation courants :
• Extraction de champs d'un dict, parsing de JSON.

Cas limites :
• {"a": 1} : x=1. {"a": None} : x=None.

Considérations de performance :
• O(1) pour une clé.

Exemples :
• match d: case {"code": c}: process(c)
• match resp: case {"data": d}: use(d)

Remarques :
• Les noms de variables dans le pattern doivent être uniques dans le case.`,

  1116: `match [1, 2, 3]: case [1, *rest]: r = rest → r vaut [2, 3] : *rest capture le reste en liste.

Débutant :
• Le pattern [1, *rest] matche une séquence commençant par 1.
• *rest capture [2, 3].
• r = [2, 3].

Intermédiaire :
• Le pattern étoilé (*nom) capture zéro ou plusieurs éléments restants en liste.
• Pour [1, 2, 3] : premier élément 1 (matche), rest = [2, 3].
• La variable capturée est toujours une liste, même si le sujet est un tuple.
• Au plus un pattern étoilé par séquence.

Expert :
• *rest fonctionne comme le déballage dans les affectations : first, *rest = seq.
• rest = [2, 3] car 2 et 3 sont après le 1.

Concepts clés :
• Pattern étoilé, capture en liste, zéro ou plus.

Distinctions clés :
• [1, *rest] vs [1, 2, 3] (littéraux stricts).

Fonctionnement :
• Premier élément : 1 == 1. Reste : [2, 3] → rest = [2, 3].

Exécution étape par étape :
1. Vérifier premier élément == 1.
2. Capturer le reste : rest = [2, 3].
3. r = rest.
4. Fin.

Ordre des opérations :
• Éléments explicites d'abord, puis *.

Cas d'utilisation courants :
• Tête + reste, parsing de listes de longueur variable.

Cas limites :
• [1] : rest = [].
• [1, 2] : rest = [2].

Considérations de performance :
• Copie des éléments restants en liste.

Exemples :
• match lst: case [h, *t]: process(h, t)
• match seq: case [x, *rest]: ...

Remarques :
• *_ capture mais ignore (joker).`,

  1117: `match [1]: case [1, *rest]: r = rest → r vaut [] : *rest capture zéro élément.

Débutant :
• [1] commence par 1.
• Il n'y a rien après 1.
• rest = [].

Intermédiaire :
• case [1, *rest]: exige que la séquence commence par 1.
• [1] commence par 1 → le pattern matche.
• Aucun élément après 1 → rest = [].
• Le pattern * capture zéro ou plus — zéro est valide.

Expert :
• Analogie : first, *rest = [1] donne rest = [].
• Le pattern étoilé peut capturer une liste vide.

Concepts clés :
• Pattern étoilé avec zéro élément, liste vide.

Distinctions clés :
• [1] → rest=[] ; [1, 2] → rest=[2].

Fonctionnement :
• Premier élément 1 == 1. Reste : aucun → rest = [].

Exécution étape par étape :
1. Premier élément : 1 == 1.
2. Éléments restants : aucun.
3. rest = [].
4. r = [].

Ordre des opérations :
• Match du préfixe, puis capture du reste.

Cas d'utilisation courants :
• Séquences avec élément optionnel, liste à un élément.

Cas limites :
• [1] : rest = [].
• [] : ne matche pas [1, *rest] (pas de 1 en tête).

Considérations de performance :
• Négligeable.

Exemples :
• match [x]: case [x, *r]: r=[]
• match lst: case [h, *t]: len(t)==0

Remarques :
• *rest est toujours une list, jamais un tuple.`,

  1118: `match [1, 2, 3, 4]: case [first, *middle, last]: r = middle → r vaut [2, 3] : * au milieu capture l'entre-deux.

Débutant :
• first = 1, last = 4.
• *middle capture [2, 3].
• r = [2, 3].

Intermédiaire :
• Le pattern étoilé peut être au début, au milieu ou à la fin.
• Au milieu, il capture tout entre les éléments explicites.
• Équivalent à : first, *middle, last = [1, 2, 3, 4].

Expert :
• case [first, *middle, last]: exige une séquence de longueur >= 2.
• first = premier, last = dernier, middle = tout entre les deux.

Concepts clés :
• Pattern étoilé au milieu, capture entre premier et dernier.

Distinctions clés :
• [first, *middle, last] vs [first, *rest] (pas de last explicite).

Fonctionnement :
• first=1, last=4, middle=[2, 3].

Exécution étape par étape :
1. first = 1 (premier).
2. last = 4 (dernier).
3. middle = [2, 3] (entre les deux).
4. r = [2, 3].

Ordre des opérations :
• Premier et dernier extraits, reste au milieu.

Cas d'utilisation courants :
• Tête, milieu, queue ; parsing de listes structurées.

Cas limites :
• [1, 2] : first=1, middle=[], last=2.
• [1] : ne matche pas (il faut au moins 2 éléments).

Considérations de performance :
• Copie du milieu.

Exemples :
• match lst: case [a, *m, b]: process(a, m, b)
• match seq: case [f, *mid, l]: mid

Remarques :
• Un seul * par pattern de séquence.`,

  1119: `match (1, "a"): case (int(x), str(y)): r = (x, y) → SyntaxError : pour les types built-in, la capture positionnelle int(x) n'est pas valide.

Débutant :
• int(x) et str(y) ne sont pas autorisés pour les types built-in.
• Il faut utiliser case int() as x, str() as y: pour capturer.

Intermédiaire :
• Les types built-in (int, str) n'ont pas __match_args__.
• case int(x): tente une capture positionnelle → TypeError ou SyntaxError.
• Pour capturer : case int() as x: ou (int() as x, str() as y).

Expert :
• __match_args__ définit les champs pour les patterns positionnels.
• int et str n'ont pas __match_args__.
• Syntaxe correcte : case (int() as x, str() as y): r = (x, y) → r = (1, "a").

Concepts clés :
• __match_args__, capture avec as, types built-in.

Distinctions clés :
• int(x) (invalide) vs int() as x (valide).

Fonctionnement :
• Le pattern (int(x), str(y)) est rejeté à la compilation/évaluation.

Exécution étape par étape :
1. Python tente d'interpréter (int(x), str(y)).
2. int n'a pas __match_args__ pour la capture positionnelle.
3. Erreur (SyntaxError ou TypeError).

Ordre des opérations :
• Validation du pattern avant le match.

Cas d'utilisation courants :
• Utiliser case int() as x: pour les built-ins.
• Classes custom avec __match_args__ pour positionnel.

Cas limites :
• dataclass définit __match_args__ automatiquement.

Considérations de performance :
• N/A (erreur).

Exemples :
• match (1, "a"): case (int() as x, str() as y): r = (x, y)  # r = (1, "a")
• match v: case int() as n: use(n)

Remarques :
• as lie la valeur matchée à une variable.`,

  1120: `match 42: case x if x > 10: r="big" case x: r="small" → r vaut "big" : x capture 42, la garde x>10 est True.

Débutant :
• case x matche tout et lie 42 à x.
• if x > 10 : 42 > 10 → True.
• r = "big".

Intermédiaire :
• case x: est un pattern de capture — matche toute valeur et la lie à x.
• if x > 10 est une garde — condition supplémentaire.
• La garde n'est évaluée qu'après que le pattern ait matché.
• Si la garde est False, le case est ignoré et le suivant testé.

Expert :
• Pattern + garde : les deux doivent réussir.
• 42 matche case x (x=42), puis 42 > 10 → True → r = "big".

Concepts clés :
• Garde (if), pattern de capture, ordre d'évaluation.

Distinctions clés :
• case x if x>10 (avec garde) vs case x (sans garde).

Fonctionnement :
• x = 42. Pattern matche. Garde 42 > 10 → True. r = "big".

Exécution étape par étape :
1. case x : matche 42, x = 42.
2. Garde : 42 > 10 → True.
3. r = "big".
4. Fin (case x sans garde non atteint).

Ordre des opérations :
• Pattern d'abord, puis garde si pattern matche.

Cas d'utilisation courants :
• Conditions supplémentaires, validation après capture.

Cas limites :
• match 5 : case x if x>10 échoue, case x matche → r="small".

Considérations de performance :
• Garde évaluée seulement si le pattern matche.

Exemples :
• case x if x > 0: ...
• case (a, b) if a != b: ...

Remarques :
• La garde peut utiliser les variables capturées dans le pattern.`,

  1121: `match 5: case x if x > 10: r="big" case x: r="small" → r vaut "small" : la garde échoue, le case suivant matche.

Débutant :
• case x if x > 10 : x=5, mais 5 > 10 est False.
• Ce case est ignoré.
• case x (sans garde) matche tout → r = "small".

Intermédiaire :
• Quand une garde échoue, le case est ignoré même si le pattern a matché.
• Le match continue au case suivant.
• case x sans garde agit comme fallback quand la garde échoue.

Expert :
• case x if x > 10 : pattern matche (x=5), garde 5 > 10 → False → skip.
• case x : matche 5, pas de garde → r = "small".

Concepts clés :
• Garde qui échoue, fallback, ordre des cases.

Distinctions clés :
• match 5 avec garde (r="small") vs match 42 avec garde (r="big").

Fonctionnement :
• case x if x>10 : x=5, 5>10 False → skip. case x : x=5 → r="small".

Exécution étape par étape :
1. case x if x>10 : x=5, 5>10 → False, skip.
2. case x : matche 5, x=5.
3. r = "small".
4. Fin.

Ordre des opérations :
• Test pattern, puis garde ; si garde False, case suivant.

Cas d'utilisation courants :
• Conditions avec fallback, validation par paliers.

Cas limites :
• match 10 : 10 > 10 False → r="small".
• match 11 : 11 > 10 True → r="big".

Considérations de performance :
• Deux tests de case pour 5.

Exemples :
• case n if n>0: ... case n: default()
• case x if cond: ... case x: fallback()

Remarques :
• Placer le case le plus restrictif (avec garde) avant le plus général.`,

  1122: `match 0: case 0 | 1: r = "binary" → r vaut "binary" : le pattern OR 0|1 matche si le sujet est 0 ou 1.

Débutant :
• 0 | 1 signifie 0 OU 1.
• Le sujet est 0 → matche.
• r = "binary".

Intermédiaire :
• Les patterns OR utilisent | pour combiner plusieurs sous-patterns.
• Le case matche si l'un des sous-patterns matche.
• | dans les patterns = OU logique (pas OU binaire).
• On peut chaîner : case 0 | 1 | 2 | 3:.

Expert :
• case 0 | 1: matche 0 (première alternative) ou 1 (deuxième).
• Toutes les alternatives doivent lier le même ensemble de variables (si capture).
• 0 matche la première alternative.

Concepts clés :
• Pattern OR, |, alternatives.

Distinctions clés :
• 0 | 1 (OR de patterns) vs 0 or 1 (opérateur logique).

Fonctionnement :
• Sujet 0 ; 0 matche l'alternative 0 → case réussit → r = "binary".

Exécution étape par étape :
1. Tester alternative 0 : 0 == 0 → True.
2. Case matche.
3. r = "binary".
4. Fin.

Ordre des opérations :
• Alternatives testées (ordre peut matter pour les captures).

Cas d'utilisation courants :
• Plusieurs valeurs traitées pareil, codes binaires.

Cas limites :
• match 1 : 1 matche l'alternative 1.
• match 2 : aucune alternative ne matche.

Considérations de performance :
• Court-circuit sur la première alternative qui matche.

Exemples :
• case 0 | 1: binary()
• case "get" | "post": http_method()

Remarques :
• | a une priorité plus basse que les autres opérateurs de pattern.`,

  1123: `match 1: case 0 | 1: r="binary" case _: r="other" → r vaut "binary" : 1 matche 0|1, case _ non atteint.

Débutant :
• 1 matche case 0 | 1 (deuxième alternative).
• r = "binary".
• case _ n'est pas exécuté.

Intermédiaire :
• Le pattern 0 | 1 matche la valeur 1 (deuxième alternative).
• Une fois un case matché, les suivants ne sont pas testés.
• Premier match gagne — l'ordre compte.

Expert :
• 1 matche l'alternative 1 dans 0 | 1.
• case _: est inatteignable pour ce sujet car case 0|1 matche avant.

Concepts clés :
• Pattern OR, premier match, ordre des cases.

Distinctions clés :
• match 1 → r="binary" ; match 5 → r="other".

Fonctionnement :
• case 0|1 : 1 matche → r = "binary". Fin.

Exécution étape par étape :
1. case 0 | 1 : 1 == 1 (deuxième alternative) → True.
2. r = "binary".
3. Fin (case _ non testé).

Ordre des opérations :
• Test des alternatives de gauche à droite.

Cas d'utilisation courants :
• Regrouper des valeurs, codes de statut.

Cas limites :
• match 0 : même case, r="binary".

Considérations de performance :
• Négligeable.

Exemples :
• case 200 | 201 | 204: success()
• case "a" | "e" | "i": vowel()

Remarques :
• Les alternatives doivent être des patterns valides.`,

  1124: `match 5: case 0 | 1: r="binary" case _: r="other" → r vaut "other" : 5 ne matche pas 0|1, case _ attrape.

Débutant :
• 5 n'est ni 0 ni 1.
• case 0 | 1 ne matche pas.
• case _ matche tout → r = "other".

Intermédiaire :
• Quand le sujet ne matche pas le pattern OR, le match continue.
• case _: attrape tout le reste.
• 5 n'est ni 0 ni 1 → case _ exécuté.

Expert :
• case 0 | 1 : 5 != 0 et 5 != 1 → pas de match.
• case _ : matche 5 → r = "other".

Concepts clés :
• Pattern OR qui échoue, joker comme fallback.

Distinctions clés :
• match 5 → r="other" ; match 0 → r="binary".

Fonctionnement :
• case 0|1 : 5 ne matche aucune alternative → skip. case _ : matche → r="other".

Exécution étape par étape :
1. case 0 | 1 : 5 == 0? Non. 5 == 1? Non. Skip.
2. case _ : matche 5.
3. r = "other".
4. Fin.

Ordre des opérations :
• Alternatives du OR testées, puis case suivant.

Cas d'utilisation courants :
• Valeurs hors ensemble connu, gestion par défaut.

Cas limites :
• match 2, 3, 4, etc. : tous → r="other".

Considérations de performance :
• Deux cases testés.

Exemples :
• case 0|1: ... case _: unknown()
• match code: case 2xx: ... case _: error()

Remarques :
• Sans case _, rien ne se passerait (exécution continue).`,

  1125: `Si aucun case ne matche et qu'il n'y a pas de case _: → rien ne se passe ; le bloc match est silencieusement ignoré.

Débutant :
• Aucun case ne matche → pas d'erreur.
• L'exécution continue après le match.
• C'est comme un if/elif sans else.

Intermédiaire :
• Pas de MatchError ni d'exception en Python.
• case _: est optionnel — c'est juste un attrape-tout.
• Les variables des patterns non matchés ne sont jamais liées.

Expert :
• Contrairement à certains langages, Python ne requiert pas de correspondance exhaustive.
• Comportement voulu : silence si aucun match.
• Bonne pratique : inclure case _: pour gérer explicitement les valeurs inattendues.

Concepts clés :
• Pas d'erreur si aucun match, exécution continue, case _ optionnel.

Distinctions clés :
• match sans case _ (silence) vs langages avec MatchError.

Fonctionnement :
• Tous les cases testés, aucun ne matche → sortie du match, suite du code.

Exécution étape par étape :
1. Tester chaque case.
2. Aucun ne matche.
3. Sortir du match sans exécuter de bloc.
4. Continuer l'exécution.

Ordre des opérations :
• Test exhaustif des cases, puis sortie.

Cas d'utilisation courants :
• Dispatch partiel, valeurs ignorées intentionnellement.

Cas limites :
• match 42: case "a": ... → rien, x reste inchangé si défini avant.

Considérations de performance :
• Tous les cases testés jusqu'au bout.

Exemples :
• match x: case 1: ...  # si x=2, rien
• match cmd: case "quit": ...  # autre commande ignorée

Remarques :
• Préférer case _: pour éviter les bugs silencieux.`,

  1126: `match ("hello", 200): case (str() as msg, 200): r = msg → r vaut "hello" : str() as msg capture "hello", 200 matche littéralement.

Débutant :
• Premier élément : str() as msg capture "hello".
• Deuxième élément : 200 matche 200.
• r = msg = "hello".

Intermédiaire :
• case (str() as msg, 200): combine pattern de classe, pattern AS et littéral.
• str() as msg : matche toute str et la capture dans msg.
• 200 : correspondance littérale.
• Le mot-clé as lie la valeur matchée à une variable.

Expert :
• Chaque élément du tuple est testé indépendamment.
• "hello" est une str → matche, msg = "hello".
• 200 == 200 → matche.
• Les deux matchent → case exécuté.

Concepts clés :
• Pattern AS, combinaison classe + littéral, capture dans tuple.

Distinctions clés :
• str() as msg (capture) vs str() (pas de capture).

Fonctionnement :
• Élément 0 : isinstance("hello", str) → msg="hello". Élément 1 : 200==200. r=msg.

Exécution étape par étape :
1. Premier élément : str() matche "hello", msg = "hello".
2. Deuxième élément : 200 == 200.
3. r = msg = "hello".
4. Fin.

Ordre des opérations :
• Éléments de gauche à droite.

Cas d'utilisation courants :
• Parsing de tuples (message, code), validation de structure.

Cas limites :
• ("hello", 404) : 404 != 200 → pas de match.
• (123, 200) : 123 n'est pas str → pas de match.

Considérations de performance :
• Négligeable.

Exemples :
• case (int() as n, str() as s): ...
• case (x, 200): success(x)

Remarques :
• as est nécessaire pour capturer avec les patterns de classe built-in.`,

  1127: `match {"type": "error", "code": 404}: case {"type": "error", "code": code}: r = code → r vaut 404 : le pattern capture la valeur de "code".

Débutant :
• "type": "error" matche littéralement.
• "code": code capture 404 dans code.
• r = "code" = 404.

Intermédiaire :
• Les patterns de mapping peuvent mélanger littéraux et capture.
• Clés avec valeur littérale : doivent matcher exactement.
• Clés avec nom de variable : capturent la valeur.
• Le sujet a "type"="error" (matche) et "code"=404 (capturé).

Expert :
• "type": "error" → correspondance littérale.
• "code": code → capture, code = 404.
• pattern puissant pour parser des données structurées (API, messages).

Concepts clés :
• Mapping pattern, littéral + capture, mix.

Distinctions clés :
• {"code": code} (capture) vs {"code": 404} (littéral).

Fonctionnement :
• "type" == "error" ✓. "code" → code = 404. r = 404.

Exécution étape par étape :
1. Vérifier "type" == "error" → True.
2. Capturer code = sujet["code"] = 404.
3. r = code = 404.
4. Fin.

Ordre des opérations :
• Vérification des clés, capture des valeurs.

Cas d'utilisation courants :
• Réponses API, parsing JSON, codes d'erreur.

Cas limites :
• {"type": "ok", "code": 404} : "type" != "error" → pas de match.

Considérations de performance :
• O(1) pour les clés.

Exemples :
• case {"status": "ok", "data": d}: ...
• case {"error": msg}: ...

Remarques :
• Les clés doivent être des littéraux dans le pattern.`,

  1128: `Oui — les classes personnalisées peuvent définir __match_args__ pour spécifier les attributs matchés positionnellement.

Débutant :
• match/case fonctionne avec des instances de classe.
• __match_args__ = ("x", "y") permet case MaClasse(a, b):.
• Les dataclasses définissent __match_args__ automatiquement.

Intermédiaire :
• __match_args__ est un tuple de noms d'attributs.
• case Point(a, b): vérifie self.x == a et self.y == b.
• Sans __match_args__, seuls les patterns par mot-clé : case Point(x=a, y=b):.
• Les types built-in (int, str) n'ont pas __match_args__.

Expert :
• dataclass génère __match_args__ = ('x', 'y') selon l'ordre des champs.
• __match_args__ mappe les positions aux noms d'attributs.
• case Point(0, 0): matche Point(0, 0) ; case Point(x, y): capture x et y.

Concepts clés :
• __match_args__, correspondance positionnelle, dataclass.

Distinctions clés :
• Avec __match_args__ (positionnel) vs sans (keyword only).

Fonctionnement :
• Python utilise __match_args__ pour savoir quels attributs comparer/capturer.

Exécution étape par étape :
1. Vérifier isinstance(sujet, Point).
2. Lire __match_args__ = ("x", "y").
3. Comparer sujet.x == premier arg, sujet.y == deuxième arg.
4. Si match, capture des attributs.

Ordre des opérations :
• Type, puis attributs selon __match_args__.

Cas d'utilisation courants :
• Objets typés, structures de données, AST.

Cas limites :
• Classe sans __match_args__ : case Point(x=a): (keyword).

Considérations de performance :
• Accès aux attributs O(1).

Exemples :
• @dataclass class Point: x: int; y: int
• match pt: case Point(0, 0): origin()

Remarques :
• Voir PEP 634 pour la sémantique complète.`,

  1129: `match [1, 2]: case [1, 2]: r="exact" case [1, *_]: r="starts with 1" → r vaut "exact" : le premier case qui matche gagne.

Débutant :
• [1, 2] matche case [1, 2] exactement.
• case [1, *_]: matcherait aussi, mais n'est jamais atteint.
• r = "exact".

Intermédiaire :
• Quand plusieurs cases pourraient matcher, le premier gagne.
• Python teste les cases de haut en bas et n'exécute que le premier match.
• Pas de fall-through. *_ capture le reste mais l'ignore (joker).

Expert :
• case [1, 2]: matche [1, 2] exactement — premier case → exécuté.
• case [1, *_]: matcherait (commence par 1) mais jamais atteint.
• Placer les patterns les plus spécifiques avant les plus généraux.

Concepts clés :
• Premier match gagne, ordre des cases, spécificité.

Distinctions clés :
• [1, 2] avant [1, *_] (r="exact") vs [1, *_] avant [1, 2] (r="starts with 1").

Fonctionnement :
• case [1, 2]: matche → r = "exact". Fin.

Exécution étape par étape :
1. case [1, 2]: longueur 2, 1==1, 2==2 → match.
2. r = "exact".
3. Fin (case [1, *_] non testé).

Ordre des opérations :
• Test séquentiel ; arrêt au premier match.

Cas d'utilisation courants :
• Dispatch par structure, précision avant généralité.

Cas limites :
• [1, 2] : first case. [1, 3] : second case.

Considérations de performance :
• Court-circuit sur premier match.

Exemples :
• case [a]: single() case [a, *r]: multi()
• case [1]: ... case [1, *_]: ...

Remarques :
• Réorganiser les cases si le mauvais match est exécuté.`,

  1130: `match [1, 3]: case [1, 2]: r="exact" case [1, *_]: r="starts with 1" → r vaut "starts with 1" : [1, 3] ne matche pas [1,2], [1,*_] matche.

Débutant :
• [1, 3] a 3 en deuxième position, pas 2.
• case [1, 2]: ne matche pas.
• case [1, *_]: matche (commence par 1) → r = "starts with 1".

Intermédiaire :
• case [1, 2]: exige exactement [1, 2] — [1, 3] a 3 ≠ 2 → échec.
• case [1, *_]: exige que la liste commence par 1 — [1, 3] commence par 1 → match.
• *_ capture [3] mais l'ignore (joker).

Expert :
• Montre pourquoi l'ordre compte : spécifique avant général.
• Le pattern plus général attrape ce que le spécifique a manqué.

Concepts clés :
• Ordre des cases, pattern spécifique vs général, *_ joker.

Distinctions clés :
• [1, 3] → case [1, *_] ; [1, 2] → case [1, 2].

Fonctionnement :
• case [1, 2]: 3 != 2 → skip. case [1, *_]: 1==1 → match. r="starts with 1".

Exécution étape par étape :
1. case [1, 2]: deuxième élément 3 != 2 → skip.
2. case [1, *_]: premier 1 == 1, *_ capture [3].
3. r = "starts with 1".
4. Fin.

Ordre des opérations :
• Test séquentiel ; pattern général en fallback.

Cas d'utilisation courants :
• Préfixe commun, validation avec fallback.

Cas limites :
• [1] : case [1, *_] matche (rest=[]).
• [2, 3] : aucun ne matche (si pas de case _).

Considérations de performance :
• Deux cases testés.

Exemples :
• case [1, 2]: exact() case [1, *_]: prefix()
• match lst: case [h, *t]: ...

Remarques :
• [1, *_] est plus général que [1, 2].`,

  1131: `L'opérateur := (morse) assigne une valeur à une variable ET renvoie cette valeur dans une seule expression.

Débutant :
• (x := 10) assigne 10 à x et vaut 10.
• Utile dans if, while, et les conditions de compréhension.
• Évite de calculer la même valeur deux fois.

Intermédiaire :
• Introduit en Python 3.8 (PEP 572).
• Surnommé « morse » car := ressemble à un morse de profil.
• Nom officiel : « assignment expression » (expression d'affectation).

Expert :
• (n := len("hello")) > 3 : assigne puis compare en une expression.
• Sans := : n = len("hello"); if n > 3: ...

Concepts clés :
• Affectation + retour, expression, PEP 572.

Distinctions clés :
• := (assignation + valeur) vs = (instruction seule).

Fonctionnement :
• Évaluer la partie droite, assigner à la variable, retourner la valeur.

Exécution étape par étape :
1. Évaluer l'expression à droite.
2. Assigner à la variable.
3. Retourner la valeur pour le contexte parent.

Ordre des opérations :
• L'expression est évaluée avant l'assignation ; l'assignation est un effet de bord.

Cas d'utilisation courants :
• Conditions avec réutilisation, boucles while, compréhensions.

Cas limites :
• := interdit dans lambda, en variable d'itération de compréhension.

Considérations de performance :
• Évite un double calcul ; utile pour les appels coûteux.

Exemples :
• if (n := len(s)) > 5: ...
• while (line := f.readline()): ...

Remarques :
• Parenthèses souvent nécessaires : (n := 10) > 5.`,

  1132: `L'opérateur morse := a été introduit en Python 3.8 (PEP 572).

Débutant :
• Python 3.8, sorti en octobre 2019.
• PEP 572 — « Assignment Expressions ».
• Un des PEP les plus controversés de l'histoire de Python.

Intermédiaire :
• Auteur : Chris Angelico, avec Guido van Rossum.
• Guido a quitté le rôle de BDFL en partie à cause de ce PEP.
• Chronologie : 3.8 (2019) := ; 3.9 (2020) |, |= ; 3.10 (2021) match/case.

Expert :
• PEP 572 — titre officiel « Assignment Expressions ».
• Le surnom « walrus » vient de := ressemblant à un morse (yeux et défenses).

Concepts clés :
• PEP 572, Python 3.8, assignment expression.

Distinctions clés :
• := (3.8) vs match/case (3.10).

Fonctionnement :
• N/A — question de version.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Vérifier la version avant d'utiliser :=.

Cas limites :
• Code < 3.8 : SyntaxError sur :=.

Considérations de performance :
• N/A.

Exemples :
• import sys; sys.version_info >= (3, 8)

Remarques :
• Toujours disponible en 3.8+.`,

  1133: `if (n := 10) > 5: r = n → r vaut 10 : := assigne 10 à n, 10 > 5 est True, r = n = 10.

Débutant :
• (n := 10) assigne 10 à n et vaut 10.
• 10 > 5 est True.
• r = n = 10.

Intermédiaire :
• := assigne et retourne en une étape.
• Les parenthèses autour de n := 10 sont requises dans ce contexte.
• n reste disponible après le if.

Expert :
• (n := 10) → n = 10, expression = 10.
• 10 > 5 → True → bloc if exécuté.
• r = n = 10.

Concepts clés :
• := dans if, assignation + comparaison, n persistant.

Distinctions clés :
• (n := 10) > 5 (r=10) vs n = 10; if n > 5 (équivalent).

Fonctionnement :
• n := 10 → n=10, valeur 10. 10 > 5 → True. r = n.

Exécution étape par étape :
1. (n := 10) : n = 10, valeur 10.
2. 10 > 5 → True.
3. r = n = 10.
4. Fin.

Ordre des opérations :
• := d'abord (assignation + valeur), puis comparaison.

Cas d'utilisation courants :
• Conditions avec réutilisation de la valeur calculée.

Cas limites :
• if (n := 0) > 5 : n=0, 0>5 False, else exécuté ; n vaut 0.

Considérations de performance :
• Un seul calcul de la valeur.

Exemples :
• if (x := get()) is not None: use(x)
• if (n := len(s)) > 5: ...

Remarques :
• n garde sa valeur après le if.`,

  1134: `if (n := 3) > 5: r="big" else: r="small" → r vaut "small" : n=3, 3>5 False, else exécuté.

Débutant :
• (n := 3) assigne 3 à n.
• 3 > 5 est False.
• Bloc else exécuté → r = "small".

Intermédiaire :
• := assigne même si la condition est False.
• n = 3 est effectué avant l'évaluation de 3 > 5.
• L'assignation est un effet de bord de l'évaluation.

Expert :
• (n := 3) → n = 3, valeur 3.
• 3 > 5 → False → else.
• r = "small". n reste 3.

Concepts clés :
• := exécuté avant le test, assignation inconditionnelle.

Distinctions clés :
• (n := 3) > 5 (r="small") vs (n := 10) > 5 (r="big").

Fonctionnement :
• n := 3 → n=3. 3 > 5 → False. else → r="small".

Exécution étape par étape :
1. (n := 3) : n = 3.
2. 3 > 5 → False.
3. else : r = "small".
4. Fin.

Ordre des opérations :
• := d'abord, puis comparaison, puis branche.

Cas d'utilisation courants :
• Valeur calculée utilisée dans les deux branches.

Cas limites :
• n est toujours assigné, même si condition False.

Considérations de performance :
• Négligeable.

Exemples :
• if (x := f()) else default(x)
• if (m := d.get(k)) is not None else ...

Remarques :
• n = 3 après l'if, même si else exécuté.`,

  1135: `Après [y := x**2 for x in range(4)], y vaut 9 : := assigne dans la portée englobante ; la dernière itération donne 3**2=9.

Débutant :
• range(4) produit 0, 1, 2, 3.
• Chaque itération : y := x**2.
• Dernière : y = 3**2 = 9.
• La liste est [0, 1, 4, 9].

Intermédiaire :
• := dans une compréhension assigne dans la portée englobante.
• Chaque itération écrase y.
• Après la compréhension, y garde la dernière valeur assignée.

Expert :
• x=0 : y=0. x=1 : y=1. x=2 : y=4. x=3 : y=9.
• La liste = [0, 1, 4, 9]. y = 9 (dernière assignation).

Concepts clés :
• := dans compréhension, portée englobante, effet de bord.

Distinctions clés :
• [y := x**2 for x in range(4)] (y=9) vs [x**2 for x in range(4)] (y non défini).

Fonctionnement :
• Pour chaque x : y = x**2, ajouter à la liste. Retourner la liste. y = dernière valeur.

Exécution étape par étape :
1. x=0 : y=0, liste=[0].
2. x=1 : y=1, liste=[0,1].
3. x=2 : y=4, liste=[0,1,4].
4. x=3 : y=9, liste=[0,1,4,9].
5. y=9 (persistant).

Ordre des opérations :
• Itération, := à chaque tour, puis ajout à la liste.

Cas d'utilisation courants :
• Réutiliser la valeur calculée après la compréhension (rare).

Cas limites :
• range(0) : y non assigné si pas d'itération (NameError possible).

Considérations de performance :
• Effet de bord ; préférer une boucle explicite si y doit être utilisé.

Exemples :
• [n := x for x in items]  # n = dernier élément
• [y := f(x) for x in data]  # y = dernier f(x)

Remarques :
• Utiliser avec prudence ; peut polluer la portée.`,

  1136: `while (line := "data") != "quit": break → line vaut "data" : := assigne "data", "data" != "quit" True, break sort immédiatement.

Débutant :
• (line := "data") assigne "data" à line.
• "data" != "quit" est True.
• Le corps s'exécute, break sort.
• line = "data" après la boucle.

Intermédiaire :
• Pattern courant pour boucles read-process.
• En pratique : while (line := input("> ")) != "quit": process(line).
• Ici break sort dès la première itération.

Expert :
• (line := "data") → line = "data", valeur "data".
• "data" != "quit" → True → corps exécuté.
• break → sortie. line reste "data".

Concepts clés :
• := dans while, assignation + test, pattern read-loop.

Distinctions clés :
• while (line := f()) != "quit": vs line = f(); while line != "quit": ...

Fonctionnement :
• line := "data" → line="data". "data" != "quit" → True. break. line="data".

Exécution étape par étape :
1. (line := "data") : line = "data".
2. "data" != "quit" → True.
3. Corps : break.
4. line = "data".

Ordre des opérations :
• := d'abord, puis comparaison, puis corps.

Cas d'utilisation courants :
• Lecture de fichier/ligne, boucles avec condition sur la valeur lue.

Cas limites :
• Si "data" == "quit", la boucle ne s'exécuterait pas (ici faux).

Considérations de performance :
• Négligeable.

Exemples :
• while (chunk := f.read(1024)): process(chunk)
• while (line := input()) != "": ...

Remarques :
• line persiste après la boucle.`,

  1137: `nums = [1,2,3,4,5]; [x for x in nums if (y := x*2) > 6] → [4, 5] : y=x*2 pour filtrage ; seuls 4 et 5 donnent y>6.

Débutant :
• x=4 : y=8, 8>6 → True, 4 inclus.
• x=5 : y=10, 10>6 → True, 5 inclus.
• x=1,2,3 : y<=6 → exclus.
• Résultat : [4, 5].

Intermédiaire :
• Le filtre calcule y := x*2 et teste y > 6.
• La sortie est x (valeur originale), pas y.
• [4, 5] car ce sont les x qui passent le filtre.

Expert :
• x=1: y=2, 2>6 False. x=2: y=4, 4>6 False. x=3: y=6, 6>6 False.
• x=4: y=8, 8>6 True. x=5: y=10, 10>6 True.
• result = [4, 5].

Concepts clés :
• := dans filtre de compréhension, sortie = x pas y.

Distinctions clés :
• [x for x in nums if (y:=x*2)>6] ([4,5]) vs [y for x in nums if (y:=x*2)>6] ([8,10]).

Fonctionnement :
• Pour chaque x : y=x*2 ; si y>6, inclure x.

Exécution étape par étape :
1. x=1 : y=2, 2>6 False.
2. x=2,3 : idem.
3. x=4 : y=8, 8>6 True → 4.
4. x=5 : y=10, 10>6 True → 5.
5. [4, 5].

Ordre des opérations :
• Itération, :=, comparaison, puis ajout de x si True.

Cas d'utilisation courants :
• Filtrer avec condition sur une valeur dérivée.

Cas limites :
• nums=[] → [].

Considérations de performance :
• Un calcul de y par x.

Exemples :
• [x for x in nums if (s:=x*2)>6]
• [x for x in data if (n:=len(x))>5]

Remarques :
• y garde la dernière valeur (effet de bord).`,

  1138: `any((n := x) > 3 for x in [1, 2, 4, 5]) → True, n vaut 4 : any() s'arrête au premier True ; (n:=4)>3 est True.

Débutant :
• x=4 : (n := 4) > 3 → 4 > 3 True.
• any() retourne True immédiatement.
• n = 4 (valeur au moment où any() s'arrête).

Intermédiaire :
• any() court-circuite — s'arrête au premier True.
• x=1,2 : (n:=1)>3, (n:=2)>3 → False.
• x=4 : (n:=4)>3 → True → any() retourne True, x=5 jamais évalué.
• n = 4.

Expert :
• (n := x) > 3 pour chaque x.
• x=1: n=1, 1>3 False. x=2: n=2, 2>3 False.
• x=4: n=4, 4>3 True → any() retourne True.
• n = 4 (dernière assignation avant le retour).

Concepts clés :
• any() court-circuit, := capture au point d'arrêt.

Distinctions clés :
• any((n:=x)>3 for x in [1,2,4,5]) (True, n=4) vs all(...) (False, n différent).

Fonctionnement :
• Itération, (n:=x)>3 ; premier True → any() retourne True, n reste 4.

Exécution étape par étape :
1. x=1 : n=1, 1>3 False.
2. x=2 : n=2, 2>3 False.
3. x=4 : n=4, 4>3 True → any() retourne True.
4. n = 4.

Ordre des opérations :
• Évaluation paresseuse ; arrêt au premier True.

Cas d'utilisation courants :
• Trouver le premier élément vérifiant une condition.

Cas limites :
• any((n:=x)>3 for x in [1,2,3]) → False, n=3 (dernier).

Considérations de performance :
• Court-circuit évite des calculs inutiles.

Exemples :
• any((m:=x) for x in items if m)
• first = next((x for x in data if (n:=pred(x))), None)

Remarques :
• n dépend du point d'arrêt de any().`,

  1139: `result = [y for x in range(5) if (y := x**2) > 5] → [9, 16] : x**2 pour x=0..4 ; seuls 9 et 16 > 5 ; sortie = y.

Débutant :
• x=3 : y=9, 9>5 → 9 inclus.
• x=4 : y=16, 16>5 → 16 inclus.
• x=0,1,2 : y<=5 → exclus.
• result = [9, 16].

Intermédiaire :
• := dans le filtre calcule y = x**2, puis teste y > 5.
• L'expression de sortie est y (pas x), donc les carrés.
• range(5) = 0,1,2,3,4 → carrés 0,1,4,9,16. Filtre : 9, 16.

Expert :
• x=0: y=0, 0>5 False. x=1: y=1, 1>5 False. x=2: y=4, 4>5 False.
• x=3: y=9, 9>5 True → 9. x=4: y=16, 16>5 True → 16.
• result = [9, 16].

Concepts clés :
• := dans filtre, sortie = valeur calculée (y).

Distinctions clés :
• [y for x in range(5) if (y:=x**2)>5] ([9,16]) vs [x for ...] ([3,4]).

Fonctionnement :
• Pour chaque x : y=x**2 ; si y>5, ajouter y à la liste.

Exécution étape par étape :
1. x=0,1,2 : y<=5, exclus.
2. x=3 : y=9, 9>5 → 9.
3. x=4 : y=16, 16>5 → 16.
4. result = [9, 16].

Ordre des opérations :
• Itération, :=, filtre, sortie y.

Cas d'utilisation courants :
• Filtrer et transformer en une expression.

Cas limites :
• range(0) → [].

Considérations de performance :
• Un calcul de x**2 par x.

Exemples :
• [len(w) for w in words if (n:=len(w))>3]
• [y for x in data if (y:=f(x))]

Remarques :
• La sortie est y (carré), pas x.`,

  1140: `(n := len(data)) > 2 quand data = [1, 2, 3] → True (n = 3) : len=3, n:=3, 3>2 True.

Débutant :
• len([1, 2, 3]) = 3.
• (n := 3) assigne 3 à n.
• 3 > 2 est True.

Intermédiaire :
• := permet de calculer, stocker et comparer en une expression.
• len(data) calculé une fois, stocké dans n, comparé à 2.
• n disponible pour usage ultérieur.

Expert :
• data = [1, 2, 3], len(data) = 3.
• (n := len(data)) → n = 3, valeur 3.
• 3 > 2 → True.
• Sans := : n = len(data); n > 2 — deux instructions.

Concepts clés :
• := pour calcul unique, réutilisation, comparaison.

Distinctions clés :
• (n := len(data)) > 2 vs n = len(data); n > 2.

Fonctionnement :
• len(data) → 3. n := 3 → n=3. 3 > 2 → True.

Exécution étape par étape :
1. len(data) = 3.
2. n := 3 → n = 3.
3. 3 > 2 → True.
4. Résultat : True.

Ordre des opérations :
• len() d'abord, :=, puis comparaison.

Cas d'utilisation courants :
• Vérifier la taille avant d'accéder.

Cas limites :
• data = [1, 2] : n=2, 2>2 False.

Considérations de performance :
• Un seul appel à len().

Exemples :
• if (n := len(items)) > 0: first = items[0]
• (n := len(s)) > 5 and process(s)

Remarques :
• n = 3 après l'expression.`,

  1141: `Non — := ne peut pas être utilisé dans une lambda ; SyntaxError.

Débutant :
• lambda x: (y := x + 1) → SyntaxError.
• C'est une interdiction volontaire de la PEP 572.

Intermédiaire :
• PEP 572 interdit explicitement := dans les lambdas.
• Les lambdas sont censées être des fonctions simples à une expression.
• := dans une lambda créerait des effets de bord, contraire aux lambdas.
• Utiliser une fonction def si assignation nécessaire.

Expert :
• Décision de conception pour éviter confusion et garder lisible.
• Les lambdas doivent rester pures et prévisibles.

Concepts clés :
• Restriction PEP 572, lambda sans effet de bord.

Distinctions clés :
• lambda x: (y:=x+1) (SyntaxError) vs def f(x): y=x+1; return y (OK).

Fonctionnement :
• Le pattern lambda est rejeté à la compilation.

Exécution étape par étape :
• N/A — erreur.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Utiliser def pour une fonction avec assignation.

Cas limites :
• Aucune exception.

Considérations de performance :
• N/A.

Exemples :
• def f(x): y = x + 1; return y
• f = lambda x: x + 1  # sans :=

Remarques :
• La restriction garde les lambdas simples.`,

  1142: `Non — x := 5 comme instruction autonome est SyntaxError. Utiliser (x := 5) ou x = 5.

Débutant :
• x := 5 seul → SyntaxError.
• (x := 5) est une expression valide.
• x = 5 est la façon normale d'assigner.

Intermédiaire :
• := est conçu pour être utilisé dans des expressions, pas comme remplacement de =.
• Un x := 5 nu sans parenthèses est SyntaxError.
• Les parenthèses forcent l'interprétation comme expression.

Expert :
• Restriction volontaire pour éviter confusion entre = et :=.
• Encourager := seulement quand la valeur retournée est utile.
• x = 5 est plus clair pour une simple assignation.

Concepts clés :
• := dans expression, pas en instruction, parenthèses.

Distinctions clés :
• x := 5 (SyntaxError) vs (x := 5) (OK) vs x = 5 (recommandé).

Fonctionnement :
• Le parseur rejette x := 5 comme instruction.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Utiliser := dans if, while, ou compréhension.

Cas limites :
• (x := 5) seul : valide mais peu utile sans utiliser la valeur.

Considérations de performance :
• N/A.

Exemples :
• if (x := get()): ...
• (x := 5)  # OK mais redondant

Remarques :
• Préférer x = 5 pour une assignation simple.`,

  1143: `if (m := {"a": 1}.get("a")) is not None: r = m → r vaut 1 : .get("a") retourne 1, m:=1, 1 is not None True, r=1.

Débutant :
• {"a": 1}.get("a") = 1.
• (m := 1) assigne 1 à m.
• 1 is not None → True.
• r = m = 1.

Intermédiaire :
• Pattern courant : capturer le résultat de .get() et vérifier None en une étape.
• Évite d'appeler .get() deux fois.
• Sans := : m = d.get("a"); if m is not None: r = m.

Expert :
• {"a": 1}.get("a") retourne 1 (clé existe).
• (m := 1) → m = 1, valeur 1.
• 1 is not None → True → bloc exécuté.
• r = m = 1.

Concepts clés :
• := avec .get(), test None, lookup optionnel.

Distinctions clés :
• .get("a") (1) vs .get("b") (None).

Fonctionnement :
• .get("a") → 1. m := 1. 1 is not None → True. r = 1.

Exécution étape par étape :
1. {"a": 1}.get("a") = 1.
2. (m := 1) → m = 1.
3. 1 is not None → True.
4. r = m = 1.

Ordre des opérations :
• .get() d'abord, :=, puis is not None.

Cas d'utilisation courants :
• Lookups optionnels dans les dicts, parsing de config.

Cas limites :
• .get("b") → None → bloc non exécuté.

Considérations de performance :
• Un seul .get().

Exemples :
• if (v := d.get(k)) is not None: use(v)
• if (x := config.get("x")): ...

Remarques :
• is not None pour distinguer 0/"" de None.`,

  1144: `if (m := {"a": 1}.get("b")) is not None: r = m else: r = "missing" → r vaut "missing" : .get("b") retourne None, else exécuté.

Débutant :
• {"a": 1}.get("b") = None (clé absente).
• (m := None) assigne None à m.
• None is not None → False.
• else : r = "missing".

Intermédiaire :
• Quand .get() ne trouve pas la clé, il retourne None par défaut.
• := capture ce None.
• Le test is not None échoue → else.

Expert :
• {"a": 1}.get("b") = None.
• (m := None) → m = None.
• None is not None → False → else.
• r = "missing".
• Pattern sûr pour clés manquantes sans try/except.

Concepts clés :
• .get() retourne None, else, gestion des clés manquantes.

Distinctions clés :
• .get("a") (r=1) vs .get("b") (r="missing").

Fonctionnement :
• .get("b") → None. m := None. None is not None → False. else → r="missing".

Exécution étape par étape :
1. .get("b") = None.
2. (m := None) → m = None.
3. None is not None → False.
4. else : r = "missing".

Ordre des opérations :
• .get(), :=, test, branche.

Cas d'utilisation courants :
• Valeur par défaut pour clé manquante.

Cas limites :
• .get("b", 0) retournerait 0, pas None.

Considérations de performance :
• Négligeable.

Exemples :
• if (m := d.get(k)) is not None: use(m) else: default()
• r = (m := d.get(k)) if m is not None else "missing"  # erreur, m pas défini

Remarques :
• Utiliser .get() avec valeur par défaut si besoin.`,

  1145: `values = [2, 8, 3, 9]; [x for x in values if (total := x) and total > 5] → [8, 9] : total:=x et total>5 ; seuls 8 et 9 passent.

Débutant :
• x=8 : total=8, 8 and 8>5 → True, 8 inclus.
• x=9 : total=9, 9 and 9>5 → True, 9 inclus.
• x=2,3 : total>5 False → exclus.
• Résultat : [8, 9].

Intermédiaire :
• Le filtre a deux conditions : (total := x) truthy ET total > 5.
• (total := x) est toujours truthy ici (valeurs non nulles).
• Si 0 était dans la liste, il serait falsy et court-circuiterait le and.

Expert :
• x=2: total=2, 2 truthy, 2>5 False → exclus.
• x=8: total=8, 8 truthy, 8>5 True → inclus.
• x=3: total=3, 3>5 False → exclus.
• x=9: total=9, 9>5 True → inclus.
• [8, 9].

Concepts clés :
• := + and, truthy, court-circuit.

Distinctions clés :
• (total:=x) and total>5 vs (total:=x)>5 (seulement comparaison).

Fonctionnement :
• Pour chaque x : total=x ; si total truthy et total>5, inclure x.

Exécution étape par étape :
1. x=2 : total=2, 2 and 2>5 → False.
2. x=8 : total=8, 8 and 8>5 → True → 8.
3. x=3 : False.
4. x=9 : True → 9.
5. [8, 9].

Ordre des opérations :
• :=, puis and (court-circuit si gauche falsy).

Cas d'utilisation courants :
• Filtrer avec condition dérivée et réutilisable.

Cas limites :
• values = [0, 5, 10] : 0 falsy → 0 exclus même si 0>5 False.

Considérations de performance :
• Négligeable.

Exemples :
• [x for x in items if (n := len(x)) and n > 5]
• [x for x in data if (t := x) and t > 0]

Remarques :
• (total := x) court-circuite si x est falsy (0, "", etc.).`,

  1146: `Le nom officiel de := dans la PEP 572 est « assignment expression » (expression d'affectation). « Walrus operator » est le surnom.

Débutant :
• Nom officiel : assignment expression.
• Surnom : walrus operator (morse).
• PEP 572.

Intermédiaire :
• PEP 572 — titre « Assignment Expressions ».
• Le surnom « walrus » vient de := ressemblant à un morse (yeux et défenses).
• Auteur : Chris Angelico. Accepté : Python 3.8 (octobre 2019).
• Le PEP a été très controversé et a contribué à la démission de Guido comme BDFL.

Expert :
• PEP 572 — syntaxe NAME := expr.
• L'expression assigne à NAME et s'évalue à la valeur assignée.
• Contexte restreints : interdit dans variable d'itération de compréhension, corps de lambda, ou instruction seule.

Concepts clés :
• PEP 572, assignment expression, walrus.

Distinctions clés :
• Nom officiel vs surnom.

Fonctionnement :
• N/A — question de terminologie.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Documentation, recherche.

Cas limites :
• N/A.

Considérations de performance :
• N/A.

Exemples :
• PEP 572 — Assignment Expressions

Remarques :
• « Walrus » est plus mémorable que « assignment expression ».`,

  1147: `s = "Hello World"; [(w, len(w)) for w in s.split() if (n := len(w)) > 4] → [("Hello", 5), ("World", 5)] : les deux mots ont len 5 > 4.

Débutant :
• s.split() = ["Hello", "World"].
• "Hello" : len 5, 5>4 → ("Hello", 5).
• "World" : len 5, 5>4 → ("World", 5).
• Résultat : [("Hello", 5), ("World", 5)].

Intermédiaire :
• := capture len(w) pour le filtre.
• L'expression de sortie utilise w et len(w) directement (n disponible mais pas utilisé dans la sortie).
• Ici := évite de calculer len(w) deux fois — une pour le filtre, une pour la sortie (mais on utilise len(w) dans la sortie, donc len est appelé une fois de plus par w ; := évite quand même un appel dans le filtre).

Expert :
• w="Hello" : n:=5, 5>4 True → ("Hello", len("Hello")) = ("Hello", 5).
• w="World" : n:=5, 5>4 True → ("World", 5).
• [("Hello", 5), ("World", 5)].
• := évite de recalculer len(w) dans le filtre.

Concepts clés :
• := dans filtre, sortie (w, len(w)), optimisation.

Distinctions clés :
• Avec := (un len dans filtre) vs sans (deux len si on filtre et affiche len).

Fonctionnement :
• Pour chaque w : n=len(w) ; si n>4, (w, len(w)).

Exécution étape par étape :
1. w="Hello" : n=5, 5>4 → ("Hello", 5).
2. w="World" : n=5, 5>4 → ("World", 5).
3. [("Hello", 5), ("World", 5)].

Ordre des opérations :
• split, itération, :=, filtre, sortie.

Cas d'utilisation courants :
• Mots longs avec leur longueur, filtrage par taille.

Cas limites :
• "Hi" : len 2, 2>4 False → exclus.
• "a" : exclus.

Considérations de performance :
• len() une fois par w dans le filtre.

Exemples :
• [(w, n) for w in words if (n := len(w)) > 3]
• [(w, len(w)) for w in s.split() if len(w) > 4]  # sans :=, len 2 fois

Remarques :
• On pourrait utiliser n dans la sortie : (w, n) pour éviter len(w) deux fois.`,

  1148: `filtered = [x for x in [1, 4, 2, 5, 3] if (y := x * 3) > 10] → [4, 5] : y=x*3 pour filtre ; x=4 (y=12) et x=5 (y=15) passent ; sortie = x.

Débutant :
• x=4 : y=12, 12>10 → 4 inclus.
• x=5 : y=15, 15>10 → 5 inclus.
• x=1,2,3 : y<=10 → exclus.
• filtered = [4, 5].

Intermédiaire :
• := calcule y = x*3 pour le filtrage.
• La sortie est x (valeur originale), pas y.
• y garde la dernière valeur (9, de x=3) après la compréhension.

Expert :
• x=1: y=3, 3>10 False. x=4: y=12, 12>10 True → 4. x=2: y=6, False. x=5: y=15, True → 5. x=3: y=9, False.
• filtered = [4, 5].

Concepts clés :
• := dans filtre, sortie = x pas y.

Distinctions clés :
• [x for x in ... if (y:=x*3)>10] ([4,5]) vs [y for ...] ([12,15]).

Fonctionnement :
• Pour chaque x : y=x*3 ; si y>10, inclure x.

Exécution étape par étape :
1. x=1 : y=3, 3>10 False.
2. x=4 : y=12, 12>10 True → 4.
3. x=2 : False.
4. x=5 : y=15, True → 5.
5. x=3 : y=9, False.
6. [4, 5].

Ordre des opérations :
• Itération, :=, filtre, sortie x.

Cas d'utilisation courants :
• Filtrer par valeur dérivée, garder l'original.

Cas limites :
• Liste vide → [].

Considérations de performance :
• Un calcul de y par x.

Exemples :
• [x for x in nums if (d:=x*2)>10]
• filtered = [x for x in data if (n:=f(x))>0]

Remarques :
• y=9 après (dernière itération x=3).`,

  1149: `import re; if (m := re.match(r"\\d+", "123abc")): r = m.group() → r vaut "123" : le match réussit, m.group() retourne "123".

Débutant :
• re.match(r"\\d+", "123abc") matche une ou plusieurs chiffres au début.
• Retourne un objet Match (truthy).
• (m := ...) assigne à m.
• m.group() = "123".

Intermédiaire :
• Un des usages les plus pratiques de :=.
• Sans := : m = re.match(...); if m: r = m.group().
• Si pas de match, re.match retourne None (falsy) → bloc if ignoré.

Expert :
• re.match(r"\\d+", "123abc") matche "123" au début.
• Retourne un objet Match (truthy).
• (m := ...) assigne le Match à m.
• m.group() retourne le texte matché : "123".

Concepts clés :
• := avec re.match, pattern pratique, Match truthy.

Distinctions clés :
• "123abc" → "123" ; "abc" → None, pas de match.

Fonctionnement :
• re.match(...) → Match. m := Match. Match truthy → r = m.group() = "123".

Exécution étape par étape :
1. re.match(r"\\d+", "123abc") → Match.
2. (m := Match) → m = Match.
3. Match truthy → bloc exécuté.
4. r = m.group() = "123".

Ordre des opérations :
• re.match, :=, test truthy, m.group().

Cas d'utilisation courants :
• Parsing de chaînes, extraction de motifs.

Cas limites :
• "abc" : re.match retourne None → bloc non exécuté.

Considérations de performance :
• Un seul appel à re.match.

Exemples :
• if (m := re.search(r"\\d+", s)): n = int(m.group())
• if (m := re.match(r"\\w+", s)): word = m.group()

Remarques :
• re.match cherche au début ; re.search cherche partout.`,

  1150: `Oui — (a := (b := 5)) : a et b valent 5. Le chaînage fonctionne : (b:=5) assigne b=5 et vaut 5, puis (a:=5) assigne a=5.

Débutant :
• (b := 5) assigne 5 à b et vaut 5.
• (a := 5) assigne 5 à a.
• a = 5, b = 5.

Intermédiaire :
• Le chaînage fonctionne par imbrication.
• L'expression intérieure est évaluée d'abord, puis son résultat pour l'extérieure.
• Chaque := doit être entre parenthèses pour un parsing correct.
• Techniquement valide mais peu lisible (rare en pratique).

Expert :
• (b := 5) exécuté en premier : b = 5, expression = 5.
• (a := 5) exécuté ensuite : a = 5.
• Les deux valent 5.
• Préférer des assignations séparées pour la clarté : b = 5; a = b.

Concepts clés :
• Chaînage de :=, imbrication, évaluation intérieure d'abord.

Distinctions clés :
• (a := (b := 5)) (a et b = 5) vs a = b = 5 (équivalent simple).

Fonctionnement :
• (b := 5) → b=5, valeur 5. (a := 5) → a=5. Valeur finale 5.

Exécution étape par étape :
1. (b := 5) : b = 5, valeur 5.
2. (a := 5) : a = 5, valeur 5.
3. a = 5, b = 5.

Ordre des opérations :
• Intérieur d'abord (b := 5), puis extérieur (a := 5).

Cas d'utilisation courants :
• Rare ; préférer a = b = 5.

Cas limites :
• (a := (b := (c := 0))) : tous valent 0.

Considérations de performance :
• Négligeable.

Exemples :
• (a := (b := 5))  # a=5, b=5
• b = 5; a = b  # plus lisible

Remarques :
• Le chaînage := est considéré peu lisible ; préférer des assignations explicites.`,
};