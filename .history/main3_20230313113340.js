// Exercice 3 

let montantHt;
let montantTtc;
let tva = 19.6;
function calculTva(montantHt) {
    montantHt = parseInt(window.prompt("quel est le montant hors taxe de l'objet"));
    montantTtc = montantHt * tva;
    console.log(montantTtc); 
}
