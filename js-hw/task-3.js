/*
    Сума чисел:
    Дано масив чисел [1, 2, 2, 3, 4, 4]. 
    Знайти суму.
*/

const numbers = [1, 2, 2, 3, 4, 4];

const sum = numbers.reduce((acc, current) => acc + current, 0);

console.log("Сума чисел:", sum);