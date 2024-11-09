


const calculate = require('./calculator');


function filter(array, func) {
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
        const filteredValue = func(array[i]);
        resultArray.push(filteredValue);
    }
    return resultArray;
}

// ორიგინალი მასივი
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = filter(numbers, (num) => calculate(num, 2, '*'));

console.log("Filtered and calculated numbers:", filteredNumbers); 



const calculate = require('./calculator');

const result1 = calculate(10, 5, '+');
const result2 = calculate(10, 5, '-');
const result3 = calculate(10, 5, '*');
const result4 = calculate(10, 5, '/');

console.log("10 + 5 =", result1); // 15
console.log("10 - 5 =", result2); // 5
console.log("10 * 5 =", result3); // 50
console.log("10 / 5 =", result4); // 2

