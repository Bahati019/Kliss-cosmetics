import { useEffect, useState } from "react";
// import "../styles/ScrollToTop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 bg-gold text-black w-12 h-12 rounded-full text-2xl cursor-pointer shadow-lg transition-all duration-300 z-50 flex items-center justify-center hover:bg-white hover:-translate-y-1 hover:shadow-xl ${visible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
