const prompt = require('prompt-sync')();

const numero1 = parseFloat(prompt("Insira um número: "));
const numero2 = parseFloat(prompt("Insira um número: "));
const numero3 = parseFloat(prompt("Insira um número: "));

let array = [numero1, numero2, numero3];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < (array.length - i - 1); j++) {
        if (array[j] > array[j + 1]) {
            let aux = array[j]
            array[j] = array[j + 1]
            array[j + 1] = aux
        }
    }
}

console.log(array);