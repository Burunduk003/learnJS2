'use strict';

const box = document.querySelector('.box');
    btn = document.querySelector('button')

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

// btn.addEventListener('click', () => {
//     box.style.height = box.scrollHeight + 'px';
// });

btn.addEventListener('click', () => {
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top); // получение всех координат элемента; .top получение верхнего отступа

const style = window.getComputedStyle(box);

console.log (style.display);

console.log(document.documentElement.clientWidth);

console.log(document.documentElement.scrollTop);

window.scrollBy(0, 400); // отсчитывает скрол от текущего местоположения

window.scrollTo(0, 400); // отсчитывает скрол от верха страницы