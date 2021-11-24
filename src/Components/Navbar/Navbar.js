import React from "react";
import { Container, Navbar, NavDropdown, Nav} from 'react-bootstrap';
import "./Navbar.css";

let menuIcon = document.querySelector('menuIcon');
let nav = document.querySelector('overlay-menu');
const NavBar = ()=>{
    return (
          <>
      <nav id="navbar" class="">
  <div className="nav-wrapper">
   
    <div className="logo">
  
      <a href="#home" />
      
    </div>
    {/* <div className="socialIcons" >
<a class="icon" href="https://github.com">
<AiFillGithub size="3rem"/></a>
<a class="icon" href="https://linkedin.com">
<AiFillLinkedin size="3rem"/></a>
<a class="icon"href="https://instagram.com">
<AiFillInstagram size="3rem"/></a>

</div> */}
    <ul id="menu">
      <li><a href="#home">Home</a></li>
  <li><a href="#About">About</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>


<div className="menuIcon" onClick={()=>{
  let toggleIcon = document.querySelector('.menuIcon');
   let nav = document.querySelector('.overlay-menu');
   if (toggleIcon.className != 'menuIcon toggle' && nav.style.transform != 'translateX(0%)') {
                toggleIcon.className += ' toggle';
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
            } else {
                toggleIcon.className = 'menuIcon';
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
            }
}}>
  <span className="icon icon-bars"></span>
  <span className="icon icon-bars overlay"></span>
</div>


<div className="overlay-menu">
  <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
</div>

 
        </>

    )
}

export default NavBar;