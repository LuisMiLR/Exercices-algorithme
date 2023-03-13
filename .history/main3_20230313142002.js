// Exercice 3 

 
let result;
let tva = 1.196;


function calculTva(montantHt) {
    let tva = 1.196;
    montantHt = parseInt(window.prompt("quel est le montant hors taxe de l'objet"));
    const result = montantHt * tva; 
    console.log("le montant TTC est  "+ result); 
}
calculTva()

