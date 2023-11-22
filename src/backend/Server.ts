import dotenv from "dotenv";
import express from "express";
import http from "node:http";
import WebSocket from "ws";
import jwt from "jsonwebtoken";

dotenv.config();
const app = express();
const server = http.createServer(app);
const port = process.env.PORT ?? 3000;

const ws = new WebSocket.Server({ server });
ws.on("connection", (ws: WebSocket, req) => {
  const token = url.parse(req.url, true).query.tolken;
  console.log("connected");
  ws.send("hello friend!!");

  ws.on("message", (message: string) => {
    console.log(`${user}: ${message}`);
    ws.send(`Server received this message:${message}`);
  });

  ws.on("close", () => {
    console.log("Disconnected");
  });
});

server.listen(process.env.PORT || 8999, () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
});