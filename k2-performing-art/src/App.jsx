import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
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
      <Footer />
    </div>
  );
}

export default App;