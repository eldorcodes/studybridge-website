import React from "react";
import { FaBook, FaFilePdf, FaQrcode, FaIdCard, FaImage, FaFileWord } from "react-icons/fa";
import "./Projects.css";

export default function Projects() {
  const apps = [
    {
      name: "StudyBridge F1 Visa Guide",
      link: "https://studybridge.io",
      desc: "Comprehensive guide for international students on F1 visa process.",
      icon: <FaBook className="icon" />,
    },
    {
      name: "Smart Converter - HEIC to JPG",
      link: "https://apps.apple.com/us/app/heic-converter-jpg-pdf-png/id6749519975",
      desc: "Easily convert HEIC images to JPG, PNG, and PDF formats.",
      icon: <FaImage className="icon" />,
    },
    {
      name: "PDF Merger Expert",
      link: "https://apps.apple.com/us/app/pdf-merger-expert/id6749808143",
      desc: "Merge multiple PDFs into a single, professional document.",
      icon: <FaFilePdf className="icon" />,
    },
    {
      name: "QR Code Generator",
      link: "https://apps.apple.com/us/app/id-photo-maker-passport-id/id6751552756",
      desc: "Quickly generate QR codes for links, text, and more.",
      icon: <FaQrcode className="icon" />,
    },
    {
      name: "ID Photo Maker",
      link: "https://apps.apple.com/us/app/id-photo-maker-passport-id/id6751552756",
      desc: "Create passport and ID photos that meet official standards.",
      icon: <FaIdCard className="icon" />,
    },
    {
      name: "Image to PDF Expert",
      link: "https://apps.apple.com/us/app/image-to-pdf-expert/id6751416106",
      desc: "Convert images into professional, shareable PDF documents.",
      icon: <FaImage className="icon" />,
    },
    {
      name: "DocuConvert - PDF ⇆ Word",
      link: "https://apps.apple.com/us/app/docuconvert-pdf-to-word/id6751174553",
      desc: "Easily convert PDFs to DOCX and DOCX back to PDF.",
      icon: <FaFileWord className="icon" />,
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">Our Projects</h1>
      <p className="projects-subtitle">
        Explore the apps and tools we’ve built so far to make work and study easier.
      </p>

      <div className="projects-container">
        {apps.map((app, idx) => (
          <a
            key={idx}
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="icon-wrapper">{app.icon}</div>
            <h2>{app.name}</h2>
            <p>{app.desc}</p>
            <span className="project-link">View App →</span>
          </a>
        ))}
      </div>
    </div>
  );
}