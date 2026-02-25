import React from "react";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <main className="page">
      <section className="text-section reveal-side from-left">
        <p className="eyebrow">Contact</p>
        <h1>Tell us where you want to go.</h1>
        <p>
          Share your destination, travel date, number of travelers, and expected
          budget. We will reply with the best practical options.
        </p>
      </section>

      <section className="contact-simple reveal-side from-right">
        <p>
          Email: <a href="mailto:hello@mjaytravels.com">hello@mjaytravels.com</a>
        </p>
        <p>
          Phone: <a href="tel:+10000000000">+1 (000) 000-0000</a>
        </p>
        <p>Location: Lagos, Nigeria</p>
      </section>

      <section className="text-section reveal-side from-left">
        <p className="eyebrow">Before you message us</p>
        <h2>Share these details for a faster response.</h2>
        <div className="mini-grid">
          <article>
            <h3>Destination & dates</h3>
            <p>Tell us where and when you plan to travel.</p>
          </article>
          <article>
            <h3>Number of travelers</h3>
            <p>Let us know if this is solo, family, or group travel.</p>
          </article>
          <article>
            <h3>Budget range</h3>
            <p>We use this to propose practical options quickly.</p>
          </article>
        </div>
        <div className="inline-actions">
          <Link to="/services" className="btn ghost">
            Review Services
          </Link>
          <a className="btn primary" href="mailto:hello@mjaytravels.com">
            Send Email
          </a>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
