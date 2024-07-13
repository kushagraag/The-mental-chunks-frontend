import React from "react";

import Homepage_part1 from "@/components/Homepage-part1";
import Homepage_part2 from "@/components/Homepage-part2";
import Homepage_part3 from "@/components/Homepage-part3";
import Homepage_part4 from "@/components/Homepage-part4";

const HomepageContent: React.FC = () => {
  return (
    <header className="header-class">
      <Homepage_part1 />

      <Homepage_part2 />

      <Homepage_part3 />

      <Homepage_part4 />

      <div>
        <h3>part 5</h3>
        <p>bg image - some small-bubble-bg + pic color to set bg</p>
        <p>subscrube to newsletter part</p>
      </div>
    </header>
  );
};

export default HomepageContent;
