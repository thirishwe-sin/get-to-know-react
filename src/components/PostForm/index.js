import React, { useState } from "react";
import "./index.css";

export default function PostForm({ addPost }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("upcoming");
  const resetForm = () => {
    setTitle("");
    console.log("updated successfully");
  };

  const upload_post = (e) => {
    e.preventDefault(); //prevent default refreshing page
    const post = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      status: status
    };
    resetForm();
    addPost(post);
    console.log(post);
  };

  return (
    <form className="post-form" onSubmit={upload_post}>
      <h1>Create Post {status}</h1>
      <div className="form-control">
        <label htmlFor="">Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Status</label>
        <select name="" id="" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="dropped">Dropped</option>
          <option value="ongoing">Ongoing</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>
      <div className="form-control">
        <button type="submit">Post Now</button>
      </div>
    </form>
  );
}
