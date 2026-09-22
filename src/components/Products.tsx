// import "../styles/Products.css";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import posterImage from "../Poster.png";

const Products = () => {
  const { addToCart } = useCart();

  return (
    <section className="min-h-screen px-[8%] py-32 bg-black text-white text-center overflow-hidden" id="products">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-gold font-heading text-[clamp(2.5rem,5vw,4rem)] mb-4">Our Products</h1>
        <p className="max-w-[600px] mx-auto mb-16 text-lg text-gray leading-relaxed opacity-90">
          Discover KLISS Hair Food products designed for strong, shiny, and
          healthy hair.
        </p>
      </motion.div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10 justify-items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 w-full max-w-[350px] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:border-gold/40 text-left group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -z-10 group-hover:bg-gold/20 transition-all duration-500" />
          
          <div className="w-full h-[300px] bg-white/5 rounded-2xl overflow-hidden mb-6 flex items-center justify-center relative shadow-inner">
            <span className="absolute top-4 left-4 bg-gold text-black text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg tracking-wider">
              BESTSELLER
            </span>
            <motion.img 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src={posterImage} 
              alt="KLISS Hair Food 50g" 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
          <h3 className="text-xl font-heading mb-2 text-white group-hover:text-gold transition-colors duration-300">KLISS Hair Food – 50g</h3>
          <p className="text-gray text-base mb-2 h-6">Nourishes and strengthens hair.</p>
          <p className="text-gold font-bold text-2xl mb-6">KES 300</p>
          <button
            onClick={() => addToCart({ id: '50g', name: 'KLISS Hair Food – 50g', price: 300, quantity: 1, image: posterImage })}
            className="block text-center w-full py-3.5 rounded-xl border border-gold text-gold font-bold uppercase tracking-wider transition-all duration-300 hover:bg-gold hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
          >
            Add to Cart
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 w-full max-w-[350px] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:border-gold/40 text-left group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -z-10 group-hover:bg-gold/20 transition-all duration-500" />
          
          <div className="w-full h-[300px] bg-white/5 rounded-2xl overflow-hidden mb-6 flex items-center justify-center relative shadow-inner">
            <motion.img 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              src={posterImage} 
              alt="KLISS Hair Food 100g" 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
          <h3 className="text-xl font-heading mb-2 text-white group-hover:text-gold transition-colors duration-300">KLISS Hair Food – 100g</h3>
          <p className="text-gray text-base mb-2 h-6">Perfect for regular daily use.</p>
          <p className="text-gold font-bold text-2xl mb-6">KES 500</p>
          <button
            onClick={() => addToCart({ id: '100g', name: 'KLISS Hair Food – 100g', price: 500, quantity: 1, image: posterImage })}
            className="block text-center w-full py-3.5 rounded-xl border border-gold text-gold font-bold uppercase tracking-wider transition-all duration-300 hover:bg-gold hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
          >
            Add to Cart
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 w-full max-w-[350px] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:border-gold/40 text-left group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -z-10 group-hover:bg-gold/20 transition-all duration-500" />
          
          <div className="w-full h-[300px] bg-white/5 rounded-2xl overflow-hidden mb-6 flex items-center justify-center relative shadow-inner">
            <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg tracking-wider">
              VALUE PACK
            </span>
            <motion.img 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              src={posterImage} 
              alt="KLISS Hair Food 250g" 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
          <h3 className="text-xl font-heading mb-2 text-white group-hover:text-gold transition-colors duration-300">KLISS Hair Food – 250g</h3>
          <p className="text-gray text-base mb-2 h-6">Ideal for long-lasting hair care.</p>
          <p className="text-gold font-bold text-2xl mb-6">KES 1000</p>
          <button
            onClick={() => addToCart({ id: '250g', name: 'KLISS Hair Food – 250g', price: 1000, quantity: 1, image: posterImage })}
            className="block text-center w-full py-3.5 rounded-xl border border-gold text-gold font-bold uppercase tracking-wider transition-all duration-300 hover:bg-gold hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
          >
            Add to Cart
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 w-full max-w-[350px] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:border-gold/40 text-left group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -z-10 group-hover:bg-gold/20 transition-all duration-500" />
          
          <div className="w-full h-[300px] bg-white/5 rounded-2xl overflow-hidden mb-6 flex items-center justify-center relative shadow-inner">
            <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg tracking-wider">
              NEW
            </span>
            <motion.img 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              src={posterImage} 
              alt="KLISS Shampoo" 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
          <h3 className="text-xl font-heading mb-2 text-white group-hover:text-gold transition-colors duration-300">KLISS Shampoo</h3>
          <p className="text-gray text-base mb-2 h-6">Cleanses and revitalizes your hair.</p>
          <p className="text-gold font-bold text-2xl mb-6">KES 800</p>
          <button
            onClick={() => addToCart({ id: 'shampoo', name: 'KLISS Shampoo', price: 800, quantity: 1, image: posterImage })}
            className="block text-center w-full py-3.5 rounded-xl border border-gold text-gold font-bold uppercase tracking-wider transition-all duration-300 hover:bg-gold hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
          >
            Add to Cart
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 w-full max-w-[350px] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:border-gold/40 text-left group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -z-10 group-hover:bg-gold/20 transition-all duration-500" />
          
          <div className="w-full h-[300px] bg-white/5 rounded-2xl overflow-hidden mb-6 flex items-center justify-center relative shadow-inner">
            <motion.img 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              src={posterImage} 
              alt="KLISS Acetone" 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
          <h3 className="text-xl font-heading mb-2 text-white group-hover:text-gold transition-colors duration-300">KLISS Acetone</h3>
          <p className="text-gray text-base mb-2 h-6">Professional grade nail polish remover.</p>
          <p className="text-gold font-bold text-2xl mb-6">KES 200</p>
          <button
            onClick={() => addToCart({ id: 'acetone', name: 'KLISS Acetone', price: 200, quantity: 1, image: posterImage })}
            className="block text-center w-full py-3.5 rounded-xl border border-gold text-gold font-bold uppercase tracking-wider transition-all duration-300 hover:bg-gold hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
          >
            Add to Cart
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
