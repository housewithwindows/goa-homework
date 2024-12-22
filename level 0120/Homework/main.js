const { add, subtract } = require('./MathUtils');

const sum = add(10, 5);
console.log(sum);

const difference = subtract(10, 5);
console.log(difference);

import { sayHello, sayGoodbye } from './greetings.js';

console.log(sayHello());  
console.log(sayGoodbye()); 

import add, { subtract } from './mathOperations.js';
  
 
 console.log("Sum:", sum);   
 console.log("Difference:", difference)