import React from "react";
import { useState } from "react";
import NavBar from "./components/Nav bar";
import PostsList from "./components/PostsList";
import Modal from "./components/Modal";

export default function App() {
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 2,
      title: "Second Post",
    },
    {
      id: 3,
      title: "Third Post",
    },
  ]);
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <NavBar setShowModal={setShowModal} />
      <PostsList posts={posts} />
      {showModal &&
        <Modal>
          <h1>Zoom class is available now</h1>
          <p>Feel free to <a href=''>join</a> now</p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </Modal>
      }
    </>
  );
}
