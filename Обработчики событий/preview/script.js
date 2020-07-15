'use strict';
// onclick="alert('Click')" обработчик событий непосредственно в HTML коде.
const btns = document.querySelectorAll('button'),
        overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('second click');  такой способ не рекомендуется использовать, так как при повторном обращении к элементу первое взаимодействие исчезает. Это может сломать скрипт. Кроме того удалить такой обработчик не получится.
// };

// btn.addEventListener('click', () => {
//     alert('сейчас кнопка исчезнет :)');
// });

// btn.addEventListener('click', (event) => {
//     console.log(event.target);
//     event.target.remove();
// });
// let i = 0;
const deleteElement = (event) => {
    console.log(event.currentTarget);  // всплытие событий это когда обработчик событий срабатывает вначале на самом вложенном элементе, а потом поднимается выше по иерархии.
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
});