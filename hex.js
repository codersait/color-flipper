const hexColor = document.querySelector('.color');
const button = document.querySelector('.btn');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

button.addEventListener('click', () => {
  let hexValue = '#';
  let hexButton = '#';

  for (let i = 0; i < 6; i++) {
    hexValue += hex[getRandomNumber()];
    hexButton += hex[getRandomNumber()];
  }

  document.body.style.background = hexValue;
  hexColor.innerText = hexValue;
  button.style.background = hexButton;
});
