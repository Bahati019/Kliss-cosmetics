// import "../styles/Home.css";
import posterImage from "../Poster.png";
import { WHATSAPP_LINK } from "../utils/constants";

const Home = () => {
  return (
    <main className="p-10 pt-24" id="home">
      {/* HERO */}
      <section className="min-h-screen px-[8%] py-40 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center gap-16 relative overflow-hidden bg-[radial-gradient(circle_at_70%_50%,#2a2a2a_0%,#0A0A0A_60%)] text-white">
        <div className="max-w-[500px] text-center md:text-left mx-auto md:mx-0">
          <h1 className="fade-up font-heading text-[clamp(3.5rem,5vw,5.5rem)] leading-[1.05] mb-6 bg-gradient-to-br from-white via-white to-[#a8a8a8] bg-clip-text text-transparent tracking-[-2px]">
            Strong, Shiny, Healthy Hair
          </h1>
          <p className="fade-up fade-delay-1 text-lg leading-relaxed opacity-90 mb-8 max-w-[500px] mx-auto md:mx-0">
            KLISS Hair Food is specially formulated to nourish, strengthen,
            and protect your hair every day.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            className="primary-btn fade-up fade-delay-2 inline-block bg-gold-light text-black px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg no-underline"
          >
            Order via WhatsApp
          </a>
        </div>

        <img
          src={posterImage}
          alt="KLISS Cosmetics"
          className="w-full max-w-[480px] justify-self-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-[fadeUp_1s_ease-out_backwards] delay-300"
        />
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-[10%] bg-[#fafafa] text-center">
        <h2 className="text-4xl text-black font-heading mb-12">Why Choose KLISS?</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:bg-gradient-to-br hover:from-white hover:to-[#f9f9f9] fade-up fade-delay-1 group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-gold-dark transition-colors text-black">🌿 Nourishing Formula</h3>
            <p className="text-gray-600">Deeply moisturizes hair and scalp.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:bg-gradient-to-br hover:from-white hover:to-[#f9f9f9] fade-up fade-delay-2 group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-gold-dark transition-colors text-black">✨ Adds Shine</h3>
            <p className="text-gray-600">Leaves your hair soft, shiny, and healthy.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:bg-gradient-to-br hover:from-white hover:to-[#f9f9f9] fade-up fade-delay-3 group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-gold-dark transition-colors text-black">💪 Strengthens Hair</h3>
            <p className="text-gray-600">Reduces breakage and promotes growth.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:bg-gradient-to-br hover:from-white hover:to-[#f9f9f9] fade-up fade-delay-4 group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-gold-dark transition-colors text-black">🧴 All Hair Types</h3>
            <p className="text-gray-600">Perfect for natural, relaxed, and braided hair.</p>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="py-24 px-[10%] bg-black text-white">
        <h2 className="text-center text-3xl mb-8 font-heading">How to Use</h2>
        <ol className="max-w-[600px] mx-auto list-none counter-reset-step">
          <li className="relative pl-12 mb-6 leading-relaxed before:content-[counter(step)] before:absolute before:left-0 before:top-0 before:w-8 before:h-8 before:bg-gold-light before:text-black before:rounded-full before:grid before:place-items-center before:font-bold before:counter-increment-step">
            Apply a small amount to clean hair or scalp
          </li>
          <li className="relative pl-12 mb-6 leading-relaxed before:content-[counter(step)] before:absolute before:left-0 before:top-0 before:w-8 before:h-8 before:bg-gold-light before:text-black before:rounded-full before:grid before:place-items-center before:font-bold before:counter-increment-step">
            Massage gently with fingertips
          </li>
          <li className="relative pl-12 mb-6 leading-relaxed before:content-[counter(step)] before:absolute before:left-0 before:top-0 before:w-8 before:h-8 before:bg-gold-light before:text-black before:rounded-full before:grid before:place-items-center before:font-bold before:counter-increment-step">
            Use daily or as needed
          </li>
        </ol>
      </section>

      {/* CTA */}
      <section className="py-32 px-[10%] text-center bg-gradient-to-br from-gold-light to-[#e2b500] text-black">
        <h2 className="text-4xl mb-4 font-heading">Ready for Healthy Hair?</h2>
        <p className="text-lg mb-8">Order KLISS Hair Food today and feel the difference.</p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          className="inline-block bg-black text-white px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-lg no-underline"
        >
          Order Now
        </a>
      </section>
    </main>
  );
};

export default Home;
