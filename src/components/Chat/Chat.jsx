import React, { useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material';

const Chat = () => {
    const [inputText, setInputText] = useState("");

    const sendText = (e) => {
        e.preventDefault();
        console.log("message send")
        setInputText("");
    }


    return (
        <div className='chat'>
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h2>Name</h2>
                    <p>Last Seen at..</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className='chat_messages chat_reciever'>
                    <span className="chat_name">Mubashar</span>Hey Guys! <span className="chat_timestamp">12.00pm</span></p>
            </div>
            <div className="chat_footer">
                <InsertEmoticon />
                <form >
                    <input type="text" value={inputText} onChange={(e) => { setInputText(e.target.value) }} placeholder='type your message' />
                    <input type="submit" value="Send Message" onClick={sendText} />
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat;