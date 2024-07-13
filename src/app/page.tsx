import React from "react";
import HomepageContent from "@/components/HomepageContent";
import Header from "@/components/Header";
import { Footer, Footer2 } from "@/components/Footer";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="bg-[#FFE6E2]">
      {/* <Header /> */}
      <HomepageContent />
      {/* <Footer /> */}
      <Footer2 />
    </div>
  );
}
