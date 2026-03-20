/** Level 6 FR 2076–2100 — level6_expert_b.ts Q76–100 */
export default {
  2076: `MappingProxyType lecture

Débutant :
• p est une vue en lecture seule sur d ; p["a"] lit la valeur 1 comme sur un dict.

Intermédiaire :
• Souvent utilisée pour exposer __dict__ de classes/types de façon immuable.

Expert :
• Le proxy reste lié au mapping sous-jacent.

Concepts clés :
• types.MappingProxyType, vue dynamique.

Distinctions clés :
• Ce n’est pas une copie profonde.

Fonctionnement :
• Délégation de lecture au dict interne.

Exécution étape par étape :
1. 1.

Ordre des opérations :
• Créer d, proxy, sous-script.

Cas d'utilisation courants :
• API read-only, namespaces.

Cas limites :
• Clé absente → KeyError comme dict.

Considérations de performance :
• Très léger overlay.

Exemples :
• mappingproxy du __dict__ d’un type.

Remarques :
• Réponse : 1.`,

  2077: `MappingProxyType écriture

Débutant :
• Assigner p["b"] lève TypeError : la vue est non modifiable.

Intermédiaire :
• Il faut modifier le dict d d’origine si mutable.

Expert :
• Protège les mappings exposés publiquement.

Concepts clés :
• Immuabilité de surface du proxy.

Distinctions clés :
• dict normal accepterait l’assignation.

Fonctionnement :
• Tentative __setitem__ sur proxy → rejet.

Exécution étape par étape :
1. TypeError.

Ordre des opérations :
• Proxy créé puis assignation illégale.

Cas d'utilisation courants :
• Empêcher clients de casser un mapping interne.

Cas limites :
• Si d sous-jacent est remplacé entièrement selon usage (hors sujet).

Considérations de performance :
• N/A erreur.

Exemples :
• types.MappingProxyType(locals()) cas spéciaux.

Remarques :
• Réponse : TypeError.`,

  2078: `Proxy reflète le dict d’origine

Débutant :
• Après d["b"]=2 sur le dict original, p["b"] voit 2 car vue vivante.

Intermédiaire :
• Pas besoin de recréer le proxy.

Expert :
• Si on remplace entièrement d par un autre objet, le proxy pointe toujours l’ancien (subtilité avancée) ; ici mutation in-place OK.

Concepts clés :
• Vue live, pas snapshot.

Distinctions clés :
• copy() du dict donnerait une copie indépendante.

Fonctionnement :
• Lecture déléguée au même mapping muté.

Exécution étape par étape :
1. p["b"] == 2.

Ordre des opérations :
• Proxy, mutation de d, lecture via p.

Cas d'utilisation courants :
• Observer changements de configuration partagée.

Cas limites :
• Thread-safety comme pour dict nu.

Considérations de performance :
• Indirection minime.

Exemples :
• Exposer dict de module en lecture seule.

Remarques :
• Réponse : 2.`,

  2079: `dict.copy() shallow top-level

Débutant :
• d2 reçoit une copie superficielle : ajouter une clé de premier niveau dans d2 ne modifie pas d.

Intermédiaire :
• d reste {"a":1}.

Expert :
• Les valeurs internes mutables restent partagées (voir 2080).

Concepts clés :
• Shallow copy, nouvel objet dict.

Distinctions clés :
• d2 is d est False.

Fonctionnement :
• Duplication des paires clé-valeur au premier niveau.

Exécution étape par étape :
1. d inchangé top-level.

Ordre des opérations :
• copy, mutation d2.

Cas d'utilisation courants :
• Dupliquer options avant modification.

Cas limites :
• copy.deepcopy pour arbre complet.

Considérations de performance :
• O(n) clés au premier niveau.

Exemples :
• dict(d) similaire pour shallow.

Remarques :
• Réponse : {"a": 1}.`,

  2080: `Shallow copy et dict imbriqué

Débutant :
• d2["a"] pointe vers le même sous-dict que d["a"] ; ajouter y dans ce sous-dict est visible depuis d.

Intermédiaire :
• Seule l’identité du dict externe diffère, pas celle du nested.

Expert :
• copy.deepcopy ou copie manuelle du sous-arbre pour isoler.

Concepts clés :
• Partage de références, mutation profonde implicite.

Distinctions clés :
• Erreur classique en copie de configs JSON-like.

Fonctionnement :
• d["a"]["y"] = 2 touche l’objet dict interne partagé.

Exécution étape par étape :
1. d["a"] contient x et y.

Ordre des opérations :
• copy, mutation nested via d2.

Cas d'utilisation courants :
• Arbres de paramètres.

Cas limites :
• Remplacer entièrement d2["a"] casserait le partage.

Considérations de performance :
• Pas de copie récursive par défaut.

Exemples :
• {k: v.copy() for k,v in d.items()} shallow par valeur.

Remarques :
• Réponse : {"x": 1, "y": 2} pour d["a"] selon QCM.`,

  2081: `d.__class__

Débutant :
• Pour un littéral dict, __class__ est le type dict, affiché comme classe dict en repr.

Intermédiaire :
• type(d) équivalent pour instances classiques.

Expert :
• Sous-classes affichent leur propre type.

Concepts clés :
• Objet classe, introspection.

Distinctions clés :
• Pas "dict" simple string sans repr de classe.

Fonctionnement :
• Attribut spécial sur instance.

Exécution étape par étape :
1. <class 'dict'>.

Ordre des opérations :
• Création dict, accès __class__.

Cas d'utilisation courants :
• Tests, sérialisation conditionnelle.

Cas limites :
• types dupliqués dans certains reload.

Considérations de performance :
• Négligeable.

Exemples :
• isinstance(d, dict) plus idiomatique pour vérifier.

Remarques :
• Réponse : <class 'dict'> (forme du quiz).`,

  2082: `isinstance(True, int)

Débutant :
• True : bool est une sous-classe de int dans le MRO.

Intermédiaire :
• True se comporte arithmétiquement comme 1 dans beaucoup de contextes.

Expert :
• isinstance(False, int) aussi True.

Concepts clés :
• Sous-typage bool/int historique.

Distinctions clés :
• type(True) is int est False.

Fonctionnement :
• Vérification dans la hiérarchie.

Exécution étape par étape :
1. True.

Ordre des opérations :
• isinstance appel.

Cas d'utilisation courants :
• APIs acceptant int ou bool.

Cas limites :
• Éviter d’en abuser pour logique métier.

Considérations de performance :
• Rapide.

Exemples :
• True + True == 2.

Remarques :
• Réponse : True.`,

  2083: `setdefault("b", [])

Débutant :
• "b" absent : insère b avec valeur [] et retourne cette liste ; d contient a et b.

Intermédiaire :
• Même liste retournée sert aux futurs append.

Expert :
• Si "b" existait, retournerait la valeur existante sans remplacer.

Concepts clés :
• setdefault, mutation conditionnelle.

Distinctions clés :
• get n’insère pas.

Fonctionnement :
• Test présence, insertion défaut si absent.

Exécution étape par étape :
1. d == {"a": 1, "b": []} selon QCM.

Ordre des opérations :
• dict initial, setdefault.

Cas d'utilisation courants :
• Éviter if k not in d: d[k]=[].

Cas limites :
• Piège default mutable partagé si même liste passée en argument réutilisée (ici nouveau [] chaque appel).

Considérations de performance :
• Un lookup + insertion possible.

Exemples :
• d.setdefault(k, []).append(x).

Remarques :
• Réponse : {"a": 1, "b": []}.`,

  2084: `dict(d, b=2)

Débutant :
• Constructeur dict copie d puis applique kwargs → nouvel objet e avec a:1 et b:2.

Intermédiaire :
• d inchangé si non réassigné.

Expert :
• Ordre : copie puis surcharge par kwargs.

Concepts clés :
• Fusion à la construction.

Distinctions clés :
• Pas e is d.

Fonctionnement :
• Nouveau mapping.

Exécution étape par étape :
1. e = {"a":1,"b":2}.

Ordre des opérations :
• Appel dict(mapping, **kwargs).

Cas d'utilisation courants :
• Cloner avec patch.

Cas limites :
• Clés kwargs doivent être identifiants str valides.

Considérations de performance :
• Copie O(n).

Exemples :
• dict(**d, b=2) en 3.5+ limites similaires.

Remarques :
• Réponse : {"a": 1, "b": 2}.`,

  2085: `Compréhension filtrant "a"

Débutant :
• Garde k != "a" → seule paire b:2.

Intermédiaire :
• dict comprehension standard.

Expert :
• Peut combiner if sur v aussi.

Concepts clés :
• Filtrage items, nouvelle dict.

Distinctions clés :
• d original non modifié si pas réassigné.

Fonctionnement :
• Itération et test booléen.

Exécution étape par étape :
1. {"b": 2}.

Ordre des opérations :
• items puis comprehension.

Cas d'utilisation courants :
• Retirer clés sensibles avant export.

Cas limites :
• Clés dynamiques à exclure en ensemble.

Considérations de performance :
• O(n).

Exemples :
• {k:v for k,v in d.items() if v>0}.

Remarques :
• Réponse : {"b": 2}.`,

  2086: `Liste en compréhension avec pop

Débutant :
• pop("a") et pop("c") enlèvent ces clés ; il reste {"b":2}.

Intermédiaire :
• La liste en compréhension construit les valeurs poppées mais l’effet est sur d.

Expert :
• Ordre des pops suit la liste ["a","c"].

Concepts clés :
• pop side effect, mutation in-place.

Distinctions clés :
• Ne pas supposer d ordonné pour pop multiple sans liste explicite.

Fonctionnement :
• Retrait successif.

Exécution étape par étape :
1. d final {"b": 2}.

Ordre des opérations :
• compréhension exécutée, pops appliqués.

Cas d'utilisation courants :
• Nettoyer plusieurs clés connues.

Cas limites :
• KeyError si clé déjà absente.

Considérations de performance :
• O(k) pour k clés.

Exemples :
• for k in keys: d.pop(k, None) plus sûr.

Remarques :
• Réponse : {"b": 2}.`,

  2087: `d.keys() == {"a", "b"}

Débutant :
• Les vues dict_keys peuvent comparer à un set même éléments → True.

Intermédiaire :
• Ordre des clés n’influence pas cette égalité mixte.

Expert :
• Détail CPython : implémentation optimisée de comparaison.

Concepts clés :
• Égalité vue clés / set.

Distinctions clés :
• == avec liste ordonnée serait autre règle.

Fonctionnement :
• Comparaison ensembliste des membres.

Exécution étape par étape :
1. True.

Ordre des opérations :
• .keys() puis == set.

Cas d'utilisation courants :
• Vérifier même domaine de clés.

Cas limites :
• Types non comparables → False ou erreur.

Considérations de performance :
• Dépend des tailles.

Exemples :
• set(d) == set(d.keys()).

Remarques :
• Réponse : True.`,

  2088: `d.keys() == {"a", "c"}

Débutant :
• Clés réelles a,b ; set demandé a,c → pas même ensemble → False.

Intermédiaire :
• b manque à droite, c manque à gauche.

Expert :
• Symétrie de == exige égalité stricte des éléments.

Concepts clés :
• Test d’ensemble, faux négatif attendu.

Distinctions clés :
• Ne pas confondre sous-ensemble.

Fonctionnement :
• Comparaison échoue.

Exécution étape par étape :
1. False.

Ordre des opérations :
• keys puis ==.

Cas d'utilisation courants :
• Validation de schéma.

Cas limites :
• Vides : deux vides True.

Considérations de performance :
• Négligeable.

Exemples :
• <= pour sous-ensemble si besoin.

Remarques :
• Réponse : False.`,

  2089: `Counter("abracadabra").most_common(3)

Débutant :
• a compte 5 ; b et r comptent 2 ; c et d à 1 → top 3 : a, puis b et r avec tie-break d’insertion.

Intermédiaire :
• Liste de tuples (lettre, count).

Expert :
• b apparaît avant r dans la chaîne pour le départage.

Concepts clés :
• Counter, most_common, tie insertion order.

Distinctions clés :
• Pas inclure c avec 1 si on demande 3 plus hauts counts.

Fonctionnement :
• Tri par effectif puis ordre stable.

Exécution étape par étape :
1. [('a', 5), ('b', 2), ('r', 2)].

Ordre des opérations :
• Counter puis most_common(3).

Cas d'utilisation courants :
• Lettres les plus fréquentes en orthographe jouet.

Cas limites :
• Chaîne vide → [].

Considérations de performance :
• Implémentation efficace en C.

Exemples :
• Analyse de logs.

Remarques :
• Réponse : [('a', 5), ('b', 2), ('r', 2)] (première option).`,

  2090: `list(d.items())[0]

Débutant :
• Un seul item ("a", 1) ; indice 0 est ce tuple.

Intermédiaire :
• items() vue matérialisée en liste ordonnée insertion.

Expert :
• Si plusieurs entrées, ordre suit dict insertion 3.7+.

Concepts clés :
• items, list, indexation.

Distinctions clés :
• [0] sur dict direct serait clé seule en itération, pas ici.

Fonctionnement :
• Premier élément de la liste de paires.

Exécution étape par étape :
1. ("a", 1).

Ordre des opérations :
• items, list, [0].

Cas d'utilisation courants :
• Prendre un échantillon de paire.

Cas limites :
• dict vide → IndexError.

Considérations de performance :
• Copie liste complète O(n) — coûteux si grand.

Exemples :
• next(iter(d.items())) sans copie.

Remarques :
• Réponse : ("a", 1).`,

  2091: `{**d} == d

Débutant :
• Le dépaquetage crée un nouveau dict aux mêmes paires → égalité par contenu True.

Intermédiaire :
• == compare clés et valeurs, pas identité.

Expert :
• Utile pour tests fonctionnels.

Concepts clés :
• Égalité structurelle des dicts.

Distinctions clés :
• is serait False (question suivante).

Fonctionnement :
• Construction shallow puis comparaison.

Exécution étape par étape :
1. True.

Ordre des opérations :
• ** spread, ==.

Cas d'utilisation courants :
• Cloner pour comparer après mutation ailleurs.

Cas limites :
• Valeurs mutables partagées malgré dict distinct.

Considérations de performance :
• Copie O(n).

Exemples :
• {**d, "c":3} fusion.

Remarques :
• Réponse : True.`,

  2092: `{**d} is d

Débutant :
• is teste l’identité d’objet ; le spread produit un nouveau dict → False.

Intermédiaire :
• Même contenu ne suffit pas pour is.

Expert :
• Seul d is d est True pour la même variable.

Concepts clés :
• Identité vs égalité.

Distinctions clés :
• == True du coup souvent pour même contenu.

Fonctionnement :
• Deux objets distincts en mémoire.

Exécution étape par étape :
1. False.

Ordre des opérations :
• création nouvelle dict, is.

Cas d'utilisation courants :
• Cache keyed by id.

Cas limites :
• interning rare pour petits objets immuables, pas pour dict.

Considérations de performance :
• Allocation nouvelle table.

Exemples :
• copy = {**d}.

Remarques :
• Réponse : False.`,

  2093: `exec sur d

Débutant :
• exec exécute la chaîne comme code Python ; assignation d["a"]=1 modifie d dans le scope courant passé (ici globals/locals implicites incluent d).

Intermédiaire :
• Sans dict globals/locals explicite, d doit être visible — l’énoncé suppose d dans le namespace.

Expert :
• Préférer ast.literal_eval pour données non fiables.

Concepts clés :
• exec, effets de bord sur dict.

Distinctions clés :
• eval ne ferait pas d’assignation multi-statement de la même façon.

Fonctionnement :
• Exécution de la suite d’assignation.

Exécution étape par étape :
1. d contient "a":1.

Ordre des opérations :
• d={}, exec(...).

Cas d'utilisation courants :
• REPL, outils dynamiques (sécurité faible).

Cas limites :
• Passer dict dédié pour globals/locals pour isolation.

Considérations de performance :
• Compilation + exécution.

Exemples :
• exec avec {"d": d} en locals.

Remarques :
• Réponse : {"a": 1}.`,

  2094: `json.loads type

Débutant :
• Un objet JSON {} devient un dict Python.

Intermédiaire :
• Les nombres JSON deviennent int/float selon valeur.

Expert :
• json.load (fichier) idem pour type racine objet.

Concepts clés :
• Parsing JSON, mapping Python.

Distinctions clés :
• Pas OrderedDict par défaut.

Fonctionnement :
• Décodeur json standard.

Exécution étape par étape :
1. type dict.

Ordre des opérations :
• loads sur chaîne.

Cas d'utilisation courants :
• APIs REST.

Cas limites :
• Clés dupliquées JSON → dernière gagne.

Considérations de performance :
• Parser C rapide.

Exemples :
• object_hook pour types custom.

Remarques :
• Réponse : dict (type du quiz).`,

  2095: `next(iter(d))

Débutant :
• iter(d) sur les clés ; première clé en ordre d’insertion 3.7+ est "a".

Intermédiaire :
• next consomme le premier élément.

Expert :
• Pour valeurs, iter(d.values()).

Concepts clés :
• Itérateur, ordre d’insertion.

Distinctions clés :
• Pas tri alphabétique automatique.

Fonctionnement :
• Création itérateur clés, avance une fois.

Exécution étape par étape :
1. "a".

Ordre des opérations :
• dict littéral ordre a,b,c puis next iter.

Cas d'utilisation courants :
• Prendre un élément arbitraire déterministe (premier).

Cas limites :
• dict vide → StopIteration.

Considérations de performance :
• O(1) pour créer iter.

Exemples :
• next(iter(d), default).

Remarques :
• Réponse : "a".`,

  2096: `next(reversed(d))

Débutant :
• reversed(d) sur les clés depuis 3.8+ (comportement documenté) donne ordre inverse insertion ; dernière clé "c".

Intermédiaire :
• Première étape du reverse iterator est la fin logique.

Expert :
• Vérifier version si portabilité ancienne.

Concepts clés :
• reversed sur dict keys view.

Distinctions clés :
• Pas list(d)[-1] nécessaire.

Fonctionnement :
• Itérateur inverse, next une fois.

Exécution étape par étape :
1. "c".

Ordre des opérations :
• dict a,b,c, reversed, next.

Cas d'utilisation courants :
• Dernier inséré en LIFO logique.

Cas limites :
• Version Python <3.8 peut ne pas supporter reversed(d).

Considérations de performance :
• O(1) pour démarrer iter.

Exemples :
• Accès dernier sans pop.

Remarques :
• Réponse : "c".`,

  2097: `Compréhension avec enumerate("abc")

Débutant :
• enumerate produit (0,"a"), (1,"b"), (2,"c") ; clés = indices, valeurs = caractères.

Intermédiaire :
• Résultat {0:"a", 1:"b", 2:"c"}.

Expert :
• start optionnel d’enumerate changerait les clés.

Concepts clés :
• enumerate, dict comprehension.

Distinctions clés :
• Pas {char: index} sans swap.

Fonctionnement :
• Boucle for sur paires.

Exécution étape par étape :
1. Mapping index → lettre.

Ordre des opérations :
• enumerate puis comprehension.

Cas d'utilisation courants :
• Positions de caractères.

Cas limites :
• Unicode graphemes vs codepoints hors scope.

Considérations de performance :
• O(n).

Exemples :
• {i:x for i,x in enumerate(lst)}.

Remarques :
• Réponse : {0: "a", 1: "b", 2: "c"}.`,

  2098: `tuple(d.items())

Débutant :
• items() donne paires dans l’ordre insertion ; tuple() fige en tuple de tuples.

Intermédiaire :
• (("a",1),("b",2)) pour l’énoncé standard.

Expert :
• Immutable snapshot superficiel des paires.

Concepts clés :
• Vue items, conversion tuple.

Distinctions clés :
• tuple(d) donnerait seulement les clés.

Fonctionnement :
• Itération complète de la vue.

Exécution étape par étape :
1. (('a', 1), ('b', 2)).

Ordre des opérations :
• items puis tuple.

Cas d'utilisation courants :
• Retourner clé-valeurs figées pour fonction.

Cas limites :
• dict vide → tuple vide.

Considérations de performance :
• O(n) copie structure.

Exemples :
• clé pour memoization ordonnée.

Remarques :
• Réponse : (('a', 1), ('b', 2)).`,

  2099: `Plusieurs update sur "a"

Débutant :
• Premier update met a:2 ; second update(a=3) met a:3 → valeur finale 3.

Intermédiaire :
• kwargs et mapping écrasent la même clé successivement.

Expert :
• Ordre des appels prime sur la dernière écriture.

Concepts clés :
• update avec mapping et kwargs.

Distinctions clés :
• Fusion | ferait une nouvelle dict en 3.9+.

Fonctionnement :
• Deux écritures successives sur même clé.

Exécution étape par étape :
1. {"a": 3}.

Ordre des opérations :
• dict initial, update dict, update kwargs.

Cas d'utilisation courants :
• Patchs de configuration en cascade.

Cas limites :
• Clés du mapping et kwargs collision → dernière source dans l’appel update gagne selon signature.

Considérations de performance :
• Deux passes.

Exemples :
• d.update(**env_vars).

Remarques :
• Réponse : {"a": 3}.`,

  2100: `all(k == k.lower() for k in d)

Débutant :
• Itération sur les clés "abc" et "def" ; toutes sont déjà minuscules → True.

Intermédiaire :
• all court-circuite sur premier False.

Expert :
• Si une clé avait une majuscule, résultat False.

Concepts clés :
• all, générateur, méthode str.lower.

Distinctions clés :
• Ne teste pas les valeurs, seulement les clés.

Fonctionnement :
• Deux comparaisons True.

Exécution étape par étape :
1. True.

Ordre des opérations :
• dict keys, générateur, all.

Cas d'utilisation courants :
• Valider clés snake_case.

Cas limites :
• Clés non str → erreur sur .lower.

Considérations de performance :
• Court-circuit utile.

Exemples :
• any pour existence d’une majuscule.

Remarques :
• Réponse : True.`,
};
