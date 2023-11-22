import {io} from "socket.io-client";

const socket = io();
const submit = (document.getElementById('submit') as HTMLButtonElement);
       
socket.on('message', (msg) =>{
    console.log('hohohoh', msg);
}) 

submit.addEventListener('click', () => {

})