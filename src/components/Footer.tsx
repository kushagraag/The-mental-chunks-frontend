import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="footer-class">
      <div className="bg-[#F26044]  p-8">
        <div className="mt-12 grid place-content-center">
          <Image
            width={144}
            height={144}
            src="/assets/Orange-Blue-Brain-Digital-World-Logo.png"
            className="custom-logo"
            alt="The Mental Chunks "
            decoding="async"
          />
        </div>
        <div className="mt-12 grid place-content-center">
          <p className="text-[24px] md:text-[32px] text-white text-center font-bold">
            Shaping Curious Self For Everyone
          </p>
        </div>
        <div className="flex justify-center my-8 space-x-24">
          <Link href="#">
            <Image
              src="/assets/whatsapp.png"
              width="48"
              height="48"
              alt="twitwhatsappter"
              className="m-4"
            />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61560847293241&mibextid=ZbWKwL">
            <Image
              src="/assets/facebook.png"
              width="48"
              height="48"
              alt="facebook"
              className="m-4"
            />
          </Link>
          <Link href="https://instagram.com/thementalchunks?igshid=MzRlODBiNWFlZA==">
            <Image
              src="/assets/instagram.png"
              width="48"
              height="48"
              alt="instagram"
              className="m-4"
            />{" "}
          </Link>
        </div>
      </div>
      {/* black bg */}
      <div className="bg-black p-8 text-white">
        <div className="md:flex grid grid-cols-2 justify-center my-8 md:my-16 md:space-x-12 text-[16px] md:text-[24px]">
          <Link href="/">Home</Link>
          <Link href="/privacyPolicy">Privacy Policy</Link>
          <Link href="/aboutUs">About Us</Link>
          <Link href="/articles/blogs">Articles</Link>
          <Link href="/contactUs">Contact Us</Link>
          <Link href="/termsAndConditions">Terms and Conditions</Link>
        </div>
        <div className="flex justify-center mb-4 text-[16px]">
          Copyright &copy; 2024 The Mental Chunks
        </div>
      </div>
    </footer>
  );
};

export default Footer;
