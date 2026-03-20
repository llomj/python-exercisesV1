/** Level 7 FR 2201–2225 — level7_intermediate_a.ts Q1–25 */
export default {
  2201: `def outer(): x=10 ; def inner(): return x ; return inner ; puis outer()()

Débutant :
• outer définit x = 10, définit inner, retourne inner sans l’appeler ; outer() récupère inner, puis le second () appelle inner.

Intermédiaire :
• inner lit x dans la portée englobante : fermeture sur la cellule de outer.

Expert :
• Après outer(), la pile de outer est partie mais l’objet fonction inner garde les cellules capturées.

Concepts clés :
• Fermeture, fonction retournée, ENCLOSING.

Distinctions clés :
• outer() seul retourne une fonction, pas 10.

Fonctionnement :
• Résolution LEGB : pas de x local dans inner → englobant.

Exécution étape par étape :
1. f = outer() lie inner avec x=10.
2. f() retourne 10.

Ordre des opérations :
• Création de inner puis appel différé.

Cas d'utilisation courants :
• Fabriques, état encapsulé sans classe.

Cas limites :
• Si outer modifiait x après retour sans nonlocal/global, cas rares selon usage.

Considérations de performance :
• Très léger.

Exemples :
• Même schéma que make_adder.

Remarques :
• Réponse : 10.`,

  2202: `make_adder(n) ; add5 = make_adder(5) ; add5(3)

Débutant :
• make_adder(5) renvoie une fonction qui ajoute 5 ; 3 + 5 = 8.

Intermédiaire :
• La lambda capture n depuis make_adder (fermeture).

Expert :
• Chaque make_adder(k) produit une nouvelle fermeture avec sa propre cellule n.

Concepts clés :
• Fabrique de fonctions, capture de paramètre.

Distinctions clés :
• add5 n’est pas la valeur 5, c’est un callable.

Fonctionnement :
• Objet fonction avec __closure__ pointant vers n=5.

Exécution étape par étape :
1. add5(3) évalue 3 + n avec n=5.

Ordre des opérations :
• make_adder d’abord, puis add5(3).

Cas d'utilisation courants :
• Partiels, curseurs, multiplicateurs.

Cas limites :
• n mutable partagé si liste : piège différent.

Considérations de performance :
• Négligeable.

Exemples :
• make_adder(0)(42) → 42.

Remarques :
• Réponse : 8.`,

  2203: `counter avec liste c = [0] ; inc qui fait c[0] += 1 ; deux appels f() ; f()

Débutant :
• On ne réassigne pas c, on mute c[0] : même liste partagée entre appels → 1 puis 2.

Intermédiaire :
• Astuce d’époque pré-nonlocal : contourner l’interdiction de rebinder un int englobant.

Expert :
• inc voit c comme free variable ; la liste est un conteneur mutable stable.

Concepts clés :
• Mutation vs rebinding, fermeture sur liste.

Distinctions clés :
• Si c = [0] était réassigné dans inc, il faudrait nonlocal c.

Fonctionnement :
• c[0] += 1 lit-écrit l’élément sans changer la liaison du nom c.

Exécution étape par étape :
1. Premier f() : 0→1, retourne 1.
2. Second f() : 1→2, retourne 2.

Ordre des opérations :
• Deux appels successifs sur la même fermeture.

Cas d'utilisation courants :
• Compteurs légers, style Python 2 / pédagogie.

Cas limites :
• Concurrence : pas atomique sans verrou.

Considérations de performance :
• O(1) par incrément.

Exemples :
• Même idée avec dict ou attribut d’objet.

Remarques :
• Réponse : 2 (valeur du second appel affiché dans l’énoncé).`,

  2204: `outer x=1 ; inner avec nonlocal x ; x += 1 ; premier f()

Débutant :
• nonlocal permet à inner de modifier le x de outer : 1 devient 2, return 2.

Intermédiaire :
• Sans nonlocal, x += 1 ferait de x une locale non initialisée → UnboundLocalError.

Expert :
• nonlocal ne remonte pas au module : pour ça global.

Concepts clés :
• nonlocal, rebinding englobant.

Distinctions clés :
• Lecture seule de x n’exige pas nonlocal.

Fonctionnement :
• STORE_DEREF sur la cellule partagée.

Exécution étape par étape :
1. f() exécute x += 1 sur la cellule x=1 → 2, retourne 2.

Ordre des opérations :
• Entrée inner, traitement, return.

Cas d'utilisation courants :
• Accumulateurs, compteurs avec syntaxe claire.

Cas limites :
• Si aucun x englobant → SyntaxError à la compilation.

Considérations de performance :
• Négligeable.

Exemples :
• Deuxième appel donnerait 3, etc.

Remarques :
• Réponse : 2.`,

  2205: `Même outer / inner nonlocal ; f() appelée trois fois — valeur du troisième appel

Débutant :
• Chaque appel ajoute 1 : après trois incréments depuis 1, x vaut 4 au moment du troisième return.

Intermédiaire :
• Séquence des retours : 2, 3, 4 pour les appels 1 à 3.

Expert :
• L’état persiste dans la fermeture tant que f vit.

Concepts clés :
• Persistance d’état, compteur.

Distinctions clés :
• La question demande le retour du 3e appel, pas la valeur après deux appels.

Fonctionnement :
• x part à 1, +1 trois fois → 4 au 3e return.

Exécution étape par étape :
1→2, 2→3, 3→4.

Ordre des opérations :
• Trois appels séquentiels sur le même callable.

Cas d'utilisation courants :
• Générateurs d’ID simples (préférer itertools en prod).

Cas limites :
• Réinitialisation impossible sans nouvelle outer().

Considérations de performance :
• Négligeable.

Exemples :
• Quatrième appel retournerait 5.

Remarques :
• Réponse : 4.`,

  2206: `À quoi sert le mot-clé nonlocal ?

Débutant :
• Il permet à une fonction interne de lier (y compris réassigner) une variable définie dans une portée englobante qui n’est pas le module.

Intermédiaire :
• Ce n’est pas global : la cible est la fonction parente la plus proche qui définit le nom.

Expert :
• Le compilateur marque le nom comme FREE/CELL pour LOAD/STORE_DEREF.

Concepts clés :
• Portée englobante, rebinding.

Distinctions clés :
• global = module ; nonlocal = exclut le global.

Fonctionnement :
• Recherche du binding englobant à la définition.

Exécution étape par étape :
• S’applique au corps entier de inner une fois déclaré.

Ordre des opérations :
• nonlocal en tête de bloc recommandé pour lisibilité.

Cas d'utilisation courants :
• État partagé minimal entre nested defs.

Cas limites :
• Pas utilisable au niveau module ni si aucun parent ne définit le nom.

Considérations de performance :
• Identique aux lectures locales rapides.

Exemples :
• Comparer avec la liste mutable trick.

Remarques :
• Réponse : permet de modifier une variable de la portée englobante (1re option).`,

  2207: `Peut-on utiliser global dans une fonction imbriquée ?

Débutant :
• Oui : global cible toujours le nom au niveau module, en sautant les englobantes.

Intermédiaire :
• Utile pour un compteur module-level ; à manier avec prudence.

Expert :
• global et nonlocal ne peuvent pas s’appliquer au même nom dans une même fonction.

Concepts clés :
• global, imbrication, module.

Distinctions clés :
• outer peut avoir son propre x ; global x ignore ce x local à outer.

Fonctionnement :
• STORE_GLOBAL / LOAD_GLOBAL pour ce nom dans inner.

Exécution étape par étape :
• Dépend du programme complet ; la banque dit que oui c’est permis.

Ordre des opérations :
• Déclaration global avant assignation dans inner.

Cas d'utilisation courants :
• Configuration rare, scripts courts.

Cas limites :
• Tests et modularité : préférer injection de dépendance.

Considérations de performance :
• Lookup global légèrement plus coûteux que local.

Exemples :
• Voir déroulement anglais banque avec x module vs outer.

Remarques :
• Réponse : Oui, accès à la variable de module (1re option).`,

  2208: `outer x=10 ; inner x=20 ; return x dans inner ; inner() ; return x dans outer

Débutant :
• inner crée son propre x local 20 ; outer garde x=10 ; le return final de outer est 10.

Intermédiaire :
• La valeur retournée par inner() est ignorée (pas utilisée dans outer).

Expert :
• Shadowing : deux liaisons x distinctes coexistent.

Concepts clés :
• Masquage, locales indépendantes.

Distinctions clés :
• Pas de nonlocal donc aucune écriture dans le x d’outer.

Fonctionnement :
• inner termine, outer continue avec son x intact.

Exécution étape par étape :
• inner return 20 jeté ; outer return 10.

Ordre des opérations :
• Appel inner puis évaluation return x d’outer.

Cas d'utilisation courants :
• Illustrer LEGB et pièges de nommage.

Cas limites :
• Oublier de capturer le return de inner.

Considérations de performance :
• Négligeable.

Exemples :
• Avec nonlocal, outer verrait 20.

Remarques :
• Réponse : 10.`,

  2209: `outer x=10 ; inner nonlocal x ; x=20 ; inner() ; return x

Débutant :
• inner réassigne le x d’outer à 20 ; outer retourne alors 20.

Intermédiaire :
• inner() ne retourne pas de valeur utile ici sauf effet sur x.

Expert :
• Une seule cellule x partagée entre outer et inner.

Concepts clés :
• nonlocal + assignation.

Distinctions clés :
• Contraste direct avec la question précédente sans nonlocal.

Fonctionnement :
• Après inner(), la cellule x vaut 20.

Exécution étape par étape :
• inner() exécuté pour effet ; return x lit 20.

Ordre des opérations :
• Appel inner avant return d’outer.

Cas d'utilisation courants :
• Réglages mutables partagés entre helpers nested.

Cas limites :
• Visibilité limitée : état caché dans la fermeture d’outer.

Considérations de performance :
• Négligeable.

Exemples :
• Réinitialiser en rappelant outer().

Remarques :
• Réponse : 20.`,

  2210: `funcs = [lambda i=i: i for i in range(3)] ; [f() for f in funcs]

Débutant :
• i=i dans la lambda lie la valeur courante par défaut : 0, 1, 2.

Intermédiaire :
• Chaque lambda a sa propre valeur par défaut figée.

Expert :
• Sans valeur par défaut, toutes partageraient le même nom i (question suivante).

Concepts clés :
• Paramètre par défaut évalué à la définition de la lambda.

Distinctions clés :
• La i de gauche est le paramètre, celle de droite est l’expression au moment de la création.

Fonctionnement :
• Trois fonctions, trois défauts distincts.

Exécution étape par étape :
• Liste de trois lambdas puis trois appels ().

Ordre des opérations :
• Compréhension : i parcourt 0,1,2 ; lambda créée à chaque itération.

Cas d'utilisation courants :
• Capturer une boucle correctement pour callbacks.

Cas limites :
• Objets mutables en défaut : même piège que pour def.

Considérations de performance :
• Négligeable pour 3 éléments.

Exemples :
• itertools ou functools.partial alternatifs.

Remarques :
• Réponse : [0, 1, 2].`,

  2211: `funcs = [lambda: i for i in range(3)] ; [f() for f in funcs]

Débutant :
• Les trois lambdas référencent le même nom i de la fonction englobante (compréhension) ; après la boucle i vaut 2 → trois fois 2.

Intermédiaire :
• Liaison tardive : i n’est pas copié à la création.

Expert :
• Corrigé par lambda i=i: i ou default= dans partial.

Concepts clés :
• Late binding, variable de boucle partagée.

Distinctions clés :
• Différence clé avec 2210.

Fonctionnement :
• À l’appel, i est résolu dans la portée englobante actuelle.

Exécution étape par étape :
• Après compréhension i=2 ; chaque f() → 2.

Ordre des opérations :
• Création des trois lambdas puis exécution dans l’ordre.

Cas d'utilisation courants :
• Piège classique en entretien / bugs de GUI.

Cas limites :
• Python 3 compréhensions : scope local de la compréhension pour i.

Considérations de performance :
• Négligeable.

Exemples :
• Même piège avec def dans boucle.

Remarques :
• Réponse : [2, 2, 2].`,

  2212: `make_power(n) ; power(x) return x**n ; square = make_power(2) ; square(5)

Débutant :
• square élève à la puissance capturée 2 : 5**2 = 25.

Intermédiaire :
• def imbriqué au lieu de lambda, même idée de fermeture.

Expert :
• make_power(3) donnerait une fonction cube indépendante.

Concepts clés :
• Fermeture sur exposant, fabrique.

Distinctions clés :
• square n’expose pas n mais l’utilise dans x**n.

Fonctionnement :
• n=2 cellule partagée avec power.

Exécution étape par étape :
• square(5) → pow(5,2).

Ordre des opérations :
• make_power puis assignation square puis appel.

Cas d'utilisation courants :
• Familles de fonctions paramétrées.

Cas limites :
• Exposants négatifs ou non entiers selon x.

Considérations de performance :
• pow peut être optimisé.

Exemples :
• math.pow vs ** pour floats.

Remarques :
• Réponse : 25.`,

  2213: `outer(1)(2)(3) avec trois niveaux inner retournant inner puis inner ; return x+y+z

Débutant :
• outer(1) renvoie middle qui attend y ; middle(2) renvoie inner qui attend z ; inner(3) → 1+2+3 = 6.

Intermédiaire :
• Curryfication manuelle à trois niveaux.

Expert :
• Chaque niveau est une nouvelle fermeture combinant paramètres capturés.

Concepts clés :
• Fonctions d’ordre supérieur imbriquées, somme finale.

Distinctions clés :
• Pas 1*2*3.

Fonctionnement :
• x capturé puis y puis z.

Exécution étape par étape :
• Chaîne d’appels successifs.

Ordre des opérations :
• Évaluation de gauche à droite des ()()().

Cas d'utilisation courants :
• Style fonctionnel pédagogique, décorateurs.

Cas limites :
• Lisibilité : préférer une seule fonction à trois args souvent.

Considérations de performance :
• Coût de création de fonctions intermédiaires.

Exemples :
• functools.partial partiel équivalent conceptuel.

Remarques :
• Réponse : 6.`,

  2214: `multiplier(factor) ; multiply(x) return x*factor ; double = multiplier(2) ; double(10)

Débutant :
• factor capturé vaut 2 → 10*2 = 20.

Intermédiaire :
• Nom multiply interne puis retour de la fonction interne.

Expert :
• Pattern identique à make_adder avec multiplication.

Concepts clés :
• Fabrique, fermeture.

Distinctions clés :
• double(10) n’est pas multiplier(2)(10) écrit en une ligne mais équivalent.

Fonctionnement :
• Cellule factor=2.

Exécution étape par étape :
• Un appel final.

Ordre des opérations :
• Création de double puis appel.

Cas d'utilisation courants :
• Unités, échelles, taxes.

Cas limites :
• Overflow numérique hors scope.

Considérations de performance :
• Négligeable.

Exemples :
• multiplier(0)(x) toujours 0.

Remarques :
• Réponse : 20.`,

  2215: `greet(name) ; greeting() return f-string Hello name ; greet("Alice")()

Débutant :
• greet retourne une fonction sans argument qui capture name="Alice" ; l’appel produit la chaîne de salutation.

Intermédiaire :
• f-string évaluée au moment de l’appel de greeting, pas à la création.

Expert :
• Si name était mutable et changé avant l’appel, la valeur vue dépendrait du moment (ici str immuable).

Concepts clés :
• Fermeture sur chaîne, f-string.

Distinctions clés :
• greet("Alice")() deux appels successifs.

Fonctionnement :
• name lu depuis la cellule de greet.

Exécution étape par étape :
• Création greeting puis () force l’exécution.

Ordre des opérations :
• Appel greet puis appel fonction retournée.

Cas d'utilisation courants :
• Messages partiellement appliqués, UI.

Cas limites :
• Caractères spéciaux dans name : f-string les affiche tels quels.

Considérations de performance :
• Négligeable.

Exemples :
• Réutiliser la fonction greeting plusieurs fois : même name.

Remarques :
• Réponse : chaîne Hello, Alice ! (option du quiz).`,

  2216: `Qu’est-ce qu’une fermeture (closure) en Python ?

Débutant :
• Une fonction qui garde l’accès aux variables de la portée lexicale où elle a été définie, même après la fin de cet environnement.

Intermédiaire :
• Objet fonction + cellules capturées (FREE vars).

Expert :
• Implémenté via __closure__ tuple de cellules.

Concepts clés :
• Portée lexicale, capture, durée de vie.

Distinctions clés :
• Pas « verrouiller » la fonction contre modification ; pas exécution auto.

Fonctionnement :
• LEGB avec cellules pour ENCLOSING.

Exécution étape par étape :
• À chaque appel, résolution via cellules.

Ordre des opérations :
• Création à la définition de inner dans outer.

Cas d'utilisation courants :
• Décorateurs, fabriques, callbacks.

Cas limites :
• Cycles de références si closures se pointent mutuellement.

Considérations de performance :
• Petite mémoire par cellule.

Exemples :
• Voir 2201.

Remarques :
• Réponse : fonction qui se souvient des variables englobantes (1re option).`,

  2217: `outer ; funcs=[] ; compréhension append lambda: i ; [f() for f in outer()]

Débutant :
• Même piège que 2211 : toutes les lambdas partagent i final 2 → [2,2,2].

Intermédiaire :
• La liste est construite dans outer mais le binding tardif reste sur i.

Expert :
• Si range était vide, liste vide de lambdas sans appel.

Concepts clés :
• Late binding + side effect append.

Distinctions clés :
• Comparer avec variante lambda i=i.

Fonctionnement :
• Chaque lambda corps « load i » au call time.

Exécution étape par étape :
• Après compréhension i=2 ; trois appels.

Ordre des opérations :
• Construction funcs puis liste en compréhension externe.

Cas d'utilisation courants :
• Anti-pattern démontré ; tests de compréhension.

Cas limites :
• Ordre d’évaluation des append vs i.

Considérations de performance :
• Négligeable.

Exemples :
• Remplacer par boucle for explicite avec factory.

Remarques :
• Réponse : [2, 2, 2].`,

  2218: `Variante avec lambda i=i dans la compréhension append dans outer

Débutant :
• Valeur par défaut fige 0,1,2 pour chaque lambda → [0,1,2].

Intermédiaire :
• Corrige le late binding de 2217.

Expert :
• Idiom équivalent : functools.partial(lambda i: ..., i).

Concepts clés :
• Binding par défaut à la création.

Distinctions clés :
• Seule la présence de i=i change le résultat.

Fonctionnement :
• Trois lambdas, trois defaults.

Exécution étape par étape :
• Appels successifs sans état partagé incorrect.

Ordre des opérations :
• Compréhension interne puis map des appels.

Cas d'utilisation courants :
• Registres de handlers indexés.

Cas limites :
• Même attention si default est mutable.

Considérations de performance :
• Négligeable.

Exemples :
• Voir 2210.

Remarques :
• Réponse : [0, 1, 2].`,

  2219: `accumulator(start) ; total=start ; add(n) nonlocal total ; total += n ; return total ; a(5) puis a(3)

Débutant :
• Premier appel : 0+5=5 retourné ; second : 5+3=8.

Intermédiaire :
• total survit entre appels grâce à nonlocal et fermeture.

Expert :
• Même pattern que compteur nonlocal simple avec valeur accumulée retournée.

Concepts clés :
• Accumulateur mutable, nonlocal.

Distinctions clés :
• Ce n’est pas une nouvelle liste à chaque appel.

Fonctionnement :
• Une seule cellule total dans la fermeture de add.

Exécution étape par étape :
• État 0→5→8.

Ordre des opérations :
• Deux appels sur le même a.

Cas d'utilisation courants :
• Sommes glissantes, budgets.

Cas limites :
• Réentrance : un seul fil logique ici.

Considérations de performance :
• Négligeable.

Exemples :
• start=10 variant suivant.

Remarques :
• Réponse : 8 (résultat du second appel dans l’énoncé).`,

  2220: `a = accumulator(10) ; a(5)

Débutant :
• total initial 10 + 5 = 15.

Intermédiaire :
• Même fermeture add que la définition générale avec start=10.

Expert :
• Un nouvel accumulator(10) aurait son propre total isolé.

Concepts clés :
• État initial capturé.

Distinctions clés :
• Pas repartir de zéro.

Fonctionnement :
• Premier appel seulement dans l’énoncé.

Exécution étape par étape :
• 10 + 5 → 15.

Ordre des opérations :
• Création de a puis a(5).

Cas d'utilisation courants :
• Cumul avec offset.

Cas limites :
• Types non addables avec int.

Considérations de performance :
• Négligeable.

Exemples :
• Chaînage a(1);a(1);a(1) sur 10 → 13.

Remarques :
• Réponse : 15.`,

  2221: `apply(f, x) return f(x) ; apply(abs, -5)

Débutant :
• abs(-5) = 5.

Intermédiaire :
• apply est un higher-order minimal.

Expert :
• Généralise à tout callable respectant la signature.

Concepts clés :
• Passage de fonction, builtin abs.

Distinctions clés :
• Pas apply de liste (itertools).

Fonctionnement :
• Un seul argument après f.

Exécution étape par étape :
• Évaluation -5 puis abs.

Ordre des opérations :
• Arguments évalués avant apply.

Cas d'utilisation courants :
• Stratégies, plugins.

Cas limites :
• f qui attend plus d’un argument → TypeError.

Considérations de performance :
• Négligeable.

Exemples :
• apply(len, "abc") → 3.

Remarques :
• Réponse : 5.`,

  2222: `apply(f, x) ; apply(str, 42)

Débutant :
• str(42) produit la chaîne des chiffres 4 et 2.

Intermédiaire :
• Type du résultat str, pas int.

Expert :
• str est bien un type/callable comme les autres.

Concepts clés :
• Conversion string.

Distinctions clés :
• Pas la valeur entière 42.

Fonctionnement :
• Appel str.__new__ ou équivalent via str().

Exécution étape par étape :
• apply renvoie l’objet str.

Ordre des opérations :
• Évaluation 42 puis str.

Cas d'utilisation courants :
• Normalisation avant concaténation.

Cas limites :
• Objets sans __str__ explicite utilisent défaut.

Considérations de performance :
• Négligeable.

Exemples :
• str(42.0) autre type.

Remarques :
• Réponse : chaîne "42" (option du quiz).`,

  2223: `apply_twice(f, x) return f(f(x)) ; f = lambda x: x+1 ; x=5

Débutant :
• f(5)=6 puis f(6)=7.

Intermédiaire :
• Composition itérée deux fois, pas f(f) au sens produit.

Expert :
• n fois s’écritait avec reduce ou boucle.

Concepts clés :
• Itération fonctionnelle.

Distinctions clés :
• Pas 5+1+1 en une seule addition partielle sans appel intermédiaire : mais résultat 7 identique ici.

Fonctionnement :
• Évaluation intérieure d’abord.

Exécution étape par étape :
• f(x) puis f sur le résultat.

Ordre des opérations :
• apply_twice corps.

Cas d'utilisation courants :
• Raffinements répétés (pédagogie).

Cas limites :
• Si f n’est pas définie sur son propre résultat.

Considérations de performance :
• Deux appels.

Exemples :
• Avec double : apply_twice(double,3)=12.

Remarques :
• Réponse : 7.`,

  2224: `compose(f,g) return lambda x: f(g(x)) ; inc ; double ; compose(inc,double)(3)

Débutant :
• g(3)=double(3)=6 ; f(6)=inc(6)=7.

Intermédiaire :
• Ordre : d’abord double, puis inc (f après g).

Expert :
• Note : compose(inc,double) vs compose(double,inc) inverse (question 2225).

Concepts clés :
• Composition f ∘ g en code.

Distinctions clés :
• Pas commutative.

Fonctionnement :
• Un seul lambda créé par compose.

Exécution étape par étape :
• g puis f sur la même valeur 3.

Ordre des opérations :
• compose retourne fonction puis (3).

Cas d'utilisation courants :
• Pipelines courts.

Cas limites :
• Types incompatibles entre sortie de g et entrée de f.

Considérations de performance :
• Deux appels utilisateur.

Exemples :
• Voir banque pour l’autre ordre.

Remarques :
• Réponse : 7.`,

  2225: `compose(double, inc)(3)

Débutant :
• Ici f=double, g=inc : g(3)=4, f(4)=8.

Intermédiaire :
• inc puis double, contrairement à 2224.

Expert :
• Lire l’ordre des arguments de compose dans l’énoncé anglais.

Concepts clés :
• Sens de la composition.

Distinctions clés :
• 7 vs 8 selon l’ordre.

Fonctionnement :
• inner appelle g puis f.

Exécution étape par étape :
• 3+1=4, *2=8.

Ordre des opérations :
• Même mécanisme compose, paramètres inversés.

Cas d'utilisation courants :
• Monades pédagogiques simplifiées.

Cas limites :
• N/A.

Considérations de performance :
• Négligeable.

Exemples :
• compose(inc,inc)(0)=2.

Remarques :
• Réponse : 8.`,
};
