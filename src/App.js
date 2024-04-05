import React from "react";
import { useState } from "react";
import NavBar from "./components/Nav bar";
import PostsList from "./components/PostsList";
import Modal from "./components/Modal";
import PostForm from "./components/PostForm";

export default function App() {
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Second Post",
      status: "dropped"
    },
  ]);
  const [showModal, setShowModal] = useState(false)

  const addPost = (post) => {
    setPosts((prevState => [...prevState, post]))
    setShowModal(false)
  }

  return (
    <>
      <NavBar setShowModal={setShowModal} />
      <PostsList posts={posts} />
      {showModal &&
        <Modal setShowModal={setShowModal} >
          <PostForm addPost={addPost} />
        </Modal>
      }
    </>
  );
}
