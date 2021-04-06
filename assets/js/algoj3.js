// Une fonction de callback est une fonction qui est transmise comme argument 
// à une autre fonction, puis exécutée lorsque l'autre fonction est terminée.
// une fonction de rappel ou « callback » en anglais est une fonction qui va pouvoir être 
// rappelée (« called back ») à un certain moment et / ou si certaines conditions sont réunies. 
// Nous utilisons les callbacks pour nous assurer que le code est exécuté uniquement 
// après la fin d'une opération asynchrone.

// SYNCHRONE / ASYNCHRONE

// En informatique, on dit que deux opérations sont synchrones lorsque la seconde attend 
// que la première ait fini son travail pour démarrer, le début de l’opération suivante dépend de la complétude de l’opération précédente.

// Au contraire, deux opérations sont qualifiées d’asynchrones en informatique lorsqu’elles sont indépendantes 
// c’est-à-dire lorsque la deuxième opération n’a pas besoin d’attendre que la première se termine pour démarrer.

// Par défaut, le JavaScript est un langage synchrone, bloquant et qui ne s’exécute que sur un seul thread. 

// Cela signifie que :

// Les différentes opérations vont s’exécuter les unes à la suite des autres (elles sont synchrones) ;
// Chaque nouvelle opération doit attendre que la précédente ait terminé pour démarrer (l’opération précédente est « bloquante ») ;
// Le JavaScript ne peut exécuter qu’une instruction à la fois

// Le code asynchrone sera écrit de trois façons : les callbacks, les promesses et les mots-clés async/await.
function direBonjour2(msg) {
    var message = "Bienvenue " + msg;
    console.log(message);
}

direBonjour2("Tout le monde");

function direBonjour(msg, callback) {
    var message = "Bienvenue " + msg;
    callback(message);
}

// fonction de callback
function afficherMessage(msg) {
    console.log(msg);
}

direBonjour("Tout le monde", afficherMessage);

function somme(a, b) {
    return a + b;
}

function produit(a, b) {
    return a * b;
}

function operation(a, b, callback) {
    console.log(callback(a, b));
}

operation(3, 5, somme);
operation(3, 6, produit);

// La premiere :  Une fonction callback
function hello() {
    console.log("hello");
}

// Pour afficher un message après X secondes
// La deuxieme : une duree en millisecondes qui precede l'execution de la fonction callback
function sayHelloAfterXSeconds(x) {
    setTimeout(hello, x * 1000);
}

// Appel de methode say...() prenant en argument des secondes
sayHelloAfterXSeconds(5);

var timeout;

// Il est possible d'utiliser une fonction anonyme en Callback
function sayHelloAfterXSeconds2(x) {
    timeout = setTimeout(function () {
        console.log("hello");
    }, x * 1000);
}

// Appel de methode say...() prenant en argument des secondes
sayHelloAfterXSeconds2(2);

// Il est possible d'annuler l'execution de la fonction callback setTimeout()
clearTimeout(timeout);
// Hello ne sera jamais affiché

var interval;
// Pour afficher un message toutes les X secondes
function sayHelloEveryXSeconds(x){
    interval = setInterval(hello, x * 1000);
}

sayHelloEveryXSeconds(5);

// Il est possible d'annuler l'execution de la fonction callback setInterval()
clearInterval(interval);





