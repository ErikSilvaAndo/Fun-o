const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");

function exibir(nome) {
  if (nome.length <= 5) {
    return nome;
  }
}
let retorno = exibir(nome);
console.log(retorno);
