import "../styles/Contact.css";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Get in Touch</h2>
      <p>
        Have questions or want to place an order?  
        Reach us through any of the platforms below.
      </p>

      <div className="contact-socials">
        {/* WhatsApp */}
        <a
          href="https://wa.me/254700000000"
          target="_blank"
          className="social-card"
        >
          <FaWhatsapp className="social-icon" />
          <span>WhatsApp</span>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/klisscosmetics"
          target="_blank"
          className="social-card"
        >
          <FaInstagram className="social-icon" />
          <span>Instagram</span>
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/klisscosmetics"
          target="_blank"
          className="social-card"
        >
          <FaFacebookF className="social-icon" />
          <span>Facebook</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
