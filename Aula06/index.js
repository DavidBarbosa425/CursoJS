let num1 = 9.58796;
console.log(Math.floor(num1)); 
// (9) - Math.floor() converte para inteiro e faz o arredondamento do número para baixo.

console.log(Math.ceil(num1));
// (10) -  Math.ceil() converte para inteiro e faz o arredondamento do número para cima.

console.log(Math.round(num1)); 
// (10) -  Math.round() converte para inteiro e faz o arredondamento para o número mais próximo.

console.log(Math.max(10,50,-30,45,20,2,4,90,6,1500,0,8,74,15));
// Math.max() retorno o maior número que no caso é 1500.

console.log(Math.min(10,50,-30,45,20,2,4,90,6,1500,0,8,74,15));
// Math.min() retorno o menor número que no caso é -30.

let aleatorio = Math.random();
console.log(aleatorio);
// Math.random() imprimi um número aleatório (0.2722824622258555) na tela de 0 a 1.

aleatorio = Math.random() * (10 - 5) + 5;
console.log(aleatorio);
/* Math.random() * (10 - 5) + 5; dessa forma é imprimido na tela
 * um número aleatório (7.818536211550381) entre 10 e 5.
 */

aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);
/* Com o Math.round() sobre o Math.random() é retirado os números decimais
 * ao imprimir na tela.
 */

console.log(num1 ** 0.5);
// Raiz quadrada