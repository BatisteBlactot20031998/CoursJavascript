/*  I) La base de toute condition: Les Booléens://

À quoi vont-ils me servir servir ?
À obtenir un résultat true (vrai) ou false (faux) lors du test d’une condition.
Une condition est une sorte de « test » permettant de vérifier qu’une variable contient bien une certaine valeur.
De quoi sont constituées les conditions ? De valeurs à tester et de deux types d’opérateurs : un logique et un de comparaison.

    II) Les opérateurs de comparaison://

    ===      contenu et type égal à
    !==      contenu ou type différent de
    >        supérieur à
    >=       supérieur ou égal à 
    <        inférieur à
    <=       inférieur ou égal à
*/
    var number1 = 2;
    var number2 = 2; 
    var number3 = 4;
    var result;
    result = number1 === number2;       // On spécifie deux variables avec l'opérateur de comparaison entre elles
        console.log(result);              /* Affiche « true », la condition est donc vérifiée car les
                                            deux variables contiennent bien la même valeur */
                   
    result = number1 < number3
    console.log(result);                // Affiche « true », la condition est vérifiée car 2 est bien inférieur à 4.

    result = number1 === number3;  
    console.log(result);                // Affiche « false », la condition n'est pas vérifiée car 2 est différent de 4.

// Lorsqu’une condition renvoie true, on dit qu’elle est « vérifiée ».

/*  III) Les opérateurs logiques://

    &&       ET          valeur1 && valeur2 
    ||       OU          valeur1 || valeur2 
    !        NON         !valeur

    - L'opérateur "ET" : Cet opérateur vérifie la condition lorsque toutes les valeurs qui lui sont passées valent "true".
Si une seule d’entre elles vaut "false", alors la condition ne sera pas vérifiée.
*/

    var result = true && true;
    console.log(result);            // Affiche : « true » 
    result = true && false; 
    console.log(result);            // Affiche : « false » 
    result = false && false; 
    console.log(result);            // Affiche : « false »

/*  - L'opérateur "OU" : Cet opérateur est plus souple car il renvoie "true" si une des valeurs qui lui est soumise contient true,
qu’elles que soient les autres valeurs.
*/

    var result = true || true;
    console.log(result);                  // Affiche : « true » 
    result = true || false;
    console.log(result);                  // Affiche : « true » 
    result = false || false;
    console.log(result);                 // Affiche : « false »

//Exemple:

    var condition1;
    var condition2;
    var result;
        condition1 = 2 > 8;             // "false" car 2 n'est pas supérieur à 8
        condition2 = 8 > 2;             // "true" car 8 est supérieur à 2
        console.log(condition1);
        console.log(condition2);

        result = condition1 && condition2;
        console.log(result);                // Affiche "false" car la condition 1 est "false" et la condition 2 est "true".

/*  
    La structure "if" pour la condition "si": */


    if (true) { 
        console.log("Ce message s'est bien affiché."); } 
    if (false) { 
        console.log("Pas la peine d'insister, ce message ne s'affichera pas."); }

/*
Tout d’abord, j'étudie la syntaxe d’une condition, qui comprend :
- la structure conditionnelle "if" ;
- des parenthèses qui contiennent la condition à analyser, ou plus précisément le booléen retourné par les opérateurs conditionnels ;
- des accolades qui permettent de définir la portion de code qui sera exécutée si la condition se vérifie.
*/
    if (2 < 8 && 8 >= 4) {          // Cette condition renvoie « true », le code est donc exécuté
    console.log("La condition est bien vérifiée."); } 
    if (2 > 8 || 8 <= 4) {          // Cette condition renvoie « false », le code n'est donc pas exécuté
    console.log("La condition n'est pas vérifiée mais vous ne le saurez pas vu que ce code ne s'exécute pas."); }

/*
    La structure else pour dire "sinon":
Admettons maintenant que je souhaite exécuter un code suite à la vérification d’une condition et exécuter un autre code
si elle n’est pas vérifiée.
Il est possible de le faire avec deux conditions if mais il existe une solution beaucoup plus simple :
la structure else :
*/
        var userage = 17;                       // Je nomme ma variable userage et je dis qu'il a 17 ans
        if (userage >= 18) {                    // Si l'utilisateur a plus de 18 ans la condition est vérifié
            console.log("La condition est vérifiée");
        }
        else {                                  // Sinon, s'il n'a pas 18 ans la condition n'est pas vérifié
            console.log("Vous n'avez pas accès au site");
        }

/*
    La structure else if pour dire "sinon si":
Je sais à présent exécuter du code si une condition se vérifie et si elle ne se vérifie pas,
mais il serait bien de savoir fonctionner de la façon suivante :
* une première condition est à tester ;
* une seconde  condition est présente et sera testée si la première échoue ;
* si aucune condition ne se vérifie, la structure else fait alors son travail.
Ce cheminement est bien pratique pour tester plusieurs conditions à la fois et exécuter leur code correspondant.
La structure else if permet cela :
 */

    var userage = 17
    console.log("Avez-vous plus de 18 ans ?");
    if (userage >= 18) {
    console.log("Vous pouvez accéder au site"); } 
    else if (userage >= 17) { 
    console.log("Vous pouvez accéder au site avec une vérification bancaire"); } 
    else { 
    console.log("Vous ne pouvez-pas accéder au site"); }

/*
À noter que la structure else if peut être utilisée plusieurs fois de suite.
Pour fonctionner, elle a uniquement besoin d’une condition avec la structure if juste avant elle.
*/

/*  IV) Les conditions sur les variables://

Pour tester si une variable contient une valeur, il faut tout d’abord savoir que tout se joue au niveau de la conversion des types.
Je sais déjà que les variables peuvent être de plusieurs types : nombres, chaînes de caractères, etc.
On va découvrir ici que le type d’une variable (quel qu’il soit) peut être converti en booléen même si à la base
on possède un nombre ou une chaîne de caractères.
*/

    var conditionTest = "Fonctionnera ? Fonctionnera pas ?";
    if (conditionTest) {
    console.log("Fonctionne !"); }
    else {
    console.log("Ne fonctionne pas !"); }

/*
Le code affiche le texte "Fonctionne !".
Pourquoi ?
Tout simplement parce que la variable "conditionTest" a été convertie en booléen et que son contenu est évalué comme étant vrai (true).
Qu’est-ce qu’un contenu vrai ou faux ?
Il suffit simplement de lister les contenus faux pour le savoir : un nombre qui vaut zéro ou une chaîne de caractères vide.
Ces deux cas sont les seuls à être évalués comme étant à false.
Il est aussi possible d’évaluer des attributs, des méthodes, des objets, etc.
Bien entendu, la valeur undefined est aussi évaluée à false.
*/

/*  Le cas de l’opérateur OU 
L’opérateur OU est un cas particulier également.
En plus de sa fonction principale, il permet de renvoyer la première variable possédant une valeur évaluée à true.*/

    var conditionTest1 = "", conditionTest2 = "Une chaîne de caractères";
    console.log(conditionTest1 || conditionTest2); 

/*Ce code retourne la valeur « Une chaîne de caractères » car l’opérateur OU retourne la valeur de la première variable
dont le contenu est évalué à true. Ceci est extrêmement pratique !  
*/

/*En résumé
Une condition retourne une valeur booléenne : true ou false.
De nombreux opérateurs existent afin de tester des conditions et ils peuvent être combinés entre eux.
La condition if else est la plus utilisée et permet de combiner les conditions.
*/

console.log("\n####Exercice1");
/*Copiez le bloc de code suivant dans votre fichier de travail
if (true) {
  console.log("Condition is working !");
}
Voyez-vous quelque chose s’afficher à l’écran ? Pourquoi ?
Copiez à la suite le bloc de code suivant
if (false) {
  console.log("Condition is working !");
}
Voyez-vous quelque chose s’afficher à l’écran ? Pourquoi ?
Dans quel cas la condition a-t-elle été vérifiée ?
Rajoutez maintenant à la suite de votre second if un bloc else
else {
  console.log("Condition is not working !");
}
Que voyez-vous alors s’afficher à l’écran ? Pourquoi ?
Copiez maintenant à la suite le bloc de code suivant
if (false === false) {
  console.log("Condition is working !");
}
Voyez-vous quelque chose s’afficher à l’écran ? Pourquoi ?
Qu’en déduisez-vous sur la notation utilisée dans les deux premiers blocs if que vous avez écrits précédemment ?
Quelle était l’évaluation réalisée ?
*/

    if (true) {
        console.log("Condition is working !");
  }
    if (false) {
        console.log("Condition is working !");
  }
    else {
        console.log("Condition is not working !");
  }
    if (false === false) {
        console.log("Condition is working !");
  }

console.log("\n####Exercice 2####");
/*
Déclarez une variable content sans lui attribuer de valeur pour l’instant. A la suite, copiez ce bloc de code :
if (content) {
  console.log("Condition is OK");
}
else {
  console.log("Condition is KO");
}
Que voyez-vous s’afficher à l’écran ? Pourquoi ?
Nous allons maintenant faire varier la valeur de content afin d’observer le comportement du code.
Assignez à content la valeur true. Qu’est ce qui s’affiche à l’écran ? La condition est-elle vérifiée ? Pourquoi ?
Assignez à content la valeur false. Qu’est ce qui s’affiche à l’écran ? La condition est-elle vérifiée ? Pourquoi ?
Assignez à content la valeur “texte”. Qu’est ce qui s’affiche à l’écran ? La condition est-elle vérifiée ? Pourquoi ?
Assignez à content la valeur 123. Qu’est ce qui s’affiche à l’écran ? La condition est-elle vérifiée ? Pourquoi ?
*/

    var content = 123;
    if (content) {
        console.log("Condition is OK");
      }
      else {
        console.log("Condition is KO");
      }

console.log("\n####Exercice 3");
/*
Déclarez une variable price et assignez lui la valeur 45. Copiez à la suite la structure conditionnelle suivante :
if (price === 45) {
  console.log("The price is a number");
}
else if (price == 45) {
  console.log("The price is a string");
}
else {
  console.log("The price is something else");
}
Qu’est ce que qui s’affiche à l’écran ? Pourquoi ? Quelle condition est vérifiée ?
Modifiez maintenant la valeur de price à “45” Qu’est ce que qui s’affiche à l’écran ? Pourquoi ? Quelle condition est vérifiée ?
Modifiez maintenant la valeur de price à “forty five” Qu’est ce que qui s’affiche à l’écran ? Pourquoi ? Quelle condition est vérifiée ?
*/

    var price = "forty five";
    if (price === 45) {
        console.log("The price is a number");
      }
      else if (price == 45) {
        console.log("The price is a string");
      }
      else {
        console.log("The price is something else");
      }

console.log("\nExercice 4####");
/*
Nous allons maintenant vérifiez qu’un visiteur a l’âge requis pour rentrer sur notre site.
Vous déclarerez une variable age qui stocke l’âge de votre choix. Votre programme doit remplir les condition suivantes :
Si l’âge du visiteur et supérieur ou égal à 18 alors le message “Entry allowed” s’affiche
Si l’âge du visiteur est inférieur à 18 alors le message “Entry not allowed” s’affiche
Vous testez votre programme avec différentes valeurs pour la variable age.
Vous verifiez notamment que les personnes de 18 ans pile ne sont pas refoulées.
*/

      var age = 16;
      if (age >= 18){
          console.log("Entry Allowed");
      }
      else {
          console.log("Entry not Allowed");
      }
      
console.log("\n####Exercice 5####");
/*
Le programme suivant ne fonctionne pas. Serez-vous capable de le debuguer ?
La variable store contient un tableau qui représente un magasin.
On trouve dans l’ordre : la marque du magasin, l’état où il se trouve, la ville où il se trouve et le nombre d’employés.
Le code est censé se comporter de la manière suivante :

Si le magasin est un Walmart dans la ville de South-Park alors le message “The Walmart in South-Park has 483 employes” s’affiche.
Si le magasin est un Walmart qui n’est pas à South-Park mais qui est quand même au Colorado, alors le message
“Hum this is an other Walmart from Colorado” s’affiche.
Si le magasin est un Walmart qui n’est pas dans le Colorado, alors le message “Too bad this is just a Walmart” s’affiche.
Si le magasin n’est pas un Walmart alors le message “I do not know what this is” s’affiche.
*/
    var store = [
        "Walmart",
        "Colorado",
        "South-Park",
        483
        ];

            if (store[0] === "Walmart" && store[2] === "South-Park") {
        console.log("The Walmart in South-Park has " + store[3] + " employes");
        }
            else if (store[0] === "Walmart" && store[1] === "Colorado") {
        console.log("Hum this is an other Walmart from Colorado");
        } 
            else if (store[0] === "Walmart") {
        console.log("Too bad this is just a Walmart");
        }
            else {
        console.log("I do not know what this is");
        }
        
console.log("\n###Exercice 6###");

/*Déclarez une variable student. Celle-ci contient un tableau associatif représentant un élève.
Le tableau contient les indexes et valeurs suivants :
“Name” “John Doe”
“Grade” 14
Ecrivez une structure conditionnelle qui affiche la mention obtenu par l’élève selon sa note.
Inférieur à 10, le message “Recalé” s’affiche
Entre 10 et 12, le message “Passable” s’affiche
Entre 12 et 14, le message “Moyen” s’affiche
Entre 14 et 16, le message “Bien” s’affiche
Entre 16 et 20, le message “Très bien” s’affiche
Quelle est la mention affiché pour notre étudiant ?
Faites varier la valeur de l’index grade afin de tester chaque condition de la structure.
*/

    var student = {
    "Name" : "John Doe",
    "Grade" : 19
    };
            if (student["Grade"] < 10) {
     console.log("Recalé");
    }
            else if(student["Grade"] < 12) {
    console.log("Passable");
            }
            else if(student["Grade"] < 14) {
    console.log("Moyen");
            }
            else if(student["Grade"] < 16) {
    console.log("Bien");
            }
            else
    console.log("Très bien");

console.log("\n####Exercice 7###");

/*
Déclarez une variable meal. Celle-ci contient un tableau associatif représentant un repas.
Le tableau contient les index et valeurs suivants :
“foodType” “meat”
“cookedAt” 80
“temperature” 60
Ecrivez une structure conditionnelle qui détermine le statut du repas.
Si la température du repas est identique à la température de cuisson alors
ajouter un index “status” avec la valeur “Cooked” au tableau.
Si la température du repas est inférieure à la température de cuisson alors
ajouter un index “status” avec la valeur “Uncooked” au tableau.
Si la température du repas est supérieure à la température de cuisson alors
ajouter un index “status” avec la valeur “Overcooked” au tableau.
Affichez à l’écran la valeur de l’indexe “status”. Faites varier la température du repas pour tester toutes les conditions.   
*/

            var meal = {
                "foodType" : "meat",
                "cookedAt" : 80,
                "temperature" : 110
                };
                    if (meal["temperature"] < meal["cookedAt"]) {
                    meal["status"] = "Uncooked";
                 }
                    else if (meal["temperature"] === meal["cookedAt"]) {
                     meal["status"] = "Cooked";
                 }
                    else {
                    meal["status"] = "Overcooked";
                 }
                 console.log(meal["status"]);

console.log("\n###Exercice 8###");

/*
Le code suivant ne fonctionne pas correctement. Serez-vous capable de le débuguer ?
Ce programme doit normalement s’assurer qu’un nombre est positif, autrement il demande de rentrer un nombre supérieur à 0.
Si le nombre est positif il vérifie alors si ce nom est pair ou impair et affiche un message en conséquence ?
*/

        var number = 42;
        if (number > 0) {
        if(number%2 === 0) 
        console.log("number is even");
        }
        else {
        console.log("number is odd");
        }
        console.log("Please enter a number at least greater than 0");