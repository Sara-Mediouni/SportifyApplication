import React, { useEffect } from 'react';
import './club.css';
import img1 from '../../images/received_630585981340841-1024x576.jpg';
import img2 from '../../images/Capture.PNG';
import {BiCategoryAlt} from 'react-icons/bi';
import {IoLocationSharp} from 'react-icons/io5';
import {BsTelephoneFill,BsFillCalendarDateFill} from 'react-icons/bs';
import {RiMedalFill}from 'react-icons/ri'

import {IoIosTime} from 'react-icons/io';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function Club(props) {
  const { id } = useParams();
  const [club, setclub] = React.useState({club:""});
  const show=()=>{
    axios.get("http://localhost:3000/api/club/show/"+id)
     .then(response => {
       const club = response.data;
       setclub(club)
     })
}

  useEffect(() => {
  show()
  }, [id])

  return (
    <div className='club'>
    <section className='club-details col-md-12 col-sm-8'> 
       <h3>{club.Nom_club}</h3>
<div className='container-club col-md-12 col-sm-8'>
    <img src={"http://localhost:3000/images/"+club.Logo}></img> 
  
    <p className='details col-md-4 col-sm-4'>
       <ul> <li>{
          club.Activité !== undefined &&club.Activité.map((n)=>{
            return(<div><span><BiCategoryAlt/></span>{n}</div>)
          })
        }</li>
        <li>{
          club.Num_tel !== undefined && club.Num_tel.map((n)=>{
            return(<div><span><BsTelephoneFill/></span>{n}</div>)
          })
        }</li>
        <li>{
           club.Temps !== undefined &&club.Temps.map((t)=>{
            return (<div><span><IoIosTime/></span>{t.Jours+" "+t.Horaire}</div>)
          })
        }</li>
       </ul>
    </p>  
    <div className='description col-md-4 col-sm-4'>
    <span><IoLocationSharp/></span> <img src={img2}/><p>
   
  {
    club.Region+" "+club.Gouvernement
  }

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
