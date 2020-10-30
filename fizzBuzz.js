/*
Função FizzBuzz
Se divisível por 3, retorna Fizz
Se divisível por 5, retorna Buzz
Se divisível por 3 e 5, retorna FizzBuzz
Não divisível por 3 ou 5, retorna entrada
Não é número, retorna "Não é um número"
*/

const resultado = fizzBuzz(7);
console.log(resultado);

function fizzBuzz(entrada) {
    if(typeof entrada !== 'number') {
        return 'Não é um número';
    }
    else if(entrada % 3 == 0 && entrada % 5 ==0) {
        return 'FizzBuzz';
    }
    else if(entrada % 5 == 0){
        return 'Buzz';
    }
    else if(entrada % 3 == 0) {
        return 'Fizz';
    }
    else {
        return entrada;
    }
}
