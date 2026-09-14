import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="/" onClick={closeMenu}>
            StudyBridge <span>LLC</span>
          </NavLink>
        </div>

        <div className={`links ${isOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Projects
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Pricing
          </NavLink>

          <NavLink
            to="/payment"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Make a payment
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>

        <button
          type="button"
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}