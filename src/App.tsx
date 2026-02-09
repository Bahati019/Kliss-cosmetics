import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Single-page scroll layout */}
      <Home />
      <About />
      <Products />
      <Testimonials />
      <Contact />

      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
