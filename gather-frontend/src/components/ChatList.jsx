import React from 'react'
import avatarHelmet from '../assets/avatar/avatar-helmet.png'

const ChatList = () => {
    return (
        <div className='chatList'>
            <div className='userChat'>
                <img src={avatarHelmet} alt='user avatar'/>
                <div className='userChatInfo'>
                    <span>Jane</span>
                    <p>hello</p>
                </div>
            </div>
            <div className='userChat'>
                <img src={avatarHelmet} alt='user avatar'/>
                <div className='userChatInfo'>
                    <span>Jane</span>
                    <p>hello</p>
                </div>
            </div>            <div className='userChat'>
                <img src={avatarHelmet} alt='user avatar'/>
                <div className='userChatInfo'>
                    <span>Jane</span>
                    <p>hello</p>
                </div>
            </div>            <div className='userChat'>
                <img src={avatarHelmet} alt='user avatar'/>
                <div className='userChatInfo'>
                    <span>Jane</span>
                    <p>hello</p>
                </div>
            </div>
        </div>
    )
}

export default ChatList