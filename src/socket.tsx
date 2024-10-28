// src/socket.ts
import { io } from 'socket.io-client';

// Create and export the socket connection
const socket = io('https://websocket-randomchat.onrender.com');

export default socket;
