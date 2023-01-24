import React, { useRef } from 'react'
import { useSocket } from '../context/socketContext'
import EVENTS from '../config/event'

const Rooms = () => {
  const {socket, roomId, roomList} = useSocket();
  const newRoomRef = useRef(null);
  function handleCreateRoom(){
    const roomName = newRoomRef.current.value || '';

    if(!String(roomName).trim()) return;

    socket.emit(EVENTS.client.create_room, {roomName});

    newRoomRef.current.value = "";
  }

  function handleJoinRoom(roomKey){
    if(roomKey === roomId) return;
    socket.emit(EVENTS.client.join_room, roomKey)
  }
  
  return (
    <nav>
      <div>
        <input ref={newRoomRef} placeholder="Room Name"/>
        <button onClick={handleCreateRoom}>Create Room</button>
      </div>

      {Object.keys(roomList).map((key) => {
        return <div key={key}>
                  <button disabled={key === roomId}
                          title={`Join ${roomList[key].name}`}
                          onClick={() => handleJoinRoom(key)}>
                    {roomList[key].name}
                  </button>
                </div>
      })}

    </nav>
  )
}

export default Rooms