import dotenv from "dotenv";
import WebSocket from "ws";

dotenv.config();
const port = process.env.PORT ?? "3000";

const ws = new WebSocket(`ws://localhost:${port}`);
ws.on("connection", (ws: WebSocket) => {
  console.log("New client connected");

  ws.on("message", (message: string) => {
    console.log(`${user}: ${message}`);
  });

  ws.on("close", () => {
    console.log("Disconnected");
  });
});
