/*
    I) L’incrémentation et la dé://
    
Je considère le calcul suivant : */

    var number = 0; 
    number = number + 1; 
    
/*La variable number contient la valeur 1.
Mais l’instruction permettant d’ajouter 1 est assez lourde à écrire et,  nous sommes des fainéants.
Le JavaScript, comme d’autres langages de programmation, permet ce que l’on appelle l’« incrémentation »,
ainsi que son contraire, la « décrémentation ».*/

/* Le fonctionnement L’incrémentation permet d’ajouter une unité à un nombre au moyen d’une syntaxe courte.
À l’inverse, la décrémentation permet de soustraire une unité.*/

    var number = 0;
    number++; 
    console.log(number); // Affiche : « 1 » 
    number--; 
    console.log(number); // Affiche : « 0 » 

/*Il s’agit donc d’une méthode assez rapide pour ajouter ou soustraire une unité à une variable*/

/*  II) L'ordre des opérateurs://

Il existe deux manières d’utiliser l’incrémentation en fonction de la position de l’opérateur ++ (ou --).
On a vu qu’il pouvait se placer après la variable, mais il peut aussi se placer avant. 
Voici un exemple :*/

    var number_1 = 0;
    var number_2 = 0;
    number_1++;
    ++number_2;
    console.log(number_1);      // Affiche : « 1 » 
    console.log(number_2);      // Affiche : « 1 » 

/* 
Les variables number_1 et number_2 ont toutes deux été incrémentées.
Quelle est donc la différence entre les deux procédés ?
La différence réside dans la priorité de l’opération, ce qui a de l’importance si vous voulez récupérer le résultat de l’incrémentation.

Dans l’exemple suivant, ++number retourne la valeur de number incrémentée, c’est-à-dire 1.*/

    var number = 0;
    var output = ++number;
    console.log(number);        // Affiche : « 1 » 
    console.log(output);        // Affiche : « 1 »

/* Maintenant, si on place l’opérateur après la variable à incrémenter, l’opération retourne la valeur de number avant qu’elle ne soit
incrémentée :*/

    var number = 0;
    var output = number++;
    console.log(number); // Affiche : « 1 » 
    console.log(output); // Affiche : « 0 » 
    
/*Ici donc, l’opération number++ a retourné la valeur de number non incrémentée.

    III) La boucle for

La boucle for ressemble dans son fonctionnement à la boucle while, mais son architecture paraît compliquée au premier abord.
La boucle for est en réalité une boucle qui fonctionne assez simplement, mais qui semble très complexe pour les débutants en raison
de sa syntaxe.
Une fois que vous la maîtriserez, il y a fort à parier que c’est celle que vous utiliserez le plus souvent.
Le schéma d’une boucle for est le suivant :

    i = itération soit REPETITION !!

    for (initialisation; condition; incrémentation)
     { instruction_1;
     instruction_2;
     instruction_3; }
*/

    var cars = ["BMW ",
                "Volvo ",
                "Saab ",
                "Ford ",
                "Fiat ",
                "Audi "];
    var text = "";
    var i;
    for (i = 0; i < cars.length; i++) {  //length permet de prendre tous les mots du tableau
    text += cars[i];
    }
    console.log(text);

/*  IV) La boucle for in://
*/

        var person = {                      //Voici un tableau associatif
            firstname : "John",
            lastname : "Doe",
            age : 25
            };

        var text = "Bonjour je vous présente";
        var x;                              // x représente la clé soit les index d'un tableau associatif ! 
        for (x in person) {                 //On veut une répétition de l'index grâce à la clé x dans la variable person.
        text += person[x];                  //On incrémente (additionne) personn et la clé x à la variable text
        }
        console.log(text);



        var numbers = [                     //Voici un tableau
            45,
            4,
            9,
            16,
            25
            ];

        var textbis = "Voici une suite de nombre";
        var x;                              // x représente la clé de l'index de la variable numbers
        for (x in numbers) {                //On veut une répétition de l'index grâce à la clé x dans la variable numbers.
        textbis += numbers[x];              //On incrémente numbers et la clé x à la variable textbis
        }
        console.log(textbis)

/* V) La boucle for of://
La boucle for of me permet de parcourir des structures de données itérables telles que des tableaux,
des chaînes, des cartes, des listes de nœuds, etc.

- Boucle sur un tableau*/

var cars = ["BMW ", "Volvo ", "Mini "];
var text = "Bonjour voici des marques de voitures ";

for (var x of cars) {
  text += x;
}
console.log(text);

//- Boucle sur une chaîne de texte

var language = "JavaScript ";
var text = "Bonjour j'écris en ";

for (var x of language) {
text += x;
}
console.log(text);

console.log("\n####Exercice 1####");

/*Selon vous, qu’est ce qui s’affiche à l’écran avec le programme suivant ?*/

    var i = 0;
    while (i <= 9) {
    console.log("One run of the loop");
    i ++;
    }
/*Combien de fois la phrase est-elle affichée ? Pourquoi ? Est-ce le bon nombre de répétition de la boucle ?
Remplacez “i ++” par “i += 2”. Que se passe-t-il ? Pourquoi ?
Que se passe-t-il si on supprime “i ++” ? Pourquoi ?
Comment s’appelle ce type de boucle ? Ne le faites pas, cela ferait buguer votre machine.
*/

console.log("\n###Exercice 2###");

//Selon vous, qu’est ce qui s’affiche à l’écran avec le programme suivant ?

    for (var i=0; i <=9; i++) {
    console.log("One run of the loop");
    }

/*Combien de fois la phrase est-elle affichée ? Pourquoi ? Est-ce le bon nombre de répétition de la boucle ?
Remplacez “i ++” par “i += 2”. Que se passe-t-il ? Pourquoi ?
Que se passe-t-il si on supprime “i ++” ?
Le fonctionnement et le résultat de cette boucle sont-ils différents de ceux de la boucle while à l’exercice précédent ?
D’après vos expérimentations, quels sont selon-vous les avantages et les inconvénients des deux boucles ?*/

console.log("\n###Exercice 3###");

/*
Ecrivez une structure de type boucle qui permet d’afficher les nombres de 0 à 100 avec un retour à la ligne.
Résultat attendu :

0
1
2
3
...
100
Modifiez maintenant votre boucle afin qu’elle n’affiche que les nombres de 1 à 99.
Modifiez maintenant votre boucle afin qu’elle n’affiche que les nombres pairs de 0 à 100.*/

    for (var i=0; i<=100; i+=2) {
        console.log(i);
    }
    
console.log("\n###Exercice 4###");

/*Ecrivez une structure de type boucle qui permet d’afficher les nombres de 0 à 100 avec à côté de chaque nombre sa nature :
pair ou impair.
Résultat attendu :

0 is even
1 is odd
2 is even
3 is odd
...
100 is even
*/

    for(var i=0; i<=100; i++) {
        if(i%2 === 0){
            console.log(i + " is even");
        }
        else{
            console.log(i + " is odd");
        }
    }

console.log("\n###Exercice 5###");

/*
Déclarez une variable items et assignez lui un tableau contenant les éléments suivants :
“First item”, “Second item”, “Third item”, “Fourth item”.
A la suite, ajoutez la boucle suivante :
for (var i=0; i < 4; i++) {
  console.log(items[i]);
}
Qu’est ce qui s’affiche à l’écran ? Pourquoi ? A quoi correspond i dans la boucle for ?
A quoi correspond i dans le tableau items ? En conséquence que permet de faire ce modèle de boucle associé à un tableau ?
Que se passe-t-il si on remplace “i < 4” par “i < 5” ?
Quelle sera la dernière valeur de i ? Cela correspond-t-il à quelque chose dans le tableau ?
*/

    var items = [
        "First item",
        "Second item",
        "Third item",
        "Fourth item"
    ];
    for (var i=0; i<4; i++) {
        console.log(items[i]);
      }

console.log("\n###Exercice 6###");

/*
Le code suivant est censé afficher la liste des clients présents sur notre site.
Cependant il ne fonctionne pas. Serez-vous capable de le débuguer ?
*/

            customers = [
                "Albin Term",
                "Anna Sandgrove",
                "John Doe",
                "Terrance Head",
                "Yan Mock",
                "Zoe Durst"
                ];
            console.log("List of all customers : ");
            for (i=0; i <= 5; i++) {
            console.log(customers[i]);
            }

console.log("\ln###Exercice 7###");

/*
Déclarez une variable citizen et assignez lui un tableau associatif. Le tableau contient les indexes et valeurs suivantes :
“firstname” : “John”
“lastname” : “Doe”
“age” : 45
“income” : 60000
Affichez maintenant à l’écran la carte d’identité de cette personne.
C’est à dire l’ensemble des clefs et valeurs qui leur sont associées.
Résultat attendu :
Citizen identity :
firstname : John
lastname : Doe
age : 45
income : 60000
Rajoutez maintenant une paire index/valeur à votre tableau citizen :
“sexe” : 0 Le sexe est représenté par un boolean. Si sexe vaut 1 alors la personne est une femme,
s’il vaut 0 alors la personne est un homme.
Rajoutez dans la carte d’identité l’affichage du sexe du citoyen. Cependant vous n’affichez pas un boolean,
vous affichez “male” ou “female” selon la valeur stockée.
Astuce : vous devrez utiliser plusieurs conditions dans votre boucle.
*/   
        var citizen = {
                "firstname" : "John",
                "lastname" : "Doe",
                "age" : 45,
                "income" : 60000,
                "sexe" : 0
                };
            console.log("Citizen identity :");
            for (var key in citizen) {
            if (key === "sexe") {
            if (citizen[key]) {
            console.log(key + " : female");
            }
            else {
            console.log(key + " : male");
            }
            }
            else {
            console.log(key + " : " + citizen[key]);
            }
            }
            
/*Tu as un tableau associatif, donc des paires clef/valeur.
Une opération très fréquente sur les applications est d'afficher ces paires à l'utilisateur.
Pour ce faire tu utilises la boucle for/in qui te permet d'accéder aux index (firstname, lastname etc...).
Tu peux donc afficher les indexes et grâce aux index du coup tu peux récupérer les valeurs.
Ensuite je vous demande de rajouter un index qui nécessite de votre part un traitement particulier
L'index sexe contient un boolean cela veut dire que en l'état il ne peut pas être afficher tel quel à l'utilisateur final.
Tu ne vas pas afficher sexe: true. Il ne comprendrait pas. Tu dois afficher homme ou femme.
Du coup dans ta boucle, tu vérifies si l'index actuel est "sexe" si c'est le cas au lieu de juste afficher la valeur,
tu affiches homme ou femme selon qu'on a true ou false.
Cela consiste à moduler l'afficher selon l'indexe ce qui est aussi très courant
*/


console.log("\n###Exercice 8###");

/*Voici une variable citizens qui contient un tableau de tableaux :

var citizens = [
  {
    "firstname" : "John",
    "lastname" : "Doe"
  },
  {
    "firstname" : "Anna",
    "lastname" : "Molner"
  },
  {
    "firstname" : "Harry",
    "lastname" : "Trueman"
  },
  {
    "firstname" : "Cecile",
    "lastname" : "Mercier"
  }
];
Pouvez-vous affichez tous les citoyens ? résultat attendu :

Citizen :
firstname : John
lastname : Doe

Citizen :
firstname : Anna
lastname : Molner

etc...
Astuce : vous aurez besoin d’une boucle dans une boucle.
N’oubliez pas que pour vous aider vous pouvez faire des console.log de votre code pendant que vous le construisez.
*/        
    
    var citizens = [
  {
    "firstname" : "John",
    "lastname" : "Doe"
  },
  {
    "firstname" : "Anna",
    "lastname" : "Molner"
  },
  {
    "firstname" : "Harry",
    "lastname" : "Trueman"
  },
  {
    "firstname" : "Cecile",
    "lastname" : "Mercier"
  }
];
for (var citizen of citizens) {
    console.log("Citizen : ");
    for (var key in citizen) {
      console.log(key + " : " + citizen[key]);
    }
    console.log("\n");
  }









