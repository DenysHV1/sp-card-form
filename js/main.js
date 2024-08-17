//todo Const from card

const numberOnCard = document.querySelector('.number-on-the-card');
const nameOnCard = document.querySelector('.name-on-the-card');
const dataOnCard = document.querySelector('.data-on-the-card');

//* Class from UserObject
class User {
  constructor(name, number, data, cvv) {
    this.name = name;
    this.number = number;
    this.data = data;
    this.cvv = cvv;
  }
}

//todo Const from FORM
const form = document.querySelector('.main-form-card');
const thankYou = document.querySelector('.thank-you');
const cvvError = document.querySelector('.cvv-error');
const numberError = document.querySelector('.number-error');
const nameError = document.querySelector('.name-error');

form.addEventListener('submit', oneClickForSend);

function oneClickForSend(event) {
  event.preventDefault();
  const userName = event.target.elements.userName.value;
  const userNumber = event.target.elements.userNumber.value;
  const userData = event.target.elements.userData.value;
  const userCvv = event.target.elements.userPassword.value;

  //! Перевірка на символи і числа в імені
  const array = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '!',
    '£',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '-',
    '+',
    '=',
    '#',
    '~',
    '/',
    '?',
    '{',
    '}',
    '[',
    ']',
    '`',
    '¬',
    '|',
    '"',
    ',',
    '.',
    '@',
    '<',
    '>',
    ':',
    ';',
  ];
  for (let i = 0; i < array.length; i += 1) {
    if (userName.includes(array[i])) {
      nameError.textContent = `Invalid character in name: ${array[i]}`;
      nameError.style.boxShadow =
        'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
      nameError.style.backgroundColor = '#ffe0a7';
      return nameError.textContent;
    }
  }
  nameError.textContent = '';
  cvvError.textContent = '';
  numberError.textContent = '';
  cvvError.style.boxShadow = '';
  numberError.style.boxShadow = '';
  nameError.style.boxShadow = '';
  numberError.style.backgroundColor = '';
  cvvError.style.backgroundColor = '';
  nameError.style.backgroundColor = '';

  //! Перевірка ім'я і фімілії на пробіл
  if (!userName.includes(' ')) {
    nameError.textContent = 'Must be a space after the name!';
    nameError.style.boxShadow =
      'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
    nameError.style.backgroundColor = '#ffe0a7';
    return nameError.textContent;
  }
  nameError.textContent = '';
  cvvError.textContent = '';
  numberError.textContent = '';
  cvvError.style.boxShadow = '';
  numberError.style.boxShadow = '';
  nameError.style.boxShadow = '';
  numberError.style.backgroundColor = '';
  cvvError.style.backgroundColor = '';
  nameError.style.backgroundColor = '';

  //! Перевірка на максимальну кількість символів
  if (userNumber.length !== 16) {
    numberError.textContent = 'Must be 16 numbers!';
    numberError.style.boxShadow =
      'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
    numberError.style.backgroundColor = '#ffe0a7';
    return userNumber.textContent;
  }
  nameError.textContent = '';
  cvvError.textContent = '';
  numberError.textContent = '';
  cvvError.style.boxShadow = '';
  numberError.style.boxShadow = '';
  nameError.style.boxShadow = '';
  numberError.style.backgroundColor = '';
  cvvError.style.backgroundColor = '';
  nameError.style.backgroundColor = '';

  //! Перевірка на максимальну кількість символів
  if (userCvv.length !== 3) {
    cvvError.textContent = 'Must be 3 numbers!';
    cvvError.style.boxShadow =
      'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
    cvvError.style.backgroundColor = '#ffe0a7';
    return cvvError.textContent;
  }
  nameError.textContent = '';
  cvvError.textContent = '';
  numberError.textContent = '';
  cvvError.style.boxShadow = '';
  numberError.style.boxShadow = '';
  nameError.style.boxShadow = '';
  numberError.style.backgroundColor = '';
  cvvError.style.backgroundColor = '';
  nameError.style.backgroundColor = '';

  //* Приймаєм аргументи в об'єкт
  const userObj = new User(
    userName.trim(),
    userNumber.trim(),
    userData,
    userCvv.trim()
  );

  console.dir(userObj);

  thankYou.textContent = 'Success!';
  sessionStorage.removeItem('nameOnCard');
  sessionStorage.removeItem('numberOnCard');
  sessionStorage.removeItem('dataOnCard');
}

//todo Створюємо константи інпутів
const inputName = document.querySelector('.input-name');
const inputNumber = document.querySelector('.input-number');
const inputData = document.querySelector('.input-data');

inputName.value = sessionStorage.getItem('nameOnCard');
inputNumber.value = sessionStorage.getItem('numberOnCard');
inputData.value = sessionStorage.getItem('dataOnCard');

//* Прив'язуємо ввід тексту з інпута до карти - name;
inputName.addEventListener('input', nameEventCard);

function nameEventCard(event) {
  const inputNameInside = event.target.value;
  nameOnCard.textContent = inputNameInside;

  sessionStorage.setItem('nameOnCard', event.target.value);
}

//* Прив'язуємо ввід тексту з інпута до карти - number;
inputNumber.addEventListener('input', numberEventCard);

function numberEventCard(event) {
  const maxLength = 16;
  let inputNumberInside = event.target.value.replace(/\s+/g, ''); // Удаляем все пробелы
  if (inputNumberInside.length > maxLength) {
    inputNumberInside = inputNumberInside.slice(0, maxLength);
  }

  // Добавляем пробел после каждого 4-го символа
  inputNumberInside = inputNumberInside.replace(/(.{4})/g, '$1 ');

  numberOnCard.textContent = inputNumberInside.trim(); // Убираем пробел в конце

  sessionStorage.setItem('numberOnCard', event.target.value);
}

//* Прив'язуємо ввід тексту з інпута до карти - data;
inputData.addEventListener('input', dataEventCard);
function dataEventCard(event) {
  const inputDataInside = event.target.value.replace('-', '/');
  dataOnCard.textContent = inputDataInside;
  console.dir(event.target.children);

  sessionStorage.setItem('dataOnCard', event.target.value);
}
