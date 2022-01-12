import React from 'react';
import { useParams } from 'react-router';
import socketClient from "socket.io-client";
const SERVER = "http://192.168.1.80:3006";

export const Chat = (props) => {
    var socket = socketClient(SERVER);
    let params = useParams();
    socket.on('connection', () => {
        console.log(`I'm connected with the back-end`);
    });
    return (
        <div>
            <p>Chat with Room ID {params.room}</p>
        </div>
    )
};

