// // Examen Algo
// //exercice 1
// A = 12
// B = 2
// C = A* B (24) 

// // Exercice 2 

// C = "12312"; 




/*Exercice 3 
 
/let result;
function calculTva(montantHt) {
    let tva = 1.196;
    montantHt = parsefloat(window.prompt("quel est le montant hors taxe de l'objet"));
    const result = montantHt * tva; 
    console.log("le montant TTC est  "+ result); 

};
calculTva();*/

/* exercice 4
Ecrire un algorithme qui demande à l'utilisateur son prénom et son nom et 
qui affiche ensuite la phrase"Bonjour prénom votre nom est nom"

function identity() {
    let name1 = window.prompt("indiquez votre prénom et votre nom");
    console.log("Bonjour votre nom est " + name1);
    }
    identity() */

    /*exercice 5
    Écrire un algorithme qui demande 2 nombres à un utilisateur. 
Il indique ensuite à l'utilisateur si
le produit de ces 2 nombre (A * B)est positif ou négatif

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
    userNumber();*/


    /*** Exercice6: Écrire un algorithme qui demande à l'utilisateur son age. 
Il indique ensuite à l'utilisateur quel film il peut aller voir.

"Action Man" si moins de 13 ans
"Matrix" si il a entre 13 et 18 ans
"Evil Dead" si plus de 18 ans

Pour résoudre ce problème vous pouvez utilisez la structure suivante :
SI condition ALORS...SINON SI condition ALORS...SINON...FINSI 
Cette structure permet d'éviter trop d'imbrication 

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
    moviesPlay() */



    /*  Exercice7:
Écrire un algorithme qui demande à l'utilisateur un nombre compris entre 0 et 10 jusqu'à ce que la réponse soit bonne.

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
discoverNumber(); */




/*Exercice 8 :
Écrire un algorithme qui demande un chiffre et qui affiche ensuite
tous les chiffres jusqu'à 0

On demande le nombre

Tant Que le nombre n'ai pas égal a 0
On le décrémente et on l'affiche

function analyse() {
    let nombre = parseInt(window.prompt("quel est le chiffre"));
    while( nombre > 0 ){
     nombre--;
     console.log(nombre);
    }
}
analyse(); */

/*exercice 9

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
discoverNumber(); */

/*Exercice 10 :

Écrire un algorithme qui calcule la somme des valeurs d'un tableau.
chiffres = [10, 15, 20, 15, 14, 8]

function sommeArray() { 
    sommeArray = [10, 15, 20, 15, 14, 8];
    let somme = 0;
    
    for (let i = 0; i < sommeArray.length; i++) {
        somme += sommeArray[i];
    }
    console.log(somme);
    }
    sommeArray()*/

    /*exercice 11
    function tabStud() {
       
        let eleves = parseInt(window.prompt("nombre eleve"));
        let tabNotes = [];
        for( let i = 0; i < eleves; i++) {   
        let notes = parseInt(window.prompt("note du nouvel eleve"));
        tabNotes.push(notes);     
    }
    console.log(tabNotes);
    }
    tabStud()*/
    
   /* exercice 12 Reprendre l'algorithme précédent et afficher le nombre d'élève au
   dessus de la moyenne

function tabStud() {
       
    let eleves = parseInt(window.prompt("nombre eleve"));
    let tabNotes = [];
    let moyenne = 0;
    for( let i = 0; i < eleves; i++) {   
    let notes = parseInt(window.prompt("note du nouvel eleve"));
    tabNotes.push(notes);
    if(tabNotes[i] >=10) {
        moyenne++;
    }     
}
console.log(moyenne);
}
tabStud()  */


   /*Exercice 13 :
//Écrire un algorithme qui trouve la plus grande valeur dans ce tableau
//multidimensionnel.
//nbres = [[0, 18], [1, 45], [45, 48], [-3, 2]]

function abuelita() { 
    let nbres = [[0, 18], [1, 45], [45, 48], [-3, 2]];
    let plat = array.flat()
    let max = Math.max(...plat)
    
    console.log(max);
    }
    abuelita()*/

    /*14 

    /*Écrivez un algorithme qui demande un mot à l'utilisateur et lui
affiche ensuite le nombre de lettres qui compose le mot. La fonction à
utiliser s'appelle COMPTER

function question() {
    let quest = prompt("Ecrit ici");
    console.log(quest.length);
}
question()
*/

/* Exercice 15 :
Écrivez un algorithme qui génère un chiffre aléatoire entre 0 et 5.
Demandez ensuite à l'utilisateur de deviner ce chiffre avec des
indices ("plus grand", "plus petit"). La fonction a utiliser est
ALÉATOIRE(nbre)


const justeNombre = Math.round(Math.random() * 5);



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
*/



/* ex 16 */

function iden(a,b) {
    a = Math.round(Math.random()*1000);
    console.log("a :", a);
    b= Math.round(Math.random()*1000);
    console.log("")
}