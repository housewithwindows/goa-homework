import React, { useState } from 'react';

function App() {
    const [toppings, setToppings] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const topping = e.target.item.value;
        setToppings([...toppings, topping]);
        e.target.item.value = '';  
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="item" placeholder="topping to add" required />
                <button>Submit</button>
            </form>
            <ul>
                {toppings.map((topping, index) => (
                    <li key={index}>Topping {index + 1}: {topping}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
