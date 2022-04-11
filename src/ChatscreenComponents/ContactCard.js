
const ContactCard = (props) => {
    //user's friend nickname 
    const userFriends = props.userFriends
    //all users DB
    const usersList = props.usersList
    //user's friends objects
    var friendsObjects = []

  function creatingFriendsArr(user) {

     if (userFriends.includes(user.nickname)) {
          friendsObjects.push(user)
      }
  }

  usersList.forEach(creatingFriendsArr)



    return (
        <div>
            {
            friendsObjects.map((friend) => (
                <div >
                    <div>
                        <li className="clearfix">
                            <img src={friend.avatar} alt="avatar" />
                            <div className="about">
                                <div className="name">{friend.nickname}</div>
                                <div className="status"> <i className="fa fa-circle offline" /> last seen 9 mins ago </div>
                            </div>
                        </li>

                    </div>
                </div>
            ))
            }
        </div>

    );

}

export default ContactCard