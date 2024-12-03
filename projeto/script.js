function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = peso / (altura * altura);

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

    document.getElementById("resultado").innerHTML = `
        <p>Seu IMC é: <strong>${imc.toFixed(2)}</strong></p>
        <p><strong>Classificação:</strong> ${classificacao}</p>
    `;
}
