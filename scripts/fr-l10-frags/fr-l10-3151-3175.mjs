/** Level 10 FR — 3151–3175 (intermediate_b Q51–75). */
export default {
  3151: `chain.from_iterable([[1,2],[3,4]]) — list(...) ?

Débutant :
• Un seul argument : un itérable d’itérables ; produit 1,2,3,4 dans l’ordre.

Intermédiaire :
• Équivaut souvent à chain(*nested) mais sans déballer la liste en arguments.

Expert :
• Toujours un seul niveau d’aplatissement.

Concepts clés :
• API from_iterable vs chain(a,b,c).

Distinctions clés :
• Un argument itérable de groupes vs plusieurs arguments.

Fonctionnement :
• Itère chaque sous-itérable à la suite.

Exécution étape par étape :
1. Parcourt [1,2].
2. Puis [3,4].
3. list matérialise.

Ordre des opérations :
• Ordre des sous-listes conservé.

Cas d'utilisation courants :
• Graphes d’adjacence, lots dynamiques.

Cas limites :
• Élément non itérable → TypeError.

Considérations de performance :
• Paresseux jusqu’à consommation.

Exemples :
• chain.from_iterable(rows) pour CSV en mémoire.

Remarques :
• Réponse : [1, 2, 3, 4] — 1re option.`,
  3152: `product("AB", "12") — list(product(...)) ?

Débutant :
• Produit cartésien : chaque lettre avec chaque chiffre, quatre couples.

Intermédiaire :
• Ordre : fixer le dernier itérable le plus vite (ici 1 puis 2 pour A, puis pour B).

Expert :
• repeat=n pour puissance n-ième du même itérable.

Concepts clés :
• Tuples de longueur = nombre d’entrées.

Distinctions clés :
• product vs nested loops vs comprehension.

Fonctionnement :
• Générateur de tuples lazy.

Exécution étape par étape :
1. (A,1), (A,2), (B,1), (B,2).

Ordre des opérations :
• Droit varie le plus vite par défaut.

Cas d'utilisation courants :
• Grilles de tests, combinaisons de paramètres.

Cas limites :
• Itérable vide → aucun tuple.

Considérations de performance :
• Explosion combinatoire possible.

Exemples :
• product(range(2), repeat=3) pour cubes binaires.

Remarques :
• Réponse : [("A","1"),("A","2"),("B","1"),("B","2")] — 1re option.`,
  3153: `len(list(permutations("ABC"))) ?

Débutant :
• 3 éléments distincts → 3! = 6 permutations.

Intermédiaire :
• permutations(iterable, r) change le dénombrement.

Expert :
• Doublons dans l’entrée réduisent les sorties uniques.

Concepts clés :
• Factorielle pour n distincts.

Distinctions clés :
• permutations vs combinations.

Fonctionnement :
• Énumération lazy puis list + len.

Exécution étape par étape :
1. Génère 6 tuples.
2. len → 6.

Ordre des opérations :
• list épuise l’itérateur avant len.

Cas d'utilisation courants :
• Force brute ordre de tâches.

Cas limites :
• n grand → mémoire si list().

Considérations de performance :
• n! croît très vite.

Exemples :
• len(permutations("ABCD")) = 24.

Remarques :
• Réponse : 6 — 1re option.`,
  3154: `list(combinations("ABC", 2)) ?

Débutant :
• Sous-ensembles de taille 2, ordre lexicographic interne sans (B,A) si (A,B).

Intermédiaire :
• C(3,2)=3 paires.

Expert :
• L’ordre suit l’ordre de l’itérable source.

Concepts clés :
• Sans remise, sans ordre de combinaison inverse.

Distinctions clés :
• combinations vs permutations vs product.

Fonctionnement :
• Algorithme combinatoire standard.

Exécution étape par étape :
1. (A,B), (A,C), (B,C).

Ordre des opérations :
• Indices croissants dans la source.

Cas d'utilisation courants :
• Choix de paires, équipes.

Cas limites :
• r > n → vide.

Considérations de performance :
• C(n,r) peut être énorme.

Exemples :
• Tirages loterie symboliques.

Remarques :
• Réponse : [("A","B"),("A","C"),("B","C")] — 1re option.`,
  3155: `combinations_with_replacement("AB", 2) ?

Débutant :
• Répétitions autorisées : (A,A), (A,B), (B,B) — pas (B,A) séparé.

Intermédiaire :
• « Multisets » ordonnés par convention.

Expert :
• Formule étoiles et barres C(n+r-1,r).

Concepts clés :
• Avec remise, sans ordre inverse.

Distinctions clés :
• vs combinations stricte.

Fonctionnement :
• Génération indices non décroissants.

Exécution étape par étape :
1. Trois tuples listés.

Ordre des opérations :
• Stable selon implémentation CPython.

Cas d'utilisation courants :
• Deux dés indiscernables, inventaires.

Cas limites :
• r=0 → un tuple vide.

Considérations de performance :
• Moins que permutations mais peut exploser.

Exemples :
• gobelets avec remise.

Remarques :
• Réponse : [("A","A"),("A","B"),("B","B")] — 1re option.`,
  3156: `list(repeat("x", 3)) ?

Débutant :
• Trois fois la même chaîne "x" dans une liste.

Intermédiaire :
• Sans count, itérateur infini.

Expert :
• Répète la même référence d’objet (ici str immuable donc OK).

Concepts clés :
• Itérateur fini si times donné.

Distinctions clés :
• repeat vs [x]*n (eager).

Fonctionnement :
• Compteur interne d’occurrences.

Exécution étape par étape :
1. next trois fois puis StopIteration.

Ordre des opérations :
• list consomme tout.

Cas d'utilisation courants :
• zip avec autre flux de même longueur.

Cas limites :
• repeat(mutable, n) partage la même instance.

Considérations de performance :
• Léger.

Exemples :
• map avec constante.

Remarques :
• Réponse : ["x", "x", "x"] — 1re option.`,
  3157: `c = count(10, 2) ; [next(c) for _ in range(4)] ?

Débutant :
• Compteur arithmétique : 10,12,14,16.

Intermédiaire :
• Pas de fin : à couper avec islice ou zip.

Expert :
• Fonctionne aussi avec float et pas fractionné.

Concepts clés :
• Infini explicite.

Distinctions clés :
• count vs range.

Fonctionnement :
• Addition répétée du step.

Exécution étape par étape :
1. start 10, +2 quatre fois.

Ordre des opérations :
• next évalue la compréhension.

Cas d'utilisation courants :
• Indices, horloges logicielles.

Cas limites :
• float accumule erreur d’arrondi.

Considérations de performance :
• O(1) par next.

Exemples :
• zip(count(), items) pour numéroter.

Remarques :
• Réponse : [10, 12, 14, 16] — 1re option.`,
  3158: `cycle("AB") ; cinq next ?

Débutant :
• Répète A,B,A,B,A.

Intermédiaire :
• Copie interne du cycle sauvegardée.

Expert :
• Itérable vide → ValueError immédiat.

Concepts clés :
• Round-robin infini.

Distinctions clés :
• cycle vs itertools.repeat sur séquence entière.

Fonctionnement :
• Buffer puis pointeur circulaire.

Exécution étape par étape :
1. A,B,A,B,A.

Ordre des opérations :
• Consommation séquentielle.

Cas d'utilisation courants :
• Alternance couleurs, workers.

Cas limites :
• Mémoire si itérable initial énorme copié.

Considérations de performance :
• Copie O(n) une fois.

Exemples :
• islice(cycle(palette), n).

Remarques :
• Réponse : ["A", "B", "A", "B", "A"] — 1re option.`,
  3159: `islice(range(100), 0, 10, 3) ?

Débutant :
• Comme tranche 0:10:3 sur la séquence : 0,3,6,9.

Intermédiaire :
• Marche sur itérateurs non indexables.

Expert :
• islice n’accepte pas indices négatifs sauf cas limité.

Concepts clés :
• Slicing sans __getitem__.

Distinctions clés :
• islice vs itertools recipes tee.

Fonctionnement :
• Avance en consommant le sous-jacent.

Exécution étape par étape :
1. Indices 0,3,6,9 dans range.

Ordre des opérations :
• Paresseux jusqu’à list.

Cas d'utilisation courants :
• Échantillonner un flux.

Cas limites :
• start énorme : coût pour avancer.

Considérations de performance :
• skip O(k).

Exemples :
• Premiers N d’un générateur infini.

Remarques :
• Réponse : [0, 3, 6, 9] — 1re option.`,
  3160: `accumulate([1,2,3,4], lambda a,b: a*b) ?

Débutant :
• Produit courant : 1, 1*2, *3, *4 → 1,2,6,24.

Intermédiaire :
• Premier élément toujours émis tel quel.

Expert :
• accumulate initial optionnel en versions récentes.

Concepts clés :
• Scan / préfixe avec opération custom.

Distinctions clés :
• vs functools.reduce qui ne donne que la finale.

Fonctionnement :
• Réduction cumulative exposée.

Exécution étape par étape :
1. 1 ; 1*2=2 ; 2*3=6 ; 6*4=24.

Ordre des opérations :
• Gauche à droite.

Cas d'utilisation courants :
• Courbes de running max, finances cumulées.

Cas limites :
• Liste vide → itérateur vide.

Considérations de performance :
• Linéaire.

Exemples :
• operator.mul pour lisibilité.

Remarques :
• Réponse : [1, 2, 6, 24] — 1re option.`,
  3161: `takewhile(lambda x: x < 5, [1, 3, 5, 2, 4]) ?

Débutant :
• S’arrête au premier échec : 5 ne passe pas, ignore 2 et 4.

Intermédiaire :
• Ne « reprend » jamais après un False.

Expert :
• Filtre ≠ takewhile (filter testerait tous).

Concepts clés :
• Préfixe validé.

Distinctions clés :
• takewhile vs dropwhile.

Fonctionnement :
• Coupe le flux à la première fausse valeur.

Exécution étape par étape :
1. 1 ok, 3 ok, 5 stop → [1,3].

Ordre des opérations :
• Évaluation paresseuse.

Cas d'utilisation courants :
• Données triées jusqu’à seuil.

Cas limites :
• Prédicat coûteux sur gros préfixes.

Considérations de performance :
• S’arrête tôt : bien pour triés.

Exemples :
• Lire lignes tant que commentaire #.

Remarques :
• Réponse : [1, 3] — 1re option.`,
  3162: `dropwhile(lambda x: x < 5, [1, 3, 5, 2, 4]) ?

Débutant :
• Saute 1 et 3 ; dès 5 le prédicat est faux, émet 5 puis tout le reste même si <5.

Intermédiaire :
• 2 et 4 réapparaissent car plus de filtre après la coupure.

Expert :
• Complément logique de takewhile sur le préfixe seulement.

Concepts clés :
• Suppression de préfixe seulement.

Distinctions clés :
• dropwhile vs filter.

Fonctionnement :
• Flag « dropping » puis passe-through.

Exécution étape par étape :
1. Drop 1,3 ; yield 5,2,4.

Ordre des opérations :
• Un seul passage.

Cas d'utilisation courants :
• En-têtes de fichier puis corps.

Cas limites :
• Si tout satisfait le prédicat → vide.

Considérations de performance :
• Linéaire.

Exemples :
• Parser après ligne vide.

Remarques :
• Réponse : [5, 2, 4] — 1re option.`,
  3163: `compress("ABCDE", [1, 0, 1, 0, 1]) ?

Débutant :
• Garde A,C,E où sélecteur truthy.

Intermédiaire :
• S’arrête au plus court des deux itérables.

Expert :
• Tout truthy/falsy Python, pas seulement 0/1.

Concepts clés :
• Masque booléen parallèle.

Distinctions clés :
• compress vs filter avec index.

Fonctionnement :
• zip interne + test.

Exécution étape par étape :
1. A oui, B non, C oui, D non, E oui.

Ordre des opérations :
• Paire par paire.

Cas d'utilisation courants :
• Feature flags alignés sur colonnes.

Cas limites :
• Longueurs différentes : troncature.

Considérations de performance :
• Efficace une passe.

Exemples :
• Bits de validité.

Remarques :
• Réponse : ["A", "C", "E"] — 1re option.`,
  3164: `zip_longest([1,2], [3,4,5], fillvalue=0) ?

Débutant :
• Trois paires ; le manquant à gauche du 5 est remplacé par 0 → (0,5).

Intermédiaire :
• zip s’arrêterait à deux paires.

Expert :
• Plus de deux itérables : remplit tous les trous.

Concepts clés :
• Alignement longueur max.

Distinctions clés :
• zip_longest vs zip strict (3.10+).

Fonctionnement :
• Consomme colonne par colonne.

Exécution étape par étape :
1. (1,3),(2,4),(0,5).

Ordre des opérations :
• Longueur = max des longueurs.

Cas d'utilisation courants :
• Séries temporelles décalées.

Cas limites :
• fillvalue partagé (même objet) si mutable.

Considérations de performance :
• Linéaire.

Exemples :
• Padding tableaux.

Remarques :
• Réponse : [(1,3), (2,4), (0,5)] — 1re option.`,
  3165: `starmap(pow, [(2,3), (3,2)]) ?

Débutant :
• pow(2,3)=8, pow(3,2)=9.

Intermédiaire :
• Équivaut à (pow(*t) for t in ...).

Expert :
• Fonction built-in ou user.

Concepts clés :
• Déballage d’arguments par ligne.

Distinctions clés :
• starmap vs map avec lambda.

Fonctionnement :
• Appelle func(*args_tuple).

Exécution étape par étape :
1. 2**3 puis 3**2.

Ordre des opérations :
• Ordre des tuples préservé.

Cas d'utilisation courants :
• Grille de coordonnées, opérations vectorisées paresseuses.

Cas limites :
• Tuple de mauvaise arité → TypeError.

Considérations de performance :
• Évite lambda intermédiaire.

Exemples :
• starmap(max, pairs).

Remarques :
• Réponse : [8, 9] — 1re option.`,
  3166: `json.dumps({"a": 1}, indent=2) — rôle de indent ?

Débutant :
• Pretty-print : retours à la ligne et indentation de n espaces par niveau.

Intermédiaire :
• indent=None compact par défaut.

Expert :
• indent=0 nouvelles lignes sans indent réelle selon version / séparateurs.

Concepts clés :
• Lisibilité humaine vs taille.

Distinctions clés :
• dumps vs pprint sur dict Python (pas JSON).

Fonctionnement :
• Sérialise avec formatage.

Exécution étape par étape :
1. Parcourt l’objet ; insère whitespace structuré.

Ordre des opérations :
• Après construction logique JSON.

Cas d'utilisation courants :
• Fichiers config, debug.

Cas limites :
• Très profond → gros fichiers.

Considérations de performance :
• Plus coûteux que compact.

Exemples :
• API debug en dev seulement.

Remarques :
• Réponse : mise en forme avec indentation (pretty-print) — 1re option.`,
  3167: `json.dumps({"b": 2, "a": 1}, sort_keys=True) ?

Débutant :
• Clés triées alphabétiquement : "a" avant "b" dans la chaîne résultante.

Intermédiaire :
• Chaîne JSON avec espaces par défaut après , et :.

Expert :
• Ordre des listes inchangé.

Concepts clés :
• JSON canonique pour diff/hash.

Distinctions clés :
• sort_keys vs OrderedDict côté Python.

Fonctionnement :
• Trie les clés avant émission.

Exécution étape par étape :
1. Émet {"a": 1, "b": 2} comme texte.

Ordre des opérations :
• Tri puis sérialisation.

Cas d'utilisation courants :
• Tests, signatures.

Cas limites :
• Clés non str interdites en JSON standard.

Considérations de performance :
• Coût du tri O(k log k).

Exemples :
• Comparer deux réponses API.

Remarques :
• Réponse : '{"a": 1, "b": 2}' — 1re option.`,
  3168: `json.dumps([1, 2, 3]) ?

Débutant :
• Renvoie une str JSON tableau avec espaces après virgules par défaut : '[1, 2, 3]'.

Intermédiaire :
• Ce n’est pas une liste Python après dumps.

Expert :
• séparateurs modifiables.

Concepts clés :
• Type str en sortie.

Distinctions clés :
• dumps vs str([1,2,3]) qui utilise repr Python.

Fonctionnement :
• Encode nombres JSON.

Exécution étape par étape :
1. Ouvre [, éléments, ].

Ordre des opérations :
• Éléments dans l’ordre.

Cas d'utilisation courants :
• Corps HTTP JSON.

Cas limites :
• Non sérialisable → TypeError.

Considérations de performance :
• Linéaire en taille sortie.

Exemples :
• Response.write(dumps(obj)).

Remarques :
• Réponse : "[1, 2, 3]" (chaîne) — 1re option.`,
  3169: `json.dumps(None) ?

Débutant :
• Chaîne contenant null JSON en minuscules.

Intermédiaire :
• Pas "None" Python.

Expert :
• Symétrique loads('null') → None.

Concepts clés :
• Carte des scalaires JSON.

Distinctions clés :
• null vs None en affichage.

Fonctionnement :
• Encoder spécial pour None.

Exécution étape par étape :
1. Produit le littéral null.

Ordre des opérations :
• Scalaire immédiat.

Cas d'utilisation courants :
• Champs optionnels API.

Cas limites :
• NaN non standard JSON strict.

Considérations de performance :
• Trivial.

Exemples :
• {"x": null} en texte.

Remarques :
• Réponse : "null" — 1re option.`,
  3170: `json.dumps(True) ?

Débutant :
• true minuscule JSON dans une chaîne.

Intermédiaire :
• False → "false".

Expert :
• Dans un objet, pas de quotes autour du booléen JSON.

Concepts clés :
• Booléens JSON ≠ repr Python.

Distinctions clés :
• "true" vs "True".

Fonctionnement :
• Table de conversion bool.

Exécution étape par étape :
1. Émet true.

Ordre des opérations :
• Immédiat.

Cas d'utilisation courants :
• Flags JSON.

Cas limites :
•Subclass bool rare.

Considérations de performance :
• Trivial.

Exemples :
• dumps({"ok": True}) contient true sans guillemets.

Remarques :
• Réponse : "true" — 1re option.`,
  3171: `json.loads("null") ?

Débutant :
• Objet Python None.

Intermédiaire :
• Inverse de dumps(None).

Expert :
• whitespace autour souvent toléré.

Concepts clés :
• Parse JSON → Python.

Distinctions clés :
• None vs chaîne "null".

Fonctionnement :
• Lexer + parser JSON.

Exécution étape par étape :
1. Reconnaît le littéral null.

Ordre des opérations :
• Un seul valeur top-level.

Cas d'utilisation courants :
• Valeur absente typée.

Cas limites :
• JSON invalide → JSONDecodeError.

Considérations de performance :
• Très rapide.

Exemples :
• Champ nullable décodé.

Remarques :
• Réponse : None — 1re option.`,
  3172: `json.loads("true") ?

Débutant :
• Booléen Python True.

Intermédiaire :
• "True" majuscule invalide en JSON strict.

Expert :
• parse_int/float hooks pour types custom.

Concepts clés :
• Fidélité à la grammaire JSON.

Distinctions clés :
• True python vs true json texte.

Fonctionnement :
• Mot-clé true reconnu.

Exécution étape par étape :
1. Retourne True.

Ordre des opérations :
• Scalaire.

Cas d'utilisation courants :
• Config, flags.

Cas limites :
• Trailing comma interdit.

Considérations de performance :
• Trivial.

Exemples :
• loads("false") → False.

Remarques :
• Réponse : True — 1re option.`,
  3173: `json.loads("[1, 2, 3]") ?

Débutant :
• Liste Python d’entiers [1,2,3].

Intermédiaire :
• Espaces dans JSON autorisés.

Expert :
• Nombres → int ou float selon point décimal.

Concepts clés :
• Tableau JSON → list.

Distinctions clés :
• résultat list vs str d’entrée.

Fonctionnement :
• Parse récursif.

Exécution étape par étape :
1. Crée list de trois int.

Ordre des opérations :
• Ordre des éléments conservé.

Cas d'utilisation courants :
• Colonnes JSON.

Cas limites :
• Grands entiers : reste int exact en Python 3.

Considérations de performance :
• Linéaire.

Exemples :
• loads sur body HTTP.

Remarques :
• Réponse : [1, 2, 3] — 1re option.`,
  3174: `json.dumps({1, 2, 3}) ?

Débutant :
• TypeError : set non JSON natif.

Intermédiaire :
• Contournement : list(sorted(s)) ou encoder custom.

Expert :
• tuple sérialisé en tableau JSON.

Concepts clés :
• Types admis par défaut limités.

Distinctions clés :
• set vs list vs dict.

Fonctionnement :
• default handler absent → erreur.

Exécution étape par étape :
1. Tentative sérialisation ; échec sur set.

Ordre des opérations :
• Avant écriture string.

Cas d'utilisation courants :
• Apprendre à convertir avant dump.

Cas limites :
• frozenset idem.

Considérations de performance :
• N/A.

Exemples :
• JSONEncoder.default.

Remarques :
• Réponse : TypeError — ensembles non sérialisables — 1re option.`,
  3175: `json.dumps({"a": 1}, separators=(",", ":")) ?

Débutant :
• JSON compact sans espaces après , et : → '{"a":1}'.

Intermédiaire :
• Réduit bande passante.

Expert :
• Séparateurs custom pour CSV-like interdit — reste JSON.

Concepts clés :
• (item_separator, key_separator).

Distinctions clés :
• vs indent qui ajoute du vertical.

Fonctionnement :
• Contrôle du formateur.

Exécution étape par étape :
1. Pas d’espace après : ni ,.

Ordre des opérations :
• S’applique à toute la structure.

Cas d'utilisation courants :
• Production API minimaliste.

Cas limites :
• Lisibilité humaine faible.

Considérations de performance :
• Moins d’octets à transférer.

Exemples :
• Stockage ligne unique.

Remarques :
• Réponse : '{"a":1}' — 1re option.`,
};
