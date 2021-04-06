// Math : Contient des metodes permettant de realiser des operations sur les nombres
// Date : Permet de manipuler les dates
// ...

console.log(Math.round(2.1)); // affiche 2
console.log(Math.pow(2, 3)); // Affiche 8
console.log(Math.min(2, -1, 3, -5)); // Affiche -5
console.log(Math.max(2, -1, 3, -5)); // Affiche 3
console.log(Math.random()); // Affiche un nombre aleatoire
console.log(Math.floor(Math.random() * 10)); // Affiche un entier compris entre 0 et 9
console.log(Math.sqrt(4));// Affiche 2
console.log(Math.abs(-2));// Affiche 2

// Quelques operateurs 

// typeof : pour obtenir le type d'une variable
// new : pour creer un objet en utilisant un contructeur
// this : pour designer l'objet courant 

// in : pour tester si un indice est dans le tableau, si une methode apparient a un objet, ...

// var tab = [2, 3, 5];
// if (2 in tab){
//     console.log("oui"); // Affiche oui
// }

var perso = { nom: 'Wick', prenom: 'John' };

if (perso.nom == 'Wick')
    console.log("oui, la ca matche");

if ("nom" in perso)
    console.log("oui"); // Affiche oui

// Controle si Wick existe dans perso
Object.keys(perso).forEach(
    function (key) {
        if (perso[key] == 'John') {
            console.log('exists');
        }
    });


var keys = Object.keys(perso);

for (key of keys) {
    console.log(key + ' ' + perso[key]);
}

perso.nom === "Wick" ? console.log("Yes") : console.log("No");

// instanceof : retourne true si l'objet donné est du type specifie, false sinon.

var jour = new Date(2021, 04, 02);
if (jour instanceof Date)
    console.log("oui"); // Affiche oui

// Une constante est un element qui ne peut pas changer de valeur

const PI = 3.1415;

// PascalCase : MonProjet
// CamelCase : maMethode()

// Genere une erreur, impossible de modifier les valeurs d'une constante
// PI = 5;

const obj = {
    nom: 'Wick',
    prenom: 'John'
};

// Genere une erreur, impossible de modifier les valeurs d'une constante
// obj = {};

// Cependant, l'instruction suivant est correcte et ne leve pas d'exception
obj.nom = "Doe";
obj['prenom'] = "Denzel"
obj.age = 50;

console.log(obj);

const tab = [2, 3, 8];

// Genere une erreur, impossible de modifier les valeurs d'une constante
// tab = [];

// Cependant, l'instruction suivant est correcte et ne leve pas d'exception
tab[2] = 1;
tab[0] = 9;

console.log(tab);

//On peut lancer une exception si un des param`etres n’est pas de type number
function produit(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw "Les parametres doivent etre de type number";
    }
    return a * b;
}


// L’appel de la fonction doit etre entoure par un bloc try ... catch pour
// capturer et traiter l’ eventuelle exception lancee
try {
    console.log(produit(2, "a")); // Affiche un Nan (Not a Number)
} catch (e) {
    console.error(e);
}

// Gerer la division par 0 en lancant une exception si le parametre n'est pas divisible par 0 

function division2(a, b) {
    try {
        if (b == 0) {
            throw "Le 2ème paramètre  doit être != 0 !";
        }
    }
    catch (e) {
        console.log(e);
    }
    return a / b;
}

division2(2, 0);

function diviser(a, b) {
    try {
        if (b == 0) {
            throw "La division par 0 n'est pas autorisé";
        }
    } catch (e) {
        console.log(e);
    }
    return a / b;
}

diviser(2, 0);

// Expressions Regulieres = REGEX

// permettre de verifier si des chaines de caracteres respectent certaines formats
// email, mot de passe, numero de telephone

// recherche d'une sous-chaine dans une chaine de caractere
// avec un Regex insensible a la casse
var str = "Bonjour tout le monde";
var pos = str.search(/Tout/i);

console.log(pos);

// Retourne -1 si la sous chaine n'existe pas
var pos = str.search(/c/i);

console.log(pos); // Affiche -1

// cherche et retourne true si chaine 2 est dans chaine 1, false sinon
var str = /AB/i;
var result = str.test("ababaabbaaab");
console.log(result);

// remplace la premiere occurence d'une sous-chaine
var chaine = "ababaabbaaab";
var txt = chaine.replace(/ab/, "c");
console.log(txt);

// remplace toutes les occurences d'une sous-chaine
var chaine = "ababaabbaaab";

var txt = chaine.replace(/ab/g, "c");
console.log(txt);

// permet d'avoir un resultat sous forme d'objet
var str = /AA/i;
var resultat = str.exec(chaine);

console.log("chaine trouvée : " + resultat[0]);

console.log("Indice de la premiere occurence :" + resultat.index);

console.log("texte complet :" + resultat.input);

// retourne un tableau contenant toutes occurrences
var str = /AA/gi;
var resultat = chaine.match(str);
console.log(resultat);

// a? : 0 ou 1 a
// a* : 0 ou plusieurs
var str = /ba?c/i;
console.log(str.test("bac")); // Affiche true

console.log(str.test("baac")); // Affiche false

// La valeur doit contenir 4 chiffres obligatoirement
var p = "2345";
var str = /^([0-9]){4}$/;
if (p.match(str)) {
    console.log("yes");
} else {
    console.log("No");
}

// le pseudo doit contenir au minimum six caractères des caracteres, au moins une lettre , au moins un chiffre, au moins un tiret du bas
// et maximum 20
var p = "Jean_Baton06";
var str = /^(?:.[0-9a-zA-Z_]){6,20}$/;

if (p.match(str)) {
    console.log("yes");
} else {
    console.log("No");
}

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    console.log("You have entered an invalid email address!")
    return (false)
}

var res1 = ValidateEmail("mysite@test\com");
var res = ValidateEmail("mysite@test.com");

console.log(res1);


