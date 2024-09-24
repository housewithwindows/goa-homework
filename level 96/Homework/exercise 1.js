
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person);  // { name: 'John', age: 30, city: 'New York' }



console.log(person.name);  // "John"
console.log(person.city);  // "New York"



const { name, age } = person;
console.log(name, age);  // "John" 30



let student = {
    name: "Sarah",
    age: 22,
    address: {
        city: "Los Angeles",
        country: "USA"
    }
};
const { address: { city, country } } = student;
console.log(city, country);  // "Los Angeles" "USA"



let product = {
    name: "Laptop",
    price: 1000
};
const { name: productName, category = "general" } = product;
console.log(productName, category);  // "Laptop" "general"



function displayCar({ brand, model, year }) {
    console.log(`Brand: ${brand}, Model: ${model}, Year: ${year}`);
}
displayCar({ brand: "Toyota", model: "Corolla", year: 2020 });  // Brand: Toyota, Model: Corolla, Year: 2020



let book = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    publisher: "Secker & Warburg"
};
const { year, publisher, ...details } = book;
console.log(details);  // { title: '1984', author: 'George Orwell' }



let user = {
    name: "Alice",
    age: 28
};
let location = {
    city: "Paris",
    country: "France"
};
let userDetails = { ...user, ...location };
console.log(userDetails);  // { name: 'Alice', age: 28, city: 'Paris', country: 'France' }



function sumNumbers(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumNumbers(1, 2, 3, 4, 5));  // 15



let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let combinedNumbers = [...numbers1, ...numbers2];
console.log(combinedNumbers);  // [1, 2, 3, 4, 5, 6]
