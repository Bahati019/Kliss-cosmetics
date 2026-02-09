// import "../styles/Contact.css";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { WHATSAPP_LINK } from "../utils/constants";

const Contact = () => {
  return (
    <section className="min-h-screen px-[8%] py-32 bg-black text-white relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent" id="contact">
      <div className="text-center mb-16 fade-up">
        <h2 className="font-heading text-4xl mb-4 text-gold">Get in Touch</h2>
        <p className="max-w-[600px] mx-auto opacity-80 leading-relaxed">
          Have questions or want to place an order?
          Reach us through any of the platforms below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 items-start">
        {/* Contact Info */}
        <div className="bg-[#111] p-10 rounded-2xl border border-white/5 fade-up fade-delay-1">
          <h3 className="text-2xl mb-2 text-white font-bold">Contact Information</h3>
          <p className="opacity-70 mb-8">We'd love to hear from you. Reach out to us directly.</p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gold/10 text-gold text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="text-sm text-gray mb-[2px]">Phone</h4>
              <p className="text-lg font-semibold">+254 716 635 714</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gold/10 text-gold text-xl">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="text-sm text-gray mb-[2px]">Email</h4>
              <p className="text-lg font-semibold">info@klisscosmetics.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gold/10 text-gold text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="text-sm text-gray mb-[2px]">Location</h4>
              <p className="text-lg font-semibold">Nairobi, Kenya</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <a href={WHATSAPP_LINK} target="_blank" className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-white text-lg transition-all duration-300 hover:bg-gold hover:text-black hover:-translate-y-1"><FaWhatsapp /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-white text-lg transition-all duration-300 hover:bg-gold hover:text-black hover:-translate-y-1"><FaInstagram /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-white text-lg transition-all duration-300 hover:bg-gold hover:text-black hover:-translate-y-1"><FaFacebookF /></a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-[#111] p-10 rounded-2xl border border-white/5 fade-up fade-delay-2" onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-2xl mb-8 font-bold text-white">Send us a Message</h3>
          <div className="mb-5">
            <input type="text" placeholder="Your Name" required className="w-full p-4 bg-[#0a0a0a] border border-[#333] rounded-lg text-white font-body text-base transition-all focus:outline-none focus:border-gold focus:bg-[#151515]" />
          </div>
          <div className="mb-5">
            <input type="email" placeholder="Your Email" required className="w-full p-4 bg-[#0a0a0a] border border-[#333] rounded-lg text-white font-body text-base transition-all focus:outline-none focus:border-gold focus:bg-[#151515]" />
          </div>
          <div className="mb-5">
            <textarea placeholder="Your Message" rows={5} required className="w-full p-4 bg-[#0a0a0a] border border-[#333] rounded-lg text-white font-body text-base transition-all focus:outline-none focus:border-gold focus:bg-[#151515]"></textarea>
          </div>
          <button type="submit" className="w-full p-4 bg-gold text-black font-bold text-lg rounded-full cursor-pointer transition-all duration-300 mt-4 hover:bg-white hover:-translate-y-1 hover:shadow-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
