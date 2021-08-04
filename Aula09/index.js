
/*let pessoa = {   Object
    nome: 'David',
    sobrenome: 'Barbosa',
    idade: 34,
}

console.log(pessoa.nome);  David
console.log(pessoa.sobrenome);  Barbosa
console.log(pessoa.idade);  34
*/

/*
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}
Função que retorna um object

let pessoa1 = criaPessoa('Manoel', 'Joaquim', 84);
let pessoa2 = criaPessoa('Pedro', 'JPereira', 70);
let pessoa3 = criaPessoa('Sebastião', 'Santos', 54);
let pessoa4 = criaPessoa('Manoela', 'da Silva', 24);
let pessoa5 = criaPessoa('Patricia', 'Abravanel', 44);
console.log(pessoa1); { nome: 'Manoel', sobrenome: 'Joaquim', idade: 84 }
console.log(pessoa2); { nome: 'Pedro', sobrenome: 'JPereira', idade: 70 }
console.log(pessoa3); { nome: 'Sebastião', sobrenome: 'Santos', idade: 54 }
console.log(pessoa4); { nome: 'Manoela', sobrenome: 'da Silva', idade: 24 }
console.log(pessoa5); { nome: 'Patricia', sobrenome: 'Abravanel', idade: 44 }
*/

let pessoa = {
    nome: 'David',
    sobrenome: 'Barbosa',
    idade: 34,

    fala() { // É possível criar função dentro do object
        console.log(`A minha idade atual é ${this.idade}`)
        // O this. referência o pessoa(nome do object), poderia ser usado pessoa.idade
    }
}

pessoa.fala() // A minha idade atual é 34