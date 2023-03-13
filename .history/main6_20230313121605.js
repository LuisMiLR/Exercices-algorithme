/*** Exercice6: Écrire un algorithme qui demande à l'utilisateur son age. 
Il indique ensuite à l'utilisateur quel film il peut aller voir.
"Action Man" si moins de 13 ans
"Matrix" si il a entre 13 et 18 ans
"Evil Dead" si plus de 18 ans
Pour résoudre ce problème vous pouvez utilisez la structure suivante :
SI condition ALORS...SINON SI condition ALORS...SINON...FINSI 
Cette structure permet d'éviter trop d'imbrication **/

let movies = [ "Action Man","Matrix","Evil Dead" ];
let age =  parseInt(window.window.prompt("Quel est votre age ?"));
if(age < 13) {
    alert( "Vous pouvez regarder Action Man");
} 
else if( age > 18) {
    alert("Vous pouvez regarder Evil Dead");
}
default