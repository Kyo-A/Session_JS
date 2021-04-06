// Exercice 1 

var tab = new Array();

// function add_nom() {
//     tab.push(prompt("Saisir un nom"));
// }

const add_nom = () => {
    tab.push(prompt("Saisir un nom"));
};

// function tirage() {
//     var rand = Math.floor(Math.random() * tab.length);
//     tab.length > 0 ? alert("Le nom gagnant est : " + tab[rand]) :
//     alert("veuillez rentrer des valeurs");
// }

const tirage = () => {
    var rand = Math.floor(Math.random() * tab.length);
    tab.length > 0 ? alert("Le nom gagnant est : " + tab[rand]) :
        alert("veuillez rentrer des valeurs");
};

// Exercice 2

var student = {
    name: "David Rayy",
    class: "VI",
    rollno: 12
};

console.log(student);
delete student.rollno;
console.log(student);

// Exercice 3

var recipe = {
    name: 'Socca',
    servings: 2,
    ingredients: ['pois-chiche', 'soleil', 'poivre']
};

console.log(recipe.name);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');

// for (var i = 0; i < recipe.ingredients.length; i++) {
//     console.log(recipe.ingredients[i]);
// }

recipe.ingredients.forEach(a => console.log(a));

// Exercice 4

var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

// for (var i = 0; i < library.length; i++) {
//     var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//     if (library[i].readingStatus) {
//         console.log("Already read " + book);
//     } else {
//         console.log("You still need to read " + book);
//     }
// }

library.forEach(a => {
    var book = "'" + a.title + "'" + ' by ' + a.author + ".";
    a.readingStatus ? console.log("Already read " + book) :
        console.log("You still need to read " + book);
});

function afficherLibrairie(lib) { 
    lib.forEach(a => {
        var book = "'" + a.title + "'" + ' by ' + a.author + ".";
        a.readingStatus ? console.log("Already read " + book) :
            console.log("You still need to read " + book);
    });
} 

afficherLibrairie(library);


// Exercice 5

class Warrior {

    name;
    attack;
    defense;
    health;
    stuff = [];

    constructor(name, attack, defense, health, stuff) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
        this.stuff[5] = stuff;
    }

    fight(warrior) {
        if (warrior.health <= 0) {
            console.log(warrior.name + " is dead ");
        } else if (warrior.health >= 0 && warrior.health <= 45) {
            console.log(this.name + " finish " + warrior.name);
            warrior.health = 0;
            console.log(warrior.name + " is dead ");
        } else {
            console.log(this.name + " attacks " + warrior.name);
            warrior.health = warrior.health - this.attack;
            console.log(warrior.name + " has " + warrior.health + " life left");
        }
    }

    specialFight(warrior) {
        if (warrior.health <= 0) {
            console.log(this.name + " can not attack " + warrior.name + " is dead ");
        } else if (warrior.health >= 0 && warrior.health <= 45) {
            console.log(this.name + " finish " + warrior.name);
            warrior.health = 0;
            console.log(warrior.name + " is dead ");
        } else {
            console.log(this.name + " special attacks " + warrior.name);
            console.log("Defense");
            warrior.defense = 0;
            warrior.health = warrior.health - (this.attack * 2);
            console.log(warrior.name + " has " + warrior.health + " life left and " + warrior.defense + " defense left");
        }
    }

    collect(o) {
        this.stuff.push(o);
        console.log(o);
    }

    eat(index) {
        this.stuff.splice(index, 1);
        this.health = this.health + 20;
        console.log(this.health);
    }
}

class Wizzard {

    name;
    attack;
    defense;
    health;
    mana;

    constructor(name, attack, defense, health, mana) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
        this.mana = mana;
    }
    
    fight(warrior) {
        if (warrior.health <= 0) {
            console.log(warrior.name + " is dead ");
        } else if (warrior.health >= 0 && warrior.health <= 45) {
            console.log(this.name + " finish " + warrior.name);
            warrior.health = 0;
            console.log(warrior.name + " is dead ");
        } else {
            console.log(this.name + " attacks " + warrior.name);
            warrior.health = warrior.health - this.attack;
            console.log(warrior.name + " has " + warrior.health + " life left");
        }
    }


    heal() {
        if (this.mana > 10) {
            console.log(this.name + " try to heal himself ");
            this.health += 10;
            this.mana -= 10;
            console.log(this.name + " has now " + this.health);
        }
        else {
            console.log("Not enough mana");
        }
    }

}

var thor = new Warrior("Thor", 40, 50, 200);
var zeus = new Warrior("Zeus", 60, 30, 200);

thor.fight(zeus);
thor.fight(zeus);
thor.fight(zeus);
thor.fight(zeus);
thor.fight(zeus);

thor.specialFight(zeus);
zeus.collect("Pomme");
zeus.collect("Pomme");
zeus.eat(0);
zeus.fight(thor);

var Gandalf = new Wizzard("Gandalf", 30, 40, 250, 40);

thor.fight(Gandalf);
zeus.fight(Gandalf);
Gandalf.heal();
Gandalf.fight(thor);


