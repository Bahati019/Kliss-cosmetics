// import "../styles/Products.css";
import { WHATSAPP_LINK } from "../utils/constants";
import posterImage from "../Poster.png";

const Products = () => {
  return (
    <section className="min-h-screen px-[8%] py-32 bg-black text-white text-center" id="products">
      <h1 className="text-gold font-heading text-[clamp(2.5rem,5vw,4rem)] mb-4">Our Products</h1>
      <p className="max-w-[600px] mx-auto mb-16 text-lg text-gray leading-relaxed opacity-90">
        Discover KLISS Hair Food products designed for strong, shiny, and
        healthy hair.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10 justify-items-center">
        <div className="bg-[#111] p-8 rounded-2xl border border-white/10 w-full max-w-[350px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-gold/30 text-left fade-up fade-delay-1 group">
          <div className="w-full h-[300px] bg-[#1a1a1a] rounded-xl overflow-hidden mb-6 flex items-center justify-center relative">
            <img src={posterImage} alt="KLISS Hair Food 50g" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
          </div>
          <h3 className="text-xl font-heading mb-2 text-white">KLISS Hair Food – 50g</h3>
          <p className="text-gray text-base mb-6 h-12">Nourishes and strengthens hair.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            className="block text-center w-full py-3 rounded-lg border border-gold text-gold font-bold uppercase tracking-wider transition-all duration-300 hover:bg-gold hover:text-black"
          >
            Order Now
          </a>
        </div>

        <div className="bg-[#111] p-8 rounded-2xl border border-white/10 w-full max-w-[350px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-gold/30 text-left fade-up fade-delay-2 group">
          <div className="w-full h-[300px] bg-[#1a1a1a] rounded-xl overflow-hidden mb-6 flex items-center justify-center relative">
            <img src={posterImage} alt="KLISS Hair Food 100g" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
          </div>
          <h3 className="text-xl font-heading mb-2 text-white">KLISS Hair Food – 100g</h3>
          <p className="text-gray text-base mb-6 h-12">Perfect for regular daily use.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            className="block text-center w-full py-3 rounded-lg border border-gold text-gold font-bold uppercase tracking-wider transition-all duration-300 hover:bg-gold hover:text-black"
          >
            Order Now
          </a>
        </div>

        <div className="bg-[#111] p-8 rounded-2xl border border-white/10 w-full max-w-[350px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-gold/30 text-left fade-up fade-delay-3 group">
          <div className="w-full h-[300px] bg-[#1a1a1a] rounded-xl overflow-hidden mb-6 flex items-center justify-center relative">
            <img src={posterImage} alt="KLISS Hair Food 250g" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
          </div>
          <h3 className="text-xl font-heading mb-2 text-white">KLISS Hair Food – 250g</h3>
          <p className="text-gray text-base mb-6 h-12">Ideal for long-lasting hair care.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            className="block text-center w-full py-3 rounded-lg border border-gold text-gold font-bold uppercase tracking-wider transition-all duration-300 hover:bg-gold hover:text-black"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
