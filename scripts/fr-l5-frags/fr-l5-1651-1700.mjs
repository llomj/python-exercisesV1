/** Level 5 FR 1651–1700 — level5_intermediate_b.ts questions 1–50 (ensembles, tri par clé, zip, map, filter). */
export default {
  1651: `La bonne réponse est « set » : les accolades avec des valeurs séparées par des virgules (sans paires clé:valeur) créent un ensemble.

Débutant :
• {1, 2, 3} est un littéral d’ensemble ; chaque élément est une valeur simple.
• Les ensembles stockent des éléments uniques et n’ont pas d’ordre garanti.

Intermédiaire :
• La même syntaxe {} sert aussi aux dictionnaires ; la présence de « : » entre éléments bascule vers dict.
• type({1, 2, 3}) donne <class 'set'>.

Expert :
• Les ensembles s’appuient sur le hachage des éléments ; seuls les objets hachables peuvent y figurer.

Concepts clés :
• Littéral set ; ambiguïté avec {} pour dict ; unicité implicite.

Distinctions clés :
• set de valeurs vs dict de paires ; liste [] ordonnée et duplicable ; tuple () immuable ordonné.

Fonctionnement :
• L’analyseur lit les accolades, voit des valeurs sans deux-points, et construit un objet set.

Exécution étape par étape :
1. Évaluation du littéral {1, 2, 3}.
2. Déduplication éventuelle si doublons dans le littéral.
3. Retour d’un set contenant 1, 2 et 3.

Ordre des opérations :
• Le littéral est une expression unique ; type() s’applique ensuite à l’objet déjà construit.

Cas d'utilisation courants :
• Tests d’appartenance rapides ; déduplication ; opérations ensemblistes (union, intersection).

Cas limites :
• {} seul crée un dict vide, pas un set ; utiliser set() pour un set vide.

Considérations de performance :
• Appartenance en O(1) en moyenne ; utile pour de gros volumes.

Exemples :
• type({"a": 1}) → dict ; type({1, 2}) → set.

Remarques :
• Retenez : valeurs seules → set ; clés avec « : » → dict.`,

  1652: `La bonne réponse est « {1, 2, 3} » : set([1, 2, 2, 3]) parcourt l’itérable et ne garde qu’une fois chaque valeur.

Débutant :
• set() accepte toute séquence itérable (liste, tuple, chaîne…).
• Les doublons de la liste disparaissent dans l’ensemble résultat.

Intermédiaire :
• On raisonne sur un set sans index : pas d’accès par position comme pour une liste.
• set("hello") produit les caractères uniques, pas les lettres répétées.

Expert :
• La construction parcourt l’itérable une fois ; la complexité dépend de la taille et du coût de hachage.

Concepts clés :
• Constructeur set(iterable) ; unicité ; itération sur la source.

Distinctions clés :
• set([...]) déduplique ; list(set(...)) recrée une liste sans doublons (l’ordre des uniques peut différer de l’ordre d’origine selon versions / usage).

Fonctionnement :
• Pour chaque élément de l’itérable, insertion dans la table de hachage du set si absent.

Exécution étape par étape :
1. Liste [1, 2, 2, 3] évaluée.
2. Parcours : 1, puis 2, puis 2 ignoré, puis 3.
3. Ensemble final {1, 2, 3}.

Ordre des opérations :
• D’abord l’argument itérable, puis les insertions successives dans le set.

Cas d'utilisation courants :
• Compter des uniques : len(set(data)) ; nettoyer des entrées utilisateur.

Cas limites :
• Éléments non hachables (ex. list) → TypeError.

Considérations de performance :
• Linéaire en la taille de l’itérable en pratique pour des types hachables usuels.

Exemples :
• set((1, 1, 2)) → {1, 2}.

Remarques :
• Pour préserver l’ordre tout en dédupliquant, dict.fromkeys ou un dict ordonné est une autre idiom.`,

  1653: `La bonne réponse est « un ensemble vide » : set() sans argument crée un set vide ; {} crée un dict vide.

Débutant :
• Tapez set() pour obtenir un ensemble sans élément.
• {} seul est réservé historiquement au dictionnaire vide.

Intermédiaire :
• len(set()) vaut 0 ; type(set()) est set.
• Un singleton {x} avec une valeur est un set non vide.

Expert :
• La disambiguation syntaxique explique pourquoi il n’existe pas de littéral {} pour set.

Concepts clés :
• set() constructeur ; piège {} ; dict vide vs set vide.

Distinctions clés :
• set() vs {} ; set() vs frozenset() (mutabilité différente).

Fonctionnement :
• Appel de constructeur sans argument → allocation d’un set interne vide.

Exécution étape par étape :
1. set() invoqué.
2. Objet set créé, aucun élément.
3. Référence renvoyée à l’appelant.

Ordre des opérations :
• Évaluation des arguments (aucun) puis construction.

Cas d'utilisation courants :
• Initialiser un accumulateur d’éléments uniques avant des .add() en boucle.

Cas limites :
• Ne pas confondre avec frozenset() qui est aussi « vide » mais immuable.

Considérations de performance :
• Coût négligeable ; réutiliser un même set vide n’a pas de sens — on réutilise l’objet muté.

Exemples :
• s = set(); s.add(1) → {1}.

Remarques :
• Mémorisez : ensemble vide = set(), jamais {}.`,

  1654: `La bonne réponse est « <class 'dict'> » : les accolades vides {} instancient un dictionnaire vide, pas un set.

Débutant :
• type({}) renvoie la classe dict.
• Pour un set vide, utilisez set().

Intermédiaire :
• {1} ou {1, 2} sont des sets car ce sont des valeurs sans deux-points.
• {"clé": 1} est un dict à une entrée.

Expert :
• Compatibilité historique : {} était dict avant l’introduction des sets en langage.

Concepts clés :
• Littéral {} ; type() ; ambiguïté résolue par la présence de clés.

Distinctions clés :
• type({}) vs type(set()) vs type({0}).

Fonctionnement :
• Le littéral {} est directement mappé au constructeur interne de dict.

Exécution étape par étape :
1. {} parsé comme dict vide.
2. type appliqué → <class 'dict'>.

Ordre des opérations :
• Création du littéral puis appel type.

Cas d'utilisation courants :
• Vérifier le type après une API qui renvoie {} par défaut.

Cas limites :
• frozenset n’intervient pas ici ; seul {} pose le piège.

Considérations de performance :
• Identique à toute création de petit dict vide.

Exemples :
• d = {}; d["x"] = 1 fonctionne ; s = {} puis s.add provoquerait une erreur (dict n’a pas add de set).

Remarques :
• Question classique en entretien : toujours mentionner set() pour set vide.`,

  1655: `La bonne réponse est « 3 » : dans {1, 2, 3, 3}, le second 3 est fusionné ; len compte trois éléments distincts.

Débutant :
• len sur un set compte les uniques seulement.
• Écrire deux fois la même valeur dans un littéral set ne double pas la taille.

Intermédiaire :
• Même principe après set([1,1,1,1]) → un seul élément.
• len(set()) vaut 0.

Expert :
• La contrainte d’unicité est une invariante du type set.

Concepts clés :
• Littéral set avec doublons ; len() ; cardinalité.

Distinctions clés :
• len(liste avec doublons) vs len(set(...)) sur la même donnée brute.

Fonctionnement :
• Construction du set : chaque valeur n’est stockée qu’une fois ; len lit la taille de la table.

Exécution étape par étape :
1. Littéral {1, 2, 3, 3} normalisé en {1, 2, 3}.
2. len appliqué → 3.

Ordre des opérations :
• D’abord construction du set, puis appel len.

Cas d'utilisation courants :
• Vérifier rapidement combien de valeurs distinctes existent dans une liste.

Cas limites :
• Objet égal mais différent type peut coller selon __eq__/__hash__ (hors portée débutante ici).

Considérations de performance :
• len est O(1) sur set.

Exemples :
• len({True, 1}) peut surprendre : bool et int égaux → souvent 1 élément.

Remarques :
• Pour cette question, seuls des entiers distincts + un doublon évident → 3.`,

  1656: `La bonne réponse est « {1, 2, 3, 4, 5} » : l’opérateur | sur des sets est l’union — toutes les valeurs présentes dans l’un ou l’autre ensemble, sans doublon.

Débutant :
• {1, 2, 3} | {3, 4, 5} regroupe 1, 2, 3, 4 et 5.
• Le 3 commun n’apparaît qu’une fois.

Intermédiaire :
• Les opérandes ne sont pas modifiés ; un nouveau set est renvoyé.
• Équivalent méthode : {1,2,3}.union({3,4,5}).

Expert :
• Complexité dépend des tailles ; implémentation CPython optimisée.

Concepts clés :
• Union binaire | ; unicité ; immutabilité des opérandes.

Distinctions clés :
• | vs & (intersection) vs - (différence) vs ^ (différence symétrique).

Fonctionnement :
• Fusion des tables de hachage des deux sets dans un nouveau set.

Exécution étape par étape :
1. Gauche {1,2,3}, droite {3,4,5}.
2. Insertion de tous les éléments distincts.
3. Résultat {1,2,3,4,5}.

Ordre des opérations :
• Évaluation des deux littéraux puis application de |.

Cas d'utilisation courants :
• Fusionner des tags, des ID utilisateurs, des permissions.

Cas limites :
• Union avec set() laisse l’autre ensemble inchangé en contenu.

Considérations de performance :
• Préférer des updates in-place (|= sur variable) si vous construisez gros volumes en boucle.

Exemples :
• {1}|{2} → {1,2}.

Remarques :
• Retenez la famille d’opérateurs bitwise pour les opérations ensemblistes.`,

  1657: `La bonne réponse est « {2, 3} » : & calcule l’intersection — seuls les éléments présents dans les deux sets.

Débutant :
• 2 et 3 appartiennent à {1, 2, 3} et à {2, 3, 4}.
• 1 et 4 ne sont pas partout → exclus.

Intermédiaire :
• .intersection({...}) accepte aussi d’autres itérables.
• Si aucun commun : résultat set().

Expert :
• Peut se généraliser à plusieurs arguments en méthode .intersection.

Concepts clés :
• Intersection ; opérateur & ; éléments communs.

Distinctions clés :
• & vs | (union) ; intersection ≠ « concaténation » de listes.

Fonctionnement :
• Parcours ou lookup : ne garder que les clés de A présentes dans B.

Exécution étape par étape :
1. Candidats dans le premier set.
2. Filtrage par appartenance au second.
3. {2, 3}.

Ordre des opérations :
• Deux littéraux puis &.

Cas d'utilisation courants :
• Recouvrement de deux listes de compétences, de jours disponibles, etc.

Cas limites :
• Sets disjoints → intersection vide.

Considérations de performance :
• Efficace grâce au hachage.

Exemples :
• {1}&{2} → set().

Remarques :
• isdisjoint teste si l’intersection est vide sans la matérialiser entièrement dans certains cas.`,

  1658: `La bonne réponse est « {1} » : la différence A - B garde ce qui est dans A mais pas dans B ; 2 et 3 sont retirés car dans le second set.

Débutant :
• Partez du set de gauche et « enlevez » tout ce qui apparaît à droite.
• Ici seul 1 reste.

Intermédiaire :
• L’ordre compte : {2,3,4}-{1,2,3} donnerait {4}, pas la même chose.
• .difference() est l’équivalent méthode.

Expert :
• Chaîner A-B-C revient à soustraire successivement l’union des droites selon l’expression.

Concepts clés :
• Différence ensembliste ; asymétrie ; - binaire sur sets.

Distinctions clés :
• - vs ^ (symétrique) ; - vs &.

Fonctionnement :
• Nouveau set contenant les éléments de A absents de B.

Exécution étape par étape :
1. A = {1,2,3}, B = {2,3,4}.
2. Retrait de 2 et 3.
3. {1}.

Ordre des opérations :
• Évaluation des deux opérandes puis soustraction ensembliste.

Cas d'utilisation courants :
• « Tags actifs moins tags archivés » ; diff de deux jeux d’ID.

Cas limites :
• Si B ⊇ A, résultat set().

Considérations de performance :
• Linéaire en la taille des ensembles en pratique.

Exemples :
• {1,2}-set() → {1,2}.

Remarques :
• Ne confondez pas avec la soustraction numérique sur int.`,

  1659: `La bonne réponse est « {1, 4} » : ^ est la différence symétrique — éléments dans exactement un des deux sets, pas dans les deux.

Débutant :
• 1 n’est que dans le premier ; 4 n’est que dans le second (attention : 4 est dans {2,3,4}).
• 2 et 3 sont dans les deux → exclus.

Intermédiaire :
• (A|B)-(A&B) et (A-B)|(B-A) donnent le même résultat que A^B pour les sets.

Expert :
• frozenset supporte aussi ^ avec le même sens.

Concepts clés :
• Différence symétrique ; opérateur ^ ; XOR ensembliste.

Distinctions clés :
• ^ vs | ; ^ vs -.

Fonctionnement :
• Union des éléments appartenant à un seul des deux ensembles.

Exécution étape par étape :
1. Uniquement à gauche : {1}.
2. Uniquement à droite : {4}.
3. Union {1,4}.

Ordre des opérations :
• Deux littéraux puis ^.

Cas d'utilisation courants :
• Mesurer ce qui diffère entre deux snapshots (ajouts+retraits combinés).

Cas limites :
• Si A==B, ^ donne set().

Considérations de performance :
• Même ordre de grandeur que union/intersection.

Exemples :
• {1,2}^{2,3} → {1,3}.

Remarques :
• Utile pour expliquer « changements » sans distinguer ajout vs retrait dans le libellé.`,

  1660: `La bonne réponse est « True » : chaque élément de {1, 2} est aussi dans {1, 2, 3}, donc c’est un sous-ensemble.

Débutant :
• issubteste « tout ce qui est dans le petit est dans le grand ».
• Ici 1 et 2 sont tous deux présents.

Intermédiaire :
• Équivalent à A <= B pour les sets.
• Un ensemble est toujours sous-ensemble de lui-même.

Expert :
• set() est sous-ensemble de tout set.

Concepts clés :
• Relation ⊆ ; méthode issubset ; comparaisons d’ensembles.

Distinctions clés :
• issubset vs issuperset ; issubset vs < (strict).

Fonctionnement :
• Pour chaque x dans A, vérifier x ∈ B.

Exécution étape par étape :
1. Vérifier 1 ∈ {1,2,3} → oui.
2. Vérifier 2 ∈ {1,2,3} → oui.
3. True.

Ordre des opérations :
• Création des littéraux puis appel de méthode.

Cas d'utilisation courants :
• Valider qu’un ensemble de flags requis est couvert par les flags disponibles.

Cas limites :
• Si A a un élément hors B → False.

Considérations de performance :
• Implémentation optimisée en CPython.

Exemples :
• {3}.issubset({1,2}) → False.

Remarques :
• issuperset est la relation inverse.`,

  1661: `La bonne réponse est « True » : {1, 2, 3} contient tous les éléments de {1, 2}, donc il est sur-ensemble (issuperset).

Débutant :
• « Superset » = le grand contient tout le petit.
• 1 et 2 sont bien dans {1,2,3}.

Intermédiaire :
• Équivalent à A >= B ; symétrique de issubset : B.issubset(A) ↔ A.issuperset(B).

Expert :
• Tester la vacuité : tout ensemble est sur-ensemble de set().

Concepts clés :
• Relation ⊇ ; méthode issuperset ; dualité avec issubset.

Distinctions clés :
• issuperset vs > (strict) ; contient vs est égal.

Fonctionnement :
• Pour chaque x dans B, vérifier x ∈ A.

Exécution étape par étape :
1. 1 ∈ A oui, 2 ∈ A oui.
2. True.

Ordre des opérations :
• Littéraux puis appel issuperset.

Cas d'utilisation courants :
• Vérifier qu’un jeu de permissions couvre un sous-ensemble minimal.

Cas limites :
• Si B a un élément absent de A → False.

Considérations de performance :
• Similaire à issubset.

Exemples :
• {1}.issuperset({1,2}) → False.

Remarques :
• Lisez toujours la direction : qui appelle la méthode sur qui.`,

  1662: `La bonne réponse est « True » : {1, 2} et {3, 4} n’ont aucun élément en commun → isdisjoint renvoie True.

Débutant :
• Disjoint = « pas d’intersection ».
• Aucun nombre n’apparaît dans les deux sets.

Intermédiaire :
• Équivalent logique : len(A & B) == 0 (conceptuellement).
• Symétrique : A.isdisjoint(B) == B.isdisjoint(A).

Expert :
• Peut court-circuiter dès qu’un commun est trouvé.

Concepts clés :
• isdisjoint ; ensembles disjoints ; intersection vide.

Distinctions clés :
• disjoint vs issubset ; True ici signifie zéro chevauchement.

Fonctionnement :
• Parcours optimisé pour détecter une collision de hachage/égalité entre les deux sets.

Exécution étape par étape :
1. Comparer les éléments (implémentation interne).
2. Aucun match → True.

Ordre des opérations :
• Construction des sets puis appel isdisjoint.

Cas d'utilisation courants :
• Vérifier que deux plages d’ID, deux fichiers de clés, n’entrent pas en conflit.

Cas limites :
• Deux sets vides : intersection vide → True (souvent considéré disjoint).

Considérations de performance :
• Peut être plus rapide que matérialiser l’intersection.

Exemples :
• {1}.isdisjoint({1}) → False.

Remarques :
• Ne confondez pas « disjoint » avec « différent ».`,

  1663: `La bonne réponse est « False » : le 2 est partagé par {1, 2} et {2, 3}, donc les ensembles ne sont pas disjoints.

Débutant :
• Dès qu’un élément commun existe, isdisjoint est False.
• Ici 2 suffit.

Intermédiaire :
• Le test s’arrête souvent dès la première collision trouvée.

Expert :
• Utile pour valider des contraintes d’unicité entre deux flux de données.

Concepts clés :
• Faux positif sur « disjoint » ; élément commun unique.

Distinctions clés :
• False ici vs True quand aucun chevauchement.

Fonctionnement :
• Détection d’au moins une valeur dans A ∩ B.

Exécution étape par étape :
1. Repérer 2 dans les deux.
2. Retour False.

Ordre des opérations :
• Littéraux puis isdisjoint.

Cas d'utilisation courants :
• Détecter collision entre « réservé » et « demandé ».

Cas limites :
• Ensembles identiques non vides : intersection non vide → False.
• Deux ensembles vides : intersection vide → isdisjoint renvoie True.

Considérations de performance :
• Court-circuit possible.

Exemples :
• {2}.isdisjoint({2}) → False.

Remarques :
• Reliez mentalement à l’intersection non vide.`,

  1664: `La bonne réponse est « {1, 2, 3} » : add(3) modifie le set sur place ; print affiche l’ensemble enrichi.

Débutant :
• add ajoute un élément à l’ensemble.
• La méthode renvoie None ; l’effet est sur s.

Intermédiaire :
• Si 3 était déjà présent, le set resterait identique (pas d’erreur).
• On n’utilise pas append (réservé aux listes).

Expert :
• Complexité amortie O(1) pour hachage stable.

Concepts clés :
• Mutation de set ; add vs update ; effet de bord.

Distinctions clés :
• add un seul élément vs update(iterable).

Fonctionnement :
• Insertion dans la table de hachage du set si la clé absente.

Exécution étape par étape :
1. s = {1,2}.
2. s.add(3) → {1,2,3}.
3. print(s) affiche {1, 2, 3}.

Ordre des opérations :
• Assignation, puis add, puis print.

Cas d'utilisation courants :
• Construire un set de valeurs vues en parcourant un flux.

Cas limites :
• Élément non hachable → TypeError.

Considérations de performance :
• Préférable à vérifier l’appartenance puis append sur liste pour l’unicité.

Exemples :
• s={1}; s.add(1); print(s) → {1}.

Remarques :
• Retenez : sets → add ; listes → append.`,

  1665: `La bonne réponse est « {1, 3} » : discard(2) enlève 2 s’il est présent ; ici il l’est, il reste {1, 3}.

Débutant :
• discard retire un élément sans erreur si absent (contrairement à remove pour l’absence).
• Renvoie None ; s est modifié.

Intermédiaire :
• Idéal quand l’élément « peut-être » dans le set.
• remove lève KeyError si manquant.

Expert :
• Implémentation CPython : suppression douce dans la table.

Concepts clés :
• discard ; suppression sûre ; mutation in-place.

Distinctions clés :
• discard vs remove vs pop (pop renvoie un élément arbitraire).

Fonctionnement :
• Si clé présente, suppression ; sinon no-op.

Exécution étape par étape :
1. s = {1,2,3}.
2. discard(2) → {1,3}.
3. print → {1, 3}.

Ordre des opérations :
• Assignation, discard, print.

Cas d'utilisation courants :
• Nettoyer des tags optionnels sans branche if.

Cas limites :
• discard sur set vide : pas d’erreur si l’élément n’existe pas.

Considérations de performance :
• O(1) amorti en moyenne.

Exemples :
• {1}.discard(99) → set inchangé.

Remarques :
• Choisissez remove quand l’absence doit signaler un bug.`,

  1666: `La bonne réponse est « {1, 2, 3} » : discard(5) ne trouve pas 5 ; discard ne lève rien — le set reste identique.

Débutant :
• « Jeter » une valeur absente est silencieux avec discard.
• print montre toujours les trois éléments.

Intermédiaire :
• Pattern typique : retirer peut-être sans if x in s.

Expert :
• Différence pédagogique clé avec remove qui aurait levé KeyError.

Concepts clés :
• No-op sûr ; discard et absence d’élément.

Distinctions clés :
• Comportement vs remove(5) sur le même s.

Fonctionnement :
• Recherche de 5 ; échec → retour sans modification.

Exécution étape par étape :
1. s inchangé après discard(5).
2. print {1,2,3}.

Ordre des opérations :
• discard puis print.

Cas d'utilisation courants :
• Décrémenter un cache permissif, idempotence.

Cas limites :
• None comme élément : discard(None) ne confond pas avec « rien ».

Considérations de performance :
• Un seul lookup raté.

Exemples :
• s.discard(5) deux fois : toujours ok.

Remarques :
• Si vous devez savoir si quelque chose a été retiré, pop ou remove avec try.`,

  1667: `La bonne réponse est « KeyError » : remove(5) exige que 5 soit présent ; sinon Python lève KeyError (comme dict).

Débutant :
• remove est « strict » : élément manquant → exception.
• Ici 5 ∉ {1,2,3}.

Intermédiaire :
• Capturer avec try/except KeyError ou tester avec in avant remove.
• discard éviterait l’erreur.

Expert :
• Le message d’erreur inclut souvent la clé manquante.

Concepts clés :
• remove ; KeyError ; contrat strict.

Distinctions clés :
• remove vs discard sur élément absent.

Fonctionnement :
• Lookup ; si absent, lever KeyError.

Exécution étape par étape :
1. remove(5) sur {1,2,3}.
2. Exception KeyError.

Ordre des opérations :
• remove évalué après création de s.

Cas d'utilisation courants :
• Invariant métier : « cet ID doit exister avant retrait ».

Cas limites :
• Multithreading : même problème qu’avec toute structure partagée.

Considérations de performance :
• Coût d’exception élevé si utilisé en boucle sur chemins d’échec ; préférer in ou discard.

Exemples :
• {1}.remove(1) → set() sans erreur.

Remarques :
• Même famille d’erreur que accès dict clé absente.`,

  1668: `La bonne réponse est « Non, frozenset est immuable » : on ne peut pas add/remove sur un frozenset après création.

Débutant :
• frozenset = set figé ; lecture et opérations créant de nouveaux frozensets seulement.
• Immuable ⇒ hachable (si contenu hachable).

Intermédiaire :
• fs | autre renvoie un nouveau frozenset si l’autre est frozenset/set compatible.
• Peut servir de clé de dict ou élément d’un set.

Expert :
• AttributError si vous appelez add sur frozenset.

Concepts clés :
• Immuabilité ; hachabilité ; frozenset vs set.

Distinctions clés :
• frozenset([1,2,3]) mutable ? Non. set([1,2,3]) ? Oui.

Fonctionnement :
• Construction une fois ; pas de méthodes mutatrices exposées.

Exécution étape par étape :
1. frozenset([1,2,3]) créé.
2. Toute tentative add → erreur ou refus API.

Ordre des opérations :
• N/A pour mutation — il n’y en a pas.

Cas d'utilisation courants :
• Clés composites en dict ; membres d’ensembles d’ensembles.

Cas limites :
• frozenset contenant des listes impossibles (non hachable).

Considérations de performance :
• Même accès lecture qu’un set.

Exemples :
• {frozenset({1,2}): 0} est valide.

Remarques :
• Choisissez frozenset dès que l’intégrité du jeu d’éléments doit être garantie.`,

  1669: `La bonne réponse est « Non, les listes ne sont pas hachables » : les éléments d’un set doivent être hachables ; une liste est mutable donc pas hashable.

Débutant :
• Vous ne pouvez pas écrire {[1, 2]} dans un set → TypeError unhashable type: 'list'.

Intermédiaire :
• Indirection : utilisez un tuple (1, 2) si le contenu est figé et hachable.

Expert :
• __hash__ absent ou None pour list en CPython.

Concepts clés :
• Hachabilité ; mutabilité ; contrainte des sets.

Distinctions clés :
• list vs tuple pour membres de set ; dict/set non hachables non plus.

Fonctionnement :
• Lors de l’insertion, calcul de hash requis → échec pour list.

Exécution étape par étape :
1. Tentative de construire set contenant [1,2].
2. TypeError.

Ordre des opérations :
• Construction du conteneur interne échoue.

Cas d'utilisation courants :
• Représenter des positions par tuple, pas par liste.

Cas limites :
• tuple contenant une liste → encore non hachable.

Considérations de performance :
• N/A — erreur avant usage.

Exemples :
• {(1, 2)} OK ; {[1, 2]} KO.

Remarques :
• Reliez à dict dont les clés obéissent à la même règle.`,

  1670: `La bonne réponse est « Oui, les tuples sont hachables » : un tuple immuable dont les éléments sont hachables peut être membre d’un set.

Débutant :
• {(1, 2), (3, 4)} est valide.
• Le tuple se comporte comme une valeur « fixe ».

Intermédiaire :
• (1, [2]) n’est pas hachable à cause de la liste interne.

Expert :
• Hachage dérivé récursivement des éléments du tuple.

Concepts clés :
• Tuple hachable ; immuabilité shallow ; membres de set.

Distinctions clés :
• tuple vs list comme éléments ; tuple « impur » avec list interdit.

Fonctionnement :
• Calcul du hash du tuple à partir de ses composantes.

Exécution étape par étape :
1. Création de tuples (1,2) et (3,4).
2. Insertion dans le set sans erreur.

Ordre des opérations :
• Littéral set de tuples évalué normalement.

Cas d'utilisation courants :
• Paires (ligne, colonne), (user_id, rôle) comme clés implicites dans un set.

Cas limites :
• Tuple vide () est hachable ; singleton attention aux types internes.

Considérations de performance :
• Hash et égalité rapides pour petits tuples d’ints.

Exemples :
• {(0, 0), (1, 1)} pour points discrets.

Remarques :
• Si vous avez besoin de modifier la « ligne », utilisez une structure mutable ailleurs, pas comme membre de set.`,

  1671: `La bonne réponse est « {1, 2, 3, 4, 5} » : union({4, 5}) fusionne avec le récepteur ; même idée que l’opérateur | mais forme méthode.

Débutant :
• {1,2,3}.union({4,5}) ajoute 4 et 5 au résultat logique.
• Ni l’appelant ni l’argument ne sont obligés d’être le « même » type iterable pour certaines variantes — ici des sets.

Intermédiaire :
• union accepte plusieurs itérables : a.union(b, c).
• | exige typiquement des sets des deux côtés.

Expert :
• Retourne un nouveau set ; pas de mutation du récepteur.

Concepts clés :
• Méthode union ; fusion ; non-mutation.

Distinctions clés :
• .union vs |= (IOR update) ; .union vs |.

Fonctionnement :
• Parcours des éléments de tous les arguments pour remplir un nouveau set.

Exécution étape par étape :
1. Partir de {1,2,3}.
2. Ajouter 4, 5.
3. {1,2,3,4,5}.

Ordre des opérations :
• Littéraux puis appel .union.

Cas d'utilisation courants :
• Fusionner plusieurs itérables dont certains ne sont pas des sets.

Cas limites :
• union() sans argument renvoie une copie superficielle du set.

Considérations de performance :
• Pour de très nombreuses petites unions répétées, envisager update in-place.

Exemples :
• {1}.union([2,3]) → {1,2,3}.

Remarques :
• | reste lisible pour deux sets fixes.`,

  1672: `La bonne réponse est « {2, 3} » : intersection avec {2, 3, 4} ne garde que 2 et 3, communs aux deux côtés.

Débutant :
• Même résultat que & pour deux sets.
• 1 et 4 sont éliminés.

Intermédiaire :
• Peut prendre plusieurs arguments : tous doivent contenir la valeur pour qu’elle survive.

Expert :
• Généralisation naturelle de l’opérateur binaire &.

Concepts clés :
• .intersection ; éléments communs ; nouveau set.

Distinctions clés :
• intersection vs union ; intersection vs isdisjoint.

Fonctionnement :
• Filtrer le récepteur par appartenance aux autres ensembles fournis.

Exécution étape par étape :
1. Candidats 1,2,3 dans le récepteur.
2. Conserver seulement 2 et 3 présents dans {2,3,4}.
3. {2,3}.

Ordre des opérations :
• Méthode après création des littéraux.

Cas d'utilisation courants :
• Recouvrement multi-sources : a.intersection(b, c).

Cas limites :
• intersection vide si aucun commun.

Considérations de performance :
• CPython optimise les opérations ensemblistes.

Exemples :
• {1,2,3}.intersection({9}) → set().

Remarques :
• Pour deux sets seulement, & est souvent plus court à lire.`,

  1673: `La bonne réponse est « {1} » : difference({2,3}) enlève du récepteur tout ce qui est dans l’argument ; il reste 1.

Débutant :
• Même sens que l’opérateur - : « dans le premier mais pas dans le second ».
• 2 et 3 partent.

Intermédiaire :
• .difference accepte plusieurs itérables : éléments à soustraire s’accumulent.

Expert :
• difference_update muterait le récepteur ; difference non.

Concepts clés :
• .difference ; anti-join ensembliste ; immutabilité du récepteur via nouveau set.

Distinctions clés :
• difference vs symmetric_difference ; difference vs remove unitaire.

Fonctionnement :
• Copie logique du récepteur puis retrait de tous les éléments vus dans les arguments.

Exécution étape par étape :
1. {1,2,3} moins {2,3}.
2. {1}.

Ordre des opérations :
• Évaluation des littéraux puis appel.

Cas d'utilisation courants :
• Nettoyer un ensemble A des IDs déjà traités dans B.

Cas limites :
• Si l’argument est vide, le récepteur est recopié intégralement.

Considérations de performance :
• Linéaire en tailles combinées en pratique.

Exemples :
• {1,2}.difference({1,2}) → set().

Remarques :
• difference_update est la variante in-place fréquente en boucle.`,

  1674: `La bonne réponse est « [1, 2, 3] » : sorted accepte n’importe quel itérable et renvoie toujours une nouvelle liste triée, ici à partir d’un set.

Débutant :
• Peu importe l’ordre d’itération du set {3,1,2} : sorted impose l’ordre croissant par défaut.
• Le résultat est une liste, pas un set ni un tuple.

Intermédiaire :
• sorted ne modifie pas le set d’origine.
• Pour trier une liste in-place : .sort().

Expert :
• Timsort sous-jacent ; stable.

Concepts clés :
• sorted(iterable) → list ; tri ascendant par défaut ; set en entrée.

Distinctions clés :
• sorted vs list.sort ; sorted vs order preserved data types.

Fonctionnement :
• Matérialise les éléments du set, les trie, emballe dans une list.

Exécution étape par étape :
1. Extraire 3,1,2 du set.
2. Trier numériquement.
3. [1,2,3].

Ordre des opérations :
• Littéral set puis appel sorted.

Cas d'utilisation courants :
• Affichage déterministe d’éléments uniques.

Cas limites :
• Éléments non comparables entre eux → TypeError.

Considérations de performance :
• O(n log n) pour le tri ; extraction O(n).

Exemples :
• sorted({}) → [].

Remarques :
• Si vous avez besoin d’un set trié « vivant », gardez set + sorted à la volée ou utilisez structures spécialisées.`,

  1675: `La bonne réponse est « 4 » : len(list(set("hello"))) compte les caractères distincts de "hello" — h, e, l, o — soit quatre lettres après déduplication.

Débutant :
• "hello" contient deux « l » mais le set n’en garde qu’un.
• list(...) ne change pas le cardinal ici, seulement le type.

Intermédiaire :
• len("hello") serait 5 ; len(set(...)) mesure l’unicité.

Expert :
• len ne dépend pas de l’ordre d’itération ; seul le cardinal compte ici.

Concepts clés :
• set sur str ; unicité des caractères ; len et list wrapper.

Distinctions clés :
• longueur chaîne vs nombre de caractères uniques.

Fonctionnement :
• Itération caractère par caractère, insertion dans set, comptage final.

Exécution étape par étape :
1. set("hello") → {'h','e','l','o'}.
2. list → quatre éléments.
3. len → 4.

Ordre des opérations :
• set puis list puis len, de l’intérieur vers l’extérieur.

Cas d'utilisation courants :
• Vérifier si une chaîne est un pangramme partiel ; compter alphabet utilisé.

Cas limites :
• Chaîne vide → 0.

Considérations de performance :
• O(n) pour parcourir la chaîne.

Exemples :
• len(set("aaa")) → 1.

Remarques :
• Pour préserver l’ordre d’apparition des uniques, autres idioms (dict.fromkeys) existent.`,

  1676: `La bonne réponse est « ["apple", "banana", "cherry"] » : key=len trie par longueur ; « apple » (5) puis les deux mots de 6 lettres, avec stabilité donc banana avant cherry.

Débutant :
• key reçoit chaque élément et renvoie une valeur de comparaison ; ici la longueur.
• Les chaînes ne sont pas réordonnées lexicalement ici mais par len.

Intermédiaire :
• Tri stable : à longueur égale (6), l’ordre relatif banana/cherry de l’entrée est conservé.

Expert :
• Les clés ne sont pas recalculées à chaque comparaison inutilement dans l’implémentation (optimisations internes).

Concepts clés :
• Paramètre key de sorted ; len sur str ; stabilité.

Distinctions clés :
• Tri par longueur vs tri alphabétique brut.

Fonctionnement :
• Calcul len pour chaque mot, tri sur ces entiers, réarrangement des originaux.

Exécution étape par étape :
1. Clés : banana 6, apple 5, cherry 6.
2. Ordre croissant des clés : 5 puis 6 puis 6 stable.
3. ["apple","banana","cherry"].

Ordre des opérations :
• Liste littérale puis sorted avec key.

Cas d'utilisation courants :
• Ordonner des noms de fichiers par taille, des phrases par nombre de mots.

Cas limites :
• Mélange de types non comparables via key mal choisie → erreur.

Considérations de performance :
• Coût du key sur chaque élément.

Exemples :
• sorted(["aaa","bb","c"], key=len) → ["c","bb","aaa"].

Remarques :
• reverse=True inverse l’ordre des clés len.`,

  1677: `La bonne réponse est « ["apple", "Banana", "Cherry"] » : key=str.lower compare en insensible à la casse mais restitue les chaînes d’origine dans l’ordre induit par les clés minuscules.

Débutant :
• Clés : "apple", "banana", "cherry" — ordre alphabétique standard.
• Les majuscules d’origine sont conservées à l’affichage.

Intermédiaire :
• Sans key, "Banana" passerait avant "apple" en ASCII brut (majuscules < minuscules).

Expert :
• str.lower est une méthode unbound passée telle quelle ; équivalent lambda s: s.lower().

Concepts clés :
• Tri insensible à la casse ; key=str.lower ; préservation de la casse source.

Distinctions clés :
• lower pour comparaison vs .lower() copie explicite des chaînes.

Fonctionnement :
• Appliquer lower à chaque élément pour obtenir la clé de tri.

Exécution étape par étape :
1. Clés banana, apple, cherry en minuscules.
2. Ordre apple < banana < cherry.
3. Réinsertion des originaux.

Ordre des opérations :
• split implicite non — ici liste déjà fournie ; sorted évalue key après liste.

Cas d'utilisation courants :
• Listes de noms utilisateur, titres, sans punir les majuscules accidentelles.

Cas limites :
• Locales et accents : lower simple ne suffit pas toujours pour l’humain (hors sujet ici).

Considérations de performance :
• lower alloue des chaînes temporaires.

Exemples :
• sorted(["Z","a"], key=str.lower) → ["a","Z"] (stable tie sur clé).

Remarques :
• Pour unicode avancé, normalisation NFC + casefold peut être nécessaire.`,

  1678: `La bonne réponse est « [(2,"a"),(1,"b"),(3,"c")] » : la clé lambda x: x[1] extrait le second champ de chaque tuple ; l’ordre alphabétique sur "a","b","c" impose cet arrangement.

Débutant :
• x[1] est la deuxième composante du tuple.
• Les tuples entiers se déplacent, pas seulement les lettres.

Intermédiaire :
• Généralisable à des enregistrements (nom, score, …) triés par score.

Expert :
• itemgetter(1) de operator serait une micro-optimisation lisible.

Concepts clés :
• lambda comme key ; indexation tuple ; tri par champ.

Distinctions clés :
• Trier par x[0] vs x[1] change totalement l’ordre.

Fonctionnement :
• Calcul des secondes composantes "b","a","c" puis tri stable sur ces clés.

Exécution étape par étape :
1. Clés b, a, c.
2. Ordre a < b < c.
3. Tuples (2,a), (1,b), (3,c).

Ordre des opérations :
• Liste de tuples puis sorted.

Cas d'utilisation courants :
• Classements, tris multi-colonnes simples.

Cas limites :
• Tuple trop court → IndexError dans la key.

Considérations de performance :
• lambda légère ; itemgetter pour hot paths.

Exemples :
• sorted([(1,10),(2,9)], key=lambda x:x[1]) → [(2,9),(1,10)] si 9<10… wait (2,9) first → [(2,9),(1,10)].

Remarques :
• Pour plusieurs critères, tuple de clés : key=lambda x: (x[1], x[0]).`,

  1679: `La bonne réponse est « [-1, 2, 3, -4] » : key=abs trie selon la valeur absolue 1,2,3,4 mais la sortie conserve signes d’origine.

Débutant :
• Les clés sont |3|,|-1|,|2|,|-4| → 3,1,2,4.
• Ordre croissant des clés : 1,2,3,4 → valeurs -1,2,3,-4.

Intermédiaire :
• Le résultat n’est pas la liste des abs ; seule la comparaison utilise abs.

Expert :
• min(..., key=abs) renverrait -1 (plus petite magnitude).

Concepts clés :
• Tri par valeur absolue ; préservation des valeurs signées.

Distinctions clés :
• sorted(..., key=abs) vs sorted(map(abs,...)) (perte du signe).

Fonctionnement :
• abs invoquée une fois par élément comme clé.

Exécution étape par étape :
1. Clés 3,1,2,4.
2. Tri 1,2,3,4.
3. Mapping inverse signes → -1,2,3,-4.

Ordre des opérations :
• Liste puis sorted avec key=abs.

Cas d'utilisation courants :
• Ordonner des écarts autour de zéro par proximité.

Cas limites :
• Types non numériques → TypeError avec abs.

Considérations de performance :
• abs est très rapide.

Exemples :
• sorted([-5,1,-2], key=abs) → [1,-2,-5].

Remarques :
• Pour entiers uniquement, astuce de négation pour décroissant numérique, pas pour str.`,

  1680: `La bonne réponse est « ["Hello", "World"] » : split produit ["Hello","World"] ; avec key=str.lower les clés "hello" et "world" sont déjà dans l’ordre alphabétique, donc l’ordre d’entrée est conservé.

Débutant :
• split() coupe sur espaces par défaut.
• Comparaison insensible à la casse ne permute pas ici car h < w en minuscules et l’entrée était déjà dans cet ordre logique.

Intermédiaire :
• Si l’on avait ["World","Hello"], le tri aurait inversé en ["Hello","World"] aussi.

Expert :
• Chaînage .split() puis sorted(..., key=str.lower) est un motif fréquent de normalisation.

Concepts clés :
• split ; sorted+key ; stabilité et cas où rien ne bouge visuellement.

Distinctions clés :
• Résultat garde la casse d’origine des tokens.

Fonctionnement :
• split crée la liste ; sorted calcule clés lower ; ordre final.

Exécution étape par étape :
1. ["Hello","World"].
2. Clés hello, world.
3. Ordre inchangé.

Ordre des opérations :
• split évalué en argument de sorted.

Cas d'utilisation courants :
• Mots-clés utilisateur avant indexation.

Cas limites :
• Multiples espaces : split sans arg compresse les séparateurs.

Considérations de performance :
• Petit n — négligeable.

Exemples :
• sorted("a B".split(), key=str.lower) → ["a","B"] ou ["B","a"]? "a"<"b" → ["a","B"].

Remarques :
• strip() peut compléter si ponctuation parasite.`,

  1681: `La bonne réponse est « [4, 3, 2, 1, 0] » : key=lambda x: -x transforme 0..4 en clés 0,-1,-2,-3,-4 ; le tri ascendant sur ces clés place les originaux en ordre décroissant.

Débutant :
• sorted trie toujours « vers le haut » sur la clé ; nier la clé inverse l’ordre des originaux numériques.
• range(5) donne 0,1,2,3,4.

Intermédiaire :
• Équivalent plus lisible : sorted(range(5), reverse=True).

Expert :
• Astuce numérique seulement ; pour str préférez reverse=True ou clé dédiée.

Concepts clés :
• Clé négative ; tri décroissant indirect ; range.

Distinctions clés :
• lambda x:-x vs reverse=True ; perte de lisibilité possible.

Fonctionnement :
• Calcul des clés négatives puis tri stable sur ces clés.

Exécution étape par étape :
1. Éléments 0,1,2,3,4 ; clés 0,-1,-2,-3,-4.
2. Ordre croissant des clés : -4,-3,-2,-1,0.
3. Originaux : 4,3,2,1,0.

Ordre des opérations :
• range(5) puis sorted avec key.

Cas d'utilisation courants :
• Classements « top scores » sans reverse explicite (style code golf).

Cas limites :
• Overflow théorique sur entiers énormes (hors pratique Python int).

Considérations de performance :
• Identique asymptotiquement à un tri normal.

Exemples :
• sorted([1,2], key=lambda x:-x) → [2,1].

Remarques :
• En compétition de code seulement ; en production préférez reverse=True.`,

  1682: `La bonne réponse est « [(1, 1), (1, 3), (2, 2)] » : sans key, Python compare les tuples lexicographiquement : d’abord le premier champ, puis le second en cas d’égalité.

Débutant :
• (1,1) et (1,3) partagent le premier 1 ; on tranche avec 1 < 3 → (1,1) avant (1,3).
• (1,3) vs (2,2) : 1 < 2 → (1,3) avant (2,2).

Intermédiaire :
• Même règle que l’ordre du dictionnaire pour des mots lettre par lettre.

Expert :
• Fonctionne pour types comparables à chaque position.

Concepts clés :
• Ordre lexicographique sur tuples ; comparaison multi-niveaux.

Distinctions clés :
• Tri tuple par défaut vs sorted(..., key=lambda t:t[1]) seulement sur le second champ.

Fonctionnement :
• Comparaisons successives d’indices 0, puis 1, etc., jusqu’à décision.

Exécution étape par étape :
1. Plus petit au niveau (1,*) : paires (1,1) puis (1,3).
2. Puis (2,2).

Ordre des opérations :
• Liste de tuples puis sorted sans key.

Cas d'utilisation courants :
• Tri (année, mois), (priorité, nom).

Cas limites :
• Types hétérogènes non comparables → TypeError.

Considérations de performance :
• Timsort exploite des runs déjà partiellement ordonnés.

Exemples :
• sorted([(2,1),(1,9)]) → [(1,9),(2,1)].

Remarques :
• Pour inverser un seul champ, une key reste plus claire.`,

  1683: `La bonne réponse est « Oui, les éléments égaux gardent leur ordre relatif » : le tri de Python (Timsort) est stable ; sorted et list.sort partagent cette garantie.

Débutant :
• Stabilité = si deux éléments « ex aequo », celui qui était avant reste avant.
• Utile pour enchaîner plusieurs tris par critères différents.

Intermédiaire :
• Documenté ; ne dépend pas du paramètre key pour la définition de « égal ».

Expert :
• Permet le motif : tri secondaire d’abord, puis tri primaire.

Concepts clés :
• Tri stable ; Timsort ; préservation d’ordre relatif.

Distinctions clés :
• Stable vs instable (certains algorithmes académiques ne le sont pas).

Fonctionnement :
• Lors de fusions, on privilégie l’élément de la moitié gauche en cas d’égalité de clé.

Exécution étape par étape :
1. Partition / fusion Timsort.
2. Égalités résolues sans permuter l’ordre d’origine des jumeaux.

Ordre des opérations :
• N/A expression unique — propriété algorithmique.

Cas d'utilisation courants :
• Tri tableau : d’abord par nom, puis par score sans casser l’égalité nom.

Cas limites :
• Égalité au sens de comparaison des clés uniquement.

Considérations de performance :
• Timsort O(n log n) pire cas, bon sur données presque triées.

Exemples :
• sorted(["b","A","a","B"], key=str.lower) illustre stabilité avec groupes de clés identiques.

Remarques :
• Ne supposez pas la stabilité pour des tris maison naïfs.`,

  1684: `La bonne réponse est « [False, True, True] » : bool est un sous-type de int ; False trie comme 0, True comme 1, d’où l’ordre croissant [False, True, True].

Débutant :
• False < True en comparaison booléenne directe aussi.
• sorted renvoie une nouvelle liste.

Intermédiaire :
• True+True vaut 2 en Python — à connaître mais à utiliser avec parcimonie.

Expert :
• Évitez d’exploiter bool comme int en code de production sauf idiome très local.

Concepts clés :
• bool sous-type de int ; tri numérique implicite ; False=0 True=1.

Distinctions clés :
• sorted de bool vs sorted de ["True","False"] chaînes.

Fonctionnement :
• Comparaisons déléguées aux règles numériques des bool.

Exécution étape par étape :
1. Valeurs True, False, True.
2. Clés effectives 1,0,1.
3. Ordre 0 puis 1 puis 1 stable → False, True, True.

Ordre des opérations :
• Liste littérale puis sorted.

Cas d'utilisation courants :
• Ordonner des flags avant affichage déterministe.

Cas limites :
• Mélange int et bool : comparables car même famille.

Considérations de performance :
• Trivial.

Exemples :
• sorted([True, False]) → [False, True].

Remarques :
• Préférez expliciter int(x) si la lecture humaine doit souligner le cast.`,

  1685: `La bonne réponse est « ["A", "a", "b", "B"] » : les clés lower sont a,a,b,b ; tri stable : dans chaque groupe de clé identique, l’ordre d’entrée est conservé — « A » avant « a », « b » avant « B ».

Débutant :
• Deux étapes de clés « a » puis deux « b ».
• Stabilité explique pourquoi les majuscules internes ne se regroupent pas toutes ensemble visuellement par casse.

Intermédiaire :
• Montre l’interaction key + stable sort.

Expert :
• Pour un ordre « toutes minuscules puis majuscules » global différent, il faudrait une autre clé.

Concepts clés :
• key=str.lower ; stabilité ; regroupement par clé avec sous-ordre d’origine.

Distinctions clés :
• Résultat différent d’un tri ASCII brut sur la liste initiale.

Fonctionnement :
• Trier sur clés égales deux à deux en préservant indices d’origine relatifs.

Exécution étape par étape :
1. Clés : b,A,a,B → lower b,a,a,b.
2. Groupe a : A puis a ; groupe b : b puis B.
3. ["A","a","b","B"].

Ordre des opérations :
• sorted sur liste fournie.

Cas d'utilisation courants :
• Interface où l’on veut regrouper insensible à la casse mais garder la saisie utilisateur.

Cas limites :
• Collations Unicode complexes non couvertes par lower seul.

Considérations de performance :
• Quatre éléments — négligeable.

Exemples :
• Même motif sur plus longues listes de login.

Remarques :
• Si vous voulez un ordre total strict, combinez (clé_lower, casse, texte).`,

  1686: `La bonne réponse est « "apple" » : min avec key=len choisit l’élément dont la longueur est minimale ; ici longueurs 6,5,6 → « apple ».

Débutant :
• min retourne un élément de la séquence, pas la longueur 5 elle-même.
• En cas d’égalité de clé, le premier rencontré gagne (avec min).

Intermédiaire :
• Même mécanisme que sorted pour l’évaluation de key.

Expert :
• Valeur par défaut min sur iterable vide → ValueError.

Concepts clés :
• min(..., key=len) ; argmin sur longueur de chaîne.

Distinctions clés :
• min vs sorted(...)[0] (coût différent si tout le tri inutile).

Fonctionnement :
• Parcours linéaire en maintenant le meilleur élément vu.

Exécution étape par étape :
1. Clés 6,5,6.
2. Minimum 5 → "apple".

Ordre des opérations :
• Appel min après construction de la liste argument.

Cas d'utilisation courants :
• Trouver le mot le plus court, le chemin le moins profond (avec clé adaptée).

Cas limites :
• Plusieurs minimums : le premier de la liste originale est retourné.

Considérations de performance :
• O(n) vs O(n log n) pour tri complet.

Exemples :
• min(["aa","b","ccc"], key=len) → "b".

Remarques :
• max(..., key=len) symétrique pour le plus long.`,

  1687: `La bonne réponse est « "hello" » : longueurs 2,5,3 ; le maximum est 5 → la chaîne « hello ».

Débutant :
• max renvoie l’élément d’origine associé à la plus grande clé len.

Intermédiaire :
• Égalité de longueur : le premier ayant cette longueur dans l’itération gagne avec max (règle de tie-breaking standard).

Expert :
• Sur générateur vide, ValueError.

Concepts clés :
• max(..., key=len) ; sélection par longueur.

Distinctions clés :
• max vs sorted(..., reverse=True)[0].

Fonctionnement :
• Un seul passage pour suivre le record.

Exécution étape par étape :
1. hi→2, hello→5, hey→3.
2. Record hello.

Ordre des opérations :
• Liste puis max.

Cas d'utilisation courants :
• Trouver la ligne la plus longue dans un fichier.

Cas limites :
• Chaînes vides : longueur 0 peut être min et max simultanément sur singleton.

Considérations de performance :
• Linéaire.

Exemples :
• max(["a","bb","c"], key=len) → "bb".

Remarques :
• Pour indices plutôt que valeurs, combinez enumerate et key.`,

  1688: `La bonne réponse est « [3, 1, 4, 2, 5] » : clé x%3 donne restes 1,2,0,1,2 ; tri ascendant sur ces clés avec stabilité regroupe 0 puis les 1 dans l’ordre d’origine (1 puis 4) puis les 2 (2 puis 5).

Débutant :
• 3%3=0 va en tête.
• Ensuite les nombres de reste 1 apparaissent dans l’ordre où ils étaient : 1 puis 4.

Intermédiaire :
• Technique de partition par classes de congruence.

Expert :
• Généralisable à d’autres modulos pour bucketing.

Concepts clés :
• lambda x:x%3 ; tri par reste ; stabilité intra-bucket.

Distinctions clés :
• Ordre final ≠ ordre numérique global.

Fonctionnement :
• Calcul des restes puis tri Timsort sur ces entiers.

Exécution étape par étape :
1. Restes [1,2,0,1,2].
2. Buckets stables : [3], [1,4], [2,5].
3. Concaténation implicite du tri → [3,1,4,2,5].

Ordre des opérations :
• Liste puis sorted.

Cas d'utilisation courants :
• Réordonner des tâches par priorité modulo (file cyclique).

Cas limites :
• Modulo 0 interdit — ici mod 3 ok.

Considérations de performance :
• Clé modulo très bon marché.

Exemples :
• sorted([5,2,3], key=lambda x:x%2) → pairs puis impairs stables selon entrée.

Remarques :
• Pour regroupement sans tri interne, bucket manuel peut suffire.`,

  1689: `La bonne réponse est « ["y", "t", "p", "o", "n", "h"] » : clé -ord(c) trie les caractères par points de code Unicode décroissants ; pour « python » l’ordre des lettres devient y t p o n h.

Débutant :
• ord donne un entier par caractère ; le signe moins inverse le sens du tri ascendant.
• Résultat : liste de caractères, pas une chaîne unique.

Intermédiaire :
• Équivalent conceptuel à sorted("python", reverse=True) pour cette chaîne.

Expert :
• Sur texte international, points de code ne reflètent pas toujours l’ordre linguistique humain.

Concepts clés :
• ord ; clé négative ; tri de str itérée.

Distinctions clés :
• Trier caractères vs trier chaîne entière lexicographiquement.

Fonctionnement :
• Appliquer -ord à chaque caractère puis tri.

Exécution étape par étape :
1. Lettres p y t h o n.
2. Clés négatives décroissantes équivalentes à ord décroissant.
3. Permutation y t p o n h.

Ordre des opérations :
• str itérée implicitement par sorted.

Cas d'utilisation courants :
• Expérimentations pédagogiques sur encodage.

Cas limites :
• Caractères non BMP : ord valide mais sémantique subtile.

Considérations de performance :
• n log n pour le tri.

Exemples :
• sorted("ab", key=lambda c:-ord(c)) → ["b","a"].

Remarques :
• En production, reverse=True est plus lisible pour simple inversion lexicale.`,

  1690: `La bonne réponse est « [3, 2, 1] » : sorted([3,1,2]) → [1,2,3] ; reversed donne un itérateur du dernier au premier ; list matérialise [3,2,1].

Débutant :
• reversed ne renvoie pas une liste seule ; list() consomme l’itérateur.
• Chaînage lisible alternative : sorted(..., reverse=True).

Intermédiaire :
• Deux passes mémoire : liste triée + itérateur inverse.

Expert :
• [::-1] sur la liste triée serait équivalent ici.

Concepts clés :
• sorted ; reversed iterator ; list matérialisation.

Distinctions clés :
• reversed(sorted) vs sort in-place puis reverse.

Fonctionnement :
• Tri complet puis parcours inverse de la séquence triée via iterator protocol.

Exécution étape par étape :
1. sorted → [1,2,3].
2. reversed → 3, puis 2, puis 1.
3. list → [3,2,1].

Ordre des opérations :
• sorted d’abord, enveloppé par reversed, puis list.

Cas d'utilisation courants :
• Pédagogique ; en prod préférez reverse=True.

Cas limites :
• sorted vide → list(reversed([])) → [].

Considérations de performance :
• Même asymptotique dominant tri O(n log n).

Exemples :
• list(reversed(sorted([1]))) → [1].

Remarques :
• Ne confondez pas reversed avec .reverse() de liste (in-place, None).`,

  1691: `La bonne réponse est « [('a', 1), ('b', 2), ('c', 3)] » : zip aligne le i-ième caractère de "abc" avec le i-ième élément de [1,2,3] ; list matérialise les paires.

Débutant :
• zip produit un itérateur de tuples ; list() le vide en mémoire.
• Longueur finale = min des longueurs (ici égales).

Intermédiaire :
• zip s’arrête au plus court ; ici pas de troncature.

Expert :
• itertools.zip_longest pour prolonger avec sentinelle.

Concepts clés :
• zip parallèle ; tuples appariés ; itérateur lazy.

Distinctions clés :
• zip vs product cartésien ; zip vs enumerate seul.

Fonctionnement :
• Avancer chaque itérateur en lockstep, émettre tuple à chaque pas.

Exécution étape par étape :
1. 'a'+1, 'b'+2, 'c'+3.
2. Trois tuples.
3. Liste de trois paires.

Ordre des opérations :
• zip construit iterator ; list consomme.

Cas d'utilisation courants :
• for lettre, score in zip(lettres, scores).

Cas limites :
• zip() sans args → itérateur vide.

Considérations de performance :
• Lazy : bon pour gros flux si vous n’appelez pas list inutilement.

Exemples :
• list(zip([1,2],[3])) → [(1,3)] seulement.

Remarques :
• *zip(...) transpose (voir question unzip).`,

  1692: `La bonne réponse est « [(1, 3), (2, 4)] » : zip s’arrête à la longueur du plus court itérable ; [1,2] a deux éléments, le 5 de la droite est ignoré.

Débutant :
• Pas d’erreur quand une liste est plus longue : les restes sont silencieusement abandonnés.

Intermédiaire :
• itertools.zip_longest([1,2],[3,4,5], fillvalue=None) ajouterait (None,5).

Expert :
• Comportement identique à map avec plusieurs itérables sur la longueur.

Concepts clés :
• Troncature zip ; longueur minimale ; pas de padding par défaut.

Distinctions clés :
• zip strict vs zip_longest ; erreur possible avec zip(..., strict=True) en 3.10+.

Fonctionnement :
• Arrêt dès qu’un itérateur est épuisé.

Exécution étape par étape :
1. Paire (1,3).
2. Paire (2,4).
3. Gauche finie → stop avant 5.

Ordre des opérations :
• zip puis list.

Cas d'utilisation courants :
• Fusionner colonnes de tableaux de tailles inégales sans exception.

Cas limites :
• Si un côté est vide → liste vide.

Considérations de performance :
• Évite de construire des tuples inutiles pour le surplus.

Exemples :
• list(zip([], [1])) → [].

Remarques :
• En Python 3.10+, strict=True détecte les longueurs différentes si vous voulez échouer.`,

  1693: `La bonne réponse est « {"a": 0, "b": 1, "c": 2} » : zip("abc", range(3)) produit ('a',0), ('b',1), ('c',2) ; dict interprète chaque tuple comme paire clé-valeur.

Débutant :
• dict peut être construit depuis un itérable de paires.
• range(3) vaut 0,1,2.

Intermédiaire :
• Clés dupliquées écraseraient la valeur précédente — ici toutes uniques.

Expert :
• Idiom compact pour deux colonnes parallèles.

Concepts clés :
• dict(zip(...)) ; association parallèle ; itérables alignés.

Distinctions clés :
• dict(zip(keys,vals)) vs compréhension {k:v for ...}.

Fonctionnement :
• Consommation du zip dans le constructeur dict.

Exécution étape par étape :
1. zip émet trois paires.
2. dict insère a:0, b:1, c:2.

Ordre des opérations :
• range et str littéraux puis zip puis dict.

Cas d'utilisation courants :
• Colonnes CSV : en-têtes + ligne → dict ligne.

Cas limites :
• Longueurs différentes → troncature zip comme d’habitude.

Considérations de performance :
• Linéaire en nombre de paires.

Exemples :
• dict(zip(["x","y"],[10,20])).

Remarques :
• dict.fromkeys pour clés sans valeurs distinctes par position.`,

  1694: `La bonne réponse est « [(1, 2, 3), (4, 5, 6)] » : l’étoile * déroule la liste de tuples en arguments séparés pour zip, qui re-colonne : première composantes (1,2,3), secondes (4,5,6).

Débutant :
• Opération « transposer » une liste de lignes en colonnes.
• Sans * vous auriez un zip d’un seul argument (peu utile ici).

Intermédiaire :
• Généralise aux matrices rectangulaires de tuples.

Expert :
• zip(*rows) est l’idiom standard d’unzip.

Concepts clés :
• Unpacking * ; zip inverse ; transposition.

Distinctions clés :
• zip(*) vs zip sans étoile sur la même donnée.

Fonctionnement :
• zip reçoit trois itérables (1,4), (2,5), (3,6) comme trois arguments.

Exécution étape par étape :
1. * produit trois tuples sources.
2. zip agrège colonne 1 puis colonne 2.
3. Deux tuples agrégés.

Ordre des opérations :
• Liste littérale puis * puis zip puis list.

Cas d'utilisation courants :
• Séparer noms et scores : noms, scores = zip(*pairs).

Cas limites :
• Lignes de longueurs différentes dans données réelles → zip tronque.

Considérations de performance :
• Crée tuples intermédiaires ; acceptable pour tailles modérées.

Exemples :
• list(zip(*[(10,20)])) → [(10,), (20,)].

Remarques :
• Pour tableaux NumPy, .T est plus adapté.`,

  1695: `La bonne réponse est « [11, 22, 33] » : zip forme (1,10), (2,20), (3,30) ; la compréhension additionne chaque paire.

Débutant :
• for a, b in zip(...) décompose les tuples deux à deux.
• a+b produit des int ici.

Intermédiaire :
• Même logique que list(map(lambda t:t[0]+t[1], zip(...))) mais plus idiomatique en Python moderne.

Expert :
• zip s’arrête au plus court côté si désaligné.

Concepts clés :
• Compréhension + zip ; opération élément par élément.

Distinctions clés :
• Résultat liste de sommes vs liste de tuples zip seul.

Fonctionnement :
• Itération synchronisée puis expression d’agrégation par élément.

Exécution étape par étape :
1. Paires (1,10),(2,20),(3,30).
2. Sommes 11,22,33.
3. Liste résultat.

Ordre des opérations :
• zip évalué comme partie du for de la compréhension.

Cas d'utilisation courants :
• Sommer deux signaux, multiplier coordonnées, concaténer champs.

Cas limites :
• Types non supportés par + → TypeError.

Considérations de performance :
• Compréhension souvent aussi rapide que map en CPython 3.

Exemples :
• [x-y for x,y in zip([5,5],[1,2])] → [4,3].

Remarques :
• zip strict=True aide à attraper des colonnes désynchronisées.`,

  1696: `La bonne réponse est « [2, 5, 3] » : map(len, iterable) applique len à chaque chaîne ; list collecte 2, 5, 3.

Débutant :
• map renvoie un iterator — list est nécessaire pour voir tout d’un coup.
• Équivalent : [len(s) for s in [...]].

Intermédiaire :
• map peut prendre plusieurs itérables si la fonction attend plusieurs args.

Expert :
• Pour effets de bord, évitez map ; préférez boucle explicite.

Concepts clés :
• map(function, iterable) ; lazy iterator ; len vectorisé logique.

Distinctions clés :
• map vs compréhension (lisibilité Pythonique).

Fonctionnement :
• Appeler len sur "hi", "hello", "hey" successivement.

Exécution étape par étape :
1. len("hi")=2.
2. len("hello")=5.
3. len("hey")=3.

Ordre des opérations :
• map puis list à l’extérieur.

Cas d'utilisation courants :
• Pipeline fonctionnel avant sum, max, etc.

Cas limites :
• Fonction qui lève sur un élément interrompt à la consommation.

Considérations de performance :
• map en Python 3 n’est pas la micro-optimisation qu’en Python 2.

Exemples :
• list(map(str.upper, ["a"])) → ["A"].

Remarques :
• itertools.starmap pour tuples d’arguments.`,

  1697: `La bonne réponse est « [1, "a", True] » : filter(None, seq) garde les valeurs « vraies » au sens booléen ; 0, "", None sont falsy et sont retirés.

Débutant :
• None comme fonction signifie « utiliser la vérité de l’élément lui-même ».
• True reste ; 1 reste ; "a" reste.

Intermédiaire :
• Équivalent compréhension : [x for x in seq if x] (attention nuances avec True/False explicites).

Expert :
• filter renvoie iterator ; list pour matérialiser.

Concepts clés :
• filter(None, ...) ; vérité Python ; valeurs falsy.

Distinctions clés :
• filter(None) vs filter(lambda x: x is not None) (différent : 0 passerait avec is not None).

Fonctionnement :
• Tester booléen de chaque élément ; yield si True.

Exécution étape par étape :
1. 0 falsy → skip.
2. 1 truthy → keep.
3. "" skip, "a" keep, None skip, True keep.

Ordre des opérations :
• filter puis list.

Cas d'utilisation courants :
• Nettoyer une liste après parsing (None, "").

Cas limites :
• False explicite est falsy et serait enlevé aussi.

Considérations de performance :
• Lazy jusqu’à consommation.

Exemples :
• list(filter(None, [0, False, 2])) → [2].

Remarques :
• Pour tests riches, passez une fonction prédicat explicite.`,

  1698: `La bonne réponse est « [4, 6] » : map avec deux itérables passe (1,3) puis (2,4) à lambda x,y:x+y → 4 et 6.

Débutant :
• Parallèle à [x+y for x,y in zip([1,2],[3,4])].
• S’arrête au plus court comme zip.

Intermédiaire :
• La lambda doit accepter autant de paramètres que d’itérables.

Expert :
• pow en fonction directe fonctionne avec map sur deux listes.

Concepts clés :
• map multi-args ; alignement par position ; zip implicite.

Distinctions clés :
• map(lambda...) vs starmap sur liste de tuples.

Fonctionnement :
• À chaque pas, appeler fonction avec un élément de chaque iterable.

Exécution étape par étape :
1. 1+3=4.
2. 2+4=6.

Ordre des opérations :
• map puis list.

Cas d'utilisation courants :
• Fusionner colonnes numériques élément par élément.

Cas limites :
• Itérables de longueurs différentes → résultat tronqué.

Considérations de performance :
• Souvent aussi clair en compréhension avec zip.

Exemples :
• list(map(lambda x,y:x*y,[2],[3,4])) → [6] seulement.

Remarques :
• Vérifiez strict=True sur zip si vous voulez erreur sur mismatch.`,

  1699: `La bonne réponse est « True » : map produit False,False,False,True pour x>3 ; any s’arrête dès qu’il voit True (4>3).

Débutant :
• any(iterable) : au moins un élément vrai → True.
• map est lazy mais any force l’itération jusqu’au premier True.

Intermédiaire :
• Style pythonique : any(x>3 for x in [1,2,3,4]) évite map/lambda.

Expert :
• Court-circuit : pas d’évaluation des éléments après le premier True côté générateur ; avec map, les précédents ont été calculés.

Concepts clés :
• any ; map ; prédicat ; court-circuit.

Distinctions clés :
• any vs all ; map vs générateur inline.

Fonctionnement :
• Itérer les booléens mappés ; retourner True au premier True.

Exécution étape par étape :
1. Tests 1>3 F, 2>3 F, 3>3 F, 4>3 T.
2. any voit T → True immédiat (les F précédents déjà calculés dans map).

Ordre des opérations :
• map iterator construit ; any consomme.

Cas d'utilisation courants :
• Vérifier existence dans ETL avant scan complet.

Cas limites :
• iterable vide → any False.

Considérations de performance :
• Générateur préférable pour court-circuit réel sans calculer tous les maps.

Exemples :
• any(map(lambda x:x<0,[1])) → False.

Remarques :
• En lisibilité, préférez any(... for ...) en code moderne.`,

  1700: `La bonne réponse est « 15 » : map(int, "12345") convertit chaque caractère en entier 1..5 ; sum les additionne → 15.

Débutant :
• str est itérable caractère par caractère.
• int("5") fonctionne ; ici int appliqué à chaque chiffre.

Intermédiaire :
• sum sur itérateur map sans list intermédiaire fonctionne (consommation directe).

Expert :
• sum(int(c) for c in "12345") idiom équivalent.

Concepts clés :
• map(int, str) ; somme de chiffres ; chaîne comme séquence.

Distinctions clés :
• sum(map(int,...)) vs int("12345") qui donnerait 12345 entier.

Fonctionnement :
• map produit flux d’ints ; sum accumule.

Exécution étape par étape :
1. '1'..'5' → 1..5.
2. 1+2+3+4+5=15.

Ordre des opérations :
• Chaîne littérale puis map puis sum.

Cas d'utilisation courants :
• Somme de chiffres, contrôles de clé, puzzles.

Cas limites :
• Caractère non numérique → ValueError sur int.

Considérations de performance :
• Linéaire en longueur de chaîne.

Exemples :
• sum(map(int, "999")) → 27.

Remarques :
• Pour grands entiers déjà numériques, rester en arithmétique peut éviter str.`,

};
