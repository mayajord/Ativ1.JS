const numeros = [1,2,3,4,5,6,7,8,9,10];

function numerosPares(array){
    const pares = array.filter(numero => numero %2 ===0);
    const dobroPares = pares.map(numeros => pares * 2);
    return dobroPares;
}
numerosPares(numeros);
console.log("Os numeros pares sao:",pares);
console.log("Eles vezes dois sao:",dobroPares);