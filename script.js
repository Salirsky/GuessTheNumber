"Use strict";

let guessTheNumber = function () {
  let x = 66;
  let userNumb = prompt("Угадай число от 1 до 100");

  if (userNumb === null || userNumb === "") {
    alert("Игра окончена");
  } else if (userNumb == x) {
    alert("Поздравляю, вы угадали!");
  } else if (userNumb > x) {
    alert("Загаданное число меньше, попробуйте снова");
    return guessTheNumber();
  } else if (userNumb < x) {
    alert("Загаданное число больше, попробуйте снова");
    return guessTheNumber();
  } else if (!(!Number.isNaN(parseFloat(userNumb)) && isFinite(userNumb))) {
    alert("Введите число");
    return guessTheNumber();
  } else {
    alert("Хьюстон, у нас проблемы");
  }
};

guessTheNumber();
