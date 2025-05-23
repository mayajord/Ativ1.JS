const alunos = [ { nome: 'Mayaa', nota: 10 }, { nome: 'Lucas', nota: 10 }, { nome:
'Sara', nota: 7 } ];

function sistemadeNotas(array){
    const notasMaiorQueSete = alunos.filter((alunos) => alunos.nota >= 7);
    const reprovados = alunos.filter((alunos) => alunos.nota < 7);
    if (notasMaiorQueSete){
        console.log("Pessoal nota maior que 7:", notasMaiorQueSete);
        return notasMaiorQueSete;

    }else{
        console.log("Pessoal reprovado:", reprovados);
        return reprovados;
    }

}

