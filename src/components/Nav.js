import React, { useState, useEffect } from 'react'
import logo from '../Images/logowithblackbg.JPG'
import profileicon from '../Images/profileicon.png'
import '../css/Nav.css'
import { useLocation } from 'react-router-dom';
import './Login'
import '../../node_modules/font-awesome/css/font-awesome.min.css';


const Nav = ({ user }) => {
  const [pathname, setpathname] = useState();
  const location = useLocation();
  const [localstoreuser, setlocalstoreuser] = useState()
  const [navbar, setnavbar] = useState(true)
  //  const localstoreuser = localStorage.getItem(user)

  useEffect(() => {
    setpathname(location.pathname)
    // console.log(location.pathname);
  }, [])

  useEffect(() => {
    setlocalstoreuser(localStorage.getItem("user"))
    // console.log(localStorage.getItem("user"))
  }, [])

  const onLogoutHandler = () => {
    window.location.href = "http://localhost:3000/login"
  }

  const onNavHandler = () => {
    navbar ? setnavbar(false) : setnavbar(true);
  }

  return (
    <div>

      {
      
        (pathname == ("/login")) ? null : (pathname == ("/")) ? null : <div class="card" id='navcard'>
        <div class="card-body">
          <img src={logo} className="logo" />
          <div id='navrightside'>
            <img id='profileicon' src={profileicon} />
            <label id='username' >{localstoreuser}</label>
            <button className='btn btn-danger' id='logoutbtn' onClick={onLogoutHandler}>Logout</button>
          </div>

          <div className='fixnavcontent'>
        <a href='/home'>Home</a>
                <a href='/movies'>Movies</a>
                <a href='/musics'>Music</a>
                <a href='/watchlist'>Watchlist</a>
                </div>


          <div className='navcontent' >
            <i onClick={onNavHandler} class="fa fa-bars" aria-hidden="true" id='icon' ></i>
            {navbar == true ?
              <div id='myLinks' style={{ display: 'none' }}>
                <a href='/home' id='navhome' >Home</a>
                <a href='/movies'>Movies</a>
                <a href='/musics'>Music</a>
                <a href='/watchlist'>Watchlist</a>
              </div> :
              <div id='myLinks' >
                <a href='/home' id='navhome'>Home</a>
                <a href='/movies'>Movies</a>
                <a href='/musics'>Music</a>
                <a href='/watchlist'>Watchlist</a>
                <a onClick={onLogoutHandler} style={{ color: 'white' }}>Logout</a>
                {/* <button   onClick={onLogoutHandler}>Logout</button> */}

              </div>
            }
          </div>
         
         
        </div>
      </div>}


    </div>

  )
}

export default Nav
