import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_6z075yo", // ✅ Your EmailJS Service ID
        "template_taxi4zo", // ✅ Your EmailJS Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "smPuTpReDcFQ_aM20" // ✅ Your EmailJS Public Key
      );

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We’d love to hear from you. Reach out using the form below or via our contact details.
      </p>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="form-wrapper">
          {submitted ? (
            <p className="success-msg">✅ Thank you, we’ll get back to you soon!</p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email
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
                Message
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>
              <button type="submit">Send Message</button>
            </form>
          )}
        </div>

        {/* Company Info */}
        <div className="contact-info">
          <h2>StudyBridge LLC</h2>
          <p><strong>Address:</strong><br />30 N Gould St, Ste R<br />Sheridan, WY 82801</p>
          <p><strong>Phone:</strong> <a href="tel:+16506440796">+1 (650) 644-0796</a></p>
          <p><strong>Email:</strong> <a href="mailto:support@studybridge.io">support@studybridge.io</a></p>

          {/* Embedded Google Map */}
          <div className="map-container">
            <iframe
              title="StudyBridge Location"
              src="https://www.google.com/maps?q=30+N+Gould+St+Ste+R+Sheridan,+WY+82801&output=embed"
              width="100%"
              height="250"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}