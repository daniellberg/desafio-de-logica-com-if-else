function calculaMedia(notaAv1, notaAv2){
   let notaFinal = (notaAv1 + notaAv2)/2;
   
    textoResultado(notaFinal);
}

function textoResultado(notaFinal){
    const media = 7;

    if(notaFinal >= media){
        console.log(`O aluno foi aprovado com média ${notaFinal}`);
    } else if(notaFinal < 5){
        console.log(`O aluno foi reprovado com média ${notaFinal}`);
    } else{
        console.log(`O aluno está de exame final com média ${notaFinal}`);
    }
}

function defineNota(){
    const prompt = require('prompt-sync')();
    const notaAv1 = parseFloat(prompt("Digite a nota do aluno: "));
    const notaAv2 = parseFloat(prompt("Digite a nota do aluno: "));

    calculaMedia(notaAv1, notaAv2); 
}

defineNota();

module.exports = {
    defineNota
}
