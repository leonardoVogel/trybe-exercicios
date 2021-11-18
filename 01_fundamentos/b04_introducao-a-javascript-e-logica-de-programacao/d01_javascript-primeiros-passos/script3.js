// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = 'TORRE';

switch (peca.toLowerCase()) {
  case 'rei':
    console.log('Rei -> Uma casa em qualquer direção');
    break;
  case 'rainha':
    console.log('Rainha -> Qualquer direção');
    break;
  case 'bispo':
    console.log('Bispo -> Diagonal');
    break;
  case 'cavalo':
    console.log('Cavalo -> Em L');
    break;
  case 'torre':
    console.log('Torre -> Vertical e horizontal');
    break;
  case 'peao':
    console.log('Peao -> Uma casa para frente, exceto no primeiro movimento podendo ser 2');
    break;
  default:
    console.log('Erro, peça inválida');
    break;
}