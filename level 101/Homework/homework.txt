// ------------------- Classes-ის შესახებ -------------------

// 1. კლასის შექმნა და ინიციალიზაცია
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user1 = new User("John Doe", "john@example.com");
const user2 = new User("Jane Smith", "jane@example.com");

// 2. მეთოდის შექმნა და გამოძახება
User.prototype.displayInfo = function() {
  console.log(`Name: ${this.name}, Email: ${this.email}`);
};

user1.displayInfo(); // Name: John Doe, Email: john@example.com
user2.displayInfo(); // Name: Jane Smith, Email: jane@example.com

// 3. სტატიკური მეთოდების გამოყენება
User.compareUsers = function(user1, user2) {
  return user1.email === user2.email;
};

console.log(User.compareUsers(user1, user2)); // false

// 4. Getters და Setters
class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (value > 0) {
      this._price = value;
    } else {
      console.log("Price must be positive!");
    }
  }
}

const product1 = new Product("Laptop", 1200);
console.log(product1.price); // 1200
product1.price = -300; // Price must be positive!
console.log(product1.price); // 1200

// 5. მემკვიდრეობა და კონსტრუქტორების მემკვიდრეობა
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }
}

const student1 = new Student("Alice", 20, "S12345");
console.log(student1); // Student { name: 'Alice', age: 20, studentID: 'S12345' }

// 6. Method Overriding
Person.prototype.getDetails = function() {
  return `Name: ${this.name}, Age: ${this.age}`;
};

Student.prototype.getDetails = function() {
  return `${super.getDetails()}, Student ID: ${this.studentID}`;
};

console.log(student1.getDetails()); // Name: Alice, Age: 20, Student ID: S12345

// 7. Privileged მეთოდები
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient funds!");
    } else {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
    }
  }
}

const account = new BankAccount(500);
account.deposit(200); // Deposited 200. New balance: 700
account.withdraw(1000); // Insufficient funds!

// 8. Protected თვისებები და მემკვიდრეობა
class Appliance {
  constructor(power) {
    this._power = power; // protected
  }
}

class WashingMachine extends Appliance {
  constructor(power, model) {
    super(power);
    this.model = model;
  }

  showDetails() {
    console.log(`Washing Machine Model: ${this.model}, Power: ${this._power}`);
  }
}

const wm = new WashingMachine(1500, "LG-X500");
wm.showDetails(); // Washing Machine Model: LG-X500, Power: 1500

// 9. Static თვისებები და მეთოდები
class Counter {
  static count = 0;

  static increment() {
    this.count++;
  }
}

Counter.increment();
Counter.increment();
console.log(Counter.count); // 2

// 10. კლასების მასივი
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const books = [
  new Book("1984", "George Orwell"),
  new Book("Brave New World", "Aldous Huxley"),
  new Book("Fahrenheit 451", "Ray Bradbury")
];

books.forEach(book => console.log(book.title)); 
// Output:
// 1984
// Brave New World
// Fahrenheit 451

// ------------------- Maps-ის შესახებ -------------------

// 1. Map-ის ინიციალიზაცია მონაცემებით
const cityPopulation = new Map([
  ["New York", 8419600],
  ["Los Angeles", 3980400],
  ["Chicago", 2716000]
]);

// 2. Map-ის ელემენტის განახლება
cityPopulation.set("New York", 8500000);

// 3. Map-ის `for...of` ციკლი
const currencyMap = new Map([
  ["USD", "Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound"]
]);

for (let [code, name] of currencyMap) {
  console.log(`${code}: ${name}`);
}

// 4. მრავალი Map-ის გაერთიანება
const productPrices = new Map([
  ["Apple", 1.2],
  ["Banana", 0.8],
  ["Orange", 1.5]
]);

const productQuantities = new Map([
  ["Apple", 10],
  ["Banana", 5],
  ["Orange", 8]
]);

const totalPrices = new Map();
productPrices.forEach((price, product) => {
  const quantity = productQuantities.get(product) || 0;
  totalPrices.set(product, price * quantity);
});

console.log(totalPrices); // Map { 'Apple' => 12, 'Banana' => 4, 'Orange' => 12 }

// 5. Map-ის კლონი
const countryCapitals = new Map([
  ["USA", "Washington, D.C."],
  ["France", "Paris"],
  ["Japan", "Tokyo"]
]);

const clonedMap = new Map(countryCapitals);
console.log(clonedMap); // Map { 'USA' => 'Washington, D.C.', 'France' => 'Paris', 'Japan' => 'Tokyo' }

// 6. Map-ის ელემენტების დათვლა
const gameRatings = new Map([
  ["The Witcher 3", 9.5],
  ["Cyberpunk 2077", 7.8],
  ["Minecraft", 9.0]
]);

console.log(gameRatings.size); // 3

// 7. თითოეული ელემენტის წაშლა Map-იდან
const productMap = new Map([
  ["Laptop", 1200],
  ["Phone", 800],
  ["Tablet", 400]
]);

productMap.forEach((value, key) => {
  productMap.delete(key);
  console.log(`${key} removed`);
});

// 8. Map და მასივის გარდაქმნა
const sports = new Map([
  ["Football", 11],
  ["Basketball", 5],
  ["Tennis", 2]
]);

const sportsArray = Array.from(sports);
console.log(sportsArray); 
// Output: [ [ 'Football', 11 ], [ 'Basketball', 5 ], [ 'Tennis', 2 ] ]

// 9. Map-ის ძიება მნიშვნელობებით
const animalHabitats = new Map([
  ["Lion", "Savannah"],
  ["Penguin", "Antarctica"],
  ["Eagle", "Mountains"]
]);

const habitat = "Savannah";
for (let [animal, location] of animalHabitats) {
  if (location === habitat) {
    console.log(animal); // Lion
  }
}

// 10. Map-ის დაგროვება Reduce-ით
const studentScores = new Map([
  ["Alice", 85],
  ["Bob", 90],
  ["Charlie", 88]
]);

const averageScore = Array.from(studentScores.values()).reduce((acc, score, _, arr) => acc + score / arr.length, 0);
console.log(averageScore); // 87.666...
