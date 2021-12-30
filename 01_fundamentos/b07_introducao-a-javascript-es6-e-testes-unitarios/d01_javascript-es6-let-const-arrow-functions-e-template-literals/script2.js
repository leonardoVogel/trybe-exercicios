// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.
// Crie uma função que receba um número e retorne seu fatorial.
const factorial = (n) => {
  let result = n;
  for (let index = n - 1; index > 1; index -= 1) {
    result *= index
  }
  return result;
}
console.log(factorial(4));

// Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = (text) => {
  const wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  wordArray.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  })
  return result;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// Crie um código JavaScript com a seguinte especificação:
// -> Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

// -> Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.

// -> Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ...

const skills = ['Javascript', 'HTML', 'CSS', 'DOM', 'React']

const buildSkillsPhrase = (string) => {
  const func1 = () => `Tryber ${string} aqui!`
  let result = `${func1()}, Minhas cinco principais habilidades são:`

  skills.forEach((skill, index) => result = `${result}
  ${index + 1}. ${skill}`)

  return result
}
console.log(buildSkillsPhrase('Leonardo'));
