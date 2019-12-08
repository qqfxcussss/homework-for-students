/*
    Обов'язкові й необов'язкові поля:
    Створи інтерфейс Product з ключами:
    title (string), price (number), description (string, необов'язковий) 
    та призначити його тип об'єкту product.
*/

const product = {
    title: "Телефон",
    price: 1000
};
 
interface Product {
    title: string;
    price: number;
    description?: string;
}

const productWithInterface: Product = {
    title: "Телефон",
    price: 1000
};
export {};