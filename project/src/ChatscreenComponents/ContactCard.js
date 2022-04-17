import usersList from "../usersDB"
import './ContactCard.css'

const ContactCard = (props) => {
    //user's friend nicknames
    const userFriends = props.userFriends
    //user's friends objects
    var friendsObjects = []

    function creatingFriendsArr(user) {

        if (userFriends.includes(user.nickname)) {
            friendsObjects.push(user)
        }
    }
    // creating the user's friends list out of our whole user Database
    usersList.forEach(creatingFriendsArr)

    return (
            <ul className="list-unstyled chat-list overflow-auto" id="friendsList">
                {
                    friendsObjects.map((friend) => (
                        <div onClick={() => { props.setFriendChat(friend) }}>
                            <li className="clearfix">
                                <img src={friend.avatar} />
                                <div className="about">
                                    <div className="name">{friend.nickname}</div>
                                    <div className="status"> last seen 9 mins ago </div>
                                </div>
                            </li>
                        </div>
                    ))
                }
            </ul>
    );
}

export default ContactCard