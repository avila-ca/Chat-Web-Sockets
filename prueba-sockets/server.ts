import dotenv from "dotenv";
import http from "node:http";
import express from "express";
import {Server} from "socket.io"; 
import bodyParser from "body-parser";

dotenv.config();

const port = process.env.PORT ?? 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/index.html'))
app.get('/', (req, res) => {
    //res.sendFile(__dirname + '/index.html');

})
io.on('connection', (socket) => {
    console.log('a user connected!!');

    socket.on('message', (msg:string) => {
        console.log('mensaje:',msg);
        io.emit('message', msg);
    })
    socket.on('disconnect', function () {
        console.log('A user disconnected');
     });
})

server.listen(port, () => {
    console.log(`Running on port: ${port}`);
})