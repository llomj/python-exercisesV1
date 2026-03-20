/** Level 7 FR 2351–2375 — level7_expert_b.ts Q1–25 (reduce, partial début) */
export default {
  2351: `reduce(lambda a,b: a+b, [1,2,3,4])

Débutant :
• functools.reduce applique la fonction deux à deux de gauche à droite : ((1+2)+3)+4 = 10.

Intermédiaire :
• En Python 3, reduce vit dans functools, pas en built-in global.

Expert :
• Pour une simple somme, sum() est plus idiomatique.

Concepts clés :
• Accumulateur, pliage (fold), itérable.

Distinctions clés :
• Pas le produit 24 ni la liste inchangée.

Fonctionnement :
• Premier couple (1,2)→3, puis (3,3)→6, puis (6,4)→10.

Exécution étape par étape :
• Trois applications du lambda pour quatre éléments.

Ordre des opérations :
• Ordre gauche-droite garanti.

Cas d'utilisation courants :
• Agrégations custom ; enseignement programmation fonctionnelle.

Cas limites :
• Itérable vide sans initial : TypeError.

Considérations de performance :
• O(n) ; reduce en pur Python peut être plus lent que sum C.

Exemples :
• Voir produit avec * au Q suivant.

Remarques :
• Réponse : 10.`,

  2352: `reduce(lambda a,b: a*b, [1,2,3,4])

Débutant :
• Produit cumulatif : ((1*2)*3)*4 = 24.

Intermédiaire :
• En 3.8+, math.prod fait pareil pour les nombres.

Expert :
• Même schéma que la somme mais avec l’opérateur multiplicatif.

Concepts clés :
• Identité multiplicative 1 si besoin d’initial (voir 2359).

Distinctions clés :
• Pas 10.

Fonctionnement :
• 1*2=2, 2*3=6, 6*4=24.

Exécution étape par étape :
• Trois étapes pour quatre facteurs.

Ordre des opérations :
• Associativité de * sur les int : ordre stable.

Cas d'utilisation courants :
• Factorielles via range.

Cas limites :
• Overflow n’existe pas pour les int Python.

Considérations de performance :
• math.prod souvent préférable.

Exemples :
• reduce(mul, ...) avec operator.mul.

Remarques :
• Réponse : 24.`,

  2353: `reduce(..., [1,2,3,4], 10)

Débutant :
• Le troisième argument est la valeur initiale : 10+1+2+3+4 = 20.

Intermédiaire :
• Avec initial, itérable vide → retour de l’initial sans appeler le lambda.

Expert :
• Utile pour typage ou neutre différent du premier élément.

Concepts clés :
• Initializer / valeur de départ.

Distinctions clés :
• Pas 10 ni 14.

Fonctionnement :
• a commence à 10 puis fusion avec chaque élément.

Exécution étape par étape :
• Quatre appels après l’init.

Ordre des opérations :
• Init puis éléments dans l’ordre.

Cas d'utilisation courants :
• Somme avec offset, sécurité sur [].

Cas limites :
• Un seul élément : init op x.

Considérations de performance :
• N/A.

Exemples :
• reduce sur [], 0 → 0.

Remarques :
• Réponse : 20.`,

  2354: `reduce(lambda a,b: max(a,b), [3,1,4,1,5])

Débutant :
• À chaque pas on garde le plus grand ; le maximum global est 5.

Intermédiaire :
• Équivalent à max() sur cette liste.

Expert :
• Réduction générique pour toute opération binaire associative (max l’est sur totalement ordonné).

Concepts clés :
• Comparaisons successives.

Distinctions clés :
• Pas 3 ni 1.

Fonctionnement :
• Chaîne 3→4→4→5.

Exécution étape par étape :
• Quatre étapes pour cinq nombres.

Ordre des opérations :
• Paire initiale (3,1) puis résultat suivant.

Cas d'utilisation courants :
• Pédagogie ; max natif en prod.

Cas limites :
• Liste d’un élément : cet élément.

Considérations de performance :
• max() built-in plus direct.

Exemples :
• Variante min pour le minimum.

Remarques :
• Réponse : 5.`,

  2355: `reduce sur ["hello", " ", "world"]

Débutant :
• Concaténation : "hello" + " " + "world" → "hello world".

Intermédiaire :
• str.join est préférable pour de grandes listes (coût des copies intermédiaires).

Expert :
• reduce fonctionne sur tout type supportant l’opérateur binaire choisi.

Concepts clés :
• + sur str est concaténation.

Distinctions clés :
• Pas "helloworld" sans espace (l’espace est un élément à part).

Fonctionnement :
• Deux étapes de + pour trois chaînes.

Exécution étape par étape :
• "hello"+" " puis +"world".

Ordre des opérations :
• Ordre de la liste respecté.

Cas d'utilisation courants :
• Démonstrations pédagogiques.

Cas limites :
• Liste vide sans init : erreur.

Considérations de performance :
• O(n²) pire cas si chaînes longues concaténées naïvement.

Exemples :
• join(" ", ["hello","world"]).

Remarques :
• Réponse : "hello world" (1re option).`,

  2356: `reduce lambda a,b: a if a > b else b sur [3,7,2,8,1]

Débutant :
• Même effet que max : le plus grand est 8.

Intermédiaire :
• Expression conditionnelle Python ternaire.

Expert :
• Montre qu’on peut coder max à la main dans reduce.

Concepts clés :
• Réduction avec logique custom.

Distinctions clés :
• Pas 7 seul.

Fonctionnement :
• 3 vs 7→7, vs 2→7, vs 8→8, vs 1→8.

Exécution étape par étape :
• Quatre comparaisons.

Ordre des opérations :
• Évaluation paresseuse du ternaire par appel.

Cas d'utilisation courants :
• Critères non standards (avec tuple comparison).

Cas limites :
• NaN brise la totalité d’ordre classique.

Considérations de performance :
• max() plus simple.

Exemples :
• Inverser pour le minimum.

Remarques :
• Réponse : 8.`,

  2357: `reduce lambda a,b: {**a,**b} sur trois dicts

Débutant :
• Fusion pairwise : d’abord a+b, puis fusion avec c → clés a,b,c avec valeurs 1,2,3.

Intermédiaire :
• Clés dupliquées : la dernière fusion écrase (ex. deux fois "x").

Expert :
• En 3.9+, a|b|c peut remplacer pour deux dicts à la fois par étapes similaires.

Concepts clés :
• Unpacking de dictionnaires en littéral.

Distinctions clés :
• Pas seulement le dernier dict.

Fonctionnement :
• {**a,**b} crée un nouveau dict à chaque étape.

Exécution étape par étape :
• Deux fusions pour trois dicts.

Ordre des opérations :
• Ordre de la liste détermine la priorité des clés en conflit.

Cas d'utilisation courants :
• Configs empilées.

Cas limites :
• Valeurs non hashables dans les clés : impossible en dict de toute façon.

Considérations de performance :
• Copies successives.

Exemples :
• Voir banque x écrasé.

Remarques :
• Réponse : {"a":1,"b":2,"c":3} (formulation QCM).`,

  2358: `reduce(lambda a,b: a+[b], [1,2,3], [])

Débutant :
• Partir de [] puis ajouter chaque élément par concaténation → [1,2,3].

Intermédiaire :
• Peu idiomatique ; list(seq) ou compréhension suffisent.

Expert :
• coût quadratique si la liste grandit beaucoup (copies répétées).

Concepts clés :
• Initial [] comme accumulateur liste.

Distinctions clés :
• Pas 6 ni liste de listes [[1],[2],[3]] ici.

Fonctionnement :
• []+[1], puis [1]+[2], etc.

Exécution étape par étape :
• Trois étapes.

Ordre des opérations :
• Immutabilité apparente : nouvelles listes à chaque +.

Cas d'utilisation courants :
• Illustration de reduce.

Cas limites :
• [] d’entrée avec init [] → [].

Considérations de performance :
• Préférer append dans une boucle ou list comp.

Exemples :
• Variante b*2 sur éléments.

Remarques :
• Réponse : [1, 2, 3] (1re option).`,

  2359: `reduce(lambda a,b: a*b, [2,3,4], 1)

Débutant :
• 1 * 2 * 3 * 4 = 24 ; 1 est l’élément neutre de la multiplication.

Intermédiaire :
• reduce sur [] avec init 1 retourne 1.

Expert :
• Parallèle avec init 0 pour +.

Concepts clés :
• Identité multiplicative.

Distinctions clés :
• Pas 10.

Fonctionnement :
• Même produit que sans init si la liste non vide et premier élément multiplié après 1.

Exécution étape par étape :
• 1→2→6→24.

Ordre des opérations :
• Init puis éléments.

Cas d'utilisation courants :
• Produit sûr avec liste potentiellement vide.

Cas limites :
• Voir 2360 pour + et [].

Considérations de performance :
• N/A.

Exemples :
• factorial n via range.

Remarques :
• Réponse : 24.`,

  2360: `reduce(lambda a,b: a+b, [], 0)

Débutant :
• Itérable vide : reduce renvoie l’initial 0 sans invoquer le lambda.

Intermédiaire :
• Sans initial sur [] : TypeError.

Expert :
• Pattern défensif pour agrégations.

Concepts clés :
• Short-circuit sur vide.

Distinctions clés :
• Pas None ni erreur ici.

Fonctionnement :
• Aucun appel à la fonction binaire.

Exécution étape par étape :
• Retour immédiat.

Ordre des opérations :
• Vérification de longueur d’abord en interne.

Cas d'utilisation courants :
• sum potentiellement vide.

Cas limites :
• Initial mal choisi pour l’opération (ex. * avec 0).

Considérations de performance :
• O(1) sur vide.

Exemples :
• reduce sur [], "" pour str.

Remarques :
• Réponse : 0.`,

  2361: `partial(add, 5) puis add5(3)

Débutant :
• partial fixe le premier argument : add(5,3) = 8.

Intermédiaire :
• Objet partial expose .func, .args, .keywords.

Expert :
• Ordre : args fixés d’abord, puis ceux du nouvel appel.

Concepts clés :
• Application partielle (style FP).

Distinctions clés :
• Pas 5 ni 3 seuls comme résultat.

Fonctionnement :
• Concaténation des tuples d’arguments au call.

Exécution étape par étape :
• Un seul appel effectif à add.

Ordre des opérations :
• Évaluation de add5(3).

Cas d'utilisation courants :
• Callbacks, CLI, currying léger.

Cas limites :
• Trop d’arguments : TypeError selon signature.

Considérations de performance :
• Très léger.

Exemples :
• partial(sorted, key=len).

Remarques :
• Réponse : 8.`,

  2362: `partial(pow, 2) puis pow2(10)

Débutant :
• pow(2, 10) = 2**10 = 1024.

Intermédiaire :
• partial(pow, 2) fixe la base, l’exposant vient de l’appel.

Expert :
• pow trois arguments (modulo) possible avec partial plus riche.

Concepts clés :
• Premier argument de pow figé.

Distinctions clés :
• Pas 20 ni 100.

Fonctionnement :
• pow2(10) → pow(2, 10).

Exécution étape par étape :
• Un appel built-in.

Ordre des opérations :
• Exposant entier : puissance exacte int.

Cas d'utilisation courants :
• Familles 2**n, 10**n.

Cas limites :
• Grands exposants : big int.

Considérations de performance :
• pow optimisé.

Exemples :
• pow2(8) → 256.

Remarques :
• Réponse : 1024.`,

  2363: `partial(int, base=2) sur "1010"

Débutant :
• int("1010", 2) = 10 en décimal.

Intermédiaire :
• base est un mot-clé figé dans le partial.

Expert :
• Binaire valide : caractères 0-1 seulement.

Concepts clés :
• Conversion de base.

Distinctions clés :
• Pas la chaîne "1010" ni 2.

Fonctionnement :
• Digits interprétés en place binaire.

Exécution étape par étape :
• 8+2 = 10.

Ordre des opérations :
• str passée en premier argument positionnel à int.

Cas d'utilisation courants :
• Parsing binaire, flags.

Cas limites :
• "102" en base 2 → ValueError.

Considérations de performance :
• N/A.

Exemples :
• "1111" → 15.

Remarques :
• Réponse : 10.`,

  2364: `partial(print, "Hello") puis greet("World")

Débutant :
• print("Hello", "World") avec sep espace par défaut → affichage Hello World.

Intermédiaire :
• print renvoie None ; la question porte sur l’effet observable.

Expert :
• end et sep peuvent être partialement fixés aussi.

Concepts clés :
• Arguments positionnels concaténés à print.

Distinctions clés :
• Pas seulement World.

Fonctionnement :
• "Hello" pré-rempli, "World" ajouté.

Exécution étape par étape :
• Un appel print.

Ordre des opérations :
• Évaluation des args avant print.

Cas d'utilisation courants :
• Préfixe log.

Cas limites :
• Fichier=file en partial.

Considérations de performance :
• I/O.

Exemples :
• Voir banque greet("Python").

Remarques :
• Réponse : imprime Hello World (1re option).`,

  2365: `partial(sorted, key=len) sur ["hi","hello","hey"]

Débutant :
• Longueurs 2, 5, 3 → ordre croissant par len : hi, hey, hello.

Intermédiaire :
• Tri stable : égalités de longueur conservent l’ordre relatif.

Expert :
• key=len évite lambda x: len(x) répété.

Concepts clés :
• Fonction clé de tri.

Distinctions clés :
• Pas ordre alphabétique brut.

Fonctionnement :
• sorted appelé avec key fixé.

Exécution étape par étape :
• Comparaison par longueurs uniquement.

Ordre des opérations :
• Nouvelle liste retournée.

Cas d'utilisation courants :
• Tri de chaînes par longueur, données tabulaires.

Cas limites :
• None dans la liste : len échoue.

Considérations de performance :
• O(n log n).

Exemples :
• Voir banque.

Remarques :
• Réponse : ["hi", "hey", "hello"] (1re option).`,

  2366: `partial(max, key=abs) sur (-10, 5, -3)

Débutant :
• Plus grande magnitude absolue : |-10|=10 ; max retourne l’élément d’origine -10.

Intermédiaire :
• Ce n’est pas 10 (valeur de la clé) mais la valeur réelle -10.

Expert :
• Égalité |5| et |-5| : le premier max gagnant dépend de l’ordre (stabilité interne).

Concepts clés :
• key compare, valeur retournée est l’objet initial.

Distinctions clés :
• Pas 5.

Fonctionnement :
• max parcourt le tuple avec key=abs.

Exécution étape par étape :
• Comparaisons sur 10, 5, 3.

Ordre des opérations :
• Un seul appel.

Cas d'utilisation courants :
• Signaux, vecteurs.

Cas limites :
• Liste vide : ValueError.

Considérations de performance :
• N/A.

Exemples :
• Voir banque f(1,-2,3)→3.

Remarques :
• Réponse : -10 (1re option).`,

  2367: `Que fait functools.partial ?

Débutant :
• Crée un nouveau callable avec une partie des arguments déjà liés.

Intermédiaire :
• Ni « exécuter à moitié » au sens thread, ni découper le code source.

Expert :
• Implémenté comme type partial avec attributs introspectables.

Concepts clés :
• Application partielle, closure + stockage args/kw.

Distinctions clés :
• Pas split de fonction.

Fonctionnement :
• Au call, fusion des args figés et nouveaux.

Exécution étape par étape :
• Construction de l’objet partial puis __call__.

Ordre des opérations :
• kwargs du partial mélangés avec ceux du call.

Cas d'utilisation courants :
• Réduction de arity pour APIs.

Cas limites :
• Signatures vérifiées seulement à l’exécution.

Considérations de performance :
• Léger overhead vs lambda fermée manuellement.

Exemples :
• power avec exp=2.

Remarques :
• Réponse : nouvelle fonction avec arguments pré-remplis (1re option).`,

  2368: `partial(int, base=16) sur "ff"

Débutant :
• 15*16+15 = 255.

Intermédiaire :
• Préfixe 0x non requis ici : int parse la str en hex.

Expert :
• Lettres a-f insensibles à la casse.

Concepts clés :
• Base 16.

Distinctions clés :
• Pas 16 ni "ff".

Fonctionnement :
• int interprète chaque digit hex.

Exécution étape par étape :
• f=15.

Ordre des opérations :
• Validation des caractères.

Cas d'utilisation courants :
• Couleurs, adresses.

Cas limites :
• "gg" invalide.

Considérations de performance :
• N/A.

Exemples :
• "10" hex → 16.

Remarques :
• Réponse : 255.`,

  2369: `partial(lambda a,b,c: a+b+c, 1, 2) puis f(3)

Débutant :
• 1+2+3 = 6.

Intermédiaire :
• Deux positions fixées, une libre.

Expert :
• Mélange partial + lambda rare en prod mais valide.

Concepts clés :
• Enchaînement des arguments positionnels.

Distinctions clés :
• Pas 3 seul.

Fonctionnement :
• Appel final (1,2,3).

Exécution étape par étape :
• Une somme.

Ordre des opérations :
• partial lie de gauche à droite.

Cas d'utilisation courants :
• Templates numériques.

Cas limites :
• Oublier un argument restant → TypeError.

Considérations de performance :
• N/A.

Exemples :
• f(10)→13.

Remarques :
• Réponse : 6.`,

  2370: `f.func pour partial(pow, 2)

Débutant :
• L’attribut .func pointe vers la fonction d’origine, ici pow.

Intermédiaire :
• .args vaut (2,) ici ; .keywords souvent {}.

Expert :
• Utile pour tests et sérialisation partielle.

Concepts clés :
• Introspection du partial.

Distinctions clés :
• Pas le partial lui-même ni None.

Fonctionnement :
• Référence directe au built-in pow.

Exécution étape par étape :
• Accès attribut sans appel.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Wrappers, debug.

Cas limites :
• partial imbriqués : .func chaîne.

Considérations de performance :
• N/A.

Exemples :
• int avec base=16 → .keywords.

Remarques :
• Réponse : la fonction d’origine pow (1re option).`,

  2371: `@lru_cache fib(10)

Débutant :
• Suite de Fibonacci : F(10)=55 avec F(0)=0,F(1)=1 selon la définition du snippet.

Intermédiaire :
• lru_cache évite la re-explosion exponentielle des appels.

Expert :
• maxsize par défaut 128 sur @lru_cache sans parenthèses.

Concepts clés :
• Mémoïsisation, sous-problèmes partagés.

Distinctions clés :
• Pas 89 (décalage de définition possible si F(1)=1,F(2)=1 mais ici base du code).

Fonctionnement :
• n<2 retourne n sinon somme deux appels.

Exécution étape par étape :
• Table remplie jusqu’à 10.

Ordre des opérations :
• Cohérent avec banque anglaise.

Cas d'utilisation courants :
• DP top-down.

Cas limites :
• Récursion profonde sans sys.setrecursionlimit.

Considérations de performance :
• Avec cache : linéaire en n.

Exemples :
• fib(20) 6765.

Remarques :
• Réponse : 55.`,

  2372: `Pourquoi lru_cache accélère Fibonacci récursif ?

Débutant :
• Les résultats fib(k) déjà calculés sont réutilisés au lieu d’être recalculés en arborescence.

Intermédiaire :
• Complexité passe d’exponentielle à linéaire en n (temps et espace de cache).

Expert :
• Ce n’est pas du parallélisme ni une transformation itérative automatique.

Concepts clés :
• Sous-problèmes qui se chevauchent.

Distinctions clés :
• Pas « réduit la pile » comme réponse principale.

Fonctionnement :
• Dict clé = arguments, valeur = résultat.

Exécution étape par étape :
• Premier appel fib(k) calcule ; suivants hit cache.

Ordre des opérations :
• LRU évince si maxsize fini.

Cas d'utilisation courants :
• Toute fonction pure avec répétition d’args.

Cas limites :
• Args non hashables interdits.

Considérations de performance :
• Hits massifs sur fib.

Exemples :
• Voir comparaison avec / sans cache.

Remarques :
• Réponse : met en cache les résultats déjà calculés (1re option).`,

  2373: `@lru_cache(maxsize=32) — rôle de maxsize

Débutant :
• Nombre maximal d’entrées distinctes conservées avant éviction LRU.

Intermédiaire :
• Pas la profondeur de récursion ni la taille des arguments.

Expert :
• None = illimité (comme functools.cache).

Concepts clés :
• Politique LRU.

Distinctions clés :
• Pas temps d’exécution max.

Fonctionnement :
• Quand plein, la moins récemment utilisée est retirée.

Exécution étape par étape :
• Miss ajoute ; hit rafraîchit l’ordre.

Ordre des opérations :
• Statistiques via cache_info().

Cas d'utilisation courants :
• Borner la mémoire.

Cas limites :
• maxsize=0 : cache désactivé (comportement documenté).

Considérations de performance :
• Tuning hit/miss.

Exemples :
• Voir 2374.

Remarques :
• Réponse : nombre max de résultats en cache (1re option).`,

  2374: `f(3) deux fois puis cache_info()

Débutant :
• Premier appel miss, second hit → hits=1, misses=1, currsize=1, maxsize=128 par défaut.

Intermédiaire :
• currsize compte les clés distinctes, pas le nombre d’appels.

Expert :
• Tuple nommé CacheInfo.

Concepts clés :
• Statistiques du décorateur.

Distinctions clés :
• Pas hits=2 misses=0 (deuxième était hit mais premier était miss).

Fonctionnement :
• Compteurs mis à jour à chaque appel.

Exécution étape par étape :
• Deux traversées de la logique de cache.

Ordre des opérations :
• Évaluation de f.cache_info() en fin de chaîne.

Cas d'utilisation courants :
• Observabilité.

Cas limites :
• cache_clear remet à zéro.

Considérations de performance :
• Lecture O(1).

Exemples :
• Voir banque avec f(4).

Remarques :
• Réponse : hits=1, misses=1, maxsize=128, currsize=1 (1re option).`,

  2375: `cache_clear() sur fonction lru_cache

Débutant :
• Vide le cache et remet les compteurs (currsize à 0, hits/misses à 0 selon impl CPython documentée).

Intermédiaire :
• Ne supprime pas le décorateur ni ne redéfinit la fonction Python.

Expert :
• Utile quand les données externes rendent le cache obsolète.

Concepts clés :
• Invalidation manuelle.

Distinctions clés :
• Pas erreur par défaut.

Fonctionnement :
• Structure interne du wrapper vidée.

Exécution étape par étape :
• Prochains appels sont des misses.

Ordre des opérations :
• Appel explicite.

Cas d'utilisation courants :
• Reload config, tests.

Cas limites :
• Concurrence : besoin de discipline thread-safe au-delà du simple clear.

Considérations de performance :
• Libère la mémoire des entrées.

Exemples :
• Voir banque après plusieurs valeurs.

Remarques :
• Réponse : efface tous les résultats mis en cache (1re option).`,
};
