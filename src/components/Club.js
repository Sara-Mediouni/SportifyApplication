import React from 'react';
import './club.css';
import img1 from '../images/received_630585981340841-1024x576.jpg';
import img2 from '../images/Capture.PNG';
import {BiCategoryAlt} from 'react-icons/bi';
import {IoLocationSharp} from 'react-icons/io5';
import {BsTelephoneFill,BsFillCalendarDateFill} from 'react-icons/bs';
import {RiMedalFill}from 'react-icons/ri'

import {IoIosTime} from 'react-icons/io';
export default function Club() {
  return (
    <div class='club'>
    <section className='club-details col-md-12 col-sm-8'> 
       <h3>Nom club</h3>
<div class='container-club col-md-12 col-sm-8'>
    <img src={img1}></img> 
  
    <p className='details col-md-4 col-sm-4'>
       <ul> <li><span><BiCategoryAlt/></span>Taiekwondo</li>
        <li><span><BsTelephoneFill/></span>27505841</li>
        <li><span><IoIosTime/></span>8h-21h</li>
        <li><span><BsFillCalendarDateFill/></span>Lundi-Mardi-Vendredi</li></ul>
    </p>  
    <div className='description col-md-4 col-sm-4'>
    <img src={img2}/><p>
    <span><IoLocationSharp/></span>
    Lorem ipsum dolor sit 
amet, consectetur adipiscing
 elit. In fringilla ante mauris
, et pulvinar eros blandit sed. Fusce con
gue efficitur placerat. Donec mattis.

   </p>
  </div>
</div> </section>
<section className='palmares col-md-12 col-sm-8'>
<h3>Palmares</h3>
<div className="container-pal">
  <ul> <li><h1> <i><RiMedalFill style={{color:'#B5B5B5',marginRight:'30px'}}/></i>50</h1></li>
   <li><h1> <i><RiMedalFill style={{color:'#F5BF00',marginRight:'30px'}}/></i>50</h1></li>
   <li> <h1> <i><RiMedalFill style={{color:'#AB5200',marginRight:'30px'}}/></i>50</h1></li></ul>
</div></section>
    </div>
    
  )
}
