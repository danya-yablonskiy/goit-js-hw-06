const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imageGallery = document.querySelector('.gallery');
// Чи можна зробити таким методом і як уникнути два рази append?
// images.forEach( image => {
//   const itemEl =  document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   itemEl.append(imageEl);
//   imageGallery.append(itemEl);
//   imageEl.width = 480;
//   imageEl.height = 320;
//   itemEl.classList = 'item';
// })
// Не до кінця розумію як це працює, через map ми ж просто отримуємо значення з масиву, як чином воно додає всю стрічку?
const imageEl = images.map(image => `<li class ='gallery__item'><img src=${image.url} alt=${image.alt}></li>`).join('');
imageGallery.insertAdjacentHTML('beforeend', imageEl);