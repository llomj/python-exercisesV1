/** Level 8 FR 2526–2550 — level8_intermediate_a.ts Q26–50 (itération, __getitem__, context managers) */
export default {
  2526: `list(R(3)) : itérateur avec __iter__ et __next__

Débutant :
• R renvoie 1, 2, 3 puis StopIteration ; list agrège [1, 2, 3].

Intermédiaire :
• self sert à la fois d’itérable (__iter__ → self) et d’itérateur (__next__).

Expert :
• Un nouvel R(3) repart de i=0 ; ne pas réutiliser un itérateur épuisé sans le recréer.

Concepts clés :
• Protocole itérateur : __next__ lève StopIteration en fin.

Distinctions clés :
• Ce n’est pas [0,1,2] : l’incrément retourne i après +=1.

Fonctionnement :
• list() appelle iter puis next en boucle jusqu’à StopIteration.

Exécution étape par étape :
• i: 0→1 ret 1 ; 1→2 ret 2 ; 2→3 ret 3 ; i>=3 → StopIteration.

Ordre des opérations :
• Construction R(3) ; consommation complète par list.

Cas d'utilisation courants :
• Flux paresseux, pipelines, générateurs maison.

Cas limites :
• Oublier StopIteration → boucle infinie.

Considérations de performance :
• O(n) en temps et mémoire pour matérialiser la liste.

Exemples :
• list(R(0)) → [].

Remarques :
• Réponse : [1, 2, 3] (1re option).`,

  2527: `Deux méthodes obligatoires pour un itérateur

Débutant :
• __iter__ et __next__.

Intermédiaire :
• collections.abc.Iterator formalise ce duo.

Expert :
• Un itérable seul peut n’avoir que __iter__ qui renvoie un autre objet porteur de __next__.

Concepts clés :
• __iter__ renvoie self pour un itérateur classique.

Distinctions clés :
• __getitem__ seul peut suffire à l’ancien protocole de séquence, ce n’est pas la réponse attendue ici.

Fonctionnement :
• for et next() s’appuient sur ces hooks.

Exécution étape par étape :
• iter(o) ; répétition next jusqu’à StopIteration.

Ordre des opérations :
• Premier next après iter.

Cas d'utilisation courants :
• Toute boucle for sur objet personnalisé.

Cas limites :
• __next__ qui ne lève jamais StopIteration.

Considérations de performance :
• Coût par élément = travail dans __next__.

Exemples :
• Fichiers, générateurs, itertools.

Remarques :
• Réponse : __iter__ et __next__ (1re option).`,

  2528: `Que doit retourner __iter__ sur un objet qui est déjà un itérateur ?

Débutant :
• self — l’itérateur lui-même.

Intermédiaire :
• Cela garantit iter(it) is it pour beaucoup d’itérateurs.

Expert :
• Un conteneur comme list : list.__iter__ renvoie un nouvel objet list_iterator, pas la liste.

Concepts clés :
• Distinction itérable (souvent fabrique un itérateur) vs itérateur (se renvoie).

Distinctions clés :
• Pas une liste copiée ni None.

Fonctionnement :
• for appelle iter() une fois au début de la boucle.

Exécution étape par étape :
• iter(iterator) → __iter__ → self ; next(self) en boucle.

Ordre des opérations :
• __iter__ avant toute série de __next__.

Cas d'utilisation courants :
• Itérateurs stateful (position courante).

Cas limites :
• __iter__ qui renvoie un nouvel itérateur à chaque fois casse parfois les attentes sur self.

Considérations de performance :
• Retourner self est O(1).

Exemples :
• générateur : __iter__ implicite retourne self.

Remarques :
• Réponse : l’objet itérateur lui-même / self (1re option).`,

  2529: `Fin d’itération : que faire dans __next__ ?

Débutant :
• Lever StopIteration.

Intermédiaire :
• None n’est pas un signal d’arrêt fiable car None peut être une valeur valide.

Expert :
• Les générateurs lèvent StopIteration automatiquement à la fin du corps.

Concepts clés :
• StopIteration est le contrat du protocole, pas une « erreur » utilisateur.

Distinctions clés :
• Pas ValueError ni return False comme fin standard.

Fonctionnement :
• Les consommateurs (for, list) attrapent StopIteration en interne.

Exécution étape par étape :
• Tant qu’il reste des valeurs : return valeur ; sinon : raise StopIteration.

Ordre des opérations :
• Chaque next est indépendant jusqu’à épuisement.

Cas d'utilisation courants :
• Toute itération finie.

Cas limites :
• En Python 3.7+, générateur avec return expr alimente StopIteration.value.

Considérations de performance :
• Exception comme flux de contrôle : coût acceptable en CPython pour la fin seule.

Exemples :
• next(it) sur itérateur vide lève StopIteration.

Remarques :
• Réponse : Lever StopIteration (1re option).`,

  2530: `list(C()) quand __iter__ délègue à iter([1,2,3])

Débutant :
• __iter__ renvoie un list_iterator sur [1,2,3] ; list matérialise la même suite.

Intermédiaire :
• C n’a pas besoin de __next__ : ce n’est pas un itérateur, seulement un itérable.

Expert :
• Chaque for list(C()) obtient un nouvel iterateur frais.

Concepts clés :
• Délégation à un itérable existant.

Distinctions clés :
• Pas [C()] ni erreur.

Fonctionnement :
• iter(C()) → __iter__ → iter liste builtin.

Exécution étape par étape :
• Création C ; obtention itérateur liste ; consommation → [1,2,3].

Ordre des opérations :
• __iter__ appelé une fois par consommateur neuf.

Cas d'utilisation courants :
• Adaptateurs autour de structures internes.

Cas limites :
• Si __iter__ renvoie un itérateur déjà épuisé partagé globalement → surprises.

Considérations de performance :
• Même coût qu’itérer la liste directement + une couche d’appel.

Exemples :
• tuple(C()) → (1,2,3).

Remarques :
• Réponse : [1, 2, 3] (1re option).`,

  2531: `list(C()) via __getitem__ sans __iter__

Débutant :
• Python tente des indices 0,1,2… jusqu’à IndexError ; valeurs 0,10,20.

Intermédiaire :
• Ancien protocole de séquence pour l’itération.

Expert :
• __getitem__ avec slice n’est pas utilisé ici : indices entiers successifs.

Concepts clés :
• IndexError termine l’itération comme StopIteration pour ce chemin.

Distinctions clés :
• Pas [10,20,30] (pas de décalage +10 sur l’indice).

Fonctionnement :
• iter() crée un iterator protocol fallback sequence.

Exécution étape par étape :
• i=0→0 ; i=1→10 ; i=2→20 ; i=3 IndexError ; arrêt.

Ordre des opérations :
• Ordre croissant strict des indices entiers.

Cas d'utilisation courants :
• Séquences légères sans classe itérateur dédiée.

Cas limites :
• Oublier IndexError → itération infinie ou erreur tardive.

Considérations de performance :
• Un appel __getitem__ par élément.

Exemples :
• C()[1] isolé → 10.

Remarques :
• Réponse : [0, 10, 20] (1re option).`,

  2532: `Squares(4) : __iter__ générateur avec yield

Débutant :
• i parcourt range(4) ; carrés 0,1,4,9.

Intermédiaire :
• __iter__ contenant yield en fait une fonction génératrice : retourne un générateur neuf.

Expert :
• Chaque appel Squares(4).__iter__() produit un iterator indépendant.

Concepts clés :
• yield suspend et reprend ; StopIteration implicite en fin.

Distinctions clés :
• Pas [1,4,9,16] (ce serait (1..4)**2 sans le 0 initial ni mauvaise plage).

Fonctionnement :
• list prend le générateur et le vide.

Exécution étape par étape :
• n=4 ; i=0..3 ; yields 0,1,4,9.

Ordre des opérations :
• range(self.n) évalué à chaque __iter__.

Cas d'utilisation courants :
• Itération paresseuse lisible.

Cas limites :
• Générateur non réutilisable après épuisement.

Considérations de performance :
• Pas de liste intermédiaire des carrés en mémoire dans le générateur seul.

Exemples :
• list(Squares(0)) → [].

Remarques :
• Réponse : [0, 1, 4, 9] (1re option).`,

  2533: `__iter__ avec trois yield constants

Débutant :
• Le générateur produit 1 puis 2 puis 3 ; list → [1,2,3].

Intermédiaire :
• Pas besoin de raise StopIteration explicite.

Expert :
• sum(C()) fonctionnerait aussi (6).

Concepts clés :
• Séquence figée en contrôle de flux yield.

Distinctions clés :
• Pas une seule valeur ni erreur.

Fonctionnement :
• Chaque yield est une « pause » avec valeur.

Exécution étape par étape :
• Enter __iter__ ; generator ; trois next internes ; fin.

Ordre des opérations :
• Ordre textuel des yield.

Cas d'utilisation courants :
• Enchaînements simples, tests de protocole.

Cas limites :
• Générateur : une seule passe.

Considérations de performance :
• Très léger.

Exemples :
• for x in C(): print(x).

Remarques :
• Réponse : [1, 2, 3] (1re option).`,

  2534: `reversed(C()) avec __reversed__

Débutant :
• __reversed__ renvoie iter([3,2,1]) ; list consomme dans cet ordre.

Intermédiaire :
• Sans __reversed__, reversed() exigerait __len__+__getitem__ pour un fallback.

Expert :
• Doit retourner un itérateur, pas une liste matérialisée obligatoirement (ici iter sur liste).

Concepts clés :
• Hook du builtin reversed.

Distinctions clés :
• Pas l’ordre avant [1,2,3] ni None.

Fonctionnement :
• reversed appelle __reversed__ si présent sur le type.

Exécution étape par étape :
• C() ; __reversed__ ; itérateur ; matérialisation.

Ordre des opérations :
• reversed construit puis list lit.

Cas d'utilisation courants :
• Parcours inverse optimisé (arbres, deque).

Cas limites :
• Oublier de retourner un itérateur → TypeError.

Considérations de performance :
• Ici coût O(n) de la liste littérale [3,2,1].

Exemples :
• for x in reversed(C()): …

Remarques :
• Réponse : [3, 2, 1] (1re option).`,

  2535: `Boucle for sur un objet avec __iter__

Débutant :
• Oui : __iter__ suffit pour être itérable ; l’itérateur retourné porte __next__.

Intermédiaire :
• Seul __getitem__ peut aussi suffire (ancien style) mais ce n’est pas la réponse « oui » ici.

Expert :
• iter() vérifie __iter__ avant la séquence __getitem__.

Concepts clés :
• Itérable = __iter__ qui fournit un protocole next.

Distinctions clés :
• __iter__ seul sur la classe ne suffit pas si ce qu’il retourne n’a pas __next__.

Fonctionnement :
• for dé-sucré en iter + next.

Exécution étape par étape :
• Appel __iter__ ; boucle next jusqu’à StopIteration.

Ordre des opérations :
• Une fois iter au début du for.

Cas d'utilisation courants :
• Toute collection ou flux personnalisé.

Cas limites :
• __iter__ qui retourne None → TypeError au next.

Considérations de performance :
• Identique au consommateur (list, sum, etc.).

Exemples :
• class C: def __iter__(self): return iter([1,2]).

Remarques :
• Réponse : Oui (1re option).`,

  2536: `Que retourne iter([1, 2, 3]) ?

Débutant :
• Un objet list_iterator, pas la liste elle-même.

Intermédiaire :
• type(iter([])) est list_iterator en CPython.

Expert :
• Deux appels iter(même_liste) donnent deux itérateurs indépendants.

Concepts clés :
• Séparation données (list) vs curseur (iterator).

Distinctions clés :
• Pas un générateur utilisateur ni un tuple.

Fonctionnement :
• list.__iter__ fabrique l’itérateur C interne.

Exécution étape par étape :
• Création liste ; iter ; objet itérateur prêt sur index 0.

Ordre des opérations :
• iter prend l’itérable déjà construit.

Cas d'utilisation courants :
• Parcours manuel avec next.

Cas limites :
• itérateur épuisé : next lève StopIteration.

Considérations de performance :
• Très léger, pointeur d’index.

Exemples :
• it = iter([1,2,3]); next(it) → 1.

Remarques :
• Réponse : un objet list_iterator (1re option).`,

  2537: `next(iter([1, 2, 3]))

Débutant :
• Premier élément de la liste : 1.

Intermédiaire :
• iter(...) crée un itérateur temporaire ; next le fait avancer une fois puis l’objet est jeté.

Expert :
• next(it, default) évite StopIteration sur itérateur vide.

Concepts clés :
• Composition iter puis next.

Distinctions clés :
• Pas la liste entière ni None.

Fonctionnement :
• __next__ du list_iterator.

Exécution étape par étape :
• Construire iter ; premier next ; valeur 1.

Ordre des opérations :
• Appel interne gauche-droche : iter d’abord, next ensuite.

Cas d'utilisation courants :
• « Premier élément » idiomatique (parfois déconseillé sans default).

Cas limites :
• iter([]) puis next → StopIteration.

Considérations de performance :
• O(1).

Exemples :
• next(iter('abc')) → 'a'.

Remarques :
• Réponse : 1 (1re option).`,

  2538: `C()[1] avec __getitem__ sur [10,20,30]

Débutant :
• Index 1 → 20.

Intermédiaire :
• __len__ n’est pas requis pour un simple index si __getitem__ gère.

Expert :
• Les slices passeraient un objet slice à __getitem__.

Concepts clés :
• [] dispatch vers __getitem__(self, key).

Distinctions clés :
• Pas 10 (indice 0) ni 30.

Fonctionnement :
• Évaluation C() puis application [] avec i=1.

Exécution étape par étape :
• __getitem__(1) → [10,20,30][1] → 20.

Ordre des opérations :
• Création instance avant souscript.

Cas d'utilisation courants :
• Wrappers de séquences, accès paresseux.

Cas limites :
• Index hors plage → IndexError de la liste interne.

Considérations de performance :
• Accès O(1) à la liste interne.

Exemples :
• C()[0] → 10.

Remarques :
• Réponse : 20 (1re option).`,

  2539: `len(C()) avec __len__ retournant 3

Débutant :
• len appelle __len__ → 3.

Intermédiaire :
• bool(C()) serait True ici sans __bool__ (longueur non nulle).

Expert :
• __len__ doit être un entier >= 0 ; sinon violation du protocole.

Concepts clés :
• Builtin len → __len__.

Distinctions clés :
• Pas la valeur d’un élément (30) ni 0.

Fonctionnement :
• C() ; len ; dispatch.

Exécution étape par étape :
• __len__ exécuté ; retour 3 ; affichage.

Ordre des opérations :
• len a priorité sur accès [] ici.

Cas d'utilisation courants :
• Rapports de taille, contrats de conteneur.

Cas limites :
• __len__ menteur vs __getitem__ incohérent → bugs subtils.

Considérations de performance :
• O(1) attendu.

Exemples :
• len(C()) utilisé avant itération.

Remarques :
• Réponse : 3 (1re option).`,

  2540: `Itérable vs itérateur

Débutant :
• Itérable : __iter__ qui fournit un itérateur. Itérateur : __iter__ (self) + __next__.

Intermédiaire :
• Tout itérateur est itérable, l’inverse est faux (ex. list).

Expert :
• Generator est un itérateur mais aussi itérable (iter(gen) est gen).

Concepts clés :
• Deux niveaux du protocole d’itération.

Distinctions clés :
• Pas « identiques » ni inversion des rôles dans les propositions fausses.

Fonctionnement :
• for utilise toujours un itérateur concret en interne.

Exécution étape par étape :
• iter() sur itérable ; puis next() répété.

Ordre des opérations :
• iter avant la série de next.

Cas d'utilisation courants :
• Concevoir API de collections.

Cas limites :
• Itérable qui se consume (fichier) : un seul « curseur » partagé si mal utilisé.

Considérations de performance :
• Fabriquer un itérateur neuf peut être O(1) ou O(n) selon type.

Exemples :
• [1,2,3] itérable ; iter([1,2,3]) itérateur.

Remarques :
• Réponse : Itérable a __iter__ ; itérateur a __iter__ et __next__ (1re option).`,

  2541: `Gestionnaire de contexte : deux méthodes

Débutant :
• __enter__ et __exit__.

Intermédiaire :
• with dé-sucré en try/finally avec appels protocolaires.

Expert :
• contextlib.ExitStack compose plusieurs __exit__ en ordre inverse.

Concepts clés :
• Setup au entrée, teardown garanti à la sortie.

Distinctions clés :
• Pas __init__/__del__ comme couple protocolaire du with.

Fonctionnement :
• PEP 343 — Context management protocol.

Exécution étape par étape :
• __enter__ ; bloc ; __exit__ même si exception.

Ordre des opérations :
• __enter__ avant le corps du with.

Cas d'utilisation courants :
• Fichiers, verrous, transactions.

Cas limites :
• __exit__ qui lève peut masquer l’exception primaire (chaînage).

Considérations de performance :
• Coût négligeable vs I/O réelle.

Exemples :
• open() comme CM.

Remarques :
• Réponse : __enter__ et __exit__ (1re option).`,

  2542: `with CM() as r et __enter__ retournant 'resource'

Débutant :
• r lie la valeur de retour de __enter__ ; print affiche resource.

Intermédiaire :
• __exit__ reçoit *a pour (exc_type, exc_val, exc_tb).

Expert :
• Pas d’as : la valeur de __enter__ est ignorée pour liaison mais __exit__ toujours appelé.

Concepts clés :
• Liaison 'as' = résultat de __enter__, pas l’instance CM seule.

Distinctions clés :
• Pas None ni la représentation par défaut de CM.

Fonctionnement :
• with appelle __enter__ sur le résultat de CM().

Exécution étape par étape :
• CM() ; __enter__ → str ; r ; print ; __exit__.

Ordre des opérations :
• __enter__ strictement avant le corps.

Cas d'utilisation courants :
• Exposer une ressource différente du manager.

Cas limites :
• __enter__ async (hors sujet sync) : autre protocole.

Considérations de performance :
• N/A.

Exemples :
• open renvoie le fichier lui-même.

Remarques :
• Réponse : resource (1re option).`,

  2543: `Que retourne __enter__ ?

Débutant :
• La valeur liée après as (s’il y a as).

Intermédiaire :
• Souvent self du manager, mais pas obligatoire.

Expert :
• Sans as, le retour est jeté sauf effets de bord.

Concepts clés :
• Pont entre manager et bloc utilisateur.

Distinctions clés :
• Pas « rien » systématique ni la classe elle-même par défaut.

Fonctionnement :
• with EXPR as VAR : VAR = valeur de __enter__().

Exécution étape par étape :
• Évaluation EXPR ; __enter__ ; liaison.

Ordre des opérations :
• __enter__ après création du manager.

Cas d'utilisation courants :
• curseur DB, fichier, verrou acquis.

Cas limites :
• Retour None explicite : VAR est None.

Considérations de performance :
• N/A.

Exemples :
• return self pattern.

Remarques :
• Réponse : la valeur liée à la variable après as (1re option).`,

  2544: `Arguments de __exit__

Débutant :
• Type d’exception, valeur, traceback — ou trois None si pas d’exception.

Intermédiaire :
• Permet journalisation, rollback, suppression sélective.

Expert :
• Retour True supprime l’exception ; False/None la propage après __exit__.

Concepts clés :
• Signature __exit__(self, exc_type, exc_val, exc_tb).

Distinctions clés :
• Pas zéro argument ni le retour de __enter__ automatiquement.

Fonctionnement :
• Python passe les infos d’exception au gestionnaire.

Exécution étape par étape :
• Fin normale → None,None,None ; exception → objets réels.

Ordre des opérations :
• __exit__ s’exécute avant propagation finale.

Cas d'utilisation courants :
• finally logique encapsulée.

Cas limites :
• __exit__ qui ne respecte pas le contrat de retour bool.

Considérations de performance :
• N/A.

Exemples :
• if exc_type is not None: cleanup.

Remarques :
• Réponse : type, valeur et traceback (1re option).`,

  2545: `__exit__ qui retourne True

Débutant :
• L’exception du bloc with est supprimée (ne se propage pas).

Intermédiaire :
• À utiliser avec parcimonie — peut masquer des bugs.

Expert :
• contextlib.suppress encode ce motif pour des types donnés.

Concepts clés :
• Booléen de sortie comme interrupteur de propagation.

Distinctions clés :
• Pas relancer automatiquement ni simple log par défaut.

Fonctionnement :
• Après __exit__ True, l’interprète continue après le with.

Exécution étape par étape :
• Exception → __exit__ avec infos → True → silence.

Ordre des opérations :
• __exit__ tourne avant de décider propagation.

Cas d'utilisation courants :
• Erreurs attendues, prototypes.

Cas limites :
• Masquer trop large → débogage difficile.

Considérations de performance :
• N/A.

Exemples :
• with Suppress(): raise ValueError — continue si True.

Remarques :
• Réponse : supprime l’exception (1re option).`,

  2546: `contextlib.contextmanager comme alternative

Débutant :
• Oui : décorateur sur une fonction générateur avec yield.

Intermédiaire :
• Code avant yield ~ __enter__ ; après yield ~ __exit__.

Expert :
• Gestion des exceptions injecte du code autour du yield par le décorateur.

Concepts clés :
• Generator-based context manager.

Distinctions clés :
• Pas réservé aux fichiers ni à Python 2.

Fonctionnement :
• contextlib transforme yield en protocole __enter__/__exit__.

Exécution étape par étape :
• Entrée ; yield valeur ; sortie normale ou avec exception.

Ordre des opérations :
• Un seul yield typique pour la ressource.

Cas d'utilisation courants :
• CM légers sans classe.

Cas limites :
• Oublier yield unique → RuntimeError du décorateur.

Considérations de performance :
• Légère surcharge vs classe pure.

Exemples :
• @contextmanager def cm(): print(1); yield; print(2).

Remarques :
• Réponse : Oui, avec une fonction générateur (1re option).`,

  2547: `open("file.txt") dans with open(...) as f

Débutant :
• Un objet fichier qui implémente aussi le protocole context manager.

Intermédiaire :
• __enter__ renvoie le fichier ; __exit__ ferme.

Expert :
• Le type exact (TextIOWrapper, etc.) dépend du mode et de l’implémentation.

Concepts clés :
• open ≠ chaîne de caractères du chemin.

Distinctions clés :
• Pas une liste de lignes ni un entier fd brut (sans .as fd).

Fonctionnement :
• with garantit close via __exit__.

Exécution étape par étape :
• open ; __enter__ bind f ; utilisation ; __exit__ close.

Ordre des opérations :
• Ressource vivante avant lecture.

Cas d'utilisation courants :
• I/O texte ou binaire.

Cas limites :
• FileNotFoundError avant même d’entrer dans with si fichier absent.

Considérations de performance :
• I/O domine.

Exemples :
• f.closed True après bloc.

Remarques :
• Réponse : objet fichier + context manager (1re option).`,

  2548: `Exception dans le bloc with

Débutant :
• __exit__ est quand même appelée avec les infos d’exception.

Intermédiaire :
• Puis propagation sauf si __exit__ retourne True.

Expert :
• Si plusieurs managers, __exit__ en ordre inverse d’entrée.

Concepts clés :
• Garantie de nettoyage type finally.

Distinctions clés :
• Pas crash immédiat sans cleanup ni rappel de __enter__.

Fonctionnement :
• Python appelle __exit__ lors de la sortie exceptionnelle.

Exécution étape par étape :
• raise dans bloc ; __exit__(type,val,tb) ; propagation selon retour.

Ordre des opérations :
• __exit__ avant continuation hors with.

Cas d'utilisation courants :
• Fermeture fichier même si read échoue.

Cas limites :
• __exit__ elle-même lève : exception secondaire peut se combiner.

Considérations de performance :
• N/A.

Exemples :
• journaliser exc_val puis return False.

Remarques :
• Réponse : __exit__ appelée avec les infos d’exception (1re option).`,

  2549: `Imbrication et plusieurs managers dans un with

Débutant :
• Oui : with imbriqués ou with A() as a, B() as b: (depuis longtemps).

Intermédiaire :
• Python 3.10+ permet parenthèses multi-lignes pour lisibilité.

Expert :
• Les __exit__ sont invoquées dans l’ordre inverse des __enter__.

Concepts clés :
• Composition de ressources indépendantes.

Distinctions clés :
• Pas limité à une seule ligne ni réservé 3.10 pour la forme comma (parenthèses 3.10+).

Fonctionnement :
• Équivalent à des with imbriqués pour sémantique d’entrée/sortie.

Exécution étape par étape :
• enter A ; enter B ; corps ; exit B ; exit A.

Ordre des opérations :
• Inverse pour cleanup = pile.

Cas d'utilisation courants :
• Copie entre deux fichiers, lock + section critique.

Cas limites :
• Si B.__enter__ échoue, A.__exit__ est quand même garanti (PEP).

Considérations de performance :
• N coûts d’entrée/sortie.

Exemples :
• with open('in') as fin, open('out','w') as fout: ...

Remarques :
• Réponse : oui, imbrication et plusieurs items (1re option).`,

  2550: `Rôle des context managers

Débutant :
• Garantir le nettoyage (fermeture, libération) même si une exception survient.

Intermédiaire :
• Rapprochement RAII : acquisition + cleanup liés.

Expert :
• Réduit fuites de descripteurs, verrous non relâchés, transactions non commit/rollback.

Concepts clés :
• __exit__ toujours tentée à la sortie du bloc.

Distinctions clés :
• Pas accélération magique ni création de globales par essence.

Fonctionnement :
• with comme sucre pour try/finally structuré.

Exécution étape par étape :
• Entrée ressource ; travail ; sortie contrôlée.

Ordre des opérations :
• Cleanup après corps ou exception.

Cas d'utilisation courants :
• open, threading.Lock, tempfile, tests mock.patch.

Cas limites :
• Process kill -9 : pas de __exit__ possible.

Considérations de performance :
• Overhead minime face au coût des ressources.

Exemples :
• with lock: section critique.

Remarques :
• Réponse : assurer le nettoyage même en cas d’exception (1re option).`,
};
