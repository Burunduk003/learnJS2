"use strict";

const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const PersonalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    private: false
};


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

// let i = 0;
// while (i < 2) {
//     const q1 = prompt("Один из последних просмотренных фильмов?", ''),
//     q2 = prompt("На сколько оцените его?", '');
//     i++;
//     if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
//         PersonalMuvieDB.movies[q1] = q2;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }    

// let i = 0;
// do {
//     const q1 = prompt("Один из последних просмотренных фильмов?", ''),
//         q2 = prompt("На сколько оцените его?", '');
//     i++;
//     if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
//         PersonalMuvieDB.movies[q1] = q2;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }    
// } while (i < 2);



if (PersonalMuvieDB.count <= 10) {
        console.log("просмотрено довольно мало фильмов");
    } else if (PersonalMuvieDB.count > 10 && PersonalMuvieDB.count <= 30) {
        console.log("вы классный зритель");
    } else if (PersonalMuvieDB.count > 30) {
        console.log("вы киноман");    
    } else {
        console.log("Произошла ошибка");
    }

    console.log(PersonalMuvieDB);