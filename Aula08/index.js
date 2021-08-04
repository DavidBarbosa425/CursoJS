
/*function salutation() {

    console.log('Bom dia!');
} função sem parametro

salutation(); Bom dia!
Como chamar a função
*/ 

/*
function salutation(nome) { recebendo o parametro (nome) entre parenteses

    console.log(`Bom dia! ${nome}`); executa e retorna o valor e parametro recebido
}

salutation('João'); envia o parametro que esta entre os parenteses e exibe a função: Bom dia! João
*/

/*
function salutation(nome) {

    return console.log(`Bom dia ${nome}`); opção com o return
} 

salutation('Patricia'); Bom dia Patricia


function soma(x, y) {
    let result = x + y
    return result
}

console.log(soma(2,5)); 7
*/


function soma(x = 5, y = 5) {   
// Dessa forma caso não seja enviado nenhum valor como parametro o 5 sera usado como padrão
    let result = x + y
    return result
}

console.log(soma()); // 10
console.log(soma(2)); // 7 foi feito a soma do 2 enviado como parametro e do 7 que esta na função como padrão
console.log(soma(2,9)); 
// 11 como foi enviado os dois parametros, os 5 usados como padrão na função seram descartados

/*
let raiz = function(n) {  função anonima
    return n ** 0.5
}

console.log(raiz(9)); 3
console.log(raiz(16)); 4
console.log(raiz(25)); 5
*/

let raiz = (n) => {   // Arrow Function é a forma mais moderna e funciona do mesmo jeito que as outras
    return n ** 0.5
}

console.log(raiz(9)); // 3
console.log(raiz(16)); // 4
console.log(raiz(25)); // 5