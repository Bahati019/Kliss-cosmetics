import { FaStar } from "react-icons/fa";

const testimonials = [
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
            <div className="text-center mb-16 fade-up">
                <h2 className="text-4xl font-heading mb-4 text-gold">What Our Customers Say</h2>
                <p className="max-w-[600px] mx-auto opacity-80 leading-relaxed text-gray">
                    Real results from real people. Join thousands of happy customers loving their healthy hair journey.
                </p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="bg-[#111] p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 fade-up"
                    >
                        <div className="flex gap-1 text-gold mb-4 text-sm">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                        <p className="mb-6 leading-relaxed opacity-90 italic">"{testimonial.review}"</p>
                        <h4 className="font-bold text-lg text-white font-heading">{testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
