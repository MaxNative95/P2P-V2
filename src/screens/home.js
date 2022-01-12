import React, { useState, useLayoutEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BLUE = "#007AFF";
const BLACK = "#000000";
const LENGTH = 6; // Length of the Room ID

export const Home = () => {
    const [roomID, setRoomId] = useState('');
    const navigate = useNavigate();

    // Generating random room id for the initiating peer
    const generateID = () => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < LENGTH; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const handleSubmit = () => {
        if (roomID !== '') {
            // Enter the room
            let room = roomID
            navigate(`chat/${room}`);
        }
    }

    const handleCreateSubmit = () => {
        // Make a new room ID
        const room = generateID();
        console.log(room); // Share this room id to another peer in order to join in the same room
        setRoomId(room);
        navigate(`chat/${room}`);
    }

    return (
        <div style={{backgroundColor:'#000'}}>
            <div style={{ paddingLeft: 10, paddingRight: 10, margin: 10, }}>
                <p style={{ alignSelf: 'center', fontSize: 24, margin: 8, fontWeight: 'bold', color: '#FFF' }}>P2P Chat App</p>
                <p style={{ alignSelf: 'center', color: '#D3D3D3', marginTop: 5, }}>If you have a Room ID, paste it here</p>
                <input
                    placeholder="Room ID"
                    onChange={(e) => setRoomId(e.target.value)}
                    style={{
                        color: '#000'
                    }}
                />
            </div>
            <div style={{ marginLeft: 15 }}>
                <Button
                    onClick={handleSubmit}
                    color="primary"
                >
                    Join Room
                </Button>
            </div>
            <div style={{ marginLeft: 15, marginTop: 15 }}>
                <Button
                    onClick={handleCreateSubmit}
                    color="primary"
                >
                    Create Room
                </Button>
                <p style={{ alignSelf: 'center', color: '#D3D3D3', marginTop: 5, }}>Don't have a Room ID? Create One :)</p>
            </div>
        </div>
    )
}