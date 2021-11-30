import './node_modules/just-validate/dist/js/just-validate.js'

window.onload = function () {
  new JustValidate('.js-form', {
    rules: {
      cpf: {
        required: true,
        custom: '^\d{11}',
      },
      address: {
        required: true,
        minLength: 3,
        maxLength: 200,
      },
      city: {
        required: true,
        minLength: 3,
        maxLength: 28,
      },
      state: {
        required: true,
      },
      type: {
        required: true,
      },
      resume: {
        required: true,
        minLength: 10,
        maxLength: 1000,
      },
      position: {
        required: true,
        minLength: 3,
        maxLength: 40,
      },
      descriptionJob: {
        required: true,
        minLength: 5,
        maxLength: 500,
      },
      date: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'Este campo é obrigatório!',
        minLength: 'Mínimo de 3 caracteres!',
      },
      email: {
        required: 'Este campo é obrigatório!',
        email: 'Informe um email válido!',
      },
      cpf: {
        required: 'Este campo é obrigatório!',
        custom: 'Informe um CPF válido!'
      },
      address: {
        required: 'Este campo é obrigatório!',
        minLength: 'Mínimo de 3 caracteres!',
        maxLength: 'Máximo de 200 caracteres!',
      },
      city: {
        required: 'Este campo é obrigatório!',
        minLength: 'Mínimo de 3 caracteres!',
        maxLength: 'Máximo de 28 caracteres!',
      },
      state: {
        required: 'Este campo é obrigatório!',
      },
      type: {
        required: 'Este campo é obrigatório!',
      },
      resume: {
        required: 'Este campo é obrigatório!',
        minLength: 'Mínimo de 10 caracteres!',
        maxLength: 'Máximo de 1000 caracteres!',
      },
      position: {
        required: 'Este campo é obrigatório!',
        minLength: 'Mínimo de 3 caracteres!',
        maxLength: 'Máximo de 40 caracteres!',
      },
      descriptionJob: {
        required: 'Este campo é obrigatório!',
        minLength: 'Mínimo de 5 caracteres!',
        maxLength: 'Máximo de 500 caracteres!',
      },
      date: {
        required: 'Este campo é obrigatório!',
      },
    }
  });
}

var picker = new Pikaday({ field: document.getElementById('datepicker'),
format: 'D/M/YYYY',
toString(date, format) {
  const day = (date.getDate() < 10 ? '0' : '') + date.getDate() ;
  const month =((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
} });

const estados = ['AC - Acre', 'AL - Alagoas', 'AP - Amapá', 'AM - Amazonas', 'BA - Bahia', 'CE - Ceará', 'DF - Distrito Federal', 'ES - Espírito Santo', 'GO - Goiás', 'MA - Maranhão', 'MT - Mato Grosso', 'MS - Mato Grosso do Sul', 'MG - Minas Gerais', 'PA - Pará', 'PB - Paraíba', 'PR - Paraná', 'PE - Pernambuco', 'PI - Piauí', 'RJ - Rio de Janeiro', 'RN - Rio Grande do Norte', 'RS - Rio Grande do Sul', 'RO - Rondônia', 'RR - Roraima', 'SC - Santa Catarina', 'SP - São Paulo', 'SE - Sergipe', 'TO - Tocantins'];

const selectStates = document.querySelector('#estados');

for (let index = 0; index < estados.length; index += 1) {
  const optState = document.createElement('option');
  optState.value = estados[index].match(/[A-Z]{2}/);
  optState.innerText = estados[index].replace(/.{5}/, '');
  selectStates.appendChild(optState);
}

// Função botão submit
function submitResult() {
  document.createElement('ul').innerHTML = '';
}

const btnClear = document.querySelector('#btnClear')
const btnSubmit = document.querySelector('#btnSubmit')

btnClear.addEventListener('click', clearInput)
btnSubmit.addEventListener('click', submitResult);
