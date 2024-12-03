function calcularIMC() {  /* A função é chamada para calcular o IMC quando o usuário fornecer o peso e a altura */
    const peso = parseFloat(document.getElementById("peso").value); /* A função getElementById busca o valor do campo de entrada com o ID "peso" 
    e a função parseFloat converte esse valor para números decimais */
    const altura = parseFloat(document.getElementById("altura").value); /* A função getElementById busca o valor do campo de entrada com o ID "altura" 
    e a função parseFloat converte esse valor para números decimais */

    /*A função isNaN verifica se o valor inserido não é um número. Se o valor de peso ou altura não for um número ou se for menor ou igual a 0, 
    será exibida a mensagem de alerta pedindo para o usuário inserir valores válidos e a execução da função é interrompida com return */
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) { 
        alert("Por favor, insira valores válidos para peso e altura."); 
        return; 
    }

    const imc = peso / (altura * altura); /* A fórmula usada para calcular o IMC é: IMC = peso / altura x altura.*/

    /* O valor do IMC calculado é então classificado em diferentes faixas: 
    Abaixo do peso: IMC menor que 18.5
    Peso normal: IMC entre 18.5 e 24.9
    Sobrepeso: IMC entre 25 e 29.9
    Obesidade: IMC entre 30 e 39.9
    Obesidade grave: IMC acima de 40
    */

    let classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 39.9) {
        classificacao = "Obesidade";
    } else {
        classificacao = "Obesidade grave";
    }


    /* O valor do IMC é arredondado para duas casas decimais com toFixed(2) e exibido na página. A classificação do IMC também 
    é mostrada ao usuário no elemento HTML com o ID resultado */ 
    
    document.getElementById("resultado").innerHTML = `
        <p>Seu IMC é: <strong>${imc.toFixed(2)}</strong></p>
        <p><strong>Classificação:</strong> ${classificacao}</p>
    `;
}
