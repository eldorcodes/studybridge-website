import { useEffect } from "react";
import { Link, Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import "./App.css";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import { getPagePath, notFoundPage, pages, siteOrigin } from "./pages";

export default function App() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const pathname = getPagePath(location.pathname);
  const page = pages[pathname] ?? notFoundPage;

  useEffect(() => {
    document.title = page.title;
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]']) {
      document.querySelector(selector).content = page.description;
    }
    document.querySelector('meta[property="og:title"]').content = page.title;
    const canonical = page.canonical ?? pathname;
    document.querySelector('link[rel="canonical"]').href = siteOrigin + canonical;
    document.querySelector('meta[property="og:url"]').content = siteOrigin + canonical;
    document.querySelector('meta[name="robots"]').content = page.robots ?? "index, follow";
  }, [page, pathname]);

  useEffect(() => {
    if (navigationType !== "POP" && !location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location, navigationType]);

  return (
    <>
      <a className="skip-link" href="#page-content">Skip to content</a>
      <Navbar />
      <div id="page-content" tabIndex={-1}>
        <Routes location={{ ...location, pathname }}>
          {Object.entries(pages).map(([path, route]) => (
            <Route key={path} path={path} Component={route.Component} />
          ))}
          <Route path="*" element={
            <main className="page">
              <h1>Page not found</h1>
              <p>The page you’re looking for may have moved.</p>
              <Link to="/" className="btn">Back to home</Link>
            </main>
          } />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
