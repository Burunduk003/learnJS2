/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();

const RemoveAdvertising = document.querySelectorAll('.promo__adv img'),
    ChahgeBackground = document.querySelector('.promo__bg'),
    ChahgeGenre = ChahgeBackground.querySelector('.promo__genre'),
    moviesList = document.querySelector('.promo__interactive-list');

RemoveAdvertising.forEach(item => {
    item.remove();
});
ChahgeGenre.textContent = 'ДРАМА';
// ChahgeBackground.innerHTML = '<img src="img/bg.jpg" alt="марсианин" height="360"; title="картинка">';
// ChahgeBackground.style.cssText = 'background: url('../img/bg.jpg')';
ChahgeBackground.style.backgroundImage = 'url("img/bg.jpg")';

moviesList.innerHTML = "";

movieDB.movies.forEach((film, i) => {
    moviesList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});

// a = a + 1;
// a += 1; дополнительное присваивание. Данные записи идентичны.