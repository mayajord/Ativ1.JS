const array = [15, 25, 33, 4, 905];

function somarArray(numeros) {
  const resul =  numeros.reduce((acumulador, atual) => acumulador + atual, 0);
  return resul;
}
const soma = somarArray(array);
console.log(soma); 