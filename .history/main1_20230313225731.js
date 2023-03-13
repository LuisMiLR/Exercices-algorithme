// // Examen Algo
// //exercice 1
// A = 12
// B = 2
// C = A* B (24) 

// // Exercice 2 

// C = "12312"; 




// Exercice 3 
 
let result;
function calculTva(montantHt) {
    let tva = 1.196;
    montantHt = parsefloat(window.prompt("quel est le montant hors taxe de l'objet"));
    const result = montantHt * tva; 
    console.log("le montant TTC est  "+ result); 

};
calculTva();

/* exercice 4
/*Ecrire un algorithme qui demande à l'utilisateur son prénom et son nom et 
qui affiche ensuite la phrase"Bonjour prénom votre nom est nom"*/

function identity() {
    let name1 = window.prompt("indiquez votre prénom et votre nom");
    console.log("Bonjour votre nom est " + name1);
    }
    identity()

    //exercice 5
    
    



