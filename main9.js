const justeNombre = Math.round(Math.random() * 10);



let reponseUser;
function discoverNumber() {
do {
  reponseUser= parseInt(prompt("découvre le nombre entre 1 et 10")); 
if (reponseUser < justeNombre ){
  console.log("trop petit, essaie encore");

} else if ( reponseUser > justeNombre){
  console.log("Trop grand, essaie encore");
} else if ( reponseUser == justeNombre) {

  console.log("Vous avez gagné");
}
} while ( reponseUser !== justeNombre ); 

}
discoverNumber();