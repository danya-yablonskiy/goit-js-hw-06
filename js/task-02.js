const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
const elements = [];
ingredients.forEach(value =>{
const listItem = document.createElement('li');
listItem.textContent = value;
listItem.classList = 'item';
elements.push(listItem);
})
list.append(...elements);