const justeNombre = Math.round(Math.random() * 10);



let reponseUser;
function discoverNumber() {
do {
  reponseUser= parseInt(prompt("découvre le nombre entre 1 et 10")); 
if (reponseUser < justeNombre ){
  alert ("trop petit, essaie encore");

} else if ( reponseUser > justeNombre){
  alert ("Trop grand essaie encore");
} else if ( reponseUser == justeNombre) {

  alert ("Vous avez gagné");
}
} while ( reponseUser !== justeNombre ); 
}
discoverNumber();