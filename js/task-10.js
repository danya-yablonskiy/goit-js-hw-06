function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtlEl = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes');




createBtnEl.addEventListener('click', onBtnClickCreateAmount);

function onBtnClickCreateAmount () {
  createBoxes(inputEl.value)
}

function createBoxes(amount){
  const arrayEl = [];
for (let i = 1; i <= amount; i++) {
  const divEl = document.createElement('div');
  divEl.style.width = `${20+i*10}px`;
  divEl.style.height = `${20+i*10}px`;
  divEl.style.backgroundColor = getRandomHexColor();
  arrayEl.push(divEl);
}
 boxEl.append(...arrayEl);
}

destroyBtlEl.addEventListener('click', destroyBoxes);

function destroyBoxes(){
  boxEl.innerHTML = '';
}