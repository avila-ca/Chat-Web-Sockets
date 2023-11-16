import express from "express";
import {createServer} from "node:http";
import{ Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('socket');
    socket.emit('mensaje', 'yeaaaa')
})
 
httpServer.listen(3000,() => console.log('listenning at 3000'));