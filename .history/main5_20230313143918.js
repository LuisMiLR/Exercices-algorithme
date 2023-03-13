/*Écrire un algorithme qui demande 2 nombres à un utilisateur. 
Il indique ensuite à l'utilisateur si
le produit de ces 2 nombre (A * B)est positif ou négatif*/

function userNumber(number1, number2) { 
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
