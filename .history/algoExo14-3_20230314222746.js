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

 /*exo 2 bis
 function justeNombre() { 
 let NumbRan = Math.round(Math.random( )*(10 - 20) + 10);
 do { let userNum = window.prompt("devinez un nombre entre 10 et 20");
 if ( userNum < NumbRan) {
    console.log("trop petit, essaie encore" );
 }
 else if(userNum > NumbRan) {
    console.log("trop grand, essaie encore");
 }
 else if( userNum === NumbRan) {
    console.log(" c'est gagné fréro !")
 }
 
} while ( userNum !== NumbRan);
}
justeNombre() */

/* exo 4 
 function askNumber(xNumber) {
     xNumber = 9;
for( i = 1 + xNumber; i < xNumber + 11; i++ ) {
         console.log(i);
     }

} 
askNumber();*/

/* exo 3 

function askNumber(xNumber) {
    i = 0
    while( i != 9){
        i++;
        xNumber++
        console.log(xNumber)
    }
} 
askNumber(5);*/

/* exo 5 

function multiNumber() {
let numberUser = parseInt(window.prompt("quel table de multiplication, choissisez un chiffre "));
for( let i = 1; i <= 10; i++ ) {
    let result = numberUser * i;
 console.log( numberUser + " * " + i + " = " + result);
}
}
multiNumber() */

/* exo 6 

let result = 0;
function EntierAdd() {
    numbUser = parseInt(window.prompt('saisissez un chiffre'));
    for( let i = 0; i <= numbUser; i++) {
        result = result   + i;
    }
    console.log( result);
}
EntierAdd()*/

/* exo 7 

function fact(nbr){
    var i, f = 1;
    nbr = parseInt(window.prompt('saisissez un chiffre'))
    for(i = 1; i <= nbr; i++)  
    {
      f = f * i;   // ou f *= i;
    }  
    return f;
  }
  
  console.log(fact())*/

  /* exo 8  
  
  function numbers20(userNumber) {
    let tabStock = []; 
    for( let i =0; i <=20; i++) {
        userNumber = parseInt(window.prompt('entrez un chiffre')); 
        tabStock.push(userNumber); 
    }
    let max =  Math.max(...tabStock) 
    let index = tabStock.indexOf(max)+1; 
    console.log( "la position du plus grand nombre est"+ index);
    console.log( "le plus grand nombre est "+ max);
  }numbers20()*/ 


  /* exo 9 

  function numbers20(userNumber) {
    let tabStock = []; 
    for( let i =0; i <=20; i++) {
        userNumber = parseInt(window.prompt('entrez un chiffre')); 
        tabStock.push(userNumber); 
    }
    let max =  Math.max(...tabStock) 
    let index = tabStock.indexOf(max)+1; 
    console.log( "la position du plus grand nombre est"+ index);
    console.log( "le plus grand nombre est "+ max);
  }numbers20()*/
  
  /* exo 10*/

  function marie(n) {
    let age = n; 
    let resul

  } 

  
