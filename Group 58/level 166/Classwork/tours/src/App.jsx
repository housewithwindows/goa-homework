import { useEffect, useState } from 'react';

function App() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/tours");
        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!tours.length) {
    return <p>No tours available</p>;
  }

  console.log(tours);

  return (
    <ul>
      {tours.map((tour) => (
        <li key={tour.id}>{tour.name}</li>
      ))}
    </ul>
  );
}

export default App;

