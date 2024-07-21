"use client";

import React from "react";
import axios from "axios";
import sanitizeHtml from "sanitize-html";
import Cookies from "js-cookie";

import Blog from "@/components/InterfaceBlog";
import Header from "@/components/Header";

import "@/styles/article.css";
import { HiCalendarDays } from "react-icons/hi2";
import { PiHandsClappingFill } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";

export default function ArticleComponent() {
  const [currentArticle, setCurrentArticle] = React.useState<Blog | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [liked, setLiked] = React.useState(false);

  React.useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000${window.location.pathname}`
        );
        setCurrentArticle(response.data);
        const likedArticles = Cookies.get("likedArticles");
        if (likedArticles) {
          const likedArticlesArray = JSON.parse(likedArticles);
          if (likedArticlesArray.includes(response.data.id)) {
            setLiked(true);
          }
        }
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

  const handleLike = async () => {
    if (!currentArticle) return;

    const newLikedState = !liked;
    setLiked(newLikedState);

    // Update the likes count locally
    const updatedArticle = {
      ...currentArticle,
      likes: currentArticle.likes + (newLikedState ? 1 : -1),
    };
    setCurrentArticle(updatedArticle);

    // Store the liked state in cookies
    let likedArticles = Cookies.get("likedArticles");
    if (!likedArticles) {
      likedArticles = JSON.stringify([]);
    }
    const likedArticlesArray = JSON.parse(likedArticles);

    if (newLikedState) {
      likedArticlesArray.push(currentArticle.id);
    } else {
      const index = likedArticlesArray.indexOf(currentArticle.id);
      if (index !== -1) {
        likedArticlesArray.splice(index, 1);
      }
    }

    Cookies.set("likedArticles", JSON.stringify(likedArticlesArray), {
      expires: 365,
    });

    // Send the updated like to the server
    // Extract the base path and article ID from the current URL
    try {
      const basePath = window.location.pathname.split("/")[1];
      const articleId = window.location.pathname.split("/")[2];
      await axios.post(
        `http://localhost:5000/${basePath}/${articleId}/like`,

        {
          like: newLikedState,
        }
      );
    } catch (e) {
      console.error("Error updating like:", e);
    }
  };

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
        "strong",
        "em",
        "i",
        "u",
        "strike",
      ],
      allowedAttributes: {
        a: ["href"],
        img: ["src", "width", "height"],
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
        <div className="container mx-auto px-24 max-w-screen-lg my-8 h-auto">
          <div>
            <h1 className="text-[50px] text-[#040404] font-bold mb-4 ">
              {currentArticle?.heading}
            </h1>
            <h1 className="text-[35px] text-[#340000a0] font-bold mb-4 ">
              {currentArticle?.sub_heading}
            </h1>
          </div>
          <div className="flex place-content-end gap-4 mt-4 align-right">
            <p className="text-[16px] flex">
              <HiCalendarDays />
              <span className="ml-2 -mt-1"> {currentArticle?.date}</span>
            </p>
            <p className="text-[16px] flex">
              <PiHandsClappingFill />
              <span className="ml-2 -mt-1">{currentArticle?.likes}</span>
            </p>
            <p className="text-[16px] flex">
              <FaRegComment />
              <span className="ml-2 -mt-1">{currentArticle?.comments}</span>
            </p>
          </div>
          <div className="content mt-8">
            <div>
              {currentArticle && sanitizeAndRenderHtml(currentArticle.content)}
            </div>
          </div>{" "}
          <Button
            onClick={handleLike}
            className={` px-10 py-4 mt-4 flex ${
              liked
                ? "bg-[#e0300d] hover:bg-[#F26044]"
                : "bg-[#F26044] hover:bg-[#e0300d]"
            }`}
          >
            <PiHandsClappingFill size={35} />
            <span className="ml-3 mt-3 text-[35px]">
              {currentArticle?.likes}
            </span>
          </Button>
        </div>
      )}
    </div>
  );
}
