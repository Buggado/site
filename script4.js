function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let resultado;

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                document.getElementById("resultado").innerHTML = "Erro: Divisão por zero";
                alert("Erro: Divisão por zero não é permitida.");
                return;
            }else{
            resultado = num1 / num2;
            }
            break;
        default:
            document.getElementById("resultado").innerHTML = "Operador inválido";
            alert("Operador inválido. Por favor, use +, -, * ou /.");
            return;
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}