import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <a
        href="https://thementalchunks.com/"
        className="custom-logo-link"
        rel="home"
      >
        <img
          width="100"
          height="100"
          src="https://thementalchunks.com/wp-content/uploads/2024/06/Orange-Blue-Brain-Digital-World-Logo.png"
          className="custom-logo"
          alt="The Mental Chunks"
          itemprop="logo"
          decoding="async"
        />
      </a>
    </div>
  );
};

export default Logo;
