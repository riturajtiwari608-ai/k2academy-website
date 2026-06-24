import { MessageCircle, MapPin, Phone } from "lucide-react";

function Footer() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "91XXXXXXXXXX";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello K2 Performing Art Academy, I want to know about admission."
  )}`;

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h2>K2 Performing Art Academy</h2>
          <p>
            Building discipline, confidence, creativity and performance through
            dance, karate and performing arts.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="#about-us">About Us</a>
          <a href="#course">Courses</a>
          <a href="#gallery">Gallery</a>
          <a href="#candidate-form">Candidate Form</a>
        </div>

        <div>
          <h3>Contact</h3>
          <p className="footer-contact">
            <MapPin /> Add academy address here
          </p>
          <p className="footer-contact">
            <Phone /> +91 XXXXX XXXXX
          </p>
        </div>
      </div>

      <div className="social-links">
        <a href="#" aria-label="Instagram" className="social-text">
          IG
        </a>

        <a href="#" aria-label="Facebook" className="social-text">
          f
        </a>

        <a href="#" aria-label="YouTube" className="social-text">
          ▶
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <MessageCircle />
        </a>
      </div>

      <p className="copyright">
        © 2026 K2 Performing Art Academy. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;