import Link from "next/link";
import Image from "next/image";
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <Link href="https://thementalchunks.com/">
        <Image
          width="100"
          height="100"
          src="/assets/Orange-Blue-Brain-Digital-World-Logo.png"
          className="custom-logo"
          alt="The Mental Chunks"
          decoding="async"
        />
      </Link>
    </div>
  );
};

export default Logo;
