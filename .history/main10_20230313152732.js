//Exercice 10 :
//Écrire un algorithme qui calcule la somme des valeurs d'un tableau.
//chiffres = [10, 15, 20, 15, 14, 8]


const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);