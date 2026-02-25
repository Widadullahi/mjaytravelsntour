import React, { useState } from "react";

function LazyImage({ src, alt, className = "" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className={`image-shell ${loaded ? "loaded" : ""} ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
    </figure>
  );
}

export default LazyImage;
