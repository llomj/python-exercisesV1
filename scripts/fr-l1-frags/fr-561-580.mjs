/** Level 1 FR 561–580 */
export default {
  561: `isinstance(42, (int, float)) vaut True : 42 est int, accepté par le tuple de types.

Débutant :
• OR sur types.

Intermédiaire :
• ordre gauche-droite court-circuite logiquement.

Expert :
• ABC numbers.Real.

Concepts clés :
• isinstance forme tuple.

Distinctions clés :
• union runtime vs typing Union.

Fonctionnement :
• teste chaque type.

Exécution étape par étape :
1. 42 int.
2. match int.
3. True.

Ordre des opérations :
• isinstance.

Cas d'utilisation courants :
• APIs numériques.

Cas limites :
• enregistrement ABC.

Considérations de performance :
• O(k).

Exemples :
• isinstance(3.14,(int,float))

Remarques :
• évitez bool si vous voulez seulement int.`,
  562: `issubclass(bool, int) vaut True : bool hérite explicitement de int.

Débutant :
• relation de sous-classe.

Intermédiaire :
• explique isinstance(True,int).

Expert :
• modèle objet unique Python.

Concepts clés :
• issubclass, héritage.

Distinctions clés :
• subclass vs instance.

Fonctionnement :
• MRO bool→int.

Exécution étape par étape :
1. bool, int.
2. True.

Ordre des opérations :
• issubclass.

Cas d'utilisation courants :
• introspection rare.

Cas limites :
• pas instance : issubclass(1,int) TypeError.

Considérations de performance :
• O(1).

Exemples :
• issubclass(int,object)

Remarques :
• documentation officielle data model.`,
  563: `type(id("hello")) est int : en CPython, id retourne un entier non négatif (identité).

Débutant :
• id est nombre, pas objet spécial.

Intermédiaire :
• taille dépend plateforme 32/64 bits.

Expert :
• après libération objet, id peut être réutilisé.

Concepts clés :
• id retour, type int.

Distinctions clés :
• id vs pointeur C exposé.

Fonctionnement :
• CPython Py_ssize_t.

Exécution étape par étape :
1. id(...)
2. int.

Ordre des opérations :
• id puis type.

Cas d'utilisation courants :
• debug bas niveau.

Cas limites :
• implémentations autres langages.

Considérations de performance :
• O(1).

Exemples :
• id(None)

Remarques :
• ne sérialisez pas id comme clé stable long terme.`,
  564: `id(obj) retourne un entier identifiant l'objet pendant sa durée de vie (CPython : adresse mémoire souvent).

Débutant :
• unique parmi objets simultanés.

Intermédiaire :
• deux objets différents id différents.

Expert :
• cycle de vie et réutilisation.

Concepts clés :
• identité objet.

Distinctions clés :
• id vs hash.

Fonctionnement :
• compteur/adresse selon VM.

Exécution étape par étape :
1. Objet vivant.
2. Entier id.

Ordre des opérations :
• id().

Cas d'utilisation courants :
• détecter alias, debug.

Cas limites :
• objets immuateurs réutilisés.

Considérations de performance :
• O(1).

Exemples :
• a=[]; id(a)

Remarques :
• pas pour égalité logique.`,
  565: `a = None; b = None; a is b vaut True : un seul singleton None.

Débutant :
• toutes références None identiques.

Intermédiaire :
• économie mémoire.

Expert :
• NoneType non sous-classable.

Concepts clés :
• singleton None.

Distinctions clés :
• is None toujours True entre noms None.

Fonctionnement :
• même objet.

Exécution étape par étape :
1. Deux noms None.
2. is True.

Ordre des opérations :
• is.

Cas d'utilisation courants :
• défauts multiples.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• None is None

Remarques :
• test is None idiomatique.`,
  566: `int(3.9) vaut 3 : troncature vers zéro (pas floor négatif comme floor()).

Débutant :
• partie décimale jetée.

Intermédiaire :
• math.floor diffère pour négatifs.

Expert :
• arrondi binaire float avant conversion.

Concepts clés :
• conversion float→int tronquée.

Distinctions clés :
• int() vs round() vs math.floor.

Fonctionnement :
• __trunc__ ou équivalent.

Exécution étape par étape :
1. 3.9.
2. 3.

Ordre des opérations :
• int().

Cas d'utilisation courants :
• indexation discrète.

Cas limites :
• nan inf ValueError.

Considérations de performance :
• O(1).

Exemples :
• int(-3.9)  # -3

Remarques :
• attention signe vs floor.`,
  567: `int(-3.9) vaut -3 : troncature vers zéro, donc vers le haut pour négatif.

Débutant :
• pas -4 (ce serait floor).

Intermédiaire :
• même règle que positif symétrique “couper décimale”.

Expert :
• math.floor(-3.9) == -4.

Concepts clés :
• troncature signée.

Distinctions clés :
• int vs floor négatif.

Fonctionnement :
• direction vers 0.

Exécution étape par étape :
1. -3.9.
2. -3.

Ordre des opérations :
• int().

Cas d'utilisation courants :
• conversions discrètes.

Cas limites :
• très grands float.

Considérations de performance :
• O(1).

Exemples :
• int(2.999)

Remarques :
• documentez règle métier arrondi.`,
  568: `int(True) vaut 1 : bool est sous-type int avec valeurs 1 et 0.

Débutant :
• True se comporte comme 1 en arithmétique.

Intermédiaire :
• int(False) vaut 0.

Expert :
• préférez explicite if booleans.

Concepts clés :
• bool→int.

Distinctions clés :
• True vs 1 identité différente.

Fonctionnement :
• conversion numérique.

Exécution étape par étape :
1. True.
2. 1.

Ordre des opérations :
• int().

Cas d'utilisation courants :
• sommes de flags.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• int(True)+int(False)

Remarques :
• style : évitez magie bool en maths.`,
  569: `int(False) vaut 0.

Débutant :
• correspond à valeur arithmétique.

Intermédiaire :
• cohérent avec sum([False,False]) tricks.

Expert :
• lisibilité : préférez 0 explicite.

Concepts clés :
• False→0.

Distinctions clés :
• False vs 0.

Fonctionnement :
• int conversion.

Exécution étape par étape :
1. False.
2. 0.

Ordre des opérations :
• int().

Cas d'utilisation courants :
• comptage conditionnel compact.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• sum([True, True, False])

Remarques :
• explicite > astuce.`,
  570: `float("inf") produit l'infini positif IEEE 754.

Débutant :
• dépasse tout float fini.

Intermédiaire :
• inf + 1 == inf.

Expert :
• math.isinf teste.

Concepts clés :
• inf float.

Distinctions clés :
• inf vs très grand fini.

Fonctionnement :
• parse string "inf".

Exécution étape par étape :
1. str inf.
2. float inf.

Ordre des opérations :
• float().

Cas d'utilisation courants :
• algorithmes init min/max.

Cas limites :
• inf - inf nan.

Considérations de performance :
• O(1).

Exemples :
• float("Infinity")

Remarques :
• sérialisation JSON attention.`,
  571: `float("-inf") est l'infini négatif.

Débutant :
• plus petit que tout fini.

Intermédiaire :
• -inf < x < inf pour x fini.

Expert :
• comparaisons totales avec inf.

Concepts clés :
• -inf.

Distinctions clés :
• signe.

Fonctionnement :
• parse.

Exécution étape par étape :
1. "-inf".
2. -inf.

Ordre des opérations :
• float().

Cas d'utilisation courants :
• optimisation, limites.

Cas limites :
• opérations indéterminées.

Considérations de performance :
• O(1).

Exemples :
• math.inf avec signe

Remarques :
• tests math.isinf.`,
  572: `float("nan") produit Not a Number : valeur spéciale IEEE.

Débutant :
• représente indéterminé 0/0 etc.

Intermédiaire :
• nan != nan en général.

Expert :
• math.isnan.

Concepts clés :
• NaN float.

Distinctions clés :
• nan vs None.

Fonctionnement :
• bit pattern IEEE.

Exécution étape par étape :
1. parse "nan".
2. nan.

Ordre des opérations :
• float().

Cas d'utilisation courants :
• données scientifiques manquantes.

Cas limites :
• contagieux dans ops.

Considérations de performance :
• O(1).

Exemples :
• float("NaN")

Remarques :
• ne testez pas == nan.`,
  573: `float("nan") == float("nan") vaut False : NaN n'est pas égal à lui-même par définition IEEE.

Débutant :
• piège tests ==.

Intermédiaire :
• utiliser math.isnan.

Expert :
• plusieurs nan bit patterns possibles.

Concepts clés :
• comparaison NaN.

Distinctions clés :
• is nan pas non plus fiable entre deux conversions ? (nan is nan peut être True pour même objet mais == False).

Fonctionnement :
• __eq__ renvoie False.

Exécution étape par étape :
1. Deux nan peut-être objets distincts.
2. == False.

Ordre des opérations :
• ==.

Cas d'utilisation courants :
• tests scientifiques.

Cas limites :
• pandas isna.

Considérations de performance :
• O(1).

Exemples :
• math.isnan(float('nan'))

Remarques :
• documentez politique NaN.`,
  574: `float("inf") > 1_000_000 vaut True : inf dépasse tout réel fini.

Débutant :
• comparaison ordre étendu.

Intermédiaire :
• inf == inf True malgré nan différent.

Expert :
• partial ordering.

Concepts clés :
• comparaison inf.

Distinctions clés :
• inf vs max float fini.

Fonctionnement :
• règles IEEE ordering.

Exécution étape par étape :
1. inf vs 1e6.
2. True.

Ordre des opérations :
• >.

Cas d'utilisation courants :
• bornes algorithmes.

Cas limites :
• inf > inf False.

Considérations de performance :
• O(1).

Exemples :
• -inf < 0

Remarques :
• math.isfinite.`,
  575: `bool(0.0) vaut False : float zéro est falsy.

Débutant :
• comme int 0.

Intermédiaire :
• -0.0 aussi falsy.

Expert :
• très petits non-zero truthy.

Concepts clés :
• vérité float.

Distinctions clés :
• 0.0 vs None.

Fonctionnement :
• __bool__ float.

Exécution étape par étape :
1. 0.0.
2. False.

Ordre des opérations :
• bool().

Cas d'utilisation courants :
• if x: avec résultat float.

Cas limites :
• nan truthy.

Considérations de performance :
• O(1).

Exemples :
• bool(0.0001)

Remarques :
• explicite x != 0.0 si nan à traiter.`,
  576: `bool(0j) vaut False : zéro complexe est falsy ; tout autre complexe truthy.

Débutant :
• seule la paire (0,0) faux.

Intermédiaire :
• pas d'ordre total sur complexe sauf ==.

Expert :
• partie réelle et imaginaire nulles.

Concepts clés :
• vérité complex.

Distinctions clés :
• 0j vs 0.

Fonctionnement :
• __bool__ complex.

Exécution étape par étape :
1. 0+0j.
2. False.

Ordre des opérations :
• bool().

Cas d'utilisation courants :
• rare ; signaux DSP.

Cas limites :
• nan parties ?

Considérations de performance :
• O(1).

Exemples :
• bool(1j)

Remarques :
• pas de comparaison < entre complexes.`,
  577: `bool(()) vaut False : tuple vide falsy.

Débutant :
• conteneur vide → faux.

Intermédiaire :
• tuple non vide truthy même si éléments falsy ? (False,) truthy car non vide.

Expert :
• len 0 décide.

Concepts clés :
• vérité tuple.

Distinctions clés :
• () vs (None,) truthy.

Fonctionnement :
• longueur 0.

Exécution étape par étape :
1. ().
2. False.

Ordre des opérations :
• bool().

Cas d'utilisation courants :
• if args:.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• bool((1,))

Remarques :
• pattern *args.`,
  578: `bool({}) vaut False : dict vide falsy.

Débutant :
• comme liste vide.

Intermédiaire :
• dict avec entrées truthy même si valeurs falsy.

Expert :
• ordre préservé 3.7+.

Concepts clés :
• vérité dict.

Distinctions clés :
• {} set vs dict ; dict vide {}.

Fonctionnement :
• len 0.

Exécution étape par étape :
1. {}.
2. False.

Ordre des opérations :
• bool().

Cas d'utilisation courants :
• if config:.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• bool({"a":1})

Remarques :
• set() vide aussi faux.`,
  579: `bool(set()) vaut False : ensemble vide falsy.

Débutant :
• pas d'éléments.

Intermédiaire :
• set non vide truthy.

Expert :
• frozenset idem règle.

Concepts clés :
• vérité set.

Distinctions clés :
• set() vs {} dict attention syntaxe.

Fonctionnement :
• len 0.

Exécution étape par étape :
1. set().
2. False.

Ordre des opérations :
• bool().

Cas d'utilisation courants :
• if visited:.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• bool({1})

Remarques :
• set() pour vide, pas {}.`,
  580: `bool(frozenset()) vaut False : comme set, immuable vide falsy.

Débutant :
• même règle de vérité.

Intermédiaire :
• frozenset non vide truthy.

Expert :
• peut être clé dict si immuable nested rules.

Concepts clés :
• frozenset vérité.

Distinctions clés :
• frozenset vs set vérité identique.

Fonctionnement :
• len 0.

Exécution étape par étape :
1. frozenset().
2. False.

Ordre des opérations :
• bool().

Cas d'utilisation courants :
• clés composites immuables.

Cas limites :
• N/A.

Considérations de performance :
• O(1).

Exemples :
• bool(frozenset({1}))

Remarques :
• hashable si contenu hashable.`,
};
