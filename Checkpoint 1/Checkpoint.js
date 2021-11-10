// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 

// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


function aquecer(opcao, tempoEscolhido){

    switch(opcao) {
        case "Pipoca":
            tempo = 10;
            break;
        case "Macarrão":
            tempo = 8;
            break;
        case "Carne":
            tempo = 15;
            break;
        case "Feijão":
            tempo = 12;
            break;
        case "Brigadeiro":
            tempo = 8;
            break;
        
    }

    
    if(opcao=="Pipoca" && tempoEscolhido > 2*tempo && tempoEscolhido < 3*tempo || 
    opcao=="Macarrão" && tempoEscolhido > 2*tempo && tempoEscolhido < 3*tempo ||
    opcao=="Carne" && tempoEscolhido > 2*tempo && tempoEscolhido < 3*tempo ||
    opcao=="Feijão" && tempoEscolhido > 2*tempo && tempoEscolhido < 3*tempo ||
    opcao=="Brigadeiro" && tempoEscolhido > 2*tempo && tempoEscolhido < 3*tempo) {

    return "A comida queimou!"}

    else if(opcao=="Pipoca" && tempoEscolhido < tempo || 
    opcao=="Macarrão" && tempoEscolhido < tempo ||
    opcao=="Carne" && tempoEscolhido < tempo ||
    opcao=="Feijão" && tempoEscolhido < tempo ||
    opcao=="Brigadeiro" && tempoEscolhido < tempo) {

    return "Tempo insuficiente"}

    else if(opcao!=="Pipoca" &&
    opcao!=="Macarrão" && 
    opcao!=="Carne" && 
    opcao!=="Feijão" && 
    opcao!=="Brigadeiro") {

    return "Prato inexistente"}

    else if(opcao=="Pipoca" && tempoEscolhido >= 3*tempo || 
    opcao=="Macarrão" && tempoEscolhido >= 3*tempo ||
    opcao=="Carne" && tempoEscolhido >= 3*tempo ||
    opcao=="Feijão" && tempoEscolhido >= 3*tempo ||
    opcao=="Brigadeiro" && tempoEscolhido >= 3*tempo) {

    return "Kabummm!!!"}

    else {
    console.log("Prato pronto, bom apetite!!!")}

}
    
console.log(aquecer("Pipoca", 10))        
