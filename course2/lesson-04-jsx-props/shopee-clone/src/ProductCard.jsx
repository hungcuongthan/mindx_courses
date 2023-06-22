const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <div className="stars">
        {Array(product.rating)
          .fill()
          .map((_, i) => (
            <span key={i}>⭐</span>
          ))}
      </div>
      <p>{product.price}</p>
      <p>{product.sold} đã bán</p>
      <button>Thêm vào giỏ hàng</button>
    </div>
  );
};

export default ProductCard;
