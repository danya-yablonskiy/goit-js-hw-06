const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);

const titleEl = document.querySelectorAll('.item > h2');
const subList = document.querySelectorAll('.item > ul');

for (let i = 0; i < subList.length; i++) {
console.log(`Category: ${titleEl[i].textContent}`);
console.log(`Elements: ${subList[i].children.length}`);
}
