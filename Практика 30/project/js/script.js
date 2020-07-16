'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
      
    const RemoveAdvertising = document.querySelectorAll('.promo__adv img'),
        ChahgeBackground = document.querySelector('.promo__bg'),
        ChahgeGenre = ChahgeBackground.querySelector('.promo__genre'),
        moviesList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),  // форма с классом add
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, moviesList);
        }
        event.target.reset();
    });      
    
    const deleteAdv = (Advertising) => {
        Advertising.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        ChahgeGenre.textContent = 'ДРАМА';
        ChahgeBackground.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });

    }

    deleteAdv(RemoveAdvertising);
    makeChanges();
    createMovieList(movieDB.movies, moviesList);

    // a = a + 1;
    // a += 1; дополнительное присваивание. Данные записи идентичны.
});