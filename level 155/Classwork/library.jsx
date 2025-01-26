import { useEffect,useState } from "react";



function App() {
    const [read,setRead] = useState([])
    const [books,setBooks] = useState(null)
    const [search,setSearch] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
            const data = await res.json()
            setBooks(data.items);
        };
        fetchData();
    },[search])

    const handleButtonClick = (e) => {
        e.preventDefault()
    }
    
    



    



    return(
    <>
    <div onSubmit={handleButtonClick}>
        {books.map((info) => {
        <li>{info.volumeInfo.title}</li>
        })}
        
         
    </div>
    <div>

    </div>
    </>
    
    
    )

        
    
          
} 