class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    static compareGrades(student1, student2) {
        if (student1.grade > student2.grade) {
            return `${student1.name} has a higher grade.`;
        } else if (student1.grade < student2.grade) {
            return `${student2.name} has a higher grade.`;
        } else {
            return "Both students have the same grade.";
        }
    }
}

// Create instances of Student
let student1 = new Student("John", 85);
let student2 = new Student("Jane", 90);

console.log(Student.compareGrades(student1, student2));  // Output: Jane has a higher grade.
