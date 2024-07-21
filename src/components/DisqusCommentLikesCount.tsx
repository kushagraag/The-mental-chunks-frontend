import React, { useEffect, useState } from "react";
import axios from "axios";

interface DisqusCommentLikesCountProps {
  articleId: string;
  setCommentCount: (count: number) => void;
}

const DISQUS_API_URL = "https://disqus.com/api/3.0/threads/details.json";
const DISQUS_API_KEY = process.env.NEXT_PUBLIC_DISQUS_API_KEY; // Store your Disqus API key in an environment variable
const DISQUS_SHORTNAME = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME; // Store your Disqus shortname in an environment variable

const DisqusCommentLikesCount: React.FC<DisqusCommentLikesCountProps> = ({
  articleId,
  setCommentCount,
}) => {
  useEffect(() => {
    const fetchThreadDetails = async (identifier: string) => {
      try {
        const response = await axios.get(DISQUS_API_URL, {
          params: {
            api_key: DISQUS_API_KEY,
            forum: DISQUS_SHORTNAME,
            thread: `ident:${identifier}`,
          },
        });
        setCommentCount(response.data.response.posts);
      } catch (error) {
        console.error("Error fetching thread details:", error);
      }
    };

    if (articleId) {
      fetchThreadDetails(articleId); // Fetch the thread details using the article ID
    }
  }, [articleId]);
};

export default DisqusCommentLikesCount;
