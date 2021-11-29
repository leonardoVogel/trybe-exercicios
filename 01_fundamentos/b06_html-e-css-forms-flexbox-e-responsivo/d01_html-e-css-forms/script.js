const estados = ['AC - Acre', 'AL - Alagoas', 'AP - Amapá', 'AM - Amazonas', 'BA - Bahia', 'CE - Ceará', 'DF - Distrito Federal', 'ES - Espírito Santo', 'GO - Goiás', 'MA - Maranhão', 'MT - Mato Grosso', 'MS - Mato Grosso do Sul', 'MG - Minas Gerais', 'PA - Pará', 'PB - Paraíba', 'PR - Paraná', 'PE - Pernambuco', 'PI - Piauí', 'RJ - Rio de Janeiro', 'RN - Rio Grande do Norte', 'RS - Rio Grande do Sul', 'RO - Rondônia', 'RR - Roraima', 'SC - Santa Catarina', 'SP - São Paulo', 'SE - Sergipe', 'TO - Tocantins'];

const selectStates = document.querySelector('#estados');

for (let index = 0; index < estados.length; index += 1) {
  const optState = document.createElement('option');
  optState.value = estados[index].match(/[A-Z]{2}/);
  optState.innerText = estados[index].replace(/.{5}/, '');
  selectStates.appendChild(optState);
}

let erros = [];

// Verificação do campo nome
const inputName = document.querySelector('#name');

function verifyName() {
  if (!inputName.value) {
    erros.push('Nome incorreto!');
  } else {
    return inputName.value;
  }
}

// Verificação do campo email
const inputEmail = document.querySelector('#email');

function verifyEmail() {
  if (inputEmail.value.match(/(.+)@(.+){2,}\.(.+){2,}/)) {
    return inputEmail.value
  } else if (!inputEmail.value) {
    erros.push('Campo de email vazio!');
  } else {
    erros.push('Email incorreto!');
  }
}

// Verificação do campo CPF
const inputCPF = document.querySelector('#cpf');

function verifyCPF() {
  if (inputCPF.value.match(/\d{11}/)) {
    return inputCPF.value
  } else if (!inputCPF.value) {
    erros.push('Campo de CPF vazio!');
  } else {
    erros.push('CPF incorreto!');
  }
}

// Verificação do campo Endereço
const inputAddress = document.querySelector('#endereco');

function verifyAddress() {
  if (inputAddress.value.match(/(\w{2,}.){2,}/)) {
    return inputAddress.value
  } else if (!inputAddress.value) {
    erros.push('Campo de endereço vazio!');
  } else {
    erros.push('Endereço incorreto');
  }
}

// Verificação do campo Cidade
const inputCity = document.querySelector('#cidade');

function verifyCity() {
  if (inputCity.value.match(/(\w{2,}.){2,}/)) {
    return inputCity.value
  } else if (!inputCity.value) {
    erros.push('Campo de cidade vazio!');
  } else {
    erros.push('Endereço incorreto!');
  }
}

// TODO ALTERAÇÕES
// Verificação do campo tipo
const xablau = document.getElementsByName('tipo')

function verifyTypeBtn() {
  xablau.forEach((element) => {
    if (element.checked) {
      return element.value;
    }
  });
}

// Verificação do campo Resumo do currículo
const inputResumeCurriculum = document.querySelector('#resume');

function verifyResumeCurriculum() {
  if (!inputResumeCurriculum.value) {
    erros.push('Resumo do currículo vazio');
  } else {
    return inputResumeCurriculum.value
  }
}

// Verificação do campo cargo
const inputPosition = document.querySelector('#cargo');

function verifyPosition() {
if (!inputPosition.value) {
  erros.push('Campo de cargo vazio!');
} else {
  return inputPosition.value
}
}

// Verificação do campo descrição do cargo
const inputJobDescription = document.querySelector('#descricao-cargo');

function verifyJobDescription() {
  if (!inputJobDescription.value) {
    erros.push('Campo de descrição do cargo vazio!');
  } else {
    return inputJobDescription.value
  }
}

// Validação de data
const inputData = document.querySelector('#data');

function validateData() {
  if (!inputData.value) {
    erros.push('Campo de data vazio!');
    return
  }
  const regex = /^(\d{2}\/){2}\d{4}$/ 
  // const regex = /^(3[0-1]|[1-2]\d|[0][1-9])\/(1[0-2]|0[1-9])\/(190[8-9]|19[1-9]\d|20[0-1]\d|202[0-1])/
  const dd = inputData.value.match(/\d+/g)[0];
  const mm = inputData.value.match(/\d+/g)[1];
  const aaaa = inputData.value.match(/\d+/g)[2];
  
  if (!inputData.value.match(regex)) {
    erros.push('Formato da data incorreto!');
  } else if (dd <= 0 || dd > 31) {
    erros.push('Valor de dia incorreto!');
  } else if (mm <= 0 || mm > 12) {
    erros.push('Valor do mês incorreto!');
  } else if (aaaa <= 0) {
    erros.push('Valor do ano incorreto!');
  } else {
    return inputData.value;
  }
}

// Limpar campos do formulário
const allInputs = document.querySelectorAll('input');

function clearInput() {
  for (let index = 0; index < allInputs.length; index += 1) {
    allInputs[index].value = '';
  }
  document.querySelector('#resume').value = '';
}

// Função botão submit
function submitResult(event) {
  event.preventDefault();

  document.createElement('ul').innerHTML = '';
  
  let name = verifyName();
  let email = verifyEmail();
  let cpf = verifyCPF();
  let endereco = verifyAddress();
  let cidade = verifyCity();
  let estado = document.querySelector('#estados').value;
  let btnType = verifyTypeBtn();
  let resumoCurriculo = verifyResumeCurriculum();
  let cargo = verifyPosition();
  let descricaoCargo = verifyJobDescription();
  let dataInicio = validateData();

  let valores = { name, email, cpf, endereco, cidade, estado, btnType, resumoCurriculo, cargo, descricaoCargo, dataInicio }
  
  if (erros.length > 0) {
    const divError = document.createElement('div')
    divError.id = 'errorList';
    document.body.appendChild(divError);
    
    const listError = document.createElement('ul')
    listError.id = 'listResult';
    divError.appendChild(listError);
    
    const resultList = document.querySelector('#listResult');
    erros.forEach((error) => {
      const displayError = document.createElement('li');
      displayError.innerText = error;
      resultList.appendChild(displayError);
    });
  } else {
    const divResult = document.createElement('div')
    divResult.id = 'resultList';
    document.body.appendChild(divResult);
    
    const listResults = document.createElement('ul')
    listResults.id = 'listResult';
    divResult.appendChild(listResults);
    
    const resultList = document.querySelector('#listResult');
    
    for (const key in valores) {
      const displayResult = document.createElement('li');
      displayResult.innerText = valores[key]
      resultList.appendChild(displayResult);
    }
  }
  clearInput();
}

const btnClear = document.querySelector('#btnClear')
const btnSubmit = document.querySelector('#btnSubmit')

btnClear.addEventListener('click', clearInput)
btnSubmit.addEventListener('click', submitResult);
