'use strict';

const persone = {
    name: 'Alex',
    tel: '+380937632807',
    parants: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

// console.log(JSON.stringify(persone)); // конвертирует данные в нужный формат для передачи на сервер

// console.log(JSON.parse(JSON.stringify(persone))); // конвертирует данные полученные с сервера для дальниейщей работы

const clone = JSON.parse(JSON.stringify(persone)); // глубокая независимая копия объекта.

clone.parants.mom = 'Anna';

console.log(persone);
console.log(clone);