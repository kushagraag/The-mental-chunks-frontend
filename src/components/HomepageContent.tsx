import React from "react";

import Homepage_Main from "@/components/Homepage_Main";
import Homepage_aboutus from "@/components/Homepage_aboutus";
import Tabs from "@/components/Tabs";
import Timeline from "@/components/Timeline";
import SubscribeForm from "@/components/SubscribeForm";
import Homepage_Quotes from "@/components/Homepage_Quotes";

const HomepageContent: React.FC = () => {
  return (
    <div>
      <Homepage_Main />
      <Homepage_aboutus />
      <Homepage_Quotes />
      <Tabs />
      <Timeline />
      <SubscribeForm />
    </div>
  );
};

export default HomepageContent;
