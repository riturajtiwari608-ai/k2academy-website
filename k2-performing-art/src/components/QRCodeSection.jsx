import { QRCodeCanvas } from "qrcode.react";
import { QrCode, Download, MessageCircle } from "lucide-react";

function QRCodeSection() {
  const formUrl =
    import.meta.env.VITE_FORM_URL ||
    `${window.location.origin}${window.location.pathname}#candidate-form`;

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const whatsappMessage =
    "Hello K2 Performing Art Academy, I want to know about admission and course details.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const downloadQRCode = () => {
    const canvas = document.getElementById("candidate-qr-code");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "k2-candidate-form-qr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <section className="section qr-section">
      <span className="section-tag">Scan & Join</span>
      <h2>Candidate Enquiry QR Code</h2>

      <p className="qr-subtitle">
        Students can scan this QR code and directly open the Candidate Form.
      </p>

      <div className="qr-wrapper">
        <div className="qr-card">
          <div className="qr-icon">
            <QrCode />
          </div>

          <div className="qr-box">
            <QRCodeCanvas
              id="candidate-qr-code"
              value={formUrl}
              size={220}
              bgColor="#ffffff"
              fgColor="#071226"
              level="H"
              includeMargin={true}
            />
          </div>

          <h3>K2 Performing Art Academy</h3>
          <p>Scan this QR code for admission enquiry.</p>

          <button className="qr-download-btn" onClick={downloadQRCode}>
            <Download />
            Download QR Code
          </button>
        </div>

        <div className="qr-info-card">
          <h3>How Students Can Use This?</h3>

          <div className="qr-steps">
            <div>
              <span>01</span>
              <p>Student scans the QR code from poster, banner or reception.</p>
            </div>

            <div>
              <span>02</span>
              <p>Candidate form opens directly on their mobile phone.</p>
            </div>

            <div>
              <span>03</span>
              <p>Student fills name, phone number, course and enquiry details.</p>
            </div>

            <div>
              <span>04</span>
              <p>Details are saved in your Supabase database.</p>
            </div>
          </div>

          <a href={whatsappLink} target="_blank" rel="noreferrer" className="qr-whatsapp-btn">
            <MessageCircle />
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default QRCodeSection;
