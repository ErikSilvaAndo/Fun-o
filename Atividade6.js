function jhonathan(numero) {
  let random = Math.random() * numero;
  return Math.ceil(random);
}
let retorno = jhonathan(20);
console.log(retorno);
