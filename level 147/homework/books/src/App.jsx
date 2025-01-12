import { useState, useEffect } from 'react'; 
import axios from 'axios';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Library from './components/Library';




const App = () => {
  const [books,setBooks ] = useState([])
  const [book,setBook] = useState('')
  const [isRead, setIsRead] = useState(false);
  book = e.target.book.value
  setBooks(...books,books)
   
  
  const handleClick = () => {
    e.preventDefault()
  }

  return (
    <div onClick={handleClick}>

    
   <button onClick={() => setIsRead(true)} disabled={isRead}> Read </button> 
  <button onClick={() => setIsRead(false)} disabled={!isRead}> Not Read </button> 
    </div>
  )
}
    

export default App
