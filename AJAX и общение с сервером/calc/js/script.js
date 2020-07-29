'use strict';

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    //request.open(method, url, async, lodin, password); // метод open и его аргументы)))

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = 'Что-то пошло не так';
    //     }
    // });

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });

// Свойства:
    // status свойство которое показывает статус запроса
    // statusText техтовое описание ответа от сервера
    // response ответ от сервера
    // readyState текущее состояние запроса

//События:
    // readystatechange отслеживает готовность нашего запроса в данный текущий момент
    // load срабатывает когда наш запрос полностью загрузился

});