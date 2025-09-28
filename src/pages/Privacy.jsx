import React from "react";
import "./Privacy.css";

export default function Privacy() {
  return (
    <div className="privacy-page">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-updated">Last updated: September 28, 2025</p>

      <div className="privacy-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            StudyBridge LLC (“we,” “our,” or “us”) respects your privacy. This
            Privacy Policy explains how we collect, use, and protect your
            information when you use our apps, website, and services.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Personal information such as name and email address.</li>
            <li>Payment details processed securely by Stripe.</li>
            <li>Usage data such as device type, browser, and interactions with our apps.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information to:</p>
          <ul>
            <li>Provide and improve our services.</li>
            <li>Process payments and subscriptions.</li>
            <li>Send important updates and support communications.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Sharing & Security</h2>
          <p>
            We do not sell your data. We only share it with trusted third-party
            providers (such as Stripe for payments) to deliver our services. We
            take appropriate measures to secure your data from unauthorized
            access.
          </p>
        </section>

        <section>
          <h2>5. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access,
            update, or delete your personal data. Please contact us if you wish
            to exercise these rights.
          </p>
        </section>

        <section>
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at: <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:support@studybridge.io">support@studybridge.io</a>
          </p>
        </section>
      </div>
    </div>
  );
}