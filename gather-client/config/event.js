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
export default EVENTS;