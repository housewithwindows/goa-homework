class Book {
    constructor(title, pages) {
        this.title = title;
        this.#pages = pages;
    }

    #pages;  // private property

    get pages() {
        return this.#pages;
    }

    set pages(value) {
        if (value > 0) {
            this.#pages = value;
        } else {
            console.error("Pages must be positive.");
        }
    }
}

// Create an instance
let myBook = new Book("The Great Gatsby", 180);
console.log("Pages: " + myBook.pages);  // Output: 180
myBook.pages = 200;
console.log("Updated Pages: " + myBook.pages);  // Output: 200
