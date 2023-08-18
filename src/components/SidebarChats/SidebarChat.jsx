import './SidebarChat.css';
import React from 'react';
import { Avatar } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const SidebarChat = ({ id, name, addNewChat }) => {
    const createChat = () => {
        const chatName = prompt('Enter a name for chat: ');
        if (chatName) {
            addDoc(collection(db, 'chats'), { name: chatName });
        };
    }

    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar />
            <div className="sidebarChat_info">
                <h2>{name}</h2>
                <p>Read More...</p>
            </div>
        </div>
    ) :
        (
            <div className='sidebarChat' onClick={createChat}>
                <h1>Add New Chat</h1>
            </div>
        );
}

export default SidebarChat;