'use strict';

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');

// console.log(btns[1]);

// const circles = document.getElementsByClassName('circle');

// console.log(circles);

// const hearts = document.querySelectorAll('.heart');

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');

// console.log(oneHeart);

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');
    

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был вася');

div.classList.add('black');

// document.body.append(div); //добавило div в самый конец тега body

// document.querySelector('.wrapper').append(div); // добавило div в конец тега wrapper без создания переменной wrapper. Можно использовать такой метод если элемент в коде больше использоваться не будет.

wrapper.append(div);

// wrapper.appendChild(div); // устаревший метод. 

// wrapper.prepend(div); // вставляет элемент в начало тега.

// hearts[1].after(div); // вставляет элемент в тег после указанного элемента.

// hearts[1].before(div); // вставляет элемент в тег перерд указанным элементом.

// wrapper.insertBefore(div, hearts[0]); // устаревший метод

// circles[0].remove(); // удаляет єлемент со страницы

// wrapper.removeChild(hearts[1]); // устаревший метод

// hearts[0].replaceWith(circles[0]); заменяет один элемент на другой

// wrapper.replaceChild(circles[0], hearts[0]); // устаревшая команда

div.innerHTML = '<h1>Hello World!</h1>'; // вставляем текс или HTML структуру

// div.textContent = 'Hello'; // вставляет только текс

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // можно вставить код перед элементом, после элемена, в начало элемента и в конец элемента.