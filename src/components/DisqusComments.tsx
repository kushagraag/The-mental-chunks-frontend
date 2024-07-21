import React from "react";
import { DiscussionEmbed } from "disqus-react";

interface DisqusCommentsProps {
  url: string;
  identifier: string;
  title: string;
}

const DisqusComments: React.FC<DisqusCommentsProps> = ({
  url,
  identifier,
  title,
}) => {
  const disqusShortname = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME; // Access the environment variable
  const disqusConfig = {
    url: url,
    identifier: identifier,
    title: title,
  };

  if (!disqusShortname) {
    console.error(
      "Disqus shortname is not defined. Please check your .env.local file."
    );
    return null; // Don't render the Disqus component if the shortname is missing
  }

  return (
    <div className="disqus-comments">
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default DisqusComments;
