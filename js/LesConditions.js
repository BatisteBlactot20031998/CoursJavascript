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

/*  La structure "if" pour la condition "si": */


    if (true) { 
        console.log("Ce message s'est bien affiché."); } 
    if (false) { 
        console.log("Pas la peine d'insister, ce message ne s'affichera pas."); }

/*
Tout d’abord, j'étudie la syntaxe d’une condition, qui comprend :
- la structure conditionnelle "if" ;
- des parenthèses qui contiennent la condition à analyser, ou plus précisément le booléen retourné par les opérateurs conditionnels ;
- des accolades qui permettent de définir la portion de code qui sera exécutée si la condition se vérifie.

    if (2 < 8 && 8 >= 4) { 
        // Cette condition renvoie « true », le code est
                       // donc exécuté alert('La condition est bien vérifiée.'); } if (2 > 8 || 8 <= 4) { // Cette condition renvoie « false », le code
                       // n'est donc pas exécuté










                                        



