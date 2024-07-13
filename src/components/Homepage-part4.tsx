"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    image: "/assets/ATF-Image-YS.png",
    title: "Article 1",
    line: "This is a line from the original article 1.",
    date: "1 jan 2024",
    readMoreLink: "/article1",
  },
  {
    id: 2,
    image: "/assets/ATF-Image-YS.png",
    title: "Article 2",
    line: "This is a line from the original article 2.",
    date: "1 jan 2024",
    readMoreLink: "/article2",
  },
  {
    id: 3,
    image: "/assets/ATF-Image-YS.png",
    title: "Article 3",
    line: "This is a line from the original article 3.",
    date: "1 jan 2024",
    readMoreLink: "/article3",
  },
];

export default function Homepage_part4() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollEffect = () => {
      if (timelineRef.current) {
        // Get dimensions of the specific section container
        const sectionContainer = document.getElementById("part4"); // Example ID for the section container
        if (!sectionContainer) return;

        const sectionHeight = sectionContainer.clientHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Calculate filled height relative to the section height
        const filledHeight = Math.min((scrollTop / sectionHeight) * 100, 100);

        timelineRef.current.style.top = `${scrollTop}px`;
        timelineRef.current.style.height = `${filledHeight}%`;
      }
    };

    window.addEventListener("scroll", handleScrollEffect);
    return () => window.removeEventListener("scroll", handleScrollEffect);
  }, []);

  return (
    <div className="bg-[url('/assets/blog-nd-article.png')] bg-cover bg-center min-h-screen py-10 mt-[-100px]">
      <div className="container mx-auto py-12">
        <h1 className="text-[35px] font-bold mb-8 text-center text-[#C52809] font-serif">
          Checkout
        </h1>
        <h1 className="text-[35px] font-bold mb-8 text-center text-[#350000]">
          Blogs & Articles
        </h1>
        <div className="relative mx-12">
          <div id="part4" className="relative">
            {" "}
            {/* Example section container ID */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full">
              {/* Vertical scrollbar overlay */}
              <div
                ref={timelineRef}
                className="absolute top-0 w-full bg-[#F26044] opacity-30"
              ></div>
            </div>
            {articles.map((article, index) => (
              <div
                key={article.id}
                className={`relative mb-12 p-6 bg-white shadow-lg rounded-lg flex items-center mx-8 max-w-screen-sm ${
                  index % 2 === 0 ? "ml-auto" : "mr-auto"
                } ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
              >
                <div className="w-1/3 flex justify-center">
                  <Image
                    width={510}
                    height={340}
                    src={article.image}
                    alt={article.title}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 text-center">
                  <h2 className="text-[28px] font-bold mb-6 text-[#F26044]">
                    {article.title}
                  </h2>
                  <p className="mb-2 text-[12px] text-[#9C9C9C]">
                    {article.date}
                  </p>
                  <p className="text-[18px] text-[#808080]">{article.line}</p>

                  <button className="rounded-lg bg-[#F26044] text-[20px] px-8 py-4 mt-10">
                    <Link
                      href={article.readMoreLink}
                      className="text-[#FFFFFF] hover:underline"
                    >
                      Read More
                    </Link>
                  </button>
                </div>
                {/* timeline markers */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 ${
                    index % 2 === 0 ? "right-full" : "left-full"
                  } flex items-center justify-center`}
                >
                  <div
                    className={`w-0 h-0 ${
                      index % 2 === 0
                        ? "border-white border-l-[36px] border-t-[36px] transform rotate-45 ml-6"
                        : "border-white border-r-[36px] border-t-[36px] transform -rotate-45 mr-6"
                    }`}
                  ></div>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
