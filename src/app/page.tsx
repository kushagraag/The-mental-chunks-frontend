import React from "react";
import HomepageContent from "@/components/HomepageContent";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="bg-[#FFE6E2]">
      <HomepageContent />
      <Footer />
    </div>
  );
}
