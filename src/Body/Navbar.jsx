import React from 'react'
import './Login.css'
import logo from '../assets/logo.png'
import { useEffect } from 'react'
export default function Navbar() {
  // const menuOpenButton = document.getElementById("#menu-open-button");

  // menuOpenButton.addEventListener("click", () => {
  //     document.body.classList.toggle('show-mobile-menu');

  // });
  useEffect(() => {
    const menuOpenButton = document.getElementById("menu-open-button"); // no '#'
    const menuClose = document.getElementById("menu-close-button");

    const toggleMenu = () => {
      document.body.classList.toggle('show-mobile-menu');
    };

    if (menuOpenButton) {
      menuOpenButton.addEventListener("click", toggleMenu);
    }
    if (menuClose) {
      menuClose.addEventListener("click", toggleMenu);
    }

    // Cleanup to remove event listener when component unmounts
    return () => {
      if (menuOpenButton) {
        menuOpenButton.removeEventListener("click", toggleMenu);
      }
      if (menuClose) {
        menuClose.addEventListener("click", toggleMenu);

      }
    };
  }, []);

  return (
    <nav className='navbar navbar-expand-sm bg-dark'>

      <div className='container-fluid inavbar'>

        <ul className='nav '>
          {/* <a href="src/assets/logo.png" className=''></a> */}
          <li> <img style={{ backgroundImage: `url(${logo})` }} className="logo" alt="" /></li>
          <li>
            <h4 className='text-white'>Insurance</h4></li>
          {/* <img style={{ backgroundImage: `url(${logo})` }} className="logo" alt="" /> */}

          {/* <li className='nav-item'><a className='nav-link' href="/">Home</a></li>
                    <li className='nav-item'><a className='nav-link' href="/crud">Policy</a></li>
                    <li className='nav-item'><a className='nav-link' href="/dashboard">Customer</a></li> */}

        </ul>

        <ul className='nav menu'>
          {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i className='fa fa-times'></i></span>
            </button>  */}
          {/* <button id='menu-close-button' className='fa fa-times p-3'></button> */}
          <li className='nav-item'><a className='nav-link' href="/">Home</a></li>
          <li className='nav-item'><a className='nav-link' href="/crud">Policy</a></li>
          <li className='nav-item'><a className='nav-link' href="/dashboard">Customer</a></li>
          <li className='nav-item'><a className='nav-link' href="/login">Login</a></li>
          <li className='nav-item'><a className='nav-link' href="">SignUp</a></li>
          <li className='nav-item'><a className='nav-link' href="">Profile</a></li>

        </ul>

        <button id='menu-open-button' className='fa fa-bars p-3'></button>
      </div >
      {/* <button id='menu-open-button' className='fa fa-bars p-3'></button> */}
    </nav >
  )
}
