import "./App.css";
import Category from "./Category";
import products from "./shopeeProducts";
import ProductCard from "./ProductCard";
import "./ProductCard.css";

function App() {
  return (
    <>
      <div className="nav-bar">
        <div className="filter-container">
          <div>Sắp xếp theo</div>
          <Category name="Liên Quan" />
          <Category name="Mới Nhất" />
          <Category name="Bán Chạy" />
          <div className="price-sort">
            <select name="price-range" id="price-range">
              <option value="Price" disabled>
                Giá
              </option>
              <option value="option-1">0-1,000,000 VND</option>
              <option value="option-2">1,000,000 VND - 5,000,000 VND</option>
              <option value="option-3">Hơn 5,000,000 VND</option>
            </select>
          </div>
        </div>
        <div className="paginator">
          <div>1/15</div>
          <div>
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
      <div className="main-container">
        <ProductCard product={products[0]} />
        <ProductCard product={products[1]} />
        <ProductCard product={products[2]} />
        <ProductCard product={products[0]} />
        <ProductCard product={products[1]} />
        <ProductCard product={products[2]} />
        <ProductCard product={products[0]} />
        <ProductCard product={products[1]} />
        <ProductCard product={products[2]} />
        <ProductCard product={products[2]} />
        <ProductCard product={products[0]} />
        <ProductCard product={products[1]} />
        <ProductCard product={products[2]} />
        <ProductCard product={products[2]} />
        <ProductCard product={products[0]} />
        <ProductCard product={products[1]} />
        <ProductCard product={products[2]} />
      </div>
    </>
  );
}

export default App;
