class Car {
    constructor(make, model) {
        this.make = make;  // public property
        this.model = model;  // public property
    }
}

// Creating an instance of the Car class
let myCar = new Car("Toyota", "Corolla");

// Accessing the public properties
console.log("Make: " + myCar.make);
console.log("Model: " + myCar.model);