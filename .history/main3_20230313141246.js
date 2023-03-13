// Exercice 3 

 
let montantTtc;
let tva = 1.196;



function calculTva(montantHt) {
    const result = montantHt * tva; 
   montantHt = parseInt(window.prompt("quel est le montant hors taxe de l'objet"));

}

console.log("le montant TTC est  "+ result); 
