import React, { useRef } from 'react'
import { useSocket } from '../context/socketContext'
import EVENTS from '../config/event'
import styles from '../styles/Room.module.css'

const Rooms = () => {
  const { socket, roomId, roomList } = useSocket();
  const newRoomRef = useRef(null);
  
  function handleCreateRoom(e) {
    e.preventDefault();
    const roomName = newRoomRef.current.value || '';

    if (!String(roomName).trim()) return;

    socket.emit(EVENTS.client.create_room, { roomName });

    newRoomRef.current.value = "";
  }

  function handleJoinRoom(roomKey) {
    if (roomKey === roomId) return;
    socket.emit(EVENTS.client.join_room, roomKey)
  }

  return (
    <nav className={styles.sidebar}>
      <div className={styles.createRoomWrapper}>
        <form onSubmit={handleCreateRoom}>
          <input ref={newRoomRef} placeholder="New Room Name" />
          <button type="submit">Create Room</button>
        </form>
      </div>

      <ul className={styles.roomList}>
        {Object.keys(roomList).map((key) => {
          return <div key={key}>
            <button disabled={key === roomId}
              title={`Join ${roomList[key].name}`}
              onClick={() => handleJoinRoom(key)}>
              {roomList[key].name}
            </button>
          </div>
        })}
      </ul>

    </nav>
  )
}

export default Rooms