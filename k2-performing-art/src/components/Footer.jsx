import { MessageCircle, MapPin, Phone } from "lucide-react";

function Footer() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const academyAddress = import.meta.env.VITE_ACADEMY_ADDRESS;
  const academyPhone = import.meta.env.VITE_ACADEMY_PHONE;

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
          {academyAddress && (
            <p className="footer-contact">
              <MapPin /> {academyAddress}
            </p>
          )}
          {academyPhone && (
            <p className="footer-contact">
              <Phone /> {academyPhone}
            </p>
          )}
        </div>
      </div>

      <div className="social-links">
        <a
          href="https://www.instagram.com/k2academy/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit K2 Academy on Instagram"
          className="social-text"
        >
          IG
        </a>

        <a href="https://www.facebook.com/groups/1476389479332052" aria-label="Facebook" className="social-text">
          f
        </a>

        <a href="https://www.youtube.com/@k2academyofperformingarts432" aria-label="YouTube" className="social-text">
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
