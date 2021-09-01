class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} esta falando`)
    }

    comer() {
        console.log(`${this.nome} esta comento`)
    }

    beber() {
        console.log(`${this.nome} esta bebendo`)
    }
}

const p1 = new Pessoa('David', 'Barbosa');
console.log(p1)
p1.falar()