//* Const from card

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

//* Const from FORM
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
  //! Перевірка на символи
  for (let i = 0; i < array.length; i += 1) {
    if (userName.includes(array[i])) {
      nameError.textContent = `Invalid character in name: ${array[i]}`;
      return nameError.textContent;
    }
  }
  nameError.textContent = '';
  //! Перевірка ім'я і фімілії на пробіл
  if (!userName.includes(' ')) {
    nameError.textContent = 'Must be a space after the name!';
    return nameError.textContent;
  }
  nameError.textContent = '';
  //! Перевірка на максимальну кількість символів
  if (userNumber.length !== 16) {
    numberError.textContent = 'Must be 16 numbers!';
    return userNumber.textContent;
  }
  numberError.textContent = '';
  //! Перевірка на максимальну кількість символів
  if (userCvv.length !== 3) {
    cvvError.textContent = 'Must be 3 numbers!';
    return cvvError.textContent;
  }
  cvvError.textContent = '';
  const userObj = new User(
    userName.trim(),
    userNumber.trim(),
    userData,
    userCvv.trim()
  );
  console.dir(userObj);

  thankYou.textContent = 'Success!';
}

const inputName = document.querySelector('.input-name');
const inputNumber = document.querySelector('.input-number');
const inputData = document.querySelector('.input-data');

inputName.addEventListener('input', nameEventCard);

function nameEventCard(event) {
  const inputNameInside = event.target.value;
  nameOnCard.textContent = inputNameInside;
}

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
}

inputData.addEventListener('input', dataEventCard);

function dataEventCard(event) {
  const inputDataInside = event.target.value;
  dataOnCard.textContent = inputDataInside;
}
