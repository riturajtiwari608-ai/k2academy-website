import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <h2>K2 Performing Art Academy</h2>
      <p>Discipline • Confidence • Creativity • Performance</p>

      <div className="social-links">
        <a href="#" aria-label="Instagram">
          <Instagram />
        </a>
        <a href="#" aria-label="Facebook">
          <Facebook />
        </a>
        <a href="#" aria-label="YouTube">
          <Youtube />
        </a>
        <a href="#" aria-label="WhatsApp">
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