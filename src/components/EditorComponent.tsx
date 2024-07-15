"use client";

import Header from "@/components/Header";
import React, { useState, useCallback, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import ReactQuill, { Quill } from "react-quill";
import QuillResizeImage from "quill-resize-image";

Quill.register("modules/resize", QuillResizeImage);

const EditorComponent: React.FC = () => {
  const [heading, setHeading] = useState<string>("");
  const [subHeading, setSubHeading] = useState<string>("");
  const [displayPicture, setDisplayPicture] = useState<File | null>(null);
  const [content, setContent] = useState<string>("");
  const quillRef = useRef<ReactQuill | null>(null);

  const handleHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeading(e.target.value);
  };

  const handleSubHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubHeading(e.target.value);
  };

  const handleDisplayPictureChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    setDisplayPicture(file);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const getCurrentDateFormatted = (): string => {
    const date = new Date();
    const options = {
      month: "short",
      day: "2-digit",
      year: "numeric",
    } as const;
    return date.toLocaleDateString("en-US", options).replace(/,/g, "");
  };

  const generateId = (): string => {
    const randomNumber = Math.floor(Math.random() * 100000);
    const date = new Date().toISOString().split("T")[0]; // Get only the date part
    return `${randomNumber}_${date}`;
  };

  const saveContent = async () => {
    const articleId = generateId();
    const todayDate = getCurrentDateFormatted();
    console.log(
      articleId,
      heading,
      subHeading,
      todayDate,
      displayPicture,
      content
    );

    let displayPictureUrl = "";

    if (displayPicture) {
      const formData = new FormData();
      formData.append("image", displayPicture);

      try {
        const response = await axios.post(
          "http://localhost:5000/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        displayPictureUrl = response.data.imageUrl;
      } catch (error) {
        console.error("Error uploading display picture:", error);
      }
    }

    try {
      const response = await axios.post("http://localhost:5000/articles", {
        id: articleId,
        heading,
        sub_heading: subHeading,
        date: todayDate,
        display_picture: displayPictureUrl,
        comments: 0,
        likes: 0,
        content,
      });
      console.log("Article saved:", response.data);
      setHeading("");
      setSubHeading("");
      setDisplayPicture(null);
      setContent("");

      // Redirect or update UI to show the saved article link
    } catch (error) {
      console.error("Error saving article:", error);
    }
  };

  const handleImageUpload = useCallback(() => {
    if (typeof document !== "undefined") {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();
      input.onchange = async () => {
        if (input.files && input.files[0]) {
          const file = input.files[0];
          const formData = new FormData();
          formData.append("image", file);

          try {
            const response = await axios.post(
              "http://localhost:5000/upload",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

            if (quillRef.current) {
              const range = quillRef.current.getEditor().getSelection();
              if (range) {
                quillRef.current
                  .getEditor()
                  .insertEmbed(range.index, "image", response.data.imageUrl);
              }
            }
          } catch (error) {
            console.error("Error uploading image:", error);
          }
        }
      };
    }
  }, []);

  const modules = {
    resize: {
      locale: {
        center: "center",
      },
    },
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }],
        // [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          // { indent: "-1" },
          // { indent: "+1" },
        ],
        ["link", "image", "video"],
        // ["link", "image"],
        ["clean"],
        [{ align: [] }],
        // ["code-block"],
      ],
      handlers: {
        image: handleImageUpload,
      },
    },
  };

  return (
    <div className="bg-[url('/assets/hero-section-bg.png')] py-10 ">
      <Header />
      <div className="container mx-auto text-justify max-w-screen-lg mt-12 h-auto">
        <h1 className="text-[50px] text-[#340000] text-center font-bold mb-4 ">
          Editor
        </h1>
      </div>

      <div className="container mx-auto max-w-screen-lg mt-12 h-auto">
        <input
          type="text"
          value={heading}
          onChange={handleHeadingChange}
          placeholder="Enter article heading"
          required
          className="w-full p-2 mb-4 text-lg rounded"
        />
        <input
          type="text"
          value={subHeading}
          onChange={handleSubHeadingChange}
          placeholder="Enter article sub-heading"
          required
          className="w-full p-2 mb-4 text-lg rounded"
        />
        <label className="grid items-center text-left">
          <p className="mx-4">Picture to display on top.</p>
          <input
            type="file"
            required
            onChange={handleDisplayPictureChange}
            className="w-full p-2  text-lg rounded"
          />
        </label>
        <ReactQuill
          ref={quillRef}
          value={content}
          onChange={handleContentChange}
          modules={modules}
          className="min-h-80 my-4 bg-white rounded-lg"
        />
        <button
          onClick={saveContent}
          className="rounded-lg bg-[#F26044] text-[20px] text-[#fff] font-semibold p-4"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditorComponent;
