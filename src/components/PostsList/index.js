import React from "react";
import "./index.css";

export default function PostsList({ posts }) {
  return (
    <div className="postList">
      {posts.length > 0 &&
        posts.map((post, index) => (
          <div className="single-post" key={index}>
            {post.title}
          </div>
        ))}
    </div>
  );
}
