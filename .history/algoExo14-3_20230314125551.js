/*
function mylength(a) {
   let total = 0;
   for( i in a) {
    total++
   }
    console.log(total);
}
mylength("kkkkkkkkkkkkkkkkkkkkkkkkkkkk");*/




/* exo 2

function myTrim(str) {
    //verification qu'il s'agit bien d'un string 
    if ( typeOf(str) !=='string');
    console.log(str);

    //supprim les espaces
    
    while(str.charAt(0)=== ' ') {
        str = str.slice(1);
    }
}*/

/*exo 1  bis
let findNum = Math.round(Math.ramdom()*3);
function findNum() {
    do { UserNum = window.prompt("devenez le chiffre");
    if (findNum > UserNum || findNum < UserNum) {
        console.log("essaie encore");
    }
    else { console.log("vous avez gagné");
    }
} while ( UserNum !== findNum ); 
}
 findNum()   */

 //exo 2 bis
 function justeNombre() { 
 let NumbRan = Math.round(Math.random( )*(10 - 20) + 10);
 do { let userNum = window.prompt("devinez un nombre entre 10 et 20");
 if ( userNum < NumbRan) {
    console.log("trop petit, essaie encore" );
 }
 if else( userNum > NumbRan) {
    console.log("trop grand, essaie encore")

 }
 
} 
}
