import React from 'react'
import './news.css';
import img1 from '../../images/53c54.jpg';
import img2 from '../../images/adel_sellimi_1657030641.jpg'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from 'framer-motion'
import axios from 'axios';
export default function Actualites() {
  const [events, setEvents] = React.useState([{id: 0}]);
  const show=()=>{
    axios.get("http://localhost:3000/api/event/")
    .then(response => {
      const events = response.data;
      setEvents(events)
      console.log(events)
  })};
  const{ref, inView}=useInView({
    threshold:0.2
  });
  const animation=useAnimation();
  useEffect(()=>{
if (inView){
  animation.start({
    x:0,
    transition:{
      type:'spring',duration:1,bounce:0.3
    }
  });
}if (!inView){
  animation.start({x:'-100vw'})
}
  },
  show()
  ,[inView]);
  return (
    <section ref={ref} className='news col-md-12 col-xs-10 col-xs-offset-1'>
<h3>Actualités</h3>
<motion.div 
animate={animation}  
className='article'>
  
<img src={"http://localhost:3000/uploadsevent/"+events[0].Image} className="image col-md-5 col-xs-3 col-xs-offset-1"/>
<p className='title'><span>{events[0].Titre}</span> {events[0].Description}</p>

</motion.div>
<motion.div 
animate={animation} 
 className='article2'>
<img src="" className="image2"/>
<p className='title2'><span>{events[1].Titre}</span> 
{events[1].Description}</p>

</motion.div>
<button className="addbutton">voir plus</button>
    </section>
  )
}
