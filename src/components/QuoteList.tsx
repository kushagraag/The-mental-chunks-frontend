"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";

export default function QuoteList() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await fetch("/quotes.json");
      const data = await res.json();
      setQuotes(data.quotes);
    };

    fetchQuotes();
  }, []);

  return (
    <div className="py-10 ">
      <Header />
      <div className="container mx-auto  text-justify max-w-screen-lg mt-12 h-auto">
        <h1 className="text-[50px] text-[#340000] text-center font-bold mb-4 ">
          Quotes for you
        </h1>
      </div>
      <div className=" container mx-auto grid md:grid-cols-3 gap-y-8 gap-x-8 place-items-center max-w-screen-lg mt-12 h-auto">
        {quotes &&
          quotes.map((quote, index) => (
            <div
              key={index}
              className="zoom w-64 py-4 px-8 bg-white shadow-lg rounded-2xl bg-[#f26144] "
            >
              <div>
                <p className="text-m font-medium text-[#340000]">
                  {quote.quote}
                </p>
                <p className="text-xs text-[#340000]  text-end">
                  - {quote.author}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
