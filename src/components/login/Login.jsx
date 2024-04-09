import React, { useState } from 'react'
import './login.css'
import Logo from '../../assets/images/olx-logo.png'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'



function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const auth = getAuth();
  const navigate = useNavigate()

  
  function handlesubmit(e){
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
          const user = userCredential.user;
          navigate("/")
    })
          
     .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Sign-in error:", errorCode, errorMessage);
       });

  }


  return (
    <div>
         <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlesubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type='submit'>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  )
}

export default Login