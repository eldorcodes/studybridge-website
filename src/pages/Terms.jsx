import React from "react";
import "./Terms.css";

export default function Terms() {
  return (
    <div className="terms-page">
      <h1 className="terms-title">Terms & Conditions</h1>
      <p className="terms-updated">Last updated: September 28, 2025</p>

      <div className="terms-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to StudyBridge LLC (“we,” “our,” “us”). By using our apps,
            website, and services, you agree to these Terms & Conditions. Please
            read them carefully.
          </p>
        </section>

        <section>
          <h2>2. Use of Services</h2>
          <ul>
            <li>You must be at least 13 years old to use our services.</li>
            <li>
              You agree to use our services only for lawful purposes and in
              compliance with applicable laws.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account and activities conducted under it.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Subscriptions & Payments</h2>
          <p>
            Payments are processed securely by Stripe. Subscriptions will renew
            automatically unless canceled before the renewal date. We do not
            store payment card details.
          </p>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>
            All content, trademarks, and software provided by StudyBridge LLC
            remain our property. You may not copy, modify, or redistribute our
            content without permission.
          </p>
        </section>

        <section>
          <h2>5. Termination</h2>
          <p>
            We may suspend or terminate your access to our services if you
            violate these Terms or engage in harmful activities.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            Our services are provided “as is.” StudyBridge LLC shall not be held
            liable for any damages arising from your use of our apps, website,
            or services.
          </p>
        </section>

        <section>
          <h2>7. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of Wyoming, USA.
          </p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:{" "}
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:support@studybridge.io">support@studybridge.io</a>
          </p>
        </section>
      </div>
    </div>
  );
}