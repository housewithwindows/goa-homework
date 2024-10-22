// ძირითადი კლასი
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log("This animal makes a sound.");
    }
}

// შვილები
class Dog extends Animal {
    speak() {
        console.log("Bark!");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meow!");
    }
}

// შემოწმება
const dog = new Dog("Buddy", 3);
const cat = new Cat("Whiskers", 2);

dog.speak(); // Bark!
cat.speak(); // Meow!
