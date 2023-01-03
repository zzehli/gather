import React from 'react'
import avatarHelmet from '../assets/avatar/avatar-helmet.png'

const MessageOne = () => {
  return (
    <div>
            <div className='message'>
        <div className="messageInfo">
            <img src={avatarHelmet} alt="" />
            <span>just now</span>
        </div>
        <div className="messageContent">
            <p>hello</p>
            <img src="https://github.blog/wp-content/uploads/2020/12/wallpaper_footer_4KUHD_16_9.png" alt="" />
        </div>

    </div>
    <div className='message owner'>
    <div className="messageInfo">
        <img src={avatarHelmet} alt="" />
        <span>just now</span>
    </div>
    <div className="messageContent">
        <p>hello</p>
        <img src="https://github.blog/wp-content/uploads/2020/12/wallpaper_footer_4KUHD_16_9.png" alt="" />
    </div>

</div>
        
    </div>

  )
}

export default MessageOne