/** Level 6 FR 1851–1900 — level6.ts Q51–100 (IDs alignés QUESTIONS_BANK). */
export default {
  1851: `Dict comprehension x*2

Débutant :
• {x: x*2 for x in [1, 2, 3]} fabrique les paires 1:2, 2:4, 3:6.

Intermédiaire :
• Chaque clé est l’élément courant ; la valeur est le double.

Expert :
• Ordre d’insertion suit l’itération de la liste source (3.7+).

Concepts clés :
• Dict comprehension, transformation linéaire des clés numériques.

Distinctions clés :
• Ensemble en comprehension utiliserait des accolades différemment (set).

Fonctionnement :
• Itération sur [1,2,3], insertion x : x*2 à chaque pas.

Exécution étape par étape :
1. 1→2, 2→4, 3→6 dans l’ordre.

Ordre des opérations :
• Évaluation de la liste puis construction du dict.

Cas d'utilisation courants :
• Tables indexées par identifiants numériques simples.

Cas limites :
• Clés dupliquées possibles si l’itérable se répète (pas ici).

Considérations de performance :
• O(n) sur la longueur de la liste.

Exemples :
• Même idée avec str : {x: str(x) for x in range(2)}.

Remarques :
• Réponse : {1: 2, 2: 4, 3: 6}.`,

  1852: `Dict comprehension avec range et carré

Débutant :
• {x: x**2 for x in range(3)} parcourt 0,1,2 et produit 0:0, 1:1, 2:4.

Intermédiaire :
• range(3) exclut 3 ; trois entrées.

Expert :
• x**2 est la puissance, pas x*2.

Concepts clés :
• range en comprehension, exposant 2.

Distinctions clés :
• range(3) vs [0,1,2] équivalent ici.

Fonctionnement :
• Itération 0,1,2 ; clé et base du carré identiques.

Exécution étape par étape :
1. x=0 → 0:0 ; x=1 → 1:1 ; x=2 → 2:4.

Ordre des opérations :
• range évalué puis boucle de comprehension.

Cas d'utilisation courants :
• Précalcul de petites tables de carrés.

Cas limites :
• range vide → {}.

Considérations de performance :
• O(n) avec n = stop de range.

Exemples :
• {x: x**3 for x in range(2)} → {0:0, 1:1}.

Remarques :
• Réponse : {0: 0, 1: 1, 2: 4}.`,

  1853: `Compréhension à partir de .items()

Débutant :
• {k: v*2 for k, v in {'a':1,'b':2}.items()} double chaque valeur : {'a':2,'b':4}.

Intermédiaire :
• k reste str ; seules les valeurs sont multipliées.

Expert :
• On peut filtrer ou transformer k aussi (hors énoncé).

Concepts clés :
• Unpacking k,v, dict comprehension, lecture d’un dict existant.

Distinctions clés :
• Ne pas muter le dict source dans cette expression seule.

Fonctionnement :
• Itère sur les paires du dict littéral puis construit un nouveau dict.

Exécution étape par étape :
1. ('a',1)→'a':2 ; ('b',2)→'b':4.

Ordre des opérations :
• items() puis comprehension.

Cas d'utilisation courants :
• Normaliser ou mettre à l’échelle des champs d’un mapping.

Cas limites :
• v non numérique → erreur sur *2.

Considérations de performance :
• O(n) paires.

Exemples :
• {k: v+1 for k,v in d.items()} pour incrémenter.

Remarques :
• Réponse : {'a': 2, 'b': 4}.`,

  1854: `Compréhension avec filtre if

Débutant :
• {x: x for x in [1, 2, 3] if x > 1} ne garde que 2 et 3, clés = valeurs : {2:2, 3:3}.

Intermédiaire :
• x==1 est exclu avant de créer la paire.

Expert :
• Équivalent mental à une boucle for avec if interne.

Concepts clés :
• Clause if finale, identité clé=valeur ici.

Distinctions clés :
• Filtrer les clés vs filtrer après coup sur un dict complet.

Fonctionnement :
• Tests x>1 pour x=1 (faux), 2 (vrai), 3 (vrai).

Exécution étape par étape :
1. Insérer 2:2 puis 3:3.

Ordre des opérations :
• Ordre de la liste source conservé.

Cas d'utilisation courants :
• Projeter un sous-ensemble d’indices.

Cas limites :
• Si aucun x ne passe → {}.

Considérations de performance :
• Un passage.

Exemples :
• if x % 2 == 0 pour les pairs seulement.

Remarques :
• Réponse : {2: 2, 3: 3}.`,

  1855: `Valeurs pair / impair en comprehension

Débutant :
• {x: ('even' si x pair sinon 'odd') for x in [1,2,3]} donne 1:'odd', 2:'even', 3:'odd'.

Intermédiaire :
• Expression conditionnelle dans la partie valeur uniquement.

Expert :
• Ordre d’insertion : 1, 2, 3.

Concepts clés :
• Dict comprehension + opérateur %, chaînes de parité.

Distinctions clés :
• x%2==0 pour pair en Python.

Fonctionnement :
• Évaluation de la condition pour chaque x.

Exécution étape par étape :
1. 1 impair → odd ; 2 pair → even ; 3 impair → odd.

Ordre des opérations :
• Liste [1,2,3] gauche-droite.

Cas d'utilisation courants :
• Étiqueter des données pour affichage ou tri.

Cas limites :
• Types non numériques casseraient % (hors cas).

Considérations de performance :
• O(n).

Exemples :
• Remplacer 'even' par un bool selon besoin pédagogique.

Remarques :
• Réponse : {1: 'odd', 2: 'even', 3: 'odd'}.`,

  1856: `Clés str via str(x)

Débutant :
• {str(x): x for x in [1,2,3]} → '1':1, '2':2, '3':3.

Intermédiaire :
• Clés chaîne, valeurs int.

Expert :
• str(x) est hachable ; distinct de la clé int 1 dans un autre dict.

Concepts clés :
• Conversion str en position de clé.

Distinctions clés :
• '1' n’est pas la clé 1.

Fonctionnement :
• str sur chaque entier avant insertion.

Exécution étape par étape :
1. Trois paires dans l’ordre d’itération.

Ordre des opérations :
• str puis insertion.

Cas d'utilisation courants :
• Sérialisation proche JSON (clés string).

Cas limites :
• str peut varier pour types exotiques.

Considérations de performance :
• Coût str par élément.

Exemples :
• repr diffère de str pour certains objets.

Remarques :
• Réponse : {'1': 1, '2': 2, '3': 3}.`,

  1857: `Boucles imbriquées et clés tuple

Débutant :
• {(x,y): x+y for x in [1,2] for y in [3,4]} produit (1,3):4, (1,4):5, (2,3):5, (2,4):6.

Intermédiaire :
• Ordre : x fixe, y parcourt [3,4], puis x suivant.

Expert :
• Clés tuple hachables si éléments hachables.

Concepts clés :
• Double for dans une comprehension, clés composites.

Distinctions clés :
• Deux couples différents peuvent avoir la même somme (5).

Fonctionnement :
• Quatre itérations internes/externes successives.

Exécution étape par étape :
1. (1,3):4 ; (1,4):5 ; (2,3):5 ; (2,4):6.

Ordre des opérations :
• Comme for x ... for y imbriqués classiques.

Cas d'utilisation courants :
• Grilles discrètes.

Cas limites :
• Tuple avec liste interdit comme clé.

Considérations de performance :
• O(n*m).

Exemples :
• zip peut remplacer double boucle quand longueurs égales.

Remarques :
• Réponse : les quatre paires tuple→somme indiquées.`,

  1858: `zip en dict comprehension

Débutant :
• {x: y for x, y in zip([1,2],[3,4])} → {1:3, 2:4}.

Intermédiaire :
• zip s’arrête au plus court ; ici deux paires.

Expert :
• Idiomatique pour aligner deux colonnes.

Concepts clés :
• zip, unpacking, dict comprehension.

Distinctions clés :
• zip longest vs zip strict (3.10+) hors QCM.

Fonctionnement :
• (1,3) puis (2,4) deviennent entrées.

Exécution étape par étape :
1. 1:3 ; 2:4.

Ordre des opérations :
• zip lazy consommé par la comprehension.

Cas d'utilisation courants :
• Fusion clé liste + valeur liste.

Cas limites :
• Longueurs inégales : zip tronque.

Considérations de performance :
• Linéaire.

Exemples :
• dict(zip(keys, vals)) sans comprehension.

Remarques :
• Réponse : {1: 3, 2: 4}.`,

  1859: `Compréhension sur liste vide

Débutant :
• {x: x for x in []} donne {}.

Intermédiaire :
• Aucune itération.

Expert :
• Type résultat : dict vide, pas set.

Concepts clés :
• Dict vide, itération zéro fois.

Distinctions clés :
• set() pour set comprehension vide.

Fonctionnement :
• Conteneur créé puis boucle jamais exécutée.

Exécution étape par étape :
1. Résultat immédiat {}.

Ordre des opérations :
• [] évalué d’abord.

Cas d'utilisation courants :
• Sources dynamiques parfois vides.

Cas limites :
• if jamais vrai sur source non vide → {} aussi.

Considérations de performance :
• Coût minimal.

Exemples :
• all([]) True (rappel logique, autre contexte).

Remarques :
• Réponse : {}.`,

  1860: `Filtre if avec x*2

Débutant :
• {x: x*2 for x in [1,2] if x > 0} inclut 1 et 2 → {1:2, 2:4}.

Intermédiaire :
• Condition toujours vraie pour 1 et 2 ; si la liste contenait 0, 0 serait exclu.

Expert :
• Combine filtre et transformation valeur.

Concepts clés :
• if en fin de comprehension, multiplication.

Distinctions clés :
• x>0 vs x>=0.

Fonctionnement :
• x=1 et x=2 passent le filtre.

Exécution étape par étape :
1. 1:2 ; 2:4.

Ordre des opérations :
• Test puis calcul x*2.

Cas d'utilisation courants :
• Ignorer sentinelles négatives ou zéro.

Cas limites :
• Liste vide → {}.

Considérations de performance :
• O(n).

Exemples :
• if x % 2 pour pairs uniquement.

Remarques :
• Réponse : {1: 2, 2: 4}.`,

  1861: `Égalité de dicts indépendante de l’ordre d’écriture

Débutant :
• {'a':1,'b':2} == {'b':2,'a':1} est True.

Intermédiaire :
• == compare clés et valeurs, pas l’ordre d’insertion affiché.

Expert :
• Depuis 3.7 l’ordre est conservé mais n’entre pas dans ==.

Concepts clés :
• Égalité structurelle.

Distinctions clés :
• == vs is.

Fonctionnement :
• Même ensemble de paires.

Exécution étape par étape :
1. Vérification clés puis valeurs appariées.

Ordre des opérations :
• Opérateur == sur deux dicts.

Cas d'utilisation courants :
• Tests après fusion ou parsing.

Cas limites :
• Valeurs mutables : règles récursives de == pour listes internes.

Considérations de performance :
• O(n).

Exemples :
• {} == {}.

Remarques :
• Réponse : True.`,

  1862: `Égalité fausse si valeur diffère

Débutant :
• {'a':1} == {'a':2} → False.

Intermédiaire :
• Même clé, contenu différent.

Expert :
• Une seule différence de valeur suffit.

Concepts clés :
• Comparaison par valeur associée à chaque clé.

Distinctions clés :
• Deux objets dict distincts peuvent être ==.

Fonctionnement :
• 1 != 2 pour 'a'.

Exécution étape par étape :
1. == échoue.

Ordre des opérations :
• Comparaison dict.

Cas d'utilisation courants :
• Détecter changement de champ.

Cas limites :
• 1 == 1.0 pour valeurs numériques.

Considérations de performance :
• O(1) ici.

Remarques :
• Réponse : False.`,

  1863: `Cardinalités différentes

Débutant :
• {'a':1} == {'a':1,'b':2} est False (clé 'b' manque à gauche).

Intermédiaire :
• == exige exactement les mêmes clés.

Expert :
• Pas de sous-ensemble implicite.

Concepts clés :
• Taille et complétude des clés.

Distinctions clés :
• <= sur dicts (3.9+) autre sémantique.

Fonctionnement :
• Ensembles de clés différents.

Exécution étape par étape :
1. False immédiat après constat de 'b'.

Ordre des opérations :
• Comparaison globale.

Cas d'utilisation courants :
• Validation stricte de schéma.

Cas limites :
• dict vide vs non vide.

Considérations de performance :
• O(n).

Remarques :
• Réponse : False.`,

  1864: `Inégalité !=

Débutant :
• {'a':1} != {'a':2} → True.

Intermédiaire :
• != est la négation de ==.

Expert :
• Utile en assertions.

Concepts clés :
• Négation logique.

Distinctions clés :
• != ne teste pas l’identité.

Fonctionnement :
• Valeurs 1 et 2 différentes.

Exécution étape par étape :
1. == False donc != True.

Ordre des opérations :
• Opérateur !=.

Cas d'utilisation courants :
• Détection de modification.

Cas limites :
• Si == True alors != False.

Considérations de performance :
• Comme ==.

Remarques :
• Réponse : True.`,

  1865: `is entre littéraux dict

Débutant :
• {'a':1} is {'a':1} → False : deux objets distincts.

Intermédiaire :
• is compare l’identité mémoire.

Expert :
• == peut être True quand is est False.

Concepts clés :
• Identité vs égalité.

Distinctions clés :
• Seul le même nom réutilisé donne is True.

Fonctionnement :
• Construction de deux dicts puis comparaison id.

Exécution étape par étape :
1. Deux allocations ; is False.

Ordre des opérations :
• Création puis is.

Cas d'utilisation courants :
• Cache singletons.

Cas limites :
• Petits int internés, pas les dicts.

Considérations de performance :
• N/A.

Remarques :
• Réponse : False.`,

  1866: `Réflexivité d is

Débutant :
• d = {'a':1}; d is d → True.

Intermédiaire :
• Une variable est identique à elle-même.

Expert :
• Même après mutation, d is d reste True.

Concepts clés :
• Auto-référence.

Distinctions clés :
• d is e après e = d.copy() → False en général.

Fonctionnement :
• Même objet des deux côtés.

Exécution étape par étape :
1. Liaison puis is → True.

Ordre des opérations :
• Assignation puis expression.

Cas d'utilisation courants :
• if x is None.

Considérations de performance :
• N/A.

Remarques :
• Réponse : True.`,

  1867: `bool({})

Débutant :
• bool({}) est False.

Intermédiaire :
• Dict vide est falsy.

Expert :
• if d: dépend de la non-vacuité, pas des valeurs.

Concepts clés :
• Truthiness des conteneurs.

Distinctions clés :
• bool({'a':0}) reste True (non vide).

Fonctionnement :
• len 0 → faux.

Exécution étape par étape :
1. {} puis bool → False.

Ordre des opérations :
• Appel bool.

Cas d'utilisation courants :
• Branches if not cfg.

Cas limites :
• Ne pas confondre avec None.

Considérations de performance :
• O(1) taille en CPython.

Remarques :
• Réponse : False.`,

  1868: `bool(dict non vide)

Débutant :
• bool({'a':1}) → True.

Intermédiaire :
• Présence d’au moins une clé suffit.

Expert :
• Même si toutes les valeurs étaient falsy, le dict non vide reste truthy.

Concepts clés :
• Vacuité vs valeurs.

Distinctions clés :
• all(d.values()) peut être False pendant que bool(d) True.

Fonctionnement :
• len > 0.

Exécution étape par étape :
1. Une paire → True.

Ordre des opérations :
• bool.

Cas d'utilisation courants :
• if data: sans len.

Cas limites :
• Clés avec valeur None : toujours truthy si le dict a des clés.

Considérations de performance :
• O(1).

Remarques :
• Réponse : True.`,

  1869: `Addition de dicts interdite

Débutant :
• {'a':1,'b':2} + {'c':3} lève TypeError.

Intermédiaire :
• Utiliser |, **, update, etc.

Expert :
• + a du sens pour listes et chaînes, pas dict natif.

Concepts clés :
• Absence de __add__ pour dict.

Distinctions clés :
• | depuis 3.9.

Fonctionnement :
• Erreur à l’évaluation de +.

Exécution étape par étape :
1. TypeError.

Ordre des opérations :
• Évaluation des opérandes puis +.

Cas d'utilisation courants :
• Éviter erreurs de débutant.

Considérations de performance :
• N/A.

Remarques :
• Réponse : TypeError.`,

  1870: `Multiplication dict interdite

Débutant :
• {'a':1} * 2 → TypeError.

Intermédiaire :
• Répéter un dict n’est pas défini (clés uniques).

Expert :
• Copier : copy, dict(), {**d}.

Concepts clés :
• Pas de * pour dict.

Distinctions clés :
• [1]*2 ok, dict non.

Fonctionnement :
• TypeError.

Exécution étape par étape :
1. Échec immédiat.

Ordre des opérations :
• N/A.

Cas d'utilisation courants :
• Signal pédagogique.

Considérations de performance :
• N/A.

Remarques :
• Réponse : TypeError.`,

  1871: `Vue keys dynamique

Débutant :
• k = d.keys() puis d['c']=3 puis list(k) inclut 'c' : ['a','b','c'].

Intermédiaire :
• La vue reflète l’état actuel du dict.

Expert :
• Pas une copie figée au moment de keys().

Concepts clés :
• dict_keys live.

Distinctions clés :
• list(d.keys()) immédiatement avant mutation figerait un instantané différent.

Fonctionnement :
• list() lit la vue au moment de l’appel, après ajout de 'c'.

Exécution étape par étape :
1. d a,b ; vue créée ; mutation ; matérialisation liste.

Ordre des opérations :
• Mutation entre création vue et list().

Cas d'utilisation courants :
• Surveillance pendant construction incrémentale.

Cas limites :
• Modifier pendant itération directe : prudence.

Considérations de performance :
• list O(n).

Remarques :
• Réponse : ['a', 'b', 'c'].`,

  1872: `Vue values dynamique

Débutant :
• d={'a':1}; v=d.values(); d['b']=2; list(v) → [1,2].

Intermédiaire :
• Ordre des valeurs suit l’ordre d’insertion des clés (3.7+).

Expert :
• Même mécanisme que keys pour la « vivacité ».

Concepts clés :
• dict_values dynamique.

Distinctions clés :
• figer tôt si besoin d’instantané immuable.

Fonctionnement :
• Nouvelle paire avant list(v).

Exécution étape par étape :
1. Valeurs finales 1 puis 2.

Ordre des opérations :
• Assignation 'b' puis list.

Cas d'utilisation courants :
• Agrégation pendant remplissage.

Cas limites :
• Valeurs dupliquées pour clés différentes.

Considérations de performance :
• O(n).

Remarques :
• Réponse : [1, 2].`,

  1873: `Vue items dynamique

Débutant :
• i = d.items(); d['b']=2 sur {'a':1} puis list(i) → [('a',1),('b',2)].

Intermédiaire :
• Chaque élément est une paire clé-valeur à jour.

Expert :
• Cohérent avec keys/values sur le même dict.

Concepts clés :
• dict_items live.

Distinctions clés :
• tuple(list(i)) possible.

Fonctionnement :
• list() consomme la vue après mutation.

Exécution étape par étape :
1. Paire initiale puis ajout b.

Ordre des opérations :
• Mutation puis conversion liste.

Cas d'utilisation courants :
• Débogage pas à pas.

Cas limites :
• Itération + mutation structurelle risquée.

Considérations de performance :
• O(n).

Remarques :
• Réponse : liste des deux paires dans l’ordre d’insertion.`,

  1874: `for k in dict

Débutant :
• for k in {'a':1,'b':2}: print(k) affiche les clés 'a' puis 'b' (ordre insertion du littéral).

Intermédiaire :
• Équivalent à for k in d.keys():.

Expert :
• Effet : sortie console, pas une valeur de retour d’expression for isolée.

Concepts clés :
• Itération par défaut sur clés.

Distinctions clés :
• vs .values() et .items().

Fonctionnement :
• Itérateur sur les clés du dict.

Exécution étape par étape :
1. print 'a' ; print 'b'.

Ordre des opérations :
• Ordre d’insertion 3.7+.

Cas d'utilisation courants :
• Parcourir des registres.

Cas limites :
• dict vide : rien n’est imprimé.

Considérations de performance :
• O(n) lignes.

Remarques :
• Réponse QCM : affiche 'a' puis 'b'.`,

  1875: `for v in .values()

Débutant :
• Affiche 1 puis 2 pour les valeurs de {'a':1,'b':2}.

Intermédiaire :
• L’ordre suit celui des clés en 3.7+.

Expert :
• Pas les clés.

Concepts clés :
• Itération ciblée sur valeurs.

Distinctions clés :
• Confusion fréquente avec itération directe du dict.

Fonctionnement :
• Vue values → itérateur sur 1, 2.

Exécution étape par étape :
1. print(1); print(2).

Ordre des opérations :
• Séquentiel.

Cas d'utilisation courants :
• Traiter payloads sans noms.

Cas limites :
• Valeurs égales répétées.

Considérations de performance :
• O(n).

Remarques :
• Réponse : imprime 1 puis 2.`,

  1876: `for k, v in .items()

Débutant :
• print(k, v) affiche « a 1 » puis « b 2 » (espaces par défaut de print).

Intermédiaire :
• Déballage de paires (clé, valeur).

Expert :
• Nécessite exactement deux variables pour ce forme.

Concepts clés :
• items(), unpacking.

Distinctions clés :
• Une seule variable recevrait les tuples entiers.

Fonctionnement :
• ('a',1) puis ('b',2).

Exécution étape par étape :
1. Deux appels print.

Ordre des opérations :
• Ordre d’insertion.

Cas d'utilisation courants :
• Export CSV, logs.

Cas limites :
• Mutation du dict pendant boucle : précautions.

Considérations de performance :
• O(n).

Remarques :
• Réponse : lignes « a 1 » puis « b 2 ».`,

  1877: `list(dict)

Débutant :
• list({'a':1,'b':2}) → ['a','b'].

Intermédiaire :
• Itération implicite sur les clés.

Expert :
• Pas les valeurs.

Concepts clés :
• Conversion vers liste de clés.

Distinctions clés :
• list(d.values()) autre résultat.

Fonctionnement :
• Consommation de l’itérable clés.

Exécution étape par étape :
1. 'a', 'b' dans une liste.

Ordre des opérations :
• Ordre insertion.

Cas d'utilisation courants :
• APIs demandant une liste de noms.

Cas limites :
• dict vide → [].

Considérations de performance :
• O(n) temps et espace.

Remarques :
• Réponse : ['a', 'b'].`,

  1878: `tuple(dict)

Débutant :
• tuple({'a':1,'b':2}) → ('a','b').

Intermédiaire :
• Tuple immuable des clés.

Expert :
• Même ordre que list(d).

Concepts clés :
• Clés comme séquence.

Distinctions clés :
• tuple(d.items()) donnerait paires.

Fonctionnement :
• Itération clés → tuple.

Exécution étape par étape :
1. Construction ('a','b').

Ordre des opérations :
• Un passage.

Cas d'utilisation courants :
• Signature ordonnée, clés pour tri stable.

Cas limites :
• une clé : tuple un élément a besoin de virgule si littéral manuel ailleurs.

Considérations de performance :
• O(n).

Remarques :
• Réponse : ('a', 'b').`,

  1879: `set(dict)

Débutant :
• set({'a':1,'b':2}) → {'a','b'} (ensemble des clés).

Intermédiaire :
• Affichage ensemble sans ordre garanti logique.

Expert :
• len = 2 ici.

Concepts clés :
• Itération dict = clés pour set().

Distinctions clés :
• set(d.values()) pour valeurs distinctes.

Fonctionnement :
• Insertion de chaque clé dans le set.

Exécution étape par étape :
1. Deux clés uniques.

Ordre des opérations :
• Évaluation dict puis set().

Cas d'utilisation courants :
• Couverture de champs.

Cas limites :
• Clés non hashables impossibles.

Considérations de performance :
• O(n) amorti.

Remarques :
• Réponse : {'a', 'b'}.`,

  1880: `sorted(dict)

Débutant :
• sorted({'c':3,'a':1,'b':2}) trie les clés str → ['a','b','c'].

Intermédiaire :
• sorted sur dict itère les clés par défaut.

Expert :
• Pour trier par valeur : sorted(d, key=d.get).

Concepts clés :
• Tri lexicographique des clés.

Distinctions clés :
• sorted(d.values()) numérique ici serait [1,2,3].

Fonctionnement :
• Extraction clés puis Timsort.

Exécution étape par étape :
1. 'a'<'b'<'c'.

Ordre des opérations :
• Nouvelle liste, dict inchangé.

Cas d'utilisation courants :
• Affichage déterministe.

Cas limites :
• Clés non comparables entre elles → TypeError.

Considérations de performance :
• O(n log n).

Remarques :
• Réponse : ['a', 'b', 'c'].`,

  1881: `fromkeys (appel sur instance)

Débutant :
• {'a':1}.fromkeys(['a','b']) → {'a': None, 'b': None} ; le contenu du receveur est ignoré.

Intermédiaire :
• Méthode de classe ; valeur par défaut None.

Expert :
• Même effet que dict.fromkeys(['a','b']).

Concepts clés :
• fromkeys, None par défaut, nouvel objet.

Distinctions clés :
• Ne pas croire que 'a' garde 1.

Fonctionnement :
• Création d’un dict neuf avec les clés demandées.

Exécution étape par étape :
1. Ignorer {'a':1} pour le contenu ; insérer a,b → None.

Ordre des opérations :
• Appel statique effectif.

Cas d'utilisation courants :
• Squelettes de clés.

Cas limites :
• Valeur mutable partagée si second argument liste (piège).

Considérations de performance :
• O(k).

Remarques :
• Réponse : {'a': None, 'b': None}.`,

  1882: `dict.fromkeys avec valeur 0

Débutant :
• dict.fromkeys(['a','b'], 0) → {'a':0,'b':0}.

Intermédiaire :
• Toutes les clés reçoivent la même valeur initiale.

Expert :
• Un seul objet 0 int partagé (immuables ici, pas de souci).

Concepts clés :
• Second argument valeur unique pour toutes les clés.

Distinctions clés :
• Sans second arg → None.

Fonctionnement :
• Boucle interne d’assignation.

Exécution étape par étape :
1. a:0, b:0.

Ordre des opérations :
• Appel dict.fromkeys.

Cas d'utilisation courants :
• Compteurs à zéro.

Cas limites :
• fromkeys(['a','a'],0) → une seule clé 'a'.

Considérations de performance :
• Linéaire.

Remarques :
• Réponse : {'a': 0, 'b': 0}.`,

  1883: `fromkeys nouvelles clés c, d

Débutant :
• {'a':1,'b':2}.fromkeys(['c','d']) → {'c': None, 'd': None}.

Intermédiaire :
• Ni 'a' ni 'b' dans le résultat.

Expert :
• L’instance ne sert qu’à la résolution de la méthode.

Concepts clés :
• Class method, dict neuf.

Distinctions clés :
• vs update sur variable existante.

Fonctionnement :
• Clés c,d avec None.

Exécution étape par étape :
1. Nouveau dict deux entrées.

Ordre des opérations :
• Pas de mutation du littéral receveur hors portée.

Cas d'utilisation courants :
• Modèle colonnes séparé des données actuelles.

Cas limites :
• Itérable vide → {}.

Considérations de performance :
• O(n clés).

Remarques :
• Réponse : {'c': None, 'd': None}.`,

  1884: `max sur dict (clés)

Débutant :
• max({'a':1,'b':2,'c':3}) compare les clés str ; 'c' est le maximum lexicographique.

Intermédiaire :
• Ce n’est pas le max des valeurs 1,2,3.

Expert :
• max(d, key=d.get) donnerait la clé de plus grande valeur.

Concepts clés :
• max itère les clés par défaut.

Distinctions clés :
• max(d.values()) → 3.

Fonctionnement :
• Parcourt 'a','b','c' ; ordre lexicographique.

Exécution étape par étape :
1. Retour 'c'.

Ordre des opérations :
• max sans key.

Cas d'utilisation courants :
• Dernière clé alphabétique.

Cas limites :
• dict vide → ValueError.

Considérations de performance :
• O(n).

Remarques :
• Réponse : 'c'.`,

  1885: `min sur dict (clés)

Débutant :
• min sur les mêmes clés → 'a' (plus petite str lexicographiquement).

Intermédiaire :
• Symétrique de max.

Expert :
• min(d, key=d.get) pour clé de valeur minimale.

Concepts clés :
• min des clés.

Distinctions clés :
• min(d.values()) → 1.

Fonctionnement :
• Choix du minimum sur 'a','b','c'.

Exécution étape par étape :
1. 'a'.

Ordre des opérations :
• min builtin.

Cas limites :
• Vide → ValueError.

Considérations de performance :
• O(n).

Remarques :
• Réponse : 'a'.`,

  1886: `max sur .values()

Débutant :
• max des valeurs 1,2,3 → 3.

Intermédiaire :
• Comparaison numérique standard.

Expert :
• key=abs si besoin de magnitude.

Concepts clés :
• Agrégation sur valeurs.

Distinctions clés :
• max(dict) ≠ max(dict.values()).

Fonctionnement :
• Itération 1,2,3.

Exécution étape par étape :
1. Retour 3.

Ordre des opérations :
• values() puis max.

Cas limites :
• Valeurs vides → ValueError.

Considérations de performance :
• O(n).

Remarques :
• Réponse : 3.`,

  1887: `sum sur .values()

Débutant :
• 1+2+3 = 6.

Intermédiaire :
• start implicite 0.

Expert :
• start personnalisable en second argument de sum.

Concepts clés :
• Somme des valeurs.

Distinctions clés :
• sum(d) tenterait d’additionner des clés str (invalide ici).

Fonctionnement :
• Accumulation entière.

Exécution étape par étape :
1. 6.

Ordre des opérations :
• Gauche à droite.

Cas d'utilisation courants :
• Totaux d’inventaire.

Cas limites :
• floats et précision.

Considérations de performance :
• O(n).

Remarques :
• Réponse : 6.`,

  1888: `all sur .values()

Débutant :
• Valeurs 1 et 0 → 0 est falsy → all retourne False.

Intermédiaire :
• all court-circuite au premier faux.

Expert :
• all([]) serait True (hors cas).

Concepts clés :
• Vérité des valeurs.

Distinctions clés :
• all(d) serait True (clés str non vides).

Fonctionnement :
• 1 truthy, 0 falsy → False.

Exécution étape par étape :
1. Échec sur 0.

Ordre des opérations :
• Ordre des valeurs selon le dict.

Cas d'utilisation courants :
• Valider qu’aucun compteur n’est à zéro si interdit.

Considérations de performance :
• Court-circuit.

Remarques :
• Réponse : False.`,

  1889: `any sur .values()

Débutant :
• Valeurs 0 et 0 → aucune truthy → any False.

Intermédiaire :
• 0 est falsy ; None aussi.

Expert :
• any([0,1]) serait True.

Concepts clés :
• any cherche une valeur vraie.

Distinctions clés :
• any(d) True car clés non vides.

Fonctionnement :
• Deux zéros → False.

Exécution étape par étape :
1. Parcours complet sans True.

Ordre des opérations :
• Itération values.

Cas limites :
• any([]) False.

Considérations de performance :
• Court-circuit si True tôt.

Remarques :
• Réponse : False.`,

  1890: `or court-circuit avec .get()

Débutant :
• get('a') rend 1 (truthy) ; le second get('c') n’est pas évalué ; résultat 1.

Intermédiaire :
• or retourne le premier opérande truthy ou le dernier évalué.

Expert :
• Piège si la valeur « valide » est 0 ou None stockée.

Concepts clés :
• Short-circuit, get, truthiness.

Distinctions clés :
• (get a) or (get c) vs get(a, get(c)) — pas équivalent en général.

Fonctionnement :
• Premier membre suffit.

Exécution étape par étape :
1. get('a')→1 ; or arrête.

Ordre des opérations :
• Gauche à droite avec court-circuit.

Cas d'utilisation courants :
• Fallbacks quand seules les valeurs « vraies » comptent.

Considérations de performance :
• Évite second lookup.

Remarques :
• Réponse : 1.`,

  1891: `Clé entière

Débutant :
• {1:'a',2:'b',3:'c'}[1] → 'a'.

Intermédiaire :
• Accès [] avec int.

Expert :
• Pas un index de liste.

Concepts clés :
• Dict numérique.

Distinctions clés :
• Clé 1 vs indice 1.

Fonctionnement :
• Lookup O(1) moyen.

Exécution étape par étape :
1. Trouver 1 → 'a'.

Ordre des opérations :
• Dict puis [].

Cas limites :
• Clé absente → KeyError.

Considérations de performance :
• O(1) amorti.

Remarques :
• Réponse : 'a'.`,

  1892: `Clé tuple

Débutant :
• {(1,2):'a',(3,4):'b'}[(1,2)] → 'a'.

Intermédiaire :
• Tuple immuable → hachable.

Expert :
• [1,2] comme clé serait TypeError.

Concepts clés :
• Clé composite.

Distinctions clés :
• Égalité de tuples par contenu.

Fonctionnement :
• Hash (1,2).

Exécution étape par étape :
1. Retour 'a'.

Ordre des opérations :
• Création dict puis accès.

Cas limites :
• Tuple contenant liste → impossible comme clé.

Considérations de performance :
• Hash tuple petit O(1).

Remarques :
• Réponse : 'a'.`,

  1893: `Liste comme clé

Débutant :
• {[1,2]:'a'} → TypeError : liste non hachable.

Intermédiaire :
• Message unhashable type list.

Expert :
• Utiliser tuple([1,2]) si besoin.

Concepts clés :
• Exigence de hachabilité.

Distinctions clés :
• Liste en valeur ok.

Fonctionnement :
• Échec lors du hachage de la clé.

Exécution étape par étape :
1. TypeError à la construction.

Ordre des opérations :
• Littéral invalide.

Considérations de performance :
• N/A.

Remarques :
• Réponse : TypeError.`,

  1894: `Dict comme clé

Débutant :
• {{'a':1}:'b'} → TypeError : dict non hachable.

Intermédiaire :
• Même principe que liste mutable.

Expert :
• Représenter une clé complexe par frozenset d’items ou str sérialisée.

Concepts clés :
• dict mutable.

Distinctions clés :
• dict en valeur autorisé.

Fonctionnement :
• Échec au hash.

Exécution étape par étape :
1. TypeError.

Ordre des opérations :
• Construction.

Considérations de performance :
• N/A.

Remarques :
• Réponse : TypeError.`,

  1895: `Clés None, True, False

Débutant :
• {None:'a', True:'b', False:'c'}[None] → 'a'.

Intermédiaire :
• Singletons hashables.

Expert :
• Attention collisions 1 et True en clés si mélangés (hors combinaison ici).

Concepts clés :
• Clés non string, accès avec None.

Distinctions clés :
• None comme clé vs absence de clé.

Fonctionnement :
• Lookup exact de None.

Exécution étape par étape :
1. Retour 'a'.

Ordre des opérations :
• [] avec argument None.

Cas limites :
• Mélange bool et int clés.

Considérations de performance :
• O(1).

Remarques :
• Réponse : 'a' (chaîne).`,

  1896: `Collision int / float en accès

Débutant :
• {1:'a', 1.0:'b'}[1] → 'b' car 1 et 1.0 sont la même clé ; la seconde valeur écrase.

Intermédiaire :
• 1 == 1.0 et hash compatibles.

Expert :
• Éviter de mélanger types numériques comme clés si la clarté compte.

Concepts clés :
• Égalité et hachage des clés numériques.

Distinctions clés :
• Une seule entrée effective.

Fonctionnement :
• Insertion 1:'a' puis remplacement par 1.0:'b'.

Exécution étape par étape :
1. Slot unique ; valeur finale 'b'.

Ordre des opérations :
• Construction gauche-droite du littéral.

Cas limites :
• Decimal, Fraction autres règles.

Considérations de performance :
• O(1).

Remarques :
• Réponse : 'b'.`,

  1897: `Littéral avec collision 1 / 1.0

Débutant :
• {1:'a', 1.0:'b'} s’affiche comme un seul mapping, valeur 'b', souvent clé affichée 1.

Intermédiaire :
• len vaut 1.

Expert :
• 1 in d et 1.0 in d tous deux True.

Concepts clés :
• Unicité logique des clés.

Distinctions clés :
• '1' str serait une autre clé.

Fonctionnement :
• Fusion à la construction.

Exécution étape par étape :
1. Écrasement lors de la seconde paire.

Ordre des opérations :
• De gauche à droite.

Cas limites :
• NaN spécial.

Considérations de performance :
• Une entrée.

Remarques :
• Réponse : {1: 'b'} (formulation QCM).`,

  1898: `Assignations d[1] puis d[1.0]

Débutant :
• d = {}; d[1]='a'; d[1.0]='b' → un seul slot, valeur finale 'b'.

Intermédiaire :
• Deux écritures sur la même clé logique.

Expert :
• len(d) est 1.

Concepts clés :
• Mutation successive, collision.

Distinctions clés :
• d['1'] serait une clé str distincte.

Fonctionnement :
• Première assignation crée 1:'a', seconde remplace par 'b'.

Exécution étape par étape :
1. Vide → {'1':...} non ; clé int/float unifiée → {1:'b'}.

Ordre des opérations :
• Séquence de statements.

Cas limites :
• Types non numériques autres.

Considérations de performance :
• Deux ops sur même slot.

Remarques :
• Réponse : {1: 'b'} (une entrée).`,

  1899: `pop avec défaut, clé présente

Débutant :
• pop('a','default') retourne 1 (valeur réelle), pas la chaîne 'default'.

Intermédiaire :
• Le défaut sert seulement si la clé manque.

Expert :
• pop retire aussi la paire 'a'.

Concepts clés :
• pop à deux arguments, priorité valeur stockée.

Distinctions clés :
• vs get sans suppression.

Fonctionnement :
• 'a' trouvée → 1.

Exécution étape par étape :
1. Retour 1, dict devient {'b':2} (effet de bord hors expression isolée).

Ordre des opérations :
• Appel méthode.

Cas limites :
• Si valeur était réellement la chaîne 'default', on la retournerait quand même.

Considérations de performance :
• O(1) amorti.

Remarques :
• Réponse : 1.`,

  1900: `pop avec défaut, clé absente

Débutant :
• pop('c','default') retourne 'default' sans KeyError ; le dict reste {'a':1,'b':2}.

Intermédiaire :
• Pas de suppression si clé absente.

Expert :
• Chaîne 'default' est ici la valeur de repli, pas un mot-clé du langage.

Concepts clés :
• pop tolérant.

Distinctions clés :
• pop('c') sans défaut lèverait.

Fonctionnement :
• Clé absente → second argument.

Exécution étape par étape :
1. Retour 'default'.

Ordre des opérations :
• 'default' évalué avant l’appel.

Cas limites :
• default None possible.

Considérations de performance :
• Une recherche.

Remarques :
• Réponse : 'default'.`,
};
