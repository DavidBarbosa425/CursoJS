// let numeros = [2,35,40,20,80,9,7,5,95,4,102,3,0,54,50]

// let total = numeros.reduce((acumulador,valor,indice,array) => {
//     return acumulador += valor;
// })

// console.log(total)
// 506


// let numeros = [2,35,40,20,80,9,7,5,95,4,102,3,0,54,50]

// let Npares = numeros.reduce((acumulador,valor,indice,array) => {
//     if (valor %2 === 0) acumulador.push(valor)
//     return acumulador ;
    
// },[])

// console.log(Npares)
// [
//     2, 40, 20, 80, 4,
//   102,  0, 54, 50
// ]


    let pessoas = [
        {nome: 'David', idade: 34,},
        {nome: 'João', idade: 90},
        {nome: 'Patricio', idade: 105},
        {nome: 'Marcos', idade: 138},
    ]

    let pessoaMaisVelha = pessoas.reduce((acumulador, valor, indice, array)=> {
       if(acumulador.idade > valor.idade) return acumulador;
       return valor;
    })

    console.log(pessoaMaisVelha)
   // { nome: 'Marcos', idade: 138 }