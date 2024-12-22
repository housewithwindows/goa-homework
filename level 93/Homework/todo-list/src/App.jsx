import { useState } from 'react'



function App() {
  const [items, setItems] = useState([])
  const item = e.target.item.value
  setItems(...items,items)

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type = "text" name='item' placeholder = "add a thing to do" required/>
        <button>Submit</button>
        <ul>
        <div>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <p>Task {index + 1}: {item}</p>
          </div>
        );
      })}
    </div>
  
        </ul>
      </form>
    </div>
  )

  
    
    
}

export default App
