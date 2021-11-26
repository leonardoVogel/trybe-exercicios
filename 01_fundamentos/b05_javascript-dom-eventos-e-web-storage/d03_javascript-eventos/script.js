function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();


// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

days(dezDaysList);

function days(daysArray) {
  const days = document.querySelector('#days');
  
  for (let index = 0; index < daysArray.length; index += 1) {
    const liFromDays = document.createElement('li');
    liFromDays.className = 'day';
    liFromDays.innerText = dezDaysList[index];
    if (daysArray[index] === 24 || daysArray[index] === 25 || daysArray[index] === 31) {
      liFromDays.classList.add('holiday');
    }
    if (daysArray[index] === 4 || daysArray[index] === 11 || daysArray[index] === 18 || daysArray[index] === 25) {
      liFromDays.classList.add('friday');
    }
    days.appendChild(liFromDays);
  }
}

// Exercício 2
const buttonsContainer = document.querySelector('.buttons-container');

holiday('Feriados');

function holiday(string) {
  const buttonHolidays = document.createElement('button');
  buttonHolidays.id = 'btn-holiday';
  buttonHolidays.innerText = string;
  buttonsContainer.appendChild(buttonHolidays);
}


// Exercício 3
const holidays = document.querySelectorAll('.holiday');
const buttonHolidays = document.querySelector('#btn-holiday');

buttonHolidays.addEventListener('click', clickFeriados);

function clickFeriados() {
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === 'yellow') {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)'
    } else {
      holidays[index].style.backgroundColor = 'yellow';
    }
  }
}


// Exercício 4
const buttonFriday = document.querySelector('#btn-friday');

friday('Sexta-feira');

function friday(string) {
  const buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerText = string;
  buttonsContainer.appendChild(buttonFriday);
}


// Exercício 5
const diasFriday = document.getElementsByClassName('friday');
const findFridayButton = document.getElementById('btn-friday');
const fridayDays = [4, 11, 18, 25];

findFridayButton.addEventListener('click', fridayButton);

function fridayButton() {
  
  for (let index = 0; index < diasFriday.length; index += 1) {
    if (diasFriday[index].innerText !== 'sextou' ) {
      diasFriday[index].innerText = 'sextou';
    } else {
      diasFriday[index].innerText = fridayDays[index];
    }
  }
}

// Exercício 6
const days1 = document.querySelector('#days');

days1.addEventListener('mouseover', zoomIn)
days1.addEventListener('mouseout', zoomOut)

function zoomIn(elemento) {
  elemento.target.style.fontSize = '25px';
  elemento.target.style.fontWeight = '800';
}   

function zoomOut(elemento) {
  elemento.target.style.fontSize = '20px';
  elemento.target.style.fontWeight = '400';
}


// Exercício 7
function task (string) {
  const tarefa = document.createElement('span');
  tarefa.innerText = string;
  var myTasks = document.querySelector('.my-tasks');
  myTasks.appendChild(tarefa);
}
task('alguma coisa')

// Exercício 8
function taskColor(cor) {
  const createDiv = document.createElement('div');
  createDiv.className = 'task';
  createDiv.style.backgroundColor = cor;
  document.querySelector('.my-tasks').appendChild(createDiv);
}
taskColor('orange')

// Exercício 9
const localizaDiv = document.querySelector('.my-tasks div'); // localiza a bolota
localizaDiv.addEventListener('click', nome)

function nome() {
  if (localizaDiv.className !== 'task selected') {
    localizaDiv.classList.add('selected');
  } else {
    localizaDiv.classList.remove('selected');
  }
}

// Exercício 10
const days2 = document.querySelector('#days');
days2.addEventListener('click', xablau);

function xablau(event) {
  if (event.target.style.color !== localizaDiv.style.backgroundColor) {
    event.target.style.color = localizaDiv.style.backgroundColor;
  } else {
    event.target.style.color = 'rgb(119,119,119)';
  }
}
