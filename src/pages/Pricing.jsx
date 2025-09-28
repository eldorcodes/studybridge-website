import React from "react";
import "./Pricing.css";

export default function Pricing() {
  const plans = [
    {
      key: "basic",
      name: "Basic",
      price: "$10/mo",
      features: ["Access to free utilities", "Email support"],
    },
    {
      key: "pro",
      name: "Pro",
      price: "$20/mo",
      features: [
        "All Basic features",
        "Premium educational apps",
        "Priority support",
      ],
      recommended: true,
      featured: true, // ✅ Make Pro the featured middle card
    },
    {
      key: "premium",
      name: "Premium",
      price: "$30/mo",
      features: [
        "All Pro features",
        "1-on-1 mentorship",
        "Exclusive updates",
      ],
    },
  ];

  const handleCheckout = async (plan) => {
    try {
      const res = await fetch("http://localhost:8080/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      window.location.href = data.url;
    } catch (err) {
      console.error("Checkout error:", err);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pricing-page">
      <h1 className="pricing-title">Pricing Plans</h1>
      <p className="pricing-subtitle">
        Choose the plan that best fits your needs. Upgrade anytime.
      </p>

      <div className="pricing-container">
        {plans.map((plan) => (
          <div
            className={`pricing-card ${plan.featured ? "featured" : ""}`}
            key={plan.key}
          >
            {plan.recommended && <div className="ribbon">Recommended</div>}
            <h2>{plan.name}</h2>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            <button
              className="btn"
              onClick={() => handleCheckout(plan.key)}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}