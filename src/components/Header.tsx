import Logo from "./Logo";
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <header className=" py-6 ">
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
                <Link href="/">
                  <p className="text-[20px] hover:text-[#F26044]">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/aboutUs">
                  <p className="text-[20px] hover:text-[#F26044]">About Us</p>
                </Link>
              </li>
              <li className="relative group">
                <Link href="#" className=" flex items-center">
                  <p className="text-[20px] hover:text-[#F26044]">Articles</p>
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
                <ul className="absolute hidden group-hover:grid shadow-2xl mt-1">
                  <li>
                    <Link
                      href={{
                        pathname: "/articles/blogs",
                        query: { page: 1, limit: 5 },
                      }}
                      className="block px-4 py-2 text-black hover:bg-[#F26044] hover:text-[#FFFFFF]"
                    >
                      <p className="text-[20px] hover:text-[#FFFFFF] ">Blogs</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/trending"
                      className="block px-4 py-2 text-black hover:bg-[#F26044] hover:text-[#FFFFFF]"
                    >
                      <p className="text-[20px] hover:text-[#FFFFFF]">
                        Trending Blogs
                      </p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/quotes">
                  <p className="text-[20px] hover:text-[#F26044]">Quotes</p>
                </Link>
              </li>
              <li>
                <Link href="/contactUs">
                  <p className="text-[20px] hover:text-[#F26044]">Contact Us</p>
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
