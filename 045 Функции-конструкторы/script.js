'use strict';

// const num = new Number(3);

// console.log(num);

// Функция конструктор, тоесть когда она будет вызвана она создаст новый объект.

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);  // создаем функцию конструктор по сути шаблон на основании которого в последствии можно делать множество копий.
//     };
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`)
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.hello();
// alex.hello();

// ivan.exit();

// console.log(ivan);
// console.log(alex);

// Контекст вызова. This

// function showThis() {
//     console.log(this);
// }

// showThis();

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this); // если внутри данной функции запустить еще одну функцию, то контекст візова будет undefined, так как она уже не относится к объекту
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']); // Методы работают абсолютно одинаково, но имеют разный синтаксис. в эплай передаем массив, а в колл аргументы через запятую

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(13));

// 1) обычная функция: this = window, но если стоит  use strict то будет undefined
// 2) контекст у методов объекта - сам объект;
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) ручная привязка this: call, apply и bind

const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log(this);                          // в таком случае контекст вызова это сам элемент на котором произошло событие.
// });

// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'red';      // в обработчиках событий если мы используем обычную функцию то мы имеем доступ к this (контексту вызова), но если используется стрелочная фунция то this будет undefined                   
// });

btn.addEventListener('click', (e) => {            // тоже самое только через ивент таргет и стрелочную функцию.
    e.target.style.backgroundColor = 'red';                         
});

const obj = {
    num: 5,
    sayNamber: function() {
        const say = () => {
            console.log(this.num);  // у стрелочной функции нет своего контекста вызова, она берет его у родителя, которым будет в данном случае объект.
        };

        say();
    }
};

obj.sayNamber();


// const double = (a) => {
//     return a * 2;
// };
const double = a => a * 2;  // тоже самое что и предыдущий вариант. более короткая и рациональная запись если то что делает функция вмещается в одну строку

console.log(double(4));