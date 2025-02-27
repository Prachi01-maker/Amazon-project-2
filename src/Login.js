import React, { useState } from 'react';
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    return (
        <div className='login'>
            <Link to='/'>
            <img
               className="login__logo"
               scr='https://upload.wikimedia.org/wikipedia/common/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
               />
               </Link>

               <div className='login__container'>
                   <h1>Sign-in</h1>

                   <form>
                      <h5>E-mail</h5>
                      <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                      
                      <h5>Password</h5>
                      <input type='password' value={password} onChange={e => setpassword(e.target.value)} />


                      <button className='login__signInButton'>Sing In</button>
                   </form>

                   <p>
                        By signing-in you agree to the AMAZON FAKE CLONE conditions of use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
                   </p>

                   <button className='login__registerButton'>Create your Amazon Account</button> 
               </div>

        </div>
    )
}
                   

export default Login