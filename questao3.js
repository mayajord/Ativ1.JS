const nomes = ["Maya", "Jordana", "Leticia", "Samara", "Alicia"];

function ordemAlfabetica(array) {
    const ordenadas = array.sort((a, b) => {
        if (a < b) {
            return -1};
        if (a > b){
             return 1};
             
        return 0;
    });

    console.log(ordenadas);
    return ordenadas;
}

ordemAlfabetica(nomes);
