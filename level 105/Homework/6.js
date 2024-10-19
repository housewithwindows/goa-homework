/*Simulate a network request using Promises
Task: Create a promise that resolves with "Data fetched!" after 1 second. Use setTimeout to simulate the delay.*/

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
  