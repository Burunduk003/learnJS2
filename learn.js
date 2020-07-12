"use strict";

//console.log(1)

// let number = 5;
// const leftBorderWidth = 1;

// const obj = {
//     a: 50
// };

// obj.a = 10;
// console.log(obj);

// alert("Hello");

// const result = confirm("are you here?");
// console.log(result);

// const answer = prompt("вам есть 18?", "Да");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('как ваше имя?', '');
// answers[1] = prompt('ваша фамилия?', '');
// answers[2] = prompt('сколько вам лет?', '');

// document.write(answers);

// console.log(typeof(answers));

// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';

// alert(`Привет, ${user}`);

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(incr++);
// console.log(decr--);

// console.log(5%2);

// = присваивание
// == равенство
// === строгое равенство (с учетом типа данных)

// const isChacked = false,
//       isClose = true;
// console.log(isChacked || isClose);

// if (4 == 9) {
//     console.log("ok");
// } else {
//     console.log("error");
// }

// const num = 50;

// if (num < 49) {
//     console.log("error");
// } else if (num > 100) {
//     console.log("много");
// } else {
//     console.log("ок!");
// }

// (num === 50) ? console.log('ok!') : console.log("error");

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('error');
//         break;
//     case 100:
//         console.log('error');
//         break;    
//     case 51:
//         console.log('Ok!')    
//         break;
//     default:
//         console.log('не в этот раз!');
//         break;    
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         //break;
//         continue;
//     }
//     console.log(i);
// }
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
// }

// showFirstMessage("Hello World");
// console.log(num);

// Замыкание функции это функция со всеми доступными ей переменными

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));
// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNam = ret();
// console.log(anotherNam);

// const logger = function() {
//     console.log('Hello');
// };

// logger();

// const calc = (a, b) => (a + b);

// const str = 'text';
// console.log(str.length);

// const arr = [1, 2, 4];
// console.log(arr.length);

// const str = 'text';
// console.log(str[2]);

// const str = 'text';
// console.log(str.toLocaleUpperCase());

// const fruit = 'Some fruit';
// console.info(fruit.indexOf('fruit'));

// const logg = 'Hello World';
// console.log(logg.slice(6, 11));
// console.log(logg.slice(-11, -6));

// const logg = 'Hello World';
// console.log(logg.substring(6, 11)); тоже самое что и slice но не поддерживает отрецательных значений

// const logg = 'Hello World';
// console.log(logg.substr(6, 5)); тут мы указывает с какого символа начать и сколько символов вырезать

// const num = 12.2;
// console.log(Math.round(num));

// const test ='12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

// function first() {
//     // do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, collback) {
//     console.log(`я учу: ${lang}`);
//     collback();
// }

// learnJS('javaScript', function(){
//     console.log('я прошел этот урок');
// });

// function done() {
//     console.log('я прошел этот урок!');
// }

// learnJS('javaScript', done);

// const obj = new Object();

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('test');
//     }

// };

// options.makeTest();

// const {border, bg} = options.colors;

// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options['colors']['bg']);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     }else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }    
    
// }

// console.log(counter);
// конструкция for in для перебора свойств внутри объекта


// const arr = [1, 26, 13, 6, 8];

// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;                  // сортировка чисел по мат. логике
// }


// arr[99] = 0;
// console.log(arr.length); берет интдекс последнего элемента массива +1
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)  //перебор массива
// });

// arr.pop(); // убирает последний элемент из массива
// arr.push(10); // добавляет элемент в конец массива

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('', '');

// const products = str.split(', '); //получаем массив из введенных данных
//console.log(products);
// products.sort(); //сортирует по алфавиту только если элементы массива строки.

// console.log(products.join(' ;')); // объеденяем данные из массива в строку

// let a = 5,
//     b = a;
// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // передает не сам объект а ссылку на него

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const NewNumbers = copy(numbers);

// NewNumbers.a = 10;
// NewNumbers.c.x = 10;

// console.log(NewNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add)); //соединяем 2 объекта;

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(clone);
// console.log(add);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); // копирование массива

// newArray[1] = 'abcdefghijklmnop';

// console.log(newArray);
// console.log(oldArray);

// оператор разворота (spread operator)

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejornal', 'bloggr'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);   

// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// newObj.two = 12;

// console.log(newObj);
// console.log(q);

let str = 'some';

let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100,
// };

// john.__proto__ = soldier; //прорадителем объекта джон является объект солдат (устаревшая форма записи)

// Object.setPrototypeOf(john, soldier); // современная запись

// console.log(john.armor);

john.sayHello();