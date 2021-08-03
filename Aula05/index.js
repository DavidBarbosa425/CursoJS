let num1 = 1; // number
let num2 = 2.5; // number
console.log(num1.toString() + num2); // 12.5
/* convertendo o number para string (toString())
 * é realizado uma contenação no lugar da operação aritmética.
 */
console.log(typeof num1); // o typeof mostra que a conversão é temporaria e o num1 continua sendo number.
// (typeof mostra o tipo primitivo da variável.)
num1 = num1.toString() // Dessa forma a variável se converte para string constantemente.
console.log(typeof num1); // String

let num3 = 10
console.log(num3.toString(2)); // 1010
// Dessa forma a conversão é feita para número binário.

let num4 = 10.444333555777;
console.log(num4.toFixed(2)) // 10.44
// Com o toFixed() é possível dizer ao sistema quantas casas decimais vão ser imprimidas na tela.

console.log(Number.isInteger(num4)); // false
// Number.isInteger() retorna true ou false se a variável for do tipo inteira ou float.

let multiplicacao  = num4 * 'Olá'; 
console.log(Number.isNaN(multiplicacao)); //true é um NaN (Not a Number)

let num5 = '2'; // existe 3 formas de converter essa string em number.
console.log(parseInt(num5)); // parseInt() converte para número INTEIRO.
console.log(parseFloat(num5)); // parseFloat() converte para número DECIMAL(float).
console.log(Number(num5)); 
/* Number() converte para número e o javascript se encarrega de descobrir 
 * se é inteiro ou float quando houver uma operação aritmética. É a maneira mais simples.
 */


