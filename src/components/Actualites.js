import React from 'react'
import './news.css';
import img1 from '../images/53c54.jpg';
import img2 from '../images/adel_sellimi_1657030641.jpg'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from 'framer-motion'
export default function Actualites() {
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
  },[inView]);
  return (
    <section ref={ref} className='news col-md-12 col-xs-10 col-xs-offset-1'>
<h3>Actualités</h3>
<motion.div 
animate={animation}  
className='article'>
<img src={img1} class="image col-md-5 col-xs-3 col-xs-offset-1"/>
<p className='title'><span>Ons Jabeur</span> s'impose 
contre Elise Mertens
 à Wimbledon et file en
 quarts de finale</p>

</motion.div>
<motion.div 
animate={animation} 
 className='article2'>
<img src={img2} class="image2"/>
<p className='title2'><span>Club africain:</span> 
 Bertrand Marchand
 fera-t-il la paire avec Sellimi ?</p>

</motion.div>
    </section>
  )
}
