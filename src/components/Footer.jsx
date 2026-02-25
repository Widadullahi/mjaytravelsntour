import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-title">MJAY Travels & Tours</p>
          <p className="footer-copy">
            Premium travel planning, booking support, and complete trip
            coordination for individuals and groups.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-meta">
          <p>Email: hello@mjaytravels.com</p>
          <p>Phone: +1 (000) 000-0000</p>
          <p>Location: Lagos, Nigeria</p>
        </div>
      </div>
      <p className="footer-bottom">© {new Date().getFullYear()} MJAY Travels & Tours. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
