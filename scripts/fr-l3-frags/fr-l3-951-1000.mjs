/** Level 3 FR 951–1000 — Truthiness, if/elif/else, ternary, and/or short-circuit. Aligned with level3.ts. */
export default {
  951: `Si x=0, x est-il truthy ? → False : l'entier 0 est falsy en Python ; bool(0) vaut False.

Débutant :
• En Python, 0 est considéré comme « faux » dans un contexte booléen.
• if x: ne s'exécute pas quand x vaut 0.

Intermédiaire :
• Les valeurs falsy : 0, 0.0, '', [], {}, (), None, False.
• 0 est le seul entier falsy.

Expert :
• bool(0) appelle __bool__ sur int ; pour int, seul 0 renvoie False.
• if 0: est équivalent à if False: → le bloc ne s'exécute pas.

Concepts clés :
• Truthiness, falsiness, conversion implicite en bool.

Distinctions clés :
• 0 est falsy ; 1 et tout autre entier non nul sont truthy.

Fonctionnement :
• Python évalue x dans un contexte booléen ; 0 → False.

Exécution étape par étape :
1. Évaluer x → 0.
2. Contexte booléen : bool(0) → False.
3. Résultat : False.

Ordre des opérations :
• La conversion en bool est implicite dans if, while, and, or.

Cas d'utilisation courants :
• Vérifier une valeur non nulle : if count: (évite if count != 0).

Cas limites :
• 0.0 et 0j (complexe) sont aussi falsy.

Considérations de performance :
• Négligeable ; bool(0) est O(1).

Exemples :
• if 0: print("x")  # rien
• bool(0)  # False

Remarques :
• Utiliser « if x » pour tester la présence ; « if x != 0 » pour tester explicitement la non-nullité.`,

  952: `Si x=1, x est-il truthy ? → True : tout entier non nul est truthy ; bool(1) vaut True.

Débutant :
• 1 est considéré comme « vrai » dans un contexte booléen.
• if x: s'exécute quand x vaut 1.

Intermédiaire :
• Les entiers truthy : tout sauf 0 (1, -1, 42, etc.).
• bool(1) → True.

Expert :
• int.__bool__ renvoie False seulement pour 0.
• 1 et tout entier non nul → True.

Concepts clés :
• Truthiness des entiers, conversion implicite.

Distinctions clés :
• 1 truthy vs 0 falsy ; -1 est aussi truthy.

Fonctionnement :
• Python évalue x ; 1 est non nul → True.

Exécution étape par étape :
1. Évaluer x → 1.
2. bool(1) → True.
3. Résultat : True.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Compter des succès : if success_count: (au moins un succès).

Cas limites :
• 1.0 et 1+0j sont aussi truthy.

Considérations de performance :
• Négligeable.

Exemples :
• if 1: print("ok")  # affiche ok
• bool(-5)  # True

Remarques :
• Pour les entiers, seul 0 est falsy ; tout le reste est truthy.`,

  953: `Si x=[], bool(x) est-il True ? → False : la liste vide est falsy ; bool([]) vaut False.

Débutant :
• Une liste vide [] est considérée comme « fausse ».
• if lst: ne s'exécute pas quand lst est [].

Intermédiaire :
• Les collections vides sont falsy : [], {}, (), ''.
• bool([]) appelle list.__bool__ → False si vide.

Expert :
• list.__bool__ renvoie len(self) != 0.
• [] a une longueur 0 → __bool__ renvoie False.

Concepts clés :
• Falsiness des collections vides, __bool__.

Distinctions clés :
• [] falsy vs [1,2] truthy ; même principe pour {}, ().

Fonctionnement :
• bool([]) → len([]) != 0 → 0 != 0 → False.

Exécution étape par étape :
1. Évaluer [].
2. Appeler bool([]) → __bool__.
3. len([]) == 0 → False.

Ordre des opérations :
• bool() force la conversion explicite.

Cas d'utilisation courants :
• Vérifier qu'une liste n'est pas vide : if items: process(items).

Cas limites :
• [] et () sont falsy ; [0] et (0,) sont truthy (contenu compte pour la vérité, pas pour la longueur : en fait [0] a len 1 donc truthy).

Considérations de performance :
• O(1) pour list.__bool__ (vérifie la longueur).

Exemples :
• bool([])  # False
• if []: x = 1  # x pas assigné

Remarques :
• « if not lst » est idiomatique pour « liste vide ».`,

  954: `Si x=[1,2], x est-il truthy ? → True : une liste non vide est truthy ; bool([1,2]) vaut True.

Débutant :
• Une liste avec des éléments est « vraie ».
• if lst: s'exécute quand lst contient au moins un élément.

Intermédiaire :
• bool([1,2]) → True car len([1,2]) > 0.
• Le contenu n'est pas évalué ; seule la longueur compte.

Expert :
• list.__bool__ : len(self) != 0.
• [1,2] a longueur 2 → truthy.

Concepts clés :
• Truthiness des collections non vides.

Distinctions clés :
• [1,2] truthy vs [] falsy ; [0] et [False] sont aussi truthy (longueur > 0).

Fonctionnement :
• Python évalue [1,2] ; len > 0 → True.

Exécution étape par étape :
1. Évaluer [1,2].
2. __bool__ → len != 0.
3. Renvoyer True.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Vérifier qu'une liste a des éléments : if results: display(results).

Cas limites :
• [None], [0], [False] sont tous truthy (liste non vide).

Considérations de performance :
• O(1) ; pas de parcours des éléments.

Exemples :
• bool([1])  # True
• if [1,2,3]: pass  # s'exécute

Remarques :
• Pour les listes, la vérité dépend de la longueur, pas des valeurs des éléments.`,

  955: `Si x="", x est-il truthy ? → False : la chaîne vide est falsy ; bool("") vaut False.

Débutant :
• Une chaîne vide "" est « fausse ».
• if s: ne s'exécute pas quand s vaut "".

Intermédiaire :
• str.__bool__ : len(self) != 0.
• "" a longueur 0 → False.

Expert :
• La chaîne vide est l'unique chaîne falsy.
• Toute chaîne non vide (même " ") est truthy.

Concepts clés :
• Falsiness de la chaîne vide.

Distinctions clés :
• "" falsy vs "hello" truthy ; " " (espace) est truthy.

Fonctionnement :
• bool("") → len("") != 0 → False.

Exécution étape par étape :
1. Évaluer "".
2. __bool__ → len == 0.
3. Renvoyer False.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Vérifier une entrée non vide : if user_input: process(user_input).

Cas limites :
• "" in "abc" → True (sous-chaîne vide) ; mais bool("") → False.

Considérations de performance :
• O(1).

Exemples :
• bool("")  # False
• "" or "default"  # "default"

Remarques :
• « if not s » teste « chaîne vide » ; « if s » teste « chaîne non vide ».`,

  956: `Si x="hello", x est-il truthy ? → True : toute chaîne non vide est truthy ; bool("hello") vaut True.

Débutant :
• Une chaîne avec des caractères est « vraie ».
• if s: s'exécute quand s contient au moins un caractère.

Intermédiaire :
• str.__bool__ : len(self) != 0.
• "hello" a longueur 5 → True.

Expert :
• Toute chaîne de longueur > 0 est truthy.
• " ", "\t", "0" sont tous truthy.

Concepts clés :
• Truthiness des chaînes non vides.

Distinctions clés :
• "hello" truthy vs "" falsy.

Fonctionnement :
• bool("hello") → len > 0 → True.

Exécution étape par étape :
1. Évaluer "hello".
2. __bool__ → len != 0.
3. Renvoyer True.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Valider une entrée : if name: save(name).

Cas limites :
• "0" et "False" sont truthy (ce sont des chaînes non vides).

Considérations de performance :
• O(1).

Exemples :
• bool("x")  # True
• "hello" and "world"  # "world"

Remarques :
• Ne pas confondre la chaîne "False" (truthy) avec le booléen False.`,

  957: `Si x=None, x est-il truthy ? → False : None est falsy ; bool(None) vaut False.

Débutant :
• None signifie « aucune valeur » et est « faux ».
• if x: ne s'exécute pas quand x vaut None.

Intermédiaire :
• None est un singleton falsy.
• Équivalent à « pas de valeur » ou « absent ».

Expert :
• NoneType.__bool__ n'existe pas ; Python utilise __len__ ou par défaut False.
• None est toujours falsy.

Concepts clés :
• None, singleton, falsiness.

Distinctions clés :
• None falsy vs tout objet « présent » truthy ; None != 0 et None != "".

Fonctionnement :
• bool(None) → False.

Exécution étape par étape :
1. Évaluer None.
2. Contexte booléen → False.
3. Résultat : False.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Vérifier une valeur optionnelle : if result is not None (préférer is pour None).

Cas limites :
• None or "default" → "default" ; None and x → None.

Considérations de performance :
• Négligeable.

Exemples :
• bool(None)  # False
• if None: x = 1  # x pas assigné

Remarques :
• Pour tester None, utiliser « if x is None » (pas « if not x » qui inclut 0, "", []).`,

  958: `Si x={}, x est-il truthy ? → False : le dictionnaire vide est falsy ; bool({}) vaut False.

Débutant :
• Un dictionnaire vide {} est « faux ».
• if d: ne s'exécute pas quand d est {}.

Intermédiaire :
• dict.__bool__ : len(self) != 0.
• {} a longueur 0 → False.

Expert :
• Même logique que [] et "" : collection vide = falsy.
• {1:2} a une entrée → truthy.

Concepts clés :
• Falsiness du dict vide.

Distinctions clés :
• {} falsy vs {1:2} truthy.

Fonctionnement :
• bool({}) → len({}) != 0 → False.

Exécution étape par étape :
1. Évaluer {}.
2. __bool__ → len == 0.
3. Renvoyer False.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Vérifier qu'un dict a des clés : if config: apply(config).

Cas limites :
• {} et set() sont falsy ; {0: 0} est truthy.

Considérations de performance :
• O(1).

Exemples :
• bool({})  # False
• {} or {"default": 1}  # {"default": 1}

Remarques :
• Les dicts et sets vides sont falsy ; les non vides sont truthy.`,

  959: `Si x={1:2}, x est-il truthy ? → True : un dictionnaire non vide est truthy ; bool({1:2}) vaut True.

Débutant :
• Un dictionnaire avec au moins une paire clé-valeur est « vrai ».
• if d: s'exécute quand d contient des entrées.

Intermédiaire :
• dict.__bool__ : len(self) != 0.
• {1:2} a une entrée → True.

Expert :
• La vérité du dict dépend du nombre d'entrées, pas des valeurs.
• {0: 0}, {None: None} sont truthy.

Concepts clés :
• Truthiness des dicts non vides.

Distinctions clés :
• {1:2} truthy vs {} falsy.

Fonctionnement :
• bool({1:2}) → len > 0 → True.

Exécution étape par étape :
1. Évaluer {1:2}.
2. __bool__ → len != 0.
3. Renvoyer True.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Vérifier qu'un dict a des options : if options: merge(options).

Cas limites :
• dict.fromkeys([1,2,3]) → {1: None, 2: None, 3: None} truthy (3 entrées).

Considérations de performance :
• O(1).

Exemples :
• bool({1: 1})  # True
• {1:2} and {3:4}  # {3:4}

Remarques :
• Même principe que pour les listes : longueur > 0 → truthy.`,

  960: `Si x=(), x est-il truthy ? → False : le tuple vide est falsy ; bool(()) vaut False.

Débutant :
• Un tuple vide () est « faux ».
• if t: ne s'exécute pas quand t est ().

Intermédiaire :
• tuple.__bool__ : len(self) != 0.
• () a longueur 0 → False.

Expert :
• Les tuples vides sont falsy, comme [], {}, "".
• (1,) et (0,) sont truthy (longueur > 0).

Concepts clés :
• Falsiness du tuple vide.

Distinctions clés :
• () falsy vs (1,2) truthy ; attention : (1) est un int, pas un tuple.

Fonctionnement :
• bool(()) → len(()) != 0 → False.

Exécution étape par étape :
1. Évaluer ().
2. __bool__ → len == 0.
3. Renvoyer False.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Vérifier un tuple non vide : if coords: plot(coords).

Cas limites :
• () et (None,) : le premier falsy, le second truthy.

Considérations de performance :
• O(1).

Exemples :
• bool(())  # False
• () or (1,)  # (1,)

Remarques :
• Toutes les séquences vides (list, tuple, str) sont falsy.`,

  961: `Quel mot-clé relie if et else ? → else : else est la branche alternative quand la condition if est fausse.

Débutant :
• else signifie « sinon ».
• Si la condition du if est fausse, le bloc else s'exécute.

Intermédiaire :
• if condition: ... else: ... : deux branches mutuellement exclusives.
• Une seule des deux s'exécute.

Expert :
• else ne prend pas de condition ; il capte tout ce que if et elif n'ont pas pris.
• Syntaxe : else: (deux-points obligatoires, pas de condition).

Concepts clés :
• Branchement conditionnel, else, mutuellement exclusif.

Distinctions clés :
• else vs elif : else n'a pas de condition ; elif en a une.

Fonctionnement :
• Si if (et tous les elif) sont faux, else s'exécute.

Exécution étape par étape :
1. Évaluer la condition du if.
2. Si True → exécuter le bloc if, fin.
3. Sinon, tester les elif (s'il y en a).
4. Si tous faux → exécuter le bloc else.

Ordre des opérations :
• if, puis elif (de gauche à droite), puis else.

Cas d'utilisation courants :
• Deux cas : if valid: accept() else: reject().

Cas limites :
• if sans else : rien ne s'exécute si la condition est fausse.

Considérations de performance :
• Une seule branche exécutée.

Exemples :
• if x > 0: sign = 1
  else: sign = -1

Remarques :
• else est optionnel ; on peut avoir if seul.`,

  962: `Peut-on avoir if sans else ? → Yes : else est optionnel ; un if seul est valide.

Débutant :
• On peut écrire if condition: bloc sans else.
• Si la condition est fausse, rien ne s'exécute.

Intermédiaire :
• Structure minimale : if cond: ...
• Pas d'obligation d'avoir une branche alternative.

Expert :
• La grammaire Python permet if sans else.
• C'est très courant pour des vérifications guard : if not valid: return.

Concepts clés :
• if optionnel, branche unique, guard clause.

Distinctions clés :
• if seul vs if/else : le premier peut ne rien faire ; le second fait toujours une des deux branches.

Fonctionnement :
• Si condition True → exécuter le bloc ; sinon, passer à la suite.

Exécution étape par étape :
1. Évaluer la condition.
2. Si True → exécuter le bloc.
3. Si False → continuer après le bloc (rien dans le if).

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Guard : if error: return None.
• Vérification : if x in allowed: process(x).

Cas limites :
• if 0: x = 1  # x jamais assigné.

Considérations de performance :
• Pas de surcoût ; une seule évaluation.

Exemples :
• if found: print("ok")
• if not data: return

Remarques :
• Les guard clauses (if cond: return) évitent l'imbrication.`,

  963: `Peut-on avoir plusieurs elif ? → Yes : on peut enchaîner autant de elif qu'on veut entre if et else.

Débutant :
• elif signifie « sinon si ».
• On peut en avoir plusieurs : if ... elif ... elif ... else.

Intermédiaire :
• Chaque elif a sa propre condition.
• Python teste de haut en bas ; le premier vrai gagne.

Expert :
• Structure : if cond1: ... elif cond2: ... elif cond3: ... else: ...
• Une seule branche s'exécute (la première dont la condition est True).

Concepts clés :
• Chaîne de conditions, elif, évaluation séquentielle.

Distinctions clés :
• elif vs plusieurs if : elif arrête au premier vrai ; plusieurs if testent tous.

Fonctionnement :
• Tester if ; si faux, tester elif 1 ; si faux, elif 2 ; etc. ; sinon else.

Exécution étape par étape :
1. Évaluer cond1 ; si True → bloc if, fin.
2. Évaluer cond2 ; si True → bloc elif 1, fin.
3. Répéter pour chaque elif.
4. Si toutes fausses → bloc else (s'il existe).

Ordre des opérations :
• De haut en bas, court-circuit : premier vrai arrête.

Cas d'utilisation courants :
• Menu à plusieurs choix : if c == 'a': ... elif c == 'b': ... elif c == 'c': ...

Cas limites :
• Tous les elif peuvent être faux ; alors else s'exécute (ou rien si pas de else).

Considérations de performance :
• Court-circuit : on s'arrête au premier vrai.

Exemples :
• if x < 0: "neg"
  elif x == 0: "zero"
  elif x > 0: "pos"

Remarques :
• elif évite d'imbriquer des if/else.`,

  964: `Que se passe-t-il si tous les if/elif sont faux ? → else s'exécute : else est la branche par défaut.

Débutant :
• Si aucune condition (if, elif) n'est vraie, c'est le bloc else qui s'exécute.
• else « attrape » tous les cas restants.

Intermédiaire :
• else n'a pas de condition ; il s'exécute quand tout le reste est faux.
• C'est la branche « par défaut » ou « fallback ».

Expert :
• Sémantique : else = « dans tous les autres cas ».
• Si if et tous les elif sont False, else est la seule option restante.

Concepts clés :
• Branche par défaut, exhaustivité, fallback.

Distinctions clés :
• Avec else : une branche s'exécute toujours. Sans else : aucune branche peut s'exécuter.

Fonctionnement :
• Après avoir évalué if et tous les elif, si tous faux → else.

Exécution étape par étape :
1. if False, elif1 False, ..., elifN False.
2. Aucune branche conditionnelle prise.
3. Exécuter le bloc else.

Ordre des opérations :
• else est évalué en dernier (après tous les elif).

Cas d'utilisation courants :
• Gestion d'erreur : if success: ... else: handle_error().

Cas limites :
• if False: ... elif False: ... else: ... → seul else s'exécute.

Considérations de performance :
• else n'a pas de condition à évaluer ; exécution directe.

Exemples :
• if x > 0: "pos"
  elif x < 0: "neg"
  else: "zero"  # x == 0

Remarques :
• else garantit qu'au moins une branche s'exécute.`,

  965: `Que se passe-t-il s'il n'y a pas de else et que tout est faux ? → Rien : aucune branche ne s'exécute.

Débutant :
• Sans else, si toutes les conditions sont fausses, aucun bloc ne s'exécute.
• Le programme continue après le if/elif.

Intermédiaire :
• Pas de branche « par défaut » → possibilité qu'aucune action ne soit faite.
• Le flux continue à la ligne suivante après la structure if.

Expert :
• Comportement : si if et tous les elif sont False, Python saute toute la structure et continue.
• Aucune erreur ; simplement aucune branche exécutée.

Concepts clés :
• Absence de else, possibilité de « skip », flux de contrôle.

Distinctions clés :
• Avec else : toujours une branche. Sans else : possible qu'aucune ne s'exécute.

Fonctionnement :
• Toutes les conditions False → sauter la structure entière.

Exécution étape par étape :
1. if False, elif1 False, ..., elifN False.
2. Aucune branche exécutée.
3. Reprendre après le dernier bloc.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Filtrage : if x in allowed: process(x)  # sinon ne rien faire.

Cas limites :
• if 0: ... elif None: ...  # rien ne s'exécute.

Considérations de performance :
• Les conditions sont évaluées jusqu'au premier vrai ou jusqu'à la fin.

Exemples :
• if False: x = 1  # x pas assigné
• if x > 10: ...  # si x <= 10, rien

Remarques :
• C'est voulu : parfois on ne veut agir que dans certains cas.`,

  966: `Quel opérateur vérifie l'inégalité ? → != : != teste si deux valeurs sont différentes.

Débutant :
• != signifie « différent de » ou « pas égal à ».
• 5 != 3 → True car 5 et 3 sont différents.

Intermédiaire :
• != est la négation de ==.
• a != b équivaut à not (a == b).

Expert :
• != appelle __ne__ ; par défaut délégué à not (a == b) si __ne__ non défini.
• Renvoie toujours un bool.

Concepts clés :
• Inégalité, opérateur de comparaison, __ne__.

Distinctions clés :
• != (valeur) vs is not (identité).

Fonctionnement :
• Comparer les valeurs ; si différentes → True, sinon False.

Exécution étape par étape :
1. Évaluer a et b.
2. Tester a == b.
3. Renvoyer not (résultat).

Ordre des opérations :
• Même priorité que ==, <, >, etc.

Cas d'utilisation courants :
• Exclure une valeur : if x != 0.
• Valider : if input != "".

Cas limites :
• 1 != 1.0 → False (valeurs égales) ; "a" != "A" → True.

Considérations de performance :
• Négligeable pour les types built-in.

Exemples :
• 5 != 3  # True
• "x" != "x"  # False

Remarques :
• != est préféré à <> (obsolète en Python 3).`,

  967: `Quel opérateur vérifie l'identité ? → is : is teste si deux références pointent vers le même objet.

Débutant :
• is signifie « est le même objet que ».
• Compare les identités (adresses mémoire), pas les valeurs.

Intermédiaire :
• is compare id(a) et id(b).
• Pour None, True, False : toujours utiliser is (pas ==).

Expert :
• is ne peut pas être surchargé ; c'est une comparaison de pointeurs.
• a is b équivaut à id(a) == id(b).

Concepts clés :
• Identité d'objet, is, id().

Distinctions clés :
• is (identité) vs == (valeur) : [1,2] is [1,2] → False ; [1,2] == [1,2] → True.

Fonctionnement :
• Comparer les adresses mémoire des deux objets.

Exécution étape par étape :
1. Évaluer a et b.
2. Obtenir id(a) et id(b).
3. Renvoyer True si égaux, sinon False.

Ordre des opérations :
• Priorité comme ==.

Cas d'utilisation courants :
• Vérifier None : if x is None.
• Sentinelle : if result is MISSING.

Cas limites :
• 5 is 5 peut être True (interning) ; 257 is 257 peut être False.

Considérations de performance :
• O(1), plus rapide que == (pas d'appel __eq__).

Exemples :
• None is None  # True
• [] is []  # False

Remarques :
• Pour None, True, False : utiliser is. Pour le reste : préférer ==.`,

  968: `Syntaxe pour if ? → if condition: : le mot-clé if suivi d'une condition et d'un deux-points.

Débutant :
• if condition: suivi d'un bloc indenté.
• La condition peut être toute expression évaluée en bool.

Intermédiaire :
• Obligatoire : deux-points après la condition, indentation du bloc.
• if x > 0: ou if lst: ou if cond1 and cond2:.

Expert :
• Grammaire : if_test ":" suite ; la suite doit être indentée.
• La condition est évaluée ; si truthy, le bloc s'exécute.

Concepts clés :
• Syntaxe if, indentation, deux-points.

Distinctions clés :
• if cond: (correct) vs if cond (sans :, erreur de syntaxe).

Fonctionnement :
• Évaluer la condition ; si True, exécuter le bloc indenté.

Exécution étape par étape :
1. Évaluer condition.
2. Si truthy → entrer dans le bloc.
3. Exécuter les instructions indentées.

Ordre des opérations :
• La condition est évaluée en premier.

Cas d'utilisation courants :
• Branchement : if age >= 18: allow_access().

Cas limites :
• if 1: toujours exécuté ; if 0: jamais.

Considérations de performance :
• Une évaluation, une branche.

Exemples :
• if x > 0:
    print("positive")
• if lst:
    process(lst)

Remarques :
• L'indentation définit le bloc ; pas d'accolades comme en C/Java.`,

  969: `Syntaxe pour else ? → else: : le mot-clé else suivi d'un deux-points, sans condition.

Débutant :
• else: suivi d'un bloc indenté.
• Pas de condition après else.

Intermédiaire :
• else doit suivre un if ou un elif.
• Structure : if ... : ... else: ...

Expert :
• else: seul ; on ne peut pas écrire else cond:.
• La branche else est prise quand if et tous les elif sont faux.

Concepts clés :
• Syntaxe else, pas de condition, branche alternative.

Distinctions clés :
• else: (correct) vs else cond: (incorrect, erreur de syntaxe).

Fonctionnement :
• Si aucune condition précédente n'est vraie, exécuter le bloc else.

Exécution étape par étape :
1. Après avoir évalué if et elif.
2. Si tous faux → exécuter le bloc else.
3. Le bloc else est indenté sous else:.

Ordre des opérations :
• else est évalué en dernier dans la chaîne if/elif/else.

Cas d'utilisation courants :
• Cas par défaut : if valid: ... else: handle_invalid().

Cas limites :
• else sans if → erreur de syntaxe.

Considérations de performance :
• Pas de condition à évaluer pour else.

Exemples :
• if x: a()
  else: b()
• if n > 0: "pos"
  else: "non-pos"

Remarques :
• else est optionnel ; on peut avoir if sans else.`,

  970: `Syntaxe pour elif ? → elif condition: : elif suivi d'une condition et d'un deux-points.

Débutant :
• elif condition: suivi d'un bloc indenté.
• elif = « sinon si » ; a sa propre condition.

Intermédiaire :
• elif doit suivre un if (ou un autre elif).
• On peut enchaîner plusieurs elif.

Expert :
• Grammaire : elif_test ":" suite ; même structure qu'un if.
• Chaque elif a une condition évaluée séquentiellement.

Concepts clés :
• Syntaxe elif, condition supplémentaire, chaînage.

Distinctions clés :
• elif cond: (condition) vs else: (pas de condition).

Fonctionnement :
• Si le if (et les elif précédents) sont faux, évaluer la condition de ce elif.

Exécution étape par étape :
1. if faux → évaluer condition du premier elif.
2. Si vrai → exécuter son bloc, fin.
3. Sinon, passer au elif suivant ou à else.

Ordre des opérations :
• elif évalués de haut en bas après le if.

Cas d'utilisation courants :
• Choix multiples : if x == 1: ... elif x == 2: ... elif x == 3: ...

Cas limites :
• elif sans if → erreur de syntaxe.

Considérations de performance :
• Court-circuit : premier vrai arrête.

Exemples :
• if x < 0: "neg"
  elif x == 0: "zero"
  elif x > 0: "pos"

Remarques :
• elif évite l'imbrication de if/else.`,

  971: `5 if 5>3 else 3 vaut 5 : la condition 5>3 est True, donc l'expression renvoie la valeur du « if » (5).

Débutant :
• Forme ternaire : valeur_si_vrai if condition else valeur_si_faux.
• 5 > 3 est vrai → on prend 5.

Intermédiaire :
• L'opérateur ternaire : x if cond else y.
• Seule une des deux branches est évaluée.

Expert :
• Priorité : condition évaluée en premier ; selon le résultat, une des deux valeurs.
• 5 if True else 3 → 5 (la branche else n'est pas évaluée).

Concepts clés :
• Expression conditionnelle, opérateur ternaire, évaluation paresseuse.

Distinctions clés :
• 5 if 5>3 else 3 (→ 5) vs 3 if 5>3 else 5 (→ 3 aussi car 5>3 vrai... non, ce serait 3 car on prend la branche du milieu : 3 if 5>3 else 5 → condition True → branche du milieu = 3. En fait x if cond else y : si cond vrai → x, sinon y. Donc 3 if 5>3 else 5 → 3. Et 5 if 5>3 else 3 → 5. Correct.)

Fonctionnement :
• 5 > 3 → True ; prendre la valeur avant else → 5.

Exécution étape par étape :
1. Évaluer 5 > 3 → True.
2. Condition True → renvoyer la valeur de gauche (5).
3. La branche else (3) n'est pas évaluée.

Ordre des opérations :
• Condition d'abord, puis une des deux branches.

Cas d'utilisation courants :
• Valeur conditionnelle : max_val = a if a > b else b.

Cas limites :
• Les deux branches peuvent avoir des effets de bord ; seule celle choisie s'exécute.

Considérations de performance :
• Une seule branche évaluée (court-circuit).

Exemples :
• 10 if 10 > 5 else 5  # 10
• "yes" if True else "no"  # "yes"

Remarques :
• Plus lisible que (5, 3)[5<=3] pour un choix binaire.`,

  972: `3 if 3>5 else 5 vaut 5 : la condition 3>5 est False, donc l'expression renvoie la valeur du « else » (5).

Débutant :
• 3 > 5 est faux → on prend la branche else → 5.
• La valeur « if » (3) n'est pas retenue.

Intermédiaire :
• Condition False → la branche else est évaluée et renvoyée.
• 3 n'est jamais utilisé dans le résultat.

Expert :
• 3 if False else 5 → évalue 5, renvoie 5.
• La branche « if » (3) n'est pas évaluée quand la condition est fausse.

Concepts clés :
• Ternaire, branche else, condition fausse.

Distinctions clés :
• 3 if 3>5 else 5 (→ 5) vs 5 if 3>5 else 3 (→ 3).

Fonctionnement :
• 3 > 5 → False ; prendre la valeur après else → 5.

Exécution étape par étape :
1. Évaluer 3 > 5 → False.
2. Condition False → renvoyer la valeur de droite (5).
3. La branche if (3) n'est pas évaluée.

Ordre des opérations :
• Condition d'abord, puis else.

Cas d'utilisation courants :
• Min/Max : smaller = a if a < b else b.

Cas limites :
• 0 if False else 1 → 1 ; les deux branches peuvent être de types différents.

Considérations de performance :
• Seule la branche else est évaluée.

Exemples :
• 1 if 1 > 2 else 2  # 2
• "no" if False else "yes"  # "yes"

Remarques :
• Équivalent à : if 3 > 5: 3 else: 5, mais en expression.`,

  973: `'yes' if True else 'no' vaut 'yes' : la condition True fait choisir la branche « if » ('yes').

Débutant :
• True est toujours vrai → on prend 'yes'.
• La branche else n'est pas utilisée.

Intermédiaire :
• Condition constante True → résultat prévisible.
• 'no' n'est jamais évalué.

Expert :
• True if True else x → toujours la première valeur.
• Utile pour des constantes ou des tests.

Concepts clés :
• Ternaire avec condition constante, court-circuit.

Distinctions clés :
• 'yes' if True else 'no' (→ 'yes') vs 'yes' if False else 'no' (→ 'no').

Fonctionnement :
• True → prendre 'yes', ignorer 'no'.

Exécution étape par étape :
1. Évaluer True → truthy.
2. Renvoyer 'yes'.
3. 'no' non évalué.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Valeur par défaut conditionnelle : msg = "ok" if success else "error".

Cas limites :
• Si la branche non prise a un effet de bord, il ne s'exécute pas.

Considérations de performance :
• 'no' jamais évalué.

Exemples :
• "a" if True else "b"  # "a"
• 1 if True else 0  # 1

Remarques :
• Avec True/False constants, le résultat est déterministe.`,

  974: `'yes' if False else 'no' vaut 'no' : la condition False fait choisir la branche « else » ('no').

Débutant :
• False est toujours faux → on prend 'no'.
• La branche « if » ('yes') n'est pas utilisée.

Intermédiaire :
• Condition constante False → toujours la branche else.
• 'yes' n'est jamais évalué.

Expert :
• False if False else y → toujours y (la branche else).
• Équivalent à écrire directement 'no'.

Concepts clés :
• Ternaire avec condition fausse, branche else.

Distinctions clés :
• 'yes' if False else 'no' (→ 'no') vs 'yes' if True else 'no' (→ 'yes').

Fonctionnement :
• False → prendre 'no', ignorer 'yes'.

Exécution étape par étape :
1. Évaluer False → falsy.
2. Renvoyer 'no'.
3. 'yes' non évalué.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Message d'erreur : result = "done" if ok else "failed".

Cas limites :
• Si 'yes' était un appel de fonction, il ne s'exécuterait pas.

Considérations de performance :
• 'yes' jamais évalué.

Exemples :
• "a" if False else "b"  # "b"
• 0 if False else 1  # 1

Remarques :
• Symétrique de la question 973.`,

  975: `max(5,3) if 5>3 else min(5,3) vaut 5 : 5>3 est True, donc on évalue max(5,3)=5 ; min n'est pas appelé.

Débutant :
• 5 > 3 est vrai → on prend max(5,3) = 5.
• min(5,3) n'est pas exécuté (court-circuit).

Intermédiaire :
• La branche else peut contenir des appels de fonction.
• Seule la branche choisie est évaluée ; min n'est jamais appelé.

Expert :
• 5 > 3 → True ; évaluer max(5,3) → 5.
• min(5,3) ne s'exécute pas ; économie d'un appel de fonction.

Concepts clés :
• Ternaire avec appels de fonction, court-circuit, évaluation paresseuse.

Distinctions clés :
• Ici max est évalué ; si 5 < 3, ce serait min qui serait évalué.

Fonctionnement :
• 5 > 3 → True ; exécuter max(5,3) → 5.

Exécution étape par étape :
1. Évaluer 5 > 3 → True.
2. Évaluer max(5,3) → 5.
3. Renvoyer 5 ; min(5,3) non exécuté.

Ordre des opérations :
• Condition, puis une branche uniquement.

Cas d'utilisation courants :
• Choisir une opération : x = compute_a() if use_a else compute_b().

Cas limites :
• Si min avait des effets de bord, ils ne se produiraient pas.

Considérations de performance :
• Un seul appel (max) ; min évité.

Exemples :
• max(1,2) if 1<2 else min(1,2)  # 2
• len([1,2,3]) if True else len([])  # 3

Remarques :
• Le ternaire évite d'évaluer la branche non prise.`,

  976: `'even' if 4%2==0 else 'odd' vaut 'even' : 4%2 vaut 0, donc 0==0 est True → 'even'.

Débutant :
• 4 % 2 = 0 (reste de la division).
• 0 == 0 est vrai → nombre pair → 'even'.

Intermédiaire :
• Tester la parité : n % 2 == 0 pour pair.
• Condition True → 'even'.

Expert :
• 4 % 2 → 0 ; 0 == 0 → True.
• Branche if choisie → 'even'.

Concepts clés :
• Parité, modulo, ternaire.

Distinctions clés :
• 4%2==0 (True, pair) vs 5%2==0 (False, impair).

Fonctionnement :
• 4 % 2 = 0 ; 0 == 0 → True ; renvoyer 'even'.

Exécution étape par étape :
1. 4 % 2 → 0.
2. 0 == 0 → True.
3. Renvoyer 'even'.

Ordre des opérations :
• % avant == ; == avant if/else.

Cas d'utilisation courants :
• Étiquette de parité : label = "even" if n % 2 == 0 else "odd".

Cas limites :
• 0 % 2 == 0 → True (0 est pair).

Considérations de performance :
• Modulo et comparaison sont O(1).

Exemples :
• 6 % 2 == 0  # True
• 8 % 2 == 0  # True

Remarques :
• n % 2 == 0 est le test standard pour « pair » en Python.`,

  977: `'even' if 5%2==0 else 'odd' vaut 'odd' : 5%2 vaut 1, donc 1==0 est False → 'odd'.

Débutant :
• 5 % 2 = 1 (reste non nul).
• 1 == 0 est faux → nombre impair → 'odd'.

Intermédiaire :
• 5 % 2 != 0 → impair.
• Condition False → branche else → 'odd'.

Expert :
• 5 % 2 → 1 ; 1 == 0 → False.
• Branche else choisie → 'odd'.

Concepts clés :
• Imparité, modulo, ternaire.

Distinctions clés :
• 5%2==0 (False) vs 4%2==0 (True).

Fonctionnement :
• 5 % 2 = 1 ; 1 == 0 → False ; renvoyer 'odd'.

Exécution étape par étape :
1. 5 % 2 → 1.
2. 1 == 0 → False.
3. Renvoyer 'odd'.

Ordre des opérations :
• % avant == ; == avant if/else.

Cas d'utilisation courants :
• Même pattern que 976 pour les impairs.

Cas limites :
• -1 % 2 → 1 en Python (reste positif).

Considérations de performance :
• Négligeable.

Exemples :
• 7 % 2 == 0  # False
• 3 % 2  # 1

Remarques :
• Pour impair, on peut aussi écrire n % 2 != 0 ou n % 2.`,

  978: `'positive' if 5>0 else 'non-positive' vaut 'positive' : 5>0 est True → 'positive'.

Débutant :
• 5 est supérieur à 0 → positif.
• Condition vraie → branche if.

Intermédiaire :
• Test de signe : x > 0 pour strictement positif.
• 5 > 0 → True → 'positive'.

Expert :
• Comparaison numérique simple.
• « non-positive » inclut 0 et les négatifs.

Concepts clés :
• Signe, comparaison, ternaire.

Distinctions clés :
• 5>0 (True) vs -5>0 (False).

Fonctionnement :
• 5 > 0 → True ; renvoyer 'positive'.

Exécution étape par étape :
1. Évaluer 5 > 0 → True.
2. Condition True → 'positive'.
3. Renvoyer 'positive'.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Étiquetage de signe : sign = "pos" if x > 0 else "non-pos".

Cas limites :
• 0 > 0 → False → 'non-positive' (0 n'est pas positif).

Considérations de performance :
• Négligeable.

Exemples :
• 10 > 0  # True
• 0.1 > 0  # True

Remarques :
• « non-positive » = 0 ou négatif ; « negative » = strictement < 0.`,

  979: `'positive' if -5>0 else 'non-positive' vaut 'non-positive' : -5>0 est False → 'non-positive'.

Débutant :
• -5 n'est pas supérieur à 0.
• Condition fausse → branche else → 'non-positive'.

Intermédiaire :
• -5 > 0 → False.
• « non-positive » couvre 0 et les négatifs ; -5 est négatif.

Expert :
• Comparaison : -5 n'est pas > 0.
• Branche else exécutée → 'non-positive'.

Concepts clés :
• Négatif, comparaison, ternaire.

Distinctions clés :
• -5>0 (False) vs 5>0 (True).

Fonctionnement :
• -5 > 0 → False ; renvoyer 'non-positive'.

Exécution étape par étape :
1. Évaluer -5 > 0 → False.
2. Condition False → 'non-positive'.
3. Renvoyer 'non-positive'.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Classer des nombres : label = "pos" if x > 0 else "non-pos".

Cas limites :
• -0.0 > 0 → False ( -0.0 n'est pas > 0).

Considérations de performance :
• Négligeable.

Exemples :
• -1 > 0  # False
• -10 > 0  # False

Remarques :
• Pour distinguer négatif de zéro : x < 0 vs x == 0.`,

  980: `'empty' if len([])==0 else 'not empty' vaut 'empty' : len([]) vaut 0, donc 0==0 → 'empty'.

Débutant :
• len([]) = 0 (liste vide).
• 0 == 0 est vrai → 'empty'.

Intermédiaire :
• Tester si une collection est vide via len.
• Plus idiomatique : if not lst: (sans len).

Expert :
• len([]) → 0 ; 0 == 0 → True.
• Branche if → 'empty'.

Concepts clés :
• Liste vide, len, ternaire.

Distinctions clés :
• len([])==0 (True) vs len([1])==0 (False).

Fonctionnement :
• len([]) = 0 ; 0 == 0 → True ; renvoyer 'empty'.

Exécution étape par étape :
1. len([]) → 0.
2. 0 == 0 → True.
3. Renvoyer 'empty'.

Ordre des opérations :
• len() avant == ; == avant if/else.

Cas d'utilisation courants :
• Étiqueter une collection : tag = "empty" if len(items) == 0 else "not empty".

Cas limites :
• len("") == 0 → True ; len({}) == 0 → True.

Considérations de performance :
• len() est O(1) pour list, dict, str.

Exemples :
• len(()) == 0  # True
• len([1,2]) == 0  # False

Remarques :
• Préférer « if not lst » à « if len(lst) == 0 » (plus pythonique).`,

  981: `True and 5 vaut 5 : and renvoie le dernier opérande évalué quand tous sont truthy ; True et 5 sont truthy → 5.

Débutant :
• and signifie « et » : les deux doivent être vrais.
• True et 5 sont vrais → and renvoie le dernier (5).

Intermédiaire :
• and renvoie la dernière valeur évaluée si toutes sont truthy.
• True and 5 : True truthy, 5 truthy → renvoie 5 (pas True).

Expert :
• and : premier falsy ou dernier opérande.
• True and 5 → les deux truthy → renvoie 5.

Concepts clés :
• and, court-circuit, valeur renvoyée (pas toujours bool).

Distinctions clés :
• True and 5 (→ 5) vs True and False (→ False).

Fonctionnement :
• True truthy → évaluer 5 ; 5 truthy → renvoyer 5.

Exécution étape par étape :
1. Évaluer True → truthy, continuer.
2. Évaluer 5 → truthy.
3. and renvoie 5 (dernier évalué).

Ordre des opérations :
• and évalue de gauche à droite.

Cas d'utilisation courants :
• Valeur conditionnelle : x = a and b (b si a truthy, sinon a).

Cas limites :
• 1 and 2 → 2 ; "a" and "b" → "b".

Considérations de performance :
• Les deux opérandes sont évalués (pas de court-circuit ici).

Exemples :
• True and 42  # 42
• 1 and "x"  # "x"

Remarques :
• and/or renvoient une des valeurs, pas forcément True/False.`,

  982: `False and 5 vaut False : and court-circuite ; le premier opérande (False) est falsy → and renvoie False sans évaluer 5.

Débutant :
• Dès que le premier est faux, and renvoie False.
• 5 n'est jamais évalué (court-circuit).

Intermédiaire :
• and renvoie le premier falsy rencontré.
• False and ... → False immédiatement.

Expert :
• Court-circuit : si le premier est falsy, le second n'est pas évalué.
• False and 5 → False (5 jamais exécuté).

Concepts clés :
• Court-circuit sur and, premier falsy.

Distinctions clés :
• False and 5 (→ False) vs True and 5 (→ 5).

Fonctionnement :
• False évalué → falsy → renvoyer False, ne pas évaluer 5.

Exécution étape par étape :
1. Évaluer False → falsy.
2. Court-circuit : renvoyer False.
3. 5 n'est pas évalué.

Ordre des opérations :
• Évaluation de gauche à droite, arrêt au premier falsy.

Cas d'utilisation courants :
• Guard : cond and expensive_call() — si cond faux, pas d'appel.

Cas limites :
• False and print("x") — print n'est pas exécuté.

Considérations de performance :
• Évite d'évaluer le second opérande si le premier suffit à rendre le résultat faux.

Exemples :
• False and 1  # False
• 0 and 99  # 0

Remarques :
• Placer la condition la plus rapide en premier peut optimiser.`,

  983: `True or 5 vaut True : or court-circuite ; le premier opérande (True) est truthy → or renvoie True sans évaluer 5.

Débutant :
• Dès qu'un opérande est vrai, or renvoie True.
• 5 n'est jamais évalué (court-circuit).

Intermédiaire :
• or renvoie le premier truthy rencontré.
• True or ... → True immédiatement.

Expert :
• Court-circuit : si le premier est truthy, le second n'est pas évalué.
• True or 5 → True (5 jamais exécuté).

Concepts clés :
• Court-circuit sur or, premier truthy.

Distinctions clés :
• True or 5 (→ True) vs False or 5 (→ 5).

Fonctionnement :
• True évalué → truthy → renvoyer True, ne pas évaluer 5.

Exécution étape par étape :
1. Évaluer True → truthy.
2. Court-circuit : renvoyer True.
3. 5 n'est pas évalué.

Ordre des opérations :
• Évaluation de gauche à droite, arrêt au premier truthy.

Cas d'utilisation courants :
• Valeur par défaut : x = value or default (si value truthy, pas de default).

Cas limites :
• True or expensive_call() — l'appel n'est pas exécuté.

Considérations de performance :
• Très efficace quand le premier est souvent truthy.

Exemples :
• True or 0  # True
• 1 or 2  # 1

Remarques :
• or renvoie la valeur, pas toujours un bool : 1 or 2 → 1.`,

  984: `False or 5 vaut 5 : or évalue les deux ; le premier (False) est falsy, le second (5) est truthy → or renvoie 5.

Débutant :
• False est faux, 5 est vrai.
• or renvoie le premier « vrai » → 5.

Intermédiaire :
• or renvoie le premier truthy ou le dernier si tous falsy.
• False or 5 → 5 (premier truthy).

Expert :
• False falsy → évaluer 5 ; 5 truthy → renvoyer 5.
• C'est le pattern classique pour valeur par défaut.

Concepts clés :
• or, valeur par défaut, premier truthy.

Distinctions clés :
• False or 5 (→ 5) vs True or 5 (→ True).

Fonctionnement :
• False falsy → continuer ; 5 truthy → renvoyer 5.

Exécution étape par étape :
1. Évaluer False → falsy, continuer.
2. Évaluer 5 → truthy.
3. or renvoie 5.

Ordre des opérations :
• Pas de court-circuit ici : les deux sont évalués.

Cas d'utilisation courants :
• Valeur par défaut : name = user_input or "Anonymous".

Cas limites :
• None or 5 → 5 ; "" or "hello" → "hello".

Considérations de performance :
• Les deux opérandes sont évalués quand le premier est falsy.

Exemples :
• 0 or 42  # 42
• [] or [1,2]  # [1,2]

Remarques :
• x or default est idiomatique pour « x si présent, sinon default ».`,

  985: `0 and 5 vaut 0 : and court-circuite ; 0 est falsy → and renvoie 0 sans évaluer 5.

Débutant :
• 0 est « faux » ; dès le premier faux, and renvoie 0.
• 5 n'est pas évalué.

Intermédiaire :
• and renvoie le premier falsy.
• 0 and 5 → 0 (court-circuit).

Expert :
• 0 est falsy ; and renvoie 0 immédiatement.
• La valeur renvoyée est 0 (pas False), mais 0 est falsy.

Concepts clés :
• Falsiness de 0, court-circuit, and renvoie la valeur.

Distinctions clés :
• 0 and 5 (→ 0) vs 1 and 5 (→ 5).

Fonctionnement :
• 0 évalué → falsy → renvoyer 0.

Exécution étape par étape :
1. Évaluer 0 → falsy.
2. Court-circuit : renvoyer 0.
3. 5 non évalué.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Guard : count and process() — si count 0, pas de process.

Cas limites :
• 0 and x → 0 pour tout x (x non évalué).

Considérations de performance :
• Évite d'évaluer 5.

Exemples :
• 0 and 99  # 0
• 0.0 and 1  # 0.0

Remarques :
• and renvoie la valeur falsy (0), pas le booléen False.`,

  986: `1 and 5 vaut 5 : 1 est truthy, 5 est truthy ; and renvoie le dernier évalué (5).

Débutant :
• 1 et 5 sont « vrais ».
• and renvoie le dernier (5).

Intermédiaire :
• and : tous truthy → dernier opérande.
• 1 and 5 → 5.

Expert :
• 1 and 5 : les deux truthy → renvoie 5.
• Même comportement que True and 5.

Concepts clés :
• Truthiness de 1, and, dernier opérande.

Distinctions clés :
• 1 and 5 (→ 5) vs 0 and 5 (→ 0).

Fonctionnement :
• 1 truthy → évaluer 5 ; 5 truthy → renvoyer 5.

Exécution étape par étape :
1. Évaluer 1 → truthy, continuer.
2. Évaluer 5 → truthy.
3. and renvoie 5.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Chaîne de valeurs : x = a and b and c (dernier si tous truthy).

Cas limites :
• 1 and 0 → 0 (premier falsy dans une chaîne plus longue).

Considérations de performance :
• Les deux sont évalués.

Exemples :
• 1 and 2  # 2
• 42 and "x"  # "x"

Remarques :
• Pour les entiers, 1 est truthy, 0 est falsy.`,

  987: `0 or 5 vaut 5 : 0 est falsy, 5 est truthy ; or renvoie le premier truthy (5).

Débutant :
• 0 est « faux », 5 est « vrai ».
• or renvoie le premier vrai → 5.

Intermédiaire :
• or : premier truthy ou dernier si tous falsy.
• 0 or 5 → 5.

Expert :
• 0 falsy → évaluer 5 ; 5 truthy → renvoyer 5.
• Pattern valeur par défaut : x or default.

Concepts clés :
• or, 0 falsy, premier truthy.

Distinctions clés :
• 0 or 5 (→ 5) vs 0 or 0 (→ 0).

Fonctionnement :
• 0 falsy → continuer ; 5 truthy → renvoyer 5.

Exécution étape par étape :
1. Évaluer 0 → falsy, continuer.
2. Évaluer 5 → truthy.
3. or renvoie 5.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Valeur par défaut : result = cache or compute().

Cas limites :
• 0 or 0 → 0 (tous falsy, dernier renvoyé).

Considérations de performance :
• Les deux sont évalués.

Exemples :
• 0 or 42  # 42
• 0 or "x"  # "x"

Remarques :
• 0 or y est courant pour « y si 0, sinon y » (fallback).`,

  988: `1 or 5 vaut 1 : or court-circuite ; 1 est truthy → or renvoie 1 sans évaluer 5.

Débutant :
• 1 est « vrai » ; or renvoie le premier vrai → 1.
• 5 n'est pas évalué.

Intermédiaire :
• or renvoie le premier truthy.
• 1 or 5 → 1 (court-circuit).

Expert :
• 1 truthy → renvoyer 1 immédiatement.
• 5 jamais évalué.

Concepts clés :
• Court-circuit sur or, 1 truthy.

Distinctions clés :
• 1 or 5 (→ 1) vs 0 or 5 (→ 5).

Fonctionnement :
• 1 évalué → truthy → renvoyer 1.

Exécution étape par étape :
1. Évaluer 1 → truthy.
2. Court-circuit : renvoyer 1.
3. 5 non évalué.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Premier disponible : x = a or b or c (premier truthy).

Cas limites :
• 1 or expensive_call() — l'appel n'est pas exécuté.

Considérations de performance :
• Très efficace ; une seule évaluation.

Exemples :
• 1 or 0  # 1
• 42 or 99  # 42

Remarques :
• or renvoie la valeur, pas True : 1 or 5 → 1.`,

  989: `'' and 'hello' vaut '' : and court-circuite ; '' (chaîne vide) est falsy → and renvoie '' sans évaluer 'hello'.

Débutant :
• La chaîne vide est « fausse ».
• and renvoie '' immédiatement ; 'hello' n'est pas évalué.

Intermédiaire :
• '' falsy → and renvoie le premier falsy.
• '' and 'hello' → '' (court-circuit).

Expert :
• str.__bool__ : len != 0 ; '' a longueur 0 → falsy.
• and renvoie '' (la valeur), pas False.

Concepts clés :
• Chaîne vide falsy, court-circuit, and.

Distinctions clés :
• '' and 'hello' (→ '') vs 'hello' and 'world' (→ 'world').

Fonctionnement :
• '' évalué → falsy → renvoyer ''.

Exécution étape par étape :
1. Évaluer '' → falsy.
2. Court-circuit : renvoyer ''.
3. 'hello' non évalué.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Guard sur chaîne : prefix and s.startswith(prefix).

Cas limites :
• '' and expensive_call() — l'appel n'est pas exécuté.

Considérations de performance :
• Évite d'évaluer 'hello'.

Exemples :
• "" and "x"  # ""
• '' and 1  # ''

Remarques :
• '' est la seule chaîne falsy.`,

  990: `'hello' and 'world' vaut 'world' : les deux sont truthy ; and renvoie le dernier évalué ('world').

Débutant :
• 'hello' et 'world' sont « vrais » (chaînes non vides).
• and renvoie le dernier → 'world'.

Intermédiaire :
• and : tous truthy → dernier opérande.
• 'hello' and 'world' → 'world'.

Expert :
• Les deux chaînes ont len > 0 → truthy.
• and renvoie 'world' (dernier évalué).

Concepts clés :
• and, chaînes truthy, dernier opérande.

Distinctions clés :
• 'hello' and 'world' (→ 'world') vs 'hello' and '' (→ '').

Fonctionnement :
• 'hello' truthy → évaluer 'world' ; 'world' truthy → renvoyer 'world'.

Exécution étape par étape :
1. Évaluer 'hello' → truthy, continuer.
2. Évaluer 'world' → truthy.
3. and renvoie 'world'.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Chaîne de vérifications : a and b and c (dernier si tous truthy).

Cas limites :
• 'a' and 'b' and 'c' → 'c'.

Considérations de performance :
• Les deux sont évalués.

Exemples :
• "x" and "y"  # "y"
• "a" and "b" and "c"  # "c"

Remarques :
• and/or renvoient des valeurs, pas toujours des booléens.`,

  991: `5>3 and 10>5 vaut True : les deux comparaisons sont vraies ; and renvoie le dernier (True).

Débutant :
• 5 > 3 est vrai, 10 > 5 est vrai.
• and exige les deux vrais → True.

Intermédiaire :
• 5 > 3 → True, 10 > 5 → True.
• True and True → True (dernier évalué).

Expert :
• Les comparaisons renvoient des bool.
• True and True → True.

Concepts clés :
• and, comparaisons, conditions composées.

Distinctions clés :
• 5>3 and 10>5 (True) vs 5>10 and 10>5 (False).

Fonctionnement :
• 5 > 3 → True ; 10 > 5 → True ; and → True.

Exécution étape par étape :
1. 5 > 3 → True, continuer.
2. 10 > 5 → True.
3. and renvoie True.

Ordre des opérations :
• Comparaisons avant and.

Cas d'utilisation courants :
• Conditions multiples : if 0 < x < 10 and y > 0.

Cas limites :
• 5>3 and 10>5 → True ; les deux parties doivent être vraies.

Considérations de performance :
• Les deux comparaisons sont évaluées.

Exemples :
• 1<2 and 2<3  # True
• 3>2 and 5>4  # True

Remarques :
• and pour combiner des conditions ; toutes doivent être vraies.`,

  992: `5>10 and 10>5 vaut False : 5>10 est False ; and court-circuite et renvoie False.

Débutant :
• 5 > 10 est faux.
• Dès le premier faux, and renvoie False.

Intermédiaire :
• 5 > 10 → False ; and court-circuite.
• 10 > 5 n'est pas évalué.

Expert :
• Premier opérande falsy → and renvoie False.
• 10 > 5 jamais évalué.

Concepts clés :
• Court-circuit, comparaison fausse, and.

Distinctions clés :
• 5>10 and 10>5 (False) vs 5>3 and 10>5 (True).

Fonctionnement :
• 5 > 10 → False ; court-circuit → False.

Exécution étape par étape :
1. 5 > 10 → False.
2. Court-circuit : renvoyer False.
3. 10 > 5 non évalué.

Ordre des opérations :
• Évaluation de gauche à droite.

Cas d'utilisation courants :
• Conditions en chaîne : if a and b and c (s'arrête au premier faux).

Cas limites :
• 1>2 and print("x") — print n'est pas exécuté.

Considérations de performance :
• Évite d'évaluer la seconde comparaison.

Exemples :
• 0>1 and 1>0  # False
• 10<5 and 5<10  # False

Remarques :
• Placer la condition la plus susceptible d'être fausse en premier peut optimiser.`,

  993: `5>3 or 10<5 vaut True : 5>3 est True ; or court-circuite et renvoie True.

Débutant :
• 5 > 3 est vrai.
• or renvoie True dès le premier vrai ; 10 < 5 n'est pas évalué.

Intermédiaire :
• 5 > 3 → True ; or court-circuite.
• 10 < 5 (qui serait False) n'est pas évalué.

Expert :
• Premier opérande truthy → or renvoie True.
• La seconde comparaison est ignorée.

Concepts clés :
• Court-circuit sur or, première condition vraie.

Distinctions clés :
• 5>3 or 10<5 (True) vs 5>10 or 10<5 (False).

Fonctionnement :
• 5 > 3 → True ; court-circuit → True.

Exécution étape par étape :
1. 5 > 3 → True.
2. Court-circuit : renvoyer True.
3. 10 < 5 non évalué.

Ordre des opérations :
• Standard.

Cas d'utilisation courants :
• Au moins une condition : if valid or override.

Cas limites :
• 5>3 or expensive_check() — expensive_check non exécuté.

Considérations de performance :
• Une seule comparaison évaluée.

Exemples :
• 1<2 or 2<1  # True
• 5>0 or 0>5  # True

Remarques :
• or s'arrête au premier truthy.`,

  994: `5>10 or 10<5 vaut False : les deux comparaisons sont fausses ; or renvoie le dernier (False).

Débutant :
• 5 > 10 est faux, 10 < 5 est faux.
• or renvoie True seulement si au moins un est vrai ; ici aucun → False.

Intermédiaire :
• 5 > 10 → False, 10 < 5 → False.
• or : tous falsy → renvoie le dernier (False).

Expert :
• Aucun truthy ; or évalue les deux et renvoie le dernier.
• False or False → False.

Concepts clés :
• or, toutes conditions fausses, dernier opérande.

Distinctions clés :
• 5>10 or 10<5 (False) vs 5>3 or 10<5 (True).

Fonctionnement :
• 5 > 10 → False, continuer ; 10 < 5 → False ; or renvoie False.

Exécution étape par étape :
1. 5 > 10 → False, continuer.
2. 10 < 5 → False.
3. or renvoie False (dernier évalué).

Ordre des opérations :
• Les deux sont évalués (pas de court-circuit).

Cas d'utilisation courants :
• Fallback : x = a or b or c (premier truthy, ou dernier si tous falsy).

Cas limites :
• False or False → False ; 0 or 0 → 0.

Considérations de performance :
• Les deux comparaisons sont évaluées.

Exemples :
• 1>2 or 2>3  # False
• 0>1 or 1>2  # False

Remarques :
• or renvoie le dernier opérande si tous sont falsy.`,

  995: `not (5>10) vaut True : 5>10 est False ; not inverse en True.

Débutant :
• 5 > 10 est faux.
• not inverse : not False → True.

Intermédiaire :
• 5 > 10 → False.
• not False → True.

Expert :
• not est un opérateur unaire ; il inverse le booléen.
• not (5>10) = not False = True.

Concepts clés :
• not, négation, comparaison.

Distinctions clés :
• not (5>10) (True) vs not (5>3) (False).

Fonctionnement :
• 5 > 10 → False ; not False → True.

Exécution étape par étape :
1. Évaluer 5 > 10 → False.
2. Appliquer not → True.
3. Renvoyer True.

Ordre des opérations :
• Parenthèses d'abord, puis not.

Cas d'utilisation courants :
• Inverser une condition : if not (x > limit).

Cas limites :
• not (a > b) équivaut à a <= b pour les nombres.

Considérations de performance :
• Négligeable.

Exemples :
• not (1 > 2)  # True
• not (10 < 5)  # True

Remarques :
• not renvoie toujours un bool (True ou False).`,

  996: `not (5>3) vaut False : 5>3 est True ; not inverse en False.

Débutant :
• 5 > 3 est vrai.
• not inverse : not True → False.

Intermédiaire :
• 5 > 3 → True.
• not True → False.

Expert :
• not (5>3) = not True = False.
• La négation d'une condition vraie donne False.

Concepts clés :
• not, négation, condition vraie.

Distinctions clés :
• not (5>3) (False) vs not (5>10) (True).

Fonctionnement :
• 5 > 3 → True ; not True → False.

Exécution étape par étape :
1. Évaluer 5 > 3 → True.
2. Appliquer not → False.
3. Renvoyer False.

Ordre des opérations :
• Parenthèses, puis not.

Cas d'utilisation courants :
• Exclure un cas : if not (x in allowed).

Cas limites :
• not (x == y) équivaut à x != y.

Considérations de performance :
• Négligeable.

Exemples :
• not (2 > 1)  # False
• not (5 > 0)  # False

Remarques :
• not est le seul opérateur logique qui renvoie toujours un bool.`,

  997: `5>3 and not (10<5) vaut True : 5>3 est True, not (10<5) est not False = True ; and → True.

Débutant :
• 5 > 3 est vrai.
• 10 < 5 est faux, donc not (10<5) est vrai.
• Les deux sont vrais → and renvoie True.

Intermédiaire :
• 5 > 3 → True.
• 10 < 5 → False ; not False → True.
• True and True → True.

Expert :
• Priorité : not avant and. Donc not (10<5) d'abord.
• 5>3 and True → True and True → True.

Concepts clés :
• and, not, priorité des opérateurs.

Distinctions clés :
• 5>3 and not (10<5) (True) vs 5>10 and not (10<5) (False).

Fonctionnement :
• not (10<5) → not False → True.
• 5 > 3 → True ; True and True → True.

Exécution étape par étape :
1. 10 < 5 → False ; not False → True.
2. 5 > 3 → True.
3. True and True → True.

Ordre des opérations :
• not avant and ; and avant or.

Cas d'utilisation courants :
• Conditions composées : if valid and not error.

Cas limites :
• not (10<5) équivaut à 10 >= 5.

Considérations de performance :
• Les deux côtés de and sont évalués.

Exemples :
• 1<2 and not (3<2)  # True
• 5>0 and not (0>5)  # True

Remarques :
• not a priorité plus haute que and et or.`,

  998: `5 in [1,2,3] or 10>5 vaut True : 5 in [1,2,3] est False, mais 10>5 est True ; or renvoie True.

Débutant :
• 5 n'est pas dans [1,2,3] → False.
• 10 > 5 est vrai → True.
• or : au moins un vrai → True.

Intermédiaire :
• 5 in [1,2,3] → False, 10 > 5 → True.
• False or True → True (premier truthy = True à droite).

Expert :
• or évalue de gauche à droite.
• Premier falsy → évaluer le second ; 10 > 5 → True ; renvoyer True.

Concepts clés :
• or, in, comparaison, court-circuit (pas ici car premier falsy).

Distinctions clés :
• 5 in [1,2,3] or 10>5 (True) vs 5 in [1,2,3] and 10>5 (False).

Fonctionnement :
• 5 in [1,2,3] → False ; 10 > 5 → True ; or → True.

Exécution étape par étape :
1. 5 in [1,2,3] → False, continuer.
2. 10 > 5 → True.
3. or renvoie True.

Ordre des opérations :
• in et > ont priorité plus haute que or.

Cas d'utilisation courants :
• Fallback : if x in allowed or override_mode.

Cas limites :
• Si le premier était True, le second ne serait pas évalué.

Considérations de performance :
• Les deux sont évalués ici (premier falsy).

Exemples :
• 0 in [1,2] or 5>3  # True
• 99 in [] or 1<2  # True

Remarques :
• or : au moins une condition vraie suffit.`,

  999: `5 in [1,2,3] and 10>5 vaut False : 5 in [1,2,3] est False ; and court-circuite et renvoie False.

Débutant :
• 5 n'est pas dans [1,2,3] → False.
• and exige les deux vrais ; dès le premier faux → False.

Intermédiaire :
• 5 in [1,2,3] → False ; and court-circuite.
• 10 > 5 n'est pas évalué (il serait True, mais inutile).

Expert :
• Premier opérande falsy → and renvoie False.
• 10 > 5 jamais évalué.

Concepts clés :
• and, in, court-circuit.

Distinctions clés :
• 5 in [1,2,3] and 10>5 (False) vs 5 in [1,2,3,5] and 10>5 (True).

Fonctionnement :
• 5 in [1,2,3] → False ; court-circuit → False.

Exécution étape par étape :
1. 5 in [1,2,3] → False.
2. Court-circuit : renvoyer False.
3. 10 > 5 non évalué.

Ordre des opérations :
• in avant and ; and court-circuite.

Cas d'utilisation courants :
• Vérifications multiples : if x in valid and x > 0.

Cas limites :
• 5 in [1,2,3] and expensive_check() — expensive_check non exécuté.

Considérations de performance :
• Évite d'évaluer 10 > 5.

Exemples :
• 0 in [1,2] and 5>3  # False
• 99 in [] and 1<2  # False

Remarques :
• and exige que toutes les conditions soient vraies.`,

  1000: `(5>3) == (10>5) vaut True : les deux comparaisons sont True ; True == True → True.

Débutant :
• 5 > 3 est vrai → True.
• 10 > 5 est vrai → True.
• True == True → True.

Intermédiaire :
• Les deux côtés de == sont des booléens True.
• Comparer deux True donne True.

Expert :
• (5>3) → True, (10>5) → True.
• == compare les valeurs ; True == True → True.

Concepts clés :
• Comparaison de booléens, ==, expressions booléennes.

Distinctions clés :
• (5>3) == (10>5) (True) vs (5>10) == (10>5) (False, car False == True → False).

Fonctionnement :
• 5 > 3 → True ; 10 > 5 → True ; True == True → True.

Exécution étape par étape :
1. Évaluer 5 > 3 → True.
2. Évaluer 10 > 5 → True.
3. True == True → True.

Ordre des opérations :
• Parenthèses forcent l'évaluation des comparaisons avant ==.

Cas d'utilisation courants :
• Vérifier que deux conditions ont le même résultat : (a>b) == (c>d).

Cas limites :
• (1>0) == (2>1) → True ; (1>2) == (2>1) → False.

Considérations de performance :
• Négligeable.

Exemples :
• (3>2) == (5>4)  # True
• (0>1) == (1>0)  # False

Remarques :
• Comparer des booléens avec == est valide ; on obtient True si les deux sont identiques.`,
};
