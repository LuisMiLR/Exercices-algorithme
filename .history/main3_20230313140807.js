// Exercice 3 

 
let montantTtc;
let tva = 1.196;

function calculTvaTTC(n){
let montantHt = parseInt(window.prompt("quel est le montant hors taxe de l'objet")); 
    montantTtc = montantHt * tva;
    console.log(n ("le montant TTC est  " + montantTtc));
}

function calcul