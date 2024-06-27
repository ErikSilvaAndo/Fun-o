const prompt = require("prompt-sync")();

const lista = [];

console.clear();

function mostrarLista() {
  console.log(lista);
}

function adicionarTarefa() {
  let id = 0;
  let marcar = false;
  let adicionartarefa = prompt("Adicione uma tarefa: ");
  lista.push({ id: lista.length + 1, tarefa: adicionartarefa, marcar: marcar });
}

function marcarTarefa() {
  let id = prompt("Qual o número da sua tarefa: ");
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id == id) {
      lista[i].marcar = true;
    }
  }
}

function removerTarefa() {
  let id = prompt("Qual o número da sua tarefa para remover: ");
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id == id) {
      lista.splice(i, 1);
    }
  }
}

function continuar() {
  prompt.hide("pressione Enter para continuar ...");
}

while (true) {
  console.log(
    `MENU
    1 - ver lista
    2 - adicionar tarefa
    3 - marcar tarefa
    4 - remover tarefa
    5 - encerrar`
  );

  const option = Number(prompt("Digite a opção: "));

  if (option === 5) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }

  console.clear();

  switch (option) {
    case 1:
      mostrarLista();
      continuar();
      break;
    case 2:
      adicionarTarefa();
      continuar();
      break;
    case 3:
      marcarTarefa();
      continuar();
      break;
    case 4:
      removerTarefa();
      continuar();
      break;
    default:
      console.log("Opção inválida");
      continuar();
  }

  console.clear();
}
