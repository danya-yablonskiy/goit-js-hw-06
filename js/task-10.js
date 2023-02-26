function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtlEl = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes');



const arrayEl = [];
createBtnEl.addEventListener('click', onBtnClickCreateAmount);

function onBtnClickCreateAmount () {
  createBoxes(inputEl.value)
}

function createBoxes(amount){
for (let i = 0; i < amount; i++) {
  const divEl = document.createElement('div');
  divEl.width = `${20+amount*10}px`;
  divEl.height = `${20+amount*10}px`;
  divEl.style.backgroundColor = getRandomHexColor();
  arrayEl.push(divEl);
}
 boxEl.append(...arrayEl);
}

