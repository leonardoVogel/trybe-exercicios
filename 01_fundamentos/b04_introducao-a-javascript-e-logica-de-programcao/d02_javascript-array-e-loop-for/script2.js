let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ordene o array numbers em ordem crescente e imprima seus valores;
for (let index1 = 1; index1 < numbers.length; index1 += 1) {
  for (let index2 = 0; index2 < index1; index2 += 1) {
    if (numbers[index2] > numbers[index1]) {
      // let position = numbers[index1];
      [numbers[index1], numbers[index2]] = [numbers[index2], numbers[index1]]
      // numbers[index2] = position;
    }
  }
}
console.log(numbers);

// Ordene o array numbers em ordem decrescente e imprima seus valores;
for (let index1 = 1; index1 < numbers.length; index1 += 1) {
  for (let index2 = 0; index2 < index1; index2 += 1) {
    if (numbers[index2] < numbers[index1]) {
      let position = numbers[index1];
      numbers[index1] = numbers[index2];
      numbers[index2] = position;
    }
  }
}
console.log(numbers);

// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Primeira solução encontrada:

// let numbers2 = [];
// for (let index1 = 1; index1 <= numbers.length; index1 += 1) {
//   for (let index2 = index1 - 1; index2 < index1; index2 += 1) {
//     let number1 = numbers[index1];
//     let number2 = numbers[index2];
//     if (number1 === undefined) {
//       number1 = 2
//     }
//     numbers2.push(number1 * number2)
//   }
// }
// console.log(numbers2);


// Segunda solução encontrada: 

let numbers2 = [];
for (let i = 0; i < numbers.length; i += 1) {
  numbers2.push(numbers[i] * (numbers[i + 1] || 2))
}
console.log(numbers2);
