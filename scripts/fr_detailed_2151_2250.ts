// Paste this into DETAILED_EXPLANATIONS_FR in detailedExplanationsTranslations.ts

  2151: `La méthode __str__ définit la représentation en chaîne d'un objet pour str() et print(). Si class MyClass: def __str__(self): return 'str'; obj = MyClass(); str(obj), alors str(obj) retourne 'str' car __str__ est une méthode spéciale appelée quand on utilise str() ou print() sur un objet. Elle doit retourner une représentation en chaîne lisible par l'humain de l'objet.

Méthode __str__ :
• str(obj) retourne 'str'
• __str__ définit la représentation en chaîne
• Appelé par str() et print()
• Doit retourner une chaîne lisible
• Retourne : 'str'

Comment ça fonctionne :
• obj = MyClass() crée une instance
• str(obj) appelle la méthode __str__
• __str__ exécute : return 'str'
• Retourne la représentation en chaîne
• Retourne : 'str'

Exemple :
class MyClass:
    def __str__(self):
        return 'str'
obj = MyClass()
str(obj)                     # 'str' (uses __str__)
print(obj)                   # str (uses __str__)

Usages courants :
• String representation: def __str__(self): return 'readable string'
• User-friendly output: print(obj) uses __str__
• Special methods
• Object representation

Exemple : Si class MyClass: def __str__(self): return 'str'; obj = MyClass(); str(obj), alors str(obj) retourne 'str' car __str__ définit la représentation en chaîne pour str() et print().
`,
  2152: `La méthode __repr__ définit la représentation en chaîne « officielle » d'un objet pour repr(). Si class MyClass: def __repr__(self): return 'repr'; obj = MyClass(); repr(obj), alors repr(obj) retourne 'repr' car __repr__ est une méthode spéciale appelée quand on utilise repr() sur un objet. Elle doit retourner une représentation en chaîne non ambiguë qui pourrait idéalement servir à recréer l'objet. Si __str__ n'est pas défini, __repr__ est utilisé en repli.

Méthode __repr__ :
• repr(obj) retourne 'repr'
• __repr__ définit la représentation officielle
• Appelé par repr()
• Doit retourner une chaîne non ambiguë
• Utilisé en repli si __str__ non défini
• Retourne : 'repr'

Comment ça fonctionne :
• obj = MyClass() crée une instance
• repr(obj) appelle la méthode __repr__
• __repr__ exécute : return 'repr'
• Retourne la représentation officielle
• Retourne : 'repr'

Exemple :
class MyClass:
    def __repr__(self):
        return 'repr'
obj = MyClass()
repr(obj)                    # 'repr' (uses __repr__)

Usages courants :
• Official representation: def __repr__(self): return 'unambiguous string'
• Debugging: repr(obj) shows official representation
• Special methods
• Object representation

Exemple : Si class MyClass: def __repr__(self): return 'repr'; obj = MyClass(); repr(obj), alors repr(obj) retourne 'repr' car __repr__ définit la représentation officielle pour repr().
`,
  2153: `print() utilise __str__ si disponible, en repli sur __repr__ si __str__ n'est pas défini. Si class MyClass: def __str__(self): return 'str'; def __repr__(self): return 'repr'; obj = MyClass(); print(obj), alors print(obj) affiche str car print() préfère __str__ à __repr__. Quand les deux sont définis, __str__ est utilisé pour un affichage convivial, tandis que __repr__ est utilisé pour la représentation officielle (par ex. dans le REPL ou pour le débogage).

print() utilise __str__ :
• print(obj) affiche str
• print() prefers __str__ over __repr__
• __str__ is for user-friendly output
• __repr__ is for official representation
• Retourne : str (printed)

Comment ça fonctionne :
• obj = MyClass() crée une instance
• print(obj) appelle la méthode __str__ (preferred)
• __str__ exécute : return 'str'
• print() outputs the string
• Affichage : str

Exemple :
class MyClass:
    def __str__(self):
        return 'str'
    def __repr__(self):
        return 'repr'
obj = MyClass()
print(obj)                   # str (uses __str__)
repr(obj)                    # 'repr' (uses __repr__)

Usages courants :
• User-friendly output: print(obj) uses __str__
• Official representation: repr(obj) uses __repr__
• Special methods
• Object representation

Exemple : Si class MyClass: def __str__(self): return 'str'; def __repr__(self): return 'repr'; obj = MyClass(); print(obj), alors print(obj) affiche str car print() utilise __str__ si disponible, en le préférant à __repr__.
`,
  2154: `La méthode __len__ définit le comportement pour len(). Si class MyClass: def __len__(self): return 5; obj = MyClass(); len(obj), alors len(obj) retourne 5 car __len__ est une méthode spéciale appelée quand on utilise len() sur un objet. Elle doit retourner un entier non négatif représentant la « longueur » de l'objet. Utilisé couramment pour les objets de type conteneur (listes, chaînes, collections personnalisées).

Méthode __len__ :
• len(obj) retourne 5
• __len__ définit le comportement de longueur
• Appelé par len()
• Doit retourner un entier non négatif
• Retourne : 5

Comment ça fonctionne :
• obj = MyClass() crée une instance
• len(obj) appelle la méthode __len__
• __len__ exécute : return 5
• Retourne la valeur de longueur
• Retourne : 5

Exemple :
class MyClass:
    def __len__(self):
        return 5
obj = MyClass()
len(obj)                     # 5 (uses __len__)

Usages courants :
• Length definition: def __len__(self): return length
• Container-like objects: len(obj) for custom collections
• Special methods
• Object length

Exemple : Si class MyClass: def __len__(self): return 5; obj = MyClass(); len(obj), alors len(obj) retourne 5 car __len__ définit le comportement pour len().
`,
  2155: `La méthode __eq__ définit le comportement pour l'opérateur ==. Si class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2, alors obj1 == obj2 returns True car __eq__ est une méthode spéciale appelée quand on utilise == pour comparer des objets. Par défaut (sans __eq__), == compare l'identité des objets (comme is), mais __eq__ permet de définir une logique d'égalité personnalisée.

Méthode __eq__ :
• obj1 == obj2 returns True
• __eq__ définit le comportement de ==
• Appelé par l'opérateur ==
• Peut définir une logique d'égalité personnalisée
• Retourne : True

Comment ça fonctionne :
• obj1 == obj2 utilise l'opérateur ==
• Python appelle obj1.__eq__(obj2)
• __eq__ executes: return True
• Retourne le résultat de la comparaison
• Retourne : True

Exemple :
class MyClass:
    def __eq__(self, other):
        return True  # Always equal
obj1 = MyClass(); obj2 = MyClass()
obj1 == obj2                # True (uses __eq__)

Usages courants :
• Custom equality: def __eq__(self, other): return self.value == other.value
• Value comparison: == compares values, not identity
• Special methods
• Operator overloading

Exemple : Si class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2, alors obj1 == obj2 returns True car __eq__ définit le comportement pour l'opérateur ==.
`,
  2156: `La méthode __lt__ définit le comportement pour l'opérateur < (inférieur à). Si class MyClass: def __lt__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 < obj2, alors obj1 < obj2 returns True car __lt__ est une méthode spéciale appelée quand on utilise < pour comparer des objets. Utilisé pour l'ordonnancement et le tri. Python peut fournir automatiquement les autres opérateurs de comparaison (>, <=, >=) si vous définissez __lt__ et __eq__, ou vous pouvez les définir explicitement.

Méthode __lt__ :
• obj1 < obj2 returns True
• __lt__ définit le comportement de <
• Appelé par l'opérateur <
• Utilisé pour l'ordonnancement/le tri
• Retourne : True

Comment ça fonctionne :
• obj1 < obj2 uses < operator
• Python appelle obj1.__lt__(obj2)
• __lt__ executes: return True
• Retourne le résultat de la comparaison
• Retourne : True

Exemple :
class MyClass:
    def __lt__(self, other):
        return True  # Always less than
obj1 = MyClass(); obj2 = MyClass()
obj1 < obj2                 # True (uses __lt__)

Usages courants :
• Custom ordering: def __lt__(self, other): return self.value < other.value
• Sorting: objects can be sorted using <
• Special methods
• Operator overloading

Exemple : Si class MyClass: def __lt__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 < obj2, alors obj1 < obj2 returns True car __lt__ définit le comportement pour l'opérateur <.
`,
  2157: `La méthode __add__ définit le comportement pour l'opérateur +. Si class MyClass: def __add__(self, other): return 10; obj1 = MyClass(); obj2 = MyClass(); obj1 + obj2, alors obj1 + obj2 returns 10 car __add__ est une méthode spéciale appelée quand on utilise + pour additionner des objets. Cela permet de définir un comportement d'addition personnalisé pour vos objets, les rendant compatibles avec l'opérateur +.

Méthode __add__ :
• obj1 + obj2 returns 10
• __add__ définit le comportement de +
• Appelé par l'opérateur +
• Peut définir une addition personnalisée
• Retourne : 10

Comment ça fonctionne :
• obj1 + obj2 utilise l'opérateur +
• Python appelle obj1.__add__(obj2)
• __add__ executes: return 10
• Retourne le résultat de l'addition
• Retourne : 10

Exemple :
class MyClass:
    def __add__(self, other):
        return 10  # Custom addition
obj1 = MyClass(); obj2 = MyClass()
obj1 + obj2                # 10 (uses __add__)

Usages courants :
• Custom addition: def __add__(self, other): return self.value + other.value
• Operator overloading: objects work with + operator
• Special methods
• Arithmetic operations

Exemple : Si class MyClass: def __add__(self, other): return 10; obj1 = MyClass(); obj2 = MyClass(); obj1 + obj2, alors obj1 + obj2 returns 10 car __add__ définit le comportement pour l'opérateur +.
`,
  2158: `La méthode __getitem__ définit le comportement pour l'indexation []. Si class MyClass: def __getitem__(self, key): return key * 2; obj = MyClass(); obj[5], alors obj[5] retourne 10 car __getitem__ est une méthode spéciale appelée quand on utilise [] pour accéder aux éléments. Cela permet de faire fonctionner vos objets comme des séquences ou des mappings (comme les listes ou les dictionnaires). Le paramètre key peut être un index, une tranche ou toute autre valeur selon votre cas d'usage.

Méthode __getitem__ :
• obj[5] retourne 10
• __getitem__ définit le comportement d'indexation []
• Appelé par l'opérateur []
• le paramètre key est l'index/clé
• Retourne : key * 2 = 5 * 2 = 10

Comment ça fonctionne :
• obj[5] utilise l'indexation []
• Python appelle obj.__getitem__(5)
• __getitem__ exécute : return key * 2
• Evaluates: 5 * 2 = 10
• Retourne : 10

Exemple :
class MyClass:
    def __getitem__(self, key):
        return key * 2
obj = MyClass()
obj[5]                      # 10 (uses __getitem__)

Usages courants :
• Indexing: def __getitem__(self, key): return self.data[key]
• Sequence-like objects: make objects work like lists
• Special methods
• Operator overloading

Exemple : Si class MyClass: def __getitem__(self, key): return key * 2; obj = MyClass(); obj[5], alors obj[5] retourne 10 car __getitem__ définit le comportement pour l'indexation [], et key * 2 = 5 * 2 = 10.
`,
  2159: `La méthode __setitem__ définit le comportement pour l'affectation []. Si class MyClass: def __setitem__(self, key, value): self.data = {key: value}; obj = MyClass(); obj[5] = 10; obj.data, alors obj.data retourne {5: 10} car __setitem__ est une méthode spéciale appelée quand on utilise [] pour assigner des valeurs. Cela permet de faire fonctionner vos objets comme des séquences ou mappings mutables. Le paramètre key est l'index/clé, et value est la valeur assignée.

Méthode __setitem__ :
• obj[5] = 10 calls __setitem__
• __setitem__ définit le comportement d'affectation []
• Appelé par l'affectation [] =
• key = 5, value = 10
• Sets self.data = {5: 10}
• Retourne : {5: 10}

Comment ça fonctionne :
• obj[5] = 10 utilise l'affectation []
• Python appelle obj.__setitem__(5, 10)
• __setitem__ exécute : self.data = {key: value}
• Sets self.data = {5: 10}
• obj.data retourne {5: 10}

Exemple :
class MyClass:
    def __setitem__(self, key, value):
        self.data = {key: value}
obj = MyClass()
obj[5] = 10                 # Calls __setitem__(5, 10)
obj.data                    # {5: 10}

Usages courants :
• Assignment: def __setitem__(self, key, value): self.data[key] = value
• Mutable objects: make objects work like dictionaries
• Special methods
• Operator overloading

Exemple : Si class MyClass: def __setitem__(self, key, value): self.data = {key: value}; obj = MyClass(); obj[5] = 10; obj.data, alors obj.data retourne {5: 10} car __setitem__ définit le comportement pour l'affectation [], et définit self.data = {5: 10}.
`,
  2160: `La méthode __call__ rend une instance appelable (comme une fonction). Si class MyClass: def __call__(self): return 'called'; obj = MyClass(); obj(), alors obj() retourne 'called' car __call__ est une méthode spéciale appelée quand on utilise () pour appeler une instance. Cela permet de créer des objets qui se comportent comme des fonctions — vous pouvez les appeler avec des parenthèses. Utile pour les objets appelables, les classes de type fonction, ou l'implémentation du motif callable.

Méthode __call__ :
• obj() retourne 'called'
• __call__ rend l'instance appelable
• Appelé par l'opérateur ()
• L'instance peut être appelée comme une fonction
• Retourne : 'called'

Comment ça fonctionne :
• obj() appelle l'instance comme une fonction
• Python appelle obj.__call__()
• __call__ executes: return 'called'
• Retourne le résultat de l'appel
• Retourne : 'called'

Exemple :
class MyClass:
    def __call__(self):
        return 'called'
obj = MyClass()
obj()                        # 'called' (instance is callable)

Usages courants :
• Callable objects: def __call__(self, *args): return result
• Function-like classes: make classes work like functions
• Special methods
• Operator overloading

Exemple : Si class MyClass: def __call__(self): return 'called'; obj = MyClass(); obj(), alors obj() retourne 'called' car __call__ rend une instance appelable, permettant de l'appeler comme une fonction.
`,
  2161: `Le décorateur @property rend une méthode accessible comme un attribut. Si class MyClass: @property; def x(self): return 1; obj = MyClass(); obj.x, alors obj.x retourne 1 car @property convertit la méthode x() en propriété, permettant d'y accéder comme à un attribut (sans parenthèses). Cela fournit une interface propre pour les propriétés calculées ou les attributs avec getters/setters.

Décorateur @property :
• obj.x retourne 1
• @property rend la méthode accessible comme attribut
• Pas de parenthèses : obj.x (pas obj.x())
• La méthode est appelée automatiquement
• Retourne : 1

Comment ça fonctionne :
• @property le décorateur modifie la méthode
• La méthode devient une propriété (accessible comme attribut)
• obj.x accède à la propriété (appelle la méthode automatiquement)
• La méthode exécute : return 1
• Retourne : 1

Exemple :
class MyClass:
    @property
    def x(self):
        return 1
obj = MyClass()
obj.x                        # 1 (accessed as attribute, not method)

Usages courants :
• Computed properties: @property def area(self): return self.width * self.height
• Clean interface: obj.attr instead of obj.get_attr()
• Properties
• Attribute-like access

Exemple : Si class MyClass: @property; def x(self): return 1; obj = MyClass(); obj.x, alors obj.x retourne 1 car @property rend la méthode accessible comme un attribut, donc on peut y accéder sans parenthèses.
`,
  2162: `Une propriété sans setter est en lecture seule — on ne peut pas lui assigner de valeur. Si class MyClass: @property; def x(self): return 1; obj = MyClass(); obj.x = 2, alors obj.x = 2 raises an AttributeError because la propriété n'a qu'un getter (défini par @property), mais pas de setter. Pour rendre une propriété modifiable, il faut définir un setter avec @x.setter. Sans setter, la propriété est en lecture seule.

Propriété sans setter :
• obj.x = 2 raises AttributeError
• La propriété n'a qu'un getter (pas de setter)
• Impossible d'assigner à une propriété en lecture seule
• Lève AttributeError : can't set attribute
• Erreur : AttributeError

Comment ça fonctionne :
• obj.x = 2 tente d'assigner à la propriété
• La propriété n'a pas de setter défini
• Python ne peut pas définir une propriété en lecture seule
• Lève AttributeError : can't set attribute

Exemple :
class MyClass:
    @property
    def x(self):
        return 1
obj = MyClass()
obj.x                        # 1 (read works)
obj.x = 2                    # AttributeError (no setter, read-only)

Usages courants :
• Read-only properties: @property def value(self): return self._value
• Computed properties: @property def area(self): return self.width * self.height
• Properties
• Attribute protection

Exemple : Si class MyClass: @property; def x(self): return 1; obj = MyClass(); obj.x = 2, alors obj.x = 2 raises an AttributeError car une propriété sans setter est en lecture seule et ne peut pas être modifiée.
`,
  2163: `Une propriété avec un getter (@property) et un setter (@x.setter) permet la lecture et l'écriture. Si class MyClass: @property; def x(self): return self._x; @x.setter; def x(self, value): self._x = value; obj = MyClass(); obj.x = 5; obj.x, alors obj.x retourne 5 car la propriété a un setter qui stocke la valeur dans self._x, et le getter la récupère. Cela fournit un accès contrôlé aux attributs avec validation ou transformation si nécessaire.

Propriété avec setter :
• obj.x = 5 assigne la valeur (utilise le setter)
• obj.x retourne 5 (utilise le getter)
• @property définit le getter
• @x.setter définit le setter
• Retourne : 5

Comment ça fonctionne :
• obj.x = 5 appelle le setter : @x.setter def x(self, value)
• Le setter exécute : self._x = value (stocke 5)
• obj.x appelle le getter : @property def x(self)
• Le getter exécute : return self._x (retourne 5)
• Retourne : 5

Exemple :
class MyClass:
    @property
    def x(self):
        return self._x
    @x.setter
    def x(self, value):
        self._x = value
obj = MyClass()
obj.x = 5                    # Uses setter
obj.x                        # 5 (uses getter)

Usages courants :
• Read-write properties: @property with @setter
• Controlled access: validation in setter
• Properties
• Attribute access control

Exemple : Si class MyClass: @property; def x(self): return self._x; @x.setter; def x(self, value): self._x = value; obj = MyClass(); obj.x = 5; obj.x, alors obj.x retourne 5 car la propriété a à la fois un getter et un setter, permettant lecture et écriture.
`,
  2164: `Un setter de propriété peut transformer la valeur avant de la stocker. Si class MyClass: @property; def x(self): return self._x; @x.setter; def x(self, value): self._x = value * 2; obj = MyClass(); obj.x = 5; obj.x, alors obj.x retourne 10 because the setter multiplies the value by 2 before storing it (self._x = value * 2 = 5 * 2 = 10). Cela permet de valider, transformer ou traiter les valeurs avant de les stocker.

Le setter transforme la valeur :
• obj.x = 5 appelle le setter avec value = 5
• Le setter exécute : self._x = value * 2 = 5 * 2 = 10
• obj.x appelle le getter : return self._x
• Retourne la valeur stockée: 10
• Retourne : 10

Comment ça fonctionne :
• obj.x = 5 appelle le setter : @x.setter def x(self, value)
• Le setter transforme : self._x = value * 2
• Evaluates: 5 * 2 = 10
• Stores: self._x = 10
• obj.x returns: 10

Exemple :
class MyClass:
    @property
    def x(self):
        return self._x
    @x.setter
    def x(self, value):
        self._x = value * 2  # Transforms value
obj = MyClass()
obj.x = 5                    # Stores 10 (5 * 2)
obj.x                        # 10 (transformed value)

Usages courants :
• Value transformation: @x.setter def x(self, value): self._x = transform(value)
• Validation: @x.setter def x(self, value): if valid: self._x = value
• Properties
• Attribute control

Exemple : Si class MyClass: @property; def x(self): return self._x; @x.setter; def x(self, value): self._x = value * 2; obj = MyClass(); obj.x = 5; obj.x, alors obj.x retourne 10 car le setter transforme la valeur avant de la stocker (5 * 2 = 10).
`,
  2165: `Le décorateur @x.deleter définit le comportement pour l'instruction del. Si class MyClass: @property; def x(self): return self._x; @x.deleter; def x(self): del self._x; obj = MyClass(); obj._x = 1; del obj.x; hasattr(obj, '_x'), alors hasattr(obj, '_x') returns False car @x.deleter définit ce qui se passe à la suppression de la propriété, et del obj.x appelle le deleter, qui supprime self._x. Cela fournit une suppression contrôlée des attributs.

Décorateur @deleter :
• del obj.x appelle le deleter
• @x.deleter définit le comportement de suppression
• Le deleter exécute : del self._x
• L'attribut _x est supprimé
• hasattr(obj, '_x') returns False

Comment ça fonctionne :
• obj._x = 1 sets attribute
• del obj.x appelle le deleter: @x.deleter def x(self)
• Le deleter exécute : del self._x
• L'attribut _x est supprimé
• hasattr(obj, '_x') vérifie si l'attribut existe
• Retourne : False

Exemple :
class MyClass:
    @property
    def x(self):
        return self._x
    @x.deleter
    def x(self):
        del self._x
obj = MyClass()
obj._x = 1
del obj.x                    # Calls deleter
hasattr(obj, '_x')          # False (deleted)

Usages courants :
• Controlled deletion: @x.deleter def x(self): cleanup logic
• Property deletion: del obj.property (uses deleter)
• Properties
• Attribute management

Exemple : Si class MyClass: @property; def x(self): return self._x; @x.deleter; def x(self): del self._x; obj = MyClass(); obj._x = 1; del obj.x; hasattr(obj, '_x'), alors hasattr(obj, '_x') returns False car @x.deleter définit le comportement pour del, et del obj.x appelle le deleter, qui supprime self._x.
`,
  2166: `Les propriétés peuvent accéder aux attributs « privés » (convention : préfixe underscore simple). Si class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x, alors obj.x retourne 1 car le getter de la propriété accède à l'attribut privé self._x. Le préfixe underscore simple (_x) est une convention indiquant que l'attribut est destiné à un usage interne, mais ce n'est pas appliqué par Python — c'est une simple convention de nommage.

La propriété accède à l'attribut privé :
• obj.x retourne 1
• Le getter de la propriété accède à self._x
• _x est un attribut privé (convention)
• L'underscore simple indique un usage interne
• Retourne : 1

Comment ça fonctionne :
• __init__ définit self._x = 1
• obj.x calls property getter
• Le getter exécute : return self._x
• Accède à l'attribut privé _x = 1
• Retourne : 1

Exemple :
class MyClass:
    def __init__(self):
        self._x = 1  # Private attribute (convention)
    @property
    def x(self):
        return self._x  # Accesses private attribute
obj = MyClass()
obj.x                        # 1 (property accesses _x)

Usages courants :
• Encapsulation: @property def value(self): return self._value
• Private attributes: _attr (convention, not enforced)
• Properties
• Attribute access control

Exemple : Si class MyClass: def __init__(self): self._x = 1; @property; def x(self): return self._x; obj = MyClass(); obj.x, alors obj.x retourne 1 car les propriétés peuvent accéder aux attributs privés (convention : préfixe _), et le getter retourne self._x.
`,
  2167: `Accéder à une propriété via la classe retourne l'objet propriété lui-même, pas la valeur de la propriété. Si class MyClass: @property; def x(self): return 1; obj = MyClass(); MyClass.x, alors MyClass.x returns <property object> because accéder à une propriété via la classe (pas une instance) retourne l'objet descripteur de propriété, pas le résultat de l'appel du getter. Pour obtenir la valeur, il faut y accéder via une instance : obj.x.

Propriété via la classe :
• MyClass.x returns <property object>
• Accéder via la classe retourne l'objet propriété
• L'objet propriété est un descripteur
• Pas la valeur de la propriété
• Retourne : <property object>

Comment ça fonctionne :
• MyClass.x accesses property via class
• La propriété est un objet descripteur
• Retourne l'objet propriété (pas la valeur)
• obj.x retournerait la valeur (1)
• Retourne : <property object>

Exemple :
class MyClass:
    @property
    def x(self):
        return 1
MyClass.x                    # <property object> (property descriptor)
obj = MyClass()
obj.x                        # 1 (property value)

Usages courants :
• Property descriptor: MyClass.attr (property object)
• Descriptors: properties are descriptor objects
• Properties
• Object introspection

Exemple : Si class MyClass: @property; def x(self): return 1; obj = MyClass(); MyClass.x, alors MyClass.x returns <property object> car accéder à une propriété via la classe retourne l'objet descripteur de propriété, pas la valeur de la propriété.
`,
  2168: `La fonction property() peut être créée avec une fonction lambda. Si class MyClass: x = property(lambda self: 1); obj = MyClass(); obj.x, alors obj.x retourne 1 car property() peut prendre une fonction (ou lambda) comme argument getter. C'est une alternative pour créer des propriétés sans utiliser le décorateur @property. La fonction lambda reçoit self comme argument et retourne la valeur de la propriété.

property() avec lambda :
• obj.x retourne 1
• property(lambda self: 1) crée une propriété
• La lambda est la fonction getter
• Reçoit self, retourne 1
• Retourne : 1

Comment ça fonctionne :
• property(lambda self: 1) crée une propriété
• La lambda est le getter : lambda self: 1
• obj.x accesses property
• Appelle la lambda avec self = obj
• Lambda returns: 1
• Retourne : 1

Exemple :
class MyClass:
    x = property(lambda self: 1)  # Property with lambda
obj = MyClass()
obj.x                        # 1 (lambda returns 1)

Usages courants :
• Simple properties: x = property(lambda self: value)
• Alternative syntax: property() instead of @property
• Properties
• Property creation

Exemple : Si class MyClass: x = property(lambda self: 1); obj = MyClass(); obj.x, alors obj.x retourne 1 car property() peut être créé avec une fonction lambda, et la lambda sert de getter.
`,
  2169: `Une propriété peut avoir une valeur par défaut si l'attribut sous-jacent n'existe pas. Si class MyClass: @property; def x(self): return self._x if hasattr(self, '_x') else 0; obj = MyClass(); obj.x, alors obj.x retourne 0 car le getter de la propriété vérifie si self._x existe avec hasattr(). If it doesn't exist, it returns the default value 0. Cela permet aux propriétés de fonctionner même quand l'attribut sous-jacent n'a pas encore été défini.

Propriété avec valeur par défaut :
• obj.x retourne 0
• La propriété vérifie si _x existe
• hasattr(self, '_x') returns False
• Retourne la valeur par défaut: 0
• Retourne : 0

Comment ça fonctionne :
• obj.x calls property getter
• Le getter vérifie : hasattr(self, '_x')
• _x n'existe pas (non défini)
• Returns default: 0
• Retourne : 0

Exemple :
class MyClass:
    @property
    def x(self):
        return self._x if hasattr(self, '_x') else 0
obj = MyClass()
obj.x                        # 0 (default, _x doesn't exist)
obj._x = 5
obj.x                        # 5 (_x exists)

Usages courants :
• Default values: @property def x(self): return self._x if hasattr(self, '_x') else default
• Computed defaults: properties with fallback values
• Properties
• Attribute defaults

Exemple : Si class MyClass: @property; def x(self): return self._x if hasattr(self, '_x') else 0; obj = MyClass(); obj.x, alors obj.x retourne 0 car la propriété peut avoir une valeur par défaut si l'attribut n'existe pas, et hasattr() vérifie l'existence.
`,
  2170: `Un setter qui ne stocke pas la valeur ne modifie pas la propriété. Si class MyClass: @property; def x(self): return 1; @x.setter; def x(self, value): pass; obj = MyClass(); obj.x = 5; obj.x, alors obj.x retourne 1 because the setter has pass (does nothing), so it doesn't store the value. Le getter retourne toujours 1, et l'assignation obj.x = 5 n'a aucun effet car le setter ne stocke rien. La valeur 5 est passée au setter mais ignorée.

Le setter ne stocke pas :
• obj.x = 5 calls setter
• Le setter exécute : pass (ne fait rien)
• La valeur 5 est ignorée (non stockée)
• obj.x appelle le getter : return 1
• Retourne : 1 (unchanged)

Comment ça fonctionne :
• obj.x = 5 appelle le setter : @x.setter def x(self, value)
• Le setter exécute : pass (ne fait rien)
• La valeur 5 n'est pas stockée
• obj.x appelle le getter : @property def x(self)
• Le getter retourne : 1 (inchangé)
• Retourne : 1

Exemple :
class MyClass:
    @property
    def x(self):
        return 1
    @x.setter
    def x(self, value):
        pass  # Doesn't store value
obj = MyClass()
obj.x = 5                    # Calls setter (ignores value)
obj.x                        # 1 (getter unchanged)

Usages courants :
• Read-only simulation: setter that ignores values
• Validation-only setters: setter that validates but doesn't store
• Properties
• Attribute control

Exemple : Si class MyClass: @property; def x(self): return 1; @x.setter; def x(self, value): pass; obj = MyClass(); obj.x = 5; obj.x, alors obj.x retourne 1 car un setter qui ne stocke pas la valeur ne modifie pas la propriété, donc le getter retourne toujours 1.
`,
  2171: `La fonction getattr() obtient la valeur d'un attribut depuis un objet. Si class MyClass: pass; obj = MyClass(); obj.x = 1; getattr(obj, 'x'), alors getattr(obj, 'x') returns 1 car getattr() récupère la valeur de l'attribut 'x' de obj. C'est équivalent à obj.x, mais permet d'obtenir les attributs dynamiquement via un nom en chaîne. Utile quand le nom de l'attribut est stocké dans une variable.

Fonction getattr() :
• getattr(obj, 'x') returns 1
• getattr() obtient la valeur d'attribut
• Équivalent à obj.x
• Le nom d'attribut est une chaîne : 'x'
• Retourne : 1

Comment ça fonctionne :
• obj.x = 1 définit l'attribut x = 1
• getattr(obj, 'x') obtient l'attribut 'x'
• Cherche l'attribut 'x' sur obj
• Finds x = 1
• Retourne : 1

Exemple :
class MyClass: pass
obj = MyClass()
obj.x = 1
getattr(obj, 'x')            # 1 (gets attribute 'x')
obj.x                        # 1 (equivalent)

Usages courants :
• Dynamic access: getattr(obj, attr_name) (attr_name is variable)
• Attribute retrieval: getattr(obj, 'method')()
• Object introspection
• Dynamic attribute access

Exemple : Si class MyClass: pass; obj = MyClass(); obj.x = 1; getattr(obj, 'x'), alors getattr(obj, 'x') returns 1 car getattr() obtient la valeur d'attribut d'un objet, équivalent à obj.x.
`,
  2172: `La fonction getattr() peut prendre une valeur par défaut retournée si l'attribut n'existe pas. Si class MyClass: pass; obj = MyClass(); getattr(obj, 'x', 0), alors getattr(obj, 'x', 0) returns 0 car obj n'a pas l'attribut 'x', donc getattr() retourne la valeur par défaut 0 au lieu de lever AttributeError. Utile pour accéder en toute sécurité aux attributs qui pourraient ne pas exister.

getattr() avec valeur par défaut :
• getattr(obj, 'x', 0) returns 0
• obj n'a pas l'attribut 'x'
• getattr() retourne la valeur par défaut: 0
• Pas d'AttributeError levée
• Retourne : 0

Comment ça fonctionne :
• getattr(obj, 'x', 0) gets attribute 'x'
• obj n'a pas l'attribut 'x'
• Attribut non trouvé
• Retourne la valeur par défaut: 0
• Retourne : 0

Exemple :
class MyClass: pass
obj = MyClass()
getattr(obj, 'x', 0)         # 0 (default, 'x' doesn't exist)
getattr(obj, 'x')            # AttributeError (no default)
obj.x = 1
getattr(obj, 'x', 0)         # 1 (attribute exists)

Usages courants :
• Safe access: getattr(obj, 'attr', default) (no error if missing)
• Default values: getattr(obj, 'value', 0)
• Object introspection
• Dynamic attribute access

Exemple : Si class MyClass: pass; obj = MyClass(); getattr(obj, 'x', 0), alors getattr(obj, 'x', 0) returns 0 car getattr() avec une valeur par défaut retourne celle-ci si l'attribut manque, évitant AttributeError.
`,
  2173: `La fonction setattr() définit la valeur d'un attribut sur un objet. Si class MyClass: pass; obj = MyClass(); setattr(obj, 'x', 1); obj.x, alors obj.x retourne 1 car setattr() définit l'attribut 'x' à 1 sur obj. C'est équivalent à obj.x = 1, mais permet de définir les attributs dynamiquement via un nom en chaîne. Utile quand le nom de l'attribut est stocké dans une variable.

Fonction setattr() :
• setattr(obj, 'x', 1) définit l'attribut
• obj.x retourne 1
• Équivalent à obj.x = 1
• Le nom d'attribut est une chaîne : 'x'
• Retourne : 1

Comment ça fonctionne :
• setattr(obj, 'x', 1) définit l'attribut 'x' = 1
• Crée l'attribut sur obj
• obj.x accesses attribute
• Retourne : 1

Exemple :
class MyClass: pass
obj = MyClass()
setattr(obj, 'x', 1)         # Sets obj.x = 1
obj.x                        # 1 (attribute set)

Usages courants :
• Dynamic assignment: setattr(obj, attr_name, value) (attr_name is variable)
• Attribute setting: setattr(obj, 'value', 5)
• Object introspection
• Dynamic attribute assignment

Exemple : Si class MyClass: pass; obj = MyClass(); setattr(obj, 'x', 1); obj.x, alors obj.x retourne 1 car setattr() définit la valeur d'attribut sur un objet, équivalent à obj.x = 1.
`,
  2174: `La fonction delattr() supprime un attribut d'un objet. Si class MyClass: pass; obj = MyClass(); obj.x = 1; delattr(obj, 'x'); hasattr(obj, 'x'), alors hasattr(obj, 'x') returns False car delattr() supprime l'attribut 'x' de obj. C'est équivalent à del obj.x, mais permet de supprimer les attributs dynamiquement via un nom en chaîne. Après suppression, l'attribut n'existe plus.

Fonction delattr() :
• delattr(obj, 'x') supprime l'attribut
• hasattr(obj, 'x') returns False
• Équivalent à del obj.x
• Le nom d'attribut est une chaîne : 'x'
• Retourne : False

Comment ça fonctionne :
• obj.x = 1 définit l'attribut x = 1
• delattr(obj, 'x') supprime l'attribut 'x'
• Attribut supprimé de obj
• hasattr(obj, 'x') vérifie si 'x' existe
• Retourne : False

Exemple :
class MyClass: pass
obj = MyClass()
obj.x = 1
delattr(obj, 'x')            # Deletes obj.x
hasattr(obj, 'x')            # False (attribute deleted)

Usages courants :
• Dynamic deletion: delattr(obj, attr_name) (attr_name is variable)
• Attribute removal: delattr(obj, 'value')
• Object introspection
• Dynamic attribute deletion

Exemple : Si class MyClass: pass; obj = MyClass(); obj.x = 1; delattr(obj, 'x'); hasattr(obj, 'x'), alors hasattr(obj, 'x') returns False car delattr() supprime l'attribut d'un objet, équivalent à del obj.x.
`,
  2175: `La fonction dir() retourne une liste de noms d'attributs pour un objet. Si class MyClass: pass; obj = MyClass(); dir(obj), alors dir(obj) returns a list of attribute names because dir() liste tous les attributs (méthodes, propriétés, attributs d'instance, attributs de classe) accessibles sur l'objet. Cela inclut les attributs de la classe de l'objet et de ses classes de base. Utile pour l'introspection et la découverte des attributs d'un objet.

Fonction dir() :
• dir(obj) retourne une liste de noms d'attributs
• Liste tous les attributs accessibles
• Inclut les méthodes, propriétés, attributs
• Inclut les attributs de classe et de base
• Retourne : list

Comment ça fonctionne :
• dir(obj) liste les attributs sur obj
• Cherche les attributs d'instance
• Cherche les attributs de classe
• Cherche les attributs des classes de base
• Retourne la liste des noms d'attributs

Exemple :
class MyClass: pass
obj = MyClass()
dir(obj)                     # ['__class__', '__dict__', ...] (list of attributes)

Usages courants :
• Introspection: dir(obj) (see all attributes)
• Discovery: find available methods/attributes
• Object inspection
• Attribute listing

Exemple : Si class MyClass: pass; obj = MyClass(); dir(obj), alors dir(obj) returns a list of attribute names because dir() lists all accessible attributes on an object, including methods, properties, and attributes from the class and base classes.
`,
  2176: `La fonction dir() inclut les attributs de classe dans sa liste. Si class MyClass: x = 1; obj = MyClass(); 'x' in dir(obj), alors 'x' in dir(obj) returns True because dir() includes class attributes (like x = 1) in addition to instance attributes. When you access dir(obj), it shows attributes from both the instance and the class, so class attributes are visible.

dir() inclut les attributs de classe :
• 'x' in dir(obj) returns True
• dir(obj) includes class attributes
• x = 1 est un attribut de classe
• Visible dans la sortie de dir()
• Retourne : True

Comment ça fonctionne :
• dir(obj) lists attributes
• Includes instance attributes
• Includes class attributes (x = 1)
• 'x' is in the list
• Retourne : True

Exemple :
class MyClass: x = 1
obj = MyClass()
'x' in dir(obj)              # True (class attribute included)
dir(obj)                     # [..., 'x', ...] (includes class attribute)

Usages courants :
• Attribute checking: 'attr' in dir(obj) (check if attribute exists)
• Introspection: dir(obj) shows class and instance attributes
• Object inspection
• Attribute discovery

Exemple : Si class MyClass: x = 1; obj = MyClass(); 'x' in dir(obj), alors 'x' in dir(obj) returns True car dir() inclut les attributs de classe dans sa liste, donc l'attribut de classe x = 1 est visible.
`,
  2177: `La fonction dir() inclut les méthodes dans sa liste. Si class MyClass: def method(self): pass; obj = MyClass(); 'method' in dir(obj), alors 'method' in dir(obj) returns True because dir() includes methods (like method()) in addition to attributes. Methods are attributes of the class, so they appear in dir() when called on an instance.

dir() inclut les méthodes :
• 'method' in dir(obj) returns True
• dir(obj) includes methods
• method() est une méthode de classe
• Visible dans la sortie de dir()
• Retourne : True

Comment ça fonctionne :
• dir(obj) lists attributes
• Includes instance attributes
• Includes class methods (method())
• 'method' is in the list
• Retourne : True

Exemple :
class MyClass:
    def method(self): pass
obj = MyClass()
'method' in dir(obj)         # True (method included)
dir(obj)                     # [..., 'method', ...] (includes method)

Usages courants :
• Method checking: 'method' in dir(obj) (check if method exists)
• Introspection: dir(obj) shows methods and attributes
• Object inspection
• Method discovery

Exemple : Si class MyClass: def method(self): pass; obj = MyClass(); 'method' in dir(obj), alors 'method' in dir(obj) returns True car dir() inclut les méthodes dans sa liste, donc method() est visible.
`,
  2178: `La fonction vars() retourne l'attribut __dict__, qui contient les attributs d'instance. Si class MyClass: pass; obj = MyClass(); vars(obj), alors vars(obj) retourne {} because vars() retourne obj.__dict__, qui est un dictionnaire contenant les attributs de l'instance. Pour une instance nouvellement créée sans attributs, __dict__ est vide, donc vars() retourne un dictionnaire vide.

vars() function:
• vars(obj) retourne {}
• vars() retourne __dict__
• __dict__ contient les attributs d'instance
• Une instance vide a un __dict__ vide
• Retourne : {}

Comment ça fonctionne :
• vars(obj) retourne obj.__dict__
• __dict__ est le dictionnaire des attributs d'instance
• obj n'a pas d'attributs d'instance
• __dict__ est vide : {}
• Retourne : {}

Exemple :
class MyClass: pass
obj = MyClass()
vars(obj)                    # {} (empty, no instance attributes)
obj.x = 1
vars(obj)                    # {'x': 1} (instance attributes)

Usages courants :
• Instance attributes: vars(obj) (get __dict__)
• Attribute dictionary: vars(obj) shows instance attributes
• Object inspection
• Attribute access

Exemple : Si class MyClass: pass; obj = MyClass(); vars(obj), alors vars(obj) retourne {} because vars() retourne __dict__, which contains instance attributes, and an empty instance has an empty dictionary.
`,
  2179: `La fonction vars() retourne un dictionnaire des attributs d'instance. Si class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); vars(obj), alors vars(obj) returns {'x': 5} because vars() returns obj.__dict__, which is a dictionary containing all instance attributes. When __init__ sets self.x = 5, it creates an instance attribute x = 5, which is stored in __dict__.

vars() retourne les attributs d'instance :
• vars(obj) returns {'x': 5}
• vars() retourne __dict__
• __dict__ contient les attributs d'instance
• self.x = 5 crée une instance attribute
• Retourne : {'x': 5}

Comment ça fonctionne :
• MyClass(5) calls __init__(self, 5)
• __init__ sets self.x = 5 (instance attribute)
• Attribut d'instance stocké dans obj.__dict__
• vars(obj) retourne obj.__dict__
• Retourne : {'x': 5}

Exemple :
class MyClass:
    def __init__(self, x):
        self.x = x
obj = MyClass(5)
vars(obj)                    # {'x': 5} (instance attributes)

Usages courants :
• Instance attributes: vars(obj) (get __dict__)
• Attribute dictionary: vars(obj) shows all instance attributes
• Object inspection
• Attribute access

Exemple : Si class MyClass: def __init__(self, x): self.x = x; obj = MyClass(5); vars(obj), alors vars(obj) returns {'x': 5} because vars() retourne __dict__, which contains instance attributes, and self.x = 5 creates an instance attribute.
`,
  2180: `La fonction vars() peut être appelée sur une classe, retournant le __dict__ de la classe. Si class MyClass: x = 1; vars(MyClass), alors vars(MyClass) returns a dictionary with class attributes because vars() returns MyClass.__dict__, which contains class attributes, methods, and other class-level data. This includes x = 1 and other class-level definitions.

vars() sur une classe :
• vars(MyClass) retourne un dict avec les attributs de classe
• vars() retourne le __dict__ de la classe
• __dict__ contient les attributs et méthodes de classe
• Includes x = 1
• Retourne : dict

Comment ça fonctionne :
• vars(MyClass) returns MyClass.__dict__
• __dict__ is dictionary of class attributes
• Contient les attributs de classe (x = 1)
• Contient les méthodes et autres données de classe
• Retourne : dict

Exemple :
class MyClass: x = 1
vars(MyClass)                # {...'x': 1, ...} (class __dict__)

Usages courants :
• Class attributes: vars(Class) (get class __dict__)
• Class dictionary: vars(Class) shows class attributes and methods
• Object inspection
• Class introspection

Exemple : Si class MyClass: x = 1; vars(MyClass), alors vars(MyClass) returns a dictionary with class attributes car vars() sur une classe retourne le __dict__ de la classe, qui contient les attributs de classe, méthodes et autres données.
`,
  2181: `L'opérateur is vérifie l'identité des objets (si deux variables référencent le même objet). Si class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 is obj2, alors obj1 is obj2 returns False because obj1 et obj2 sont des instances différentes — chaque appel à MyClass() crée un nouvel objet distinct. L'opérateur is vérifie si deux variables pointent vers le même objet en mémoire, pas s'ils ont la même valeur.

Instances différentes :
• obj1 is obj2 returns False
• obj1 et obj2 sont des instances différentes
• Chaque MyClass() crée un nouvel objet
• is vérifie l'identité (même objet)
• Retourne : False

Comment ça fonctionne :
• MyClass() creates first instance (obj1)
• MyClass() creates second instance (obj2)
• obj1 and obj2 are different objects
• obj1 is obj2 checks if same object
• Different objects, so returns: False

Exemple :
class MyClass: pass
obj1 = MyClass()             # Creates first instance
obj2 = MyClass()             # Creates second instance (different)
obj1 is obj2                 # False (different instances)

Usages courants :
• Identity check: obj1 is obj2 (check if same object)
• Object comparison: if obj1 is obj2: (identity)
• Object identity
• Reference comparison

Exemple : Si class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 is obj2, alors obj1 is obj2 returns False car les instances différentes ne sont pas identiques — chaque appel à MyClass() crée un objet distinct.
`,
  2182: `Quand deux variables référencent le même objet, is retourne True. Si class MyClass: pass; obj1 = MyClass(); obj2 = obj1; obj1 is obj2, alors obj1 is obj2 returns True because obj2 = obj1 assigne la même référence d'objet à obj2, donc les deux variables pointent vers le même objet. The is operator checks object identity, and since obj1 and obj2 refer to the same object, they are identical.

Même référence d'objet :
• obj1 is obj2 returns True
• obj2 = obj1 assigne la même référence
• Les deux variables pointent vers le même objet
• is vérifie l'identité (même objet)
• Retourne : True

Comment ça fonctionne :
• MyClass() crée une instance (obj1)
• obj2 = obj1 assigne la même référence
• obj1 and obj2 point to same object
• obj1 is obj2 checks if same object
• Same object, so returns: True

Exemple :
class MyClass: pass
obj1 = MyClass()             # Creates instance
obj2 = obj1                  # Assigns same reference
obj1 is obj2                 # True (same object)

Usages courants :
• Reference check: obj1 is obj2 (check if same object)
• Object identity: if obj1 is obj2: (same reference)
• Object identity
• Reference comparison

Exemple : Si class MyClass: pass; obj1 = MyClass(); obj2 = obj1; obj1 is obj2, alors obj1 is obj2 returns True car la même référence d'objet est identique — les deux variables pointent vers le même objet.
`,
  2183: `Par défaut, l'opérateur == compare l'identité des objets (comme is) si __eq__ n'est pas défini. Si class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2, alors obj1 == obj2 returns False because without a custom __eq__ method, == defaults to comparing object identity, which is the same as is. Since obj1 et obj2 sont des instances différentes, they are not equal. Pour définir une égalité personnalisée, il faut implémenter __eq__.

Comportement par défaut de == :
• obj1 == obj2 returns False
• Pas de __eq__ défini
• == utilise par défaut la comparaison d'identité (comme is)
• Les instances différentes ne sont pas égales
• Retourne : False

Comment ça fonctionne :
• obj1 == obj2 utilise l'opérateur ==
• Pas de méthode __eq__ définie
• Python utilise la comparaison d'identité par défaut
• Compare obj1 is obj2 (identité)
• Different objects, so returns: False

Exemple :
class MyClass: pass
obj1 = MyClass(); obj2 = MyClass()
obj1 == obj2                 # False (default: identity comparison)
obj1 is obj2                 # False (same result)

Usages courants :
• Default comparison: == compares identity if no __eq__
• Custom equality: define __eq__ for value comparison
• Object comparison
• Equality operators

Exemple : Si class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2, alors obj1 == obj2 returns False car le == par défaut compare l'identité (comme is) quand __eq__ n'est pas défini, et les instances différentes ne sont pas identiques.
`,
  2184: `La méthode __eq__ remplace le comportement par défaut de ==. Si class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2, alors obj1 == obj2 returns True because __eq__ is defined to always return True, overriding the default identity comparison. When you define __eq__, Python uses it for == comparisons instead of the default identity check.

__eq__ remplace == :
• obj1 == obj2 returns True
• __eq__ définit le comportement de ==
• __eq__ retourne toujours True
• Remplace la comparaison d'identité par défaut
• Retourne : True

Comment ça fonctionne :
• obj1 == obj2 utilise l'opérateur ==
• Python appelle obj1.__eq__(obj2)
• __eq__ executes: return True
• Retourne le résultat de la comparaison
• Retourne : True

Exemple :
class MyClass:
    def __eq__(self, other):
        return True  # Always equal
obj1 = MyClass(); obj2 = MyClass()
obj1 == obj2                # True (uses __eq__)

Usages courants :
• Custom equality: def __eq__(self, other): return self.value == other.value
• Value comparison: == compares values, not identity
• Special methods
• Operator overloading

Exemple : Si class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 == obj2, alors obj1 == obj2 returns True car __eq__ remplace le comportement par défaut de ==, et il est défini pour retourner True.
`,
  2185: `Si __ne__ n'est pas défini, Python le fournit automatiquement comme négation de __eq__. Si class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 != obj2, alors obj1 != obj2 returns False because __ne__ is not defined, so Python utilise not (obj1 == obj2), which is not True = False. Cela garantit que != est l'opposé logique de ==.

__ne__ utilise par défaut not __eq__ :
• obj1 != obj2 returns False
• __ne__ non défini
• Python utilise not (obj1 == obj2)
• obj1 == obj2 retourne True (de __eq__)
• not True = False
• Retourne : False

Comment ça fonctionne :
• obj1 != obj2 uses != operator
• __ne__ non défini
• Python utilise not (obj1 == obj2)
• obj1 == obj2 retourne True (de __eq__)
• not True = False
• Retourne : False

Exemple :
class MyClass:
    def __eq__(self, other):
        return True
obj1 = MyClass(); obj2 = MyClass()
obj1 != obj2                # False (not (obj1 == obj2) = not True)

Usages courants :
• Automatic __ne__: Python provides not __eq__ if __ne__ non défini
• Logical consistency: != is opposite of ==
• Special methods
• Operator overloading

Exemple : Si class MyClass: def __eq__(self, other): return True; obj1 = MyClass(); obj2 = MyClass(); obj1 != obj2, alors obj1 != obj2 returns False car __ne__ utilise par défaut not __eq__ si non défini, donc not True = False.
`,
  2186: `La méthode __hash__ définit la valeur de hachage d'un objet. Si class MyClass: def __hash__(self): return 1; hash(MyClass()), alors hash(MyClass()) returns 1 car __hash__ est une méthode spéciale appelée quand on utilise hash() sur un objet. La valeur de hachage est utilisée pour les clés de dictionnaire et l'appartenance aux ensembles. Les objets avec __hash__ défini peuvent être utilisés comme clés de dictionnaire ou ajoutés aux ensembles.

Méthode __hash__ :
• hash(MyClass()) returns 1
• __hash__ defines hash value
• Called by hash() function
• Returns hash value: 1
• Retourne : 1

Comment ça fonctionne :
• hash(MyClass()) calls hash() function
• Python calls instance.__hash__()
• __hash__ executes: return 1
• Returns hash value
• Retourne : 1

Exemple :
class MyClass:
    def __hash__(self):
        return 1
hash(MyClass())              # 1 (uses __hash__)

Usages courants :
• Hashable objects: def __hash__(self): return hash(self.value)
• Dictionary keys: objects with __hash__ can be dict keys
• Special methods
• Object hashing

Exemple : Si class MyClass: def __hash__(self): return 1; hash(MyClass()), alors hash(MyClass()) returns 1 car __hash__ définit la valeur de hachage d'un objet, utilisée par hash().
`,
  2187: `Définir __eq__ sans __hash__ rend un objet non hachable. Si class MyClass: def __eq__(self, other): return True; hash(MyClass()), alors hash(MyClass()) raises a TypeError because quand on définit __eq__ sans __hash__, Python définit __hash__ à None, rendant l'objet non hachable. Cela empêche les objets d'être utilisés comme clés de dictionnaire ou ajoutés aux ensembles. Pour rendre un objet hachable, il faut définir __eq__ et __hash__, ou ne définir ni l'un ni l'autre.

__eq__ sans __hash__ :
• hash(MyClass()) raises TypeError
• __eq__ défini, __hash__ non défini
• Python définit __hash__ = None
• L'objet devient non hachable
• Raises TypeError

Comment ça fonctionne :
• hash(MyClass()) calls hash() function
• __eq__ is defined, __hash__ is not
• Python définit __hash__ = None (unhashable)
• hash() ne peut pas hacher un objet non hachable
• Lève TypeError : unhashable type

Exemple :
class MyClass:
    def __eq__(self, other):
        return True
hash(MyClass())              # TypeError (unhashable)

Usages courants :
• Understanding hashability: __eq__ without __hash__ makes unhashable
• Hashable objects: define both __eq__ and __hash__
• Special methods
• Object hashing

Exemple : Si class MyClass: def __eq__(self, other): return True; hash(MyClass()), alors hash(MyClass()) raises a TypeError because defining __eq__ without __hash__ makes the object unhashable (Python définit __hash__ = None).
`,
  2188: `Les objets avec __hash__ défini peuvent être utilisés comme clés de dictionnaire. Si class MyClass: def __eq__(self, other): return True; def __hash__(self): return 1; {MyClass(): 1}, alors {MyClass(): 1} creates a dictionary with a MyClass instance as a key because the object has both __eq__ and __hash__ defined, making it hashable. Les objets hachables peuvent être utilisés comme clés de dictionnaire et ajoutés aux ensembles.

Objet avec __hash__ comme clé de dict :
• {MyClass(): 1} creates dictionary
• MyClass instance is hashable (has __hash__)
• Peut être utilisé comme clé de dictionnaire
• Crée un dict : {instance MyClass : 1}
• Retourne : dict

Comment ça fonctionne :
• MyClass() crée une instance
• L'instance a __eq__ et __hash__ (hachable)
• {MyClass(): 1} uses instance as key
• Dictionary created successfully
• Retourne : {MyClass instance: 1}

Exemple :
class MyClass:
    def __eq__(self, other):
        return True
    def __hash__(self):
        return 1
{MyClass(): 1}               # {MyClass instance: 1} (hashable, can be key)

Usages courants :
• Dictionary keys: {obj: value} (obj must be hashable)
• Sets: {obj} (obj must be hashable)
• Hashable objects
• Object hashing

Exemple : Si class MyClass: def __eq__(self, other): return True; def __hash__(self): return 1; {MyClass(): 1}, alors {MyClass(): 1} creates a dictionary car les objets avec __hash__ défini peuvent être utilisés comme clés de dictionnaire.
`,
  2189: `La fonction id() retourne un identifiant entier unique pour un objet. Si class MyClass: pass; id(MyClass()), alors id(MyClass()) returns a unique integer id because id() retourne l'adresse mémoire (ou un identifiant unique) de l'objet. Chaque objet a un id unique, et l'id reste constant pendant la durée de vie de l'objet. L'id est utilisé en interne par Python pour les vérifications d'identité d'objet (l'opérateur is utilise id()).

id() function:
• id(MyClass()) returns unique integer id
• id() returns object identifier
• Unique for each object
• Represents memory address/identifier
• Retourne : integer

Comment ça fonctionne :
• MyClass() crée une instance
• id(instance) gets object identifier
• Returns unique integer
• Utilisé pour les vérifications d'identité
• Retourne : unique integer id

Exemple :
class MyClass: pass
id(MyClass())                # 140234567890 (unique integer id)
obj = MyClass()
id(obj)                      # 140234567891 (different id)

Usages courants :
• Object identity: id(obj1) == id(obj2) (same as obj1 is obj2)
• Unique identifier: id(obj) (object's unique id)
• Object identity
• Memory address

Exemple : Si class MyClass: pass; id(MyClass()), alors id(MyClass()) returns a unique integer id car id() retourne un identifiant unique pour un objet, représentant son adresse mémoire ou identifiant.
`,
  2190: `Les objets différents ont des ids différents. Si class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); id(obj1) == id(obj2), alors id(obj1) == id(obj2) returns False because obj1 et obj2 sont des instances différentes, so they have different ids. Chaque objet a un id unique qui le distingue de tous les autres objets. La fonction id() retourne un identifiant unique pour chaque objet, et les objets différents ont toujours des ids différents.

Objets différents, ids différents :
• id(obj1) == id(obj2) returns False
• obj1 et obj2 sont des instances différentes
• Chaque objet a un id unique
• Les objets différents ont des ids différents
• Retourne : False

Comment ça fonctionne :
• MyClass() creates first instance (obj1)
• MyClass() creates second instance (obj2)
• id(obj1) gets obj1's unique id
• id(obj2) gets obj2's unique id
• Different objects, different ids
• Retourne : False

Exemple :
class MyClass: pass
obj1 = MyClass()             # id(obj1) = 140234567890
obj2 = MyClass()             # id(obj2) = 140234567891 (different)
id(obj1) == id(obj2)         # False (different ids)

Usages courants :
• Identity check: id(obj1) == id(obj2) (same as obj1 is obj2)
• Unique identifiers: different objects have different ids
• Object identity
• Memory addresses

Exemple : Si class MyClass: pass; obj1 = MyClass(); obj2 = MyClass(); id(obj1) == id(obj2), alors id(obj1) == id(obj2) returns False car les objets différents ont des ids différents — chaque objet a un identifiant unique.
`,
  2191: `L'attribut __slots__ restreint les attributs pouvant être définis sur les instances. Si class MyClass: __slots__ = ['x', 'y']; obj = MyClass(); obj.x = 1; obj.z = 2, alors obj.z = 2 raises an AttributeError because __slots__ n'autorise que 'x' et 'y' as instance attributes. Toute tentative de définir un attribut non présent dans __slots__ lève une AttributeError. Cela économise la mémoire en empêchant la création de __dict__ pour les instances.

Restriction __slots__ :
• obj.z = 2 raises AttributeError
• __slots__ = ['x', 'y'] restricts allowed attributes
• Only 'x' and 'y' allowed
• 'z' n'est pas dans __slots__
• Raises AttributeError

Comment ça fonctionne :
• obj.x = 1 fonctionne (x dans __slots__)
• obj.z = 2 tente de définir 'z'
• 'z' n'est pas dans __slots__ = ['x', 'y']
• Attribut non autorisé
• Lève AttributeError : 'MyClass' object has no attribute 'z'

Exemple :
class MyClass:
    __slots__ = ['x', 'y']
obj = MyClass()
obj.x = 1                    # Works (x in __slots__)
obj.z = 2                    # AttributeError (z not in __slots__)

Usages courants :
• Memory optimization: __slots__ = ['attr1', 'attr2'] (saves memory)
• Attribute restriction: prevent dynamic attributes
• Class optimization
• Memory efficiency

Exemple : Si class MyClass: __slots__ = ['x', 'y']; obj = MyClass(); obj.x = 1; obj.z = 2, alors obj.z = 2 raises an AttributeError car __slots__ restreint les attributs autorisés à ceux listés, et 'z' n'est pas dans __slots__.
`,
  2192: `L'utilisation de __slots__ supprime l'attribut __dict__ des instances, économisant la mémoire. Si class MyClass: __slots__ = ['x']; obj = MyClass(); obj.x = 1; vars(obj), alors vars(obj) raises an AttributeError because __slots__ prevents the creation of __dict__ for instances. vars() retourne __dict__, mais les instances avec __slots__ n'ont pas __dict__, donc une erreur est levée. C'est l'avantage mémoire de __slots__ — les instances n'ont pas besoin d'un dictionnaire pour stocker les attributs.

__slots__ supprime __dict__ :
• vars(obj) raises AttributeError
• __slots__ prevents __dict__ creation
• Instances don't have __dict__
• vars() requires __dict__
• Raises AttributeError

Comment ça fonctionne :
• obj.x = 1 définit l'attribut (stocké dans les slots, pas __dict__)
• vars(obj) tente d'accéder à __dict__
• L'instance n'a pas __dict__ (__slots__ l'empêche)
• vars() ne peut pas accéder à un __dict__ inexistant
• Lève AttributeError : 'MyClass' object has no attribute '__dict__'

Exemple :
class MyClass:
    __slots__ = ['x']
obj = MyClass()
obj.x = 1
vars(obj)                    # AttributeError (no __dict__)

Usages courants :
• Memory optimization: __slots__ removes __dict__ (saves memory)
• Fixed attributes: __slots__ = ['attr1', 'attr2'] (no dynamic attributes)
• Class optimization
• Memory efficiency

Exemple : Si class MyClass: __slots__ = ['x']; obj = MyClass(); obj.x = 1; vars(obj), alors vars(obj) raises an AttributeError car __slots__ supprime __dict__ des instances, et vars() requiert __dict__.
`,
  2193: `L'attribut __dict__ contient un dictionnaire des attributs d'instance. Si class MyClass: def __init__(self): self.x = 1; obj = MyClass(); obj.__dict__, alors obj.__dict__ returns {'x': 1} because __dict__ est un dictionnaire qui stocke tous les attributs d'instance. Quand __init__ définit self.x = 1, cela crée un attribut d'instance stocké dans obj.__dict__. C'est ainsi que Python stocke les attributs d'instance en interne.

__dict__ contient les attributs d'instance:
• obj.__dict__ returns {'x': 1}
• __dict__ est le dictionnaire des attributs d'instance
• self.x = 1 crée une instance attribute
• Stored in obj.__dict__
• Retourne : {'x': 1}

Comment ça fonctionne :
• MyClass() appelle __init__(self)
• __init__ sets self.x = 1 (instance attribute)
• Attribut d'instance stocké dans obj.__dict__
• obj.__dict__ contains {'x': 1}
• Retourne : {'x': 1}

Exemple :
class MyClass:
    def __init__(self):
        self.x = 1
obj = MyClass()
obj.__dict__                 # {'x': 1} (instance attributes)

Usages courants :
• Instance attributes: obj.__dict__ (get all instance attributes)
• Attribute dictionary: obj.__dict__ shows instance data
• Object inspection
• Attribute access

Exemple : Si class MyClass: def __init__(self): self.x = 1; obj = MyClass(); obj.__dict__, alors obj.__dict__ returns {'x': 1} because __dict__ contient les attributs d'instance, and self.x = 1 creates an instance attribute stored in __dict__.
`,
  2194: `L'attribut __dict__ sur une classe contient les attributs et méthodes de classe. Si class MyClass: x = 1; MyClass.__dict__, alors MyClass.__dict__ returns a dictionary with class attributes and methods because __dict__ sur une classe stocke toutes les données au niveau de la classe, incluant les attributs de classe (comme x = 1), les méthodes et autres métadonnées de classe. C'est le dictionnaire de namespace de la classe.

__dict__ de la classe :
• MyClass.__dict__ returns dict with class attributes
• __dict__ contains class-level data
• Includes class attributes (x = 1)
• Includes methods and metadata
• Retourne : dict

Comment ça fonctionne :
• class MyClass: x = 1 crée la classe
• Attributs de classe stockés dans MyClass.__dict__
• __dict__ contains 'x': 1 and other class data
• Returns dictionary of class attributes
• Retourne : dict

Exemple :
class MyClass: x = 1
MyClass.__dict__             # {...'x': 1, ...} (class attributes and methods)

Usages courants :
• Class attributes: MyClass.__dict__ (get all class attributes)
• Class dictionary: MyClass.__dict__ shows class data
• Object inspection
• Class introspection

Exemple : Si class MyClass: x = 1; MyClass.__dict__, alors MyClass.__dict__ returns a dictionary with class attributes car __dict__ sur une classe contient les attributs de classe, méthodes et autres données au niveau classe.
`,
  2195: `Les méthodes sont stockées dans le __dict__ de la classe. Si class MyClass: def method(self): pass; 'method' in MyClass.__dict__, alors 'method' in MyClass.__dict__ returns True because methods are class attributes, so they're stored in the class's __dict__. Quand on définit une méthode dans une classe, elle devient un attribut de la classe, stocké dans MyClass.__dict__.

Méthodes dans le __dict__ de la classe :
• 'method' in MyClass.__dict__ returns True
• Methods are class attributes
• Stored in class __dict__
• 'method' is in the dictionary
• Retourne : True

Comment ça fonctionne :
• def method(self): pass définit la méthode
• La méthode devient un attribut de classe
• Stocké dans MyClass.__dict__
• 'method' in MyClass.__dict__ vérifie si la clé existe
• Retourne : True

Exemple :
class MyClass:
    def method(self): pass
'method' in MyClass.__dict__  # True (method in class __dict__)

Usages courants :
• Method checking: 'method' in MyClass.__dict__ (check if method exists)
• Class introspection: MyClass.__dict__ shows methods
• Object inspection
• Method discovery

Exemple : Si class MyClass: def method(self): pass; 'method' in MyClass.__dict__, alors 'method' in MyClass.__dict__ returns True car les méthodes sont stockées dans le __dict__ de la classe comme attributs de classe.
`,
  2196: `La fonction type() retourne la classe d'une instance. Si class MyClass: pass; obj = MyClass(); type(obj), alors type(obj) returns <class '__main__.MyClass'> because type() retourne la classe à laquelle appartient une instance. For an instance of MyClass, type() returns the MyClass class object. Utile pour la vérification de type et l'introspection.

type() sur une instance :
• type(obj) returns <class '__main__.MyClass'>
• type() returns class of instance
• obj is instance of MyClass
• Retourne l'objet classe
• Retourne : <class '__main__.MyClass'>

Comment ça fonctionne :
• obj = MyClass() crée une instance
• type(obj) obtient la classe de l'instance
• L'instance appartient à la classe MyClass
• Retourne l'objet classe
• Retourne : <class '__main__.MyClass'>

Exemple :
class MyClass: pass
obj = MyClass()
type(obj)                    # <class '__main__.MyClass'> (class of instance)

Usages courants :
• Type checking: if type(obj) == MyClass: ...
• Type inspection: print(type(instance))
• Object type
• Type identification

Exemple : Si class MyClass: pass; obj = MyClass(); type(obj), alors type(obj) returns <class '__main__.MyClass'> because type() retourne la classe à laquelle appartient une instance.
`,
  2197: `Les classes sont des instances de type (la métaclasse). Si class MyClass: pass; type(MyClass), alors type(MyClass) returns <class 'type'> because les classes elles-mêmes sont des objets, et elles sont des instances de la classe type (la métaclasse). En Python, tout est un objet — les classes sont aussi des objets, et elles sont des instances de type. C'est le fondement du système de métaclasses de Python.

Les classes sont des instances de type :
• type(MyClass) returns <class 'type'>
• Classes are objects
• Classes are instances of type (metaclass)
• type is the class of classes
• Retourne : <class 'type'>

Comment ça fonctionne :
• class MyClass: pass crée l'objet classe
• MyClass est un objet (instance de type)
• type(MyClass) obtient la classe de MyClass
• MyClass est une instance de type
• Retourne : <class 'type'>

Exemple :
class MyClass: pass
type(MyClass)                # <class 'type'> (classes are instances of type)

Usages courants :
• Metaclass understanding: classes are instances of type
• Type system: type is the class of classes
• Metaclasses
• Type system

Exemple : Si class MyClass: pass; type(MyClass), alors type(MyClass) returns <class 'type'> car les classes sont des instances de type (la métaclasse) — les classes elles-mêmes sont des objets.
`,
  2198: `Toutes les classes en Python héritent de object par défaut. Si class MyClass: pass; issubclass(MyClass, object), alors issubclass(MyClass, object) returns True because même sans spécifier explicitement une classe parente, Python fait automatiquement de object la classe de base. C'est pourquoi toutes les classes ont accès aux méthodes comme __str__, __repr__, etc. — elles héritent de object.

Toutes les classes héritent de object :
• issubclass(MyClass, object) returns True
• MyClass inherits from object (default)
• Even without explicit parent
• object is base class
• Retourne : True

Comment ça fonctionne :
• class MyClass: pass creates class
• Pas de classe parente explicite spécifiée
• Python fait automatiquement de object la classe de base
• issubclass(MyClass, object) vérifie l'héritage
• Retourne : True

Exemple :
class MyClass: pass
issubclass(MyClass, object)  # True (all classes inherit from object)

Usages courants :
• Inheritance check: issubclass(Class, object) (always True)
• Base class: object is base of all classes
• Object-oriented programming
• Inheritance hierarchy

Exemple : Si class MyClass: pass; issubclass(MyClass, object), alors issubclass(MyClass, object) returns True car toutes les classes héritent de object par défaut, même sans spécification explicite.
`,
  2199: `Les classes sont des instances de type. Si class MyClass: pass; isinstance(MyClass, type), alors isinstance(MyClass, type) returns True because les classes sont des objets, et elles sont des instances de la classe type. In Python, les classes sont créées par la métaclasse type, donc chaque classe est une instance de type. C'est le fondement du système de métaclasses de Python — les classes sont des objets créés par type.

Les classes sont des instances de type :
• isinstance(MyClass, type) returns True
• Classes are objects
• Classes are instances of type
• type is the class of classes
• Retourne : True

Comment ça fonctionne :
• class MyClass: pass crée l'objet classe
• MyClass est un objet (instance de type)
• isinstance(MyClass, type) checks if MyClass est une instance de type
• MyClass est une instance de type
• Retourne : True

Exemple :
class MyClass: pass
isinstance(MyClass, type)    # True (classes are instances of type)

Usages courants :
• Metaclass understanding: classes are instances of type
• Type checking: isinstance(Class, type) (always True for classes)
• Metaclasses
• Type system

Exemple : Si class MyClass: pass; isinstance(MyClass, type), alors isinstance(MyClass, type) returns True car les classes sont des instances de type — les classes sont des objets créés par la métaclasse type.
`,
  2200: `La méthode mro() retourne l'ordre de résolution des méthodes (MRO) — la chaîne d'héritage montrant comment Python cherche les attributs et méthodes. Si class MyClass: pass; MyClass.mro(), alors MyClass.mro() returns a list showing the method resolution order because mro() retourne la linéarisation de la hiérarchie d'héritage. Pour une classe simple sans parents explicites, cela affiche [MyClass, object] — la classe elle-même et sa classe de base (object).

Méthode mro() :
• MyClass.mro() returns Method Resolution Order list
• mro() returns inheritance chain
• Shows order Python searches for attributes
• [MyClass, object] for simple class
• Retourne : list

Comment ça fonctionne :
• MyClass.mro() appelle la méthode mro()
• mro() calcule l'ordre de résolution des méthodes
• Affiche la chaîne d'héritage : [MyClass, object]
• Python cherche les attributs dans cet ordre
• Retourne : [MyClass, object]

Exemple :
class MyClass: pass
MyClass.mro()                # [<class '__main__.MyClass'>, <class 'object'>]

Usages courants :
• Inheritance chain: MyClass.mro() (see inheritance order)
• Method resolution: understand how Python finds attributes
• Object-oriented programming
• Inheritance hierarchy

Exemple : Si class MyClass: pass; MyClass.mro(), alors MyClass.mro() returns a Method Resolution Order list car mro() retourne la chaîne d'héritage montrant comment Python cherche les attributs et méthodes, typiquement [MyClass, object] pour une classe simple.
`,
  2201: `La méthode __eq__ définit le comportement d'égalité personnalisé pour les instances de V. Quand Python évalue V(1) == V(1), it calls V.__eq__(V(1), V(1)), which compares self.x == o.x, i.e. 1 == 1, returning True.

Concepts clés :
• __eq__ overrides the == operator
• Sans __eq__, == vérifie l'identité (is), pas l'égalité des valeurs
• Deux objets V(1) distincts sont des objets différents mais égaux par valeur ici
• __eq__ reçoit l'autre opérande comme second argument

Comment ça fonctionne :
• V(1) creates an instance with x = 1
• V(1) == V(1) calls __eq__ on the left operand
• self.x == o.x evaluates 1 == 1
• Result: True

Exemples :
• V(1) == V(1)  # True (same x value)
• V(1) == V(2)  # False (different x value)
• V(1) is V(1)  # False (different objects)

Usages courants :
• Value-based equality for custom objects
• Needed for using objects in sets or as dict keys (with __hash__)
• Data classes and model comparisons`,
  2202: `La méthode __ne__ définit le comportement de l'opérateur !=. When V(1) != V(2) is evaluated, Python calls V.__ne__(V(1), V(2)), which checks self.x != o.x, i.e. 1 != 2, returning True.

Concepts clés :
• __ne__ overrides the != operator
• En Python 3, si on définit __eq__ mais pas __ne__, Python génère automatiquement __ne__ comme négation de __eq__
• Définir __ne__ explicitement donne un contrôle total sur l'inégalité
• __ne__ receives the right operand as the second argument

Comment ça fonctionne :
• V(1) has x = 1, V(2) has x = 2
• V(1) != V(2) calls __ne__ on the left operand
• self.x != o.x evaluates 1 != 2
• Result: True

Exemples :
• V(1) != V(2)  # True
• V(3) != V(3)  # False

Usages courants :
• Custom inequality logic
• Usually paired with __eq__ for consistency
• Filtering and conditional checks`,
  2203: `La méthode __lt__ définit le comportement de l'opérateur < (inférieur à). When V(1) < V(2) is evaluated, Python calls V.__lt__(V(1), V(2)), which checks self.x < o.x, i.e. 1 < 2, returning True.

Concepts clés :
• __lt__ overrides the < operator
• Utilisé par sorted() et sort() lors de la comparaison d'objets
• Fait partie des méthodes de comparaison riches (__lt__, __le__, __gt__, __ge__, __eq__, __ne__)
• functools.total_ordering peut générer automatiquement le reste si __eq__ et une méthode d'ordre sont définies

Comment ça fonctionne :
• V(1) has x = 1, V(2) has x = 2
• V(1) < V(2) calls __lt__ on the left operand
• self.x < o.x evaluates 1 < 2
• Result: True

Exemples :
• V(1) < V(2)   # True
• V(5) < V(3)   # False
• sorted([V(3), V(1), V(2)], key=lambda v: v.x)  # works with key

Usages courants :
• Enabling sorting of custom objects
• Ordered comparisons in data structures
• Priority queues and binary search`,
  2204: `La méthode __le__ définit le comportement de l'opérateur <= (inférieur ou égal). When V(2) <= V(2) is evaluated, Python calls V.__le__(V(2), V(2)), which checks self.x <= o.x, i.e. 2 <= 2, returning True.

Concepts clés :
• __le__ overrides the <= operator
• Cas limite : des valeurs égales retournent True pour <=
• Fait partie des six méthodes de comparaison riches
• Peut être généré automatiquement avec functools.total_ordering

Comment ça fonctionne :
• Both V(2) instances have x = 2
• V(2) <= V(2) calls __le__ on the left operand
• self.x <= o.x evaluates 2 <= 2
• Result: True

Exemples :
• V(1) <= V(2)  # True
• V(2) <= V(2)  # True
• V(3) <= V(2)  # False

Usages courants :
• Range checks and boundary conditions
• Sorted data validation
• Comparison chains like V(1) <= V(2) <= V(3)`,
  2205: `Définir __gt__ sur une classe permet de comparer les instances avec l'opérateur >. Quand on écrit a > b, Python appelle a.__gt__(b). C'est l'une des six méthodes de comparaison riches.

Concepts clés :
• __gt__ overrides the > operator
• Called when using > between instances of the class
• Doit retourner True ou False (ou NotImplemented)
• Fait partie du protocole de comparaison riche avec __lt__, __le__, __ge__, __eq__, __ne__

Comment ça fonctionne :
• class V: def __gt__(self, o): return self.x > o.x
• V(3) > V(1) calls V.__gt__(V(3), V(1))
• self.x > o.x evaluates 3 > 1 = True
• Si __gt__ de l'opérande gauche retourne NotImplemented, Python essaie __lt__ de l'opérande droite

Exemples :
• V(5) > V(3)  # True
• V(1) > V(2)  # False
• max(V(1), V(5), V(3))  # works if __gt__ is defined

Usages courants :
• Enabling > comparisons for custom objects
• Working with max(), heapq, sorting
• Building ordered collections`,
  2206: `La méthode __add__ définit le comportement de l'opérateur +. When V(1,2) + V(3,4) is evaluated, Python calls V.__add__(V(1,2), V(3,4)), which creates a new V with x = 1+3 = 4 and y = 2+4 = 6.

Concepts clés :
• __add__ overrides the + operator for custom classes
• Doit retourner une nouvelle instance plutôt que de modifier self (modèle d'immuabilité)
• La méthode reçoit l'opérande droit comme second argument
• L'addition vectorielle est un cas d'usage classique pour __add__

Comment ça fonctionne :
• V(1,2) has x=1, y=2; V(3,4) has x=3, y=4
• V(1,2) + V(3,4) calls __add__
• Returns V(1+3, 2+4) = V(4, 6)
• v.x = 4, v.y = 6, so (v.x, v.y) = (4, 6)

Exemples :
• V(0,0) + V(1,1)  # V(1,1)
• V(-1,2) + V(1,-2)  # V(0,0)

Usages courants :
• Vector and matrix arithmetic
• Complex number types
• Currency or measurement addition`,
  2207: `La méthode __mul__ définit le comportement de l'opérateur *. When V(3) * 4 is evaluated, Python calls V.__mul__(V(3), 4), which creates a new V with x = 3 * 4 = 12.

Concepts clés :
• __mul__ overrides the * operator
• L'opérande droit peut être de tout type (ici un int)
• Retourne une nouvelle instance V avec la valeur calculée
• Pour que 4 * V(3) fonctionne, il faudrait __rmul__

Comment ça fonctionne :
• V(3) has x = 3
• V(3) * 4 calls __mul__ with n = 4
• Returns V(3 * 4) = V(12)
• v.x = 12

Exemples :
• V(5) * 2   # V(10), v.x = 10
• V(0) * 100 # V(0), v.x = 0

Usages courants :
• Scalar multiplication for vectors
• Scaling custom numeric types
• Unit conversion objects`,
  2208: `La méthode __sub__ définit le comportement de l'opérateur - (soustraction). When V(10) - V(3) is evaluated, Python calls V.__sub__(V(10), V(3)), which creates a new V with x = 10 - 3 = 7.

Concepts clés :
• __sub__ overrides the binary - operator
• Returns a new instance with the computed difference
• Différent de __neg__ qui gère la négation unaire (-obj)
• L'ordre compte : V(10) - V(3) n'est pas la même chose que V(3) - V(10)

Comment ça fonctionne :
• V(10) has x = 10, V(3) has x = 3
• V(10) - V(3) calls __sub__
• Returns V(10 - 3) = V(7)
• v.x = 7

Exemples :
• V(5) - V(2)   # V(3), v.x = 3
• V(1) - V(1)   # V(0), v.x = 0

Usages courants :
• Vector subtraction
• Date/time difference calculations
• Custom numeric type arithmetic`,
  2209: `La méthode __neg__ définit le comportement de l'opérateur unaire - (négation). When -V(5) is evaluated, Python calls V.__neg__(V(5)), which creates a new V with x = -5.

Concepts clés :
• __neg__ overrides the unary - operator (negation, not subtraction)
• Les opérateurs unaires ne prennent qu'un opérande : -obj
• Autres méthodes unaires : __pos__ (+obj), __abs__ (abs(obj)), __invert__ (~obj)
• Doit retourner une nouvelle instance, ne pas modifier self

Comment ça fonctionne :
• V(5) has x = 5
• -V(5) calls __neg__
• Returns V(-5)
• v.x = -5

Exemples :
• -V(5)    # V(-5), v.x = -5
• -V(-3)   # V(3), v.x = 3
• -V(0)    # V(0), v.x = 0

Usages courants :
• Negating vectors or coordinates
• Implementing mathematical objects (complex numbers, matrices)
• Sign inversion for custom numeric types`,
  2210: `La méthode __abs__ définit le comportement de la fonction native abs() pour les instances. When abs(V(-7)) is called, Python calls V.__abs__(V(-7)), which returns abs(-7) = 7.

Concepts clés :
• __abs__ overrides the built-in abs() function
• Peut retourner tout type (ici retourne un int, pas une instance V)
• Pour les vecteurs, __abs__ retourne souvent la magnitude (longueur)
• abs() est une fonction native qui délègue à __abs__

Comment ça fonctionne :
• V(-7) has x = -7
• abs(V(-7)) calls __abs__
• Returns abs(-7) = 7
• Result: 7 (an integer, not a V instance)

Exemples :
• abs(V(-7))   # 7
• abs(V(3))    # 3
• abs(V(0))    # 0

Usages courants :
• Computing magnitudes of vectors
• Absolute value for custom numeric types
• Distance calculations`,
  2211: `La méthode __floordiv__ définit le comportement de l'opérateur // (division entière). When V(7) // V(2) is evaluated, Python calls V.__floordiv__(V(7), V(2)), which creates a new V with x = 7 // 2 = 3.

Concepts clés :
• __floordiv__ overrides the // operator
• La division entière tronque vers l'infini négatif
• Différent de __truediv__ qui remplace /
• 7 // 2 = 3 (not 3.5)

Comment ça fonctionne :
• V(7) has x = 7, V(2) has x = 2
• V(7) // V(2) calls __floordiv__
• Returns V(7 // 2) = V(3)
• v.x = 3

Exemples :
• V(7) // V(2)   # V(3), v.x = 3
• V(10) // V(3)  # V(3), v.x = 3
• V(-7) // V(2)  # V(-4), v.x = -4 (rounds toward -inf)

Usages courants :
• Integer division for custom types
• Pagination calculations
• Grid/tile coordinate math`,
  2212: `La méthode __mod__ définit le comportement de l'opérateur % (modulo). Quand V(7) % V(3) est évalué, Python calls V.__mod__(V(7), V(3)), qui crée un nouveau V avec x = 7 % 3 = 1.

Concepts clés :
• __mod__ overrides the % operator
• Retourne le reste de la division
• 7 = 3 * 2 + 1, so 7 % 3 = 1
• Peut aussi être utilisé pour le formatage de chaîne si souhaité (comme str.__mod__)

Comment ça fonctionne :
• V(7) has x = 7, V(3) has x = 3
• V(7) % V(3) calls __mod__
• Returns V(7 % 3) = V(1)
• v.x = 1

Exemples :
• V(7) % V(3)   # V(1), v.x = 1
• V(10) % V(5)  # V(0), v.x = 0
• V(8) % V(3)   # V(2), v.x = 2

Usages courants :
• Cyclic operations (clock arithmetic)
• Checking divisibility
• Custom modular arithmetic types`,
  2213: `La méthode __pow__ définit le comportement de l'opérateur ** (exponentiation). Quand V(2) ** 3 est évalué, Python calls V.__pow__(V(2), 3), qui crée un nouveau V avec x = 2 ** 3 = 8.

Concepts clés :
• __pow__ remplace l'opérateur ** et la fonction native pow()
• pow(a, b) appelle a.__pow__(b)
• pow(a, b, mod) appelle a.__pow__(b, mod) pour la puissance à trois arguments avec modulo
• The right operand can be any type

Comment ça fonctionne :
• V(2) has x = 2
• V(2) ** 3 calls __pow__ with n = 3
• Returns V(2 ** 3) = V(8)
• v.x = 8

Exemples :
• V(2) ** 3   # V(8), v.x = 8
• V(3) ** 2   # V(9), v.x = 9
• V(5) ** 0   # V(1), v.x = 1

Usages courants :
• Mathematical computations with custom types
• Scientific calculations
• Custom exponentiation behavior`,
  2214: `La méthode __radd__ est la version réfléchie (ou côté droit) de __add__. Elle est appelée quand l'opérande gauche ne supporte pas l'opération + avec l'opérande droit. Par exemple, 5 + V(3) essaie d'abord int.__add__(5, V(3)), qui retourne NotImplemented car int ne sait pas additionner un V. Python se replie alors sur V.__radd__(V(3), 5).

Concepts clés :
• __radd__ is called when the left operand's __add__ fails (returns NotImplemented)
• Le préfixe « r » signifie « réfléchi » ou « droit »
• Chaque dunder arithmétique a une version réfléchie : __rsub__, __rmul__, __rtruediv__, etc.
• self dans __radd__ est l'opérande DROIT de l'expression

Comment ça fonctionne :
• 5 + V(3) tries int.__add__(5, V(3)) first
• int doesn't know about V, returns NotImplemented
• Python alors tries V.__radd__(V(3), 5)
• If __radd__ is defined, it handles the operation

Exemples :
• class V:
•     def __radd__(self, o): return V(o + self.x)
• v = 5 + V(3)  # calls V.__radd__(V(3), 5) → V(8)

Usages courants :
• Allowing built-in types on the left side of operators
• Making custom types work naturally in mixed expressions
• NumPy arrays use this extensively`,
  2215: `Quand Python évalue 5 + V(3), il essaie d'abord int.__add__(5, V(3)). Since int doesn't know how to add a V instance, il retourne NotImplemented. Python alors se replie sur V.__radd__(V(3), 5), où self est V(3) et o est 5. La méthode retourne V(5 + 3) = V(8).

Concepts clés :
• 5 + V(3) first tries int.__add__(5, V(3)) → NotImplemented
• Python alors tries V.__radd__(V(3), 5)
• Dans __radd__, self est l'opérande droit (V(3)), o est l'opérande gauche (5)
• Cela permet aux objets personnalisés de fonctionner à droite de + avec les types natifs

Comment ça fonctionne :
• 5 + V(3) → int.__add__(5, V(3)) fails
• Falls back to V.__radd__(V(3), 5)
• o = 5, self.x = 3
• Returns V(5 + 3) = V(8)
• v.x = 8

Exemples :
• 5 + V(3)   # V(8), v.x = 8
• 10 + V(0)  # V(10), v.x = 10
• 0 + V(7)   # V(7), v.x = 7

Usages courants :
• Enabling expressions like scalar + vector
• Mixed-type arithmetic
• Interoperability with built-in numeric types`,
  2216: `La méthode __repr__ définit la représentation en chaîne « officielle » d'un objet. Quand repr(c) est appelé, Python appelle c.__repr__(), qui retourne la chaîne "C()".

Concepts clés :
• __repr__ est la représentation en chaîne pour le développeur
• Doit idéalement retourner une chaîne qui pourrait recréer l'objet
• Appelé par repr(), l'interpréteur interactif, et en repli pour str()
• Convention : repr(obj) doit ressembler à une expression Python valide

Comment ça fonctionne :
• C() crée une instance
• repr(c) appelle c.__repr__()
• Retourne la chaîne "C()"
• print affiche : C()

Exemples :
• repr(C())  # 'C()'
• C()        # In REPL, shows C()

Usages courants :
• Debugging and logging
• Interactive interpreter display
• Unambiguous object representation`,
  2217: `La méthode __str__ définit la représentation en chaîne « informelle » ou pour l'utilisateur. Quand str(C()) est appelé, Python appelle C().__str__(), qui retourne "I am C". Si __str__ n'était pas défini, str() se replierait sur __repr__.

Concepts clés :
• __str__ est pour l'affichage convivial, __repr__ est pour le débogage développeur
• str() et print() utilisent __str__ en premier
• If __str__ is not defined, Python se replie sur __repr__
• Les deux doivent retourner une chaîne

Comment ça fonctionne :
• C() crée une instance
• str(C()) calls __str__() → "I am C"
• If __str__ were missing, str() would call __repr__() → "C()"
• print uses str() internally

Exemples :
• str(C())    # 'I am C'
• repr(C())   # 'C()'
• print(C())  # I am C (uses __str__)

Usages courants :
• User-facing output with print()
• String formatting: f"{obj}" uses __str__
• Readable display vs debug representation`,
  2218: `Quand print(obj) est appelé, Python appelle en interne str(obj), qui cherche d'abord __str__. If __str__ is not defined, it se replie sur __repr__. Il n'y a pas de méthode __print__ en Python.

Concepts clés :
• print() convertit ses arguments en chaînes avec str()
• str() tries __str__ first
• If __str__ is not defined, str() se replie sur __repr__
• __repr__ doit toujours être défini comme repli
• __format__ est utilisé par format() et les f-strings, pas directement par print

Comment ça fonctionne :
• print(obj) calls str(obj) internally
• str(obj) checks for __str__
• If found, calls obj.__str__()
• If not found, calls obj.__repr__()
• The resulting string is printed to stdout

Exemples :
• class A: def __repr__(self): return "A repr"
• print(A())  # A repr (se replie sur __repr__)
• class B:
•     def __repr__(self): return "B repr"
•     def __str__(self): return "B str"
• print(B())  # B str (__str__ takes priority)

Usages courants :
• Understanding str vs repr priority
• Deciding which method to implement
• Debugging print output issues`,
  2219: `La méthode __format__ est appelée quand un objet apparaît dans une f-string ou un appel format() avec une spécification de format. Dans f"{C():xyz}", la partie après les deux-points ("xyz") est passée comme argument spec à __format__.

Concepts clés :
• __format__ gère le formatage format() et des f-strings
• La spécification de format (après :) est passée comme argument spec
• f"{obj:spec}" appelle obj.__format__(spec)
• format(obj, spec) appelle aussi obj.__format__(spec)

Comment ça fonctionne :
• f"{C():xyz}" creates a C instance and calls __format__ with spec="xyz"
• __format__ returns f"formatted:xyz" → "formatted:xyz"
• The f-string evaluates to "formatted:xyz"
• print outputs: formatted:xyz

Exemples :
• f"{C():abc}"      # "formatted:abc"
• f"{C():}"         # "formatted:" (empty spec)
• format(C(), "xyz") # "formatted:xyz"

Usages courants :
• Custom formatting for dates, numbers, currencies
• Alignment and padding control
• Domain-specific display formats`,
  2220: `La méthode __bool__ définit la valeur de vérité d'un objet. Quand bool(C()) est appelé, Python appelle C().__bool__(), qui retourne False. Cela signifie que les instances de C sont toujours falsy.

Concepts clés :
• __bool__ définit la véridicité pour les objets personnalisés
• Appelé par bool(), les instructions if, les boucles while et les opérateurs logiques
• Doit retourner True ou False
• Si __bool__ n'est pas défini, Python se replie sur __len__ (0 = falsy, non nul = truthy)
• Si aucun n'est défini, l'objet est toujours truthy

Comment ça fonctionne :
• C() crée une instance
• bool(C()) calls __bool__() → False
• Result: False

Exemples :
• bool(C())        # False
• if C(): "yes"    # skipped (falsy)
• not C()          # True

Usages courants :
• Empty container checks
• Validity/enabled state
• Null-like sentinel objects`,
  2221: `Quand un objet est utilisé dans un contexte booléen (comme une instruction if), Python appelle __bool__ pour déterminer sa valeur de vérité. Comme C.__bool__ retourne False, C() est falsy, donc la branche else s'exécute et r est défini à "no".

Concepts clés :
• Les instructions if appellent __bool__ pour évaluer la véridicité
• C().__bool__() returns False, so the if condition is False
• La branche else s'exécute, définissant r = "no"
• Tout contexte booléen (if, while, and, or, not) utilise __bool__

Comment ça fonctionne :
• C() crée une instance
• if C(): checks __bool__() → False
• Else branch runs: r = "no"
• print(r) → "no"

Exemples :
• class Truthy: def __bool__(self): return True
• if Truthy(): "yes"  # executes
• class Falsy: def __bool__(self): return False
• if Falsy(): "yes"   # skipped

Usages courants :
• Controlling flow based on object state
• Empty/non-empty checks
• Validity checks in conditionals`,
  2222: `Quand __bool__ n'est pas défini mais __len__ l'est, Python utilise __len__ pour déterminer la véridicité. Un objet dont __len__() retourne 0 est considéré falsy, comme les conteneurs natifs vides ([], {}, "").

Concepts clés :
• Sans __bool__, Python se replie sur __len__ pour les tests de vérité
• __len__() == 0 → falsy (comme une liste vide, une chaîne vide)
• __len__() > 0 → truthy (comme une liste non vide)
• C'est pourquoi bool([]) est False et bool([1]) est True

Comment ça fonctionne :
• C() crée une instance
• bool(C()) checks for __bool__ → not found
• Falls back to __len__() → returns 0
• 0 means falsy → bool(C()) = False

Exemples :
• class Empty: def __len__(self): return 0
• bool(Empty())  # False
• class NonEmpty: def __len__(self): return 5
• bool(NonEmpty())  # True

Usages courants :
• Custom container types automatically get truthiness from length
• Empty containers are falsy by convention
• Matches Python's built-in behavior for lists, dicts, strings`,
  2223: `Quand __bool__ n'est pas défini, Python se replie sur __len__ pour les tests de vérité. Comme __len__() retourne 5, qui est non nul, l'objet est considéré truthy.

Concepts clés :
• Without __bool__, Python uses __len__ for truthiness
• __len__() retournant une valeur non nulle signifie truthy
• Cela reflète le comportement natif : bool([1,2,3]) est True car len est 3
• __len__ doit retourner un entier non négatif

Comment ça fonctionne :
• C() crée une instance
• bool(C()) checks for __bool__ → not found
• Falls back to __len__() → returns 5
• 5 is nonzero → truthy → True

Exemples :
• class C: def __len__(self): return 5
• bool(C())  # True (nonzero length)
• class D: def __len__(self): return 0
• bool(D())  # False (zero length)

Usages courants :
• Non-empty custom containers are truthy
• Consistent with Python's truth protocol
• len() and bool() work together naturally`,
  2224: `La méthode __contains__ définit le comportement de l'opérateur 'in'. Quand 2 in C() est évalué, Python appelle C().__contains__(2), qui vérifie si 2 est dans [1, 2, 3]. Since 2 is in the list, it returns True.

Concepts clés :
• __contains__ remplace l'opérateur de test d'appartenance 'in'
• Appelé par les opérateurs 'in' et 'not in'
• Should return True or False
• Si __contains__ n'est pas défini, Python se replie sur l'itération à travers l'objet

Comment ça fonctionne :
• C() crée une instance
• 2 in C() calls C().__contains__(2)
• Checks: 2 in [1, 2, 3] → True
• Result: True

Exemples :
• 2 in C()  # True
• 5 in C()  # False
• 1 in C()  # True

Usages courants :
• Custom membership testing
• Implementing set-like or range-like objects
• Optimized containment checks (e.g., interval objects)`,
  2225: `The __contains__ method checks membership. When 5 in C() is evaluated, Python calls C().__contains__(5), which checks if 5 is in [1, 2, 3]. Since 5 is not in the list, it returns False.

Concepts clés :
• __contains__ est appelé pour 'in' et 'not in'
• 5 not in [1, 2, 3] → __contains__ returns False
• 'not in' est simplement la négation de 'in'
• La valeur retournée est convertie en bool

Comment ça fonctionne :
• C() crée une instance
• 5 in C() calls C().__contains__(5)
• Checks: 5 in [1, 2, 3] → False
• Result: False

Exemples :
• 5 in C()      # False
• 5 not in C()  # True
• 3 in C()      # True

Usages courants :
• Defining what elements belong to a custom collection
• Optimized search (e.g., binary search tree containment)
• Range membership (e.g., checking if a point is in a region)`,
  2226: `Cela implémente le protocole d'itérateur complet. R est à la fois un itérable (a __iter__) et un itérateur (a __next__). Chaque appel à __next__ incrémente self.i et le retourne. Quand self.i atteint self.n, il lève StopIteration pour signaler l'épuisement.

Concepts clés :
• Un itérateur doit implémenter __iter__ et __next__
• __iter__ retourne self (l'objet itérateur)
• __next__ retourne la valeur suivante ou lève StopIteration
• list() appelle __next__ répétitivement jusqu'à StopIteration

Comment ça fonctionne :
• R(3) creates iterator with n=3, i=0
• First __next__: i becomes 1, returns 1
• Second __next__: i becomes 2, returns 2
• Third __next__: i becomes 3, returns 3
• Fourth __next__: i (3) >= n (3), raises StopIteration
• list() collects [1, 2, 3]

Exemples :
• list(R(3))  # [1, 2, 3]
• list(R(0))  # [] (immediately stops)
• list(R(1))  # [1]

Usages courants :
• Custom sequences and ranges
• Lazy data processing
• Infinite iterators (without the stop condition)`,
  2227: `Le protocole d'itérateur en Python requiert deux méthodes : __iter__ et __next__. Un objet qui implémente les deux est un itérateur.

Concepts clés :
• __iter__() doit retourner l'objet itérateur lui-même (return self)
• __next__() doit retourner la valeur suivante ou lever StopIteration quand épuisé
• C'est formalisé dans collections.abc.Iterator
• Un itérable n'a besoin que de __iter__ (qui retourne un itérateur), mais un itérateur a besoin des deux

Comment ça fonctionne :
• for x in obj: appelle d'abord iter(obj) qui appelle obj.__iter__()
• Puis appelle répétitivement next(iterator) qui appelle iterator.__next__()
• Quand __next__ lève StopIteration, la boucle se termine
• Ce protocole est utilisé par les boucles for, list(), tuple(), sum(), etc.

Exemples :
• class MyIter:
•     def __iter__(self): return self
•     def __next__(self): raise StopIteration
• iter(MyIter())  # returns the MyIter instance
• next(MyIter())  # raises StopIteration

Usages courants :
• All Python iterators follow this protocol
• Files, generators, range objects are all iterators
• Custom data streams and lazy sequences`,
  2228: `Pour un objet itérateur, __iter__ doit retourner self. C'est requis pour que les itérateurs puissent être utilisés directement dans les boucles for et autres contextes d'itération. La distinction est importante : __iter__ d'un itérable retourne un itérateur (peut-être nouveau), mais __iter__ d'un itérateur retourne self.

Concepts clés :
• Iterator's __iter__ returns self (the iterator itself)
• Iterable's __iter__ returns a (possibly new) iterator
• Cela permet aux itérateurs d'être utilisés partout où des itérables sont attendus
• Une liste est itérable : list.__iter__() retourne un nouveau list_iterator à chaque fois

Comment ça fonctionne :
• for x in iterator: calls iter(iterator) → iterator.__iter__() → self
• Then calls next(self) repeatedly
• If __iter__ didn't return self, the iterator couldn't be used in for loops
• This is a consistency requirement of the protocol

Exemples :
• class MyIter:
•     def __iter__(self): return self  # must return self
•     def __next__(self): ...
• it = MyIter()
• iter(it) is it  # True

Usages courants :
• Every iterator follows this pattern
• Ensures iterators work in for loops
• Required by the iterator protocol`,
  2229: `Quand un itérateur n'a plus d'éléments à produire, __next__ doit lever StopIteration. C'est le signal standard qui indique à Python d'arrêter l'itération. Les boucles for, list() et autres consommateurs d'itérateurs attrapent StopIteration automatiquement.

Concepts clés :
• StopIteration is the standard signal for iterator exhaustion
• for loops catch StopIteration silently and end the loop
• Retourner None ferait de None une valeur produite valide, pas un signal d'arrêt
• StopIteration est une exception mais fait partie du flux normal des itérateurs

Comment ça fonctionne :
• Each call to __next__ returns the next value
• When there are no more values, raise StopIteration
• for x in iter: catches StopIteration and breaks the loop
• list(iter) catches StopIteration and returns collected items

Exemples :
• class Counter:
•     def __init__(self, n): self.n = n; self.i = 0
•     def __next__(self):
•         if self.i >= self.n: raise StopIteration
•         self.i += 1; return self.i

Usages courants :
• Every finite iterator raises StopIteration
• Generators do this automatically at the end
• Essential for proper iteration protocol compliance`,
  2230: `Cette classe délègue l'itération à l'itérateur d'une liste. Quand list(C()) est appelé, Python appelle C().__iter__(), qui retourne iter([1, 2, 3]) — un list_iterator. list() consomme alors cet itérateur pour produire [1, 2, 3].

Concepts clés :
• __iter__ peut déléguer à tout itérateur existant
• iter([1, 2, 3]) retourne un objet list_iterator
• C est un itérable (a __iter__) mais pas un itérateur lui-même (pas de __next__)
• Chaque appel à __iter__ crée un nouvel itérateur, permettant plusieurs passages

Comment ça fonctionne :
• C() crée une instance
• list(C()) calls iter(C()) → C().__iter__() → iter([1, 2, 3])
• list() consumes the list_iterator → [1, 2, 3]
• Result: [1, 2, 3]

Exemples :
• list(C())    # [1, 2, 3]
• for x in C(): print(x)  # 1, 2, 3
• tuple(C())   # (1, 2, 3)

Usages courants :
• Wrapping existing iterables with custom behavior
• Lazy proxies over collections
• Composing iterables from multiple sources`,
  2231: `Quand une classe a __getitem__ mais pas __iter__, Python utilise le protocole d'itération à l'ancienne : il appelle __getitem__(0), __getitem__(1), __getitem__(2), etc. jusqu'à ce qu'une IndexError soit levée.

Concepts clés :
• Itération à l'ancienne : Python appelle __getitem__ avec des indices croissants
• IndexError signale la fin de l'itération (comme StopIteration pour __next__)
• __getitem__(0) → 0*10=0, __getitem__(1) → 1*10=10, __getitem__(2) → 2*10=20
• __getitem__(3) raises IndexError, stopping iteration

Comment ça fonctionne :
• list(C()) tries iter(C()) → no __iter__, se replie sur __getitem__
• Calls __getitem__(0) → 0, __getitem__(1) → 10, __getitem__(2) → 20
• __getitem__(3) raises IndexError → iteration stops
• list() collects [0, 10, 20]

Exemples :
• list(C())  # [0, 10, 20]
• C()[0]     # 0
• C()[2]     # 20

Usages courants :
• Legacy sequence types
• Simple indexed access without full iterator protocol
• Backward compatibility with older Python code`,
  2232: `Quand __iter__ contient une instruction yield, il devient une fonction génératrice. Chaque appel à __iter__ retourne un nouvel itérateur de générateur. Le générateur produit i**2 pour i in range(4) : 0, 1, 4, 9.

Concepts clés :
• Utiliser yield dans __iter__ en fait une fonction génératrice
• Une fonction génératrice retourne un itérateur de générateur quand elle est appelée
• Le générateur gère __next__ et StopIteration automatiquement
• C'est la façon la plus pythonique d'implémenter __iter__

Comment ça fonctionne :
• Squares(4) crée une instance with n = 4
• list(Squares(4)) calls __iter__() → returns generator
• Generator yields: 0**2=0, 1**2=1, 2**2=4, 3**2=9
• Generator exhausts → StopIteration → list collects [0, 1, 4, 9]

Exemples :
• list(Squares(4))  # [0, 1, 4, 9]
• list(Squares(0))  # []
• list(Squares(1))  # [0]

Usages courants :
• Clean, readable iteration implementation
• Memory-efficient lazy iteration
• Most recommended way to define __iter__ for simple cases`,
  2233: `Utiliser yield dans __iter__ crée un itérateur basé sur un générateur. Chaque instruction yield produit une valeur. Après le dernier yield, le générateur retourne (lève StopIteration implicitement), et list() collecte toutes les valeurs produites.

Concepts clés :
• Plusieurs instructions yield produisent des valeurs en séquence
• La fonction se suspend après chaque yield et reprend au prochain next()
• Après le dernier yield, la fonction sort → StopIteration
• Pas besoin de StopIteration explicite avec les générateurs

Comment ça fonctionne :
• list(C()) calls __iter__() → returns generator
• next() → yields 1 (suspends)
• next() → yields 2 (suspends)
• next() → yields 3 (suspends)
• next() → function ends → StopIteration
• list collects [1, 2, 3]

Exemples :
• list(C())        # [1, 2, 3]
• for x in C(): x  # 1, 2, 3
• sum(C())         # 6

Usages courants :
• Fixed sequences with meaningful names
• Multi-step iteration with complex logic between yields
• State machine implementations`,
  2234: `La méthode __reversed__ définit ce qui se passe quand reversed() est appelé sur une instance. Ici, elle retourne iter([3, 2, 1]), qui est un list_iterator qui produit 3, 2, 1.

Concepts clés :
• __reversed__ remplace la fonction native reversed()
• Doit retourner un itérateur
• Sans __reversed__, reversed() requiert __len__ et __getitem__
• Permet une logique d'itération inverse personnalisée

Comment ça fonctionne :
• reversed(C()) calls C().__reversed__()
• Returns iter([3, 2, 1])
• list() consumes the iterator → [3, 2, 1]
• Result: [3, 2, 1]

Exemples :
• list(reversed(C()))  # [3, 2, 1]
• for x in reversed(C()): print(x)  # 3, 2, 1

Usages courants :
• Efficient reverse iteration without creating reversed copy
• Custom sequences with optimized reverse traversal
• Linked lists or trees with reverse iteration support`,
  2235: `Oui, tout objet qui définit __iter__ peut être utilisé dans une boucle for. La boucle for appelle iter(obj), qui appelle obj.__iter__() pour obtenir un itérateur, puis appelle répétitivement next() dessus.

Concepts clés :
• Un objet avec __iter__ est un itérable
• for x in obj: calls iter(obj) → obj.__iter__()
• L'itérateur retourné doit avoir __next__
• Les objets avec seulement __getitem__ fonctionnent aussi (protocole à l'ancienne)

Comment ça fonctionne :
• for x in obj: is equivalent to:
•   it = iter(obj)  # calls obj.__iter__()
•   while True:
•       try: x = next(it)  # calls it.__next__()
•       except StopIteration: break

Exemples :
• class C: def __iter__(self): return iter([1, 2])
• for x in C(): print(x)  # 1, 2

Usages courants :
• Making any custom object iterable
• Integration with all Python iteration tools
• for loops, list comprehensions, unpacking, etc.`,
  2236: `Appeler iter() sur une liste retourne un objet list_iterator. C'est un itérateur spécialisé qui parcourt les éléments de la liste un par un. Le list_iterator a __iter__ (retourne self) et __next__ (retourne l'élément suivant).

Concepts clés :
• iter(list) appelle list.__iter__() qui retourne un list_iterator
• Le list_iterator est un objet distinct de la liste
• Plusieurs appels à iter() sur la même liste retournent des itérateurs indépendants
• L'itérateur garde trace de sa position dans la liste

Comment ça fonctionne :
• iter([1, 2, 3]) → list_iterator object
• next(it) → 1, next(it) → 2, next(it) → 3, next(it) → StopIteration
• type(iter([1, 2, 3])) → <class 'list_iterator'>

Exemples :
• it = iter([1, 2, 3])
• next(it)  # 1
• next(it)  # 2
• type(it)  # <class 'list_iterator'>

Usages courants :
• Manual iteration with next()
• Understanding how for loops work under the hood
• Creating multiple independent iterators over the same data`,
  2237: `iter([1, 2, 3]) crée un list_iterator positionné au début. next() l'avance d'un pas et retourne le premier élément, qui est 1.

Concepts clés :
• iter() crée un itérateur depuis un itérable
• next() appelle __next__() sur l'itérateur pour obtenir la valeur suivante
• Le premier appel à next() retourne le premier élément
• Chaque appel suivant retourne l'élément suivant

Comment ça fonctionne :
• iter([1, 2, 3]) → list_iterator at position 0
• next(iterator) → calls __next__() → returns 1
• The iterator object created here is temporary (not saved)
• Result: 1

Exemples :
• next(iter([1, 2, 3]))   # 1
• next(iter("abc"))        # 'a'
• next(iter(range(10)))    # 0

Usages courants :
• Getting the first element of any iterable
• Peeking at the start of a stream
• next(iter(s), default) for safe first-element access`,
  2238: `La méthode __getitem__ définit le comportement d'indexation (obj[key]). Quand C()[1] est évalué, Python appelle C().__getitem__(1), qui retourne [10, 20, 30][1] = 20.

Concepts clés :
• __getitem__ remplace l'opérateur [] (indice)
• C()[1] appelle __getitem__(self, 1)
• L'index est passé comme argument key
• Peut supporter des indices entiers, des tranches ou toute clé hachable

Comment ça fonctionne :
• C() crée une instance
• C()[1] calls __getitem__(1)
• Returns [10, 20, 30][1] = 20
• Result: 20

Exemples :
• C()[0]  # 10
• C()[1]  # 20
• C()[2]  # 30

Usages courants :
• Custom sequence and mapping types
• Database record access
• Lazy data loading with indexing`,
  2239: `La méthode __len__ définit le comportement de la fonction native len(). Quand len(C()) est appelé, Python appelle C().__len__(), qui retourne 3.

Concepts clés :
• __len__ overrides the len() built-in
• Doit retourner un entier non négatif
• Affecte aussi bool() quand __bool__ n'est pas défini
• Utilisé par de nombreuses fonctions natives et structures de données

Comment ça fonctionne :
• C() crée une instance
• len(C()) calls __len__() → returns 3
• Result: 3

Exemples :
• len(C())  # 3
• bool(C())  # True (because __len__ returns 3, nonzero = truthy)

Usages courants :
• Custom container types (lists, queues, trees)
• Reporting size of data structures
• Integration with len(), bool(), and iteration`,
  2240: `Un itérable est tout objet avec __iter__ qui retourne un itérateur. Un itérateur est un objet avec __iter__ (retourne self) et __next__ (retourne la valeur suivante ou lève StopIteration). Tous les itérateurs sont itérables, mais pas tous les itérables sont des itérateurs.

Concepts clés :
• Iterable: has __iter__() that returns an iterator
• Iterator: has __iter__() (returns self) AND __next__()
• Une liste est itérable mais pas un itérateur (la liste a __iter__ mais pas __next__)
• iter([1,2,3]) retourne un list_iterator, qui EST un itérateur

Comment ça fonctionne :
• list has __iter__ → iterable (returns list_iterator)
• list_iterator has __iter__ and __next__ → iterator
• for x in [1,2,3]: first gets iterator via iter(), alors calls next()
• Generators are iterators (have both methods)

Exemples :
• [1,2,3] → iterable (has __iter__, no __next__)
• iter([1,2,3]) → iterator (has both __iter__ and __next__)
• range(5) → iterable (not an iterator until iter() is called)
• (x for x in range(5)) → generator = iterator

Usages courants :
• Understanding Python's iteration model
• Knowing when to implement __iter__ vs both methods
• Debugging iteration-related errors`,
  2241: `Le protocole de gestionnaire de contexte requiert deux méthodes : __enter__ et __exit__. Elles sont appelées par l'instruction 'with' pour configurer et libérer une ressource.

Concepts clés :
• __enter__ est appelé à l'entrée du bloc 'with'
• __exit__ est appelé à la sortie du bloc 'with' (même si une exception s'est produite)
• with obj as x: appelle __enter__ et lie sa valeur de retour à x
• __exit__ reçoit les infos d'exception (ou None si pas d'exception)

Comment ça fonctionne :
• with CM() as resource:
•     # __enter__ called, return value bound to 'resource'
•     # code block runs
• # __exit__ called automatically (even on exception)

Exemples :
• with open("file.txt") as f:  # file.__enter__() returns file
•     data = f.read()          # use the file
• # file.__exit__() closes the file automatically

Usages courants :
• File handling (open/close)
• Database connections (connect/disconnect)
• Lock acquisition and release
• Temporary state changes`,
  2242: `Quand l'instruction 'with' s'exécute, elle appelle CM().__enter__(), qui retourne la chaîne "resource". Cette valeur de retour est liée à la variable r via la clause 'as'. Dans le bloc with, r est "resource".

Concepts clés :
• 'with CM() as r:' appelle __enter__ et lie la valeur de retour à r
• __enter__ peut retourner n'importe quoi : self, un autre objet ou une valeur simple
• __exit__ is called when the block ends, even if an exception occurs
• *a dans __exit__ capture (exc_type, exc_val, exc_tb)

Comment ça fonctionne :
• CM() creates context manager instance
• __enter__() returns "resource"
• r = "resource" (bound by 'as')
• print(r) outputs: resource
• __exit__() called with no exception info

Exemples :
• with CM() as r: r   # "resource"
• with CM() as r: type(r)  # <class 'str'>

Usages courants :
• Returning file handles, connections, locks
• Returning computed resources
• Returning self for method chaining`,
  2243: `La valeur de retour de __enter__ est liée à la variable spécifiée après 'as' dans l'instruction 'with'. C'est souvent 'self' mais peut être n'importe quel objet.

Concepts clés :
• with X() as y: the return value of __enter__ becomes y
• Courant de retourner self pour que l'utilisateur puisse appeler des méthodes sur le gestionnaire
• open() retourne l'objet fichier depuis __enter__
• Peut retourner un objet différent (ex. une connexion, un verrou, un curseur)

Comment ça fonctionne :
• with CM() as r: calls CM().__enter__()
• Ce que __enter__ retourne devient la valeur de r
• Sans clause 'as', la valeur de retour est ignorée
• __enter__ peut retourner self, un autre objet ou None

Exemples :
• class CM: def __enter__(self): return self  # common pattern
• class CM: def __enter__(self): return "data"  # return different object
• with CM() as x: type(x)  # depends on __enter__ return

Usages courants :
• Returning resource handles
• Returning self for direct access to manager methods
• Returning wrapped or transformed resources`,
  2244: `La méthode __exit__ reçoit trois arguments décrivant toute exception survenue dans le bloc with : le type d'exception, la valeur d'exception et la traceback. Si aucune exception ne s'est produite, les trois sont None.

Concepts clés :
• __exit__(self, exc_type, exc_val, exc_tb)
• Sans exception : les trois sont None
• Si une exception s'est produite : exc_type est la classe d'exception, exc_val est l'instance, exc_tb est la traceback
• __exit__ peut supprimer l'exception en retournant True

Comment ça fonctionne :
• Normal exit: __exit__(self, None, None, None)
• Exception exit: __exit__(self, TypeError, TypeError("msg"), <traceback>)
• If __exit__ returns True, the exception is suppressed
• If __exit__ returns False/None, the exception propagates

Exemples :
• class CM:
•     def __exit__(self, exc_type, exc_val, exc_tb):
•         if exc_type is not None:
•             print(f"Erreur : {exc_val}")
•         return False  # don't suppress

Usages courants :
• Logging exceptions
• Cleaning up regardless of success/failure
• Conditionally suppressing exceptions`,
  2245: `Si __exit__ retourne une valeur truthy (typiquement True), toute exception survenue dans le bloc with est supprimée — elle ne se propage pas. Si __exit__ retourne une valeur falsy (False, None, etc.), l'exception se propage normalement.

Concepts clés :
• return True dans __exit__ → l'exception est étouffée
• return False ou None → l'exception se propage
• C'est puissant mais doit être utilisé avec précaution
• contextlib.suppress est un gestionnaire de contexte natif qui fait cela

Comment ça fonctionne :
• Exception occurs in with block
• Python calls __exit__(self, exc_type, exc_val, exc_tb)
• If __exit__ returns True: exception is suppressed, execution continues after with
• If __exit__ returns False/None: exception propagates normally

Exemples :
• class Suppress:
•     def __enter__(self): return self
•     def __exit__(self, *a): return True
• with Suppress():
•     raise ValueError("oops")
• print("continues!")  # this runs — exception suppressed

Usages courants :
• Silencing expected exceptions
• Implementing retry logic
• contextlib.suppress(ValueError) does the same thing`,
  2246: `Oui, contextlib.contextmanager est un décorateur qui transforme une fonction génératrice en gestionnaire de contexte. Au lieu d'écrire une classe avec __enter__ et __exit__, on écrit une fonction avec yield.

Concepts clés :
• Le code avant yield s'exécute à __enter__
• La valeur produite est liée à la variable 'as'
• Le code après yield s'exécute à __exit__
• Beaucoup plus concis qu'une classe complète

Comment ça fonctionne :
• from contextlib import contextmanager
• @contextmanager
• def my_cm():
•     print("entering")  # __enter__ equivalent
•     yield "resource"    # value for 'as'
•     print("exiting")   # __exit__ equivalent
• with my_cm() as r: print(r)  # entering, resource, exiting

Exemples :
• @contextmanager
• def timer():
•     start = time.time()
•     yield
•     print(f"Elapsed: {time.time() - start}")

Usages courants :
• Quick context managers without boilerplate
• Temporary state changes
• Resource management with less code`,
  2247: `La fonction native open() retourne un objet fichier (comme TextIOWrapper ou BufferedReader) qui implémente le protocole de gestionnaire de contexte. Il a __enter__ (retourne self) et __exit__ (ferme le fichier).

Concepts clés :
• open() retourne un objet fichier qui est aussi un gestionnaire de contexte
• __enter__ retourne l'objet fichier lui-même
• __exit__ ferme le fichier automatiquement
• Cela garantit que le fichier est toujours correctement fermé, même si une exception se produit

Comment ça fonctionne :
• with open("file.txt") as f:
•     __enter__() returns the file object → bound to f
•     # use f to read/write
• __exit__() closes the file automatically

Exemples :
• with open("data.txt") as f:
•     content = f.read()
• # f is automatically closed here
• f.closed  # True

Usages courants :
• Reading and writing files safely
• Ensuring files are closed even on errors
• The most common context manager in Python`,
  2248: `Si une exception se produit dans un bloc 'with', Python appelle __exit__ avec le type, la valeur et la traceback de l'exception. Cela garantit que le code de nettoyage s'exécute même en cas d'erreur. L'exception se propage ensuite sauf si __exit__ retourne True.

Concepts clés :
• __exit__ est TOUJOURS appelé, que le bloc réussisse ou lève une exception
• Avec exception : __exit__(self, exc_type, exc_val, exc_tb) avec les vraies infos d'exception
• En cas de succès : __exit__(self, None, None, None)
• Cette garantie est le but principal des gestionnaires de contexte

Comment ça fonctionne :
• with CM() as r:
•     raise ValueError("error")
• # __exit__ is called with (ValueError, ValueError("error"), <traceback>)
• # If __exit__ returns True, exception is suppressed
• # If __exit__ returns False/None, exception propagates after __exit__ runs

Exemples :
• class Logger:
•     def __enter__(self): return self
•     def __exit__(self, exc_type, exc_val, exc_tb):
•         if exc_type: print(f"Exception: {exc_val}")
•         return False  # propagate the exception

Usages courants :
• Guaranteed resource cleanup (close files, release locks)
• Exception logging and monitoring
• Transaction rollback on failure`,
  2249: `Python supporte à la fois les instructions 'with' imbriquées et plusieurs gestionnaires de contexte sur une seule ligne 'with'. Plusieurs gestionnaires de contexte sur une ligne sont supportés depuis Python 2.7/3.1, et la syntaxe multi-lignes entre parenthèses a été ajoutée en Python 3.10.

Concepts clés :
• Imbriqué : with A(): with B(): (chacun a son propre __exit__)
• Ligne unique : with A() as a, B() as b: (séparés par des virgules)
• Python 3.10+ : with (A() as a, B() as b): (entre parenthèses pour multi-lignes)
• Toutes les méthodes __exit__ des gestionnaires sont appelées dans l'ordre inverse

Comment ça fonctionne :
• with A() as a, B() as b:
•     # A.__enter__() alors B.__enter__()
•     # code block
• # B.__exit__() alors A.__exit__() (reverse order)
• Equivalent to nested with statements

Exemples :
• with open("in.txt") as fin, open("out.txt", "w") as fout:
•     fout.write(fin.read())
• # both files are properly closed

Usages courants :
• Opening multiple files simultaneously
• Acquiring multiple locks
• Database connection + cursor management`,
  2250: `Les gestionnaires de contexte garantissent que le code de nettoyage s'exécute même si une exception se produit dans le bloc géré. Ce motif, connu sous le nom de RAII (Resource Acquisition Is Initialization) dans d'autres langages, évite les fuites de ressources.

Concepts clés :
• Objectif principal : nettoyage garanti indépendamment des exceptions
• Ressources : fichiers, connexions, verrous, état temporaire
• L'instruction 'with' garantit que __exit__ est toujours appelé
• Élimine les bugs courants : oublier de fermer les fichiers, libérer les verrous, etc.

Comment ça fonctionne :
• with open("file.txt") as f:
•     data = f.read()        # if this raises, __exit__ still runs
•     process(data)          # if this raises, __exit__ still runs
• # f.close() called automatically by __exit__

Exemples :
• # Without context manager (error-prone):
• f = open("file.txt")
• try:
•     data = f.read()
• finally:
•     f.close()  # must remember this
•
• # With context manager (safe):
• with open("file.txt") as f:
•     data = f.read()  # cleanup is automatic

Usages courants :
• File I/O: open()
• Threading: Lock(), Semaphore()
• Database: connection cursors
• Testing: mock.patch(), tempfile
• Timing: measuring code execution time`,