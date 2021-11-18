// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true
  }
  return false
}
console.log(palindromo('arara')); // true
console.log(palindromo('teste')); // false


// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indexLargestNumber(number) {
  let indexLargest = 0;
  for (let indice in number) {
    if (number[indice] > number[indexLargest]) {
      indexLargest = indice;
    }
  }
  return indexLargest;
}
console.log(indexLargestNumber([2, 3, 6, 7, 10, 1])); // 4
console.log(indexLargestNumber([-2, -3, -6, -7, -10, -1])); // 5


// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indexSmallestNumber(number) {
  let indexSmallest = 0;
  for (let indice in number) {
    if (number[indice] < number[indexSmallest]) {
      indexSmallest = indice;
    }
  }
  return indexSmallest;
}
console.log(indexSmallestNumber([2, 3, 6, 7, 10, 1])); // 5
console.log(indexSmallestNumber([-2, -3, -6, -7, -10, -1])); // 4


// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function largestName(arrayNames) {
  let largestName = arrayNames[0];
  for (const name of arrayNames) {
    if (name.length > largestName.length) {
      largestName = name
    }
  }
  return largestName;
}
console.log(largestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); // Fernanda

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repeatNumber(arrayNumbers) {

}

