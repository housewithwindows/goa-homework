import { useState } from 'react';
import './App.css'

export default function Shop() {
  const [products, setProducts] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name: e.target.name.value,
      price: e.target.price.value
    }

    setProducts([product, ...products])
  }
  
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter your product name' name='name' required />
        <input type='number' placeholder='Enter your product price' name='price' required />
        <button>Submit</button>
      </form>

      <ul>
        {
          products.length > 0 ? (
              products.map((product, index) => {
                return (
                  <li key={index}>
                    {product.name} - {product.price}
                  </li>
                )
            })
          ) : (
            <p>No products</p>
          )
        }
      </ul>
    </main>
  )
};