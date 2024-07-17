import React from "react";

import "@/styles/globals.css";
import ArticleComponent from "@/components/ArticleComponent";
import Footer from "@/components/Footer";

export default function Article({ params }: { params: { blogId: string } }) {
  return (
    <div className="bg-[#FFE6E2]">
      <ArticleComponent />
      <Footer />
    </div>
  );
}
