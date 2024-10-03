function calculateAverage(numbers) {
    let sum = 0;
  
    // ყველა ელემენტის ჯამის გამოთვლა
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    // საშუალოს გამოთვლა
    let average = sum / numbers.length;
    
    return average;
  }
  
  // მაგალითისთვის შექმნილი მასივი
  let numbersArray = [10, 20, 30, 40, 50];
  
  // საშუალოს გამოთვლა და შედეგის გამოხმობა
  let average = calculateAverage(numbersArray);
  console.log("Average is: " + average)