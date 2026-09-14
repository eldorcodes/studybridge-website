import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
const [form, setForm] = useState({
name: "",
email: "",
message: "",
});

const [submitted, setSubmitted] = useState(false);
const [sending, setSending] = useState(false);

const handleChange = (e) => {
setForm((previous) => ({
...previous,
[e.target.name]: e.target.value,
}));
};

const handleSubmit = async (e) => {
e.preventDefault();

if (sending) {
  return;
}

setSending(true);

try {
  await emailjs.send(
    "service_6z075yo",
    "template_taxi4zo",
    {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    },
    "smPuTpReDcFQ_aM20"
  );

  setSubmitted(true);

  setForm({
    name: "",
    email: "",
    message: "",
  });
} catch (error) {
  console.error("EmailJS Error:", error);
  alert("Failed to send your message. Please try again.");
} finally {
  setSending(false);
}

};

return (
<main className="contact-container">
<section className="contact-header">
<span className="contact-eyebrow">GET IN TOUCH</span>

    <h1 className="contact-title">Contact Us</h1>

    <p className="contact-subtitle">
      Have a question, suggestion, or need help with one of our products?
      We would love to hear from you.
    </p>
  </section>

  <section className="contact-content">
    <div className="form-wrapper">
      <div className="form-header">
        <span className="form-icon">✉</span>

        <div>
          <h2>Send us a message</h2>
          <p>We will get back to you as soon as possible.</p>
        </div>
      </div>

      {submitted ? (
        <div className="success-msg">
          <div className="success-icon">✓</div>

          <h3>Message sent successfully!</h3>

          <p>
            Thank you for contacting StudyBridge. We will get back to you
            soon.
          </p>

          <button
            type="button"
            className="new-message-button"
            onClick={() => setSubmitted(false)}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <span>Email</span>

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <span>Message</span>

            <textarea
              name="message"
              placeholder="How can we help?"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button
            type="submit"
            className="contact-submit"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
            {!sending && <span>→</span>}
          </button>
        </form>
      )}
    </div>

    <div className="contact-info">
      <div className="company-badge">SB</div>

      <h2>StudyBridge LLC</h2>

      <p className="company-description">
        Building practical educational, productivity, utility, and
        AI-powered applications for modern users.
      </p>

      <div className="contact-details">
        <div className="contact-detail">
          <div className="detail-icon">⌖</div>

          <div>
            <span>Address</span>
            <p>
              30 N Gould St, Ste R
              <br />
              Sheridan, WY 82801
            </p>
          </div>
        </div>

        <div className="contact-detail">
          <div className="detail-icon">☎</div>

          <div>
            <span>Phone</span>
            <a href="tel:+16506440796">
              +1 (650) 644-0796
            </a>
          </div>
        </div>

        <div className="contact-detail">
          <div className="detail-icon">✉</div>

          <div>
            <span>Email</span>
            <a href="mailto:studybridgellc@gmail.com">
              studybridgellc@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="StudyBridge Location"
          src="https://www.google.com/maps?q=30+N+Gould+St+Ste+R+Sheridan,+WY+82801&output=embed"
          width="100%"
          height="250"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</main>

);
}