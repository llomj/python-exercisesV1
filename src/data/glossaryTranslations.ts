import { GlossaryItem } from '../constants';

// French translations for glossary entries
// Note: Python code examples remain the same in all languages
export const GLOSSARY_FR: GlossaryItem[] = [
  {
    term: "Variable",
    definition: "Une référence nommée à un objet en mémoire qui peut stocker différentes valeurs.",
    levelRange: "1-2",
    detailedDescription: "Les variables en Python sont dynamiques, ce qui signifie qu'elles peuvent référencer des objets de tout type et peuvent être réassignées à différents types. Contrairement aux langages statiquement typés, les variables Python n'ont pas de types fixes - le type est déterminé par l'objet qu'elles référencent. Les noms de variables doivent suivre des règles spécifiques : ils peuvent contenir des lettres, des chiffres et des underscores, mais ne peuvent pas commencer par un chiffre. Ils sont sensibles à la casse.\n\n1. Explication simple : Une variable est comme une boîte avec une étiquette où Python peut ranger une valeur pour vous.\n2. Explication intermédiaire : Le nom de variable pointe vers (référence) un objet en mémoire, et cette référence peut être changée pour pointer vers un autre objet ou même un autre type au cours du programme.\n3. Explication approfondie : Dans CPython, les variables sont des entrées dans un espace de noms (un dictionnaire en interne) qui lient des identifiants à des objets ; l'affectation modifie ces liaisons et plusieurs noms peuvent désigner le même objet, ce qui est crucial à comprendre pour les types mutables.",
    example: "score = 42\nname = 'Alice'\nactive = True"
  },
  {
    term: "Chaîne de caractères",
    definition: "Une séquence immuable de caractères représentant des données texte.",
    levelRange: "1-2",
    detailedDescription: "Les chaînes de caractères en Python sont des objets immuables qui représentent du texte. Elles peuvent être créées avec des guillemets simples, doubles ou triples pour les chaînes multi-lignes. Python fournit de nombreuses méthodes de chaîne pour la manipulation, incluant le découpage, la concaténation et le formatage. Les chaînes sont des séquences, donc elles supportent l'indexation et l'itération.\n\n1. Explication simple : Une chaîne est la façon dont Python stocke des mots et des phrases, comme le texte que vous taperiez dans un message.\n2. Explication intermédiaire : Une chaîne est une suite ordonnée de caractères que vous pouvez découper, parcourir et combiner, mais vous ne modifiez jamais l'objet d'origine directement.\n3. Explication approfondie : Une chaîne est un type de séquence immuable basé sur une représentation Unicode ; la plupart des opérations créent de nouveaux objets chaîne, et l'indexation ou le découpage travaille sur des points de code, ce qui est important pour les encodages et les performances.",
    example: "message = 'Hello World'\nlong_text = '''This is a\nmulti-line string'''\nfirst_char = message[0]  # 'H'"
  },
  {
    term: "Entier",
    definition: "Nombres entiers sans décimales, avec une précision illimitée.",
    levelRange: "1-2",
    detailedDescription: "Les entiers Python ont une précision arbitraire, ce qui signifie qu'ils peuvent être arbitrairement grands sans problèmes de débordement qui surviennent avec les types entiers à largeur fixe dans d'autres langages. Cela rend Python adapté aux calculs mathématiques impliquant de très grands nombres. Les littéraux entiers peuvent inclure des underscores pour la lisibilité.\n\n1. Explication simple : Un entier est un nombre entier comme 0, 3 ou -10, sans partie décimale.\n2. Explication intermédiaire : Les entiers servent à compter, à indexer et à faire des calculs de base, et en Python vous n'avez pratiquement jamais à vous soucier d'un dépassement de capacité.\n3. Explication approfondie : Le type int de Python bascule automatiquement entre une représentation de taille machine et un entier à précision arbitraire ; des opérations comme l'addition ou la multiplication peuvent donc allouer de nouveaux objets et leur coût dépend du nombre de chiffres.",
    example: "small = 42\nlarge = 1_000_000_000_000\nnegative = -17"
  },
  {
    term: "Nombre à virgule flottante",
    definition: "Nombres décimaux représentés en format binaire à virgule flottante.",
    levelRange: "1-2",
    detailedDescription: "Les objets float représentent des nombres réels avec précision décimale. Ils sont implémentés en utilisant le format binaire à double précision IEEE 754, ce qui peut conduire à de petites erreurs de précision dans certains calculs. Pour les applications financières ou autres nécessitant une arithmétique décimale exacte, le module decimal doit être utilisé à la place.\n\n1. Explication simple : Un float est un nombre avec une virgule, comme 3,5 ou -0,25.\n2. Explication intermédiaire : Les floats sont pratiques pour les mesures courantes (prix, distances, moyennes), mais de petits écarts d'arrondi sont normaux à cause du stockage binaire.\n3. Explication approfondie : Le type float de Python encapsule un double IEEE 754, donc les opérations suivent ces règles, ce qui influence les comparaisons, l'accumulation des erreurs d'arrondi et le comportement des valeurs spéciales comme NaN et l'infini.",
    example: "pi = 3.14159\nnegative = -2.5\nscientific = 1.23e-4"
  },
  {
    term: "Booléen",
    definition: "Un type de données binaire représentant les valeurs True ou False.",
    levelRange: "1-2",
    detailedDescription: "Les valeurs booléennes sont utilisées pour les opérations logiques et les instructions conditionnelles. En Python, chaque objet a une valeur booléenne inhérente (truthiness), où la plupart des objets sont considérés comme True sauf des valeurs falsy spécifiques comme 0, les chaînes vides, les listes vides, None et False lui-même. Les opérations booléennes suivent les règles logiques standard.\n\n1. Explication simple : Un booléen est une valeur oui/non : soit True, soit False.\n2. Explication intermédiaire : Les booléens permettent à votre programme de prendre des décisions dans les if et les boucles, et beaucoup d'expressions (comme les comparaisons) produisent automatiquement True ou False.\n3. Explication approfondie : En Python, bool est une sous-classe de int avec seulement deux instances (True et False, égales à 1 et 0), et chaque type définit sa \"véracité\" via __bool__ ou __len__, ce qui est essentiel quand on écrit des conditions et des classes personnalisées.",
    example: "is_active = True\nhas_permission = False\nresult = (5 > 3) and (10 < 20)  # True"
  },
  {
    term: "Instruction If",
    definition: "Une instruction conditionnelle qui exécute du code uniquement lorsqu'une condition est True.",
    levelRange: "3-4",
    detailedDescription: "L'instruction if est la construction conditionnelle principale de Python. Elle évalue une expression booléenne et exécute le bloc indenté uniquement si la condition est True. Python utilise l'indentation (pas d'accolades) pour définir les blocs de code. L'instruction if peut être suivie de clauses elif (sinon-si) et else optionnelles pour gérer plusieurs conditions.\n\n1. Explication simple : if permet de dire « fais ceci seulement si la condition est vraie ».\n2. Explication intermédiaire : Les blocs if/elif/else contrôlent quel chemin de code s'exécute en fonction de conditions booléennes.\n3. Explication approfondie : Comme les conditions reposent sur la véracité des objets et l'évaluation court-circuitée, bien structurer ses if est essentiel pour garder un flux de contrôle lisible et éviter les imbrications difficiles à suivre.",
    example: "age = 18\nif age >= 18:\n    print('Adult')\nelif age >= 13:\n    print('Teen')\nelse:\n    print('Child')"
  },
  {
    term: "Opérateur de comparaison",
    definition: "Opérateurs qui comparent deux valeurs et retournent un résultat booléen.",
    levelRange: "3-4",
    detailedDescription: "Les opérateurs de comparaison évaluent les relations entre valeurs et retournent True ou False. Python supporte : == (égal), != (non égal), < (inférieur à), > (supérieur à), <= (inférieur ou égal), >= (supérieur ou égal), is (identité), in (appartenance). Ces opérateurs sont fondamentaux pour la logique conditionnelle et le flux de contrôle.\n\n1. Explication simple : Les opérateurs de comparaison répondent à des questions comme « est-ce égal ? » ou « est-ce plus grand ? » et renvoient True ou False.\n2. Explication intermédiaire : Ils sont utilisés dans les conditions pour tester des plages de valeurs, l'égalité, l'appartenance à une collection ou le fait que deux noms pointent vers le même objet.\n3. Explication approfondie : Comprendre la différence entre == et is, les comparaisons chaînées comme a < b < c, et la manière dont les méthodes de comparaison riches (__eq__, __lt__, etc.) sont implémentées est crucial pour écrire du code Python correct et idiomatique.",
    example: "x = 10\ny = 5\nprint(x > y)   # True\nprint(x == y)  # False\nprint(x != y)  # True\nprint(5 in [1, 2, 3, 4, 5])  # True"
  },
  {
    term: "Opérateur logique",
    definition: "Opérateurs qui combinent des expressions booléennes : and, or, not.",
    levelRange: "3-4",
    detailedDescription: "Les opérateurs logiques combinent des valeurs ou expressions booléennes. 'and' retourne True uniquement si les deux opérandes sont True. 'or' retourne True si au moins un opérande est True. 'not' inverse la valeur booléenne. Python utilise l'évaluation court-circuit : 'and' s'arrête au premier False, 'or' s'arrête au premier True, ce qui peut améliorer les performances.\n\n1. Explication simple : Les opérateurs logiques permettent de combiner des conditions True/False avec « et », « ou » et « non ».\n2. Explication intermédiaire : Ils sont essentiels pour exiger plusieurs conditions à la fois, accepter des alternatives ou inverser un test, tout en s'arrêtant tôt lorsque le résultat est déjà déterminé.\n3. Explication approfondie : Comme and/or renvoient l'un de leurs opérandes (et pas seulement True/False), ils sont souvent utilisés de manière idiomatique dans les expressions ; bien comprendre ce comportement évite des bugs subtils.",
    example: "x = 10\ny = 5\nresult1 = (x > 5) and (y < 10)  # True\nresult2 = (x < 5) or (y > 10)   # False\nresult3 = not (x > 5)            # False"
  },
  {
    term: "Boucle For",
    definition: "Une boucle qui itère sur une séquence (liste, chaîne, range, etc.).",
    levelRange: "3-4",
    detailedDescription: "La boucle for itère sur les éléments d'une séquence ou d'un autre objet itérable. Elle gère automatiquement l'itération, éliminant le besoin de gestion manuelle d'index. La variable de boucle prend chaque valeur de la séquence à tour de rôle. Les boucles for sont préférées lorsque vous savez combien d'itérations vous avez besoin ou lors de l'itération sur une collection.\n\n1. Explication simple : Une boucle for répète du code une fois pour chaque élément d'une liste ou d'une collection.\n2. Explication intermédiaire : La variable de boucle prend successivement chaque valeur d'un itérable, ce qui évite de gérer les indices à la main.\n3. Explication approfondie : La boucle for repose sur le protocole d'itération (appel à iter() puis next()), ce qui permet de parcourir aussi bien des listes finies que des flux paresseux ou potentiellement infinis.",
    example: "fruits = ['apple', 'banana', 'cherry']\nfor fruit in fruits:\n    print(fruit)\n\n# With range\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4"
  },
  {
    term: "Boucle While",
    definition: "Une boucle qui continue à s'exécuter tant qu'une condition reste True.",
    levelRange: "3-4",
    detailedDescription: "La boucle while exécute de manière répétée un bloc de code tant que la condition évalue à True. Contrairement aux boucles for, les boucles while sont utilisées lorsque le nombre d'itérations est inconnu à l'avance. Il faut faire attention à s'assurer que la condition devient éventuellement False, sinon une boucle infinie se produit. La variable de boucle doit être modifiée dans le corps de la boucle.\n\n1. Explication simple : Une boucle while continue tant qu'une condition reste vraie.\n2. Explication intermédiaire : Elle est idéale quand on ne connaît pas à l'avance le nombre de répétitions, mais qu'on sait quand s'arrêter.\n3. Explication approfondie : Bien concevoir la mise à jour de l'état et la condition d'arrêt est essentiel pour éviter les boucles infinies et écrire une logique de boucle claire et testable.",
    example: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1  # Important: modifier la condition\n\n# Boucle infinie (à éviter!)\n# while True:\n#     print('Forever')"
  },
  {
    term: "Range",
    definition: "Une fonction intégrée qui génère une séquence de nombres.",
    levelRange: "3-4",
    detailedDescription: "La fonction range() génère une séquence immuable de nombres, couramment utilisée dans les boucles for. Elle peut prendre un argument (stop), deux arguments (start, stop), ou trois arguments (start, stop, step). La valeur stop est exclusive. Range est efficace en mémoire car il génère les nombres à la demande plutôt que de tous les stocker en mémoire.\n\n1. Explication simple : range() fournit une série de nombres pour compter dans les boucles.\n2. Explication intermédiaire : Vous contrôlez le début, la fin (exclusive) et le pas, ce qui est pratique pour les indices et les motifs réguliers.\n3. Explication approfondie : Les objets range sont des séquences immuables et légères ; comprendre la convention « début inclus, fin exclue » aide à éviter les erreurs de décalage d'un.",
    example: "range(5)           # 0, 1, 2, 3, 4\nrange(2, 6)        # 2, 3, 4, 5\nrange(0, 10, 2)    # 0, 2, 4, 6, 8\nrange(10, 0, -1)   # 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
  },
  {
    term: "Instruction Break",
    definition: "Une instruction qui sort immédiatement de la boucle actuelle.",
    levelRange: "3-4",
    detailedDescription: "L'instruction break termine la boucle englobante la plus proche (for ou while) et continue l'exécution après la boucle. Elle est couramment utilisée pour sortir d'une boucle tôt lorsqu'une condition est remplie, comme trouver une valeur cible ou rencontrer une condition d'erreur. Break ne sort que d'un niveau d'imbrication.\n\n1. Explication simple : break permet de sortir immédiatement d'une boucle.\n2. Explication intermédiaire : On l'utilise quand on a trouvé ce qu'on cherchait ou qu'il n'est plus logique de continuer la boucle.\n3. Explication approfondie : Combinée avec la clause else des boucles, break permet d'exprimer proprement des motifs de recherche du type « chercher puis faire autre chose seulement si rien n'a été trouvé ».",
    example: "for i in range(10):\n    if i == 5:\n        break  # Sortir de la boucle quand i est 5\n    print(i)  # Affiche 0, 1, 2, 3, 4"
  },
  {
    term: "Instruction Continue",
    definition: "Une instruction qui ignore le reste de l'itération de boucle actuelle.",
    levelRange: "3-4",
    detailedDescription: "L'instruction continue ignore le code restant dans l'itération de boucle actuelle et passe à l'itération suivante. Contrairement à break, continue ne sort pas de la boucle entièrement - elle passe juste au cycle suivant. C'est utile pour ignorer certaines valeurs ou conditions tout en continuant à traiter les autres.\n\n1. Explication simple : continue saute le reste du corps de la boucle et passe directement au tour suivant.\n2. Explication intermédiaire : C'est pratique pour ignorer certains cas (comme des données invalides) tout en continuant à traiter les autres éléments.\n3. Explication approfondie : Bien utilisée, continue simplifie les conditions complexes dans les boucles, mais un usage excessif peut aussi rendre le flux de contrôle plus difficile à suivre.",
    example: "for i in range(10):\n    if i % 2 == 0:  # Ignorer les nombres pairs\n        continue\n    print(i)  # Affiche uniquement les nombres impairs: 1, 3, 5, 7, 9"
  },
  {
    term: "Fonction",
    definition: "Un bloc de code réutilisable qui effectue une tâche spécifique.",
    levelRange: "5-6",
    detailedDescription: "Les fonctions sont des objets de première classe en Python qui encapsulent du code pour la réutilisation. Elles peuvent accepter des paramètres et retourner des valeurs. Les fonctions Python supportent les paramètres par défaut, les listes d'arguments de longueur variable (*args, **kwargs), et peuvent être passées comme arguments à d'autres fonctions. Les fonctions peuvent être définies avec ou sans instructions return explicites.\n\n1. Explication simple : Une fonction est une recette nommée pour accomplir une tâche que vous pouvez appeler plusieurs fois.\n2. Explication intermédiaire : Les fonctions regroupent des étapes liées, reçoivent des entrées (paramètres) et renvoient éventuellement un résultat, ce qui rend le code plus organisé et évite les répétitions.\n3. Explication approfondie : Comme Python traite les fonctions comme des objets de première classe, on peut les stocker, les passer en argument et les retourner, ce qui permet de construire des abstractions de plus haut niveau comme les callbacks et les décorateurs.",
    example: "def greet(name, greeting='Hello'):\n    return f'{greeting}, {name}!'\n\nresult = greet('Alice')  # 'Hello, Alice!'\nresult2 = greet('Bob', 'Hi')  # 'Hi, Bob!'"
  },
  {
    term: "Liste",
    definition: "Une séquence mutable et ordonnée d'objets qui peut contenir des types mixtes.",
    levelRange: "5-6",
    detailedDescription: "Les listes sont le type de séquence mutable principal de Python. Elles peuvent croître et décroître dynamiquement, et peuvent contenir des objets de différents types. Les listes supportent des opérations puissantes comme le découpage, la concaténation et les compréhensions de liste. Elles sont implémentées comme des tableaux dynamiques, fournissant un accès aléatoire efficace mais potentiellement des insertions/suppressions coûteuses au milieu.\n\n1. Explication simple : Une liste est une collection ordonnée d'éléments, comme une liste de tâches en code.\n2. Explication intermédiaire : Vous pouvez ajouter, supprimer et modifier des éléments sur place, les parcourir et en découper des sous-listes pour les traiter.\n3. Explication approfondie : Les listes sont des tableaux dynamiques ; l'ajout en fin est en général O(1) amorti, l'accès par indice est O(1), mais les insertions/suppressions au milieu sont O(n), ce qui compte pour les performances.",
    example: "numbers = [1, 2, 3, 4, 5]\nfruits = ['apple', 'banana', 'cherry']\nmixed = [42, 'hello', True, [1, 2]]\n\n# Compréhension de liste\nsquares = [x**2 for x in numbers]"
  },
  {
    term: "Dictionnaire",
    definition: "Un mapping mutable de clés hashables vers des valeurs arbitraires.",
    levelRange: "5-6",
    detailedDescription: "Les dictionnaires fournissent des recherches rapides utilisant des clés plutôt qu'un indexage positionnel. Les clés doivent être des objets hashables (immuables), tandis que les valeurs peuvent être de tout type. Les dictionnaires maintiennent l'ordre d'insertion à partir de Python 3.7. Ils sont implémentés en utilisant des tables de hachage, fournissant un temps de recherche moyen O(1). Les compréhensions de dictionnaire permettent de créer des dictionnaires à partir d'itérables.\n\n1. Explication simple : Un dictionnaire est un ensemble de paires clé/valeur, comme un mini carnet d'adresses en code.\n2. Explication intermédiaire : Au lieu d'utiliser des positions, vous accédez aux valeurs avec des clés parlantes (comme \"nom\" ou \"score\"), ce qui rend les données plus faciles à manipuler.\n3. Explication approfondie : Les dicts sont des tables de hachage ; comprendre la notion de clé hashable, les collisions et la comparaison des clés (__hash__, __eq__) est important pour concevoir des mappings fiables et efficaces.",
    example: "person = {'name': 'Alice', 'age': 30, 'city': 'New York'}\n\n# Accéder aux valeurs\nname = person['name']\n\n# Compréhension de dictionnaire\nsquares = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}"
  },
  {
    term: "Classe",
    definition: "Un modèle pour créer des objets avec un comportement et un état partagés.",
    levelRange: "7-8",
    detailedDescription: "Les classes définissent la structure et le comportement des objets. Elles contiennent des attributs (données) et des méthodes (fonctions). La méthode __init__ initialise les nouvelles instances. Les classes supportent l'héritage, permettant aux classes enfant d'étendre ou de modifier le comportement de la classe parent. Python utilise un ordre de résolution de méthode (MRO) pour déterminer quelle méthode appeler dans les scénarios d'héritage multiple.",
    example: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f'Hello, I am {self.name}'\n\nperson = Person('Alice', 30)\nprint(person.greet())  # 'Hello, I am Alice'"
  },
  {
    term: "Méthode",
    definition: "Une fonction définie à l'intérieur d'une classe qui opère sur les instances de cette classe.",
    levelRange: "7-8",
    detailedDescription: "Les méthodes sont des fonctions liées aux instances de classe. Le premier paramètre est conventionnellement nommé 'self' et se réfère à l'instance. Les méthodes peuvent accéder et modifier les attributs d'instance. Les méthodes de classe et les méthodes statiques fournissent des moyens alternatifs de définir des fonctions liées aux classes. Les méthodes supportent les mêmes caractéristiques de paramètres que les fonctions régulières.",
    example: "class Calculator:\n    def add(self, a, b):\n        return a + b\n    \n    def multiply(self, a, b):\n        return a * b\n\ncalc = Calculator()\nresult = calc.add(5, 3)  # 8"
  },
  {
    term: "Portée",
    definition: "La région d'un programme où une variable est accessible.",
    levelRange: "7-8",
    detailedDescription: "La portée détermine où les variables peuvent être accessibles. Python a quatre portées : locale (à l'intérieur des fonctions), englobante (fonctions imbriquées), globale (niveau module), et intégrée (noms intégrés de Python). Les variables dans les portées intérieures peuvent masquer celles des portées extérieures. La règle LEGB (Local, Enclosing, Global, Built-in) détermine la résolution des noms.",
    example: "global_var = 'global'\n\ndef outer():\n    enclosing_var = 'enclosing'\n    \n    def inner():\n        local_var = 'local'\n        print(local_var)  # local\n        print(enclosing_var)  # enclosing\n        print(global_var)  # global\n    \n    return inner\n\ninner_func = outer()\ninner_func()"
  },
  {
    term: "Variable globale",
    definition: "Une variable définie au niveau du module, accessible dans tout le module.",
    levelRange: "7-8",
    detailedDescription: "Les variables globales sont définies en dehors de toute fonction ou classe. Elles peuvent être accessibles depuis n'importe où dans le module, y compris à l'intérieur des fonctions. Pour modifier une variable globale depuis l'intérieur d'une fonction, vous devez la déclarer avec le mot-clé 'global'. Les variables globales devraient être utilisées avec parcimonie car elles peuvent rendre le code plus difficile à comprendre et à déboguer.",
    example: "counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nprint(counter)  # 1"
  },
  {
    term: "Variable locale",
    definition: "Une variable définie à l'intérieur d'une fonction, uniquement accessible dans cette fonction.",
    levelRange: "7-8",
    detailedDescription: "Les variables locales sont créées lorsqu'une fonction est appelée et détruites lorsque la fonction retourne. Elles ne sont pas accessibles en dehors de la fonction. Les variables locales avec le même nom que les variables globales masquent les globales dans la portée de la fonction. C'est ce qu'on appelle le masquage de variable.",
    example: "def calculate():\n    x = 10  # variable locale\n    y = 20  # variable locale\n    return x + y\n\nresult = calculate()  # 30\n# x et y ne sont pas accessibles ici"
  },
  {
    term: "Fonction imbriquée",
    definition: "Une fonction définie à l'intérieur d'une autre fonction.",
    levelRange: "7-8",
    detailedDescription: "Les fonctions imbriquées (aussi appelées fonctions internes) sont définies dans le corps d'une autre fonction. Elles peuvent accéder aux variables de leur portée englobante (fermeture). Les fonctions imbriquées sont utiles pour créer des fonctions d'aide ou implémenter des décorateurs. Elles suivent la règle LEGB pour la résolution des noms.",
    example: "def outer_function(x):\n    def inner_function(y):\n        return x + y  # peut accéder à x de la portée extérieure\n    return inner_function\n\nadd_five = outer_function(5)\nprint(add_five(3))  # 8"
  },
  {
    term: "Fermeture",
    definition: "Une fonction qui se souvient de l'environnement dans lequel elle a été créée.",
    levelRange: "9-10",
    detailedDescription: "Une fermeture se produit lorsqu'une fonction imbriquée référence des variables de sa portée englobante, même après que la fonction extérieure ait terminé son exécution. Cela permet à la fonction interne de 'se souvenir' de l'état de la fonction extérieure. Les fermetures sont fondamentales pour les décorateurs, les fonctions partielles et de nombreux modèles de conception.",
    example: "def make_multiplier(factor):\n    def multiply(number):\n        return number * factor  # factor est 'mémorisé'\n    return multiply\n\ndouble = make_multiplier(2)\nprint(double(5))  # 10\ntriple = make_multiplier(3)\nprint(triple(5))  # 15"
  },
  {
    term: "Fonction d'aide",
    definition: "Une petite fonction utilitaire qui assiste une fonction plus grande.",
    levelRange: "7-8",
    detailedDescription: "Les fonctions d'aide (aussi appelées fonctions utilitaires) sont de petites fonctions définies pour effectuer des tâches spécifiques qui supportent des fonctions plus grandes. Elles améliorent la lisibilité et la réutilisabilité du code en décomposant des opérations complexes en morceaux gérables. Les fonctions d'aide sont souvent définies dans la portée où elles sont utilisées.",
    example: "def process_data(data):\n    def validate_item(item):\n        return isinstance(item, int) and item > 0\n    \n    def clean_item(item):\n        return max(0, min(100, item))\n    \n    valid_data = [clean_item(item) for item in data if validate_item(item)]\n    return valid_data\n\nresult = process_data([10, -5, 50, 'invalid', 200])  # [10, 50]"
  },
  {
    term: "Récursivité",
    definition: "Une fonction qui s'appelle elle-même pour résoudre un problème.",
    levelRange: "9-10",
    detailedDescription: "La récursivité se produit lorsqu'une fonction s'appelle elle-même, soit directement soit indirectement à travers d'autres fonctions. Chaque appel récursif crée un nouveau contexte d'exécution avec ses propres variables locales. La récursivité nécessite un cas de base pour empêcher les boucles infinies et un cas récursif qui se dirige vers le cas de base. Python a une limite de récursivité (par défaut 1000) pour empêcher le débordement de pile.",
    example: "def factorial(n):\n    if n <= 1:  # cas de base\n        return 1\n    return n * factorial(n - 1)  # cas récursif\n\nprint(factorial(5))  # 120"
  },
  {
    term: "Décorateur",
    definition: "Une fonction qui modifie le comportement d'une autre fonction.",
    levelRange: "9-10",
    detailedDescription: "Les décorateurs sont des fonctions qui prennent une autre fonction comme argument et retournent une version modifiée de cette fonction. Ils sont appliqués en utilisant le symbole @. Les décorateurs sont couramment utilisés pour la journalisation, l'authentification, la mise en cache et la validation. Ils utilisent les fermetures et les objets fonction pour envelopper la fonctionnalité.",
    example: "def timer(func):\n    def wrapper(*args, **kwargs):\n        import time\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f'{func.__name__} took {end - start:.2f} seconds')\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    import time\n    time.sleep(1)\n    return 'done'\n\nslow_function()  # affiche les informations de temps"
  },
  {
    term: "Fonction Lambda",
    definition: "Une fonction anonyme et en ligne définie avec le mot-clé lambda.",
    levelRange: "7-8",
    detailedDescription: "Les fonctions lambda sont de petites fonctions anonymes qui peuvent être définies en ligne. Elles peuvent prendre n'importe quel nombre d'arguments mais ne peuvent avoir qu'une seule expression. Les fonctions lambda sont souvent utilisées avec des fonctions comme map(), filter(), et sorted() où une petite fonction est nécessaire temporairement. Elles ne peuvent pas contenir d'instructions ou de logique complexe.",
    example: "numbers = [1, 2, 3, 4, 5]\n\n# Lambda avec map\neven_numbers = list(map(lambda x: x * 2, numbers))  # [2, 4, 6, 8, 10]\n\n# Lambda avec filter\nevens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]\n\n# Lambda avec sorted\npairs = [(1, 'one'), (2, 'two'), (3, 'three')]\nsorted_pairs = sorted(pairs, key=lambda x: x[1])"
  },
  {
    term: "Générateur",
    definition: "Une fonction qui produit des valeurs une à la fois au lieu de retourner une liste complète.",
    levelRange: "9-10",
    detailedDescription: "Les générateurs sont des fonctions qui utilisent le mot-clé 'yield' pour produire une séquence de valeurs paresseusement. Au lieu de calculer toutes les valeurs à la fois et de les stocker en mémoire, les générateurs calculent les valeurs à la demande. Cela les rend efficaces en mémoire pour les grands ensembles de données. Les générateurs peuvent être consommés en utilisant next() ou dans des boucles for.",
    example: "def fibonacci_generator():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci_generator()\nprint(next(fib))  # 0\nprint(next(fib))  # 1\nprint(next(fib))  # 1\nprint(next(fib))  # 2\n\n# Ou utiliser dans une boucle\nfor num in fib:\n    if num > 100:\n        break\n    print(num)"
  }
];
