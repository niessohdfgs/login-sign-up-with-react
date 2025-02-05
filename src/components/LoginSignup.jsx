import React, { useState } from 'react';
import './LoginSignup.css'
const LoginSignup = () => {


const [action,setAction] = useState("Login");



    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>: <div className="input">
                    <img src='' />
                    <input type="text" placeholder='Name'/>
                </div>}
               
                <div className="input">
                    <img src='' />
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input">
                    <img src='' />
                    <input type="password"  placeholder='password'/>
                </div>
                {action==="Sign Up"?<div></div>:<div className="forgot-password">forgot ? <span>click here</span></div>}
                
                <div className="submit-container">
                    <div className={action==="Login" ? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>sign up</div>
                    <div className={action==="Sign Up" ? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>login</div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;