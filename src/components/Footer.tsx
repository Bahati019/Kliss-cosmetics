// import "../styles/Footer.css";
import { WHATSAPP_LINK } from "../utils/constants";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-16 px-[10%] border-t border-white/5 relative">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-16 mb-16">

        {/* BRAND */}
        <div className="footer-section">
          <h2 className="text-2xl font-heading mb-6 text-gold tracking-widest">KLISS Cosmetics</h2>
          <p className="opacity-70 leading-relaxed text-base">
            Strong, Shiny, Healthy Hair Formula crafted to nourish and protect
            your hair every day.
          </p>
        </div>

        {/* ADDRESS */}
        <div className="footer-section">
          <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Our Address</h3>
          <p className="opacity-70 leading-relaxed text-base">
            Nairobi, Kenya <br />
            Available for nationwide delivery
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h3>
          <ul className="list-none p-0">
            <li className="mb-3"><a href="#home" className="opacity-70 text-white no-underline transition-all duration-300 hover:text-gold hover:pl-2">Home</a></li>
            <li className="mb-3"><a href="#about" className="opacity-70 text-white no-underline transition-all duration-300 hover:text-gold hover:pl-2">About</a></li>
            <li className="mb-3"><a href="#products" className="opacity-70 text-white no-underline transition-all duration-300 hover:text-gold hover:pl-2">Products</a></li>
            <li className="mb-3"><a href="#contact" className="opacity-70 text-white no-underline transition-all duration-300 hover:text-gold hover:pl-2">Contact</a></li>
          </ul>
        </div>

        {/* SOCIAL LINKS */}
        <div className="footer-section">
          <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Connect With Us</h3>
          <div className="flex gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-lg transition-all duration-300 hover:bg-gold hover:text-black hover:-translate-y-1"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://instagram.com/klisscosmetics"
              target="_blank"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-lg transition-all duration-300 hover:bg-gold hover:text-black hover:-translate-y-1"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-lg transition-all duration-300 hover:bg-gold hover:text-black hover:-translate-y-1"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center pt-8 border-t border-white/5 opacity-50 text-sm">
        © {new Date().getFullYear()} KLISS Cosmetics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
