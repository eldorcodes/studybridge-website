import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="home-container">
      <section className="hero">
        <h1>StudyBridge LLC</h1>
        <p className="tagline">
          Mobile utilities for everyday tasks, plus AI tools for creating and learning.
        </p>
        <Link to="/projects" className="btn-primary">Explore our apps</Link>
      </section>

      <section className="about">
        <h2>Practical apps for everyday tasks</h2>
        <p>
          StudyBridge LLC builds focused apps for working with documents, photos,
          and video. We also build educational apps and AI tools, including a
          study guide for international students and a video maker that works
          from text prompts and images.
        </p>
      </section>

      <section className="features">
        <h2>Find the right tool</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Documents</h3>
            <p>Merge PDFs, turn photos into documents, and convert between PDF and Word.</p>
          </div>
          <div className="feature-card">
            <h3>Photos &amp; utilities</h3>
            <p>Convert HEIC images, prepare passport photos, and create QR codes.</p>
          </div>
          <div className="feature-card">
            <h3>AI tools</h3>
            <p>Create videos from text or images with Vireel, or check suspicious messages with ScamShield AI.</p>
          </div>
          <div className="feature-card">
            <h3>Education</h3>
            <p>Find guidance on the F-1 visa process for international students.</p>
          </div>
        </div>
      </section>

      <section className="pricing-preview">
        <h2>Have a question about an app?</h2>
        <p>Contact StudyBridge for product support, feedback, or general inquiries.</p>
        <Link to="/contact" className="btn-primary">Contact support</Link>
      </section>
    </main>
  );
}
