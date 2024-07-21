"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Carousel,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Homepage_Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await fetch("/homepage_quotes.json");
        const data = await res.json();
        // console.log(data);
        setQuotes(data.homepage_quotes);
      } catch (e) {
        console.log("error in quotes : ", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <>
      <div className="container mx-auto text-justify max-w-screen-lg mt-12 h-auto">
        <h1 className="text-5xl text-[#340000] text-center font-bold mb-8">
          Quotes for you
        </h1>

        {isLoading ? (
          <p className="text-lg font-medium text-black">Quotes are loading</p>
        ) : (
          <Carousel
            className="rounded-xl "
            color="#f26044"
            autoplay
            autoplayDelay={2000}
            loop
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                style={{ color: "#F26044" }}
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                style={{ color: "#F26044" }}
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="flex justify-center py-8 px-6 md:px-0"
              >
                <Card className="mt-6 h-full w-full md:w-1/2 ">
                  <CardBody>
                    <Typography className="font-normal text-black text-lg">
                      {quote.quote}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0 text-right">
                    <Typography>- {quote?.author}</Typography>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </Carousel>
        )}
        <div className="text-center mt-8 mb-12">
          <Link href="/quotes">
            <button className="rounded-lg bg-[#F26044] text-2xl text-white font-semibold px-8 py-4 inline-block">
              Read More Quotes
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
