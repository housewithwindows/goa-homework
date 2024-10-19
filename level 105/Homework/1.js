/*Here are **10 simple tasks** to help you practice the `Promise` constructor and working with promises in JavaScript:

---

### 1. **Create a basic Promise that resolves immediately**
   - Task: Use the `Promise` constructor to create a promise that resolves with the message `"Hello, Promise!"`.

---*/
const immediatePromise = new Promise((resolve, reject) => {
    resolve("Hello, Promise!");
  });
  
  // Call the promise and handle the resolved value
  immediatePromise
    .then((message) => {
      console.log(message); // Logs "Hello, Promise!"
    })
    .catch((error) => {
      console.log(error);
    });
  