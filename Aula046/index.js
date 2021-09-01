// const _velocidade = Symbol('velocidade');

// class Carro {
//     constructor(nome){
//     this.nome = nome;
//     this[_velocidade] = 0;
//     }

//     set velocidade(valor){
//         console.log('SETTER')
//         if(typeof valor !== 'number') return;
//         if(valor >=100 || valor <=0) return;
//         this[_velocidade] = valor;
//     }

//     get velocidade(){
//         console.log('GETTER')
//         return this[_velocidade]
//     }

//     acelerar(){
//         if (this[_velocidade] >= 150) return;
//         this[_velocidade]++
//     }

//     freiar(){
//         if(this[_velocidade] <= 0) return;
//         this[_velocidade]--
//     }
// }

// const carro1 = new Carro('Ferrari');
// const carro2 = new Carro('Fusca');

// // for(i = 0; i <= 150; i++){
// //     carro2.acelerar()
   
// // }



// carro2.velocidade = 10 // SETTER
// console.log('/////////////')
// console.log(carro2.velocidade)// GETTER

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    set pessoaNome(novoNome){
        this.nome = novoNome;
    }
    
    get pessoaNome(){
        return this.nome;
    }
}

const p1 = new Pessoa('David', 'Barbosa');

p1.pessoaNome = 'Kiko'
console.log(p1)