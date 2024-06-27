let soma = 0;
const arr = [1, 2, 3, 4, 5, 6];
function somatodos(arr) {
  for (let i = 0; i < arr.length; i++) {
    soma = arr[i] + soma;
  }
}
const retorno = somatodos(arr);
console.log(soma);
