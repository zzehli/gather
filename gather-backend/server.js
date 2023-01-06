import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import config from "./config.js";

const EVENTS = {
  connection: "connection",
}

const app = express()
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: config.corsOrigin,
  }
});

//for dev purporses
app.get("/", (_, res) => res.send('server is up'))

httpServer.listen(config.port, config.host, () => console.log(`server running`))

io.on(EVENTS.connection, (socket) => {
  console.log('socket connected' + socket.id);
})
