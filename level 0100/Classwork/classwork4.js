// ძირითადი კლასი
class Shape {
    constructor(name, sides) {
        this.name = name;
        this.sides = sides;
    }
}

// შვილი კლასი
class Triangle extends Shape {
    constructor(name, sides, base, height) {
        super(name, sides);  // მშობლის კონსტრუქტორის გამოძახება
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}

// შემოწმება
const triangle = new Triangle("Triangle", 3, 10, 5);
console.log(triangle.calculateArea()); // 25
