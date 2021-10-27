//N1
 //Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.

function adicionar(x, y){
    
    return( x + y );
   
}
    

// Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.

function subtracao(x, y){
    
    return( x - y );
  
}

   // Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.

function multiplicacao(x, y){
    
    return( x * y );
  
}  

   // Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
  
function divisao(x, y){
    
    return( x / y );
  
}    

console.log ("-------------- Teste de Operações / Calculadora --------------");

console.log (adicionar(10 , 5));

console.log (subtracao(10 , 5));

console.log (multiplicacao(10 , 5));

console.log (divisao(10 , 0));


// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
// Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().

function quadradoDoNumero(z){
    return (multiplicacao(z, z))
}

console.log (quadradoDoNumero (4))

//Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.

function mediaDeTresNumeros(a, b, c){
   return divisao ((soma(a, b) + c), 3)

}

console.log (mediaDeTresNumeros (12, 24, 36))


//Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.

function calculaPorcentagem(p, o){
    return divisao (multiplicacao (p, o), 100)
}

console.log (calculaPorcentagem(1800, 33))


//Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.

function geradorDePorcentagem(x, y){
    return divisao(multiplicacao (x, 100), y)
}

console.log (geradorDePorcentagem(13, 100))