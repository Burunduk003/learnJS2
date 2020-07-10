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

const num = 12.2;
console.log(Math.round(num));

const test ='12.2px';
// console.log(parseInt(test));
console.log(parseFloat(test));