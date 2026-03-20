/** French detailed blocks Level 1 IDs 481–490 */
export default {
  481: `oct(15) vaut "0o17" : représentation octale avec préfixe 0o.

Débutant :
• 15 décimal = 17 en base 8 (1*8+7).

Intermédiaire :
• Toujours une str en retour.

Expert :
• Cohérent avec les littéraux Python 0o...

Concepts clés :
• oct(), base 8.

Distinctions clés :
• oct vs format(n,'o') sans préfixe.

Fonctionnement :
• Division par 8 itérative.

Exécution étape par étape :
1. n=15.
2. "0o17".

Ordre des opérations :
• Appel oct.

Cas d'utilisation courants :
• Illustrer chmod.

Cas limites :
• n négatif : représentation signée.

Considérations de performance :
• O(log n).

Exemples :
• oct(8)

Remarques :
• int(s,8) pour inverse.`,
  482: `format(42, "b") vaut "101010" : format binaire sans préfixe 0b.

Débutant :
• Deuxième argument = mini-langage de format.
• Résultat str.

Intermédiaire :
• Diffère de bin(42) qui ajoute 0b.

Expert :
• Largeur et zéros possibles : format(42,"08b").

Concepts clés :
• format(), type b.

Distinctions clés :
• bin vs format(...,"b").

Fonctionnement :
• __format__ sur int.

Exécution étape par étape :
1. 42.
2. "101010".

Ordre des opérations :
• Appel format.

Cas d'utilisation courants :
• Gabarits dynamiques non f-string.

Cas limites :
• Type incompatible → erreur.

Considérations de performance :
• Faible.

Exemples :
• format(255,"x")

Remarques :
• f"{42:b}" équivalent idiomatique.`,
  483: `format(255, "x") vaut "ff" : hex minuscule sans 0x.

Débutant :
• Deux caractères hex pour 255.

Intermédiaire :
• "X" majuscule pour FF.

Expert :
• Préfixe via format spéc : "#x" en f-string.

Concepts clés :
• format hex.

Distinctions clés :
• format vs hex().

Fonctionnement :
• Conversion base 16.

Exécution étape par étape :
1. 255.
2. "ff".

Ordre des opérations :
• format.

Cas d'utilisation courants :
• Logs compacts.

Cas limites :
• float avec "x" invalide.

Considérations de performance :
• Faible.

Exemples :
• format(10,"o")

Remarques :
• Combinez avec width fill.`,
  484: `format(3.14, ".1f") vaut "3.1" : un chiffre après la virgule, arrondi.

Débutant :
• f pour float décimal.
• .1 précision.

Intermédiaire :
• Arrondi binaire des floats peut surprendre.

Expert :
• Pour décimal exact : Decimal.

Concepts clés :
• format float, précision.

Distinctions clés :
• str(3.14) vs format arrondi.

Fonctionnement :
• __format__ float.

Exécution étape par étape :
1. Float 3.14.
2. Arrondi affichage.
3. "3.1".

Ordre des opérations :
• format.

Cas d'utilisation courants :
• Affichage utilisateur.

Cas limites :
• nan, inf formats spéciaux.

Considérations de performance :
• Faible.

Exemples :
• format(2.675,".2f")

Remarques :
• Voir documentation arrondi.`,
  485: `f"{'abc':>5}" vaut "  abc" : largeur 5, alignement à droite, espaces à gauche.

Débutant :
• > pousse le texte à droite.
• 'abc' fait 3 caractères → 2 espaces.

Intermédiaire :
• Le remplissage par défaut est espace.

Expert :
• Autre caractère de remplissage : f"{'abc':*>5}".

Concepts clés :
• Alignement, largeur minimale.

Distinctions clés :
• > vs < vs ^.

Fonctionnement :
• Moteur de format calcule padding.

Exécution étape par étape :
1. Texte 'abc'.
2. Pad à gauche jusqu'à 5.

Ordre des opérations :
• f-string.

Cas d'utilisation courants :
• Colonnes monospace.

Cas limites :
• Texte plus long que largeur : pas de troncature.

Considérations de performance :
• Faible.

Exemples :
• f"{12:>4}"

Remarques :
• Combinez avec types numériques.`,
  486: `f"{'abc':<5}" vaut "abc  " : aligné à gauche, espaces à droite.

Débutant :
• < remplit à droite.

Intermédiaire :
• Par défaut pour str.

Expert :
• = pour padding numérique centré sur signe (nums).

Concepts clés :
• Padding droit.

Distinctions clés :
• < vs >.

Fonctionnement :
• Insère espaces après le texte.

Exécution étape par étape :
1. 'abc' longueur 3.
2. Ajoute 2 espaces finaux.

Ordre des opérations :
• f-string.

Cas d'utilisation courants :
• Tables texte.

Cas limites :
• idem largeur minimale.

Considérations de performance :
• Faible.

Exemples :
• f"{'x':<3}"

Remarques :
• endswith voit les espaces.`,
  487: `f"{'abc':^7}" vaut "  abc  " : centré dans 7 caractères, espaces des deux côtés (2+3+2).

Débutant :
• ^ centre le contenu.
• 7-3=4 espaces → 2 et 2 si pair.

Intermédiaire :
• Si déséquilibre d'un espace, convention Python fixe le côté favori.

Expert :
• Voir docs sur alignement impair.

Concepts clés :
• Centrage, largeur.

Distinctions clés :
• ^ vs strip.

Fonctionnement :
• Calcule pads gauche/droite.

Exécution étape par étape :
1. Largeur 7.
2. Centre 'abc'.

Ordre des opérations :
• f-string.

Cas d'utilisation courants :
• Titres ASCII.

Cas limites :
• Largeur < len(texte) : pas de troncature.

Considérations de performance :
• Faible.

Exemples :
• f"{'hi':^4}"

Remarques :
• Vérifiez visuellement en monospace.`,
  488: `f"{42:#x}" vaut "0x2a" : x hex avec préfixe grâce à #.

Débutant :
• # demande le préfixe 0x pour hex.

Intermédiaire :
• Même idée #b, #o.

Expert :
• Alignement avec 0x compte dans largeur totale si combiné.

Concepts clés :
• Préfixe alternate form.

Distinctions clés :
• avec/sans #.

Fonctionnement :
• Format int avec flag.

Exécution étape par étape :
1. 42.
2. "0x2a".

Ordre des opérations :
• f-string.

Cas d'utilisation courants :
• Logs hex explicites.

Cas limites :
• Types non numériques invalides.

Considérations de performance :
• Faible.

Exemples :
• f"{255:#x}"

Remarques :
• Cohérent avec hex() visuellement.`,
  489: `f"{42:#b}" vaut "0b101010" : binaire avec préfixe.

Débutant :
• # ajoute 0b.

Intermédiaire :
• Alignement utile en colonnes avec préfixe.

Expert :
• Tronquer préfixe manuellement si besoin spécifique.

Concepts clés :
• Format binaire préfixé.

Distinctions clés :
• f"{42:b}" sans 0b.

Fonctionnement :
• __format__ avec #.

Exécution étape par étape :
1. 42.
2. "0b101010".

Ordre des opérations :
• f-string.

Cas d'utilisation courants :
• Debug bitmasks.

Cas limites :
• N/A.

Considérations de performance :
• Faible.

Exemples :
• f"{0:#b}"

Remarques :
• bin(42) identique ici.`,
  490: `f"{42:#o}" vaut "0o52" : octal avec préfixe 0o.

Débutant :
• 42 en octal est 52.

Intermédiaire :
• # assure préfixe visible.

Expert :
• oct(42) similaire.

Concepts clés :
• Format octal préfixé.

Distinctions clés :
• o sans # sans préfixe.

Fonctionnement :
• Conversion + préfixe.

Exécution étape par étape :
1. 42.
2. "0o52".

Ordre des opérations :
• f-string.

Cas d'utilisation courants :
• Pédagogie bases.

Cas limites :
• N/A.

Considérations de performance :
• Faible.

Exemples :
• f"{8:#o}"

Remarques :
• Lisible pour apprendre 0o syntax.`,
};
