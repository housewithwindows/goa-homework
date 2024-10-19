/*Create a Promise that rejects with an error
Task: Write a promise that rejects with the message "Something went wrong!" and handle the rejection with .catch().*/
function rejectPromise() {
    return new Promise((resolve, reject) => {
      reject("Something went wrong!");
    });
  }
  
  // Call the function and handle the rejection
  rejectPromise()
    .then((message) => {
      console.log(message); // This won't run since the promise rejects
    })
    .catch((error) => {
      console.log(error); // Logs "Something went wrong!"
    });
  