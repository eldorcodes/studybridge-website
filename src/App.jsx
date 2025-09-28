import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Pricing from "./pages/Pricing";
import Projects from "./pages/Projects";
import Payment from "./pages/Payment";
import Privacy from "./pages/Privacy";   // ✅ Import Privacy
import Terms from "./pages/Terms";       // ✅ Import Terms

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} StudyBridge LLC. All rights reserved.</p>
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
      </div>
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
        <Route path="/projects" element={<Projects />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/privacy" element={<Privacy />} />     {/* ✅ Privacy route */}
        <Route path="/terms" element={<Terms />} />         {/* ✅ Terms route */}
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;