import "../styles/Products.css";

const Products = () => {
  return (
    <section className="products" id="products">
      <h1 className="products-title">Our Products</h1>
      <p className="products-subtitle">
        Discover KLISS Hair Food products designed for strong, shiny, and
        healthy hair.
      </p>

      <div className="products-grid">
        <div className="product-card fade-up fade-delay-1">
          <img src="/poster.png" alt="KLISS Hair Food 50g" />
          <h3>KLISS Hair Food – 50g</h3>
          <p>Nourishes and strengthens hair.</p>
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            className="product-btn"
          >
            Order Now
          </a>
        </div>

        <div className="product-card fade-up fade-delay-2">
          <img src="/poster.png" alt="KLISS Hair Food 100g" />
          <h3>KLISS Hair Food – 100g</h3>
          <p>Perfect for regular daily use.</p>
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            className="product-btn"
          >
            Order Now
          </a>
        </div>

        <div className="product-card fade-up fade-delay-3">
          <img src="/poster.png" alt="KLISS Hair Food 250g" />
          <h3>KLISS Hair Food – 250g</h3>
          <p>Ideal for long-lasting hair care.</p>
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            className="product-btn"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
