import { useState } from "react"

const AdminPanel = () => {
    const [products, setProducts] = useState([]);

    const DeleteProduct = () => {

    } 

    return (
        <main>
            <section>
                <h2>Admin Panel</h2>
                <p>Welcome to the admin panel</p>
                <p>Username: {user?.username}</p>
                <p>Email: {user?.email}</p>
            </section>

            <section>
                <h2>Manage Products</h2>
                <table border="1">
                </table>
            </section>
            <section>
                <h2>Add Products</h2>
                
                    
                    <li>{products.map(() => {
                        <ul key={products.key}>{products}</ul>
                    })}</li>
                
            </section>
        </main>
    )
}

export default AdminPanel;