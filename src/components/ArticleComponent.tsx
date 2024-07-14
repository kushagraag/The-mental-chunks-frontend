"use client";

import React from "react";
import axios from "axios";
import sanitizeHtml from "sanitize-html";

import Blog from "@/components/InterfaceBlog";
import Header from "@/components/Header";

import "@/styles/article.css";

export default function ArticleComponent() {
  const [currentArticle, setCurrentArticle] = React.useState<Blog | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000${window.location.pathname}`
        );
        setCurrentArticle(response.data);
      } catch (e) {
        console.log("Error loading blog: ", e);
      } finally {
        setIsLoading(false);
      }
    };

    if (typeof window !== "undefined") {
      fetchArticle();
    }
  }, []);

  const sanitizeAndRenderHtml = (html: string) => {
    const cleanHtml = sanitizeHtml(html, {
      allowedTags: [
        "h1",
        "h2",
        "p",
        "br",
        "img",
        "ul",
        "ol",
        "li",
        "a",
        "blockquote",
      ],
      allowedAttributes: {
        a: ["href"],
      },
      allowedIframeHostnames: [], // Optional: Allow specific iframe sources
    });
    return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
  };

  return (
    <div className="bg-[url('/assets/hero-section-bg.png')] py-10 ">
      <Header />
      {isLoading ? (
        <div className="text-[35px] text-[#C52809] font-bold">
          Article is on the way...
        </div>
      ) : (
        <div>
          <div className="container mx-auto  text-justify max-w-screen-lg mt-12 h-auto">
            <h1 className="text-[50px] text-[#340000] text-center font-bold mb-4 ">
              {currentArticle?.heading}
            </h1>
          </div>
          <div className="content container mx-auto text-justify max-w-screen-lg mt-12 h-auto">
            <div>
              {currentArticle && sanitizeAndRenderHtml(currentArticle.content)}
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
}
