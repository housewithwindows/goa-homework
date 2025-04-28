import { useState } from "react"

const AdminPanel = () => {
    const [products, setProducts] = useState([]);

    const [count,setCount] = useState(1)

    

    return (
        <main>
            <section>
                <h2>Admin Panel</h2>
                <p>Welcome to the admin panel</p>
                
            </section>

            <section>
                <h2>Manage Products</h2>
                <table border="1">
                </table>
            </section>
            <section>
                <h2>Add Products</h2>
                
                <input type="text" />
                <button>Add Product</button>
            <ul>
            {products.map(() => {
            
                <li key={Date.now()}>{products}</li>
                
            })}
            </ul>

                    
                
            </section>
        </main>
    )
}

export default AdminPanel;
