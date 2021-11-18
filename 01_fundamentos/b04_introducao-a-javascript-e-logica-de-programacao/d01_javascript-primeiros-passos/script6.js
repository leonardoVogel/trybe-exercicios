// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const valorCusto = 35;
const valorVenda = 60;
const quantidadeProdutos = 1000;

if (valorCusto > 0 && valorVenda > 0) {
  const custoUnitario = valorCusto * 1.2
  const lucroUnitario = valorVenda - custoUnitario;
  console.log(lucroUnitario * quantidadeProdutos);
} else {
  console.log('Erro, valor de custo ou de venda inválido');
}
