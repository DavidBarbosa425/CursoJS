function retorneUmNum (numero) {
    let res;
    
    if (numero % 3 === 0 && numero % 5 === 0) {
        res = 'FizzBuzz' 
    } 
    else if (numero % 3 === 0) {
       res =  'Fizz'
    }
    else if (numero % 5 === 0) {
        res = 'Buzz'
    }
    else {
        res = numero;
    }

    
   return res
}

for (let i = 0; i < 101; i++) {
   let resp = retorneUmNum(i);
   console.log(resp)
}

// let numberMath = Math.floor(Math.random() * 101);
// let resp = retorneUmNum(numberMath);
