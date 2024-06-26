import React from 'react'
import './index.css'

export default function NavBar({setShowModal}) {
  return (
      <nav className='navbar'>
        <div className="container">
          <h1>Logo</h1>
          <ul>
            <li>Home</li>
            <li>Posts</li>
            <li onClick={() => setShowModal(true)} className='pointer'>Create Post</li>
          </ul>
        </div>
      </nav>
  )
}
