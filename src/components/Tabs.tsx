"use client";

import React, { useState } from "react";

const tabs = [
  {
    id: 1,
    title: "Mindfulness",
    content:
      "Research has shown that practicing mindfulness regularly can lead to significant reductions in stress, anxiety, and symptoms of depression. By training your mind to focus on the present moment, you can cultivate greater emotional resilience and overall well-being.",
  },
  {
    id: 2,
    title: "SelfCare",
    content:
      "Self-care isn't selfish—it's essential for maintaining good mental health. Engaging in activities that nourish your body, mind, and spirit, such as exercise, meditation, and spending time with loved ones, can help prevent burnout and improve your quality of life.",
  },
  {
    id: 3,
    title: "Relationships",
    content:
      "Healthy relationships are vital for our mental health and overall well-being. Positive connections with friends, family, romantic partners, and colleagues can provide emotional support, reduce stress, and increase feelings of happiness and fulfillment.",
  },
  {
    id: 4,
    title: "Stress",
    content:
      "Did you know that chronic stress can have serious implications for both your physical and mental health? Learning to manage stress effectively can lower your risk of developing conditions like anxiety, depression, and cardiovascular disease.",
  },
  {
    id: 5,
    title: "Support",
    content:
      "Building a strong support network is crucial for maintaining good mental health. Whether it's friends, family, support groups, or online communities, having people you can turn to for understanding, encouragement, and solidarity can provide invaluable support on your mental health journey.",
  },
  {
    id: 6,
    title: "Coping Skills",
    content:
      "Everyone faces challenges in life, but having effective coping skills can make all the difference. Coping skills are like tools in your toolbox—you can use them to navigate difficult situations, manage your emotions, and bounce back from setbacks with resilience.",
  },
];

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  return (
    <div className="bg-[url('/assets/blog-nd-article.png')] bg-cover bg-center bg-bottom min-h-screen py-10">
      <div className="container mx-auto flex justify-center items-start rounded-lg overflow-hidden">
        <div className="flex w-full max-w-5xl space-x-8 my-16">
          <div className="flex flex-col w-1/4 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-[26px] ${
                  selectedTab === tab.id
                    ? "bg-[#F26044] text-white font-semibold"
                    : "bg-[#ffffff] text-[#F26044] hover:bg-[#fbe5e3]/75 font-semibold"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="flex-1 p-8 bg-[#ffffff] rounded-[20px]">
            {tabs.map((tab) =>
              selectedTab === tab.id ? (
                <div key={tab.id}>
                  <h2 className="text-[28px] text-[#F26044] font-bold mb-4">
                    {tab.title}
                  </h2>
                  <p className="text-[24px] text-justify leading-loose">
                    {tab.content}
                  </p>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
