const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    remainingSeconds.toString().padStart(2, '0'),
  ].join(':');
};

const createTimerAnimator = () => {
  let intervalId = null;

  return (seconds) => {
    clearInterval(intervalId);
    let currentTime = seconds;

    intervalId = setInterval(() => {
      timerEl.textContent = formatTime(currentTime);
      currentTime = currentTime > 0 ? currentTime - 1 : 0;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  const value = inputEl.value;
  inputEl.value = value.replace(/\D/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});

