/*  Exercice7:
Écrire un algorithme qui demande à l'utilisateur un nombre compris entre 0 et 10 jusqu'à ce que la réponse soit bonne.*/

const justeNombre = Math.round(Math.random() * 500);
// alert(justePrix);


let reponseUser;

do {
  reponseUser= parseInt(prompt("entrez un chiffre entre 1 et 10")); 
if (reponseUser < justeNombre ){

  alert ("Non, essaie encore");
} else if ( reponseUser > justeNombre){

  alert ("Non, essaie encore");
} else if ( reponseAsString == justeNombre) {

  alert ( "Vous l'avez gagné")
}
} while ( reponseUser !== justeNombre ); 