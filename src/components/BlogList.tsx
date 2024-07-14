"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

import { HiCalendarDays } from "react-icons/hi2";
import { PiHandsClappingFill } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";

interface Blog {
  id: string;
  heading: string;
  sub_heading: string;
  date: string;
  display_picture: string;
  content: string;
  comments: number;
  likes: number;
}

export default function BlogList() {
  const [articles, setArticles] = useState<Blog[]>([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/articles");
        setArticles(response.data);
      } catch (e) {
        console.log("Error fetching articles: ", e);
      } finally {
        setisLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="bg-[url('/assets/hero-section-bg.png')] py-10 ">
      <Header />
      <div className="container mx-auto  text-justify max-w-screen-lg mt-12 h-auto">
        <h1 className="text-[50px] text-[#340000] text-center font-bold mb-4 ">
          Blogs
        </h1>
      </div>
      <div className="container mx-auto text-justify max-w-screen-lg mt-12 h-auto">
        {isLoading ? (
          <div className="text-[35px] text-[#C52809] font-bold">
            Peace is loading...
          </div>
        ) : (
          articles.map((article) => (
            <div key={article.id}>
              <div className="grid grid-cols-3 my-8 hover:shadow-2xl p-4">
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
                  <Link
                    href={`${article.id}`}
                    className="rounded-lg bg-[#F26044] text-[16px] text-[#fff] font-semibold mt-4 px-2 py-2 block text-center"
                  >
                    Read More
                  </Link>
                </div>
                <div>
                  <Image
                    src={article.display_picture}
                    width={220}
                    height={220}
                    alt={article.heading}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
