let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let valueN of numeros) {

        console.log(valueN)

        if (valueN === 2){
            
            console.log('Pulei o 2')
        continue
        }

       if (valueN === 7) {
           console.log('(7) encontrado, saindo...')
           break
       }
     
    }
