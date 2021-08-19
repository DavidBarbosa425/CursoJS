// let nomes = new Array('David', 'João', 'Paulo') funciona da mesma forma, mas é menos usado.
// let nomes = ['David', 'João', 'Paulo']

// console.log(nomes)

// let nomes = ['David', 'João', 'Paulo']
// let newNames = nomes;
// newNames aponta para o mesmo lugar na memória que nomes, 
// sendo assim o que for altera em newNames sera alterado em nomes

// let nomes = ['David', 'João', 'Paulo']
// let newNames = [...nomes] 
// (...spred) newNames recebe uma cópia de nomes e o que for feito em newNames não vai alterar nomes.

// let nomes = ['David', 'João', 'Paulo']
// let removido = nomes.pop(); 
// pop() que remove o ultimo indice do array pode ser jogado em uma variável
// console.log(nomes, removido)

// let nomes = ['David', 'João', 'Paulo']
// let removido = nomes.shift(); 
// shift() que remove o primeiro indice do array pode ser jogado em uma variável
// console.log(nomes, removido)

// let nomes = ['David', 'João', 'Paulo']
// nomes.push('Pedrita') push() adiciona um elemento no final do array
// console.log(nomes)
// nomes.unshift('James') unshift adiciona um elemento no começo do array
// console.log(nomes)

//              0        1       2         3         4
// let nomes = ['David', 'João', 'Paulo', 'Matheus', 'Jorge']
// let novo = nomes.slice(1,3);
// console.log(novo) // [ 'João', 'Paulo' ]
// novo = nomes.slice(1,-1);
// console.log(novo) // [ 'João', 'Paulo', 'Matheus' ]

//let nome = 'David Barbosa Santos';
//let nomes = nome.split(' ') // split('espaço') com espaço entre as aspas modifica a string em array
//console.log(nomes) // [ 'David', 'Barbosa', 'Santos' ]
//let nomes = nome.split('') // sem o espaço entre as aspas é modificado para um array com as letras
//console.log(nomes)
// [
//   'D', 'a', 'v', 'i', 'd',
//   ' ', 'B', 'a', 'r', 'b',
//   'o', 's', 'a', ' ', 'S',
//   'a', 'n', 't', 'o', 's'
// ]

let nomes = ['David', 'Barbosa', 'Santos']
let nome = nomes.join(' ') 
// join(' ') modifica o array para string também usando o espaço como divisor
console.log(nome) // David Barbosa Santos