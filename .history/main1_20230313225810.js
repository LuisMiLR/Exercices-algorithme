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
    /*Écrire un algorithme qui demande 2 nombres à un utilisateur. 
Il indique ensuite à l'utilisateur si
le produit de ces 2 nombre (A * B)est positif ou négatif*/

function userNumber() { 
    let number1 = parseInt(window.prompt("Donnez un nombre"));
    let number2 = parseInt(window.prompt("Donnez un autre nombre"));
    let result = number1 * number2;
    
     if ( result > 0) {
        console.log("le nombre obtenu est positif");  
     } 
     else { 
        console.log("le nombre obtenu est négatif");
       
     };
    }
    userNumber();


    /*** Exercice6: Écrire un algorithme qui demande à l'utilisateur son age. 
Il indique ensuite à l'utilisateur quel film il peut aller voir.

"Action Man" si moins de 13 ans
"Matrix" si il a entre 13 et 18 ans
"Evil Dead" si plus de 18 ans

Pour résoudre ce problème vous pouvez utilisez la structure suivante :
SI condition ALORS...SINON SI condition ALORS...SINON...FINSI 
Cette structure permet d'éviter trop d'imbrication **/

function moviesPlay() {
    let movies = [ "Action Man","Matrix","Evil Dead" ];
    let age =  parseInt(window.prompt("Quel est votre age ?"));
    if(age < 13) {
        console.log( "Vous pouvez regarder Action Man");
    } 
    else if( age > 18) {
        console.log("Vous pouvez regarder Evil Dead");
    }
    else { 
        alert("Vous pouvez regarder Matrix");
    }
    }
    moviesPlay()

    

    /*  Exercice7:
Écrire un algorithme qui demande à l'utilisateur un nombre compris entre 0 et 10 jusqu'à ce que la réponse soit bonne.*/

const justeNombre = Math.round(Math.random() * 10);



let reponseUser;
function discoverNumber() {
do {
  reponseUser= parseInt(prompt("découvre le nombre entre 1 et 10")); 
if (reponseUser < justeNombre ){

  alert ("Non, essaie encore");
} else if ( reponseUser > justeNombre){

  alert ("Non, essaie encore");
} else if ( reponseUser == justeNombre) {

  alert ("Vous avez gagné");
}
} while ( reponseUser !== justeNombre ); 
}
discoverNumber();
    



