    /*Qu'est ce qu'une variable?

Une variable est un espace de stockage sur mon ordinateur permettant d'enregistrer tout type de donnée,
que ce soit une chaîne de caractères, une valeur numérique ou bien des structures un peu plus particulières.

    I) Déclarer une Variable://

Il s'agit de lui réserver un espace de stockage en mémoire.
Une fois la variable déclarée, on peut commencer à y stocker des données.
Pour déclarer une variable il faut d'abord lui trouver un nom.
Pour déclarer une variable il suffit d'écrire ceci:

    var myVariable;

Le mot clé "var" indique que je déclare une variable.

    var myVariable = 2;

Le signe "=" sert à attribuer une valeur à la variable (ici,2).
Quand on donne une valeur à une variable on dit qu'on fait une affectation, car on affecte une valeur à la variable.

    var myVariable1, myVariable2;
    myVariable1 = myVariable2 = 2;

Les deux variables contiennent maintenant le nombre 2.

    II) Les types de variables://

    Les trois types principaux en JavaScript:

    - number (le type numérique): : il représente tout nombre, que ce soit un entier, un nombre négatif, scientifique, etc.
Il s’agit du type utilisé pour les nombres.
Pour assigner un type numérique à une variable, il suffit d’écrire le nombre seul : 

    var number = 5;

    - string (chaîne de caractère): : ce type représente n’importe quel texte.

    var text1 = "Mon premier texte"; 

Il est important de préciser que si j'écris:

     var myVariable = '2';

le type de cette variable est une chaîne de caractères et non pas un type numérique.

    - boolean (Les booléens) : les booléens sont un type bien particulier. Il s’agit d’un type pouvant avoir deux états :
vrai (true) ou faux (false). Ces deux états s’écrivent de la façon suivante :

     var isTrue = true; 
     var isFalse = false;*/

    var myVariable = "Batiste";
    console.log(myVariable);  //Cela affichera Batiste.

/*  III) Les opérateurs arithmétiques://

    addition =        + 
    soustraction =    - 
    multiplication =  * 
    division =        / 
    modulo =          %  (Le modulo correspond au reste d’une division. Par exemple, si vous divisez 5 par 2, le modulo vaut 1).

    var result = 3 + 2;   (Soit = à 5);

    var number1 = 3, number2 = 2, result;
    result = number1 * number2;    (Soit = à 6);

Simplifier encore plus les calculs:

    var number = 3;
    number += 5;      (Soit = à 8);*/

    var hi = "Bonjour ", 
    myname = "toi", result;
    result = hi + myname;
    console.log(result); //Cela affichera Bonjour toi. (Pour faire un espace j'en insère après les guillemets)

    var text = "Voici un nombre : ", 
    number = 42, 
    result;
    result = text + number;
    console.log(result); //Cela affichera Voici un nombre : 42. Car fait une concaténation de ma chaîne de caractère + mon nombre



















