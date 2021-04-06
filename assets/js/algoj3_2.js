// Objet

// Qu'est ce qu'un objet ?

// c 'est un ensemble de 

// - attributs (variable, champs) : clé + valeur
// - méthodes : fonctions

// un objet est caractérisé par des accolades
var obj = {
    nom: "Wick",
    prenom: "John"
};

// Recupere l'attribut nom de l'objet obj et l'affiche en console
console.log(obj.nom);
// ou
console.log(obj["prenom"]);

// Un objet est iterable avec for...in
for (var elt in obj) {
    console.log(elt + " : " + obj[elt]);
}

// on cree un nouvel objet ou on cree une nouvelle instance obj de type Objet
var obj = new Object();
obj.nom = "wick";
obj.prenom = "John";

// copie un objet
var obj2 = obj;

// copie un objet avec ...(spread operator) permettant de faire des copies d'objets, variables
// Ici, la variable d'origine et sa copie sont totalement independantes
// var obj2 = {...obj};
// ou
var obj2 = Object.assign({}, obj);

obj2.nom = "Doe";

console.log(obj.nom); // Affiche Wick

console.log(obj2.nom); // Affiche Doe

// Pour transformer un objet en chaine de caracteres
var str = JSON.stringify(obj);
console.log(str);

// Pour transformer une chaine de caractere en objet
var p = JSON.parse(str);
console.log(p.nom + " " + p.prenom);

// Ajout d'une méthode dans lobjet obj
var obj = {
    nom: "Wick",
    prenom: "John",
    direBonjour: function () {
        console.log("Bonjour " + this.nom);
    }
};

// Appel de la methode direbonjour a partir de obj de type Object
obj.direBonjour();

// Constructeurs

// Moule pour creer des objets
// Tous les objets sont de type Object
// Et si on veut creer un modele d'objet, on peut utiliser les constructeurs

// var Personne = function(nom, prenom, age){
//     this.nom = nom;
//     this.prenom = prenom;
//     this.age = age;
//     this.afficherNomComplet = function(){
//         console.log(this.nom + " " + this.prenom);
//     }
// }

// OU

class Personne {
    nom;
    prenom;
    age;

    constructor(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    // Getter : Accesseur => recupere les valeur
    getNom() {
        return this.nom;
    }

    // Setter : mutateur : modifier les valeurs de l'attibut par la valeur passe en parametre
    setNom(nom) {
        this.nom = nom;
    }

    afficherNomComplet() {
        return this.nom + " " + this.prenom;
    }

}

// Cree une nouvelle instance de lobjet Personne à partir de constructeur
perso = new Personne("Wick", "John", 35);
// Appel de la methode setNom(nom) pour modifier la valeur de nom dans l'instance perso
perso.setNom("Doe");
// Affiche la nom de l'instance perso par la methode getNom()
console.log(perso.getNom());

perso2 = new Personne(35, "Wick", "John");
console.log(perso2.nom);

// Erreur, Impossible de lui ajouter un nouvel attribut de cette facon
// Personne.rue = 0;

// Utiliser le prototype
Personne.prototype.rue = 0;

// Mise en place du Getter / Accesseur
Personne.prototype.getRue = function () {
    return this.rue;
}

// Mise en place du Setter / Mutateur
Personne.prototype.setRue = function (rue) {
    this.rue = rue;
}

perso.setRue("RUE1");
console.log(perso.getRue());


// Copier un tableau

// Si l'opérateur d'affectation simple avait été utilisé, alors array2 aurait reçu 
// une référence à array1 et les modifications apportées dans un tableau seraient 
// reflétées dans l'autre tableau, ce qui dans la plupart des cas n'est pas souhaitable.
let array1 = ['h', 'e', 'y'];
let array2 = [...array1];
console.log(array2);

// Insérer les éléments d'un tableau dans un autre
// On peut voir que l'opérateur spread peut être utilisé pour ajouter un tableau 
// après n'importe quel élément du deuxième tableau. 
// En d'autres termes, il n'y a aucune limitation selon laquelle 
// baked_desserts ne peut être ajouté qu'au début ou à la fin du tableau desserts2.

let baked_desserts = ['cake', 'cookie', 'donut'];

let desserts = ['icecream', 'flan', 'frozen yoghurt', ...baked_desserts];
console.log(desserts);

//Ajout de baked_desserts après le flan
let desserts2 = ['icecream', 'flan', ...baked_desserts, 'frozen yoghurt'];
console.log(desserts2);

// Tableau d'arguments
function multiply(number1, number2, number3) {
    console.log(number1 * number2 * number3);
}

// Au lieu d'avoir à passer chaque élément comme les nombres [0], 
// les nombres [1] et ainsi de suite, les opérateurs d'étalement permettent 
// aux éléments de tableau d'être passés en tant qu'arguments individuels.
let numbers = [1, 2, 3];
multiply(...numbers);

// Autre exemple 
// Passer des éléments du tableau comme arguments à l'objet math
let numbers2 = [1, 2, 300, -1, 0, -100];

// L'objet Math de Javascript ne prend pas un seul tableau comme argument mais 
// avec l'opérateur spread, et le tableau qui represente l'ensemble de nos arguments 
// avec une seule ligne de code.
console.log(Math.min(...numbers2));

