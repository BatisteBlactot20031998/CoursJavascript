/*  I) Introduction aux objets://

    var myString = 'Ceci est une chaîne de caractères'; 

La variable myString contient un objet, lequel représente une chaîne de caractères 
qui aurait pu contenir tout aussi bien un boléen ou un nombre.

    II) Les objets contiennent trois choses distinctes : un constructeur ; des propriétés ; des méthodes.

    - Un constructeur: Le constructeur est un code qui est exécuté quand on utilise un nouvel objet.
Il permet d’effectuer des actions comme définir diverses variables au sein même de l’objet
(par exemple le nombre de caractères d’une chaîne de caractères).

    - Des propriétés: Il est possible de modifier l’objet grâce aux méthodes, qui sont des fonctions contenues
dans l’objet et qui permettent de réaliser des opérations sur son contenu.
Par exemple, dans le cas d’une chaîne de caractères, il existe une méthode qui permet de la passer en majuscules.

    - Des méthodes: Il est possible de modifier l’objet grâce aux méthodes, qui sont des fonctions contenues dans l’objet
et qui permettent de réaliser des opérations sur son contenu.
Par exemple, dans le cas d’une chaîne de caractères, il existe une méthode qui permet de la passer en majuscules.*/

    var myString = "Ceci est une chaîne de caractère"; // J'introduis un objet dans ma var my String
    console.log(myString.length);     // .length me permet de savoir le nombre de caractères y compris les espaces dans mon objet

/*  III) Le Tableau://

Il s’agit d’une variable qui contient plusieurs valeurs, appelées « items ».
Chaque item est accessible au moyen d’un index, dont la numérotation commence à partir de 0.

    - Les indices: ils représentent un index soit un sommaire pour faire plus simple qui commence de 0 et peu allez jusqu'à l'infini...

    IV) Déclarer un tableau://

On utilise bien évidemment "var" pour déclarer un tableau, mais la syntaxe pour définir les valeurs est spécifique :*/

    var myArray = ['Séb', 'Laure', 'Ludo', 'Pauline', 'Guillaume']; //L'index 0 contient Sébastien et l'index 3 contient Pauline.
    console.log(myArray);

/*Le contenu du tableau se définit entre crochets et chaque valeur est séparée par une virgule.
Les valeurs sont introduites comme pour des variables simples, c’est-à-dire qu’il faut des guillemets pour définir
les chaînes de caractères :*/

    var myArray_a = [42, 12, 6, 3]; 
    var myArray_b = [42, 'Sébastien', 12, 'Laurence']; 
    console.log(myArray_a);
    console.log(myArray_b);

/*  V) Récupérer et modifier des valeurs://

Comment récupérer la valeur de l’index 1 de mon tableau ? Rien de plus simple,
il suffit de spécifier l’index voulu, entre crochets, comme ceci :*/

var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
console.log(myArray[1]);   // Cela affiche mon item 1 de mon index qui est Laurence.

/*Sachant cela, il est facile de modifier le contenu d’un item du tableau :*/
 
    var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
    myArray[1] = 'Clarisse'; 
    console.log(myArray[1]); // Je demande donc de remplacer Laurence par Clarisse.

/*  VI) Les objets littéraux://

S’il est possible d’accéder aux items d’un tableau via leur indice, il peut être pratique d’y accéder au moyen d’un identifiant.
Par exemple, dans le tableau des prénoms, l’item appelé sister pourrait retourner la valeur « Laurence ».
 Pour ce faire, je vais créer un tableau sous la forme d’un objet littéral.
Voici un exemple : */

    var family = { 
        self: "Sébastien",
        sister: "Laurence",
        brother: "Ludovic",
        cousin_1: "Pauline",
        cousin_2: "Guillaume"
         };
    console.log(family); //Cela m'affiche donc un tableau avec les index ainsi que les valeurs.

    var family = { 
        self: "Sébastien",
        sister: "Laurence",
        brother: "Ludovic",
        cousin_1: "Pauline",
        cousin_2: "Guillaume"
         };
    console.log(family["brother"]); //Si je veux identifier l'index brother je le mets en crochets et entre guillemets.

    var family = { 
        self: "Sébastien",
        sister: "Laurence",
        brother: "Ludovic",
        cousin_1: "Pauline",
        cousin_2: "Guillaume"
         };
    family["uncle"] = "Didier"  //Pour ajouter un nouvel index dans ma var je remets le nom de ma variable + 
    console.log(family);        //le nom de mon nouvel index entre crochet et guillemet le signe = et le nom de ma valeur.

console.log("\n####Exercice 1####");

/*
Déclarez une variable items et assignez lui pour valeur new Array().
Effectuez maintenant un console.log de la variable.
A la suite, modifiez la valeur de la variable et assignez lui [].
Effectuez maintenant un console.log de la variable. Les deux résultats sont-ils différents ? Pourquoi ?
A la suite, modifiez la valeur de la variable et assignez lui () sans le mot clef new Array.
Que se passe-t-il ? Ce résultat est-il normal ?
A la suite, modifiez la valeur de la variable et assignez lui [“a”, “b”].
Effectuez maintenant un console.log de la variable.
*/

        var items = new Array();
            console.log(items);
        items = [];
            console.log(items);
        //Je ne peux pas modifier la valeur de la variable et lui assigner () car cela donne une erreur.
        items = ["a", "b"];
            console.log(items);

console.log("\n####Exercice 2####");

/*
Déclarez une variable items et assignez lui pour valeur un tableau.
Ce tableau contiendra les chaînes de caractères suivantes :
“premier élément” “deuxième élément” “troisième élément” et “quatrième élément”.
Faites un console.log de items. Le résultat obtenu est-il le résultat attendu ?
A la suite, affichez l’élément correspondant à items[1]. Quel est l’élément affiché ? Pourquoi ?
A la suite, affichez l’élément correspondant à items[3]. Quel est l’élément affiché ? Pourquoi ?
Pouvez-vous maintenant afficher le premier élément du tableau ?
*/

         var items = [
            "premier élément",
            "deuxième élément",
            "troisième élément",
            "quatrième élément"
         ];
                console.log(items);
                console.log(items[1]); //Cela m'affichera mon index 1 soit: deuxième élement.
                console.log(items[3]); //Cela m'affichera mon index 3 soit: quatrième élement.
                console.log(items[0]); //Cela m'affichera mon index 0 soit: premier élément.

console.log("\n####Exercice 3####");

/*
Déclarez une variable player et assignez lui pour valeur un tableau.
Ce tableau contiendra les éléments suivants : “John” “Doe” 34 et true.
Faites un console.log de player. La variable contient-elle le résultat attendu ?
Pouvez-vous affichez à l’écran le prénom du joueur ?
Pouvez-vous affichez à l’écran le nom du joueur ?
Pouvez-vous affichez à l’écran le prénom et le nom du joueur séparés par un espace en une seule chaîne de caractères ?
Pouvez-vous maintenant modifier l’âge du joueur et lui donner 40 ans Pouvez-vous affichez à l’écran l’âge du joueur ?
Pouvez-vous affichez à l’écran le Booléen stocké dans le tableau player ?
Si notre joueur possédait, admettons, 30 ou 40 caractéristiques, cette notation serait-elle pratique selon-vous ?
*/

         var player = [
            "John",
            "Doe",
            34,
            true
         ];
                console.log(player);
                console.log(player[0]);
                console.log(player[1]);
                console.log(player[0] + " " + player[1]); //Cela me permet d'afficher mon nom et prénom avec un espace.
                    player[2] = 40;
                console.log(player[2]); //Je rappelle mon index 2 de ma variable et je le renomme par une nouvelle valeur.
                console.log(player[3]); //On peut dire que cette méthode me permet de modifier rapidement un index de ma variable.

console.log("\n####Exercice 4####");

/* Déclarez une variable player et assignez lui pour valeur un tableau dit associatif,
aussi appelé un objet en JavaScript (vous verrez plus tard pourquoi).
 Ce tableau contiendra les index et éléments suivants :
“firstname” : “John”
“lastname” : “Doe”
“age” : 34
“isAdult” : true
Faites un console.log de player. La variable contient-elle le résultat attendu ?
Pouvez-vous affichez à l’écran le prénom du joueur ?
Pouvez-vous affichez à l’écran le nom du joueur ?
Pouvez-vous affichez à l’écran le prénom et le nom du joueur séparés par un espace en une seule chaîne de caractères ?
Pouvez-vous maintenant modifier l’âge du joueur et lui donner 40 ans Pouvez-vous affichez à l’écran l’âge du joueur ?
Pouvez-vous affichez à l’écran la valeur qui correspond au fait que le joueur est adulte ou non ?
Selon-vous quels sont les avantages de cette notation comparée à celle de l’exercice 3 ? 
*/

         var player = {
             firstname : "John",
             lastname : "Doe",
             age: 34,
             isAdult: true
         }
                console.log(player);
                console.log(player ["firstname"]);
                console.log(player["lastname"]);
                console.log(player["firstname"] + " " + player["lastname"]);
                    player ["age"] = 40;  //Je dois appeler ma variable pour modifier un index que je met entre crochets et guillemets.
                console.log(player["age"]);
                console.log(player["isAdult"]);

console.log("\n####Exercice 5####");

/*
Déclarez une variable car et assignez lui pour valeur un tableau associatif. Ce tableau contiendra les index et éléments suivants :
“type” : “Clio”
“brand” : “Renault”
“date” : 2006
“color” : “orange”
“passengers” : [“Mike”, “Claire”, “Anna”, “Louis”]
Faites un console.log de car. La variable contient-elle le résultat attendu ?
Pouvez-vous afficher la phrase “Une Renault Clio de couleur noir, modèle 2006 a été aperçue avec à son bord 4 passagers” ?
Pour ce faire vous produisez une chaîne de caractères à l’aide des informations contenues dans le tableau car.
Que contient car à l’index “passengers” ? Comment s’appelle ce type de tableau ?
Faites un console.log de car[“passengers”][0]; Qu’est ce qui s’affiche ? Pouvez-vous expliquer cette notation en deux temps ?
Pouvez-vous afficher la phrase “4 individus ont été aperçus à son bord : Louis, Claire, Mike et Anna” ?
Pour ce faire vous produisez une chaîne de caractères à l’aide des informations contenues dans le tableau car.
*/

         var car = {
             type : "Clio",
             brand : "Renault",
             date : 2006,
             color : "noir",
             passengers : ["Mike", "Claire", "Anna", "Louis"]
         }
                console.log(car);
                console.log("Une " + car["brand"] + " " + car["type"] + " de couleur " + car["color"] 
                            + ", modèle " + car["date"] + " a été aperçue avec à son bord 4 passagers");
                console.log(car["passengers"][3]); //Cela me permet d'appeler l'index passenger et de demander un index dans le tableau.
                console.log("4 individus ont été aperçus à son bord "
                     + car["passengers"][0] + ", "
                     + car["passengers"][1] + ", " 
                     + car["passengers"][2] + " et "
                     + car["passengers"][3] +"."); 
/*Dans le dernier console.log j'ai mis une phrase que je veux voir afficher dans ma console. Puis à la suite, 
je voulais ajouter ma liste de passagers de mon index. Pour cela j'additionne ma variable "passenger" que je mets en crochet et
j'ajoute l'index par lequel je souhaite commencer (0, 1, 2, 3..) que je met dans d'autre crochet par la suite.
*/

console.log("\n####Exercice 6####");

/*
Déclarez une variable a et assignez lui la valeur 14, déclarez également une variable b et assignez lui la valeur 38.
Déclarez une variable product et assignez lui un tableau vide.
Faites un console.log de toutes les variables et vérifiez leur contenu.
A la suite, assignez à product la variable a à l’index 0, puis b à l’index 1 et enfin 50 à l’index 7.
Faites un console.log de product. Que constatez-vous ?
*/

         var a = 14;
         var b = 38;
         var product = [];
            console.log(a);
            console.log(b);
            console.log(product);
        product[0] = a;    //J'assigne ma variable "product" à ma variable "a" donc l'index 0 qui sera mtn égal à 14
        product[1] = b;    //J'assigne ma variable "product" à ma variable "b" donc l'index 1 qui sera mtn égal à 38
        product[7] = 50;   //J'ajoute une valeur de 50 à mon index 7.
            console.log(product);
               







                                                     






