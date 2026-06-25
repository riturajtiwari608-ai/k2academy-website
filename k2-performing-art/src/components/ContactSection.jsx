import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

function ContactSection() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "91XXXXXXXXXX";

  const message =
    "Hello K2 Academy Of Performing Art, I want to know about admission and course details.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section id="contact" className="section contact-section">
      <span className="section-tag">Contact Us</span>
      <h2>Visit K2 Academy Of Performing Art</h2>
      <p className="contact-subtitle">
        For admission, trial class, batch timing or fee details, contact us directly.
      </p>

      <div className="contact-wrapper">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="contact-item">
            <MapPin />
            <div>
              <h3>Academy Address</h3>
              <p>Add your full academy address here</p>
            </div>
          </div>

          <div className="contact-item">
            <Phone />
            <div>
              <h3>Phone / WhatsApp</h3>
              <p>+91 98310 54763</p>
            </div>
          </div>

          <div className="contact-item">
            <Mail />
            <div>
              <h3>Email</h3>
              <p>youracademy@email.com</p>
            </div>
          </div>

          <div className="contact-item">
            <Clock />
            <div>
              <h3>Class Timing</h3>
              <p>Morning & Evening Batches Available</p>
            </div>
          </div>

          <a href={whatsappLink} target="_blank" rel="noreferrer" className="contact-whatsapp-btn">
            <MessageCircle />
            Chat With Academy
          </a>
        </motion.div>

        <motion.div
          className="map-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="map-placeholder">
            <MapPin />
            <h3>Google Map Location</h3>
            <p>
              After getting your exact academy address, we will add live Google Map here.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
