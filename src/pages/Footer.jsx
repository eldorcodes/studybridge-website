import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          <div className="site-footer-about">
            <NavLink className="site-footer-brand" to="/" end>
              <img src="/logo.png" width="42" height="42" alt="" />
              StudyBridge LLC
            </NavLink>
            <p>Mobile utilities, education apps, and AI tools for everyday work.</p>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore">Explore</h2>
            <ul>
              <li><NavLink to="/projects">Apps &amp; projects</NavLink></li>
              <li><NavLink to="/pricing">Pricing</NavLink></li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-legal">
            <h2 id="footer-legal">Legal</h2>
            <ul>
              <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms">Terms &amp; Conditions</NavLink></li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-support">
            <h2 id="footer-support">Support</h2>
            <ul>
              <li><NavLink to="/contact">Contact us</NavLink></li>
              <li><a href="mailto:support@studybridgeapps.com">support@studybridgeapps.com</a></li>
            </ul>
          </nav>
        </div>

        <div className="site-footer-bottom">
          <small>© StudyBridge LLC. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
