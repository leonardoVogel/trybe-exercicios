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
function submitButton(event) {
  console.log('teste1');
  event.preventDefault();

  // clearDiv();
  
  if(validateData()){
    console.log('valido');
  } else {
    console.log('invalido');
  }
}

// Validação de data
function validateData() {
  const regex = /^(\d{2}\/){2}\d{4}$/ 
  const dd = inputData.value.match(/d+/g)[0];
  const mm = inputData.value.match(/d+/g)[1];
  const aaaa = inputData.value.match(/d+/g)[2];

  if (!inputData.value.match(regex)) {
    alert('Formato da data incorreto!');
    return
  } else if (dd <= 0 || dd > 31) {
    alert('Valor de dia incorreto!');
    return
  } else if (mm <= 0 || mm > 12) {
    alert('Valor do mês incorreto!');
    return
  } else if (aaaa <= 0) {
    alert('Valor do ano incorreto!');
    return
  }
  return inputData.value;
}
validateData()

btnSubmit.addEventListener('click', submitButton);
btnSubmit.addEventListener('click', validateData);