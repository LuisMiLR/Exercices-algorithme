// Exercice 3 

 
let montantTtc;
let tva = 1.196;

let montantHt = parseInt(window.prompt("quel est le montant hors taxe de l'objet")); 
    montantTtc = montantHt * tva;
    alert ("le montant TTC est  " + montantTtc);
