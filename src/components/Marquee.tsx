const Marquee = () => {
  const words = [
    "✨ 100% Natural Ingredients",
    "✨ Nourish Your Hair",
    "✨ Fast Shipping",
    "✨ Premium Quality",
    "✨ Restores Strength",
    "✨ Deeply Moisturizing",
  ];

  // Duplicate the array to ensure seamless looping
  const marqueeItems = [...words, ...words];

  return (
    <div className="w-full bg-gold py-4 overflow-hidden flex whitespace-nowrap border-y border-white/10 relative z-10">
      <div className="animate-marquee flex gap-12">
        {marqueeItems.map((item, index) => (
          <span
            key={index}
            className="text-black font-bold uppercase tracking-widest text-lg px-6"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
