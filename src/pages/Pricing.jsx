import React from "react";
import "./Pricing.css";

export default function Pricing() {
  const plans = [
    {
      key: "basic",
      name: "Basic",
      price: "$10/mo",
      link: "https://buy.stripe.com/bJeeVd2RYavkcev1u3ew80x", // ✅ Stripe Payment Link
      features: ["Access to free utilities", "Email support"],
    },
    {
      key: "pro",
      name: "Pro",
      price: "$20/mo",
      link: "https://buy.stripe.com/5kQ9AT78e0UK92j2y7ew80y", // ✅ Stripe Payment Link
      features: [
        "All Basic features",
        "Premium educational apps",
        "Priority support",
      ],
      recommended: true,
      featured: true,
    },
    {
      key: "premium",
      name: "Premium",
      price: "$30/mo",
      link: "https://buy.stripe.com/9B6bJ164a1YOguL0pZew80z", // ✅ Stripe Payment Link
      features: [
        "All Pro features",
        "1-on-1 mentorship",
        "Exclusive updates",
      ],
    },
  ];

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
            <a href={plan.link} target="_blank" rel="noopener noreferrer">
              <button className="btn">Choose {plan.name}</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}