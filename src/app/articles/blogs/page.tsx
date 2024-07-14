import React from "react";

import "@/styles/globals.css";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";

export default function Blogs() {
  return (
    <div className="bg-[#FFE6E2]">
      <BlogList />
      <Footer />
    </div>
  );
}
