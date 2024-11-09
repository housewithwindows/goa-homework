// Base class LibraryItem
class LibraryItem {
    constructor(title, year) {
      this.title = title;
      this.year = year;
      this.isAvailable = true;  // Item starts as available
    }
  
    // Method to borrow the item
    borrowItem() {
      if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`${this.title} has been borrowed.`);
      } else {
        console.log(`${this.title} is not available for borrowing.`);
      }
    }
  
    // Method to return the item
    returnItem() {
      if (!this.isAvailable) {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
      } else {
        console.log(`${this.title} was not borrowed.`);
      }
    }
  }
  
  // Derived class Book
  class Book extends LibraryItem {
    constructor(title, year, author, genre) {
      super(title, year);  // Call the parent constructor
      this.author = author;
      this.genre = genre;
    }
  
    // Method to get a summary of the book
    getSummary() {
      return `${this.title} is a ${this.genre} book written by ${this.author} in ${this.year}.`;
    }
  }
  
  // Derived class Magazine
  class Magazine extends LibraryItem {
    constructor(title, year, issueNumber) {
      super(title, year);  // Call the parent constructor
      this.issueNumber = issueNumber;
    }
  
    // Method to get a summary of the magazine
    getSummary() {
      return `${this.title} is a magazine published in ${this.year}, Issue Number: ${this.issueNumber}.`;
    }
  }
  
  // Creating instances of Book and Magazine
  const book1 = new Book("The Great Gatsby", 1925, "F. Scott Fitzgerald", "Fiction");
  const magazine1 = new Magazine("National Geographic", 2024, 120);
  
  // Displaying summaries
  console.log(book1.getSummary());      // The Great Gatsby is a Fiction book written by F. Scott Fitzgerald in 1925.
  console.log(magazine1.getSummary());  // National Geographic is a magazine published in 2024, Issue Number: 120.
  
  // Testing borrowing and returning
  book1.borrowItem();   // The Great Gatsby has been borrowed.
  book1.borrowItem();   // The Great Gatsby is not available for borrowing.
  book1.returnItem();   // The Great Gatsby has been returned.
  book1.returnItem();   // The Great Gatsby was not borrowed.
  
  magazine1.borrowItem();   // National Geographic has been borrowed.
  magazine1.returnItem();   // National Geographic has been returned.
  