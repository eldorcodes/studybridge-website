import React from "react";
import "./Pricing.css";

export default function Pricing() {
const plans = [
{
key: "basic",
name: "Basic",
price: "$10",
period: "/month",
description: "Essential tools and support to get started.",
link: "https://buy.stripe.com/bJeeVd2RYavkcev1u3ew80x",
features: [
"Access to free utilities",
"Email support",
],
},
{
key: "pro",
name: "Pro",
price: "$20",
period: "/month",
description: "Everything you need for a more productive experience.",
link: "https://buy.stripe.com/5kQ9AT78e0UK92j2y7ew80y",
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
price: "$30",
period: "/month",
description: "The complete StudyBridge experience with personalized support.",
link: "https://buy.stripe.com/9B6bJ164a1YOguL0pZew80z",
features: [
"All Pro features",
"1-on-1 mentorship",
"Exclusive updates",
],
},
];

return (
<main className="pricing-page">
<section className="pricing-header">
<span className="pricing-eyebrow">SIMPLE & FLEXIBLE</span>

    <h1 className="pricing-title">
      Choose the right plan for you
    </h1>

    <p className="pricing-subtitle">
      Get access to StudyBridge tools and services with a plan designed
      around your needs. Upgrade anytime.
    </p>
  </section>

  <section className="pricing-container">
    {plans.map((plan) => (
      <article
        className={`pricing-card ${
          plan.featured ? "featured" : ""
        }`}
        key={plan.key}
      >
        {plan.recommended && (
          <div className="ribbon">
            Recommended
          </div>
        )}

        <div className="pricing-card-header">
          <h2>{plan.name}</h2>

          <p className="plan-description">
            {plan.description}
          </p>

          <div className="price-wrapper">
            <span className="price">
              {plan.price}
            </span>

            <span className="price-period">
              {plan.period}
            </span>
          </div>
        </div>

        <div className="features-divider"></div>

        <ul className="pricing-features">
          {plan.features.map((feature, index) => (
            <li key={index}>
              <span className="check-icon">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={plan.link}
          target="_blank"
          rel="noopener noreferrer"
          className="pricing-button"
        >
          Choose {plan.name}
          <span>→</span>
        </a>
      </article>
    ))}
  </section>

  <section className="pricing-note">
    <p>
      Secure payments powered by Stripe. You can upgrade or change your
      plan whenever you need.
    </p>
  </section>
</main>

);
}