
// const listEl = document.querySelector('#categories');
// const itemEl = document.querySelectorAll('.item');

// console.log(`Number of categories: ${itemEl.length}`);

// listEl.forEach(element => {
//     console.log(`Category: ${listEl.firstElementChild.textContent}`);
//     console.log(`Elements: ${listEl.lastElementChild.length}`);
// });


const listEl = document.querySelector('#categories');
const itemEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});
