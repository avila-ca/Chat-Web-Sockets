import { createClient } from "@libsql/client";
import dotenv from "dotenv";
import express from "express";
import path from "path"
import {createServer} from "node:http";
import{ Server, Socket } from "socket.io";

dotenv.config();

const port = process.env.PORT ?? 3001;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    connectionStateRecovery:{}
});
 
const db = createClient({
    url: "libsql://tough-titania-avila-ca.turso.io",
    authToken: process.env.DB_TOKEN
});

const createTable = async () => await db.execute(`

    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        content TEXT 
    )
`)
 
createTable();

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', '..', 'Client', 'index.html'));
})


io.on('connection', (socket) => {
    console.log('a user has connected!');
    
    socket.on('disconnect', () => console.log('Bye!!'))
    socket.on('chat message', async (msg) => {
        let result;
        try {
            result = await db.execute({
                sql: 'INSERT INTO messages (content) VALUES (:msg)',
                args: { msg }
            })
        } catch (e) {
            throw new Error('Error: ...' + e)
        }

       io.emit('chat message', msg, result.lastInsertRowid?.toString());
    })

    if (!socket.recovered) {
        const recoverMessages =async () => {
            
        try {
            const results = await db.execute({
                sql: 'SELECT id, content FROM messages WHERE id > ?',
                args : [socket.handshake.auth.serverOffset ?? 0]
            })

            results.rows.forEach( row => {
                socket.emit('chat message', row.content, row.id?.toString())
            });
        } catch (e) {
            throw new Error('Error:...' + e)
        }
    }
    recoverMessages();
    }
})


 
httpServer.listen(port,() => console.log('listenning on  port: ', port));