const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
}; 

// 1 - Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addKey = (object, turn, value) => {
  object[turn] = value;
  return object
}
console.log(addKey(lesson2, 'turno', 'noite'));

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (object) => {
  return Object.keys(object);
}
console.log(listKeys(lesson1));

// 3 - Crie uma função para mostrar o tamanho de um objeto.
const objLength = (obj) => {
  return Object.keys(obj).length
}
console.log(objLength(lesson2))

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const objValues = (obj) => {
  return Object.values(obj)
}
console.log(objValues(lesson2));

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const numberStudents = () => {
  let result = 0;
  let arrLessons = Object.keys(allLessons);
  for (const keys in arrLessons) {
    result += allLessons[arrLessons[keys]]['numeroEstudantes']
  }
  return result;
}
console.log(numberStudents());

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (obj, pos) => {
  return Object.values(obj)[pos]
}
console.log(getValueByNumber(lesson1, 0));

// 8- Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// // Forma 1
// const verifyPair = (obj, key, value) => {
//   if (Object.keys(obj).includes(key) && Object.values(obj).includes(value)) {
//     return true
//   }
// return false
// }

// Forma 2
const verifyPair = (obj, key, value) => {
  const entries = Object.entries(obj);
  for (const index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) {
      return true
    }
  }
  return false
} 
console.log(verifyPair(lesson3, 'turno', 'noite'));

// Questões bonus
// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const mathStudents = () => {
  let result = 0;
  let arrMath = Object.keys(allLessons);
  for (const index in arrMath) {
    if (allLessons[arrMath[index]].materia === 'Matemática') {
      result += allLessons[arrMath[index]].numeroEstudantes;
    }
  }
  return result;
}
console.log(mathStudents());

// 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
const createReport = (obj, prof) => {
  let arrLesson = Object.keys(obj);
  let arrAulas = [];
  let students = 0;
  for (const index in arrLesson) {
    if (allLessons[arrLesson[index]].professor === prof) {
      arrAulas.push(allLessons[arrLesson[index]].materia);
      students += allLessons[arrLesson[index]].numeroEstudantes;
    }
  }
  return result = {professor: prof, aulas: arrAulas, estudantes: students}
}
console.log(createReport(allLessons, 'Maria Clara'))
