let alunos = ['João', 'Marcelo', 'Pedro']; 
//Array

console.log(alunos); // [ 'João', 'Marcelo', 'Pedro' ]
console.log(alunos[2]); // Pedro
console.log(alunos[0]); // João
// entre [] é possível selecionar o índice do array.

console.log(alunos.length); // alunos.length mostra o tamanho do array, no caso 3

alunos[0] = 'Roberta';
// Edição de um índice específico do array
console.log(alunos[0]); // Roberta

alunos.push('David'); // Adiciona no final do array
console.log(alunos); // [ 'Roberta', 'Marcelo', 'Pedro', 'David' ]

alunos.unshift('Ellen', 'Samanta') // Adiciona no inicio do array
console.log(alunos) // [ 'Ellen', 'Samanta', 'Roberta', 'Marcelo', 'Pedro', 'David' ]

alunos.pop(); // Remove o ultimo valor do array
console.log(alunos); // [ 'Ellen', 'Samanta', 'Roberta', 'Marcelo', 'Pedro' ]

alunos.shift(); // Remove o primeiro valor do array
console.log(alunos); // [ 'Samanta', 'Roberta', 'Marcelo', 'Pedro' ]

delete alunos[2]; // Deleta o valor na posição indicada no array, mas o índice continua existindo
console.log(alunos); // [ 'Samanta', 'Roberta', <1 empty item>, 'Pedro' ]

console.log(alunos.slice(0, 2)); // alunos.slice() mostra os valores do array selecionado entre os parenteses
// [ 'Samanta', 'Roberta' ]
console.log(alunos.slice(0, -1)); //também é possível fazer de forma negativa, tirando os ultimos valores do array [ 'Samanta', 'Roberta', <1 empty item> ]

console.log(typeof alunos); // object, array é um object no js
console.log(alunos instanceof Array); // true, instanceof Array é uma maneira de saber se realmente é um array