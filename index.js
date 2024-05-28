// Завдання 1
/**
 * Функція `getDateDetails` отримує об'єкт дати та повертає об'єкт з деякими деталями про дату.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт, який містить такі властивості:
 *  year - рік,
 *  month - місяць,
 *  day - день місяця.
 */
function getDateDetails(date) {
  if (!(date instanceof Date)) {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return { year, month, day };
}

console.log("Завдання: 1 ==============================");
const now = new Date("2023-12-25T00:00:00Z");
console.log(getDateDetails(now));
// Виведе { year: 2023, month: 11, day: 25 }


// Завдання 2
/**
 * Функція `setDateDetails` приймає об'єкт Date і рядок ISO дати, і встановлює дату з ISO рядка в об'єкт Date.
 *
 * date - Об'єкт Date, в який потрібно встановити дату.
 * isoString - Рядок дати в форматі ISO.
 *
 * Повертає об'єкт Date з встановленою датою, якщо вхідні дані вірні. Якщо ні, виводить повідомлення про помилку.
 */
function setDateDetails(date, isoString) {
  if (!(date instanceof Date)) {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const parsedDate = Date.parse(isoString);
  if (isNaN(parsedDate)) {
    return "Помилка: недійсний ISO рядок";
  }

  date.setTime(parsedDate);
  return date;
}

console.log("Завдання: 2 ==============================");
const currentDate = new Date();
console.log(setDateDetails(currentDate, "2023-12-25T00:00:00Z"));
// Виведе 2023-12-25T00:00:00.000Z


// Завдання 3
/**
 * Функція `dateToUTC` приймає об'єкт Date та повертає рядок, що представляє дату в UTC форматі.
 *
 * date - Об'єкт Date.
 *
 * Повертає рядок з датою в UTC форматі, якщо вхідне значення є дійсним об'єктом Date. Якщо ні, виводить повідомлення про помилку.
 */
function dateToUTC(date) {
  if (!(date instanceof Date)) {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  return date.toUTCString();
}

console.log("Завдання: 3 ==============================");
console.log(dateToUTC(new Date()));
// Виведе Tue, 27 Jun 2023 07:15:47 GMT


// Завдання 4
/**
 * Функція `setSpecificTime` приймає об'єкт Date та встановлює конкретний час.
 *
 * date - Об'єкт Date.
 * hours - Кількість годин.
 * minutes - Кількість хвилин.
 * seconds - Кількість секунд.
 * milliseconds - Кількість мілісекунд.
 *
 * Повертає об'єкт Date з встановленим часом, якщо вхідні дані вірні. Якщо ні, виводить повідомлення про помилку.
 */
function setSpecificTime(date, hours, minutes, seconds, milliseconds) {
  if (!(date instanceof Date)) {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);
  date.setMilliseconds(milliseconds);

  return date;
}

console.log("Завдання: 4 ==============================");
console.log(
  setSpecificTime(new Date("2023-12-25T00:00:00.000Z"), 12, 30, 0, 0)
);
// Виведе 2023-12-25T09:30:00.000Z


// Завдання 5

/**
 * Функція `nextNewYear` приймає об'єкт Date і повертає час до наступного Нового року.
 *
 *
 * Повертає об'єкт з інформацією про час до наступного Нового року:
 * {
 *   days: // Кількість днів до Нового року.
 *   hours: // Кількість годин до Нового року, не включаючи повні дні.
 *   minutes: // Кількість хвилин до Нового року, не включаючи повні години.
 *   seconds: // Кількість секунд до Нового року, не включаючи повні хвилини.
 *   milliseconds: // Кількість мілісекунд до Нового року, не включаючи повні секунди.
 * }
 */
function nextNewYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const nextYear = new Date(currentYear + 1, 0, 1);
  const diff = nextYear - currentDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  const milliseconds = diff % 1000;

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
}

console.log("Завдання: 5 ==============================");
console.log(nextNewYear());
// Виведе об'єкт з інформацією про час до наступного Нового року


// Завдання 6
/**
 * Функція `isLeapYear` перевіряє, чи є рік високосним.
 *
 * year - Рік, який треба перевірити.
 *
 * Повертає об'єкт:
 * {
 *   year: // Рік, який був перевірений.
 *   isLeap: // Чи є рік високосним.
 * }
 */
function isLeapYear(year) {
  if (isNaN(year) || !Number.isInteger(year)) {
    return "Помилка: вхідне значення має бути числом";
  }

  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  return {
    year,
    isLeap,
  };
}

console.log("Завдання: 6 ==============================");
console.log(isLeapYear(2020));
// Виведе { year: 2020, isLeap: true }


// Завдання 7
/**
 * Функція `addDays` додає задану кількість днів до вказаної дати.
 *
 * date - Об'єкт Date.
 * days - Кількість днів, які треба додати.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   addedDays: // Кількість доданих днів.
 *   resultDate: // Результуюча дата в форматі 'гггг-мм-дд'.
 * }
 */
function addDays(date, days) {
  if (!(date instanceof Date)) {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  if (isNaN(days) || !Number.isInteger(days)) {
    return "Помилка: кількість днів має бути числом";
  }

  const inputDate = date.toISOString().split('T')[0]; // Початкова дата в форматі 'гггг-мм-дд'.

  date.setDate(date.getDate() + days); // Додавання заданої кількості днів до дати.

  const resultDate = date.toISOString().split('T')[0]; // Результуюча дата в форматі 'гггг-мм-дд'.

  return {
    inputDate,
    addedDays: days,
    resultDate,
  };
}

console.log("Завдання: 7 ==============================");
console.log(addDays(new Date("2023-01-01"), 7));
// Виведе об'єкт з поточною датою, кількістю доданих днів та результуючою датою


// Завдання 8
/**
 * Функція `getDayOfWeek` повертає день тижня вказаної дати українською мовою.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   dayOfWeek: // День тижня українською мовою.
 * }
 */
let daysOfWeek = [
  "неділя",
  "понеділок",
  "вівторок",
  "середа",
  "четвер",
  "п’ятниця",
  "субота",
];

function getDayOfWeek(date) {
  if (!(date instanceof Date)) {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const inputDate = date.toISOString().split('T')[0]; // Початкова дата в форматі 'гггг-мм-дд'.

  const dayOfWeekIndex = date.getDay(); // Отримання дня тижня як числа (0 - неділя, 1 - понеділок, ..., 6 - субота).
  const dayOfWeek = daysOfWeek[dayOfWeekIndex]; // Отримання назви дня тижня з масиву daysOfWeek за індексом.

  return {
    inputDate,
    dayOfWeek,
  };
}

console.log("Завдання: 8 ==============================");
console.log(getDayOfWeek(new Date("2023-01-01")));
// Виведе об'єкт з початковою датою та днем тижня українською мовою


// Завдання 9
/**
 * Функція `getDaysInMonth` повертає кількість днів у місяці вказаної дати.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   daysInMonth: // Кількість днів у місяці.
 * }
 */
function getDaysInMonth(date) {
  if (!(date instanceof Date)) {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const inputDate = date.toISOString().split('T')[0]; // Початкова дата в форматі 'гггг-мм-дд'.
  const currentMonth = date.getMonth(); // Отримання поточного місяця.
  const currentYear = date.getFullYear(); // Отримання поточного року.
  
  const firstDayNextMonth = new Date(currentYear, currentMonth + 1, 1); // Створення об'єкта Date для першого дня наступного місяця.
  const lastDayCurrentMonth = new Date(firstDayNextMonth - 1); // Віднімання одного дня від наступного місяця, щоб отримати останній день поточного місяця.
  const daysInMonth = lastDayCurrentMonth.getDate(); // Отримання числа останнього дня поточного місяця - це кількість днів у місяці.

  return {
    inputDate,
    daysInMonth,
  };
}

console.log("Завдання: 9 ==============================");
console.log(getDaysInMonth(new Date("2023-02-01")));
// Виведе об'єкт з початковою датою та кількістю днів у місяці


// Завдання 10
/**
 * Функція `getFormattedTime` повертає час в форматі 'гг:хх:сс'.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   formattedTime: // Час в форматі 'гг:хх:сс'.
 * }
 */
function getFormattedTime(date) {
  if (!(date instanceof Date)) {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const inputDate = date.toISOString().split('T')[0]; // Початкова дата в форматі 'гггг-мм-дд'.
  const hours = date.getHours(); // Отримання годин.
  const minutes = date.getMinutes(); // Отримання хвилин.
  const seconds = date.getSeconds(); // Отримання секунд.
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`; // Форматування часу у вигляді 'гг:хх:сс'.

  return {
    inputDate,
    formattedTime,
  };
}

console.log("Завдання: 10 ==============================");
console.log(getFormattedTime(new Date("2023-12-25T09:30:00.000Z")));
// Виведе об'єкт з початковою датою та отформатованим часом


// Завдання 11
/**
 * Функція `getAge` обчислює вік на підставі вказаної дати народження.
 *
 * birthDate - Об'єкт Date, представляє дату народження.
 *
 * Повертає об'єкт:
 * {
 *   birthDate: // Дата народження в форматі 'гггг-мм-дд'.
 *   age: // Обчислений вік.
 * }
 */
function getAge(birthDate) {
  if (!(birthDate instanceof Date)) {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const currentDate = new Date(); // Получение текущей даты.
  const age = currentDate.getFullYear() - birthDate.getFullYear(); // Вычисление разницы в годах между текущей датой и датой рождения.
  
  // Проверка, если день рождения еще не наступил в этом году, уменьшаем возраст на 1.
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  const birthDateString = birthDate.toISOString().split('T')[0]; // Дата народження в форматі 'гггг-мм-дд'.

  return {
    birthDate: birthDateString,
    age: age,
  };
}

console.log("Завдання: 11 ==============================");
console.log(getAge(new Date("1990-05-15")));
// Выведет объект с датой рождения и вычисленным возрастом


// Завдання 12
/**
 * Функція `compareDates` порівнює дві дати і повертає результат порівняння.
 *
 * date1 - Об'єкт Date.
 * date2 - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   date1: // Перша дата в форматі 'гггг-мм-дд'.
 *   date2: // Друга дата в форматі 'гггг-мм-дд'.
 *   comparison: // Результат порівняння: -1, якщо date1 < date2, 0, якщо date1 === date2, 1, якщо date1 > date2.
 * }
 */
function compareDates(date1, date2) {
  if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const date1String = date1.toISOString().split('T')[0]; // Перша дата в форматі 'гггг-мм-дд'.
  const date2String = date2.toISOString().split('T')[0]; // Друга дата в форматі 'гггг-мм-дд'.
  
  let comparison = 0; // Изначально считаем, что даты равны.

  if (date1 < date2) {
    comparison = -1; // Если date1 < date2, устанавливаем -1.
  } else if (date1 > date2) {
    comparison = 1; // Если date1 > date2, устанавливаем 1.
  }

  return {
    date1: date1String,
    date2: date2String,
    comparison: comparison,
  };
}

console.log("Завдання: 12 ==============================");
console.log(compareDates(new Date("2023-01-01"), new Date("2022-12-31")));
// Выведет объект с двумя датами и результатом сравнения


// Завдання 13
/**
 * Функція `getDaysDifference` обчислює різницю в днях між двома датами.
 *
 * startDate - Початкова дата.
 * endDate - Кінцева дата.
 *
 * Повертає об'єкт:
 * {
 *   startDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   endDate: // Кінцева дата в форматі 'гггг-мм-дд'.
 *   daysDifference: // Різниця в днях між двома датами.
 * }
 */
function getDaysDifference(startDate, endDate) {
  if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  const startDateString = startDate.toISOString().split('T')[0]; // Початкова дата в форматі 'гггг-мм-дд'.
  const endDateString = endDate.toISOString().split('T')[0]; // Кінцева дата в форматі 'гггг-мм-дд'.
  
  const differenceInMilliseconds = endDate - startDate; // Разница в миллисекундах между двумя датами.
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)); // Перевод разницы в днях.
  
  return {
    startDate: startDateString,
    endDate: endDateString,
    daysDifference: differenceInDays,
  };
}

console.log("Завдання: 13 ==============================");
console.log(getDaysDifference(new Date("2023-01-01"), new Date("2023-01-10")));
// Выведет объект с двумя датами и разницей в днях между ними

