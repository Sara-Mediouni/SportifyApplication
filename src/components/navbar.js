import React from 'react';
import './navbar.css';
import {BsFillPersonFill} from 'react-icons/bs';
import {GiTennisBall} from 'react-icons/gi';
import { useState } from 'react';

const Navbar = () => {
  const[fix,setfix]=useState(false)
function setfixed(){
if(window.scrollY > 80){
  setfix(true);
}else{
 setfix(false);
}}
window.addEventListener("scroll",setfixed)
    return (
        <div>
            <nav className= 'navbar nav-2 navbar-expand-lg border-bottom border-secondary'>
  <a className="navbar-brand" href="#"><i><GiTennisBall style={{color:'#85D236'}}/></i>Sportify</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="#">Clubs</a>
      <a className="nav-item nav-link" href="#">Salles</a>
      <a className="nav-item nav-link" href="#">Evènements</a>
      <a className="nav-item nav-link" href="#">Contacts</a>
      <a style={{fontSize:'30px',marginLeft:'180px',Right:0}}className="nav-icon " href="#"><i><BsFillPersonFill/></i></a>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;