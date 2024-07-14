"use client";

import { useState } from "react";

export default function GetQuote() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!message) {
      setError("Message is required");
      return;
    }

    try {
      //   const res = await fetch("/api/get-quote", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ email, message }),
      //   });
      const res = {
        ok: true,
      };

      if (res.ok) {
        setSuccess("Your quote request has been sent successfully!");
        alert("Your quote request has been sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        setError("Failed to send quote request.");
        alert("Failed to send quote request.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="">
      <form className="rounded" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Enter your Email ID
          </label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="john@doe.com"
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {!email && error && (
            <p className="text-red-500 text-xs italic">
              This field is required.
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Start typing your quote..."
            className="h-[20vh] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {!message && error && (
            <p className="text-red-500 text-xs italic">
              This field is required.
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Get A Quote
          </button>
        </div>
        {success && (
          <p className="text-green-500 text-xs italic mt-4">{success}</p>
        )}
        {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
      </form>
    </div>
  );
}
