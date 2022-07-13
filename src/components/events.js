import React from 'react'
import './news.css'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from 'framer-motion';
import img1 from '../images/received_630585981340841-1024x576.jpg'
export default function Events() {
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
      animation.start({x:'100vw'})
    }
      },[inView]);
  return (
    <section ref={ref} class="events"> 
    <h3>Evènements</h3>
        <motion.div 
animate={animation} class="article">
       
            <img class="image" src={img1}/>
<p class="title"><span>20 Mars 2022</span><br/>9 h 00 min - 14 h 00 min</p>
            
        </motion.div>
    </section>
  )
}
