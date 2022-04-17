import React from 'react'
import './Chatscreen.css'
import ContactCard from './ContactCard';
import { useState } from 'react'
import AddFriend from './AddFriend';
import usersList from '../usersDB';
import './CurrentChat.css'

const CurrentChat = (props) => {
    // we will get the total messages from the loggingUser
    var totalMessages = props.loggingUser.chats
    // now we will filter the array to get messages only between the loggingUser and his friend
    var loggingUserMessages = totalMessages.filter(message =>
    ((message.author == props.loggingUser.nickname && message.receiver == props.hisFriend.nickname) ||
        (message.author == props.hisFriend.nickname && message.receiver == props.loggingUser.nickname)))

    return (
        <div id="chat-history-container">
            <div className="chat-history overflow-auto h-100">
                <ul id="chat-messages-list">
                    {
                        loggingUserMessages.map((message) =>
                            message.author == props.loggingUser.nickname ?
                                (<li className="clearfix" id="chat-messages">
                                    <div className="message-data">
                                    </div>
                                    <div className="message my-message">{message.data}</div>
                                </li>)
                                :
                                (<li className="clearfix" id="chat-messages">
                                    <div className="message-data text-right">
                                    </div>
                                    <div className="message other-message float-right">{message.data} </div>
                                </li>))
                    }
                </ul>
            </div>
        </div>
    );
}

export default CurrentChat