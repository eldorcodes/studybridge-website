import React from "react";

function PaymentButton() {
  const handleCheckout = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <button
      onClick={handleCheckout}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
    >
      Subscribe for $20/month
    </button>
  );
}

export default PaymentButton;