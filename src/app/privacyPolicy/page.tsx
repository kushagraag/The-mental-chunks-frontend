import React from "react";

import Header from "@/components/Header";
import PrivacyPolicyComponent from "@/components/PrivacyPolicyComponent";
import "../../styles/globals.css";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#FFE6E2]">
      <Header />
      <PrivacyPolicyComponent />
      <Footer />
    </div>
  );
}
