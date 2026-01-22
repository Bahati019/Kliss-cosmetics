import "../styles/Home.css";

const Home = () => {
  return (
    <main className="home" id="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Strong, Shiny, Healthy Hair</h1>
          <p>
            KLISS Hair Food is specially formulated to nourish, strengthen,
            and protect your hair every day.
          </p>

          <a
            href="https://wa.me/254700000000"
            target="_blank"
            className="primary-btn"
          >
            Order via WhatsApp
          </a>
        </div>

        <img
          src="/poster.png"
          alt="KLISS Hair Food"
          className="hero-image"
        />
      </section>

      {/* BENEFITS */}
      <section className="benefits">
        <h2>Why Choose KLISS?</h2>

        <div className="benefit-grid">
          <div className="benefit-card fade-up fade-delay-1">
            <h3>🌿 Nourishing Formula</h3>
            <p>Deeply moisturizes hair and scalp.</p>
          </div>

          <div className="benefit-card fade-up fade-delay-2">
            <h3>✨ Adds Shine</h3>
            <p>Leaves your hair soft, shiny, and healthy.</p>
          </div>

          <div className="benefit-card fade-up fade-delay-3">
            <h3>💪 Strengthens Hair</h3>
            <p>Reduces breakage and promotes growth.</p>
          </div>

          <div className="benefit-card fade-up fade-delay-4">
            <h3>🧴 All Hair Types</h3>
            <p>Perfect for natural, relaxed, and braided hair.</p>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="how-to-use">
        <h2>How to Use</h2>
        <ol>
          <li>Apply a small amount to clean hair or scalp</li>
          <li>Massage gently with fingertips</li>
          <li>Use daily or as needed</li>
        </ol>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready for Healthy Hair?</h2>
        <p>Order KLISS Hair Food today and feel the difference.</p>

        <a
          href="https://wa.me/254700000000"
          target="_blank"
          className="primary-btn"
        >
          Order Now
        </a>
      </section>
    </main>
  );
};

export default Home;
