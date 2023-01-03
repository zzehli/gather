import React from 'react'
import avatarGeneric from '../assets/avatar/customer-64.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Gather</span>
        <div className="user">
            <img src={avatarGeneric} alt="generic avatar" />
            <span>John</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar