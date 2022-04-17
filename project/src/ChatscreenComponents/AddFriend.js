import { Button, Modal } from 'react-bootstrap/'
import { useState } from 'react'
import React from 'react'
import usersList from '../usersDB';
import './AddFriend.css'

function AddFriend(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = () => {
        let friendNick  = document.getElementById("friendNick").value
        let friendUser = usersList.find(x => x.nickname === friendNick)
        if (friendUser) {
            props.setFriends((currentFriends)=>{
                let newFriends=[...currentFriends];
                newFriends.push(friendNick)
                return newFriends;
            })
        }
        handleClose();
    }

    return (
        <div>
            <Button id="addFriendButton" onClick={handleShow}>Add friend</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add friend to chat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input placeholder="Enter friend's name" id="friendNick"></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default AddFriend;