const numeros = [5,6,7,8,9,10,11,12,13,14,15];

function quadrado(array){

    const maiores = array.filter((numeros) => numeros > 10);
    const quadrado = maiores.map((numeros) =>numeros * numeros);
    return quadrado;
}

const final = quadrado(numeros);
 console.log("Quadrado dos numeros maiores que 10:", quadrado)
