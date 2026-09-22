import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";const testimonials = [
    {
        id: 1,
        name: "Sarah M.",
        review: "I've been using KLISS Hair Food for a month, and the difference is night and day. My hair feels so much softer and manageable!",
        rating: 5,
    },
    {
        id: 2,
        name: "Wanjiku K.",
        review: "Finally a product that actually moisturizes my 4C hair without making it greasy. Absolutely love the smell too!",
        rating: 5,
    },
    {
        id: 3,
        name: "Brenda O.",
        review: "My edges were thinning, but after using this consistently, I'm seeing regrowth. Highly recommend for anyone struggling with breakage.",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 px-[10%] bg-[#0a0a0a] text-white" id="testimonials">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-heading mb-4 text-gold">What Our Customers Say</h2>
                    <p className="max-w-[600px] mx-auto opacity-80 leading-relaxed text-gray">
                        Real results from real people. Join thousands of happy customers loving their healthy hair journey.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
                {testimonials.map((testimonial, idx) => (
                    <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:border-gold/40 group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -z-10 group-hover:bg-gold/20 transition-all duration-500" />
                        <div className="flex gap-1 text-gold mb-4 text-sm drop-shadow-md">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: (idx * 0.2) + (i * 0.1) }}
                                >
                                    <FaStar />
                                </motion.div>
                            ))}
                        </div>
                        <p className="mb-6 leading-relaxed opacity-90 italic">"{testimonial.review}"</p>
                        <h4 className="font-bold text-lg text-white font-heading group-hover:text-gold transition-colors duration-300">{testimonial.name}</h4>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
