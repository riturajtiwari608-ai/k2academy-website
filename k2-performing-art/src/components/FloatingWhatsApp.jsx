import { MessageCircle } from "lucide-react";

function FloatingWhatsApp() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const message =
    "Hello K2 Academy Performing Art, I want to know about admission and course details.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle />
    </a>
  );
}

export default FloatingWhatsApp;