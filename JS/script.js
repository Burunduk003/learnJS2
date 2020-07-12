"use strict";

const PersonalMuvieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    askNumberOfFilms: function () {
        PersonalMuvieDB.count = +prompt('сколько фильмов вы уже посмотрели?', '');

        while(PersonalMuvieDB.count == '' || PersonalMuvieDB.count == null || isNaN(PersonalMuvieDB.count)) {
            PersonalMuvieDB.count = +prompt('сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const q1 = prompt("Один из последних просмотренных фильмов?", ''),
                  q2 = prompt("На сколько оцените его?", '');
        
            if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
                PersonalMuvieDB.movies[q1] = q2;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }

    },
    detectPersonalLevel: function () {
        if (PersonalMuvieDB.count <= 10) {
            console.log("просмотрено довольно мало фильмов");
        } else if (PersonalMuvieDB.count > 10 && PersonalMuvieDB.count <= 30) {
            console.log("вы классный зритель");
        } else if (PersonalMuvieDB.count > 30) {
            console.log("вы киноман");    
        } else {
            console.log("Произошла ошибка");
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            // if (genre == null || genre === '') {
            //     console.log('вы ввели некоректные данные или оставили строку пустой');
            //     i--;
            // } else {
            //     PersonalMuvieDB.genres[i - 1] = genre;            
            // }
            let genres = prompt('введите ваши любимые жанры через запятую').toLowerCase();
            if (genres == null || genres === '') {
                console.log('вы ввели некоректные данные или оставили строку пустой');
                i--;
            } else {
                PersonalMuvieDB.genres = genres.split(', ');
                PersonalMuvieDB.genres.sort();
            }
        PersonalMuvieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });              
        }       
    },
    toggleVisibleMyDB: function () {
        if (PersonalMuvieDB.private) {
            PersonalMuvieDB.private = false;
        }else{
            PersonalMuvieDB.private = true;
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(PersonalMuvieDB);
        }
    }
};