// import "../styles/About.css";

const About = () => {
  return (
    <section className="bg-white min-h-[80vh] px-[10%] py-28 text-center" id="about">
      <div className="max-w-[1000px] mx-auto fade-up">
        <h2 className="text-4xl font-heading mb-6 text-black">About KLISS Hair Food</h2>

        <p className="text-xl max-w-[700px] mx-auto opacity-80 leading-relaxed mb-16 text-gray-700">
          KLISS Cosmetics was created with one goal — to help women love
          their hair again.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
          <div className="p-8 bg-[#fafafa] rounded-2xl transition-all duration-300 border border-transparent hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-gold/20 fade-up fade-delay-1 group">
            <h3 className="text-xl font-bold mb-4 text-black group-hover:text-gold-dark transition-colors">🌿 Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Born from the need for healthy, nourished hair, KLISS combines
              carefully selected ingredients to restore strength, shine,
              and confidence.
            </p>
          </div>

          <div className="p-8 bg-[#fafafa] rounded-2xl transition-all duration-300 border border-transparent hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-gold/20 fade-up fade-delay-2 group">
            <h3 className="text-xl font-bold mb-4 text-black group-hover:text-gold-dark transition-colors">🎯 Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide affordable, effective hair care solutions for all
              hair types — natural, relaxed, or styled.
            </p>
          </div>

          <div className="p-8 bg-[#fafafa] rounded-2xl transition-all duration-300 border border-transparent hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-gold/20 fade-up fade-delay-3 group">
            <h3 className="text-xl font-bold mb-4 text-black group-hover:text-gold-dark transition-colors">💛 Our Promise</h3>
            <p className="text-gray-600 leading-relaxed">
              No harsh chemicals. Just nourishment, consistency, and
              visible results you can feel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
