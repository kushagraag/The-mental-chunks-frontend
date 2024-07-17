"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Blog from "@/components/InterfaceBlog";
import axios from "axios";

export default function Timeline() {
  const [articles, setArticles] = useState<Blog[]>([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/articles");
        console.log(response.data);
        setArticles(response.data.data.reverse().slice(0, 3));
      } catch (e) {
        console.log("Error fetching articles: ", e);
      } finally {
        setisLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="bg-[url('/assets/blog-nd-article.png')] bg-cover bg-center min-h-screen py-10 mt-[-20vh]">
      <div className="container mx-auto py-12">
        <h1 className="text-[35px] font-bold mb-8 text-center text-[#C52809] font-serif">
          Checkout
        </h1>
        <h1 className="text-[35px] font-bold mb-8 text-center text-[#350000]">
          Blogs & Articles
        </h1>
        {isLoading ? (
          <div></div>
        ) : (
          <div className="relative mx-12">
            <div id="part4" className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#F26044]/50 h-full rounded"></div>
              {articles.map((article, index) => (
                <div
                  key={article.id}
                  className={`relative mb-12 p-6 bg-white shadow-lg rounded-lg flex items-center mx-8 max-w-screen-sm ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                  } ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                >
                  <div className="w-1/2 flex justify-center">
                    <Image
                      width={510}
                      height={340}
                      src={article.display_picture}
                      alt={article.heading}
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 text-center  mr-2">
                    <h2 className="text-[22px] font-bold mb-6 text-[#F26044]">
                      {article.heading}
                    </h2>
                    <p className="mb-2 text-[12px] text-[#9C9C9C]">
                      {article.date}
                    </p>
                    <p className="text-[18px] text-[#808080]">
                      {article.sub_heading}
                    </p>

                    <button className="rounded-lg bg-[#F26044] text-[20px] px-8 py-4 mt-10">
                      <Link
                        href={`${article.id}`}
                        className="rounded-lg text-[16px] text-[#fff] font-semibold block text-center"
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
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="container mx-auto flex justify-center">
          <button className="rounded-lg bg-[#F26044] text-[20px] w-[20vw] px-8 py-4 mt-10">
            <Link
              href={"/articles/blogs"}
              className="rounded-lg text-[16px] text-[#fff] font-semibold block text-center"
            >
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
