// A pessoa deve medir mais de 1.40m e menos de 2 metros.
// b) Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
// c) Se a pessoa medir menos de 1.20m, não poderá subir, nem
// acompanhada.

function podeSubir(altura, acompanhante){
    

    if (altura >= 1.4 && altura < 2){

        return "O resultado é \n" + true

    } else if (altura > 1.2 && altura < 1.4 && acompanhante) {

        return "Acesso Liberado"
    } else {
        return "Acesso Negado"
    }
}    

console.log(podeSubir(1.42, true))
    