//Reprendre l'algorithme précédent et afficher le nombre d'élève au
//dessus de la moyenne

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
tabStud()