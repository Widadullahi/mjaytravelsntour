import React, { useEffect, useState } from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1400&q=80"
];

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-shell">
      {IMAGES.map((image, i) => (
        <img
          key={image}
          src={image}
          alt="Travel destination"
          loading="lazy"
          decoding="async"
          className={`carousel-image ${i === index ? "active" : ""}`}
        />
      ))}

      <div className="carousel-overlay">
        <span className="brand-mark" aria-hidden="true">
          MT
        </span>
        <p>MJAY Travels & Tours</p>
      </div>
    </div>
  );
}

export default HeroCarousel;
