import React from "react";

import Header from "@/components/Header";
import TnCComponent from "@/components/TnCComponent";
import "../../styles/globals.css";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="bg-[#FFE6E2]">
      <Header />
      <TnCComponent />
      <Footer />
    </div>
  );
}
