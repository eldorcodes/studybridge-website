import React, { useEffect, useRef, useState } from "react";
import "./Payment.css";

export default function Payment() {
  const paypalRef = useRef();
  const [amount, setAmount] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // ✅ Load PayPal SDK dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=Af9Y-oHp3lnPS09bZWPLbDzyeU_hD3ms--6JhphQPNF17jBOkkS1swnlBYoCqeJsIoQ69MElfN0njigs&currency=USD`;
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  // ✅ Render or re-render PayPal button when amount changes
  useEffect(() => {
    if (scriptLoaded && window.paypal && amount > 0) {
      // Clear previous buttons before re-rendering
      paypalRef.current.innerHTML = "";

      window.paypal
        .Buttons({
          style: {
            layout: "vertical",
            color: "gold",
            shape: "rect",
            label: "paypal",
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: "Support StudyBridge LLC",
                  amount: {
                    currency_code: "USD",
                    value: amount,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const details = await actions.order.capture();
            const payerName = details.payer.name.given_name;
            alert(`✅ Thank you, ${payerName}! Your payment of $${amount} was successful.`);
            setAmount("");
          },
          onError: (err) => {
            console.error("PayPal Error:", err);
            alert("❌ Payment failed. Please try again.");
          },
        })
        .render(paypalRef.current);
    }
  }, [scriptLoaded, amount]);

  // ✅ Stripe redirect
  const handleStripe = () => {
    window.location.href = "https://buy.stripe.com/9B6aEX5061YO3HZ3Cbew80w";
  };

  return (
    <div className="payment-page">
      <h1>Support StudyBridge LLC</h1>
      <p>
        Enter any amount and pay securely via <strong>Stripe</strong> or <strong>PayPal</strong>.  
        Your contribution helps us keep building amazing tools 🚀
      </p>

      <div className="payment-box">
        <input
          type="number"
          placeholder="Enter amount (USD)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleStripe}>💳 Pay with Stripe</button>

        {/* PayPal Button Container */}
        <div ref={paypalRef} className="paypal-button-container"></div>
      </div>
    </div>
  );
}