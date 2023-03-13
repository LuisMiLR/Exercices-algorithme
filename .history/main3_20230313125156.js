// Exercice 3 

 
let montantTtc;
let tva = 19.6;
function (calcultva) {
let montantHt = parseInt(window.prompt("quel est le montant hors taxe de l'objet")); 
    montantTtc = montantHt * tva;
    return ("le montant TTC est  " + montantTtc);
}
