"use strict";

const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const PersonalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    private: false
};

const q = prompt("Один из последних просмотренных фильмов?", ''),
    q2 = prompt("На сколько оцените его?", ''),
    q1 = prompt("Один из последних просмотренных фильмов?", ''),
    q4 = prompt("На сколько оцените его?", '');

PersonalMuvieDB.movies[q] = q2;
PersonalMuvieDB.movies[q1] = q4;

console.log(PersonalMuvieDB);