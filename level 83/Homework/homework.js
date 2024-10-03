// Car ობიექტის კონსტრუქტორი
function Car(model, manufacturer, year, color) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.color = color;

    // მეთოდი რომელიც ბეჭდავს ობიექტის შესახებ ინფორმაციას
    this.getCarInfo = function() {
        return `Model: ${this.model}, Manufacturer: ${this.manufacturer}, Year: ${this.year}, Color: ${this.color}`;
    };
}

// ახალი მანქანის ობიექტების შექმნა
let car1 = new Car("Model S", "Tesla", 2020, "Red");
let car2 = new Car("Mustang", "Ford", 2019, "Blue");

// ობიექტის მეთოდის გამოყენება
console.log(car1.getCarInfo()); // Model: Model S, Manufacturer: Tesla, Year: 2020, Color: Red
console.log(car2.getCarInfo()); // Model: Mustang, Manufacturer: Ford, Year: 2019, Color: Blue