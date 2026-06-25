import { useState } from "react";
import { Send, CheckCircle, MessageCircle } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

function CandidateForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    age: "",
    course: "",
    purpose: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const courses = [
    "Dance",
    "Aerobics",
    "Zumba",
    "Yoga",
    "Karate",
    "Skating",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createWhatsAppMessage = () => {
    return `Hello K2 Academy Performing Art ,%0A%0AI have submitted the enquiry form.%0A%0AName: ${formData.full_name}%0APhone: ${formData.phone}%0ACourse: ${formData.course}%0APurpose: ${formData.purpose}`;
  };

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${createWhatsAppMessage()}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    if (!formData.full_name || !formData.phone || !formData.course) {
      setError("Please fill name, phone number and course.");
      setLoading(false);
      return;
    }

    if (!supabase) {
      setError("Enquiries are temporarily unavailable. Please contact the academy on WhatsApp.");
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from("candidate_enquiries")
      .insert([formData]);

    if (error) {
      setError("Something went wrong. Please try again.");
      console.error(error);
    } else {
      setSuccess(true);

      setFormData({
        full_name: "",
        phone: "",
        age: "",
        course: "",
        purpose: "",
        address: "",
        message: "",
      });
    }

    setLoading(false);
  };

  return (
    <section id="candidate-form" className="section form-section">
      <span className="section-tag">Candidate Form</span>
      <h2>Join K2 Academy Performing Art</h2>
      <p className="form-subtitle">
        Fill your details and our academy team will contact you soon.
      </p>

      <form className="candidate-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Mobile Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter mobile number"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
            />
          </div>

          <div className="form-group">
            <label>Course Interested In *</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select course</option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Purpose</label>
          <input
            type="text"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            placeholder="Admission enquiry / trial class / fee details"
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            rows="5"
          ></textarea>
        </div>

        {error && <p className="form-error">{error}</p>}

        {success && (
          <div className="form-success">
            <CheckCircle />
            <span>Your enquiry has been submitted successfully.</span>
          </div>
        )}

        <button type="submit" className="submit-btn" disabled={loading}>
          <Send />
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>

        {success && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-submit-btn"
          >
            <MessageCircle />
            Contact Academy on WhatsApp
          </a>
        )}
      </form>
    </section>
  );
}

export default CandidateForm;
