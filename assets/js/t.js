// Exercice 5 :

    // Partie 1 :

/******************************************************************** GUERRIER ************************************************************************/

class Guerrier{
    nom;
    valAtt;
    valDef;
    valLife;
    constructor(nom, valAtt, valDef, valLife){
        this.nom = nom;
        this.valAtt = valAtt;
        this.valDef = valDef;
        this.valLife = valLife;
    
        this.attaquer = function(cible){
            console.log("Attaquant : " + nom + " => [ valAtt = " + valAtt + " ] / [ ValDef = " + valDef + " ] / [ valLife = " + valLife + " ]");
            console.log("Attaqué : " + cible.nom + " => [ valAtt = " + cible.valAtt + " ] / [ valDef = " + cible.valDef + " ] / [ valLife = " + cible.valLife + " ]");
            var deg = valAtt - (valAtt * cible.valDef / 100);

            console.log("L'attaque de " + nom + " a fait " + deg + " points de dégâts d'attaque à " + cible.nom + ".");
            cible.setValLife(cible.valLife - deg);
            if(cible.valLife <= 0){
                console.log(nom + " a tué " + cible.nom + " :'( ");
            
            }
        }
    }
    getAll(){
        return console.log("Champion : " + this.nom + " - Attaque : " + this.valAtt + " - Défense : " + this.valDef + " - PV : " + this.valLife);
    }
    getNom(){
        return console.log("Champion : " + this.nom);
    }
    setNom(nom){
        this.nom = nom;
    }
    getValAtt(){
        return console.log(" - Attaque : " + this.valAtt);
    }
    setValAtt(valAtt){
        this.valAtt = valAtt;
    }
    getValDef(){
        return console.log(" - Défense : " + this.valDef);
    }
    setValDef(valDef){
        this.valDef = valDef;
    }
    getValLife(){
        return console.log(" - PV : " + this.valLife);
    }
    setValLife(valLife){
        this.valLife = valLife;
    }
}

/******************************************************************** MAGICIEN ************************************************************************/

class Magicien{
    nom;
    valAtt;
    valDef;
    valLife;
    valMana;
    constructor(nom, valAtt, valDef, valLife, valMana){
        this.nom = nom;
        this.valAtt = valAtt;
        this.valDef = valDef;
        this.valLife = valLife;
        this.valMana = valMana;
        this.attaquer = function(cible){
            console.log("Attaquant : " + nom + " => [ valAtt = " + valAtt + " ] / [ ValDef = " + valDef + " ] / [ valLife = " + valLife + " ] / [ valMana = " + valMana + " ]");
            console.log("Attaqué : " + cible.nom + " => [ valAtt = " + cible.valAtt + " ] / [ valDef = " + cible.valDef + " ] / [ valLife = " + cible.valLife + " ]");
            var deg = valAtt - (valAtt * cible.valDef / 100);
            var nouvMana = valMana - (100);

                if((valAtt / 2) > valMana){
                    return console.log(nom + " n'a pas assez de mana pour attaquer. => Solde : " + this.valMana + ".");
                }
                else{
                    console.log("L'attaque de " + nom + " a fait " + deg + " points de dégâts d'attaque à " + cible.nom + ".");
                    console.log(nom + " perd " + (valAtt / 2) + " de mana. Nouveau solde de mana : " + nouvMana + ".");
                    cible.setValLife(cible.valLife - deg);
                    setValMana(nouvMana);
                    if(cible.valLife <= 0){
                        console.log(nom + " a tué " + cible.nom + " :'( ");
                    }
                }
        }

        this.heal = function(){
            if(this.valMana < 10){
                return console.log(this.nom + " n'a pas assez de mana pour se soigner. => Solde : " + this.valMana + ".");
            }
            else{
                this.setValMana(this.valMana - 10);
                this.setValLife(this.valLife + 10);
                return console.log("La santé de " + this.nom + " est maintenant à " + this.valLife + " PV et son mana est maintenant à : " + this.valMana + ".");
            }
        }

        this.regenMana = function(){
            if(this.valLife <= 100){
                return console.log(this.nom + " n'a pas assez de PV pour récupérer de la mana. => Solde : " + this.valLife + ".");
            }
            else{
                this.setValLife(this.valLife - 100);
                this.setValMana(this.valMana + 8000);
                return console.log("La mana de " + this.nom + " est maintenant à " + this.valMana + " et ses PV s'élèvent maintenant à : " + this.valLife + ".");
            }
        }
        
    }
     
    getAll(){
        return console.log("Champion : " + this.nom + " - Attaque : " + this.valAtt + " - Défense : " + this.valDef + " - PV : " + this.valLife + " - Mana : " + this.valMana);
    }
    getNom(){
        return console.log("Champion : " + this.nom);
    }
    setNom(nom){
        this.nom = nom;
    }
    getValAtt(){
        return console.log(" - Attaque : " + this.valAtt);
    }
    setValAtt(valAtt){
        this.valAtt = valAtt;
    }
    getValDef(){
        return console.log(" - Défense : " + this.valDef);
    }
    setValDef(valDef){
        this.valDef = valDef;
    }
    getValLife(){
        return console.log(" - PV : " + this.valLife);
    }
    setValLife(valLife){
        this.valLife = valLife;
    }
    getValMana(){
        return console.log(" - Mana : " + this.valMana);
    }
    setValMana(valMana){
        this.valMana = valMana;
    }

}




/******************************************************************** Instances de Guerrier et Magicien ************************************************************************/

// Nouveaux objets Guerrier :

perso1 = new Guerrier("Aragorn fils d'Aratorn, descendant d'Isildur", 120, 12, 12000);
perso2 = new Guerrier("Boromir fils de Denetor II ,intendant du Gondor", 130, 11, 12300);
perso3 = new Guerrier("Garen", 115, 15, 11500);
perso4 = new Guerrier("Renekton", 135, 12, 10000);
perso5 = new Guerrier("Shen", 105, 10, 13500);

// Nouveaux objets Magicien :

perso6 = new Magicien("Sarouman le blanc", 16000, 12, 289, 50);
perso7 = new Magicien("Syndra", 255, 11, 2200, 254);
perso8 = new Magicien("Orianna", 310, 5, 1200, 310);
perso9 = new Magicien("Leblanc", 290, 2, 1500, 291);
perso10 = new Magicien("Velkoz", 270, 8, 1800, 267);

/******************************************************************************** PLACE AU COMBAT ***********************************************************************/

// Attaque Guerrier 1 :
console.log("Attaque 1 : ");
console.log("");
console.log("Infos avant attaque => PV de " + perso6.nom + " : " + perso6.valLife + ".");

var attaque1 = perso1.attaquer(perso6);
console.log("Nouveau PV de " + perso6.nom + " : " + perso6.valLife + ".");
console.log("");

// // Attaque Guerrier 2 :
console.log("Attaque 2 : ");
console.log("");
console.log("Infos avant attaque => PV de " + perso6.nom + " : " + perso6.valLife + ".");
var attaque2 = perso2.attaquer(perso6);
console.log("Nouveau PV de " + perso6.nom + " : " + perso6.valLife + ".");
console.log("");

// // Heal Magicien 1 :
console.log("Tentative de heal : ");
console.log("");
console.log("Infos avant le heal => " + perso6.nom + " - PV : " + perso6.valLife + " - Mana : " + perso6.valMana + ".");
var heal1 = perso6.heal();
console.log("");

// // Attaque Magicien 1 :
console.log("Attaque 3 : ");
console.log("");
console.log("Infos avant attaque => PV de " + perso1.nom + " : " + perso1.valLife + ".");
var attaque2 = perso6.attaquer(perso1);
console.log("Nouveau PV de " + perso1.nom + " : " + perso1.valLife + ".");
console.log("Nouveau mana de " + perso6.nom + " : " + perso6.valMana + ".");
console.log("");

// // Récupération mana Magicien :
console.log("Récupération de mana 1 : ");
console.log("");
console.log("Infos avant la récup => " + perso6.nom + " - PV : " + perso6.valLife + " - Mana : " + perso6.valMana + ".");
var recupMana1 = perso6.regenMana();
console.log("Nouveau PV de " + perso6.nom + " : " + perso6.valLife + ".");
console.log("Nouveau mana de " + perso6.nom + " : " + perso6.valMana + ".");

// // Attaque Magicien 2 :
console.log("Attaque 4 : ");
console.log("");
console.log("Infos avant attaque => PV de " + perso2.nom + " : " + perso2.valLife + ".");
var attaque2 = perso6.attaquer(perso2);
console.log("Nouveau PV de " + perso2.nom + " : " + perso2.valLife + ".");
console.log("Nouveau mana de " + perso6.nom + " : " + perso6.valMana + ".");
console.log("");

// // Attaque Guerrier 3 :
console.log("Attaque 5 : ");
console.log("");
console.log("Infos avant attaque => PV de " + perso6.nom + " : " + perso6.valLife + ".");
var attaque1 = perso1.attaquer(perso6);
console.log("Nouveau PV de " + perso6.nom + " : " + perso6.valLife + ".");
console.log("");