/* Use setTimeout to resolve a Promise after 2 seconds
Task: Create a promise that waits for 2 seconds using setTimeout and then resolves with "2 seconds have passed".
 */
function waitTwoSeconds() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("2 seconds have passed");
      }, 2000); // 2 seconds delay
    });
  }
  
  // Call the function and handle the promise
  waitTwoSeconds()
    .then((message) => {
      console.log(message); // Logs "2 seconds have passed" after 2 seconds
    })
    .catch((error) => {
      console.log(error);
    });
  