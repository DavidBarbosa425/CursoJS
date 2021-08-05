/**
 * Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
 */

/*
let a = 'A';
let b = a; cópia

console.log(a, b); A A

a = 'outra coisa';

console.log(a, b); outra coisa A
redefinição do valor da variável a não altera o valor da variável b 
pelo fato de b ter recebido uma cópia de a
*/

/**
 * Referência (mutável) - array, object, function
 */

/*
let a = [1, 2, 3];
let b = a; 
let c = b; 
o b esta apontando para o mesmo lugar na memória que a           
e também o c, se qualquer uma for alterada todas as outras também seram
pelo fato de não ter nenhuma cópia e sim uma busca do valor que esta 
em um lugar especifico da memória e que as variáveis vao apontar

console.log(a, b); // [ 1, 2, 3 ] [ 1, 2, 3 ]

a.push(4)
console.log(a, b) // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

a.pop(4);
console.log(a, b) // [ 1, 2, 3 ] [ 1, 2, 3 ]

a.push('David');
console.log(c) // [ 1, 2, 3, 'David' ]

*/