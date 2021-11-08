// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const num1 = 4;
const num2 = 4;
const num3 = 4;

let par = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  par = true;
}

console.log(par);


// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let impar = false;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
  impar = true;
}

console.log(impar);