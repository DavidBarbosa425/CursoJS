/*
let a = 'A'; 
let b = 'B'; 
let c = 'C'; 

[a, b, c] = [1, 2, 3];
console.log(a, b, c) // 1 2 3
Atribuição por desestruturação

const numeros = [1, 2, 3];
[a, b, c] = numeros;
console.log(a, b, c) // 1 2 3
Atribuição via desestruturação
*/

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [primeiroNumero, segundoNumero, ...resto] = numeros;
// ...rest (...também pode ser chamado de spread quando é usado para espalhar)

console.log(primeiroNumero, segundoNumero) // 1000 2000
console.log(resto) // [ 3000, 4000,5000, 6000,7000, 8000,9000 ]

const [primeiro, , terceiro, , , sexto] = numeros;
console.log(primeiro, terceiro, sexto) // 1000 3000 6000
    
    
    
    
 