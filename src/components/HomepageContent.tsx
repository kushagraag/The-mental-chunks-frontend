import React from "react";

import Homepage_part1 from "@/components/Homepage-part1";
import Homepage_part2 from "@/components/Homepage-part2";
import Homepage_part3 from "@/components/Homepage-part3";

const HomepageContent: React.FC = () => {
  return (
    <header className="header-class">
      <Homepage_part1 />

      <Homepage_part2 />

      <Homepage_part3 />

      <div>
        <h3>part 4</h3>
        <p>bg image - blog-nd-article - try to repeat</p>
        <div id="3 blogs">
          <p>try to put line like animation when drawn</p>
          <p>blog pic</p>
          <p>Blog heading</p>
          <p>date</p>
          <p>one line content</p>
          <p>button</p>
        </div>
        <p>read all button in end</p>
      </div>

      <div>
        <h3>part 5</h3>
        <p>bg image - some small-bubble-bg + pic color to set bg</p>
        <p>subscrube to newsletter part</p>
      </div>
    </header>
  );
};

export default HomepageContent;
