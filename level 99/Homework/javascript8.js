class Vehicle {
    #speed;  // private property

    constructor(speed = 0) {
        this.#speed = speed;
    }

    accelerate(amount) {
        this.#speed += amount;
        return this.#speed;
    }

    getSpeed() {
        return this.#speed;
    }
}

class Bike extends Vehicle {
    constructor(speed) {
        super(speed);
    }

    increaseSpeed() {
        return this.accelerate(10);
    }
}

// Create an instance of Bike
let myBike = new Bike(20);
console.log("Speed: " + myBike.getSpeed());  // Output: 20
console.log("Accelerated Speed: " + myBike.increaseSpeed());  // Output: 30
