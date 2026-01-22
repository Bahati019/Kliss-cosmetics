import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer fade-in">
      <h2 className="footer-logo">KLISS COSMETICS</h2>
      <p className="footer-tagline">
        Strong, Shiny, Healthy Hair Formula
      </p>

      <div className="footer-links">
        <a
          href="https://wa.me/254700000000"
          target="_blank"
        >
          WhatsApp
        </a>
        <a
          href="https://instagram.com/klisshairfood"
          target="_blank"
        >
          Instagram
        </a>
        <a href="/contact">Contact</a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} KLISS Cosmetics
      </p>
    </footer>
  );
};

export default Footer;
