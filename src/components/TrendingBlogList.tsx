"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import Image from "next/image";
import Link from "next/link";
import { HiCalendarDays } from "react-icons/hi2";
import { PiHandsClappingFill } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";

import Blog from "@/components/InterfaceBlog";
import Header from "@/components/Header";

export default function TrendingBlogList() {
  const [articles, setArticles] = useState<Blog[]>([]);
  const [isLoading, setisLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchArticles = async (page: number) => {
      try {
        setisLoading(true);
        const response = await axios.get(
          `http://localhost:5000/trending_articles?page=${page}`
        );
        setArticles(response.data.data.reverse());
        setTotalPages(response.data.totalPages);
        setCurrentPage(response.data.currentPage);
      } catch (e) {
        console.log("Error fetching articles: ", e);
      } finally {
        setisLoading(false);
      }
    };

    fetchArticles(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-[url('/assets/hero-section-bg.png')] py-10 ">
      <Header />
      <div className="container mx-auto text-justify max-w-screen-lg mt-12 h-auto">
        <h1 className="text-[50px] text-[#340000] text-center font-bold mb-4">
          Trending Blogs
        </h1>
      </div>
      <div className="container mx-auto  text-justify max-w-screen-lg mt-12 h-auto ">
        {isLoading ? (
          <div className="text-[35px] text-[#C52809] font-bold">
            Peace is loading...
          </div>
        ) : (
          <>
            {articles.map((article) => (
              <div key={article.id}>
                <div className="grid grid-cols-3 my-8 hover:shadow-2xl rounded-2xl p-4">
                  <div className="col-span-2 px-8">
                    <h2 className="text-[35px] text-[#C52809] font-bold">
                      {article.heading}
                    </h2>
                    <p className="text-[24px] leading-loose">
                      {article.sub_heading}
                    </p>
                    <div className="flex gap-4 mt-4">
                      <p className="text-[16px] flex">
                        <HiCalendarDays />
                        <span className="ml-2 -mt-1"> {article.date}</span>
                      </p>
                      <p className="text-[16px] flex">
                        <PiHandsClappingFill />
                        <span className="ml-2 -mt-1">{article.likes}</span>
                      </p>
                      <p className="text-[16px] flex">
                        <FaRegComment />
                        <span className="ml-2 -mt-1">{article.comments}</span>
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <button className="rounded-lg bg-[#F26044] text-[16px] text-[#fff] font-semibold mt-4 px-8 py-4 block text-center">
                        <Link href={`/trending/${article.id}`}>Read More</Link>
                      </button>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={article.display_picture}
                      width={220}
                      height={220}
                      alt={article.heading}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="bg-[#C52809] text-white px-4 py-2 rounded-lg"
              >
                Previous
              </button>
              <span className="text-lg">{`Page ${currentPage} of ${totalPages}`}</span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="bg-[#C52809] text-white px-4 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
