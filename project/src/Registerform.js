import Message from "./Message";
import usersList from './usersDB'
import {Link ,useNavigate} from 'react-router-dom'

function Registerform() {
    const navigate = useNavigate();

    const RegisterClick = (e) => {
        e.preventDefault();
        // inserting the user's input into variables
        var userID = document.getElementById("loginID").value;
        var userNick = document.getElementById("nickname").value;
        var userAvatar = document.getElementById("Avatar").files[0];
        if(userAvatar){
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                localStorage.setItem(userID ,reader.result)
            })
            reader.readAsDataURL(userAvatar)
        }
        var userPassword = document.getElementById("loginPassword").value;
        var passwordVerification = document.getElementById("verifyPassword").value;
        //checks if passwords are the same
        if (passwordVerification !== userPassword) {
            alert("Password doesn't match");
        }
        //checks if username already exists in the system
        else if (usersList.find(x => x.username === userID)) {
            alert("Username already exists")
        }
        else if (!userPassword){
            alert("Enter a password")
        }
        else {
            //in case no avatar was inserted. ------CONDITION HAS TO BE CHECKED!!!!!!!----------------------------
            if (!userAvatar) {
                localStorage.setItem(userID ,"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y")
            }

             var newUser = {
                username: userID,
                password: userPassword,
                nickname: userNick,
                avatar: userAvatar,
                friends: [],
                chats: [new Message("Hello", new Date(), "Michael", "Boaz"), new Message("Hello", new Date(), "Boaz", "Michael")]
            }
            usersList.push(newUser)
            localStorage.setItem('currentUser', newUser.username)
            navigate("/chat")


        }
    }
    return (
            <span className="d-flex justify-content-center">
                <div>
                    <div className="d-flex justify-content-center">
                        <h1>Register page</h1>
                    </div>
                    <br />

                    <div className="row mb-3">
                        <label htmlFor="loginID" className="col-sm-3 col-form-label">Username*</label>
                        <div className="col-sm-7">
                            <input type="text" className="form-control" id="loginID" placeholder="Enter your userName" required />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="nickname" className="col-sm-3 col-form-label">Nickname*</label>
                        <div className="col-sm-7">
                            <input type="text" className="form-control" id="nickname" placeholder="Enter your nickname" required />
                        </div>
                    </div>


                    <div className="row mb-3">
                        <label htmlFor="Avatar" className="col-sm-3 col-form-label">Avatar</label>
                        <div className="col-sm-7">
                            <input type="file" className="form-control form-control-sm" id="Avatar" placeholder="Enter Avatar url" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="loginPassword" className="col-sm-3 col-form-label">Password*</label>
                        <div className="col-sm-7">
                            <input type="password" className="form-control" id="loginPassword" placeholder="Enter password" required />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="verifyPassword" className="col-sm-3 col-form-label">Password verification*</label>
                        <div className="col-sm-7">
                            <input type="password" className="form-control" id="verifyPassword" placeholder="Enter password again" required />
                        </div>
                    </div>

                    <div className="row-sm">
                    <button type="button" onClick={RegisterClick} className="btn btn-primary">Register</button>
                        <label className="m-1">Already registered? click <Link to="/">here</Link> to login</label>
                    </div>
                </div>
            </span>
    );
}

export default Registerform