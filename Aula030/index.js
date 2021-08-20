//                 0        1        2        3        4
// let nomes = ['Maria', 'João','Eduardo','Gabriel','Julia'];
// let removidos = nomes.splice(3,2); 
// o primeiro número do splice(n,n) indica a partir de qual index você quer fazer a exclusão
// e o segundo quantos index vão ser excluidos
 
// console.log(nomes)  [ 'Maria', 'João', 'Eduardo' ]
// console.log(removidos)  [ 'Gabriel', 'Julia' ]


//              -5      -4      -3        -2       -1
// let nomes = ['Maria', 'João','Eduardo','Gabriel','Julia'];

// let removidos = nomes.splice(-2,2);

// console.log(nomes) // [ 'Maria', 'João', 'Eduardo' ]
// console.log(removidos) // [ 'Gabriel', 'Julia' ]

// let nomes = ['Maria', 'João','Eduardo','Gabriel','Julia'];
// let removidos = nomes.splice(-4, Number.MAX_VALUE)
// Number.MAX_VALUE exclui todos os index a partir do index indicado que no caso é o -4
// console.log(nomes)
// console.log(removidos)

//              0        1        2        3        4
// let nomes = ['Maria', 'João','Eduardo','Gabriel','Julia'];
// let removidos = nomes.splice(2, 1, 'David')
// No index 2 vai ser removido 1 elemento e colocado a string 'David" no lugar
// console.log(nomes) [ 'Maria', 'João', 'David', 'Gabriel', 'Julia' ]
// console.log(removidos) [ 'Eduardo' ]
