// მშობელი კლასი
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`Vehicle: ${this.make} ${this.model}`);
    }
}

// შვილი კლასი
class Car extends Vehicle {
    constructor(make, model, fuelType) {
        super(make, model); // მშობლის კონსტრუქტორის გამოძახება
        this.fuelType = fuelType;
    }

    displayInfo() {
        super.displayInfo(); // მშობლის მეთოდის გამოძახება
        console.log(`Fuel Type: ${this.fuelType}`);
    }
}

// შემოწმება
const myCar = new Car("Toyota", "Corolla", "Petrol");
myCar.displayInfo();
// შედეგი:
// Vehicle: Toyota Corolla
// Fuel Type: Petrol
