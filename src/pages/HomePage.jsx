import React from "react";
import { Link } from "react-router-dom";
import LazyImage from "../components/LazyImage";
import HeroCarousel from "../components/HeroCarousel";

const SECONDARY_IMAGE =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80";

function HomePage() {
  return (
    <main className="page">
      <section className="split-section">
        <div className="reveal-side from-left">
          <div className="company-head">
            <span className="logo-badge" aria-hidden="true">
              MT
            </span>
            <div>
              <strong>MJAY Travels & Tours</strong>
              <span>Trusted Travel Partner</span>
            </div>
          </div>
          <p className="eyebrow">Simple travel support</p>
          <h1>Plan smarter trips with clear support from start to finish.</h1>
          <p>
            MJAY Travels & Tours helps you move from idea to departure with less
            stress. We assist with booking options, documentation guidance,
            hotel planning, and ground logistics in one simple process.
          </p>
          <p>
            Whether you are traveling for vacation, school activities, or work,
            we keep communication clear and your timeline organized.
          </p>
          <div className="inline-actions">
            <Link to="/services" className="btn primary">
              View Services
            </Link>
            <Link to="/contact" className="btn ghost">
              Start Planning
            </Link>
          </div>
        </div>
        <div className="reveal-side from-right">
          <HeroCarousel />
        </div>
      </section>

      <section className="split-section reverse">
        <LazyImage
          src={SECONDARY_IMAGE}
          alt="Traveler in city street"
          className="reveal-side from-left"
        />
        <div className="reveal-side from-right">
          <h2>More than bookings</h2>
          <p>
            A travel and tour company coordinates the details around the trip,
            not only the flight. That includes advisory support, cost planning,
            itinerary structure, emergency communication, and post-arrival
            logistics.
          </p>
          <p>
            Our goal is simple: make your travel experience smooth, safe, and
            memorable without unnecessary complexity.
          </p>
        </div>
      </section>

      <section className="text-section reveal-side from-left">
        <p className="eyebrow">Why travelers choose us</p>
        <h2>Clear communication, clean process, reliable delivery.</h2>
        <div className="mini-grid">
          <article>
            <h3>Practical planning</h3>
            <p>We match your budget, timeline, and travel purpose from day one.</p>
          </article>
          <article>
            <h3>Fast response</h3>
            <p>Questions, updates, and changes are handled quickly and clearly.</p>
          </article>
          <article>
            <h3>Complete support</h3>
            <p>From pre-trip preparation to movement on arrival, we stay involved.</p>
          </article>
        </div>
      </section>

      <section className="text-section reveal-side from-right">
        <p className="eyebrow">Quick Overview</p>
        <h2>Everything you need is here.</h2>
        <div className="mini-grid quick-overview">
          <article>
            <h3>Services</h3>
            <p>
              Flight booking, visa guidance, hotel planning, transfer support,
              and coordinated travel packages.
            </p>
            <Link to="/services" className="text-link">
              Read more
            </Link>
          </article>
          <article>
            <h3>About</h3>
            <p>
              Learn how MJAY Travels & Tours works, our values, and why clients
              trust us for smooth travel experiences.
            </p>
            <Link to="/about" className="text-link">
              Read more
            </Link>
          </article>
          <article>
            <h3>Contact</h3>
            <p>
              Share your destination, timeline, and budget. We will send the
              best practical options quickly.
            </p>
            <Link to="/contact" className="text-link">
              Read more
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
