import Logo from "./Logo";
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-pink-300 to-pink-200 py-6 shadow-md">
        <div className="container flex justify-between items-center mx-auto px-36">
          <div className="flex items-center">
            <Logo />
          </div>
          <nav>
            <ul
              className="flex space-x-8 text-black "
              style={{ fontWeight: 400 }}
            >
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutUs" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="relative group">
                <Link href="#" className="hover:underline flex items-center">
                  Articles
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </Link>
                <ul className="absolute hidden group-hover:block bg-white shadow-md mt-1">
                  <li>
                    <Link
                      href="/articles/addBlog"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      Add new Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/articles/blogs"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/articles/trending"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      Trending Blogs
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contactUs" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
