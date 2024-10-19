/**Handle both resolve and reject outcomes
Task: Write a promise that randomly either resolves with "Success!" or rejects with "Failed!" using Math.random(). Handle both outcomes with .then() and .catch().
*/function randomOutcome() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random(); // Generate a random number between 0 and 1
    if (randomNumber > 0.5) {
      resolve("Success!");
    } else {
      reject("Failed!");
    }
  });
}

// Call the function and handle both outcomes
randomOutcome()
  .then((message) => {
    console.log(message); // Logs "Success!" if resolved
  })
  .catch((error) => {
    console.log(error); // Logs "Failed!" if rejected
  });

