import { motion } from "framer-motion";

function About() {
  return (
    <section id="about-us" className="section about-section">
      <motion.div
        className="section-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">About Us</span>
        <h2>K2 Academy Performing Art</h2>
        <p>
          K2 Academy Performing Art is dedicated to building confidence,
          discipline, creativity and physical strength through professional
          training in dance, karate and performing arts. We provide a positive
          learning environment where students can grow with passion, focus and
          consistency.
        </p>
      </motion.div>
    </section>
  );
}

export default About;