import React, { useState } from 'react';
import './navbar.css';
import {MdTravelExplore}from 'react-icons/md';
import {AiFillCloseCircle} from 'react-icons/ai';
import {PiDotsNineBold} from 'react-icons/pi'
function Navbar() {
  const [active,setActive] = useState();
  function showToggle(){
    console.log("clicked toggle")
    setActive('activeNavbar')
  }
  function hideToggle(){
    console.log("clicked close")
    setActive('navBar');
  }

  return (
   <section className='NavBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1> <MdTravelExplore className="icon" />Travel.</h1>
          </a>
        </div>
        <div className={`navBar ${active}`}>
          <ul className="navLists flex">
            <li className="NavItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="NavItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="NavItem">
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className="NavItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="NavItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="NavItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="NavItem">
              <a href="#" className="navLink">Contact</a>
            </li>
            <button className='btn'>
              <a href="#">Book Now</a>
            </button>
          </ul>

          <div onClick={hideToggle} className="closeNavBar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showToggle} className="toggleNavbar" >
          <PiDotsNineBold className="icon" />
        </div>
      </header>

   </section>
  )
}

export default Navbar
