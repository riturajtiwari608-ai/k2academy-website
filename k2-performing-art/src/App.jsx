import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import CandidateForm from "./components/CandidateForm";
import QRCodeSection from "./components/QRCodeSection";
import ContactSection from "./components/ContactSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSlider />
      <About />
      <Courses />
      <Gallery />
      <Services />
      <CandidateForm />
      <QRCodeSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;