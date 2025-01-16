"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("hello express");
});
const httpServer = app.listen(8080);
const wss = new ws_1.WebSocketServer({ server: httpServer });
let user = 0;
wss.on("connection", (ws) => {
    ws.on("error", console.error);
    ws.on("message", (data, isBinary) => {
        wss.clients.forEach(function each(client) {
            if (client.readyState === ws_1.WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });
    console.log("user connected ", ++user);
    ws.send("hello from ws");
});
