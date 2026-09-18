import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import posterImage from "../Poster.png";
import { WHATSAPP_LINK } from "../utils/constants";

const CAROUSEL_SLIDES = [
  {
    id: 1,
    title: "Strong, Shiny, Healthy Hair",
    subtitle: "KLISS Hair Food is specially formulated to nourish, strengthen, and protect your hair every day.",
    image: posterImage, // Primary image
  },
  {
    id: 2,
    title: "Nourish From Root To Tip",
    subtitle: "Discover the secret to vibrant hair. Say goodbye to dryness and breakage.",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop", // Placeholder Unsplash image
  },
  {
    id: 3,
    title: "For All Hair Types",
    subtitle: "Whether natural, relaxed, or styled, your hair deserves the best care.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2000&auto=format&fit=crop", // Placeholder Unsplash image
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1));

  return (
    <main className="pt-20 md:pt-24" id="home">
      {/* HERO CAROUSEL */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-black flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay for text readability */}
            <img
              src={CAROUSEL_SLIDES[currentSlide].image}
              alt="Hero Background"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 w-full px-[8%] max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left text-white max-w-2xl"
            >
              <h1 className="font-heading text-[clamp(3rem,5vw,5.5rem)] leading-[1.05] mb-6 drop-shadow-xl text-white">
                {CAROUSEL_SLIDES[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-8 drop-shadow-md">
                {CAROUSEL_SLIDES[currentSlide].subtitle}
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-gold-light text-black px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] no-underline"
              >
                Order via WhatsApp
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="absolute z-30 bottom-10 left-0 right-0 flex justify-center items-center gap-6">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-3">
            {CAROUSEL_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "bg-gold-light scale-125" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-[10%] bg-[#fafafa] text-center overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-black font-heading mb-12"
        >
          Why Choose KLISS?
        </motion.h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-8">
          {[
            { icon: "🌿", title: "Nourishing Formula", desc: "Deeply moisturizes hair and scalp." },
            { icon: "✨", title: "Adds Shine", desc: "Leaves your hair soft, shiny, and healthy." },
            { icon: "💪", title: "Strengthens Hair", desc: "Reduces breakage and promotes growth." },
            { icon: "🧴", title: "All Hair Types", desc: "Perfect for natural, relaxed, and braided hair." },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:bg-gradient-to-br hover:from-white hover:to-[#f9f9f9] group"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-gold-dark transition-colors text-black">
                {benefit.icon} {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="py-24 px-[10%] bg-black text-white overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl mb-12 font-heading"
        >
          How to Use
        </motion.h2>
        
        <ol className="max-w-[600px] mx-auto list-none counter-reset-step space-y-6">
          {[
            "Apply a small amount to clean hair or scalp",
            "Massage gently with fingertips",
            "Use daily or as needed"
          ].map((step, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-12 leading-relaxed text-lg before:content-[counter(step)] before:absolute before:left-0 before:top-0 before:w-8 before:h-8 before:bg-gold-light before:text-black before:rounded-full before:grid before:place-items-center before:font-bold before:counter-increment-step"
            >
              {step}
            </motion.li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="py-32 px-[10%] text-center bg-gradient-to-br from-gold-light to-[#e2b500] text-black overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 font-heading">Ready for Healthy Hair?</h2>
          <p className="text-lg mb-8">Order KLISS Hair Food today and feel the difference.</p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-black text-white px-10 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-2xl no-underline"
          >
            Order Now
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
