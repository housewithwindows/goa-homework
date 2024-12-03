

const ProductCard = ({ name, about, price, heart }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
      <p>Likes: {likes}</p>
    </div>
  );
};

export default ProductCard;
