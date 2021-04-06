function maFonction() {
    // Box de confirmation
    // var bin = confirm("Press a button!");

    // Box d'affichage avec une zone de saisie
    // var str = prompt("Votre Nom", "John Wick");
    // alert(str); 

    // Affichage en console

    // Debogger = afficher le contenu des variables
    // Tracer = Verifier les blocs du code visités
    console.log("Hello world");

    /* var cl = console.log;
    cl("Hello world"); */


    // le mot-cle var recupere le type dynamiquement
    // var x = 5, y = 5;

    // Types de variable selon la valeur affectée

    // number 
    // string 
    // boolean
    // object 
    // undefined

    // Affiche number
    console.log(typeof 5.2);

    // Affiche boolean
    console.log(typeof true);

    // Affiche string
    console.log(typeof "bonjour");

    // Affiche undefined
    // le mot-clé var a une visiblilite, portee(scope) globale
    var x;
    console.log(typeof x);

    var y = 1;
    var z = "8";
    // Concatenation transformé en addition
    // parseInt : permet de convertir un string en number
    console.log(y + parseInt(z));

    var u = "Bonjour";
    var v = "tout le monde";
    // Concatenation
    console.log(u + " " + v);

    // Affiche NaN (Not a number)
    console.log(x + parseInt(u));

    a = 2;
    b = 0;
    console.log(a / b);

    // i++ => i = i + 1;
    // i-- => i = i - 1;

    // i += 2 => i = i + 2;

    // Post-incrementation (APRES)
    var i = 2;
    var j = i++;
    console.log(i); // 3
    console.log(j); // 2

    // Pre-incrementation (AVANT)
    var i = 2;
    var j = ++i;
    console.log(i); // 3
    console.log(j); // 3

    // Utiliser eval() pour evaluer une expression 
    // arithmétique sous forme de chaînes de caractères(string)
    var str = "2 + 3 * 5";
    console.log(eval(str)); // Affiche 17

    // Méthodes utiles pour les chaìnes de caractères(string)

    // length : la longueur de la chaînes
    // toUppercase() : pour convertir une chaine de caracteres en majuscule
    // toLowercase() : pour convertir une chaine de caracteres en minuscule
    // trim() : Supprime les espaces au debut et a la fin
    // substr() : extrait une sous-chaînes de caractères
    // indexOf() : retourne la position d'une sous-chaînes dans une chaîne, -1 sinon

    // Pour connaître la longueur de la chaînes
    var str = "  bon jour  ";
    console.log(str.length); // Affiche 12

    // Pour supprimer les espaces au debut et a la fin
    var sansEspace = str.trim();
    console.log(sansEspace.length); // Affiche 8

    var str2 = "bonjour";
    // Extrait une sous-chaine a partir de l'indice 3 (Rappel : on commence à partir de l'indice 0)
    console.log(str2.substr(3)); // Affiche jour
    // On peut aussi préciser le nombre de caractère à extraire
    console.log(str2.substr(3, 2)); // Affiche jo
    // Pour extraire les 3 derniers caracteres, on utilise une valeur négative
    console.log(str2.substr(-3)); // Affiche our
    // substring() => prend comme parametre l'indice de debut et l indice de fin(non-inclus)
    console.log(str2.substring(1, 3)); // Affiche on
    // Determine lindice de la sous-chaine "jour" dans "bonjour"
    console.log(str2.indexOf("jour")); // Affiche 3
    console.log(str2.indexOf("soir")); // Affiche -1

    console.log(str2[1]);
    console.log(str2.charAt(1));

    // Exercice 1 :

    // Écrivez un programme JavaScript pour afficher le jour et l'heure actuels.
    // Indication :
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date

    var today = new Date();
    var day = today.getDay();
    // var month = today.getMonth() + 1;
    console.log(day);
    var daylist = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = (hour >= 12) ? " PM " : " AM ";
    console.log("Aujourd'hui, nous sommes " + daylist[day] + ", et il est " + hour + "h" + minute
        + "m" + second + "s" + prepand);


    // Structure Conditionnelle

    var x = 3;
    // Rentre dans le bloc quand la condition est vraie
    if (x > 0) {
        console.log(x + " est strictement positif");
        // Utiliser else if pour specifier une nouvelle condition, si la premiere est fausse
    } else if (x < 0) {
        console.log(x + " est strictement négatif");
        // Specifie un bloc de code a executer, si la meme condition est fausse
    } else {
        console.log(x + " est null");
    }

    // Opérateurs logiques

    // && => et
    // || => ou
    // ! => non

    /* if (condition1 && !condition2 || condition3){
        ...
    } [else ...] */

    // Operateurs de comparaison

    /*
    - == : teste l'egalite
    - === : teste l'egalite et le type
    - !=, !==, >, <, >=, <=
    */

    var x = 5;
    switch (x) {
        case 1:
            console.log("un");
        case 2:
            console.log("deux");
            break;
        case 3:
            console.log("trois");
            break;
        case 4:
        case 5:
            console.log("quatre ou cinq");
            break;
        default:
            console.log("autre");
    }

    var day = today.getDay();

    switch (new Date().getDay()) {
        case 0:
            console.log("dimanche");
            break;
        case 1:
            console.log("lundi");
            break;
        case 2:
            console.log("mardi");
            break;
        case 3:
            console.log("mercredi");
            break;
        case 4:
            console.log("jeudi");
            break;
        case 5:
            console.log("vendredi");
            break;
        case 6:
            console.log("samedi");
            break;
    }

    var str = "orange"
    switch (str) {
        case "banane":
            console.log("prix : 3Euros/KG");
            break;
        case "kiwi":
            console.log("prix : 2Euros/KG");
            break;
        case "goyage":
            console.log("prix : 10Euros/KG");
            break;
        case "orange":
            console.log("prix : 1Euros/KG");
            break;
        case "Mangue":
            console.log("prix : 15Euros/KG");
            break;
        case "Durian":
            console.log("prix : 15Euros/KG");
            break;
        default:
            console.log("Pas de prix disponible");
            break;
    }

    var i = 0;
    // Boucle while : a chaque iteration, on teste si la condition est vraie
    // avant d'acceder aux traitements
    while (i < 5) {
        console.log(i);
        i++;
    }
    // Affiche 0, 1, 2, 3, 4

    // Boucle do...while : execute le bloc au moins une fois ensuite elle verifie la condition
    do {
        console.log(i);
        i++;
    } while (i < 5)
    // Affiche 0, 1, 2, 3, 4

    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // Affiche 0, 1, 2, 3, 4

    // Écrire un code JS qui demande deux entiers a un utilisateur et affiche le plus grand.

    // var num1 = prompt("1er nombre", "0");
    // var num2 = prompt("2eme nombre", "0");

    // var num1 = 14;
    // var num2 = 8;

    // if (parseInt(num1, 10) > parseInt(num2, 10)) {
    //     document.writeln("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
    // }
    // else if (parseInt(num2, 10) > parseInt(num1, 10)) {
    //     document.writeln("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
    // }
    // else {
    //     document.writeln("The values " + num1 + " and " + num2 + " are equal.");
    // }

    // Définir une variable contenant une température, puis comparer cette variable à une
    // valeur seuil, afficher un message si la température est inférieure, un autre message si elle est
    // supérieure.

    var temperature = 12;
    if (temperature > 20) {
        console.log('il fait chaud !');
    } else {
        console.log('il fait froid !');
    }

    // Ecrire un code JS qui permet d’afficher les nombres pairs compris entre 0 et 10.

    for (var i = 0; i < 10; i += 2) {

        console.log(i);

    }

    // Écrivez un programme JavaScript qui itère les entiers de 1 à 100 :

    // ‐ Pour les multiples de trois, imprimez "Fizz" au lieu du nombre et pour les multiples de cinq
    // imprimez "Buzz".

    // ‐ Pour les nombres qui sont des multiples de trois et cinq, imprimez "FizzBuzz".

    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log(i + " Fizz");
        }
        else if (i % 5 === 0) {
            console.log(i + " Buzz");
        }
        else {
            console.log(i);
        }
    }

    // Ecrire un Code JS  pour construire le modèle suivant, en utilisant une boucle for imbriquée.

    // *  
    // * *  
    // * * *  
    // * * * *  
    // * * * * *

    // var x, y, chr;
    // for (x = 1; x <= 6; x++) {
    //     for (y = 1; y < x; y++) {
    //         chr = chr + ("*");
    //     }
    //     console.log(chr);
    //     chr = '';
    // }

    // for (var i = 1; i <= 5; i++) {
    //     switch (i) {
    //         case 1:
    //             console.log("*");
    //             break;
    //         case 2:
    //             console.log("* *");
    //             break;
    //         case 3:
    //             console.log("* * *");
    //             break;
    //         case 4:
    //             console.log("* * * *");
    //             break;
    //         case 5:
    //             console.log("* * * * *");
    //             break;
    //     }
    // }

    // for (var i = 0; i < 5; i++) { 
    //     str += "*"; 
    //     console.log(str); 
    // }

    var str = "*";

    for (var i = 0; i > 5; i--) {
        console.log(str);
        str += " *";
    }
}

maFonction();

// // Demande à l'utilisateur de rentrer un nombre et teste sa parité
// var nbr = prompt('Saisir un nombre');
// if (nbr % 2 == 0) {
//     alert("pair");
// }
// else {
//     alert("impair");
// }
// // Simplification de l'ecriture avec une expression ternaire
// nbr % 2 == 0 ? alert("pair") : alert("impair");
// // ou
// alert(nbr % 2 == 0 ? "pair" : "impair");

