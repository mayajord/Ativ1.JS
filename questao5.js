const num = [9,3,6,7];
function numeroPrimo(num) {
    if (num <= 1){
        return false;
    };


    for (p = 2; p < num; p++) {
        if (num % p === 0){
            return false;
        }
    }
    return true;
}
const primos = numeros.filter(numeroPrimo);
console.log(primos);