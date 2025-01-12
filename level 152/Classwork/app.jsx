import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [books, setBooks] = useState(null);
  const [readed, setReaded] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}`
      );
      const data = await res.json();
      setBooks(data.items);
    };

    fetchData();
  }, [search]);

  const handleChange = (e, id) => {
    if (e.target.checked) {
      setReaded([...readed, books.find((elem) => elem.id === id)]);
    } else {
      setReaded(readed.filter((elem) => id != elem.id));
    }
  };

  console.log(readed);

  return (
    <main>
      <section>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter genre or book name"
        />
      </section>

      <section>
        <h2>Books</h2>

        {books ? (
          <ul>
            {books.map((info) => {
              return (
                <li>
                  <p>{info.volumeInfo.title}</p>
                  <p>{info.volumeInfo.description}</p>
                  <input
                    type="checkbox"
                    onChange={(e) => handleChange(e, info.id)}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Nothing</p>
        )}
      </section>
    </main>
  );
}