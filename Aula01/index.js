/**
 * Operadores Aritméticos por ordem de resolução
 * 
 * () Qualque operador que esteja entre parenses.
 * (**) potência
 * (* e /) multiplicação ou divisão o que aparecer primeiro da esquerda para direita.
 * (+ e -) soma ou subtração o que aparecer primeiro da esquerda para direita.
 * 
 */

let dig = '2'; // '2' é um tipo String e precisa ser convertido para Number para ser calculado.
let dig1 = 5;



console.log((Number(dig) + dig1) - Number(dig) * dig1);

//Number(dig) faz a converção necessária.
//String(dig1) faz a conversão para String.