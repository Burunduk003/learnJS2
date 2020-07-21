'use strict';
// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes); позволяет получить все узлы HTML документа
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild); // первый элемент тега body
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild); // последний элемент тега body

// console.log(document.querySelector('#current').parentNode.parentNode); // получения родителя элемента с id current, а потом родителя его родителя и тд.
// console.log(document.querySelector('#current').parentElement); // поучение родительского элемента
// console.log(document.querySelector('[data-current="3"]').nextSibling); // получение следующего элемента
// console.log(document.querySelector('[data-current="3"]').previousSibling); // получение предыдущего соседа
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // получение следующего элемента
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); // получение предыдущего элемента

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}