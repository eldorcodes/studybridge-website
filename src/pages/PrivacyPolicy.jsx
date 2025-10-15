import React from "react";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy({
  companyName = "StudyBridge LLC",
  contactEmail = "support@studybridge.io",
  websiteUrl = "https://studybridge.io",
  lastUpdated = "October 15, 2025",
  retentionHours = 2,
  apps = [
    // ✅ NEW: Video to GIF Expert
    {
      id: "videotogif",
      name: "Video to GIF Expert",
      bullets: [
        "Converts videos into high-quality GIFs directly on your device.",
        "Processing happens locally on your phone whenever possible; for advanced processing, temporary server use may occur.",
        "We do not access your videos unless you select them for conversion.",
        "Converted GIFs are stored only on your device; temporary uploads (if used) are auto-deleted after processing.",
        "Displays ads via Google AdMob; an optional Remove Ads purchase may be offered (where available).",
      ],
      retentionHours: 2,
    },

    // ✅ NEW: QR Code Generator (on-device)
    {
      id: "qrcode",
      name: "QR Code Generator",
      bullets: [
        "Generates QR codes for text, URLs, Wi-Fi, contacts, events, and more.",
        "Processing happens on-device; we do not upload your input to our servers.",
        "You can optionally save generated QR images to your Photos or share them.",
        "Displays ads via Google AdMob; an optional Remove Ads purchase may be offered (where available).",
      ],
      retentionHours: 0,
    },

    // ✅ NEW: Image Compressor app
    {
      id: "imagecompressor",
      name: "Image Compressor Studio",
      bullets: [
        "Compress, resize, and convert images (JPG, PNG, WEBP, PDF).",
        "Only the photos you select are processed—no background access.",
        "Where server processing is used, files are auto-deleted after processing.",
        "Shows ads via Google AdMob; an optional Remove Ads purchase may be offered.",
      ],
      retentionHours: 2,
    },

    // Existing apps
    {
      id: "idphoto",
      name: "ID Photo Maker: Passport & Visa Photos",
      bullets: [
        "Creates compliant ID, passport, and visa photos from your images.",
        "Includes optional background cleanup (e.g., white), crop & size tools.",
        "Only the photo you choose is processed—no gallery access without your action.",
        "Files are auto-deleted after processing.",
      ],
      retentionHours: 2,
    },
    {
      id: "heic",
      name: "HEIC Converter: JPG PDF PNG WEBP",
      bullets: [
        "Converts HEIC images to JPG, PNG, PDF, or WEBP.",
        "Only images you select are uploaded.",
        "Files are auto-deleted after conversion.",
      ],
      retentionHours: 2,
    },
    {
      id: "pdfmerger",
      name: "PDF Merger: Combine & Organize",
      bullets: [
        "Combines multiple PDF files into a single document.",
        "Temporary merged file is generated to deliver your result.",
        "Files are auto-deleted after conversion.",
      ],
      retentionHours: 2,
    },
    {
      id: "docuconvert",
      name: "DocuConvert: PDF ↔ Word",
      bullets: [
        "Converts PDF files to Word (DOCX) and Word documents to PDF.",
        "Converted documents are processed only to complete your request.",
        "Files are auto-deleted after conversion.",
      ],
      retentionHours: 2,
    },
    {
      id: "imagetopdf",
      name: "Image to PDF: Photo Converter",
      bullets: [
        "Convert your images into a single high-quality PDF.",
        "Simple, fast, and secure conversion process.",
        "Files are auto-deleted after conversion.",
      ],
      retentionHours: 2,
    },
  ],
}) {
  return (
    <main className="pp-wrapper">
      <header className="pp-hero">
        <div className="pp-hero-inner">
          <h1 className="pp-title">Privacy Policy</h1>
          <p className="pp-subtitle">Last updated: {lastUpdated}</p>
        </div>
      </header>

      <section className="pp-content">
        <div className="pp-card">
          <p>
            This Privacy Policy applies to all mobile applications developed and published by{" "}
            <strong>{companyName}</strong> (“we”, “us”, or “our”), including but not limited to:
          </p>
          <ul className="pp-app-list">
            {apps.map((a) => (
              <li key={a.id} className="pp-app-badge">
                {a.name}
              </li>
            ))}
          </ul>
          <p>By using our apps, you agree to the practices described in this Privacy Policy.</p>
        </div>

        <div className="pp-grid">
          <div className="pp-card">
            <h2>Information We Collect & Process</h2>
            <h3>1) Files You Upload</h3>
            <ul className="pp-ul">
              <li>
                Files you select for processing (e.g., images, PDFs, videos, Word documents) may be
                temporarily uploaded to our secure servers only to complete your request where
                server-side processing is required.
              </li>
              <li>
                All uploaded files are automatically deleted within approximately {retentionHours}{" "}
                hour{retentionHours === 1 ? "" : "s"} after processing.
              </li>
              <li>We never sell or use your documents for advertising or model training.</li>
            </ul>

            <h3>2) Diagnostics & Usage Data</h3>
            <ul className="pp-ul">
              <li>
                Limited, non-identifying data (e.g., error logs, device/OS version, timestamps) may
                be collected to maintain reliability, security, and performance.
              </li>
            </ul>

            <h3>3) Payments</h3>
            <ul className="pp-ul">
              <li>
                Purchases and subscriptions are processed by Apple App Store or Google Play. We do
                not store credit card numbers.
              </li>
            </ul>

            <h3>4) Advertising & Analytics (AdMob)</h3>
            <ul className="pp-ul">
              <li>
                Some apps display ads via Google AdMob. AdMob may collect device identifiers (e.g.,
                IDFA/AAID), approximate location (derived from IP), app interaction, and performance
                data to provide and measure ads.
              </li>
              <li>
                You can reset or limit ad tracking in your device settings. If you purchase a
                “Remove Ads” option (where available), the app stops requesting ads.
              </li>
            </ul>
          </div>

          <div className="pp-card">
            <h2>Permissions We Request</h2>
            <ul className="pp-ul">
              <li>
                <strong>Files / Storage:</strong> to allow you to select photos, videos, or documents
                for processing and save results locally.
              </li>
              <li>
                <strong>Camera (optional for certain apps):</strong> to capture a new photo or video
                if you choose to do so inside the app.
              </li>
              <li>
                <strong>Internet Access:</strong> to securely upload files for processing and
                deliver results where applicable.
              </li>
            </ul>

            <h2>How We Use Information</h2>
            <ul className="pp-ul">
              <li>
                Provide the conversion, compression, or editing services you request (e.g., GIF
                creation, PDF merging).
              </li>
              <li>Improve app reliability, security, and user experience.</li>
              <li>Respond to support requests you send us.</li>
            </ul>

            <h2>Sharing of Data</h2>
            <ul className="pp-ul">
              <li>We do not sell or trade your data.</li>
              <li>
                Limited sharing with trusted service providers (e.g., cloud hosting, error
                monitoring, ad networks for apps that show ads) strictly to operate our apps, under
                confidentiality obligations.
              </li>
              <li>We may disclose information if required by law.</li>
            </ul>
          </div>

          <div className="pp-card">
            <h2>Data Retention</h2>
            <ul className="pp-ul">
              <li>
                Uploaded files are automatically deleted within ~{retentionHours} hour
                {retentionHours === 1 ? "" : "s"} after processing.
              </li>
              <li>Diagnostic logs are retained only as long as needed for operations and security.</li>
            </ul>

            <h2>Security</h2>
            <ul className="pp-ul">
              <li>We use HTTPS for secure transfers where supported.</li>
              <li>Access to systems is restricted to authorized personnel.</li>
              <li>
                No method of transmission or storage is 100% secure, but we use industry-standard
                safeguards.
              </li>
            </ul>

            <h2>Children’s Privacy</h2>
            <p>
              Our apps are not directed to children under 13 (or under 16 in the EU). If we learn
              that such data has been provided, we will delete it promptly.
            </p>
          </div>

          <div className="pp-card">
            <h2>App-Specific Notes</h2>
            {apps.map((a) => (
              <div key={a.id} className="pp-app-note">
                <div className="pp-app-note-head">
                  <span className="pp-app-note-dot" />
                  <h3>{a.name}</h3>
                </div>
                <ul className="pp-ul">
                  {a.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                  <li>
                    Files are typically deleted within ~{a.retentionHours ?? retentionHours} hour
                    {(a.retentionHours ?? retentionHours) === 1 ? "" : "s"} of processing.
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="pp-card">
            <h2>Your Rights</h2>
            <p>
              Depending on your region (e.g., EU/EEA, UK, California), you may have rights to
              access, correct, or delete your personal data. Contact us to exercise these rights.
            </p>

            <h2>International Transfers</h2>
            <p>
              Data may be processed in the United States and other countries. By using our apps, you
              consent to such transfers as permitted by law.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Policy from time to time. Material changes will be reflected by
              updating the “Last updated” date above.
            </p>

            <h2>Contact Us</h2>
            <ul className="pp-ul">
              <li>
                Email:{" "}
                <a className="pp-link" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
              </li>
              <li>
                Website:{" "}
                <a className="pp-link" href={websiteUrl} target="_blank" rel="noreferrer">
                  {websiteUrl}
                </a>
              </li>
              <li>
                Data deletion request: Send us an email with your app name and a brief description
                of your request, and we’ll assist you.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}