let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (const number of numbers) {
  console.log(number);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let total = 0;
for (let number = 0; number < numbers.length; number += 1) {
  total  += numbers[number]
}
console.log(total);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let soma = 0;
for (let number = 0; number < numbers.length; number += 1) {
  soma  += numbers[number]
}

let media = soma / numbers.length

console.log(media);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if  (media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorValor = 0;
for (const number of numbers) {
  if (number > maiorValor) {
    maiorValor = number;
  }
}
console.log(maiorValor);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numerosImpares = 0;
for (const number of numbers) {
  if (number % 2 !== 0) {
    numerosImpares += 1
  }
}

if (numerosImpares > 0) {
  console.log(numerosImpares);
} else {
  console.log('Nenhum valor ímpar encontrado');
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorValor = numbers[0]
for (let number = 1; number < numbers.length; number += 1) {
  if (numbers[number] < menorValor) {
    menorValor = numbers[number]
  }
}
console.log(menorValor);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];
for (let number = 1; number <= 25; number += 1) {
  array.push(number)
}
console.log(array);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (const number of array) {
  let numeroDividido = number / 2 
  console.log(numeroDividido);
}
