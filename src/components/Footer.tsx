import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ImFacebook2 } from "react-icons/im";
import { IconContext } from "react-icons";

import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="footer-class">
      <div className="bg-[#F26044]  p-8">
        <div className="mt-20 grid place-content-center">
          <Logo width={200} height={200} />
        </div>
        <div className="mt-12 grid place-content-center">
          <p className="text-[32px] text-white font-bold">
            Shaping Curious Self For Everyone
          </p>
        </div>
        <div className="flex justify-center my-16 space-x-24">
          <Link href="#">
            <Image
              src="/assets/whatsapp.png"
              width="48"
              height="48"
              alt="twitwhatsappter"
              className="m-4"
            />
          </Link>
          <Link href="#">
            <Image
              src="/assets/facebook.png"
              width="48"
              height="48"
              alt="facebook"
              className="m-4"
            />
          </Link>
          <Link href="#">
            <Image
              src="/assets/instagram.png"
              width="48"
              height="48"
              alt="instagram"
              className="m-4"
            />{" "}
          </Link>
        </div>
        ;
      </div>
      {/* black bg */}
      <div className="bg-black p-8 text-white">
        <div className="flex justify-center my-16 space-x-12 text-[24px]">
          <Link href="/">Home</Link>
          <Link href="/privacyPolicy">Privacy Policy</Link>
          <Link href="/aboutUs">About Us</Link>
          <Link href="/articles/blogs">Articles</Link>
          <Link href="/contactUs">Contact Us</Link>
          <Link href="/termsAndConditions">Terms and Conditions</Link>
        </div>
        <div className="flex justify-center text-[16px]">
          Copyright &copy; 2024 The Mental Chunks
        </div>
      </div>
    </footer>
  );
};

export default Footer;
