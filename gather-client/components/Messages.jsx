import React, { useEffect, useRef } from 'react'
import EVENTS from '../config/event';
import { useSocket } from '../context/socketContext'
import styles from '../styles/Messages.module.css'

const Messages = () => {

  const { socket, msg, setMsg, roomId, username } = useSocket();
  const newMsgRef = useRef(null);
  const messageEndRef = useRef(null);

  function handleSendMsg(e) {
    e.preventDefault();
    const message = newMsgRef.current.value;
    if (!String(message).trim()) return;

    socket.emit(EVENTS.client.send_room_msg, { roomId, message, username })

    const date = new Date()
    setMsg([
      ...msg, {
        username: "You",
        message,
        time: `${date.getHours()}:${date.getMinutes()}`,
      }
    ])
    newMsgRef.current.value = "";
  }

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({behavoir: 'smooth'})

  }, [msg])
  

  if (!roomId) {
    return <div />
  }

  return (
    <div className={styles.chat}>
      <div className={styles.messageList}>
        {msg.map(({ message, username, time }, index) => {
          return (
            <div key={index} className={styles.message}>
                <div className={styles.messageSender}>{username} - {time}</div>
                <div className={styles.messageContent}>{message}</div>
            </div>
          )
        })}
      <div ref={messageEndRef} />
      </div>
      
      <div className={styles.input}>
        <form onSubmit={handleSendMsg}>
          <textarea
            required
            type="text"
            placeholder='Your message here'
            ref={newMsgRef}
            rows={3} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Messages