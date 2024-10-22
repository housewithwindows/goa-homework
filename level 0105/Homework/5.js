/**Create a chain of promises using .then()
Task: Create a promise that resolves with the number 5. Chain multiple .then() calls to multiply the number by 2 in each step. */
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 1000); // Simulates a 1-second delay
    });
  }
  
  // Call the function and handle the promise
  fetchData()
    .then((data) => {
      console.log(data); // This will log "Data fetched!" after 1 second
    })
    .catch((error) => {
      console.log(error);
    });
  