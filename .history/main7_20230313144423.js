/*  Exercice7:
Écrire un algorithme qui demande à l'utilisateur un nombre compris entre 0 et 10 jusqu'à ce que la réponse soit bonne.*/

const justeNombre = Math.round(Math.random() * 10);



let reponseUser;
function discoverNumber() {
do {
  reponseUser= parseInt(prompt("entrez un chiffre entre 1 et 10")); 
if (reponseUser < justeNombre ){

  alert ("Non, essaie encore");
} else if ( reponseUser > justeNombre){

  alert ("Non, essaie encore");
} else if ( reponseUser == justeNombre) {

  alert ( "Vous l'avez gagné");
}
} while ( reponseUser !== justeNombre ); 
}
dis