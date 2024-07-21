import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <Link href="/">
        <img
          src="/assets/Orange-Blue-Brain-Digital-World-Logo.png"
          className="custom-logo h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24"
          alt="The Mental Chunks "
          decoding="async"
        />
      </Link>
    </div>
  );
};

export default Logo;
