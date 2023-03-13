// Exercice 3 

 
let montantTtc;
let tva = 1.196;



function calculTva(montantHt) {
    montantHt = parseInt(window.prompt("quel est le montant hors taxe de l'objet"));
    const result = montantHt * tva; 
    console.log("le montant TTC est  "+ result); 
}

