function fun() {

    // Tableau (array)
    // - une variable pouvant avoir simultanement un ensemble de valeurs
    // - La premiere valeur du tableau est d'indice 0

    var tab = [2, 3, 5];

    // Recupere la taille du tableau
    console.log(tab.length);

    // Affiche le 1er element du tableau
    console.log(tab[0]);

    // Ajoute un element
    tab.push(7);
    // ou
    tab[tab.length] = 8;

    // Affiche le tableau
    console.log(tab);

    // Parcourir et afficher un tableau
    for (var i = 0; i < tab.length; i++) {
        console.log(tab[i]);
    }

    // Boucle for simplifiée
    for (var elt of tab) {
        console.log(elt);
    }

    /*
        Opérations sur les tableaux
        
        - push() : ajoute un element passe en parametre du tableau
        - pop() : supprime le dernier element du tableaux
        - shift() : supprime le premier element du tableaux
        - reverse() : inverse l'ordre des elements du tableau
        - sort() : trie le tableaux
        - splice() : permet d'extraire, ajouter ou supprimer un ou plusieurs elements(selon des paramètres)
        - slice () : Permet d'extraire un sous-tableau à partir du tableau d'origine
        - includes() : retoune true si la valeur passee en parametre existe dans un tableau
        - indexOf() : retourne la position de l'element passé en parametre, -1 sinon
        - fill() : permet d'initiliser, ou modifier des valeurs d'un tableau ou une partie
        - unshift() : permet d'ajouter un ou plusieurs elements au debut d'un tableau

     */

    var sports = ["foot", "tennis", "rugby", "basket", "volley"];

    // sports.splice(2, 1, "Basket", "Petanque");

    for (var elt of sports) {
        console.log(elt);
    }

    var tab = sports.slice(1, 3);

    console.log(tab);

    var tab = new Array(3).fill(0);

    console.log(tab);

    var tab = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    tab.fill(9, 2, 5);
    console.log(tab);

    tab.unshift(9);

    console.log(tab);

    // Écrivez un programme JavaScript pour calculer la somme et le produit d'un tableau d'entiers.

    var array = [1, 2, 3, 4, 5, 6],
        s = 0,
        p = 1;

    // for (var i = 0; i < array.length; i += 1) {
    //     s += array[i];
    //     p *= array[i];
    // }

    for (var elt of array) {
        s += elt;
        p *= elt;
    }

    var somme = array.reduce(
        function (sum, elem) {
            return sum + elem;
        });

    var somme = array.reduce((sum, elem) => { return sum + elem; });

    console.log(somme);

    var produit = array.reduce(
        function (prod, elem) {
            return prod * elem;
        });

    var produit = array.reduce((prod, elem) => { return prod * elem; });

    console.log(produit);


    console.log('Sum : ' + s + ' Product :  ' + p);

    // .forEach() : Parcourir un tableaux
    // .map() : appliquer une fonction a un tableaux
    // .filter() : filtrer les elements d'un tableau selon un critere sous la forme d'une fontion anonyme ou flechée
    // .reduce() : reduire tous les elements d'un tableau en un seul selon un regle definie sous la forme d'une fontion anonyme 
    // ou flechée

    var tab = [2, 3, 5];
    tab.map(x => x + 3)
        .filter(x => x > 5)
        .forEach(
            function (a) {
                console.log(a - 3);
            }
        );

    // Affiche 3, 5

    var somme = tab.map(x => x + 3)
        .filter(x => x > 5)
        .reduce(
            function (sum, elem) {
                return sum + elem;
            });

    // Affiche 14
    console.log(somme);

}

fun();

// Fonctions

// ES5 -ECMASCRIPT V5
function somme(a, b) {
    return console.log(a + b);
}
somme(1, 3);

// ES6

const addition = (a, b) => a + b;

const addName = () => {
    var newName = prompt("Veuillez bien saisir le nom d'une personne qui participera à notre lotterie");
    namesArray.push(newName);
}

var res = addition(1, 3);

console.log(res);

var x = 10;
{
    var x = 2;
}
// x = 2
// on va pouvoir se servir de x

{
    let x = 2;
}
// console.log(x);
// x = 10
// pas possible de se servir de x

let somme2 = new Function("a", "b", "return a + b");

let resultat = somme2(1, 5);

console.log(resultat);

function somme3() {
    result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(somme3(2, 4, 8));
console.log(somme3(2, 3));

// Créez une fonction qui prend un tableau en parametre contenant uniquement des nombres et
// renvoie le premier élément.

let array = [1, 2, 3, 4, 5, 6];

function f2(arr) {
    return arr[0];
}

//const f2 = (arr) => arr[0];

var r = f2(array);
console.log(r);

// Créez une fonction qui prend l'âge et retourne l'âge en jours.

// Ecrivez une fonction qui prend un nombre entier de minutes et retourne la conversion
// en secondes.

// Reprenez l'exercice "calculer la somme et le produit ...", appliquez la methode reduce()
// soit avec une fonction anomyme, ou une fonction fléchée

// Tester les instructions document.write et document.writeln en affichant au minimum
// un nombre, une phrase, le contenu d'une variable ...
// Que constatez-vous ?
// Doc : https://developer.mozilla.org/fr/docs/Web/API/Document/writeln

// Définir en JavaScript un tableau contenant des notes d'étudiants comprises entre 0 et 20.
// Implémenter en JavaScript les fonctions qui permettent d'afficher un tel tableau, de savoir combien d'étudiants ont eu 10 plus, 
// de calculer la moyenne des notes, de connaître la note maximale, de rechercher une note particulière





