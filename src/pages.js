import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Projects from "./pages/Projects";
import Payment from "./pages/Payment";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Vireel from "./pages/Vireel";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

export const siteOrigin = "https://www.studybridgeapps.com";

const privacy = {
  Component: PrivacyPolicy,
  title: "Privacy Policy | StudyBridge LLC",
  description: "Read how StudyBridge LLC handles information in its apps, including app-specific disclosures, data retention, and privacy requests.",
  canonical: "/privacy",
};

export const pages = {
  "/": {
    Component: Home,
    title: "StudyBridge LLC | Utility, Education & AI Apps",
    description: "Explore StudyBridge LLC’s apps for documents, photos, video, and learning, including AI-powered creative tools and mobile utilities.",
  },
  "/projects": {
    Component: Projects,
    title: "Apps & Projects | StudyBridge LLC",
    description: "Browse mobile utilities, education apps, and AI tools from StudyBridge LLC.",
  },
  "/pricing": {
    Component: Pricing,
    title: "Pricing | StudyBridge LLC",
    description: "Explore StudyBridge LLC pricing and subscription options.",
  },
  "/contact": {
    Component: Contact,
    title: "Contact & Support | StudyBridge LLC",
    description: "Contact StudyBridge LLC for app support, feedback, and general inquiries.",
  },
  "/vireel": {
    Component: Vireel,
    title: "Vireel AI Video Maker | StudyBridge LLC",
    description: "Explore Vireel, an AI video maker that creates videos from text prompts and images.",
  },
  "/payment": {
    Component: Payment,
    title: "Make a Payment | StudyBridge LLC",
    description: "Make a payment to StudyBridge LLC.",
    robots: "noindex, follow",
  },
  "/privacy": privacy,
  "/privacy-policy": privacy,
  "/terms": {
    Component: Terms,
    title: "Terms & Conditions | StudyBridge LLC",
    description: "Read the terms and conditions for using StudyBridge LLC apps and services.",
  },
  "/success": {
    Component: Success,
    title: "Payment Successful | StudyBridge LLC",
    description: "Your StudyBridge LLC payment was successful.",
    robots: "noindex, follow",
  },
  "/cancel": {
    Component: Cancel,
    title: "Payment Canceled | StudyBridge LLC",
    description: "Your StudyBridge LLC payment was canceled.",
    robots: "noindex, follow",
  },
};

export const notFoundPage = {
  title: "Page Not Found | StudyBridge LLC",
  description: "The requested StudyBridge LLC page could not be found.",
  robots: "noindex, follow",
};

export function getPagePath(pathname) {
  const path = pathname.toLowerCase()
    .replace(/\/(?:index\.html)?$/, "")
    .replace(/\.html$/, "") || "/";
  return Object.hasOwn(pages, path) ? path : pathname;
}
