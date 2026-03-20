/** Level 7 FR 2251–2275 — level7_intermediate_b.ts Q1–25 */
export default {
  2251: `def gen(): yield 1; yield 2; yield 3 — list(gen())

Débutant :
• gen est une fonction générateur ; gen() renvoie un itérateur ; list() consomme toutes les valeurs jusqu’à StopIteration.

Intermédiaire :
• Chaque yield suspend puis reprend ; list matérialise [1, 2, 3].

Expert :
• Le protocole itérateur lève StopIteration en fin de générateur.

Concepts clés :
• Générateur, yield, list sur itérateur.

Distinctions clés :
• list(gen) sans parenthèses sur gen serait erreur.

Fonctionnement :
• Appels next implicites dans list().

Exécution étape par étape :
• Trois yields puis fin.

Ordre des opérations :
• gen() crée l’objet générateur avant itération.

Cas d'utilisation courants :
• Parcours paresseux puis besoin d’une liste.

Cas limites :
• Générateur infini : ne pas list() sans limite.

Considérations de performance :
• Mémoire O(n) une fois listé.

Exemples :
• tuple(gen()) même principe.

Remarques :
• Réponse : [1, 2, 3].`,

  2252: `g = gen() avec deux yields — next(g) premier

Débutant :
• Premier next démarre le corps jusqu’au premier yield → 1.

Intermédiaire :
• L’état local du générateur est figé entre les next.

Expert :
• send/throw/close pour contrôle avancé hors QCM.

Concepts clés :
• next built-in, reprise d’exécution.

Distinctions clés :
• g n’est pas encore 1 : c’est l’objet générateur.

Fonctionnement :
• FRAME du générateur suspendu.

Exécution étape par étape :
• Une seule avancée.

Ordre des opérations :
• gen() puis next.

Cas d'utilisation courants :
• Pipelines un élément à la fois.

Cas limites :
• next sur générateur épuisé → StopIteration.

Considérations de performance :
• Pas d’allocation liste complète.

Exemples :
• next(g, défaut) évite exception.

Remarques :
• Réponse : 1.`,

  2253: `Après un premier next, second next(g)

Débutant :
• Reprend après le premier yield et va jusqu’au second → 2.

Intermédiaire :
• Ordre strict des yields.

Expert :
• ValueError si send mal utilisé hors init.

Concepts clés :
• Suite du flux du générateur.

Distinctions clés :
• Pas recycling au début.

Fonctionnement :
• PC interne du générateur avance.

Exécution étape par étape :
• Deuxième valeur produite.

Ordre des opérations :
• Séquence de deux next sur le même g.

Cas d'utilisation courants :
• Lecture streaming.

Cas limites :
• Un seul consommateur typique par générateur.

Considérations de performance :
• O(1) par next.

Exemples :
• for _ in range(2): next(g).

Remarques :
• Réponse : 2.`,

  2254: `Troisième next après deux yields 1 et 2

Débutant :
• Plus de yield : le générateur se termine → StopIteration.

Intermédiaire :
• for et list attrapent StopIteration pour arrêter proprement.

Expert :
• En Python 3.7+, return dans générateur alimente StopIteration.value.

Concepts clés :
• Fin d’itérateur, exception contrôlée.

Distinctions clés :
• Ce n’est pas None ni 2 répété.

Fonctionnement :
• Lever StopIteration depuis le générateur.

Exécution étape par étape :
• Troisième tentative d’avance.

Ordre des opérations :
• Après épuisement.

Cas d'utilisation courants :
• Boucles for sur générateurs.

Cas limites :
• PEP 479 interactions async hors scope.

Considérations de performance :
• N/A.

Exemples :
• next(g, "fini") retourne défaut.

Remarques :
• Réponse : StopIteration est levée (1re option).`,

  2255: `gen avec boucle for i in range(3): yield i**2 — list(gen())

Débutant :
• i = 0,1,2 → carrés 0, 1, 4.

Intermédiaire :
• L’état de boucle survit entre yields.

Expert :
• Équivalent à générateur avec trois yield explicites ici.

Concepts clés :
• yield en boucle.

Distinctions clés :
• Pas [0,1,2] ni [1,4,9] (ce dernier serait 1²,2²,3² mais range(3) s’arrête avant 3).

Fonctionnement :
• range(3) pilote trois itérations.

Exécution étape par étape :
• Trois yields puis fin.

Ordre des opérations :
• i**2 évalué à chaque tour.

Cas d'utilisation courants :
• Transformations paresseuses.

Cas limites :
• range énorme : toujours paresseux, attention au list().

Considérations de performance :
• list matérialise.

Exemples :
• yield i**3 variant.

Remarques :
• Réponse : [0, 1, 4].`,

  2256: `Rôle du mot-clé yield

Débutant :
• Il suspend la fonction générateur, renvoie une valeur au consommateur, et permet de reprendre plus tard.

Intermédiaire :
• Transforme la def en générateur : l’appel renvoie un objet générateur, pas une liste.

Expert :
• Diffère de return qui termine définitivement la fonction normale.

Concepts clés :
• Pause, reprise, valeur produite.

Distinctions clés :
• Pas import ; pas « terminer pour toujours » seul sens return.

Fonctionnement :
• Opcode YIELD_VALUE côté VM.

Exécution étape par étape :
• État sauvegardé sur la pile du générateur.

Ordre des opérations :
• Premier next entre dans le corps jusqu’au premier yield.

Cas d'utilisation courants :
• Flux, lectures fichiers ligne à ligne, pipelines.

Cas limites :
• yield dans try/finally : finally au close.

Considérations de performance :
• Souvent meilleure empreinte mémoire qu’une grande liste.

Exemples :
• Voir questions list(gen()).

Remarques :
• Réponse : met en pause et produit une valeur (1re option).`,

  2257: `yield from [1, 2, 3]

Débutant :
• Délègue l’itération : produit 1 puis 2 puis 3 comme yields successifs.

Intermédiaire :
• Équivaut à boucle for sur l’itérable avec yield interne.

Expert :
• Avec un sous-générateur, propage aussi send/throw (hors détail QCM).

Concepts clés :
• Délégation d’itération.

Distinctions clés :
• Pas une liste imbriquée [[1,2,3]] en sortie.

Fonctionnement :
• Itérateur sur la liste consommé entièrement.

Exécution étape par étape :
• list() collecte trois valeurs.

Ordre des opérations :
• yield from consomme l’itérable.

Cas d'utilisation courants :
• Aplatir chaînage de générateurs.

Cas limites :
• Itérable infini dangereux avec list().

Considérations de performance :
• Évite code boilerplate.

Exemples :
• yield from range(n).

Remarques :
• Réponse : [1, 2, 3].`,

  2258: `yield from range(5)

Débutant :
• range(5) produit 0..4 ; list donne ces cinq entiers.

Intermédiaire :
• range est paresseux mais entièrement consommé ici.

Expert :
• yield from sur range évite boucle explicite.

Concepts clés :
• Délégation sur range.

Distinctions clés :
• Pas [0..5] (5 exclus).

Fonctionnement :
• Cinq itérations.

Exécution étape par étape :
• Jusqu’à StopIteration de range.

Ordre des opérations :
• gen() puis list.

Cas d'utilisation courants :
• Réémettre des indices.

Cas limites :
• range négatif pas ici.

Considérations de performance :
• O(n) pour list.

Exemples :
• len(list(gen())) → 5.

Remarques :
• Réponse : [0, 1, 2, 3, 4].`,

  2259: `yield from "abc"

Débutant :
• Itération sur la str caractère par caractère → trois chaînes une lettre.

Intermédiaire :
• Chaque caractère est une str de longueur 1.

Expert :
• Même mécanisme que sur tout itérable str.

Concepts clés :
• Itérable chaîne.

Distinctions clés :
• Pas une seule str "abc" comme un seul yield.

Fonctionnement :
• yield from consomme l’itérateur de la str.

Exécution étape par étape :
• a, b, c.

Ordre des opérations :
• list matérialise.

Cas d'utilisation courants :
• Stream de caractères.

Cas limites :
• Surrogate pairs Unicode rares hors scope.

Considérations de performance :
• Négligeable.

Exemples :
• yield from "" → [].

Remarques :
• Réponse : liste des caractères a, b, c (formulation du QCM).`,

  2260: `sum(x**2 for x in range(4))

Débutant :
• Générateur implicite : 0²+1²+2²+3² = 0+1+4+9 = 14.

Intermédiaire :
• Les parenthèses autour de l’expression pour sum sont celles d’appel de fonction, pas une tuple comprehension.

Expert :
• math.fsum pour stabilité float si on généralisait.

Concepts clés :
• Generator expression, sum.

Distinctions clés :
• Pas max ni len.

Fonctionnement :
• sum itère jusqu’à épuisement.

Exécution étape par étape :
• Quatre termes.

Ordre des opérations :
• range(4) puis carré puis cumul.

Cas d'utilisation courants :
• Agrégations sans liste intermédiaire.

Cas limites :
• Vide : sum([]) 0 mais ici non vide.

Considérations de performance :
• Pas de liste matérialisée.

Exemples :
• sum(x for x in range(4)) → 6.

Remarques :
• Réponse : 14.`,

  2261: `max(x**2 for x in range(4))

Débutant :
• Carrés 0,1,4,9 → maximum 9.

Intermédiaire :
• max sur itérateur consomme tout sauf optimisation interne.

Expert :
• key= personnalisable hors énoncé.

Concepts clés :
• Generator expression + max.

Distinctions clés :
• Pas la somme 14.

Fonctionnement :
• Parcours complet pour max générique.

Exécution étape par étape :
• Garde le plus grand vu.

Ordre des opérations :
• Évaluation paresseuse terme par terme.

Cas d'utilisation courants :
• Trouver un extrême sans stocker la suite.

Cas limites :
• Itérable vide → ValueError.

Considérations de performance :
• O(n) temps, O(1) espace.

Exemples :
• range(1) → max 0.

Remarques :
• Réponse : 9.`,

  2262: `any(x > 3 for x in range(5))

Débutant :
• Dès qu’un élément vérifie la condition, any short-circuit True ; 4 > 3 donc True.

Intermédiaire :
• range(5) = 0..4.

Expert :
• Peut ne pas consommer tout l’itérable.

Concepts clés :
• any, court-circuit.

Distinctions clés :
• Pas all.

Fonctionnement :
• Test sur 0,1,2,3 puis 4 vrai → arrêt.

Exécution étape par étape :
• Arrêt tôt.

Ordre des opérations :
• Génération paresseuse compatible.

Cas d'utilisation courants :
• Existence dans un flux coûteux.

Cas limites :
• Itérable vide → False.

Considérations de performance :
• Peut éviter travail inutile.

Exemples :
• any(x>10 for ...) False ici.

Remarques :
• Réponse : True (1re option).`,

  2263: `all(x > 0 for x in range(5))

Débutant :
• x=0 donne 0 > 0 faux → all s’arrête et retourne False.

Intermédiaire :
• all exige que tous soient truthy pour le prédicat.

Expert :
• 0 est le premier élément de range(5).

Concepts clés :
• all, court-circuit.

Distinctions clés :
• Pas True.

Fonctionnement :
• Premier test échoue.

Exécution étape par étape :
• Évaluation sur 0.

Ordre des opérations :
• range commence à 0.

Cas d'utilisation courants :
• Valider une collection.

Cas limites :
• Itérable vide : all([]) True mais ici non vide.

Considérations de performance :
• Arrêt immédiat.

Exemples :
• range(1,5) changerait le résultat.

Remarques :
• Réponse : False (1re option).`,

  2264: `list(x for x in range(10) if x % 2 == 0)

Débutant :
• Filtre les pairs entre 0 et 9 → 0,2,4,6,8.

Intermédiaire :
• if dans genexpr comme dans listcomp.

Expert :
• Équivalent list comprehension avec crochets.

Concepts clés :
• Filtrage paresseux matérialisé.

Distinctions clés :
• Pas les impairs.

Fonctionnement :
• Test modulo pour chaque x.

Exécution étape par étape :
• Cinq valeurs conservées.

Ordre des opérations :
• range(10) ordre naturel.

Cas d'utilisation courants :
• Pipeline map/filter style.

Cas limites :
• Modulo sur négatifs hors range ici.

Considérations de performance :
• list alloue.

Exemples :
• if x%2==1 pour impairs.

Remarques :
• Réponse : [0, 2, 4, 6, 8].`,

  2265: `type(x for x in range(3))

Débutant :
• Parenthèses autour de la comprehension sans crochets → generator object, type generator.

Intermédiaire :
• type(...) reçoit un genexpr car virgule d’appel ou parenthèses d’appel englobantes.

Expert :
• Attention : (x for x in r) seul dans certains contextes = gen ; avec crochets = list.

Concepts clés :
• Generator expression vs list comprehension.

Distinctions clés :
• Pas list, tuple, range.

Fonctionnement :
• Objet iterator protocol.

Exécution étape par étape :
• Aucune valeur consommée tant qu’on n’itère pas.

Ordre des opérations :
• Création lazy.

Cas d'utilisation courants :
• Passer à any/all/sum sans liste.

Cas limites :
• Syntaxe ambiguë avec tuples : virgule finale.

Considérations de performance :
• Faible empreinte initiale.

Exemples :
• type([x for x in range(3)]) serait list.

Remarques :
• Réponse : class generator (1re option).`,

  2266: `g = (x**2 for x in range(3)) ; a = list(g) ; b = list(g)

Débutant :
• Premier list épuise g ; second list sur générateur vide → [].

Intermédiaire :
• Les générateurs ne « reviennent » pas au début.

Expert :
• Pour rejouer, recréer le genexpr ou utiliser une liste.

Concepts clés :
• Itérateur à usage unique.

Distinctions clés :
• Liste Python serait réitérable.

Fonctionnement :
• Deuxième list déclenche immédiatement StopIteration.

Exécution étape par étape :
• b reste [].

Ordre des opérations :
• a prend [0,1,4] puis g mort.

Cas d'utilisation courants :
• Éviter de réutiliser un générateur épuisé par erreur.

Cas limites :
• tee de itertools pour dupliquer.

Considérations de performance :
• Économie mémoire vs relecture.

Exemples :
• Voir banque.

Remarques :
• Réponse : [] (1re option).`,

  2267: `Générateur infini n += 1 ; cinq next via compréhension

Débutant :
• Premier next 0, puis 1,2,3,4 → liste de cinq premiers entiers.

Intermédiaire :
• while True sans limite mais seulement cinq next demandés.

Expert :
• Risque si on list() sans borne : infini.

Concepts clés :
• Générateur infini borné par consommation.

Distinctions clés :
• Pas [0..5] en six éléments : cinq appels seulement.

Fonctionnement :
• État n persistant.

Exécution étape par étape :
• Cinq incréments après init 0.

Ordre des opérations :
• Compréhension de next.

Cas d'utilisation courants :
• Streams, simulations.

Cas limites :
• Précision entiers très grands OK en Python.

Considérations de performance :
• O(k) pour k next.

Exemples :
• itertools.count similaire.

Remarques :
• Réponse : [0, 1, 2, 3, 4].`,

  2268: `yield 1 puis return "done" — premier next(g)

Débutant :
• Le premier next s’arrête au yield → 1.

Intermédiaire :
• La valeur "done" apparaît dans StopIteration.value au second next, pas comme retour direct de next.

Expert :
• PEP 380 sémantique return dans générateur.

Concepts clés :
• yield vs return en générateur.

Distinctions clés :
• next ne renvoie pas "done" tout de suite.

Fonctionnement :
• Machine à états du générateur suspendue après premier yield.

Exécution étape par étape :
• Un seul next dans la question.

Ordre des opérations :
• yield avant return.

Cas d'utilisation courants :
• Résultats finaux via asyncio.Task hors scope.

Cas limites :
• yield from sous-générateur transmet valeur.

Considérations de performance :
• N/A.

Exemples :
• Second next → StopIteration value done.

Remarques :
• Réponse : 1.`,

  2269: `fibonacci générateur — sept premiers next

Débutant :
• Suite classique 0,1,1,2,3,5,8 pour sept termes.

Intermédiaire :
• a, b = b, a+b met à jour en une assignation tuple.

Expert :
• Générateur infini tronqué par range(7) de next.

Concepts clés :
• Fibonacci, tuple unpacking, yield.

Distinctions clés :
• Ne commence pas par 1,1 selon cette implémentation.

Fonctionnement :
• État a,b partagé dans le frame générateur.

Exécution étape par étape :
• Sept yields.

Ordre des opérations :
• Compréhension [next(g) for _ in range(7)].

Cas d'utilisation courants :
• Flux de nombres sans liste complète.

Cas limites :
• Croissance exponentielle temps récursif naïf hors générateur.

Considérations de performance :
• Linéaire en k pour k next.

Exemples :
• Huitième serait 13.

Remarques :
• Réponse : [0, 1, 1, 2, 3, 5, 8].`,

  2270: `def gen(n): yield from range(n) ; yield from range(n) — list(gen(3))

Débutant :
• Deux fois 0,1,2 concaténés par yields successifs → six éléments.

Intermédiaire :
• Les deux yield from s’exécutent séquentiellement dans le même générateur.

Expert :
• Équivalent à itertools.chain(range(n), range(n)).

Concepts clés :
• Enchaînement de sous-itérables.

Distinctions clés :
• Pas [0,1,2,3,4,5].

Fonctionnement :
• Premier range épuisé puis second.

Exécution étape par étape :
• Six valeurs.

Ordre des opérations :
• n=3 fixé.

Cas d'utilisation courants :
• Fusionner segments paresseusement.

Cas limites :
• n=0 → deux séquences vides.

Considérations de performance :
• Toujours paresseux avant list.

Exemples :
• gen(1) → [0,0].

Remarques :
• Réponse : [0, 1, 2, 0, 1, 2].`,

  2271: `x = 1 global ; def f(): return x — f()

Débutant :
• Pas d’assignation locale à x dans f : lecture du global → 1.

Intermédiaire :
• LEGB : pas L, pas E, trouve G.

Expert :
• Si f assignait x sans global, autre histoire.

Concepts clés :
• Lecture de global.

Distinctions clés :
• Pas d’erreur.

Fonctionnement :
• LOAD_GLOBAL x.

Exécution étape par étape :
• Un appel.

Ordre des opérations :
• def puis f().

Cas d'utilisation courants :
• Constantes module-level.

Cas limites :
• Shadowing ultérieur.

Considérations de performance :
• Lookup global.

Exemples :
• Voir 2277 pour rebinding.

Remarques :
• Réponse : 1.`,

  2272: `x=1 ; def f(): x=2 ; f() ; x au module

Débutant :
• x=2 est local à f ; le global x reste 1.

Intermédiaire :
• Assignation crée locale sans toucher au global.

Expert :
• print(x) dans f verrait 2.

Concepts clés :
• Assignation → local par défaut.

Distinctions clés :
• Pas besoin de global pour lire avant assign ? Ici assign donc local seulement.

Fonctionnement :
• Binding global inchangé.

Exécution étape par étape :
• f() termine, locale détruite.

Ordre des opérations :
• Après f(), évaluer x module.

Cas d'utilisation courants :
• Éviter effets de bord sur globals.

Cas limites :
• nonlocal autre cas.

Considérations de performance :
• Négligeable.

Exemples :
• global x dans f pour changer module.

Remarques :
• Réponse : 1.`,

  2273: `def f(): global x ; x=2 ; f() ; x

Débutant :
• global annonce la cible module ; x devient 2 partout au module.

Intermédiaire :
• Sans global, x=2 serait locale et NameError si x lu avant.

Expert :
• Anti-pattern fréquent pour état global mutable.

Concepts clés :
• global, mutation du binding module.

Distinctions clés :
• Diffère de nonlocal.

Fonctionnement :
• STORE_GLOBAL.

Exécution étape par étape :
• Après f(), x module vaut 2.

Ordre des opérations :
• f() puis lecture x.

Cas d'utilisation courants :
• Scripts courts ; à éviter en libs.

Cas limites :
• x non défini avant → bind global créé ? Ici x=1 avant dans banque implicite - actually question might start x=1 - the bank says global x=2 - assume x exists.

Considérations de performance :
• Négligeable.

Exemples :
• Voir banque anglaise.

Remarques :
• Réponse : 2.`,

  2274: `f avec x=1 ; g nonlocal x x=2 ; g() ; return x

Débutant :
• nonlocal modifie le x de f ; return voit 2.

Intermédiaire :
• g sans nonlocal créerait locale ou erreur selon usage.

Expert :
• Cellule partagée entre f et g.

Concepts clés :
• nonlocal, helper nested.

Distinctions clés :
• Pas global module.

Fonctionnement :
• x dans f passe à 2.

Exécution étape par étape :
• g() pour effet puis return.

Ordre des opérations :
• Définitions puis f() appelée (question demande valeur de f()).

Cas d'utilisation courants :
• Petits compteurs encapsulés.

Cas limites :
• nonlocal sans binding englobant → erreur compile.

Considérations de performance :
• Négligeable.

Exemples :
• Voir niveau 7 intermédiaire a.

Remarques :
• Réponse : 2.`,

  2275: `g assigne x=2 sans nonlocal ; return x dans f

Débutant :
• Le x de g masque une nouvelle locale ; le x de f reste 1.

Intermédiaire :
• return x lit le x de f, pas celui de g.

Expert :
• La valeur 2 dans g est perdue si non retournée.

Concepts clés :
• Shadowing interne sans nonlocal.

Distinctions clés :
• Contraste avec 2274.

Fonctionnement :
• x_f inchangé.

Exécution étape par étape :
• g() exécute assignation locale ; f return 1.

Ordre des opérations :
• Appel f() entier.

Cas d'utilisation courants :
• Piège de portée en refactoring.

Cas limites :
• UnboundLocal si g lisait x avant assign local.

Considérations de performance :
• Négligeable.

Exemples :
• Ajouter nonlocal pour 2.

Remarques :
• Réponse : 1.`,
};
