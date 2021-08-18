// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () => {
        console.log(this.nome + ', Sou um método')

        // Privados
        const id = 123456;
        let metodoInterno = () => {

        }
    }
}

let p1 = new Pessoa('David', 'Barbosa')
let p2 = new Pessoa('Ellen', 'Cristina')

p2.metodo();


