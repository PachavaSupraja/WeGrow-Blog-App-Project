import React from "react";
import {auth,provider} from "../firebase_cofig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

 function Login({setIsAuth}){
    let navigate=useNavigate();
    const signInWithGoogle=()=>{
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem("isAuth",true);
            setIsAuth(true);
            navigate("/");
        });
    }

    return(
        <div className="loginPage bg">
            <p>SignIn with Google to continue</p>
            <button className="login-with-google-btn " onClick={signInWithGoogle}>SignIn with Google</button>
            
        </div>
    );
 }
 export default Login;