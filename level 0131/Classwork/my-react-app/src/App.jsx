
import ProductList from './Productlist';

const App = () => {
  const products = [
    { name: 'Product 1', description: 'Description for product 1', price: 100, likes: 10 },
    { name: 'Product 2', description: 'Description for product 2', price: 150, likes: 20 },
    { name: 'Product 3', description: 'Description for product 3', price: 200, likes: 30 },
  ];

  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;







