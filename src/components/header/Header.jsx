import React, { useContext } from 'react'
import OlxLogo from '../../assets/images/svg/olxlogo.jsx';
import Search from '../../assets/images/svg/search.jsx';
import Arrow from '../../assets/images/svg/arrow.jsx';
import SellButton from '../../assets/images/svg/sellbuttonog.jsx';
import './header.css'
import { AuthContext } from '../../store/context.js';
import { getAuth } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'



function Header() {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const auth = getAuth()
  function logout (){
          auth.signOut();
          navigate('/login')

  }






  return (
    <div className='header'>
        <div className='logo'>
           <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
            <Search/>
              <input className="serchinput" placeholder='india'></input>
              <div className='arrow'>
                <Arrow/>
              </div>
        </div>
        <div className="productsearch">
                 <input className="serchinput" placeholder='Find cars,Mobile phones and more....'></input>
                 <div className='search2'> <Search/></div>
        </div>
        <div className="lang">
            <p>English</p>
             <Arrow/>
        </div>
        <div className="login">
            {user?user.displayName:<a href="/login" className='link'>Login</a>}
        </div>
        <div className="login">
            {user?<button className='logout' onClick={logout}>Logout</button>:<div></div>}
        </div>
        {user?<div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <a className="sell"href="/create"><span>SELL</span></a>
          </div>
        </div>:<div></div>}
         


    </div>
  )
}


export default Header