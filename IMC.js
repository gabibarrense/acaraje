//Você deverá criar 6 variáveis:
//Nome
//Idade
//Peso
//Altura
//Plano (só nos interessa saber se TEM ou NÃO TEM)
//Índice de Massa Corporal (IMC)

var nome = "Jose";
var sobrenome = "da Silva"
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

var idade = 27;
console.log(idade);

var peso = 83.5;
console.log(peso);

var altura = 1.70;
console.log(altura);

var plano = true;
console.log(plano);

var IMC = (peso / (altura * altura)).toFixed(1);
console.log(IMC);

// “Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx”.
console.log(nomeCompleto,"tem",idade,"anos e seu índice de massa corporal é de",IMC);

