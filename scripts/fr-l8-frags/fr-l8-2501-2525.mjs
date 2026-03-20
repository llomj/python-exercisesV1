/** Level 8 FR 2501–2525 — level8_intermediate_a.ts Q1–25 (comparaisons, arithmétique dunder, affichage) */
export default {
  2501: `V(1) == V(1) avec __eq__ sur l’attribut x

Débutant :
• == entre deux instances de V appelle __eq__ et compare self.x à o.x.

Intermédiaire :
• Sans __eq__, == retomberait sur l’identité (deux objets distincts → False).

Expert :
• Pour des clés de dict ou des ensembles, il faudrait aussi un __hash__ cohérent avec __eq__.

Concepts clés :
• __eq__(self, other) redéfinit l’opérateur == pour la classe V.
• Ici l’égalité est « par valeur » sur x, pas « même objet » que is.

Distinctions clés :
• V(1) is V(1) reste False (deux constructions), alors que == peut être True.

Fonctionnement :
• Python appelle type(a).__eq__(a, b) ; ici les deux x valent 1 → True.

Exécution étape par étape :
• Construction des deux V(1) ; évaluation de == ; appel __eq__ ; retour 1 == 1.

Ordre des opérations :
• Les opérandes sont évalués avant l’appel de la méthode spéciale.

Cas d'utilisation courants :
• Modèles de données, comparaisons métier, tests unitaires sur objets personnalisés.

Cas limites :
• Si o n’est pas un V, o.x peut provoquer AttributeError sans garde de type.

Considérations de performance :
• Comparaison O(1) ici ; éviter des __eq__ coûteux dans des structures massives.

Exemples :
• V(1) == V(2) → False ; V(2) == V(2) → True.

Remarques :
• Réponse : True (1re option).`,

  2502: `V(1) != V(2) avec __ne__ sur x

Débutant :
• != appelle __ne__ qui renvoie self.x != o.x, donc 1 != 2 → True.

Intermédiaire :
• En Python 3, si seul __eq__ est défini, __ne__ peut être dérivé ; ici __ne__ est explicite.

Expert :
• __ne__ doit rester cohérent avec __eq__ pour ne pas surprendre les lecteurs du code.

Concepts clés :
• __ne__ contrôle l’opérateur != pour les instances de V.

Distinctions clés :
• != n’est pas « not (==) » syntaxiquement : chaque branche peut être surchargée.

Fonctionnement :
• Appel à gauche : V.__ne__(V(1), V(2)) ; retour booléen.

Exécution étape par étape :
• Création V(1) et V(2) ; évaluation != ; comparaison des attributs x.

Ordre des opérations :
• Évaluation des opérandes puis dispatch sur la méthode du type de gauche.

Cas d'utilisation courants :
• Filtrage, ensembles de règles, inégalités sur champs encapsulés.

Cas limites :
• Comparer à un type sans x sans test → erreur possible.

Considérations de performance :
• Même ordre de grandeur que __eq__ pour ce schéma simple.

Exemples :
• V(3) != V(3) → False.

Remarques :
• Réponse : True (1re option).`,

  2503: `V(1) < V(2) avec __lt__

Débutant :
• < appelle __lt__ ; ici self.x < o.x donne 1 < 2 → True.

Intermédiaire :
• Ces méthodes participent au tri riche avec sorted(..., key=...) ou comparaisons directes.

Expert :
• functools.total_ordering peut compléter d’autres opérateurs si __eq__ + une relation d’ordre sont fournis.

Concepts clés :
• __lt__ implémente l’opérateur « strictement inférieur à ».

Distinctions clés :
• Ne pas confondre avec <= (__le__) ni avec tri par clé externe sans __lt__.

Fonctionnement :
• Python invoque __lt__ sur l’opérande gauche avec l’opérande droit.

Exécution étape par étape :
• V(1) et V(2) créés ; 1 < 2 évalué dans __lt__.

Ordre des opérations :
• Opérandes d’abord, puis appel de méthode.

Cas d'utilisation courants :
• Files de priorité, plages ordonnées, validation d’ordre chronologique.

Cas limites :
• Cycles ou comparaisons avec types incompatibles → TypeError ou NotImplemented.

Considérations de performance :
• Pour de gros tris, préférer souvent une clé numérique plutôt que N comparaisons d’objets lourds.

Exemples :
• V(5) < V(3) → False.

Remarques :
• Réponse : True (1re option).`,

 2504: `V(2) <= V(2) avec __le__

Débutant :
• <= utilise __le__ ; 2 <= 2 est True.

Intermédiaire :
• Cas limite d’égalité : <= doit être True quand les valeurs sont égales.

Expert :
• Chaînes du type V(a) <= V(b) <= V(c) exigent des implémentations cohérentes entre __le__, __lt__, etc.

Concepts clés :
• __le__ définit l’opérateur « inférieur ou égal ».

Distinctions clés :
• Diffère de < : ici l’égalité des x suffit pour True.

Fonctionnement :
• Appel V.__le__(instance gauche, instance droite).

Exécution étape par étape :
• Deux V(2) ; self.x <= o.x → True.

Ordre des opérations :
• Évaluation des instances puis de la comparaison interne.

Cas d'utilisation courants :
• Bornes inclusives, intervalles, validation « dans la plage ».

Cas limites :
• Incohérence entre __lt__ et __le__ peut casser sorted ou bisect.

Considérations de performance :
• Comparaison entière simple, coût négligeable.

Exemples :
• V(3) <= V(2) → False.

Remarques :
• Réponse : True (1re option).`,

 2505: `À quoi sert __gt__ sur une classe ?

Débutant :
• __gt__ permet d’utiliser l’opérateur > entre instances de cette classe.

Intermédiaire :
• max() et des tas peuvent s’appuyer sur des comparaisons riches si elles existent.

Expert :
• Si __gt__ renvoie NotImplemented, Python peut tenter la réflexion sur l’autre opérande (__lt__ côté droit).

Concepts clés :
• __gt__ est une des six méthodes de comparaison riches.

Distinctions clés :
• Ce n’est ni une affectation ni une conversion de type ni un formatage.

Fonctionnement :
• a > b déclenche a.__gt__(b) en premier lieu selon le protocole.

Exécution étape par étape :
• Évaluation de a et b ; tentative __gt__ ; retour booléen ou NotImplemented.

Ordre des opérations :
• Les deux opérandes sont prêts avant le dispatch.

Cas d'utilisation courants :
• Ordre métier, structures triées, contraintes « strictement après ».

Cas limites :
• Types hétérogènes sans NotImplemented géré → TypeError.

Considérations de performance :
• Gardez la comparaison O(1) quand c’est possible pour des collections triées.

Exemples :
• class V: def __gt__(self, o): return self.x > o.x — V(3) > V(1) → True.

Remarques :
• Réponse : comparaison avec > (1re option).`,

  2506: `V(1,2) + V(3,4) avec __add__

Débutant :
• __add__ construit un nouveau V dont x et y sont les sommes composante par composante.

Intermédiaire :
• Le + ne modifie pas les opérandes ; on retourne une nouvelle instance (style immuable).

Expert :
• Pour int + V, il faudrait souvent __radd__ ou gérer NotImplemented dans __add__.

Concepts clés :
• __add__ surcharge + pour deux instances V.

Distinctions clés :
• Diffère de __iadd__ (+= in-place) absent ici.

Fonctionnement :
• V.__add__(gauche, droite) retourne V(self.x+o.x, self.y+o.y).

Exécution étape par étape :
• Création des deux V ; appel __add__ ; lecture de (v.x, v.y) → (4, 6).

Ordre des opérations :
• + a une priorité classique ; pas d’effet de bord sur self.

Cas d'utilisation courants :
• Vecteurs 2D, cumuls de coordonnées, types « mesure + mesure ».

Cas limites :
• Addition avec un int lèvera TypeError sans adaptation.

Considérations de performance :
• Création d’objet léger ; acceptable en boucle modérée.

Exemples :
• V(0,0) + V(1,1) → V(1,1).

Remarques :
• Réponse : (4, 6) (1re option).`,

 2507: `V(3) * 4 avec __mul__

Débutant :
• __mul__(self, n) retourne V(self.x * n) → x vaut 12.

Intermédiaire :
• L’opérande droit est un int, pas un V ; seul __mul__ à gauche suffit ici.

Expert :
• 4 * V(3) exigerait __rmul__ car int.__mul__ ne connaît pas V.

Concepts clés :
• __mul__ définit la multiplication à gauche par un scalaire (ici).

Distinctions clés :
• Pas la concaténation de chaînes ni la répétition de liste.

Fonctionnement :
• V(3).__mul__(4) appelé par l’interprète.

Exécution étape par étape :
• Instance avec x=3 ; n=4 ; nouveau V(12) ; print affiche 12.

Ordre des opérations :
• V(3) puis 4 puis opération binaire.

Cas d'utilisation courants :
• Homothétie de vecteur, échelle, unités multipliées par un facteur.

Cas limites :
• n non numérique → erreur dans self.x * n.

Considérations de performance :
• Une multiplication entière native, très rapide.

Exemples :
• V(5) * 2 → V(10).

Remarques :
• Réponse : 12 (1re option).`,

 2508: `V(10) - V(3) avec __sub__

Débutant :
• __sub__ retourne V(self.x - o.x), donc 10 - 3 = 7.

Intermédiaire :
• La soustraction binaire n’est pas l’unaire - ; celle-ci est __neg__.

Expert :
• L’ordre des opérandes change le signe du résultat : V(3)-V(10) serait V(-7).

Concepts clés :
• __sub__ surcharge l’opérateur - binaire entre deux V.

Distinctions clés :
• Ne pas confondre avec __isub__ (-=) absent ici.

Fonctionnement :
• Appel sur l’objet à gauche avec l’objet à droite.

Exécution étape par étape :
• V(10), V(3) ; différence 7 ; attribut x du résultat affiché.

Ordre des opérations :
• Gauche puis droite puis appel __sub__.

Cas d'utilisation courants :
• Déplacement relatif, soldes, différences de mesures.

Cas limites :
• Types incompatibles sans garde → TypeError.

Considérations de performance :
• Opération entière O(1).

Exemples :
• V(1) - V(1) → V(0).

Remarques :
• Réponse : 7 (1re option).`,

 2509: `-V(5) avec __neg__

Débutant :
• L’unaire - appelle __neg__ qui renvoie V(-self.x).

Intermédiaire :
• __neg__ est distinct de la soustraction entre deux objets.

Expert :
• On attend en général un nouvel objet plutôt qu’une mutation de self.

Concepts clés :
• __neg__ implémente l’opposé mathématique pour une instance.

Distinctions clés :
• Pas __sub__, pas abs (cela serait __abs__).

Fonctionnement :
• -obj déclenche type(obj).__neg__(obj).

Exécution étape par étape :
• V(5) ; __neg__ ; V(-5) ; v.x affiché -5.

Ordre des opérations :
• L’unaire s’applique à l’expression V(5) déjà construite.

Cas d'utilisation courants :
• Inversion de direction, signes dans des simulations.

Cas limites :
• x non numérique → -self.x peut échouer.

Considérations de performance :
• Négligeable.

Exemples :
• -V(-3) → V(3).

Remarques :
• Réponse : -5 (1re option).`,

  2510: `abs(V(-7)) avec __abs__

Débutant :
• abs() appelle __abs__ sur l’instance ; ici retour de abs(self.x) = 7.

Intermédiaire :
• Le résultat est un int, pas obligatoirement une nouvelle instance V.

Expert :
• Pour un vecteur, __abs__ renvoie souvent la norme (float) plutôt qu’un V.

Concepts clés :
• __abs__ connecte l’objet au builtin abs.

Distinctions clés :
• Diffère de __neg__ qui change le signe sans prendre la valeur absolue.

Fonctionnement :
• Builtin abs dispatche vers V.__abs__.

Exécution étape par étape :
• V(-7) ; __abs__ ; retour 7 ; print 7.

Ordre des opérations :
• L’appel à abs englobe l’évaluation de l’argument.

Cas d'utilisation courants :
• Distances, magnitudes, valeurs absolues métier.

Cas limites :
• __abs__ doit renvoyer un nombre réel (contrainte du protocole).

Considérations de performance :
• Une seule valeur scalaire.

Exemples :
• abs(V(3)) → 3.

Remarques :
• Réponse : 7 (1re option).`,

  2511: `V(7) // V(2) avec __floordiv__

Débutant :
• // appelle __floordiv__ ; 7 // 2 vaut 3 (division entière vers -inf).

Intermédiaire :
• Ce n’est pas la vraie division / (__truediv__) qui donnerait un float.

Expert :
• Pour les négatifs, // arrondit vers moins l’infini, pas vers zéro.

Concepts clés :
• __floordiv__ surcharge // entre deux V.

Distinctions clés :
• 3.5 n’apparaît pas : pas de float ici.

Fonctionnement :
• V.__floordiv__(V(7), V(2)) → V(3).

Exécution étape par étape :
• Calcul 7//2 ; nouvelle instance ; v.x = 3.

Ordre des opérations :
• Opérandes puis floor division Python sur les attributs.

Cas d'utilisation courants :
• Pagination, grilles discrètes, quotas entiers.

Cas limites :
• Division par zéro sur o.x → ZeroDivisionError.

Considérations de performance :
• Division entière native.

Exemples :
• V(-7) // V(2) → V(-4).

Remarques :
• Réponse : 3 (1re option).`,

  2512: `V(7) % V(3) avec __mod__

Débutant :
• % appelle __mod__ ; 7 % 3 = 1.

Intermédiaire :
• Le reste est cohérent avec // pour les entiers positifs.

Expert :
• str.__mod__ est un autre usage du symbole % (formatage) sans rapport direct.

Concepts clés :
• __mod__ définit le modulo sur les valeurs x encapsulées.

Distinctions clés :
• Pas la division entière seule : ici le reste.

Fonctionnement :
• self.x % o.x dans une nouvelle coque V.

Exécution étape par étape :
• 7 et 3 ; 7 % 3 → 1 ; print 1.

Ordre des opérations :
• Évaluation des V puis opération %.

Cas d'utilisation courants :
• Cyclicité, parité, contraintes modulaires.

Cas limites :
• Modulo 0 → ZeroDivisionError.

Considérations de performance :
• Très rapide pour des int.

Exemples :
• V(10) % V(5) → V(0).

Remarques :
• Réponse : 1 (1re option).`,

  2513: `V(2) ** 3 avec __pow__

Débutant :
• ** appelle __pow__ ; 2 ** 3 = 8.

Intermédiaire :
• pow(a, b) et a**b utilisent __pow__ ; la forme à trois arguments (modulo) existe aussi en Python.

Expert :
• __pow__ peut accepter un troisième argument mod dans certaines implémentations.

Concepts clés :
• __pow__ surcharge l’exponentiation pour V scalaire sur l’attribut x.

Distinctions clés :
• Pas l’addition répétée : sémantique ** exacte.

Fonctionnement :
• V(2).__pow__(3) retourne V(8).

Exécution étape par étape :
• Base 2, exposant 3 ; puissance entière ; affichage 8.

Ordre des opérations :
• L’opérande gauche puis l’exposant.

Cas d'utilisation courants :
• Croissance, combinaisons, types numériques personnalisés.

Cas limites :
• Exposants non entiers ou bases négatives peuvent exiger float ou complex.

Considérations de performance :
• ** sur int petits est optimisé ; attention aux exposants énormes.

Exemples :
• V(3) ** 2 → V(9).

Remarques :
• Réponse : 8 (1re option).`,

  2514: `À quoi sert __radd__ ?

Débutant :
• __radd__ est la version « réfléchie » de __add__ quand la gauche ne sait pas ajouter la droite.

Intermédiaire :
• Après NotImplemented de int.__add__(5, V(...)), Python tente V.__radd__(V(...), 5).

Expert :
• Chaque opérateur arithmétique a des variantes __r*__ pour la symétrie des types.

Concepts clés :
• self dans __radd__ est l’opérande droit de l’expression écrite.

Distinctions clés :
• Ce n’est ni récursif ni aléatoire ni alignement de texte.

Fonctionnement :
• Chaîne de repli : gauche.__add__ puis droite.__radd__.

Exécution étape par étape :
• Essai sur le type de gauche ; échec ; essai __radd__ sur le type de droite.

Ordre des opérations :
• Respect de la priorité + ; dispatch après échec.

Cas d'utilisation courants :
• scalaire + vecteur, interop avec int/float.

Cas limites :
• Si les deux côtés renvoient NotImplemented → TypeError.

Considérations de performance :
• Un échec + un second appel : coût minime sauf types exotiques.

Exemples :
• 5 + V(3) avec __radd__ défini.

Remarques :
• Réponse : addition réfléchie quand la gauche ne supporte pas + (1re option).`,

  2515: `5 + V(3) avec __radd__

Débutant :
• int.__add__(5, V(3)) renvoie NotImplemented ; V.__radd__(V(3), 5) produit V(8).

Intermédiaire :
• Dans __radd__, o est la valeur de gauche (5) et self.x est 3.

Expert :
• Si __radd__ manque, 5 + V(3) lève TypeError.

Concepts clés :
• Ordre des arguments inversé par rapport à __add__ pour le self.

Distinctions clés :
• V(3) + 5 passerait d’abord par V.__add__ (côté gauche), pas par __radd__.

Fonctionnement :
• Protocole de réflexion binaire de Python.

Exécution étape par étape :
• NotImplemented côté int ; __radd__ ; V(5+3) ; print 8.

Ordre des opérations :
• Literal 5, construction V(3), puis +.

Cas d'utilisation courants :
• Écriture naturelle des expressions mixtes.

Cas limites :
• Oublier __radd__ casse 5 + V.

Considérations de performance :
• Deux tentatives de dispatch maximum.

Exemples :
• 10 + V(0) → V(10).

Remarques :
• Réponse : 8 (1re option).`,

  2516: `repr(C()) avec __repr__ personnalisé

Débutant :
• __repr__ renvoie la chaîne 'C()' ; repr(c) et print(repr(c)) affichent C().

Intermédiaire :
• En REPL, l’objet s’affiche souvent via repr.

Expert :
• La doc Python recommande une repr non ambiguë, idéalement recréable ; ici c’est exactement 'C()'.

Concepts clés :
• __repr__ est la représentation « officielle » / debug.

Distinctions clés :
• str() pourrait utiliser __str__ si défini, pas cette question.

Fonctionnement :
• repr appelle __repr__ sans argument utilisateur.

Exécution étape par étape :
• C() ; repr ; chaîne retournée ; print.

Ordre des opérations :
• Appel de fonction repr une fois l’instance prête.

Cas d'utilisation courants :
• Logs techniques, introspection.

Cas limites :
• __repr__ doit retourner str sinon TypeError.

Considérations de performance :
• Coût d’une petite concaténation de chaînes.

Exemples :
• repr(C()) == 'C()'.

Remarques :
• Réponse : C() (1re option).`,

  2517: `str(C()) avec __str__ et __repr__

Débutant :
• str() choisit __str__ en priorité → 'I am C'.

Intermédiaire :
• repr(C()) resterait 'C()' ici car __repr__ est distinct.

Expert :
• print utilise str, donc la branche utilisateur gagne.

Concepts clés :
• Coexistence __str__ (informel) et __repr__ (officiel).

Distinctions clés :
• Ce n’est pas la sortie repr ni une erreur.

Fonctionnement :
• PyObject_Str tente __str__ puis repli possible sur __repr__.

Exécution étape par étape :
• C() ; str ; __str__ ; print la chaîne utilisateur.

Ordre des opérations :
• str avant print.

Cas d'utilisation courants :
• Messages utilisateur vs traces développeur.

Cas limites :
• __str__ qui lève interrompt print.

Considérations de performance :
• Deux méthodes définies mais une seule utilisée pour str.

Exemples :
• f'{C()}' utilise aussi __str__ par défaut.

Remarques :
• Réponse : I am C (1re option).`,

  2518: `print(obj) : quelle méthode en premier ?

Débutant :
• print convertit via str(), qui interroge __str__ avant __repr__.

Intermédiaire :
• Il n’existe pas de __print__ dans le modèle standard.

Expert :
• __format__ sert aux f-strings et format(), pas à print directement.

Concepts clés :
• Chaîne str → __str__ puis repli __repr__.

Distinctions clés :
• Ce n’est ni __format__ ni une seconde passe __repr__ si __str__ existe.

Fonctionnement :
• print *args sérialise chaque argument avec str.

Exécution étape par étape :
• str(obj) ; résolution __str__ ; encodage stdout.

Ordre des opérations :
• Évaluation des arguments de gauche à droite pour print.

Cas d'utilisation courants :
• Affichage CLI, notebooks.

Cas limites :
• Objet sans __str__ ni __repr__ valide → problème rare sur types builtins.

Considérations de performance :
• I/O domine souvent le coût.

Exemples :
• Classe avec seulement __repr__ : print tombe sur __repr__.

Remarques :
• Réponse : __str__ (1re option).`,

  2519: `f"{C():xyz}" avec __format__

Débutant :
• La partie après ':' est la spec ; __format__(self, 'xyz') retourne 'formatted:xyz'.

Intermédiaire :
• Même mécanisme que format(C(), 'xyz').

Expert :
• Les mini-langages numériques (f'{n:.2f}') sont gérés ailleurs ; ici spec libre.

Concepts clés :
• __format__ reçoit spec comme second argument.

Distinctions clés :
• Pas str() ni repr() seuls : la spec personnalise.

Fonctionnement :
• Construction C() ; évaluation f-string ; appel __format__.

Exécution étape par étape :
• spec='xyz' ; return f'formatted:{spec}' ; print.

Ordre des opérations :
• L’expression dans {} est évaluée avant le formatage.

Cas d'utilisation courants :
• Devises, unités, alignements domaine-spécifiques.

Cas limites :
• spec mal interprétée par votre code → ValueError maison possible.

Considérations de performance :
• f-string rapide ; évitez travail lourd dans __format__.

Exemples :
• f'{C():}' → spec vide.

Remarques :
• Réponse : formatted:xyz (1re option).`,

  2520: `bool(C()) avec __bool__ False

Débutant :
• __bool__ renvoie False → bool(C()) est False.

Intermédiaire :
• S’applique aussi dans if, while, and/or après appel bool implicite ou explicite.

Expert :
• Si __bool__ absent, Python peut utiliser __len__ comme repli.

Concepts clés :
• __bool__ contrôle la vérité de l’instance.

Distinctions clés :
• Ce n’est pas None ni une exception : un bool explicite False.

Fonctionnement :
• bool() appelle __bool__ si présent.

Exécution étape par étape :
• C() ; __bool__ ; False retourné.

Ordre des opérations :
• Appel direct de bool sur l’instance fraîche.

Cas d'utilisation courants :
• Sentinelles, objets « vides » métier.

Cas limites :
• __bool__ doit retourner bool (sinon TypeError en pratique).

Considérations de performance :
• Test O(1).

Exemples :
• if C(): ... ne s’exécute pas.

Remarques :
• Réponse : False (1re option).`,

  2521: `if C() avec __bool__ False et branche else

Débutant :
• La condition est fausse → branche else → r = 'no'.

Intermédiaire :
• print(r) affiche no sans appeler __bool__ deux fois pour la même ligne if.

Expert :
• Les court-circuits and/or n’évaluent pas le second opérande inutilement ; ici if simple.

Concepts clés :
• Contexte booléen déclenche __bool__.

Distinctions clés :
• Ce n’est pas 'yes' ni une erreur.

Fonctionnement :
• Test de vérité sur C() ; saut au else.

Exécution étape par étape :
• C() ; __bool__ False ; assignation r='no' ; print.

Ordre des opérations :
• if puis else ; une seule construction C() pour le test.

Cas d'utilisation courants :
• Flux selon l’état d’un objet.

Cas limites :
• Effets de bord dans __bool__ : exécutés une fois par test.

Considérations de performance :
• Négligeable.

Exemples :
• Variante Truthy avec return True → 'yes'.

Remarques :
• Réponse : no (1re option).`,

  2522: `bool(C()) avec __len__ 0 sans __bool__

Débutant :
• Sans __bool__, Python utilise __len__ ; 0 → faux.

Intermédiaire :
• Même logique que bool([]) pour les conteneurs intégrés.

Expert :
• Si ni __bool__ ni __len__, l’objet est considéré vrai par défaut.

Concepts clés :
• Protocole de vérité : __bool__ puis __len__.

Distinctions clés :
• __len__ 0 ici, pas une __bool__ explicite.

Fonctionnement :
• bool cherche __bool__ ; absent ; __len__ → 0 → False.

Exécution étape par étape :
• C() ; len via __len__ ; interprétation falsy.

Ordre des opérations :
• Résolution du protocole de vérité avant résultat final.

Cas d'utilisation courants :
• Conteneurs personnalisés « vides ».

Cas limites :
• __len__ négatif interdit (AssertionError interne / ValueError selon contexte).

Considérations de performance :
• Un entier comparé à 0.

Exemples :
• bool([1,2]) True via len implicite des listes.

Remarques :
• Réponse : False (1re option).`,

  2523: `bool(C()) avec __len__ 5 sans __bool__

Débutant :
• __len__ retourne 5 ≠ 0 → l’objet est considéré vrai.

Intermédiaire :
• Aligné sur « conteneur non vide » du modèle Python.

Expert :
• __len__ doit être un entier ≥ 0 ; sinon comportement indéfini / erreur.

Concepts clés :
• Longueur non nulle ⇒ truthy quand __bool__ absent.

Distinctions clés :
• Diffère du cas len 0 de la question précédente.

Fonctionnement :
• Fallback __len__ après absence de __bool__.

Exécution étape par étape :
• __len__ → 5 ; bool → True.

Ordre des opérations :
• Un seul chemin de protocole utilisé.

Cas d'utilisation courants :
• Files, buffers avec taille connue.

Cas limites :
• __bool__ et __len__ contradictoires si les deux existent : __bool__ prime.

Considérations de performance :
• O(1) si __len__ est trivial.

Exemples :
• class D: __len__ return 0 → False.

Remarques :
• Réponse : True (1re option).`,

  2524: `2 in C() avec __contains__

Débutant :
• __contains__(self, item) teste item in [1,2,3] → True pour 2.

Intermédiaire :
• not in appellerait aussi __contains__ puis niera le booléen.

Expert :
• Sans __contains__, Python pourrait itérer sur __iter__ / __getitem__.

Concepts clés :
• in délégué à __contains__ quand présent.

Distinctions clés :
• Ce n’est pas une erreur ni une recherche par index seul.

Fonctionnement :
• Opérateur in → bool sur le retour de __contains__.

Exécution étape par étape :
• C() ; appel __contains__(2) ; membership liste ; True.

Ordre des opérations :
• Opérande gauche du in puis droite.

Cas d'utilisation courants :
• Intervalles, ensembles logiques, masques.

Cas limites :
• __contains__ ne normalise pas toujours les types (hashables vs égalité).

Considérations de performance :
• Liste linéaire O(n) ici.

Exemples :
• 5 in C() → False (question suivante).

Remarques :
• Réponse : True (1re option).`,

  2525: `5 in C() avec __contains__

Débutant :
• 5 n’est pas dans [1,2,3] → False.

Intermédiaire :
• 5 not in C() serait True.

Expert :
• __contains__ peut court-circuiter avec des structures plus rapides (set interne).

Concepts clés :
• Même méthode que pour le test positif, valeur différente.

Distinctions clés :
• Ne pas confondre avec IndexError : ici simple booléen.

Fonctionnement :
• Appel __contains__(5) ; test in liste ; False.

Exécution étape par étape :
• C() ; 5 ; comparaisons internes de la liste.

Ordre des opérations :
• in évalue d’abord l’objet conteneur puis l’élément (ici ordre gauche-droite du in).

Cas d'utilisation courants :
• Validation « élément autorisé ».

Cas limites :
• item non comparable → erreur possible.

Considérations de performance :
• Linéaire sur la liste littérale.

Exemples :
• 1 in C() → True.

Remarques :
• Réponse : False (1re option).`,
};
