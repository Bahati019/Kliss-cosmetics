import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604902396830-aca29e19b067?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop"
  ];

  return (
    <section className="py-24 px-[5%] bg-black text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl text-gold font-heading mb-4">The KLISS Lifestyle</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Embrace healthy, beautiful hair everyday.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative rounded-3xl overflow-hidden group shadow-2xl ${
              index === 0 || index === 3 ? "md:col-span-2 lg:col-span-2 h-[400px]" : "h-[400px]"
            }`}
          >
            <img
              src={src}
              alt="Lifestyle"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
               <span className="text-white font-bold tracking-wider uppercase border-b-2 border-gold pb-1">KLISS Beauty</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
