/*
    I) Créer sa première fonction
Voici le code permettant d’écrire une fonction :

function myFunction(arguments) {
     // Le code que la fonction va devoir exécuter
     } 
     
Décortiquons un peu tout ça et analysons ce code :
Le mot-clé "function" est présent à chaque déclaration de fonction, c’est lui qui permet de dire « Voilà, j’écris ici une fonction ! » ;
vient ensuite le nom de votre fonction, ici myFunction ;
s’ensuit un couple de parenthèses contenant ce qu’on appelle des « arguments »,
qui fournissent des informations à la fonction lors de son exécution
(par exemple, les paramètres de la fonction alert() qui contiennent ce que vous voulez afficher à l’écran) ;
et vient enfin un couple d’accolades contenant le code que votre fonction devra exécuter.
Il est important de préciser que tout code écrit dans une fonction ne s’exécutera que si vous appelez cette dernière
(« appeler une fonction » signifie « exécuter »). Sinon le code qu’elle contient ne s’exécutera jamais.*/

     function showMsg() {
          console.log("Et une première fonction, une !"); } 
            showMsg();                                          // On exécute ici le code contenu dans la fonction
            

/*
Un exemple concret:
Comme mentionné précédemment, l’intérêt d’une fonction réside notamment dans le fait de ne pas avoir à réécrire plusieurs fois
le même code.
Nous allons ici étudier un cas intéressant où l’utilisation d’une fonction va se révéler utile :*/

        var result;
        result = parseInt("Donnez le nombre à multiplier par 2 :");
        console.log(result * 2);
        result = parseInt("Donnez le nombre à multiplier par 2 :");
        console.log(result * 2);

        function byTwo() { 
        var result = parseInt("Donnez le nombre à multiplier par 2 :");
        console.log(result * 2); } 
        byTwo();
        console.log("Vous en êtes à la moitié !");
        byTwo();

/*
Qu’avons-nous changé ? Nous avons tout d’abord créé une fonction qui contient le code à exécuter deux fois
(ou autant de fois qu’on le souhaite).
Ensuite, nous avons déclaré la variable "result" directement dans la fonction  et surtout nous avons appelé deux fois notre fonction
plutôt que de réécrire le code qu’elle contient.
Voilà l’utilité basique des fonctions : éviter la répétition d’un code.
Pour que cela fonctionne, vous devez déclarer la variable "result" en dehors de la fonction.
Voilà tout le concept de la portée des variables : toute variable déclarée dans une fonction n’est utilisable que dans cette
même fonction !
Ces variables spécifiques à une seule fonction sont appelées « variables locales ».

            II) Les arguments et les valeurs de retour

Nous allons à présent étudier les arguments et les valeurs de retour.
Ils permettent de faire communiquer vos fonctions avec le reste de votre code.
Ainsi, les arguments permettent d’envoyer des informations à votre fonction, tandis que les valeurs de retour représentent tout ce qui
est retourné par votre fonction une fois que celle-ci a fini de travailler.

    - Les arguments:
Créer et utiliser un argument
Comme nous venons de le voir, les arguments sont des informations envoyées à une fonction.
Ces informations peuvent servir à beaucoup de choses, libre à vous de les utiliser comme vous le souhaitez.

Pour créer une fonction avec un argument, il vous suffit d’écrire votre code de la façon suivante :*/
        
        function myFunction(arg) { 
            // MON CODE
                }

/*
Ainsi, si vous passez un argument à cette même fonction, vous retrouverez dans la variable arg ce qui a été passé en paramètre.
Exemple :*/
            function myFunction(arg) { /* Notre argument est la variable « arg ».
 Une fois que l'argument a été passé à la fonction, vous allez le retrouver dans la variable « arg ».*/
             console.log('Votre argument : ' + arg);
             } myFunction('En voilà un beau test !');


             function myFunction(arg) {
             console.log('Votre argument : ' + arg);
             } myFunction('Que souhaitez-vous passer en argument à la fonction ?');

/*
    -Les valeurs de retour
Ces valeurs sont retournées avec une fonction.
Souvenez-vous des fonctions prompt(), confirm() et parseInt(), chacune d’entre elles renvoyait une valeur, généralement stockée
dans une variable
 Nous allons donc apprendre à faire exactement la même chose ici mais pour nos propres fonctions.
Il est tout d’abord important de préciser que les fonctions ne peuvent retourner qu’une seule et unique valeur chacune.
Il est possible de contourner légèrement le problème en renvoyant un tableau ou un objet.
Pour que notre fonction retourne une valeur, il suffit d’utiliser l’instruction return suivie de la valeur à retourner.
Exemple :*/

        function sayHello() {
            return "Bonjour !";         // L'instruction « return » suivie d'une valeur, cette dernière est renvoyée par la fonction 
            } console.log(sayHello());        // Ici on affiche la valeur retournée par la fonction sayHello()



console.log("\n###Exercice 1###");

/*
Déclarez une fonction ayant pour nom product, cette fonction n’attend aucun argument.
Cette fonction, pour l’instant réalise une seule action, elle affiche à l’écran le texte suivant “I am the product function”.
En l’état, est ce que quelque chose s’affiche à l’écran ? Pourquoi ? Quelles sont les deux étapes de la vie d’une fonction ?
Appelez maintenant la fonction product et vérifiez qu’elle affiche bien le résultat voulu.
En l’état cette fonction a-t-elle un quelconque intérêt ? Pourquoi ?
D’après le nom de votre fonction, que serait-elle censée faire selon vous ?
Est ce cohérent avec le code qu’elle exécute actuellement ?
Modifiez le code exécuté par la fonction product. La fonction affiche maintenant le résultat de l’opération 4*30.
Qu’est ce qui s’affiche à l’écran ? Le code exécuté par la fonction est-il cohérent avec son nom maintenant ?
Quel est le problème de notre fonction en l’état ?
Vous allez modifier la déclaration de votre fonction et dire qu’elle attend maintenant deux arguments a et b.
Vous ne modifiez pas le code exécuté. Que se passe-t-il à l’écran ? Constatez-vous une erreur ? Pourquoi ?
Lors de l’appel de la fonction, passez lui maintenant deux valeurs 8 et 3. Que se passe-t-il ?
Le résultat affiché est-il celui du produit de 8 par 3 ? Pourquoi ?
Quelle la relation entre les arguments a et b et les valeur 8 et 3 ?
Dans le code exécuté par la fonction, remplacez maintenant 430 par ab.
Qu’est ce qui s’affiche à l’écran ? Est ce que cohérent avec les valeurs passées à la fonction ?
Lors de l’appel de la fonction remplacez maintenant 8 et 3 par 4 et 30. Vous devez normalement retrouvez votre résultat initial.
Selon-vous quel est encore, à l’heure actuelle le problème de votre fonction ?
Que se passerait-il si par exemple vous vouliez utiliser ce résultat dans différentes chaînes de carcatères à travers une application ?
Cela serait-il possible ? Pourquoi ?
Modifiez le code exécuté par la fonction, dorénavant elle ne fera plus un console.log mais un return du résultat.
Qu’est ce qui s’affiche maintenant à l’écran ? Pourquoi ?
Lors de l’appel de la fonction stockez maintenant la valeur de retour dans une variable
result et affichez cette valeur à l’écran avec une chaîne de caractères du type : “The result of the function is : result”.
*/
        function product(a, b) {
            return a*b;
        }
        var result = product(4, 30);
        console.log("The result of the function is : " + result);
  
console.log("\n###Exercice 2###");

/*
Créez une fonction nommée showDigits. Cette fonction se contente d’afficher à l’écran les chiffres de 0 à 9.
Affichez les chiffres à l’aide la fonction que vous avez créée.
*/

        
        function showDigits() {
        for (var i=0; i <=9 ; i++) {
        console.log(i);
        }
        }
        showDigits();

console.log("\n###Exercice 3###");

/*
Créez une fonction welcome qui attend les arguments firstname et lastname.
Pour un prénom et un nom donnés cette fonction affiche à l’écran un message de bienvenue avec ce nom et ce prénom.
Pour John Doe, elle peut afficher par exemple : “Welcome to our site John Doe”.
Testez votre fonction avec différents noms et prénoms.
Si l’on remplace $firstname par firstname=”John” et lastname par lastname=”Doe”,
quelles sont les conséquence sur la fonctionnement de la fonction welcome ?
Appelez maintenant la fonction sans arguments.*/

    function welcome(firstname="John", lastname="Doe") {
    console.log("Welcome to our site " + firstname + " " + lastname);
    }
  
    welcome();

console.log("\ln###Exercice 4###");

/*
Créez une fonction isAdult, sur la base d’un âge donné, cette fonction vérifie si la personne est adulte ou non.
On considère comme adulte toute personne de 18 ans ou plus.
La fonction retourne true si la personne est adulte, false le cas contraire.
Attention la fonction renvoie false même si aucun âge n’est donné.
Astuce : cela veut dire que même si aucun âge n’est donné, l’argument représentant l’âge doit avoir une valeur par défaut.
Utilisez cette fonction avec les âges de votre choix et affichez le message “Welcome to the site” si l’âge donné correspond à un adulte.
Selon vous, pourquoi a-t-on décidé que cette fonction renverrait true si la personne est adulte et non l’inverse c’est à dire false ?
Le code aurait pourtant été fonctionnel…*/


        function isAdult(age=false){
        if(age){
        return (age >= 18) ? true : false;
        }
        return false;
        }

        if (isAdult(27)) {
        console.log("Welcome to the site");
        }

console.log("\n###Exercice 5###");

/*
Créez une fonction birthYear. Cette fonction sur la base d’un âge donné calcule l’année de naissance de la personne à partir
de l’année actuelle.
Si aucun âge n’est passé à la fonction, celle-ci renvoie simplement le message “No age given”.
Affichez à l’écran le retour de la fonction sans paramètre âge et pour différents âges passés.*/

        function birthYear(age=false) {
        if (age) {
            return new Date().getFullYear() - age;
         }
        return "No age given";  // Ternary version? return age ? new Date().getFullYear() - age : "No age given";
        }
        console.log(birthYear(45));

console.log("\n###Exercice 6###");

/*
Déclarez une variable user et assignez lui pour valeur un tableau associatif avec les index et valeurs suivants :
“firstname” : “John”
“lastname” : “Doe”
“age” : 42
“job” : “dev”
Déclarez une fonction identityCard, elle attend un argument qui est un tableau associatif représentant un utilisateur du site.
Elle retourne une seule chaîne de caractère contenant toutes les paires index/valeur du tableau.
Appelez votre fonction identityCard et passez la variable user en argument.
Résultat attendu :
firstname : John
lastname : Doe
age : 42
job : dev
*/

        var user = {
            "firstname" : "John",
            "lastname" : "Doe",
            "age" : 42,
            "job" : "dev",
            };
  
        function identityCard(user) {
            identityCard = "";
            for (var key in user) {
             identityCard += key  + " : " + user[key] + "\n";
            }
            return identityCard;
            }   
        console.log(identityCard(user));

console.log("\n###Exercice1###");

/*
Appelez la méthode random de l’objet Math de la manière suivante :

Math.random();
Est-ce qu’il se passe quelque chose à l’écran ? Est ce normal ? Pourquoi ?
D’après la documentation officielle à quoi sert cette fonction ? Selon-vous quels pourraient être les cas d’usage d’une telle fonction ?
tockez la valeur de retour de la fonction dans une variable et affichez cette valeur à l’écran.
 Exécutez votre code plusieurs fois pour constater que le code fonctionne.*/

        
        var random_int = Math.random();
        console.log(random_int);

console.log("\n###Exercice2###");

/*
Déclarez une variable number et assignez lui pour valeur 12.8. Affichez le contenu de cette variable à l’écran.
Quel est le type des données affichées ?
Utilisez la fonction suivante pour arrondir number.
Stockez la valeur de retour de la fonction dans une variable et affichez la à l’écran.
Modifiez la valeur de number à 12.3. Modifiez la valeur de number à 12.5
Qu’en déduisez-vous sur la manière dans les nombres sont arrondis ?
Modifiez maintenant la valeur de number à 12.42359.
Utilisez la fonction round pour arrondir cette valeur et l’affichez à l’écran ? A-t-on conservé des décimales ?
Seriez-vous capable d’arrondir ce nombre mais en conservant deux décimales après la virgule ?*/

        var number = 12.8;
        console.log(number);
        number = Math.round(number);
        console.log(number);

        number = 12.3;
        console.log(number);
        number = Math.round(number);
        console.log(number);

        number = 12.5;
        console.log(number);
        number = Math.round(number);
        console.log(number);

        number = 12.42359;
        console.log(number);
        number = (Math.round(number*100))/100;
        console.log(number);

console.log("\n###Exercice3###");

/*
Un utilisateur de notre site nous a indiqué son âge à l’aide d’un formulaire.
Le problème est que nous avons reçu son âge sous forme de chaîne de caractères, or nous avons besoin d’un integer.
Déclarez une variable age et assignez lui pour valeur “35”.
Faites un console.log d’un typeof de la variable. Vous constatez qu’elle est de quel type ?
Trouvez une fonction native de JavaScript qui permet de convertir un nombre sous forme de chaîne de caractères en number.
Stockez la valeur de retour de la fonction dans la variable age et refaites un console.log du type de la variable afin
de vous assurez que son type a été modifié.*/

        var age = "35";
        console.log(typeof age);

        age = parseInt(age, 10);
        console.log(typeof age);

console.log("\n###Exercice4###");

/*
Déclarez une variable texte et assignez lui pour valeur une chaîne de caractères de votre choix.
Déclarez une variable maxLength et assignez lui pour valeur 20.
Affichez à l’écran la taille de la chaîne de caractères contenue dans texte à l’aide de la fonction suivante.
Le résultat affiché correspond-t-il à la taille de votre texte ?
A l’aide de cette fonction et d’un bloc conditionnel, écrivez maintenant un programme qui affiche :
“Your texte is too long” si la longueur de texte et supérieure à maxLength
“OK” si la longueur de texte est inférieur ou égale à maxLength*/

        var texte = "Some random content to test the length attribut";
        var maxLength = 20;

        if (texte.length > maxLength) {
        console.log("Your texte is too long");
        }
        else {
        console.log("OK");
        }

console.log("\n###Exercice5###");

/*
Déclarez une variable texte et assignez lui pour valeur la chaîne de caractères “A nice boat”.
Faites un console.log du type de la variable.
Quel est son type ?
Vous voulez maintenant la convertir en un tableau de lettres, chaque caractère représentant une valeur du tableau.
Réalisez cette opération à l’aide de la fonction suivante.
Assurez vous à l’aide d’un console.log que la chaîne de caractères est bien devenue un tableau.
D’après la documentation, que se passera-t-il si vous ajoutez l’argument 3 après le délimitateur de la fonction ?
A quoi sert ce paramètre ?
Vous voulez maintenant convertir la chaîne de caractères originale en tableau mais vous souhaitez que chaque mot constituant
la chaîne corresponde à une entrée du tableau. Autrement-dit, vous ne voulez pas un tableau de lettre mais un tableau de mots.
Vous utiliserz à nouveau la fonction split mais vous devrez utiliser un autre délimitateur.
Faites un console.log pour vous assurez que le résultat obtenu est le bon.
Astuces : Qu’est ce que qui sépare tous les mots d’une phrase dans les langues européennes ?*/

        var texte = "A nice boat";
        console.log(texte);

        var letters = texte.split('');
        console.log(letters);

        var words = texte.split(' ');
        console.log(words);

console.log("\n###Exercice6###");

/*
Le code ci-dessous vérifie normalement que le nom rentré par un utilisateur est celui attendu et affiche un message de bienvenue.
Le problème est que notre utilisateur a rentré le bon nom, son nom a lui selon les règles orthographiques en vigueur mais
notre programme ne le reconnaît pas.
Pourquoi cela ?
Serez-vous capable d’utiliser la fonction suivante
(https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/toLowerCase)
pour modifier le programme afin qu’il reconnaisse le nom rentré par Paul.
Attention vous ne pouvez pas modifier directement le contenu des variables name ou expectedName
var name = "Paul Dumas";
var expectedName = "paul dumas";

if (name === expectedName) {
  console.log("OK Paul you can come in");
}
else {
  console.log("We do not know you");
}
Selon-vous quel est l’usage concret de cette fonction sur un site web ? Dans quels cas de figure peut-elle être utile ?
Serez vous capable de trouver dans la documentation la fonction jumelle qui réalise l’opération inverse ?*/

        console.log("\nExercice 6");
        var name = "Paul Dumas";
        var expectedName = "paul dumas";

        if (name.toLowerCase() === expectedName) {
        console.log("OK Paul you can come in");
        }
        else {
        console.log("We do not know you");
        }

console.log("\n###Exercice7###");

/*
Déclarez une variable newStudent et assignez-lui pour valeur “Ryan Oper”.
Déclarez une variables students et assignez lui pour valeur un tableau avec les chaînes de caractères suivantes :
“John Doe”, “Jane Doe”, “Marc Alm”, “Jimmy Turner”.
Faites un console.log des deux variables et vérifiez qu’elles ont bien le type et le contenu attendu.
Un nouvel étudiant est arrivé en cours d’année et il faut donc l’ajouter à la liste des étudiants de la classe.
Utilisez la fonction push (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push)
pour ajouter la valeur de newStudent à la fin de students.
Faites un console.log de students pour vous assurer que la valeur a bien été ajoutée.
A la suite, utilisez à nouveau la fonction array_push pour ajouter deux nouveaux éléments en une seule fois au tableau students :
“Franck Martin”, “Tom Hawkins”.
Vérifiez le contenu du tableau avec un console.log.*/

        var newStudent = "Ryan Oper";
        var students = ["John Doe", "Jane Doe", "Marc Alm", "Jimmy Turner"];

        students.push(newStudent);
        console.log(students);

        students.push("Franck Martin", "Tom Hawkins");
        console.log(students);

console.log("\n###Exercice8###");

/*
Déclarez une variable transactions et assignez lui pour valeur un tableau contenant les valeurs suivantes qui représentent
des montants de transactions enregistrés sur un compte : 102, 50, 4563, 42, 78, 146, 10563.
Déclarez une variable researched et assignez lui pour valeur 42. Elle représente le montant d’une transaction recherchée
par un inspecteur des finances.
Faites un console.log de : transactions.includes(researched).
Qu’elle est la valeur renvoyée ? Quelle est la valeur renvoyée si vous remplacez researched par 44 ?
Sur la base de ces constations et de la documentation
(https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/includes)
que fait la fonction includes selon vous ? Quel est le type de valeur renvoyée ?
Utilisez une structure conditionnelle et la fonction includes pour produire un code qui :
Si la valeur de researched se trouve dans le tableau transactions affiche “We found a matching transaction”
Si la valeur de researched ne se trouve pas dans le tableau transactions affiche “No match” */

        var transactions = [102, 50, 4563, 42, 78, 146, 10563];
        var researched = 42;

        console.log(transactions.includes(researched));

        if (transactions.includes(researched)) {
        console.log("We found a matching transaction");
        }
        else {
        console.log("No match");
        }

console.log("\n###Exercice9###");

/*
Reprenez la variable students de l’exercice 7. Faites un console.log de cette variable.
Les étudiants sont-ils stockés dans l’ordre alphabétique ?
Avant de transmettre la liste des étudiants au secrétariat ceux-ci doivent être présentés dans l’ordre alphabétique
pour simplifier les traitements. Utilisez la fonction sort
(https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort) pour réaliser cette opération.
Affichez maintenant le dernier élément du tableau students peu importe la taille de ce dernier.
Au besoin faites une recherche sur internet.*/

        var students = ["John Doe", "Jane Doe", "Marc Alm", "Jimmy Turner"];
        console.log(students);

        students.sort();
        console.log(students);

        // Access last element
        console.log(students[students.length-1]);
        // delete last element and returns it
        console.log(students.pop());










            











