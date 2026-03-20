/** French detailed explanations Level 10 — bank IDs 3026–3050 (level10Patterns Q26–Q50). */
export default {
  3026: `@contextmanager, def my_context(): yield 1 ; with my_context() as x: x ?

Débutant :
• Le décorateur transforme un générateur en gestionnaire de contexte.

Intermédiaire :
• yield fournit la valeur liée après as ; code avant/après = setup/teardown.

Expert :
• yield doit être unique par entrée ; exceptions propagées via le générateur selon les règles de contextlib.

Concepts clés :
• CM sans classe, via générateur.

Distinctions clés :
• @contextmanager vs classe __enter__/__exit__.

Fonctionnement :
• contextlib enveloppe le générateur pour implémenter le protocole.

Exécution étape par étape :
1. Entrée dans with démarre le générateur jusqu'au yield.
2. La valeur yieldée (1) est assignée à x.
3. Corps du with ; sortie déclenche la fin du générateur (finally implicite).

Ordre des opérations :
• yield suspend ; reprise au départ du with.

Cas d'utilisation courants :
• Verrous, changement temporaire de répertoire, instrumentation.

Cas limites :
• Oublier yield → RuntimeError au runtime du CM.

Considérations de performance :
• Léger surcoût par rapport à CM C pur ; négligeable en pratique.

Exemples :
• @contextmanager
  def temp_cd(d):
      old = os.getcwd()
      os.chdir(d)
      try:
          yield
      finally:
          os.chdir(old)

Remarques :
• Réponse : 1 — 1re option.`,
  3027: `with open('file', 'w') as f: f.write('text') ; f.closed ?

Débutant :
• Après le with, le fichier est fermé : closed vaut True.

Intermédiaire :
• Même si write a réussi sans lever.

Expert :
• Si __exit__ de open propage une erreur de fermeture, comportement selon la pile d'exceptions.

Concepts clés :
• État du descripteur de fichier après CM.

Distinctions clés :
• closed vs readable() encore vrai sur autre handle.

Fonctionnement :
• __exit__ appelle close() sur l'objet fichier.

Exécution étape par étape :
1. open en mode écriture.
2. write.
3. sortie du with → fermeture.
4. f.closed → True.

Ordre des opérations :
• Lecture de l'attribut après __exit__.

Cas d'utilisation courants :
• Garantir flush/close pour logs et exports.

Cas limites :
• Réutiliser f après with : fichier fermé, I/O impossible.

Considérations de performance :
• close synchronise le buffer ; important sur disque lent.

Exemples :
• Vérifier f.closed dans des tests d'intégration.

Remarques :
• Réponse : True — 1re option.`,
  3028: `with open('file', 'w') as f1, open('file2', 'w') as f2: pass ?

Débutant :
• Syntaxe Python pour plusieurs gestionnaires sur une ligne with.

Intermédiaire :
• Équivalent à des with imbriqués : f1 puis f2, sortie inverse.

Expert :
• PEP 343 : __enter__ de gauche à droite, __exit__ de droite à gauche.

Concepts clés :
• Composition de ressources symétriques.

Distinctions clés :
• Une ligne vs blocs imbriqués (lisibilité).

Fonctionnement :
• Chaînage des entrées/sorties de contexte.

Exécution étape par étape :
1. Entrée f1.
2. Entrée f2.
3. pass.
4. __exit__ f2.
5. __exit__ f1.

Ordre des opérations :
• Ordre inverse à la fermeture pour respecter les dépendances usuelles.

Cas d'utilisation courants :
• Copie entre deux fichiers, merge de flux.

Cas limites :
• Si l'open du second échoue, le premier est quand même sorti proprement.

Considérations de performance :
• Deux descripteurs ; surveiller ulimit sur serveurs.

Exemples :
• with open(src) as i, open(dst,'w') as o: o.write(i.read()).

Remarques :
• Réponse : plusieurs gestionnaires de contexte — 1re option.`,
  3029: `from contextlib import suppress ; with suppress(ValueError): raise ValueError() ?

Débutant :
• suppress étouffe les types d'exceptions listés dans le bloc.

Intermédiaire :
• Ici ValueError ne remonte pas.

Expert :
• Implémenté comme CM dont __exit__ retourne True si le type correspond.

Concepts clés :
• Forme lisible pour « ignorer cette erreur attendue ».

Distinctions clés :
• suppress vs try/except: pass explicite.

Fonctionnement :
• Enregistre les classes à filtrer ; compare à l'exception active.

Exécution étape par étape :
1. Entrée dans suppress.
2. raise ValueError.
3. __exit__ filtre → pas de propagation.

Ordre des opérations :
• Après le bloc, exécution continue normalement.

Cas d'utilisation courants :
• getattr avec défaut, parsing optionnel.

Cas limites :
• Ne pas masquer des ValueError inattendues dans le même bloc large.

Considérations de performance :
• Identique à un petit try/except.

Exemples :
• with suppress(FileNotFoundError): os.remove(tmp).

Remarques :
• Réponse : supprime ValueError (ne la propage pas) — 1re option.`,
  3030: `ctx = MyContext() ; with ctx: pass ; après __exit__ qui pose self.closed = True ?

Débutant :
• __exit__ a tourné ; l'attribut closed sur l'instance vaut True.

Intermédiaire :
• ctx reste l'instance ; seul l'état change.

Expert :
• Pattern « marquer la ressource comme fermée » pour tests ou garde-fous.

Concepts clés :
• Effet de bord d'instance après CM.

Distinctions clés :
• État interne vs variable locale du with.

Fonctionnement :
• __exit__ muté self avant retour.

Exécution étape par étape :
1. ctx créé.
2. with utilise ctx comme manager.
3. __exit__ assigne closed.
4. ctx.closed lu → True.

Ordre des opérations :
• Lecture après sortie complète du with.

Cas d'utilisation courants :
• Pools de connexions, indicateurs is_active.

Cas limites :
• Si __exit__ lève, closed peut ne pas être positionné selon où l'assignation est.

Considérations de performance :
• Négligeable.

Exemples :
• assert conn.closed après with.

Remarques :
• Réponse : True — 1re option.`,
  3031: `Que fait import module ?

Débutant :
• Charge le module et le rend accessible via le nom module.

Intermédiaire :
• Premier import exécute le corps du fichier ; suivants utilisent sys.modules.

Expert :
• Cherche sur sys.path ; packages via __path__.

Concepts clés :
• Unité de compilation/reuse du code Python.

Distinctions clés :
• import module vs from module import x.

Fonctionnement :
• Crée ou récupère le module dans sys.modules ; lie le nom local.

Exécution étape par étape :
1. Résolution du chemin.
2. Chargement bytecode éventuel.
3. Exécution top-level.
4. Liaison du nom.

Ordre des opérations :
• Imports au chargement, pas à la demande paresseuse sauf importlib.

Cas d'utilisation courants :
• Réutiliser math, os, collections.

Cas limites :
• Import circulaire : demi-module initialisé.

Considérations de performance :
• Coût amorti par cache ; import dans boucle à éviter.

Exemples :
• import json ; json.loads(...).

Remarques :
• Réponse : importe un module — 1re option.`,
  3032: `Que fait from module import name ?

Débutant :
• Importe un symbole précis dans l'espace de noms courant.

Intermédiaire :
• Le module entier peut être chargé même si un seul nom est exposé localement.

Expert :
• name peut être réassigné localement sans toucher le module source.

Concepts clés :
• Import sélectif pour lisibilité.

Distinctions clés :
• Préfixe module. vs nom nu.

Fonctionnement :
• getattr(module, 'name') puis bind local.

Exécution étape par étape :
1. Charger module si besoin.
2. Résoudre name.
3. Lier dans le namespace courant.

Ordre des opérations :
• Échec si name absent → ImportError.

Cas d'utilisation courants :
• from pathlib import Path.

Cas limites :
• Masquer un builtin du même nom.

Considérations de performance :
• Équivalent à import module + alias local.

Exemples :
• from math import sqrt.

Remarques :
• Réponse : importe le nom depuis le module — 1re option.`,
  3033: `Que fait from module import name as alias ?

Débutant :
• Le symbole est disponible sous alias dans le scope courant.

Intermédiaire :
• Évite collision avec une variable name existante.

Expert :
• alias est une simple liaison ; pas de copie profonde de l'objet.

Concepts clés :
• Renommage à l'import.

Distinctions clés :
• import module as m vs from ... import ... as.

Fonctionnement :
• Même résolution que from-import puis bind sur alias.

Exécution étape par étape :
1. Charger module.
2. Résoudre name.
3. Stocker sous alias.

Ordre des opérations :
• name d'origine pas forcément visible dans le scope.

Cas d'utilisation courants :
• from datetime import datetime as DT.

Cas limites :
• Trop d'alias obscurcit la lecture.

Considérations de performance :
• Négligeable.

Exemples :
• import numpy as np (forme parallèle sur module entier).

Remarques :
• Réponse : import avec alias — 1re option.`,
  3034: `Que fait import module as alias ?

Débutant :
• Le module entier est accessible via alias.

Intermédiaire :
• alias.sqrt au lieu de module.sqrt.

Expert :
• Courant dans l'écosystème scientifique (np, pd).

Concepts clés :
• Raccourci pour préfixes longs.

Distinctions clés :
• Alias de module vs alias de membre.

Fonctionnement :
• sys.modules['module'] lié localement sous alias.

Exécution étape par étape :
1. Charger module.
2. Bind alias → objet module.

Ordre des opérations :
• Le nom module brut peut être absent du scope local.

Cas d'utilisation courants :
• import matplotlib.pyplot as plt.

Cas limites :
• Deux alias vers le même module : deux noms, un objet.

Considérations de performance :
• Négligeable.

Exemples :
• import queue as Q.

Remarques :
• Réponse : importe le module sous un alias — 1re option.`,
  3035: `Que fait from module import * ?

Débutant :
• Importe en masse les noms publics du module dans le scope local.

Intermédiaire :
• Si __all__ existe, seulement les noms listés ; sinon heuristique sans _ leading.

Expert :
• Interdit dans __init__.py de package par bonnes pratiques PEP 8.

Concepts clés :
• Pollution de namespace.

Distinctions clés :
• Étoile vs imports explicites.

Fonctionnement :
• Itération sur les noms retenus ; setattr sur le namespace.

Exécution étape par étape :
1. Charger module.
2. Déterminer l'ensemble public.
3. Copier les liaisons.

Ordre des opérations :
• Peut écraser des noms existants sans avertissement.

Cas d'utilisation courants :
• Shell interactif rapide seulement.

Cas limites :
• Conflits de noms silencieux.

Considérations de performance :
• Un peu plus lourd que un seul import ciblé.

Exemples :
• Éviter en production ; préférer noms explicites.

Remarques :
• Réponse : importe tous les noms publics — 1re option.`,
  3036: `Que teste __name__ == '__main__' ?

Débutant :
• Vrai si le fichier est exécuté comme script, pas seulement importé.

Intermédiaire :
• Lors d'un import, __name__ vaut le nom du module.

Expert :
• Permet dual mode bibliothèque + CLI.

Concepts clés :
• Point d'entrée conditionnel.

Distinctions clés :
• __name__ vs __file__ vs __package__.

Fonctionnement :
• L'interpréteur positionne __name__ au chargement.

Exécution étape par étape :
1. Lancement python fichier.py → __main__.
2. import monpaquet → monpaquet.

Ordre des opérations :
• Test souvent en fin de module.

Cas d'utilisation courants :
• if __name__ == '__main__': main().

Cas limites :
• -m package.module : __name__ peut être __main__ pour le point d'entrée du module lancé.

Considérations de performance :
• Test constant ; coût nul.

Exemples :
• Lancer des tests locaux sans effet à l'import.

Remarques :
• Réponse : vérifie exécution directe du script — 1re option.`,
  3037: `Que fait if __name__ == '__main__': pass ?

Débutant :
• Le bloc ne s'exécute que dans le scénario script principal.

Intermédiaire :
• pass ici : motif structurel pour accrocher plus tard main().

Expert :
• Idiome standard documenté dans la doc officielle.

Concepts clés :
• Garde d'entrée pour code non réimportable.

Distinctions clés :
• vs code top-level toujours exécuté.

Fonctionnement :
• Branchement sur la valeur de __name__.

Exécution étape par étape :
1. Évaluer __name__.
2. Comparer à '__main__'.
3. Exécuter pass si vrai.

Ordre des opérations :
• Comme tout if.

Cas d'utilisation courants :
• CLI, démos, benchmarks.

Cas limites :
• Tests qui importent le module : bloc non joué.

Considérations de performance :
• Négligeable.

Exemples :
• Placer argparse ou click ici.

Remarques :
• Réponse : n'exécute le bloc que si le fichier est lancé en script — 1re option.`,
  3038: `Que vaut import sys ; sys.path ?

Débutant :
• Liste des répertoires (et zip) où Python cherche les modules.

Intermédiaire :
• On peut y append un chemin perso avant import dynamique.

Expert :
• sys.path[0] script directory ou '' selon mode -c / REPL.

Concepts clés :
• Résolution d'import configurable.

Distinctions clés :
• sys.path vs PYTHONPATH vs .pth.

Fonctionnement :
• Parcours séquentiel jusqu'au premier module trouvé.

Exécution étape par étape :
1. import sys charge le module sys.
2. sys.path retourne la liste mutable.

Ordre des opérations :
• Lecture de l'attribut path du module.

Cas d'utilisation courants :
• Déboguer ModuleNotFoundError.

Cas limites :
• Modifier en cours d'exécution : effets sur imports suivants seulement.

Considérations de performance :
• Trop de chemins ralentit la résolution.

Exemples :
• sys.path.insert(0, root) en test.

Remarques :
• Réponse : liste des chemins de recherche de modules — 1re option.`,
  3039: `Que définit __all__ = ['name1', 'name2'] ?

Débutant :
• Liste les symboles exportés pour from module import *.

Intermédiaire :
• Sert aussi de documentation de l'API publique.

Expert :
• N'empêche pas from module import _privé si on connaît le nom.

Concepts clés :
• Contrat d'exposition explicite.

Distinctions clés :
• __all__ absent vs présent.

Fonctionnement :
• Le import * consulte __all__ s'il est défini non vide.

Exécution étape par étape :
1. À l'import *, lecture de __all__.
2. Import des noms énumérés.

Ordre des opérations :
• Erreur si __all__ contient un nom inexistant.

Cas d'utilisation courants :
• Packages : __all__ dans __init__.py.

Cas limites :
• __all__ avec string au lieu de liste : erreur.

Considérations de performance :
• Négligeable.

Exemples :
• __all__ = ['foo'] pour cacher helpers internes.

Remarques :
• Réponse : définit l'API publique (import *) — 1re option.`,
  3040: `Que contient __file__ ?

Débutant :
• Chemin du fichier source du module courant (souvent absolu ou relatif).

Intermédiaire :
• Utile pour charger des ressources à côté du module.

Expert :
• Peut être absent pour modules built-in ou certains loaders.

Concepts clés :
• Ancrage filesystem du code.

Distinctions clés :
• __file__ vs __spec__.origin.

Fonctionnement :
• Renseigné par l'importlib lors du chargement.

Exécution étape par étape :
1. Chargement du module depuis un chemin.
2. Attribution de __file__.

Ordre des opérations :
• Lecture courante dans des helpers de données.

Cas d'utilisation courants :
• open(os.path.join(os.path.dirname(__file__), 'data.json')).

Cas limites :
• .pyc seul : chemin peut pointer vers le .py d'origine selon build.

Considérations de performance :
• Négligeable.

Exemples :
• Packager des templates avec le code.

Remarques :
• Réponse : chemin du fichier du module — 1re option.`,
  3041: `def gen(): yield 1 ; type(gen()) ?

Débutant :
• gen() retourne un générateur, pas le résultat immédiat de yield.

Intermédiaire :
• type → <class 'generator'>.

Expert :
• gen sans parenthèses reste objet function.

Concepts clés :
• Transformation yield → generator function.

Distinctions clés :
• Fonction génératrice vs générateur instancié.

Fonctionnement :
• CALL retourne iterator generator avec frame suspendue.

Exécution étape par étape :
1. gen référence la fonction génératrice.
2. gen() construit le générateur.
3. type(...) → generator.

Ordre des opérations :
• Pas d'exécution du corps jusqu'à next.

Cas d'utilisation courants :
• Flux paresseux, pipelines.

Cas limites :
• yield dans try/finally : garanties à la fermeture.

Considérations de performance :
• Mémoire souvent meilleure qu'une liste matérialisée.

Exemples :
• def count(): yield from range(10**6).

Remarques :
• Réponse : type generator — 1re option.`,
  3042: `def gen(): yield 1 ; next(gen()) ?

Débutant :
• next démarre ou reprend le générateur et renvoie la première valeur yieldée.

Intermédiaire :
• Ici 1.

Expert :
• next(g) équivalent à g.__next__() en Python 3.

Concepts clés :
• Consommation explicite d'itérateur.

Distinctions clés :
• next(gen()) vs next(g) réutilisant g.

Fonctionnement :
• Lève StopIteration quand épuisé.

Exécution étape par étape :
1. Nouveau gen().
2. next pousse jusqu'au premier yield.
3. Retour 1.

Ordre des opérations :
• Chaque gen() neuf recommence à zéro.

Cas d'utilisation courants :
• Parser token par token.

Cas limites :
• next sur générateur déjà fermé.

Considérations de performance :
• Très léger.

Exemples :
• Premier élément sans boucle for.

Remarques :
• Réponse : 1 — 1re option.`,
  3043: `def gen(): yield 1 ; yield 2 ; list(gen()) ?

Débutant :
• list consomme tout le générateur en liste Python.

Intermédiaire :
• Ordre des yield conservé → [1, 2].

Expert :
• Matérialise : mémoire O(n) sur la longueur des yields.

Concepts clés :
• Itération terminale.

Distinctions clés :
• list(gen()) vs [x for x in gen()] idem valeur souvent.

Fonctionnement :
• Boucle interne StopIteration jusqu'à fin.

Exécution étape par étape :
1. g = gen() implicite dans list().
2. Collecte 1 puis 2.
3. Retour [1, 2].

Ordre des opérations :
• Épuisement complet avant retour de list.

Cas d'utilisation courants :
• Débogage rapide d'un flux lazy.

Cas limites :
• Générateur infini → boucle sans fin.

Considérations de performance :
• Coût mémoire si très grand.

Exemples :
• list(zip(...)) pour voir le résultat.

Remarques :
• Réponse : [1, 2] — 1re option.`,
  3044: `def gen(): yield 1 ; return ; g = gen() ; next(g) ; next(g) ?

Débutant :
• Deuxième next : plus de yield → StopIteration.

Intermédiaire :
• return implicite ou explicite termine le générateur.

Expert :
• En Python 3, valeur de return accessible via StopIteration.value si non nulle.

Concepts clés :
• Signal standard de fin d'itérateur.

Distinctions clés :
• StopIteration vs erreur métier.

Fonctionnement :
• Lever StopIteration depuis le générateur C interne.

Exécution étape par étape :
1. Premier next → 1.
2. Deuxième next → fin → StopIteration.

Ordre des opérations :
• for capture StopIteration en interne ; next l'expose.

Cas d'utilisation courants :
• Savoir quand un flux est fini.

Cas limites :
• StopIteration dans du code user generator PEP 479 (dans générateur, transformé).

Considérations de performance :
• Négligeable.

Exemples :
• while True: ... next(it, sentinel).

Remarques :
• Réponse : StopIteration — 1re option.`,
  3045: `def gen(): yield 1 ; return 'done' ; g = gen() ; next(g) ; g.send(None) ?

Débutant :
• Après le dernier yield, envoyer reprend le générateur qui termine par return.

Intermédiaire :
• StopIteration est levée ; son attribut .value vaut 'done'.

Expert :
• send(None) équivalent à next après amorçage.

Concepts clés :
• Valeur de retour du générateur via StopIteration.

Distinctions clés :
• return dans générateur vs return fonction classique.

Fonctionnement :
• Le runtime attache la valeur au StopIteration.

Exécution étape par étape :
1. next → 1.
2. send(None) poursuit → exécution return 'done'.
3. StopIteration avec value 'done'.

Ordre des opérations :
• Premier démarrage souvent next avant send pour coroutine pure.

Cas d'utilisation courants :
• yield from combinant sous-générateurs avec résultat.

Cas limites :
• Oublier try/except StopIteration pour récupérer .value.

Considérations de performance :
• Négligeable.

Exemples :
• return depuis générateur pour signaler résultat final à un orchestrateur.

Remarques :
• Réponse : StopIteration avec valeur 'done' — 1re option.`,
  3046: `def gen(): x = yield 1 ; yield x ; g = gen() ; next(g) ; g.send(2) ?

Débutant :
• send injecte une valeur dans l'expression yield côté générateur.

Intermédiaire :
• x devient 2 ; second yield renvoie 2.

Expert :
• Première avance doit être next ou send(None) pour amorcer.

Concepts clés :
• Coroutine minimaliste (avant async).

Distinctions clés :
• send vs next seul.

Fonctionnement :
• Reprend après yield ; place la valeur envoyée comme résultat de yield.

Exécution étape par étape :
1. next → fournit 1 au consommateur.
2. send(2) → x = 2.
3. yield x → 2 retourné au consommateur.

Ordre des opérations :
• Valeur de send devient résultat de l'expression yield suspendue.

Cas d'utilisation courants :
• Pipelines bidirectionnels, parsers interactifs.

Cas limites :
• send avant amorçage → TypeError.

Considérations de performance :
• Négligeable hors logique lourde dans le gen.

Exemples :
• Pattern consumer producteur manuel.

Remarques :
• Réponse : 2 — 1re option.`,
  3047: `(x**2 for x in [1, 2, 3]) ?

Débutant :
• Expression génératrice : objet générateur paresseux.

Intermédiaire :
• Parenthèses au lieu de crochets vs compréhension liste.

Expert :
• Un seul itérateur : consommation unique si épuisé.

Concepts clés :
• Lazy map sur iterable.

Distinctions clés :
• Gen exp vs liste en compréhension.

Fonctionnement :
• Crée un générateur sans exécuter encore les carrés.

Exécution étape par étape :
1. Construction de l'objet générateur.
2. Pas encore de calculs des carrés.

Ordre des opérations :
• Calcul à la demande lors de next.

Cas d'utilisation courants :
• Enrobage memory-friendly autour d'itérables longs.

Cas limites :
• Oublier qu'il faut list() pour répéter la séquence.

Considérations de performance :
• O(1) mémoire côté générateur ; coût au parcours.

Exemples :
• sum(x**2 for x in data) sans liste intermédiaire.

Remarques :
• Réponse : expression génératrice (générateur) — 1re option.`,
  3048: `list(x**2 for x in [1, 2, 3]) ?

Débutant :
• list force la consommation complète : [1, 4, 9].

Intermédiaire :
• Équivalent fonctionnel à [x**2 for x in ...] ici.

Expert :
• Peut être plus clair quand le corps est déjà un générateur nommé réutilisable.

Concepts clés :
• Matérialisation d'un flux.

Distinctions clés :
• list(gen) vs itération manuelle.

Fonctionnement :
• Itération jusqu'à StopIteration puis construction liste.

Exécution étape par étape :
1. Création du gen exp.
2. Append 1, 4, 9.
3. Retour liste.

Ordre des opérations :
• Ordre d'origine de l'itérable d'entrée préservé.

Cas d'utilisation courants :
• Tests, API qui exigent une liste réelle.

Cas limites :
• Itérable infini → fuite mémoire ou blocage.

Considérations de performance :
• Coût mémoire O(n).

Exemples :
• list(zip(a,b)) matérialise paires.

Remarques :
• Réponse : [1, 4, 9] — 1re option.`,
  3049: `def gen(): yield from [1, 2, 3] ; list(gen()) ?

Débutant :
• yield from délègue chaque élément de l'itérable.

Intermédiaire :
• Résultat listé [1, 2, 3].

Expert :
• Gère aussi les sous-générateurs et Send propagation (PEP 380).

Concepts clés :
• Aplatissement d'itération.

Distinctions clés :
• yield from vs boucle for yield.

Fonctionnement :
• Délégation au protocole iterator de la cible.

Exécution étape par étape :
1. gen() parcourt la liste interne via yield from.
2. list collecte 1,2,3.

Ordre des opérations :
• Ordre de l'itérable cible respecté.

Cas d'utilisation courants :
• Composition de parsers récursifs.

Cas limites :
• yield from sur non-iterable → TypeError.

Considérations de performance :
• Souvent aussi rapide qu'une boucle manuelle.

Exemples :
• yield from child_generator().

Remarques :
• Réponse : [1, 2, 3] — 1re option.`,
  3050: `class MyIter avec __iter__ qui retourne self et __next__ qui retourne 1 ; type(MyIter()) ?

Débutant :
• Ce n'est pas un générateur : c'est une instance de la classe MyIter.

Intermédiaire :
• type(...) affiche la classe du fichier courant, souvent __main__.MyIter en script.

Expert :
• Respecte le protocole itérateur mais reste une instance utilisateur normale.

Concepts clés :
• Itérateur par classe vs objet generator.

Distinctions clés :
• type(MyIter()) vs type(gen()) pour une fonction avec yield.

Fonctionnement :
• Constructeur de classe puis type() sur l'objet.

Exécution étape par étape :
1. MyIter() allocation.
2. type renvoie la classe MyIter.

Ordre des opérations :
• Pas d'appel __next__ dans type() seul.

Cas d'utilisation courants :
• Itérateurs avec état complexe non exprimable simplement en yield.

Cas limites :
• __next__ sans fin : itération infinie dangereuse.

Considérations de performance :
• Appels Python par step vs générateur C.

Exemples :
• Parcourir un arbre avec pile interne.

Remarques :
• Réponse : classe MyIter (instance de type utilisateur, affichage du type <class '__main__.MyIter'> en script) — 1re option.`,
};
