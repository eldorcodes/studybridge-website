import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Pricing from "./pages/Pricing";
import Projects from "./pages/Projects";
import Payment from "./pages/Payment";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} StudyBridge LLC. All rights reserved.</p>
    </footer>
  );
}






function Success() {
  return (
    <div className="page success">
      <h1>✅ Payment Successful!</h1>
      <p>Thanks for subscribing to StudyBridge LLC 🎉</p>
      <Link to="/" className="btn">Back Home</Link>
    </div>
  );
}

function Cancel() {
  return (
    <div className="page cancel">
      <h1>❌ Payment Canceled</h1>
      <p>No worries — you can subscribe anytime.</p>
      <Link to="/" className="btn">Back Home</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;