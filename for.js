const prompt = require('prompt-sync')({sigint: true});
let nomes = []; 
let verificador = true;

for (let i = 0; verificador == true; i++) {
    nomes[i] = (prompt("Digite seu nome: "));
    let parar = prompt("Deseja parar? (S/N) ");
    let pararVerificador = parar.toUpperCase();
        if(pararVerificador == "S"){
            verificador = false;
            console.log(nomes);
        }
}




