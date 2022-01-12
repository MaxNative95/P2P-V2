import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from '../screens/home';
import { Chat } from '../chat/Chat';
import App from '../App';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route exact path="/home/chat/:room" element={<Chat />} />
        </Routes>
    );
}