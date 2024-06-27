const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Digite um valor: "));
let numero2 = Number(prompt("Digite um valor: "));
function comparacao(numero1, numero2) {
  if (numero1 > numero2) {
    console.log("O maior número é " + numero1);
  } else console.log("O maior número é " + numero2);
}

comparacao(numero1, numero2);
