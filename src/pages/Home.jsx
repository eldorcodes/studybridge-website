import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>StudyBridge LLC</h1>
        <p className="tagline">
          Educational & Utility SaaS for students and scholars 🚀
        </p>
        <Link to="/pricing" className="btn-primary">
          View Pricing Plans
        </Link>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          StudyBridge LLC is building the next generation of educational and
          utility apps designed to help students, researchers, and small shops
          succeed. From productivity tools to interactive learning apps, we
          provide solutions that save time, simplify tasks, and empower your
          academic journey.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose StudyBridge?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📚 Student Focused</h3>
            <p>Apps designed with students and scholars in mind.</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Productivity</h3>
            <p>Boost your efficiency with time-saving tools.</p>
          </div>
          <div className="feature-card">
            <h3>🌍 Accessible</h3>
            <p>Cloud-based, works everywhere, anytime.</p>
          </div>
          <div className="feature-card">
            <h3>💡 Affordable</h3>
            <p>Flexible pricing plans that fit your budget.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-preview">
        <h2>Get Started Today</h2>
        <p>
          Join hundreds of students and researchers already using StudyBridge
          apps to simplify their work and learning.
        </p>
        <Link to="/pricing" className="btn-primary">
          Choose Your Plan
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} StudyBridge LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;