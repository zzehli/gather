import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import config from "./config.js";
import crypto from "crypto";

const EVENTS = {
  connection: "connection",
  client: {
    create_room: "create_room",
    send_room_msg: "send_room_msg",
    join_room: "join_room",
  },
  server: {
    rooms: "rooms",
    joined_room: "joined_room",
    room_msg: "room_msg",
  }
}

const app = express()
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  }
});

//for dev purporses
app.get("/", (_, res) => res.send('server is up'))

httpServer.listen(config.port, config.host, () => {
  console.log('server running on ', httpServer.address())
});

const roomList = {}

io.on(EVENTS.connection, (socket) => {
  console.log('socket connected ' + socket.id);
  socket.emit(EVENTS.server.rooms, roomList)
  //user creates a new room
  socket.on(EVENTS.client.create_room, ({roomName}) => {
    console.log({roomName});
    const roomId = crypto.randomUUID();
    roomList[roomId] = {
      name: roomName,
    };
    socket.join(roomId);
    //emit to all socket but this one
    socket.broadcast.emit(EVENTS.server.rooms, roomList);
    //emit to one socket the roomList
    socket.emit(EVENTS.server.rooms, roomList);
    //emit the room the socket just joined
    socket.emit(EVENTS.server.joined_room, roomId);
  });

  //user sends msg to a room
  socket.on(EVENTS.client.send_room_msg, ({roomId, message, username}) => {
    const date = new Date();
    socket.to(roomId).emit(EVENTS.server.room_msg, {
      message,
      username,
      time: `${date.getHours()}:${date.getMinutes()}`,
    })
  });

  //user joins a room
  socket.on(EVENTS.client.join_room, (roomId) => {
    socket.join(roomId);
    socket.emit(EVENTS.server.joined_room, roomId);
  });
})

