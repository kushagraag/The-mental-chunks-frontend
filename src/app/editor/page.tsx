import React from "react";

import "@/styles/globals.css";
import EditorComponent from "@/components/EditorComponent";
import Footer from "@/components/Footer";

export default function Editor() {
  return (
    <div className="bg-[#FFE6E2]">
      <EditorComponent />
      <Footer />
    </div>
  );
}
