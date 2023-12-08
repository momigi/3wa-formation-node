const calcSum = require('./module/sum');

const result = calcSum(10);

console.log(result);  // Doit afficher 23


// Description :
// Écrivez une fonction sum  qui calcule la somme de tous les multiples de 3 ou 5 inférieurs à un nombre donné en argument. Par exemple, si nous listons tous les nombres naturels inférieurs à 10 qui sont des multiples de 3 ou 5, nous obtenons 3, 5, 6 et 9. La somme de ces multiples est 23.

// Instructions :
// 1.
// La fonction sum doit prendre un seul argument numérique.

// 2.
// Elle doit calculer et retourner la somme de tous les nombres naturels inférieurs à cet argument qui sont des multiples de 3 ou 5.

// 3.
// Si un nombre est un multiple à la fois de 3 et de 5 (comme 15), il ne doit être compté qu'une seule fois dans votre somme.

// Exemple d'Utilisation :
// const sum = require('./modules/sum');

// let result = sum(10);
// console.log(result);  // Doit afficher 23

// Pensez à utilise modulo 😉


