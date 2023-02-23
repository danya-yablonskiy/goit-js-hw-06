let counterValue = 0;
const refs = {
    btnDecrementEl: document.querySelector('[data-action="decrement"]'),
    valueEl: document.querySelector('#value'),
    btnIncrementEl: document.querySelector('[data-action="increment"]')
}
const {btnDecrementEl, valueEl, btnIncrementEl} = refs;

btnDecrementEl.addEventListener('click', onBtnDecrement);
function onBtnDecrement (){
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

btnIncrementEl.addEventListener('click', onBtnIncrement)
function onBtnIncrement(){
    counterValue += 1;
    valueEl.textContent = counterValue;
}