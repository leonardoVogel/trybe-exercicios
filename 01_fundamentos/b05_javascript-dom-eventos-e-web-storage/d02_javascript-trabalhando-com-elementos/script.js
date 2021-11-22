// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const elementH1 = document.createElement('h1');
elementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(elementH1);

// Adicione a tag main com a classe main-content como filho da tag body ;
const mainContent = document.createElement('main');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const sectionCenterContent = document.createElement('section');
sectionCenterContent.className = 'center-content';
mainContent.appendChild(sectionCenterContent);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const tagP = document.createElement('p');
tagP.innerText = 'Algum texto';
sectionCenterContent.appendChild(tagP);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const sectionLeftContent = document.createElement('section');
sectionLeftContent.className = 'left-content';
mainContent.appendChild(sectionLeftContent);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const sectionRightContent = document.createElement('section');
sectionRightContent.className = 'right-content';
mainContent.appendChild(sectionRightContent);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
const smallImage = document.createElement('img');
smallImage.className = 'small-image';
smallImage.src = 'https://picsum.photos/200'
sectionLeftContent.appendChild(smallImage);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const content = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
const unorderedList = document.createElement('ul');
sectionRightContent.appendChild(unorderedList);

for (const element of content) {
  const list = document.createElement('li');
  list.innerText = element;

  unorderedList.appendChild(list);
}

// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (let index = 1; index <= 3; index += 1) {
  const elementH3 = document.createElement('h3');
  elementH3.innerText = `Teste ${index}`
  mainContent.appendChild(elementH3);
}



// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// Adicione a classe title na tag h1 criada;
elementH1.className = 'title'

// Adicione a classe description nas 3 tags h3 criadas;
const elementsH3 = document.querySelectorAll('h3');
for (const element of elementsH3) {
  element.className = 'description';
}

// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
mainContent.removeChild(sectionLeftContent)

// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
sectionRightContent.style.marginRight = 'auto'

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
sectionCenterContent.parentNode.style.backgroundColor = 'green'

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
unorderedList.lastChild.remove()
unorderedList.lastChild.remove()
