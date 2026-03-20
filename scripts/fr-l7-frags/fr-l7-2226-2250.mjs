/** Level 7 FR 2226–2250 — level7_intermediate_a.ts Q26–50 */
export default {
  2226: `functions = [abs, str, len] ; functions[0](-5)

Débutant :
• Index 0 est abs ; abs(-5) = 5.

Intermédiaire :
• Liste d’objets callable first-class.

Expert :
• aliases = [math.fabs, ...] possible selon imports.

Concepts clés :
• Liste de fonctions, indexation.

Distinctions clés :
• functions[0] sans parenthèses ne fait pas l’appel.

Fonctionnement :
• Lookup 0 puis appel callable.

Exécution étape par étape :
• -5 évalué, passé à abs.

Ordre des opérations :
• Évaluation de la liste puis sous-expression call.

Cas d'utilisation courants :
• Tables de dispatch, stratégies.

Cas limites :
• Index hors limites → IndexError.

Considérations de performance :
• Négligeable.

Exemples :
• functions[1](-5) → chaîne "-5".

Remarques :
• Réponse : 5.`,

  2227: `functions[2]("hello")

Débutant :
• Index 2 est len ; len("hello") = 5.

Intermédiaire :
• len compte les caractères Unicode codepoints de la str.

Expert :
• Graphemes vs codepoints hors scope.

Concepts clés :
• len sur str.

Distinctions clés :
• Pas la longueur de la liste functions.

Fonctionnement :
• len appelle la logique CPython sur str.

Exécution étape par étape :
• Un appel.

Ordre des opérations :
• Chaîne littérale puis len.

Cas d'utilisation courants :
• Validation de saisie.

Cas limites :
• Types non Sized → erreur.

Considérations de performance :
• O(1) pour str en CPython.

Exemples :
• len("") → 0.

Remarques :
• Réponse : 5.`,

  2228: `ops = {"+": (lambda a,b: a+b), "*": (lambda a,b: a*b)} ; ops["+"](3,4)

Débutant :
• Clé "+" pointe vers l’addition lambda → 3+4 = 7.

Intermédiaire :
• Dict mappe symboles vers callables.

Expert :
• Peut servir de mini langage d’expressions (avec prudence sécurité).

Concepts clés :
• Valeurs callable en dict.

Distinctions clés :
• ops["+"] est la fonction, pas le résultat.

Fonctionnement :
• Lookup O(1) amorti puis appel.

Exécution étape par étape :
• lambda(3,4) addition entière.

Ordre des opérations :
• Création dict puis accès puis call.

Cas d'utilisation courants :
• Parseurs simples, calculatrices.

Cas limites :
• Clé absente → KeyError.

Considérations de performance :
• Négligeable.

Exemples :
• ops["*"](3,4) suivant.

Remarques :
• Réponse : 7.`,

  2229: `ops["*"](3,4)

Débutant :
• Lambda multiplication → 12.

Intermédiaire :
• Indépendant de l’addition sauf partage du dict.

Expert :
• Pour floats, même opérateur *.

Concepts clés :
• Dispatch par chaîne.

Distinctions clés :
• Pas 3+4.

Fonctionnement :
• Appel binaire.

Exécution étape par étape :
• 3*4.

Ordre des opérations :
• Évaluation des arguments avant lambda.

Cas d'utilisation courants :
• Opérateurs dynamiques.

Cas limites :
• Débordement selon type (int illimité en Python).

Considérations de performance :
• Négligeable.

Exemples :
• Clé inconnue gérée par .get.

Remarques :
• Réponse : 12.`,

  2230: `make_validator(min_val, max_val) ; lambda x: min_val <= x <= max_val ; v(5) avec bornes 1 et 10

Débutant :
• 5 est entre 1 et 10 inclusivement en Python → True.

Intermédiaire :
• Chaînage de comparaisons équivalent à 1 <= 5 and 5 <= 10.

Expert :
• min_val et max_val capturés en fermeture.

Concepts clés :
• Prédicat booléen, intervalle fermé.

Distinctions clés :
• Pas strict < sauf si on change l’expression.

Fonctionnement :
• Deux comparaisons court-circuitées implicitement.

Exécution étape par étape :
• v(5) retourne bool.

Ordre des opérations :
• Création de v puis appel.

Cas d'utilisation courants :
• Validation de formulaires, bornes.

Cas limites :
• Si min_val > max_val, toujours False pour tout x (sauf NaN subtilités).

Considérations de performance :
• Négligeable.

Exemples :
• v(1) True, v(10) True aux bornes.

Remarques :
• Réponse : True (option du quiz).`,

  2231: `v(15) avec validateur 1..10

Débutant :
• 15 > 10 → False.

Intermédiaire :
• Même fermeture que v(5), autre entrée.

Expert :
• Généralisable à des validateurs non numériques avec clé custom.

Concepts clés :
• Test d’appartenance à intervalle.

Distinctions clés :
• Pas d’exception : simple booléen.

Fonctionnement :
• 1 <= 15 <= 10 est False car 15 <= 10 faux.

Exécution étape par étape :
• Court-circuit après la seconde comparaison si implémenté ainsi.

Ordre des opérations :
• Évaluation de 15 une fois.

Cas d'utilisation courants :
• Rejet de saisie.

Cas limites :
• NaN : toute comparaison False.

Considérations de performance :
• Négligeable.

Exemples :
• v(0) False.

Remarques :
• Réponse : False (première option).`,

  2232: `sorted(["hello","hi","hey"], key=len)

Débutant :
• Longueurs 5, 2, 3 → ordre croissant par len : hi, hey, hello.

Intermédiaire :
• sorted renvoie une nouvelle liste ; l’originale inchangée.

Expert :
• Tri stable : à longueurs égales, ordre relatif préservé (ici pas d’égalité).

Concepts clés :
• Tri par clé, len.

Distinctions clés :
• Pas ordre alphabétique brut.

Fonctionnement :
• key appelée une fois par élément en CPython (DSU pattern).

Exécution étape par étape :
• Clés 5,2,3 puis permutation indices.

Ordre des opérations :
• sorted évalue l’itérable puis trie.

Cas d'utilisation courants :
• Ranger par longueur, date, priorité.

Cas limites :
• key qui lève → échec global du tri.

Considérations de performance :
• O(n log n).

Exemples :
• Mots même longueur : stabilité.

Remarques :
• Réponse : liste hi, hey, hello (formulation du QCM).`,

  2233: `sorted([(1,3),(2,1),(3,2)], key=lambda x: x[1])

Débutant :
• Clé = second membre : 3, 1, 2 → ordre croissant des clés : (2,1), (3,2), (1,3).

Intermédiaire :
• Tuples entiers comparés sinon par clé seulement ici.

Expert :
• itemgetter(1) idiomatique.

Concepts clés :
• Tri de tuples par composante.

Distinctions clés :
• Ne trie pas par premier membre.

Fonctionnement :
• lambda extrait x[1] pour chaque tuple.

Exécution étape par étape :
• Tri sur [3,1,2].

Ordre des opérations :
• sorted crée nouvelle liste.

Cas d'utilisation courants :
• Classements par score, priorité.

Cas limites :
• x pas de longueur 2 → IndexError.

Considérations de performance :
• O(n log n).

Exemples :
• Inverser avec key négatif ou reverse=True.

Remarques :
• Réponse : ordre [(2,1), (3,2), (1,3)] (option du quiz).`,

  2234: `list(map(lambda x: x.upper(), ["hello","world"]))

Débutant :
• Majuscules : HELLO et WORLD dans une nouvelle liste.

Intermédiaire :
• map paresseux matérialisé par list.

Expert :
• str.upper est méthode ; ici lambda équivalent à str.upper passé... mais lambda appelle .upper sur chaque élément.

Concepts clés :
• Transformation d’itérable.

Distinctions clés :
• Pas une seule chaîne concaténée.

Fonctionnement :
• Deux appels upper.

Exécution étape par étape :
• map puis list consomme.

Ordre des opérations :
• Ordre préservé.

Cas d'utilisation courants :
• Normalisation de colonnes.

Cas limites :
• Éléments non str → AttributeError.

Considérations de performance :
• O(n) sur la longueur totale.

Exemples :
• Liste vide → [].

Remarques :
• Réponse : [HELLO, WORLD] en contenu (option du quiz).`,

  2235: `list(filter(lambda x: len(x)>3, ["hi","hello","hey"]))

Débutant :
• hi longueur 2 faux, hello 5 vrai, hey 3 faux → seule hello.

Intermédiaire :
• filter + list matérialise.

Expert :
• Pour « plus de 3 » strictement : len>3, donc hey exclu.

Concepts clés :
• Filtrage par prédicat.

Distinctions clés :
• len>=3 inclurait hey.

Fonctionnement :
• Prédicat booléen par élément.

Exécution étape par étape :
• Un survivant.

Ordre des opérations :
• filter puis list.

Cas d'utilisation courants :
• Nettoyage de listes de chaînes.

Cas limites :
• None comme fonction filter (identité) autre usage.

Considérations de performance :
• O(n).

Exemples :
• Tous faux → [].

Remarques :
• Réponse : liste contenant uniquement hello (option du quiz).`,

  2236: `Peut-on stocker des fonctions dans des listes ?

Débutant :
• Oui : les fonctions sont des objets de première classe comme les entiers ou les chaînes.

Intermédiaire :
• On peut aussi les mettre dans dict, tuple, parfois set si hashables (fonctions non toujours).

Expert :
• Les lambdas sont aussi stockables.

Concepts clés :
• First-class functions.

Distinctions clés :
• Pas réservé aux builtins.

Fonctionnement :
• Références dans le conteneur.

Exécution étape par étape :
• N/A conceptuel.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Pipelines, menus de commandes.

Cas limites :
• Pickle de fonctions locales limité.

Considérations de performance :
• Coût d’indirection.

Exemples :
• Voir 2226.

Remarques :
• Réponse : Oui, objets de première classe (1re option).`,

  2237: `Peut-on passer des fonctions en arguments ?

Débutant :
• Oui : map, sorted(key=), apply, etc. le font couramment.

Intermédiaire :
• Tout callable peut être un argument.

Expert :
• Méthodes liées et partial aussi.

Concepts clés :
• Fonction d’ordre supérieur.

Distinctions clés :
• Pas limité aux lambdas.

Fonctionnement :
• Paramètre lié à l’objet fonction.

Exécution étape par étape :
• Appel interne f(x).

Ordre des opérations :
• Évaluation des arguments avant entrée dans la fonction.

Cas d'utilisation courants :
• Tri, transformation, injection.

Cas limites :
• Signature incompatible.

Considérations de performance :
• Indirection négligeable souvent.

Exemples :
• sorted(..., key=len).

Remarques :
• Réponse : Oui (1re option).`,

  2238: `Peut-on retourner des fonctions depuis des fonctions ?

Débutant :
• Oui : fabriques, décorateurs, fermetures s’appuient là-dessus.

Intermédiaire :
• return inner sans parenthèses retourne l’objet, pas son résultat.

Expert :
• __wrapped__ en décorateurs standard.

Concepts clés :
• Fonction comme valeur de retour.

Distinctions clés :
• Différent de return inner() qui retourne un résultat d’appel.

Fonctionnement :
• Objet fonction créé dans outer puis renvoyé.

Exécution étape par étape :
• Appel ultérieur au choix de l’appelant.

Ordre des opérations :
• return évalue inner comme expression.

Cas d'utilisation courants :
• Decorators, factories, partial manuel.

Cas limites :
• Fermetures et cycles GC.

Considérations de performance :
• Allocation d’objet fonction.

Exemples :
• make_adder.

Remarques :
• Réponse : Oui (1re option).`,

  2239: `type(lambda: None)

Débutant :
• Pas de type lambda séparé : même type que def → class function.

Intermédiaire :
• Le corps retourne None mais le type est celui de la fonction.

Expert :
• CPython affiche class function.

Concepts clés :
• lambda vs def seulement syntaxe.

Distinctions clés :
• Pas class NoneType (ce serait type(None)).

Fonctionnement :
• Builtin type sur objet fonction.

Exécution étape par étape :
• lambda créée puis type().

Ordre des opérations :
• Évaluation de lambda: None comme expression.

Cas d'utilisation courants :
• Introspection, tests.

Cas limites :
• Fonctions C builtins autre type (voir 2240).

Considérations de performance :
• Négligeable.

Exemples :
• type(def f(): pass) idem.

Remarques :
• Réponse : class function (1re option).`,

  2240: `type(print)

Débutant :
• print est implémenté en C : builtin_function_or_method en CPython.

Intermédiaire :
• Toujours callable comme une def Python.

Expert :
• Peut varier légèrement selon implémentation mais QCM aligné CPython.

Concepts clés :
• Builtin vs function Python.

Distinctions clés :
• Pas class function utilisateur.

Fonctionnement :
• Objet wrapper C exposé à Python.

Exécution étape par étape :
• type lookup.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Savoir pour introspection / mocks.

Cas limites :
• Autres interpréteurs.

Considérations de performance :
• Appels builtins souvent rapides.

Exemples :
• type(len) similaire.

Remarques :
• Réponse : builtin_function_or_method (1re option).`,

  2241: `def f(x, lst=[]): lst.append(x); return lst ; f(1); f(2)

Débutant :
• La liste par défaut est créée une fois au def ; les deux appels mutent le même objet → [1, 2].

Intermédiaire :
• Visible via id(f.__defaults__[0]) stable entre appels utilisant défaut.

Expert :
• Anti-pattern classique en entretien.

Concepts clés :
• Défaut mutable partagé.

Distinctions clés :
• Si on passait une nouvelle liste à chaque appel, comportement différent.

Fonctionnement :
• append sur le même défaut.

Exécution étape par étape :
• [1] puis [1,2] retour final de l’expression séquence ? L’énoncé demande le résultat global : dernier return [1,2].

Ordre des opérations :
• Deux appels.

Cas d'utilisation courants :
• Montrer le piège, pas à imiter.

Cas limites :
• Effet visible entre appels sans lien apparent pour le lecteur.

Considérations de performance :
• Croissance continue si répété.

Exemples :
• Voir 2249-2250.

Remarques :
• Réponse : [1, 2] (1re option).`,

  2242: `Trois appels f(1); f(2); f(3) avec même défaut liste

Débutant :
• Accumulation sur la même liste → [1, 2, 3].

Intermédiaire :
• Chaque append réutilise le défaut sauf si argument explicite.

Expert :
• Tests unitaires doivent réinitialiser ou passer lst=[].

Concepts clés :
• État persistant dans défaut.

Distinctions clés :
• Pas trois listes séparées.

Fonctionnement :
• Un seul objet liste en __defaults__.

Exécution étape par étape :
• Croissance 1 puis 2 puis 3 éléments.

Ordre des opérations :
• Séquence de trois appels.

Cas d'utilisation courants :
• Cache accidentel (parfois voulu rarement).

Cas limites :
• Concurrence : mutations non thread-safe.

Considérations de performance :
• Réallocation amortized O(n) append.

Exemples :
• Réinitialiser : f.__defaults__ = ([],) avancé.

Remarques :
• Réponse : [1, 2, 3].`,

  2243: `f(x, lst=None) ; lst = lst if lst is not None else [] ; deuxième appel f(2) après f(1)

Débutant :
• Chaque appel recrée une liste neuve quand lst is None → second retour [2] seul.

Intermédiaire :
• Pas de partage d’état entre les deux appels.

Expert :
• Variante if lst is None: lst = [] plus lisible.

Concepts clés :
• Sentinelle None, nouvelle liste par appel.

Distinctions clés :
• Contraire du piège lst=[] direct.

Fonctionnement :
• Deux branches : None ou liste passée.

Exécution étape par étape :
• f(1)→[1], f(2)→[2] ; la question cible le résultat du second appel.

Ordre des opérations :
• Deux appels séquentiels.

Cas d'utilisation courants :
• Pattern PEP 8 recommandé.

Cas limites :
• lst=None explicite vs omis : même branche.

Considérations de performance :
• Allocation par appel acceptable.

Exemples :
• Passer lst=[10] pour accumuler volontairement.

Remarques :
• Réponse : [2] (résultat du second appel, 1re option).`,

  2244: `def f(x, d={}): d[x]=x; return d ; f(1); f(2)

Débutant :
• Même piège avec dict : premier appel {1:1}, second ajoute sur le même dict → {1:1, 2:2}.

Intermédiaire :
• Les clés sont les x passés, valeurs identiques.

Expert :
• Idem pour set, list, par défaut mutable.

Concepts clés :
• Défaut dict partagé.

Distinctions clés :
• Ce n’est pas deux dicts indépendants.

Fonctionnement :
• Un seul objet dict en defaults.

Exécution étape par étape :
• Mutation cumulative.

Ordre des opérations :
• f(1) puis f(2).

Cas d'utilisation courants :
• Anti-pattern ; cache parfois voulu mais explicitez-le.

Cas limites :
• Clés non hashables interdites.

Considérations de performance :
• Réhash possible lors de croissance.

Exemples :
• Utiliser d=None puis if d is None: d = {}.

Remarques :
• Réponse : {1: 1, 2: 2} (1re option).`,

  2245: `def f(s=set()): s.add(1); return s ; f(); f()

Débutant :
• Même set par défaut partagé ; deuxième add(1) ne change rien car 1 déjà présent → affichage {1}.

Intermédiaire :
• Le partage existe même si visuellement identique au premier appel.

Expert :
• Vérifier avec id sur le set retourné : même objet.

Concepts clés :
• Mutable default + unicité des éléments ensemble.

Distinctions clés :
• Pas {1,1} ni erreur.

Fonctionnement :
• add ignore doublon.

Exécution étape par étape :
• Premier {1}, second toujours {1}.

Ordre des opérations :
• Deux appels.

Cas d'utilisation courants :
• Montrer que set se comporte différemment de list pour doublons.

Cas limites :
• add(2) au second appel donnerait {1,2} partagé.

Considérations de performance :
• Négligeable.

Exemples :
• Comparer à list append cumulatif.

Remarques :
• Réponse : ensemble {1} (1re option du quiz).`,

  2246: `f(1, []); f(2) avec lst=[] par défaut

Débutant :
• Premier appel utilise une liste neuve explicite [1] mais ne touche pas au défaut ; second appel utilise le défaut encore vide → append 2 → [2].

Intermédiaire :
• Le défaut n’a pas été « consommé » par le premier appel car bypass.

Expert :
• Si f(1) sans second arg avant, le défaut aurait été [1] pour la suite.

Concepts clés :
• Argument explicite vs défaut.

Distinctions clés :
• Résultat surprenant vs chaîne f(1);f(2) sans [].

Fonctionnement :
• Deuxième appel seul sur défaut vierge.

Exécution étape par étape :
• f(1,[]) retourne [1] ; f(2) retourne [2].

Ordre des opérations :
• Séquence montrée par la banque.

Cas d'utilisation courants :
• Débogage de défauts mutables.

Cas limites :
• Ordre des appels crucial.

Considérations de performance :
• Négligeable.

Exemples :
• Toujours passer lst=[] pour isoler.

Remarques :
• Réponse : [2] (1re option).`,

  2247: `def f(): pass ; f.__defaults__

Débutant :
• Aucun paramètre avec valeur par défaut → attribut None (pas tuple vide).

Intermédiaire :
• diffère de fonction avec défauts vides multiples rares.

Expert :
• __kwdefaults__ séparé pour kwargs-only.

Concepts clés :
• Introspection __defaults__.

Distinctions clés :
• None vs ().

Fonctionnement :
• Métadonnée sur l’objet fonction.

Exécution étape par étape :
• Accès attribut.

Ordre des opérations :
• Après def.

Cas d'utilisation courants :
• Libs d’inspection, tests.

Cas limites :
• Modifier __defaults__ à la main : danger.

Considérations de performance :
• Négligeable.

Exemples :
• def g(x=1): g.__defaults__ → (1,).

Remarques :
• Réponse : None (1re option).`,

  2248: `def f(x=1, y=2): pass ; f.__defaults__

Débutant :
• Tuple des valeurs par défaut dans l’ordre des paramètres qui en ont : (1, 2).

Intermédiaire :
• Les noms x,y sont dans co_varnames, pas dans le tuple.

Expert :
• Alignement sur les derniers paramètres de la signature.

Concepts clés :
• Tuple immuable des défauts.

Distinctions clés :
• Pas un dict {x:1,y:2} dans __defaults__.

Fonctionnement :
• Lecture seule typique.

Exécution étape par étape :
• Immédiat après def.

Ordre des opérations :
• Compilation.

Cas d'utilisation courants :
• Wrappers qui recopient la signature.

Cas limites :
• Un seul défaut parmi plusieurs params : tuple d’un élément.

Considérations de performance :
• Négligeable.

Exemples :
• inspect.signature plus riche.

Remarques :
• Réponse : (1, 2).`,

  2249: `Pourquoi lst=[] en argument par défaut est dangereux ?

Débutant :
• L’objet liste est créé une fois à la définition et réutilisé par tous les appels qui omettent lst.

Intermédiaire :
• Les mutations se cumulent de façon surprenante pour l’utilisateur de la fonction.

Expert :
• Stocké dans __defaults__ de l’objet fonction.

Concepts clés :
• Évaluation des défauts au define-time.

Distinctions clés :
• Pas une nouvelle liste à chaque appel.

Fonctionnement :
• Partage de référence.

Exécution étape par étape :
• Tous les appels voient le même état si défaut utilisé.

Ordre des opérations :
• def exécuté au chargement du module souvent.

Cas d'utilisation courants :
• Piège classique, questions d’entretien.

Cas limites :
• Parfois utilisé pour mémoïsation volontaire (documentez).

Considérations de performance :
• Réutilisation peut être un micro-cache accidentel.

Exemples :
• Voir 2241.

Remarques :
• Réponse : objet créé une fois et partagé (1re option).`,

  2250: `Motif sûr pour défaut mutable

Débutant :
• Utiliser None par défaut et construire une nouvelle liste (ou dict, set) à l’intérieur du corps si besoin.

Intermédiaire :
• Tester avec is None plutôt que truthiness pour ne pas confondre avec [] passé volontairement.

Expert :
• dataclasses.field(default_factory) pour les champs.

Concepts clés :
• Sentinelle None, factory à l’appel.

Distinctions clés :
• lst or [] peut traiter [] comme falsy par erreur.

Fonctionnement :
• Nouvelle allocation par appel quand nécessaire.

Exécution étape par étape :
• Branche if lst is None: lst = [].

Ordre des opérations :
• Au début du corps de fonction.

Cas d'utilisation courants :
• Toute API avec collection optionnelle.

Cas limites :
• Besoin de distinguer « absent » et « vide explicite ».

Considérations de performance :
• Coût d’allocation attendu et souhaitable.

Exemples :
• Voir 2243.

Remarques :
• Réponse : utiliser None et créer l’objet dans la fonction (1re option).`,
};
