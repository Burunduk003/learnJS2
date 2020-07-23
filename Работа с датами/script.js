'use strict';

// const now = new Date();

// const now = new Date('2020-07-21');

// const now = new Date(2020, 7, 21, 20);

// const now = new Date(0); // 1970г если нужна дата раньше используют отрицательные значения.

// const now = new Date();


// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset()); // выдает разницу между текущим часовым поясом и UTC в минутах
// console.log(now.getTime()); // выдает время в милисекундах прошедшее с января 1970г

// console.log(now.setHours(18));
// console.log(now);

// new Date.parse('2020-07-21');

let start = new Date();

for (let i = 0; i < 1000000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end-start} милисикунд`);