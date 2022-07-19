import React from 'react'
import './newslettres.css'
import img1 from '../images/josh-calabrese-zcYRw547Dps-unsplash (1).jpg';
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from 'framer-motion'
export default function 
() {
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
    <section ref={ref}>
     <motion.div 
 class="newsletter"> <h3 className='col-md-7 offset-md-3'>Abonne-toi à la newlettres pour reçevoir toutes nos nouveautés !</h3>
<form class="input-group mb-3 ">
  <input type="text" class="input-news text text-1 form-control" placeholder="Saisir email" aria-label="Saisir email" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button class="btn-news" type="button">Envoyer</button>
  </div>
</form></motion.div>
</section>
  )
}
