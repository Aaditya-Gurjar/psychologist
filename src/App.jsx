import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import TherapyFor from "./sections/TherapyFor";
import Consultation from "./sections/Consultation";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TherapyFor />
        <Consultation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
