import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data, isBinary) {
    [...wss.clients].filter(c => c !== ws)
    .forEach(c => c.send(isBinary? data.toString(): data));
    console.log('received: %s', data);
    })
  });