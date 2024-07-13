import Link from "next/link";
import Image from "next/image";
import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 100, height = 100 }) => {
  return (
    <div className="logo">
      <Link href="/">
        <Image
          width={width}
          height={height}
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
