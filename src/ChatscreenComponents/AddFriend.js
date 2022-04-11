import { Button, Modal } from 'react-bootstrap/'
import { useState } from 'react'
import React from 'react'
import Chatscreen from './Chatscreen';

function AddFriend(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = () => {
        let friendNick  = document.getElementById("friendNick").value
        let usersList = JSON.parse(localStorage.getItem("usersList"))
        let friendUser = usersList.find(x => x.nickname === friendNick)
        console.log(friendUser)
        if (friendUser) {
            console.log("in addFriend") //debug
            props.setFriends((prevFriends)=>{
                let newFriends=[...prevFriends];
                newFriends.push(friendNick)
                return newFriends;
            })
            // props.loggedUser.friends.push(friendNick)
            console.log(props.loggedUser.friends); //debug    
        }
        handleClose();
            console.log("closing")
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>Add friend</Button>
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