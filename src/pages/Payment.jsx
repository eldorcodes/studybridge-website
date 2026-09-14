import React, { useEffect, useRef, useState } from "react";
import "./Payment.css";

export default function Payment() {
const paypalRef = useRef(null);
const [amount, setAmount] = useState("");
const [scriptLoaded, setScriptLoaded] = useState(false);

useEffect(() => {
if (window.paypal) {
setScriptLoaded(true);
return;
}

const existingScript = document.querySelector(
  'script[src*="paypal.com/sdk/js"]'
);

if (existingScript) {
  existingScript.addEventListener("load", () => setScriptLoaded(true));
  return;
}

const script = document.createElement("script");

script.src =
  "https://www.paypal.com/sdk/js?client-id=Af9Y-oHp3lnPS09bZWPLbDzyeU_hD3ms--6JhphQPNF17jBOkkS1swnlBYoCqeJsIoQ69MElfN0njigs&currency=USD";

script.async = true;

script.onload = () => {
  setScriptLoaded(true);
};

script.onerror = () => {
  console.error("Unable to load PayPal SDK.");
};

document.body.appendChild(script);

}, []);

useEffect(() => {
if (
!scriptLoaded ||
!window.paypal ||
!paypalRef.current ||
!amount ||
Number(amount) <= 0
) {
if (paypalRef.current && (!amount || Number(amount) <= 0)) {
paypalRef.current.innerHTML = "";
}

  return;
}

paypalRef.current.innerHTML = "";

window.paypal
  .Buttons({
    style: {
      layout: "vertical",
      color: "gold",
      shape: "rect",
      label: "paypal",
      height: 48,
    },

    createOrder: (data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            description: "Support StudyBridge LLC",
            amount: {
              currency_code: "USD",
              value: Number(amount).toFixed(2),
            },
          },
        ],
      });
    },

    onApprove: async (data, actions) => {
      try {
        const details = await actions.order.capture();
        const payerName =
          details?.payer?.name?.given_name || "there";

        alert(
          `Thank you, ${payerName}! Your payment of $${Number(
            amount
          ).toFixed(2)} was successful.`
        );

        setAmount("");
      } catch (error) {
        console.error("PayPal Capture Error:", error);
        alert("Payment could not be completed. Please try again.");
      }
    },

    onError: (error) => {
      console.error("PayPal Error:", error);
      alert("Payment failed. Please try again.");
    },
  })
  .render(paypalRef.current);

return () => {
  if (paypalRef.current) {
    paypalRef.current.innerHTML = "";
  }
};

}, [scriptLoaded, amount]);

const handleStripe = () => {
window.location.href =
"https://buy.stripe.com/9B6aEX5061YO3HZ3Cbew80w";
};

const selectAmount = (value) => {
setAmount(value);
};

return (
<main className="payment-page">
<section className="payment-header">
<span className="payment-eyebrow">SECURE PAYMENT</span>

    <h1>Support StudyBridge LLC</h1>

    <p>
      Your support helps us continue building useful educational,
      productivity, and AI-powered tools for students, researchers,
      creators, and everyday users.
    </p>
  </section>

  <section className="payment-layout">
    <div className="payment-info">
      <div className="payment-info-icon">✦</div>

      <h2>Help us build more</h2>

      <p>
        Every contribution helps StudyBridge improve existing products,
        launch new apps, and keep creating practical tools that make
        everyday tasks easier.
      </p>

      <div className="payment-benefits">
        <div className="payment-benefit">
          <span>✓</span>
          <p>Support independent app development</p>
        </div>

        <div className="payment-benefit">
          <span>✓</span>
          <p>Help us build new educational tools</p>
        </div>

        <div className="payment-benefit">
          <span>✓</span>
          <p>Contribute to future AI-powered products</p>
        </div>
      </div>
    </div>

    <div className="payment-box">
      <div className="payment-box-header">
        <span className="payment-box-label">CONTRIBUTION</span>

        <h2>Choose an amount</h2>

        <p>Enter any amount you would like to contribute.</p>
      </div>

      <div className="amount-presets">
        <button
          type="button"
          onClick={() => selectAmount("5")}
          className={amount === "5" ? "selected" : ""}
        >
          $5
        </button>

        <button
          type="button"
          onClick={() => selectAmount("10")}
          className={amount === "10" ? "selected" : ""}
        >
          $10
        </button>

        <button
          type="button"
          onClick={() => selectAmount("25")}
          className={amount === "25" ? "selected" : ""}
        >
          $25
        </button>

        <button
          type="button"
          onClick={() => selectAmount("50")}
          className={amount === "50" ? "selected" : ""}
        >
          $50
        </button>
      </div>

      <div className="amount-input-wrapper">
        <span>$</span>

        <input
          type="number"
          min="1"
          step="0.01"
          placeholder="Enter amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />

        <small>USD</small>
      </div>

      <button
        type="button"
        className="stripe-button"
        onClick={handleStripe}
      >
        <span className="stripe-icon">◆</span>
        <span>Pay with Stripe</span>
        <span className="button-arrow">→</span>
      </button>

      <div className="payment-divider">
        <span>OR</span>
      </div>

      <div className="paypal-section">
        <p className="paypal-label">Pay securely with PayPal</p>

        {amount && Number(amount) > 0 ? (
          <div
            ref={paypalRef}
            className="paypal-button-container"
          ></div>
        ) : (
          <div className="paypal-placeholder">
            <span>Enter an amount above</span>
            <small>PayPal will appear here</small>
          </div>
        )}
      </div>

      <div className="secure-note">
        <span>🔒</span>
        <p>
          Payments are processed securely by Stripe and PayPal.
        </p>
      </div>
    </div>
  </section>
</main>

);
}