import React from 'react'
import './Chatscreen.css'
import ContactCard from './ContactCard';
import { useState, useEffect } from 'react'
import AddFriend from './AddFriend';
import usersList from '../usersDB';
import CurrentChat from './CurrentChat';
import Message from '../Message';
import AudioMsg from '../AudioMsg';

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

    const [userMessages, setMessage] = useState(loggingUser.chats)

    const element = document.getElementById("chat-messages-list");

    var handleSendMessage = () => {
        var newMessageText = document.getElementById("chatBar").value
        //blank message
        if (newMessageText == "") { return }
        var newMessage = new Message(newMessageText, new Date(), "text", loggingUser.nickname, friendChat.nickname)
        loggingUser.chats.push(newMessage);
        document.getElementById("chatBar").value = "";
        setMessage((messages) => {
            let newUserMessage = [...messages]
            newUserMessage.push(newMessage)
            return newUserMessage
        })
    }
    useEffect(() => {
        if (element)
            element.scrollIntoView(false)
    })

    var handleImageMsg = () => {
        console.log("upload Image");
        var thisElement = document.getElementById("imageInput");
        var reader = new FileReader();
        reader.onload = function () {
            var thisImage = reader.result;
            var newMessage = new Message(thisImage, new Date(), "image", loggingUser.nickname, friendChat.nickname);
            loggingUser.chats.push(newMessage);
            setMessage((messages) => {
                let newUserMessage = [...messages]
                newUserMessage.push(newMessage)
                return newUserMessage
            })

        };
        reader.readAsDataURL(thisElement.files[0]);
    };

    var handleVideoMsg = () => {
        console.log("upload Video");
        var thisElement = document.getElementById("videoInput");
        var reader = new FileReader();
        reader.onload = function () {
            var thisVideo = reader.result;
            var newMessage = new Message(thisVideo, new Date(), "video", loggingUser.nickname, friendChat.nickname);
            loggingUser.chats.push(newMessage);
            setMessage((messages) => {
                let newUserMessage = [...messages]
                newUserMessage.push(newMessage)
                return newUserMessage
            })

        };
        reader.readAsDataURL(thisElement.files[0]);
    };



    var clickImageInput = () => {
        document.getElementById("imageInput").click();
    }

    var clickVideoInput = () => {
        document.getElementById("videoInput").click();
    }

    return (
        <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="clearfix card chat-app" id="chat-window">
                <div className="people-list" id="people-list">
                    <div className="chat-header clearfix">
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
                            <input id="imageInput" type="file" onChange={handleImageMsg} accept="image/*" style={{ opacity: "0", width: "20%" }} hidden></input>

                            <button className="iconBoxes bi bi-image" id="imageUpload" onClick={clickImageInput}><i> </i></button>

                            <input id="videoInput" type="file" onChange={handleVideoMsg} accept="video/*" style={{ opacity: "0", width: "20%" }} hidden></input>

                            <button className="iconBoxes bi bi-camera-reels" id="videoUpload" onClick={clickVideoInput}><i ></i></button>


                            <button type="button" className="iconBoxes bi bi-mic" data-bs-toggle="modal" data-bs-target="#exampleModal" id="recordingUpload"></button>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Audio Recording</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <AudioMsg setFriendChat={setFriendChat} loggingUser={loggingUser} userMessages={userMessages} setMessage={setMessage}></AudioMsg>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="text" className="form-control" id="chatBar" placeholder="New message here..."></input>
                        <button className="btn btn btn-outline-dark" id="chatBox" type="button" onClick={handleSendMessage}> Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chatscreen