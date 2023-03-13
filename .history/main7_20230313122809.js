/*  Exercice7:
Écrire un algorithme qui demande à l'utilisateur un nombre compris entre 0 et 10 jusqu'à ce que la réponse soit bonne.*/

const justeNombre = Math.round(Math.random() * 500);
// alert(justePrix);


let reponseUser;
let compteur = 1;
do {
  reponseUser= parseInt(prompt("entrez un chiffre entre 1 et 10")); 
if (reponseUser < justePrix ){
  compteur++;
  alert ("trop petit, essaie encore");
} else if ( reponseAsString > justePrix){
  compteur++;
  alert ("trop grand, essaie encore");
} else if ( reponseAsString == justePrix){
  compteur++;
  alert ( "c'est gagné")
}
} while ( reponseAsString !== justePrix) 