"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
const appContainer = document.getElementById('container');
const initChat = () => {
    const socket = (0, socket_io_client_1.io)({
        auth: {
            serverOffset: 0,
        }
    });
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const messages = document.getElementById('messages');
    socket.on('chat message', (msg, serverOffset) => {
        const item = `<li>${msg}</li>`;
        messages.insertAdjacentHTML('beforeend', item);
        socket.auth.serverOffset = serverOffset;
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input.value) {
            socket.emit('chat message', input.value);
            input.value = '';
        }
    });
};
const navigateTo = (page) => {
    appContainer.innerHTML = '';
    switch (page) {
        case 'login':
            renderLoginPage();
            break;
        case 'register':
            renderRegisterPage();
            break;
        default:
            break;
    }
};
const renderLoginPage = () => {
    const loginTemplate = `
    <h2>Login</h2>
    <form id="loginForm">
            <label for="username">Nombre de usuario:</label>
            <input type="text" id="username" required>
            <br>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" required>
            <br>
            <button type="submit">Iniciar sesión</button>
    </form>
    `;
    appContainer.innerHTML = loginTemplate;
    const loginForm = document.getElementById('loginForm');
    loginForm === null || loginForm === void 0 ? void 0 : loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    });
};
const renderRegisterPage = () => {
    const registerTemplate = `
    <h2>Registro</h2>
    <form id="registerForm">
        <label for="newUsername">Nuevo nombre de usuario:</label>
        <input type="text" id="newUsername" required>
        <br>
        <label for="newPassword">Nueva contraseña:</label>
        <input type="password" id="newPassword" required>
        <br>
        <button type="submit">Registrarse</button>
    </form>
    <p>¿Ya tienes una cuenta? <a href="#" onclick="navigateTo('login')">Iniciar sesión</a></p>
    `;
    appContainer.innerHTML = registerTemplate;
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUserName = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;
    });
};
const renderChatPage = () => {
    const chatTemplate = `
    <section id="chat">
        <ul id="messages">

        </ul>
        <form id="form">
            <input type="text" name="message" id="input"
            placeholder="Type a message" autocomplete="off" />
            <button type="submit">Send</button>
        </form>
    </section>
    `;
};
