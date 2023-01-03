import React from 'react'
import Navbar from './Navbar'
import ChatList from "./ChatList"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Navbar/>
        <ChatList/>
    </div>
  )
}

export default Sidebar