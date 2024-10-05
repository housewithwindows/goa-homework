class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // Getter for area
    get area() {
        return this._width * this._height;
    }

    // Setter for width (ensures positive values)
    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            console.error("Width must be a positive number.");
        }
    }

    // Setter for height (ensures positive values)
    set height(value) {
        if (value > 0) {
            this._height = value;
        } else {
            console.error("Height must be a positive number.");
        }
    }

    // Getters for width and height
    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }
}

// Create an instance of Rectangle
let myRectangle = new Rectangle(5, 10);

// Access the area using the getter
console.log("Area: " + myRectangle.area);  // Output: 50

// Update width and height using setters
myRectangle.width = 8;
myRectangle.height = 12;
console.log("Updated Area: " + myRectangle.area);  // Output: 96

// Attempt to set negative values
myRectangle.width = -4;  // This will show an error
myRectangle.height = -6;  // This will show an error