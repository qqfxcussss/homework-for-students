/*
    Створення інтерфейсу:
    Є об'єкт user. 
    Створити для нього інтерфейс User та призначити його тип об'єкту user.
*/

const user = {
    name: "Іван",
    age: 25
};
    
interface User {
    name: string;
    age: number;
}

const userWithInterface: User = {
    name: "Іван",
    age: 25
};
export {};