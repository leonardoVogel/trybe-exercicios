const estados = ['AC - Acre', 'AL - Alagoas', 'AP - Amapá', 'AM - Amazonas', 'BA - Bahia', 'CE - Ceará', 'DF - Distrito Federal', 'ES - Espírito Santo', 'GO - Goiás', 'MA - Maranhão', 'MT - Mato Grosso', 'MS - Mato Grosso do Sul', 'MG - Minas Gerais', 'PA - Pará', 'PB - Paraíba', 'PR - Paraná', 'PE - Pernambuco', 'PI - Piauí', 'RJ - Rio de Janeiro', 'RN - Rio Grande do Norte', 'RS - Rio Grande do Sul', 'RO - Rondônia', 'RR - Roraima', 'SC - Santa Catarina', 'SP - São Paulo', 'SE - Sergipe', 'TO - Tocantins'];

const selectStates = document.querySelector('#estados');
const inputData = document.querySelector('#data');
const btnSubmit = document.querySelector('#btnSubmit')

for (let index = 0; index < estados.length; index += 1) {
  const optState = document.createElement('option');
  optState.value = estados[index].match(/[A-Z]{2}/);
  optState.innerText = estados[index].replace(/.{5}/, '');
  selectStates.appendChild(optState);
}

// Função botão submit
function submitResult(event) {
  event.preventDefault();

  clearInput();
  
  if(validateData()){
    console.log('valido');
  } else {
    console.log('invalido');
  }
}

// Validação de data
function validateData() {
  const regex = /^(\d{2}\/){2}\d{4}$/ 
  // const regex = /^(3[0-1]|[1-2]\d|[0][1-9])\/(1[0-2]|0[1-9])\/(190[8-9]|19[1-9]\d|20[0-1]\d|202[0-1])/
  const dd = inputData.value.match(/\d+/g)[0];
  const mm = inputData.value.match(/\d+/g)[1];
  const aaaa = inputData.value.match(/\d+/g)[2];

  if (!inputData.value.match(regex)) {
    alert('Formato da data incorreto!');
    return false
  } else if (dd <= 0 || dd > 31) {
    alert('Valor de dia incorreto!');
    return false
  } else if (mm <= 0 || mm > 12) {
    alert('Valor do mês incorreto!');
    return false
  } else if (aaaa <= 0) {
    alert('Valor do ano incorreto!');
    return false
  }
  return inputData.value;
}

// Limpar campos do formulário
const allInputs = document.querySelectorAll('input');
const btnClear = document.querySelector('#btnClear')

function clearInput() {
  for (let index = 0; index < allInputs.length; index += 1) {
    allInputs[index].value = '';
  }
}

btnClear.addEventListener('click', clearInput)
btnSubmit.addEventListener('click', submitResult);
btnSubmit.addEventListener('click', validateData);