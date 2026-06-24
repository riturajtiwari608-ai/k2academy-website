import { motion } from "framer-motion";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

function Gallery() {
  const images = [slide1, slide2, slide3, slide1, slide2, slide3];

  return (
    <section id="gallery" className="section gallery-section">
      <span className="section-tag">Gallery</span>
      <h2>Moments From Our Academy</h2>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <motion.div
            className="gallery-item"
            key={index}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={image} alt="K2 Academy Gallery" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;