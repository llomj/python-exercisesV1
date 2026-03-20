/** Level 10 FR — bank 3283–3300 (idiomes Python, Zen, EAFP/DRY). */
export default {
  3283: `Échanger deux variables a et b, façon pythonique ?

Débutant :
• a, b = b, a en une ligne (tuple packing/unpacking).

Intermédiaire :
• Pas besoin de variable temporaire explicite.

Expert :
• Fonctionne pour toute paire d’objets réassignables.

Concepts clés :
• Simultanéité sémantique des affectations multiples.

Distinctions clés :
• vs swap avec temp en C.

Fonctionnement :
• CPython crée tuple intermédiaire.

Exécution étape par étape :
• Évalue droite puis assigne gauche.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Tri in-place, rotate.

Cas limites :
• a, b = b, a + b est une autre forme (attention ordre).

Considérations de performance :
• Très rapide.

Exemples :
• x, y = y, x.

Remarques :
• Réponse : a, b = b, a — 1re option.`,
  3284: `Tester si une liste est vide, façon pythonique ?

Débutant :
• if not my_list: (truthiness : liste vide est faux).

Intermédiaire :
• len(my_list) == 0 est plus verbeux et moins idiomatique.

Expert :
• None et [] se distinguent : if my_list is None vs if not my_list.

Concepts clés :
• Truth value testing.

Distinctions clés :
• Vide vs None.

Fonctionnement :
• __len__ ou __bool__.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Garde clauses en début de fonction.

Cas limites :
• numpy array : truthiness ambiguë → explicite .size.

Considérations de performance :
• O(1) pour list.

Exemples :
• if not rows: return.

Remarques :
• Réponse : if not my_list: — 1re option.`,
  3285: `Construire une chaîne à partir de morceaux, façon pythonique ?

Débutant :
• "".join(parts) où parts est un itérable de str.

Intermédiaire :
• Éviter s += fragment en boucle (quadratic sur certaines implémentations).

Expert :
• join exige str ; map(str, parts) si besoin.

Concepts clés :
• Allocation unique côté C pour join.

Distinctions clés :
• join vs f-string dans boucle répétée.

Fonctionnement :
• Méthode str.join.

Exécution étape par étape :
• Parcourt une fois.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• CSV manuel, construction URL.

Cas limites :
• Séparateur non vide : ",".join.

Considérations de performance :
• Linéaire.

Exemples :
• "".join(chunks).

Remarques :
• Réponse : "".join(parts) — 1re option.`,
  3286: `Vérifier que x est un entier, façon pythonique ?

Débutant :
• isinstance(x, int) — respecte les sous-types (bool est sous-classe d’int en Python).

Intermédiaire :
• type(x) is int si vous voulez rejeter bool explicitement.

Expert :
• numbers.Integral pour tests abstraits rares.

Concepts clés :
• isinstance vs type strict.

Distinctions clés :
• bool hérite int : piège classique.

Fonctionnement :
• isinstance consulte la MRO.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Validation d’API.

Cas limites :
• numpy int64 : pas int Python.

Considérations de performance :
• Rapide.

Exemples :
• assert isinstance(n, int).

Remarques :
• Réponse : isinstance(x, int) — 1re option.`,
  3287: `Tester None de façon pythonique ?

Débutant :
• if x is None: / is not None.

Intermédiaire :
• if not x: attrape aussi 0, [], "".

Expert :
• PEP 8 recommande is pour None.

Concepts clés :
• Singleton None.

Distinctions clés :
• is vs ==.

Fonctionnement :
• N/A.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Paramètre optionnel défaut None.

Cas limites :
• numpy.newaxis etc. hors scope.

Considérations de performance :
• N/A.

Exemples :
• if cache is None: cache = {}.

Remarques :
• Réponse : if x is None: — 1re option.`,
  3288: `[x*2 for x in lst] vs list(map(lambda x: x*2, lst)) ?

Débutant :
• La liste en intention est généralement plus pythonique : lisible, locale, sans lambda bruit.

Intermédiaire :
• map avec fonction nommée peut être OK.

Expert :
• generator (x*2 for x in lst) si flux unique passage.

Concepts clés :
• PEP 20 lisibilité.

Distinctions clés :
• comprehension vs map/filter.

Fonctionnement :
• N/A.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• transformations simples.

Cas limites :
• comprehension avec effet de bord : mauvaise idée.

Considérations de performance :
• Comparable pour petits n.

Exemples :
• [n+1 for n in nums].

Remarques :
• Réponse : liste en compréhension — 1re option.`,
  3289: `Parcourir clés et valeurs d’un dict, pythonique ?

Débutant :
• for k, v in d.items():.

Intermédiaire :
• Évite for k in d: v = d[k] répété.

Expert :
• .items() vue dynamique en Python 3.

Concepts clés :
• Itération directe.

Distinctions clés :
• items vs iteritems Python2.

Fonctionnement :
• N/A.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• Ordre insertion (3.7+ dict).

Cas d'utilisation courants :
• formatage, filtrage.

Cas limites :
• mutation du dict pendant itération : RuntimeError.

Considérations de performance :
• C efficace.

Exemples :
• for name, score in scores.items():.

Remarques :
• Réponse : for k, v in d.items(): — 1re option.`,
  3290: `Boucler avec indice et valeur, pythonique ?

Débutant :
• for i, x in enumerate(lst):.

Intermédiaire :
• enumerate(start=1) pour compte humain.

Expert :
• zip avec range évitable si enumerate suffit.

Concepts clés :
• Énumérateur lazy.

Distinctions clés :
• vs range(len).

Fonctionnement :
• N/A.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• logs numérotés, alignement colonnes.

Cas limites :
• enumerate sur dict itère clés seules par défaut.

Considérations de performance :
• N/A.

Exemples :
• for i, line in enumerate(lines):.

Remarques :
• Réponse : for i, x in enumerate(lst): — 1re option.`,
  3291: `Itérer deux listes en parallèle, pythonique ?

Débutant :
• for a, b in zip(xs, ys):.

Intermédiaire :
• itertools.zip_longest si longueurs différentes avec sentinelle.

Expert :
• zip s’arrête au plus court en Python 3.

Concepts clés :
• Lock-step iteration.

Distinctions clés :
• zip vs index manuel.

Fonctionnement :
• N/A.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• fusionner colonnes, tracer x/y.

Cas limites :
• longueurs inégales : perte silencieuse sans zip_longest.

Considérations de performance :
• N/A.

Exemples :
• for name, age in zip(names, ages):.

Remarques :
• Réponse : for a, b in zip(xs, ys): — 1re option.`,
  3292: `Fichiers, façon pythonique ?

Débutant :
• with open(path) as fh: — fermeture garantie.

Intermédiaire :
• try/finally manuel est plus verbeux et sujet aux oublis.

Expert :
• Path.open() idem avec pathlib.

Concepts clés :
• Protocol context manager.

Distinctions clés :
• with vs close() oubliée.

Fonctionnement :
• __enter__/__exit__.

Exécution étape par étape :
• close même si exception.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• lecture CSV, logs.

Cas limites :
• encoding='utf-8' explicite recommandé.

Considérations de performance :
• N/A.

Exemples :
• with open("f.txt", encoding="utf-8") as f: data = f.read().

Remarques :
• Réponse : with open(...) as fh: — 1re option.`,
  3293: `f-strings préférées à quelles méthodes anciennes ?

Débutant :
• À .format() et à l’opérateur % pour la plupart des cas modernes (lisibilité, perf).

Intermédiaire :
• f-string évalue expressions en scope local.

Expert :
• str.format_map pour Mapping custom subsiste pour cas rares.

Concepts clés :
• PEP 498.

Distinctions clés :
• f"{x}" vs "%s" % x.

Fonctionnement :
• Compile-time hooks.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• logs, messages d’erreur.

Cas limites :
• Pas d’expressions trop lourdes dans f-string (lisibilité).

Considérations de performance :
• Souvent rapide.

Exemples :
• f"{user.id}:{user.name}".

Remarques :
• Réponse : .format() et % — 1re option.`,
  3294: `collections.defaultdict est préférable à quoi ?

Débutant :
• À vérifier manuellement if key not in d avant d’initialiser une liste/compteur.

Intermédiaire :
• Réduit branches et erreurs KeyError.

Expert :
• factory int pour comptages : defaultdict(int).

Concepts clés :
• Usine par défaut callable.

Distinctions clés :
• defaultdict vs dict.setdefault.

Fonctionnement :
• __missing__ injecte valeur par défaut.

Exécution étape par étape :
• Accès manquant appelle factory.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• adjacency list, histogrammes.

Cas limites :
• factory partagée mutable : attention même objet.

Considérations de performance :
• Comparable à setdefault.

Exemples :
• dd = defaultdict(list); dd[k].append(v).

Remarques :
• Réponse : vérifier l’existence de clé avant d’assigner — 1re option.`,
  3295: `« Flat is better than nested » (Zen) signifie ?

Débutant :
• Préférer des structures peu profondes et des retours anticipés plutôt que if dans if dans if.

Intermédiaire :
• Early return réduit indentation.

Expert :
• Refactor en fonctions nommées pour aplatir.

Concepts clés :
• Lisibilité et maintenance.

Distinctions clés :
• nested vs guard clauses.

Fonctionnement :
• N/A.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• validation pipelines.

Cas limites :
• parfois pattern matching clarifie au lieu d’aplatir aveuglément.

Considérations de performance :
• N/A.

Exemples :
• if not ok: return au lieu d’énorme else.

Remarques :
• Réponse : éviter imbrication profonde ; structures plates et early returns — 1re option.`,
  3296: `« Explicit is better than implicit » (Zen) signifie ?

Débutant :
• Le code doit montrer clairement ce qu’il fait plutôt que compter sur la magie cachée.

Intermédiaire :
• Imports explicites, noms parlants, éviter trop de contexte implicite global.

Expert :
• Ne pas confondre avec « tout annoter » : c’est surtout clarté du flux.

Concepts clés :
• Prévisibilité pour lecteur et outil.

Distinctions clés :
• explicite vs DSL trop magique.

Fonctionnement :
• N/A.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• API publiques stables.

Cas limites :
• surcharge raisonnable __getattr__ documentée.

Considérations de performance :
• N/A.

Exemples :
• éviter import * en libs.

Remarques :
• Réponse : le code montre clairement son comportement — 1re option.`,
  3297: `« There should be one obvious way… » vient d’où ?

Débutant :
• The Zen of Python, affiché via import this (PEP 20).

Intermédiaire :
• Pas une règle PEP 8 syntaxique mais philosophie.

Expert :
• En pratique Python offre parfois plusieurs façons ; l’idiome commun prime.

Concepts clés :
• Cohérence communautaire.

Distinctions clés :
• Zen vs PEP 8.

Fonctionnement :
• N/A.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• choisir pathlib vs os.path : tendance pathlib moderne.

Cas limites :
• « one way » idéal vs réalité historique.

Considérations de performance :
• N/A.

Exemples :
• import this dans REPL.

Remarques :
• Réponse : The Zen of Python (import this) — 1re option.`,
  3298: `Que fait import this ?

Débutant :
• Affiche The Zen of Python (PEP 20), aphorismes sur la philosophie du langage.

Intermédiaire :
• Easter egg ; le module s’appelle this.py.

Expert :
• Rot13 obfuscation historique du texte source.

Concepts clés :
• Culture Python.

Distinctions clés :
• vs help().

Fonctionnement :
• print du zen.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• blague + pédagogie.

Cas limites :
• N/A.

Considérations de performance :
• N/A.

Exemples :
• >>> import this.

Remarques :
• Réponse : The Zen of Python (PEP 20) — 1re option.`,
  3299: `Que signifie EAFP en Python (cette question, ID 3299) ?

Débutant :
• Easier to Ask Forgiveness than Permission : essayer l’action puis gérer l’exception si échec.

Intermédiaire :
• Style typique try/except KeyError vs if key in dict.

Expert :
• Les distracteurs « Every Argument… » etc. sont des pièges ; la bonne expansion officielle reste Easier to Ask Forgiveness than Permission.

Concepts clés :
• Idiomatique pour beaucoup d’API Python.

Distinctions clés :
• EAFP vs LBYL.

Fonctionnement :
• Exceptions ne sont pas « rares » en coût si chemin heureux domine.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• lecture fichier, clés dict.

Cas limites :
• chemins ultra chauds : profiler.

Considérations de performance :
• dépend du cas.

Exemples :
• try: v=d[k] except KeyError: ...

Remarques :
• Réponse : Easier to Ask Forgiveness than Permission — 1re option.`,
  3300: `Que signifie le principe DRY ?

Débutant :
• Don't Repeat Yourself : chaque connaissance ne devrait avoir qu’une représentation autoritaire dans le code.

Intermédiaire :
• Factoriser fonctions, constantes, modules plutôt que copier-coller.

Expert :
• Ne pas sur-abstraire : « trois règles » avant de généraliser.

Concepts clés :
• Maintenance et bugs uniques.

Distinctions clés :
• DRY vs WET (write everything twice).

Fonctionnement :
• N/A.

Exécution étape par étape :
• N/A.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• helpers pour validation répétée.

Cas limites :
• duplication légitime pour découplage.

Considérations de performance :
• factorisation peut ajouter indirection.

Exemples :
• constante TAILLE_MAX au lieu de 4096 éparpillés.

Remarques :
• Réponse : Don't Repeat Yourself — 1re option.`,
};
