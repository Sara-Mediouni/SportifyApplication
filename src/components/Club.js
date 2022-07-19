import React from 'react';
import './club.css';
import img1 from '../images/received_630585981340841-1024x576.jpg';
import img2 from '../images/Capture.PNG'
import {IoLocationSharp} from 'react-icons/io5';
import {BsTelephoneFill} from 'react-icons/bs';
import {IoIosTime} from 'react-icons/io';
export default function Club() {
  return (
    <div class='club'>
    <section>  <h3>Nom club</h3>
<div class='container-club'>
    <img src={img1}></img> 
  
    <p className='details'>
       <ul> <li><span><IoLocationSharp/></span>Ennasr</li>
        <li><span><BsTelephoneFill/></span>27505841</li>
        <li><span><IoIosTime/></span>8h-21h</li></ul>
    </p>  
    <p className='description'>
   <span><IoLocationSharp/></span> 
    Lorem ipsum dolor sit 
amet, consectetur adipiscing
 elit. In fringilla ante mauris
, et pulvinar eros blandit sed. Fusce con
gue efficitur placerat. Donec mattis.
<img src={img2}/>
   </p>
  
</div> </section>
<section>
<h3>Palmares</h3>
<div className="container-pal">
   <h1> </h1>
</div></section>
    </div>
    
  )
}
