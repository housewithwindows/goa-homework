const url = 'https://api.example.com/data'; // Replace with your URL

// Call the fetch function
const promise = fetch(url);

console.log(promise); // Logs the Promise

// Handling the promise
promise
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Returns the data as JSON
  })
  .then(data => {
    console.log('Data:', data); // Logs the data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
