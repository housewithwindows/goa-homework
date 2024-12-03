
import ProductList from './Productlist';

const Aboit= () => {
  const products = [
    { name: 'Product 1', about:'about', price:1919, heart: 10 },
    { name: 'Product 2', about: 'about', price:69, heart: 20 },
    { name: 'Product 3', about: 'about', price: 420, heart: 30 },
  ];

  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductList products={products} />
    </div>
  );
};

export default about;







