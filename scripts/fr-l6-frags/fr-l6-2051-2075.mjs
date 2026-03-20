/** Level 6 FR 2051–2075 — level6_expert_b.ts Q51–75 */
export default {
  2051: `hash(42) lève-t-il une erreur ?

Débutant :
• Non : les int sont immuables et hashables ; hash(42) renvoie un entier (souvent 42 en CPython pour les petits entiers).

Intermédiaire :
• Hashable signifie présence de __hash__ cohérent avec __eq__ pour usage en clé de dict ou élément de set.

Expert :
• Les types numériques built-in sont hashables ; attention aux règles spéciales (ex. -1 en CPython).

Concepts clés :
• Immuabilité, hash, dict/set.

Distinctions clés :
• Liste ou dict ne sont pas hashables.

Fonctionnement :
• Appel interne à __hash__ sur l’objet int.

Exécution étape par étape :
1. Aucune exception ; valeur de hash retournée.

Ordre des opérations :
• Évaluation de hash(42).

Cas d'utilisation courants :
• Clés entières, ensembles d’identifiants numériques.

Cas limites :
• Très grands entiers : hash réduit modulo système.

Considérations de performance :
• O(1) pour petits int en CPython.

Exemples :
• {42: "x"} est valide.

Remarques :
• Réponse : pas d’erreur ; les entiers sont hashables (première option).`,

  2052: `hash("hello")

Débutant :
• Non : les chaînes sont immuables donc hashables.

Intermédiaire :
• La valeur exacte peut varier entre sessions (PYTHONHASHSEED, randomisation 3.3+).

Expert :
• hash("") vaut 0 en général.

Concepts clés :
• str immuable, cache de hash possible.

Distinctions clés :
• bytearray mutable → non hashable.

Fonctionnement :
• Calcul déterministe pendant le processus.

Exécution étape par étape :
1. Pas TypeError ; entier retourné.

Ordre des opérations :
• hash appliqué au littéral str.

Cas d'utilisation courants :
• Clés texte, sets de noms.

Cas limites :
• Chaînes énormes : calcul plus coûteux.

Considérations de performance :
• Hash peut être mis en cache sur l’objet str.

Exemples :
• set(["hello"]) OK.

Remarques :
• Réponse : pas d’erreur ; chaînes hashables.`,

  2053: `hash((1, 2, 3))

Débutant :
• Non : un tuple n’est hashable que si tous ses éléments le sont ; ici uniquement des int.

Intermédiaire :
• Récursivité de la règle : tuple de hashables → hashable.

Expert :
• Tuple vide () est hashable.

Concepts clés :
• Hashabilité structurelle des tuples.

Distinctions clés :
• Liste [1,2,3] non hashable.

Fonctionnement :
• Combinaison des hash des composantes.

Exécution étape par étape :
1. Succès, pas d’exception.

Ordre des opérations :
• Construction du tuple puis hash.

Cas d'utilisation courants :
• Clés composites (coordonnées, paires).

Cas limites :
• Tuple contenant un dict → TypeError au hash.

Considérations de performance :
• Proportionnel à la longueur du tuple.

Exemples :
• d[(1,2)] = 0.

Remarques :
• Réponse : pas d’erreur.`,

  2054: `hash((1, [2, 3]))

Débutant :
• TypeError : la liste interne est mutable, le tuple devient non hashable.

Intermédiaire :
• Seuls les tuples récursivement hashables sont acceptés.

Expert :
• Le message d’erreur indique souvent un objet unhashable: 'list'.

Concepts clés :
• Mutabilité de la liste casse la hashabilité du tuple parent.

Distinctions clés :
• (1, (2,3)) serait OK.

Fonctionnement :
• Échec lors du calcul du hash en profondeur.

Exécution étape par étape :
1. Exception TypeError.

Ordre des opérations :
• Création du tuple puis tentative hash.

Cas d'utilisation courants :
• Piège lors du nestage de structures.

Cas limites :
• Remplacer la liste par tuple ou frozenset pour hasher.

Considérations de performance :
• Échec rapide.

Exemples :
• Utiliser tuple interne pour clé stable.

Remarques :
• Réponse : TypeError (comportement erreur).`,

  2055: `hash(frozenset({1, 2}))

Débutant :
• Non : frozenset est immuable et hashable, contrairement à set.

Intermédiaire :
• Éléments du frozenset doivent être hashables (ici des int).

Expert :
• Deux frozensets égaux ont le même hash.

Concepts clés :
• Ensemble immuable, usage comme clé de dict.

Distinctions clés :
• set({1,2}) ne peut pas être clé.

Fonctionnement :
• Hash dérivé du contenu trié/hashé des éléments.

Exécution étape par étape :
1. Pas d’erreur.

Ordre des opérations :
• frozenset puis hash.

Cas d'utilisation courants :
• Tags, arêtes non orientées comme clés.

Cas limites :
• frozenset vide hashable.

Considérations de performance :
• Dépend du nombre d’éléments.

Exemples :
• Cache indexé par frozenset de voisins.

Remarques :
• Réponse : pas d’erreur ; frozenset hashable.`,

  2056: `hash(None)

Débutant :
• Non : None est un singleton immuable, hashable.

Intermédiaire :
• Souvent hash(None) a une valeur fixe connue (implémentation dépendante mais stable en session).

Expert :
• None peut servir de clé de dict (rare mais valide).

Concepts clés :
• Singleton None, hashabilité.

Distinctions clés :
• Ne pas confondre avec absence de valeur logique en JSON.

Fonctionnement :
• __hash__ défini sur le type NoneType.

Exécution étape par étape :
1. Entier de hash retourné.

Ordre des opérations :
• hash(None).

Cas d'utilisation courants :
• Sentinelle explicite en clé ou dans set.

Cas limites :
• Un seul objet None existe.

Considérations de performance :
• Négligeable.

Exemples :
• {None: 0}.

Remarques :
• Réponse : pas d’erreur.`,

  2057: `hash(True) == hash(1)

Débutant :
• True : bool est sous-classe de int, True == 1, contrat de hash exige même hash si égalité.

Intermédiaire :
• Évite deux entrées distinctes pour la même clé logique.

Expert :
• Même principe pour False et 0.

Concepts clés :
• Cohérence hash/égalité.

Distinctions clés :
• hash(1.0) aussi aligné avec 1.

Fonctionnement :
• Comparaison de deux entiers de hash.

Exécution étape par étape :
1. Expression booléenne True.

Ordre des opérations :
• Deux appels hash puis ==.

Cas d'utilisation courants :
• Comprendre collisions de clés bool/int.

Cas limites :
• Tests d’égalité sur structures nested.

Considérations de performance :
• Deux hash O(1).

Exemples :
• {True: "x", 1: "y"} une seule entrée.

Remarques :
• Réponse : True.`,

  2058: `hash(0) == hash(False)

Débutant :
• True : False == 0, donc hashes égaux.

Intermédiaire :
• Même famille de collisions que True/1.

Expert :
• Clés 0 et False ne coexistent pas comme distinctes dans un dict.

Concepts clés :
• bool sous-type de int.

Distinctions clés :
• str "0" distinct de int 0 pour clés.

Fonctionnement :
• Vérification d’égalité des hash.

Exécution étape par étape :
1. True.

Ordre des opérations :
• hash(0), hash(False), comparaison.

Cas d'utilisation courants :
• Éviter mélanger bool et int comme clés « différentes ».

Cas limites :
• Lecture confusante du repr des clés.

Considérations de performance :
• Négligeable.

Exemples :
• {0: "a", False: "b"} une entrée.

Remarques :
• Réponse : True.`,

  2059: `hash(0) == hash(0.0)

Débutant :
• True : 0 == 0.0 en Python, contrat hash aligné.

Intermédiaire :
• Donc 0, False, 0.0 liés pour clés de dict.

Expert :
• Attention aux tests d’identité is qui seraient False.

Concepts clés :
• Égalité valeur entre int et float égaux.

Distinctions clés :
• is 0 is 0.0 est faux.

Fonctionnement :
• Comparaison des hash numériques.

Exécution étape par étape :
1. True.

Ordre des opérations :
• hash sur int et float.

Cas d'utilisation courants :
• Clés numériques mixtes (à éviter pour clarté).

Cas limites :
• Autres flottaux « égaux » (ex. fractions) hors sujet ici.

Considérations de performance :
• Négligeable.

Exemples :
• {0: 1, 0.0: 2} une entrée.

Remarques :
• Réponse : True.`,

  2060: `{True: "a", 1: "b", 1.0: "c"}

Débutant :
• True, 1 et 1.0 désignent la même clé ; une seule entrée, dernière valeur gagne : "c", clé affichée souvent True.

Intermédiaire :
• Trois écritures pour un seul slot de table de hash.

Expert :
• Premier nom de clé « gagnant » pour repr peut varier mais contenu logique unique.

Concepts clés :
• Collision True/1/1.0.

Distinctions clés :
• Pas trois paires distinctes.

Fonctionnement :
• Insertions successives sur même hash/égalité.

Exécution étape par étape :
1. Mapping final équivalent à {True: "c"} selon QCM.

Ordre des opérations :
• Littéral évalué gauche-droite.

Cas d'utilisation courants :
• Normaliser types de clés.

Cas limites :
• JSON true vs 1 séparés.

Considérations de performance :
• Une seule entrée stockée.

Exemples :
• Voir questions précédentes sur collisions.

Remarques :
• Réponse : {True: "c"} (forme du quiz).`,

  2061: `len(d) avec 0, False, 0.0

Débutant :
• 0, False et 0.0 sont la même clé → len(d) vaut 1.

Intermédiaire :
• Dernière valeur du littéral pour cette clé unique : "float_zero" typiquement.

Expert :
• Vérifier l’énoncé exact des chaînes ; une seule case de hash.

Concepts clés :
• Triple collision de clés.

Distinctions clés :
• len serait 3 si clés vraiment distinctes.

Fonctionnement :
• Une entrée dans la table.

Exécution étape par étape :
1. len → 1.

Ordre des opérations :
• Construction du dict puis len.

Cas d'utilisation courants :
• Débogage de configs avec types mélangés.

Cas limites :
• Repr peut afficher une des formes de la clé.

Considérations de performance :
• Négligeable.

Exemples :
• Même logique que 2060.

Remarques :
• Réponse : 1.`,

  2062: `Deux float("nan") comme clés

Débutant :
• Chaque float("nan") est souvent un objet distinct ; NaN != NaN en égalité, donc deux clés → len 2.

Intermédiaire :
• L’identité et l’égalité des floats NaN brisent l’intuition des clés « identiques ».

Expert :
• math.isnan pour tester, pas == entre NaN.

Concepts clés :
• IEEE NaN, comparaison flottante.

Distinctions clés :
• Même valeur mathématique « NaN » mais objets ou eg différents.

Fonctionnement :
• Deux insertions avec clés non égales au sens Python.

Exécution étape par étape :
1. len(d) == 2.

Ordre des opérations :
• Deux assignations puis len.

Cas d'utilisation courants :
• Éviter NaN comme clé stable.

Cas limites :
• CPython peut parfois réutiliser ; ne pas compter dessus pour une clé.

Considérations de performance :
• Négligeable.

Exemples :
• Utiliser str repr ou sentinel tuple à la place.

Remarques :
• Réponse : 2.`,

  2063: `Même objet n pour deux assignations NaN

Débutant :
• Même référence n : deuxième assignation écrase la valeur pour la même clé → len 1.

Intermédiaire :
• dict compare clés avec hash puis égalité ; pour ce n, égalité avec soi-même.

Expert :
• Contraste direct avec 2062 (deux appels float("nan")).

Concepts clés :
• Identité stable d’une variable n.

Distinctions clés :
• Une seule clé dans la table.

Fonctionnement :
• Deux écritures sur même clé.

Exécution étape par étape :
1. len → 1.

Ordre des opérations :
• n = float("nan"), deux d[n] = ...

Cas d'utilisation courants :
• Montrer l’importance de la référence d’objet.

Cas limites :
• Valeur finale 2 pour la clé n.

Considérations de performance :
• Négligeable.

Exemples :
• Toujours réutiliser la même variable pour clé stable « NaN ».

Remarques :
• Réponse : 1.`,

  2064: `Instance de classe comme clé par défaut

Débutant :
• Oui par défaut : object.__hash__ basé sur id (adresse), __eq__ par défaut sur identité.

Intermédiaire :
• Tant qu’on ne redéfinit pas __eq__ sans rétablir __hash__.

Expert :
• Classes personnalisées peuvent rendre les instances non hashables si __hash__ = None.

Concepts clés :
• Hash par défaut, identité.

Distinctions clés :
• Dataclass mutable peut désactiver le hash.

Fonctionnement :
• Clé hashable si __hash__ callable.

Exécution étape par étape :
• Réponse du QCM : oui, hashables par défaut (formulation première option).

Ordre des opérations :
• Question conceptuelle.

Cas d'utilisation courants :
• Clés « uniques » par objet (rare).

Cas limites :
• Redéfinir __eq__ casse souvent le hash implicite.

Considérations de performance :
• id stable pendant la vie de l’objet.

Exemples :
• {instance: data}.

Remarques :
• Réponse : oui, instances hashables par défaut (option du quiz).`,

  2065: `Deux instances C() comme clés

Débutant :
• a et b ont des id différents → deux clés distinctes → len(d) == 2.

Intermédiaire :
• Même si __eq__ par défaut les rend inégaux sauf identité.

Expert :
• Pour une clé « par valeur », il faudrait __eq__ et __hash__ cohérents.

Concepts clés :
• Identité d’instance comme clé.

Distinctions clés :
• Pas la même clé que deux fois la même variable a.

Fonctionnement :
• Deux entrées dans le mapping.

Exécution étape par étape :
1. len 2.

Ordre des opérations :
• Instanciation, construction dict, len.

Cas d'utilisation courants :
• Registres par objet.

Cas limites :
• Singleton partagé → une clé.

Considérations de performance :
• Deux slots.

Exemples :
• WeakKeyDictionary pour éviter fuites si besoin.

Remarques :
• Réponse : 2.`,

  2066: `Deux méthodes pour être hashable

Débutant :
• Il faut __hash__ (ou héritage qui le fournit) et __eq__ pour comparaison en cas de collision.

Intermédiaire :
• Contrat : si a == b alors hash(a) == hash(b).

Expert :
• Si __eq__ personnalisé sans __hash__, Python peut mettre __hash__ à None.

Concepts clés :
• Protocole hashable du modèle d’objet Python.

Distinctions clés :
• __repr__ ou __str__ ne suffisent pas.

Fonctionnement :
• Vérifications lors insertion dans set/dict.

Exécution étape par étape :
• Réponse : __hash__ et __eq__ (formulation QCM).

Ordre des opérations :
• Question théorique.

Cas d'utilisation courants :
• Définir des clés personnalisées immuables.

Cas limites :
• Objets mutables : ne doivent pas être hashables.

Considérations de performance :
• __hash__ devrait être rapide si clé fréquente.

Exemples :
• dataclass(frozen=True).

Remarques :
• Réponse : __hash__ et __eq__ (première option descriptive du quiz).`,

  2067: `__eq__ sans __hash__

Débutant :
• Définir __eq__ sans __hash__ explicite met souvent __hash__ à None → instance non hashable → TypeError sur hash(a).

Intermédiaire :
• Empêche les incohérences entre égalité logique et hash hérité de id.

Expert :
• On peut fixer __hash__ = None explicitement ou fournir un __hash__ valide compatible.

Concepts clés :
• Hash None, unhashable type.

Distinctions clés :
• Avant définition de __eq__, hash par défaut peut exister.

Fonctionnement :
• Tentative hash sur instance de C.

Exécution étape par étape :
1. TypeError.

Ordre des opérations :
• Instanciation puis hash().

Cas d'utilisation courants :
• Empêcher usage accidentel en clé après égalité par valeur.

Cas limites :
• frozen dataclass redonne un hash.

Considérations de performance :
• N/A erreur.

Exemples :
• Ajouter __hash__ si immuable et égalité par champs.

Remarques :
• Réponse : TypeError / non hashable (comportement erreur du quiz).`,

  2068: `d.keys() & {"a", "b"}

Débutant :
• Vue dict_keys supporte & : intersection avec ensemble → clés communes, ici {"a"}.

Intermédiaire :
• Résultat de type set ou set-like selon version ; contenu a seul.

Expert :
• Nécessite Python 3 avec opérations ensemblistes sur les vues.

Concepts clés :
• Intersection clés / set.

Distinctions clés :
• Pas les valeurs, seulement les clés.

Fonctionnement :
• a présent dans d et dans le set littéral.

Exécution étape par étape :
1. Ensemble contenant "a".

Ordre des opérations :
• .keys() puis &.

Cas d'utilisation courants :
• Filtrer champs présents.

Cas limites :
• Clé absente des deux côtés → vide.

Considérations de performance :
• Efficace.

Exemples :
• d.keys() & other_keys.

Remarques :
• Réponse : {"a"} (repr du QCM).`,

  2069: `d.keys() | {"c"}

Débutant :
• Union : toutes les clés uniques de d plus "c" → {"a","b","c"} selon énoncé d = a,b.

Intermédiaire :
• L’ordre d’itération n’est pas celui d’un set affiché mais l’ensemble logique est correct.

Expert :
• | sur vues dict_keys suit les règles de set.

Concepts clés :
• Union d’ensembles de clés.

Distinctions clés :
• Ne fusionne pas les valeurs du dict.

Fonctionnement :
• Ajout de c aux clés existantes.

Exécution étape par étape :
1. Set avec a, b, c.

Ordre des opérations :
• keys() puis |.

Cas d'utilisation courants :
• Liste complète de champs possibles.

Cas limites :
• Doublons impossibles dans un set.

Considérations de performance :
• O(n).

Exemples :
• Planifier colonnes pour DataFrame.

Remarques :
• Réponse : ensemble des clés a,b,c (forme du quiz).`,

  2070: `d.keys() - {"a"}

Débutant :
• Différence ensembliste : retire a des clés de d ; d ne contenait que a → ensemble vide.

Intermédiaire :
• set() vide, pas None.

Expert :
• Utile pour « clés restantes après exclusion ».

Concepts clés :
• Soustraction de sets.

Distinctions clés :
• Ne modifie pas le dict d’origine.

Fonctionnement :
• {"a"} - {"a"} sur les clés.

Exécution étape par étape :
1. set().

Ordre des opérations :
• .keys() puis -.

Cas d'utilisation courants :
• Champs à supprimer d’un schéma.

Cas limites :
• Si d avait plus de clés, elles restent dans le résultat.

Considérations de performance :
• Linéaire.

Exemples :
• colonnes_ok = all_keys - forbidden.

Remarques :
• Réponse : ensemble vide (repr set()).`,

  2071: `MyDict __missing__ renvoie une chaîne

Débutant :
• d["b"] absent déclenche __missing__("b") qui retourne la chaîne formatée "no b".

Intermédiaire :
• La clé n’est pas ajoutée si __missing__ ne fait que return.

Expert :
• Comportement hook __getitem__ du sous-type dict.

Concepts clés :
• __missing__, sous-classe dict.

Distinctions clés :
• Pas KeyError car surchargé.

Fonctionnement :
• Recherche échoue, appel __missing__, valeur retournée.

Exécution étape par étape :
1. Valeur "no b" (avec espace selon code).

Ordre des opérations :
• Création MyDict avec a=1, accès b.

Cas d'utilisation courants :
• Valeurs par défaut calculées ou messages.

Cas limites :
• __missing__ peut lever une exception si on préfère.

Considérations de performance :
• Coût d’un appel Python par clé manquante.

Exemples :
• Clés manquantes avec log.

Remarques :
• Réponse : "no b" (forme exacte du quiz).`,

  2072: `__missing__ sans insertion — "x" in d ?

Débutant :
• __missing__ retourne 0 mais n’écrit pas self["x"] → la clé n’existe pas → False.

Intermédiaire :
• Contrast avec defaultdict qui insère la valeur par défaut.

Expert :
• len(d) reste 0 après seulement d["x"].

Concepts clés :
• Retour vs mutation du mapping.

Distinctions clés :
• in utilise __contains__, pas __missing__ pour créer.

Fonctionnement :
• Accès lecture déclenche __missing__ sans stockage.

Exécution étape par étape :
1. False.

Ordre des opérations :
• MyDict(), d["x"], puis test in.

Cas d'utilisation courants :
• Lecture « virtuelle » sans polluer les clés.

Cas limites :
• Si vous vouliez insérer, faire self[key]=... dans __missing__.

Considérations de performance :
• Négligeable.

Exemples :
• Voir question 2073.

Remarques :
• Réponse : False.`,

  2073: `__missing__ avec self[key] = 0

Débutant :
• Cette fois __missing__ insère la clé avant return 0 → "x" in d est True.

Intermédiaire :
• Pattern proche de defaultdict(int) pour l’effet de bord.

Expert :
• Attention aux boucles infinies si __missing__ s’appelle récursivement par erreur.

Concepts clés :
• Insertion explicite dans __missing__.

Distinctions clés :
• Diffère de 2072 par self[key]=.

Fonctionnement :
• Écriture puis retour.

Exécution étape par étape :
1. True.

Ordre des opérations :
• d["x"] provoque insertion puis in vérifie présence.

Cas d'utilisation courants :
• Auto-vivification contrôlée.

Cas limites :
• Threads : même caveats que dict normal.

Considérations de performance :
• Une écriture supplémentaire.

Exemples :
• Cache avec matérialisation paresseuse.

Remarques :
• Réponse : True.`,

  2074: `dict normal d["b"] manquant

Débutant :
• KeyError : dict built-in n’a pas __missing__ utilisable comme MyDict sans sous-classement.

Intermédiaire :
• Utiliser .get ou in pour éviter.

Expert :
• Message d’erreur inclut la clé manquante.

Concepts clés :
• __getitem__ standard.

Distinctions clés :
• vs defaultdict, vs sous-classe avec __missing__.

Fonctionnement :
• Échec lookup.

Exécution étape par étape :
1. Exception KeyError.

Ordre des opérations :
• Accès b sur {"a":1}.

Cas d'utilisation courants :
• Signaler bug ou donnée invalide.

Cas limites :
• try/except KeyError pattern.

Considérations de performance :
• Échec rapide.

Exemples :
• d.get("b", default).

Remarques :
• Réponse : KeyError (comportement erreur).`,

  2075: `defaultdict et __missing__

Débutant :
• Oui : defaultdict est une sous-classe de dict dont __missing__ appelle default_factory pour créer une valeur par défaut.

Intermédiaire :
• C’est le mécanisme qui permet d[k] sans clé préalable.

Expert :
• On peut implémenter des fabriques personnalisées.

Concepts clés :
• default_factory, __missing__.

Distinctions clés :
• dict nu n’appelle pas de fabrique automatique.

Fonctionnement :
• Sous-classe + hook.

Exécution étape par étape :
• Réponse oui (première option du QCM).

Ordre des opérations :
• Question conceptuelle.

Cas d'utilisation courants :
• Compteurs, groupes, graphes.

Cas limites :
• default_factory None → pas de magie.

Considérations de performance :
• Appel factory par nouvelle clé.

Exemples :
• defaultdict(list).

Remarques :
• Réponse : oui, essentiellement dict + __missing__ vers factory (option correcte du quiz).`,
};
