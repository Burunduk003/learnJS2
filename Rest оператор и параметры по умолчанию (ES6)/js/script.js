const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

// rest оператор (...) собирает отдельные сущности в массив, а spread оператор наоборот.

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2;                   старій метод задания параметров по умолчанию;
    console.log(number * basis);
}

calcOrDouble(3);