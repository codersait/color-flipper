const color = document.querySelector('.color');
const button = document.querySelector('.btn');
const copyButton = document.getElementById('copy');
copyButton.value = '#F1f5f8'

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let count = 0;

function getHexRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}
const generateRGB = () => {
  return `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
};

button.addEventListener('click', () => {
  if (count % 2 !== 0) {
    let hexValue = '#';
    let hexButton = '#';

    for (let i = 0; i < 6; i++) {
      hexValue += hex[getHexRandomNumber()];
      hexButton += hex[getHexRandomNumber()];
    }

    document.body.style.background = hexValue;
    color.innerText = hexValue;
    button.style.background = hexButton;
    copyButton.value = hexValue
    count++;
  } else {
    document.body.style.background = generateRGB();
    color.innerText = document.body.style.background;
    copyButton.value = document.body.style.background;
    button.style.background = generateRGB();
    count++;
  }
});

copyButton.addEventListener('click', () => {
  // copyButton.value = document.body.style.backgroundColor;
  console.log(copyButton.value);
  copyButton.select();
  document.execCommand('copy')

})

