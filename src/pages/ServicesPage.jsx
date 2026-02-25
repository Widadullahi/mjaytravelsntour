import React from "react";
import LazyImage from "../components/LazyImage";

const IMAGE_ONE =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80";
const IMAGE_TWO =
  "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=1400&q=80";

function ServicesPage() {
  return (
    <main className="page">
      <section className="text-section reveal-side from-left">
        <p className="eyebrow">Services</p>
        <h1>Travel services designed to work together.</h1>
        <p>
          We keep service delivery simple and practical. Each trip can include
          one service or a complete package depending on your needs and budget.
        </p>
      </section>

      <section className="split-section">
        <div className="reveal-side from-left">
          <h2>Flight booking and reservation</h2>
          <p>
            We provide route options, travel date planning, and ticket booking
            support for local and international trips.
          </p>
          <h2>Visa and documentation guidance</h2>
          <p>
            Get document checklists, advisory support, and application guidance
            to reduce delays and confusion.
          </p>
        </div>
        <LazyImage
          src={IMAGE_ONE}
          alt="Passenger airplane wing view"
          className="reveal-side from-right"
        />
      </section>

      <section className="split-section reverse">
        <LazyImage
          src={IMAGE_TWO}
          alt="Airport departure terminal"
          className="reveal-side from-left"
        />
        <div className="reveal-side from-right">
          <h2>Hotel, transfer, and itinerary coordination</h2>
          <p>
            We help you choose practical accommodation, airport transfer plans,
            and activity timelines based on your travel purpose.
          </p>
          <h2>Group and corporate travel</h2>
          <p>
            From educational excursions to team retreats, we coordinate timing,
            movement, and communication for a smooth group experience.
          </p>
        </div>
      </section>

      <section className="text-section reveal-side from-right">
        <p className="eyebrow">How we deliver</p>
        <h2>Simple process, professional outcome.</h2>
        <div className="mini-grid">
          <article>
            <h3>1. Consultation</h3>
            <p>We gather your destination, dates, group size, and budget range.</p>
          </article>
          <article>
            <h3>2. Planning</h3>
            <p>We align tickets, accommodation, documentation, and movement.</p>
          </article>
          <article>
            <h3>3. Execution</h3>
            <p>You receive coordinated updates and support throughout your trip.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
