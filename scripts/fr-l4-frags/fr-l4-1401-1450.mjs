/** Level 4 FR 1401–1450 — level4_while_batch1.ts Q5–26, level4_while_loops.ts Q27–52, level4_while_batch3.ts Q53–54. */
export default {
  1401: `La bonne réponse est 32 : avec base=2, exp=5, on multiplie result par 2 cinq fois depuis 1 → 32 (=2**5).

Débutant :
• Tant que exp > 0, on fait result *= base puis exp -= 1.
• Cinq tours : 1→2→4→8→16→32.
• Quand exp vaut 0, la boucle s’arrête.

Intermédiaire :
• C’est l’exponentiation itérative naïve : O(exp) multiplications.
• Équivalent conceptuel à pow(2, 5) sans fonction builtin.

Expert :
• L’exponentiation rapide (binaire) réduit les multiplications pour grands exposants.

Concepts clés :
• Accumulateur result ; décrément d’exposant ; garde exp > 0.

Distinctions clés :
• Ne pas décrémenter exp boucle indéfiniment ; ne pas utiliser exp >= 0 par erreur.

Fonctionnement :
• Chaque passage « consomme » une puissance de base dans result.

Exécution étape par étape :
1. result=1, exp=5 → après corps : 2,4 puis 4,3 puis 8,2 puis 16,1 puis 32,0.
2. Test exp>0 faux → result final 32.

Ordre des opérations :
• Évaluation du while, puis *= puis -= dans le corps.

Cas d'utilisation courants :
• Pédagogie ; base avant modexp ou matrices.

Cas limites :
• exp==0 : corps jamais exécuté, result reste 1.

Considérations de performance :
• Linéaire en exp ; suffisant pour petits entiers du quiz.

Exemples :
• base=3, exp=4 → 81 par la même mécanique.

Remarques :
• Option c:0 correspond à « 32 » dans level4_while_batch1 Q5.`,

  1402: `La bonne réponse est (9, 3) : les deux conditions x < 10 et y > 5 doivent être vraies ; après (9,3), y>5 échoue.

Débutant :
• x part de 0, y de 15.
• Chaque tour : x += 3, y -= 4.
• Dernier couple avant échec : (9, 3).

Intermédiaire :
• and court-circuite mais ici les deux tests sont évalués jusqu’à la sortie normale.
• Prochain test : 9<10 vrai, 3>5 faux → arrêt.

Expert :
• Un seul faux suffit ; l’ordre des comparaisons guide le diagnostic d’arrêt.

Concepts clés :
• Boucle while à condition composée ; invariants sur x et y.

Distinctions clés :
• Différent d’un or : il faudrait qu’une seule condition suffise.

Fonctionnement :
• Tant que les deux bornes sont respectées, on rapproche x du plafond et y du plancher.

Exécution étape par étape :
1. (0,15)→(3,11)→(6,7)→(9,3).
2. Évaluation suivante : échec sur y.

Ordre des opérations :
• Test du while puis mises à jour dans le corps.

Cas d'utilisation courants :
• Deux ressources qui évoluent en parallèle (temps, budget).

Cas limites :
• Si y restait toujours >5, x atteindrait 12 et ferait échouer x<10.

Considérations de performance :
• Peu d’itérations ; coût négligeable.

Exemples :
• Changer le pas sur y modifie le dernier couple.

Remarques :
• c:0 pointe sur « (9, 3) » (batch1 Q6).`,

  1403: `La bonne réponse est 2 : sur "ab3cd", isalpha() est vrai pour 'a' et 'b', faux pour '3' ; i s’arrête à l’index du premier non-alpha.

Débutant :
• i avance tant que i < len(s) et s[i].isalpha().
• 'a' et 'b' passent ; à l’index 2, '3' stoppe la boucle.
• i vaut 2 sans l’incrémenter pour '3'.

Intermédiaire :
• Le and protège : on ne lit s[i] hors bornes.
• On mesure la longueur du préfixe alphabétique initial.

Expert :
• Pattern lexer : extraire un mot avant un chiffre ou séparateur.

Concepts clés :
• str.isalpha() ; index i ; court-circuit logique.

Distinctions clés :
• i est l’index du premier caractère qui n’est pas alpha, pas le dernier alpha.

Fonctionnement :
• Incrémenter i uniquement tant que le caractère courant reste une lettre.

Exécution étape par étape :
1. i=0 'a' → i=1.
2. i=1 'b' → i=2.
3. Test s[2] : '3' non alpha → sortie, i=2.

Ordre des opérations :
• len(s) et s[i] évalués dans la condition avant le corps.

Cas d'utilisation courants :
• Parseurs, tokenisation, validation de préfixes.

Cas limites :
• Chaîne vide : i reste 0 ; tout alpha : i==len(s).

Considérations de performance :
• O(k) sur la longueur du préfixe.

Exemples :
• "xyz9" donne i=3 de la même façon.

Remarques :
• batch1 Q7, c:0 → « 2 ».`,

  1404: `La bonne réponse est 15 : while nums est vrai ; pop() enlève à droite 5,4,3,2,1 ; total cumulé = 15.

Débutant :
• Une liste non vide est vraie en booléen.
• pop() sans argument retire le dernier élément.
• Somme 5+4+3+2+1 = 15.

Intermédiaire :
• Équivalent à vider une pile LIFO.
• La liste devient [] à la fin.

Expert :
• pop() fin de liste est amorti O(1) en CPython pour la plupart des usages.

Concepts clés :
• Vérité des collections ; pop ; accumulateur total.

Distinctions clés :
• pop(0) enlèverait en tête (FIFO) et changerait total et ordre.

Fonctionnement :
• Tant que la pile n’est pas vide, on ajoute sa tête « logique » (fin physique) au total.

Exécution étape par étape :
1. +5 → +4 → +3 → +2 → +1 ; nums vide → arrêt.

Ordre des opérations :
• Test while nums, puis pop puis +=.

Cas d'utilisation courants :
• Traitement jusqu’à épuisement d’une pile de tâches.

Cas limites :
• Liste déjà vide : boucle jamais, total 0.

Considérations de performance :
• Préférer deque si besoin de pop(0) répété.

Exemples :
• [10,1] donnerait total 11 avec la même logique.

Remarques :
• batch1 Q8, c:0.`,

  1405: `La bonne réponse est [30, 20, 10] : la pile est vidée par le haut ; chaque pop alimente result dans l’ordre inverse d’insertion.

Débutant :
• stack commence [10,20,30].
• pop() donne 30, puis 20, puis 10.
• result = [30, 20, 10].

Intermédiaire :
• C’est le renversement par pile : LIFO.
• stack finit vide.

Expert :
• Même idée que reverse manual sur une structure push/pop.

Concepts clés :
• Liste comme pile ; append/pop ; ordre inverse.

Distinctions clés :
• Ne pas confondre avec append(stack.pop(0)) qui n’est pas ce code.

Fonctionnement :
• Tant que stack non vide, transférer le sommet vers result.

Exécution étape par étape :
1. pop 30 → append ; pop 20 ; pop 10 ; stack [].

Ordre des opérations :
• while stack ; pop ; append.

Cas d'utilisation courants :
• Inversement, DFS, certains parsers.

Cas limites :
• stack vide au départ : result [].

Considérations de performance :
• O(n) pops pour n éléments.

Exemples :
• [1,2] → [2,1].

Remarques :
• batch1 Q9, c:0.`,

  1406: `La bonne réponse est [10, 20, 30] : pop(0) enlève à gauche ; l’ordre d’origine est conservé dans result.

Débutant :
• q = [10,20,30] ; tant que q non vide, on append(q.pop(0)).
• On retire 10, puis 20, puis 30.
• result garde l’ordre FIFO.

Intermédiaire :
• pop(0) coûte O(n) sur une liste ; deque.popleft() serait O(1).

Expert :
• Modèle file d’attente classique avec liste pour petits n.

Concepts clés :
• FIFO ; pop(0) ; file simulée.

Distinctions clés :
• Contrairement au pop() simple, pas d’inversion.

Fonctionnement :
• Dépiler le début, empiler la sortie dans le même ordre.

Exécution étape par étape :
1. pop(0)→10, puis 20, puis 30 ; q vide.

Ordre des opérations :
• Test q ; pop(0) ; append.

Cas d'utilisation courants :
• Files simples, BFS naïf sur petites données.

Cas limites :
• File vide : result [].

Considérations de performance :
• Éviter pop(0) massif sur grosses listes.

Exemples :
• Même code avec deux éléments duplique l’ordre.

Remarques :
• batch1 Q10, c:0.`,

  1407: `La bonne réponse est 10 : le sentinelle -1 arrête avant d’ajouter 5 ; seuls 3 et 7 sont sommés.

Débutant :
• data[0]=3 → total 3, i=1.
• data[1]=7 → total 10, i=2.
• data[2]=-1 : condition data[i]!=-1 fausse → arrêt.

Intermédiaire :
• Le 5 après -1 n’est jamais lu.
• Pattern « valeur sentinelle ».

Expert :
• Alternative moderne : itération avec break explicite ou sans sentinelle dans les données.

Concepts clés :
• Index i ; sentinelle -1 ; accumulation conditionnelle.

Distinctions clés :
• Différent d’une somme sur toute la liste sans sentinelle.

Fonctionnement :
• Avancer tant que la valeur courante n’est pas le marqueur de fin.

Exécution étape par étape :
1. total=0,i=0 → +3 → +7 → rencontre -1 → stop, total 10.

Ordre des opérations :
• Lecture data[i], test, +=, i+=1.

Cas d'utilisation courants :
• Flux terminés par une valeur spéciale.

Cas limites :
• Si -1 manque, risque d’IndexError en dépassant la liste.

Considérations de performance :
• O(n) jusqu’au sentinelle.

Exemples :
• [2,-1,9] donne 2 seulement.

Remarques :
• batch1 Q11, c:0.`,

  1408: `La bonne réponse est "hello" : on concatène uniquement les caractères qui ne sont pas des espaces dans "h e l l o".

Débutant :
• i parcourt tous les index.
• Si s[i] != " ", on ajoute le caractère à result.
• Les espaces sont ignorés.

Intermédiaire :
• Équivalent idiomatique : remplacer les espaces ou join après split.
• Complexité O(n) sur la longueur.

Expert :
• Concaténation répétée crée des chaînes intermédiaires ; list+join serait plus efficace sur très long texte.

Concepts clés :
• Parcours indexé ; filtre caractère par caractère.

Distinctions clés :
• Ne supprime que l’espace littéral " ", pas tous les blancs Unicode.

Fonctionnement :
• Incrément systématique de i ; append logique conditionnel au résultat-chaîne.

Exécution étape par étape :
1. h,e,l,l,o conservés ; espaces sautés → "hello".

Ordre des opérations :
• Test if puis += ; toujours i+=1.

Cas d'utilisation courants :
• Nettoyage de saisie, normalisation simple.

Cas limites :
• Chaîne vide : result "".

Considérations de performance :
• Pour très grandes chaînes, préférer join.

Exemples :
• "a b" → "ab".

Remarques :
• batch1 Q12, c:0 (option '"hello"').`,

  1409: `La bonne réponse est 8 : la trajectoire Collatz depuis 6 jusqu’à 1 prend huit mises à jour de n.

Débutant :
• Si n pair : n//=2 ; sinon n = 3*n+1.
• steps compte une unité par transformation.
• Séquence 6→3→10→5→16→8→4→2→1 : 8 pas.

Intermédiaire :
• La boucle s’arrête quand n==1 avant d’incrémenter un 9e pas pour 1.
• Conjecture de Collatz : pas encore prouvée en général.

Expert :
• Ce code compte transitions, pas le nombre de valeurs visitées incluant l’état initial autrement dit.

Concepts clés :
• Condition parité ; ternaire compact ; compteur steps.

Distinctions clés :
• n//=2 pour les pairs vs float division qui casserait l’entier.

Fonctionnement :
• Répéter la règle Collatz jusqu’à atteindre 1.

Exécution étape par étape :
1. 6→3→10→5→16→8→4→2→1 avec steps=8 à la fin.

Ordre des opérations :
• Évaluer n%2 ; choisir branche ; puis steps+=1.

Cas d'utilisation courants :
• Exercices mathématiques, récursivité/while.

Cas limites :
• n=1 : boucle immédiatement ignorée, steps 0.

Considérations de performance :
• Varie fortement selon n ; pas borné trivialement.

Exemples :
• n=1 donne 0 pas.

Remarques :
• batch1 Q13, c:0.`,

  1410: `La bonne réponse est 5 : int("x") et int("y") lèvent ; on avance i ; int("5") réussit et fixe result.

Débutant :
• result commence à None ; la boucle tourne tant que result is None.
• try int(vals[i]) : échecs sur indices 0 et 1, succès sur 2.
• result devient 5.

Intermédiaire :
• except nu attrape ValueError (et plus) ; i progresse seulement dans except ici.
• Pattern « essayer jusqu’à succès ».

Expert :
• En production, éviter except: nu ; capturer ValueError explicitement.

Concepts clés :
• try/except ; while sur sentinelle None ; int depuis str.

Distinctions clés :
• Différent d’un simple vals[2] sans retry.

Fonctionnement :
• Tenter conversion ; en échec, passer à l’élément suivant.

Exécution étape par étape :
1. i=0 échec→i=1 ; échec→i=2 ; succès result=5 ; while faux.

Ordre des opérations :
• try next int ; except incrémente i.

Cas d'utilisation courants :
• Parsing tolérant, files avec champs parfois invalides.

Cas limites :
• Si aucun int valide, boucle infinie si i ne peut pas dépasser la liste.

Considérations de performance :
• Linéaire dans le pire cas sur la liste.

Exemples :
• Première entrée "7" donnerait 7 immédiatement.

Remarques :
• batch1 Q14, c:0.`,

  1411: `La bonne réponse est ["mid", "low", "high"] : chaîne if/elif sur 15, 5, 25 avec seuils 20 et 10.

Débutant :
• 15 : pas ≥20, mais ≥10 → "mid".
• 5 : sinon → "low".
• 25 : ≥20 → "high".

Intermédiaire :
• L’ordre elif compte : tester ≥20 avant ≥10 pour classer 25 en "high".
• i s’incrémente chaque fois.

Expert :
• Structure proche d’un histogramme par seuils ou bucketing.

Concepts clés :
• if/elif/else ; append ; index i sur nums.

Distinctions clés :
• Inverser les seuils ferait classer 25 comme "mid".

Fonctionnement :
• Parcourir nums et pousser une étiquette par élément.

Exécution étape par étape :
1. labels devient ["mid","low","high"] dans cet ordre.

Ordre des opérations :
• Évaluation elif en cascade puis i+=1.

Cas d'utilisation courants :
• Scoring, alertes, catégorisation.

Cas limites :
• Liste vide : labels vide.

Considérations de performance :
• O(n) sur len(nums).

Exemples :
• [20,10,9] donnerait ["high","mid","low"] avec les mêmes seuils.

Remarques :
• batch1 Q15, c:0.`,

  1412: `La bonne réponse est "done" : machine à états sur "xax" ; on exige start+'a' puis found_a+'x'.

Débutant :
• État start : 'x' ne déclenche pas de transition listée.
• 'a' à l’index 1 : passage à found_a.
• 'x' à l’index 2 : passage à done ; la boucle s’arrête aussi car state=="done".

Intermédiaire :
• i augmente toujours en fin d’itération.
• Reconnaissance de motif "ax" après un préfixe quelconque compatible.

Expert :
• Les transitions dépendent à la fois de state et du caractère lu.

Concepts clés :
• Variable state ; scan indexé ; conditions multiples.

Distinctions clés :
• Sans l’étape found_a, un 'x' initial ne suffit pas à terminer en done ainsi.

Fonctionnement :
• Lire s[i], appliquer la règle de transition, avancer i.

Exécution étape par étape :
1. i=0 'x' start inchangé ; i=1 'a'→found_a ; i=2 'x'→done.

Ordre des opérations :
• Test while sur i et state ; puis if/elif ; i+=1.

Cas d'utilisation courants :
• Parseurs légers, validation de protocoles.

Cas limites :
• Motif absent : état peut rester start ou found_a selon s.

Considérations de performance :
• O(len(s)) simple.

Exemples :
• "aax" suivrait d’autres transitions selon règles données.

Remarques :
• batch1 Q16, c:0.`,

  1413: `La bonne réponse est 3 : on augmente i tant que nums[i] < 8 ; à l’index 3 la valeur est 8, donc arrêt avec i=3.

Débutant :
• nums = [2,5,3,8,1].
• 2,5,3 sont <8 : i devient 1,2,3 successivement.
• À i=3, 8<8 est faux → boucle terminée, i=3.

Intermédiaire :
• i pointe sur le premier indice où la valeur n’est plus strictement inférieure à 8.
• Court-circuit évite lecture hors liste si la condition initiale échoue tôt.

Expert :
• Utile pour bornes inférieures sur table triée ou seuils.

Concepts clés :
• Scan préfixe ; comparaison stricte ; index résultat.

Distinctions clés :
• nums[i] < 8 vs <=8 changerait l’index d’arrêt sur une valeur égale.

Fonctionnement :
• Incrémenter i tant que la valeur est sous le seuil.

Exécution étape par étape :
1. i=0,1,2 passent ; à i=3 échec immédiat sur test.

Ordre des opérations :
• while test puis i+=1 dans le corps.

Cas d'utilisation courants :
• Recherche linéaire du premier « assez grand ».

Cas limites :
• Si tout <8, i atteint len(nums).

Considérations de performance :
• O(n) pire cas.

Exemples :
• Seuil 100 donnerait i=5 ici.

Remarques :
• batch1 Q17, c:0.`,

  1414: `La bonne réponse est 12 : seuls les éléments strictement positifs sont additionnés : 3+5+4.

Débutant :
• Parcours complet avec i.
• if nums[i] > 0 : total += nums[i].
• -2 et -1 sont ignorés.

Intermédiaire :
• Équivalent : sum(x for x in nums if x > 0).
• while explicite pour pédagogie.

Expert :
• Garde >0 exclut zéro aussi, contrairement à >=0.

Concepts clés :
• Accumulation conditionnelle ; parcours indexé.

Distinctions clés :
• « Positifs seulement » vs « non négatifs » ou « pairs ».

Fonctionnement :
• Toujours avancer i ; filtrer par test avant +=.

Exécution étape par étape :
1. +3, skip -2, +5, skip -1, +4 → 12.

Ordre des opérations :
• if puis i+=1 chaque tour.

Cas d'utilisation courants :
• Bilans, scores, nettoyage de données signées.

Cas limites :
• Liste vide : total 0.

Considérations de performance :
• O(n).

Exemples :
• [1,-1,2] → 3.

Remarques :
• batch1 Q18, c:0.`,

  1415: `La bonne réponse est 120 : factorielle itérative de 5 avec result *= n puis n-=1 jusqu’à n>1 faux.

Débutant :
• n=5, result=1.
• Multiplications : ×5, ×4, ×3, ×2 ; quand n=1, la boucle ne s’exécute plus.
• 1×5×4×3×2=120 (1× inutile explicite en fin).

Intermédiaire :
• Boucle s’arrête avant de multiplier par 1 inutilement.
• Même résultat que math.factorial(5) pour ces petits entiers.

Expert :
• Attention aux débordements en flottant ; ici entiers Python précis.

Concepts clés :
• Factorielle ; décrément ; condition n>1.

Distinctions clés :
• while n>1 vs while n>=1 évite une multiplication superflue.

Fonctionnement :
• Réduire n en absorbant chaque facteur dans result.

Exécution étape par étape :
1. 5→20→60→120 ; n devient 1 → stop.

Ordre des opérations :
• Test, *=, -=.

Cas d'utilisation courants :
• Combinatoire, probabilités, démos récursion/while.

Cas limites :
• n=1 : result reste 1.

Considérations de performance :
• O(n) multiplications.

Exemples :
• n=4 → 24.

Remarques :
• batch1 Q19, c:0.`,

  1416: `La bonne réponse est (3, 2) : soustractions répétées de 5 dans 17 ; trois fois puis reste 2 < 5 → quotient 3, reste 2.

Débutant :
• Tant que a >= b, on fait a -= b et count += 1.
• 17-5-5-5=2 ; trois soustractions.
• count=3, a=2 à la fin.

Intermédiaire :
• Modélise a//b et a%b pour positifs : 17 = 5*3 + 2.
• Ancienne approche matérielle de division.

Expert :
• Complexité O(quotient) ; les opérateurs // et % sont O(1) pour petits entiers machine.

Concepts clés :
• Division par soustractions ; compteur quotient ; reste final.

Distinctions clés :
• Ne pas confondre count avec a après la boucle.

Fonctionnement :
• Réduire le dividende par le diviseur jusqu’à impossibilité sans négatif.

Exécution étape par étape :
1. 17→12→7→2 ; count 1,2,3 ; test 2>=5 faux.

Ordre des opérations :
• Test a>=b ; corps -= et +=.

Cas d'utilisation courants :
• Pédagogie ALU ; grands entiers custom rarement ainsi.

Cas limites :
• b>a au départ : count 0, a inchangé.

Considérations de performance :
• Très lent si quotient énorme.

Exemples :
• a=10,b=3 → (3,1).

Remarques :
• batch1 Q20, c:0.`,

  1417: `La bonne réponse est 4 : recherche manuelle de 'e' dans "abcdefg" ; arrêt quand s[i]==ch avec i=4.

Débutant :
• i augmente tant que i < len(s) et s[i] != ch.
• 'e' est à l’index 4.
• À i=4, égalité → sortie sans incrémenter davantage.

Intermédiaire :
• Équivaut à trouver l’index du premier 'e'.
• Si absent, i atteindrait len(s).

Expert :
• str.find renvoie -1 ; ici on expose l’index ou len comme fin.

Concepts clés :
• Boucle avec garde double ; comparaison caractère.

Distinctions clés :
• i final est l’index de la cible, pas len(s)-1 si trouvé avant.

Fonctionnement :
• Avancer jusqu’à match ou fin de chaîne.

Exécution étape par étape :
1. i=0..3 échecs sur 'e' ; i=4 succès sur condition while faux.

Ordre des opérations :
• Évaluation paresseuse du and protège l’index.

Cas d'utilisation courants :
• Parsing bas niveau, exercices sans builtins.

Cas limites :
• ch absent : i==len(s).

Considérations de performance :
• O(n) linéaire.

Exemples :
• ch='a' donne i=0 immédiat.

Remarques :
• batch1 Q21, c:0.`,

  1418: `La bonne réponse est [5, 4, 3, 2, 1] : append avant décrément ; n>0 garantit que 0 n’est pas ajouté.

Débutant :
• n=5 ; tant que n>0, append(n) puis n-=1.
• Liste construite : 5,4,3,2,1.

Intermédiaire :
• Équivalent à list(range(5,0,-1)).
• Test en tête : 0 n’est jamais append.

Expert :
• Pattern décompte pour menus, retries, timers pédagogiques.

Concepts clés :
• Ordre append vs décrément ; condition stricte >0.

Distinctions clés :
• Si append après n-=1 ou condition >=0, la liste change.

Fonctionnement :
• Capturer n courant puis réduire pour le prochain tour.

Exécution étape par étape :
1. append 5..1 ; n devient 0 ; while faux.

Ordre des opérations :
• while n>0 ; append ; -=.

Cas d'utilisation courants :
• Compte à rebours, journaux d’étapes.

Cas limites :
• n=0 : liste vide.

Considérations de performance :
• O(n) appends.

Exemples :
• n=2 → [2,1].

Remarques :
• batch1 Q22, c:0.`,

  1419: `La bonne réponse est ["1", "2", "Fizz", "4", "Buzz"] : Fizz si multiple de 3, sinon Buzz si multiple de 5, sinon str(i), sur i=1..5.

Débutant :
• i=1,2 → chaînes "1","2".
• i=3 → Fizz (elif 5 non testé car if 3 a pris le relais).
• i=4 → "4" ; i=5 → Buzz.

Intermédiaire :
• elif empêche "Buzz" sur 3 ; 15 nécessiterait un cas commun FizzBuzz avant.
• str(i) pour les autres.

Expert :
• Variante entretien classique ; ici borné à 5.

Concepts clés :
• Modulo ; if/elif/else ; append.

Distinctions clés :
• Ordre des tests vs multiples communs.

Fonctionnement :
• Incrémenter i après classification.

Exécution étape par étape :
1. Résultat exact de l’énoncé pour 1..5.

Ordre des opérations :
• %3 puis elif %5 puis else.

Cas d'utilisation courants :
• Filtres de sortie, jeux de règles simples.

Cas limites :
• i>5 changerait la liste complètement.

Considérations de performance :
• O(n) sur la borne.

Exemples :
• i=6 ajouterait "Fizz" avec les mêmes règles.

Remarques :
• batch1 Q23, c:0.`,

  1420: `La bonne réponse est (1, 7) : deux pointeurs sur liste triée ; on réduit hi si somme trop grande, augmente lo si trop petite.

Débutant :
• lo=0, hi=4, target=8.
• 1+9=10>8 → hi=3.
• 1+7=8 → break ; nums[lo]=1, nums[hi]=7.

Intermédiaire :
• Nécessite liste triée pour monotonie des sommes.
• O(n) pour trouver une paire, vs O(n²) naïf.

Expert :
• Variante fond des problèmes 3-sum etc.

Concepts clés :
• Deux pointeurs ; break sur égalité.

Distinctions clés :
• Si non trié, l’algorithme peut échouer.

Fonctionnement :
• Ajuster lo/hi selon comparaison s à target.

Exécution étape par étape :
1. (0,4) sum 10 ; (0,3) sum 8 stop.

Ordre des opérations :
• Calcul s ; if/elif/else sur pointeurs.

Cas d'utilisation courants :
• Paires somme donnée, contraintes deux pointeurs.

Cas limites :
• Pas de paire : boucle jusqu’à lo>=hi sans break.

Considérations de performance :
• Linéaire en n pour trié.

Exemples :
• target 10 donnerait (1,9) immédiatement.

Remarques :
• batch1 Q24, c:0.`,

  1421: `La bonne réponse est [1, 2, 3, 4, 5, 6] : fusion triée classique puis concaténation des restes a[i:] et b[j:].

Débutant :
• Comparer têtes de a=[1,3,5] et b=[2,4,6].
• Enchaîner 1,2,3,4,5 ; il reste 6 dans b.
• result += … ajoute [6].

Intermédiaire :
• Étape merge du tri fusion.
• i,j avancent quand on prend leur côté.

Expert :
• Temps O(len(a)+len(b)) avec listes déjà triées.

Concepts clés :
• Indices i,j ; comparaison a[i]<=b[j] ; slices restantes.

Distinctions clés :
• Sans += final, il manquerait la queue restante.

Fonctionnement :
• Tant que les deux listes ont une tête, prendre le minimum.

Exécution étape par étape :
1. Intercaler jusqu’à épuisement d’un côté puis étendre.

Ordre des opérations :
• if/else append ; puis concat listes.

Cas d'utilisation courants :
• Merge sort, flux triés, k-way merge simplifié.

Cas limites :
• Une liste vide : while jamais ou immédiat + slice entière de l’autre.

Considérations de performance :
• Linéaire ; copies slices coûtent mémoire supplémentaire.

Exemples :
• a vide → copie de b (via slice).

Remarques :
• batch1 Q25, c:0.`,

  1422: `La bonne réponse est True : "racecar" lu des deux bouts avec lo/hi se rencontre sans mismatch.

Débutant :
• lo=0, hi=6 ; comparaisons r,r puis a,a puis c,c.
• Quand lo==hi=3, lo<hi faux → fin ; is_pal reste True.

Intermédiaire :
• break immédiat si caractères différents avec is_pal=False.
• Chaîne impaire : caractère central sans paire explicite.

Expert :
• O(n) temps, O(1) espace extra hors la chaîne.

Concepts clés :
• Deux pointeurs ; break ; booléen is_pal.

Distinctions clés :
• Différent de s==s[::-1] mais même idée.

Fonctionnement :
• Resserrer lo/hi tant que la symétrie tient.

Exécution étape par étape :
1. Toutes égalités jusqu’à indices 3,3.

Ordre des opérations :
• if mismatch ; sinon lo+=1 hi-=1.

Cas d'utilisation courants :
• Validation texte, puzzles.

Cas limites :
• "" ou 1 caractère : True trivial avec lo>=hi tôt.

Considérations de performance :
• Préférable à copie reverse pour très grandes chaînes.

Exemples :
• "ab" False si 'a'!='b'.

Remarques :
• batch1 Q26, c:0.`,

  1423: `La bonne réponse est 6 : Newton / Héron pour isqrt entier sur n=36 ; guess passe 36→18→10→6 puis 6*6>36 est faux.

Débutant :
• Tant que guess*guess > n, guess = (guess + n//guess)//2.
• Arrêt à 6 car 36 n’est pas strictement supérieur à 36.

Intermédiaire :
• Variante proche de math.isqrt pour entiers positifs.
• Division entière à chaque étape.

Expert :
• Convergence rapide ; initialisation n fonctionne ici pour carré parfait.

Concepts clés :
• Affinement ; boucle while ; entiers.

Distinctions clés :
• guess*guess > n vs >= change le dernier tour.

Fonctionnement :
• Remplacer guess par moyenne entière de guess et n//guess.

Exécution étape par étape :
1. 36→18→10→6 ; test échoue sur 6.

Ordre des opérations :
• Multiplication guess ; comparaison ; réassignation.

Cas d'utilisation courants :
• Racines entières, bornes en primalité.

Cas limites :
• n=0 ou 1 demanderaient initialisation différente hors énoncé.

Considérations de performance :
• Peu d’itérations pour petits n.

Exemples :
• Carré parfait 25 converge vers 5.

Remarques :
• level4_while_loops Q27, c:0.`,

  1424: `La bonne réponse est (True, 3) : drapeau found ; on avance idx tant que pas trouvé ; à nums[3]=9>8 on fixe found sans incrémenter idx dans la branche vraie.

Débutant :
• Indices 0,1,2 ne dépassent pas 8 ; idx monte à 3.
• À 9>8 : found=True, idx reste 3.

Intermédiaire :
• not found and idx < len garde la boucle.
• Piège : idx ne bouge pas quand on trouve.

Expert :
• Pattern recherche avec booléen sentinel.

Concepts clés :
• Flag ; incrément conditionnel ; court-circuit.

Distinctions clés :
• Si on incrémentait aussi dans le if True, idx serait 4.

Fonctionnement :
• Scanner jusqu’à condition de succès ou fin liste.

Exécution étape par étape :
1. idx 0→1→2→3 ; puis found True, boucle stop.

Ordre des opérations :
• Test while ; if nums[idx]>8 else idx+=1.

Cas d'utilisation courants :
• Recherches avec arrêt anticipatif.

Cas limites :
• Jamais trouvé : idx atteint len, found False.

Considérations de performance :
• O(n) linéaire.

Exemples :
• Seuil 1 trouverait tôt.

Remarques :
• while_loops Q28, c:0.`,

  1425: `La bonne réponse est 31 : backoff exponentiel delay 1,2,4,8,16 sommé tant que delay<=16 puis doublement final dépasse.

Débutant :
• total cumule delay à chaque tour ; delay *= 2.
• Somme 1+2+4+8+16 = 31.

Intermédiaire :
• Après 16, delay=32 >16 → boucle terminée.
• Lien avec 2^5-1.

Expert :
• Utilisé en réseau pour espacer les retries.

Concepts clés :
• Croissance géométrique ; somme dans while.

Distinctions clés :
• Condition sur delay avant ou après doublement change le total.

Fonctionnement :
• Ajouter l’attente courante puis doubler.

Exécution étape par étape :
1. Cinq tours avec delay 1,2,4,8,16 ; total=31 ; delay devient 32 et delay<=16 est faux → arrêt.

Ordre des opérations :
• += puis *= sur delay.

Cas d'utilisation courants :
• Limitation de débit, résilience API.

Cas limites :
• Plafond initial <1 modifierait les tours.

Considérations de performance :
• Nombre logarithmique d’itérations en fonction du plafond.

Exemples :
• Plafond 8 donnerait 1+2+4+8=15 selon même squelette.

Remarques :
• while_loops Q29, c:0.`,

  1426: `La bonne réponse est 23 : somme des chiffres de 9473 par %10 et //=10 : 3+7+4+9.

Débutant :
• Extraire dernier chiffre, l’ajouter, retirer le chiffre.
• 3+7+4+9=23.

Intermédiaire :
• Pattern standard de traitement décimal.
• S’arrête quand n==0.

Expert :
• Généralisable à autres bases avec %base //=base.

Concepts clés :
• Modulo 10 ; division entière ; accumulateur.

Distinctions clés :
• Pas de conversion str ici.

Fonctionnement :
• Éplucher les digits de droite à gauche.

Exécution étape par étape :
1. 9473→947→94→9→0 avec total 23.

Ordre des opérations :
• += sur %10 puis //=10.

Cas d'utilisation courants :
• Checksums simples, critères de divisibilité pédagogiques.

Cas limites :
• n=0 : total 0.

Considérations de performance :
• O(nombre de chiffres).

Exemples :
• 1001 → 2.

Remarques :
• while_loops Q30, c:0.`,

  1427: `La bonne réponse est 6 : divisions entières par 2 répétées sur 100 jusqu’à n>1 faux ; six étapes.

Débutant :
• 100→50→25→12→6→3→1.
• steps++ à chaque //=2.
• Quand n=1, test n>1 échoue.

Intermédiaire :
• Compte ≈ floor(log2(100)).
• Lieu commun avec analyse dichotomie.

Expert :
• Arrêt sur 1, pas sur 0 ici.

Concepts clés :
• Halving ; compteur steps ; condition while.

Distinctions clés :
• while n>1 vs n>=1 change le dernier incrément.

Fonctionnement :
• Réduire n par moitié entière jusqu’à 1.

Exécution étape par étape :
1. Six passages de //=2 avant sortie.

Ordre des opérations :
• //= puis += sur steps.

Cas d'utilisation courants :
• Hauteur d’arbre binaire, complexité.

Cas limites :
• n=1 : steps 0.

Considérations de performance :
• O(log n).

Exemples :
• n=8 → 3 steps (8→4→2→1).

Remarques :
• while_loops Q31, c:0.`,

  1428: `La bonne réponse est 2 : opérateur mors := assigne data[idx] à val dans la condition ; boucle tant que val impair.

Débutant :
• 1,3,5,7 impairs continuent ; au premier 2, %2==0 stop.
• val reste 2 après sortie.

Intermédiaire :
• Évite double lecture de data[idx] dans le corps.
• Python 3.8+.

Expert :
• Attention aux effets de bord si data est mutable ailleurs.

Concepts clés :
• Walrus ; parité ; index idx.

Distinctions clés :
• Sans := il faudrait assigner avant le while.

Fonctionnement :
• Lire, tester parité, avancer idx si impair.

Exécution étape par étape :
1. idx 0..4 ; à idx=4 val=2 sortie.

Ordre des opérations :
• Évaluation condition avec assignation puis corps éventuel.

Cas d'utilisation courants :
• Recherche première valeur satisfaisant un prédicat coûteux.

Cas limites :
• Pas de pair : risque IndexError si idx dépasse.

Considérations de performance :
• Une lecture par test.

Exemples :
• Premier pair en tête arrête tout de suite.

Remarques :
• while_loops Q32, c:0.`,

  1429: `La bonne réponse est "khoor" : décalage Caesar +3 sur minuscules via ord, modulo 26, chr.

Débutant :
• h→k, e→h, l→o, l→o, o→r.
• Chaîne résultat "khoor".

Intermédiaire :
• (ord-97+shift)%26+97 ramène dans a-z.
• Non traité ici : majuscules, non-lettres.

Expert :
• Chiffrement historique, vulnérable par analyse fréquence.

Concepts clés :
• ord/chr ; modulo ; boucle index.

Distinctions clés :
• %26 gère le wrap z→c pour shift 3.

Fonctionnement :
• Pour chaque lettre, appliquer la formule affine mod 26.

Exécution étape par étape :
1. Cinq itérations sur "hello".

Ordre des opérations :
• Lecture ch ; calcul ; concat result.

Cas d'utilisation courants :
• Puzzles, ROT13 variantes.

Cas limites :
• Caractères hors a-z casseraient la formule telle quelle.

Considérations de performance :
• O(len(text)).

Exemples :
• shift=0 laisse inchangé.

Remarques :
• while_loops Q33, c:0.`,

  1430: `La bonne réponse est "1101" : conversion décimal→binaire en préfixant chaque reste n%2.

Débutant :
• 13 donne restes 1,0,1,1 lus en construisant de droite à gauche via préfixe.
• Chaîne finale "1101".

Intermédiaire :
• Équivalent bin(13)[2:].
• Préfixage car le bit faible est extrait en premier.

Expert :
• Pattern généralisable à toute base avec table de digits.

Concepts clés :
• %2 ; //=2 ; concat ordonnée.

Distinctions clés :
• Suffixer au lieu de préfixer inverserait l’ordre des bits.

Fonctionnement :
• Tant que n>0, extraire bit puis réduire n.

Exécution étape par étape :
1. 13→6→3→1→0 avec bits accumulés correctement.

Ordre des opérations :
• str(n%2)+bits puis n//=2.

Cas d'utilisation courants :
• Affichage bas niveau, masques.

Cas limites :
• n=0 laisse bits "" souvent géré à part hors snippet.

Considérations de performance :
• O(log n).

Exemples :
• n=1 → "1".

Remarques :
• while_loops Q34, c:0.`,

  1431: `La bonne réponse est 11 : Horner gauche-droite sur "1011" : decimal*2+bit.

Débutant :
• 0→1→2→5→11 en lisant 1,0,1,1.
• Correspond à 8+2+1.

Intermédiaire :
• Évite pow explicite.
• int("1011",2) identique.

Expert :
• Généralisable à toute base avec *base.

Concepts clés :
• Accumulateur ; int sur caractère ; index i.

Distinctions clés :
• Parcours gauche-droite vs extraction %2 droite-gauche.

Fonctionnement :
• Double et ajoute chaque bit.

Exécution étape par étape :
1. i=0..3 mises à jour successives jusqu’à 11.

Ordre des opérations :
• *2 + int(binary[i]) puis i+=1.

Cas d'utilisation courants :
• Parseurs binaires, réseau.

Cas limites :
• Caractère non 0/1 lèverait ValueError.

Considérations de performance :
• O(L) longueur chaîne.

Exemples :
• "10" → 2.

Remarques :
• while_loops Q35, c:0.`,

  1432: `La bonne réponse est "a3b2c1" : RLE avec boucle interne comptant les répétitions consécutives sur "aaabbc".

Débutant :
• 'aaa' → a3, 'bb' → b2, 'c' → c1.
• i partagé entre boucles avance au-delà des runs.

Intermédiaire :
• Boucle interne while s[i]==ch.
• Complexité linéaire sur len(s).

Expert :
• Variante avec séparateurs différents pour décoder.

Concepts clés :
• Boucles imbriquées ; compteur count ; concat result.

Distinctions clés :
• Sans avancer i dans l’interne, boucle infinie.

Fonctionnement :
• Pour chaque nouveau ch, consommer toute la série.

Exécution étape par étape :
1. i parcours 0→3→5→6 ; chaîne finale a3b2c1.

Ordre des opérations :
• Fixer ch ; inner while ; append ch+str(count).

Cas d'utilisation courants :
• Compression simple, analyse runs.

Cas limites :
• Chaîne vide : result "".

Considérations de performance :
• O(n) car chaque index visité une fois.

Exemples :
• "aab" → a2b1.

Remarques :
• while_loops Q36, c:0.`,

  1433: `La bonne réponse est 1 : parseur de parenthèses naïf sur "(()()" : +1 pour '(' sinon -1 ; profondeur finale 1.

Débutant :
• Séquence profondeurs nettes : +1+1-1+1-1 = 1 à la fin.
• Un '(' non apparié reste.

Intermédiaire :
• Ne vérifie pas la négativité intermédiaire (pas de garde).
• Différent d’un validateur complet JSON.

Expert :
• Pour équilibre strict, tester depth>=0 à chaque pas.

Concepts clés :
• Compteur depth ; incrément décrément ; scan.

Distinctions clés :
• depth final vs max depth (autre question).

Fonctionnement :
• Parcourir chaque caractère et ajuster depth.

Exécution étape par étape :
1. '(' '(' ')' '(' ')' → 1 final.

Ordre des opérations :
• if '(' else ')' implicite.

Cas d'utilisation courants :
• Lexers rudimentaires, puzzles.

Cas limites :
• Trop de ')' donnerait depth négatif ici sans erreur.

Considérations de performance :
• O(n).

Exemples :
• "()" → 0.

Remarques :
• while_loops Q37, c:0.`,

  1434: `La bonne réponse est [4, 5, 1, 2, 3] : deux rotations droite via pop() + appendleft() sur deque.

Débutant :
• Départ [1,2,3,4,5].
• Étape1 : enlève 5 à droite, met à gauche → [5,1,2,3,4].
• Étape2 : enlève 4 → [4,5,1,2,3].

Intermédiaire :
• Équivalent rotate(2) positive à droite selon convention.
• O(1) par bout.

Expert :
• Préférer deque vs list pour insertions extrêmes.

Concepts clés :
• deque ; appendleft ; pop.

Distinctions clés :
• rotate gauche utiliserait popleft+append.

Fonctionnement :
• Répéter steps fois la même transformation.

Exécution étape par étape :
1. steps 0→1→2 avec deque montré.

Ordre des opérations :
• appendleft(pop()) puis steps+=1.

Cas d'utilisation courants :
• Tampons circulaires, scheduling.

Cas limites :
• deque vide : erreur sur pop.

Considérations de performance :
• Constant amorti par opération.

Exemples :
• steps=0 laisse l’ordre initial.

Remarques :
• while_loops Q38, c:0.`,

  1435: `La bonne réponse est [1, 3, 4, 1, 5] : une passe d’insertion sort plaçant arr[1]=1 avant 3 en décalant.

Débutant :
• key=1, j=0 ; 3>1 décale 3 vers l’index 1.
• j=-1 sort de while ; arr[0]=1.

Intermédiaire :
• Les autres positions 2.. inchangées dans cet extrait.
• Boucle while j>=0 et arr[j]>key.

Expert :
• Une seule itération externe montrée ; tri complet répéterait pour k>1.

Concepts clés :
• Décalage ; index j ; insertion key.

Distinctions clés :
• Ne pas confondre avec tri bulle complet.

Fonctionnement :
• Tant qu’élément à gauche plus grand, décaler droite.

Exécution étape par étape :
1. [3,1,4,1,5] → [3,3,4,1,5] puis place 1 en tête.

Ordre des opérations :
• while shift ; post arr[j+1]=key.

Cas d'utilisation courants :
• Étape intermédiaire tri insertion.

Cas limites :
• key déjà minimal : peu de décalages.

Considérations de performance :
• O(k) pour insertion position k.

Exemples :
• Tableau trié : while jamais exécuté.

Remarques :
• while_loops Q39, c:0.`,

  1436: `La bonne réponse est 3 : scan pour l’indice du minimum dans [5,2,8,1,9] ; le 1 est à l’index 3.

Débutant :
• min_idx commence 0 (valeur 5).
• 2<5 → idx1 ; 8 non ; 1<2 → idx3 ; 9 non.

Intermédiaire :
• Boucle i de 1 à fin.
• Sélection pour swap futur en tri sélection.

Expert :
• Stable en indice si plusieurs minima égaux ? Ici unique.

Concepts clés :
• Comparaisons nums[i] < nums[min_idx] ; min_idx.

Distinctions clés :
• Retourne l’index, pas la valeur.

Fonctionnement :
• Parcourir et mettre à jour min_idx si meilleur.

Exécution étape par étape :
1. Mises à jour vers 1 puis 3.

Ordre des opérations :
• if compare ; i+=1 fin de tour.

Cas d'utilisation courants :
• Tri sélection, argmin manuel.

Cas limites :
• Liste un élément : min_idx 0.

Considérations de performance :
• O(n) pour ce scan.

Exemples :
• Tous égaux : min_idx reste 0.

Remarques :
• while_loops Q40, c:0.`,

  1437: `La bonne réponse est (1, 8) : Collatz sur 256=2^8 avec garde max_iter=20 ; uniquement des halves jusqu’à 1 en 8 étapes.

Débutant :
• Pair à chaque fois : divisions par 2 huit fois.
• count=8, x=1 à la fin.

Intermédiaire :
• max_iter non atteint ici.
• x!=1 et count<max_iter contrôle la boucle.

Expert :
• Garde utile si trajectoire inconnue ou bornée.

Concepts clés :
• Collatz ; compteur ; limite max_iter.

Distinctions clés :
• Impairs déclencheraient 3n+1 et autre count.

Fonctionnement :
• Appliquer règle pair/impair puis incrémenter count.

Exécution étape par étape :
1. 256→128→…→1 en 8 tours.

Ordre des opérations :
• if pair //=2 else 3*x+1 ; count+=1.

Cas d'utilisation courants :
• Simulations avec sécurité d’itérations.

Cas limites :
• max_iter petit pourrait stopper avant 1.

Considérations de performance :
• Dépend de la trajectoire Collatz.

Exemples :
• x=1 immédiat : count 0.

Remarques :
• while_loops Q41, c:0.`,

  1438: `La bonne réponse est "a2bc3d2" : compression n’écrivant le compte que si run>1 sur "aabcccdd".

Débutant :
• aa→a2 ; b seul→b ; ccc→c3 ; dd→d2.

Intermédiaire :
• j mesure longueur run ; str(count) si count>1 sinon "".
• i saute j à chaque segment.

Expert :
• Certaines implémentations retournent l’original si compression plus longue.

Concepts clés :
• Double boucle ; compteur ; concat.

Distinctions clés :
• Diffère de a3b2c1 toujours avec chiffre 1.

Fonctionnement :
• Mesurer run puis émettre caractère + suffixe count optionnel.

Exécution étape par étape :
1. Segments [0:2],[2:3],[3:6],[6:8] produisent la chaîne donnée.

Ordre des opérations :
• inner while égalité ; result += ; i=j jump.

Cas d'utilisation courants :
• Entretiens string, formats légers.

Cas limites :
• Chaîne vide : "".

Considérations de performance :
• O(n).

Exemples :
• "aa" → "a2".

Remarques :
• while_loops Q42, c:0.`,

  1439: `La bonne réponse est "abcab" : supprimer doublons consécutifs sur "aabbccaab".

Débutant :
• Garder premier d’une série ; sauter répétitions adjacentes.
• Résultat litéral abcab.

Intermédiaire :
• i==0 ou s[i]!=s[i-1] contrôle append.
• Doublons non consécutifs subsistent (deux 'a' séparés).

Expert :
• Différent d’un unique global set.

Concepts clés :
• Fenêtre précédent ; index ; concat.

Distinctions clés :
• Préserver 'a' après 'c' car non adjacent au premier 'a'.

Fonctionnement :
• Avancer i ; append conditionnel.

Exécution étape par étape :
1. Parcours complet avec sauts logiques des répétitions locales.

Ordre des opérations :
• if gate ; i+=1 chaque tour.

Cas d'utilisation courants :
• Nettoyage de runs, RLE inverse partiel.

Cas limites :
• Un seul caractère : inchangé.

Considérations de performance :
• O(n).

Exemples :
• "aaa" → "a".

Remarques :
• while_loops Q43, c:0.`,

  1440: `La bonne réponse est True : essai de division jusqu’à d*d<=29 ; aucun diviseur trouvé.

Débutant :
• d=2,3,4,5 testés ; 29%jamais 0.
• d=6 : 36>29 sort ; is_prime reste True initial si n>1.

Intermédiaire :
• break dès facteur trouvé sinon fin naturelle.
• Racine sans sqrt explicite.

Expert :
• Complexité O(sqrt(n)) ; optimisations wheel possibles.

Concepts clés :
• Booléen is_prime ; boucle d ; modulo.

Distinctions clés :
• n<=1 forcé False par is_prime=n>1 initial.

Fonctionnement :
• Tester divisibilité pour d croissant jusqu’à d*d>n.

Exécution étape par étape :
1. Aucun break ; sortie sur d*d>n avec is_prime True.

Ordre des opérations :
• if n%d==0 false répété ; d+=1.

Cas d'utilisation courants :
• Primalité petite échelle.

Cas limites :
• n=2 : boucle jamais, True.

Considérations de performance :
• Suffisant pour petits n du quiz.

Exemples :
• n=9 → False sur d=3.

Remarques :
• while_loops Q44, c:0.`,

  1441: `La bonne réponse est 8 : crible d’Ératosthène jusqu’à 20 ; sum(sieve) additionne les True comme 1 → huit drapeaux True, soit les huit nombres premiers ≤ 20.

Débutant :
• Marquer composés multiples de premiers p.
• True reste pour 2,3,5,7,11,13,17,19.

Intermédiaire :
• Boucle interne m+=p à partir de p*p.
• p parcourt jusqu’à p*p<=n.

Expert :
• Linéaire en n log log n approx pour ce genre d’impl.

Concepts clés :
• Tableau booléen ; rayer multiples ; sum.

Distinctions clés :
• sum(sieve) compte True, pas la somme des nombres premiers.

Fonctionnement :
• Pour chaque p candidat, rayer si encore premier.

Exécution étape par étape :
1. Finalement huit drapeaux True pour les huit premiers ≤20.

Ordre des opérations :
• if sieve[p] ; inner while m<=n.

Cas d'utilisation courants :
• Précalcul de primalité sur plage.

Cas limites :
• n<2 : configurations spéciales hors focus.

Considérations de performance :
• Mémoire O(n).

Exemples :
• n=10 → 4 premiers.

Remarques :
• while_loops Q45, c:0.`,

  1442: `La bonne réponse est {0: 'a', 1: 'b', 2: 'c', 3: 'd'} : émulation manuelle d’enumerate avec clés entières.

Débutant :
• idx 0..3 mappe vers chaque élément de la liste.
• Dictionnaire ordonné par insertion en 3.7+.

Intermédiaire :
• dict(enumerate(items)) idiomatique.
• while impose idx++ explicite.

Expert :
• Clés sont positions, pas les lettres elles-mêmes.

Concepts clés :
• Index idx ; dict result ; len bound.

Distinctions clés :
• Pas l’inverse {lettre: index} montré ailleurs.

Fonctionnement :
• Tant que idx valide, associer idx→items[idx].

Exécution étape par étape :
1. Quatre insertions successives.

Ordre des opérations :
• assign result[idx] ; idx+=1.

Cas d'utilisation courants :
• Reconstruction positions, sérialisation indexée.

Cas limites :
• liste vide : dict vide.

Considérations de performance :
• O(n).

Exemples :
• items longueur 1 : {0: premier}.

Remarques :
• while_loops Q46, c:0.`,

  1443: `La bonne réponse est 60 : boucle while True avec next(it) jusqu’à StopIteration ; somme 10+20+30.

Débutant :
• it épuise trois valeurs puis lève.
• except StopIteration break.

Intermédiaire :
• Miroir du for interne.
• total cumulé après chaque next réussi.

Expert :
• Permet d’injecter logique entre éléments.

Concepts clés :
• iter/next ; StopIteration ; try/except.

Distinctions clés :
• while True nécessite break fiable.

Fonctionnement :
• Répéter next jusqu’à épuisement.

Exécution étape par étape :
1. +10,+20,+30 ; next suivant lève → break.

Ordre des opérations :
• try next ; except break.

Cas d'utilisation courants :
• Itérateurs custom, pipelines.

Cas limites :
• it vide : StopIteration immédiat, total 0.

Considérations de performance :
• O(k) pour k éléments.

Exemples :
• Deux éléments → somme paire simple.

Remarques :
• while_loops Q47, c:0.`,

  1444: `La bonne réponse est 5 : exponentiation modulaire rapide pour 3**5 % 7.

Débutant :
• Résultat final 5 (243 mod 7).
• Boucle binaire sur exp.

Intermédiaire :
• Multiplie result quand bit de exp impair.
• base et result toujours réduits mod 7.

Expert :
• O(log exp) multiplications modulaires.

Concepts clés :
• exp //=2 ; exp%2 ; % mod.

Distinctions clés :
• Diffère de la puissance naïve puis % une fois.

Fonctionnement :
• Carrer base, diviser exp, accumuler si bit bas.

Exécution étape par étape :
1. Suivre bits de 5 pour obtenir 5 final.

Ordre des opérations :
• if impair update result ; base=(base*base)%mod ; exp//=2.

Cas d'utilisation courants :
• RSA, primalité, crypto pédagogique.

Cas limites :
• mod=1 force 0 ; ici mod=7 OK.

Considérations de performance :
• Critique pour grands exposants.

Exemples :
• pow(3,5,7) builtin vérifie 5.

Remarques :
• while_loops Q48, c:0.`,

  1445: `La bonne réponse est "FF" : conversion n=255 base 16 avec table digits, préfixage comme binaire.

Débutant :
• 255%16=15→'F', n=15 ; encore 15→'F', n=0.
• Résultat "FF".

Intermédiaire :
• 0xFF = 255.
• Même squelette que décimal→binaire avec base variable.

Expert :
• Généralisable à bases >16 avec alphabet étendu.

Concepts clés :
• % base ; //= base ; chaîne digits.

Distinctions clés :
• Préfixe pour ordre MSB correct.

Fonctionnement :
• Extraire restes du poids faible au fort en reconstruisant à l’envers.

Exécution étape par étape :
1. Deux tours produisant FF.

Ordre des opérations :
• digits[n%base]+result ; n//=base.

Cas d'utilisation courants :
• Affichage hex, couleurs, dumps.

Cas limites :
• n=0 souvent cas spécial hors snippet.

Considérations de performance :
• O(log_base n).

Exemples :
• n=10 → "A" en base 16 avec digits standard.

Remarques :
• while_loops Q49, c:0.`,

  1446: `La bonne réponse est [5, 7] : interprétation commandes push/pop sur pile simulée.

Débutant :
• push 5 → [5] ; push 3 → [5,3] ; pop → [5] ; push 7 → [5,7].

Intermédiaire :
• split() pour opcode et argument.
• pop sans garde si pile vide lèverait ici.

Expert :
• Pattern mini-VM / undo stack.

Concepts clés :
• File de commandes ; stack ; int(cmd[1]).

Distinctions clés :
• pop enlève dernier, pas premier.

Fonctionnement :
• Séquencer les cmd selon opcode.

Exécution étape par étape :
1. Quatre itérations i=0..3.

Ordre des opérations :
• lecture cmd ; if push elif pop ; i+=1.

Cas d'utilisation courants :
• Interprètes, calculatrices RPN light.

Cas limites :
• pop sur [] : erreur.

Considérations de performance :
• O(#commandes).

Exemples :
• Que push → pile simple.

Remarques :
• while_loops Q50, c:0.`,

  1447: `La bonne réponse est [3, '+', 42] : lexer absorbant les chiffres consécutifs en entiers pour "3+42".

Débutant :
• '3' seul chiffre → token 3.
• '+' token caractère.
• '4','2' lus ensemble → 42.

Intermédiaire :
• Types mixtes int et str dans tokens.
• Boucle interne pour runs numériques.

Expert :
• Étape 1 avant parseur avec précédence.

Concepts clés :
• isdigit ; accumulateur num ; i partagé.

Distinctions clés :
• Sans boucle interne : [3,'+',4,2] incorrect.

Fonctionnement :
• Avancer i ; grouper nombres ; sinon opérateur unitaire.

Exécution étape par étape :
1. i parcourt toute expr en consommant segments.

Ordre des opérations :
• if digit branch inner while ; else append char.

Cas d'utilisation courants :
• Calculatrices, DSL simples.

Cas limites :
• Expr vide : tokens [].

Considérations de performance :
• O(len(expr)).

Exemples :
• "12+3" → [12,'+',3].

Remarques :
• while_loops Q51, c:0.`,

  1448: `La bonne réponse est [[1], [2, 4], [3, 6, 9]] : double while construit table triangulaire des produits i*j pour i=1..3.

Débutant :
• i=1 : j=1 → row [1].
• i=2 : j=1..2 → [2,4].
• i=3 : j=1..3 → [3,6,9].

Intermédiaire :
• j réinitialisé à 1 chaque ligne.
• row append i*j.

Expert :
• Complexité O(i_max^2) ici petit.

Concepts clés :
• Boucles imbriquées while ; listes accumulées.

Distinctions clés :
• Pas la table complète carrée ; triangle j<=i.

Fonctionnement :
• Pour chaque i, vider/construire row puis l’ajouter à result.

Exécution étape par étape :
1. Trois tours externes, j interne croissant jusqu’i.

Ordre des opérations :
• reset j ; inner while append ; outer append row.

Cas d'utilisation courants :
• Patterns matriciels, séquences partielles.

Cas limites :
• i<=0 : résultats vides selon bornes.

Considérations de performance :
• Quadratique en borne supérieure.

Exemples :
• i<=1 seul → [[1]].

Remarques :
• while_loops Q52, c:0.`,

  1449: `La bonne réponse est [10, 20, 30] : liste chaînée simulée par dict d’indices ; cur suit les secondes composantes jusqu’à -1.

Débutant :
• 0→(10,1) append 10, cur=1.
• 1→(20,2) append 20, cur=2.
• 2→(30,-1) append 30, cur=-1 stop.

Intermédiaire :
• Tuple (valeur, suivant) par nœud.
• -1 sentinelle de fin.

Expert :
• Utile pour enseigner pointeurs sans objets nœud.

Concepts clés :
• cur ; boucle while cur!=-1 ; tuple unpacking.

Distinctions clés :
• Ordre forward fixé par chaînage, pas tri des clés.

Fonctionnement :
• Répéter append tête courante puis avancer lien.

Exécution étape par étape :
1. Trois nœuds consommés linéairement.

Ordre des opérations :
• lecture nodes[cur] ; append ; cur=next.

Cas d'utilisation courants :
• Simulation linked list, graphes sparse indexés.

Cas limites :
• Cycle mal formé bouclerait (non ici).

Considérations de performance :
• O(longueur chaîne).

Exemples :
• Un seul nœud (-1) → singleton.

Remarques :
• batch3 Q53, c:0.`,

  1450: `La bonne réponse est 30 : itérateur [10,20] épuisé en deux next ; total=10+20 avant StopIteration.

Débutant :
• Premier next → 10 ; second → 20.
• Troisième lève StopIteration → break.

Intermédiaire :
• Variante plus courte que la question 1443 sur trois nombres.
• Même protocole while True/try/except.

Expert :
• Illustrer différence de taille sans changer le pattern.

Concepts clés :
• iter ; next ; StopIteration ; accumulateur.

Distinctions clés :
• Ne pas confondre avec la somme 60 de trois éléments d’une autre question.

Fonctionnement :
• Additionner chaque élément retourné jusqu’à épuisement.

Exécution étape par étape :
1. total 10 puis 30 après second next ; break sur troisième.

Ordre des opérations :
• try += next ; except break.

Cas d'utilisation courants :
• Consommation manuelle d’itérateurs.

Cas limites :
• Liste vide : total 0 immédiat.

Considérations de performance :
• O(n) sur nombre d’éléments.

Exemples :
• Un élément [7] → 7.

Remarques :
• batch3 Q54, c:0.`,
};
