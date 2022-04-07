let pesoPessoa = document.getElementById("peso")
let alturaPessoa = document.getElementById("altura")

function calcular() {
    let peso = pesoPessoa.value
    let altura = alturaPessoa.value
    let calcimc = (peso / (altura * altura)) * 10000
    let calcfinal = calcimc.toFixed(1)


    let teste = ""
    if (calcfinal < 18.5) {
        teste = "abaixo do peso"
    } else if (calcfinal < 24.9) {
        teste = "com o peso normal"
    } else if (calcfinal < 29.9) {
        teste = "com sobrepeso"
    } else if (calcfinal < 34.9) {
        teste = "com obesidade grau I<br> PROCURE ORIENTAÇÃO MÉDICA!"
    } else if (calcfinal < 39.9) {
        teste = "com obesidade grau II<br> PROCURE ORIENTAÇÃO MÉDICA!"
    } else if (calcfinal >= 40) {
        teste = "com obesidade grau III. <br> PROCURE ORIENTAÇÃO MÉDICA!"
    }

    resultado.innerHTML = `<p style.padding: "20px"> Seu imc é de ${calcfinal} <br>E você está ${teste} </p>`
    document.getElementById("resultado").style.padding = "20px";

}


let teste = ""
if (calcfinal < 18.5) {
    teste = "abaixo do peso"
}