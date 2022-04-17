import React from 'react'
import './Chatscreen.css'
import ContactCard from './ContactCard';
import { useState } from 'react'
import AddFriend from './AddFriend';
import usersList from '../usersDB';
import CurrentChat from './CurrentChat';
import IconClick from './IconClick';

function Chatscreen(props) {
    var loggedPersonUsername = localStorage.getItem("currentUser")
    var loggingUser = usersList.find(x => x.username == loggedPersonUsername)
    if (localStorage.getItem(loggingUser.username)) {
        loggingUser.avatar = localStorage.getItem(loggingUser.username)
    }
    // will be updated every time we add a friend to the current user
    const [friends, setFriends] = useState(loggingUser.friends);
    // will be updated every time we click on a contact Card
    const [friendChat, setFriendChat] = useState(usersList[0])

    return (
        <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="clearfix card chat-app" id="chat-window">
                <div className="people-list" id="people-list">
                    <div>
                        <div id="myProfile">
                            <img className="col" id="myAvatar" src={loggingUser.avatar} />
                            <span className="col" id="myNickname">{loggingUser.nickname}</span>
                        </div>
                        <AddFriend loggedUser={loggingUser} setFriends={setFriends} />
                    </div>
                    <ContactCard userFriends={friends} setFriendChat={setFriendChat} />
                </div>
                <div className="col-9.5 chat" id="rightSide">
                    <div className="chat-header clearfix" id="chat-header" >
                        <img src={friendChat.avatar} />
                        <div className="m-b-0 chat-about" id="friendChat-nickname">{friendChat.nickname}</div>
                    </div>
                    <CurrentChat loggingUser={loggingUser} hisFriend={friendChat} />
                    <div className="input-group mb-3" id="chat-line">
                        <div className="input-group-prepend">
                            <button className="iconBoxes bi bi-image" id="imageUpload"><i> </i></button>
                            <button className="iconBoxes bi bi-camera-reels" id="videoUpload"><i ></i></button>
                            <button className="iconBoxes bi bi-mic" id="recordingUpload" ><i></i></button>
                        </div>
                        <input type="text" className="form-control" id="chatBar" placeholder="New message here..."></input>
                        <button className="btn btn btn-outline-dark" id="chatBox" type="button"> Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chatscreen