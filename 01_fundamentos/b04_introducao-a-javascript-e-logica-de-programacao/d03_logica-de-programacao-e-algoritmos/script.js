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



// Por fim, faça uma pirâmide com n asteriscos de base:

n = 5

// piramide(5)
//   *
//  ***
// *****



// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;

n = 7

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