// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

  let n = 5;
  for (let linha = 1; linha <= n; linha += 1) {
    let result = "";
    for (let coluna = 1; coluna <= n; coluna += 1) {
      result += "*";
    }
    console.log(result);
  }

// square(5)
//*****
//*****
//*****
//*****
//*****



// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

n = 5;

for (let linhas = 1; linhas <= n; linhas += 1) {
  let result = ''

  for (let colunas = 1; colunas <= linhas; colunas += 1) {
    result += '*'
  }

  console.log(result)
}

// arvore(5)
// *
// **
// ***
// ****
// *****



// 3- Agora inverta o lado do triângulo. 

n = 5

for(let i = 1; i <= n; i++ ){
  let result = ''

  for (let espacosContador = 1; espacosContador <= n - i ; espacosContador++ ){
    result += ' '
  }

  for (let contadorAsteriscos = 1; contadorAsteriscos <= i; contadorAsteriscos++ ) {
    result += '*'
  }
  
  console.log(result)
}

// invertido(5)
//     *
//    **
//   ***
//  ****
// *****



// Faça uma pirâmide com n asteriscos de base:

n = 5
let tree = '';

for (let index = 1; index <= n; index += 1) {
  for (let espacos = 1; espacos <= n - index; espacos += 1) {
    tree += ' ';
  }
  for (let asteriscos = 0; asteriscos < 2 * index - 1; asteriscos += 1) {
    tree += '*';
  }
  tree += '\n';
}
console.log(tree);


// tree(5)
//   *
//  ***
// *****



// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;

n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';

for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let column = 1; column <= n; column += 1) {
    if (column == controlLeft || column == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}

// arvoreVazada(7)
//    *
//   * *
//  *   *
// *******



// Faça um programa que diz se um número definido numa variável é primo ou não.

  n = 7

  let result;
  let divisores = 0;
  for (let divisor = 2; divisor < n; divisor += 1) {
    if (n % divisor === 0) {
      divisores += 1;
    }
  }
  if (divisores === 0) {
    result = true
  } else {
    result = false
  }

console.log(result);