"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (event) => {
    event.preventDefault();
    // Validate email format if needed
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    try {
      // Send email to backend for subscription handling
      //   const response = await fetch("/api/subscribe", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ email }),
      //   });
      const response = {
        ok: true,
      };

      if (response.ok) {
        alert("Subscribed successfully!");
        setEmail("");
      } else {
        throw new Error("Subscription failed.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Subscription failed. Please try again later.");
    }
  };

  return (
    <div
      className=" bg-cover flex items-center justify-center py-10"
      style={{
        backgroundImage: "url('/assets/small-bubble-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "5% 8%", // Adjust as needed
        backgroundSize: "30% 50%", // or 'cover' based on your requirement
      }}
    >
      <div
        className="bg-[#FFF4F3]  p-8 rounded-lg shadow-lg h-[30vh] md:h-[50vh]"
        style={{
          width: "65vw",
        }}
      >
        <h2 className="text-[26px] md:text-[35px] font-bold mb-4 md:mt-8 text-center">
          Subscribe to our Newsletter
        </h2>
        <div className="container md:mt-8 max-w-lg w-full items-center mx-auto">
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 md:p-6 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 text-[20px] md:text-[24px]"
              required
            />
            <button
              type="submit"
              className="w-full p-2 md:p-3 bg-[#F26044] text-white text-[20px] md:text-[24px] rounded-lg hover:bg-[#d14d3b] focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
