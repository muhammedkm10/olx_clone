import React, { useState,useContext} from 'react'
import Logo from '../../assets/images/olx-logo.png'
import './signup.css'
import { getAuth,createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import {useNavigate} from 'react-router-dom'




function Signup() {
    const [username,setUsername] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail]  = useState("")
    const [password,setPass] = useState("")
    const navigate = useNavigate()
    const auth = getAuth()
    const firestore = getFirestore();

    const submithandler = (e) =>{
            e.preventDefault()
            createUserWithEmailAndPassword(auth,email,password)
            .then((auth1) => {
              updateProfile(auth.currentUser, {
                displayName:username
              })
          })
  
            
            .then(()=>{
              return addDoc(collection(firestore,'users'), {
                uid: auth.currentUser.uid, 
                username: username,
                phone: phone
              })
              .then(()=>{
                  navigate('/login')
              })
            })
            .catch((error)=>{
              console.log(error)
            })
           
    }
  return (
    <div>
        <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={submithandler}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
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
            onChange={(e)=>setPass(e.target.value)}
          />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    </div>
  )
}

export default Signup