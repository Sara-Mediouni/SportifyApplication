import React from 'react'
import Footer from '../Footer/footer'
import Navbar from '../Navbar/navbar'
import './Home.css'
import TextAnimation from '../Assets/Text-animation'
import Actualites from '../HomeSections/Actualites'
import Newslettres from '../Newslettres/Newslettres'
import Events from '../HomeSections/events';
import {motion} from 'framer-motion';
export default function Home() {
  return (
    
    <motion.div className="content" initial={{opacity:0}}
    animate={{opacity:1}} transition={{duration:.4,stiffness:120}}>
   
    <section className='Slide '>
      <p>Trouvez votre <span><TextAnimation/></span> préféré plus proche de vous</p>
<motion.div initial={{x:'-100vw'}}
animate={{x:'-20vw',y:'70px'}}
transition={{delay:1.5,duration:1.5,type:'spring',stiffness:120}}><motion.button whileHover={{scale:1.1,boxShadow:"0px 0px 8px rgb(255,255,255"}} style={{marginLeft:"150px",marginTop:"60px"}} className="btn-slide col-md-12 col-xs-10 col-xs-offset-1">Découvrir</motion.button>
   </motion.div> </section>
    <Actualites/>
    
    <Events/>
    <Newslettres/>
  

    </motion.div>
  )
}
