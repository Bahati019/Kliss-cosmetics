import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">KLISS</div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>HOME</Link>
        <Link to="/about" onClick={() => setOpen(false)}>ABOUT US</Link>
        <Link to="/products" onClick={() => setOpen(false)}>OUR PRODUCTS</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>CONTACT US</Link>


      </div>

      <a
        href="https://wa.me/254700000000"
        target="_blank"
        className="order-btn"
      >
        Order Now
      </a>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
