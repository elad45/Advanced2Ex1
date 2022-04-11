import {Link} from "react-router-dom";
import Chatscreen from "./ChatscreenComponents/Chatscreen";
import ContactCard from "./ChatscreenComponents/ContactCard";
import { usersList } from "./usersDB";

function LoginForm() {

    const loginClick = () => {
        let loggingPassword,loggingID;
        loggingPassword = document.getElementById("loginPassword").value
        loggingID = document.getElementById("loginID").value
    
        var loggingUser = usersList.find(x => x.username === loggingID)
        if (!loggingUser)
            alert("No such username")
        else if ((loggingUser) && loggingUser.password === loggingPassword) {
        localStorage.setItem("connectingUserID",loggingID)
        window.location.href = "/./chat"
        }
        else {
            alert("Wrong password")
        }
    }

    return (
        
        <form action="">
        <span className="d-flex justify-content-center">
            <div>
                <div className="d-flex justify-content-center">
                    <h1>Login page</h1>
                </div>
                <br />
                <div className="row mb-3">
                    <label htmlFor="loginID" className="col-sm-3 col-form-label col-form-label-sm">Username</label>
                    <div className="col-sm-7">
                        <input type="username" className="form-control form-control-sm" id="loginID" placeholder="Enter Username" required/>
                    </div>
                </div>
                
                <div className="row mb-3">
                    <label htmlFor="loginPassword" className="col-sm-3 col-form-label">Password</label>
                    <div className="col-sm-7">
                        <input type="password" className="form-control" id="loginPassword" placeholder="Enter password" required/>
                    </div>
                </div>
                <div className="row-sm">
                    <button type="button" className="btn btn-secondary" onClick = {loginClick}>Login</button>
                    <label className="m-1">Not registered? click <Link to="/register">here</Link> to register</label>
                </div>
            </div>            
        </span>
        </form>
        
    );
}

export default LoginForm