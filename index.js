const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let timer;
  let hours = 0;
  let minutes = 0;

  let timeHours;
  let timeMinutes;
  let timeSeconds;
  return (seconds) => {
    // При каждом запуске функции происходит очистка предыдущего интервала

    clearInterval(timer);

    timer = setInterval(() => {
      seconds += 1
      minutes = Math.floor(seconds/60);
      hours = Math.floor(minutes/60);
      timeSeconds = seconds % 60;
      timeMinutes = minutes % 60;

      // Переменные для вывода в формате hh:mm:ss
      // Без них был бы вывод в формате h:m:s

      timeHours = hours < 10 ? "0" + hours : hours;
      timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
      timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;
      timerEl.innerText = `${timeHours}:${timeMinutes}:${timeSeconds}`;
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();


// Фильтрация input'a. В него будут попадать только числа
inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.split('')
  .filter(el => Number(el) || Number(el) === 0)
  .join('')
});

buttonEl.addEventListener('click', () => {
  // Если число не введено, то по умолчанию будет вводиться 0
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
