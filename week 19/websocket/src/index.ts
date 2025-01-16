import express from "express";
import { WebSocket, WebSocketServer } from "ws";

const app = express();

app.get("/", (req, res) => {
  res.send("hello express");
});

const httpServer = app.listen(8080);

const wss = new WebSocketServer({ server: httpServer });

let user = 0;
wss.on("connection", (ws) => {
  ws.on("error", console.error);

  ws.on("message", (data, isBinary) => {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
  console.log("user connected ", ++user);
  ws.send("hello from ws");
});
