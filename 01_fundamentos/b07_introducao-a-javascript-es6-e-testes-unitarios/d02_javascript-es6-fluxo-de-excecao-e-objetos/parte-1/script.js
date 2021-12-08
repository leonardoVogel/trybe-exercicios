function sum() {
  try {
    const value1 = document.querySelector('#value1').value;
    const value2 = document.querySelector('#value2').value;
    verifyIsNumber(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.querySelector('#result').innerHTML = `Resultado: ${result}`;
    document.querySelector('#value1').value = '';
    document.querySelector('#value2').value = '';
  } catch (error) {
    document.querySelector('#result').innerHTML = `Erro: ${error.message}`;
  } finally {
    document.querySelector('#value1').value = '';
    document.querySelector('#value2').value = '';
  }
}

function verifyIsNumber(value1, value2) {
  if (!value1 || !value2) {
    throw new Error('Informe os dois valores para realizar a soma')
  }
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Informe apenas números para realizar a soma');
  }
}

window.onload = () => {
  const button = document.querySelector('#button');
  button.addEventListener('click', sum);
}