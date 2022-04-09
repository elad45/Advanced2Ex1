import { useDebugValue, useState } from "react";
import { Link } from "react-router-dom";
import { usersList } from "./usersDB";
import Message from "./Message";
//const[registeredPassword, setPassword] = useState("")



function Registerform() {

    const [getUser, addUser] = useState(usersList)
    const [userID, setID] = useState("")
    const [userNick, setNick] = useState("")
    const [userPassword, setPassword] = useState("");
    const [verifiedPassword, setPassword1] = useState("");
    const [userAvatar, setAvatar] = useState()
    
    const RegisterClick = (e) => {
        e.preventDefault();
        
        //checks if username already exists in the system
        if (usersList.find(x => x.username === userID)){
            alert("username already exists")
        }

        //checks if passwords are the same
        if (verifiedPassword !== userPassword) {
            alert("Password doesn't match");
        }
        
        
        
        else {
            //in case no avatar was inserted. ------CONDITION HAS TO BE CHECKED!!!!!!!----------------------------
            if (userAvatar==="")
                userAvatar = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            const newUser = {
                username: userID,
                password: userPassword,
                nickname: userNick,
                avatar: userAvatar,
                friends: "",
                chats: [new Message("Hello", new Date(), "Michael", "Boaz"), new Message("Hello", new Date(), "Boaz", "Michael")]
            }
            usersList.push(newUser)
            console.log(usersList)
        }
    }
    return (

        <form action="" onSubmit={RegisterClick}>
            <span className="d-flex justify-content-center">
                <div>
                    <div className="d-flex justify-content-center">
                        <h1>Register page</h1>
                    </div>
                    <br />

                    <div className="row mb-3">
                        <label htmlFor="loginID" className="col-sm-3 col-form-label">Username*</label>
                        <div className="col-sm-7">
                            <input type="text" onChange={(e) => setID(e.target.value)} className="form-control" id="loginID" placeholder="Enter your userName" value={userID} required />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="nickname" className="col-sm-3 col-form-label">Nickname*</label>
                        <div className="col-sm-7">
                            <input type="text" onChange={(e) => setNick(e.target.value)} className="form-control" id="nickname" placeholder="Enter your nickname" value={userNick} required />
                        </div>
                    </div>

                    
                    <div className="row mb-3">
                        <label htmlFor="Avatar" className="col-sm-3 col-form-label">Avatar</label>
                        <div className="col-sm-7">
                            <input type="Avatar" onChange={(e) => setAvatar(e.target.value)} className="form-control" id="Avatar" placeholder="Enter Avatar url" value={userAvatar} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="loginPassword" className="col-sm-3 col-form-label">Password*</label>
                        <div className="col-sm-7">
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="loginPassword" placeholder="Enter password" value={userPassword} required />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="verifyPassword" className="col-sm-3 col-form-label">Password verification*</label>
                        <div className="col-sm-7">
                            <input type="password" onChange={(e) => setPassword1(e.target.value)} className="form-control" id="verifyPassword" placeholder="Enter password again" value={verifiedPassword} required />
                        </div>
                    </div>

                    <div className="row-sm">
                        <button type="submit" className="btn btn-primary">Register</button>
                        <label className="m-1">Already registered? click <Link to="/">here</Link> to login</label>
                    </div>
                </div>
            </span>
        </form>
    );
}

export default Registerform