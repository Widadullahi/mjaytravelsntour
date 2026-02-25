const LINKTREE_URL =
  "https://linktr.ee/mjay.travelsntours?utm_source=linktree_profile_share&ltsid=7dd06d66-f4c3-4e08-837b-fc1d6651ddb4";

function App() {
  return (
    <main className="page">
      <span className="blob blob-a" aria-hidden="true"></span>
      <span className="blob blob-b" aria-hidden="true"></span>

      <section className="card" aria-label="MJAY Travels and Tours landing page">
        <div className="hero">
          <div>
            <p className="kicker reveal">MJAY Travels & Tours</p>
            <h1 className="reveal">Your Next Adventure Starts Here</h1>
            <p className="lead reveal">
              Handpicked getaways, smooth planning, and memorable group trips.
              Tap through to view packages, updates, and instant booking options.
            </p>
            <div className="actions reveal">
              <a
                className="btn btn-primary"
                href={LINKTREE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Linktree
              </a>
              <a
                className="btn btn-secondary"
                href={LINKTREE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Trip
              </a>
            </div>
          </div>

          <div className="visual">
            <article className="passport" aria-hidden="true">
              <div className="passport-inner">
                <h2>Travel Smarter</h2>
                <p>
                  Local gems, curated itineraries,
                  and stress-free booking in one place.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="stats" aria-hidden="true">
          <div className="stat">
            <strong>Easy</strong>
            <span>Booking Process</span>
          </div>
          <div className="stat">
            <strong>Fast</strong>
            <span>Travel Updates</span>
          </div>
          <div className="stat">
            <strong>Real</strong>
            <span>Memorable Experiences</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
