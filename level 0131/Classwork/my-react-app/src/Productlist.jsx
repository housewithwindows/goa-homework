
import ProductCard from './Productcard';

const ProductCatalog = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
        key={index}
        name={product.name}
        description={product.about}
        price={product.price}
        likes={product.heart}
        />
      ))}
    </div>
  );
};

export default ProductCatalog;
