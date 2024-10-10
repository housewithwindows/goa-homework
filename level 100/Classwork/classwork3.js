// მშობელი კლასი
class Appliance {
    constructor(brand, power) {
        this.brand = brand;
        this.power = power;
    }

    turnOn() {
        console.log("The appliance is now on.");
    }
}

// შვილი კლასები
class WashingMachine extends Appliance {
    washClothes() {
        console.log("Washing clothes...");
    }
}

class Microwave extends Appliance {
    heatFood() {
        console.log("Heating food...");
    }
}

// შემოწმება
const washer = new WashingMachine("LG", 1500);
const microwave = new Microwave("Samsung", 800);

washer.turnOn();        // შედეგი: The appliance is now on.
washer.washClothes();   // შედეგი: Washing clothes...

microwave.turnOn();     // შედეგი: The appliance is now on.
microwave.heatFood();   // შედეგი: Heating food...
