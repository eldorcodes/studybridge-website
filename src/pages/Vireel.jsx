import React from "react";
import { Link } from "react-router-dom";
import {
  FaVideo,
  FaMagic,
  FaImage,
  FaBolt,
  FaMobileAlt,
  FaPlay,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import "./Vireel.css";

export default function Vireel() {
  const features = [
    {
      icon: <FaMagic />,
      title: "AI Video Generation",
      description:
        "Turn your ideas into engaging AI-generated videos using powerful video generation technology.",
    },
    {
      icon: <FaImage />,
      title: "Text & Image to Video",
      description:
        "Create videos from text prompts or bring your images to life with AI-powered animation.",
    },
    {
      icon: <FaBolt />,
      title: "Fast & Simple",
      description:
        "Create professional-looking AI videos without complicated editing software or technical skills.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Made for Mobile",
      description:
        "Generate and create videos directly from your iPhone or Android device wherever you are.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Describe your idea",
      description:
        "Enter a simple text prompt describing the video you want to create.",
    },
    {
      number: "02",
      title: "Add an image",
      description:
        "Optionally provide an image and let Vireel transform it into an AI-generated video.",
    },
    {
      number: "03",
      title: "Generate your video",
      description:
        "Let Vireel's AI turn your idea into a visually engaging video.",
    },
  ];

  return (
    <main className="vireel-page">
      <section className="vireel-hero">
        <div className="vireel-hero-glow vireel-glow-one"></div>
        <div className="vireel-hero-glow vireel-glow-two"></div>

        <div className="vireel-hero-content">
          <div className="vireel-badge">
            <FaVideo />
            <span>AI VIDEO CREATION</span>
          </div>

          <h1>
            Turn your ideas into
            <span> AI-generated videos.</span>
          </h1>

          <p className="vireel-hero-description">
            Vireel AI Video Maker makes it easy to create stunning videos from
            text and images using powerful AI video generation technology.
          </p>

          <div className="vireel-download-buttons">
            <a
              href="https://apps.apple.com/us/app/vireel-ai-video-maker/id6760539451"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button apple-button"
            >
              <div className="store-button-icon"></div>
              <div className="store-button-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.studybridgeapps.vireel"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button google-button"
            >
              <div className="google-play-icon">
                <FaPlay />
              </div>
              <div className="store-button-text">
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </div>
            </a>
          </div>

          <div className="vireel-platform-note">
            <FaCheck />
            <span>Available on iPhone and Android</span>
          </div>
        </div>

        <div className="vireel-hero-visual">
          <div className="vireel-phone">
            <div className="phone-top">
              <span></span>
            </div>

            <div className="phone-screen">
              <div className="phone-screen-glow"></div>

              <div className="phone-logo">
                <FaVideo />
              </div>

              <h3>Vireel</h3>
              <p>AI Video Maker</p>

              <div className="phone-video-preview">
                <div className="preview-play">
                  <FaPlay />
                </div>
              </div>

              <div className="phone-generate-button">
                Generate Video
              </div>
            </div>

            <div className="phone-bottom"></div>
          </div>

          <div className="floating-card floating-card-top">
            <FaMagic />
            <div>
              <strong>AI Generated</strong>
              <span>Video created</span>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <FaBolt />
            <div>
              <strong>Simple & Fast</strong>
              <span>Create anywhere</span>
            </div>
          </div>
        </div>
      </section>

      <section className="vireel-intro">
        <div className="vireel-section-heading">
          <span>CREATE WITHOUT LIMITS</span>
          <h2>Powerful AI video creation in your pocket.</h2>
          <p>
            Whether you're a content creator, marketer, student, entrepreneur,
            or simply want to bring an idea to life, Vireel gives you an
            accessible way to create AI-powered videos.
          </p>
        </div>
      </section>

      <section className="vireel-features">
        <div className="vireel-features-container">
          {features.map((feature) => (
            <article className="vireel-feature-card" key={feature.title}>
              <div className="vireel-feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vireel-how">
        <div className="vireel-how-content">
          <div className="vireel-how-heading">
            <span>HOW IT WORKS</span>
            <h2>Create a video in just a few simple steps.</h2>
            <p>
              Vireel is designed to keep AI video creation simple. You focus
              on the idea and Vireel handles the generation.
            </p>
          </div>

          <div className="vireel-steps">
            {steps.map((step) => (
              <div className="vireel-step" key={step.number}>
                <div className="vireel-step-number">{step.number}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vireel-capabilities">
        <div className="vireel-capabilities-container">
          <div className="vireel-capabilities-visual">
            <div className="capability-window">
              <div className="capability-window-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="capability-window-content">
                <div className="capability-icon">
                  <FaVideo />
                </div>

                <h3>Imagine it.</h3>
                <h3>Create it.</h3>
                <h3>Vireel it.</h3>

                <div className="capability-prompt">
                  <span>Your idea becomes a video...</span>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>

          <div className="vireel-capabilities-text">
            <span>BUILT FOR CREATORS</span>
            <h2>From a simple idea to something you can share.</h2>

            <p>
              Vireel removes the complexity from AI video creation. Instead of
              learning advanced editing tools, simply describe what you want
              and let AI help bring the concept to life.
            </p>

            <ul>
              <li>
                <FaCheck />
                <span>Create videos from text prompts</span>
              </li>
              <li>
                <FaCheck />
                <span>Animate and transform images</span>
              </li>
              <li>
                <FaCheck />
                <span>Create content directly from your phone</span>
              </li>
              <li>
                <FaCheck />
                <span>Designed for creators of all skill levels</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="vireel-cta">
        <div className="vireel-cta-content">
          <div className="vireel-cta-icon">
            <FaVideo />
          </div>

          <span>START CREATING</span>

          <h2>Your next video starts with an idea.</h2>

          <p>
            Download Vireel and start turning your ideas into AI-generated
            videos today.
          </p>

          <div className="vireel-download-buttons vireel-cta-buttons">
            <a
              href="https://apps.apple.com/us/app/vireel-ai-video-maker/id6760539451"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button apple-button"
            >
              <div className="store-button-icon"></div>
              <div className="store-button-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.studybridgeapps.vireel"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button google-button"
            >
              <div className="google-play-icon">
                <FaPlay />
              </div>
              <div className="store-button-text">
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </div>
            </a>
          </div>

          <Link to="/projects" className="back-projects">
            Explore more StudyBridge apps
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}