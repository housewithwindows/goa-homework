function manualFilter(callback, array) {
    let resultArray = [];

    // for ციკლი გადმოცემულ მასივზე
    for (let i = 0; i < array.length; i++) {
        // გამოძახება გადმოცემული ფუნქციის ამჟამინდელ ელემენტზე
        if (callback(array[i])) {
            resultArray.push(array[i]); // თუ შედეგი trueა, ვამატებთ ახალ მასივში
        }
    }

    return resultArray; // ვაბრუნებთ ახალ გაფილტრულ მასივს
}

// მაგალითისთვის ფილტრაციის ფუნქცია - ამოწმებს არის თუ არა რიცხვი კენტი
function isOdd(num) {
    return num % 2 !== 0; // აბრუნებს true თუ კენტია, false თუ ლუწია
}

// მაგალითისთვის მასივი
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ვიძახებთ manualFilter-ს isOdd ფუნქციით და numbers მასივით
let filteredNumbers = manualFilter(isOdd, numbers);

console.log(filteredNumbers); // [1, 3, 5, 7, 9]