import React, { useRef } from 'react'
import EVENTS from '../config/event';
import { useSocket } from '../context/socketContext'

const Messages = () => {

  const { socket, msg, setMsg, roomId, username } = useSocket();
  const newMsgRef = useRef(null);

  function handleSendMsg() {
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

  
  if (!roomId) {
    return <div />
  }

  return (
    <div>
      {msg.map(({message}, index) => {
        return <p key={index}>{message}</p>
      })}

      <div>
        <textarea
          placeholder='Tell use what you are thinking'
          ref={newMsgRef}
          rows={1} />
        <button onClick={handleSendMsg}>Send</button>
      </div>
    </div>
  )
}

export default Messages