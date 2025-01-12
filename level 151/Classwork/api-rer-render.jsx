import { useState,useEffect } from "react";


export default function App  ()  {
    const [products, setProducts] = useState(null);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });


  return(
    <div>
        {products !== null ? (
            <ul>
                {products.map((product) => (
                    <li key={product.title}>
                        {product.title} - {product.price}
                    </li>
                ))}
            </ul>
        ):(
            <p>products loading</p>
        )}
    </div>
  );

};
