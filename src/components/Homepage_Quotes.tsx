"use client";
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
        console.log(data);
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
        <div className="overflow-x-auto scrollbar-hide">
          {isLoading ? (
            <p className="text-lg font-medium text-black">Quotes are loading</p>
          ) : (
            <div className="flex space-x-4 p-4">
              {quotes &&
                quotes.map((quote, index) => (
                  <div key={index} className="w-80 flex-shrink-0">
                    <div className="bg-white shadow-lg rounded-2xl p-6">
                      <p className="text-lg font-medium text-black">
                        {quote.quote}
                      </p>
                      <p className="text-sm text-[#340000] text-right mt-2">
                        - {quote.author}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
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
