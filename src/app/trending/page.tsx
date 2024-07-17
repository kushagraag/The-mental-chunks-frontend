import React from "react";

import "@/styles/globals.css";
import TrendingBlogList from "@/components/TrendingBlogList";
import Footer from "@/components/Footer";

export default function Trending() {
  return (
    <div className="bg-[#FFE6E2]">
      <TrendingBlogList />
      <Footer />
    </div>
  );
}
