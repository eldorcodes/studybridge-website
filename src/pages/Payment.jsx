import React from "react";
import "./Payment.css";

export default function Payment() {
  const handlePayment = () => {
    // ✅ Redirects to your live Stripe Payment Link
    window.location.href = "https://buy.stripe.com/9B6aEX5061YO3HZ3Cbew80w";
  };

  return (
    <div className="payment-page">
      <h1>Support StudyBridge LLC</h1>
      <p>
        Enter any amount and pay securely via Stripe.  
        Your contribution helps us keep building amazing tools 🚀
      </p>

      <div className="payment-box">
        <button onClick={handlePayment}>Pay with Stripe</button>
      </div>
    </div>
  );
}