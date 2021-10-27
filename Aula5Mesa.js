// 1

function conversaoPolegadas(polegadas) {
    return polegadas * 2.54
  }
  console.log(conversaoPolegadas(2))
  
  // 2
  
  function URL(texto) {
    return 'http://www.' + texto + '.com.br'
  }
  console.log(URL('google'))
  
  // 3
  
  function exclamacao(texto) {
    return texto + '!'
  }
  
  console.log(exclamacao('Olá Mundo '))
  
  // 4
  
  function cachorroIdade(idade) {
    return 'A idade do seu cachorro, comparada a de um ser humano é: ' + idade * 7
  }
  console.log(cachorroIdade(2))
  
  // 5 
  
  function horaTrabalhada(salarioMensal){
    return 'A sua hora trabalhada é: ' + parseFloat(salarioMensal / 160).toFixed(2);
  }
  console.log(horaTrabalhada(2000));
  
  // 6 
  
  function IMC(altura, peso){
    altura = altura * 100;
    let imc = (peso / (altura * altura).toFixed(2));
  
    return 'O seu IMC é: ' + imc;
  }
  console.log(IMC(1.70, 85.20));