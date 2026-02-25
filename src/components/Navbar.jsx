import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand premium-brand" onClick={closeMenu}>
          <span className="logo-badge crest" aria-hidden="true">
            MT
          </span>
          <span className="brand-text">
            <strong>MJAY Travels & Tours</strong>
            <small>Premium Travel Concierge</small>
          </span>
        </NavLink>

        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
          <NavLink to="/contact" className="nav-cta" onClick={closeMenu}>
            Start Planning
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
