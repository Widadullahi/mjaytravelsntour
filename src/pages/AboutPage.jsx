import React from "react";
import LazyImage from "../components/LazyImage";

const TEAM_IMAGE =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80";

function AboutPage() {
  return (
    <main className="page">
      <section className="text-section reveal-side from-left">
        <p className="eyebrow">About</p>
        <h1>A travel partner focused on clarity and coordination.</h1>
        <p>
          MJAY Travels & Tours is built around practical service: listen to what
          the traveler needs, propose realistic options, and execute plans with
          clear communication.
        </p>
      </section>

      <section className="split-section">
        <div className="reveal-side from-left">
          <h2>How we work</h2>
          <p>
            We start with your destination, timeline, and budget. Then we align
            booking steps, required documents, accommodation choices, and local
            movement plans so you have one organized journey.
          </p>
          <h2>What matters to us</h2>
          <p>
            Responsiveness, transparency, and traveler comfort. We keep updates
            simple and prioritize reliability over complexity.
          </p>
        </div>
        <LazyImage
          src={TEAM_IMAGE}
          alt="Travel planning team collaboration"
          className="reveal-side from-right"
        />
      </section>

      <section className="text-section reveal-side from-right">
        <p className="eyebrow">Our values</p>
        <h2>Built on trust, structure, and traveler comfort.</h2>
        <div className="mini-grid">
          <article>
            <h3>Transparency</h3>
            <p>Clear pricing logic, practical options, and open communication.</p>
          </article>
          <article>
            <h3>Reliability</h3>
            <p>Consistent follow-through on timelines, details, and commitments.</p>
          </article>
          <article>
            <h3>Care</h3>
            <p>Every trip is handled with attention to safety and convenience.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
