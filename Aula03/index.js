// Exercício, modificar o valor das variaveis como descrito abaixo.

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/*const varAtemp = varA; Opção criando mais uma variavel "varAtemp".
 *varA = varB;           Dessa forma a varial deixa de ter o valor 
 *varB = varC;           inicial e recebe uma copia do valor atribuido.
 *varC = varAtemp;
 *console.log(varA, varB, varC);
 */


[varA, varB, varC] = [varB, varC, varA]; 
/* Opção sem criar uma nova variavel, 
dessa forma as variaveis apontam para o valor na memoria sem alterar o valor inicial da variavel.
*/

console.log(varA, varB, varC);