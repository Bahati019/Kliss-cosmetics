import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full px-10 py-5 flex items-center justify-between text-white transition-all duration-300 border-b border-white/10 ${scrolled ? "py-3 bg-black/95 shadow-lg backdrop-blur-md" : "bg-black/85 backdrop-blur-md"}`}>
      <div className="text-2xl tracking-[3px] font-heading">KLISS</div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8">
        <Link to="/" className="text-white hover:text-gold-light transition-colors" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" className="text-white hover:text-gold-light transition-colors" onClick={() => setOpen(false)}>About Us</Link>
        <Link to="/products" className="text-white hover:text-gold-light transition-colors" onClick={() => setOpen(false)}>Our Products</Link>
        <Link to="/contact" className="text-white hover:text-gold-light transition-colors" onClick={() => setOpen(false)}>Contact Us</Link>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative text-white hover:text-gold-light transition-colors p-2"
        >
          <FiShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-gold text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="flex flex-col gap-1 cursor-pointer md:hidden z-[1001]" onClick={() => setOpen(!open)}>
        <span className={`w-8 h-[3px] bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`w-8 h-[3px] bg-white transition-opacity ${open ? "opacity-0" : ""}`}></span>
        <span className={`w-8 h-[3px] bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-[75%] max-w-[300px] h-screen bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 border-l border-white/10 shadow-[-10px_0_30px_rgba(0,0,0,0.8)] z-[999] transition-transform duration-400 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] ${open ? "translate-x-0" : "translate-x-full"}`}>
        <Link to="/" className="text-2xl text-white hover:text-gold-light" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" className="text-2xl text-white hover:text-gold-light" onClick={() => setOpen(false)}>About Us</Link>
        <Link to="/products" className="text-2xl text-white hover:text-gold-light" onClick={() => setOpen(false)}>Our Products</Link>
        <Link to="/contact" className="text-2xl text-white hover:text-gold-light" onClick={() => setOpen(false)}>Contact Us</Link>

        <button 
          onClick={() => {
            setOpen(false);
            setIsCartOpen(true);
          }}
          className="relative text-gold-light mt-4 flex items-center gap-2 p-2"
        >
          <FiShoppingCart size={28} />
          <span className="text-xl">View Cart</span>
          {cartCount > 0 && (
            <span className="bg-gold text-black text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
