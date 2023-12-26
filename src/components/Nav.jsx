import React from 'react'

const Nav = () => {
  return (
    <nav className='container'>
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzD0t-ja3CL6sUTQey0OFBsPXC71TjuwmR8VfREiMG0-UuUFwQ9_o9DNJcibmKLYUCcpc&usqp=CAU" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
  )
}

export default Nav