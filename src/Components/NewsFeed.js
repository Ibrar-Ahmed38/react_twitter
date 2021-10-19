import React from "react";
import "./NewsFeed.css";
import Tweet from "./Tweet";

const NewsFeed = () => {
  return (
    <div className="newsfeed">
      <h3>Latest Tweets</h3>

      <div className="feed_header">
        <Tweet />
      </div>
    </div>
  );
};

export default NewsFeed;
