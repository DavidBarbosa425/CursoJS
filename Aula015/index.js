const pessoa = {
    nome: 'David',
    sobrenome: 'Barbosa',
    nascimento: 1987,
    endereco: {
        rua: 'Londrina',
        numero: 40
    }
}

const { nascimento = 'não informado', nome, endereco: {rua, numero}, endereco} = pessoa; 
// caso o nascimento não exista pode ser atribuido um valor padrão com o =''

console.log(nascimento,nome, rua, numero )
// 1987 David Londrina 40
console.log(endereco)
// { rua: 'Londrina', numero: 40 }

// Atribuição via desestruturação (Objetos)