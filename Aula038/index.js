// let pessoas = {
//     nome: 'David',
//     sobrenome: 'Barbosa'
// }

// forma de chamar o valor das chaver de objeto
// console.log(pessoas.nome) David
// console.log(pessoas.sobrenome) Barbosa

// outra forma de chamar o valor das chaves do objeto
// console.log(pessoas['nome']) David
// console.log(pessoas['sobrenome']) Barbosa

// outra forma de chamar o valor das chaves do objeto
// let chave = 'nome';
// let chave2 = 'sobrenome'

// console.log(pessoas[chave]) David
// console.log(pessoas[chave2]) Barbosa

// let pessoa1 = new Object()
// pessoa1.nome = 'David'
// pessoa1.sobrenome = 'Barbosa'

// console.log(pessoa1.nome) //David
// console.log(pessoa1.sobrenome) //Barbosa  
// delete pessoa1.sobrenome;
// console.log(pessoa1) // { nome: 'David' }


// Funções dentro do objeto

// let people3 = {
//     name: 'David',
//     surname: 'Barbosa',
//     yearBirth: 1987
// }

// people3.getAge = function(){
//     let date = new Date();
//     return date.getFullYear() - this.yearBirth;
// }


// console.log(people3.name) David
// console.log(people3.surname) Barbosa
// console.log(people3.getAge()) 34

// for ( let key in people3){
//     console.log(people3[key])
// }
// David
// Barbosa
// 1987
// [Function (anonymous)]


// Factory function

// function createNameSurname(name, surname){
//    return {
//         name,
//         surname,
//         nameComplete(){
//         return `${this.name} ${this.surname}`
//         }
//     };
// }

// let p1 = createNameSurname('David','Barbosa')
// console.log(p1.nameComplete())
// David Barbosa


// Função construtora

// function People4(name, surname, yearBirth){
//     this.name = name,
//     this.surname = surname,
//     this.yearBirth = yearBirth
    
// };

// let p1 = new People4('David', 'Barbosa', 1987)
// //console.log(p1)
// // People4 { name: 'David', surname: 'Barbosa', yearBirth: 1987 }
// console.log(p1.name, p1.surname, p1.yearBirth)
// // David Barbosa 1987

// let p2 = new People4('João', 'Francisco', 2000)
// console.log(p2.name, p2.surname, p2.yearBirth)
// // João Francisco 2000

//  p1.ageCurrent = function(){
//     let date = new Date();
//     let age = date.getFullYear() - this.yearBirth
//     return age
// }

// console.log(p1.name, p1.surname, p1.ageCurrent())
// // David Barbosa 34

// p2.ageCurrent = function(){
//     let date = new Date();
//     let age = date.getFullYear() - this.yearBirth
//     return age
// }

// console.log(p2.name, p2.surname, p2.ageCurrent())
// // João Francisco 21



function People4(name, surname, yearBirth){
    this.name = name,
    this.surname = surname,
    this.yearBirth = yearBirth,
    this.ageCurrent = function(){
        let date = new Date();
        let age = date.getFullYear() - this.yearBirth
        return `, ${age} anos`
    }
    
}

let p3 = new People4('Axl', 'rose', 1962);

console.log(p3.name, p3.surname, p3.ageCurrent())
//Axl rose , 59 anos