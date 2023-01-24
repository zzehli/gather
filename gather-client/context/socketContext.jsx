import { createContext, useContext, useState } from 'react';
import io from 'socket.io-client';
import { SOCKET_URL } from '../config/default';
import EVENTS from '../config/event';

const socket = io(SOCKET_URL);

const SocketContext = createContext({ 
    socket,
    setUsername: () => false,
    roomList: {},
    msg: [],
    setMsg: () => false
});

function SocketProvider(props) {
    const [username, setUsername] = useState("");
    const [roomId, setRoomId] = useState("");
    const [roomList, setRoomList] = useState({});
    const [msg, setMsg] = useState([]);

    socket.on(EVENTS.server.rooms, (roomList) => {
        setRoomList(roomList);
    })

    socket.on(EVENTS.server.joined_room, (id) => {
        setRoomId(id);
        setMsg([]);
    })

    socket.on(EVENTS.server.room_msg, ({message, username, time}) => {
        console.log(message);
        setMsg([
            ...msg, {message, username, time}
        ])
    })

    return <SocketContext.Provider 
                value={{ socket, username, setUsername, roomList, roomId, msg, setMsg }} 
                {...props}
            />;
}

export const useSocket = () => useContext(SocketContext);

export default SocketProvider;