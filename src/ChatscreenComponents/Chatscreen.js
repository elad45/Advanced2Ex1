import React from 'react'
import './Chatscreen.css'
import ContactCard from './ContactCard';
import { Button, Modal } from 'react-bootstrap/'
import { useState } from 'react'
import AddFriend from './AddFriend';

function Chatscreen(props) {

    var loggedPersonUsername = localStorage.getItem("connectingUserID")
    console.log(loggedPersonUsername); // for testing
    var usersList = JSON.parse(localStorage.getItem("usersList"))
    var loggingUser = usersList.find(x => x.username === loggedPersonUsername)
    const [friends, setFriends] = useState(loggingUser.friends);
    const handleClick = () => {
        console.log("Yonadav")
        console.log(loggingUser.friends)
        
    }
    return (
        <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="container">
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="card chat-app">
                            <div id="plist" className="people-list">
                                <div className="chat-header clearfix row col-lg-6">
                                <AddFriend loggedUser={loggingUser}  setFriends = {setFriends} />
                                    <img src={loggingUser.avatar} alt="avatar" />
                                    <span>{loggingUser.nickname}</span>
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-search" /></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Search..." />
                                </div>
                                <ul className="list-unstyled chat-list mt-2 mb-0">
                                    <ContactCard userFriends = {friends} /*userFriends={loggingUser.friends}*/ usersList={usersList} />
                                </ul>
                            </div>
                            <div className="chat">
                                <div className="chat-header clearfix">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                            </a>
                                            <div className="chat-about">
                                                <h6 className="m-b-0">Aiden Chavez</h6>
                                                <small>Last seen: 2 hours ago</small>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 hidden-sm text-right">
                                            <a href="javascript:void(0);" className="btn btn-outline-secondary"><i className="fa fa-camera" /></a>
                                            <a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-image" /></a>
                                            <a href="javascript:void(0);" className="btn btn-outline-info"><i className="fa fa-cogs" /></a>
                                            <a href="javascript:void(0);" className="btn btn-outline-warning"><i className="fa fa-question" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-history">
                                    <ul className="m-b-0">
                                        <li className="clearfix">
                                            <div className="message-data text-right">
                                                <span className="message-data-time">10:10 AM, Today</span>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                            </div>
                                            <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                        </li>
                                        <li className="clearfix">
                                            <div className="message-data">
                                                <span className="message-data-time">10:12 AM, Today</span>
                                            </div>
                                            <div className="message my-message">Are we meeting today?</div>
                                        </li>
                                        <li className="clearfix">
                                            <div className="message-data">
                                                <span className="message-data-time">10:15 AM, Today</span>
                                            </div>
                                            <div className="message my-message">Project has been already finished and I have results to show you.</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="chat-message clearfix">
                                    <div className="input-group mb-0">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-send" /></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Enter text here..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Chatscreen