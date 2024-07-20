"use client";

import {
  Tabs,
  Tab,
  TabPanel,
  TabsBody,
  TabsHeader,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React, { useState } from "react";

const data = [
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

export default function Homepage_Tabs() {
  const [selectedTab, setSelectedTab] = useState(data[0].id);
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="bg-[url('/assets/blog-nd-article.png')] bg-cover bg-center bg-bottom min-h-screen py-10">
      <div className="container mx-auto flex justify-center items-start rounded-lg overflow-hidden">
        <div className="flex w-full max-w-5xl space-x-8 my-16">
          <div className="hidden md:block">
            <Tabs value={selectedTab} orientation="vertical" className="">
              <TabsHeader className="bg-transparent">
                {data.map(({ title, id }) => (
                  <Tab
                    key={id}
                    value={id}
                    onClick={() => setSelectedTab(id)}
                    className={`rounded-lg font-semibold px-8 py-2 mb-2 ${
                      selectedTab === id
                        ? "bg-[#ffffff] text-[#F26044]"
                        : "bg-[#F26044] hover:bg-[#fbe5e3] text-white"
                    }`}
                  >
                    {title}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody className="flex-1 p-8 bg-[#ffffff] rounded-[20px]">
                {data.map(({ title, id, content }) => (
                  <>
                    <TabPanel
                      key={id}
                      value={id}
                      className="font-semibold text-[#F26044] text-3xl"
                    >
                      {title}
                    </TabPanel>
                    <TabPanel key={id} value={id} className="py-0">
                      {content}
                    </TabPanel>
                  </>
                ))}
              </TabsBody>
            </Tabs>
          </div>
          <div className="block md:hidden">
            {data.map(({ id, title, content }) => (
              <div key={id} className="mr-8">
                <Accordion
                  open={open === id}
                  className="mb-2 rounded-lg border border-[#F26044] px-4"
                >
                  <AccordionHeader
                    onClick={() => handleOpen(id)}
                    className={`border-b-0 transition-colors text-[#F26044]`}
                  >
                    {title}
                  </AccordionHeader>
                  <AccordionBody className="pt-0 text-base font-normal">
                    {content}
                  </AccordionBody>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
