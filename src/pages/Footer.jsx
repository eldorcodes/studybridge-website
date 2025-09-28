import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} StudyBridge LLC. All rights reserved.</p>
        <div className="footer-links">
          <NavLink to="/privacy">Privacy Policy</NavLink>
          <NavLink to="/terms">Terms & Conditions</NavLink>
        </div>
      </div>
    </footer>
  );
}