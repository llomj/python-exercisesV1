/** Level 7 FR 2176–2200 — map/filter/reduce, introspection, call rules */
export default {
  2176: `filter(lambda x: x > 2, [1, 2, 3, 4])

Débutant :
• filter renvoie un objet filter (itérateur), pas directement [3, 4].

Intermédiaire :
• La fonction prédicat doit renvoyer une valeur de vérité par élément.

Expert :
• Équivalent conceptuel à (x for x in it if pred(x)) mais avec callable.

Concepts clés :
• Filtrage paresseux, itérateur.

Distinctions clés :
• Ce n’est pas une liste ; pas d’évaluation complète immédiate.

Fonctionnement :
• Objet qui teste chaque élément à la demande.

Exécution étape par étape :
• Création de l’objet sans parcourir toute la liste pour stockage.

Ordre des opérations :
• Construction filter après évaluation des arguments.

Cas d'utilisation courants :
• Chaîner map/filter sans listes intermédiaires.

Cas limites :
• Prédicat None (usage ancien) hors style moderne.

Considérations de performance :
• Paresse utile sur gros flux.

Exemples :
• list(filter(...)) matérialise.

Remarques :
• Réponse : objet filter (première option du quiz).`,

  2177: `list(filter(lambda x: x > 2, [1, 2, 3, 4]))

Débutant :
• Seuls 3 et 4 satisfont x > 2 → liste [3, 4].

Intermédiaire :
• list force la consommation de l’itérateur filter.

Expert :
• Stabilité d’ordre : même ordre que l’itérable source.

Concepts clés :
• Matérialisation, prédicat.

Distinctions clés :
• Différent de filter seul.

Fonctionnement :
• Parcours 1..4, garde 3 et 4.

Exécution étape par étape :
• Construction progressive de la liste résultat.

Ordre des opérations :
• filter puis list.

Cas d'utilisation courants :
• Nettoyer des données avant agrégation.

Cas limites :
• Prédicat qui lève une exception sur un élément.

Considérations de performance :
• O(n) temps, O(k) espace pour k survivants.

Exemples :
• Liste vide en entrée → [].

Remarques :
• Réponse : [3, 4].`,

  2178: `from functools import reduce ; reduce(lambda x, y: x + y, [1, 2, 3, 4])

Débutant :
• Réduction : ((1+2)+3)+4 = 10.

Intermédiaire :
• reduce prend une fonction binaire et un itérable ; ici pas d’initialisateur explicite : départ sur les deux premiers éléments.

Expert :
• En Python 3 reduce est dans functools, pas builtin.

Concepts clés :
• Accumulation, réduction.

Distinctions clés :
• Différent de sum() seul mais même effet pour l’addition sur non vide.

Fonctionnement :
• Paire courante + suivant jusqu’à épuisement.

Exécution étape par étape :
• 1+2=3, 3+3=6, 6+4=10.

Ordre des opérations :
• Import functools puis appel reduce.

Cas d'utilisation courants :
• Produit, min/max custom, fusion de structures.

Cas limites :
• Itérable vide sans init → TypeError.

Considérations de performance :
• C implementation efficace.

Exemples :
• reduce avec init 0 permet liste vide.

Remarques :
• Réponse : 10.`,

  2179: `sorted([3, 1, 2], key=lambda x: -x)

Débutant :
• La clé compare les opposés : ordre décroissant sur les originaux → [3, 2, 1].

Intermédiaire :
• sorted renvoie une nouvelle liste ; l’originale reste [3,1,2].

Expert :
• reverse=True serait plus lisible pour numériques simples.

Concepts clés :
• Tri par clé, fonction key.

Distinctions clés :
• Les éléments restent des int ; seul l’ordre change.

Fonctionnement :
• Calcule -3,-1,-2 puis trie ces clés en ordre croissant.

Exécution étape par étape :
• Tri stable possible avec égalités de clés.

Ordre des opérations :
• key appelée une fois par élément (en CPython avec optimisations).

Cas d'utilisation courants :
• Trier des tuples par second membre, chaînes par longueur.

Cas limites :
• Clés non comparables entre elles → TypeError.

Considérations de performance :
• O(n log n) typique.

Exemples :
• sorted([3,1,2]) sans key → [1,2,3].

Remarques :
• Réponse : [3, 2, 1].`,

  2180: `max([1, 2, 3], key=lambda x: -x)

Débutant :
• Clés -1, -2, -3 : le max des clés est -1, associé à l’élément 1 → max retourne 1.

Intermédiaire :
• max retourne un élément original, pas la clé.

Expert :
• min avec la même key donnerait 3 (banque anglaise le rappelle).

Concepts clés :
• Sélection par clé, préservation de l’élément.

Distinctions clés :
• Pas le maximum numérique brut 3.

Fonctionnement :
• Parcours avec meilleure clé vue.

Exécution étape par étape :
• Compare via -x.

Ordre des opérations :
• Évaluation des clés pour chaque candidat.

Cas d'utilisation courants :
• Trouver le mot le plus long, le tuple avec plus grand second champ.

Cas limites :
• Itérable vide sans default → ValueError.

Considérations de performance :
• O(n) un seul passage.

Exemples :
• max(['a','bb'], key=len) → 'bb'.

Remarques :
• Réponse : 1.`,

  2181: `def func(): pass ; func.__name__

Débutant :
• Attribut spécial contenant le nom symbolique de la fonction sous forme de chaîne.

Intermédiaire :
• Utile pour logs, décorateurs, enregistrement de routes.

Expert :
• Les lambdas ont souvent __name__ égal à lambda en CPython.

Concepts clés :
• Introspection, métadonnée __name__.

Distinctions clés :
• Ce n’est pas le qualname complet pour fonctions imbriquées (voir __qualname__).

Fonctionnement :
• Rempli à la compilation de la définition.

Exécution étape par étape :
• Accès attribut après création de func.

Ordre des opérations :
• def puis lecture .__name__.

Cas d'utilisation courants :
• Messages d’erreur formatés avec le nom de fonction.

Cas limites :
• Fonctions renommées par assignation : le nom interne peut différer de la variable.

Considérations de performance :
• Négligeable.

Exemples :
• def g(): pass ; g.__name__ est g.

Remarques :
• Réponse : la chaîne func (option du quiz avec quotes).`,

  2182: `def func(): chaîne de documentation puis pass ; func.__doc__

Débutant :
• La première expression littérale de chaîne en tête de corps devient la docstring stockée dans __doc__.

Intermédiaire :
• help(func) s’appuie sur __doc__.

Expert :
• __doc__ peut être réassignée mais rare.

Concepts clés :
• Docstring, attribut __doc__.

Distinctions clés :
• Une chaîne après une autre instruction n’est plus docstring.

Fonctionnement :
• Compilateur extrait la première string constante.

Exécution étape par étape :
• Après def, __doc__ pointe vers le texte (ici doc court).

Ordre des opérations :
• def compile le corps et fixe __doc__.

Cas d'utilisation courants :
• Sphinx, pydoc, IDE.

Cas limites :
• Docstring vide """ """ : __doc__ vide mais pas None.

Considérations de performance :
• Négligeable.

Exemples :
• Sans docstring → None (question suivante).

Remarques :
• Réponse : la chaîne doc (alignée sur la banque).`,

  2183: `def func(): pass ; func.__doc__

Débutant :
• Sans docstring, Python laisse __doc__ à None.

Intermédiaire :
• Ce n’est pas une chaîne vide par défaut.

Expert :
• help affiche alors un squelette générique.

Concepts clés :
• Absence de documentation.

Distinctions clés :
• Différent de __doc__ == "".

Fonctionnement :
• Valeur par défaut de l’attribut.

Exécution étape par étape :
• Lecture d’attribut existant avec valeur None.

Ordre des opérations :
• def sans string initiale.

Cas d'utilisation courants :
• Tests if func.__doc__ pour savoir si documenté.

Cas limites :
• Assignation manuelle possible.

Considérations de performance :
• Négligeable.

Exemples :
• Ajouter une docstring change __doc__.

Remarques :
• Réponse : None (première option).`,

  2184: `def func(x, y=2): pass ; func.__defaults__

Débutant :
• Tuple des valeurs par défaut dans l’ordre des paramètres qui en ont un : ici seulement y → (2,).

Intermédiaire :
• x sans défaut n’apparaît pas dans __defaults__.

Expert :
• __kwdefaults__ pour kwargs-only avec défauts.

Concepts clés :
• Tuple des défauts, introspection.

Distinctions clés :
• None si aucun paramètre avec défaut.

Fonctionnement :
• Alignement avec les derniers paramètres de la signature.

Exécution étape par étape :
• Après def, lecture de l’attribut.

Ordre des opérations :
• Compilation de la signature.

Cas d'utilisation courants :
• Wrappers qui recopient ou valident des signatures.

Cas limites :
• Objets mutables partagés visibles via __defaults__ (piège).

Considérations de performance :
• Négligeable.

Exemples :
• def f(a,b=1,c=2): pass → (1,2).

Remarques :
• Réponse : (2,) (tuple singleton).`,

  2185: `def func(*args, **kwargs): pass ; func.__code__

Débutant :
• __code__ est l’objet code interne (bytecode, noms, flags).

Intermédiaire :
• co_varnames, co_argcount, etc. pour introspection bas niveau.

Expert :
• Ne pas modifier __code__ sauf cas très avancés.

Concepts clés :
• Code object, bytecode.

Distinctions clés :
• Ce n’est pas la représentation source.

Fonctionnement :
• Créé lors de la compilation du corps.

Exécution étape par étape :
• Accès immédiat après def.

Ordre des opérations :
• def compile.

Cas d'utilisation courants :
• Débogage, frameworks, inspect.

Cas limites :
• Détails dépendent de la version Python.

Considérations de performance :
• Lecture d’attribut rapide.

Exemples :
• func.__code__.co_name vaut func.

Remarques :
• Réponse : objet code (option du quiz « Code object »).`,

  2186: `def func(): pass ; callable(func)

Débutant :
• Les fonctions utilisateur sont callable → True.

Intermédiaire :
• callable teste l’existence de __call__ pour instances.

Expert :
• isinstance(func, types.FunctionType) plus strict.

Concepts clés :
• callable built-in.

Distinctions clés :
• Différent de « est-ce une fonction » (classes aussi callable).

Fonctionnement :
• Vérifie le drapeau ou la présence de __call__.

Exécution étape par étape :
• Objet fonction créé par def.

Ordre des opérations :
• callable après def.

Cas d'utilisation courants :
• APIs génériques avant d’appeler.

Cas limites :
• Certains mocks peuvent mentir.

Considérations de performance :
• Très léger.

Exemples :
• callable(print) True.

Remarques :
• Réponse : True.`,

  2187: `callable(5)

Débutant :
• Un int n’a pas __call__ → False.

Intermédiaire :
• 5() serait une TypeError si tenté.

Expert :
• Méthodes et fonctions builtins True.

Concepts clés :
• Non appelabilité.

Distinctions clés :
• Différent de bool(5) truthy.

Fonctionnement :
• Test interne sur le type.

Exécution étape par étape :
• Résultat immédiat False.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Garde avant callback.

Cas limites :
• Objets avec __call__ mal conçus.

Considérations de performance :
• Négligeable.

Exemples :
• callable(str) True (classe).

Remarques :
• Réponse : False (première option).`,

  2188: `def func(): return 1 ; type(func)

Débutant :
• Les fonctions définies par def sont instances du type function.

Intermédiaire :
• type retourne la classe, ici affichée comme class function.

Expert :
• Méthodes liées ont un type différent (method).

Concepts clés :
• type(), introspection de type.

Distinctions clés :
• Pas class type sauf si on parlait de la méta-classe.

Fonctionnement :
• Objet fonction créé par def.

Exécution étape par étape :
• type(func) après def.

Ordre des opérations :
• Évaluation de func puis type.

Cas d'utilisation courants :
• Vérifications légères dans du code dynamique.

Cas limites :
• Fonctions C builtins ont d’autres types.

Considérations de performance :
• Négligeable.

Exemples :
• type(lambda:0) même famille.

Remarques :
• Réponse : class function (formulation du QCM).`,

  2189: `def func(): pass ; hasattr(func, '__name__')

Débutant :
• hasattr renvoie True si l’attribut existe ; les fonctions ont __name__.

Intermédiaire :
• hasattr suit la résolution d’attribut usuelle ; cas exotiques avec descripteurs hors énoncé.

Expert :
• getattr(func, '__name__', None) est plus explicite parfois.

Concepts clés :
• hasattr, attribut garanti sur function.

Distinctions clés :
• Différent de tester si __name__ non vide.

Fonctionnement :
• Lookup dans le MRO de l’objet fonction.

Exécution étape par étape :
• True immédiat.

Ordre des opérations :
• def puis hasattr.

Cas d'utilisation courants :
• Code défensif sur objets hétérogènes.

Cas limites :
• Descripteurs avec effets de bord.

Considérations de performance :
• Léger.

Exemples :
• hasattr(5,'__name__') False.

Remarques :
• Réponse : True.`,

  2190: `def func(): pass ; func.attr = valeur ; func.attr

Débutant :
• Les fonctions sont objets : on peut attacher des attributs arbitraires.

Intermédiaire :
• Distinct des variables locales ou globals.

Expert :
• Utilisé par décorateurs (ex. .register).

Concepts clés :
• Attributs utilisateur sur fonction.

Distinctions clés :
• Pas besoin de slots spéciaux pour function standard.

Fonctionnement :
• Dictionnaire d’attributs de l’objet fonction.

Exécution étape par étape :
• Assignation puis lecture .attr.

Ordre des opérations :
• Création fonction puis setattr implicite.

Cas d'utilisation courants :
• Métadonnées, compteurs d’appels maison.

Cas limites :
• Écraser des noms spéciaux : éviter.

Considérations de performance :
• Coût d’attribut négligeable.

Exemples :
• func.count = 0 puis incrémenter.

Remarques :
• Réponse : la chaîne value (option du quiz).`,

  2191: `def func(x): return x ; func.__annotations__

Débutant :
• Sans annotations de type, le dict __annotations__ est vide {}.

Intermédiaire :
• Les annotations n’affectent pas l’exécution par défaut.

Expert :
• from __future__ import annotations diffère le stockage (strings).

Concepts clés :
• PEP 484 stockage, dict.

Distinctions clés :
• Vide ne signifie pas « erreur ».

Fonctionnement :
• dict créé à la définition.

Exécution étape par étape :
• Accès renvoie {}.

Ordre des opérations :
• def sans : types.

Cas d'utilisation courants :
• Outils statiques lisent __annotations__.

Cas limites :
• forward references complexes.

Considérations de performance :
• Négligeable.

Exemples :
• Voir question suivante avec hints.

Remarques :
• Réponse : {} (dict vide).`,

  2192: `def func(x: int) -> int: return x ; func.__annotations__

Débutant :
• Les hints paramètre et retour sont enregistrés : clé x pour int, clé return pour int.

Intermédiaire :
• Les valeurs sont les objets type (classes).

Expert :
• mypy/pyright utilisent ces entrées.

Concepts clés :
• Annotations, clé spéciale return.

Distinctions clés :
• Ne force pas la conversion de types à l’exécution.

Fonctionnement :
• Dict peuplé à la compilation de la signature.

Exécution étape par étape :
• Lecture renvoie le mapping attendu par la banque.

Ordre des opérations :
• Signature puis corps.

Cas d'utilisation courants :
• Documentation machine-lisible.

Cas limites :
• Annotation non hashable rare mais possible.

Considérations de performance :
• Négligeable.

Exemples :
• Plusieurs paramètres annotés ajoutent des clés.

Remarques :
• Réponse : dictionnaire avec x et return pointant vers int (première option du quiz).`,

  2193: `def func(x, y): return x + y ; func(1, 2, 3)

Débutant :
• Trop d’arguments positionnels pour deux paramètres → TypeError.

Intermédiaire :
• Message indique le nombre attendu vs reçu.

Expert :
• *args absorberait le troisième.

Concepts clés :
• Arité fixe, TypeError.

Distinctions clés :
• Pas SyntaxError : l’appel est syntaxiquement valide.

Fonctionnement :
• Échec lors de l’appel, pas à la définition.

Exécution étape par étape :
• Tentative de liaison des arguments.

Ordre des opérations :
• Évaluation 1,2,3 puis appel.

Cas d'utilisation courants :
• Détecter les erreurs d’API rapidement.

Cas limites :
• Méthodes avec self comptent dans l’arité.

Considérations de performance :
• N/A.

Exemples :
• func(1,2) OK.

Remarques :
• Réponse : TypeError (première option).`,

  2194: `def func(x, y): return x + y ; func(1)

Débutant :
• Il manque y → TypeError.

Intermédiaire :
• Les paramètres sans défaut sont obligatoires.

Expert :
• inspect.signature pour introspecter l’arité.

Concepts clés :
• Argument manquant.

Distinctions clés :
• Différent de valeur par défaut omise.

Fonctionnement :
• Liaison incomplète avant exécution du corps.

Exécution étape par étape :
• Erreur avant return.

Ordre des opérations :
• Un seul argument évalué.

Cas d'utilisation courants :
• Validation à l’appel.

Cas limites :
• Keyword-only requis oublié : message similaire.

Considérations de performance :
• N/A.

Exemples :
• Ajouter y=0 par défaut évite l’erreur.

Remarques :
• Réponse : TypeError (première option).`,

  2195: `def func(x, y, z): return x + y + z ; func(1, z=3, y=2)

Débutant :
• x reçoit 1 en position ; y et z par nom dans un ordre quelconque → 1+2+3=6.

Intermédiaire :
• Après le premier positionnel, les kwargs peuvent permuter.

Expert :
• Dupliquer un nom position + kw interdit.

Concepts clés :
• Liaison par nom, flexibilité d’appel.

Distinctions clés :
• Ne pas mettre un positionnel après kwargs (autre question).

Fonctionnement :
• Remplissage : x=1,y=2,z=3.

Exécution étape par étape :
• Somme 6.

Ordre des opérations :
• Arguments évalués gauche-droite avant appel.

Cas d'utilisation courants :
• APIs avec plusieurs flags nommés.

Cas limites :
• Oublier un paramètre requis.

Considérations de performance :
• Négligeable.

Exemples :
• func(1,y=2,z=3) identique.

Remarques :
• Réponse : 6.`,

  2196: `def func(x, y, z): return x + y + z ; func(1, 2, z=3)

Débutant :
• Deux positionnels puis un kw pour z → 6.

Intermédiaire :
• Pattern très courant : obligatoires en tête, derniers explicites.

Expert :
• Mélange valide tant que l’ordre positionnel-kw est respecté.

Concepts clés :
• Positionnel puis mot-clé.

Distinctions clés :
• z=3 ne peut pas précéder un positionnel supplémentaire.

Fonctionnement :
• x=1,y=2,z=3.

Exécution étape par étape :
• return 6.

Ordre des opérations :
• Liaison standard.

Cas d'utilisation courants :
• open(path, mode="r") style.

Cas limites :
• kwargs inconnus sans **kwargs.

Considérations de performance :
• Négligeable.

Exemples :
• Tout positionnel aussi 6.

Remarques :
• Réponse : 6.`,

  2197: `def func(x, y, z): return x + y + z ; func(1, z=3, 2)

Débutant :
• Un positionnel après un mot-clé est une erreur de syntaxe à la compilation de l’appel.

Intermédiaire :
• Message : positional argument follows keyword argument.

Expert :
• Réécrire func(1, 2, z=3).

Concepts clés :
• Grammaire des appels Python.

Distinctions clés :
• TypeError vs SyntaxError : ici syntaxe invalide.

Fonctionnement :
• Le parseur rejette l’appel.

Exécution étape par étape :
• Fichier ou ligne ne compile pas.

Ordre des opérations :
• Analyse syntaxique avant exécution.

Cas d'utilisation courants :
• Éviter ambiguïtés sur le paramètre cible.

Cas limites :
• REPL idem.

Considérations de performance :
• N/A.

Exemples :
• Toujours regrouper kwargs à la fin.

Remarques :
• Réponse : SyntaxError (première option du quiz).`,

  2198: `def func(*args, x): return args, x ; func(1, 2, x=3)

Débutant :
• *args mange 1 et 2 ; x est forcément nommé après l’étoile → ((1,2), 3).

Intermédiaire :
• Impossible de lier x par position seule.

Expert :
• PEP 570 keyword-only après var-positional.

Concepts clés :
• Paramètre uniquement nommé après *args.

Distinctions clés :
• Différent de def func(x,*args).

Fonctionnement :
• Tuple args et x séparé.

Exécution étape par étape :
• Retour paire tuple et int.

Ordre des opérations :
• Liaison args puis kw x.

Cas d'utilisation courants :
• Forcer clarté sur options critiques.

Cas limites :
• func(1,2,3) tenterait de lier x positionnellement → erreur.

Considérations de performance :
• Négligeable.

Exemples :
• func(x=3) → ((), 3).

Remarques :
• Réponse : ((1, 2), 3) (première option).`,

  2199: `def func(x, *, y): return x + y ; func(1, y=2)

Débutant :
• Le * nu impose y en mot-clé ; 1 + 2 = 3.

Intermédiaire :
• func(1,2) serait TypeError (2 positionnel irait vers y interdit).

Expert :
• Peut combiner avec / pour position-only avant.

Concepts clés :
• Keyword-only sans *args.

Distinctions clés :
• Séparateur * seul vs *args nommé.

Fonctionnement :
• x positionnel, y kw obligatoire.

Exécution étape par étape :
• return 3.

Ordre des opérations :
• Signature analysée à la définition.

Cas d'utilisation courants :
• booléens ou options avec noms explicites.

Cas limites :
• Oublier y → TypeError.

Considérations de performance :
• Négligeable.

Exemples :
• func(x=1,y=2) valide.

Remarques :
• Réponse : 3.`,

  2200: `def func(x, /, y, *, z): return x + y + z ; func(1, 2, z=3)

Débutant :
• x seulement positionnel avant / ; y peut être positionnel ici ; z uniquement kw → 1+2+3=6.

Intermédiaire :
• func(x=1, ...) interdit car x est position-only.

Expert :
• Syntaxe Python 3.8+.

Concepts clés :
• Position-only, keyword-only, section milieu « normale ».

Distinctions clés :
• Trois zones : avant /, entre / et *, après *.

Fonctionnement :
• Liaison 1→x, 2→y, z=3.

Exécution étape par étape :
• Somme 6.

Ordre des opérations :
• Appel valide montré par la banque.

Cas d'utilisation courants :
• C APIs wrappées, signatures stables.

Cas limites :
• Mélange incorrect → TypeError ou SyntaxError selon cas.

Considérations de performance :
• Négligeable.

Exemples :
• func(1, y=2, z=3) aussi 6.

Remarques :
• Réponse : 6.`,
};
