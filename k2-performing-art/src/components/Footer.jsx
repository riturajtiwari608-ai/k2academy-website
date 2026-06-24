import { MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <h2>K2 Performing Art Academy</h2>
      <p>Discipline • Confidence • Creativity • Performance</p>

      <div className="social-links">
        <a
          href="https://www.instagram.com/k2academy/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit K2 Academy on Instagram"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" className="social-icon-dot" />
          </svg>
        </a>

        <a href="#" aria-label="Facebook" className="facebook-text">
          f
        </a>

        <a href="#" aria-label="YouTube">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8Z" />
            <path d="m10 15.5 5-3.5-5-3.5v7Z" fill="currentColor" stroke="none" />
          </svg>
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
