const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Digite um número: "));
let numero2 = Number(prompt("Digite um número: "));
let operacao = prompt("Qual a sua operação(soma/sub/mult/div): ");

let resultado;
switch (operacao) {
  case "soma":
    resultado = numero1 + numero2;
    console.log(resultado);
    break;
  case "sub":
    resultado = numero1 - numero2;
    console.log(resultado);
    break;
  case "mult":
    resultado = numero1 * numero2;
    console.log(resultado);
    break;
  case "div":
    resultado = numero1 / numero2;
    console.log(resultado);
    break;
  default:
    console.log("Não é operavel");
}
while (true) {
  let continuar = prompt(
    "Deseja fazer mais alguma operação? Sim ou Não "
  ).toLowerCase();
  if (continuar != "sim") {
    numero1 = Number(prompt("Digite um número: "));
    numero2 = Number(prompt("Digite ums número: "));
    operacao = prompt("Qual a sua operação(soma/sub/mult/div): ");
    switch (operacao) {
      case "soma":
        resultado = numero1 + numero2;
        console.log(resultado);
        break;
      case "sub":
        resultado = numero1 - numero2;
        console.log(resultado);
        break;
      case "mult":
        resultado = numero1 * numero2;
        console.log(resultado);
        break;
      case "div":
        resultado = numero1 / numero2;
        console.log(resultado);
        break;
      default:
        console.log("Não é operavel");
    }
  }
}
