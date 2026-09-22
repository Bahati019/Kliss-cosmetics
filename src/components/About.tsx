import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white min-h-[80vh] px-[10%] py-28 text-center overflow-hidden" id="about">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[1000px] mx-auto"
      >
        <h2 className="text-4xl font-heading mb-6 text-black">About KLISS Hair Food</h2>

        <p className="text-xl max-w-[700px] mx-auto opacity-80 leading-relaxed mb-16 text-gray-700">
          KLISS Cosmetics was created with one goal — to help women love
          their hair again.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-10 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] rounded-3xl transition-all duration-500 border border-black/5 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:border-gold/30 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl -z-10 group-hover:bg-gold/15 transition-all duration-500" />
            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-gold-dark transition-colors duration-300">🌿 Our Story</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Born from the need for healthy, nourished hair, KLISS combines
              carefully selected ingredients to restore strength, shine,
              and confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative p-10 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] rounded-3xl transition-all duration-500 border border-black/5 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:border-gold/30 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl -z-10 group-hover:bg-gold/15 transition-all duration-500" />
            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-gold-dark transition-colors duration-300">🎯 Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To provide affordable, effective hair care solutions for all
              hair types — natural, relaxed, or styled.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative p-10 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] rounded-3xl transition-all duration-500 border border-black/5 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:border-gold/30 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl -z-10 group-hover:bg-gold/15 transition-all duration-500" />
            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-gold-dark transition-colors duration-300">💛 Our Promise</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              No harsh chemicals. Just nourishment, consistency, and
              visible results you can feel.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
